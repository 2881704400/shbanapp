webpackJsonp([2],{NC6I:function(module,exports,__webpack_require__){(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
!function(){"use strict";var ERROR="input is invalid type",WINDOW="object"==typeof window,root=WINDOW?window:{};root.JS_MD5_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"==typeof self,NODE_JS=!root.JS_MD5_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;NODE_JS?root=global:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_MD5_NO_COMMON_JS&&"object"==typeof module&&module.exports,AMD=__webpack_require__("nErl"),ARRAY_BUFFER=!root.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[128,32768,8388608,-2147483648],SHIFT=[0,8,16,24],OUTPUT_TYPES=["hex","array","digest","buffer","arrayBuffer","base64"],BASE64_ENCODE_CHAR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),blocks=[],buffer8;if(ARRAY_BUFFER){var buffer=new ArrayBuffer(68);buffer8=new Uint8Array(buffer),blocks=new Uint32Array(buffer)}!root.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!ARRAY_BUFFER||!root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var createOutputMethod=function(t){return function(e){return new Md5(!0).update(e)[t]()}},createMethod=function(){var t=createOutputMethod("hex");NODE_JS&&(t=nodeWrap(t)),t.create=function(){return new Md5},t.update=function(e){return t.create().update(e)};for(var e=0;e<OUTPUT_TYPES.length;++e){var r=OUTPUT_TYPES[e];t[r]=createOutputMethod(r)}return t},nodeWrap=function(method){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),nodeMethod=function(t){if("string"==typeof t)return crypto.createHash("md5").update(t,"utf8").digest("hex");if(null===t||void 0===t)throw ERROR;return t.constructor===ArrayBuffer&&(t=new Uint8Array(t)),Array.isArray(t)||ArrayBuffer.isView(t)||t.constructor===Buffer?crypto.createHash("md5").update(new Buffer(t)).digest("hex"):method(t)};return nodeMethod};function Md5(t){if(t)blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks,this.buffer8=buffer8;else if(ARRAY_BUFFER){var e=new ArrayBuffer(68);this.buffer8=new Uint8Array(e),this.blocks=new Uint32Array(e)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}Md5.prototype.update=function(t){if(!this.finalized){var e,r=typeof t;if("string"!==r){if("object"!==r)throw ERROR;if(null===t)throw ERROR;if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||ARRAY_BUFFER&&ArrayBuffer.isView(t)))throw ERROR;e=!0}for(var s,o,i=0,a=t.length,n=this.blocks,h=this.buffer8;i<a;){if(this.hashed&&(this.hashed=!1,n[0]=n[16],n[16]=n[1]=n[2]=n[3]=n[4]=n[5]=n[6]=n[7]=n[8]=n[9]=n[10]=n[11]=n[12]=n[13]=n[14]=n[15]=0),e)if(ARRAY_BUFFER)for(o=this.start;i<a&&o<64;++i)h[o++]=t[i];else for(o=this.start;i<a&&o<64;++i)n[o>>2]|=t[i]<<SHIFT[3&o++];else if(ARRAY_BUFFER)for(o=this.start;i<a&&o<64;++i)(s=t.charCodeAt(i))<128?h[o++]=s:s<2048?(h[o++]=192|s>>6,h[o++]=128|63&s):s<55296||s>=57344?(h[o++]=224|s>>12,h[o++]=128|s>>6&63,h[o++]=128|63&s):(s=65536+((1023&s)<<10|1023&t.charCodeAt(++i)),h[o++]=240|s>>18,h[o++]=128|s>>12&63,h[o++]=128|s>>6&63,h[o++]=128|63&s);else for(o=this.start;i<a&&o<64;++i)(s=t.charCodeAt(i))<128?n[o>>2]|=s<<SHIFT[3&o++]:s<2048?(n[o>>2]|=(192|s>>6)<<SHIFT[3&o++],n[o>>2]|=(128|63&s)<<SHIFT[3&o++]):s<55296||s>=57344?(n[o>>2]|=(224|s>>12)<<SHIFT[3&o++],n[o>>2]|=(128|s>>6&63)<<SHIFT[3&o++],n[o>>2]|=(128|63&s)<<SHIFT[3&o++]):(s=65536+((1023&s)<<10|1023&t.charCodeAt(++i)),n[o>>2]|=(240|s>>18)<<SHIFT[3&o++],n[o>>2]|=(128|s>>12&63)<<SHIFT[3&o++],n[o>>2]|=(128|s>>6&63)<<SHIFT[3&o++],n[o>>2]|=(128|63&s)<<SHIFT[3&o++]);this.lastByteIndex=o,this.bytes+=o-this.start,o>=64?(this.start=o-64,this.hash(),this.hashed=!0):this.start=o}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Md5.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[e>>2]|=EXTRA[3&e],e>=56&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,t[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},Md5.prototype.hash=function(){var t,e,r,s,o,i,a=this.blocks;this.first?e=((e=((t=((t=a[0]-680876937)<<7|t>>>25)-271733879<<0)^(r=((r=(-271733879^(s=((s=(-1732584194^2004318071&t)+a[1]-117830708)<<12|s>>>20)+t<<0)&(-271733879^t))+a[2]-1126478375)<<17|r>>>15)+s<<0)&(s^t))+a[3]-1316259209)<<22|e>>>10)+r<<0:(t=this.h0,e=this.h1,r=this.h2,e=((e+=((t=((t+=((s=this.h3)^e&(r^s))+a[0]-680876936)<<7|t>>>25)+e<<0)^(r=((r+=(e^(s=((s+=(r^t&(e^r))+a[1]-389564586)<<12|s>>>20)+t<<0)&(t^e))+a[2]+606105819)<<17|r>>>15)+s<<0)&(s^t))+a[3]-1044525330)<<22|e>>>10)+r<<0),e=((e+=((t=((t+=(s^e&(r^s))+a[4]-176418897)<<7|t>>>25)+e<<0)^(r=((r+=(e^(s=((s+=(r^t&(e^r))+a[5]+1200080426)<<12|s>>>20)+t<<0)&(t^e))+a[6]-1473231341)<<17|r>>>15)+s<<0)&(s^t))+a[7]-45705983)<<22|e>>>10)+r<<0,e=((e+=((t=((t+=(s^e&(r^s))+a[8]+1770035416)<<7|t>>>25)+e<<0)^(r=((r+=(e^(s=((s+=(r^t&(e^r))+a[9]-1958414417)<<12|s>>>20)+t<<0)&(t^e))+a[10]-42063)<<17|r>>>15)+s<<0)&(s^t))+a[11]-1990404162)<<22|e>>>10)+r<<0,e=((e+=((t=((t+=(s^e&(r^s))+a[12]+1804603682)<<7|t>>>25)+e<<0)^(r=((r+=(e^(s=((s+=(r^t&(e^r))+a[13]-40341101)<<12|s>>>20)+t<<0)&(t^e))+a[14]-1502002290)<<17|r>>>15)+s<<0)&(s^t))+a[15]+1236535329)<<22|e>>>10)+r<<0,e=((e+=((s=((s+=(e^r&((t=((t+=(r^s&(e^r))+a[1]-165796510)<<5|t>>>27)+e<<0)^e))+a[6]-1069501632)<<9|s>>>23)+t<<0)^t&((r=((r+=(t^e&(s^t))+a[11]+643717713)<<14|r>>>18)+s<<0)^s))+a[0]-373897302)<<20|e>>>12)+r<<0,e=((e+=((s=((s+=(e^r&((t=((t+=(r^s&(e^r))+a[5]-701558691)<<5|t>>>27)+e<<0)^e))+a[10]+38016083)<<9|s>>>23)+t<<0)^t&((r=((r+=(t^e&(s^t))+a[15]-660478335)<<14|r>>>18)+s<<0)^s))+a[4]-405537848)<<20|e>>>12)+r<<0,e=((e+=((s=((s+=(e^r&((t=((t+=(r^s&(e^r))+a[9]+568446438)<<5|t>>>27)+e<<0)^e))+a[14]-1019803690)<<9|s>>>23)+t<<0)^t&((r=((r+=(t^e&(s^t))+a[3]-187363961)<<14|r>>>18)+s<<0)^s))+a[8]+1163531501)<<20|e>>>12)+r<<0,e=((e+=((s=((s+=(e^r&((t=((t+=(r^s&(e^r))+a[13]-1444681467)<<5|t>>>27)+e<<0)^e))+a[2]-51403784)<<9|s>>>23)+t<<0)^t&((r=((r+=(t^e&(s^t))+a[7]+1735328473)<<14|r>>>18)+s<<0)^s))+a[12]-1926607734)<<20|e>>>12)+r<<0,e=((e+=((i=(s=((s+=((o=e^r)^(t=((t+=(o^s)+a[5]-378558)<<4|t>>>28)+e<<0))+a[8]-2022574463)<<11|s>>>21)+t<<0)^t)^(r=((r+=(i^e)+a[11]+1839030562)<<16|r>>>16)+s<<0))+a[14]-35309556)<<23|e>>>9)+r<<0,e=((e+=((i=(s=((s+=((o=e^r)^(t=((t+=(o^s)+a[1]-1530992060)<<4|t>>>28)+e<<0))+a[4]+1272893353)<<11|s>>>21)+t<<0)^t)^(r=((r+=(i^e)+a[7]-155497632)<<16|r>>>16)+s<<0))+a[10]-1094730640)<<23|e>>>9)+r<<0,e=((e+=((i=(s=((s+=((o=e^r)^(t=((t+=(o^s)+a[13]+681279174)<<4|t>>>28)+e<<0))+a[0]-358537222)<<11|s>>>21)+t<<0)^t)^(r=((r+=(i^e)+a[3]-722521979)<<16|r>>>16)+s<<0))+a[6]+76029189)<<23|e>>>9)+r<<0,e=((e+=((i=(s=((s+=((o=e^r)^(t=((t+=(o^s)+a[9]-640364487)<<4|t>>>28)+e<<0))+a[12]-421815835)<<11|s>>>21)+t<<0)^t)^(r=((r+=(i^e)+a[15]+530742520)<<16|r>>>16)+s<<0))+a[2]-995338651)<<23|e>>>9)+r<<0,e=((e+=((s=((s+=(e^((t=((t+=(r^(e|~s))+a[0]-198630844)<<6|t>>>26)+e<<0)|~r))+a[7]+1126891415)<<10|s>>>22)+t<<0)^((r=((r+=(t^(s|~e))+a[14]-1416354905)<<15|r>>>17)+s<<0)|~t))+a[5]-57434055)<<21|e>>>11)+r<<0,e=((e+=((s=((s+=(e^((t=((t+=(r^(e|~s))+a[12]+1700485571)<<6|t>>>26)+e<<0)|~r))+a[3]-1894986606)<<10|s>>>22)+t<<0)^((r=((r+=(t^(s|~e))+a[10]-1051523)<<15|r>>>17)+s<<0)|~t))+a[1]-2054922799)<<21|e>>>11)+r<<0,e=((e+=((s=((s+=(e^((t=((t+=(r^(e|~s))+a[8]+1873313359)<<6|t>>>26)+e<<0)|~r))+a[15]-30611744)<<10|s>>>22)+t<<0)^((r=((r+=(t^(s|~e))+a[6]-1560198380)<<15|r>>>17)+s<<0)|~t))+a[13]+1309151649)<<21|e>>>11)+r<<0,e=((e+=((s=((s+=(e^((t=((t+=(r^(e|~s))+a[4]-145523070)<<6|t>>>26)+e<<0)|~r))+a[11]-1120210379)<<10|s>>>22)+t<<0)^((r=((r+=(t^(s|~e))+a[2]+718787259)<<15|r>>>17)+s<<0)|~t))+a[9]-343485551)<<21|e>>>11)+r<<0,this.first?(this.h0=t+1732584193<<0,this.h1=e-271733879<<0,this.h2=r-1732584194<<0,this.h3=s+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+e<<0,this.h2=this.h2+r<<0,this.h3=this.h3+s<<0)},Md5.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,r=this.h2,s=this.h3;return HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[s>>4&15]+HEX_CHARS[15&s]+HEX_CHARS[s>>12&15]+HEX_CHARS[s>>8&15]+HEX_CHARS[s>>20&15]+HEX_CHARS[s>>16&15]+HEX_CHARS[s>>28&15]+HEX_CHARS[s>>24&15]},Md5.prototype.toString=Md5.prototype.hex,Md5.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,r=this.h2,s=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&r,r>>8&255,r>>16&255,r>>24&255,255&s,s>>8&255,s>>16&255,s>>24&255]},Md5.prototype.array=Md5.prototype.digest,Md5.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),e=new Uint32Array(t);return e[0]=this.h0,e[1]=this.h1,e[2]=this.h2,e[3]=this.h3,t},Md5.prototype.buffer=Md5.prototype.arrayBuffer,Md5.prototype.base64=function(){for(var t,e,r,s="",o=this.array(),i=0;i<15;)t=o[i++],e=o[i++],r=o[i++],s+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[63&(t<<4|e>>>4)]+BASE64_ENCODE_CHAR[63&(e<<2|r>>>6)]+BASE64_ENCODE_CHAR[63&r];return t=o[i],s+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[t<<4&63]+"=="};var exports=createMethod();COMMON_JS?module.exports=exports:(root.md5=exports,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))}()}).call(exports,__webpack_require__("W2nU"),__webpack_require__("DuR2"))},ULte:function(t,e){},nErl:function(t,e){(function(e){t.exports=e}).call(e,{})},rmE0:function(t,e,r){t.exports=r.p+"static/img/logos.5392b24.png"},xJsL:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r("NC6I"),o=r.n(s),i={data:function(){return{userName:"",userPwd:"",loading:!1}},mounted:function(){this.userName="",this.userPwd="",this.logins()},methods:{logins:function(){var t=this;if(this.loading)return!1;this.Axios.post("/api/server/getkey","username=qaz12wsx34&userpwd=wanwsx123").then(function(e){var r=e.data.HttpData;switch(r.code){case 200:var s=r.data,o=s.appkey+"-"+s.infokey;window.localStorage.setItem("gw_token",o),t.Axios.defaults.headers.common.Authorization=t.$store.state.gwToken,t.loading=!1,t.$store.dispatch("reflashSet");break;case 1002:t.$Message.error(r.message),t.loading=!1,console.log(r);break;case 1003:t.$Message.error("用户名和密码不能为空！"),t.loading=!1,console.log(r);break;case 1007:t.$Message.error(r.message),t.loading=!1,console.log(r);break;case 1014:t.$Message.error("服务器错误，请检查服务是否正常运行"),t.loading=!1,console.log(r);break;default:t.$Message.error("服务器错误，请重试！"),t.loading=!1,console.log(r)}}).catch(function(e){t.$Message.error("网络错误，请重试！"),t.loading=!1,console.log(e)})},login:function(){var t=this;this.loading=!0;var e={userName:this.userName,userPass:o()(this.userPwd).toUpperCase()};this.Axios.post("/api/Event/login_sh_bank",e,{headers:{Authorization:localStorage.gw_token}}).then(function(e){var r=e.data.HttpData;switch(t.loading=!1,r){case"-1":t.$Message.error("用户名不存在！"),t.loading=!1;break;case"0":t.$Message.error("用户名或密码错误！"),t.loading=!1;break;case"1":window.localStorage.setItem("userName",t.userName),t.$router.replace("/bank")}})},error:function(t,e){this.$Notice.error({title:"登陆提示",desc:e})}}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Row",{staticClass:"login"},[s("Col",{staticClass:"loginLogo",attrs:{span:"12"}},[s("img",{attrs:{src:r("rmE0"),alt:""}})]),t._v(" "),s("Col",{staticClass:"loginForm",attrs:{span:"12"}},[s("Row",[s("Col",{attrs:{span:"4"}},[s("i",{staticClass:"iconfont icon-scheduleUSER"})]),t._v(" "),s("Col",{attrs:{span:"20"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],attrs:{type:"text",placeholder:"用户名",autocomplete:"off"},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value)}}})])],1),t._v(" "),s("Row",[s("Col",{attrs:{span:"4"}},[s("i",{staticClass:"iconfont icon-schedulePASS"})]),t._v(" "),s("Col",{attrs:{span:"20"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userPwd,expression:"userPwd"}],attrs:{type:"password",placeholder:"密码",autocomplete:"off"},domProps:{value:t.userPwd},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.login(e):null},input:function(e){e.target.composing||(t.userPwd=e.target.value)}}})])],1),t._v(" "),s("br"),t._v(" "),s("button",{class:{loading:t.loading},on:{click:function(e){return e.stopPropagation(),t.login(e)}}},[t._v("\n        登陆\n        "),t.loading?s("Spin",{attrs:{fix:""}},[t._v("\n          loading..."),s("Icon",{staticClass:"spin-icon-load",attrs:{type:"load-c",size:"18"}})],1):t._e()],1)],1)],1)},staticRenderFns:[]};var n=r("VU/8")(i,a,!1,function(t){r("ULte")},null,null);e.default=n.exports}});
//# sourceMappingURL=2.ac6ec87a0f3bc00eacc5.js.map