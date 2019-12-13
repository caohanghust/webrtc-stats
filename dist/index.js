(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_css-loader@3.3.0@css-loader/dist/cjs.js!./scripts/loaders/css-minify-loader.js!./node_modules/_stylus-loader@3.0.2@stylus-loader/index.js!./src/css/main.styl":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@3.3.0@css-loader/dist/cjs.js!./scripts/loaders/css-minify-loader.js!./node_modules/_stylus-loader@3.0.2@stylus-loader!./src/css/main.styl ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@3.3.0@css-loader/dist/runtime/api.js */ "./node_modules/_css-loader@3.3.0@css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".webrtc-stat-root{position:fixed;background:rgba(0,0,0,.7);font-size:12px}.webrtc-stat-root[show-type=icon]{width:8em;height:8em;top:4em;right:4em}.webrtc-stat-root[show-type=icon] .webrtc-stat-canvas,.webrtc-stat-root[show-type=icon] .webrtc-stat-text{display:block}.webrtc-stat-root[show-type=icon] .webrtc-stat-table{display:none}.webrtc-stat-root[show-type=table]{top:4em;width:25em;height:auto;left:0;right:0;margin:auto;background:rgba(0,0,0,.3);display:inline-block}.webrtc-stat-root[show-type=table] .webrtc-stat-table{display:table;margin:auto}.webrtc-stat-root[show-type=table] .webrtc-stat-table .title{text-align:center}.webrtc-stat-root[show-type=table] .webrtc-stat-table td,.webrtc-stat-root[show-type=table] .webrtc-stat-table th{text-align:left}.webrtc-stat-root[show-type=table] .webrtc-stat-canvas,.webrtc-stat-root[show-type=table] .webrtc-stat-text{display:none}.webrtc-stat-root .webrtc-stat-canvas{position:absolute;width:100%;height:6em;bottom:0;left:0}.webrtc-stat-root .webrtc-stat-text{position:absolute;width:100%;height:2em;line-height:2em;font-size:1em;top:0;left:0;background:rgba(4,18,169,.5);color:#3bb8d7}", ""]);


/***/ }),

/***/ "./node_modules/_css-loader@3.3.0@css-loader/dist/runtime/api.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_css-loader@3.3.0@css-loader/dist/runtime/api.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/_style-loader@1.0.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/_style-loader@1.0.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/css/main.styl":
/*!***************************!*\
  !*** ./src/css/main.styl ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/_css-loader@3.3.0@css-loader/dist/cjs.js!../../scripts/loaders/css-minify-loader.js!../../node_modules/_stylus-loader@3.0.2@stylus-loader!./main.styl */ "./node_modules/_css-loader@3.3.0@css-loader/dist/cjs.js!./scripts/loaders/css-minify-loader.js!./node_modules/_stylus-loader@3.0.2@stylus-loader/index.js!./src/css/main.styl");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/_style-loader@1.0.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/_style-loader@1.0.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/js/index.ts":
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./modules/stat */ "./src/js/modules/stat.ts"));
__export(__webpack_require__(/*! ./modules/renderer */ "./src/js/modules/renderer.ts"));


/***/ }),

/***/ "./src/js/modules/renderer.ts":
/*!************************************!*\
  !*** ./src/js/modules/renderer.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var stat_1 = __webpack_require__(/*! ./stat */ "./src/js/modules/stat.ts");
