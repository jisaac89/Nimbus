webpackHotUpdate(0,{

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(81), RootInstanceProvider = __webpack_require__(89), ReactMount = __webpack_require__(91), React = __webpack_require__(159); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n\"use strict\";\n\nvar __extends = undefined && undefined.__extends || function (d, b) {\n    for (var p in b) {\n        if (b.hasOwnProperty(p)) d[p] = b[p];\n    }function __() {\n        this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n};\nvar React = __webpack_require__(159);\nvar classNames = __webpack_require__(346);\nvar Selectable_1 = __webpack_require__(352);\n__webpack_require__(355);\nvar Button = function (_super) {\n    __extends(Button, _super);\n    function Button(props) {\n        _super.call(this, props);\n        this.state = {\n            checked: false,\n            progressiveClickIndex: 0,\n            clickCounter: 0,\n            shiftCounter: 0\n        };\n    }\n    Button.prototype.componentDidMount = function () {\n        var self = this;\n        var props = self.props;\n        if (props.progressiveClick) {\n            this.setState({\n                progressiveClickLength: props.progressiveClick.length\n            });\n        }\n    };\n    Button.prototype.onClick = function (event) {\n        var self = this;\n        if (this.props.onClick) {\n            this.props.onClick(event);\n            this.setState({\n                checked: true\n            });\n        }\n    };\n    Button.prototype.progressiveClick = function (arrayOfFunctions) {\n        var self = this;\n        var array = this.props.progressiveClick;\n        var state = self.state;\n        var clickIndex = state.progressiveClickIndex;\n        var arrayLength = state.progressiveClickLength;\n        if (clickIndex < arrayLength) {\n            array[clickIndex]();\n            self.setState({\n                progressiveClickIndex: clickIndex + 1\n            });\n        } else {\n            array[0]();\n            self.setState({\n                progressiveClickIndex: 1\n            });\n        }\n    };\n    Button.prototype.render = function () {\n        var _this = this;\n        var self = this;\n        var props = self.props;\n        var buttonType;\n        var buttonClass = classNames('r-Button', { 'simple': props.simple }, { 'required': props.required }, { 'outline': props.outline }, { 'block': props.block }, { 'column': props.strech }, { 'icon': !props.children }, { 'button-pointer-right': props.pointer === 'right' }, { 'button-pointer-left': props.pointer === 'left' }, { 'icon-right': props.iconLocation === 'right' }, { 'icon-left': props.iconLocation === 'left' }, { 'pull-right': props.right }, { 'pull-left': props.left }, props.size, props.theme, props.className, { 'checked': props.checked }, { 'fill': props.fill });\n        if (props.submit) {\n            buttonType = 'submit';\n        } else {\n            buttonType = 'button';\n        }\n        var selectablePartial = React.createElement(Selectable_1.default, { type: props.checkedTheme, checked: props.checked ? true : false });\n        var iconPartial = props.icon && !props.loading ? React.createElement(\"i\", { className: 'fa fa-' + props.icon }) : null;\n        var loadingPartial = props.loading ? React.createElement(\"i\", { className: 'fa fa-circle-o-notch fa-spin' + (props.children ? ' mr5' : '') }) : null;\n        var animatedIcon = props.iconPointer && !props.loading ? React.createElement(\"i\", { className: \"icon-pointer fa fa-caret-\" + props.iconPointer }) : null;\n        var iconWrapperRight = props.icon && props.iconLocation === 'right' ? React.createElement(\"div\", { className: 'icon-pointer-' + props.iconPointer + \" ml10 icon-wrapper \" + (props.children ? \"mr5\" : \"\") }, iconPartial, props.iconPointer ? animatedIcon : null) : null;\n        var iconWrapperLeft = props.icon && props.iconLocation === 'left' ? React.createElement(\"div\", { className: 'icon-pointer-' + props.iconPointer + \" icon-wrapper \" + (props.children ? \"mr5\" : \"\") }, iconPartial, props.iconPointer ? animatedIcon : null) : null;\n        var linkButton = function linkButton() {\n            return React.createElement(\"a\", { href: props.href, target: props.target, ref: \"button\", tabIndex: props.tabIndex, onClick: props.progressiveClick ? _this.progressiveClick.bind(_this) : _this.onClick.bind(_this), type: buttonType, disabled: props.disabled || props.loading === true, className: buttonClass, style: props.style }, iconWrapperLeft, loadingPartial, props.children, selectablePartial, iconWrapperRight);\n        };\n        var simpleButton = function simpleButton() {\n            return React.createElement(\"button\", { ref: \"button\", tabIndex: props.tabIndex, onClick: _this.onClick.bind(_this), type: buttonType, disabled: props.disabled || props.loading === true, target: props.target, className: buttonClass, style: props.style }, iconWrapperLeft, loadingPartial, props.children, iconWrapperRight);\n        };\n        var defaultButton = function defaultButton() {\n            return React.createElement(\"button\", { ref: \"button\", tabIndex: props.tabIndex, onClick: props.progressiveClick ? _this.progressiveClick.bind(_this) : _this.onClick.bind(_this), type: buttonType, disabled: props.disabled || props.loading === true, target: props.target, className: buttonClass, style: props.style }, iconWrapperLeft, loadingPartial, props.children, selectablePartial, iconWrapperRight);\n        };\n        if (props.href) {\n            return linkButton();\n        } else {\n            return props.advanced ? defaultButton() : simpleButton();\n        }\n    };\n    Button.defaultProps = {\n        active: true,\n        disabled: false,\n        block: false,\n        advanced: false,\n        iconLocation: 'left',\n        scrollDuration: 300,\n        scrollOffset: 0\n    };\n    return Button;\n}(React.Component);\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = Button;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(262); if (makeExportsHot(module, __webpack_require__(159))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"Button.tsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./recoil/src/components/Button/Button.tsx\n ** module id = 351\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./recoil/src/components/Button/Button.tsx?");

/***/ }

})