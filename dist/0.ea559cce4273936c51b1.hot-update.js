webpackHotUpdate(0,{

/***/ 432:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(81), RootInstanceProvider = __webpack_require__(89), ReactMount = __webpack_require__(91), React = __webpack_require__(159); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n\"use strict\";\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\nvar __extends = undefined && undefined.__extends || function (d, b) {\n    for (var p in b) {\n        if (b.hasOwnProperty(p)) d[p] = b[p];\n    }function __() {\n        this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n};\nvar __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {\n    var c = arguments.length,\n        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,\n        d;\n    if ((typeof Reflect === \"undefined\" ? \"undefined\" : _typeof(Reflect)) === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {\n        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    }return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = undefined && undefined.__metadata || function (k, v) {\n    if ((typeof Reflect === \"undefined\" ? \"undefined\" : _typeof(Reflect)) === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar React = __webpack_require__(159);\nvar mobx_react_1 = __webpack_require__(335);\nvar _Store_1 = __webpack_require__(338);\nvar index_1 = __webpack_require__(347);\nvar InventorySupplier_1 = __webpack_require__(433);\nvar InventoryModals = function (_super) {\n    __extends(InventoryModals, _super);\n    function InventoryModals() {\n        _super.apply(this, arguments);\n    }\n    InventoryModals.prototype.toggleCreateNewOrderDetails = function () {\n        _Store_1.inventoryState.toggleCreateNewOrderDetails();\n        _Store_1.inventoryState.itemUnitStep = 0;\n        _Store_1.inventoryState.newProductOrderDetailObject = {};\n    };\n    InventoryModals.prototype.toggleOrderDetailLocationModal = function () {\n        _Store_1.inventoryState.orderDetailLocationModal = false;\n    };\n    InventoryModals.prototype.toggleAddLocationModal = function () {\n        _Store_1.inventoryState.toggleAddLocationModal();\n    };\n    InventoryModals.prototype.changeLocationName = function (name) {\n        _Store_1.inventoryState.changeLocationName(name);\n    };\n    InventoryModals.prototype.render = function () {\n        return React.createElement(index_1.Layer, { fill: true }, React.createElement(index_1.Modal, { title: 'New Product Order Detail', open: _Store_1.inventoryState.orderDetailsCreateOpen, onClose: this.toggleCreateNewOrderDetails.bind(this) }, React.createElement(\"div\", { className: \"p10\" }, React.createElement(InventorySupplier_1.default, null))), React.createElement(index_1.Modal, { title: 'Add Location', fullScreen: true, open: _Store_1.inventoryState.addLocationModal, onClose: this.toggleAddLocationModal.bind(this) }, React.createElement(\"div\", { className: \"p10\" }, React.createElement(index_1.Toolbar, { vertical: true, spacing: true, block: true }, React.createElement(index_1.Input, { required: _Store_1.inventoryState.locationName !== '', onChange: this.changeLocationName.bind(this), block: true, placeholder: \"Location Name\" }), React.createElement(index_1.Input, { block: true, placeholder: \"What is your minimum restock amount?\" }), React.createElement(index_1.Input, { block: true, placeholder: \"How many do you want to order from the supplier when you reach the minimum?\" }), React.createElement(index_1.Input, { block: true, placeholder: \"Notes\" }), React.createElement(index_1.Input, { block: true, placeholder: \"How many issue units will you be adding?\" }), React.createElement(index_1.Button, { icon: \"plus\", theme: \"primary\" }, \"Add Location\")))));\n    };\n    InventoryModals = __decorate([mobx_react_1.observer, __metadata('design:paramtypes', [])], InventoryModals);\n    return InventoryModals;\n}(React.Component);\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = InventoryModals;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(262); if (makeExportsHot(module, __webpack_require__(159))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"InventoryModals.tsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/views/inventory/InventoryModals.tsx\n ** module id = 432\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/views/inventory/InventoryModals.tsx?");

/***/ }

})