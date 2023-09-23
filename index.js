// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterLog2=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function e(t){return"number"==typeof t}function n(t){var r,e="";for(r=0;r<t;r++)e+="0";return e}function o(t,r,e){var o=!1,i=r-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(o=!0,t=t.substr(1)),t=e?t+n(i):n(i)+t,o&&(t="-"+t)),t}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(t){var r,n,u;switch(t.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=t.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===t.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),t.precision&&(n=o(n,t.precision,t.padRight)),n="-"+n):(n=u.toString(r),u||t.precision?t.precision&&(n=o(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===r&&(t.alternate&&(n="0x"+n),n=t.specifier===a.call(t.specifier)?a.call(n):i.call(n)),8===r&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(t){return"string"==typeof t}var l=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,b=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,w=/\.0*e/,h=/(\..*[^0])0*e/;function m(t){var r,n,o=parseFloat(t.arg);if(!isFinite(o)){if(!e(t.arg))throw new Error("invalid floating-point number. Value: "+n);o=t.arg}switch(t.specifier){case"e":case"E":n=o.toExponential(t.precision);break;case"f":case"F":n=o.toFixed(t.precision);break;case"g":case"G":l(o)<1e-4?((r=t.precision)>0&&(r-=1),n=o.toExponential(r)):n=o.toPrecision(t.precision),t.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,w,"e"),n=s.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=s.call(n,y,"e+0$1"),n=s.call(n,v,"e-0$1"),t.alternate&&(n=s.call(n,b,"$1."),n=s.call(n,g,"$1.e")),o>=0&&t.sign&&(n=t.sign+n),n=t.specifier===p.call(t.specifier)?p.call(n):f.call(n)}function _(t){var r,e="";for(r=0;r<t;r++)e+=" ";return e}function j(t,r,e){var n=r-t.length;return n<0?t:t=e?t+_(n):_(n)+t}var S=String.fromCharCode,A=isNaN,E=Array.isArray;function T(t){var r={};return r.specifier=t.specifier,r.precision=void 0===t.precision?1:t.precision,r.width=t.width,r.flags=t.flags||"",r.mapping=t.mapping,r}function O(t){var r,e,n,i,a,l,f,p,s;if(!E(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(l="",f=1,p=0;p<t.length;p++)if(c(n=t[p]))l+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,A(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(t){var r={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(r.precision="1"),r}function P(t){var r,e,n,o;for(e=[],o=0,n=F.exec(t);n;)(r=t.slice(o,F.lastIndex-n[0].length)).length&&e.push(r),e.push(x(n)),o=F.lastIndex,n=F.exec(t);return(r=t.slice(o)).length&&e.push(r),e}function V(t){return"string"==typeof t}function k(t){var r,e,n;if(!V(t))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",t));for(r=P(t),(e=new Array(arguments.length))[0]=r,n=1;n<e.length;n++)e[n]=arguments[n];return O.apply(null,e)}var U,B=Object.prototype,N=B.toString,C=B.__defineGetter__,G=B.__defineSetter__,I=B.__lookupGetter__,L=B.__lookupSetter__;U=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,e){var n,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(I.call(t,r)||L.call(t,r)?(n=t.__proto__,t.__proto__=B,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&C&&C.call(t,r,e.get),a&&G&&G.call(t,r,e.set),t};var R=U;function $(t,r,e){R(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var M=/./;function W(t){return"boolean"==typeof t}function X(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var Z=X();function H(){return Z&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function q(t,r){return null!=t&&Y.call(t,r)}var D="function"==typeof Symbol?Symbol:void 0,J="function"==typeof D?D.toStringTag:"";var K=H()?function(t){var r,e,n;if(null==t)return z.call(t);e=t[J],r=q(t,J);try{t[J]=void 0}catch(r){return z.call(t)}return n=z.call(t),r?t[J]=e:delete t[J],n}:function(t){return z.call(t)},Q=Boolean,tt=Boolean.prototype.toString;var rt=H();function et(t){return"object"==typeof t&&(t instanceof Q||(rt?function(t){try{return tt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===K(t)))}function nt(t){return W(t)||et(t)}function ot(){return new Function("return this;")()}$(nt,"isPrimitive",W),$(nt,"isObject",et);var it="object"==typeof self?self:null,at="object"==typeof window?window:null,ut="object"==typeof global?global:null,ct="object"==typeof globalThis?globalThis:null;var lt=function(t){if(arguments.length){if(!W(t))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return ot()}if(ct)return ct;if(it)return it;if(at)return at;if(ut)return ut;throw new Error("unexpected error. Unable to resolve global object.")}(),ft=lt.document&&lt.document.childNodes,pt=Int8Array;function st(){return/^\s*function\s*([^(]*)/i}var yt=/^\s*function\s*([^(]*)/i;$(st,"REGEXP",yt);var vt=X();var bt=Object.prototype.toString;var gt="function"==typeof D?D.toStringTag:"";var dt,wt=vt&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n;if(null==t)return bt.call(t);e=t[gt],r=q(t,gt);try{t[gt]=void 0}catch(r){return bt.call(t)}return n=bt.call(t),r?t[gt]=e:delete t[gt],n}:function(t){return bt.call(t)};dt=Array.isArray?Array.isArray:function(t){return"[object Array]"===wt(t)};var ht=dt;function mt(t){return null!==t&&"object"==typeof t}var _t=function(t){if("function"!=typeof t)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var e,n;if(!ht(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(mt);function jt(t){var r,e,n,o;if(("Object"===(e=K(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=yt.exec(n.toString()))return r[1]}return mt(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}$(mt,"isObjectLikeArray",_t);var St="function"==typeof M||"object"==typeof pt||"function"==typeof ft?function(t){return jt(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?jt(t).toLowerCase():r};function At(t){return"function"===St(t)}var Et=/./,Tt="function"==typeof Object.defineProperty?Object.defineProperty:null;var Ot,Ft=Object.defineProperty,xt=Object.prototype,Pt=xt.toString,Vt=xt.__defineGetter__,kt=xt.__defineSetter__,Ut=xt.__lookupGetter__,Bt=xt.__lookupSetter__;Ot=function(){try{return Tt({},"x",{}),!0}catch(t){return!1}}()?Ft:function(t,r,e){var n,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===Pt.call(t))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===Pt.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Ut.call(t,r)||Bt.call(t,r)?(n=t.__proto__,t.__proto__=xt,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Vt&&Vt.call(t,r,e.get),a&&kt&&kt.call(t,r,e.set),t};var Nt=Ot;function Ct(t,r,e){Nt(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Gt(t){return"boolean"==typeof t}var It=X();function Lt(){return It&&"symbol"==typeof Symbol.toStringTag}var Rt=Object.prototype.toString;var $t="function"==typeof D?D.toStringTag:"";var Mt=Lt()?function(t){var r,e,n;if(null==t)return Rt.call(t);e=t[$t],r=q(t,$t);try{t[$t]=void 0}catch(r){return Rt.call(t)}return n=Rt.call(t),r?t[$t]=e:delete t[$t],n}:function(t){return Rt.call(t)},Wt=Boolean.prototype.toString;var Xt=Lt();function Zt(t){return"object"==typeof t&&(t instanceof Q||(Xt?function(t){try{return Wt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===Mt(t)))}function Ht(t){return Gt(t)||Zt(t)}function zt(){return new Function("return this;")()}Ct(Ht,"isPrimitive",Gt),Ct(Ht,"isObject",Zt);var Yt="object"==typeof self?self:null,qt="object"==typeof window?window:null,Dt="object"==typeof global?global:null,Jt="object"==typeof globalThis?globalThis:null;var Kt=function(t){if(arguments.length){if(!Gt(t))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return zt()}if(Jt)return Jt;if(Yt)return Yt;if(qt)return qt;if(Dt)return Dt;throw new Error("unexpected error. Unable to resolve global object.")}(),Qt=Kt.document&&Kt.document.childNodes,tr=Int8Array;function rr(){return/^\s*function\s*([^(]*)/i}var er=/^\s*function\s*([^(]*)/i;function nr(t){return null!==t&&"object"==typeof t}Ct(rr,"REGEXP",er);var or=function(t){if("function"!=typeof t)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var e,n;if(!ht(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(nr);function ir(t){var r,e,n,o;if(("Object"===(e=Mt(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=er.exec(n.toString()))return r[1]}return nr(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Ct(nr,"isObjectLikeArray",or);var ar="function"==typeof Et||"object"==typeof tr||"function"==typeof Qt?function(t){return ir(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?ir(t).toLowerCase():r};function ur(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&function(t){return"function"===ar(t)}(t.next)}function cr(t){return"number"==typeof t}var lr=Number,fr=lr.prototype.toString;var pr=H();function sr(t){return"object"==typeof t&&(t instanceof lr||(pr?function(t){try{return fr.call(t),!0}catch(t){return!1}}(t):"[object Number]"===K(t)))}function yr(t){return cr(t)||sr(t)}$(yr,"isPrimitive",cr),$(yr,"isObject",sr);var vr="function"==typeof D&&"symbol"==typeof D("foo")&&q(D,"iterator")&&"symbol"==typeof D.iterator?Symbol.iterator:null;var br=/./,gr="function"==typeof Object.defineProperty?Object.defineProperty:null;var dr,wr=Object.defineProperty,hr=Object.prototype,mr=hr.toString,_r=hr.__defineGetter__,jr=hr.__defineSetter__,Sr=hr.__lookupGetter__,Ar=hr.__lookupSetter__;dr=function(){try{return gr({},"x",{}),!0}catch(t){return!1}}()?wr:function(t,r,e){var n,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===mr.call(t))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===mr.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Sr.call(t,r)||Ar.call(t,r)?(n=t.__proto__,t.__proto__=hr,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&_r&&_r.call(t,r,e.get),a&&jr&&jr.call(t,r,e.set),t};var Er=dr;function Tr(t,r,e){Er(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Or(t){return"boolean"==typeof t}var Fr=X();function xr(){return Fr&&"symbol"==typeof Symbol.toStringTag}var Pr=Object.prototype.toString;var Vr="function"==typeof D?D.toStringTag:"";var kr=xr()?function(t){var r,e,n;if(null==t)return Pr.call(t);e=t[Vr],r=q(t,Vr);try{t[Vr]=void 0}catch(r){return Pr.call(t)}return n=Pr.call(t),r?t[Vr]=e:delete t[Vr],n}:function(t){return Pr.call(t)},Ur=Boolean.prototype.toString;var Br=xr();function Nr(t){return"object"==typeof t&&(t instanceof Q||(Br?function(t){try{return Ur.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===kr(t)))}function Cr(t){return Or(t)||Nr(t)}function Gr(){return new Function("return this;")()}Tr(Cr,"isPrimitive",Or),Tr(Cr,"isObject",Nr);var Ir="object"==typeof self?self:null,Lr="object"==typeof window?window:null,Rr="object"==typeof global?global:null,$r="object"==typeof globalThis?globalThis:null;var Mr=function(t){if(arguments.length){if(!Or(t))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return Gr()}if($r)return $r;if(Ir)return Ir;if(Lr)return Lr;if(Rr)return Rr;throw new Error("unexpected error. Unable to resolve global object.")}(),Wr=Mr.document&&Mr.document.childNodes,Xr=Int8Array;function Zr(){return/^\s*function\s*([^(]*)/i}var Hr=/^\s*function\s*([^(]*)/i;function zr(t){return null!==t&&"object"==typeof t}Tr(Zr,"REGEXP",Hr);var Yr=function(t){if("function"!=typeof t)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var e,n;if(!ht(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(zr);function qr(t){var r,e,n,o;if(("Object"===(e=kr(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=Hr.exec(n.toString()))return r[1]}return zr(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Tr(zr,"isObjectLikeArray",Yr);var Dr="function"==typeof br||"object"==typeof Xr||"function"==typeof Wr?function(t){return qr(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?qr(t).toLowerCase():r};function Jr(t){return"function"===Dr(t)}var Kr=Object,Qr=/./,te="function"==typeof Object.defineProperty?Object.defineProperty:null;var re,ee=Object.defineProperty,ne=Object.prototype,oe=ne.toString,ie=ne.__defineGetter__,ae=ne.__defineSetter__,ue=ne.__lookupGetter__,ce=ne.__lookupSetter__;re=function(){try{return te({},"x",{}),!0}catch(t){return!1}}()?ee:function(t,r,e){var n,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===oe.call(t))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===oe.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(ue.call(t,r)||ce.call(t,r)?(n=t.__proto__,t.__proto__=ne,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&ie&&ie.call(t,r,e.get),a&&ae&&ae.call(t,r,e.set),t};var le=re;function fe(t,r,e){le(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function pe(t){return"boolean"==typeof t}var se=X();function ye(){return se&&"symbol"==typeof Symbol.toStringTag}var ve=Object.prototype.toString;var be="function"==typeof D?D.toStringTag:"";var ge=ye()?function(t){var r,e,n;if(null==t)return ve.call(t);e=t[be],r=q(t,be);try{t[be]=void 0}catch(r){return ve.call(t)}return n=ve.call(t),r?t[be]=e:delete t[be],n}:function(t){return ve.call(t)},de=Boolean.prototype.toString;var we=ye();function he(t){return"object"==typeof t&&(t instanceof Q||(we?function(t){try{return de.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===ge(t)))}function me(t){return pe(t)||he(t)}function _e(){return new Function("return this;")()}fe(me,"isPrimitive",pe),fe(me,"isObject",he);var je="object"==typeof self?self:null,Se="object"==typeof window?window:null,Ae="object"==typeof global?global:null,Ee="object"==typeof globalThis?globalThis:null;var Te=function(t){if(arguments.length){if(!pe(t))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return _e()}if(Ee)return Ee;if(je)return je;if(Se)return Se;if(Ae)return Ae;throw new Error("unexpected error. Unable to resolve global object.")}(),Oe=Te.document&&Te.document.childNodes,Fe=Int8Array;function xe(){return/^\s*function\s*([^(]*)/i}var Pe=/^\s*function\s*([^(]*)/i;function Ve(t){return null!==t&&"object"==typeof t}fe(xe,"REGEXP",Pe);var ke=function(t){if("function"!=typeof t)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var e,n;if(!ht(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(Ve);function Ue(t){var r,e,n,o;if(("Object"===(e=ge(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=Pe.exec(n.toString()))return r[1]}return Ve(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}fe(Ve,"isObjectLikeArray",ke);var Be="function"==typeof Qr||"object"==typeof Fe||"function"==typeof Oe?function(t){return Ue(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?Ue(t).toLowerCase():r};var Ne,Ce,Ge=Object.getPrototypeOf;Ce=Object.getPrototypeOf,Ne="function"===Be(Ce)?Ge:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===ge(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Ie=Ne;var Le=Object.prototype;function Re(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!ht(t)}(t)&&(r=function(t){return null==t?null:(t=Kr(t),Ie(t))}(t),!r||!q(t,"constructor")&&q(r,"constructor")&&Jr(r.constructor)&&"[object Function]"===kr(r.constructor)&&q(r,"isPrototypeOf")&&Jr(r.isPrototypeOf)&&(r===Le||function(t){var r;for(r in t)if(!q(t,r))return!1;return!0}(t)))}function $e(t,r){return Re(r)?(q(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError(k("invalid argument. Options argument must be an object. Value: `%s`.",r))}function Me(t,r,e){var n,o,i,a;if(!ur(t))throw new TypeError(k("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",t));if(!At(r))throw new TypeError(k("invalid argument. Second argument must be a function. Value: `%s`.",r));if(n={invalid:NaN},arguments.length>2&&(i=$e(n,e)))throw i;return $(o={},"next",u),$(o,"return",c),vr&&At(t[vr])&&$(o,vr,l),o;function u(){var e;return a?{done:!0}:(e=t.next()).done?(a=!0,e):{value:cr(e.value)?r(e.value):n.invalid,done:!1}}function c(t){return a=!0,arguments.length?{value:t,done:!0}:{done:!0}}function l(){return Me(t[vr](),r,n)}}var We=X();var Xe=Object.prototype.toString;var Ze="function"==typeof D?D.toStringTag:"";var He=We&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n;if(null==t)return Xe.call(t);e=t[Ze],r=q(t,Ze);try{t[Ze]=void 0}catch(r){return Xe.call(t)}return n=Xe.call(t),r?t[Ze]=e:delete t[Ze],n}:function(t){return Xe.call(t)},ze="function"==typeof Uint32Array;var Ye="function"==typeof Uint32Array?Uint32Array:null;var qe,De="function"==typeof Uint32Array?Uint32Array:void 0;qe=function(){var t,r;if("function"!=typeof Ye)return!1;try{t=function(t){return ze&&t instanceof Uint32Array||"[object Uint32Array]"===He(t)}(r=new Ye(r=[1,3.14,-3.14,4294967296,4294967297]))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?De:function(){throw new Error("not implemented")};var Je=qe,Ke=X();var Qe=Object.prototype.toString;var tn="function"==typeof D?D.toStringTag:"";var rn=Ke&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n;if(null==t)return Qe.call(t);e=t[tn],r=q(t,tn);try{t[tn]=void 0}catch(r){return Qe.call(t)}return n=Qe.call(t),r?t[tn]=e:delete t[tn],n}:function(t){return Qe.call(t)},en="function"==typeof Float64Array;var nn="function"==typeof Float64Array?Float64Array:null;var on,an="function"==typeof Float64Array?Float64Array:void 0;on=function(){var t,r;if("function"!=typeof nn)return!1;try{t=function(t){return en&&t instanceof Float64Array||"[object Float64Array]"===rn(t)}(r=new nn([1,3.14,-3.14,NaN]))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?an:function(){throw new Error("not implemented")};var un=on,cn=X();var ln=Object.prototype.toString;var fn="function"==typeof D?D.toStringTag:"";var pn=cn&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n;if(null==t)return ln.call(t);e=t[fn],r=q(t,fn);try{t[fn]=void 0}catch(r){return ln.call(t)}return n=ln.call(t),r?t[fn]=e:delete t[fn],n}:function(t){return ln.call(t)},sn="function"==typeof Uint8Array;var yn="function"==typeof Uint8Array?Uint8Array:null;var vn,bn="function"==typeof Uint8Array?Uint8Array:void 0;vn=function(){var t,r;if("function"!=typeof yn)return!1;try{t=function(t){return sn&&t instanceof Uint8Array||"[object Uint8Array]"===pn(t)}(r=new yn(r=[1,3.14,-3.14,256,257]))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?bn:function(){throw new Error("not implemented")};var gn=vn,dn=X();var wn=Object.prototype.toString;var hn="function"==typeof D?D.toStringTag:"";var mn=dn&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n;if(null==t)return wn.call(t);e=t[hn],r=q(t,hn);try{t[hn]=void 0}catch(r){return wn.call(t)}return n=wn.call(t),r?t[hn]=e:delete t[hn],n}:function(t){return wn.call(t)},_n="function"==typeof Uint16Array;var jn="function"==typeof Uint16Array?Uint16Array:null;var Sn,An="function"==typeof Uint16Array?Uint16Array:void 0;Sn=function(){var t,r;if("function"!=typeof jn)return!1;try{t=function(t){return _n&&t instanceof Uint16Array||"[object Uint16Array]"===mn(t)}(r=new jn(r=[1,3.14,-3.14,65536,65537]))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?An:function(){throw new Error("not implemented")};var En,Tn={uint16:Sn,uint8:gn};(En=new Tn.uint16(1))[0]=4660;var On=52===new Tn.uint8(En.buffer)[0],Fn=!0===On?1:0,xn=new un(1),Pn=new Je(xn.buffer);function Vn(t){return xn[0]=t,Pn[Fn]}var kn=X();var Un=Object.prototype.toString;var Bn="function"==typeof D?D.toStringTag:"";var Nn=kn&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n;if(null==t)return Un.call(t);e=t[Bn],r=q(t,Bn);try{t[Bn]=void 0}catch(r){return Un.call(t)}return n=Un.call(t),r?t[Bn]=e:delete t[Bn],n}:function(t){return Un.call(t)},Cn="function"==typeof Float64Array;var Gn="function"==typeof Float64Array?Float64Array:null;var In,Ln="function"==typeof Float64Array?Float64Array:void 0;In=function(){var t,r;if("function"!=typeof Gn)return!1;try{t=function(t){return Cn&&t instanceof Float64Array||"[object Float64Array]"===Nn(t)}(r=new Gn([1,3.14,-3.14,NaN]))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?Ln:function(){throw new Error("not implemented")};var Rn=!0===On?1:0,$n=new In(1),Mn=new Je($n.buffer);var Wn=X();var Xn=Object.prototype.toString;var Zn="function"==typeof D?D.toStringTag:"";var Hn=Wn&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n;if(null==t)return Xn.call(t);e=t[Zn],r=q(t,Zn);try{t[Zn]=void 0}catch(r){return Xn.call(t)}return n=Xn.call(t),r?t[Zn]=e:delete t[Zn],n}:function(t){return Xn.call(t)},zn="function"==typeof Float64Array;var Yn="function"==typeof Float64Array?Float64Array:null;var qn,Dn="function"==typeof Float64Array?Float64Array:void 0;qn=function(){var t,r;if("function"!=typeof Yn)return!1;try{t=function(t){return zn&&t instanceof Float64Array||"[object Float64Array]"===Hn(t)}(r=new Yn([1,3.14,-3.14,NaN]))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?Dn:function(){throw new Error("not implemented")};var Jn=!0===On?0:1,Kn=new qn(1),Qn=new Je(Kn.buffer);var to="function"==typeof Object.defineProperty?Object.defineProperty:null;var ro,eo=Object.defineProperty,no=Object.prototype,oo=no.toString,io=no.__defineGetter__,ao=no.__defineSetter__,uo=no.__lookupGetter__,co=no.__lookupSetter__;ro=function(){try{return to({},"x",{}),!0}catch(t){return!1}}()?eo:function(t,r,e){var n,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===oo.call(t))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===oo.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(uo.call(t,r)||co.call(t,r)?(n=t.__proto__,t.__proto__=no,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&io&&io.call(t,r,e.get),a&&ao&&ao.call(t,r,e.set),t};var lo=ro;var fo=X();var po=Object.prototype.toString;var so="function"==typeof D?D.toStringTag:"";var yo=fo&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n;if(null==t)return po.call(t);e=t[so],r=q(t,so);try{t[so]=void 0}catch(r){return po.call(t)}return n=po.call(t),r?t[so]=e:delete t[so],n}:function(t){return po.call(t)},vo="function"==typeof Float64Array;var bo="function"==typeof Float64Array?Float64Array:null;var go,wo,ho,mo="function"==typeof Float64Array?Float64Array:void 0;go=function(){var t,r;if("function"!=typeof bo)return!1;try{t=function(t){return vo&&t instanceof Float64Array||"[object Float64Array]"===yo(t)}(r=new bo([1,3.14,-3.14,NaN]))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?mo:function(){throw new Error("not implemented")},!0===On?(wo=1,ho=0):(wo=0,ho=1);var _o={HIGH:wo,LOW:ho},jo=new go(1),So=new Je(jo.buffer),Ao=_o.HIGH,Eo=_o.LOW;function To(t,r,e,n){return jo[0]=t,r[n]=So[Ao],r[n+e]=So[Eo],r}function Oo(t){return To(t,[0,0],1,0)}!function(t,r,e){lo(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}(Oo,"assign",To);var Fo=Number.NEGATIVE_INFINITY;var xo=1048575;var Po=1.4426950407214463,Vo=[0,0];function ko(t){var r,e,n,o,i;if(function(t){return t!=t}(t)||t<0)return NaN;if(Oo.assign(t,Vo,1,0),i=0,(e=Vo[0])<1048576){if(0==(2147483647&e|Vo[1]))return Fo;i-=54,e=Vn(t*=0x40000000000000)}return e>=2146435072?t+t:(i+=(e>>20)-1023|0,i+=(o=(e&=1048575)+614244&1048576|0)>>20|0,n=function(t){var r,e,n,o,i,a,u,c,l,f,p;return o=Vn(t),i=t-1,(xo&2+o)<3?0===i?0:i*i*(.3333333333333333*i-.5):(f=(o&=xo)-398458|0,p=440401-o|0,e=(l=(u=(a=i/(2+i))*a)*u)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(l),n=u*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(l),c=n+e,(f|=p)>0?a*((r=.5*i*i)+c)-r:a*(c-i))}(t=function(t,r){return $n[0]=t,Mn[Rn]=r>>>0,$n[0]}(t,e|1072693248^o)),r=function(t,r){return Kn[0]=t,Qn[Jn]=r>>>0,Kn[0]}(t-=1,0),1.6751713164886512e-10*(t+n)+(t-r+n)*Po+r*Po+i)}return function(t){return Me(t,ko)}}));
//# sourceMappingURL=index.js.map