webpackHotUpdate(0,{

/***/ 428:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(81), RootInstanceProvider = __webpack_require__(89), ReactMount = __webpack_require__(91), React = __webpack_require__(159); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n\"use strict\";\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\nvar __extends = undefined && undefined.__extends || function (d, b) {\n    for (var p in b) {\n        if (b.hasOwnProperty(p)) d[p] = b[p];\n    }function __() {\n        this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n};\nvar __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {\n    var c = arguments.length,\n        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,\n        d;\n    if ((typeof Reflect === \"undefined\" ? \"undefined\" : _typeof(Reflect)) === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {\n        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    }return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = undefined && undefined.__metadata || function (k, v) {\n    if ((typeof Reflect === \"undefined\" ? \"undefined\" : _typeof(Reflect)) === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar React = __webpack_require__(159);\nvar mobx_react_1 = __webpack_require__(335);\nvar _Store_1 = __webpack_require__(338);\nvar index_1 = __webpack_require__(347);\nvar InventoryList = function (_super) {\n    __extends(InventoryList, _super);\n    function InventoryList() {\n        _super.apply(this, arguments);\n    }\n    InventoryList.prototype.questionsSlideIndex = function (n) {\n        _Store_1.inventoryState.slideIndex = n;\n    };\n    InventoryList.prototype.gotoEditItem = function (item) {\n        _Store_1.inventoryState.slideIndex = 2;\n        _Store_1.inventoryState.item = item;\n    };\n    InventoryList.prototype.removeItem = function (inventoryKey) {\n        _Store_1.inventoryState.removeItem(inventoryKey);\n    };\n    InventoryList.prototype.menuTemplate = function (item) {\n        return React.createElement(index_1.Toolbar, { flush: true, noBorder: true }, React.createElement(index_1.Button, { size: \"small\", onClick: this.gotoEditItem.bind(this, item), icon: \"pencil\" }), React.createElement(index_1.Button, { size: \"small\", onClick: this.removeItem.bind(this, item.key), icon: \"times\" }));\n    };\n    InventoryList.prototype.render = function () {\n        var _a = this,\n            menuTemplate = _a.menuTemplate,\n            questionsSlideIndex = _a.questionsSlideIndex;\n        var props = this.props;\n        var open = props.open;\n        var dataSource = _Store_1.inventoryState.inventory;\n        var columns = [{ name: 'name' }, { template: menuTemplate }];\n        return React.createElement(index_1.Open, { if: open }, React.createElement(index_1.Toolbar, { noBorder: true, block: true, className: \"border-bottom border-top p10\" }, React.createElement(index_1.Button, { icon: \"plus\", theme: \"primary\", onClick: questionsSlideIndex.bind(this, 1) }, \"Create Item\")), dataSource.length > 0 ? React.createElement(index_1.Table, { columns: columns, dataSource: dataSource }) : null);\n    };\n    InventoryList = __decorate([mobx_react_1.observer, __metadata('design:paramtypes', [])], InventoryList);\n    return InventoryList;\n}(React.Component);\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = InventoryList;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(262); if (makeExportsHot(module, __webpack_require__(159))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"InventoryList.tsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/views/inventory/InventoryList.tsx\n ** module id = 428\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/views/inventory/InventoryList.tsx?");

/***/ }

})