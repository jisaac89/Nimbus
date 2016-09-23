import * as React from 'react';
import {observer} from 'mobx-react';
import {appState, inventoryState} from '../state/_Store';
import * as classNames from 'classnames';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../recoil/src/index';

import Login from './login/Login';

import Header from './navigation/Header';
import SideMenu from './navigation/SideMenu';
import DynamicNavigation from './navigation/DynamicNavigation';
import DynamicModals from './navigation/DynamicModals';
import DynamicFooter from './navigation/DynamicFooter';

interface P {
    children: any;
    location: any;
}

interface S {}

@observer
export default class Entry extends React.Component<P,S>{
    componentDidMount() {
        appState.initializeApp();
    }
    render() {        
        const self = this;
        let {children, location} = self.props;
        let content = React.cloneElement(this.props.children || <div />, { key: location });

        let appClass = classNames(
            'r-App',
            {'e-NightMode' : (appState.nightmode)}
        )

        let mobile = appState.mobile;
        let modalIsOpen = inventoryState.orderDetailsCreateOpen || inventoryState.addLocationModal;
        let footerIsOpen = true;
        if (!appState.signedIn) {
            return <Login />
        } else {
            return (
                <Layer scrollY fill overflow className={appState.nightmode ? 'e-NightMode' : ''}>
                    <Transform if={modalIsOpen} type="translate" axis="Y" amount={'-100px'}>
                        <div className="fixed-header">
                            <Header pathname={location} />
                            <DynamicNavigation pathname={location} />
                        </div>
                    </Transform>
                    <Shrink if={modalIsOpen}>
                        <Layer>
                            <SideMenu pathname={location} />
                            <Transform type="translate" axis='X' push={!mobile ? "right" : null} amount={!mobile ? "300px" : '-300px'} if={appState.menuEnabled}>
                                {content}
                            </Transform>
                        </Layer>
                    </Shrink>
                    <DynamicModals pathname={location} />
                    <DynamicFooter modalIsOpen={modalIsOpen} footerIsOpen={footerIsOpen} pathname={location} />
                </Layer>
            );
        }
    }
}
