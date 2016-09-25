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
                    <Layer>
                        <InventoryOrderDetails />
                    </Layer>
                </Wizard>
            </Open>
        )
    }
}