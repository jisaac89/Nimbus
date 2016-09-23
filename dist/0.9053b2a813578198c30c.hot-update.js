webpackHotUpdate(0,{

/***/ 424:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(81), RootInstanceProvider = __webpack_require__(89), ReactMount = __webpack_require__(91), React = __webpack_require__(159); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n\"use strict\";\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\nvar __extends = undefined && undefined.__extends || function (d, b) {\n    for (var p in b) {\n        if (b.hasOwnProperty(p)) d[p] = b[p];\n    }function __() {\n        this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n};\nvar __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {\n    var c = arguments.length,\n        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,\n        d;\n    if ((typeof Reflect === \"undefined\" ? \"undefined\" : _typeof(Reflect)) === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {\n        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    }return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = undefined && undefined.__metadata || function (k, v) {\n    if ((typeof Reflect === \"undefined\" ? \"undefined\" : _typeof(Reflect)) === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar React = __webpack_require__(159);\nvar mobx_react_1 = __webpack_require__(335);\nvar _Store_1 = __webpack_require__(338);\nvar index_1 = __webpack_require__(347);\nvar InventoryFooter_1 = __webpack_require__(425);\nvar Login = function (_super) {\n    __extends(Login, _super);\n    function Login() {\n        _super.apply(this, arguments);\n        this.signOut = function () {\n            _Store_1.appState.toggleSignedIn();\n            _Store_1.appState.gotoPage('');\n        };\n    }\n    Login.prototype.render = function () {\n        var pathname = this.props.pathname;\n        var paneIsOpen = pathname !== 'dashboard';\n        var className = 'light border-top p10';\n        return React.createElement(index_1.SlideIn, { fixed: true, from: \"bottom\", if: true }, React.createElement(index_1.Transform, { type: 'translate', axis: 'Y', amount: '-111px', if: paneIsOpen }, React.createElement(index_1.Notifications, { dataSource: _Store_1.appState.notifications })), React.createElement(index_1.SlideIn, { if: paneIsOpen && pathname === '/inventory', fixed: true, from: \"bottom\" }, React.createElement(InventoryFooter_1.default, { title: \"Inventory\", className: className })));\n    };\n    Login.prototype.gotoPage = function (page) {\n        _Store_1.appState.gotoPage(page);\n        _Store_1.appState.menuEnabled = false;\n        if (page === 'dashboard') {\n            _Store_1.appState.toggleMenuEnabled();\n        }\n    };\n    Login = __decorate([mobx_react_1.observer, __metadata('design:paramtypes', [])], Login);\n    return Login;\n}(React.Component);\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = Login;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(262); if (makeExportsHot(module, __webpack_require__(159))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"DynamicFooter.tsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/views/navigation/DynamicFooter.tsx\n ** module id = 424\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/views/navigation/DynamicFooter.tsx?");

/***/ }

})