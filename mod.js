// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,b=/\.0$/,w=/\.0*e/,h=/(\..*[^0])0*e/;function m(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,h,"$1e"),n=p.call(n,w,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,v,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,g,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function A(r,t,e){var n=t-r.length;return n<0?r:r=e?r+j(n):j(n)+r}var _=String.fromCharCode,E=isNaN,O=Array.isArray;function S(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function x(r){var t,e,n,i,a,f,l,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(t=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),e=n.flags,p=0;p<e.length;p++)switch(i=e.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function k(r){var t,e,n,o;for(e=[],o=0,n=U.exec(r);n;)(t=r.slice(o,U.lastIndex-n[0].length)).length&&e.push(t),e.push(F(n)),o=U.lastIndex,n=U.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function T(r){return"string"==typeof r}function V(r){var t,e,n;if(!T(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=k(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return x.apply(null,e)}var I,N=Object.prototype,P=N.toString,$=N.__defineGetter__,C=N.__defineSetter__,G=N.__lookupGetter__,L=N.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(G.call(r,t)||L.call(r,t)?(n=r.__proto__,r.__proto__=N,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&$&&$.call(r,t,e.get),a&&C&&C.call(r,t,e.set),r};var B=I;function R(r,t,e){B(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var W=/./;function Z(r){return"boolean"==typeof r}var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return H&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function Y(r,t){return null!=r&&z.call(r,t)}var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"";var J=M()?function(r){var t,e,n;if(null==r)return X.call(r);e=r[D],t=Y(r,D);try{r[D]=void 0}catch(t){return X.call(r)}return n=X.call(r),t?r[D]=e:delete r[D],n}:function(r){return X.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=M();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function er(r){return Z(r)||tr(r)}function nr(){return new Function("return this;")()}R(er,"isPrimitive",Z),R(er,"isObject",tr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ar="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ur="object"==typeof ar?ar:null,cr="object"==typeof globalThis?globalThis:null;var fr=function(r){if(arguments.length){if(!Z(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(cr)return cr;if(or)return or;if(ir)return ir;if(ur)return ur;throw new Error("unexpected error. Unable to resolve global object.")}(),lr=fr.document&&fr.document.childNodes,sr=Int8Array;function pr(){return/^\s*function\s*([^(]*)/i}var yr=/^\s*function\s*([^(]*)/i;R(pr,"REGEXP",yr);var vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function dr(r){return null!==r&&"object"==typeof r}function gr(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=yr.exec(n.toString()))return t[1]}return dr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}R(dr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!vr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(dr));var br="function"==typeof W||"object"==typeof sr||"function"==typeof lr?function(r){return gr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?gr(r).toLowerCase():t};function wr(r){return"function"===br(r)}function hr(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&wr(r.next)}function mr(r){return"number"==typeof r}var jr=Number,Ar=jr.prototype.toString;var _r=M();function Er(r){return"object"==typeof r&&(r instanceof jr||(_r?function(r){try{return Ar.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Or(r){return mr(r)||Er(r)}R(Or,"isPrimitive",mr),R(Or,"isObject",Er);var Sr="function"==typeof q&&"symbol"==typeof q("foo")&&Y(q,"iterator")&&"symbol"==typeof q.iterator?Symbol.iterator:null;var xr,Ur=Object,Fr=Object.getPrototypeOf;xr=wr(Object.getPrototypeOf)?Fr:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var kr=xr;var Tr=Object.prototype;function Vr(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!vr(r)}(r)&&(t=function(r){return null==r?null:(r=Ur(r),kr(r))}(r),!t||!Y(r,"constructor")&&Y(t,"constructor")&&wr(t.constructor)&&"[object Function]"===J(t.constructor)&&Y(t,"isPrototypeOf")&&wr(t.isPrototypeOf)&&(t===Tr||function(r){var t;for(t in r)if(!Y(r,t))return!1;return!0}(r)))}function Ir(r,t){return Vr(t)?(Y(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(V("invalid argument. Options argument must be an object. Value: `%s`.",t))}function Nr(r,t,e){var n,o,i,a;if(!hr(r))throw new TypeError(V("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!wr(t))throw new TypeError(V("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=Ir(n,e)))throw i;return R(o={},"next",u),R(o,"return",c),Sr&&wr(r[Sr])&&R(o,Sr,f),o;function u(){var e;return a?{done:!0}:(e=r.next()).done?(a=!0,e):{value:mr(e.value)?t(e.value):n.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return Nr(r[Sr](),t,n)}}var Pr="function"==typeof Uint32Array;var $r="function"==typeof Uint32Array?Uint32Array:null;var Cr,Gr="function"==typeof Uint32Array?Uint32Array:void 0;Cr=function(){var r,t,e;if("function"!=typeof $r)return!1;try{t=new $r(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(Pr&&e instanceof Uint32Array||"[object Uint32Array]"===J(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Gr:function(){throw new Error("not implemented")};var Lr=Cr,Br="function"==typeof Float64Array;var Rr="function"==typeof Float64Array?Float64Array:null;var Wr,Zr="function"==typeof Float64Array?Float64Array:void 0;Wr=function(){var r,t,e;if("function"!=typeof Rr)return!1;try{t=new Rr([1,3.14,-3.14,NaN]),e=t,r=(Br&&e instanceof Float64Array||"[object Float64Array]"===J(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Zr:function(){throw new Error("not implemented")};var Hr=Wr,Mr="function"==typeof Uint8Array;var Xr="function"==typeof Uint8Array?Uint8Array:null;var zr,Yr="function"==typeof Uint8Array?Uint8Array:void 0;zr=function(){var r,t,e;if("function"!=typeof Xr)return!1;try{t=new Xr(t=[1,3.14,-3.14,256,257]),e=t,r=(Mr&&e instanceof Uint8Array||"[object Uint8Array]"===J(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Yr:function(){throw new Error("not implemented")};var qr=zr,Dr="function"==typeof Uint16Array;var Jr="function"==typeof Uint16Array?Uint16Array:null;var Kr,Qr="function"==typeof Uint16Array?Uint16Array:void 0;Kr=function(){var r,t,e;if("function"!=typeof Jr)return!1;try{t=new Jr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Dr&&e instanceof Uint16Array||"[object Uint16Array]"===J(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Qr:function(){throw new Error("not implemented")};var rt,tt={uint16:Kr,uint8:qr};(rt=new tt.uint16(1))[0]=4660;var et=52===new tt.uint8(rt.buffer)[0],nt=!0===et?1:0,ot=new Hr(1),it=new Lr(ot.buffer);function at(r){return ot[0]=r,it[nt]}var ut=!0===et?1:0,ct=new Hr(1),ft=new Lr(ct.buffer);var lt,st,pt=!0===et?0:1,yt=new Hr(1),vt=new Lr(yt.buffer);!0===et?(lt=1,st=0):(lt=0,st=1);var dt={HIGH:lt,LOW:st},gt=new Hr(1),bt=new Lr(gt.buffer),wt=dt.HIGH,ht=dt.LOW;function mt(r,t,e,n){return gt[0]=r,t[n]=bt[wt],t[n+e]=bt[ht],t}function jt(r){return mt(r,[0,0],1,0)}R(jt,"assign",mt);var At=jr.NEGATIVE_INFINITY;var _t=[0,0];function Et(r){var t,e,n,o,i;if(function(r){return r!=r}(r)||r<0)return NaN;if(jt.assign(r,_t,1,0),i=0,(e=_t[0])<1048576){if(0==(2147483647&e|_t[1]))return At;i-=54,e=at(r*=0x40000000000000)}return e>=2146435072?r+r:(i+=(e>>20)-1023|0,i+=(o=(e&=1048575)+614244&1048576|0)>>20|0,n=function(r){var t,e,n,o,i,a,u,c,f,l,s;return i=r-1,(1048575&2+(o=at(r)))<3?0===i?0:i*i*(.3333333333333333*i-.5):(l=(o&=1048575)-398458|0,s=440401-o|0,e=(f=(u=(a=i/(2+i))*a)*u)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(f),n=u*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(f),c=n+e,(l|=s)>0?a*((t=.5*i*i)+c)-t:a*(c-i))}(r=function(r,t){return ct[0]=r,ft[ut]=t>>>0,ct[0]}(r,e|1072693248^o)),t=function(r,t){return yt[0]=r,vt[pt]=t>>>0,yt[0]}(r-=1,0),1.6751713164886512e-10*(r+n)+1.4426950407214463*(r-t+n)+1.4426950407214463*t+i)}function Ot(r){return Nr(r,Et)}export{Ot as default};
//# sourceMappingURL=mod.js.map
