import {observable, computed} from 'mobx';
import {browserHistory} from 'react-router';
import * as firebase from 'firebase';

export class InventoryState {
    @observable item : any = [];
    @observable itemName : any = '';
    @observable inventory : any = null;
    @observable inventoryIndex : any = 0;
    @observable slideIndex : number = 0;


    // order details
    @observable orderDetailsCreateOpen = false;
    @observable itemUnitStep = 0
    @observable newProductOrderDetailObject = {};
    @observable orderDetailLocationModal = false;
    @observable isEditingCompanySuppliers = false;
    @observable productOrderDetails = [];

    @observable addLocationModal = false;
    @observable locationName = '';


    @observable addingLocationForSupplier = '';
    @observable addingLocationForSupplierUnit = '';

    handleChangeItemName(name) {
        this.itemName = name;
    }

    cancelNewItem(){
        this.itemName = 0;
        this.inventoryIndex = 0;
        this.slideIndex = 0;
        this.productOrderDetails = [];
        this.item = [];
        this.itemName = '';
    }

    handleChange(name, value) {
        const item = this.item;
        item[name] = value;
    }

    gotoItemUnitStep(n) {
        this.gotoItemUnitStep = n;
    }

    toggleCreateNewOrderDetails(element, SupplierKey) {
        this.addingLocationForSupplier = SupplierKey;
        this.addingLocationForSupplierUnit = element.OrderUnitId;
        this.orderDetailsCreateOpen = !this.orderDetailsCreateOpen;
    }

    submitAddLocation() {
        this.productOrderDetails.forEach(element => {
            if(element.SupplierName === this.addingLocationForSupplier && element.OrderUnitId === this.addingLocationForSupplierUnit){
                element['locations'].push({
                    name: this.locationName
                })
            }
        });
    }

    listenForInventory() {
        let inventoryRef = firebase.database().ref('inventory/');
        
        inventoryRef.on('value', (snap : any) => {
            var items = [];
            snap.forEach((child) => {
                items.push(child.val());
            });
            this.inventory = items;
        });
    }

    createInventory() {
        const self = this;
        
        // Get a key for a new Question.
        let newInventoryKey = firebase.database().ref().child('inventory').push().key;
        
        let item = {
            Description1: self.itemName,
            key: newInventoryKey,
            orderDetail: self.productOrderDetails
        };

        // Write the new Question's data simultaneously in the Questions list and the user's Questions list.
        var updates = {};
        updates['/inventory/' + newInventoryKey] = item;

        firebase.database().ref().update(updates).then(function() {
            self.slideIndex = 0;
        }, function(error) {
            // error happened
        });
    }

    changeLocationName(name) {
        this.locationName = name
    }

    toggleAddLocationModal(){
        this.addLocationModal = !this.addLocationModal;
    }

    editItem(inventoryKey) {
        const self = this;
        firebase.database().ref('inventory/' + inventoryKey).set({
            Description1: self.item.Description1,
            key: inventoryKey
        }).then(function() {
            self.slideIndex = 0;
        }, function(error) {
            // error happened
        });
    }

    removeItem(inventoryKey) {
        const self = this;
        
        firebase.database().ref('inventory/' + inventoryKey).remove().then(function() {
            // success
        }, function(error) {
            // error happened
        });
    }

    gotoInventoryIndex(n) {
        this.inventoryIndex = n
    }

    createProductOrderUnit() {
        var self = this;
        self.productOrderDetails.push(this.newProductOrderDetailObject);
    }
}

export const inventoryState = new InventoryState();