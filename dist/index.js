!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){function e(){var e=t.call(this)||this;return e.stat=new s,e}return o(e,t),e.prototype.start=function(t,e){var r=this,n=this.stat;this.stop(),e&&(this.checkIntervalId=window.setInterval((function(){t&&t.getStats(null).then((function(t){n.update(t),r.emit("update",n)}))}),e))},e.prototype.stop=function(){this.checkIntervalId&&clearInterval(this.checkIntervalId)},e}(a(r(2)).default);e.Detector=i;var s=function(){function t(){this.timestamp=0,this.timestampStart=0,this.packetsLost=0,this.frame={decoded:0,dropped:0,received:0,decodedStart:0,height:0,width:0},this.bytes={received:0,receivedStart:0},this.bitrate={current:0,average:0,low:1/0,high:-1/0},this.framerate={current:0,average:0,low:1/0,high:-1/0}}return t.formatBytes=function(t){for(var e=t,r="B",n=["kB","MB","GB"],o=0,a=n.length;o<a&&!(e<1e3);o++)e/=1e3,r=n[o];return""+e.toFixed(1)+r},t.prototype.update=function(t){var e=this;t.forEach((function(t){var r=t.type,n=t.isRemote,o=t.mediaType,a=t.id,i=t.timestamp,s=t.bytesReceived,c=t.framesDropped,d=t.framesReceived,h=t.frameWidth,u=t.frameHeight,p=t.framesDecoded,l=t.packetsLost,f=t.currentRoundTripTime;"inbound-rtp"!==r||n||"video"!==o&&!a.toLowerCase().includes("video")||(e.calBitrate(t),e.calFrameRate(t),e.timestamp=i,e.timestampStart=e.timestampStart||i,e.packetsLost=l,e.bytes={received:s,receivedStart:e.bytes.receivedStart||s}),"candidate-pair"===r&&t.hasOwnProperty("currentRoundTripTime")&&(e.currentRoundTripTime=f),"track"===r&&(e.frame={dropped:c,received:d,decoded:p,width:h,height:u,decodedStart:e.frame.decodedStart||p}),"remote-candidate"===r&&(e.candidate={ip:t.ip,port:t.port,protocol:t.protocol,type:t.candidateType})}))},t.prototype.calFrameRate=function(t){var e=this.frame,r=e.decoded,n=e.decodedStart;if(r&&n){var o=~~((t.framesDecoded-r)/((t.timestamp-this.timestamp)/1e3)),a=Math.min(this.framerate.low,o),i=Math.max(this.framerate.high,o),s=~~((t.framesDecoded-n)/((t.timestamp-this.timestampStart)/1e3));this.framerate={current:o,low:a,high:i,average:s}}},t.prototype.calBitrate=function(t){var e=this.timestamp,r=this.bytes,n=r.received,o=r.receivedStart;if(n&&o&&e){var a=~~(8*(t.bytesReceived-n)/(t.timestamp-e)),i=Math.min(a,this.bitrate.low),s=Math.max(a,this.bitrate.high),c=~~(8*(t.bytesReceived-o)/(t.timestamp-this.timestampStart));Object.assign(this.bitrate,{current:a,low:i,high:s,average:c})}},t}();e.Stat=s},function(t,e,r){"use strict";function n(t){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])}Object.defineProperty(e,"__esModule",{value:!0}),n(r(0)),n(r(3))},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){this.events={}}return t.prototype.hasListener=function(t){var e=this.events;return!!e&&!!e[t]&&e[t].length>0},t.prototype.on=function(t,e,r,n){var o=this;void 0===n&&(n=!1);for(var a=this.events,i=0,s=[].concat(t);i<s.length;i++){var c=s[i];a[c]||(a[c]=[]),a[c].push([e,r,n])}return function(){return o.off(t,e)}},t.prototype.off=function(t,e){if(t||e){for(var r=this.events,n=0,o=[].concat(t);n<o.length;n++){var a=o[n];void 0!==r[a]&&(void 0!==e?r[a]=r[a].filter((function(t){return t[0]!==e})):r[a].length=0)}return this}this.events={}},t.prototype.emit=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];for(var n=!1,o=this.events[t]||[],a=0,i=o;a<i.length;a++){var s=i[a];try{var c=s[0],d=s[1],h=void 0===d?this:d,u=s[2],p=void 0!==u&&u,l=c.apply(h,e);p&&this.off(t,c),!1===l&&(n=!0)}catch(t){console.log(t)}}return n},t}();e.default=n},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0);r(4);var o=r(8),a=function(){function t(){var e=this;this.update=function(t){var r=e,n=r.showType,o=r.iconType;e.framerates.push(t.framerate.current),e.framerates.shift(),e.bitrates.push(t.bitrate.current),e.bitrates.shift(),"icon"===n?0===o?e.renderFPS(t):1===o&&e.renderSpeed(t):"table"===n&&e.renderTable(t)},this.detector=void 0,this.root=t.generateDom(),this.canvas=t.generateCanvas(),this.table=t.generateTable(),this.textNode=t.generateTextNode(),this.ctx=this.canvas.getContext("2d"),this.textNode.innerText="No Connect",this.showType="icon",this.iconType=0,this.root.appendChild(this.canvas),this.root.appendChild(this.textNode),this.root.appendChild(this.table),document.body.appendChild(this.root),this.initData(),this.bindEvent(),this.autoSwitch=window.setInterval((function(){0===e.iconType?e.iconType=1:1===e.iconType&&(e.iconType=0)}),5e3),this.setShowType(this.showType)}return t.fromPeerConnection=function(e,r){var o=new n.Detector,a=new t;return a.listen(o),o.start(e,r),a},t.formatTime=function(t){var e=t,r=~~(e/3600),n=~~((e%=3600)/60),o=~~(e%=60);return r?r+"h"+n+"m"+o+"s":n?n+"m"+o+"s":o+"s"},t.generateDom=function(){var t=o.getScale(),e=document.createElement("div");return e.classList.add("webrtc-stat-root"),e.style.fontSize=12*t+"px",e},t.generateCanvas=function(){var t=document.createElement("canvas");return t.setAttribute("width","100"),t.setAttribute("height","100"),t.classList.add("webrtc-stat-canvas"),t},t.generateTable=function(){var t=document.createElement("table");return t.classList.add("webrtc-stat-table"),t},t.generateTextNode=function(){var t=document.createElement("div");return t.classList.add("webrtc-stat-text"),t},t.prototype.setSize=function(t){this.root.style.transform="scale("+t+")"},t.prototype.listen=function(t){this.detector=t,t.on("update",this.update)},t.prototype.reset=function(){this.detector.off("update",this.update),this.detector=void 0},t.prototype.setShowType=function(t){this.showType=t,this.root.setAttribute("show-type",t)},t.prototype.initData=function(){this.framerates=new Array(51).fill(0),this.bitrates=new Array(51).fill(0)},t.prototype.bindEvent=function(){var t=this;this.root.addEventListener("click",(function(){"icon"===t.showType?t.setShowType("table"):"table"===t.showType&&t.setShowType("icon")}))},t.prototype.renderTable=function(e){var r=this.table,o='\n            <tbody>\n                <tr><th colspan="4" class="title">Core Stats</th></tr>\n                <tr><th>Time</th><th>Received</th><th>PacketsLost</th><th>Latency</th></tr>\n                <tr>\n                    <td>'+t.formatTime((e.timestamp-e.timestampStart)/1e3)+"</td>\n                    <td>"+n.Stat.formatBytes(e.bytes.received)+"</td>\n                    <td>"+e.packetsLost+"</td>\n                    <td>"+~~(1e3*e.currentRoundTripTime)+'</td>\n                </tr>\n                <tr><th colspan="4" class="title">Frame Stats</th></tr>\n                <tr><th>Received</th><th>Decoded</th><th>Dropped</th><th>Size</th></tr>\n                <tr>\n                    <td>'+e.frame.received+"</td>\n                    <td>"+e.frame.decoded+"</td>\n                    <td>"+e.frame.dropped+"</td>\n                    <td>"+e.frame.width+"x"+e.frame.height+'</td> \n                </tr> \n                <tr><th colspan="4" class="title">Bitrate Stats (kbps)</th></tr>\n                <tr><th>current</th><th>average</th><th>low</th><th>high</th></tr>\n                <tr>\n                    <td>'+e.bitrate.current+"</td>\n                    <td>"+e.bitrate.average+"</td>\n                    <td>"+e.bitrate.low+"</td>\n                    <td>"+e.bitrate.high+'</td>\n                </tr>\n                <tr><th colspan="4" class="title">Candidate Info</th></tr>\n                <tr><th>ip</th><th>port</th><th>protocol</th><th>type</th></tr>\n                <tr>\n                    <td>'+e.candidate.ip+"</td>\n                    <td>"+e.candidate.port+"</td>\n                    <td>"+e.candidate.protocol+"</td>\n                    <td>"+e.candidate.type+"</td>\n                </tr>\n            </tbody>\n        ";r.innerHTML=o},t.prototype.renderSpeed=function(t){var e=this.bitrates,r=t.bitrate.current,o=n.Stat.formatBytes(r/8*1e3).toUpperCase()+"/s";this.drawAreaChart(e,"rgb(8, 255, 200)",{min:0}),this.renderText(o,"rgb(8, 255, 200)")},t.prototype.renderFPS=function(t){var e=this.framerates,r=t.framerate,n=r.current,o=r.high,a=~~n+"FPS("+r.low+"-"+o+")";this.drawAreaChart(e,"rgb(59, 184, 215)",{min:0}),this.renderText(a,"rgb(59, 184, 215)")},t.prototype.renderText=function(t,e){this.textNode.innerText=t,this.textNode.style.color=e},t.prototype.drawAreaChart=function(t,e,r){var n,o=this.ctx,a=this.canvas,i=a.width,s=a.height,c=r.max,d=void 0===c?Math.max.apply(Math,t):c,h=r.min,u=void 0===h?Math.min.apply(Math,t):h,p=i/(t.length-1);o.clearRect(0,0,i,s),o.beginPath(),o.moveTo(0,s);for(var l=0,f=t.length;l<f;l++){var v=l*p,m=(n=t[l],~~(s-(n-u)/(d-u)*s*.8));o.lineTo(v,m)}o.lineTo(i,s),o.closePath(),o.fillStyle=e,o.fill()},t}();e.Renderer=a},function(t,e,r){var n=r(5);"string"==typeof n&&(n=[[t.i,n,""]]);var o={insert:"head",singleton:!1};r(7)(n,o);n.locals&&(t.exports=n.locals)},function(t,e,r){(t.exports=r(6)(!1)).push([t.i,".webrtc-stat-root{position:fixed;background:rgba(0,0,0,.7);font-size:12px}.webrtc-stat-root[show-type=icon]{width:8em;height:8em;top:4em;right:4em}.webrtc-stat-root[show-type=icon] .webrtc-stat-canvas,.webrtc-stat-root[show-type=icon] .webrtc-stat-text{display:block}.webrtc-stat-root[show-type=icon] .webrtc-stat-table{display:none}.webrtc-stat-root[show-type=table]{top:4em;width:25em;height:auto;left:0;right:0;margin:auto;background:rgba(0,0,0,.3);display:inline-block}.webrtc-stat-root[show-type=table] .webrtc-stat-table{display:table;margin:auto}.webrtc-stat-root[show-type=table] .webrtc-stat-table .title{text-align:center}.webrtc-stat-root[show-type=table] .webrtc-stat-table td,.webrtc-stat-root[show-type=table] .webrtc-stat-table th{text-align:left}.webrtc-stat-root[show-type=table] .webrtc-stat-canvas,.webrtc-stat-root[show-type=table] .webrtc-stat-text{display:none}.webrtc-stat-root .webrtc-stat-canvas{position:absolute;width:100%;height:6em;bottom:0;left:0}.webrtc-stat-root .webrtc-stat-text{position:absolute;width:100%;height:2em;line-height:2em;font-size:1em;top:0;left:0;background:rgba(4,18,169,.5);color:#3bb8d7}",""])},function(t,e,r){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var o=(i=n,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),a=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot).concat(t," */")}));return[r].concat(a).concat([o]).join("\n")}var i,s,c;return[r].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(r,"}"):r})).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(n[a]=!0)}for(var i=0;i<t.length;i++){var s=t[i];null!=s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="(".concat(s[2],") and (").concat(r,")")),e.push(s))}},e}},function(t,e,r){"use strict";var n,o={},a=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var t={};return function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}t[e]=r}return t[e]}}();function s(t,e){for(var r=[],n={},o=0;o<t.length;o++){var a=t[o],i=e.base?a[0]+e.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};n[i]?n[i].parts.push(s):r.push(n[i]={id:i,parts:[s]})}return r}function c(t,e){for(var r=0;r<t.length;r++){var n=t[r],a=o[n.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](n.parts[i]);for(;i<n.parts.length;i++)a.parts.push(m(n.parts[i],e))}else{for(var s=[];i<n.parts.length;i++)s.push(m(n.parts[i],e));o[n.id]={id:n.id,refs:1,parts:s}}}}function d(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var n=r.nc;n&&(t.attributes.nonce=n)}if(Object.keys(t.attributes).forEach((function(r){e.setAttribute(r,t.attributes[r])})),"function"==typeof t.insert)t.insert(e);else{var o=i(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var h,u=(h=[],function(t,e){return h[t]=e,h.filter(Boolean).join("\n")});function p(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=u(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function l(t,e,r){var n=r.css,o=r.media,a=r.sourceMap;if(o&&t.setAttribute("media",o),a&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var f=null,v=0;function m(t,e){var r,n,o;if(e.singleton){var a=v++;r=f||(f=d(e)),n=p.bind(null,r,a,!1),o=p.bind(null,r,a,!0)}else r=d(e),n=l.bind(null,r,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a());var r=s(t,e);return c(r,e),function(t){for(var n=[],a=0;a<r.length;a++){var i=r[a],d=o[i.id];d&&(d.refs--,n.push(d))}t&&c(s(t,e),e);for(var h=0;h<n.length;h++){var u=n[h];if(0===u.refs){for(var p=0;p<u.parts.length;p++)u.parts[p]();delete o[u.id]}}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getScale=function(){var t=1,e=document.head.getElementsByTagName("meta"),r=Array.prototype.filter.call(e,(function(t){return"viewport"===t.name}))[0];if(r){var n=r.content,o=Number(n.match(/\binitial-scale=([\d.]*)\b/)[1]);o&&!Number.isNaN(o)&&(t=1/o)}return t}}])}));