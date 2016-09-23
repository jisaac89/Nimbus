import * as React from 'react';
import {observer} from 'mobx-react';
import {appState, inventoryState} from '../../state/_Store';
import * as classNames from 'classnames';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../recoil/src/index';

@observer
export default class InventorySupplier extends React.Component<any, any> {
    constructor() {
        super();
        this.state = {
            dropdownTitle : 'Add Supplier',
            orderUnitTitle : 'e.g Case',
            issueUnitTitle : 'e.g Sleeve'
        }
    }
    changeSupplier(supplier) {

        let supplierName = supplier['_Array'];
        this.setState({
            dropdownTitle : supplierName
        })
        inventoryState.newProductOrderDetailObject['SupplierName'] = supplierName;
        inventoryState.newProductOrderDetailObject['CompanySupplierId'] = supplierName;
        this.gotoItemUnitStep(1);
    }
    gotoItemUnitStep(n) {
        inventoryState.itemUnitStep = n;
    }
    setItemUnitIssueUnits(IssueUnitId) {
        let issueName = IssueUnitId['_Array'];
        this.setState({
            issueUnitTitle : issueName
        })        
        inventoryState.newProductOrderDetailObject['IssueUnitId'] = issueName;
        this.gotoItemUnitStep(2);
    }
    setItemUnitOrderUnit(OrderUnitId) {
        let orderName = OrderUnitId['_Array'];
        this.setState({
            orderUnitTitle : orderName
        })        
        inventoryState.newProductOrderDetailObject['OrderUnitId'] = orderName;
        this.gotoItemUnitStep(3);
    }
    setStockAmount(stock) {
        
        inventoryState.newProductOrderDetailObject['IssueUnitMultiplier'] = stock;
        this.gotoItemUnitStep(4);
    }
    setSupplierSKU(SupplierSKU) {
        
        inventoryState.newProductOrderDetailObject['SupplierSKU'] = SupplierSKU;
        this.gotoItemUnitStep(5);    
    }
    createProductOrderUnit() {
        inventoryState.productOrderDetails['locations'] = [];
        inventoryState.createProductOrderUnit();
        inventoryState.orderDetailsCreateOpen = false;
        // inventoryState.newProductOrderDetailObject = {};
        this.gotoItemUnitStep(0);
    }
    setCost(amount) {
        inventoryState.newProductOrderDetailObject['Cost'] = amount;
        this.gotoItemUnitStep(6);    
    }
    render() {

        // let {isEditingCompanySuppliers} = inventoryState;

        let itemUnitStep = inventoryState.itemUnitStep;

        let issueUnits = inventoryState.newProductOrderDetailObject['IssueUnitId'];
        let orderUnit = inventoryState.newProductOrderDetailObject['OrderUnitId'];

        let chooseSupplierView = () => {
            return (
                <Toolbar spacing>
                    <h4 className="mb10"><a>1) First Choose a Supplier</a></h4>
                    <Dropdown material onRowSelect={this.changeSupplier.bind(this)} hideHeader dataSource={['Walmart', 'SamsClub', 'Tesco']} title={this.state.dropdownTitle||'Choose A Supplier'} />
                </Toolbar>
            )
        }

        let step1 = () => {
            return (
                <Emerge overflow enter="fadeIn">
                    <Toolbar className="mt10" spacing>
                        <h4 className="mb10"><a>2) In what <strong>unit</strong> will <strong>{inventoryState.itemName}</strong> be issued/removed?</a></h4>
                        <Dropdown material onRowSelect={this.setItemUnitIssueUnits.bind(this)} title={this.state.issueUnitTitle} dataSource={['Box', 'Sleeve', 'Case', 'Pack']} />
                    </Toolbar>
                </Emerge>
            )
        }

        let step2 = () => {
            return (
                <Emerge overflow enter="fadeIn">
                    <Toolbar className="mt10" spacing>
                        <h4 className="mb10"><a>3) How will you be ordering <strong>{inventoryState.itemName}</strong> from the supplier/vendor?</a></h4>
                        <Dropdown material onRowSelect={this.setItemUnitOrderUnit.bind(this)} title={this.state.orderUnitTitle} dataSource={['Box', 'Sleeve', 'Case', 'Pack']} />
                    </Toolbar>
                </Emerge>
            )
        }

        let step3 = () => {
            return (
                <Emerge enter="fadeIn">
                    <Toolbar className="mt10" spacing>
                        <h4 className="mb10"><a>4) How many <strong>{issueUnits}</strong> are in the <strong>{orderUnit}</strong>?</a></h4>
                        <Input onChange={this.setStockAmount.bind(this)} type="text" placeholder="Stock Amount" />
                    </Toolbar>
                </Emerge>
            )
        }

        let step4 = () => {
            return (
                <Emerge enter="fadeIn">
                    <Toolbar className="mt10" spacing>
                        <h4 className="mb10"><a>5) What is the Suppliers SKU for this order unit?</a></h4>
                        <Input onChange={this.setSupplierSKU.bind(this)} type="text" placeholder="#SKU Number" />
                    </Toolbar>
                </Emerge>
            )
        }

        let step5 = () => {
            return (
                <Emerge enter="fadeIn">
                    <Toolbar className="mt10" spacing>
                        <h4 className="mb10"><a>6) What is the cost of one <strong>{this.state.orderUnitTitle}</strong>?</a></h4>
                        <Input onChange={this.setCost.bind(this)} type="text" placeholder="Cost" />
                    </Toolbar>
                </Emerge>
            )
        }

        let confirmFormView = () => {
            return (
                <Emerge enter="fadeIn">
                    <Toolbar className="mt10" spacing>
                        <Button onClick={this.createProductOrderUnit.bind(this)} icon="plus" theme="primary">Create Product Order Unit</Button>
                    </Toolbar>
                </Emerge>
            )
        }

        return (
            <div>
                <Open className="z3" if={itemUnitStep >= 0}>
                    {chooseSupplierView()}
                </Open>
                <Open if={itemUnitStep >= 1}>
                    {step1()}
                </Open>
                <Open if={itemUnitStep >= 2}>
                    {step2()}
                </Open>
                <Open if={itemUnitStep >= 3}>
                    {step3()}
                </Open>
                <Open if={itemUnitStep >= 4}>
                    {step4()}
                </Open>
                <Open if={itemUnitStep >= 5}>
                    {step5()}
                </Open>
                <Open if={itemUnitStep >= 6}>
                    {confirmFormView()}
                </Open>
            </div>
        )
    }
};