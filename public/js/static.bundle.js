/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/images sync \\.(png|jpe?g|svg|webp)$":
/*!******************************************************************!*\
  !*** ./client/images/ sync nonrecursive \.(png|jpe?g|svg|webp)$ ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./apple.png": "./client/images/apple.png",
	"./arrow.png": "./client/images/arrow.png",
	"./bi.png": "./client/images/bi.png",
	"./bi_m.png": "./client/images/bi_m.png",
	"./cocktails.png": "./client/images/cocktails.png",
	"./id_n.png": "./client/images/id_n.png",
	"./id_scan.jpg": "./client/images/id_scan.jpg",
	"./id_w.png": "./client/images/id_w.png",
	"./login.png": "./client/images/login.png",
	"./logo.png": "./client/images/logo.png",
	"./logo_subtext.png": "./client/images/logo_subtext.png",
	"./main.png": "./client/images/main.png",
	"./nightlife.png": "./client/images/nightlife.png",
	"./nightlife_bg.jpg": "./client/images/nightlife_bg.jpg",
	"./notab.png": "./client/images/notab.png",
	"./order_c.png": "./client/images/order_c.png",
	"./order_w.png": "./client/images/order_w.png",
	"./play.png": "./client/images/play.png",
	"./qr.jpg": "./client/images/qr.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./client/images sync \\.(png|jpe?g|svg|webp)$";

/***/ }),

/***/ "./client/js/cookie.js":
/*!*****************************!*\
  !*** ./client/js/cookie.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CookieBanner; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var CookieBanner = /*#__PURE__*/function () {
  function CookieBanner(root) {
    _classCallCheck(this, CookieBanner);

    this.root = root;
    this.createClosingButton();
    setTimeout(this.openBanner.bind(this), 5000);
  }

  _createClass(CookieBanner, [{
    key: "closeBanner",
    value: function closeBanner() {
      this.root.classList.toggle('cookie_closed', true);
    }
  }, {
    key: "openBanner",
    value: function openBanner() {
      this.root.classList.toggle('cookie_closed', false);
    }
  }, {
    key: "createClosingButton",
    value: function createClosingButton() {
      this.btn = this.root.querySelector('[data-button="cookie-close"]');
      this.btn.onclick = this.closeBanner.bind(this);
    }
  }], [{
    key: "getAll",
    value: function getAll() {
      var sliders = Array.prototype.slice.call(document.querySelectorAll("[data-widget='cookie-banner']"));
      return sliders.map(function (t) {
        return new CookieBanner(t);
      });
    }
  }]);

  return CookieBanner;
}();



/***/ }),

/***/ "./client/polyfills.js":
/*!*****************************!*\
  !*** ./client/polyfills.js ***!
  \*****************************/
/***/ (function() {



/***/ }),

/***/ "./client/images/apple.png":
/*!*********************************!*\
  !*** ./client/images/apple.png ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/d3e934c6acff55060f9224946abc5329.png";

/***/ }),

/***/ "./client/images/arrow.png":
/*!*********************************!*\
  !*** ./client/images/arrow.png ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/fa4dbdd96f5fc40db6a3e5975353baac.png";

/***/ }),

/***/ "./client/images/bi.png":
/*!******************************!*\
  !*** ./client/images/bi.png ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/24ab00ebce2d97b05c31f5676e42c800.png";

/***/ }),

/***/ "./client/images/bi_m.png":
/*!********************************!*\
  !*** ./client/images/bi_m.png ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/5f9d1740fa85a52899698e63a9c18428.png";

/***/ }),

/***/ "./client/images/cocktails.png":
/*!*************************************!*\
  !*** ./client/images/cocktails.png ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/571a9f8ff1928124ea2563a32e9e1094.png";

/***/ }),

/***/ "./client/images/id_n.png":
/*!********************************!*\
  !*** ./client/images/id_n.png ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/7278b11548e23e9c4714b16c76273de3.png";

/***/ }),

/***/ "./client/images/id_scan.jpg":
/*!***********************************!*\
  !*** ./client/images/id_scan.jpg ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/c0eea2bc67906319c759cbac4e72eb7f.jpg";

/***/ }),

