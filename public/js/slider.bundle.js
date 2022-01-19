<<<<<<< HEAD
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/js/slider.js":
/*!*****************************!*\
  !*** ./client/js/slider.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Slider; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var dlerpSpeed = 0.07;
/* eslint-disable no-param-reassign */

var Slider = /*#__PURE__*/function () {
  function Slider(root, lerpSpeed) {
    _classCallCheck(this, Slider);

    this.root = root;
    this.lerpSpeed = lerpSpeed || dlerpSpeed;
    this.current = 0;
    this.contentArea = root.querySelector('#scrolling-area'); // eslint-disable-next-line no-new-object

    this.items = Slider.queryToArray('#scrolling-area > *').map(function (t) {
      return new Object({
        t: t,
        x: 0
      });
    });
    this.bindToggles();
    this.bindScrollButtons();
    this.updateItemPositions(true);
    this.updateToggleButtons(this.current, 0);
  } // eslint-disable-next-line class-methods-use-this


  _createClass(Slider, [{
    key: "changeCurrentIndex",
    value: function changeCurrentIndex(index) {
      if (this.current === index || this.blocked) return;
      this.updateToggleButtons(this.current, index);
      this.current = index;
      this.updateItemPositions(false);
    }
  }, {
    key: "nextIndex",
    value: function nextIndex() {
      this.changeCurrentIndex((this.current + 1) % this.items.length);
    }
  }, {
    key: "previousIndex",
    value: function previousIndex() {
      this.changeCurrentIndex((this.current - 1 + this.items.length) % this.items.length);
    }
  }, {
    key: "bindToggles",
    value: function bindToggles() {
      var _this = this;

      this.toggleArea = this.root.querySelector('#toggle-area');
      this.toggles = this.items.map(function (t, i) {
        var button = document.createElement('button');
        button.classList.add('slider__toggle-element', 'btn');
        button.onclick = _this.changeCurrentIndex.bind(_this, i);

        _this.toggleArea.appendChild(button);

        return button;
      });
    }
  }, {
    key: "bindScrollButtons",
    value: function bindScrollButtons() {
      this.next = this.root.querySelector('#next-item');
      this.next.onclick = this.nextIndex.bind(this);
      this.previous = this.root.querySelector('#previous-item');
      this.previous.onclick = this.previousIndex.bind(this);
    }
  }, {
    key: "updateToggleButtons",
    value: function updateToggleButtons(oldIndex, newIndex) {
      this.toggles[oldIndex].classList.toggle('slider__toggle-element_actived', false);
      this.toggles[newIndex].classList.toggle('slider__toggle-element_actived', true);
    }
  }, {
    key: "updateItemPositions",
    value: function updateItemPositions(immediately) {
      var _this2 = this;

      var areaHalfWidth = this.contentArea.offsetWidth * 0.5;
      var areaHalfHeight = this.contentArea.offsetHeight * 0.5;
      this.fullWidth = this.items.reduce(function (s, item) {
        return s + item.t.offsetWidth;
      }, 0);
      var halfFullWidth = this.fullWidth * 0.5;
      this.items.map(function (t, i) {
        return (i + _this2.current) % _this2.items.length;
      }).reduce(function (sum, i) {
        var offsetX = areaHalfWidth - _this2.items[_this2.current].t.offsetWidth * 0.5;
        var offsetY = areaHalfHeight - _this2.items[i].t.offsetHeight * 0.5;
        var x = (sum + halfFullWidth) % _this2.fullWidth - halfFullWidth + offsetX;
        var y = offsetY;

        if (immediately) {
          Slider.moveItemImmediately(_this2.items[i], x, y);
        } else {
          _this2.moveItemSmooth(_this2.items[i], x, y);
        }

        return sum + _this2.items[i].t.offsetWidth;
      }, 0);
    }
  }, {
    key: "moveItemSmooth",
    value: // eslint-disable-next-line class-methods-use-this
    function moveItemSmooth(item, newX, y) {
      var _this3 = this;

      this.blocked = true;
      if (item.i) clearInterval(item.i);
      var bias = 0.01;
      var lerp = this.lerpSpeed; // a little funny random numbers

      lerp -= this.lerpSpeed * (Math.random() * 0.5 + 0.1); // eslint-disable-next-line prefer-destructuring

      var x = item.x; // gives immediately transition when animation was interrupted by next iteration

      item.x = newX;

      if (Math.abs(x - newX) + item.t.offsetWidth === this.fullWidth) {
        item.t.style.zIndex = '0';
      } else {
        item.t.style.zIndex = '1';
      }

      var lerpFunc = function () {
        if (Math.abs(x - newX) < bias) {
          _this3.blocked = false;
          clearInterval(item.i);
          return;
        } // eslint-disable-next-line no-plusplus


        x += lerp * (newX - x);
        item.t.style.transform = "translate(".concat(x, "px, ").concat(y, "px)"); // eslint-disable-next-line no-extra-bind
      }.bind(this);

      item.i = setInterval(lerpFunc, 0);
    }
  }], [{
    key: "moveItemImmediately",
    value: function moveItemImmediately(item, newX, newY) {
      item.t.style.transform = "translate(".concat(newX, "px, ").concat(newY, "px)");
      item.x = newX;
    }
  }, {
    key: "queryToArray",
    value: function queryToArray(queryStr) {
      return Array.prototype.slice.call(document.querySelectorAll(queryStr));
    }
  }, {
    key: "findAllSliders",
    value: function findAllSliders() {
      var sliders = Slider.queryToArray("[data-widget='slider']");
      return sliders.map(function (t) {
        return new Slider(t);
      });
    }
  }]);

  return Slider;
}();



