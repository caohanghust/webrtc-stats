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

// import { Detector } from './stat'
Object.defineProperty(exports, "__esModule", { value: true });
var stat_1 = __webpack_require__(/*! ./stat */ "./src/js/modules/stat.ts");
var Renderer = /** @class */ (function () {
    function Renderer() {
        var _this = this;
        this.update = function (stat) {
            _this.framerates.push(stat.framerate.current);
            _this.framerates.shift();
            _this.bitrates.push(stat.bitrate.current);
            _this.bitrates.shift();
            switch (_this.renderType) {
                case 1 /* Bitrate */: {
                    _this.renderSpeed(stat);
                    break;
                }
                case 0 /* Fps */: {
                    _this.renderFPS(stat);
                }
            }
        };
        this.detector = undefined;
        this.root = Renderer.generateDom();
        this.canvas = Renderer.generateCanvas();
        this.textNode = Renderer.generateTextNode();
        this.ctx = this.canvas.getContext('2d');
        this.textNode.innerText = 'No Connect';
        this.renderType = 0 /* Fps */;
        this.root.appendChild(this.canvas);
        this.root.appendChild(this.textNode);
        document.body.appendChild(this.root);
        this.initData();
        this.autoSwitch = window.setInterval(function () {
            if (_this.renderType === 0 /* Fps */) {
                _this.renderType = 1 /* Bitrate */;
            }
            else if (_this.renderType === 1 /* Bitrate */) {
                _this.renderType = 0 /* Fps */;
            }
        }, 5000);
    }
    Renderer.generateDom = function () {
        var dom = document.createElement('div');
        dom.style.cssText = "\n            position: fixed;\n            width: 100px;\n            height: 100px;\n            top: 50px;\n            right: 50px;\n            background: rgba(0, 0, 0, .7);\n        ";
        return dom;
    };
    Renderer.generateCanvas = function () {
        var canvas = document.createElement('canvas');
        canvas.setAttribute('width', '100');
        canvas.setAttribute('height', '100');
        canvas.style.cssText = "\n            position: absolute;\n            width: 100%;\n            height: 70px;\n            bottom: 0;\n            left: 0;\n        ";
        return canvas;
    };
    Renderer.generateTextNode = function () {
        var textNode = document.createElement('div');
        textNode.style.cssText = "\n            position: absolute;\n            width: 100%;\n            height: 30px;\n            line-height: 30px;\n            font-size: 12px;\n            top: 0;\n            left: 0;\n            background: rgba(4, 18, 169, .5);\n            color: rgba(59, 184, 215);\n        ";
        return textNode;
    };
    Renderer.prototype.listen = function (detector) {
        this.detector = detector;
        detector.on('update', this.update);
    };
    Renderer.prototype.reset = function () {
        this.detector.off('update', this.update);
        this.detector = undefined;
    };
    Renderer.prototype.initData = function () {
        var dataLength = 51;
        this.framerates = new Array(dataLength).fill(0);
        this.bitrates = new Array(dataLength).fill(0);
    };
    Renderer.prototype.renderSpeed = function (stat) {
        var bitrates = this.bitrates;
        var current = stat.bitrate.current;
        var text = stat_1.Stat.formatBytes(current).toUpperCase() + "/s";
        this.drawAreaChar(bitrates, "rgb(8, 255, 200)" /* Bitrate */);
        this.renderText(text, "rgb(8, 255, 200)" /* Bitrate */);
    };
    Renderer.prototype.renderFPS = function (stat) {
        var framerates = this.framerates;
        var _a = stat.framerate, current = _a.current, high = _a.high, low = _a.low;
        var text = ~~current + "FPS(" + low + "-" + high + ")";
        this.drawAreaChar(framerates, "rgb(59, 184, 215)" /* Fps */);
        this.renderText(text, "rgb(59, 184, 215)" /* Fps */);
    };
    Renderer.prototype.renderText = function (text, color) {
        this.textNode.innerText = text;
        this.textNode.style.color = color;
    };
    Renderer.prototype.drawAreaChar = function (data, color, max, min) {
        var _a = this, ctx = _a.ctx, canvas = _a.canvas;
        var width = canvas.width, height = canvas.height;
        var edge = {
            max: max ? max : Math.max.apply(Math, data),
            min: min ? min : Math.min.apply(Math, data),
        };
        var calHeight = function (num) { return ~~(height - (num - edge.min) / (edge.max - edge.min) * height * .8); };
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
        return !!(events && events[name] && events[name].length > 0);
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


/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map