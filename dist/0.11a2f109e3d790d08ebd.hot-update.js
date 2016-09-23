webpackHotUpdate(0,{

/***/ 422:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(81), RootInstanceProvider = __webpack_require__(89), ReactMount = __webpack_require__(91), React = __webpack_require__(159); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n\"use strict\";\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\nvar __extends = undefined && undefined.__extends || function (d, b) {\n    for (var p in b) {\n        if (b.hasOwnProperty(p)) d[p] = b[p];\n    }function __() {\n        this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n};\nvar __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {\n    var c = arguments.length,\n        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,\n        d;\n    if ((typeof Reflect === \"undefined\" ? \"undefined\" : _typeof(Reflect)) === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {\n        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    }return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = undefined && undefined.__metadata || function (k, v) {\n    if ((typeof Reflect === \"undefined\" ? \"undefined\" : _typeof(Reflect)) === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar React = __webpack_require__(159);\nvar mobx_react_1 = __webpack_require__(335);\nvar _Store_1 = __webpack_require__(338);\nvar index_1 = __webpack_require__(347);\nvar DynamicNavigation = function (_super) {\n    __extends(DynamicNavigation, _super);\n    function DynamicNavigation() {\n        _super.apply(this, arguments);\n    }\n    DynamicNavigation.prototype.render = function () {\n        var pathname = this.props.pathname;\n        var _a = this.props.appState.states,\n            supplierState = _a.supplierState,\n            takeState = _a.takeState,\n            inventoryState = _a.inventoryState,\n            locationTypeState = _a.locationTypeState;\n        var dashboardView = pathname.pathname === '';\n        var inventoryView = pathname.pathname === 'inventory';\n        var purchasingView = pathname.pathname === 'purchasing';\n        var manualPOView = pathname.pathname === 'manualPO';\n        return React.createElement(\"div\", { className: \"w100\" }, React.createElement(index_1.Toolbar, { block: true, flush: true, breadcrumbs: true, className: \"p10 border-bottom\" }, React.createElement(index_1.Button, { advanced: true, tabIndex: -1, onClick: this.gotoPage.bind(this, 'dashboard'), pointer: \"right\", checked: pathname === 'dashboard', size: \"small\" }, \"Dashboard\"), inventoryView ? React.createElement(index_1.Button, { advanced: true, tabIndex: -1, onClick: this.gotoInventoryIndex.bind(this, 0), pointer: \"right\", checked: inventoryView, size: \"small\" }, \"Inventory\") : null, purchasingView ? React.createElement(index_1.Button, { advanced: true, tabIndex: -1, pointer: \"right\", checked: purchasingView, size: \"small\" }, \"Purchasing\") : null, manualPOView ? React.createElement(index_1.Button, { advanced: true, tabIndex: -1, pointer: \"right\", checked: manualPOView, size: \"small\" }, \"Manual PO\") : null));\n    };\n    DynamicNavigation.prototype.gotoPage = function (page) {\n        _Store_1.appState.gotoPage(page);\n        if (page === 'dashboard') {\n            _Store_1.appState.menuEnabled = true;\n        }\n    };\n    DynamicNavigation.prototype.gotoInventoryIndex = function (n) {\n        _Store_1.inventoryState.slideIndex = n;\n    };\n    DynamicNavigation = __decorate([mobx_react_1.observer, __metadata('design:paramtypes', [])], DynamicNavigation);\n    return DynamicNavigation;\n}(React.Component);\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = DynamicNavigation;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(262); if (makeExportsHot(module, __webpack_require__(159))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"DynamicNavigation.tsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/views/navigation/DynamicNavigation.tsx\n ** module id = 422\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/views/navigation/DynamicNavigation.tsx?");

/***/ }

})