/***/ }),

/***/ "./client/scss/slider/slider.scss":
/*!****************************************!*\
  !*** ./client/scss/slider/slider.scss ***!
  \****************************************/
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):\nRangeError: Maximum call stack size exceeded\n    at C:\\Users\\HP\\Desktop\\tasks\\client\\scss\\slider\\slider.scss:38:3\n    at RegExp.test (<anonymous>)\n    at b (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:3246)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:2891\n    at Array.forEach (<anonymous>)\n    at O (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:2875)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:3178\n    at Array.forEach (<anonymous>)\n    at O (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:2875)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:3178\n    at Array.forEach (<anonymous>)\n    at tryRunOrWebpackError (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\HookWebpackError.js:88:9)\n    at __webpack_require_module__ (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\Compilation.js:5020:12)\n    at __webpack_require__ (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\Compilation.js:4977:18)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\Compilation.js:5048:20\n    at symbolIterator (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\neo-async\\async.js:3485:9)\n    at done (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\neo-async\\async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:13:1)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\Compilation.js:4955:43\n    at symbolIterator (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\neo-async\\async.js:3482:9)\n    at timesSync (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\neo-async\\async.js:2297:7)\n-- inner error --\nError: Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):\nRangeError: Maximum call stack size exceeded\n    at C:\\Users\\HP\\Desktop\\tasks\\client\\scss\\slider\\slider.scss:38:3\n    at RegExp.test (<anonymous>)\n    at b (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:3246)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:2891\n    at Array.forEach (<anonymous>)\n    at O (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:2875)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:3178\n    at Array.forEach (<anonymous>)\n    at O (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:2875)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-custom-properties\\dist\\index.cjs:1:3178\n    at Array.forEach (<anonymous>)\n    at Object.<anonymous> (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\css-loader\\dist\\cjs.js??ruleSet[1].rules[3].use[1]!C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-loader\\dist\\cjs.js!C:\\Users\\HP\\Desktop\\tasks\\node_modules\\sass-loader\\dist\\cjs.js!C:\\Users\\HP\\Desktop\\tasks\\client\\scss\\slider\\slider.scss:1:7)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\javascript\\JavascriptModulesPlugin.js:432:11\n    at Hook.eval [as call] (eval at create (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\tapable\\lib\\HookCodeFactory.js:19:10), <anonymous>:5:1)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\Compilation.js:5022:39\n    at tryRunOrWebpackError (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\HookWebpackError.js:83:7)\n    at __webpack_require_module__ (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\Compilation.js:5020:12)\n    at __webpack_require__ (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\Compilation.js:4977:18)\n    at C:\\Users\\HP\\Desktop\\tasks\\node_modules\\webpack\\lib\\Compilation.js:5048:20\n    at symbolIterator (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\neo-async\\async.js:3485:9)\n    at done (C:\\Users\\HP\\Desktop\\tasks\\node_modules\\neo-async\\async.js:3527:9)\n\nGenerated code for C:\\Users\\HP\\Desktop\\tasks\\node_modules\\css-loader\\dist\\cjs.js??ruleSet[1].rules[3].use[1]!C:\\Users\\HP\\Desktop\\tasks\\node_modules\\postcss-loader\\dist\\cjs.js!C:\\Users\\HP\\Desktop\\tasks\\node_modules\\sass-loader\\dist\\cjs.js!C:\\Users\\HP\\Desktop\\tasks\\client\\scss\\slider\\slider.scss\n1 | throw new Error(\"Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):\\nRangeError: Maximum call stack size exceeded\\n    at C:\\\\Users\\\\HP\\\\Desktop\\\\tasks\\\\client\\\\scss\\\\slider\\\\slider.scss:38:3\\n    at RegExp.test (<anonymous>)\\n    at b (C:\\\\Users\\\\HP\\\\Desktop\\\\tasks\\\\node_modules\\\\postcss-custom-properties\\\\dist\\\\index.cjs:1:3246)\\n    at C:\\\\Users\\\\HP\\\\Desktop\\\\tasks\\\\node_modules\\\\postcss-custom-properties\\\\dist\\\\index.cjs:1:2891\\n    at Array.forEach (<anonymous>)\\n    at O (C:\\\\Users\\\\HP\\\\Desktop\\\\tasks\\\\node_modules\\\\postcss-custom-properties\\\\dist\\\\index.cjs:1:2875)\\n    at C:\\\\Users\\\\HP\\\\Desktop\\\\tasks\\\\node_modules\\\\postcss-custom-properties\\\\dist\\\\index.cjs:1:3178\\n    at Array.forEach (<anonymous>)\\n    at O (C:\\\\Users\\\\HP\\\\Desktop\\\\tasks\\\\node_modules\\\\postcss-custom-properties\\\\dist\\\\index.cjs:1:2875)\\n    at C:\\\\Users\\\\HP\\\\Desktop\\\\tasks\\\\node_modules\\\\postcss-custom-properties\\\\dist\\\\index.cjs:1:3178\\n    at Array.forEach (<anonymous>)\");");

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**************************!*\
  !*** ./client/slider.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_slider_slider_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/slider/slider.scss */ "./client/scss/slider/slider.scss");
