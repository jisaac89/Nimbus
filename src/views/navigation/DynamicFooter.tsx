import * as React from 'react';
import {observer} from 'mobx-react';
import {appState, inventoryState} from '../../state/_Store';
import * as classNames from 'classnames';
import {Align, Notifications, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../recoil/src/index';

import InventoryFooter from '../inventory/InventoryFooter';

interface P {
    pathname ? : any;
    footerIsOpen? : any;
    modalIsOpen ? : any;
}

interface S {}

@observer
export default class DynamicFooter extends React.Component<P,S>{
render() {

        const {pathname, footerIsOpen, modalIsOpen} = this.props;

        let paneIsOpen = pathname !==  'dashboard';
        let className = 'light border-top p10';

        return (
            <SlideIn fixed from="bottom" if={footerIsOpen}>
                <Transform type='translate' axis='Y' amount='-111px' if={paneIsOpen}>
                    <Notifications dataSource={appState.notifications}  />
                </Transform>
                <SlideIn if={!modalIsOpen && paneIsOpen && (pathname.pathname ===  'inventory' && inventoryState.slideIndex === 1 ) } fixed from="bottom">
                    <InventoryFooter title={"Inventory"} className={className} />
                </SlideIn>
            </SlideIn>
        )
    }
    gotoPage(page) {
        appState.gotoPage(page);
        appState.menuEnabled = false;
        if (page ===  'dashboard') {
            appState.toggleMenuEnabled();
        }
    }
    signOut = () => {
        appState.toggleSignedIn();
        appState.gotoPage('');
    }
}
