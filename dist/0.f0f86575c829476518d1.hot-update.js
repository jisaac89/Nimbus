webpackHotUpdate(0,{

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(81), RootInstanceProvider = __webpack_require__(89), ReactMount = __webpack_require__(91), React = __webpack_require__(159); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n\"use strict\";\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\nvar __extends = undefined && undefined.__extends || function (d, b) {\n    for (var p in b) {\n        if (b.hasOwnProperty(p)) d[p] = b[p];\n    }function __() {\n        this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n};\nvar __assign = undefined && undefined.__assign || Object.assign || function (t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n        s = arguments[i];\n        for (var p in s) {\n            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n        }\n    }\n    return t;\n};\nvar __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {\n    var c = arguments.length,\n        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,\n        d;\n    if ((typeof Reflect === \"undefined\" ? \"undefined\" : _typeof(Reflect)) === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {\n        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    }return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = undefined && undefined.__metadata || function (k, v) {\n    if ((typeof Reflect === \"undefined\" ? \"undefined\" : _typeof(Reflect)) === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar React = __webpack_require__(159);\nvar mobx_react_1 = __webpack_require__(335);\nvar _Store_1 = __webpack_require__(338);\nvar classNames = __webpack_require__(340);\nvar index_1 = __webpack_require__(341);\nvar Login_1 = __webpack_require__(414);\nvar Entry = function (_super) {\n    __extends(Entry, _super);\n    function Entry() {\n        _super.apply(this, arguments);\n    }\n    Entry.prototype.componentDidMount = function () {\n        _Store_1.appState.initializeApp();\n    };\n    Entry.prototype.render = function () {\n        var self = this;\n        var _a = self.props,\n            children = _a.children,\n            location = _a.location;\n        var content = React.cloneElement(this.props.children || React.createElement(\"div\", null), { key: location });\n        var appClass = classNames('r-App', { 'e-NightMode': _Store_1.appState.nightmode });\n        var modalIsOpen = false;\n        if (!_Store_1.appState.signedIn) {\n            return React.createElement(Login_1.default, null);\n        } else {\n            return React.createElement(index_1.Layer, { scrollY: true, fill: true, overflow: true, className: _Store_1.appState.nightmode ? 'e-NightMode' : '' }, React.createElement(index_1.Transform, { if: modalIsOpen, type: \"translate\", axis: \"Y\", amount: '-100px' }, React.createElement(\"div\", { className: \"fixed-header\" }, React.createElement(Header, null), React.createElement(DynamicNavigation, null))), React.createElement(index_1.Shrink, { if: removingItem || modalIsOpen }, React.createElement(index_1.Layer, null, React.createElement(SideMenu, __assign({}, appProps)), React.createElement(index_1.Transform, { type: \"translate\", axis: 'X', push: !mobile ? \"right\" : null, amount: !mobile ? \"300px\" : '-300px', if: this.props.appState.sideMenuEnabled }, React.cloneElement(this.props.children || React.createElement(\"div\", null), { key: key })))), React.createElement(DynamicModals, __assign({}, appProps)), React.createElement(DynamicFooter, __assign({}, appProps, { modalIsOpen: modalIsOpen })));\n        }\n    };\n    Entry = __decorate([mobx_react_1.observer, __metadata('design:paramtypes', [])], Entry);\n    return Entry;\n}(React.Component);\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = Entry;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(262); if (makeExportsHot(module, __webpack_require__(159))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"Entry.tsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/views/Entry.tsx\n ** module id = 337\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/views/Entry.tsx?");

/***/ }

})