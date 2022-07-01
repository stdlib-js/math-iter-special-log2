// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterLog2=t()}(this,(function(){"use strict";function r(r){var t=r.default;if("function"==typeof t){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var e=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(n,t,e.get?e:{enumerable:!0,get:function(){return r[t]}})})),n}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l=function(r,t,n){var e,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,n.get),v&&a&&a.call(r,t,n.set),r},y=e,v=l,p=n()?y:v;var b=function(r,t,n){p(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},s=b,d=/./;var m=function(r){return"boolean"==typeof r};var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return w&&"symbol"==typeof Symbol.toStringTag},g=Object.prototype.toString,_=g;var A=function(r){return _.call(r)},h=Object.prototype.hasOwnProperty;var O=function(r,t){return null!=r&&h.call(r,t)},U="function"==typeof Symbol?Symbol.toStringTag:"",E=O,S=U,P=g;var F=A,T=function(r){var t,n,e;if(null==r)return P.call(r);n=r[S],t=E(r,S);try{r[S]=void 0}catch(t){return P.call(r)}return e=P.call(r),t?r[S]=n:delete r[S],e},N=j()?T:F,x=Boolean.prototype.toString;var V=N,B=function(r){try{return x.call(r),!0}catch(r){return!1}},G=j();var I=function(r){return"object"==typeof r&&(r instanceof Boolean||(G?B(r):"[object Boolean]"===V(r)))},L=m,k=I;var H=s,C=function(r){return L(r)||k(r)},M=I;H(C,"isPrimitive",m),H(C,"isObject",M);var R=C;var W=function(){return new Function("return this;")()},X="object"==typeof self?self:null,z="object"==typeof window?window:null,D="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Y="object"==typeof D?D:null;module.exports=Y;var q=R.isPrimitive,J=W,K=X,Q=z,Z=r(Object.freeze({__proto__:null}));var $=function(r){if(arguments.length){if(!q(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return J()}if(K)return K;if(Q)return Q;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")},rr=$(),tr=rr.document&&rr.document.childNodes,nr=Int8Array,er=d,or=tr,ur=nr;var ir=function(){return"function"==typeof er||"object"==typeof ur||"function"==typeof or};var ar=function(){return/^\s*function\s*([^(]*)/i},fr=ar;s(fr,"REGEXP",ar());var cr=fr,lr=N;var yr=Array.isArray?Array.isArray:function(r){return"[object Array]"===lr(r)},vr=yr;var pr=function(r){return null!==r&&"object"==typeof r};s(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!vr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(pr));var br=pr;var sr=N,dr=cr.REGEXP,mr=function(r){return br(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var wr=function(r){var t,n,e;if(("Object"===(n=sr(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=dr.exec(e.toString()))return t[1]}return mr(r)?"Buffer":n},jr=wr;var gr=wr;var _r=function(r){var t;return null===r?"null":"object"===(t=typeof r)?jr(r).toLowerCase():t},Ar=function(r){return gr(r).toLowerCase()},hr=ir()?Ar:_r;var Or=function(r){return"function"===hr(r)},Ur=Or;var Er=function(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&Ur(r.next)};var Sr=function(r){return"number"==typeof r},Pr=Number,Fr=Pr.prototype.toString;var Tr=N,Nr=Pr,xr=function(r){try{return Fr.call(r),!0}catch(r){return!1}},Vr=j();var Br=function(r){return"object"==typeof r&&(r instanceof Nr||(Vr?xr(r):"[object Number]"===Tr(r)))},Gr=Sr,Ir=Br;var Lr=s,kr=function(r){return Gr(r)||Ir(r)},Hr=Br;Lr(kr,"isPrimitive",Sr),Lr(kr,"isObject",Hr);var Cr=kr,Mr=O;var Rr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Mr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Wr=yr;var Xr=function(r){return"object"==typeof r&&null!==r&&!Wr(r)},zr=Object.getPrototypeOf;var Dr=function(r){return r.__proto__},Yr=N,qr=Dr;var Jr=function(r){var t=qr(r);return t||null===t?t:"[object Function]"===Yr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Kr=zr,Qr=Jr,Zr=Or(Object.getPrototypeOf)?Kr:Qr;var $r=Xr,rt=Or,tt=function(r){return null==r?null:(r=Object(r),Zr(r))},nt=O,et=N,ot=Object.prototype;var ut=function(r){var t;return!!$r(r)&&(!(t=tt(r))||!nt(r,"constructor")&&nt(t,"constructor")&&rt(t.constructor)&&"[object Function]"===et(t.constructor)&&nt(t,"isPrototypeOf")&&rt(t.isPrototypeOf)&&(t===ot||function(r){var t;for(t in r)if(!nt(r,t))return!1;return!0}(r)))},it=ut,at=O;var ft=s,ct=Or,lt=Er,yt=Cr.isPrimitive,vt=Rr,pt=function(r,t){return it(t)?(at(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")};var bt=function r(t,n,e){var o,u,i,a;if(!lt(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!ct(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(o={invalid:NaN},arguments.length>2&&(i=pt(o,e)))throw i;return ft(u={},"next",f),ft(u,"return",c),vt&&ct(t[vt])&&ft(u,vt,l),u;function f(){var r;return a?{done:!0}:(r=t.next()).done?(a=!0,r):{value:yt(r.value)?n(r.value):o.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return r(t[vt](),n,o)}},st=bt,dt=N,mt="function"==typeof Uint32Array;var wt="function"==typeof Uint32Array?Uint32Array:null,jt=function(r){return mt&&r instanceof Uint32Array||"[object Uint32Array]"===dt(r)},gt=wt;var _t=function(){var r,t;if("function"!=typeof gt)return!1;try{t=new gt(t=[1,3.14,-3.14,4294967296,4294967297]),r=jt(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var At="function"==typeof Uint32Array?Uint32Array:void 0,ht=function(){throw new Error("not implemented")},Ot=_t()?At:ht,Ut=N,Et="function"==typeof Float64Array;var St="function"==typeof Float64Array?Float64Array:null,Pt=function(r){return Et&&r instanceof Float64Array||"[object Float64Array]"===Ut(r)},Ft=St;var Tt=function(){var r,t;if("function"!=typeof Ft)return!1;try{t=new Ft([1,3.14,-3.14,NaN]),r=Pt(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var Nt="function"==typeof Float64Array?Float64Array:void 0,xt=function(){throw new Error("not implemented")},Vt=Tt()?Nt:xt,Bt=N,Gt="function"==typeof Uint8Array;var It="function"==typeof Uint8Array?Uint8Array:null,Lt=function(r){return Gt&&r instanceof Uint8Array||"[object Uint8Array]"===Bt(r)},kt=It;var Ht=function(){var r,t;if("function"!=typeof kt)return!1;try{t=new kt(t=[1,3.14,-3.14,256,257]),r=Lt(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Ct="function"==typeof Uint8Array?Uint8Array:void 0,Mt=function(){throw new Error("not implemented")},Rt=Ht()?Ct:Mt,Wt=N,Xt="function"==typeof Uint16Array;var zt="function"==typeof Uint16Array?Uint16Array:null,Dt=function(r){return Xt&&r instanceof Uint16Array||"[object Uint16Array]"===Wt(r)},Yt=zt;var qt=function(){var r,t;if("function"!=typeof Yt)return!1;try{t=new Yt(t=[1,3.14,-3.14,65536,65537]),r=Dt(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Jt,Kt="function"==typeof Uint16Array?Uint16Array:void 0,Qt=function(){throw new Error("not implemented")},Zt={uint16:qt()?Kt:Qt,uint8:Rt};(Jt=new Zt.uint16(1))[0]=4660;var $t=52===new Zt.uint8(Jt.buffer)[0],rn=Ot,tn=!0===$t?1:0,nn=new Vt(1),en=new rn(nn.buffer);var on=function(r){return nn[0]=r,en[tn]},un=Ot,an=!0===$t?1:0,fn=new Vt(1),cn=new un(fn.buffer);var ln=function(r,t){return fn[0]=r,cn[an]=t>>>0,fn[0]},yn=ln,vn=Ot,pn=!0===$t?0:1,bn=new Vt(1),sn=new vn(bn.buffer);var dn,mn,wn=function(r,t){return bn[0]=r,sn[pn]=t>>>0,bn[0]},jn=wn;!0===$t?(dn=1,mn=0):(dn=0,mn=1);var gn=Ot,_n={HIGH:dn,LOW:mn},An=new Vt(1),hn=new gn(An.buffer),On=_n.HIGH,Un=_n.LOW;var En=function(r,t){return An[0]=t,r[0]=hn[On],r[1]=hn[Un],r};var Sn=function(r,t){return 1===arguments.length?En([0,0],r):En(r,t)},Pn=Sn;var Fn=function(r){return r!=r},Tn=Pr.NEGATIVE_INFINITY;var Nn=on,xn=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},Vn=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},Bn=1048575;var Gn=function(r){var t,n,e,o,u,i,a,f,c,l;return e=Nn(r),o=r-1,(Bn&2+e)<3?0===o?0:o*o*(.3333333333333333*o-.5):(c=(e&=Bn)-398458|0,l=440401-e|0,n=(f=(i=(u=o/(2+o))*u)*i)*xn(f),a=i*Vn(f)+n,(c|=l)>0?u*((t=.5*o*o)+a)-t:u*(a-o))},In=on,Ln=yn,kn=jn,Hn=Pn,Cn=Fn,Mn=Tn,Rn=Gn,Wn=1.4426950407214463,Xn=[0,0];var zn=function(r){var t,n,e,o,u;if(Cn(r)||r<0)return NaN;if(Hn(Xn,r),u=0,(n=Xn[0])<1048576){if(0==(2147483647&n|Xn[1]))return Mn;u-=54,n=In(r*=0x40000000000000)}return n>=2146435072?r+r:(u+=(n>>20)-1023|0,r=Ln(r,(n&=1048575)|1072693248^(o=n+614244&1048576|0)),u+=o>>20|0,e=Rn(r),1.6751713164886512e-10*((r-=1)+e)+(r-(t=kn(r,0))+e)*Wn+t*Wn+u)},Dn=zn;return function(r){return st(r,Dn)}}));
//# sourceMappingURL=browser.js.map
