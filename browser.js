// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var l=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,g,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,b,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):f.call(n)}function A(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+A(n):A(n)+r}var j=String.fromCharCode,S=isNaN,E=Array.isArray;function x(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function F(r){var e,t,n,o,a,l,f,s,p;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",f=1,s=0;s<r.length;s++)if(u(n=r[s]))l+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,S(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function U(r){var e,t,n,i;for(t=[],i=0,n=k.exec(r);n;)(e=r.slice(i,k.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),i=k.lastIndex,n=k.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function O(r){return"string"==typeof r}function V(r){var e,t;if(!O(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[U(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return F.apply(null,e)}var I,$=Object.prototype,N=$.toString,C=$.__defineGetter__,P=$.__defineSetter__,R=$.__lookupGetter__,L=$.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(r,e)||L.call(r,e)?(n=r.__proto__,r.__proto__=$,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(r,e,t.get),a&&P&&P.call(r,e,t.set),r};var G=I;function Z(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var B=/./;function W(r){return"boolean"==typeof r}function X(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var M=X();function H(){return M&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function q(r,e){return null!=r&&Y.call(r,e)}var D="function"==typeof Symbol?Symbol:void 0,J="function"==typeof D?D.toStringTag:"",K=H()?function(r){var e,t,n;if(null==r)return z.call(r);t=r[J],e=q(r,J);try{r[J]=void 0}catch(e){return z.call(r)}return n=z.call(r),e?r[J]=t:delete r[J],n}:function(r){return z.call(r)},Q=Boolean,rr=Boolean.prototype.toString,er=H();function tr(r){return"object"==typeof r&&(r instanceof Q||(er?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===K(r)))}function nr(r){return W(r)||tr(r)}function ir(){return new Function("return this;")()}Z(nr,"isPrimitive",W),Z(nr,"isObject",tr);var or="object"==typeof self?self:null,ar="object"==typeof window?window:null,cr="object"==typeof globalThis?globalThis:null,ur=function(r){if(arguments.length){if(!W(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ir()}if(cr)return cr;if(or)return or;if(ar)return ar;throw new Error("unexpected error. Unable to resolve global object.")}(),lr=ur.document&&ur.document.childNodes,fr=Int8Array;function sr(){return/^\s*function\s*([^(]*)/i}var pr=/^\s*function\s*([^(]*)/i;Z(sr,"REGEXP",pr);var yr=Array.isArray?Array.isArray:function(r){return"[object Array]"===K(r)};function gr(r){return null!==r&&"object"==typeof r}function dr(r){var e,t,n,i;if(("Object"===(t=K(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=pr.exec(n.toString()))return e[1]}return gr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}Z(gr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!yr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(gr));var br="function"==typeof B||"object"==typeof fr||"function"==typeof lr?function(r){return dr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?dr(r).toLowerCase():e};function hr(r){return"function"===br(r)}var vr=/./,wr="function"==typeof Object.defineProperty?Object.defineProperty:null,mr=Object.defineProperty;function Ar(r){return"number"==typeof r}function _r(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function jr(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+_r(i):_r(i)+r,n&&(r="-"+r)),r}var Sr=String.prototype.toLowerCase,Er=String.prototype.toUpperCase;function xr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!Ar(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=jr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=jr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Er.call(r.specifier)?Er.call(t):Sr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Fr(r){return"string"==typeof r}var kr=Math.abs,Tr=String.prototype.toLowerCase,Ur=String.prototype.toUpperCase,Or=String.prototype.replace,Vr=/e\+(\d)$/,Ir=/e-(\d)$/,$r=/^(\d+)$/,Nr=/^(\d+)e/,Cr=/\.0$/,Pr=/\.0*e/,Rr=/(\..*[^0])0*e/;function Lr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!Ar(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":kr(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Or.call(t,Rr,"$1e"),t=Or.call(t,Pr,"e"),t=Or.call(t,Cr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Or.call(t,Vr,"e+0$1"),t=Or.call(t,Ir,"e-0$1"),r.alternate&&(t=Or.call(t,$r,"$1."),t=Or.call(t,Nr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Ur.call(r.specifier)?Ur.call(t):Tr.call(t)}function Gr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Zr(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Gr(n):Gr(n)+r}var Br=String.fromCharCode,Wr=isNaN,Xr=Array.isArray;function Mr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Hr(r){var e,t,n,i,o,a,c,u,l;if(!Xr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(Fr(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=Mr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Wr(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Wr(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=xr(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Wr(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Wr(o)?String(n.arg):Br(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Lr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=jr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Zr(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var zr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Yr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function qr(r){var e,t,n,i;for(t=[],i=0,n=zr.exec(r);n;)(e=r.slice(i,zr.lastIndex-n[0].length)).length&&t.push(e),t.push(Yr(n)),i=zr.lastIndex,n=zr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Dr(r){return"string"==typeof r}function Jr(r){var e,t;if(!Dr(r))throw new TypeError(Jr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[qr(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Hr.apply(null,e)}var Kr,Qr=Object.prototype,re=Qr.toString,ee=Qr.__defineGetter__,te=Qr.__defineSetter__,ne=Qr.__lookupGetter__,ie=Qr.__lookupSetter__;Kr=function(){try{return wr({},"x",{}),!0}catch(r){return!1}}()?mr:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===re.call(r))throw new TypeError(Jr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===re.call(t))throw new TypeError(Jr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(ne.call(r,e)||ie.call(r,e)?(n=r.__proto__,r.__proto__=Qr,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&ee&&ee.call(r,e,t.get),a&&te&&te.call(r,e,t.set),r};var oe=Kr;function ae(r,e,t){oe(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ce(r){return"boolean"==typeof r}var ue=X();function le(){return ue&&"symbol"==typeof Symbol.toStringTag}var fe=Object.prototype.toString,se="function"==typeof Symbol?Symbol:void 0,pe="function"==typeof se?se.toStringTag:"",ye=le()?function(r){var e,t,n;if(null==r)return fe.call(r);t=r[pe],e=q(r,pe);try{r[pe]=void 0}catch(e){return fe.call(r)}return n=fe.call(r),e?r[pe]=t:delete r[pe],n}:function(r){return fe.call(r)},ge=Boolean,de=Boolean.prototype.toString,be=le();function he(r){return"object"==typeof r&&(r instanceof ge||(be?function(r){try{return de.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===ye(r)))}function ve(r){return ce(r)||he(r)}function we(){return new Function("return this;")()}ae(ve,"isPrimitive",ce),ae(ve,"isObject",he);var me="object"==typeof self?self:null,Ae="object"==typeof window?window:null,_e="object"==typeof globalThis?globalThis:null,je=function(r){if(arguments.length){if(!ce(r))throw new TypeError(Jr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return we()}if(_e)return _e;if(me)return me;if(Ae)return Ae;throw new Error("unexpected error. Unable to resolve global object.")}(),Se=je.document&&je.document.childNodes,Ee=Int8Array;function xe(){return/^\s*function\s*([^(]*)/i}var Fe=/^\s*function\s*([^(]*)/i;ae(xe,"REGEXP",Fe);var ke=Array.isArray?Array.isArray:function(r){return"[object Array]"===ye(r)};function Te(r){return null!==r&&"object"==typeof r}function Ue(r){var e,t,n,i;if(("Object"===(t=ye(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Fe.exec(n.toString()))return e[1]}return Te(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}ae(Te,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(Jr("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!ke(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Te));var Oe="function"==typeof vr||"object"==typeof Ee||"function"==typeof Se?function(r){return Ue(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?Ue(r).toLowerCase():e};function Ve(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&function(r){return"function"===Oe(r)}(r.next)}function Ie(r){return"number"==typeof r}var $e=Number,Ne=$e.prototype.toString,Ce=H();function Pe(r){return"object"==typeof r&&(r instanceof $e||(Ce?function(r){try{return Ne.call(r),!0}catch(r){return!1}}(r):"[object Number]"===K(r)))}function Re(r){return Ie(r)||Pe(r)}Z(Re,"isPrimitive",Ie),Z(Re,"isObject",Pe);var Le,Ge="function"==typeof D&&"symbol"==typeof D("foo")&&q(D,"iterator")&&"symbol"==typeof D.iterator?Symbol.iterator:null,Ze=Object,Be=Object.getPrototypeOf;Le=hr(Object.getPrototypeOf)?Be:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===K(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var We=Le,Xe=Object.prototype;function Me(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!yr(r)}(r)&&(e=function(r){return null==r?null:(r=Ze(r),We(r))}(r),!e||!q(r,"constructor")&&q(e,"constructor")&&hr(e.constructor)&&"[object Function]"===K(e.constructor)&&q(e,"isPrototypeOf")&&hr(e.isPrototypeOf)&&(e===Xe||function(r){var e;for(e in r)if(!q(r,e))return!1;return!0}(r)))}function He(r,e){return Me(e)?(q(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(V("invalid argument. Options argument must be an object. Value: `%s`.",e))}function ze(r,e,t){var n,i,o,a;if(!Ve(r))throw new TypeError(V("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!hr(e))throw new TypeError(V("invalid argument. Second argument must be a function. Value: `%s`.",e));if(n={invalid:NaN},arguments.length>2&&(o=He(n,t)))throw o;return Z(i={},"next",c),Z(i,"return",u),Ge&&hr(r[Ge])&&Z(i,Ge,l),i;function c(){var t;return a?{done:!0}:(t=r.next()).done?(a=!0,t):{value:Ie(t.value)?e(t.value):n.invalid,done:!1}}function u(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return ze(r[Ge](),e,n)}}var Ye,qe=X(),De=Object.prototype.toString,Je="function"==typeof Symbol?Symbol:void 0,Ke="function"==typeof Je?Je.toStringTag:"",Qe=qe&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return De.call(r);t=r[Ke],e=q(r,Ke);try{r[Ke]=void 0}catch(e){return De.call(r)}return n=De.call(r),e?r[Ke]=t:delete r[Ke],n}:function(r){return De.call(r)},rt="function"==typeof Uint32Array,et="function"==typeof Uint32Array?Uint32Array:null,tt="function"==typeof Uint32Array?Uint32Array:void 0;Ye=function(){var r,e,t;if("function"!=typeof et)return!1;try{e=new et(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(rt&&t instanceof Uint32Array||"[object Uint32Array]"===Qe(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?tt:function(){throw new Error("not implemented")};var nt,it=Ye,ot="function"==typeof Float64Array,at="function"==typeof Float64Array?Float64Array:null,ct="function"==typeof Float64Array?Float64Array:void 0;nt=function(){var r,e,t;if("function"!=typeof at)return!1;try{e=new at([1,3.14,-3.14,NaN]),t=e,r=(ot&&t instanceof Float64Array||"[object Float64Array]"===Qe(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ct:function(){throw new Error("not implemented")};var ut,lt=nt,ft=X(),st=Object.prototype.toString,pt="function"==typeof Symbol?Symbol:void 0,yt="function"==typeof pt?pt.toStringTag:"",gt=ft&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return st.call(r);t=r[yt],e=q(r,yt);try{r[yt]=void 0}catch(e){return st.call(r)}return n=st.call(r),e?r[yt]=t:delete r[yt],n}:function(r){return st.call(r)},dt="function"==typeof Uint8Array,bt="function"==typeof Uint8Array?Uint8Array:null,ht="function"==typeof Uint8Array?Uint8Array:void 0;ut=function(){var r,e,t;if("function"!=typeof bt)return!1;try{e=new bt(e=[1,3.14,-3.14,256,257]),t=e,r=(dt&&t instanceof Uint8Array||"[object Uint8Array]"===gt(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ht:function(){throw new Error("not implemented")};var vt,wt=ut,mt="function"==typeof Uint16Array,At="function"==typeof Uint16Array?Uint16Array:null,_t="function"==typeof Uint16Array?Uint16Array:void 0;vt=function(){var r,e,t;if("function"!=typeof At)return!1;try{e=new At(e=[1,3.14,-3.14,65536,65537]),t=e,r=(mt&&t instanceof Uint16Array||"[object Uint16Array]"===gt(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?_t:function(){throw new Error("not implemented")};var jt,St={uint16:vt,uint8:wt};(jt=new St.uint16(1))[0]=4660;var Et=52===new St.uint8(jt.buffer)[0],xt=!0===Et?1:0,Ft=new lt(1),kt=new it(Ft.buffer);function Tt(r){return Ft[0]=r,kt[xt]}var Ut,Ot=X(),Vt=Object.prototype.toString,It="function"==typeof Symbol?Symbol:void 0,$t="function"==typeof It?It.toStringTag:"",Nt=Ot&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return Vt.call(r);t=r[$t],e=q(r,$t);try{r[$t]=void 0}catch(e){return Vt.call(r)}return n=Vt.call(r),e?r[$t]=t:delete r[$t],n}:function(r){return Vt.call(r)},Ct="function"==typeof Uint32Array,Pt="function"==typeof Uint32Array?Uint32Array:null,Rt="function"==typeof Uint32Array?Uint32Array:void 0;Ut=function(){var r,e,t;if("function"!=typeof Pt)return!1;try{e=new Pt(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Ct&&t instanceof Uint32Array||"[object Uint32Array]"===Nt(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Rt:function(){throw new Error("not implemented")};var Lt,Gt=Ut,Zt="function"==typeof Float64Array,Bt="function"==typeof Float64Array?Float64Array:null,Wt="function"==typeof Float64Array?Float64Array:void 0;Lt=function(){var r,e,t;if("function"!=typeof Bt)return!1;try{e=new Bt([1,3.14,-3.14,NaN]),t=e,r=(Zt&&t instanceof Float64Array||"[object Float64Array]"===Nt(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Wt:function(){throw new Error("not implemented")};var Xt,Mt=!0===Et?1:0,Ht=new Lt(1),zt=new Gt(Ht.buffer),Yt=X(),qt=Object.prototype.toString,Dt="function"==typeof Symbol?Symbol:void 0,Jt="function"==typeof Dt?Dt.toStringTag:"",Kt=Yt&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return qt.call(r);t=r[Jt],e=q(r,Jt);try{r[Jt]=void 0}catch(e){return qt.call(r)}return n=qt.call(r),e?r[Jt]=t:delete r[Jt],n}:function(r){return qt.call(r)},Qt="function"==typeof Uint32Array,rn="function"==typeof Uint32Array?Uint32Array:null,en="function"==typeof Uint32Array?Uint32Array:void 0;Xt=function(){var r,e,t;if("function"!=typeof rn)return!1;try{e=new rn(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Qt&&t instanceof Uint32Array||"[object Uint32Array]"===Kt(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?en:function(){throw new Error("not implemented")};var tn,nn=Xt,on="function"==typeof Float64Array,an="function"==typeof Float64Array?Float64Array:null,cn="function"==typeof Float64Array?Float64Array:void 0;tn=function(){var r,e,t;if("function"!=typeof an)return!1;try{e=new an([1,3.14,-3.14,NaN]),t=e,r=(on&&t instanceof Float64Array||"[object Float64Array]"===Kt(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?cn:function(){throw new Error("not implemented")};var un=!0===Et?0:1,ln=new tn(1),fn=new nn(ln.buffer),sn="function"==typeof Object.defineProperty?Object.defineProperty:null,pn=Object.defineProperty;function yn(r){return"number"==typeof r}function gn(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function dn(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+gn(i):gn(i)+r,n&&(r="-"+r)),r}var bn=String.prototype.toLowerCase,hn=String.prototype.toUpperCase;function vn(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!yn(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=dn(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=dn(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===hn.call(r.specifier)?hn.call(t):bn.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function wn(r){return"string"==typeof r}var mn=Math.abs,An=String.prototype.toLowerCase,_n=String.prototype.toUpperCase,jn=String.prototype.replace,Sn=/e\+(\d)$/,En=/e-(\d)$/,xn=/^(\d+)$/,Fn=/^(\d+)e/,kn=/\.0$/,Tn=/\.0*e/,Un=/(\..*[^0])0*e/;function On(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!yn(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":mn(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=jn.call(t,Un,"$1e"),t=jn.call(t,Tn,"e"),t=jn.call(t,kn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=jn.call(t,Sn,"e+0$1"),t=jn.call(t,En,"e-0$1"),r.alternate&&(t=jn.call(t,xn,"$1."),t=jn.call(t,Fn,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===_n.call(r.specifier)?_n.call(t):An.call(t)}function Vn(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function In(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Vn(n):Vn(n)+r}var $n=String.fromCharCode,Nn=isNaN,Cn=Array.isArray;function Pn(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Rn(r){var e,t,n,i,o,a,c,u,l;if(!Cn(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(wn(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=Pn(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Nn(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Nn(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=vn(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Nn(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Nn(o)?String(n.arg):$n(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=On(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=dn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=In(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var Ln=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Gn(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Zn(r){var e,t,n,i;for(t=[],i=0,n=Ln.exec(r);n;)(e=r.slice(i,Ln.lastIndex-n[0].length)).length&&t.push(e),t.push(Gn(n)),i=Ln.lastIndex,n=Ln.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Bn(r){return"string"==typeof r}function Wn(r){var e,t;if(!Bn(r))throw new TypeError(Wn("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Zn(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Rn.apply(null,e)}var Xn,Mn=Object.prototype,Hn=Mn.toString,zn=Mn.__defineGetter__,Yn=Mn.__defineSetter__,qn=Mn.__lookupGetter__,Dn=Mn.__lookupSetter__;Xn=function(){try{return sn({},"x",{}),!0}catch(r){return!1}}()?pn:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===Hn.call(r))throw new TypeError(Wn("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Hn.call(t))throw new TypeError(Wn("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(qn.call(r,e)||Dn.call(r,e)?(n=r.__proto__,r.__proto__=Mn,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&zn&&zn.call(r,e,t.get),a&&Yn&&Yn.call(r,e,t.set),r};var Jn,Kn=Xn,Qn=X(),ri=Object.prototype.toString,ei="function"==typeof Symbol?Symbol:void 0,ti="function"==typeof ei?ei.toStringTag:"",ni=Qn&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return ri.call(r);t=r[ti],e=q(r,ti);try{r[ti]=void 0}catch(e){return ri.call(r)}return n=ri.call(r),e?r[ti]=t:delete r[ti],n}:function(r){return ri.call(r)},ii="function"==typeof Uint32Array,oi="function"==typeof Uint32Array?Uint32Array:null,ai="function"==typeof Uint32Array?Uint32Array:void 0;Jn=function(){var r,e,t;if("function"!=typeof oi)return!1;try{e=new oi(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(ii&&t instanceof Uint32Array||"[object Uint32Array]"===ni(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ai:function(){throw new Error("not implemented")};var ci,ui,li,fi=Jn,si="function"==typeof Float64Array,pi="function"==typeof Float64Array?Float64Array:null,yi="function"==typeof Float64Array?Float64Array:void 0;ci=function(){var r,e,t;if("function"!=typeof pi)return!1;try{e=new pi([1,3.14,-3.14,NaN]),t=e,r=(si&&t instanceof Float64Array||"[object Float64Array]"===ni(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?yi:function(){throw new Error("not implemented")},!0===Et?(ui=1,li=0):(ui=0,li=1);var gi={HIGH:ui,LOW:li},di=new ci(1),bi=new fi(di.buffer),hi=gi.HIGH,vi=gi.LOW;function wi(r,e,t,n){return di[0]=r,e[n]=bi[hi],e[n+t]=bi[vi],e}function mi(r){return wi(r,[0,0],1,0)}!function(r,e,t){Kn(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}(mi,"assign",wi);var Ai=Number.NEGATIVE_INFINITY,_i=1048575,ji=1.4426950407214463,Si=[0,0];function Ei(r){var e,t,n,i,o;if(function(r){return r!=r}(r)||r<0)return NaN;if(mi.assign(r,Si,1,0),o=0,(t=Si[0])<1048576){if(0==(2147483647&t|Si[1]))return Ai;o-=54,t=Tt(r*=0x40000000000000)}return t>=2146435072?r+r:(o+=(t>>20)-1023|0,o+=(i=614244+(t&=1048575)&1048576|0)>>20|0,n=function(r){var e,t,n,i,o,a,c,u,l,f,s;return i=Tt(r),o=r-1,(_i&2+i)<3?0===o?0:o*o*(.3333333333333333*o-.5):(f=(i&=_i)-398458|0,s=440401-i|0,t=(l=(c=(a=o/(2+o))*a)*c)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),n=c*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),u=n+t,(f|=s)>0?a*((e=.5*o*o)+u)-e:a*(u-o))}(r=function(r,e){return Ht[0]=r,zt[Mt]=e>>>0,Ht[0]}(r,t|1072693248^i)),e=function(r,e){return ln[0]=r,fn[un]=e>>>0,ln[0]}(r-=1,0),1.6751713164886512e-10*(r+n)+(r-e+n)*ji+e*ji+o)}return function(r){return ze(r,Ei)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterLog2=e();
//# sourceMappingURL=browser.js.map
