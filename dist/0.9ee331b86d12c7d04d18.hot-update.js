webpackHotUpdate(0,{

/***/ 433:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(81), RootInstanceProvider = __webpack_require__(89), ReactMount = __webpack_require__(91), React = __webpack_require__(159); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n\"use strict\";\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\nvar __extends = undefined && undefined.__extends || function (d, b) {\n    for (var p in b) {\n        if (b.hasOwnProperty(p)) d[p] = b[p];\n    }function __() {\n        this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n};\nvar __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {\n    var c = arguments.length,\n        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,\n        d;\n    if ((typeof Reflect === \"undefined\" ? \"undefined\" : _typeof(Reflect)) === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {\n        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    }return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = undefined && undefined.__metadata || function (k, v) {\n    if ((typeof Reflect === \"undefined\" ? \"undefined\" : _typeof(Reflect)) === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar React = __webpack_require__(159);\nvar mobx_react_1 = __webpack_require__(335);\nvar _Store_1 = __webpack_require__(338);\nvar index_1 = __webpack_require__(347);\nvar InventorySupplier = function (_super) {\n    __extends(InventorySupplier, _super);\n    function InventorySupplier() {\n        _super.call(this);\n        this.state = {\n            dropdownTitle: 'Add Supplier',\n            orderUnitTitle: 'e.g Case',\n            issueUnitTitle: 'e.g Sleeve'\n        };\n    }\n    InventorySupplier.prototype.changeSupplier = function (supplier) {\n        var supplierName = supplier['_Array'];\n        this.setState({\n            dropdownTitle: supplierName\n        });\n        _Store_1.inventoryState.newProductOrderDetailObject['SupplierName'] = supplierName;\n        _Store_1.inventoryState.newProductOrderDetailObject['CompanySupplierId'] = supplierName;\n        this.gotoItemUnitStep(1);\n    };\n    InventorySupplier.prototype.gotoItemUnitStep = function (n) {\n        _Store_1.inventoryState.itemUnitStep = n;\n    };\n    InventorySupplier.prototype.setItemUnitIssueUnits = function (IssueUnitId) {\n        this.setState({\n            dropdownTitle: this.state.issueUnitTitle\n        });\n        _Store_1.inventoryState.newProductOrderDetailObject['IssueUnitId'] = IssueUnitId;\n        this.gotoItemUnitStep(2);\n    };\n    InventorySupplier.prototype.setItemUnitOrderUnit = function (OrderUnitId) {\n        this.setState({\n            dropdownTitle: this.state.orderUnitTitle\n        });\n        _Store_1.inventoryState.newProductOrderDetailObject['OrderUnitId'] = OrderUnitId;\n        this.gotoItemUnitStep(3);\n    };\n    InventorySupplier.prototype.setStockAmount = function (stock) {\n        _Store_1.inventoryState.newProductOrderDetailObject['IssueUnitMultiplier'] = stock;\n        this.gotoItemUnitStep(4);\n    };\n    InventorySupplier.prototype.setSupplierSKU = function (SupplierSKU) {\n        _Store_1.inventoryState.newProductOrderDetailObject['SupplierSKU'] = SupplierSKU;\n        this.gotoItemUnitStep(5);\n    };\n    InventorySupplier.prototype.createProductOrderUnit = function () {\n        _Store_1.inventoryState.productOrderDetails['locations'] = [];\n        _Store_1.inventoryState.createProductOrderUnit();\n        _Store_1.inventoryState.orderDetailsCreateOpen = false;\n        this.gotoItemUnitStep(0);\n    };\n    InventorySupplier.prototype.setCost = function (amount) {\n        _Store_1.inventoryState.newProductOrderDetailObject['Cost'] = amount;\n        this.gotoItemUnitStep(6);\n    };\n    InventorySupplier.prototype.render = function () {\n        var _this = this;\n        var itemUnitStep = _Store_1.inventoryState.itemUnitStep;\n        var issueUnits = _Store_1.inventoryState.newProductOrderDetailObject['IssueUnitId'];\n        var orderUnit = _Store_1.inventoryState.newProductOrderDetailObject['OrderUnitId'];\n        var chooseSupplierView = function chooseSupplierView() {\n            return React.createElement(index_1.Toolbar, { spacing: true }, React.createElement(\"h4\", { className: \"mb10\" }, React.createElement(\"a\", null, \"1) First Choose a Supplier\")), React.createElement(index_1.Dropdown, { material: true, onRowSelect: _this.changeSupplier.bind(_this), hideHeader: true, dataSource: ['Walmart', 'SamsClub', 'Tesco'], title: _this.state.dropdownTitle || 'Choose A Supplier' }));\n        };\n        var step1 = function step1() {\n            return React.createElement(index_1.Emerge, { overflow: true, enter: \"fadeIn\" }, React.createElement(index_1.Toolbar, { className: \"mt10\", spacing: true }, React.createElement(\"h4\", { className: \"mb10\" }, React.createElement(\"a\", null, \"2) In what \", React.createElement(\"strong\", null, \"unit\"), \" will \", React.createElement(\"strong\", null, _Store_1.inventoryState.itemName), \" be issued/removed?\")), React.createElement(index_1.Dropdown, { onRowSelect: _this.setItemUnitIssueUnits.bind(_this), title: _this.state.issueUnitTitle, dataSource: ['Box', 'Sleeve', 'Case', 'Pack'] })));\n        };\n        var step2 = function step2() {\n            return React.createElement(index_1.Emerge, { overflow: true, enter: \"fadeIn\" }, React.createElement(index_1.Toolbar, { className: \"mt10\", spacing: true }, React.createElement(\"h4\", { className: \"mb10\" }, React.createElement(\"a\", null, \"3) How will you be ordering \", React.createElement(\"strong\", null, _Store_1.inventoryState.itemName), \" from the supplier/vendor?\")), React.createElement(index_1.Dropdown, { onRowSelect: _this.setItemUnitOrderUnit.bind(_this), title: _this.state.orderUnitTitle, dataSource: ['Box', 'Sleeve', 'Case', 'Pack'] })));\n        };\n        var step3 = function step3() {\n            return React.createElement(index_1.Emerge, { enter: \"fadeIn\" }, React.createElement(index_1.Toolbar, { className: \"mt10\", spacing: true }, React.createElement(\"h4\", { className: \"mb10\" }, React.createElement(\"a\", null, \"4) How many \", React.createElement(\"strong\", null, issueUnits), \" are in the \", React.createElement(\"strong\", null, orderUnit), \"?\")), React.createElement(index_1.Input, { onChange: _this.setStockAmount.bind(_this), type: \"text\", placeholder: \"Stock Amount\" })));\n        };\n        var step4 = function step4() {\n            return React.createElement(index_1.Emerge, { enter: \"fadeIn\" }, React.createElement(index_1.Toolbar, { className: \"mt10\", spacing: true }, React.createElement(\"h4\", { className: \"mb10\" }, React.createElement(\"a\", null, \"5) What is the Suppliers SKU for this order unit?\")), React.createElement(index_1.Input, { onChange: _this.setSupplierSKU.bind(_this), type: \"text\", placeholder: \"#SKU Number\" })));\n        };\n        var step5 = function step5() {\n            return React.createElement(index_1.Emerge, { enter: \"fadeIn\" }, React.createElement(index_1.Toolbar, { className: \"mt10\", spacing: true }, React.createElement(\"h4\", { className: \"mb10\" }, React.createElement(\"a\", null, \"6) What is the Cost order unit?\")), React.createElement(index_1.Input, { onChange: _this.setCost.bind(_this), type: \"text\", placeholder: \"Cost\" })));\n        };\n        var confirmFormView = function confirmFormView() {\n            return React.createElement(index_1.Emerge, { enter: \"fadeIn\" }, React.createElement(index_1.Toolbar, { className: \"mt10\", spacing: true }, React.createElement(index_1.Button, { onClick: _this.createProductOrderUnit.bind(_this), icon: \"plus\", theme: \"primary\" }, \"Create Product Order Unit\")));\n        };\n        return React.createElement(\"div\", null, React.createElement(index_1.Open, { className: \"z3\", if: itemUnitStep >= 0 }, chooseSupplierView()), React.createElement(index_1.Open, { if: itemUnitStep >= 1 }, step1()), React.createElement(index_1.Open, { if: itemUnitStep >= 2 }, step2()), React.createElement(index_1.Open, { if: itemUnitStep >= 3 }, step3()), React.createElement(index_1.Open, { if: itemUnitStep >= 4 }, step4()), React.createElement(index_1.Open, { if: itemUnitStep >= 5 }, step5()), React.createElement(index_1.Open, { if: itemUnitStep >= 6 }, confirmFormView()));\n    };\n    InventorySupplier = __decorate([mobx_react_1.observer, __metadata('design:paramtypes', [])], InventorySupplier);\n    return InventorySupplier;\n}(React.Component);\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = InventorySupplier;\n;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(262); if (makeExportsHot(module, __webpack_require__(159))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"InventorySupplier.tsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/views/inventory/InventorySupplier.tsx\n ** module id = 433\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/views/inventory/InventorySupplier.tsx?");

/***/ }

})