__webpack_require__(/*! ../../css/main.styl */ "./src/css/main.styl");
var viewport_1 = __webpack_require__(/*! @utils/viewport */ "./src/js/utils/viewport.ts");
var Renderer = /** @class */ (function () {
    function Renderer() {
        var _this = this;
        this.update = function (stat) {
            var _a = _this, showType = _a.showType, iconType = _a.iconType;
            _this.framerates.push(stat.framerate.current);
            _this.framerates.shift();
            _this.bitrates.push(stat.bitrate.current);
            _this.bitrates.shift();
            if (showType === "icon" /* Icon */) {
                if (iconType === 0 /* Fps */) {
                    _this.renderFPS(stat);
                }
                else if (iconType === 1 /* Bitrate */) {
                    _this.renderSpeed(stat);
                }
            }
            else if (showType === "table" /* Table */) {
                _this.renderTable(stat);
            }
        };
        this.detector = undefined;
        this.root = Renderer.generateDom();
        this.canvas = Renderer.generateCanvas();
        this.table = Renderer.generateTable();
        this.textNode = Renderer.generateTextNode();
        this.ctx = this.canvas.getContext('2d');
        this.textNode.innerText = 'No Connect';
        this.showType = "icon" /* Icon */;
        this.iconType = 0 /* Fps */;
        this.root.appendChild(this.canvas);
        this.root.appendChild(this.textNode);
        this.root.appendChild(this.table);
        document.body.appendChild(this.root);
        this.initData();
        this.bindEvent();
        this.autoSwitch = window.setInterval(function () {
            if (_this.iconType === 0 /* Fps */) {
                _this.iconType = 1 /* Bitrate */;
            }
            else if (_this.iconType === 1 /* Bitrate */) {
                _this.iconType = 0 /* Fps */;
            }
        }, 5000);
        this.setShowType(this.showType);
    }
    Renderer.fromPeerConnection = function (pc, interval) {
        var detector = new stat_1.Detector();
        var renderer = new Renderer();
        renderer.listen(detector);
        detector.start(pc, interval);
        return renderer;
    };
    Renderer.formatTime = function (_time) {
        var time = _time;
        var h = ~~(time / 3600);
        time = time % 3600;
        var m = ~~(time / 60);
        time = time % 60;
        var s = ~~time;
        if (h) {
            return h + "h" + m + "m" + s + "s";
        }
        if (m) {
            return m + "m" + s + "s";
        }
        return s + "s";
    };
    Renderer.generateDom = function () {
        var scale = viewport_1.getScale();
        var dom = document.createElement('div');
        dom.classList.add('webrtc-stat-root');
        dom.style.fontSize = 12 * scale + "px";
        return dom;
    };
    Renderer.generateCanvas = function () {
        var canvas = document.createElement('canvas');
        canvas.setAttribute('width', '100');
        canvas.setAttribute('height', '100');
        canvas.classList.add('webrtc-stat-canvas');
        return canvas;
    };
    Renderer.generateTable = function () {
        var table = document.createElement('table');
        table.classList.add('webrtc-stat-table');
        return table;
    };
    Renderer.generateTextNode = function () {
        var textNode = document.createElement('div');
        textNode.classList.add('webrtc-stat-text');
        return textNode;
    };
    Renderer.prototype.setSize = function (scale) {
        var root = this.root;
        root.style.transform = "scale(" + scale + ")";
    };
    Renderer.prototype.listen = function (detector) {
        this.detector = detector;
        detector.on('update', this.update);
    };
    Renderer.prototype.reset = function () {
        this.detector.off('update', this.update);
        this.detector = undefined;
    };
    Renderer.prototype.setShowType = function (showType) {
        this.showType = showType;
        this.root.setAttribute('show-type', showType);
    };
    Renderer.prototype.initData = function () {
        var dataLength = 51;
        this.framerates = new Array(dataLength).fill(0);
        this.bitrates = new Array(dataLength).fill(0);
    };
    Renderer.prototype.bindEvent = function () {
        var _this = this;
        var root = this.root;
        root.addEventListener('click', function () {
            if (_this.showType === "icon" /* Icon */) {
                _this.setShowType("table" /* Table */);
            }
            else if (_this.showType === "table" /* Table */) {
                _this.setShowType("icon" /* Icon */);
            }
        });
    };
    Renderer.prototype.renderTable = function (stat) {
        var table = this.table;
        var time = Renderer.formatTime((stat.timestamp - stat.timestampStart) / 1000);
        var tableContent = "\n            <tbody>\n                <tr><th colspan=\"4\" class=\"title\">Core Stats</th></tr>\n                <tr><th>Time</th><th>Received</th><th>PacketsLost</th><th>Latency</th></tr>\n                <tr>\n                    <td>" + time + "</td>\n                    <td>" + stat_1.Stat.formatBytes(stat.bytes.received) + "</td>\n                    <td>" + stat.packetsLost + "</td>\n                    <td>" + ~~(stat.currentRoundTripTime * 1000) + "</td>\n                </tr>\n                <tr><th colspan=\"4\" class=\"title\">Frame Stats</th></tr>\n                <tr><th>Received</th><th>Decoded</th><th>Dropped</th><th>Size</th></tr>\n                <tr>\n                    <td>" + stat.frame.received + "</td>\n                    <td>" + stat.frame.decoded + "</td>\n                    <td>" + stat.frame.dropped + "</td>\n                    <td>" + (stat.frame.width + 'x' + stat.frame.height) + "</td> \n                </tr> \n                <tr><th colspan=\"4\" class=\"title\">Bitrate Stats (kbps)</th></tr>\n                <tr><th>current</th><th>average</th><th>low</th><th>high</th></tr>\n                <tr>\n                    <td>" + stat.bitrate.current + "</td>\n                    <td>" + stat.bitrate.average + "</td>\n                    <td>" + stat.bitrate.low + "</td>\n                    <td>" + stat.bitrate.high + "</td>\n                </tr>\n                <tr><th colspan=\"4\" class=\"title\">Candidate Info</th></tr>\n                <tr><th>ip</th><th>port</th><th>protocol</th><th>type</th></tr>\n                <tr>\n                    <td>" + stat.candidate.ip + "</td>\n                    <td>" + stat.candidate.port + "</td>\n                    <td>" + stat.candidate.protocol + "</td>\n                    <td>" + stat.candidate.type + "</td>\n                </tr>\n            </tbody>\n        ";
        table.innerHTML = tableContent;
    };
    Renderer.prototype.renderSpeed = function (stat) {
        var bitrates = this.bitrates;
        var current = stat.bitrate.current;
        var text = stat_1.Stat.formatBytes(current / 8 * 1000).toUpperCase() + "/s";
        this.drawAreaChart(bitrates, "rgb(8, 255, 200)" /* Bitrate */, { min: 0 });
        this.renderText(text, "rgb(8, 255, 200)" /* Bitrate */);
    };
    Renderer.prototype.renderFPS = function (stat) {
        var framerates = this.framerates;
        var _a = stat.framerate, current = _a.current, high = _a.high, low = _a.low;
        var text = ~~current + "FPS(" + low + "-" + high + ")";
        this.drawAreaChart(framerates, "rgb(59, 184, 215)" /* Fps */, { min: 0 });
        this.renderText(text, "rgb(59, 184, 215)" /* Fps */);
    };
    Renderer.prototype.renderText = function (text, color) {
        this.textNode.innerText = text;
        this.textNode.style.color = color;
    };
    Renderer.prototype.drawAreaChart = function (data, color, edge) {
        var _a = this, ctx = _a.ctx, canvas = _a.canvas;
        var width = canvas.width, height = canvas.height;
        var _b = edge.max, max = _b === void 0 ? Math.max.apply(Math, data) : _b, _c = edge.min, min = _c === void 0 ? Math.min.apply(Math, data) : _c;
        var calHeight = function (num) { return ~~(height - (num - min) / (max - min) * height * .8); };
        var wStep = width / (data.length - 1);
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.moveTo(0, height);
        for (var i = 0, len = data.length; i < len; i++) {
            var x = i * wStep;
            var y = calHeight(data[i]);
            ctx.lineTo(x, y);
        }
        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
    };
    return Renderer;
}());
exports.Renderer = Renderer;


