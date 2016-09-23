import * as React from 'react';
import {observer} from 'mobx-react';
import {appState, inventoryState} from '../../state/_Store';
import * as classNames from 'classnames';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../recoil/src/index';

import InventoryOrderDetails from './InventoryOrderDetails';

interface P {
    open : boolean;
}
interface S {}

@observer
export default class InventoryCreate extends React.Component<P,S>{
    handleChangeInventory(name, value) {
        inventoryState.handleChange(name, value);
    }
    handleChangeItemName(name) {
        inventoryState.handleChangeItemName(name);
    }
    createInventory() {
        inventoryState.createInventory();
    }
    gotoInventoryIndex(n){
        inventoryState.gotoInventoryIndex(n);
    }
    render() {
        const props = this.props;
        const {handleChangeInventory, createInventory, gotoInventoryIndex, handleChangeItemName} = this;
        let {open} = props;
        return (
            <Open if={open}>
                <Toolbar theme="tabs" spacing className="mb10 p10 pb0">
                    <Button size="small" checked={inventoryState.inventoryIndex === 0} onClick={gotoInventoryIndex.bind(this, 0)} advanced>Basic Info <span className="red">*</span></Button>
                    <Button disabled={!inventoryState.itemName} size="small" checked={inventoryState.inventoryIndex === 1} onClick={gotoInventoryIndex.bind(this, 1)} advanced>Order Details <span className="red">*</span></Button>
                </Toolbar>
                <Wizard slideIndex={inventoryState.inventoryIndex}>
                    <Toolbar vertical spacing block className="p10 pt0">
                        <Input required={!inventoryState.itemName} onChange={handleChangeItemName.bind(this)} block type="text" placeholder="Item Name" />
                        <Input block placeholder="Secondary Description" />
                        <Input block placeholder="Notes" />
                    </Toolbar>
                    <div>
                        <InventoryOrderDetails />
                    </div>
                    <Toolbar vertical spacing block>
                        <Input block placeholder="Location Name" />
                        <Input block placeholder="Description" />
                        <Input block placeholder="Amount" /> 
                    </Toolbar>
                    <Toolbar vertical spacing block>
                        <Input block placeholder="At what point do you want to place an order?" />
                        <Input block placeholder={"How many " +inventoryState.item.Description1+" do you want to order from the supplier when you reach the minimum?"} />
                        <Input block placeholder="Notes" />
                    </Toolbar>
                    <Toolbar vertical spacing block>
                        <Input block placeholder="How many issue units will you be adding?" />
                    </Toolbar>
                </Wizard>

            </Open>
        )
    }
}

// <ProductOrderDetails supplierState={this.props.supplierState} inventoryState={this.props.inventoryState} />
                    