import * as React from 'react';
import {observer} from 'mobx-react';
import {appState, inventoryState} from '../../state/_Store';
import * as classNames from 'classnames';
import {Align, Notifications, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../recoil/src/index';


@observer
export default class DynamicNavigation extends React.Component<any, any>{
    render() {
        const {pathname} = this.props;

        let dashboardView = pathname.pathname ===  '/';

        let inventoryView = pathname.pathname ===  'inventory';

        let purchasingView = pathname.pathname ===  'purchasing';
        
        let manualPOView = pathname.pathname ===  'manualPO';

        return (
            <div className="w100">
                <Toolbar block flush breadcrumbs className="p10 border-bottom">
                    <Button advanced tabIndex={-1} onClick={this.gotoPage.bind(this,  '') } pointer="right" checked={pathname ===  'dashboard'} size="small">Dashboard</Button>
                    
                    {inventoryView ? <Button advanced tabIndex={-1} onClick={this.gotoInventoryIndex.bind(this, 0) } pointer="right" checked={inventoryView} size="small">Inventory</Button> : null }
                  
                    {purchasingView ? <Button advanced tabIndex={-1} pointer="right" size="small">Purchasing</Button> : null }

                    {manualPOView ? <Button advanced tabIndex={-1} pointer="right" size="small">Manual PO</Button> : null }
                               
                </Toolbar>
            </div>
        )
    }
    gotoPage(page) {
        appState.gotoPage(page);
        if (page ===  'dashboard') {
            appState.menuEnabled = true;
        }
    }
    gotoInventoryIndex(n) {
        inventoryState.slideIndex = n;
    }
}