/***/ }),

/***/ "./src/js/modules/stat.ts":
/*!********************************!*\
  !*** ./src/js/modules/stat.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var subscribe_1 = __importDefault(__webpack_require__(/*! @utils/subscribe */ "./src/js/utils/subscribe.ts"));
var Detector = /** @class */ (function (_super) {
    __extends(Detector, _super);
    function Detector() {
        var _this = _super.call(this) || this;
        _this.stat = new Stat();
        return _this;
    }
    Detector.prototype.start = function (pc, interval) {
        var _this = this;
        var stat = this.stat;
        this.stop();
        if (!interval)
            return;
        this.checkIntervalId = window.setInterval(function () {
            if (!pc)
                return;
            pc.getStats(null).then(function (rawStats) {
                stat.update(rawStats);
                _this.emit('update', stat);
            });
        }, interval);
    };
    Detector.prototype.stop = function () {
        if (this.checkIntervalId) {
            clearInterval(this.checkIntervalId);
        }
    };
    return Detector;
}(subscribe_1.default));
exports.Detector = Detector;
var Stat = /** @class */ (function () {
    function Stat() {
        this.timestamp = 0;
        this.timestampStart = 0;
        this.packetsLost = 0;
        this.frame = { decoded: 0, dropped: 0, received: 0, decodedStart: 0, height: 0, width: 0 };
        this.bytes = { received: 0, receivedStart: 0 };
        this.bitrate = { current: 0, average: 0, low: Infinity, high: -Infinity };
        this.framerate = { current: 0, average: 0, low: Infinity, high: -Infinity };
    }
    Stat.formatBytes = function (bytes) {
        var size = bytes;
        var receivedBytesMeasurement = 'B';
        var dataMeasurements = ['kB', 'MB', 'GB'];
        for (var index = 0, len = dataMeasurements.length; index < len; index++) {
            if (size < 1000)
                break;
            size = size / 1000;
            receivedBytesMeasurement = dataMeasurements[index];
        }
        return "" + size.toFixed(1) + receivedBytesMeasurement;
    };
    Stat.prototype.update = function (rawStats) {
        var _this = this;
        rawStats.forEach(function (rawStat) {
            var type = rawStat.type, isRemote = rawStat.isRemote, mediaType = rawStat.mediaType, id = rawStat.id, timestamp = rawStat.timestamp, bytesReceived = rawStat.bytesReceived, framesDropped = rawStat.framesDropped, framesReceived = rawStat.framesReceived, frameWidth = rawStat.frameWidth, frameHeight = rawStat.frameHeight, framesDecoded = rawStat.framesDecoded, packetsLost = rawStat.packetsLost, currentRoundTripTime = rawStat.currentRoundTripTime;
            if (type === 'inbound-rtp' && !isRemote && (mediaType === 'video' || id.toLowerCase().includes('video'))) {
                _this.calBitrate(rawStat);
                _this.calFrameRate(rawStat);
                _this.timestamp = timestamp;
                _this.timestampStart = _this.timestampStart || timestamp;
                _this.packetsLost = packetsLost;
                _this.bytes = { received: bytesReceived, receivedStart: _this.bytes.receivedStart || bytesReceived };
            }
            if (type === 'candidate-pair' && rawStat.hasOwnProperty('currentRoundTripTime')) {
                _this.currentRoundTripTime = currentRoundTripTime;
            }
            if (type === 'track') {
                _this.frame = {
                    dropped: framesDropped,
                    received: framesReceived,
                    decoded: framesDecoded,
                    width: frameWidth,
                    height: frameHeight,
                    decodedStart: _this.frame.decodedStart || framesDecoded,
                };
            }
            if (type === 'remote-candidate') {
                _this.candidate = {
                    ip: rawStat.ip,
                    port: rawStat.port,
                    protocol: rawStat.protocol,
                    type: rawStat.candidateType
                };
            }
        });
    };
    Stat.prototype.calFrameRate = function (rawStat) {
        var _a = this.frame, decoded = _a.decoded, decodedStart = _a.decodedStart;
        if (decoded && decodedStart) {
            var current = ~~((rawStat.framesDecoded - decoded) / ((rawStat.timestamp - this.timestamp) / 1000));
            var low = Math.min(this.framerate.low, current);
            var high = Math.max(this.framerate.high, current);
            var average = ~~((rawStat.framesDecoded - decodedStart) / ((rawStat.timestamp - this.timestampStart) / 1000));
            this.framerate = { current: current, low: low, high: high, average: average };
        }
    };
    Stat.prototype.calBitrate = function (rawStat) {
        var timestamp = this.timestamp;
        var _a = this.bytes, received = _a.received, receivedStart = _a.receivedStart;
        if (received && receivedStart && timestamp) {
            var current = ~~(8 * (rawStat.bytesReceived - received) / (rawStat.timestamp - timestamp));
            var low = Math.min(current, this.bitrate.low);
            var high = Math.max(current, this.bitrate.high);
            var average = ~~(8 * (rawStat.bytesReceived - receivedStart) / (rawStat.timestamp - this.timestampStart));
            Object.assign(this.bitrate, { current: current, low: low, high: high, average: average });
        }
    };
    return Stat;
}());
exports.Stat = Stat;