/***/ "./client/images/id_w.png":
/*!********************************!*\
  !*** ./client/images/id_w.png ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/3bdc2c2e64e31dcaf9365a9bde09b076.png";

/***/ }),

/***/ "./client/images/login.png":
/*!*********************************!*\
  !*** ./client/images/login.png ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/9d14d4295c36386f641079a3ab0145e7.png";

/***/ }),

/***/ "./client/images/logo.png":
/*!********************************!*\
  !*** ./client/images/logo.png ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/32a02016065a18a85e6f617c78dc02da.png";

/***/ }),

/***/ "./client/images/logo_subtext.png":
/*!****************************************!*\
  !*** ./client/images/logo_subtext.png ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/9a2e5b8b2127e5b65db5c0cee94f6598.png";

/***/ }),

/***/ "./client/images/main.png":
/*!********************************!*\
  !*** ./client/images/main.png ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/cbffb56633d4798fcc9bec835b3bae26.png";

/***/ }),

/***/ "./client/images/nightlife.png":
/*!*************************************!*\
  !*** ./client/images/nightlife.png ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/4acc46d6ed8f5065425db587ac4a7d83.png";

/***/ }),

/***/ "./client/images/nightlife_bg.jpg":
/*!****************************************!*\
  !*** ./client/images/nightlife_bg.jpg ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/44042c3a916b7fc303340606ac1dae44.jpg";

/***/ }),

/***/ "./client/images/notab.png":
/*!*********************************!*\
  !*** ./client/images/notab.png ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/121f5900c0e47af21fb17fb83d92df12.png";

/***/ }),

/***/ "./client/images/order_c.png":
/*!***********************************!*\
  !*** ./client/images/order_c.png ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/ac309f0063bec3875b450a3b019f0070.png";

/***/ }),

/***/ "./client/images/order_w.png":
/*!***********************************!*\
  !*** ./client/images/order_w.png ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/0527642a10726debbb1ade8e5f8d5de0.png";

/***/ }),

/***/ "./client/images/play.png":
/*!********************************!*\
  !*** ./client/images/play.png ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/07a2a07882c13850658f80885b0629c5.png";

/***/ }),

/***/ "./client/images/qr.jpg":
/*!******************************!*\
  !*** ./client/images/qr.jpg ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/ecb4ed8b70d687e5e23be02b07464178.jpg";

/***/ }),

