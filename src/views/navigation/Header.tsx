import * as React from 'react';
import {observer} from 'mobx-react';
import {appState, inventoryState} from '../../state/_Store';
import * as classNames from 'classnames';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../recoil/src/index';

export interface HeaderProps {
    pathname: any;
}

@observer
export default class Header extends React.Component<HeaderProps, any> {
render() {
        const {pathname} = this.props;

        let animateClass = 'animated fadeInUp pull-left';

        let dashboardView = pathname.pathname ===  '/';

        let inventoryView = pathname.pathname ===  'inventory' && inventoryState.slideIndex === 0;
        let inventoryCreate = pathname.pathname === 'inventory' && inventoryState.slideIndex === 1;

        let purchasingView = pathname ===  'purchasing';

        let manualPOView = pathname ===  'manualPO';

        return (
            <Layer overflow className="light a-Head">
                <Toolbar noBorder block className="p10">
                    {dashboardView ? <h1 className={animateClass}>Dashboard</h1> : null }

                    {inventoryView ? <h1 className={animateClass}>Inventory</h1> : null }
                    {inventoryCreate ? <h1 className={animateClass}>Add Item</h1> : null }
                    
                    {purchasingView ? <h1 className={animateClass}>Purchasing Dashboard</h1> : null }
                    
                    {manualPOView? <h1 className={animateClass}>Manual PO</h1> : null }

                    <Button iconPointer="down" right tabIndex={-1} simple size="small" icon={appState.menuEnabled ? "times" : "bars"} onClick={this.toggleSideMenu.bind(this) } className="ps5"></Button>
                    <Button right tabIndex={-1} simple size="small" icon={appState.nightmode ? "sun-o" : "moon-o"} onClick={this.toggleNightMode.bind(this) } className="ps5 mr5"></Button>
                </Toolbar>
            </Layer>
        )
    }

    toggleNightMode() {
        appState.toggleNightMode();
    }
    toggleSideMenu() {
        appState.toggleMenuEnabled();
    }
}

