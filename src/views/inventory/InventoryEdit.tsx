import * as React from 'react';
import {observer} from 'mobx-react';
import {appState, inventoryState} from '../../state/_Store';
import * as classNames from 'classnames';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../recoil/src/index';

interface P {
    open : boolean;
}
interface S {}

@observer
export default class InventoryEdit extends React.Component<P,S>{
    handleChangeItem(name, value) {
        inventoryState.handleChange(name, value);
    }
    editItem() {
        inventoryState.editItem(inventoryState.item.key);
    }
    render() {
        const props = this.props;
        const {handleChangeItem, editItem} = this;
        let {open} = props;

        let itemObject = inventoryState.item;
        let {name} = itemObject;

        return (
            <Open if={open}>
                <Toolbar block vertical spacing className="p10">
                    <Input value={name} onChange={handleChangeItem.bind(this, 'Description1')} block type="text" placeholder="Name" />
                    <Button onClick={editItem.bind(this)} icon="star"> Save</Button> 
                </Toolbar>
            </Open>
        )
    }
}
