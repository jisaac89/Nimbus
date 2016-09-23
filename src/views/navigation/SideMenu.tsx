import * as React from 'react';
import {observer} from 'mobx-react';
import {appState} from '../../state/_Store';
import * as classNames from 'classnames';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../recoil/src/index';

export interface SideMenuProps {
    pathname: string;
}

@observer
export default class SideMenu extends React.Component<SideMenuProps, any> {
    render() {

        const {pathname} = this.props;

        return (
            <SlideIn from="right" className="w300px border-left p10" if={appState.menuEnabled}>
                <Toolbar block vertical spacing noRadius>
                        <Button advanced tabIndex={-1} block size="large" icon='th' checked={pathname ===  "dashboard"} onClick={this.gotoPage.bind(this,  "/") }>Dashboard</Button>
                        <Button advanced tabIndex={-1} block size="large" icon='shopping-bag' checked={pathname ===  "inventory"} onClick={this.gotoPage.bind(this, "inventory") }>Inventory</Button>
                        <Button advanced tabIndex={-1} block size="large" icon='credit-card' checked={pathname ===  "purchasing"} onClick={this.gotoPage.bind(this,  "purchasing") }>Purchasing</Button>
                        <Button advanced tabIndex={-1} block size="large" icon='truck' checked={pathname ===  "suppliers"} onClick={this.gotoPage.bind(this,  "suppliers") }>Suppliers</Button>
                        <Button advanced tabIndex={-1} block size="large" icon='map' checked={pathname ===  "locations"} onClick={this.gotoPage.bind(this,  "locationType") }>Location Types</Button>
                        <Button tabIndex={-1} block size="large" icon="sign-out" right onClick={this.signOut}>Sign Out</Button>
                </Toolbar>
            </SlideIn>
        )
    }
    gotoPage(page) {
        appState.gotoPage(page);
        appState.menuEnabled = false;
        if (page ===  'dashboard') {
            appState.menuEnabled = true;
        }
    }
    signOut = () => {
        appState.toggleSignedIn();
        appState.gotoPage( '');
    }
}