/***/ "./client/scss/landing/styles.scss":
/*!*****************************************!*\
  !*** ./client/scss/landing/styles.scss ***!
  \*****************************************/
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):\nRangeError: Maximum call stack size exceeded\n    at C:\\Users\\HP\\Desktop\\tasks\\client\\scss\\landing\\styles.scss:38:3\n    at RegExp.test (<anonymous>)\n    at b (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:3246)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:2891\n    at Array.forEach (<anonymous>)\n    at O (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:2875)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:3178\n    at Array.forEach (<anonymous>)\n    at O (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:2875)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:3178\n    at Array.forEach (<anonymous>)\n    at tryRunOrWebpackError (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\HookWebpackError.js:88:9)\n    at __webpack_require_module__ (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\Compilation.js:5020:12)\n    at __webpack_require__ (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\Compilation.js:4977:18)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\Compilation.js:5048:20\n    at symbolIterator (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\neo-async\\async.js:3485:9)\n    at done (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\neo-async\\async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:13:1)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\Compilation.js:4955:43\n    at symbolIterator (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\neo-async\\async.js:3482:9)\n    at timesSync (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\neo-async\\async.js:2297:7)\n-- inner error --\nError: Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):\nRangeError: Maximum call stack size exceeded\n    at C:\\Users\\HP\\Desktop\\tasks\\client\\scss\\landing\\styles.scss:38:3\n    at RegExp.test (<anonymous>)\n    at b (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:3246)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:2891\n    at Array.forEach (<anonymous>)\n    at O (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:2875)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:3178\n    at Array.forEach (<anonymous>)\n    at O (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:2875)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:3178\n    at Array.forEach (<anonymous>)\n    at Object.<anonymous> (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\css-loader\\dist\\cjs.js??ruleSet[1].rules[3].use[1]!C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-loader\\dist\\cjs.js!C:\\Users\\HP\\Desktop\\tasks\\node_modules\\sass-loader\\dist\\cjs.js!C:\\Users\\HP\\Desktop\\tasks\\client\\scss\\landing\\styles.scss:1:7)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\javascript\\JavascriptModulesPlugin.js:432:11\n    at Hook.eval [as call] (eval at create (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\tapable\\lib\\HookCodeFactory.js:19:10), <anonymous>:5:1)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\Compilation.js:5022:39\n    at tryRunOrWebpackError (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\HookWebpackError.js:83:7)\n    at __webpack_require_module__ (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\Compilation.js:5020:12)\n    at __webpack_require__ (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\Compilation.js:4977:18)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\Compilation.js:5048:20\n    at symbolIterator (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\neo-async\\async.js:3485:9)\n    at done (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\neo-async\\async.js:3527:9)\n\nGenerated code for C:\\Users\\HP\\Desktop\\tasks\\node_modules\\css-loader\\dist\\cjs.js??ruleSet[1].rules[3].use[1]!C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-loader\\dist\\cjs.js!C:\\Users\\HP\\Desktop\\tasks\\node_modules\\sass-loader\\dist\\cjs.js!C:\\Users\\HP\\Desktop\\tasks\\client\\scss\\landing\\styles.scss\n1 | throw new Error(\"Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):\\nRangeError: Maximum call stack size exceeded\\n    at C:\\\\Users\\\\HP\\\\Desktop\\\\tasks\\\\client\\\\scss\\\\landing\\\\styles.scss:38:3\\n    at RegExp.test (<anonymous>)\\n    at b (C:\\\\Users\\\\HP\\\\Desktop\\\\tasks\\\\node_modules\\\\postcss-custom-properties\\\\dist\\\\index.cjs:1:3246)\\n    at C:\\\\Users\\\\HP\\\\Desktop\\\\tasks\\\\node_modules\\\\postcss-custom-properties\\\\dist\\\\index.cjs:1:2891\\n    at Array.forEach (<anonymous>)\\n    at O (C:\\\\Users\\\\HP\\\\Desktop\\\\tasks\\\\node_modules\\\\postcss-custom-properties\\\\dist\\\\index.cjs:1:2875)\\n    at C:\\\\Users\\\\HP\\\\Desktop\\\\tasks\\\\node_modules\\\\postcss-custom-properties\\\\dist\\\\index.cjs:1:3178\\n    at Array.forEach (<anonymous>)\\n    at O (C:\\\\Users\\\\HP\\\\Desktop\\\\tasks\\\\node_modules\\\\postcss-custom-properties\\\\dist\\\\index.cjs:1:2875)\\n    at C:\\\\Users\\\\HP\\\\Desktop\\\\tasks\\\\node_modules\\\\postcss-custom-properties\\\\dist\\\\index.cjs:1:3178\\n    at Array.forEach (<anonymous>)\");");

/***/ }),

