webpackHotUpdate(0,{

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(81), RootInstanceProvider = __webpack_require__(89), ReactMount = __webpack_require__(91), React = __webpack_require__(159); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n\"use strict\";\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\nvar __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {\n    var c = arguments.length,\n        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,\n        d;\n    if ((typeof Reflect === \"undefined\" ? \"undefined\" : _typeof(Reflect)) === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {\n        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    }return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = undefined && undefined.__metadata || function (k, v) {\n    if ((typeof Reflect === \"undefined\" ? \"undefined\" : _typeof(Reflect)) === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar mobx_1 = __webpack_require__(336);\nvar firebase = __webpack_require__(340);\nvar InventoryState = function () {\n    function InventoryState() {\n        this.item = [];\n        this.inventory = null;\n        this.inventoryIndex = 0;\n        this.slideIndex = 0;\n    }\n    InventoryState.prototype.handleChange = function (name, value) {\n        var item = this.item;\n        item[name] = value;\n    };\n    InventoryState.prototype.listenForInventory = function () {\n        var _this = this;\n        var inventoryRef = firebase.database().ref('inventory/');\n        inventoryRef.on('value', function (snap) {\n            var items = [];\n            snap.forEach(function (child) {\n                items.push(child.val());\n            });\n            _this.inventory = items;\n        });\n    };\n    InventoryState.prototype.createInventory = function () {\n        var self = this;\n        var newInventoryKey = firebase.database().ref().child('inventory').push().key;\n        var item = {\n            name: self.item.name,\n            key: newInventoryKey\n        };\n        var updates = {};\n        updates['/inventory/' + newInventoryKey] = item;\n        firebase.database().ref().update(updates).then(function () {\n            self.slideIndex = 0;\n        }, function (error) {});\n    };\n    InventoryState.prototype.editItem = function (inventoryKey) {\n        var self = this;\n        firebase.database().ref('inventory/' + inventoryKey).set({\n            name: self.item.name,\n            key: inventoryKey\n        }).then(function () {\n            self.slideIndex = 0;\n        }, function (error) {});\n    };\n    InventoryState.prototype.removeItem = function (inventoryKey) {\n        var self = this;\n        firebase.database().ref('inventory/' + inventoryKey).remove().then(function () {}, function (error) {});\n    };\n    __decorate([mobx_1.observable, __metadata('design:type', Object)], InventoryState.prototype, \"item\", void 0);\n    __decorate([mobx_1.observable, __metadata('design:type', Object)], InventoryState.prototype, \"inventory\", void 0);\n    __decorate([mobx_1.observable, __metadata('design:type', Object)], InventoryState.prototype, \"inventoryIndex\", void 0);\n    __decorate([mobx_1.observable, __metadata('design:type', Number)], InventoryState.prototype, \"slideIndex\", void 0);\n    return InventoryState;\n}();\nexports.InventoryState = InventoryState;\nexports.inventoryState = new InventoryState();\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(262); if (makeExportsHot(module, __webpack_require__(159))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"InventoryState.ts\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/state/InventoryState.ts\n ** module id = 345\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/state/InventoryState.ts?");

/***/ }

})