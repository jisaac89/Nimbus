import * as React from 'react';
import {observer} from 'mobx-react';
import {appState, inventoryState} from '../../state/_Store';
import * as classNames from 'classnames';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../recoil/src/index';

@observer
class LocationsTemplate extends React.Component<any,any>{
    render() {
        let {element} = this.props;
        if (element && element.locations && element.locations.length > 0) {
            return (
                <Table columns={[{name: 'name', title: 'Location'}]} className="pl60" dataSource={element.locations}></Table>
            )
        } else return null;
    }
}

@observer
export default class InventoryOrderDetails extends React.Component<any, any> {
    toggleCreateNewOrderDetails(element, SupplierKey){
        inventoryState.toggleCreateNewOrderDetails(element, SupplierKey);
    }
    OrderUnitName(item, key) {
        return (
            <div key={key}>
                <Button size="small">{item}</Button>
            </div>
        )
    }
    locationsTemplate(element) {
        return <LocationsTemplate element={element}></LocationsTemplate>
    }
    Equals(item, key) {
        return (
            <div key={key}>
                <strong>=</strong>
            </div>
        )
    }
    IssueUnitName(item, key) {
        return (
            <div key={key}>
                <Button size="small">{item}</Button>
            </div>
        )        
    }
    orderCost(cost, key) {
        return (
            <div key={key}>
                <strong>${cost}</strong>
            </div>
        )
    }

    issueCost(element, key) {
        return (
            <div key={key}>
                <strong>${element.IssueUnitMultiplier / element.Cost}</strong>
            </div>
        )
    }

    detailTemplate(SupplierKey) {

        const self = this;

        let orders = [];

        inventoryState.productOrderDetails.forEach(orderDetail => {
            if (orderDetail.SupplierName === SupplierKey['_Array']) {
                orders.push(orderDetail);
            }
        });

        let locationsTemplate = (element) => {
            if(element.locations.length > 0) {
                return (
                    <Toolbar flush size="small">
                        <Button>{element.locations.length} Location(s)</Button><Button onClick={self.toggleAddLocationModal.bind(self, element, SupplierKey)}  icon="plus" />
                    </Toolbar>
                )
            } else {
                return (
                    <Toolbar size="small">
                        <Button onClick={self.toggleAddLocationModal.bind(self, element, SupplierKey)}  icon="exclamation-triangle" theme="error">Add Location</Button>
                    </Toolbar>
                )
            }
        }

        let menuTemplate = (element) =>{
            return (
                <Toolbar flush size="small">
                    <Button theme="primary" icon="pencil">Edit Item</Button>
                </Toolbar>
            )
        }

        let columns = [
            {name: 'Cost', title: 'Order Cost', template: this.orderCost.bind(this), width:120},
            {name: 'OrderUnitId', title:"Order Unit", template: this.OrderUnitName.bind(this),width: 120 },
            {title: '=',template: this.Equals.bind(this), width: 40},
            { name: 'IssueUnitMultiplier', title: 'Stock Amount', width: 150 },
            {name: 'IssueUnitId', title:'Issue Units', template: this.IssueUnitName.bind(this), width: 150},
            {title: 'Issue Cost', template: this.issueCost.bind(this)},
            {
                title: 'Locations',
                template: locationsTemplate,
                width: 160
            },
            {
                title: 'Menu',
                template: menuTemplate,
                width: 120
            },
        ]

        return (
            <div className="pl60">
                <Table detailTemplate={this.locationsTemplate.bind(this)} dataSource={orders} columns={columns} />
            </div>
        )
    }
    toggleAddLocationModal(element, SupplierKey){
        inventoryState.toggleAddLocationModal(element, SupplierKey);
    }
    render() {

        const self = this;

        let supplierKeys : any = [];
        let supplierData = [];

        let createList = (element, index) => {
            if(!supplierKeys.includes(element.SupplierName)){    
                supplierKeys.push(element.SupplierName);
            }
        }

        for (let key in supplierData) {
            console.log(supplierData[key])
        }
        
        console.log(supplierKeys);

        let newDataSource = [];

        let createSupplierList = (element) =>{ 
            newDataSource.push({
                '_Array' : element
            })
        }
        
        return (
            <div className="ps10">
                <Toolbar spacing>
                    <Button required={inventoryState.productOrderDetails.length === 0} icon="plus" onClick={this.toggleCreateNewOrderDetails.bind(this) }>Create New Product Order Detail</Button>
                </Toolbar>
                <div className="ptb10">
                    {inventoryState.productOrderDetails.map(createList)}
                    {supplierKeys.map(createSupplierList)}
                    <Table 
                        searchableKeys={['_Array']} 
                        searchTitle={'Search By Supplier Name'} 
                        detailTemplateSelectedElements={newDataSource}
                        dataSource={newDataSource} 
                        columns={[{name: '_Array', title: 'Supplier'}]}
                        detailTemplate={this.detailTemplate.bind(this)} 
                        detailTemplateHideToggle
                    />
                </div>
            </div>
        )
    }
};