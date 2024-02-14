// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterLog2=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var l=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,g,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,v,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):f.call(n)}function A(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function j(r,e,t){var n=e-r.length;return n<0?r:r=t?r+A(n):A(n)+r}var _=String.fromCharCode,S=isNaN,E=Array.isArray;function x(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function F(r){var e,t,n,o,a,l,f,s,p;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",f=1,s=0;s<r.length;s++)if(u(n=r[s]))l+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,S(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function U(r){var e,t,n,i;for(t=[],i=0,n=k.exec(r);n;)(e=r.slice(i,k.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),i=k.lastIndex,n=k.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function O(r){return"string"==typeof r}function V(r){var e,t;if(!O(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[U(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return F.apply(null,e)}var I,$=Object.prototype,N=$.toString,C=$.__defineGetter__,P=$.__defineSetter__,R=$.__lookupGetter__,L=$.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(r,e)||L.call(r,e)?(n=r.__proto__,r.__proto__=$,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(r,e,t.get),a&&P&&P.call(r,e,t.set),r};var G=I;function Z(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var B=/./;function W(r){return"boolean"==typeof r}function X(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var M=X();function H(){return M&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function q(r,e){return null!=r&&Y.call(r,e)}var D="function"==typeof Symbol?Symbol:void 0,J="function"==typeof D?D.toStringTag:"";var K=H()?function(r){var e,t,n;if(null==r)return z.call(r);t=r[J],e=q(r,J);try{r[J]=void 0}catch(e){return z.call(r)}return n=z.call(r),e?r[J]=t:delete r[J],n}:function(r){return z.call(r)},Q=Boolean,rr=Boolean.prototype.toString;var er=H();function tr(r){return"object"==typeof r&&(r instanceof Q||(er?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===K(r)))}function nr(r){return W(r)||tr(r)}function ir(){return new Function("return this;")()}Z(nr,"isPrimitive",W),Z(nr,"isObject",tr);var or="object"==typeof self?self:null,ar="object"==typeof window?window:null,cr="object"==typeof global?global:null,ur="object"==typeof globalThis?globalThis:null;var lr=function(r){if(arguments.length){if(!W(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ir()}if(ur)return ur;if(or)return or;if(ar)return ar;if(cr)return cr;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=lr.document&&lr.document.childNodes,sr=Int8Array;function pr(){return/^\s*function\s*([^(]*)/i}var yr=/^\s*function\s*([^(]*)/i;Z(pr,"REGEXP",yr);var gr=Array.isArray?Array.isArray:function(r){return"[object Array]"===K(r)};function dr(r){return null!==r&&"object"==typeof r}function vr(r){var e,t,n,i;if(("Object"===(t=K(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=yr.exec(n.toString()))return e[1]}return dr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}Z(dr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!gr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(dr));var br="function"==typeof B||"object"==typeof sr||"function"==typeof fr?function(r){return vr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?vr(r).toLowerCase():e};function hr(r){return"function"===br(r)}var wr=/./,mr="function"==typeof Object.defineProperty?Object.defineProperty:null;var Ar=Object.defineProperty;function jr(r){return"number"==typeof r}function _r(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Sr(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+_r(i):_r(i)+r,n&&(r="-"+r)),r}var Er=String.prototype.toLowerCase,xr=String.prototype.toUpperCase;function Fr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!jr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Sr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Sr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===xr.call(r.specifier)?xr.call(t):Er.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function kr(r){return"string"==typeof r}var Tr=Math.abs,Ur=String.prototype.toLowerCase,Or=String.prototype.toUpperCase,Vr=String.prototype.replace,Ir=/e\+(\d)$/,$r=/e-(\d)$/,Nr=/^(\d+)$/,Cr=/^(\d+)e/,Pr=/\.0$/,Rr=/\.0*e/,Lr=/(\..*[^0])0*e/;function Gr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!jr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Tr(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Vr.call(t,Lr,"$1e"),t=Vr.call(t,Rr,"e"),t=Vr.call(t,Pr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Vr.call(t,Ir,"e+0$1"),t=Vr.call(t,$r,"e-0$1"),r.alternate&&(t=Vr.call(t,Nr,"$1."),t=Vr.call(t,Cr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Or.call(r.specifier)?Or.call(t):Ur.call(t)}function Zr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Br(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Zr(n):Zr(n)+r}var Wr=String.fromCharCode,Xr=isNaN,Mr=Array.isArray;function Hr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function zr(r){var e,t,n,i,o,a,c,u,l;if(!Mr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(kr(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=Hr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Xr(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Xr(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=Fr(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Xr(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Xr(o)?String(n.arg):Wr(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Gr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Sr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Br(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var Yr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function qr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Dr(r){var e,t,n,i;for(t=[],i=0,n=Yr.exec(r);n;)(e=r.slice(i,Yr.lastIndex-n[0].length)).length&&t.push(e),t.push(qr(n)),i=Yr.lastIndex,n=Yr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Jr(r){return"string"==typeof r}function Kr(r){var e,t;if(!Jr(r))throw new TypeError(Kr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Dr(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return zr.apply(null,e)}var Qr,re=Object.prototype,ee=re.toString,te=re.__defineGetter__,ne=re.__defineSetter__,ie=re.__lookupGetter__,oe=re.__lookupSetter__;Qr=function(){try{return mr({},"x",{}),!0}catch(r){return!1}}()?Ar:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===ee.call(r))throw new TypeError(Kr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===ee.call(t))throw new TypeError(Kr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(ie.call(r,e)||oe.call(r,e)?(n=r.__proto__,r.__proto__=re,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&te&&te.call(r,e,t.get),a&&ne&&ne.call(r,e,t.set),r};var ae=Qr;function ce(r,e,t){ae(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ue(r){return"boolean"==typeof r}var le=X();function fe(){return le&&"symbol"==typeof Symbol.toStringTag}var se=Object.prototype.toString;var pe="function"==typeof Symbol?Symbol:void 0,ye="function"==typeof pe?pe.toStringTag:"";var ge=fe()?function(r){var e,t,n;if(null==r)return se.call(r);t=r[ye],e=q(r,ye);try{r[ye]=void 0}catch(e){return se.call(r)}return n=se.call(r),e?r[ye]=t:delete r[ye],n}:function(r){return se.call(r)},de=Boolean,ve=Boolean.prototype.toString;var be=fe();function he(r){return"object"==typeof r&&(r instanceof de||(be?function(r){try{return ve.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===ge(r)))}function we(r){return ue(r)||he(r)}function me(){return new Function("return this;")()}ce(we,"isPrimitive",ue),ce(we,"isObject",he);var Ae="object"==typeof self?self:null,je="object"==typeof window?window:null,_e="object"==typeof global?global:null,Se="object"==typeof globalThis?globalThis:null;var Ee=function(r){if(arguments.length){if(!ue(r))throw new TypeError(Kr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return me()}if(Se)return Se;if(Ae)return Ae;if(je)return je;if(_e)return _e;throw new Error("unexpected error. Unable to resolve global object.")}(),xe=Ee.document&&Ee.document.childNodes,Fe=Int8Array;function ke(){return/^\s*function\s*([^(]*)/i}var Te=/^\s*function\s*([^(]*)/i;ce(ke,"REGEXP",Te);var Ue=Array.isArray?Array.isArray:function(r){return"[object Array]"===ge(r)};function Oe(r){return null!==r&&"object"==typeof r}function Ve(r){var e,t,n,i;if(("Object"===(t=ge(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Te.exec(n.toString()))return e[1]}return Oe(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}ce(Oe,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(Kr("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Ue(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Oe));var Ie="function"==typeof wr||"object"==typeof Fe||"function"==typeof xe?function(r){return Ve(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Ve(r).toLowerCase():e};function $e(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&function(r){return"function"===Ie(r)}(r.next)}function Ne(r){return"number"==typeof r}var Ce=Number,Pe=Ce.prototype.toString;var Re=H();function Le(r){return"object"==typeof r&&(r instanceof Ce||(Re?function(r){try{return Pe.call(r),!0}catch(r){return!1}}(r):"[object Number]"===K(r)))}function Ge(r){return Ne(r)||Le(r)}Z(Ge,"isPrimitive",Ne),Z(Ge,"isObject",Le);var Ze="function"==typeof D&&"symbol"==typeof D("foo")&&q(D,"iterator")&&"symbol"==typeof D.iterator?Symbol.iterator:null;var Be,We=Object,Xe=Object.getPrototypeOf;Be=hr(Object.getPrototypeOf)?Xe:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===K(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Me=Be;var He=Object.prototype;function ze(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!gr(r)}(r)&&(e=function(r){return null==r?null:(r=We(r),Me(r))}(r),!e||!q(r,"constructor")&&q(e,"constructor")&&hr(e.constructor)&&"[object Function]"===K(e.constructor)&&q(e,"isPrototypeOf")&&hr(e.isPrototypeOf)&&(e===He||function(r){var e;for(e in r)if(!q(r,e))return!1;return!0}(r)))}function Ye(r,e){return ze(e)?(q(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(V("invalid argument. Options argument must be an object. Value: `%s`.",e))}function qe(r,e,t){var n,i,o,a;if(!$e(r))throw new TypeError(V("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!hr(e))throw new TypeError(V("invalid argument. Second argument must be a function. Value: `%s`.",e));if(n={invalid:NaN},arguments.length>2&&(o=Ye(n,t)))throw o;return Z(i={},"next",c),Z(i,"return",u),Ze&&hr(r[Ze])&&Z(i,Ze,l),i;function c(){var t;return a?{done:!0}:(t=r.next()).done?(a=!0,t):{value:Ne(t.value)?e(t.value):n.invalid,done:!1}}function u(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return qe(r[Ze](),e,n)}}var De=X();var Je=Object.prototype.toString;var Ke="function"==typeof Symbol?Symbol:void 0,Qe="function"==typeof Ke?Ke.toStringTag:"";var rt=De&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return Je.call(r);t=r[Qe],e=q(r,Qe);try{r[Qe]=void 0}catch(e){return Je.call(r)}return n=Je.call(r),e?r[Qe]=t:delete r[Qe],n}:function(r){return Je.call(r)},et="function"==typeof Uint32Array;var tt="function"==typeof Uint32Array?Uint32Array:null;var nt,it="function"==typeof Uint32Array?Uint32Array:void 0;nt=function(){var r,e,t;if("function"!=typeof tt)return!1;try{e=new tt(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(et&&t instanceof Uint32Array||"[object Uint32Array]"===rt(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?it:function(){throw new Error("not implemented")};var ot=nt,at="function"==typeof Float64Array;var ct="function"==typeof Float64Array?Float64Array:null;var ut,lt="function"==typeof Float64Array?Float64Array:void 0;ut=function(){var r,e,t;if("function"!=typeof ct)return!1;try{e=new ct([1,3.14,-3.14,NaN]),t=e,r=(at&&t instanceof Float64Array||"[object Float64Array]"===rt(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?lt:function(){throw new Error("not implemented")};var ft=ut,st=X();var pt=Object.prototype.toString;var yt="function"==typeof Symbol?Symbol:void 0,gt="function"==typeof yt?yt.toStringTag:"";var dt=st&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return pt.call(r);t=r[gt],e=q(r,gt);try{r[gt]=void 0}catch(e){return pt.call(r)}return n=pt.call(r),e?r[gt]=t:delete r[gt],n}:function(r){return pt.call(r)},vt="function"==typeof Uint8Array;var bt="function"==typeof Uint8Array?Uint8Array:null;var ht,wt="function"==typeof Uint8Array?Uint8Array:void 0;ht=function(){var r,e,t;if("function"!=typeof bt)return!1;try{e=new bt(e=[1,3.14,-3.14,256,257]),t=e,r=(vt&&t instanceof Uint8Array||"[object Uint8Array]"===dt(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?wt:function(){throw new Error("not implemented")};var mt=ht,At="function"==typeof Uint16Array;var jt="function"==typeof Uint16Array?Uint16Array:null;var _t,St="function"==typeof Uint16Array?Uint16Array:void 0;_t=function(){var r,e,t;if("function"!=typeof jt)return!1;try{e=new jt(e=[1,3.14,-3.14,65536,65537]),t=e,r=(At&&t instanceof Uint16Array||"[object Uint16Array]"===dt(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?St:function(){throw new Error("not implemented")};var Et,xt={uint16:_t,uint8:mt};(Et=new xt.uint16(1))[0]=4660;var Ft=52===new xt.uint8(Et.buffer)[0],kt=!0===Ft?1:0,Tt=new ft(1),Ut=new ot(Tt.buffer);function Ot(r){return Tt[0]=r,Ut[kt]}var Vt=X();var It=Object.prototype.toString;var $t="function"==typeof Symbol?Symbol:void 0,Nt="function"==typeof $t?$t.toStringTag:"";var Ct=Vt&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return It.call(r);t=r[Nt],e=q(r,Nt);try{r[Nt]=void 0}catch(e){return It.call(r)}return n=It.call(r),e?r[Nt]=t:delete r[Nt],n}:function(r){return It.call(r)},Pt="function"==typeof Uint32Array;var Rt="function"==typeof Uint32Array?Uint32Array:null;var Lt,Gt="function"==typeof Uint32Array?Uint32Array:void 0;Lt=function(){var r,e,t;if("function"!=typeof Rt)return!1;try{e=new Rt(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Pt&&t instanceof Uint32Array||"[object Uint32Array]"===Ct(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Gt:function(){throw new Error("not implemented")};var Zt=Lt,Bt="function"==typeof Float64Array;var Wt="function"==typeof Float64Array?Float64Array:null;var Xt,Mt="function"==typeof Float64Array?Float64Array:void 0;Xt=function(){var r,e,t;if("function"!=typeof Wt)return!1;try{e=new Wt([1,3.14,-3.14,NaN]),t=e,r=(Bt&&t instanceof Float64Array||"[object Float64Array]"===Ct(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Mt:function(){throw new Error("not implemented")};var Ht=!0===Ft?1:0,zt=new Xt(1),Yt=new Zt(zt.buffer);var qt=X();var Dt=Object.prototype.toString;var Jt="function"==typeof Symbol?Symbol:void 0,Kt="function"==typeof Jt?Jt.toStringTag:"";var Qt=qt&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return Dt.call(r);t=r[Kt],e=q(r,Kt);try{r[Kt]=void 0}catch(e){return Dt.call(r)}return n=Dt.call(r),e?r[Kt]=t:delete r[Kt],n}:function(r){return Dt.call(r)},rn="function"==typeof Uint32Array;var en="function"==typeof Uint32Array?Uint32Array:null;var tn,nn="function"==typeof Uint32Array?Uint32Array:void 0;tn=function(){var r,e,t;if("function"!=typeof en)return!1;try{e=new en(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(rn&&t instanceof Uint32Array||"[object Uint32Array]"===Qt(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?nn:function(){throw new Error("not implemented")};var on=tn,an="function"==typeof Float64Array;var cn="function"==typeof Float64Array?Float64Array:null;var un,ln="function"==typeof Float64Array?Float64Array:void 0;un=function(){var r,e,t;if("function"!=typeof cn)return!1;try{e=new cn([1,3.14,-3.14,NaN]),t=e,r=(an&&t instanceof Float64Array||"[object Float64Array]"===Qt(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ln:function(){throw new Error("not implemented")};var fn=!0===Ft?0:1,sn=new un(1),pn=new on(sn.buffer);var yn="function"==typeof Object.defineProperty?Object.defineProperty:null;var gn=Object.defineProperty;function dn(r){return"number"==typeof r}function vn(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function bn(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+vn(i):vn(i)+r,n&&(r="-"+r)),r}var hn=String.prototype.toLowerCase,wn=String.prototype.toUpperCase;function mn(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!dn(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=bn(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=bn(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===wn.call(r.specifier)?wn.call(t):hn.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function An(r){return"string"==typeof r}var jn=Math.abs,_n=String.prototype.toLowerCase,Sn=String.prototype.toUpperCase,En=String.prototype.replace,xn=/e\+(\d)$/,Fn=/e-(\d)$/,kn=/^(\d+)$/,Tn=/^(\d+)e/,Un=/\.0$/,On=/\.0*e/,Vn=/(\..*[^0])0*e/;function In(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!dn(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":jn(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=En.call(t,Vn,"$1e"),t=En.call(t,On,"e"),t=En.call(t,Un,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=En.call(t,xn,"e+0$1"),t=En.call(t,Fn,"e-0$1"),r.alternate&&(t=En.call(t,kn,"$1."),t=En.call(t,Tn,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Sn.call(r.specifier)?Sn.call(t):_n.call(t)}function $n(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Nn(r,e,t){var n=e-r.length;return n<0?r:r=t?r+$n(n):$n(n)+r}var Cn=String.fromCharCode,Pn=isNaN,Rn=Array.isArray;function Ln(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Gn(r){var e,t,n,i,o,a,c,u,l;if(!Rn(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(An(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=Ln(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Pn(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Pn(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=mn(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Pn(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Pn(o)?String(n.arg):Cn(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=In(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=bn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Nn(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var Zn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Bn(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Wn(r){var e,t,n,i;for(t=[],i=0,n=Zn.exec(r);n;)(e=r.slice(i,Zn.lastIndex-n[0].length)).length&&t.push(e),t.push(Bn(n)),i=Zn.lastIndex,n=Zn.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Xn(r){return"string"==typeof r}function Mn(r){var e,t;if(!Xn(r))throw new TypeError(Mn("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Wn(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Gn.apply(null,e)}var Hn,zn=Object.prototype,Yn=zn.toString,qn=zn.__defineGetter__,Dn=zn.__defineSetter__,Jn=zn.__lookupGetter__,Kn=zn.__lookupSetter__;Hn=function(){try{return yn({},"x",{}),!0}catch(r){return!1}}()?gn:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===Yn.call(r))throw new TypeError(Mn("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Yn.call(t))throw new TypeError(Mn("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Jn.call(r,e)||Kn.call(r,e)?(n=r.__proto__,r.__proto__=zn,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&qn&&qn.call(r,e,t.get),a&&Dn&&Dn.call(r,e,t.set),r};var Qn=Hn;var ri=X();var ei=Object.prototype.toString;var ti="function"==typeof Symbol?Symbol:void 0,ni="function"==typeof ti?ti.toStringTag:"";var ii=ri&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return ei.call(r);t=r[ni],e=q(r,ni);try{r[ni]=void 0}catch(e){return ei.call(r)}return n=ei.call(r),e?r[ni]=t:delete r[ni],n}:function(r){return ei.call(r)},oi="function"==typeof Uint32Array;var ai="function"==typeof Uint32Array?Uint32Array:null;var ci,ui="function"==typeof Uint32Array?Uint32Array:void 0;ci=function(){var r,e,t;if("function"!=typeof ai)return!1;try{e=new ai(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(oi&&t instanceof Uint32Array||"[object Uint32Array]"===ii(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ui:function(){throw new Error("not implemented")};var li=ci,fi="function"==typeof Float64Array;var si="function"==typeof Float64Array?Float64Array:null;var pi,yi,gi,di="function"==typeof Float64Array?Float64Array:void 0;pi=function(){var r,e,t;if("function"!=typeof si)return!1;try{e=new si([1,3.14,-3.14,NaN]),t=e,r=(fi&&t instanceof Float64Array||"[object Float64Array]"===ii(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?di:function(){throw new Error("not implemented")},!0===Ft?(yi=1,gi=0):(yi=0,gi=1);var vi={HIGH:yi,LOW:gi},bi=new pi(1),hi=new li(bi.buffer),wi=vi.HIGH,mi=vi.LOW;function Ai(r,e,t,n){return bi[0]=r,e[n]=hi[wi],e[n+t]=hi[mi],e}function ji(r){return Ai(r,[0,0],1,0)}!function(r,e,t){Qn(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}(ji,"assign",Ai);var _i=Number.NEGATIVE_INFINITY;var Si=1048575;var Ei=1.4426950407214463,xi=[0,0];function Fi(r){var e,t,n,i,o;if(function(r){return r!=r}(r)||r<0)return NaN;if(ji.assign(r,xi,1,0),o=0,(t=xi[0])<1048576){if(0==(2147483647&t|xi[1]))return _i;o-=54,t=Ot(r*=0x40000000000000)}return t>=2146435072?r+r:(o+=(t>>20)-1023|0,o+=(i=(t&=1048575)+614244&1048576|0)>>20|0,n=function(r){var e,t,n,i,o,a,c,u,l,f,s;return i=Ot(r),o=r-1,(Si&2+i)<3?0===o?0:o*o*(.3333333333333333*o-.5):(f=(i&=Si)-398458|0,s=440401-i|0,t=(l=(c=(a=o/(2+o))*a)*c)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),n=c*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),u=n+t,(f|=s)>0?a*((e=.5*o*o)+u)-e:a*(u-o))}(r=function(r,e){return zt[0]=r,Yt[Ht]=e>>>0,zt[0]}(r,t|1072693248^i)),e=function(r,e){return sn[0]=r,pn[fn]=e>>>0,sn[0]}(r-=1,0),1.6751713164886512e-10*(r+n)+(r-e+n)*Ei+e*Ei+o)}return function(r){return qe(r,Fi)}}));
//# sourceMappingURL=index.js.map
