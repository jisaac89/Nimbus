import * as React from 'react';
import {observer} from 'mobx-react';
import {appState, inventoryState} from '../../state/_Store';
import * as classNames from 'classnames';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../recoil/src/index';

import InventorySupplier from './InventorySupplier';

@observer
export default class InventoryModals extends React.Component<any, any>{
    toggleCreateNewOrderDetails() {
        inventoryState.orderDetailsCreateOpen = false;
        inventoryState.itemUnitStep = 0;
        inventoryState.newProductOrderDetailObject = {}; 
    }
    toggleOrderDetailLocationModal() {
        inventoryState.orderDetailLocationModal = false;
    }
    toggleAddLocationModal(){
        inventoryState.toggleAddLocationModal();
    }
    changeLocationName(name){
        inventoryState.changeLocationName(name);
    }
    submitAddLocation() {
        inventoryState.submitAddLocation.bind(this);
    }
    render() {
        
         return (
             <Layer fill>
                <Modal title='New Product Order Detail' open={inventoryState.orderDetailsCreateOpen} onClose={this.toggleCreateNewOrderDetails.bind(this)}>
                    <div className="p10">
                        <InventorySupplier />
                    </div>
                </Modal>
                <Modal title='Add Location' fullScreen open={inventoryState.addLocationModal} onClose={this.toggleAddLocationModal.bind(this)}>
                    <div className="p10">
                        <Toolbar vertical spacing block>
                            <Input required={inventoryState.locationName === ''} onChange={this.changeLocationName.bind(this)} block placeholder="Location Name" />
                            <Input block placeholder="What is your minimum restock amount?" />
                            <Input block placeholder="How many do you want to order from the supplier when you reach the minimum?" />
                            <Input block placeholder="Notes" />
                            <Input block placeholder="How many issue units will you be adding?" />
                            <Button onClick={this.submitAddLocation.bind(this)} icon="plus" theme="primary">Add Location</Button>
                        </Toolbar>
                    </div>
                </Modal>
             </Layer>
         )

    }
}