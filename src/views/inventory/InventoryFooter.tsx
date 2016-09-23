import * as React from 'react';
import {observer} from 'mobx-react';
import {appState, inventoryState} from '../../state/_Store';
import * as classNames from 'classnames';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../recoil/src/index';

@observer
export default class InventoryFooter extends React.Component<any, any>{
    cancelNewItem(){
        inventoryState.cancelNewItem();
    }
    gotoInventoryIndex(n){
        inventoryState.gotoInventoryIndex(n);
    }
    createInventory() {
        inventoryState.createInventory();
        inventoryState.cancelNewItem();
    }
    toggleCreateNewOrderDetails(){
        inventoryState.orderDetailsCreateOpen = true;
    }
    render() {
        
            return (
                <div className={this.props.className}>
                    <Toolbar block vertical spacing className={"text-center"}>
                        <Button onClick={this.cancelNewItem.bind(this)} block size="large">Cancel</Button>
                        <Open if={inventoryState.itemName && inventoryState.inventoryIndex === 0 && inventoryState.productOrderDetails.length === 0}>
                            <Button onClick={this.gotoInventoryIndex.bind(this, 1)} block size="large" theme={"primary"}>Continue to set-up order details.</Button>
                        </Open>
                        <Open if={!inventoryState.itemName && inventoryState.inventoryIndex === 0}>
                            <Button block size="large" theme={"error"}>Must atleast have <strong>Item name</strong> to continue</Button>
                        </Open>
                        <Open if={inventoryState.productOrderDetails.length > 0}>
                            <Button onClick={this.createInventory.bind(this)} block size="large" theme={"primary"}>Create</Button>
                        </Open>
                        <Open if={inventoryState.itemName && inventoryState.inventoryIndex === 1 && inventoryState.productOrderDetails.length === 0}>
                            <Button onClick={this.toggleCreateNewOrderDetails.bind(this)} block size="large" theme={"error"}>Create atleast <strong>one</strong> order detail</Button>
                        </Open>
                    </Toolbar>
                </div>
            )

    }
}