/***/ "./client/scss/styles.scss":
/*!*********************************!*\
  !*** ./client/scss/styles.scss ***!
  \*********************************/
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):\nRangeError: Maximum call stack size exceeded\n    at C:\\Users\\HP\\Desktop\\tasks\\client\\scss\\styles.scss:38:3\n    at RegExp.test (<anonymous>)\n    at b (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:3246)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:2891\n    at Array.forEach (<anonymous>)\n    at O (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:2875)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:3178\n    at Array.forEach (<anonymous>)\n    at O (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:2875)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:3178\n    at Array.forEach (<anonymous>)\n    at tryRunOrWebpackError (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\HookWebpackError.js:88:9)\n    at __webpack_require_module__ (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\Compilation.js:5020:12)\n    at __webpack_require__ (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\Compilation.js:4977:18)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\Compilation.js:5048:20\n    at symbolIterator (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\neo-async\\async.js:3485:9)\n    at done (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\neo-async\\async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:13:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\tapable\\lib\\Hook.js:18:14)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\Compilation.js:4955:43\n    at symbolIterator (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\neo-async\\async.js:3482:9)\n-- inner error --\nError: Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):\nRangeError: Maximum call stack size exceeded\n    at C:\\Users\\HP\\Desktop\\tasks\\client\\scss\\styles.scss:38:3\n    at RegExp.test (<anonymous>)\n    at b (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:3246)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:2891\n    at Array.forEach (<anonymous>)\n    at O (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:2875)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:3178\n    at Array.forEach (<anonymous>)\n    at O (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:2875)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:3178\n    at Array.forEach (<anonymous>)\n    at Object.<anonymous> (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\css-loader\\dist\\cjs.js??ruleSet[1].rules[3].use[1]!C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-loader\\dist\\cjs.js!C:\\Users\\HP\\Desktop\\tasks\\node_modules\\sass-loader\\dist\\cjs.js!C:\\Users\\HP\\Desktop\\tasks\\client\\scss\\styles.scss:1:7)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\javascript\\JavascriptModulesPlugin.js:432:11\n    at Hook.eval [as call] (eval at create (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\tapable\\lib\\HookCodeFactory.js:19:10), <anonymous>:5:1)\n    at Hook.CALL_DELEGATE [as _call] (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\tapable\\lib\\Hook.js:14:14)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\Compilation.js:5022:39\n    at tryRunOrWebpackError (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\HookWebpackError.js:83:7)\n    at __webpack_require_module__ (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\Compilation.js:5020:12)\n    at __webpack_require__ (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\Compilation.js:4977:18)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\Compilation.js:5048:20\n    at symbolIterator (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\neo-async\\async.js:3485:9)\n\nGenerated code for C:\\Users\\HP\\Desktop\\tasks\\node_modules\\css-loader\\dist\\cjs.js??ruleSet[1].rules[3].use[1]!C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-loader\\dist\\cjs.js!C:\\Users\\HP\\Desktop\\tasks\\node_modules\\sass-loader\\dist\\cjs.js!C:\\Users\\HP\\Desktop\\tasks\\client\\scss\\styles.scss\n1 | throw new Error(\"Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):\\nRangeError: Maximum call stack size exceeded\\n    at C:\\\\Users\\\\HP\\\\Desktop\\\\tasks\\\\client\\\\scss\\\\styles.scss:38:3\\n    at RegExp.test (<anonymous>)\\n    at b (C:\\\\Users\\\\HP\\\\Desktop\\\\tasks\\\\node_modules\\\\postcss-custom-properties\\\\dist\\\\index.cjs:1:3246)\\n    at C:\\\\Users\\\\HP\\\\Desktop\\\\tasks\\\\node_modules\\\\postcss-custom-properties\\\\dist\\\\index.cjs:1:2891\\n    at Array.forEach (<anonymous>)\\n    at O (C:\\\\Users\\\\HP\\\\Desktop\\\\tasks\\\\node_modules\\\\postcss-custom-properties\\\\dist\\\\index.cjs:1:2875)\\n    at C:\\\\Users\\\\HP\\\\Desktop\\\\tasks\\\\node_modules\\\\postcss-custom-properties\\\\dist\\\\index.cjs:1:3178\\n    at Array.forEach (<anonymous>)\\n    at O (C:\\\\Users\\\\HP\\\\Desktop\\\\tasks\\\\node_modules\\\\postcss-custom-properties\\\\dist\\\\index.cjs:1:2875)\\n    at C:\\\\Users\\\\HP\\\\Desktop\\\\tasks\\\\node_modules\\\\postcss-custom-properties\\\\dist\\\\index.cjs:1:3178\\n    at Array.forEach (<anonymous>)\");");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "./";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**************************!*\
  !*** ./client/static.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ "./client/polyfills.js");
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfills__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/styles.scss */ "./client/scss/styles.scss");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_landing_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/landing/styles.scss */ "./client/scss/landing/styles.scss");
/* harmony import */ var _scss_landing_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_landing_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/cookie */ "./client/js/cookie.js");




function importAll(r) {
  return r.keys().map(r);
}

var images = importAll(__webpack_require__("./client/images sync \\.(png|jpe?g|svg|webp)$"));

var cookieBanners = _js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].getAll();
}();
/******/ })()
;
//# sourceMappingURL=static.bundle.js.map