/* harmony import */ var _scss_slider_slider_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_slider_slider_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/slider */ "./client/js/slider.js");



window.onload = function () {
  // eslint-disable-next-line no-unused-vars
  var sliders = _js_slider__WEBPACK_IMPORTED_MODULE_1__["default"].findAllSliders();
};
}();
/******/ })()
;
//# sourceMappingURL=slider.bundle.js.map
=======
!function(){"use strict";function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var e=function(){function e(t,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.root=t,this.lerpSpeed=i||.07,this.current=0,this.contentArea=t.querySelector("#scrolling-area"),this.items=e.queryToArray("#scrolling-area > *").map((function(t){return new Object({t:t,x:0})})),this.bindToggles(),this.bindScrollButtons(),this.updateItemPositions(!0),this.updateToggleButtons(this.current,0)}var i,n,r;return i=e,r=[{key:"moveItemImmediately",value:function(t,e,i){t.t.style.transform="translate(".concat(e,"px, ").concat(i,"px)"),t.x=e}},{key:"queryToArray",value:function(t){return Array.prototype.slice.call(document.querySelectorAll(t))}},{key:"findAllSliders",value:function(){return e.queryToArray("[data-widget='slider']").map((function(t){return new e(t)}))}}],(n=[{key:"changeCurrentIndex",value:function(t){this.current===t||this.blocked||(this.updateToggleButtons(this.current,t),this.current=t,this.updateItemPositions(!1))}},{key:"nextIndex",value:function(){this.changeCurrentIndex((this.current+1)%this.items.length)}},{key:"previousIndex",value:function(){this.changeCurrentIndex((this.current-1+this.items.length)%this.items.length)}},{key:"bindToggles",value:function(){var t=this;this.toggleArea=this.root.querySelector("#toggle-area"),this.toggles=this.items.map((function(e,i){var n=document.createElement("button");return n.classList.add("slider__toggle-element","btn"),n.onclick=t.changeCurrentIndex.bind(t,i),t.toggleArea.appendChild(n),n}))}},{key:"bindScrollButtons",value:function(){this.next=this.root.querySelector("#next-item"),this.next.onclick=this.nextIndex.bind(this),this.previous=this.root.querySelector("#previous-item"),this.previous.onclick=this.previousIndex.bind(this)}},{key:"updateToggleButtons",value:function(t,e){this.toggles[t].classList.toggle("slider__toggle-element_actived",!1),this.toggles[e].classList.toggle("slider__toggle-element_actived",!0)}},{key:"updateItemPositions",value:function(t){var i=this,n=.5*this.contentArea.offsetWidth,r=.5*this.contentArea.offsetHeight;this.fullWidth=this.items.reduce((function(t,e){return t+e.t.offsetWidth}),0);var s=.5*this.fullWidth;this.items.map((function(t,e){return(e+i.current)%i.items.length})).reduce((function(o,l){var a=n-.5*i.items[i.current].t.offsetWidth,u=r-.5*i.items[l].t.offsetHeight,c=(o+s)%i.fullWidth-s+a,h=u;return t?e.moveItemImmediately(i.items[l],c,h):i.moveItemSmooth(i.items[l],c,h),o+i.items[l].t.offsetWidth}),0)}},{key:"moveItemSmooth",value:function(t,e,i){var n=this;this.blocked=!0,t.i&&clearInterval(t.i);var r=this.lerpSpeed;r-=this.lerpSpeed*(.5*Math.random()+.1);var s=t.x;t.x=e,Math.abs(s-e)+t.t.offsetWidth===this.fullWidth?t.t.style.zIndex="0":t.t.style.zIndex="1";var o=function(){if(Math.abs(s-e)<.01)return n.blocked=!1,void clearInterval(t.i);s+=r*(e-s),t.t.style.transform="translate(".concat(s,"px, ").concat(i,"px)")}.bind(this);t.i=setInterval(o,0)}}])&&t(i.prototype,n),r&&t(i,r),Object.defineProperty(i,"prototype",{writable:!1}),e}();window.onload=function(){e.findAllSliders()}}();
>>>>>>> slider
