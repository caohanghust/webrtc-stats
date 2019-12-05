!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){"use strict";var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(){var e=t.call(this)||this;return e.stat=new s,e}return i(e,t),e.prototype.start=function(t,e){var r=this,n=this.stat;this.stop(),e&&(this.checkIntervalId=window.setInterval((function(){t&&t.getStats(null).then((function(t){n.update(t),r.emit("update",n)}))}),e))},e.prototype.stop=function(){this.checkIntervalId&&clearInterval(this.checkIntervalId)},e}(o(r(2)).default);e.Detector=a;var s=function(){function t(){this.timestamp=0,this.timestampStart=0,this.packetsLost=0,this.frame={decoded:0,dropped:0,received:0,decodedStart:0,height:0,width:0},this.bytes={received:0,receivedStart:0},this.bitrate={current:0,average:0,low:1/0,high:-1/0},this.framerate={current:0,average:0,low:1/0,high:-1/0}}return t.formatBytes=function(t){for(var e=t,r="B",n=["kB","MB","GB"],i=0,o=n.length;i<o&&!(e<1e3);i++)e/=1e3,r=n[i];return""+e.toFixed(1)+r},t.prototype.update=function(t){var e=this;t.forEach((function(t){var r=t.type,n=t.isRemote,i=t.mediaType,o=t.id,a=t.timestamp,s=t.bytesReceived,c=t.framesDropped,d=t.framesReceived,u=t.frameWidth,h=t.frameHeight,p=t.framesDecoded,f=t.packetsLost,l=t.currentRoundTripTime;"inbound-rtp"!==r||n||"video"!==i&&!o.toLowerCase().includes("video")||(e.calBitrate(t),e.calFrameRate(t),e.timestamp=a,e.timestampStart=e.timestampStart||a,e.packetsLost=f,e.bytes={received:s,receivedStart:e.bytes.receivedStart||s}),"candidate-pair"===r&&t.hasOwnProperty("currentRoundTripTime")&&(e.currentRoundTripTime=l),"track"===r&&(e.frame={dropped:c,received:d,decoded:p,width:u,height:h,decodedStart:e.frame.decodedStart||p})}))},t.prototype.calFrameRate=function(t){var e=this.frame,r=e.decoded,n=e.decodedStart;if(r&&n){var i=~~((t.framesDecoded-r)/((t.timestamp-this.timestamp)/1e3)),o=Math.min(this.framerate.low,i),a=Math.max(this.framerate.high,i),s=~~((t.framesDecoded-n)/((t.timestamp-this.timestampStart)/1e3));this.framerate={current:i,low:o,high:a,average:s}}},t.prototype.calBitrate=function(t){var e=this.timestamp,r=this.bytes,n=r.received,i=r.receivedStart;if(n&&i&&e){var o=~~(8*(t.bytesReceived-n)/(t.timestamp-e)),a=Math.min(o,this.bitrate.low),s=Math.max(o,this.bitrate.high),c=~~(8*(t.bytesReceived-i)/(t.timestamp-this.timestampStart));Object.assign(this.bitrate,{current:o,low:a,high:s,average:c})}},t}();e.Stat=s},function(t,e,r){"use strict";function n(t){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])}Object.defineProperty(e,"__esModule",{value:!0}),n(r(0)),n(r(3))},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){this.events={}}return t.prototype.hasListener=function(t){var e=this.events;return!!(e&&e[t]&&e[t].length>0)},t.prototype.on=function(t,e,r,n){var i=this;void 0===n&&(n=!1);for(var o=this.events,a=0,s=[].concat(t);a<s.length;a++){var c=s[a];o[c]||(o[c]=[]),o[c].push([e,r,n])}return function(){return i.off(t,e)}},t.prototype.off=function(t,e){if(t||e){for(var r=this.events,n=0,i=[].concat(t);n<i.length;n++){var o=i[n];void 0!==r[o]&&(void 0!==e?r[o]=r[o].filter((function(t){return t[0]!==e})):r[o].length=0)}return this}this.events={}},t.prototype.emit=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];for(var n=!1,i=this.events[t]||[],o=0,a=i;o<a.length;o++){var s=a[o];try{var c=s[0],d=s[1],u=void 0===d?this:d,h=s[2],p=void 0!==h&&h,f=c.apply(u,e);p&&this.off(t,c),!1===f&&(n=!0)}catch(t){console.log(t)}}return n},t}();e.default=n},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),i=function(){function t(){var e=this;this.update=function(t){switch(e.framerates.push(t.framerate.current),e.framerates.shift(),e.bitrates.push(t.bitrate.current),e.bitrates.shift(),e.renderType){case 1:e.renderSpeed(t);break;case 0:e.renderFPS(t)}},this.detector=void 0,this.root=t.generateDom(),this.canvas=t.generateCanvas(),this.textNode=t.generateTextNode(),this.ctx=this.canvas.getContext("2d"),this.textNode.innerText="No Connect",this.renderType=0,this.root.appendChild(this.canvas),this.root.appendChild(this.textNode),document.body.appendChild(this.root),this.initData(),this.autoSwitch=window.setInterval((function(){0===e.renderType?e.renderType=1:1===e.renderType&&(e.renderType=0)}),5e3)}return t.generateDom=function(){var t=document.createElement("div");return t.style.cssText="\n            position: fixed;\n            width: 100px;\n            height: 100px;\n            top: 50px;\n            right: 50px;\n            background: rgba(0, 0, 0, .7);\n        ",t},t.generateCanvas=function(){var t=document.createElement("canvas");return t.setAttribute("width","100"),t.setAttribute("height","100"),t.style.cssText="\n            position: absolute;\n            width: 100%;\n            height: 70px;\n            bottom: 0;\n            left: 0;\n        ",t},t.generateTextNode=function(){var t=document.createElement("div");return t.style.cssText="\n            position: absolute;\n            width: 100%;\n            height: 30px;\n            line-height: 30px;\n            font-size: 12px;\n            top: 0;\n            left: 0;\n            background: rgba(4, 18, 169, .5);\n            color: rgba(59, 184, 215);\n        ",t},t.prototype.listen=function(t){this.detector=t,t.on("update",this.update)},t.prototype.reset=function(){this.detector.off("update",this.update),this.detector=void 0},t.prototype.initData=function(){this.framerates=new Array(51).fill(0),this.bitrates=new Array(51).fill(0)},t.prototype.renderSpeed=function(t){var e=this.bitrates,r=t.bitrate.current,i=n.Stat.formatBytes(r).toUpperCase()+"/s";this.drawAreaChar(e,"rgb(8, 255, 200)"),this.renderText(i,"rgb(8, 255, 200)")},t.prototype.renderFPS=function(t){var e=this.framerates,r=t.framerate,n=r.current,i=r.high,o=~~n+"FPS("+r.low+"-"+i+")";this.drawAreaChar(e,"rgb(59, 184, 215)"),this.renderText(o,"rgb(59, 184, 215)")},t.prototype.renderText=function(t,e){this.textNode.innerText=t,this.textNode.style.color=e},t.prototype.drawAreaChar=function(t,e,r,n){var i,o=this.ctx,a=this.canvas,s=a.width,c=a.height,d=r||Math.max.apply(Math,t),u=n||Math.min.apply(Math,t),h=s/(t.length-1);o.clearRect(0,0,s,c),o.beginPath(),o.moveTo(0,c);for(var p=0,f=t.length;p<f;p++){var l=p*h,v=(i=t[p],~~(c-(i-u)/(d-u)*c*.8));o.lineTo(l,v)}o.lineTo(s,c),o.closePath(),o.fillStyle=e,o.fill()},t}();e.Renderer=i}])}));
//# sourceMappingURL=index.js.map