/***/ }),

/***/ "./src/js/utils/subscribe.ts":
/*!***********************************!*\
  !*** ./src/js/utils/subscribe.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscribe = /** @class */ (function () {
    function Subscribe() {
        this.events = {};
    }
    Subscribe.prototype.hasListener = function (name) {
        var events = this.events;
        return (!!events &&
            !!events[name] &&
            events[name].length > 0);
    };
    Subscribe.prototype.on = function (names, callback, context, once) {
        var _this = this;
        if (once === void 0) { once = false; }
        var events = this.events;
        for (var _i = 0, _a = [].concat(names); _i < _a.length; _i++) {
            var name_1 = _a[_i];
            if (!events[name_1]) {
                events[name_1] = [];
            }
            events[name_1].push([callback, context, once]);
        }
        return function () { return _this.off(names, callback); };
    };
    Subscribe.prototype.off = function (names, callback) {
        if (!names && !callback) {
            this.events = {};
            return;
        }
        var events = this.events;
        for (var _i = 0, _a = [].concat(names); _i < _a.length; _i++) {
            var name_2 = _a[_i];
            if (events[name_2] === undefined)
                continue;
            if (callback === undefined) {
                events[name_2].length = 0;
                continue;
            }
            events[name_2] = events[name_2].filter(function (one) { return one[0] !== callback; });
        }
        return this;
    };
    Subscribe.prototype.emit = function (name) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        var canceled = false;
        var event = this.events[name] || [];
        for (var _a = 0, event_1 = event; _a < event_1.length; _a++) {
            var one = event_1[_a];
            try {
                var callback = one[0], _b = one[1], context = _b === void 0 ? this : _b, _c = one[2], once = _c === void 0 ? false : _c;
                var result = callback.apply(context, data);
                if (once)
                    this.off(name, callback);
                if (result === false)
                    canceled = true;
            }
            catch (e) {
                console.log(e);
            }
        }
        return canceled;
    };
    return Subscribe;
}());
exports.default = Subscribe;


/***/ }),

/***/ "./src/js/utils/viewport.ts":
/*!**********************************!*\
  !*** ./src/js/utils/viewport.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getScale() {
    var scale = 1;
    var metas = document.head.getElementsByTagName('meta');
    var viewportMeta = Array.prototype.filter.call(metas, function (i) { return i.name === 'viewport'; })[0];
    if (viewportMeta) {
        var content = viewportMeta.content;
        var initialScale = Number(content.match(/\binitial-scale=([\d.]*)\b/)[1]);
        if (initialScale && !Number.isNaN(initialScale)) {
            scale = 1 / initialScale;
        }
    }
    return scale;
}
exports.getScale = getScale;


/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map