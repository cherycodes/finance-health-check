import{$ as Lv,$n as oe$1,$t as ZS,A as Gu,An as gt$3,Ar as yc,At as Ut$2,B as JT,Bn as jh,Br as zo$1,Bt as XT,C as Fh,Cn as en$1,Ct as Sv,D as G2,Dn as gN,Dr as xi$1,E as Fv,En as g0,Er as xf,Et as Tf,F as Hu,Fn as i4,Ft as Vv,G as K2,Gn as lr,Gr as v$1,Gt as Y2,H as Jt$2,Hn as kq,Hr as s,Ht as Xq,I as Ic,In as iT,Ir as zS,It as W2,J as Kt$2,Jn as mf,Jt as Yt$1,K as KT,Kn as lw,Kt as Yh,L as Iv,Ln as j$3,Lr as zh,M as HS,Mn as gw,Mr as yi$1,Mt as VR,Nn as hr$1,O as GC,On as gg,Or as xv,Ot as Ui$2,P as Hh,Pn as hw,Pt as Vo,Q as Lq,Qn as oD,Qt as ZM,R as J$2,Rn as jR,Rr as zi$2,S as F$1,Sn as de$2,Sr as wT,T as Fq,Tn as fu,Tr as wt$4,Tt as TS,Un as kv,Ur as t,V as Je$1,Vr as r,Vt as Xe$2,W as K$2,Wn as lT,Wr as u,Wt as Y$2,X as L,Xn as mr,Xt as Z$3,Yn as mo,Z as L_,Zn as o0,Zt as Z2,_ as De,_n as cT,_r as uo,_t as Rf,an as Zw,ar as qN,at as Ne,b as Er,bn as dT,br as vc,bt as SS,cn as a0,ct as Nv,dr as re$1,dt as Pv,en as Ze$2,er as ot$4,et as MR,ft as QM,g as Dc,gn as bv,gr as te$2,gt as RR,h as Ct$2,hn as be$1,ht as R$1,i as $m,in as Zv,ir as pw,j as HR,jr as ye$2,jt as V$1,kn as gr,kr as y$1,kt as Uq,l as BR,ln as aT,lr as ql,lt as OT,m as Cs$1,mn as bc,mr as sw,n as $e$2,nn as Zo,nr as pI,nt as Mn$1,o as Af,on as _t$2,or as qR,ot as Nf,p as Cc,pn as b,pr as sh,q as Kh,qt as Yq,r as $i$2,rn as Zq,rr as pg,rt as Mr,s as Av,sn as _v,sr as qS,st as Nr,t as $R,tr as p,tt as Mf,un as ae$3,ur as rc,ut as O_,v as Dt$4,vr as uw,vt as Rh,w as Fi,wr as ws,wt as T$1,x as Es,xn as da$1,xr as wI,xt as Sg,y as ED,yn as cw,yr as v,yt as S$1,z as JS,zn as je$2,zr as zn,zt as Wo$1}from"./chunk-B7W6jEV5.js";var Ui$1=u((lr,fr)=>{"use strict";(function(w,m){typeof lr==`object`&&typeof fr<`u`?fr.exports=m():typeof define==`function`&&define.amd?define(m):(w=typeof globalThis<`u`?globalThis:w||self,w.Dexie=m())})(lr,(function(){"use strict";var w=function(e,t){return w=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},w(e,t)};function m(e,t){if(typeof t!=`function`&&t!==null)throw new TypeError(`Class extends value `+String(t)+` is not a constructor or null`);w(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var c=function(){return c=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},c.apply(this,arguments)};function d(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var S=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:global,k=Object.keys,T=Array.isArray;typeof Promise<`u`&&!S.Promise&&(S.Promise=Promise);function H(e,t){return typeof t!=`object`||k(t).forEach(function(n){e[n]=t[n]}),e}var W=Object.getPrototypeOf,we={}.hasOwnProperty;function J(e,t){return we.call(e,t)}function We(e,t){typeof t==`function`&&(t=t(W(e))),(typeof Reflect>`u`?k:Reflect.ownKeys)(t).forEach(function(n){Se(e,n,t[n])})}var mr=Object.defineProperty;function Se(e,t,n,r){mr(e,t,H(n&&J(n,`get`)&&typeof n.get==`function`?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function Ve(e){return{from:function(t){return e.prototype=Object.create(t.prototype),Se(e.prototype,`constructor`,e),{extend:We.bind(null,e.prototype)}}}}var Qi=Object.getOwnPropertyDescriptor;function yr(e,t){var n=Qi(e,t),r;return n||(r=W(e))&&yr(r,t)}var Gi=[].slice;function xt(e,t,n){return Gi.call(e,t,n)}function gr(e,t){return t(e)}function st(e){if(!e)throw new Error(`Assertion Failed`)}function br(e){S.setImmediate?setImmediate(e):setTimeout(e,0)}function Xi(e,t){return e.reduce(function(n,r,i){var a=t(r,i);return a&&(n[a[0]]=a[1]),n},{})}function pe(e,t){if(typeof t==`string`&&J(e,t))return e[t];if(!t)return e;if(typeof t!=`string`){for(var n=[],r=0,i=t.length;r<i;++r){var a=pe(e,t[r]);n.push(a)}return n}var o=t.indexOf(`.`);if(o!==-1){var s=e[t.substr(0,o)];return s==null?void 0:pe(s,t.substr(o+1))}}function re(e,t,n){if(!(!e||t===void 0)&&!(`isFrozen`in Object&&Object.isFrozen(e)))if(typeof t!=`string`&&`length`in t){st(typeof n!=`string`&&`length`in n);for(var r=0,i=t.length;r<i;++r)re(e,t[r],n[r])}else{var a=t.indexOf(`.`);if(a!==-1){var o=t.substr(0,a),s=t.substr(a+1);if(s===``)n===void 0?T(e)&&!isNaN(parseInt(o))?e.splice(o,1):delete e[o]:e[o]=n;else{var u=e[o];if(!u||!J(e,o)){if(n===void 0)return;u=e[o]={}}re(u,s,n)}}else n===void 0?T(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function Ji(e,t){typeof t==`string`?re(e,t,void 0):`length`in t&&[].map.call(t,function(n){re(e,n,void 0)})}function _r(e){var t={};for(var n in e)J(e,n)&&(t[n]=e[n]);return t}var qi=[].concat;function wr(e){return qi.apply([],e)}var Zi=`BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey`.split(`,`).concat(wr([8,16,32,64].map(function(e){return[`Int`,`Uint`,`Float`].map(function(t){return t+e+`Array`})}))).filter(function(e){return S[e]}),Sr=new Set(Zi.map(function(e){return S[e]}));function Er(e){var t={};for(var n in e)if(J(e,n)){var r=e[n];t[n]=!r||typeof r!=`object`||Sr.has(r.constructor)?r:Er(r)}return t}var ut=null;function Fe(e){ut=/* @__PURE__ */ new WeakMap;var t=vn(e);return ut=null,t}function vn(e){if(!e||typeof e!=`object`)return e;var t=ut.get(e);if(t)return t;if(T(e)){t=[],ut.set(e,t);for(var n=0,r=e.length;n<r;++n)t.push(vn(e[n]))}else if(Sr.has(e.constructor))t=e;else{var i=W(e);t=i===Object.prototype?{}:Object.create(i),ut.set(e,t);for(var a in e)J(e,a)&&(t[a]=vn(e[a]))}return t}var ea={}.toString;function mn(e){return ea.call(e).slice(8,-1)}var yn=typeof Symbol<`u`?Symbol.iterator:`@@iterator`,ta=typeof yn==`symbol`?function(e){var t;return e!=null&&(t=e[yn])&&t.apply(e)}:function(){return null};function Pe(e,t){var n=e.indexOf(t);return n>=0&&e.splice(n,1),n>=0}var $e={};function ve(e){var t,n,r,i;if(arguments.length===1){if(T(e))return e.slice();if(this===$e&&typeof e==`string`)return[e];if(i=ta(e)){for(n=[];r=i.next(),!r.done;)n.push(r.value);return n}if(e==null)return[e];if(t=e.length,typeof t==`number`){for(n=new Array(t);t--;)n[t]=e[t];return n}return[e]}for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var gn=typeof Symbol<`u`?function(e){return e[Symbol.toStringTag]===`AsyncFunction`}:function(){return!1},na=[`Modify`,`Bulk`,`OpenFailed`,`VersionChange`,`Schema`,`Upgrade`,`InvalidTable`,`MissingAPI`,`NoSuchDatabase`,`InvalidArgument`,`SubTransaction`,`Unsupported`,`Internal`,`DatabaseClosed`,`PrematureCommit`,`ForeignAwait`],Ar=[`Unknown`,`Constraint`,`Data`,`TransactionInactive`,`ReadOnly`,`Version`,`NotFound`,`InvalidState`,`InvalidAccess`,`Abort`,`Timeout`,`QuotaExceeded`,`Syntax`,`DataClone`],bn=na.concat(Ar),ra={VersionChanged:`Database version changed by other database connection`,DatabaseClosed:`Database has been closed`,Abort:`Transaction aborted`,TransactionInactive:`Transaction has already completed or failed`,MissingAPI:`IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb`};function Ye(e,t){this.name=e,this.message=t}Ve(Ye).from(Error).extend({toString:function(){return this.name+`: `+this.message}});function Ir(e,t){return e+`. Errors: `+Object.keys(t).map(function(n){return t[n].toString()}).filter(function(n,r,i){return i.indexOf(n)===r}).join(`
`)}function kt(e,t,n,r){this.failures=t,this.failedKeys=r,this.successCount=n,this.message=Ir(e,t)}Ve(kt).from(Ye);function Qe(e,t){this.name=`BulkError`,this.failures=Object.keys(t).map(function(n){return t[n]}),this.failuresByPos=t,this.message=Ir(e,this.failures)}Ve(Qe).from(Ye);var _n=bn.reduce(function(e,t){return e[t]=t+`Error`,e},{}),ia=Ye,N=bn.reduce(function(e,t){var n=t+`Error`;function r(i,a){this.name=n,i?typeof i==`string`?(this.message=``.concat(i).concat(a?`
 `+a:``),this.inner=a||null):typeof i==`object`&&(this.message=``.concat(i.name,` `).concat(i.message),this.inner=i):(this.message=ra[t]||n,this.inner=null)}return Ve(r).from(ia),e[t]=r,e},{});N.Syntax=SyntaxError,N.Type=TypeError,N.Range=RangeError;var xr=Ar.reduce(function(e,t){return e[t+`Error`]=N[t],e},{});function aa(e,t){if(!e||e instanceof Ye||e instanceof TypeError||e instanceof SyntaxError||!e.name||!xr[e.name])return e;var n=new xr[e.name](t||e.message,e);return`stack`in e&&Se(n,`stack`,{get:function(){return this.inner.stack}}),n}var Ct=bn.reduce(function(e,t){return[`Syntax`,`Type`,`Range`].indexOf(t)===-1&&(e[t+`Error`]=N[t]),e},{});Ct.ModifyError=kt,Ct.DexieError=Ye,Ct.BulkError=Qe;function V(){}function ct(e){return e}function oa(e,t){return e==null||e===ct?t:function(n){return t(e(n))}}function Te(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function sa(e,t){return e===V?t:function(){var n=e.apply(this,arguments);n!==void 0&&(arguments[0]=n);var r=this.onsuccess,i=this.onerror;this.onsuccess=null,this.onerror=null;var a=t.apply(this,arguments);return r&&(this.onsuccess=this.onsuccess?Te(r,this.onsuccess):r),i&&(this.onerror=this.onerror?Te(i,this.onerror):i),a!==void 0?a:n}}function ua(e,t){return e===V?t:function(){e.apply(this,arguments);var n=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?Te(n,this.onsuccess):n),r&&(this.onerror=this.onerror?Te(r,this.onerror):r)}}function ca(e,t){return e===V?t:function(){var n=e.apply(this,arguments),r=arguments[0];H(r,n);var i=this.onsuccess,a=this.onerror;this.onsuccess=null,this.onerror=null;var o=t.apply(this,arguments);return i&&(this.onsuccess=this.onsuccess?Te(i,this.onsuccess):i),a&&(this.onerror=this.onerror?Te(a,this.onerror):a),n===void 0?o===void 0?void 0:o:H(n,o)}}function la(e,t){return e===V?t:function(){return t.apply(this,arguments)===!1?!1:e.apply(this,arguments)}}function wn(e,t){return e===V?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then==`function`){for(var r=this,i=arguments.length,a=new Array(i);i--;)a[i]=arguments[i];return n.then(function(){return t.apply(r,a)})}return t.apply(this,arguments)}}var he=typeof location<`u`&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function kr(e,t){he=e}var lt={},Cr=100,Sn=typeof Promise>`u`?[]:(function(){var e=Promise.resolve();if(typeof crypto>`u`||!crypto.subtle)return[e,W(e),e];var t=crypto.subtle.digest(`SHA-512`,new Uint8Array([0]));return[t,W(t),e]})(),Dr=Sn[0],Fr=Sn[1],fa=Sn[2],ha=Fr&&Fr.then,Oe=Dr&&Dr.constructor,En=!!fa;function da(){queueMicrotask(va)}var ft=function(e,t){ht.push([e,t]),Dt&&(da(),Dt=!1)},An=!0,Dt=!0,Re=[],Ft=[],In=ct,me={id:`global`,global:!0,ref:0,unhandleds:[],onunhandled:V,pgp:!1,env:{},finalize:V},M=me,ht=[],Me=0,Pt=[];function P(e){if(typeof this!=`object`)throw new TypeError(`Promises must be constructed via new`);this._listeners=[],this._lib=!1;var t=this._PSD=M;if(typeof e!=`function`){if(e!==lt)throw new TypeError(`Not a function`);this._state=arguments[1],this._value=arguments[2],this._state===!1&&kn(this,this._value);return}this._state=null,this._value=null,++t.ref,Tr(this,e)}var xn={get:function(){var e=M,t=Mt;function n(r,i){var a=this,o=!e.global&&(e!==M||t!==Mt),s=o&&!Ae(),u=new P(function(l,f){Cn(a,new Pr(Mr(r,e,o,s),Mr(i,e,o,s),l,f,e))});return this._consoleTask&&(u._consoleTask=this._consoleTask),u}return n.prototype=lt,n},set:function(e){Se(this,`then`,e&&e.prototype===lt?xn:{get:function(){return e},set:xn.set})}};We(P.prototype,{then:xn,_then:function(e,t){Cn(this,new Pr(null,null,e,t,M))},catch:function(e){if(arguments.length===1)return this.then(null,e);var t=arguments[0],n=arguments[1];return typeof t==`function`?this.then(null,function(r){return r instanceof t?n(r):Tt(r)}):this.then(null,function(r){return r&&r.name===t?n(r):Tt(r)})},finally:function(e){return this.then(function(t){return P.resolve(e()).then(function(){return t})},function(t){return P.resolve(e()).then(function(){return Tt(t)})})},timeout:function(e,t){var n=this;return e<1/0?new P(function(r,i){var a=setTimeout(function(){return i(new N.Timeout(t))},e);n.then(r,i).finally(clearTimeout.bind(null,a))}):this}}),typeof Symbol<`u`&&Symbol.toStringTag&&Se(P.prototype,Symbol.toStringTag,`Dexie.Promise`),me.env=Rr();function Pr(e,t,n,r,i){this.onFulfilled=typeof e==`function`?e:null,this.onRejected=typeof t==`function`?t:null,this.resolve=n,this.reject=r,this.psd=i}We(P,{all:function(){var e=ve.apply(null,arguments).map(Kt);return new P(function(t,n){e.length===0&&t([]);var r=e.length;e.forEach(function(i,a){return P.resolve(i).then(function(o){e[a]=o,--r||t(e)},n)})})},resolve:function(e){if(e instanceof P)return e;if(e&&typeof e.then==`function`)return new P(function(n,r){e.then(n,r)});return new P(lt,!0,e)},reject:Tt,race:function(){var e=ve.apply(null,arguments).map(Kt);return new P(function(t,n){e.map(function(r){return P.resolve(r).then(t,n)})})},PSD:{get:function(){return M},set:function(e){return M=e}},totalEchoes:{get:function(){return Mt}},newPSD:Ee,usePSD:Ke,scheduler:{get:function(){return ft},set:function(e){ft=e}},rejectionMapper:{get:function(){return In},set:function(e){In=e}},follow:function(e,t){return new P(function(n,r){return Ee(function(i,a){var o=M;o.unhandleds=[],o.onunhandled=a,o.finalize=Te(function(){var s=this;ma(function(){s.unhandleds.length===0?i():a(s.unhandleds[0])})},o.finalize),e()},t,n,r)})}}),Oe&&(Oe.allSettled&&Se(P,`allSettled`,function(){var e=ve.apply(null,arguments).map(Kt);return new P(function(t){e.length===0&&t([]);var n=e.length,r=new Array(n);e.forEach(function(i,a){return P.resolve(i).then(function(o){return r[a]={status:`fulfilled`,value:o}},function(o){return r[a]={status:`rejected`,reason:o}}).then(function(){return--n||t(r)})})})}),Oe.any&&typeof AggregateError<`u`&&Se(P,`any`,function(){var e=ve.apply(null,arguments).map(Kt);return new P(function(t,n){e.length===0&&n(/* @__PURE__ */ new AggregateError([]));var r=e.length,i=new Array(r);e.forEach(function(a,o){return P.resolve(a).then(function(s){return t(s)},function(s){i[o]=s,--r||n(new AggregateError(i))})})})}),Oe.withResolvers&&(P.withResolvers=Oe.withResolvers));function Tr(e,t){try{t(function(n){if(e._state===null){if(n===e)throw new TypeError(`A promise cannot be resolved with itself.`);var r=e._lib&&Ge();n&&typeof n.then==`function`?Tr(e,function(i,a){n instanceof P?n._then(i,a):n.then(i,a)}):(e._state=!0,e._value=n,Or(e)),r&&Xe()}},kn.bind(null,e))}catch(n){kn(e,n)}}function kn(e,t){if(Ft.push(t),e._state===null){var n=e._lib&&Ge();t=In(t),e._state=!1,e._value=t,ya(e),Or(e),n&&Xe()}}function Or(e){var t=e._listeners;e._listeners=[];for(var n=0,r=t.length;n<r;++n)Cn(e,t[n]);var i=e._PSD;--i.ref||i.finalize(),Me===0&&(++Me,ft(function(){--Me===0&&Dn()},[]))}function Cn(e,t){if(e._state===null){e._listeners.push(t);return}var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++Me,ft(pa,[n,e,t])}function pa(e,t,n){try{var r,i=t._value;!t._state&&Ft.length&&(Ft=[]),r=he&&t._consoleTask?t._consoleTask.run(function(){return e(i)}):e(i),!t._state&&Ft.indexOf(i)===-1&&ga(t),n.resolve(r)}catch(a){n.reject(a)}finally{--Me===0&&Dn(),--n.psd.ref||n.psd.finalize()}}function va(){Ke(me,function(){Ge()&&Xe()})}function Ge(){var e=An;return An=!1,Dt=!1,e}function Xe(){var e,t,n;do for(;ht.length>0;)for(e=ht,ht=[],n=e.length,t=0;t<n;++t){var r=e[t];r[0].apply(null,r[1])}while(ht.length>0);An=!0,Dt=!0}function Dn(){var e=Re;Re=[],e.forEach(function(r){r._PSD.onunhandled.call(null,r._value,r)});for(var t=Pt.slice(0),n=t.length;n;)t[--n]()}function ma(e){function t(){e(),Pt.splice(Pt.indexOf(t),1)}Pt.push(t),++Me,ft(function(){--Me===0&&Dn()},[])}function ya(e){Re.some(function(t){return t._value===e._value})||Re.push(e)}function ga(e){for(var t=Re.length;t;)if(Re[--t]._value===e._value){Re.splice(t,1);return}}function Tt(e){return new P(lt,!1,e)}function Q(e,t){var n=M;return function(){var r=Ge(),i=M;try{return Ie(n,!0),e.apply(this,arguments)}catch(a){t&&t(a)}finally{Ie(i,!1),r&&Xe()}}}var q={awaits:0,echoes:0,id:0},ba=0,Ot=[],Rt=0,Mt=0,_a=0;function Ee(e,t,n,r){var i=M,a=Object.create(i);a.parent=i,a.ref=0,a.global=!1,a.id=++_a,me.env,a.env=En?{Promise:P,PromiseProp:{value:P,configurable:!0,writable:!0},all:P.all,race:P.race,allSettled:P.allSettled,any:P.any,resolve:P.resolve,reject:P.reject}:{},t&&H(a,t),++i.ref,a.finalize=function(){--this.parent.ref||this.parent.finalize()};var o=Ke(a,e,n,r);return a.ref===0&&a.finalize(),o}function Je(){return q.id||(q.id=++ba),++q.awaits,q.echoes+=Cr,q.id}function Ae(){return q.awaits?(--q.awaits===0&&(q.id=0),q.echoes=q.awaits*Cr,!0):!1}(``+ha).indexOf(`[native code]`)===-1&&(Je=Ae=V);function Kt(e){return q.echoes&&e&&e.constructor===Oe?(Je(),e.then(function(t){return Ae(),t},function(t){return Ae(),G(t)})):e}function wa(e){++Mt,(!q.echoes||--q.echoes===0)&&(q.echoes=q.awaits=q.id=0),Ot.push(M),Ie(e,!0)}function Sa(){var e=Ot[Ot.length-1];Ot.pop(),Ie(e,!1)}function Ie(e,t){var n=M;if((t?q.echoes&&(!Rt++||e!==M):Rt&&(!--Rt||e!==M))&&queueMicrotask(t?wa.bind(null,e):Sa),e!==M&&(M=e,n===me&&(me.env=Rr()),En)){var r=me.env.Promise,i=e.env;(n.global||e.global)&&(Object.defineProperty(S,"Promise",i.PromiseProp),r.all=i.all,r.race=i.race,r.resolve=i.resolve,r.reject=i.reject,i.allSettled&&(r.allSettled=i.allSettled),i.any&&(r.any=i.any))}}function Rr(){var e=S.Promise;return En?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(S,`Promise`),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function Ke(e,t,n,r,i){var a=M;try{return Ie(e,!0),t(n,r,i)}finally{Ie(a,!1)}}function Mr(e,t,n,r){return typeof e!=`function`?e:function(){var i=M;n&&Je(),Ie(t,!0);try{return e.apply(this,arguments)}finally{Ie(i,!1),r&&queueMicrotask(Ae)}}}function Fn(e){Promise===Oe&&q.echoes===0?Rt===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}var G=P.reject;function Pn(e,t,n,r){if(!e.idbdb||!e._state.openComplete&&!M.letThrough&&!e._vip){if(e._state.openComplete)return G(new N.DatabaseClosed(e._state.dbOpenError));if(!e._state.isBeingOpened){if(!e._state.autoOpen)return G(new N.DatabaseClosed);e.open().catch(V)}return e._state.dbReadyPromise.then(function(){return Pn(e,t,n,r)})}else{var i=e._createTransaction(t,n,e._dbSchema);try{i.create(),e._state.PR1398_maxLoop=3}catch(a){return a.name===_n.InvalidState&&e.isOpen()&&--e._state.PR1398_maxLoop>0?(console.warn(`Dexie: Need to reopen db`),e.close({disableAutoOpen:!1}),e.open().then(function(){return Pn(e,t,n,r)})):G(a)}return i._promise(t,function(a,o){return Ee(function(){return M.trans=i,r(a,o,i)})}).then(function(a){if(t===`readwrite`)try{i.idbtrans.commit()}catch{}return t===`readonly`?a:i._completion.then(function(){return a})})}}var Kr=`4.4.7`,Be=`￿`,Tn=-1/0,ye=`Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.`,Br=`String expected.`,Nr=1e3,Bt=`__dbnames`,On=`readonly`,Rn=`readwrite`;function Ne(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var jr={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Nt(e){return typeof e==`string`&&!/\./.test(e)?function(t){return t[e]===void 0&&e in t&&(t=Fe(t),delete t[e]),t}:function(t){return t}}function Lr(){throw N.Type(`Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.`)}function U(e,t){try{var n=Hr(e),r=Hr(t);if(n!==r)return n===`Array`?1:r===`Array`?-1:n===`binary`?1:r===`binary`?-1:n===`string`?1:r===`string`?-1:n===`Date`?1:r!==`Date`?NaN:-1;switch(n){case`number`:case`Date`:case`string`:return e>t?1:e<t?-1:0;case`binary`:return Aa(zr(e),zr(t));case`Array`:return Ea(e,t)}}catch{}return NaN}function Ea(e,t){for(var n=e.length,r=t.length,i=n<r?n:r,a=0;a<i;++a){var o=U(e[a],t[a]);if(o!==0)return o}return n===r?0:n<r?-1:1}function Aa(e,t){for(var n=e.length,r=t.length,i=n<r?n:r,a=0;a<i;++a)if(e[a]!==t[a])return e[a]<t[a]?-1:1;return n===r?0:n<r?-1:1}function Hr(e){var t=typeof e;if(t!==`object`)return t;if(ArrayBuffer.isView(e))return`binary`;var n=mn(e);return n===`ArrayBuffer`?`binary`:n}function zr(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function jt(e,t,n){var r=e.schema.yProps;return r?(t&&n.numFailures>0&&(t=t.filter(function(i,a){return!n.failures[a]})),Promise.all(r.map(function(i){var a=i.updatesTable;return t?e.db.table(a).where(`k`).anyOf(t).delete():e.db.table(a).clear()})).then(function(){return n})):n}var dt=(function(){function e(t){this[`@@propmod`]=t}return e.prototype.execute=function(t){var n,r=this[`@@propmod`];if(r.add!==void 0){var i=r.add;if(T(i))return d(d([],T(t)?t:[],!0),i,!0).sort();if(typeof i==`number`)return(Number(t)||0)+i;if(typeof i==`bigint`)try{return BigInt(t)+i}catch{return BigInt(0)+i}throw new TypeError(`Invalid term `.concat(i))}if(r.remove!==void 0){var a=r.remove;if(T(a))return T(t)?t.filter(function(s){return!a.includes(s)}).sort():[];if(typeof a==`number`)return Number(t)-a;if(typeof a==`bigint`)try{return BigInt(t)-a}catch{return BigInt(0)-a}throw new TypeError(`Invalid subtrahend `.concat(a))}var o=(n=r.replacePrefix)===null||n===void 0?void 0:n[0];return o&&typeof t==`string`&&t.startsWith(o)?r.replacePrefix[1]+t.substring(o.length):t},e})();function Ur(e,t){for(var n=k(t),r=n.length,i=!1,a=0;a<r;++a){var o=n[a],s=t[o],u=pe(e,o);s instanceof dt?(re(e,o,s.execute(u)),i=!0):u!==s&&(re(e,o,s),i=!0)}return i}var Wr=(function(){function e(){}return e.prototype._trans=function(t,n,r){var i=this._tx||M.trans,a=this.name,o=he&&typeof console<`u`&&console.createTask&&console.createTask(`Dexie: `.concat(t===`readonly`?`read`:`write`,` `).concat(this.name));function s(f,v,y){if(!y.schema[a])throw new N.NotFound(`Table `+a+` not part of transaction`);return n(y.idbtrans,y)}var u=Ge();try{var l=i&&i.db._novip===this.db._novip?i===M.trans?i._promise(t,s,r):Ee(function(){return i._promise(t,s,r)},{trans:i,transless:M.transless||M}):Pn(this.db,t,[this.name],s);return o&&(l._consoleTask=o,l=l.catch(function(f){return console.trace(f),G(f)})),l}finally{u&&Xe()}},e.prototype.get=function(t,n){var r=this;return t&&t.constructor===Object?this.where(t).first(n):t==null?G(new N.Type(`Invalid argument to Table.get()`)):this._trans(`readonly`,function(i){return r.core.get({trans:i,key:t}).then(function(a){return r.hook.reading.fire(a)})}).then(n)},e.prototype.where=function(t){if(typeof t==`string`)return new this.db.WhereClause(this,t);if(T(t))return new this.db.WhereClause(this,`[`.concat(t.join(`+`),`]`));var n=k(t);if(n.length===1)return this.where(n[0]).equals(t[n[0]]);var r=this.schema.indexes.concat(this.schema.primKey).filter(function(f){if(f.compound&&n.every(function(y){return f.keyPath.indexOf(y)>=0})){for(var v=0;v<n.length;++v)if(n.indexOf(f.keyPath[v])===-1)return!1;return!0}return!1}).sort(function(f,v){return f.keyPath.length-v.keyPath.length})[0];if(r&&this.db._maxKey!==Be){var i=r.keyPath.slice(0,n.length);return this.where(i).equals(i.map(function(f){return t[f]}))}!r&&he&&console.warn(`The query `.concat(JSON.stringify(t),` on `).concat(this.name,` would benefit from a `)+`compound index [`.concat(n.join(`+`),`]`));var a=this.schema.idxByName;function o(f,v){return U(f,v)===0}var s=n.reduce(function(f,v){var y=f[0],A=f[1],h=a[v],p=t[v];return[y||h,y||!h?Ne(A,h&&h.multi?function(b){var g=pe(b,v);return T(g)&&g.some(function(x){return o(p,x)})}:function(b){return o(p,pe(b,v))}):A]},[null,null]),u=s[0],l=s[1];return u?this.where(u.name).equals(t[u.keyPath]).filter(l):r?this.filter(l):this.where(n).equals(``)},e.prototype.filter=function(t){return this.toCollection().and(t)},e.prototype.count=function(t){return this.toCollection().count(t)},e.prototype.offset=function(t){return this.toCollection().offset(t)},e.prototype.limit=function(t){return this.toCollection().limit(t)},e.prototype.each=function(t){return this.toCollection().each(t)},e.prototype.toArray=function(t){return this.toCollection().toArray(t)},e.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},e.prototype.orderBy=function(t){return new this.db.Collection(new this.db.WhereClause(this,T(t)?`[`.concat(t.join(`+`),`]`):t))},e.prototype.reverse=function(){return this.toCollection().reverse()},e.prototype.mapToClass=function(t){var n=this,r=n.db,i=n.name;this.schema.mappedClass=t,t.prototype instanceof Lr&&(t=(function(u){m(l,u);function l(){return u!==null&&u.apply(this,arguments)||this}return Object.defineProperty(l.prototype,"db",{get:function(){return r},enumerable:!1,configurable:!0}),l.prototype.table=function(){return i},l})(t));for(var a=/* @__PURE__ */ new Set,o=t.prototype;o;o=W(o))Object.getOwnPropertyNames(o).forEach(function(u){return a.add(u)});var s=function(u){if(!u)return u;var l=Object.create(t.prototype);for(var f in u)if(!a.has(f))try{l[f]=u[f]}catch{}return l};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=s,this.hook(`reading`,s),t},e.prototype.defineClass=function(){function t(n){H(this,n)}return this.mapToClass(t)},e.prototype.add=function(t,n){var r=this,i=this.schema.primKey,a=i.auto,o=i.keyPath,s=t;return o&&a&&(s=Nt(o)(t)),this._trans(`readwrite`,function(u){return r.core.mutate({trans:u,type:`add`,keys:n!=null?[n]:null,values:[s]})}).then(function(u){return u.numFailures?P.reject(u.failures[0]):u.lastResult}).then(function(u){if(o)try{re(t,o,u)}catch{}return u})},e.prototype.upsert=function(t,n){var r=this,i=this.schema.primKey.keyPath;return this._trans(`readwrite`,function(a){return r.core.get({trans:a,key:t}).then(function(o){var s=o??{};return Ur(s,n),i&&re(s,i,t),r.core.mutate({trans:a,type:`put`,values:[s],keys:[t],upsert:!0,updates:{keys:[t],changeSpecs:[n]}}).then(function(u){return u.numFailures?P.reject(u.failures[0]):!!o})})})},e.prototype.update=function(t,n){if(typeof t==`object`&&!T(t)){var r=pe(t,this.schema.primKey.keyPath);return r===void 0?G(new N.InvalidArgument(`Given object does not contain its primary key`)):this.where(`:id`).equals(r).modify(n)}else return this.where(`:id`).equals(t).modify(n)},e.prototype.put=function(t,n){var r=this,i=this.schema.primKey,a=i.auto,o=i.keyPath,s=t;return o&&a&&(s=Nt(o)(t)),this._trans(`readwrite`,function(u){return r.core.mutate({trans:u,type:`put`,values:[s],keys:n!=null?[n]:null})}).then(function(u){return u.numFailures?P.reject(u.failures[0]):u.lastResult}).then(function(u){if(o)try{re(t,o,u)}catch{}return u})},e.prototype.delete=function(t){var n=this;return this._trans(`readwrite`,function(r){return n.core.mutate({trans:r,type:`delete`,keys:[t]}).then(function(i){return jt(n,[t],i)}).then(function(i){return i.numFailures?P.reject(i.failures[0]):void 0})})},e.prototype.clear=function(){var t=this;return this._trans(`readwrite`,function(n){return t.core.mutate({trans:n,type:`deleteRange`,range:jr}).then(function(r){return jt(t,null,r)})}).then(function(n){return n.numFailures?P.reject(n.failures[0]):void 0})},e.prototype.bulkGet=function(t){var n=this;return this._trans(`readonly`,function(r){return n.core.getMany({keys:t,trans:r}).then(function(i){return i.map(function(a){return n.hook.reading.fire(a)})})})},e.prototype.bulkAdd=function(t,n,r){var i=this,a=Array.isArray(n)?n:void 0;r=r||(a?void 0:n);var o=r?r.allKeys:void 0;return this._trans(`readwrite`,function(s){var u=i.schema.primKey,l=u.auto,f=u.keyPath;if(f&&a)throw new N.InvalidArgument(`bulkAdd(): keys argument invalid on tables with inbound keys`);if(a&&a.length!==t.length)throw new N.InvalidArgument(`Arguments objects and keys must have the same length`);var v=t.length,y=f&&l?t.map(Nt(f)):t;return i.core.mutate({trans:s,type:`add`,keys:a,values:y,wantResults:o}).then(function(A){var h=A.numFailures,p=A.results,b=A.lastResult,g=A.failures,x=o?p:b;if(h===0)return x;throw new Qe(``.concat(i.name,`.bulkAdd(): `).concat(h,` of `).concat(v,` operations failed`),g)})})},e.prototype.bulkPut=function(t,n,r){var i=this,a=Array.isArray(n)?n:void 0;r=r||(a?void 0:n);var o=r?r.allKeys:void 0;return this._trans(`readwrite`,function(s){var u=i.schema.primKey,l=u.auto,f=u.keyPath;if(f&&a)throw new N.InvalidArgument(`bulkPut(): keys argument invalid on tables with inbound keys`);if(a&&a.length!==t.length)throw new N.InvalidArgument(`Arguments objects and keys must have the same length`);var v=t.length,y=f&&l?t.map(Nt(f)):t;return i.core.mutate({trans:s,type:`put`,keys:a,values:y,wantResults:o}).then(function(A){var h=A.numFailures,p=A.results,b=A.lastResult,g=A.failures,x=o?p:b;if(h===0)return x;throw new Qe(``.concat(i.name,`.bulkPut(): `).concat(h,` of `).concat(v,` operations failed`),g)})})},e.prototype.bulkUpdate=function(t){var n=this,r=t.map(function(o){return o.key}),i=t.map(function(o){return o.changes}),a=[];return this._trans(`readwrite`,function(o){var s=n.core;return s.getMany({trans:o,keys:r,cache:`clone`}).then(function(u){var l=s.schema.primaryKey,f=l.outbound,v=l.extractKey,y=[],A=[];t.forEach(function(p,b){var g=p.key,x=p.changes,I=u[b];if(I){for(var _=0,E=Object.keys(x);_<E.length;_++){var F=E[_];re(I,F,x[F])}if(!f&&U(v(I),g)!==0)throw new N.Constraint(`Cannot update primary key in bulkUpdate()`);a.push(b),y.push(g),A.push(I)}});var h=y.length;return s.mutate({trans:o,type:`put`,keys:y,values:A,updates:{keys:r,changeSpecs:i}}).then(function(p){var b=p.numFailures,g=p.failures;if(b===0)return h;for(var x=0,I=Object.keys(g);x<I.length;x++){var _=I[x],E=a[Number(_)];if(E!=null){var F=g[_];delete g[_],g[E]=F}}throw new Qe(``.concat(n.name,`.bulkUpdate(): `).concat(b,` of `).concat(h,` operations failed`),g)})})})},e.prototype.bulkDelete=function(t){var n=this,r=t.length;return this._trans(`readwrite`,function(i){return n.core.mutate({trans:i,type:`delete`,keys:t}).then(function(a){return jt(n,t,a)})}).then(function(i){var a=i.numFailures,o=i.lastResult,s=i.failures;if(a===0)return o;throw new Qe(``.concat(n.name,`.bulkDelete(): `).concat(a,` of `).concat(r,` operations failed`),s)})},e})();function pt(e){var t={},n=function(s,u){if(u){for(var l=arguments.length,f=new Array(l-1);--l;)f[l-1]=arguments[l];return t[s].subscribe.apply(null,f),e}else if(typeof s==`string`)return t[s]};n.addEventType=a;for(var r=1,i=arguments.length;r<i;++r)a(arguments[r]);return n;function a(s,u,l){if(typeof s==`object`)return o(s);u||(u=la),l||(l=V);var f={subscribers:[],fire:l,subscribe:function(v){f.subscribers.indexOf(v)===-1&&(f.subscribers.push(v),f.fire=u(f.fire,v))},unsubscribe:function(v){f.subscribers=f.subscribers.filter(function(y){return y!==v}),f.fire=f.subscribers.reduce(u,l)}};return t[s]=n[s]=f,f}function o(s){k(s).forEach(function(u){var l=s[u];if(T(l))a(u,s[u][0],s[u][1]);else if(l===`asap`)var f=a(u,ct,function(){for(var y=arguments.length,A=new Array(y);y--;)A[y]=arguments[y];f.subscribers.forEach(function(h){br(function(){h.apply(null,A)})})});else throw new N.InvalidArgument(`Invalid event config`)})}}function vt(e,t){return Ve(t).from({prototype:e}),t}function Ia(e){return vt(Wr.prototype,function(n,r,i){this.db=e,this._tx=i,this.name=n,this.schema=r,this.hook=e._allTables[n]?e._allTables[n].hook:pt(null,{creating:[sa,V],reading:[oa,ct],updating:[ca,V],deleting:[ua,V]})})}function qe(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function Mn(e,t){e.filter=Ne(e.filter,t)}function Kn(e,t,n){var r=e.replayFilter;e.replayFilter=r?function(){return Ne(r(),t())}:t,e.justLimit=n&&!r}function xa(e,t){e.isMatch=Ne(e.isMatch,t)}function Lt(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(!n)throw new N.Schema(`KeyPath `+e.index+` on object store `+t.name+` is not indexed`);return n}function Vr(e,t,n){var r=Lt(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir===`prev`,unique:!!e.unique,query:{index:r,range:e.range}})}function Ht(e,t,n,r){var i=e.replayFilter?Ne(e.filter,e.replayFilter()):e.filter;if(e.or){var a={},o=function(s,u,l){if(!i||i(u,l,function(y){return u.stop(y)},function(y){return u.fail(y)})){var f=u.primaryKey,v=``+f;v===`[object ArrayBuffer]`&&(v=``+new Uint8Array(f)),J(a,v)||(a[v]=!0,t(s,u,l))}};return Promise.all([e.or._iterate(o,n),$r(Vr(e,r,n),e.algorithm,o,!e.keysOnly&&e.valueMapper)])}else return $r(Vr(e,r,n),Ne(e.algorithm,i),t,!e.keysOnly&&e.valueMapper)}function $r(e,t,n,r){var a=Q(r?function(o,s,u){return n(r(o),s,u)}:n);return e.then(function(o){if(o)return o.start(function(){var s=function(){return o.continue()};(!t||t(o,function(u){return s=u},function(u){o.stop(u),s=V},function(u){o.fail(u),s=V}))&&a(o.value,o,function(u){return s=u}),s()})})}var ka=(function(){function e(){}return e.prototype._read=function(t,n){var r=this._ctx;return r.error?r.table._trans(null,G.bind(null,r.error)):r.table._trans(`readonly`,t).then(n)},e.prototype._write=function(t){var n=this._ctx;return n.error?n.table._trans(null,G.bind(null,n.error)):n.table._trans(`readwrite`,t,`locked`)},e.prototype._addAlgorithm=function(t){var n=this._ctx;n.algorithm=Ne(n.algorithm,t)},e.prototype._iterate=function(t,n){return Ht(this._ctx,t,n,this._ctx.table.core)},e.prototype.clone=function(t){var n=Object.create(this.constructor.prototype),r=Object.create(this._ctx);return t&&H(r,t),n._ctx=r,n},e.prototype.raw=function(){return this._ctx.valueMapper=null,this},e.prototype.each=function(t){var n=this._ctx;return this._read(function(r){return Ht(n,t,r,n.table.core)})},e.prototype.count=function(t){var n=this;return this._read(function(r){var i=n._ctx,a=i.table.core;if(qe(i,!0))return a.count({trans:r,query:{index:Lt(i,a.schema),range:i.range}}).then(function(s){return Math.min(s,i.limit)});var o=0;return Ht(i,function(){return++o,!1},r,a).then(function(){return o})}).then(t)},e.prototype.sortBy=function(t,n){var r=t.split(`.`).reverse(),i=r[0],a=r.length-1;function o(l,f){return f?o(l[r[f]],f-1):l[i]}var s=this._ctx.dir===`next`?1:-1;function u(l,f){return U(o(l,a),o(f,a))*s}return this.toArray(function(l){return l.slice().sort(u)}).then(n)},e.prototype.toArray=function(t){var n=this;return this._read(function(r){var i=n._ctx;if(qe(i,!0)&&i.limit>0){var a=i.valueMapper,o=Lt(i,i.table.core.schema);return i.table.core.query({trans:r,limit:i.limit,values:!0,direction:i.dir===`prev`?`prev`:void 0,query:{index:o,range:i.range}}).then(function(u){var l=u.result;return a?l.map(a):l})}else{var s=[];return Ht(i,function(u){return s.push(u)},r,i.table.core).then(function(){return s})}},t)},e.prototype.offset=function(t){var n=this._ctx;return t<=0?this:(n.offset+=t,qe(n)?Kn(n,function(){var r=t;return function(i,a){return r===0?!0:r===1?(--r,!1):(a(function(){i.advance(r),r=0}),!1)}}):Kn(n,function(){var r=t;return function(){return--r<0}}),this)},e.prototype.limit=function(t){return this._ctx.limit=Math.min(this._ctx.limit,t),Kn(this._ctx,function(){var n=t;return function(r,i,a){return--n<=0&&i(a),n>=0}},!0),this},e.prototype.until=function(t,n){return Mn(this._ctx,function(r,i,a){return t(r.value)?(i(a),n):!0}),this},e.prototype.first=function(t){return this.limit(1).toArray(function(n){return n[0]}).then(t)},e.prototype.last=function(t){return this.reverse().first(t)},e.prototype.filter=function(t){return Mn(this._ctx,function(n){return t(n.value)}),xa(this._ctx,t),this},e.prototype.and=function(t){return this.filter(t)},e.prototype.or=function(t){return new this.db.WhereClause(this._ctx.table,t,this)},e.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir===`prev`?`next`:`prev`,this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},e.prototype.desc=function(){return this.reverse()},e.prototype.eachKey=function(t){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,i){t(i.key,i)})},e.prototype.eachUniqueKey=function(t){return this._ctx.unique=`unique`,this.eachKey(t)},e.prototype.eachPrimaryKey=function(t){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,i){t(i.primaryKey,i)})},e.prototype.keys=function(t){var n=this._ctx;n.keysOnly=!n.isMatch;var r=[];return this.each(function(i,a){r.push(a.key)}).then(function(){return r}).then(t)},e.prototype.primaryKeys=function(t){var n=this._ctx;if(qe(n,!0)&&n.limit>0)return this._read(function(i){var a=Lt(n,n.table.core.schema);return n.table.core.query({trans:i,values:!1,limit:n.limit,direction:n.dir===`prev`?`prev`:void 0,query:{index:a,range:n.range}})}).then(function(i){return i.result}).then(t);n.keysOnly=!n.isMatch;var r=[];return this.each(function(i,a){r.push(a.primaryKey)}).then(function(){return r}).then(t)},e.prototype.uniqueKeys=function(t){return this._ctx.unique=`unique`,this.keys(t)},e.prototype.firstKey=function(t){return this.limit(1).keys(function(n){return n[0]}).then(t)},e.prototype.lastKey=function(t){return this.reverse().firstKey(t)},e.prototype.distinct=function(){var t=this._ctx,n=t.index&&t.table.schema.idxByName[t.index];if(!n||!n.multi)return this;var r={};return Mn(this._ctx,function(i){var a=i.primaryKey.toString(),o=J(r,a);return r[a]=!0,!o}),this},e.prototype.modify=function(t){var n=this,r=this._ctx;return this._write(function(i){var a;typeof t==`function`?a=t:a=function(g){return Ur(g,t)};var o=r.table.core,s=o.schema.primaryKey,u=s.outbound,l=s.extractKey,f=200,v=n.db._options.modifyChunkSize;v&&(typeof v==`object`?f=v[o.name]||v[`*`]||200:f=v);var y=[],A=0,h=[],p=function(g,x){var I=x.failures,_=x.numFailures;A+=g-_;for(var E=0,F=k(I);E<F.length;E++){var C=F[E];y.push(I[C])}},b=t===Yr;return n.clone().primaryKeys().then(function(g){var x=qe(r)&&r.limit===1/0&&(typeof t!=`function`||b)&&{index:r.index,range:r.range},I=function(_){var E=Math.min(f,g.length-_),F=g.slice(_,_+E);return(b?Promise.resolve([]):o.getMany({trans:i,keys:F,cache:`immutable`})).then(function(C){var D=[],O=[],z=u?[]:null,K=b?F:[];if(!b)for(var R=0;R<E;++R){var j=C[R],L={value:Fe(j),primKey:g[_+R]};a.call(L,L.value,L)!==!1&&(L.value==null?K.push(g[_+R]):!u&&U(l(j),l(L.value))!==0?(K.push(g[_+R]),D.push(L.value)):(O.push(L.value),u&&z.push(g[_+R])))}return Promise.resolve(D.length>0&&o.mutate({trans:i,type:`add`,values:D}).then(function($){for(var B in $.failures)K.splice(parseInt(B),1);p(D.length,$)})).then(function(){return(O.length>0||x&&typeof t==`object`)&&o.mutate({trans:i,type:`put`,keys:z,values:O,criteria:x,changeSpec:typeof t!=`function`&&t,isAdditionalChunk:_>0}).then(function($){return p(O.length,$)})}).then(function(){return(K.length>0||x&&b)&&o.mutate({trans:i,type:`delete`,keys:K,criteria:x,isAdditionalChunk:_>0}).then(function($){return jt(r.table,K,$)}).then(function($){return p(K.length,$)})}).then(function(){return g.length>_+E&&I(_+f)})})};return I(0).then(function(){if(y.length>0)throw new kt(`Error modifying one or more objects`,y,A,h);return g.length})})})},e.prototype.delete=function(){var t=this._ctx,n=t.range;return qe(t)&&!t.table.schema.yProps&&(t.isPrimKey||n.type===3)?this._write(function(r){var i=t.table.core.schema.primaryKey,a=n;return t.table.core.count({trans:r,query:{index:i,range:a}}).then(function(o){return t.table.core.mutate({trans:r,type:`deleteRange`,range:a}).then(function(s){var u=s.failures,l=s.numFailures;if(l)throw new kt(`Could not delete some values`,Object.keys(u).map(function(f){return u[f]}),o-l);return o-l})})}):this.modify(Yr)},e})(),Yr=function(e,t){return t.value=null};function Ca(e){return vt(ka.prototype,function(n,r){this.db=e;var i=jr,a=null;if(r)try{i=r()}catch(l){a=l}var o=n._ctx,s=o.table,u=s.hook.reading.fire;this._ctx={table:s,index:o.index,isPrimKey:!o.index||s.schema.primKey.keyPath&&o.index===s.schema.primKey.name,range:i,keysOnly:!1,dir:`next`,unique:``,algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:a,or:o.or,valueMapper:u!==ct?u:null}})}function Da(e,t){return e<t?-1:e===t?0:1}function Fa(e,t){return e>t?-1:e===t?0:1}function ie(e,t,n){var r=e instanceof Gr?new e.Collection(e):e;return r._ctx.error=n?new n(t):new TypeError(t),r}function Ze(e){var t=new e.Collection(e,function(){return Qr(``)});return t._addAlgorithm(function(){return!1}),t}function Pa(e){return e===`next`?function(t){return t.toUpperCase()}:function(t){return t.toLowerCase()}}function Ta(e){return e===`next`?function(t){return t.toLowerCase()}:function(t){return t.toUpperCase()}}function Oa(e,t,n,r,i,a){for(var o=Math.min(e.length,r.length),s=-1,u=0;u<o;++u){var l=t[u];if(l!==r[u])return i(e[u],n[u])<0?e.substr(0,u)+n[u]+n.substr(u+1):i(e[u],r[u])<0?e.substr(0,u)+r[u]+n.substr(u+1):s>=0?e.substr(0,s)+t[s]+n.substr(s+1):null;i(e[u],l)<0&&(s=u)}return o<r.length&&a===`next`?e+n.substr(e.length):o<e.length&&a===`prev`?e.substr(0,n.length):s<0?null:e.substr(0,s)+r[s]+n.substr(s+1)}function zt(e,t,n,r){var i,a,o,s,u,l,f,v=n.length;if(!n.every(function(p){return typeof p==`string`}))return ie(e,Br);function y(p){i=Pa(p),a=Ta(p),o=p===`next`?Da:Fa;var b=n.map(function(g){return{lower:a(g),upper:i(g)}}).sort(function(g,x){return o(g.lower,x.lower)});s=b.map(function(g){return g.upper}),u=b.map(function(g){return g.lower}),l=p,f=p===`next`?``:r}y(`next`);var A=new e.Collection(e,function(){return xe(s[0],u[v-1]+r)});A._ondirectionchange=function(p){y(p)};var h=0;return A._addAlgorithm(function(p,b,g){var x=p.key;if(typeof x!=`string`)return!1;var I=a(x);if(t(I,u,h))return!0;for(var _=null,E=h;E<v;++E){var F=Oa(x,I,s[E],u[E],o,l);F===null&&_===null?h=E+1:(_===null||o(_,F)>0)&&(_=F)}return b(_!==null?function(){p.continue(_+f)}:g),!1}),A}function xe(e,t,n,r){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:r}}function Qr(e){return{type:1,lower:e,upper:e}}var Gr=(function(){function e(){}return Object.defineProperty(e.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),e.prototype.between=function(t,n,r,i){r=r!==!1,i=i===!0;try{return this._cmp(t,n)>0||this._cmp(t,n)===0&&(r||i)&&!(r&&i)?Ze(this):new this.Collection(this,function(){return xe(t,n,!r,!i)})}catch{return ie(this,ye)}},e.prototype.equals=function(t){return t==null?ie(this,ye):new this.Collection(this,function(){return Qr(t)})},e.prototype.above=function(t){return t==null?ie(this,ye):new this.Collection(this,function(){return xe(t,void 0,!0)})},e.prototype.aboveOrEqual=function(t){return t==null?ie(this,ye):new this.Collection(this,function(){return xe(t,void 0,!1)})},e.prototype.below=function(t){return t==null?ie(this,ye):new this.Collection(this,function(){return xe(void 0,t,!1,!0)})},e.prototype.belowOrEqual=function(t){return t==null?ie(this,ye):new this.Collection(this,function(){return xe(void 0,t)})},e.prototype.startsWith=function(t){return typeof t!=`string`?ie(this,Br):this.between(t,t+Be,!0,!0)},e.prototype.startsWithIgnoreCase=function(t){return t===``?this.startsWith(t):zt(this,function(n,r){return n.indexOf(r[0])===0},[t],Be)},e.prototype.equalsIgnoreCase=function(t){return zt(this,function(n,r){return n===r[0]},[t],``)},e.prototype.anyOfIgnoreCase=function(){var t=ve.apply($e,arguments);return t.length===0?Ze(this):zt(this,function(n,r){return r.indexOf(n)!==-1},t,``)},e.prototype.startsWithAnyOfIgnoreCase=function(){var t=ve.apply($e,arguments);return t.length===0?Ze(this):zt(this,function(n,r){return r.some(function(i){return n.indexOf(i)===0})},t,Be)},e.prototype.anyOf=function(){var t=this,n=ve.apply($e,arguments),r=this._cmp;try{n.sort(r)}catch{return ie(this,ye)}if(n.length===0)return Ze(this);var i=new this.Collection(this,function(){return xe(n[0],n[n.length-1])});i._ondirectionchange=function(o){r=o===`next`?t._ascending:t._descending,n.sort(r)};var a=0;return i._addAlgorithm(function(o,s,u){for(var l=o.key;r(l,n[a])>0;)if(++a,a===n.length)return s(u),!1;return r(l,n[a])===0?!0:(s(function(){o.continue(n[a])}),!1)}),i},e.prototype.notEqual=function(t){return this.inAnyRange([[Tn,t],[t,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},e.prototype.noneOf=function(){var t=ve.apply($e,arguments);if(t.length===0)return new this.Collection(this);try{t.sort(this._ascending)}catch{return ie(this,ye)}var n=t.reduce(function(r,i){return r?r.concat([[r[r.length-1][1],i]]):[[Tn,i]]},null);return n.push([t[t.length-1],this.db._maxKey]),this.inAnyRange(n,{includeLowers:!1,includeUppers:!1})},e.prototype.inAnyRange=function(t,n){var r=this,i=this._cmp,a=this._ascending,o=this._descending,s=this._min,u=this._max;if(t.length===0)return Ze(this);if(!t.every(function(E){return E[0]!==void 0&&E[1]!==void 0&&a(E[0],E[1])<=0}))return ie(this,`First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower`,N.InvalidArgument);var l=!n||n.includeLowers!==!1,f=n&&n.includeUppers===!0;function v(E,F){for(var C=0,D=E.length;C<D;++C){var O=E[C];if(i(F[0],O[1])<0&&i(F[1],O[0])>0){O[0]=s(O[0],F[0]),O[1]=u(O[1],F[1]);break}}return C===D&&E.push(F),E}var y=a;function A(E,F){return y(E[0],F[0])}var h;try{h=t.reduce(v,[]),h.sort(A)}catch{return ie(this,ye)}var p=0,b=f?function(E){return a(E,h[p][1])>0}:function(E){return a(E,h[p][1])>=0},g=l?function(E){return o(E,h[p][0])>0}:function(E){return o(E,h[p][0])>=0};function x(E){return!b(E)&&!g(E)}var I=b,_=new this.Collection(this,function(){return xe(h[0][0],h[h.length-1][1],!l,!f)});return _._ondirectionchange=function(E){E===`next`?(I=b,y=a):(I=g,y=o),h.sort(A)},_._addAlgorithm(function(E,F,C){for(var D=E.key;I(D);)if(++p,p===h.length)return F(C),!1;return x(D)?!0:(r._cmp(D,h[p][1])===0||r._cmp(D,h[p][0])===0||F(function(){y===a?E.continue(h[p][0]):E.continue(h[p][1])}),!1)}),_},e.prototype.startsWithAnyOf=function(){var t=ve.apply($e,arguments);return t.every(function(n){return typeof n==`string`})?t.length===0?Ze(this):this.inAnyRange(t.map(function(n){return[n,n+Be]})):ie(this,`startsWithAnyOf() only works with strings`)},e})();function Ra(e){return vt(Gr.prototype,function(n,r,i){if(this.db=e,this._ctx={table:n,index:r===`:id`?null:r,or:i},this._cmp=this._ascending=U,this._descending=function(a,o){return U(o,a)},this._max=function(a,o){return U(a,o)>0?a:o},this._min=function(a,o){return U(a,o)<0?a:o},this._IDBKeyRange=e._deps.IDBKeyRange,!this._IDBKeyRange)throw new N.MissingAPI})}function ce(e){return Q(function(t){return mt(t),e(t.target.error),!1})}function mt(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var Ut=`storagemutated`,Bn=`x-storagemutated-1`,ke=pt(null,Ut),Ma=(function(){function e(){}return e.prototype._lock=function(){return st(!M.global),++this._reculock,this._reculock===1&&!M.global&&(M.lockOwnerFor=this),this},e.prototype._unlock=function(){if(st(!M.global),--this._reculock===0)for(M.global||(M.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var t=this._blockedFuncs.shift();try{Ke(t[1],t[0])}catch{}}return this},e.prototype._locked=function(){return this._reculock&&M.lockOwnerFor!==this},e.prototype.create=function(t){var n=this;if(!this.mode)return this;var r=this.db.idbdb,i=this.db._state.dbOpenError;if(st(!this.idbtrans),!t&&!r)switch(i&&i.name){case`DatabaseClosedError`:throw new N.DatabaseClosed(i);case`MissingAPIError`:throw new N.MissingAPI(i.message,i);default:throw new N.OpenFailed(i)}if(!this.active)throw new N.TransactionInactive;return st(this._completion._state===null),t=this.idbtrans=t||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):r.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})),t.onerror=Q(function(a){mt(a),n._reject(t.error)}),t.onabort=Q(function(a){mt(a),n.active&&n._reject(new N.Abort(t.error)),n.active=!1,n.on(`abort`).fire(a)}),t.oncomplete=Q(function(){n.active=!1,n._resolve(),`mutatedParts`in t&&ke.storagemutated.fire(t.mutatedParts)}),this},e.prototype._promise=function(t,n,r){var i=this;if(t===`readwrite`&&this.mode!==`readwrite`)return G(new N.ReadOnly(`Transaction is readonly`));if(!this.active)return G(new N.TransactionInactive);if(this._locked())return new P(function(o,s){i._blockedFuncs.push([function(){i._promise(t,n,r).then(o,s)},M])});if(r)return Ee(function(){var o=new P(function(s,u){i._lock();var l=n(s,u,i);l&&l.then&&l.then(s,u)});return o.finally(function(){return i._unlock()}),o._lib=!0,o});var a=new P(function(o,s){var u=n(o,s,i);u&&u.then&&u.then(o,s)});return a._lib=!0,a},e.prototype._root=function(){return this.parent?this.parent._root():this},e.prototype.waitFor=function(t){var n=this._root(),r=P.resolve(t);if(n._waitingFor)n._waitingFor=n._waitingFor.then(function(){return r});else{n._waitingFor=r,n._waitingQueue=[];var i=n.idbtrans.objectStore(n.storeNames[0]);(function o(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(i.get(-1/0).onsuccess=o)})()}var a=n._waitingFor;return new P(function(o,s){r.then(function(u){return n._waitingQueue.push(Q(o.bind(null,u)))},function(u){return n._waitingQueue.push(Q(s.bind(null,u)))}).finally(function(){n._waitingFor===a&&(n._waitingFor=null)})})},e.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new N.Abort))},e.prototype.table=function(t){var n=this._memoizedTables||(this._memoizedTables={});if(J(n,t))return n[t];var r=this.schema[t];if(!r)throw new N.NotFound(`Table `+t+` not part of transaction`);var i=new this.db.Table(t,r,this);return i.core=this.db.core.table(t),n[t]=i,i},e})();function Ka(e){return vt(Ma.prototype,function(n,r,i,a,o){var s=this;n!==`readonly`&&r.forEach(function(u){var l,f=(l=i[u])===null||l===void 0?void 0:l.yProps;f&&(r=r.concat(f.map(function(v){return v.updatesTable})))}),this.db=e,this.mode=n,this.storeNames=r,this.schema=i,this.chromeTransactionDurability=a,this.idbtrans=null,this.on=pt(this,`complete`,`error`,`abort`),this.parent=o||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new P(function(u,l){s._resolve=u,s._reject=l}),this._completion.then(function(){s.active=!1,s.on.complete.fire()},function(u){var l=s.active;return s.active=!1,s.on.error.fire(u),s.parent?s.parent._reject(u):l&&s.idbtrans&&s.idbtrans.abort(),G(u)})})}function Nn(e,t,n,r,i,a,o,s){return{name:e,keyPath:t,unique:n,multi:r,auto:i,compound:a,src:(n&&!o?`&`:``)+(r?`*`:``)+(i?`++`:``)+Xr(t),type:s}}function Xr(e){return typeof e==`string`?e:e?`[`+[].join.call(e,`+`)+`]`:``}function jn(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:Xi(n,function(r){return[r.name,r]})}}function Ba(e){return e.length===1?e[0]:e}var yt=function(e){try{return e.only([[]]),yt=function(){return[[]]},[[]]}catch{return yt=function(){return Be},Be}};function Ln(e){return e==null?function(){}:typeof e==`string`?Na(e):function(t){return pe(t,e)}}function Na(e){return e.split(`.`).length===1?function(n){return n[e]}:function(n){return pe(n,e)}}function Jr(e){return[].slice.call(e)}var ja=0;function gt(e){return e==null?`:id`:typeof e==`string`?e:`[`.concat(e.join(`+`),`]`)}function La(e,t,n){function r(y,A){var h=Jr(y.objectStoreNames),p=h.length>0?A.objectStore(h[0]):{};return{schema:{name:y.name,tables:h.map(function(b){return A.objectStore(b)}).map(function(b){var g=b.keyPath,x=b.autoIncrement,I=T(g),_=g==null,E={},F={name:b.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:_,compound:I,keyPath:g,autoIncrement:x,unique:!0,extractKey:Ln(g)},indexes:Jr(b.indexNames).map(function(C){return b.index(C)}).map(function(C){var D=C.name,O=C.unique,z=C.multiEntry,K=C.keyPath,j={name:D,compound:T(K),keyPath:K,unique:O,multiEntry:z,extractKey:Ln(K)};return E[gt(K)]=j,j}),getIndexByKeyPath:function(C){return E[gt(C)]}};return E[`:id`]=F.primaryKey,g!=null&&(E[gt(g)]=F.primaryKey),F})},hasGetAll:h.length>0&&`getAll`in p&&!(typeof navigator<`u`&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604),hasIdb3Features:`getAllRecords`in p}}function i(y){if(y.type===3)return null;if(y.type===4)throw new Error(`Cannot convert never type to IDBKeyRange`);var A=y.lower,h=y.upper,p=y.lowerOpen,b=y.upperOpen;return A===void 0?h===void 0?null:t.upperBound(h,!!b):h===void 0?t.lowerBound(A,!!p):t.bound(A,h,!!p,!!b)}function a(y){var A=y.name;function h(g){var x=g.trans,I=g.type,_=g.keys,E=g.values,F=g.range;return new Promise(function(C,D){C=Q(C);var O=x.objectStore(A),z=O.keyPath==null,K=I===`put`||I===`add`;if(!K&&I!==`delete`&&I!==`deleteRange`)throw new Error(`Invalid operation type: `+I);var R=(_||E||{length:1}).length;if(_&&E&&_.length!==E.length)throw new Error(`Given keys array must have same length as given values array.`);if(R===0)return C({numFailures:0,failures:{},results:[],lastResult:void 0});var j,L=[],$=[],B=0,X=function(Z){++B,mt(Z)};if(I===`deleteRange`){if(F.type===4)return C({numFailures:B,failures:$,results:[],lastResult:void 0});F.type===3?L.push(j=O.clear()):L.push(j=O.delete(i(F)))}else{var oe=K?z?[E,_]:[E,null]:[_,null],ne=oe[0],He=oe[1];if(K)for(var te=0;te<R;++te)L.push(j=He&&He[te]!==void 0?O[I](ne[te],He[te]):O[I](ne[te])),j.onerror=X;else for(var te=0;te<R;++te)L.push(j=O[I](ne[te])),j.onerror=X}var se=function(Z){var ze=Z.target.result;L.forEach(function(le,tn){return le.error!=null&&($[tn]=le.error)}),C({numFailures:B,failures:$,results:I===`delete`?_:L.map(function(le){return le.result}),lastResult:ze})};j.onerror=function(Z){X(Z),se(Z)},j.onsuccess=se})}function p(g){var x=g.trans,I=g.values,_=g.query,E=g.reverse,F=g.unique;return new Promise(function(C,D){C=Q(C);var O=_.index,z=_.range,K=x.objectStore(A),R=O.isPrimaryKey?K:K.index(O.name),j=E?F?`prevunique`:`prev`:F?`nextunique`:`next`,L=I||!(`openKeyCursor`in R)?R.openCursor(i(z),j):R.openKeyCursor(i(z),j);L.onerror=ce(D),L.onsuccess=Q(function($){var B=L.result;if(!B){C(null);return}B.___id=++ja,B.done=!1;var X=B.continue.bind(B),oe=B.continuePrimaryKey;oe&&(oe=oe.bind(B));var ne=B.advance.bind(B),He=function(){throw new Error(`Cursor not started`)},te=function(){throw new Error(`Cursor not stopped`)};B.trans=x,B.stop=B.continue=B.continuePrimaryKey=B.advance=He,B.fail=Q(D),B.next=function(){var se=this,Z=1;return this.start(function(){return Z--?se.continue():se.stop()}).then(function(){return se})},B.start=function(se){var Z=new Promise(function(le,tn){le=Q(le),L.onerror=ce(tn),B.fail=tn,B.stop=function(Do){B.stop=B.continue=B.continuePrimaryKey=B.advance=te,le(Do)}}),ze=function(){if(L.result)try{se()}catch(le){B.fail(le)}else B.done=!0,B.start=function(){throw new Error(`Cursor behind last entry`)},B.stop()};return L.onsuccess=Q(function(le){L.onsuccess=ze,ze()}),B.continue=X,B.continuePrimaryKey=oe,B.advance=ne,ze(),Z},C(B)},D)})}function b(g,x){return function(I){return new Promise(function(_,E){var F;_=Q(_);var C=I.trans,D=I.values,O=I.limit,z=I.query,K=(F=I.direction)!==null&&F!==void 0?F:`next`,R=O===1/0?void 0:O,j=z.index,L=z.range,$=C.objectStore(A),B=j.isPrimaryKey?$:$.index(j.name),X=i(L);if(O===0)return _({result:[]});if(x){var oe={query:X,count:R,direction:K},ne=D?B.getAll(oe):B.getAllKeys(oe);ne.onsuccess=function(Z){return _({result:Z.target.result})},ne.onerror=ce(E)}else if(g&&K===`next`){var ne=D?B.getAll(X,R):B.getAllKeys(X,R);ne.onsuccess=function(ze){return _({result:ze.target.result})},ne.onerror=ce(E)}else{var He=0,te=D||!(`openKeyCursor`in B)?B.openCursor(X,K):B.openKeyCursor(X,K),se=[];te.onsuccess=function(){var Z=te.result;if(!Z)return _({result:se});if(se.push(D?Z.value:Z.primaryKey),++He===O)return _({result:se});Z.continue()},te.onerror=ce(E)}})}}return{name:A,schema:y,mutate:h,getMany:function(g){var x=g.trans,I=g.keys;return new Promise(function(_,E){_=Q(_);for(var F=x.objectStore(A),C=I.length,D=new Array(C),O=0,z=0,K,R=function(B){var X=B.target;D[X._pos]=X.result,++z===O&&_(D)},j=ce(E),L=0;L<C;++L)I[L]!=null&&(K=F.get(I[L]),K._pos=L,K.onsuccess=R,K.onerror=j,++O);O===0&&_(D)})},get:function(g){var x=g.trans,I=g.key;return new Promise(function(_,E){_=Q(_);var C=x.objectStore(A).get(I);C.onsuccess=function(D){return _(D.target.result)},C.onerror=ce(E)})},query:b(u,l),openCursor:p,count:function(g){var x=g.query,I=g.trans,_=x.index,E=x.range;return new Promise(function(F,C){var D=I.objectStore(A),O=_.isPrimaryKey?D:D.index(_.name),z=i(E),K=z?O.count(z):O.count();K.onsuccess=Q(function(R){return F(R.target.result)}),K.onerror=ce(C)})}}}var o=r(e,n),s=o.schema,u=o.hasGetAll,l=o.hasIdb3Features,f=s.tables.map(function(y){return a(y)}),v={};return f.forEach(function(y){return v[y.name]=y}),{stack:`dbcore`,transaction:e.transaction.bind(e),table:function(y){if(!v[y])throw new Error(`Table '`.concat(y,`' not found`));return v[y]},MIN_KEY:-1/0,MAX_KEY:yt(t),schema:s}}function Ha(e,t){return t.reduce(function(n,r){var i=r.create;return c(c({},n),i(n))},e)}function za(e,t,n,r){var i=n.IDBKeyRange;n.indexedDB;return{dbcore:Ha(La(t,i,r),e.dbcore)}}function Wt(e,t){var n=t.db;e.core=za(e._middlewares,n,e._deps,t).dbcore,e.tables.forEach(function(i){var a=i.name;e.core.schema.tables.some(function(o){return o.name===a})&&(i.core=e.core.table(a),e[a]instanceof e.Table&&(e[a].core=i.core))})}function Vt(e,t,n,r){n.forEach(function(i){var a=r[i];t.forEach(function(o){var s=yr(o,i);(!s||`value`in s&&s.value===void 0)&&(o===e.Transaction.prototype||o instanceof e.Transaction?Se(o,i,{get:function(){return this.table(i)},set:function(u){mr(this,i,{value:u,writable:!0,configurable:!0,enumerable:!0})}}):o[i]=new e.Table(i,a))})})}function Hn(e,t){t.forEach(function(n){for(var r in n)n[r]instanceof e.Table&&delete n[r]})}function Ua(e,t){return e._cfg.version-t._cfg.version}function Wa(e,t,n,r){var i=e._dbSchema;n.objectStoreNames.contains(`$meta`)&&!i.$meta&&(i.$meta=jn(`$meta`,Zr(``)[0],[]),e._storeNames.push(`$meta`));var a=e._createTransaction(`readwrite`,e._storeNames,i);a.create(n),a._completion.catch(r);var o=a._reject.bind(a),s=M.transless||M;Ee(function(){if(M.trans=a,M.transless=s,t===0)k(i).forEach(function(u){Un(n,u,i[u].primKey,i[u].indexes)}),Wt(e,n),P.follow(function(){return e.on.populate.fire(a)}).catch(o);else return Wt(e,n),$a(e,a,t).then(function(u){return Ya(e,u,a,n)}).catch(o)})}function Va(e,t){qr(e._dbSchema,t),t.db.version%10===0&&!t.objectStoreNames.contains(`$meta`)&&t.db.createObjectStore(`$meta`).add(Math.ceil(t.db.version/10-1),`version`);var n=Yt(e,e.idbdb,t);Qt(e,e._dbSchema,t);for(var r=zn(n,e._dbSchema),i=function(l){if(l.change.length||l.recreate)return console.warn(`Unable to patch indexes of table `.concat(l.name,` because it has changes on the type of index or primary key.`)),{value:void 0};var f=t.objectStore(l.name);l.add.forEach(function(v){he&&console.debug(`Dexie upgrade patch: Creating missing index `.concat(l.name,`.`).concat(v.src)),$t(f,v)})},a=0,o=r.change;a<o.length;a++){var s=o[a],u=i(s);if(typeof u==`object`)return u.value}}function $a(e,t,n){return t.storeNames.includes(`$meta`)?t.table(`$meta`).get(`version`).then(function(r){return r??n}):P.resolve(n)}function Ya(e,t,n,r){var i=[],a=e._versions,o=e._dbSchema=Yt(e,e.idbdb,r),s=a.filter(function(l){return l._cfg.version>=t});if(s.length===0)return P.resolve();s.forEach(function(l){i.push(function(){var f=o,v=l._cfg.dbschema;Qt(e,f,r),Qt(e,v,r),o=e._dbSchema=v;var y=zn(f,v);y.add.forEach(function(x){Un(r,x[0],x[1].primKey,x[1].indexes)}),y.change.forEach(function(x){if(x.recreate)throw new N.Upgrade(`Not yet support for changing primary key`);var I=r.objectStore(x.name);x.add.forEach(function(_){return $t(I,_)}),x.change.forEach(function(_){I.deleteIndex(_.name),$t(I,_)}),x.del.forEach(function(_){return I.deleteIndex(_)})});var A=l._cfg.contentUpgrade;if(A&&l._cfg.version>t){Wt(e,r),n._memoizedTables={};var h=_r(v);y.del.forEach(function(x){h[x]=f[x]}),Hn(e,[e.Transaction.prototype]),Vt(e,[e.Transaction.prototype],k(h),h),n.schema=h;var p=gn(A);p&&Je();var b,g=P.follow(function(){if(b=A(n),b&&p){var x=Ae.bind(null,null);b.then(x,x)}});return b&&typeof b.then==`function`?P.resolve(b):g.then(function(){return b})}}),i.push(function(f){var v=l._cfg.dbschema;Qa(v,f),Hn(e,[e.Transaction.prototype]),Vt(e,[e.Transaction.prototype],e._storeNames,e._dbSchema),n.schema=e._dbSchema}),i.push(function(f){e.idbdb.objectStoreNames.contains(`$meta`)&&(Math.ceil(e.idbdb.version/10)===l._cfg.version?(e.idbdb.deleteObjectStore(`$meta`),delete e._dbSchema.$meta,e._storeNames=e._storeNames.filter(function(v){return v!==`$meta`})):f.objectStore(`$meta`).put(l._cfg.version,`version`))})});function u(){return i.length?P.resolve(i.shift()(n.idbtrans)).then(u):P.resolve()}return u().then(function(){qr(o,r)})}function zn(e,t){var n={del:[],add:[],change:[]},r;for(r in e)t[r]||n.del.push(r);for(r in t){var i=e[r],a=t[r];if(!i)n.add.push([r,a]);else{var o={name:r,def:a,recreate:!1,del:[],add:[],change:[]};if(``+(i.primKey.keyPath||``)!=``+(a.primKey.keyPath||``)||i.primKey.auto!==a.primKey.auto)o.recreate=!0,n.change.push(o);else{var s=i.idxByName,u=a.idxByName,l=void 0;for(l in s)u[l]||o.del.push(l);for(l in u){var f=s[l],v=u[l];f?f.src!==v.src&&o.change.push(v):o.add.push(v)}(o.del.length>0||o.add.length>0||o.change.length>0)&&n.change.push(o)}}}return n}function Un(e,t,n,r){var i=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});return r.forEach(function(a){return $t(i,a)}),i}function qr(e,t){k(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(he&&console.debug(`Dexie: Creating missing table`,n),Un(t,n,e[n].primKey,e[n].indexes))})}function Qa(e,t){[].slice.call(t.db.objectStoreNames).forEach(function(n){return e[n]==null&&t.db.deleteObjectStore(n)})}function $t(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function Yt(e,t,n){var r={};return xt(t.objectStoreNames,0).forEach(function(a){for(var o=n.objectStore(a),s=o.keyPath,u=Nn(Xr(s),s||``,!0,!1,!!o.autoIncrement,s&&typeof s!=`string`,!0),l=[],f=0;f<o.indexNames.length;++f){var v=o.index(o.indexNames[f]);s=v.keyPath;var y=Nn(v.name,s,!!v.unique,!!v.multiEntry,!1,s&&typeof s!=`string`,!1);l.push(y)}r[a]=jn(a,u,l)}),r}function Ga(e,t,n){e.verno=t.version/10;var r=e._dbSchema=Yt(e,t,n);e._storeNames=xt(t.objectStoreNames,0),Vt(e,[e._allTables],k(r),r)}function Xa(e,t){var r=zn(Yt(e,e.idbdb,t),e._dbSchema);return!(r.add.length||r.change.some(function(i){return i.add.length||i.change.length}))}function Qt(e,t,n){for(var r=n.db.objectStoreNames,i=0;i<r.length;++i){var a=r[i],o=n.objectStore(a);e._hasGetAll=`getAll`in o;for(var s=0;s<o.indexNames.length;++s){var u=o.indexNames[s],l=o.index(u).keyPath,f=typeof l==`string`?l:`[`+xt(l).join(`+`)+`]`;if(t[a]){var v=t[a].idxByName[f];v&&(v.name=u,delete t[a].idxByName[f],t[a].idxByName[u]=v)}}}typeof navigator<`u`&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&S.WorkerGlobalScope&&S instanceof S.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function Zr(e){return e.split(`,`).map(function(t,n){var r,i=t.split(`:`),a=(r=i[1])===null||r===void 0?void 0:r.trim();t=i[0].trim();var o=t.replace(/([&*]|\+\+)/g,``),s=/^\[/.test(o)?o.match(/^\[(.*)\]$/)[1].split(`+`):o;return Nn(o,s||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),T(s),n===0,a)})}var Ja=(function(){function e(){}return e.prototype._createTableSchema=function(t,n,r){return jn(t,n,r)},e.prototype._parseIndexSyntax=function(t){return Zr(t)},e.prototype._parseStoresSpec=function(t,n){var r=this;k(t).forEach(function(i){if(t[i]!==null){var a=r._parseIndexSyntax(t[i]),o=a.shift();if(!o)throw new N.Schema(`Invalid schema for table `+i+`: `+t[i]);if(o.unique=!0,o.multi)throw new N.Schema(`Primary key cannot be multiEntry*`);a.forEach(function(u){if(u.auto)throw new N.Schema(`Only primary key can be marked as autoIncrement (++)`);if(!u.keyPath)throw new N.Schema(`Index must have a name and cannot be an empty string`)});n[i]=r._createTableSchema(i,o,a)}})},e.prototype.stores=function(t){var n=this.db;this._cfg.storesSource=this._cfg.storesSource?H(this._cfg.storesSource,t):t;var r=n._versions,i={},a={};return r.forEach(function(o){H(i,o._cfg.storesSource),a=o._cfg.dbschema={},o._parseStoresSpec(i,a)}),n._dbSchema=a,Hn(n,[n._allTables,n,n.Transaction.prototype]),Vt(n,[n._allTables,n,n.Transaction.prototype,this._cfg.tables],k(a),a),n._storeNames=k(a),this},e.prototype.upgrade=function(t){return this._cfg.contentUpgrade=wn(this._cfg.contentUpgrade||V,t),this},e})();function qa(e){return vt(Ja.prototype,function(n){this.db=e,this._cfg={version:n,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}var bt=Za();function Za(){if(typeof FinalizationRegistry<`u`&&typeof WeakRef<`u`){var e=/* @__PURE__ */ new Set,t=new FinalizationRegistry(function(o){e.delete(o)}),n=function(){return Array.from(e).map(function(o){return o.deref()}).filter(function(o){return o!==void 0})},r=function(o){var s=new WeakRef(o._novip);if(e.add(s),t.register(o._novip,s,s),e.size>o._options.maxConnections){var u=e.values().next().value;e.delete(u),t.unregister(u)}},i=function(o){if(o)for(var s=e.values(),u=s.next();!u.done;){var l=u.value;if(l.deref()===o._novip){e.delete(l),t.unregister(l);return}u=s.next()}};return{toArray:n,add:r,remove:i}}else{var a=[],n=function(){return a},r=function(l){a.push(l._novip)},i=function(l){if(l){var f=a.indexOf(l._novip);f!==-1&&a.splice(f,1)}};return{toArray:n,add:r,remove:i}}}function Wn(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new ge(Bt,{addons:[],indexedDB:e,IDBKeyRange:t}),n.version(1).stores({dbnames:`name`})),n.table(`dbnames`)}function Vn(e){return e&&typeof e.databases==`function`}function eo(e){var t=e.indexedDB,n=e.IDBKeyRange;return Vn(t)?Promise.resolve(t.databases()).then(function(r){return r.map(function(i){return i.name}).filter(function(i){return i!==Bt})}):Wn(t,n).toCollection().primaryKeys()}function to(e,t){var n=e.indexedDB,r=e.IDBKeyRange;!Vn(n)&&t!==Bt&&Wn(n,r).put({name:t}).catch(V)}function no(e,t){var n=e.indexedDB,r=e.IDBKeyRange;!Vn(n)&&t!==Bt&&Wn(n,r).delete(t).catch(V)}function $n(e){return Ee(function(){return M.letThrough=!0,e()})}function ro(){if(!(!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent))||!indexedDB.databases)return Promise.resolve();var t;return new Promise(function(n){var r=function(){return indexedDB.databases().finally(n)};t=setInterval(r,100),r()}).finally(function(){return clearInterval(t)})}var Yn;function Qn(e){return!(`from`in e)}var ee=function(e,t){if(this)H(this,arguments.length?{d:1,from:e,to:arguments.length>1?t:e}:{d:0});else{var n=new ee;return e&&`d`in e&&H(n,e),n}};We(ee.prototype,(Yn={add:function(e){return wt(this,e),this},addKey:function(e){return _t(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(n){return _t(t,n,n)}),this},hasKey:function(e){var t=Gt(this).next(e).value;return t&&U(t.from,e)<=0&&U(t.to,e)>=0}},Yn[yn]=function(){return Gt(this)},Yn));function _t(e,t,n){var r=U(t,n);if(!isNaN(r)){if(r>0)throw RangeError();if(Qn(e))return H(e,{from:t,to:n,d:1});var i=e.l,a=e.r;if(U(n,e.from)<0)return i?_t(i,t,n):e.l={from:t,to:n,d:1,l:null,r:null},ti(e);if(U(t,e.to)>0)return a?_t(a,t,n):e.r={from:t,to:n,d:1,l:null,r:null},ti(e);U(t,e.from)<0&&(e.from=t,e.l=null,e.d=a?a.d+1:1),U(n,e.to)>0&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1);var o=!e.r;i&&!e.l&&wt(e,i),a&&o&&wt(e,a)}}function wt(e,t){function n(r,i){var a=i.from,o=i.to,s=i.l,u=i.r;_t(r,a,o),s&&n(r,s),u&&n(r,u)}Qn(t)||n(e,t)}function ei(e,t){var n=Gt(t),r=n.next();if(r.done)return!1;for(var i=r.value,a=Gt(e),o=a.next(i.from),s=o.value;!r.done&&!o.done;){if(U(s.from,i.to)<=0&&U(s.to,i.from)>=0)return!0;U(i.from,s.from)<0?i=(r=n.next(s.from)).value:s=(o=a.next(i.from)).value}return!1}function Gt(e){var t=Qn(e)?null:{s:0,n:e};return{next:function(n){for(var r=arguments.length>0;t;)switch(t.s){case 0:if(t.s=1,r)for(;t.n.l&&U(n,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!r||U(n,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function ti(e){var t,n,r=(((t=e.r)===null||t===void 0?void 0:t.d)||0)-(((n=e.l)===null||n===void 0?void 0:n.d)||0),i=r>1?`r`:r<-1?`l`:``;if(i){var a=i===`r`?`l`:`r`,o=c({},e),s=e[i];e.from=s.from,e.to=s.to,e[i]=s[i],o[i]=s[a],e[a]=o,o.d=ni(o)}e.d=ni(e)}function ni(e){var t=e.r,n=e.l;return(t?n?Math.max(t.d,n.d):t.d:n?n.d:0)+1}function Xt(e,t){return k(t).forEach(function(n){e[n]?wt(e[n],t[n]):e[n]=Er(t[n])}),e}function Gn(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&ei(t[n],e[n])})}var je={},Xn={},Jn=!1;function Jt(e,t){Xt(Xn,e),Jn||(Jn=!0,setTimeout(function(){Jn=!1;var n=Xn;Xn={},qn(n,!1)},0))}function qn(e,t){t===void 0&&(t=!1);var n=/* @__PURE__ */ new Set;if(e.all)for(var r=0,i=Object.values(je);r<i.length;r++){var a=i[r];ri(a,e,n,t)}else for(var o in e){var s=/^idb\:\/\/(.*)\/(.*)\//.exec(o);if(s){var u=s[1],l=s[2],a=je[`idb://`.concat(u,`/`).concat(l)];a&&ri(a,e,n,t)}}n.forEach(function(f){return f()})}function ri(e,t,n,r){for(var i=[],a=0,o=Object.entries(e.queries.query);a<o.length;a++){for(var s=o[a],u=s[0],l=s[1],f=[],v=0,y=l;v<y.length;v++){var A=y[v];Gn(t,A.obsSet)?A.subscribers.forEach(function(g){return n.add(g)}):r&&f.push(A)}r&&i.push([u,f])}if(r)for(var h=0,p=i;h<p.length;h++){var b=p[h],u=b[0],f=b[1];e.queries.query[u]=f}}function io(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?G(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var r=t.openCanceller,i=Math.round(e.verno*10),a=!1;function o(){if(t.openCanceller!==r)throw new N.DatabaseClosed(`db.open() was cancelled`)}var s=t.dbReadyResolve,u=null,l=!1,f=function(){return new P(function(y,A){if(o(),!n)throw new N.MissingAPI;var h=e.name,p=t.autoSchema||!i?n.open(h):n.open(h,i);if(!p)throw new N.MissingAPI;p.onerror=ce(A),p.onblocked=Q(e._fireOnBlocked),p.onupgradeneeded=Q(function(b){if(u=p.transaction,t.autoSchema&&!e._options.allowEmptyDB){p.onerror=mt,u.abort(),p.result.close();var g=n.deleteDatabase(h);g.onsuccess=g.onerror=Q(function(){A(new N.NoSuchDatabase(`Database `.concat(h,` doesnt exist`)))})}else{u.onerror=ce(A);var x=b.oldVersion>Math.pow(2,62)?0:b.oldVersion;l=x<1,e.idbdb=p.result,a&&Va(e,u),Wa(e,x/10,u,A)}},A),p.onsuccess=Q(function(){u=null;var b=e.idbdb=p.result,g=xt(b.objectStoreNames);if(g.length>0)try{var x=b.transaction(Ba(g),`readonly`);if(t.autoSchema)Ga(e,b,x);else if(Qt(e,e._dbSchema,x),!Xa(e,x)&&!a)return console.warn(`Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this.`),b.close(),i=b.version+1,a=!0,y(f());Wt(e,x)}catch{}bt.add(e),b.onversionchange=Q(function(I){t.vcFired=!0,e.on(`versionchange`).fire(I)}),b.onclose=Q(function(){e.close({disableAutoOpen:!1})}),l&&to(e._deps,h),y()},A)}).catch(function(y){switch(y?.name){case`UnknownError`:if(t.PR1398_maxLoop>0)return t.PR1398_maxLoop--,console.warn(`Dexie: Workaround for Chrome UnknownError on open()`),f();break;case`VersionError`:if(i>0)return i=0,f()}return P.reject(y)})},v=typeof navigator<`u`&&!!n&&n===S.indexedDB;return P.race([r,(v?ro():P.resolve()).then(f)]).then(function(){return o(),t.onReadyBeingFired=[],P.resolve($n(function(){return e.on.ready.fire(e.vip)})).then(function y(){if(t.onReadyBeingFired.length>0){var A=t.onReadyBeingFired.reduce(wn,V);return t.onReadyBeingFired=[],P.resolve($n(function(){return A(e.vip)})).then(y)}})}).finally(function(){t.openCanceller===r&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(y){t.dbOpenError=y;try{u&&u.abort()}catch{}return r===t.openCanceller&&e._close(),G(y)}).finally(function(){t.openComplete=!0,s()}).then(function(){if(l){var y={};e.tables.forEach(function(A){A.schema.indexes.forEach(function(h){h.name&&(y[`idb://`.concat(e.name,`/`).concat(A.name,`/`).concat(h.name)]=new ee(-1/0,[[[]]]))}),y[`idb://`.concat(e.name,`/`).concat(A.name,`/`)]=y[`idb://`.concat(e.name,`/`).concat(A.name,`/:dels`)]=new ee(-1/0,[[[]]])}),ke(Ut).fire(y),qn(y,!0)}return e})}function Zn(e){var t=function(o){return e.next(o)},n=function(o){return e.throw(o)},r=a(t),i=a(n);function a(o){return function(s){var u=o(s),l=u.value;return u.done?l:!l||typeof l.then!=`function`?T(l)?Promise.all(l).then(r,i):r(l):l.then(r,i)}}return a(t)()}function ao(e,t,n){var r=arguments.length;if(r<2)throw new N.InvalidArgument(`Too few arguments`);for(var i=new Array(r-1);--r;)i[r-1]=arguments[r];n=i.pop();return[e,wr(i),n]}function ii(e,t,n,r,i){return P.resolve().then(function(){var a=M.transless||M,o=e._createTransaction(t,n,e._dbSchema,r);o.explicit=!0;var s={trans:o,transless:a};if(r)o.idbtrans=r.idbtrans;else try{o.create(),o.idbtrans._explicit=!0,e._state.PR1398_maxLoop=3}catch(v){return v.name===_n.InvalidState&&e.isOpen()&&--e._state.PR1398_maxLoop>0?(console.warn(`Dexie: Need to reopen db`),e.close({disableAutoOpen:!1}),e.open().then(function(){return ii(e,t,n,null,i)})):G(v)}var u=gn(i);u&&Je();var l,f=P.follow(function(){if(l=i.call(o,o),l)if(u){var v=Ae.bind(null,null);l.then(v,v)}else typeof l.next==`function`&&typeof l.throw==`function`&&(l=Zn(l))},s);return(l&&typeof l.then==`function`?P.resolve(l).then(function(v){return o.active?v:G(new N.PrematureCommit(`Transaction committed too early. See http://bit.ly/2kdckMn`))}):f.then(function(){return l})).then(function(v){return r&&o._resolve(),o._completion.then(function(){return v})}).catch(function(v){return o._reject(v),G(v)})})}function qt(e,t,n){for(var r=T(e)?e.slice():[e],i=0;i<n;++i)r.push(t);return r}function oo(e){return c(c({},e),{table:function(t){var n=e.table(t),r=n.schema,i=Object.create(null),a=[];function o(p,b,g){var x=gt(p),I=i[x]=i[x]||[],_=p==null?0:typeof p==`string`?1:p.length,E=b>0,F=c(c({},g),{name:E?``.concat(x,`(virtual-from:`).concat(g.name,`)`):g.name,lowLevelIndex:g,isVirtual:E,keyTail:b,keyLength:_,extractKey:Ln(p),unique:!E&&g.unique});if(I.push(F),F.isPrimaryKey||a.push(F),_>1)o(_===2?p[0]:p.slice(0,_-1),b+1,g);return I.sort(function(D,O){return D.keyTail-O.keyTail}),F}var s=o(r.primaryKey.keyPath,0,r.primaryKey);i[`:id`]=[s];for(var u=0,l=r.indexes;u<l.length;u++){var f=l[u];o(f.keyPath,0,f)}function v(p){var b=i[gt(p)];return b&&b[0]}function y(p,b){return{type:p.type===1?2:p.type,lower:qt(p.lower,p.lowerOpen?e.MAX_KEY:e.MIN_KEY,b),lowerOpen:!0,upper:qt(p.upper,p.upperOpen?e.MIN_KEY:e.MAX_KEY,b),upperOpen:!0}}function A(p){var b=p.query.index;return b.isVirtual?c(c({},p),{query:{index:b.lowLevelIndex,range:y(p.query.range,b.keyTail)}}):p}return c(c({},n),{schema:c(c({},r),{primaryKey:s,indexes:a,getIndexByKeyPath:v}),count:function(p){return n.count(A(p))},query:function(p){return n.query(A(p))},openCursor:function(p){var b=p.query.index,g=b.keyTail,x=b.isVirtual,I=b.keyLength;if(!x)return n.openCursor(p);function _(E){function F(D){D!=null?E.continue(qt(D,p.reverse?e.MAX_KEY:e.MIN_KEY,g)):p.unique?E.continue(E.key.slice(0,I).concat(p.reverse?e.MIN_KEY:e.MAX_KEY,g)):E.continue()}return Object.create(E,{continue:{value:F},continuePrimaryKey:{value:function(D,O){E.continuePrimaryKey(qt(D,e.MAX_KEY,g),O)}},primaryKey:{get:function(){return E.primaryKey}},key:{get:function(){var D=E.key;return I===1?D[0]:D.slice(0,I)}},value:{get:function(){return E.value}}})}return n.openCursor(A(p)).then(function(E){return E&&_(E)})}})}})}var so={stack:`dbcore`,name:`VirtualIndexMiddleware`,level:1,create:oo};function er(e,t,n,r){return n=n||{},r=r||``,k(e).forEach(function(i){if(!J(t,i))n[r+i]=void 0;else{var a=e[i],o=t[i];if(typeof a==`object`&&typeof o==`object`&&a&&o){var s=mn(a);s!==mn(o)?n[r+i]=t[i]:s===`Object`?er(a,o,n,r+i+`.`):a!==o&&(n[r+i]=t[i])}else a!==o&&(n[r+i]=t[i])}}),k(t).forEach(function(i){J(e,i)||(n[r+i]=t[i])}),n}function tr(e,t){return t.type===`delete`?t.keys:t.keys||t.values.map(e.extractKey)}var uo={stack:`dbcore`,name:`HooksMiddleware`,level:2,create:function(e){return c(c({},e),{table:function(t){var n=e.table(t),r=n.schema.primaryKey;return c(c({},n),{mutate:function(a){var o=M.trans,s=o.table(t).hook,u=s.deleting,l=s.creating,f=s.updating;switch(a.type){case`add`:if(l.fire===V)break;return o._promise(`readwrite`,function(){return v(a)},!0);case`put`:if(l.fire===V&&f.fire===V)break;return o._promise(`readwrite`,function(){return v(a)},!0);case`delete`:if(u.fire===V)break;return o._promise(`readwrite`,function(){return v(a)},!0);case`deleteRange`:if(u.fire===V)break;return o._promise(`readwrite`,function(){return y(a)},!0)}return n.mutate(a);function v(h){var p=M.trans,b=h.keys||tr(r,h);if(!b)throw new Error(`Keys missing`);return h=h.type===`add`||h.type===`put`?c(c({},h),{keys:b}):c({},h),h.type!==`delete`&&(h.values=d([],h.values,!0)),h.keys&&(h.keys=d([],h.keys,!0)),co(n,h,b).then(function(g){var x=b.map(function(I,_){var E=g[_],F={onerror:null,onsuccess:null};if(h.type===`delete`)u.fire.call(F,I,E,p);else if(h.type===`add`||E===void 0){var C=l.fire.call(F,I,h.values[_],p);I==null&&C!=null&&(I=C,h.keys[_]=I,r.outbound||re(h.values[_],r.keyPath,I))}else{var D=er(E,h.values[_]),O=f.fire.call(F,D,I,E,p);if(O){var z=h.values[_];Object.keys(O).forEach(function(K){J(z,K)?z[K]=O[K]:re(z,K,O[K])})}}return F});return n.mutate(h).then(function(I){for(var _=I.failures,E=I.results,F=I.numFailures,C=I.lastResult,D=0;D<b.length;++D){var O=E?E[D]:b[D],z=x[D];O==null?z.onerror&&z.onerror(_[D]):z.onsuccess&&z.onsuccess(h.type===`put`&&g[D]?h.values[D]:O)}return{failures:_,results:E,numFailures:F,lastResult:C}}).catch(function(I){return x.forEach(function(_){return _.onerror&&_.onerror(I)}),Promise.reject(I)})})}function y(h){return A(h.trans,h.range,1e4)}function A(h,p,b){return n.query({trans:h,values:!1,query:{index:r,range:p},limit:b}).then(function(g){var x=g.result;return v({type:`delete`,keys:x,trans:h}).then(function(I){return I.numFailures>0?Promise.reject(I.failures[0]):x.length<b?{failures:[],numFailures:0,lastResult:void 0}:A(h,c(c({},p),{lower:x[x.length-1],lowerOpen:!0}),b)})})}}})}})}};function co(e,t,n){return t.type===`add`?Promise.resolve([]):e.getMany({trans:t.trans,keys:n,cache:`immutable`})}function ai(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var r=[],i=0,a=0;i<t.keys.length&&a<e.length;++i)U(t.keys[i],e[a])===0&&(r.push(n?Fe(t.values[i]):t.values[i]),++a);return r.length===e.length?r:null}catch{return null}}var lo={stack:`dbcore`,level:-1,create:function(e){return{table:function(t){var n=e.table(t);return c(c({},n),{getMany:function(r){if(!r.cache)return n.getMany(r);var i=ai(r.keys,r.trans._cache,r.cache===`clone`);return i?P.resolve(i):n.getMany(r).then(function(a){return r.trans._cache={keys:r.keys,values:r.cache===`clone`?Fe(a):a},a})},mutate:function(r){return r.type!==`add`&&(r.trans._cache=null),n.mutate(r)}})}}}};function oi(e,t){return e.trans.mode===`readonly`&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!==`disabled`&&!t.schema.primaryKey.outbound}function si(e,t){switch(e){case`query`:return t.values&&!t.unique;case`get`:return!1;case`getMany`:return!1;case`count`:return!1;case`openCursor`:return!1}}var fo={stack:`dbcore`,level:0,name:`Observability`,create:function(e){var t=e.schema.name,n=new ee(e.MIN_KEY,e.MAX_KEY);return c(c({},e),{transaction:function(r,i,a){if(M.subscr&&i!==`readonly`)throw new N.ReadOnly(`Readwrite transaction in liveQuery context. Querier source: `.concat(M.querier));return e.transaction(r,i,a)},table:function(r){var i=e.table(r),a=i.schema,o=a.primaryKey,s=a.indexes,u=o.extractKey,l=o.outbound,f=o.autoIncrement&&s.filter(function(h){return h.compound&&h.keyPath.includes(o.keyPath)}),v=c(c({},i),{mutate:function(h){var p,b,g=h.trans,x=h.mutatedParts||(h.mutatedParts={}),I=function(j){var L=`idb://`.concat(t,`/`).concat(r,`/`).concat(j);return x[L]||(x[L]=new ee)},_=I(``),E=I(`:dels`),F=h.type,C=h.type===`deleteRange`?[h.range]:h.type===`delete`?[h.keys]:h.values.length<50?[tr(o,h).filter(function(j){return j!=null}),h.values]:[],D=C[0],O=C[1],z=h.trans._cache;if(T(D)){_.addKeys(D);var K=F===`delete`||D.length===O.length?ai(D,z):null;K||E.addKeys(D),(K||O)&&ho(I,a,K,O)}else if(D){var R={from:(p=D.lower)!==null&&p!==void 0?p:e.MIN_KEY,to:(b=D.upper)!==null&&b!==void 0?b:e.MAX_KEY};E.add(R),_.add(R)}else _.add(n),E.add(n),a.indexes.forEach(function(j){return I(j.name).add(n)});return i.mutate(h).then(function(j){return D&&(h.type===`add`||h.type===`put`)&&(_.addKeys(j.results),f&&f.forEach(function(L){for(var $=h.values.map(function(ne){return L.extractKey(ne)}),B=L.keyPath.findIndex(function(ne){return ne===o.keyPath}),X=0,oe=j.results.length;X<oe;++X)$[X][B]=j.results[X];I(L.name).addKeys($)})),g.mutatedParts=Xt(g.mutatedParts||{},x),j})}}),y=function(h){var p,b,g=h.query,x=g.index,I=g.range;return[x,new ee((p=I.lower)!==null&&p!==void 0?p:e.MIN_KEY,(b=I.upper)!==null&&b!==void 0?b:e.MAX_KEY)]},A={get:function(h){return[o,new ee(h.key)]},getMany:function(h){return[o,new ee().addKeys(h.keys)]},count:y,query:y,openCursor:y};return k(A).forEach(function(h){v[h]=function(p){var b=M.subscr,g=!!b,I=oi(M,i)&&si(h,p)?p.obsSet={}:b;if(g){var _=function(K){var R=`idb://`.concat(t,`/`).concat(r,`/`).concat(K);return I[R]||(I[R]=new ee)},E=_(``),F=_(`:dels`),C=A[h](p),D=C[0],O=C[1];if(h===`query`&&D.isPrimaryKey&&!p.values?F.add(O):_(D.name||``).add(O),!D.isPrimaryKey)if(h===`count`)F.add(n);else{var z=h===`query`&&l&&p.values&&i.query(c(c({},p),{values:!1}));return i[h].apply(this,arguments).then(function(K){if(h===`query`){if(l&&p.values)return z.then(function($){var B=$.result;return E.addKeys(B),K});var R=p.values?K.result.map(u):K.result;p.values?E.addKeys(R):F.addKeys(R)}else if(h===`openCursor`){var j=K,L=p.values;return j&&Object.create(j,{key:{get:function(){return F.addKey(j.primaryKey),j.key}},primaryKey:{get:function(){var $=j.primaryKey;return F.addKey($),$}},value:{get:function(){return L&&E.addKey(j.primaryKey),j.value}}})}return K})}}return i[h].apply(this,arguments)}}),v}})}};function ho(e,t,n,r){function i(a){var o=e(a.name||``);function s(l){return l!=null?a.extractKey(l):null}var u=function(l){return a.multiEntry&&T(l)?l.forEach(function(f){return o.addKey(f)}):o.addKey(l)};(n||r).forEach(function(l,f){var v=n&&s(n[f]),y=r&&s(r[f]);U(v,y)!==0&&(v!=null&&u(v),y!=null&&u(y))})}t.indexes.forEach(i)}function ui(e,t,n){if(n.numFailures===0)return t;if(t.type===`deleteRange`)return null;var r=t.keys?t.keys.length:`values`in t&&t.values?t.values.length:1;if(n.numFailures===r)return null;var i=c({},t);return T(i.keys)&&(i.keys=i.keys.filter(function(a,o){return!(o in n.failures)})),`values`in i&&T(i.values)&&(i.values=i.values.filter(function(a,o){return!(o in n.failures)})),i}function po(e,t){return t.lower===void 0?!0:t.lowerOpen?U(e,t.lower)>0:U(e,t.lower)>=0}function vo(e,t){return t.upper===void 0?!0:t.upperOpen?U(e,t.upper)<0:U(e,t.upper)<=0}function nr(e,t){return po(e,t)&&vo(e,t)}function ci(e,t,n,r,i,a){if(!n||n.length===0)return e;var o=t.query.index,s=o.multiEntry,u=t.query.range,f=r.schema.primaryKey.extractKey,v=o.extractKey,y=(o.lowLevelIndex||o).extractKey,A=n.reduce(function(p,b){var g=p,x=[];if(b.type===`add`||b.type===`put`)for(var I=new ee,_=b.values.length-1;_>=0;--_){var E=b.values[_],F=f(E);if(!I.hasKey(F)){var C=v(E);(s&&T(C)?C.some(function(R){return nr(R,u)}):nr(C,u))&&(I.addKey(F),x.push(E))}}switch(b.type){case`add`:var D=new ee().addKeys(t.values?p.map(function(R){return f(R)}):p);g=p.concat(t.values?x.filter(function(R){var j=f(R);return D.hasKey(j)?!1:(D.addKey(j),!0)}):x.map(function(R){return f(R)}).filter(function(R){return D.hasKey(R)?!1:(D.addKey(R),!0)}));break;case`put`:var O=new ee().addKeys(b.values.map(function(R){return f(R)}));g=p.filter(function(R){return!O.hasKey(t.values?f(R):R)}).concat(t.values?x:x.map(function(R){return f(R)}));break;case`delete`:var z=new ee().addKeys(b.keys);g=p.filter(function(R){return!z.hasKey(t.values?f(R):R)});break;case`deleteRange`:var K=b.range;g=p.filter(function(R){return!nr(f(R),K)})}return g},e);if(A===e)return e;var h=function(p,b){return U(y(p),y(b))||U(f(p),f(b))};return A.sort(t.direction===`prev`||t.direction===`prevunique`?function(p,b){return h(b,p)}:h),t.limit&&t.limit<1/0&&(A.length>t.limit?A.length=t.limit:e.length===t.limit&&A.length<t.limit&&(i.dirty=!0)),a?Object.freeze(A):A}function li(e,t){return U(e.lower,t.lower)===0&&U(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function mo(e,t,n,r){if(e===void 0)return t!==void 0?-1:0;if(t===void 0)return 1;var i=U(e,t);if(i===0){if(n&&r)return 0;if(n)return 1;if(r)return-1}return i}function yo(e,t,n,r){if(e===void 0)return t!==void 0?1:0;if(t===void 0)return-1;var i=U(e,t);if(i===0){if(n&&r)return 0;if(n)return-1;if(r)return 1}return i}function go(e,t){return mo(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&yo(e.upper,t.upper,e.upperOpen,t.upperOpen)>=0}function bo(e,t,n,r){var i,a=je[`idb://`.concat(e,`/`).concat(t)];if(!a)return[];var o=a.queries[n];if(!o)return[null,!1,a,null];var u=o[(r.query?r.query.index.name:null)||``];if(!u)return[null,!1,a,null];switch(n){case`query`:var l=(i=r.direction)!==null&&i!==void 0?i:`next`,f=u.find(function(A){var h;return A.req.limit===r.limit&&A.req.values===r.values&&((h=A.req.direction)!==null&&h!==void 0?h:`next`)===l&&li(A.req.query.range,r.query.range)});if(f)return[f,!0,a,u];return[u.find(function(A){var h;return(`limit`in A.req?A.req.limit:1/0)>=r.limit&&((h=A.req.direction)!==null&&h!==void 0?h:`next`)===l&&(r.values?A.req.values:!0)&&go(A.req.query.range,r.query.range)}),!1,a,u];case`count`:var y=u.find(function(A){return li(A.req.query.range,r.query.range)});return[y,!!y,a,u]}}function _o(e,t,n,r){e.subscribers.add(n),r.addEventListener(`abort`,function(){e.subscribers.delete(n),e.subscribers.size===0&&wo(e,t)})}function wo(e,t){setTimeout(function(){e.subscribers.size===0&&Pe(t,e)},3e3)}var So={stack:`dbcore`,level:0,name:`Cache`,create:function(e){var t=e.schema.name;return c(c({},e),{transaction:function(r,i,a){var o=e.transaction(r,i,a);if(i===`readwrite`){var s=new AbortController,u=s.signal,l=function(f){return function(){if(s.abort(),i===`readwrite`){for(var v=/* @__PURE__ */ new Set,y=0,A=r;y<A.length;y++){var h=A[y],p=je[`idb://`.concat(t,`/`).concat(h)];if(p){var b=e.table(h),g=p.optimisticOps.filter(function(L){return L.trans===o});if(o._explicit&&f&&o.mutatedParts)for(var x=0,I=Object.values(p.queries.query);x<I.length;x++)for(var _=I[x],E=0,F=_.slice();E<F.length;E++){var C=F[E];Gn(C.obsSet,o.mutatedParts)&&(Pe(_,C),C.subscribers.forEach(function(L){return v.add(L)}))}else if(g.length>0){p.optimisticOps=p.optimisticOps.filter(function(L){return L.trans!==o});for(var D=0,O=Object.values(p.queries.query);D<O.length;D++)for(var _=O[D],z=0,K=_.slice();z<K.length;z++){var C=K[z];if(C.res!=null&&o.mutatedParts)if(f&&!C.dirty){var R=Object.isFrozen(C.res),j=ci(C.res,C.req,g,b,C,R);C.dirty?(Pe(_,C),C.subscribers.forEach(function(B){return v.add(B)})):j!==C.res&&(C.res=j,C.promise=P.resolve({result:j}))}else C.dirty&&Pe(_,C),C.subscribers.forEach(function(B){return v.add(B)})}}}}v.forEach(function(L){return L()})}}};o.addEventListener(`abort`,l(!1),{signal:u}),o.addEventListener(`error`,l(!1),{signal:u}),o.addEventListener(`complete`,l(!0),{signal:u})}return o},table:function(r){var i=e.table(r),a=i.schema.primaryKey;return c(c({},i),{mutate:function(s){var u=M.trans;if(a.outbound||u.db._options.cache===`disabled`||u.explicit||u.idbtrans.mode!==`readwrite`)return i.mutate(s);var l=je[`idb://`.concat(t,`/`).concat(r)];if(!l)return i.mutate(s);var f=i.mutate(s);return(s.type===`add`||s.type===`put`)&&(s.values.length>=50||tr(a,s).some(function(v){return v==null}))?f.then(function(v){var A=ui(l,c(c({},s),{values:s.values.map(function(h,p){var b;if(v.failures[p])return h;var g=!((b=a.keyPath)===null||b===void 0)&&b.includes(`.`)?Fe(h):c({},h);return re(g,a.keyPath,v.results[p]),g})}),v);l.optimisticOps.push(A),queueMicrotask(function(){return s.mutatedParts&&Jt(s.mutatedParts)})}):(l.optimisticOps.push(s),s.mutatedParts&&Jt(s.mutatedParts),f.then(function(v){if(v.numFailures>0){Pe(l.optimisticOps,s);var y=ui(l,s,v);y&&l.optimisticOps.push(y),s.mutatedParts&&Jt(s.mutatedParts)}}),f.catch(function(){Pe(l.optimisticOps,s),s.mutatedParts&&Jt(s.mutatedParts)})),f},query:function(s){var u;if(!oi(M,i)||!si(`query`,s))return i.query(s);var l=((u=M.trans)===null||u===void 0?void 0:u.db._options.cache)===`immutable`,f=M,v=f.requery,y=f.signal,A=bo(t,r,`query`,s),h=A[0],p=A[1],b=A[2],g=A[3];if(h&&p)h.obsSet=s.obsSet;else{var x=i.query(s).then(function(I){var _=I.result;if(h&&(h.res=_),l){for(var E=0,F=_.length;E<F;++E)Object.freeze(_[E]);Object.freeze(_)}return I}).catch(function(I){return g&&h&&Pe(g,h),Promise.reject(I)});h={obsSet:s.obsSet,promise:x,subscribers:/* @__PURE__ */ new Set,type:`query`,req:s,dirty:!1},g?g.push(h):(g=[h],b||(b=je[`idb://`.concat(t,`/`).concat(r)]={queries:{query:{},count:{}},objs:/* @__PURE__ */ new Map,optimisticOps:[],unsignaledParts:{}}),b.queries.query[s.query.index.name||``]=g)}return _o(h,g,v,y),h.promise.then(function(I){var _=ci(I.result,s,b?.optimisticOps,i,h,l);return{result:l?_:Fe(_)}})}})}})}};function Zt(e,t){return new Proxy(e,{get:function(n,r,i){return r===`db`?t:Reflect.get(n,r,i)}})}var ge=(function(){function e(t,n){var r=this;this._middlewares={},this.verno=0;var i=e.dependencies;this._options=n=c({addons:e.addons,autoOpen:!0,indexedDB:i.indexedDB,IDBKeyRange:i.IDBKeyRange,cache:`cloned`,maxConnections:Nr},n),this._deps={indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange};var a=n.addons;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var o={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:V,dbReadyPromise:null,cancelOpen:V,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:n.autoOpen};o.dbReadyPromise=new P(function(u){o.dbReadyResolve=u}),o.openCanceller=new P(function(u,l){o.cancelOpen=l}),this._state=o,this.name=t,this.on=pt(this,`populate`,`blocked`,`versionchange`,`close`,{ready:[wn,V]}),this.once=function(u,l){var f=function(){for(var v=[],y=0;y<arguments.length;y++)v[y]=arguments[y];r.on(u).unsubscribe(f),l.apply(r,v)};return r.on(u,f)},this.on.ready.subscribe=gr(this.on.ready.subscribe,function(u){return function(l,f){e.vip(function(){var v=r._state;if(v.openComplete)v.dbOpenError||P.resolve().then(l),f&&u(l);else if(v.onReadyBeingFired)v.onReadyBeingFired.push(l),f&&u(l);else{u(l);var y=r;f||u(function A(){y.on.ready.unsubscribe(l),y.on.ready.unsubscribe(A)})}})}}),this.Collection=Ca(this),this.Table=Ia(this),this.Transaction=Ka(this),this.Version=qa(this),this.WhereClause=Ra(this),this.on(`versionchange`,function(u){u.newVersion>0?console.warn(`Another connection wants to upgrade database '`.concat(r.name,`'. Closing db now to resume the upgrade.`)):console.warn(`Another connection wants to delete database '`.concat(r.name,`'. Closing db now to resume the delete request.`)),r.close({disableAutoOpen:!1})}),this.on(`blocked`,function(u){!u.newVersion||u.newVersion<u.oldVersion?console.warn(`Dexie.delete('`.concat(r.name,`') was blocked`)):console.warn(`Upgrade '`.concat(r.name,`' blocked by other connection holding version `).concat(u.oldVersion/10))}),this._maxKey=yt(n.IDBKeyRange),this._createTransaction=function(u,l,f,v){return new r.Transaction(u,l,f,r._options.chromeTransactionDurability,v)},this._fireOnBlocked=function(u){r.on(`blocked`).fire(u),bt.toArray().filter(function(l){return l.name===r.name&&l!==r&&!l._state.vcFired}).map(function(l){return l.on(`versionchange`).fire(u)})},this.use(lo),this.use(So),this.use(fo),this.use(so),this.use(uo);var s=new Proxy(this,{get:function(u,l,f){if(l===`_vip`)return!0;if(l===`table`)return function(y){return Zt(r.table(y),s)};var v=Reflect.get(u,l,f);return v instanceof Wr?Zt(v,s):l===`tables`?v.map(function(y){return Zt(y,s)}):l===`_createTransaction`?function(){return Zt(v.apply(this,arguments),s)}:v}});this.vip=s,a.forEach(function(u){return u(r)})}return e.prototype.version=function(t){if(isNaN(t)||t<.1)throw new N.Type(`Given version is not a positive number`);if(t=Math.round(t*10)/10,this.idbdb||this._state.isBeingOpened)throw new N.Schema(`Cannot add version when database is open`);this.verno=Math.max(this.verno,t);var n=this._versions,r=n.filter(function(i){return i._cfg.version===t})[0];return r||(r=new this.Version(t),n.push(r),n.sort(Ua),r.stores({}),this._state.autoSchema=!1,r)},e.prototype._whenReady=function(t){var n=this;return this.idbdb&&(this._state.openComplete||M.letThrough||this._vip)?t():new P(function(r,i){if(n._state.openComplete)return i(new N.DatabaseClosed(n._state.dbOpenError));if(!n._state.isBeingOpened){if(!n._state.autoOpen){i(new N.DatabaseClosed);return}n.open().catch(V)}n._state.dbReadyPromise.then(r,i)}).then(t)},e.prototype.use=function(t){var n=t.stack,r=t.create,i=t.level,a=t.name;a&&this.unuse({stack:n,name:a});var o=this._middlewares[n]||(this._middlewares[n]=[]);return o.push({stack:n,create:r,level:i??10,name:a}),o.sort(function(s,u){return s.level-u.level}),this},e.prototype.unuse=function(t){var n=t.stack,r=t.name,i=t.create;return n&&this._middlewares[n]&&(this._middlewares[n]=this._middlewares[n].filter(function(a){return i?a.create!==i:r?a.name!==r:!1})),this},e.prototype.open=function(){var t=this;return Ke(me,function(){return io(t)})},e.prototype._close=function(){this.on.close.fire(new CustomEvent(`close`));var t=this._state;if(bt.remove(this),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}t.isBeingOpened||(t.dbReadyPromise=new P(function(n){t.dbReadyResolve=n}),t.openCanceller=new P(function(n,r){t.cancelOpen=r}))},e.prototype.close=function(t){var r=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,i=this._state;r?(i.isBeingOpened&&i.cancelOpen(new N.DatabaseClosed),this._close(),i.autoOpen=!1,i.dbOpenError=new N.DatabaseClosed):(this._close(),i.autoOpen=this._options.autoOpen||i.isBeingOpened,i.openComplete=!1,i.dbOpenError=null)},e.prototype.delete=function(t){var n=this;t===void 0&&(t={disableAutoOpen:!0});var r=arguments.length>0&&typeof arguments[0]!=`object`,i=this._state;return new P(function(a,o){var s=function(){n.close(t);var u=n._deps.indexedDB.deleteDatabase(n.name);u.onsuccess=Q(function(){no(n._deps,n.name),a()}),u.onerror=ce(o),u.onblocked=n._fireOnBlocked};if(r)throw new N.InvalidArgument(`Invalid closeOptions argument to db.delete()`);i.isBeingOpened?i.dbReadyPromise.then(s):s()})},e.prototype.backendDB=function(){return this.idbdb},e.prototype.isOpen=function(){return this.idbdb!==null},e.prototype.hasBeenClosed=function(){var t=this._state.dbOpenError;return t&&t.name===`DatabaseClosedError`},e.prototype.hasFailed=function(){return this._state.dbOpenError!==null},e.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(e.prototype,"tables",{get:function(){var t=this;return k(this._allTables).map(function(n){return t._allTables[n]})},enumerable:!1,configurable:!0}),e.prototype.transaction=function(){var t=ao.apply(this,arguments);return this._transaction.apply(this,t)},e.prototype._transaction=function(t,n,r){var i=this,a=M.trans;(!a||a.db!==this||t.indexOf(`!`)!==-1)&&(a=null);var o=t.indexOf(`?`)!==-1;t=t.replace(`!`,``).replace(`?`,``);var s,u;try{if(u=n.map(function(f){var v=f instanceof i.Table?f.name:f;if(typeof v!=`string`)throw new TypeError(`Invalid table argument to Dexie.transaction(). Only Table or String are allowed`);return v}),t==`r`||t===On)s=On;else if(t==`rw`||t==Rn)s=Rn;else throw new N.InvalidArgument(`Invalid transaction mode: `+t);if(a){if(a.mode===On&&s===Rn)if(o)a=null;else throw new N.SubTransaction(`Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY`);a&&u.forEach(function(f){if(a&&a.storeNames.indexOf(f)===-1)if(o)a=null;else throw new N.SubTransaction(`Table `+f+` not included in parent transaction.`)}),o&&a&&!a.active&&(a=null)}}catch(f){return a?a._promise(null,function(v,y){y(f)}):G(f)}var l=ii.bind(null,this,s,u,a,r);return a?a._promise(s,l,`lock`):M.trans?Ke(M.transless,function(){return i._whenReady(l)}):this._whenReady(l)},e.prototype.table=function(t){if(!J(this._allTables,t))throw new N.InvalidTable(`Table `.concat(t,` does not exist`));return this._allTables[t]},e})(),Eo=typeof Symbol<`u`&&`observable`in Symbol?Symbol.observable:`@@observable`,Ao=(function(){function e(t){this._subscribe=t}return e.prototype.subscribe=function(t,n,r){return this._subscribe(!t||typeof t==`function`?{next:t,error:n,complete:r}:t)},e.prototype[Eo]=function(){return this},e})(),en;try{en={indexedDB:S.indexedDB||S.mozIndexedDB||S.webkitIndexedDB||S.msIndexedDB,IDBKeyRange:S.IDBKeyRange||S.webkitIDBKeyRange}}catch{en={indexedDB:null,IDBKeyRange:null}}function fi(e){var t=!1,n,r=new Ao(function(i){var a=gn(e);function o(g){var x=Ge();try{a&&Je();var I=Ee(e,g);return a&&(I=I.finally(Ae)),I}finally{x&&Xe()}}var s=!1,u,l={},f={},v={get closed(){return s},unsubscribe:function(){s||(s=!0,u&&u.abort(),y&&ke.storagemutated.unsubscribe(p))}};i.start&&i.start(v);var y=!1,A=function(){return Fn(b)};function h(){return Gn(f,l)}var p=function(g){Xt(l,g),h()&&A()},b=function(){if(!(s||!en.indexedDB)){l={};var g={};u&&u.abort(),u=new AbortController;var x={subscr:g,signal:u.signal,requery:A,querier:e,trans:null},I=o(x);y||(ke.storagemutated.subscribe(p),y=!0),Promise.resolve(I).then(function(_){t=!0,n=_,!(s||x.signal.aborted)&&(h()?A():(f=g,h()?A():(l={},Fn(function(){return!s&&i.next&&i.next(_)}))))},function(_){s||x.signal.aborted||(t=!1,[`DatabaseClosedError`,`AbortError`].includes(_?.name)||s||Fn(function(){s||i.error&&i.error(_)}))})}};return setTimeout(A,0),v});return r.hasValue=function(){return t},r.getValue=function(){return n},r}var Le=ge;We(Le,c(c({},Ct),{delete:function(e){return new Le(e,{addons:[]}).delete()},exists:function(e){return new Le(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch(`NoSuchDatabaseError`,function(){return!1})},getDatabaseNames:function(e){try{return eo(Le.dependencies).then(e)}catch{return G(new N.MissingAPI)}},defineClass:function(){function e(t){H(this,t)}return e},ignoreTransaction:function(e){return M.trans?Ke(M.transless||me,e):e()},vip:$n,async:function(e){return function(){try{var t=Zn(e.apply(this,arguments));return!t||typeof t.then!=`function`?P.resolve(t):t}catch(n){return G(n)}}},spawn:function(e,t,n){try{var r=Zn(e.apply(n,t||[]));return!r||typeof r.then!=`function`?P.resolve(r):r}catch(i){return G(i)}},currentTransaction:{get:function(){return M.trans||null}},waitFor:function(e,t){var n=P.resolve(typeof e==`function`?Le.ignoreTransaction(e):e).timeout(t||6e4);return M.trans?M.trans.waitFor(n):n},Promise:P,debug:{get:function(){return he},set:function(e){kr(e)}},derive:Ve,extend:H,props:We,override:gr,Events:pt,on:ke,liveQuery:fi,extendObservabilitySet:Xt,getByKeyPath:pe,setByKeyPath:re,delByKeyPath:Ji,shallowClone:_r,deepClone:Fe,getObjectDiff:er,cmp:U,asap:br,minKey:Tn,addons:[],connections:{get:bt.toArray},errnames:_n,dependencies:en,cache:je,semVer:Kr,version:Kr.split(`.`).map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/Math.pow(10,n*2)})})),Le.maxKey=yt(Le.dependencies.IDBKeyRange),typeof dispatchEvent<`u`&&typeof addEventListener<`u`&&(ke(Ut,function(e){if(!Ce){var t=new CustomEvent(Bn,{detail:e});Ce=!0,dispatchEvent(t),Ce=!1}}),addEventListener(Bn,function(e){var t=e.detail;Ce||rr(t)}));function rr(e){var t=Ce;try{Ce=!0,ke.storagemutated.fire(e),qn(e,!0)}finally{Ce=t}}var Ce=!1,De,ir=function(){};typeof BroadcastChannel<`u`&&(ir=function(){De=new BroadcastChannel(Bn),De.onmessage=function(e){return e.data&&rr(e.data)}},ir(),typeof De.unref==`function`&&De.unref(),ke(Ut,function(e){Ce||De.postMessage(e)})),typeof addEventListener<`u`&&(addEventListener(`pagehide`,function(e){if(!ge.disableBfCache&&e.persisted){he&&console.debug(`Dexie: handling persisted pagehide`),De?.close();for(var t=0,n=bt.toArray();t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener(`pageshow`,function(e){!ge.disableBfCache&&e.persisted&&(he&&console.debug(`Dexie: handling persisted pageshow`),ir(),rr({all:new ee(-1/0,[[]])}))}));function Io(e){return new dt({add:e})}function xo(e){return new dt({remove:e})}function ko(e,t){return new dt({replacePrefix:[e,t]})}P.rejectionMapper=aa,kr(he);var Co=Object.freeze({__proto__:null,DEFAULT_MAX_CONNECTIONS:Nr,Dexie:ge,Entity:Lr,PropModification:dt,RangeSet:ee,add:Io,cmp:U,default:ge,liveQuery:fi,mergeRanges:wt,rangesOverlap:ei,remove:xo,replacePrefix:ko});return c(ge,Co,{default:ge}),ge}))});function Ri$1(w){return Error(`Unable to find icon with the name "${w}"`)}function Oo(){return Error(`Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.`)}function Mi$1(w){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${w}".`)}function Ki$1(w){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${w}".`)}var be=class{url;svgText;options;svgElement=null;constructor(m,c,d){this.url=m,this.svgText=c,this.options=d}};var Ni$1=(()=>{class w{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=/* @__PURE__ */ new Map;_iconSetConfigs=/* @__PURE__ */ new Map;_cachedIconsByUrl=/* @__PURE__ */ new Map;_inProgressUrlFetches=/* @__PURE__ */ new Map;_fontCssClassesByAlias=/* @__PURE__ */ new Map;_resolvers=[];_defaultFontSetClass;constructor(c,d,S,k){this._httpClient=c,this._sanitizer=d,this._errorHandler=k,this._document=S}addSvgIcon(c,d,S){return this.addSvgIconInNamespace(``,c,d,S)}addSvgIconLiteral(c,d,S){return this.addSvgIconLiteralInNamespace(``,c,d,S)}addSvgIconInNamespace(c,d,S,k){return this._addSvgIconConfig(c,d,new be(S,null,k))}addSvgIconResolver(c){return this._resolvers.push(c),this}addSvgIconLiteralInNamespace(c,d,S,k){let T=this._sanitizer.sanitize(K$2.HTML,S);if(!T)throw Ki$1(S);let H=BR(T);return this._addSvgIconConfig(c,d,new be(``,H,k))}addSvgIconSet(c,d){return this.addSvgIconSetInNamespace(``,c,d)}addSvgIconSetLiteral(c,d){return this.addSvgIconSetLiteralInNamespace(``,c,d)}addSvgIconSetInNamespace(c,d,S){return this._addSvgIconSetConfig(c,new be(d,null,S))}addSvgIconSetLiteralInNamespace(c,d,S){let k=this._sanitizer.sanitize(K$2.HTML,d);if(!k)throw Ki$1(d);let T=BR(k);return this._addSvgIconSetConfig(c,new be(``,T,S))}registerFontClassAlias(c,d=c){return this._fontCssClassesByAlias.set(c,d),this}classNameForFontAlias(c){return this._fontCssClassesByAlias.get(c)||c}setDefaultFontSetClass(...c){return this._defaultFontSetClass=c,this}getDefaultFontSetClass(){return this._defaultFontSetClass??=Mo(this._document),this._defaultFontSetClass}getSvgIconFromUrl(c){let d=this._sanitizer.sanitize(K$2.RESOURCE_URL,c);if(!d)throw Mi$1(c);let S=this._cachedIconsByUrl.get(d);return S?R$1(sn(S)):this._loadSvgIconFromConfig(new be(c,null)).pipe(je$2(k=>this._cachedIconsByUrl.set(d,k)),V$1(k=>sn(k)))}getNamedSvgIcon(c,d=``){let S=Bi(d,c),k=this._svgIconConfigs.get(S);if(k)return this._getSvgFromConfig(k);if(k=this._getIconConfigFromResolvers(d,c),k)return this._svgIconConfigs.set(S,k),this._getSvgFromConfig(k);let T=this._iconSetConfigs.get(d);return T?this._getSvgFromIconSetConfigs(c,T):Hu(Ri$1(S))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(c){return c.svgText?R$1(sn(this._svgElementFromConfig(c))):this._loadSvgIconFromConfig(c).pipe(V$1(d=>sn(d)))}_getSvgFromIconSetConfigs(c,d){let S=this._extractIconWithNameFromAnySet(c,d);if(S)return R$1(S);let k=d.filter(T=>!T.svgText).map(T=>this._loadSvgIconSetFromConfig(T).pipe(zn(H=>{let we=`Loading icon set URL: ${this._sanitizer.sanitize(K$2.RESOURCE_URL,T.url)} failed: ${H.message}`;return this._errorHandler.handleError(new Error(we)),R$1(null)})));return sw(k).pipe(V$1(()=>{let T=this._extractIconWithNameFromAnySet(c,d);if(!T)throw Ri$1(c);return T}))}_extractIconWithNameFromAnySet(c,d){for(let S=d.length-1;S>=0;S--){let k=d[S];if(k.svgText&&k.svgText.toString().indexOf(c)>-1){let T=this._svgElementFromConfig(k),H=this._extractSvgIconFromSet(T,c,k.options);if(H)return H}}return null}_loadSvgIconFromConfig(c){return this._fetchIcon(c).pipe(je$2(d=>c.svgText=d),V$1(()=>this._svgElementFromConfig(c)))}_loadSvgIconSetFromConfig(c){return c.svgText?R$1(null):this._fetchIcon(c).pipe(je$2(d=>c.svgText=d))}_extractSvgIconFromSet(c,d,S){let k=c.querySelector(`[id="${d}"]`);if(!k)return null;let T=k.cloneNode(!0);if(T.removeAttribute(`id`),T.nodeName.toLowerCase()===`svg`)return this._setSvgAttributes(T,S);if(T.nodeName.toLowerCase()===`symbol`)return this._setSvgAttributes(this._toSvgElement(T),S);let H=this._svgElementFromString(BR(`<svg></svg>`));return H.appendChild(T),this._setSvgAttributes(H,S)}_svgElementFromString(c){let d=this._document.createElement(`DIV`);d.innerHTML=c;let S=d.querySelector(`svg`);if(!S)throw Error(`<svg> tag not found`);return S}_toSvgElement(c){let d=this._svgElementFromString(BR(`<svg></svg>`)),S=c.attributes;for(let k=0;k<S.length;k++){let{name:T,value:H}=S[k],W=T.toLowerCase();W!==`id`&&!W.startsWith(`on`)&&d.setAttribute(T,H)}for(let k=0;k<c.childNodes.length;k++)c.childNodes[k].nodeType===this._document.ELEMENT_NODE&&d.appendChild(c.childNodes[k].cloneNode(!0));return d}_setSvgAttributes(c,d){return c.setAttribute(`fit`,``),c.setAttribute(`height`,`100%`),c.setAttribute(`width`,`100%`),c.setAttribute(`preserveAspectRatio`,`xMidYMid meet`),c.setAttribute(`focusable`,`false`),d&&d.viewBox&&c.setAttribute(`viewBox`,d.viewBox),c}_fetchIcon(c){let{url:d,options:S}=c,k=S?.withCredentials??!1;if(!this._httpClient)throw Oo();if(d==null)throw Error(`Cannot fetch icon from URL "${d}".`);let T=this._sanitizer.sanitize(K$2.RESOURCE_URL,d);if(!T)throw Mi$1(d);let H=this._inProgressUrlFetches.get(T);if(H)return H;let W=this._httpClient.get(T,{responseType:`text`,withCredentials:k}).pipe(V$1(we=>BR(we)),Wo$1(()=>this._inProgressUrlFetches.delete(T)),Gu());return this._inProgressUrlFetches.set(T,W),W}_addSvgIconConfig(c,d,S){return this._svgIconConfigs.set(Bi(c,d),S),this}_addSvgIconSetConfig(c,d){let S=this._iconSetConfigs.get(c);return S?S.push(d):this._iconSetConfigs.set(c,[d]),this}_svgElementFromConfig(c){if(!c.svgElement){let d=this._svgElementFromString(c.svgText);this._setSvgAttributes(d,c.options),c.svgElement=d}return c.svgElement}_getIconConfigFromResolvers(c,d){for(let S=0;S<this._resolvers.length;S++){let k=this._resolvers[S](d,c);if(k)return Ro(k)?new be(k.url,null,k.options):new be(k,null)}}static ɵfac=function(d){return new(d||w)(b(qN,8),b(sh),b(j$3,8),b(Xe$2))};static ɵprov=L({token:w,factory:w.ɵfac,providedIn:`root`})}return w})();function sn(w){return w.cloneNode(!0)}function Bi(w,m){return w+`:`+m}function Ro(w){return!!(w.url&&w.options)}function Mo(w){let m=null,c=!1;return w.fonts&&typeof w.fonts.forEach==`function`&&w.fonts.forEach(d=>{let S=d.family.replace(/['"]/g,``).trim().toLowerCase();(S===`material icons`||S.startsWith(`material icons `))&&(c=!0),S.startsWith(`material symbols rounded`)?m=`rounded`:S.startsWith(`material symbols sharp`)?m=`sharp`:S.startsWith(`material symbols`)&&(m=`outlined`)}),[m&&!c?`material-symbols-${m}`:`material-icons`,`mat-ligature-font`]}var Ko=new v(`MAT_ICON_DEFAULT_OPTIONS`);var Bo=new v(`mat-icon-location`,{providedIn:`root`,factory:()=>{let w=p(j$3),m=w?w.location:null;return{getPathname:()=>m?m.pathname+m.search:``}}});var ji$1=[`clip-path`,`color-profile`,`src`,`cursor`,`fill`,`filter`,`marker`,`marker-start`,`marker-mid`,`marker-end`,`mask`,`stroke`];var No=ji$1.map(w=>`[${w}]`).join(`, `);var jo=/^url\(['"]?#(.*?)['"]?\)$/;var ls=(()=>{class w{_elementRef=p(Ze$2);_iconRegistry=p(Ni$1);_location=p(Bo);_errorHandler=p(Xe$2);_defaultColor;get color(){return this._color||this._defaultColor}set color(c){this._color=c}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(c){c!==this._svgIcon&&(c?this._updateSvgIcon(c):this._svgIcon&&this._clearSvgElement(),this._svgIcon=c)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(c){let d=this._cleanupFontValue(c);d!==this._fontSet&&(this._fontSet=d,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(c){let d=this._cleanupFontValue(c);d!==this._fontIcon&&(this._fontIcon=d,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=re$1.EMPTY;constructor(){let c=p(new bc(`aria-hidden`),{optional:!0}),d=p(Ko,{optional:!0});d&&(d.color&&(this.color=this._defaultColor=d.color),d.fontSet&&(this.fontSet=d.fontSet)),c||this._elementRef.nativeElement.setAttribute(`aria-hidden`,`true`)}_splitIconName(c){if(!c)return[``,``];let d=c.split(`:`);switch(d.length){case 1:return[``,d[0]];case 2:return d;default:throw Error(`Invalid icon name: "${c}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let c=this._elementsWithExternalReferences;if(c&&c.size){let d=this._location.getPathname();d!==this._previousPath&&(this._previousPath=d,this._prependPathToReferences(d))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(c){this._clearSvgElement();let d=this._location.getPathname();this._previousPath=d,this._cacheChildrenWithExternalReferences(c),this._prependPathToReferences(d),this._elementRef.nativeElement.appendChild(c)}_clearSvgElement(){let c=this._elementRef.nativeElement,d=c.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();d--;){let S=c.childNodes[d];(S.nodeType!==1||S.nodeName.toLowerCase()===`svg`)&&S.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let c=this._elementRef.nativeElement,d=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(S=>S.length>0);this._previousFontSetClass.forEach(S=>c.classList.remove(S)),d.forEach(S=>c.classList.add(S)),this._previousFontSetClass=d,this.fontIcon!==this._previousFontIconClass&&!d.includes(`mat-ligature-font`)&&(this._previousFontIconClass&&c.classList.remove(this._previousFontIconClass),this.fontIcon&&c.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(c){return typeof c==`string`?c.trim().split(` `)[0]:c}_prependPathToReferences(c){let d=this._elementsWithExternalReferences,S=c.startsWith(`//`)?`/.${c}`:c;d&&d.forEach((k,T)=>{k.forEach(H=>{T.setAttribute(H.name,`url('${S}#${H.value}')`)})})}_cacheChildrenWithExternalReferences(c){let d=c.querySelectorAll(No),S=this._elementsWithExternalReferences=this._elementsWithExternalReferences||/* @__PURE__ */ new Map;for(let k=0;k<d.length;k++)ji$1.forEach(T=>{let H=d[k],W=H.getAttribute(T),we=W?W.match(jo):null;if(we){let J=S.get(H);J||(J=[],S.set(H,J)),J.push({name:T,value:we[1]})}})}_updateSvgIcon(c){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),c){let[d,S]=this._splitIconName(c);d&&(this._svgNamespace=d),S&&(this._svgName=S),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(S,d).pipe(wt$4(1)).subscribe(k=>this._setSvgElement(k),k=>{let T=`Error retrieving icon ${d}:${S}! ${k.message}`;this._errorHandler.handleError(new Error(T))})}}static ɵfac=function(d){return new(d||w)};static ɵcmp=(function(){return Fi({type:w,selectors:[[`mat-icon`]],hostAttrs:[`role`,`img`,1,`mat-icon`,`notranslate`],hostVars:10,hostBindings:function(S,k){S&2&&(Ui$2(`data-mat-icon-type`,k._usingFontIcon()?`font`:`svg`)(`data-mat-icon-name`,k._svgName||k.fontIcon)(`data-mat-icon-namespace`,k._svgNamespace||k.fontSet)(`fontIcon`,k._usingFontIcon()?k.fontIcon:null),wT(k.color?`mat-`+k.color:``),Vv(`mat-icon-inline`,k.inline)(`mat-icon-no-color`,k.color!==`primary`&&k.color!==`accent`&&k.color!==`warn`))},inputs:{color:`color`,inline:[2,`inline`,`inline`,zi$2],svgIcon:`svgIcon`,fontSet:`fontSet`,fontIcon:`fontIcon`},exportAs:[`matIcon`],ngContentSelectors:[`*`],decls:1,vars:0,template:function(S,k){S&1&&(aT(),cT(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})})()}return w})();var fs=(()=>{class w{static ɵfac=function(d){return new(d||w)};static ɵmod=gt$3({type:w});static ɵinj=Je$1({imports:[i4]})}return w})();function or(){return{currency:`USD`,checkinWeekday:5,checkinTime:`18:00`,strategy:`avalanche`,budgetSplit:{needs:50,wants:30,savingsDebt:20},categoryGroups:{},lines:{},merchantRules:[],includeLowInterestInPayoff:!1,highAprThreshold:20,mediumAprThreshold:8,longWindowMonths:12,shortWindowMonths:3,doubleFeedRate:.45,doubleFeedMinWeeks:2,returnMatchDays:14,mirrorWindowDays:7,recurringMonths:4,recurringMinHits:3,recurringMaxCv:.25,incomeShortfallRatio:.9,cardMinFloor:3500,cardMinPct:.01,lateFeePct:.05,lateFeeFloor:1500,catchupMonths:6,catchupRounding:5e3,committedCash:0,bufferPre:15e4,bufferPost:3e5,emergencyMonthsGoal:3,billOnCardUtil:.9,largeTransactionWarning:5e5,taxRates:{fedMarginal:.22,supplementalFed:.22,fica:.0765,state:.05,qbi:.2},dcfsaLimit:75e4,childCredit:22e4,holidayRules:[{monthDay:`12-25`,action:`skip_roll_back`},{monthDay:`01-01`,action:`move_next_day`}],shrinkThanksgivingWeek:!0,trackingHint:``}}function sr(){return{inflowAdjustments:[],sideIncomeScenarios:[{name:`A`,months:[]},{name:`B`,months:[]}],selectedScenario:`A`,oneOffs:[],deadlines:[],whatIfExtra:0}}function at$3(){return{schemaVersion:2,settings:or(),plan:sr(),transactions:[],debts:[],paymentSchedules:[],incomes:[],deductions:[],windfalls:[],bills:[],balances:[],goals:[],checkins:[],importLog:[],columnMappings:{}}}var Li={open:`Could not open the file.`,save:`Saving failed.`,import:`That file could not be read.`};function ur(w,m){if(w instanceof DOMException){switch(w.name){case`NotAllowedError`:case`SecurityError`:return`The browser did not give this app permission to use the file. Try again and choose Allow.`;case`NotFoundError`:return`The file could not be found. It may have been moved or deleted. Open it again.`;case`NoModificationAllowedError`:case`InvalidStateError`:return`The file is locked by another program or is read-only. Close it elsewhere and try again.`;case`QuotaExceededError`:return`The disk or browser storage is full, so nothing was saved. Free some space and try again.`;case`NotReadableError`:return`The file could not be read. Check that it is not open in another program.`}return Li[m]}return w instanceof SyntaxError?m===`open`?`That is not a valid data file. Open the file this app saved, or a backup copy of it.`:`That file could not be understood.`:w instanceof Error&&w.message?w.message:Li[m]}var Ue$2=`my-finances.json`;var un=2;function _e$3(w){return typeof w==`object`&&w!==null&&!Array.isArray(w)}function fe$3(w){return Array.isArray(w)?w.filter(_e$3):[]}function Hi(w){if(!_e$3(w))throw new Error(`Data file is not a valid finance data object.`);let m=w.schemaVersion===void 0?1:w.schemaVersion;if(typeof m!=`number`||!Number.isInteger(m)||m<1)throw new Error(`Unreadable schemaVersion: ${String(m)}`);if(m>un)throw new Error(`This data file uses schema ${m}, newer than this app (schema ${un}). Update the app.`);if(m===un)return Ho(w);if(w.schemaVersion===void 0&&!Lo.some(c=>c in w))throw new Error(`That JSON file is not a finance data file. Pick the file this app created.`);return zo(w)}var Lo=[`settings`,`transactions`,`debts`,`incomes`,`balances`,`importLog`];function Ho(w){let m=at$3(),c=m.settings,d=_e$3(w.settings)?w.settings:{},S=_e$3(w.plan)?w.plan:{},k=m.plan;if(Object.keys(m).every(W=>Array.isArray(m[W])?Array.isArray(w[W]):_e$3(w[W])||W===`schemaVersion`)&&Object.keys(c).every(W=>W in d)&&Object.keys(k).every(W=>W in S))return w;let H=r({},w);for(let W of Object.keys(m))Array.isArray(m[W])?H[W]=Array.isArray(w[W])?w[W]:[]:W!==`schemaVersion`&&!_e$3(w[W])&&(H[W]=m[W]);return H.settings=r(r({},c),d),H.plan=r(r({},k),S),H}function zo(w){let k=_e$3(w.settings)?w.settings:{},{highInterestThreshold:m,includeMortgageInPayoff:c}=k,d=t(k,[`highInterestThreshold`,`includeMortgageInPayoff`]),S=r(r({},or()),d);return typeof m==`number`&&(S.mediumAprThreshold=m),S.highAprThreshold=20,typeof c==`boolean`&&(S.includeLowInterestInPayoff=c),s(r({},w),{schemaVersion:un,settings:S,plan:_e$3(w.plan)?w.plan:sr(),transactions:fe$3(w.transactions).map(T=>r({importId:`schema-1`},T)),debts:fe$3(w.debts).map(T=>r({aprSource:`statement`,status:`current`},T)),paymentSchedules:fe$3(w.paymentSchedules),incomes:fe$3(w.incomes),deductions:fe$3(w.deductions),windfalls:fe$3(w.windfalls),bills:fe$3(w.bills),balances:fe$3(w.balances),goals:fe$3(w.goals),checkins:fe$3(w.checkins),importLog:fe$3(w.importLog),columnMappings:_e$3(w.columnMappings)?w.columnMappings:{}})}function At$3(w){let m;try{m=JSON.parse(w)}catch{throw new Error(`That file is not valid JSON, so it cannot be a finance data file.`)}return Hi(m)}function cn(w){return JSON.stringify(w,null,2)}function It$3(w,m){Uo(w,cn(m),`application/json`)}function Uo(w,m,c){let d=URL.createObjectURL(new Blob([m],{type:c})),S=document.createElement(`a`);S.href=d,S.download=w,S.click(),setTimeout(()=>URL.revokeObjectURL(d),1e4)}function zi$1(w){return w.replace(/\.json$/i,``)+`.backup.json`}function ln(w,m=/* @__PURE__ */ new Date){return w.replace(/\.json$/i,``)+`-copy-${m.toISOString().slice(0,10)}.json`}var fn$1=class{mode=`download`;fileName=``;backupActive=!1;open(){return new Promise((m,c)=>{let d=document.createElement(`input`);d.type=`file`,d.accept=`.json,application/json`,d.addEventListener(`cancel`,()=>c(new DOMException(`Cancelled`,`AbortError`))),d.addEventListener(`change`,async()=>{let S=d.files?.[0];if(!S){c(new DOMException(`Cancelled`,`AbortError`));return}try{let k=At$3(await S.text());this.fileName=S.name,m(k)}catch(k){c(k)}}),d.click()})}async create(){this.fileName=Ue$2}async save(m){It$3(this.fileName||Ue$2,m)}exportCopy(m){It$3(ln(this.fileName||Ue$2),m)}async reopen(){return null}async rememberedFileName(){return null}async setupBackup(){return!1}async forget(){this.fileName=``}};var cr=[{description:`Finance data file`,accept:{"application/json":[`.json`]}}];var hn=class{constructor(m){this.storage=m}storage;mode=`fs-access`;fileName=``;handle;backupHandle;pendingBackupHandle;get backupActive(){return this.backupHandle!==void 0}async open(){let[m]=await window.showOpenFilePicker({types:cr}),c=At$3(await(await m.getFile()).text());return await this.adopt(m),c}async create(){let m=await window.showSaveFilePicker({suggestedName:Ue$2,types:cr});await this.write(m,cn(at$3())),await this.adopt(m)}async save(m){if(!this.handle)throw new Error(`No data file is open.`);await this.writeBackup(this.handle),await this.write(this.handle,cn(m)),await this.storage.putCache(m)}exportCopy(m){It$3(ln(this.fileName||Ue$2),m)}async reopen(){let m=await this.storage.getFileHandle();if(!m||await m.requestPermission({mode:`readwrite`})!==`granted`)return null;let c=At$3(await(await m.getFile()).text());return this.handle=m,this.fileName=m.name,this.backupHandle=void 0,this.pendingBackupHandle=await this.storage.getBackupHandle(),await this.tryActivatePendingBackup(),await this.storage.putCache(c),c}async rememberedFileName(){return(await this.storage.getFileHandle())?.name??null}async forget(){this.handle=void 0,this.backupHandle=void 0,this.pendingBackupHandle=void 0,this.fileName=``,await this.storage.forgetFile()}async adopt(m){if(this.handle=m,this.fileName=m.name,this.backupHandle=void 0,this.pendingBackupHandle=void 0,await this.storage.putFileHandle(m),navigator.userActivation?.isActive!==!1)try{await this.pickBackupFile(m)}catch{}}async setupBackup(){if(!this.handle)return!1;if(this.pendingBackupHandle&&await this.tryActivatePendingBackup())return!0;try{return await this.pickBackupFile(this.handle),!0}catch(m){if(m instanceof DOMException&&m.name===`AbortError`)return!1;throw m}}async pickBackupFile(m){let c=await window.showSaveFilePicker({suggestedName:zi$1(m.name),types:cr,startIn:m});this.backupHandle=c,this.pendingBackupHandle=void 0,await this.storage.putBackupHandle(c)}async tryActivatePendingBackup(){let m=this.pendingBackupHandle;if(!m)return!1;try{if(await m.requestPermission({mode:`readwrite`})===`granted`)return this.backupHandle=m,this.pendingBackupHandle=void 0,!0}catch{}return!1}async writeBackup(m){if(this.backupHandle)try{let c=await(await m.getFile()).text();c.trim()!==``&&await this.write(this.backupHandle,c)}catch{this.pendingBackupHandle=this.backupHandle,this.backupHandle=void 0}}async write(m,c){let d=await m.createWritable();await d.write(c),await d.close()}};var dn=v$1(Ui$1(),1);var Wi=Symbol.for(`Dexie`);var pn=globalThis[Wi]||(globalThis[Wi]=dn.default);if(dn.default.semVer!==pn.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${dn.default.semVer} and ${pn.semVer}`);var{liveQuery:Cs,mergeRanges:Ds,rangesOverlap:Fs,RangeSet:Ps,cmp:Ts,Entity:Os,PropModification:Rs,replacePrefix:Ms,add:Ks,remove:Bs,DexieYProvider:Ns}=pn;var hr=pn;var dr=`fileHandle`;var pr=`backupHandle`;var vr=`cache`;var Vi$1=`settings`;var ot$3=class w{db=new hr(`finance-health-check`);constructor(){this.db.version(1).stores({kv:`key`})}getFileHandle(){return this.get(dr)}putFileHandle(m){return this.put(dr,m)}getBackupHandle(){return this.get(pr)}putBackupHandle(m){return this.put(pr,m)}getCache(){return this.get(vr)}putCache(m){return this.put(vr,{savedAt:(/* @__PURE__ */ new Date()).toISOString(),data:m})}async getSettings(){return await this.get(Vi$1)??{}}async patchSettings(m){await this.put(Vi$1,r(r({},await this.getSettings()),m))}async forgetFile(){await this.db.kv.bulkDelete([dr,pr,vr])}async clearAll(){this.db.close(),await hr.delete(this.db.name),await this.db.open()}async get(m){try{return(await this.db.kv.get(m))?.value}catch{return}}async put(m,c){try{await this.db.kv.put({key:m,value:c})}catch{}}static ɵfac=function(c){return new(c||w)};static ɵprov=L({token:w,factory:w.ɵfac,providedIn:`root`})};var $i$1=new v(`DATA_FILE`,{providedIn:`root`,factory:()=>`showSaveFilePicker`in window?new hn(p(ot$3)):new fn$1});var Wo=2e3;var Yi$1=class w{file=p($i$1);storage=p(ot$3);_data=Z$3(null);_dirty=Z$3(!1);_saving=Z$3(!1);_savedAt=Z$3(null);_error=Z$3(null);_fileName=Z$3(``);_backupActive=Z$3(!1);_rememberedFile=Z$3(null);_sample=Z$3(!1);autosaveTimer;data=this._data.asReadonly();dirty=this._dirty.asReadonly();savedAt=this._savedAt.asReadonly();error=this._error.asReadonly();fileName=this._fileName.asReadonly();rememberedFile=this._rememberedFile.asReadonly();mode=this.file.mode;isSample=this._sample.asReadonly();backupMissing=Ic(()=>this.file.mode===`fs-access`&&this._data()!==null&&!this._sample()&&!this._backupActive());isOpen=Ic(()=>this._data()!==null);saveState=Ic(()=>this._error()?`error`:this._saving()?`saving`:this._dirty()?`unsaved`:`saved`);constructor(){window.addEventListener(`beforeunload`,m=>{this._dirty()&&m.preventDefault()}),this.file.rememberedFileName().then(m=>this._rememberedFile.set(m))}async createNew(){return this.attempt(async()=>{await this.file.create(),this.load(at$3()),this._dirty.set(this.file.mode===`download`)})}async openExisting(){return this.attempt(async()=>this.load(await this.file.open()))}async reopenRemembered(){return this.attempt(async()=>{let m=await this.file.reopen();if(!m)throw new Error(`The browser did not give access to the file. Try Open instead.`);this.load(m)})}startSample(m){clearTimeout(this.autosaveTimer),this._data.set(m),this._dirty.set(!1),this._savedAt.set(null),this._error.set(null),this._backupActive.set(!1),this._fileName.set(`Sample data (not saved)`),this._sample.set(!0)}update(m){let c=this._data();c&&(this._data.set(m(c)),!this._sample()&&(this._dirty.set(!0),this.file.mode===`fs-access`&&this.scheduleAutosave()))}setStrategy(m,c){this.update(d=>s(r({},d),{settings:s(r({},d.settings),{strategy:m,customOrder:c??d.settings.customOrder})}))}setIncludeLowInterest(m){this.update(c=>s(r({},c),{settings:s(r({},c.settings),{includeLowInterestInPayoff:m})}))}setLineSetting(m,c){this.update(d=>{let S=r({},d.settings.lines);return c?S[m]=c:delete S[m],s(r({},d),{settings:s(r({},d.settings),{lines:S})})})}addGoal(m){this.update(c=>s(r({},c),{goals:[...c.goals,m]}))}removeGoal(m){this.update(c=>s(r({},c),{goals:c.goals.filter(d=>d.id!==m)}))}addCheckin(m){this.update(c=>s(r({},c),{checkins:[...c.checkins,m]}))}async save(){let m=this._data();if(!(!m||this._sample())){clearTimeout(this.autosaveTimer),this._saving.set(!0);try{await this.file.save(m),this._data()===m&&this._dirty.set(!1),this._savedAt.set(/* @__PURE__ */ new Date),this._error.set(null)}catch(c){this._error.set(ur(c,`save`))}finally{this._saving.set(!1),this._backupActive.set(this.file.backupActive)}}}async setUpBackup(){await this.attempt(async()=>{await this.file.setupBackup(),this._backupActive.set(this.file.backupActive)})}exportCopy(){let m=this._data();m&&this.file.exportCopy(m)}async close(){return this._dirty()&&!this._sample()&&(this.file.mode===`fs-access`&&await this.save(),this._dirty()&&!window.confirm(`You have changes that are not saved to your file. Close anyway?`))?!1:(clearTimeout(this.autosaveTimer),this._data.set(null),this._dirty.set(!1),this._savedAt.set(null),this._fileName.set(``),this._backupActive.set(!1),this._sample.set(!1),this._error.set(null),!0)}async deleteAll(){clearTimeout(this.autosaveTimer),await this.file.forget(),await this.storage.clearAll(),this._data.set(null),this._dirty.set(!1),this._savedAt.set(null),this._fileName.set(``),this._backupActive.set(!1),this._rememberedFile.set(null),this._sample.set(!1),this._error.set(null)}clearError(){this._error.set(null)}load(m){this._sample.set(!1),this._data.set(m),this._dirty.set(!1),this._savedAt.set(null),this._fileName.set(this.file.fileName),this._rememberedFile.set(this.file.fileName||null),this._backupActive.set(this.file.backupActive)}scheduleAutosave(){clearTimeout(this.autosaveTimer),this.autosaveTimer=setTimeout(()=>{this.save()},Wo)}async attempt(m){this._error.set(null);try{return await m(),!0}catch(c){return c instanceof DOMException&&c.name===`AbortError`||this._error.set(ur(c,`open`)),!1}}static ɵfac=function(c){return new(c||w)};static ɵprov=L({token:w,factory:w.ɵfac,providedIn:`root`})};var n=class e{storage=p(ot$3);_dark=Z$3(!1);dark=this._dark.asReadonly();constructor(){this.storage.getSettings().then(t=>this.apply(t.theme===`dark`))}toggle(){this.apply(!this._dark()),this.storage.patchSettings({theme:this._dark()?`dark`:`light`})}apply(t){document.documentElement.classList.toggle(`dark-theme`,t),this._dark.set(t)}static ɵfac=function(s){return new(s||e)};static ɵprov=L({token:e,factory:e.ɵfac,providedIn:`root`})};var je$1=Symbol(`FIELD_TREE`);function I$1(i){return typeof i==`function`&&i[je$1]===!0}var fn=new v(``);var ae$2=class{_box;_destroyed=new F$1;_resizeSubject=new F$1;_resizeObserver;_elementObservables=/* @__PURE__ */ new Map;constructor(d){this._box=d,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(d){return this._elementObservables.has(d)||this._elementObservables.set(d,new T$1(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(d,{box:this._box}),()=>{this._resizeObserver?.unobserve(d),t.unsubscribe(),this._elementObservables.delete(d)}}).pipe(V$1(e=>e.filter(t=>t.target===d)),Ne(e=>e.length>0),pw({bufferSize:1,refCount:!0}),Ut$2(this._destroyed))),this._elementObservables.get(d)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var He$1=(()=>{class i{_cleanupErrorListener;_observers=/* @__PURE__ */ new Map;_ngZone=p(Y$2);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let r=t?.box||`content-box`;return this._observers.has(r)||this._observers.set(r,new ae$2(r)),this._observers.get(r).observe(e)}static ɵfac=function(t){return new(t||i)};static ɵprov=S$1({token:i,factory:i.ɵfac})}return i})();var se$1=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵdir=ot$4({type:i,selectors:[[`mat-label`]]})}return i})();var mt$2=new v(`MatError`);var ce$2=(()=>{class i{align=`start`;id=p(Yh).getId(`mat-mdc-hint-`);static ɵfac=function(t){return new(t||i)};static ɵdir=ot$4({type:i,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(t,r){t&2&&(xv(`id`,r.id),Ui$2(`align`,null),Vv(`mat-mdc-form-field-hint-end`,r.align===`end`))},inputs:{align:`align`,id:`id`}})}return i})();var ut$2=new v(`MatPrefix`);var ht$2=new v(`MatSuffix`);var Qe$1=new v(`FloatingLabelParent`);var Ke$1=(()=>{class i{_elementRef=p(Ze$2);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=p(He$1);_ngZone=p(Y$2);_parent=p(Qe$1);_resizeSubscription=new re$1;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return pt$2(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(t){return new(t||i)};static ɵdir=ot$4({type:i,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(t,r){t&2&&Vv(`mdc-floating-label--float-above`,r.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return i})();function pt$2(i){let d=i;if(d.offsetParent!==null)return d.scrollWidth;let e=d.cloneNode(!0);e.style.setProperty(`position`,`absolute`),e.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var Ue$1=`mdc-line-ripple--active`;var j$2=`mdc-line-ripple--deactivating`;var Ge$1=(()=>{class i{_elementRef=p(Ze$2);_cleanupTransitionEnd;constructor(){let e=p(Y$2),t=p(gr);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(j$2),e.add(Ue$1)}deactivate(){this._elementRef.nativeElement.classList.add(j$2)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,r=t.contains(j$2);e.propertyName===`opacity`&&r&&t.remove(Ue$1,j$2)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(t){return new(t||i)};static ɵdir=ot$4({type:i,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return i})();var We$1=(()=>{class i{_elementRef=p(Ze$2);_ngZone=p(Y$2);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(`.mdc-floating-label`);t?(e.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(t.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration=``)}))):e.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width=``:t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${e}px)`)}static ɵfac=function(t){return new(t||i)};static ɵcmp=(function(){let e=[`notch`];return Fi({type:i,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(s,f){if(s&1&&Lv(e,5),s&2){let y;Af(y=Rf())&&(f._notch=y.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(s,f){s&2&&Vv(`mdc-notched-outline--notched`,f.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:[`*`],decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(s,f){s&1&&(aT(),Av(0,`div`,1),Mf(1,`div`,2,0),cT(3),Nf(),Av(4,`div`,3))},encapsulation:2})})()}return i})();var gt$2=(()=>{class i{id;ngField=null;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;stateChanges=null;value;static ɵfac=function(t){return new(t||i)};static ɵdir=ot$4({type:i})}return i})();var bt$2=new v(`MatFormField`);var xt$3=new v(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var $e$1=`fill`;var vt$2=`auto`;var Ye$1=`fixed`;var yt$2=`translateY(-50%)`;var Xe$1=(()=>{class i{_elementRef=p(Ze$2);_changeDetectorRef=p($i$2);_platform=p(Dt$4);_idGenerator=p(Yh);_ngZone=p(Y$2);_defaults=p(xt$3,{optional:!0});_currentDirection;_unwrapMaybeSignal(e){return lr(e)?e():e}_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=G2(`iconPrefixContainer`);_textPrefixContainerSignal=G2(`textPrefixContainer`);_iconSuffixContainerSignal=G2(`iconSuffixContainer`);_textSuffixContainerSignal=G2(`textSuffixContainer`);_prefixSuffixContainers=Ic(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=W2(se$1);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Xq(e)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||vt$2}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||$e$1;this._appearanceSignal.set(t)}_appearanceSignal=Z$3($e$1);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Ye$1}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Ye$1}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new F$1;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Zq();constructor(){let e=this._defaults,t=p(g0);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),yi$1(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=I$1(this._control.ngField)?null:this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&!I$1(this._control.ngField)&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Ic(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(e){let t=this._control,r=`mat-mdc-form-field-type-`;e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(r+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges?.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges?.pipe(Zo([void 0,void 0]),V$1(()=>[this._unwrapMaybeSignal(t.errorState),t.userAriaDescribedBy]),hw(),Ne(([[s,f],[y,R]])=>s!==y||f!==R)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&!I$1(t.ngField)&&(this._valueChanges=t.ngControl.valueChanges.pipe(Ut$2(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),cw(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._unwrapMaybeSignal(this._control.focused);e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,e),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,e)}_syncOutlineLabelOffset(){K2({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Ic(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._shouldAlwaysFloat()||this._unwrapMaybeSignal(this._control.shouldLabelFloat):!1}_shouldForward(e){let t=this._control?.ngField||this._control?.ngControl;if(!t)return!1;if(I$1(t)){let r=t();return e===`valid`?r.valid():e===`dirty`?r.dirty():e===`touched`?r.touched():e===`pending`?r.pending():e===`untouched`?!r.touched():e===`pristine`?!r.dirty():e===`invalid`?!r.valid():!1}else{let r=t;return e===`valid`?r.valid:e===`dirty`?r.dirty:e===`touched`?r.touched:e===`pending`?r.pending:e===`untouched`?r.untouched:e===`pristine`?r.pristine:e===`invalid`?r.invalid:!1}}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._unwrapMaybeSignal(this._control.errorState)?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&e.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let s=this._hintChildren?this._hintChildren.find(y=>y.align===`start`):null,f=this._hintChildren?this._hintChildren.find(y=>y.align===`end`):null;s?e.push(s.id):this._hintLabel&&e.push(this._hintLabelId),f&&e.push(f.id)}else this._errorChildren&&e.push(...this._errorChildren.map(s=>s.id));let t=this._control.describedByIds,r;if(t){let s=this._describedByIds||e;r=e.concat(t.filter(f=>f&&!s.includes(f)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,s=this._textSuffixContainer?.nativeElement,f=e?.getBoundingClientRect().width??0,y=t?.getBoundingClientRect().width??0,R=r?.getBoundingClientRect().width??0,q=s?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${yt$2} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${f+y}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,f+y+R+q]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static ɵfac=function(t){return new(t||i)};static ɵcmp=(function(){let e=[`iconPrefixContainer`],t=[`textPrefixContainer`],r=[`iconSuffixContainer`],s=[`textSuffixContainer`],f=[`textField`],y=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]],R=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function q(o,a){o&1&&yc(0,`span`,21)}function H(o,a){if(o&1&&(rc(0,`label`,20),cT(1,1),HS(2,q,1,0,`span`,21),Tf()),o&2){let n=iT(2);Nv(`floating`,n._shouldLabelFloat())(`monitorResize`,n._hasOutline())(`id`,n._labelId),Ui$2(`for`,n._control.disableAutomaticLabeling?null:n._control.id),GC(2),zS(!n.hideRequiredMarker&&n._unwrapMaybeSignal(n._control.required)?2:-1)}}function K(o,a){if(o&1&&HS(0,H,3,5,`label`,20),o&2){let n=iT();zS(n._hasFloatingLabel()?0:-1)}}function fe(o,a){o&1&&yc(0,`div`,7)}function U(o,a){}function G(o,a){if(o&1&&_v(0,U,0,0,`ng-template`,13),o&2){iT(2);let n=dT(1);Nv(`ngTemplateOutlet`,n)}}function W(o,a){if(o&1&&(rc(0,`div`,9),HS(1,G,1,1,null,13),Tf()),o&2){let n=iT();Nv(`matFormFieldNotchedOutlineOpen`,n._shouldLabelFloat()),GC(),zS(n._forceDisplayInfixLabel()?-1:1)}}function Je(o,a){o&1&&(rc(0,`div`,10,2),cT(2,2),Tf())}function et(o,a){o&1&&(rc(0,`div`,11,3),cT(2,3),Tf())}function tt(o,a){}function nt(o,a){if(o&1&&_v(0,tt,0,0,`ng-template`,13),o&2){iT();let n=dT(1);Nv(`ngTemplateOutlet`,n)}}function it(o,a){o&1&&(rc(0,`div`,14,4),cT(2,4),Tf())}function rt(o,a){o&1&&(rc(0,`div`,15,5),cT(2,5),Tf())}function ot(o,a){o&1&&yc(0,`div`,16)}function at(o,a){o&1&&(rc(0,`div`,18),cT(1,6),Tf())}function lt(o,a){if(o&1&&(rc(0,`mat-hint`,22),OT(1),Tf()),o&2){let n=iT(2);Nv(`id`,n._hintLabelId),GC(),Zv(n.hintLabel)}}function dt(o,a){if(o&1&&(rc(0,`div`,19),HS(1,lt,2,2,`mat-hint`,22),cT(2,7),yc(3,`div`,23),cT(4,8),Tf()),o&2){let n=iT();GC(),zS(n.hintLabel?1:-1)}}return Fi({type:i,selectors:[[`mat-form-field`]],contentQueries:function(a,n,l){if(a&1&&(Pv(l,n._labelChild,se$1,5),Dc(l,gt$2,5)(l,ut$2,5)(l,ht$2,5)(l,mt$2,5)(l,ce$2,5)),a&2){lT();let u;Af(u=Rf())&&(n._formFieldControl=u.first),Af(u=Rf())&&(n._prefixChildren=u),Af(u=Rf())&&(n._suffixChildren=u),Af(u=Rf())&&(n._errorChildren=u),Af(u=Rf())&&(n._hintChildren=u)}},viewQuery:function(a,n){if(a&1&&(Fv(n._iconPrefixContainerSignal,e,5)(n._textPrefixContainerSignal,t,5)(n._iconSuffixContainerSignal,r,5)(n._textSuffixContainerSignal,s,5),Lv(f,5)(e,5)(t,5)(r,5)(s,5)(Ke$1,5)(We$1,5)(Ge$1,5)),a&2){lT(4);let l;Af(l=Rf())&&(n._textField=l.first),Af(l=Rf())&&(n._iconPrefixContainer=l.first),Af(l=Rf())&&(n._textPrefixContainer=l.first),Af(l=Rf())&&(n._iconSuffixContainer=l.first),Af(l=Rf())&&(n._textSuffixContainer=l.first),Af(l=Rf())&&(n._floatingLabel=l.first),Af(l=Rf())&&(n._notchedOutline=l.first),Af(l=Rf())&&(n._lineRipple=l.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(a,n){a&2&&Vv(`mat-mdc-form-field-label-always-float`,n._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,n._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,n._hasIconSuffix)(`mat-form-field-invalid`,n._unwrapMaybeSignal(n._control.errorState))(`mat-form-field-disabled`,n._unwrapMaybeSignal(n._control.disabled))(`mat-form-field-autofilled`,n._unwrapMaybeSignal(n._control.autofilled))(`mat-form-field-appearance-fill`,n.appearance==`fill`)(`mat-form-field-appearance-outline`,n.appearance==`outline`)(`mat-form-field-hide-placeholder`,n._hasFloatingLabel()&&!n._shouldLabelFloat())(`mat-primary`,n.color!==`accent`&&n.color!==`warn`)(`mat-accent`,n.color===`accent`)(`mat-warn`,n.color===`warn`)(`ng-untouched`,n._shouldForward(`untouched`))(`ng-touched`,n._shouldForward(`touched`))(`ng-pristine`,n._shouldForward(`pristine`))(`ng-dirty`,n._shouldForward(`dirty`))(`ng-valid`,n._shouldForward(`valid`))(`ng-invalid`,n._shouldForward(`invalid`))(`ng-pending`,n._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[oD([{provide:bt$2,useExisting:i},{provide:Qe$1,useExisting:i}])],ngContentSelectors:R,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(a,n){if(a&1&&(aT(y),_v(0,K,1,1,`ng-template`,null,0,JT),rc(2,`div`,6,1),vc(`click`,function(u){return n._control.onContainerClick(u)}),HS(4,fe,1,0,`div`,7),rc(5,`div`,8),HS(6,W,2,2,`div`,9),HS(7,Je,3,0,`div`,10),HS(8,et,3,0,`div`,11),rc(9,`div`,12),HS(10,nt,1,1,null,13),cT(11),Tf(),HS(12,it,3,0,`div`,14),HS(13,rt,3,0,`div`,15),Tf(),HS(14,ot,1,0,`div`,16),Tf(),rc(15,`div`,17),HS(16,at,2,0,`div`,18)(17,dt,5,1,`div`,19),Tf()),a&2){let l,u=n._unwrapMaybeSignal(n._control.disabled);GC(2),Vv(`mdc-text-field--filled`,!n._hasOutline())(`mdc-text-field--outlined`,n._hasOutline())(`mdc-text-field--no-label`,!n._hasFloatingLabel())(`mdc-text-field--disabled`,u)(`mdc-text-field--invalid`,n._unwrapMaybeSignal(n._control.errorState)),GC(2),zS(!n._hasOutline()&&!u?4:-1),GC(2),zS(n._hasOutline()?6:-1),GC(),zS(n._hasIconPrefix?7:-1),GC(),zS(n._hasTextPrefix?8:-1),GC(2),zS(!n._hasOutline()||n._forceDisplayInfixLabel()?10:-1),GC(2),zS(n._hasTextSuffix?12:-1),GC(),zS(n._hasIconSuffix?13:-1),GC(),zS(n._hasOutline()?-1:14),GC(),Vv(`mat-mdc-form-field-subscript-dynamic-size`,n.subscriptSizing===`dynamic`);let st=n._getSubscriptMessageType();GC(),zS((l=st)===`error`?16:l===`hint`?17:-1)}},dependencies:[Ke$1,We$1,ZM,Ge$1,ce$2],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})})()}return i})();var $n=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=gt$3({type:i});static ɵinj=Je$1({imports:[pI,Xe$1,i4]})}return i})();var Qn=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}isSignalErrorState(e){if(!e)return!1;let t=e().invalid(),r=e().touched();return t&&r}static ɵfac=function(t){return new(t||i)};static ɵprov=S$1({token:i,factory:i.ɵfac})}return i})();var Ze$1=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(d,e,t,r,s){this._defaultMatcher=d,this._parentFormGroup=t,this._parentForm=r,this._stateChanges=s,e?lr(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let d=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==d&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(d){if(this.formField&&d?.isSignalErrorState)return d.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,t=this.ngControl?this.ngControl.control:null;return d?.isErrorState(t,e)??!1}};var je=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,r){this._renderer=e,this._elementRef=r}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty(`disabled`,e)}static ɵfac=function(r){return new(r||n)(de$2(gr),de$2(Ze$2))};static ɵdir=ot$4({type:n})}return n})();var Ge=(()=>{class n extends je{static ɵfac=(()=>{let e;return function(i){return(e||(e=$m(n)))(i||n)}})();static ɵdir=ot$4({type:n,features:[bv]})}return n})();var Q$1=new v(``);var pt$1={provide:Q$1,useExisting:da$1(()=>ft),multi:!0};var ft=(()=>{class n extends Ge{writeValue(e){this.setProperty(`checked`,e)}static ɵfac=(()=>{let e;return function(i){return(e||(e=$m(n)))(i||n)}})();static ɵdir=ot$4({type:n,selectors:[[`input`,`type`,`checkbox`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`type`,`checkbox`,`formControl`,``,3,`ngNoCva`,``],[`input`,`type`,`checkbox`,`ngModel`,``,3,`ngNoCva`,``]],hostBindings:function(r,i){r&1&&vc(`change`,function(a){return i.onChange(a.target.checked)})(`blur`,function(){return i.onTouched()})},standalone:!1,features:[oD([pt$1]),bv]})}return n})();var gt$1={provide:Q$1,useExisting:da$1(()=>ke),multi:!0};function mt$1(){let n=en$1()?en$1().getUserAgent():``;return/android (\d+)/.test(n.toLowerCase())}var yt$1=new v(``);var ke=(()=>{class n extends je{_compositionMode;_composing=!1;constructor(e,r,i){super(e,r),this._compositionMode=i,this._compositionMode??=!mt$1()}writeValue(e){let r=e??``;this.setProperty(`value`,r)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static ɵfac=function(r){return new(r||n)(de$2(gr),de$2(Ze$2),de$2(yt$1,8))};static ɵdir=ot$4({type:n,selectors:[[`input`,`formControlName`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`formControl`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControl`,``,3,`ngNoCva`,``],[`input`,`ngModel`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`ngModel`,``,3,`ngNoCva`,``],[``,`ngDefaultControl`,``]],hostBindings:function(r,i){r&1&&vc(`input`,function(a){return i._handleInput(a.target.value)})(`blur`,function(){return i.onTouched()})(`compositionstart`,function(){return i._compositionStart()})(`compositionend`,function(a){return i._compositionEnd(a.target.value)})},standalone:!1,features:[oD([gt$1]),bv]})}return n})();function fe$2(n){return n==null||ge$2(n)===0}function ge$2(n){return n==null?null:Array.isArray(n)||typeof n==`string`?n.length:n instanceof Set?n.size:null}var D=new v(``);var I=new v(``);var _t$1=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var de$1=class{static min(t){return vt$1(t)}static max(t){return Ct$1(t)}static required(t){return Be(t)}static requiredTrue(t){return Vt$1(t)}static email(t){return Dt$3(t)}static minLength(t){return At$2(t)}static maxLength(t){return bt$1(t)}static pattern(t){return Mt$2(t)}static nullValidator(t){return H$1()}static compose(t){return We(t)}static composeAsync(t){return ze(t)}};function vt$1(n){return t=>{if(t.value==null||n==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null}}function Ct$1(n){return t=>{if(t.value==null||n==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e>n?{max:{max:n,actual:t.value}}:null}}function Be(n){return fe$2(n.value)?{required:!0}:null}function Vt$1(n){return n.value===!0?null:{required:!0}}function Dt$3(n){return fe$2(n.value)||_t$1.test(n.value)?null:{email:!0}}function At$2(n){return t=>{let e=t.value?.length??ge$2(t.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function bt$1(n){return t=>{let e=t.value?.length??ge$2(t.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function Mt$2(n){if(!n)return H$1;let t,e;return typeof n==`string`?(e=``,n.charAt(0)!==`^`&&(e+=`^`),e+=n,n.charAt(n.length-1)!==`$`&&(e+=`$`),t=new RegExp(e)):(e=n.toString(),t=n),r=>{if(fe$2(r.value))return null;let i=r.value;return t.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}function H$1(n){return null}function Le(n){return n!=null}function Ue(n){return mo(n)?oe$1(n):n}function He(n){let t={};return n.forEach(e=>{t=e!=null?r(r({},t),e):t}),Object.keys(t).length===0?null:t}function $e(n,t){return t.map(e=>e(n))}function Et$1(n){return!n.validate}function qe(n){return n.map(t=>Et$1(t)?t:e=>t.validate(e))}function We(n){if(!n)return null;let t=n.filter(Le);return t.length==0?null:function(e){return He($e(e,t))}}function me$1(n){return n!=null?We(qe(n)):null}function ze(n){if(!n)return null;let t=n.filter(Le);return t.length==0?null:function(e){let r=$e(e,t).map(Ue);return sw(r).pipe(V$1(He))}}function ye$1(n){return n!=null?ze(qe(n)):null}function Se$1(n,t){return n===null?[t]:Array.isArray(n)?[...n,t]:[n,t]}function Ye(n){return n._rawValidators}function Xe(n){return n._rawAsyncValidators}function ce$1(n){return n?Array.isArray(n)?n:[n]:[]}function $(n,t){return Array.isArray(n)?n.includes(t):n===t}function Fe(n,t){let e=ce$1(t);return ce$1(n).forEach(i=>{$(e,i)||e.push(i)}),e}function Oe(n,t){return ce$1(t).filter(e=>!$(n,e))}var q=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=me$1(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=ye$1(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control?.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}};var d=class extends q{name;get formDirective(){return null}get path(){return null}};var w$1=`VALID`;var U=`INVALID`;var M=`PENDING`;var R=`DISABLED`;var y=class{};var W$2=class extends y{value;source;constructor(t,e){super(),this.value=t,this.source=e}};var T=class extends y{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}};var P=class extends y{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}};var E=class extends y{status;source;constructor(t,e){super(),this.status=t,this.source=e}};var z=class extends y{source;constructor(t){super(),this.source=t}};var N=class extends y{source;constructor(t){super(),this.source=t}};function Ze(n){return(J$1(n)?n.validators:n)||null}function Nt$1(n){return Array.isArray(n)?me$1(n):n||null}function Ke(n,t){return(J$1(t)?t.asyncValidators:n)||null}function It$2(n){return Array.isArray(n)?ye$1(n):n||null}function J$1(n){return n!=null&&!Array.isArray(n)&&typeof n==`object`}function St$3(n,t,e){let r=n.controls;if(!(t?Object.keys(r):r).length)throw new y$1(1e3,``);if(!Qe(r,e))throw new y$1(1001,``)}function Ft(n,t,e){n._forEachChild((r,i)=>{if(e[i]===void 0)throw new y$1(-1002,``)})}var Y$1=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=Z$3(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return J$2(this.statusReactive)}set status(t){J$2(()=>this.statusReactive.set(t))}_status=Ic(()=>this.statusReactive());statusReactive=Z$3(void 0);get valid(){return this.status===w$1}get invalid(){return this.status===U}get pending(){return this.status===M}get disabled(){return this.status===R}get enabled(){return this.status!==R}errors;get pristine(){return J$2(this.pristineReactive)}set pristine(t){J$2(()=>this.pristineReactive.set(t))}_pristine=Ic(()=>this.pristineReactive());pristineReactive=Z$3(!0);get dirty(){return!this.pristine}get touched(){return J$2(this.touchedReactive)}set touched(t){J$2(()=>this.touchedReactive.set(t))}_touched=Ic(()=>this.touchedReactive());touchedReactive=Z$3(!1);get untouched(){return!this.touched}_events=new F$1;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:`change`}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Fe(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Fe(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Oe(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Oe(t,this._rawAsyncValidators))}hasValidator(t){return $(this._rawValidators,t)}hasAsyncValidator(t){return $(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let r$4=t.sourceControl??this;t.onlySelf||this._parent?.markAsTouched(s(r({},t),{sourceControl:r$4})),e&&t.emitEvent!==!1&&this._events.next(new P(!0,r$4))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let r=t.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:r})}),t.onlySelf||this._parent?._updateTouched(t,r),e&&t.emitEvent!==!1&&this._events.next(new P(!1,r))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let r$5=t.sourceControl??this;t.onlySelf||this._parent?.markAsDirty(s(r({},t),{sourceControl:r$5})),e&&t.emitEvent!==!1&&this._events.next(new T(!1,r$5))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let r=t.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),t.onlySelf||this._parent?._updatePristine(t,r),e&&t.emitEvent!==!1&&this._events.next(new T(!0,r))}markAsPending(t={}){this.status=M;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new E(this.status,e)),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.markAsPending(s(r({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=R,this.errors=null,this._forEachChild(i=>{i.disable(s(r({},t),{onlySelf:!0}))}),this._updateValue();let r$6=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new W$2(this.value,r$6)),this._events.next(new E(this.status,r$6)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(s(r({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=w$1,this._forEachChild(r$7=>{r$7.enable(s(r({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(s(r({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t,e){t.onlySelf||(this._parent?.updateValueAndValidity(t),t.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let r=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===w$1||this.status===M)&&this._runAsyncValidator(r,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new W$2(this.value,e)),this._events.next(new E(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.updateValueAndValidity(s(r({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?R:w$1}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=M,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:t!==!1};let r=Ue(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(`.`)),e.length===0)?null:e.reduce((r,i)=>r&&r._find(i),this)}getError(t,e){let r=e?this.get(e):this;return r?.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,r){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||r)&&this._events.next(new E(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,r)}_initObservables(){this.valueChanges=new De,this.statusChanges=new De}_calculateStatus(){return this._allControlsDisabled()?R:this.errors?U:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(M)?M:this._anyControlsHaveStatus(U)?U:w$1}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let r=!this._anyControlsDirty(),i=this.pristine!==r;this.pristine=r,t.onlySelf||this._parent?._updatePristine(t,e),i&&this._events.next(new T(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new P(this.touched,e)),t.onlySelf||this._parent?._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){J$1(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=Nt$1(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=It$2(this._rawAsyncValidators)}_updateHasRequiredValidator(){J$2(()=>this._hasRequired.set(this.hasValidator(de$1.required)))}};function Qe(n,t){return Object.hasOwn(n,t)}function Ot$2(n){return n.tagName===`INPUT`||n.tagName===`SELECT`||n.tagName===`TEXTAREA`}function wt$3(n,t,e,r){switch(e){case`name`:n.setAttribute(t,e,r);break;case`disabled`:case`readonly`:case`required`:r?n.setAttribute(t,e,``):n.removeAttribute(t,e);break;case`max`:case`min`:case`minLength`:case`maxLength`:r!==void 0?n.setAttribute(t,e,r.toString()):n.removeAttribute(t,e)}}var he$2=class{kind;context;control;message;constructor({kind:t,context:e,control:r}){this.kind=t,this.context=e,this.control=r}};var Rt$2=(()=>{class n{_validator=H$1;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let r=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):H$1,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static ɵfac=function(r){return new(r||n)};static ɵdir=ot$4({type:n,features:[Yt$1]})}return n})();var xt$2={provide:D,useExisting:da$1(()=>Je),multi:!0};var Je=(()=>{class n extends Rt$2{required;inputName=`required`;normalizeInput=zi$2;createValidator=e=>Be;enabled(e){return e}static ɵfac=(()=>{let e;return function(i){return(e||(e=$m(n)))(i||n)}})();static ɵdir=ot$4({type:n,selectors:[[``,`required`,``,`formControlName`,``,3,`type`,`checkbox`],[``,`required`,``,`formControl`,``,3,`type`,`checkbox`],[``,`required`,``,`ngModel`,``,3,`type`,`checkbox`]],hostVars:1,hostBindings:function(r,i){r&2&&Ui$2(`required`,i._enabled?``:null)},inputs:{required:`required`},standalone:!1,features:[oD([xt$2]),bv]})}return n})();var Tt$1=new v(``);var G=new v(``,{factory:()=>ee$1});var ee$1=`always`;function te$1(n,t){return[...t.path,n]}function pe$1(n,t,e=ee$1){_e$2(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||e===`always`)&&t.valueAccessor.setDisabledState?.(n.disabled),jt(n,t),kt$3(n,t),Gt$2(n,t),Pt$2(n,t)}function we$1(n,t,e=!0){let r=()=>{};t?.valueAccessor?.registerOnChange(r),t?.valueAccessor?.registerOnTouched(r),Z$2(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function X$2(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function Pt$2(n,t){if(t.valueAccessor.setDisabledState){let e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function _e$2(n,t){let e=Ye(n);t.validator!==null?n.setValidators(Se$1(e,t.validator)):typeof e==`function`&&n.setValidators([e]);let r=Xe(n);t.asyncValidator!==null?n.setAsyncValidators(Se$1(r,t.asyncValidator)):typeof r==`function`&&n.setAsyncValidators([r]);let i=()=>n.updateValueAndValidity();X$2(t._rawValidators,i),X$2(t._rawAsyncValidators,i)}function Z$2(n,t){let e=!1;if(n!==null){if(t.validator!==null){let i=Ye(n);if(Array.isArray(i)&&i.length>0){let o=i.filter(a=>a!==t.validator);o.length!==i.length&&(e=!0,n.setValidators(o))}}if(t.asyncValidator!==null){let i=Xe(n);if(Array.isArray(i)&&i.length>0){let o=i.filter(a=>a!==t.asyncValidator);o.length!==i.length&&(e=!0,n.setAsyncValidators(o))}}}let r=()=>{};return X$2(t._rawValidators,r),X$2(t._rawAsyncValidators,r),e}function jt(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn===`change`&&et$1(n,t)})}function Gt$2(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn===`blur`&&n._pendingChange&&et$1(n,t),n.updateOn!==`submit`&&n.markAsTouched()})}function et$1(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function kt$3(n,t){let e=(r,i)=>{t.valueAccessor.writeValue(r),i&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function tt$3(n,t){_e$2(n,t)}function Bt$1(n,t){return Z$2(n,t)}function nt$2(n,t){if(!Object.hasOwn(n,`model`))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(t,e.currentValue)}function Lt(n){return Object.getPrototypeOf(n.constructor)===Ge}function rt$2(n,t){n._syncPendingControls(),t.forEach(e=>{let r=e.control;r.updateOn===`submit`&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}function Ut$1(n,t){if(!t)return null;let e,r,i;return t.forEach(o=>{o.constructor===ke?e=o:Lt(o)?r=o:i=o}),i||r||e||null}function Ht(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}var it$2={provide:Tt$1,useFactory:()=>{let n=p(_,{self:!0});return{setParseErrors:t=>{n.setParseErrorSource(t)},set onReset(t){n.onReset=t}}}};var _=class extends q{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(t){this.userOnReset=t,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof N&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=Ut$1(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;pendingCustomValue=void 0;hasPendingCustomValue=!1;constructor(t,e,r){super(),this.injector=t,this.renderer=e,this.rawValueAccessors=r,this.injector?.get(be$1)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let t=this.control,e=this.injector?.get($i$2);if(!t||!e)return;let r=e.markForCheck.bind(e);if(this.subscription=new re$1,this.subscription.add(()=>this.discardPendingCustomValue(t)),typeof t.registerOnChange==`function`){let i=(o,a)=>{this.discardPendingCustomValue(t),a&&this.viewToModelUpdate(o),r()};t.registerOnChange(i),this.subscription.add(()=>t._unregisterOnChange(i))}this.subscription.add(t.valueChanges.subscribe(r)),this.subscription.add(t.statusChanges.subscribe(r)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=t.events.subscribe(i=>{i instanceof N&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&t.addValidators(this.parseErrorsValidator)}ngControlCreate(t){!t.nativeElement.hasAttribute?.(`ngNoCva`)&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!t.customControl||(this.isCustomControlBased=!0,t.listenToCustomControlModel(i=>{let o=this.control;o&&(o._pendingValue=i,o._pendingChange=!0,o._pendingDirty=!0,this.pendingCustomValue=i,this.hasPendingCustomValue=!0,o.updateOn===`change`&&this.updateControlFromCustom(o))}),t.listenToCustomControlOutput(`touch`,()=>{let i=this.control;i&&(i._pendingTouched=!0,i.updateOn===`blur`&&i._pendingChange&&this.updateControlFromCustom(i),i.updateOn!==`submit`&&i.markAsTouched())}),this.customControlBindings={},this.isNativeFormElement=Ot$2(t.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(i=>i instanceof Je))}updateControlFromCustom(t){let e=t._pendingValue;t._pendingChange=!1,this.clearPendingCustomValue(),this.customControlBindings&&(this.customControlBindings.value=e),t._pendingDirty&&t.markAsDirty(),t.setValue(e,{emitModelToViewChange:!1}),this.viewToModelUpdate(t.value)}discardPendingCustomValue(t){this.hasPendingCustomValue&&(this.customControlBindings&&(this.customControlBindings.value=this.pendingCustomValue),this.clearPendingCustomValue(),t._pendingValue=t.value,t._pendingChange=!1,t._pendingDirty=!1)}clearPendingCustomValue(){this.pendingCustomValue=void 0,this.hasPendingCustomValue=!1}ngControlUpdate(t,e){if(!this.isCustomControlBased)return;let r=this.control,i=this.customControlBindings;if(!r||!i)return;this.hasPendingCustomValue&&!r._pendingChange&&(i.value=this.pendingCustomValue,this.clearPendingCustomValue()),Object.is(i.value,r.value)||(this.discardPendingCustomValue(r),i.value=r.value,t.setCustomControlModelInput(r.value)),this.bindControlProperty(t,i,`touched`,r.touched),this.bindControlProperty(t,i,`dirty`,r.dirty),this.bindControlProperty(t,i,`valid`,r.valid),this.bindControlProperty(t,i,`invalid`,r.invalid),this.bindControlProperty(t,i,`pending`,r.pending),this.bindControlProperty(t,i,`disabled`,r.disabled),this.shouldBindRequired&&this.bindControlProperty(t,i,`required`,this.isRequired);let o=r.errors;if(i.errors!==o){i.errors=o;let a=this._convertErrors(o);t.setInputOnDirectives(`errors`,a)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(t,e,r,i){if(e[r]===i)return;e[r]=i;let o=t.setInputOnDirectives(r,i);this.isNativeFormElement&&!o&&(r===`disabled`||r===`required`)&&this.renderer&&wt$3(this.renderer,t.nativeElement,r,i)}_convertErrors(t){if(t===null)return[];let e=this.control;return Object.entries(t).map(([r,i])=>new he$2({context:i,kind:r,control:e}))}setParseErrorSource(t){if(t===void 0)return;let e=null,r=Ic(()=>{let i=t();return i.length===0?null:i.reduce((o,a)=>(o[a.kind]=a,o),{})});this.parseErrorsValidator=(()=>e).bind(this),yi$1(()=>{e=r(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(t){this.parseErrorsValidator&&(t?.removeValidators(this.parseErrorsValidator),t?.updateValueAndValidity({emitEvent:!1}))}};var K$1=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Mn=(()=>{class n extends K$1{constructor(e){super(e)}static ɵfac=function(r){return new(r||n)(de$2(_,2))};static ɵdir=ot$4({type:n,selectors:[[``,`formControlName`,``],[``,`ngModel`,``],[``,`formControl`,``]],hostVars:14,hostBindings:function(r,i){r&2&&Vv(`ng-untouched`,i.isUntouched)(`ng-touched`,i.isTouched)(`ng-pristine`,i.isPristine)(`ng-dirty`,i.isDirty)(`ng-valid`,i.isValid)(`ng-invalid`,i.isInvalid)(`ng-pending`,i.isPending)},standalone:!1,features:[bv]})}return n})();var En=(()=>{class n extends K$1{constructor(e){super(e)}static ɵfac=function(r){return new(r||n)(de$2(d,10))};static ɵdir=ot$4({type:n,selectors:[[``,`formGroupName`,``],[``,`formArrayName`,``],[``,`ngModelGroup`,``],[``,`formGroup`,``],[``,`formArray`,``],[`form`,3,`ngNoForm`,``],[``,`ngForm`,``]],hostVars:16,hostBindings:function(r,i){r&2&&Vv(`ng-untouched`,i.isUntouched)(`ng-touched`,i.isTouched)(`ng-pristine`,i.isPristine)(`ng-dirty`,i.isDirty)(`ng-valid`,i.isValid)(`ng-invalid`,i.isInvalid)(`ng-pending`,i.isPending)(`ng-submitted`,i.isSubmitted)},standalone:!1,features:[bv]})}return n})();var j$1=class extends Y$1{constructor(t,e,r){super(Ze(e),Ke(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(t,e){return this._find(t)||(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,r={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){let r=this._find(t);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,r={}){let i=this._find(t);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this._find(t)?.enabled===!0}setValue(t,e={}){J$2(()=>{Ft(this,!0,t),Object.keys(t).forEach(r=>{St$3(this,!0,r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(r=>{let i=this._find(r);i&&i.patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r$8,i)=>{r$8.reset(t?t[i]:null,s(r({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new N(this))}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>r._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,r]of Object.entries(this.controls))if(this.contains(e)&&t(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,r,i)=>((r.enabled||this.disabled)&&(e[i]=r.value),e))}_reduceChildren(t,e){let r=t;return this._forEachChild((i,o)=>{r=e(r,i,o)}),r}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return Qe(this.controls,t)?this.controls[t]:null}};var Re=class extends j$1{};var $t$1={provide:d,useExisting:da$1(()=>qt$1)};var x=Promise.resolve();var qt$1=(()=>{class n extends d{callSetDisabledState;get submitted(){return J$2(this.submittedReactive)}_submitted=Ic(()=>this.submittedReactive());submittedReactive=Z$3(!1);_directives=/* @__PURE__ */ new Set;form;ngSubmit=new De;options;constructor(e,r,i){super(),this.callSetDisabledState=i,this.form=new j$1({},me$1(e),ye$1(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){x.then(()=>{e.control=this._findContainer(e.path).registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){x.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){x.then(()=>{let r=this._findContainer(e.path),i=new j$1({});tt$3(i,e),r.registerControl(e.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){x.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,r){x.then(()=>{this.form.get(e.path).setValue(r)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),rt$2(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new z(this.control)),e?.target?.method===`dialog`}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static ɵfac=function(r){return new(r||n)(de$2(D,10),de$2(I,10),de$2(G,8))};static ɵdir=ot$4({type:n,selectors:[[`form`,3,`ngNoForm`,``,3,`formGroup`,``,3,`formArray`,``],[`ng-form`],[``,`ngForm`,``]],hostBindings:function(r,i){r&1&&vc(`submit`,function(a){return i.onSubmit(a)})(`reset`,function(){return i.onReset()})},inputs:{options:[0,`ngFormOptions`,`options`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[oD([$t$1]),bv]})}return n})();function xe(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}function Te$1(n){return typeof n==`object`&&n!==null&&Object.keys(n).length===2&&`value`in n&&`disabled`in n}var ot$2=class extends Y$1{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,r){super(Ze(e),Ke(r,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),J$1(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Te$1(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){J$2(()=>{this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(r=>r(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new N(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){xe(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){xe(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn===`submit`&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){Te$1(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var Wt=n=>n instanceof ot$2;var zt$1=(()=>{class n extends d{_parent;ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective?.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return te$1(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}static ɵfac=(()=>{let e;return function(i){return(e||(e=$m(n)))(i||n)}})();static ɵdir=ot$4({type:n,standalone:!1,features:[bv]})}return n})();var st$2=(()=>{class n extends d{callSetDisabledState;get submitted(){return J$2(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Ic(()=>this._submittedReactive());_submittedReactive=Z$3(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,r,i){super(),this.callSetDisabledState=i,this._setValidators(e),this._setAsyncValidators(r)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){if(!this.form)throw new y$1(1052,!1);Object.hasOwn(e,`form`)&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Z$2(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let r=this.form.get(e.path);if(!r)throw new y$1(-1055,!1);return e._setupWithForm(r,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),r}getControl(e){return this.form.get(e.path)}removeControl(e){we$1(e.control||null,e,!1),Ht(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,r){this.form.get(e.path).setValue(r)}onReset(){this.resetForm()}resetForm(e=void 0,r={}){this.form.reset(e,r),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,rt$2(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new z(this.control)),e?.target?.method===`dialog`}_updateDomValue(){this.directives.forEach(e=>{let r=e.control,i=this.form.get(e.path);r!==i&&(we$1(r||null,e),Wt(i)&&e._setupWithForm(i,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let r=this.form.get(e.path);tt$3(r,e),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let r=this.form?.get(e.path);r&&Bt$1(r,e)&&r.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){_e$2(this.form,this),this._oldForm&&Z$2(this._oldForm,this)}static ɵfac=function(r){return new(r||n)(de$2(D,10),de$2(I,10),de$2(G,8))};static ɵdir=ot$4({type:n,features:[bv,Yt$1]})}return n})();var Yt={provide:d,useExisting:da$1(()=>Xt)};var Xt=(()=>{class n extends st$2{form=null;ngSubmit=new De;get control(){return this.form}static ɵfac=(()=>{let e;return function(i){return(e||(e=$m(n)))(i||n)}})();static ɵdir=ot$4({type:n,selectors:[[``,`formGroup`,``]],hostBindings:function(r,i){r&1&&vc(`submit`,function(a){return i.onSubmit(a)})(`reset`,function(){return i.onReset()})},inputs:{form:[0,`formGroup`,`form`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[oD([Yt]),bv]})}return n})();var Zt$1={provide:_,useExisting:da$1(()=>Kt$1)};var Pe=Promise.resolve();var Kt$1=(()=>{class n extends _{_changeDetectorRef;callSetDisabledState;control=new ot$2;static ngAcceptInputType_isDisabled;_registered=!1;_ngModelInjector;viewModel;name=``;isDisabled;model;options;update=new De;constructor(e,r,i,o,a,ne,re,ht){super(re,ht,o),this._changeDetectorRef=a,this.callSetDisabledState=ne,this._parent=e,this._setValidators(r),this._setAsyncValidators(i)}ngOnChanges(e){if(this._registered,this._checkForErrors(),!this._registered||`name`in e){if(this._registered&&(this._checkName(),this.formDirective)){let r=e.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}`isDisabled`in e&&this._updateDisabled(e),nt$2(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}ɵngControlCreate(e){super.ngControlCreate(e)}ɵngControlUpdate(e){super.ngControlUpdate(e,!1)}get shouldBindRequired(){return!1}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,pe$1(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(e){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,pe$1(this.control,this,e))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Pe.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let r=e.isDisabled.currentValue,i=r!==0&&zi$2(r);Pe.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?te$1(e,this._parent):[e]}static ɵfac=function(r){return new(r||n)(de$2(d,9),de$2(D,10),de$2(I,10),de$2(Q$1,10),de$2($i$2,8),de$2(G,8),de$2(ae$3,8),de$2(gr,8))};static ɵdir=ot$4({type:n,selectors:[[``,`ngModel`,``,3,`formControlName`,``,3,`formControl`,``]],inputs:{name:`name`,isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`],options:[0,`ngModelOptions`,`options`]},outputs:{update:`ngModelChange`},exportAs:[`ngModel`],standalone:!1,features:[oD([Zt$1,it$2]),bv,Yt$1,SS(null)]})}return n})();var In=(()=>{class n{static ɵfac=function(r){return new(r||n)};static ɵdir=ot$4({type:n,selectors:[[`form`,3,`ngNoForm`,``,3,`ngNativeValidate`,``]],hostAttrs:[`novalidate`,``],standalone:!1})}return n})();var at$2=new v(``);var Qt$1={provide:d,useExisting:da$1(()=>lt$2)};var lt$2=(()=>{class n extends zt$1{name=null;constructor(e,r,i){super(),this._parent=e,this._setValidators(r),this._setAsyncValidators(i)}_checkParentType(){dt$1(this._parent)}static ɵfac=function(r){return new(r||n)(de$2(d,13),de$2(D,10),de$2(I,10))};static ɵdir=ot$4({type:n,selectors:[[``,`formGroupName`,``]],inputs:{name:[0,`formGroupName`,`name`]},standalone:!1,features:[oD([Qt$1]),bv]})}return n})();var Jt$1={provide:d,useExisting:da$1(()=>ut$1)};var ut$1=(()=>{class n extends d{_parent;name=null;constructor(e,r,i){super(),this._parent=e,this._setValidators(r),this._setAsyncValidators(i)}ngOnInit(){dt$1(this._parent),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective?.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return te$1(this.name==null?this.name:this.name.toString(),this._parent)}static ɵfac=function(r){return new(r||n)(de$2(d,13),de$2(D,10),de$2(I,10))};static ɵdir=ot$4({type:n,selectors:[[``,`formArrayName`,``]],inputs:{name:[0,`formArrayName`,`name`]},standalone:!1,features:[oD([Jt$1]),bv]})}return n})();function dt$1(n){return!(n instanceof lt$2)&&!(n instanceof st$2)&&!(n instanceof ut$1)}var en={provide:_,useExisting:da$1(()=>tn)};var tn=(()=>{class n extends _{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new De;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,r,i,o,a,ne,re){super(re,ne,o),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(r),this._setAsyncValidators(i)}_setupWithForm(e,r){this.control=e,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,pe$1(e,this,r))}ngOnChanges(e){this._added||this._setUpControl(),nt$2(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return te$1(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}ɵngControlCreate(e){super.ngControlCreate(e)}ɵngControlUpdate(e){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(e,!0))}static ɵfac=function(r){return new(r||n)(de$2(d,13),de$2(D,10),de$2(I,10),de$2(Q$1,10),de$2(at$2,8),de$2(gr,8),de$2(ae$3,8))};static ɵdir=ot$4({type:n,selectors:[[``,`formControlName`,``]],inputs:{name:[0,`formControlName`,`name`],isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`]},outputs:{update:`ngModelChange`},standalone:!1,features:[oD([en,it$2]),bv,Yt$1,SS(null)]})}return n})();var ct=(()=>{class n{static ɵfac=function(r){return new(r||n)};static ɵmod=gt$3({type:n});static ɵinj=Je$1({})}return n})();var Sn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:G,useValue:e.callSetDisabledState??ee$1}]}}static ɵfac=function(r){return new(r||n)};static ɵmod=gt$3({type:n});static ɵinj=Je$1({imports:[ct]})}return n})();var Fn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:at$2,useValue:e.warnOnNgModelWithFormControl??`always`},{provide:G,useValue:e.callSetDisabledState??ee$1}]}}static ɵfac=function(r){return new(r||n)};static ɵmod=gt$3({type:n});static ɵinj=Je$1({imports:[ct]})}return n})();var c=(function(e){return e[e.FADING_IN=0]=`FADING_IN`,e[e.VISIBLE=1]=`VISIBLE`,e[e.FADING_OUT=2]=`FADING_OUT`,e[e.HIDDEN=3]=`HIDDEN`,e})(c||{});var X$1=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=c.HIDDEN;constructor(a,t,n,o=!1){this._renderer=a,this.element=t,this.config=n,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}};var vt=Hh({passive:!0,capture:!0});var J=class{_events=/* @__PURE__ */ new Map;addHandler(a,t,n,o){let r=this._events.get(t);if(r){let s=r.get(n);s?s.add(o):r.set(n,/* @__PURE__ */ new Set([o]))}else this._events.set(t,/* @__PURE__ */ new Map([[n,/* @__PURE__ */ new Set([o])]])),a.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,vt)})}removeHandler(a,t,n){let o=this._events.get(a);if(!o)return;let r=o.get(t);r&&(r.delete(n),r.size===0&&o.delete(t),o.size===0&&(this._events.delete(a),document.removeEventListener(a,this._delegateEventHandler,vt)))}_delegateEventHandler=a=>{let t=Nr(a);t&&this._events.get(a.type)?.forEach((n,o)=>{(o===t||o.contains(t))&&n.forEach(r=>r.handleEvent(a))})}};var S={enterDuration:225,exitDuration:150};var zt=800;var ht$1=Hh({passive:!0,capture:!0});var gt=[`mousedown`,`touchstart`];var yt=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var Pt$1=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵcmp=Fi({type:e,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(n,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return e})();var w=class e{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=/* @__PURE__ */ new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new J;constructor(a,t,n,o,r){this._target=a,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=ws(n)),r&&r.get(Es).load(Pt$1)}fadeInRipple(a,t,n={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r$3=r(r({},S),n.animation);n.centered&&(a=o.left+o.width/2,t=o.top+o.height/2);let s=n.radius||It$1(a,t,o),l=a-o.left,z=t-o.top,p=r$3.enterDuration,m=document.createElement(`div`);m.classList.add(`mat-ripple-element`),m.style.left=`${l-s}px`,m.style.top=`${z-s}px`,m.style.height=`${s*2}px`,m.style.width=`${s*2}px`,n.color!=null&&(m.style.backgroundColor=n.color),m.style.transitionDuration=`${p}ms`,this._containerElement.appendChild(m);let nt=window.getComputedStyle(m),Et=nt.transitionProperty,at=nt.transitionDuration,G=Et===`none`||at===`0s`||at===`0s, 0s`||o.width===0&&o.height===0,f=new X$1(this,m,n,G);m.style.transform=`scale3d(1, 1, 1)`,f.state=c.FADING_IN,n.persistent||(this._mostRecentTransientRipple=f);let P=null;return!G&&(p||r$3.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let et=()=>{P&&(P.fallbackTimer=null),clearTimeout(ot),this._finishRippleTransition(f)},Y=()=>this._destroyRipple(f),ot=setTimeout(Y,p+100);m.addEventListener(`transitionend`,et),m.addEventListener(`transitioncancel`,Y),P={onTransitionEnd:et,onTransitionCancel:Y,fallbackTimer:ot}}),this._activeRipples.set(f,P),(G||!p)&&this._finishRippleTransition(f),f}fadeOutRipple(a){if(a.state===c.FADING_OUT||a.state===c.HIDDEN)return;let t=a.element,n=r(r({},S),a.config.animation);t.style.transitionDuration=`${n.exitDuration}ms`,t.style.opacity=`0`,a.state=c.FADING_OUT,(a._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(a)}fadeOutAll(){this._getActiveRipples().forEach(a=>a.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(a=>{a.config.persistent||a.fadeOut()})}setupTriggerEvents(a){let t=ws(a);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,gt.forEach(n=>{e._eventManager.addHandler(this._ngZone,n,t,this)}))}handleEvent(a){a.type===`mousedown`?this._onMousedown(a):a.type===`touchstart`?this._onTouchStart(a):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{yt.forEach(t=>{this._triggerElement.addEventListener(t,this,ht$1)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(a){a.state===c.FADING_IN?this._startFadeOutTransition(a):a.state===c.FADING_OUT&&this._destroyRipple(a)}_startFadeOutTransition(a){let t=a===this._mostRecentTransientRipple,{persistent:n}=a.config;a.state=c.VISIBLE,!n&&(!t||!this._isPointerDown)&&a.fadeOut()}_destroyRipple(a){let t=this._activeRipples.get(a)??null;this._activeRipples.delete(a),this._activeRipples.size||(this._containerRect=null),a===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),a.state=c.HIDDEN,t!==null&&(a.element.removeEventListener(`transitionend`,t.onTransitionEnd),a.element.removeEventListener(`transitioncancel`,t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),a.element.remove()}_onMousedown(a){let t=Fh(a),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+zt;!this._target.rippleDisabled&&!t&&!n&&(this._isPointerDown=!0,this.fadeInRipple(a.clientX,a.clientY,this._target.rippleConfig))}_onTouchStart(a){if(!this._target.rippleDisabled&&!jh(a)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=a.changedTouches;if(t)for(let n=0;n<t.length;n++)this.fadeInRipple(t[n].clientX,t[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(a=>{let t=a.state===c.VISIBLE||a.config.terminateOnPointerUp&&a.state===c.FADING_IN;!a.config.persistent&&t&&a.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let a=this._triggerElement;a&&(gt.forEach(t=>e._eventManager.removeHandler(t,a,this)),this._pointerUpEventsRegistered&&(yt.forEach(t=>a.removeEventListener(t,this,ht$1)),this._pointerUpEventsRegistered=!1))}};function It$1(e,a,t){let n=Math.max(Math.abs(e-t.left),Math.abs(e-t.right)),o=Math.max(Math.abs(a-t.top),Math.abs(a-t.bottom));return Math.sqrt(n*n+o*o)}var K=new v(`mat-ripple-global-options`);var Gt$1=(()=>{class e{_elementRef=p(Ze$2);_animationsDisabled=Zq();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=p(Y$2),n=p(Dt$4),o=p(K,{optional:!0}),r=p(ae$3);this._globalOptions=o||{},this._rippleRenderer=new w(this,t,this._elementRef,n,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:r(r(r({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,n=0,o){return typeof t==`number`?this._rippleRenderer.fadeInRipple(t,n,r(r({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,r(r({},this.rippleConfig),t))}static ɵfac=function(n){return new(n||e)};static ɵdir=ot$4({type:e,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(n,o){n&2&&Vv(`mat-ripple-unbounded`,o.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return e})();var Mt$1={capture:!0};var Dt$2=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var Q=`mat-ripple-loader-uninitialized`;var W$1=`mat-ripple-loader-class-name`;var xt$1=`mat-ripple-loader-centered`;var Z$1=`mat-ripple-loader-disabled`;var _t=(()=>{class e{_document=p(j$3);_animationsDisabled=Zq();_globalRippleOptions=p(K,{optional:!0});_platform=p(Dt$4);_ngZone=p(Y$2);_injector=p(ae$3);_eventCleanups;_hosts=/* @__PURE__ */ new Map;constructor(){let t=p(Kt$2).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Dt$2.map(n=>t.listen(this._document,n,this._onInteraction,Mt$1)))}ngOnDestroy(){let t=this._hosts.keys();for(let n of t)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(t,n){t.setAttribute(Q,this._globalRippleOptions?.namespace??``),(n.className||!t.hasAttribute(W$1))&&t.setAttribute(W$1,n.className||``),n.centered&&t.setAttribute(xt$1,``),n.disabled&&t.setAttribute(Z$1,``)}setDisabled(t,n){let o=this._hosts.get(t);o?(o.target.rippleDisabled=n,!n&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(t))):n?t.setAttribute(Z$1,``):t.removeAttribute(Z$1)}_onInteraction=t=>{let n=Nr(t);if(n instanceof HTMLElement){let o=n.closest(`[${Q}="${this._globalRippleOptions?.namespace??``}"]`);o&&this._createRipple(o)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(`.mat-ripple`)?.remove();let n=this._document.createElement(`span`);n.classList.add(`mat-ripple`,t.getAttribute(W$1)),t.append(n);let o=this._globalRippleOptions,r=this._animationsDisabled?0:o?.animation?.enterDuration??S.enterDuration,s=this._animationsDisabled?0:o?.animation?.exitDuration??S.exitDuration,l={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute(Z$1),rippleConfig:{centered:t.hasAttribute(xt$1),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:s}}},z=new w(l,this._ngZone,n,this._platform,this._injector),p=!l.rippleDisabled;p&&z.setupTriggerEvents(t),this._hosts.set(t,{target:l,renderer:z,hasSetUpEvents:p}),t.removeAttribute(Q)}destroyRipple(t){let n=this._hosts.get(t);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(t))}static ɵfac=function(n){return new(n||e)};static ɵprov=S$1({token:e,factory:e.ɵfac})}return e})();var Nt=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵcmp=Fi({type:e,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(n,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return e})();var At$1=new v(`MAT_BUTTON_CONFIG`);function St$2(e){return e==null?void 0:Z2(e)}var tt$2=(()=>{class e{_elementRef=p(Ze$2);_ngZone=p(Y$2);_animationsDisabled=Zq();_config=p(At$1,{optional:!0});_focusMonitor=p($R);_cleanupClick;_renderer=p(gr);_rippleLoader=p(_t);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=Cc(!1,{transform:zi$2});constructor(){p(Es).load(Nt);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t=`program`,n){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static ɵfac=function(n){return new(n||e)};static ɵdir=ot$4({type:e,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(n,o){n&2&&(Ui$2(`disabled`,o._getDisabledAttribute())(`aria-disabled`,o._getAriaDisabled())(`tabindex`,o._getTabIndex()),wT(o.color?`mat-`+o.color:``),Vv(`mat-mdc-button-progress-indicator-shown`,o.showProgress())(`mat-mdc-button-disabled`,o.disabled)(`mat-mdc-button-disabled-interactive`,o.disabledInteractive)(`mat-unthemed`,!o.color)(`_mat-animation-noopable`,o._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,zi$2],disabled:[2,`disabled`,`disabled`,zi$2],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,zi$2],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,zi$2],tabIndex:[2,`tabIndex`,`tabIndex`,St$2],_tabindex:[2,`tabindex`,`_tabindex`,St$2],showProgress:[1,`showProgress`]}})}return e})();var Rt$1=(()=>{class e extends tt$2{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(n){return new(n||e)};static ɵcmp=(function(){let t=[`*`,[[``,`progressIndicator`,``]]],n=[`*`,`[progressIndicator]`];function o(r,s){r&1&&(Mf(0,`div`,1),cT(1,1),Nf())}return Fi({type:e,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[bv],ngContentSelectors:n,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(s,l){s&1&&(aT(t),Av(0,`span`,0),cT(1),HS(2,o,2,0,`div`,1),Av(3,`span`,2)(4,`span`,3)),s&2&&(GC(2),zS(l.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return e})();var wt$2=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=gt$3({type:e});static ɵinj=Je$1({imports:[i4]})}return e})();var kt$2=/* @__PURE__ */ new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var yn=(()=>{class e extends tt$2{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let t=Bt(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let n=this._elementRef.nativeElement.classList,o=this._appearance?kt$2.get(this._appearance):null,r=kt$2.get(t);o&&n.remove(...o),n.add(...r),this._appearance=t}static ɵfac=function(n){return new(n||e)};static ɵcmp=(function(){let t=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],n=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function o(r,s){r&1&&(Mf(0,`div`,2),cT(1,3),Nf())}return Fi({type:e,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[bv],ngContentSelectors:n,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(s,l){s&1&&(aT(t),Av(0,`span`,0),cT(1),Mf(2,`span`,1),cT(3,1),Nf(),cT(4,2),HS(5,o,2,0,`div`,2),Av(6,`span`,3)(7,`span`,4)),s&2&&(Vv(`mdc-button__ripple`,!l._isFab)(`mdc-fab__ripple`,l._isFab),GC(5),zS(l.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded,
.material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return e})();function Bt(e){return e.hasAttribute(`mat-raised-button`)?`elevated`:e.hasAttribute(`mat-stroked-button`)?`outlined`:e.hasAttribute(`mat-flat-button`)?`filled`:e.hasAttribute(`mat-button`)?`text`:null}var xn=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=gt$3({type:e});static ɵinj=Je$1({imports:[wt$2,i4]})}return e})();var ue=20;var W=(()=>{class n{_ngZone=p(Y$2);_platform=p(Dt$4);_renderer=p(Kt$2).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new F$1;_scrolledCount=0;scrollContainers=/* @__PURE__ */ new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let i=this.scrollContainers.get(t);i&&(i.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=ue){return this._platform.isBrowser?new T$1(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let o=t>0?this._scrolled.pipe(lw(t)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):R$1()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(t,i){let o=this.getAncestorScrollContainers(t);return this.scrolled(i).pipe(Ne(r=>!r||o.indexOf(r)>-1))}getAncestorScrollContainers(t){let i=[];return this.scrollContainers.forEach((o,r)=>{this._targetContainsElement(r,t)&&i.push(r)}),i}_targetContainsElement(t,i){let o=ws(i),r=t.getElementRef().nativeElement;do if(o==r)return!0;while(o=o.parentElement);return!1}static ɵfac=function(i){return new(i||n)};static ɵprov=S$1({token:n,factory:n.ɵfac})}return n})();var pe=(()=>{class n{elementRef=p(Ze$2);scrollDispatcher=p(W);ngZone=p(Y$2);dir=p(g0,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new F$1;_renderer=p(gr);_cleanupScroll;_elementScrolled=new F$1;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,`scroll`,t=>this._elementScrolled.next(t))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){let i=this.elementRef.nativeElement,o=this.dir&&this.dir.value==`rtl`;t.left??=o?t.end:t.start,t.right??=o?t.start:t.end,t.bottom!=null&&(t.top=i.scrollHeight-i.clientHeight-t.bottom),o&&Lq()!=Cs$1.NORMAL?(t.left!=null&&(t.right=i.scrollWidth-i.clientWidth-t.left),Lq()==Cs$1.INVERTED?t.left=t.right:Lq()==Cs$1.NEGATED&&(t.left=t.right?-t.right:t.right)):t.right!=null&&(t.left=i.scrollWidth-i.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){let i=this.elementRef.nativeElement;kq()?i.scrollTo(t):(t.top!=null&&(i.scrollTop=t.top),t.left!=null&&(i.scrollLeft=t.left))}measureScrollOffset(t){let i=`left`,o=`right`,r=this.elementRef.nativeElement;if(t==`top`)return r.scrollTop;if(t==`bottom`)return r.scrollHeight-r.clientHeight-r.scrollTop;let s=this.dir&&this.dir.value==`rtl`;return t==`start`?t=s?o:i:t==`end`&&(t=s?i:o),s&&Lq()==Cs$1.INVERTED?t==i?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:s&&Lq()==Cs$1.NEGATED?t==i?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:t==i?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}static ɵfac=function(i){return new(i||n)};static ɵdir=ot$4({type:n,selectors:[[``,`cdk-scrollable`,``],[``,`cdkScrollable`,``]]})}return n})();var fe$1=20;var F=(()=>{class n{_platform=p(Dt$4);_listeners;_viewportSize=null;_change=new F$1;_document=p(j$3);constructor(){let t=p(Y$2),i=p(Kt$2).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[i.listen(`window`,`resize`,o),i.listen(`window`,`orientationchange`,o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:i,height:o}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+o,right:t.left+i,height:o,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,i=this._getWindow(),o=t.documentElement,r=o.getBoundingClientRect();return{top:-r.top||t.body?.scrollTop||i.scrollY||o.scrollTop||0,left:-r.left||t.body?.scrollLeft||i.scrollX||o.scrollLeft||0}}change(t=fe$1){return t>0?this._change.pipe(lw(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static ɵfac=function(i){return new(i||n)};static ɵprov=S$1({token:n,factory:n.ɵfac})}return n})();var wt$1=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=gt$3({type:n});static ɵinj=Je$1({})}return n})();var bt=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=gt$3({type:n});static ɵinj=Je$1({imports:[i4,wt$1,i4,wt$1]})}return n})();var Y=class{_attachedHost=null;attach(e){return this._attachedHost=e,e.attach(this)}detach(){let e=this._attachedHost;e!=null&&(this._attachedHost=null,e.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(e){this._attachedHost=e}};var Ct=class extends Y{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(e,t,i,o,r,s){super(),this.component=e,this.viewContainerRef=t,this.injector=i,this.projectableNodes=o,this.bindings=r||null,this.directives=s||null}};var H=class extends Y{templateRef;viewContainerRef;context;injector;constructor(e,t,i,o){super(),this.templateRef=e,this.viewContainerRef=t,this.context=i,this.injector=o}get origin(){return this.templateRef.elementRef}attach(e,t=this.context){return this.context=t,super.attach(e)}detach(){return this.context=void 0,super.detach()}};var kt$1=class extends Y{element;constructor(e){super(),this.element=e instanceof Ze$2?e.nativeElement:e}};var tt$1=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(e){if(e instanceof Ct)return this._attachedPortal=e,this.attachComponentPortal(e);if(e instanceof H)return this._attachedPortal=e,this.attachTemplatePortal(e);if(this.attachDomPortal&&e instanceof kt$1)return this._attachedPortal=e,this.attachDomPortal(e)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(e){this._disposeFn=e}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var et=class extends tt$1{outletElement;_appRef;_defaultInjector;constructor(e,t,i){super(),this.outletElement=e,this._appRef=t,this._defaultInjector=i}attachComponentPortal(e){let t;if(e.viewContainerRef){let i=e.injector||e.viewContainerRef.injector,o=i.get(mr,null,{optional:!0})||void 0;t=e.viewContainerRef.createComponent(e.component,{index:e.viewContainerRef.length,injector:i,ngModuleRef:o,projectableNodes:e.projectableNodes||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0}),this.setDisposeFn(()=>t.destroy())}else{let i=this._appRef,o=e.injector||this._defaultInjector||ae$3.NULL,r=o.get(te$2,i.injector);t=ED(e.component,{elementInjector:o,environmentInjector:r,projectableNodes:e.projectableNodes||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0}),i.attachView(t.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=e,t}attachTemplatePortal(e){let t=e.viewContainerRef,i=t.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return i.rootNodes.forEach(o=>this.outletElement.appendChild(o)),i.detectChanges(),this.setDisposeFn(()=>{let o=t.indexOf(i);o!==-1&&t.remove(o)}),this._attachedPortal=e,i}attachDomPortal=e=>{let t=e.element;t.parentNode;let i=this.outletElement.ownerDocument.createComment(`dom-portal`);t.parentNode.insertBefore(i,t),this.outletElement.appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(t,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(e){return e.hostView.rootNodes[0]}};var _i$1=(()=>{class n extends tt$1{_moduleRef=p(mr,{optional:!0});_document=p(j$3);_viewContainerRef=p(Mn$1);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}attached=new De;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let i=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,o=i.createComponent(t.component,{index:i.length,injector:t.injector||i.injector,projectableNodes:t.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0});return i!==this._viewContainerRef&&this._insertContent(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=t,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(t){t.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=t=>{let i=t.element;i.parentNode;let o=this._document.createComment(`dom-portal`);t.setAttachedHost(this),i.parentNode.insertBefore(o,i),this._insertContent(i),this._attachedPortal=t,super.setDisposeFn(()=>o.parentNode?.replaceChild(i,o))};_insertContent(t){let i=this._viewContainerRef.element.nativeElement;i.nodeType===i.ELEMENT_NODE?i.appendChild(t):i.parentNode?.insertBefore(t,i)}static ɵfac=(()=>{let t;return function(o){return(t||(t=$m(n)))(o||n)}})();static ɵdir=ot$4({type:n,selectors:[[``,`cdkPortalOutlet`,``]],inputs:{portal:[0,`cdkPortalOutlet`,`portal`]},outputs:{attached:`attached`},exportAs:[`cdkPortalOutlet`],features:[bv]})}return n})();var Ut=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=gt$3({type:n});static ɵinj=Je$1({})}return n})();var Zt=kq();function te(n){return new it$1(n.get(F),n.get(j$3))}var it$1=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(e,t){this._viewportRuler=e,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let e=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=e.style.left||``,this._previousHTMLStyles.top=e.style.top||``,e.style.left=Yq(-this._previousScrollPosition.left),e.style.top=Yq(-this._previousScrollPosition.top),e.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let e=this._document.documentElement,t=this._document.body,i=e.style,o=t.style,r=i.scrollBehavior||``,s=o.scrollBehavior||``;this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,e.classList.remove(`cdk-global-scrollblock`),Zt&&(i.scrollBehavior=o.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Zt&&(i.scrollBehavior=r,o.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let t=this._document.documentElement,i=this._viewportRuler.getViewportSize();return t.scrollHeight>i.height||t.scrollWidth>i.width}};function ee(n,e){return new nt$1(n.get(W),n.get(Y$2),n.get(F),e)}var nt$1=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(e,t,i,o){this._scrollDispatcher=e,this._ngZone=t,this._viewportRuler=i,this._config=o}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(this._scrollSubscription)return;let e=this._scrollDispatcher.scrolled(0).pipe(Ne(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=e.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=e.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var X=class{enable(){}disable(){}attach(){}};function Ot$1(n,e){return e.some(t=>{let i=n.bottom<t.top,o=n.top>t.bottom,r=n.right<t.left,s=n.left>t.right;return i||o||r||s})}function Gt(n,e){return e.some(t=>{let i=n.top<t.top,o=n.bottom>t.bottom,r=n.left<t.left,s=n.right>t.right;return i||o||r||s})}function Pt(n,e){return new ot$1(n.get(W),n.get(F),n.get(Y$2),e)}var ot$1=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(e,t,i,o){this._scrollDispatcher=e,this._viewportRuler=t,this._ngZone=i,this._config=o}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(!this._scrollSubscription){let e=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(e).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:o}=this._viewportRuler.getViewportSize();Ot$1(t,[{width:i,height:o,bottom:o,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var ie=(()=>{class n{_injector=p(ae$3);noop=()=>new X;close=t=>ee(this._injector,t);block=()=>te(this._injector);reposition=t=>Pt(this._injector,t);static ɵfac=function(i){return new(i||n)};static ɵprov=S$1({token:n,factory:n.ɵfac})}return n})();var j=class{positionStrategy;scrollStrategy=new X;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(e){if(e){let t=Object.keys(e);for(let i of t)e[i]!==void 0&&(this[i]=e[i])}}};var rt$1=class{connectionPair;scrollableViewProperties;constructor(e,t){this.connectionPair=e,this.scrollableViewProperties=t}};var ne=(()=>{class n{_attachedOverlays=[];_document=p(j$3);_isAttached=!1;ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let i=this._attachedOverlays.indexOf(t);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,i,o){return o.observers.length<1?!1:t.eventPredicate?t.eventPredicate(i):!0}static ɵfac=function(i){return new(i||n)};static ɵprov=S$1({token:n,factory:n.ɵfac})}return n})();var oe=(()=>{class n extends ne{_ngZone=p(Y$2);_renderer=p(Kt$2).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let i=this._attachedOverlays;for(let o=i.length-1;o>-1;o--){let r=i[o];if(this.canReceiveEvent(r,t,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(t));break}}};static ɵfac=function(i){return new(i||n)};static ɵprov=S$1({token:n,factory:n.ɵfac})}return n})();var re=(()=>{class n extends ne{_platform=p(Dt$4);_ngZone=p(Y$2);_renderer=p(Kt$2).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let i=this._document.body,o={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(i,`pointerdown`,this._pointerDownListener,o),r.listen(i,`click`,this._clickListener,o),r.listen(i,`auxclick`,this._clickListener,o),r.listen(i,`contextmenu`,this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=Nr(t)};_clickListener=t=>{let i=Nr(t),o=t.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let s=r.length-1;s>-1;s--){let a=r[s],h=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,t,h))){if($t(a.overlayElement,i)||$t(a.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>h.next(t)):h.next(t)}}};static ɵfac=function(i){return new(i||n)};static ɵprov=S$1({token:n,factory:n.ɵfac})}return n})();function $t(n,e){let t=typeof ShadowRoot<`u`&&ShadowRoot,i=e;for(;i;){if(i===n)return!0;i=t&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var se=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Fi({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(i,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return n})();var ae$1=(()=>{class n{_platform=p(Dt$4);_containerElement;_document=p(j$3);_styleLoader=p(Es);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=`cdk-overlay-container`;if(this._platform.isBrowser||Fq()){let o=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let r=0;r<o.length;r++)o[r].remove()}let i=this._document.createElement(`div`);i.classList.add(t),Fq()?i.setAttribute(`platform`,`test`):this._platform.isBrowser||i.setAttribute(`platform`,`server`),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(se)}static ɵfac=function(i){return new(i||n)};static ɵprov=S$1({token:n,factory:n.ɵfac})}return n})();var Rt=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(e,t,i,o){this._renderer=t,this._ngZone=i,this.element=e.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=t.listen(this.element,`click`,o)}detach(){this._ngZone.runOutsideAngular(()=>{let e=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(e,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),e.style.pointerEvents=`none`,e.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Et(n){return n&&n.nodeType===1}var St$1=Z$3([]);var st$1=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new F$1;_attachments=new F$1;_detachments=new F$1;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new F$1;_outsidePointerEvents=new F$1;_afterNextRenderRef;constructor(e,t,i,o,r,s,a,h,u,c=!1,d,f){this._portalOutlet=e,this._host=t,this._pane=i,this._config=o,this._ngZone=r,this._keyboardDispatcher=s,this._document=a,this._location=h,this._outsideClickDispatcher=u,this._animationsDisabled=c,this._injector=d,this._renderer=f,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(e){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(e);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),J$2(()=>{St$1.update(i=>i.includes(this)?i:[...i,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=xi$1(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation===`pop-state`){let i=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>i.unsubscribe()}else this._config.disposeOnNavigation===`url-change`&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof t?.onDestroy==`function`&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let e=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),J$2(()=>{St$1.update(t=>t.filter(i=>i!==this))}),e}dispose(){if(this._disposed)return;let e=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,e&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,J$2(()=>{St$1.update(t=>t.filter(i=>i!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(e){e!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=e,this.hasAttached()&&(e.attach(this),this.updatePosition()))}updateSize(e){this._config=r(r({},this._config),e),this._updateElementSize()}setDirection(e){this._config=s(r({},this._config),{direction:e}),this._updateElementDirection()}addPanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!0)}removePanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!1)}getDirection(){let e=this._config.direction;return e?typeof e==`string`?e:e.value:`ltr`}updateScrollStrategy(e){e!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=e,this.hasAttached()&&(e.attach(this),e.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let e=this._pane.style;e.width=Yq(this._config.width),e.height=Yq(this._config.height),e.minWidth=Yq(this._config.minWidth),e.minHeight=Yq(this._config.minHeight),e.maxWidth=Yq(this._config.maxWidth),e.maxHeight=Yq(this._config.maxHeight)}_togglePointerEvents(e){this._pane.style.pointerEvents=e?``:`none`}_attachHost(){if(!this._host.parentElement){let e=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Et(e)?e.after(this._host):e?.type===`parent`?e.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let e=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new Rt(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(e))}):this._backdropRef.element.classList.add(e)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(e,t,i){let o=zh(t||[]).filter(r=>!!r);o.length&&(i?e.classList.add(...o):e.classList.remove(...o))}_detachContentWhenEmpty(){let e=!1;try{this._detachContentAfterRenderRef=xi$1(()=>{e=!0,this._detachContent()},{injector:this._injector})}catch(t){if(e)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let e=this._scrollStrategy;e?.disable(),e?.detach?.()}};var Kt=`cdk-overlay-connected-position-bounding-box`;var ge$1=/([A-Za-z%]+)$/;function Dt$1(n,e){return new at$1(e,n.get(F),n.get(j$3),n.get(Dt$4),n.get(ae$1))}var at$1=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new F$1;_resizeSubscription=re$1.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(e,t,i,o,r){this._viewportRuler=t,this._document=i,this._platform=o,this._overlayContainer=r,this.setOrigin(e)}attach(e){this._overlayRef&&this._overlayRef,this._validatePositions(),e.hostElement.classList.add(Kt),this._overlayRef=e,this._boundingBox=e.hostElement,this._pane=e.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let e=this._originRect,t=this._overlayRect,i=this._viewportRect,o=this._containerRect,r=[],s;for(let a of this._preferredPositions){let h=this._getOriginPoint(e,o,a),u=this._getOverlayPoint(h,t,a),c=this._getOverlayFit(u,t,i,a);if(c.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,h);return}if(this._canFitWithFlexibleDimensions(c,u,i)){r.push({position:a,origin:h,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(h,a)});continue}(!s||s.overlayFit.visibleArea<c.visibleArea)&&(s={overlayFit:c,overlayPoint:u,originPoint:h,position:a,overlayRect:t})}if(r.length){let a=null,h=-1;for(let u of r){let c=u.boundingBoxRect.width*u.boundingBoxRect.height*(u.position.weight||1);c>h&&(h=c,a=u)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&V(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Kt),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let e=this._lastPosition;e?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(e,this._getOriginPoint(this._originRect,this._containerRect,e))):this.apply()}withScrollableContainers(e){return this._scrollables=e,this}withPositions(e){return this._preferredPositions=e,e.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(e){return this._viewportMargin=e,this}withFlexibleDimensions(e=!0){return this._hasFlexibleDimensions=e,this}withGrowAfterOpen(e=!0){return this._growAfterOpen=e,this}withPush(e=!0){return this._canPush=e,this}withLockedPosition(e=!0){return this._positionLocked=e,this}setOrigin(e){return this._origin=e,this}withDefaultOffsetX(e){return this._offsetX=e,this}withDefaultOffsetY(e){return this._offsetY=e,this}withTransformOriginOn(e){return this._transformOriginSelector=e,this}withPopoverLocation(e){return this._popoverLocation=e,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof Ze$2?this._origin.nativeElement:Et(this._origin)?this._origin:null}_getOriginPoint(e,t,i){let o;if(i.originX==`center`)o=e.left+e.width/2;else{let s=this._isRtl()?e.right:e.left,a=this._isRtl()?e.left:e.right;o=i.originX==`start`?s:a}t.left<0&&(o-=t.left);let r;return i.originY==`center`?r=e.top+e.height/2:r=i.originY==`top`?e.top:e.bottom,t.top<0&&(r-=t.top),{x:o,y:r}}_getOverlayPoint(e,t,i){let o;i.overlayX==`center`?o=-t.width/2:i.overlayX===`start`?o=this._isRtl()?-t.width:0:o=this._isRtl()?0:-t.width;let r;return i.overlayY==`center`?r=-t.height/2:r=i.overlayY==`top`?0:-t.height,{x:e.x+o,y:e.y+r}}_getOverlayFit(e,t,i,o){let r=Qt(t),{x:s,y:a}=e,h=this._getOffset(o,`x`),u=this._getOffset(o,`y`);h&&(s+=h),u&&(a+=u);let c=0-s,d=s+r.width-i.width,f=0-a,_=a+r.height-i.height,g=this._subtractOverflows(r.width,c,d),w=this._subtractOverflows(r.height,f,_),At=g*w;return{visibleArea:At,isCompletelyWithinViewport:r.width*r.height===At,fitsInViewportVertically:w===r.height,fitsInViewportHorizontally:g==r.width}}_canFitWithFlexibleDimensions(e,t,i){if(this._hasFlexibleDimensions){let o=i.bottom-t.y,r=i.right-t.x,s=qt(this._overlayRef.getConfig().minHeight),a=qt(this._overlayRef.getConfig().minWidth),h=e.fitsInViewportVertically||s!=null&&s<=o,u=e.fitsInViewportHorizontally||a!=null&&a<=r;return h&&u}return!1}_pushOverlayOnScreen(e,t,i){if(this._previousPushAmount&&this._positionLocked)return{x:e.x+this._previousPushAmount.x,y:e.y+this._previousPushAmount.y};let o=Qt(t),r=this._viewportRect,s=Math.max(e.x+o.width-r.width,0),a=Math.max(e.y+o.height-r.height,0),h=Math.max(r.top-i.top-e.y,0),u=Math.max(r.left-i.left-e.x,0),c=0,d=0;return o.width<=r.width?c=u||-s:c=e.x<this._getViewportMarginStart()?r.left-i.left-e.x:0,o.height<=r.height?d=h||-a:d=e.y<this._getViewportMarginTop()?r.top-i.top-e.y:0,this._previousPushAmount={x:c,y:d},{x:e.x+c,y:e.y+d}}_applyPosition(e,t){if(this._setTransformOrigin(e),this._setOverlayElementStyles(t,e),this._setBoundingBoxStyles(t,e),e.panelClass&&this._addPanelClasses(e.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(e!==this._lastPosition||!this._lastScrollVisibility||!_e$1(this._lastScrollVisibility,i)){let o=new rt$1(e,i);this._positionChanges.next(o)}this._lastScrollVisibility=i}this._lastPosition=e,this._isInitialRender=!1}_setTransformOrigin(e){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,o=e.overlayY;e.overlayX===`center`?i=`center`:this._isRtl()?i=e.overlayX===`start`?`right`:`left`:i=e.overlayX===`start`?`left`:`right`;for(let r=0;r<t.length;r++)t[r].style.transformOrigin=`${i} ${o}`}_calculateBoundingBoxRect(e,t){let i=this._viewportRect,o=this._isRtl(),r,s,a;if(t.overlayY===`top`)s=e.y,r=i.height-s+this._getViewportMarginBottom();else if(t.overlayY===`bottom`)a=i.height-e.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=i.height-a+this._getViewportMarginTop();else{let _=Math.min(i.bottom-e.y+i.top,e.y),g=this._lastBoundingBoxSize.height;r=_*2,s=e.y-_,r>g&&!this._isInitialRender&&!this._growAfterOpen&&(s=e.y-g/2)}let h=t.overlayX===`start`&&!o||t.overlayX===`end`&&o,u=t.overlayX===`end`&&!o||t.overlayX===`start`&&o,c,d,f;if(u)f=i.width-e.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),c=e.x-this._getViewportMarginStart();else if(h)d=e.x,c=i.right-e.x-this._getViewportMarginEnd();else{let _=Math.min(i.right-e.x+i.left,e.x),g=this._lastBoundingBoxSize.width;c=_*2,d=e.x-_,c>g&&!this._isInitialRender&&!this._growAfterOpen&&(d=e.x-g/2)}return{top:s,left:d,bottom:a,right:f,width:c,height:r}}_setBoundingBoxStyles(e,t){let i=this._calculateBoundingBoxRect(e,t);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left=`0`,o.bottom=o.right=`auto`,o.maxHeight=o.maxWidth=``,o.width=o.height=`100%`;else{let r=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;o.width=Yq(i.width),o.height=Yq(i.height),o.top=Yq(i.top)||`auto`,o.bottom=Yq(i.bottom)||`auto`,o.left=Yq(i.left)||`auto`,o.right=Yq(i.right)||`auto`,t.overlayX===`center`?o.alignItems=`center`:o.alignItems=t.overlayX===`end`?`flex-end`:`flex-start`,t.overlayY===`center`?o.justifyContent=`center`:o.justifyContent=t.overlayY===`bottom`?`flex-end`:`flex-start`,r&&(o.maxHeight=Yq(r)),s&&(o.maxWidth=Yq(s))}this._lastBoundingBoxSize=i,V(this._boundingBox.style,o)}_resetBoundingBoxStyles(){V(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){V(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(e,t){let i={},o=this._hasExactPosition(),r=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(o){let c=this._viewportRuler.getViewportScrollPosition();V(i,this._getExactOverlayY(t,e,c)),V(i,this._getExactOverlayX(t,e,c))}else i.position=`static`;let a=``,h=this._getOffset(t,`x`),u=this._getOffset(t,`y`);h&&(a+=`translateX(${h}px) `),u&&(a+=`translateY(${u}px)`),i.transform=a.trim(),s.maxHeight&&(o?i.maxHeight=Yq(s.maxHeight):r&&(i.maxHeight=``)),s.maxWidth&&(o?i.maxWidth=Yq(s.maxWidth):r&&(i.maxWidth=``)),V(this._pane.style,i)}_getExactOverlayY(e,t,i){let o={top:``,bottom:``},r=this._getOverlayPoint(t,this._overlayRect,e);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,i)),e.overlayY===`bottom`)o.bottom=`${this._document.documentElement.clientHeight-(r.y+this._overlayRect.height)}px`;else o.top=Yq(r.y);return o}_getExactOverlayX(e,t,i){let o={left:``,right:``},r=this._getOverlayPoint(t,this._overlayRect,e);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,i));let s;if(this._isRtl()?s=e.overlayX===`end`?`left`:`right`:s=e.overlayX===`end`?`right`:`left`,s===`right`)o.right=`${this._document.documentElement.clientWidth-(r.x+this._overlayRect.width)}px`;else o.left=Yq(r.x);return o}_getScrollVisibility(){let e=this._getOriginRect(),t=this._pane.getBoundingClientRect(),i=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Gt(e,i),isOriginOutsideView:Ot$1(e,i),isOverlayClipped:Gt(t,i),isOverlayOutsideView:Ot$1(t,i)}}_subtractOverflows(e,...t){return t.reduce((i,o)=>i-Math.max(o,0),e)}_getNarrowedViewportRect(){let e=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+e-this._getViewportMarginEnd(),bottom:i.top+t-this._getViewportMarginBottom(),width:e-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(e,t){return t===`x`?e.offsetX==null?this._offsetX:e.offsetX:e.offsetY==null?this._offsetY:e.offsetY}_validatePositions(){}_addPanelClasses(e){this._pane&&zh(e).forEach(t=>{t!==``&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(e=>{this._pane.classList.remove(e)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let e=this._origin;if(e instanceof Ze$2)return e.nativeElement.getBoundingClientRect();if(e instanceof Element)return e.getBoundingClientRect();let t=e.width||0,i=e.height||0;return{top:e.y,bottom:e.y+i,left:e.x,right:e.x+t,height:i,width:t}}_getContainerRect(){let e=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,t=this._overlayContainer.getContainerElement();e&&(t.style.display=`block`);let i=t.getBoundingClientRect();return e&&(t.style.display=``),i}};function V(n,e){for(let t in e)Object.hasOwn(e,t)&&(n[t]=e[t]);return n}function qt(n){if(typeof n!=`number`&&n!=null){let[e,t]=n.split(ge$1);return!t||t===`px`?parseFloat(e):null}return n||null}function Qt(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function _e$1(n,e){return n===e?!0:n.isOriginClipped===e.isOriginClipped&&n.isOriginOutsideView===e.isOriginOutsideView&&n.isOverlayClipped===e.isOverlayClipped&&n.isOverlayOutsideView===e.isOverlayOutsideView}var Jt=`cdk-global-overlay-wrapper`;function le(n){return new lt$1}var lt$1=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(e){let t=e.getConfig();this._overlayRef=e,this._width&&!t.width&&e.updateSize({width:this._width}),this._height&&!t.height&&e.updateSize({height:this._height}),e.hostElement.classList.add(Jt),this._isDisposed=!1}top(e=``){return this._bottomOffset=``,this._topOffset=e,this._alignItems=`flex-start`,this}left(e=``){return this._xOffset=e,this._xPosition=`left`,this}bottom(e=``){return this._topOffset=``,this._bottomOffset=e,this._alignItems=`flex-end`,this}right(e=``){return this._xOffset=e,this._xPosition=`right`,this}start(e=``){return this._xOffset=e,this._xPosition=`start`,this}end(e=``){return this._xOffset=e,this._xPosition=`end`,this}width(e=``){return this._overlayRef?this._overlayRef.updateSize({width:e}):this._width=e,this}height(e=``){return this._overlayRef?this._overlayRef.updateSize({height:e}):this._height=e,this}centerHorizontally(e=``){return this.left(e),this._xPosition=`center`,this}centerVertically(e=``){return this.top(e),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,{width:o,height:r,maxWidth:s,maxHeight:a}=this._overlayRef.getConfig(),h=(o===`100%`||o===`100vw`)&&(!s||s===`100%`||s===`100vw`),u=(r===`100%`||r===`100vh`)&&(!a||a===`100%`||a===`100vh`),c=this._xPosition,d=this._xOffset,f=this._overlayRef.getConfig().direction===`rtl`,_=``,g=``,w=``;h?w=`flex-start`:c===`center`?(w=`center`,f?g=d:_=d):f?c===`left`||c===`end`?(w=`flex-end`,_=d):(c===`right`||c===`start`)&&(w=`flex-start`,g=d):c===`left`||c===`start`?(w=`flex-start`,_=d):(c===`right`||c===`end`)&&(w=`flex-end`,g=d),e.position=this._cssPosition,e.marginLeft=h?`0`:_,e.marginTop=u?`0`:this._topOffset,e.marginBottom=this._bottomOffset,e.marginRight=h?`0`:g,t.justifyContent=w,t.alignItems=u?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,i=t.style;t.classList.remove(Jt),i.justifyContent=i.alignItems=e.marginTop=e.marginBottom=e.marginLeft=e.marginRight=e.position=``,this._overlayRef=null,this._isDisposed=!0}};var ce=(()=>{class n{_injector=p(ae$3);global(){return le()}flexibleConnectedTo(t){return Dt$1(this._injector,t)}static ɵfac=function(i){return new(i||n)};static ɵprov=S$1({token:n,factory:n.ɵfac})}return n})();var Mt=new v(`OVERLAY_DEFAULT_CONFIG`);function Vt(n,e){n.get(Es).load(se);let t=n.get(ae$1),i=n.get(j$3),o=n.get(Yh),r=n.get(Jt$2),s=n.get(g0),a=n.get(gr,null,{optional:!0})||n.get(Kt$2).createRenderer(null,null),h=new j(e),u=n.get(Mt,null,{optional:!0})?.usePopover??!0;h.direction=h.direction||s.value,!i.body||!(`showPopover`in i.body)?h.usePopover=!1:h.usePopover=e?.usePopover??u;let c=i.createElement(`div`),d=i.createElement(`div`);c.id=o.getId(`cdk-overlay-`),c.classList.add(`cdk-overlay-pane`),d.appendChild(c),h.usePopover&&(d.setAttribute(`popover`,`manual`),d.classList.add(`cdk-overlay-popover`));let f=h.usePopover?h.positionStrategy?.getPopoverInsertionPoint?.():null;return Et(f)?f.after(d):f?.type===`parent`?f.element.appendChild(d):t.getContainerElement().appendChild(d),new st$1(new et(c,r,n),d,c,h,n.get(Y$2),n.get(oe),i,n.get(Er),n.get(re),e?.disableAnimations??n.get(ql,null,{optional:!0})===`NoopAnimations`,n.get(te$2),a)}var he$1=(()=>{class n{scrollStrategies=p(ie);_positionBuilder=p(ce);_injector=p(ae$3);create(t){return Vt(this._injector,t)}position(){return this._positionBuilder}static ɵfac=function(i){return new(i||n)};static ɵprov=S$1({token:n,factory:n.ɵfac})}return n})();var ve=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}];var ye=new v(`cdk-connected-overlay-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=p(ae$3);return()=>Pt(n)}});var xt=(()=>{class n{elementRef=p(Ze$2);static ɵfac=function(i){return new(i||n)};static ɵdir=ot$4({type:n,selectors:[[``,`cdk-overlay-origin`,``],[``,`overlay-origin`,``],[``,`cdkOverlayOrigin`,``]],exportAs:[`cdkOverlayOrigin`]})}return n})();var de=new v(`cdk-connected-overlay-default-config`);var me=(()=>{class n{_dir=p(g0,{optional:!0});_injector=p(ae$3);_overlayRef;_templatePortal;_backdropSubscription=re$1.EMPTY;_attachSubscription=re$1.EMPTY;_detachSubscription=re$1.EMPTY;_positionSubscription=re$1.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=p(ye);_ngZone=p(Y$2);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(t){this._offsetX=t,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(t){this._offsetY=t,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(t){typeof t!=`string`&&this._assignConfig(t)}backdropClick=new De;positionChange=new De;attach=new De;detach=new De;overlayKeydown=new De;overlayOutsideClick=new De;constructor(){let t=p(uo),i=p(Mn$1),o=p(de,{optional:!0}),r=p(Mt,{optional:!0});this.usePopover=r?.usePopover===!1?null:`global`,this._templatePortal=new H(t,i),this.scrollStrategy=this._scrollStrategyFactory(),o&&this._assignConfig(o)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:`ltr`}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(t){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),t.origin&&this.open&&this._position.apply()),t.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=ve);let t=this._overlayRef=Vt(this._injector,this._buildConfig());this._attachSubscription=t.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=t.detachments().subscribe(()=>this.detach.emit()),t.keydownEvents().subscribe(i=>{this.overlayKeydown.next(i),i.keyCode===27&&!this.disableClose&&!wI(i)&&(i.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(i=>{let o=this._getOriginElement(),r=Nr(i);(!o||o!==r&&!o.contains(r))&&this.overlayOutsideClick.next(i)})}_buildConfig(){let t=this._position=this.positionStrategy||this._createPositionStrategy(),i=new j({direction:this._dir||`ltr`,positionStrategy:t,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(i.height=this.height),(this.minWidth||this.minWidth===0)&&(i.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(i.minHeight=this.minHeight),this.backdropClass&&(i.backdropClass=this.backdropClass),this.panelClass&&(i.panelClass=this.panelClass),i}_updatePositionStrategy(t){let i=this.positions.map(o=>({originX:o.originX,originY:o.originY,overlayX:o.overlayX,overlayY:o.overlayY,offsetX:o.offsetX||this.offsetX,offsetY:o.offsetY||this.offsetY,panelClass:o.panelClass||void 0}));return t.setOrigin(this._getOrigin()).withPositions(i).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?`global`:this.usePopover)}_createPositionStrategy(){let t=Dt$1(this._injector,this._getOrigin());return this._updatePositionStrategy(t),t}_getOrigin(){return this.origin instanceof xt?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof xt?this.origin.elementRef.nativeElement:this.origin instanceof Ze$2?this.origin.nativeElement:typeof Element<`u`&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let t=this._overlayRef;t.getConfig().hasBackdrop=this.hasBackdrop,t.updateSize({width:this._getWidth()}),t.hasAttached()||t.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=t.backdropClick().subscribe(i=>this.backdropClick.emit(i)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(gw(()=>this.positionChange.observers.length>0)).subscribe(i=>{this._ngZone.run(()=>this.positionChange.emit(i)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(t){this.origin=t.origin??this.origin,this.positions=t.positions??this.positions,this.positionStrategy=t.positionStrategy??this.positionStrategy,this.offsetX=t.offsetX??this.offsetX,this.offsetY=t.offsetY??this.offsetY,this.width=t.width??this.width,this.height=t.height??this.height,this.minWidth=t.minWidth??this.minWidth,this.minHeight=t.minHeight??this.minHeight,this.backdropClass=t.backdropClass??this.backdropClass,this.panelClass=t.panelClass??this.panelClass,this.viewportMargin=t.viewportMargin??this.viewportMargin,this.scrollStrategy=t.scrollStrategy??this.scrollStrategy,this.disableClose=t.disableClose??this.disableClose,this.transformOriginSelector=t.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=t.hasBackdrop??this.hasBackdrop,this.lockPosition=t.lockPosition??this.lockPosition,this.flexibleDimensions=t.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=t.growAfterOpen??this.growAfterOpen,this.push=t.push??this.push,this.disposeOnNavigation=t.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=t.usePopover??this.usePopover,this.matchWidth=t.matchWidth??this.matchWidth}static ɵfac=function(i){return new(i||n)};static ɵdir=ot$4({type:n,selectors:[[``,`cdk-connected-overlay`,``],[``,`connected-overlay`,``],[``,`cdkConnectedOverlay`,``]],inputs:{origin:[0,`cdkConnectedOverlayOrigin`,`origin`],positions:[0,`cdkConnectedOverlayPositions`,`positions`],positionStrategy:[0,`cdkConnectedOverlayPositionStrategy`,`positionStrategy`],offsetX:[0,`cdkConnectedOverlayOffsetX`,`offsetX`],offsetY:[0,`cdkConnectedOverlayOffsetY`,`offsetY`],width:[0,`cdkConnectedOverlayWidth`,`width`],height:[0,`cdkConnectedOverlayHeight`,`height`],minWidth:[0,`cdkConnectedOverlayMinWidth`,`minWidth`],minHeight:[0,`cdkConnectedOverlayMinHeight`,`minHeight`],backdropClass:[0,`cdkConnectedOverlayBackdropClass`,`backdropClass`],panelClass:[0,`cdkConnectedOverlayPanelClass`,`panelClass`],viewportMargin:[0,`cdkConnectedOverlayViewportMargin`,`viewportMargin`],scrollStrategy:[0,`cdkConnectedOverlayScrollStrategy`,`scrollStrategy`],open:[0,`cdkConnectedOverlayOpen`,`open`],disableClose:[0,`cdkConnectedOverlayDisableClose`,`disableClose`],transformOriginSelector:[0,`cdkConnectedOverlayTransformOriginOn`,`transformOriginSelector`],hasBackdrop:[2,`cdkConnectedOverlayHasBackdrop`,`hasBackdrop`,zi$2],lockPosition:[2,`cdkConnectedOverlayLockPosition`,`lockPosition`,zi$2],flexibleDimensions:[2,`cdkConnectedOverlayFlexibleDimensions`,`flexibleDimensions`,zi$2],growAfterOpen:[2,`cdkConnectedOverlayGrowAfterOpen`,`growAfterOpen`,zi$2],push:[2,`cdkConnectedOverlayPush`,`push`,zi$2],disposeOnNavigation:[2,`cdkConnectedOverlayDisposeOnNavigation`,`disposeOnNavigation`,t=>t===`url-change`||t===`pop-state`?t:zi$2(t)],usePopover:[0,`cdkConnectedOverlayUsePopover`,`usePopover`],matchWidth:[2,`cdkConnectedOverlayMatchWidth`,`matchWidth`,zi$2],_config:[0,`cdkConnectedOverlay`,`_config`]},outputs:{backdropClick:`backdropClick`,positionChange:`positionChange`,attach:`attach`,detach:`detach`,overlayKeydown:`overlayKeydown`,overlayOutsideClick:`overlayOutsideClick`},exportAs:[`cdkConnectedOverlay`],features:[Yt$1]})}return n})();var we=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=gt$3({type:n});static ɵinj=Je$1({providers:[he$1],imports:[i4,Ut,bt,bt]})}return n})();var Dt=`Service workers are disabled or not supported by this browser`;var he=class{serviceWorker;worker;registration;events;constructor(o,e){if(this.serviceWorker=o,!o)this.worker=this.events=this.registration=new T$1(t=>t.error(new y$1(5601,!1)));else{let t=null,i=new F$1;this.worker=new T$1(h=>(t!==null&&h.next(t),i.subscribe(j=>h.next(j))));let a=()=>{let{controller:h}=o;h!==null&&(t=h,i.next(t))};o.addEventListener(`controllerchange`,a),a(),this.registration=this.worker.pipe($e$2(()=>o.getRegistration().then(h=>{if(!h)throw new y$1(5601,!1);return h})));let r=new F$1;this.events=r.asObservable();let l=h=>{let{data:j}=h;j?.type&&r.next(j)};o.addEventListener(`message`,l),e?.get(Jt$2,null,{optional:!0})?.onDestroy(()=>{o.removeEventListener(`controllerchange`,a),o.removeEventListener(`message`,l)})}}postMessage(o,e){return new Promise(t=>{this.worker.pipe(wt$4(1)).subscribe(i=>{i.postMessage(r({action:o},e)),t()})})}postMessageWithOperation(o,e,t){let i=this.waitForOperationCompleted(t),a=this.postMessage(o,e);return Promise.all([a,i]).then(([,r])=>r)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(o){let e;return typeof o==`string`?e=t=>t.type===o:e=t=>o.includes(t.type),this.events.pipe(Ne(e))}nextEventOfType(o){return this.eventsOfType(o).pipe(wt$4(1))}waitForOperationCompleted(o){return new Promise((e,t)=>{this.eventsOfType(`OPERATION_COMPLETED`).pipe(Ne(i=>i.nonce===o),wt$4(1),V$1(i=>{if(i.result!==void 0)return i.result;throw new Error(i.error)})).subscribe({next:e,error:t})})}get isEnabled(){return!!this.serviceWorker}};var Mi=(()=>{class n{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new F$1;constructor(e){if(this.sw=e,!e.isEnabled){this.messages=uw,this.notificationClicks=uw,this.notificationCloses=uw,this.pushSubscriptionChanges=uw,this.subscription=uw;return}this.messages=this.sw.eventsOfType(`PUSH`).pipe(V$1(i=>i.data)),this.notificationClicks=this.sw.eventsOfType(`NOTIFICATION_CLICK`).pipe(V$1(i=>i.data)),this.notificationCloses=this.sw.eventsOfType(`NOTIFICATION_CLOSE`).pipe(V$1(i=>i.data)),this.pushSubscriptionChanges=this.sw.eventsOfType(`PUSH_SUBSCRIPTION_CHANGE`).pipe(V$1(i=>i.data)),this.pushManager=this.sw.registration.pipe(V$1(i=>i.pushManager));let t=this.pushManager.pipe($e$2(i=>i.getSubscription()));this.subscription=new T$1(i=>{let a=t.subscribe(i),r=this.subscriptionChanges.subscribe(i);return()=>{a.unsubscribe(),r.unsubscribe()}})}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(Dt));let t={userVisibleOnly:!0},i=this.decodeBase64(e.serverPublicKey.replace(/_/g,`/`).replace(/-/g,`+`)),a=new Uint8Array(new ArrayBuffer(i.length));for(let r=0;r<i.length;r++)a[r]=i.charCodeAt(r);return t.applicationServerKey=a,new Promise((r,l)=>{this.pushManager.pipe($e$2(m=>m.subscribe(t)),wt$4(1)).subscribe({next:m=>{this.subscriptionChanges.next(m),r(m)},error:l})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(Dt));let e=t=>{if(t===null)throw new y$1(5602,!1);return t.unsubscribe().then(i=>{if(!i)throw new y$1(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((t,i)=>{this.subscription.pipe(wt$4(1),$e$2(e)).subscribe({next:t,error:i})})}decodeBase64(e){return atob(e)}static ɵfac=function(t){return new(t||n)(b(he))};static ɵprov=L({token:n,factory:n.ɵfac})}return n})();var xi=(()=>{class n{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=uw,this.unrecoverable=uw;return}this.versionUpdates=this.sw.eventsOfType([`VERSION_DETECTED`,`VERSION_INSTALLATION_FAILED`,`VERSION_READY`,`NO_NEW_VERSION_DETECTED`]),this.unrecoverable=this.sw.eventsOfType(`UNRECOVERABLE_STATE`)}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(Dt));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let e=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation(`CHECK_FOR_UPDATES`,{nonce:e},e).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new y$1(5601,!1));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation(`ACTIVATE_UPDATE`,{nonce:e},e)}static ɵfac=function(t){return new(t||n)(b(he))};static ɵprov=L({token:n,factory:n.ɵfac})}return n})();var ei=new v(``);function Di(){let n=p(Se);if(!(`serviceWorker`in navigator&&n.enabled!==!1))return;let o=p(ei),e=p(Y$2),t=p(Jt$2);e.runOutsideAngular(()=>{let i=navigator.serviceWorker,a=()=>i.controller?.postMessage({action:`INITIALIZE`});i.addEventListener(`controllerchange`,a),t.onDestroy(()=>{i.removeEventListener(`controllerchange`,a)})}),e.runOutsideAngular(()=>{let i,{registrationStrategy:a}=n;if(typeof a==`function`)i=new Promise(r=>a().subscribe(()=>r()));else{let[r,...l]=(a||`registerWhenStable:30000`).split(`:`);switch(r){case`registerImmediately`:i=Promise.resolve();break;case`registerWithDelay`:i=Jn(+l[0]||0);break;case`registerWhenStable`:i=Promise.race([t.whenStable(),Jn(+l[0])]);break;default:throw new y$1(5600,!1)}}i.then(()=>{t.destroyed||navigator.serviceWorker.register(o,{scope:n.scope,updateViaCache:n.updateViaCache,type:n.type}).catch(r=>console.error(Ct$2(5604,!1)))})})}function Jn(n){return new Promise(o=>setTimeout(o,n))}function wi(){let n=p(Se),o=p(ae$3);return new he(n.enabled!==!1?navigator.serviceWorker:void 0,o)}var Se=class{enabled;updateViaCache;type;scope;registrationStrategy};function ti(n,o={}){return _t$2([Mi,xi,{provide:ei,useValue:n},{provide:Se,useValue:o},{provide:he,useFactory:wi},Iv(Di)])}var ii={providers:[Zw(),RR([{path:``,pathMatch:`full`,redirectTo:`welcome`},{path:`welcome`,title:`Welcome`,loadComponent:()=>import(`./chunk-CvFYpwU4.js`).then(n=>n.WelcomePage)},{path:`import`,title:`Import`,loadComponent:()=>import(`./chunk-Bahj2KRN.js`).then(n=>n.ImportPage)},{path:`dashboard`,title:`Dashboard`,loadComponent:()=>import(`./chunk-RnbFmzSp.js`).then(n=>n.DashboardPage)},{path:`budget`,title:`Budget`,loadComponent:()=>import(`./chunk-BEuQRioc.js`).then(n=>n.BudgetPage)},{path:`debts`,title:`Debts`,loadComponent:()=>import(`./chunk-DtFn2WfP.js`).then(n=>n.DebtsPage)},{path:`goals`,title:`Goals`,loadComponent:()=>import(`./chunk-BhHPqdIT.js`).then(n=>n.GoalsPage)},{path:`checkin`,title:`Check-in`,loadComponent:()=>import(`./chunk-BElFdW_K.js`).then(n=>n.CheckinPage)},{path:`progress`,title:`Progress`,loadComponent:()=>import(`./chunk-sJOh7pOn.js`).then(n=>n.ProgressPage)},{path:`help`,title:`Help`,loadComponent:()=>import(`./chunk-DjfLYikQ.js`).then(n=>n.HelpPage)},{path:`**`,redirectTo:`welcome`}],jR()),ti(`ngsw-worker.js`,{enabled:!Y2(),registrationStrategy:`registerWhenStable:30000`})]};var Z=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var St=(()=>{class n extends tt$1{_elementRef=p(Ze$2);_focusTrapFactory=p(o0);_config;_interactivityChecker=p(qR);_ngZone=p(Y$2);_focusMonitor=p($R);_renderer=p(gr);_changeDetectorRef=p($i$2);_injector=p(ae$3);_platform=p(Dt$4);_document=p(j$3);_portalOutlet;_focusTrapped=new F$1;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=p(Z,{optional:!0})||new Z,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{a(),r(),e.removeAttribute(`tabindex`)},a=this._renderer.listen(e,`blur`,i),r=this._renderer.listen(e,`mousedown`,i)})),e.focus(t)}_focusByCssSelector(e,t){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,t)}_trapFocus(e){this._isDestroyed||xi$1(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case`dialog`:this._containsFocus()||t.focus(e);break;case!0:case`first-tabbable`:this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`,e);break;default:this._focusByCssSelector(this._config.autoFocus,e)}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e==`string`?t=this._document.querySelector(e):typeof e==`boolean`?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus==`function`){let i=VR(),a=this._elementRef.nativeElement;(!i||i===this._document.body||i===a||a.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=VR();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=VR()))}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){function e(t,i){}return Fi({type:n,selectors:[[`cdk-dialog-container`]],viewQuery:function(i,a){if(i&1&&Lv(_i$1,7),i&2){let r;Af(r=Rf())&&(a._portalOutlet=r.first)}},hostAttrs:[`tabindex`,`-1`,1,`cdk-dialog-container`],hostVars:6,hostBindings:function(i,a){i&2&&Ui$2(`id`,a._config.id||null)(`role`,a._config.role)(`aria-modal`,a._config.ariaModal)(`aria-labelledby`,a._config.ariaLabel?null:a._ariaLabelledByQueue[0])(`aria-label`,a._config.ariaLabel)(`aria-describedby`,a._config.ariaDescribedBy||null)},features:[bv],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(i,a){i&1&&_v(0,e,0,0,`ng-template`,0)},dependencies:[_i$1],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})})()}return n})();var ae=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new F$1;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(o,e){this.overlayRef=o,this.config=e,this.disableClose=e.disableClose,this.backdropClick=o.backdropClick(),this.keydownEvents=o.keydownEvents(),this.outsidePointerEvents=o.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!wI(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:`keyboard`}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:`mouse`}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=o.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(o,e){if(this._canClose(o)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||`program`,this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(o),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(o=``,e=``){return this.overlayRef.updateSize({width:o,height:e}),this}addPanelClass(o){return this.overlayRef.addPanelClass(o),this}removePanelClass(o){return this.overlayRef.removePanelClass(o),this}_canClose(o){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(o,e,this.componentInstance))}};var Si=new v(`DialogScrollStrategy`,{providedIn:`root`,factory:()=>{let n=p(ae$3);return()=>te(n)}});var ki=new v(`DialogData`);var Ii=new v(`DefaultDialogConfig`);function Ai(n){let o=Z$3(n),e=new De;return{valueSignal:o,get value(){return o()},change:e,ngOnDestroy(){e.complete()}}}var kt=(()=>{class n{_injector=p(ae$3);_defaultOptions=p(Ii,{optional:!0});_parentDialog=p(n,{optional:!0,skipSelf:!0});_overlayContainer=p(ae$1);_idGenerator=p(Yh);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new F$1;_afterOpenedAtThisLevel=new F$1;_ariaHiddenElements=/* @__PURE__ */ new Map;_scrollStrategy=p(Si);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=zo$1(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Zo(void 0)));open(e,t){let i=this._defaultOptions||new Z;t=r(r({},i),t),t.id=t.id||this._idGenerator.getId(`cdk-dialog-`),t.id&&this.getDialogById(t.id);let a=this._getOverlayConfig(t),r$1=Vt(this._injector,a),l=new ae(r$1,t),m=this._attachContainer(r$1,l,t);if(l.containerInstance=m,!this.openDialogs.length){let h=this._overlayContainer.getContainerElement();m._focusTrapped?m._focusTrapped.pipe(wt$4(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(h)}):this._hideNonDialogContentFromAssistiveTechnology(h)}return this._attachDialogContent(e,l,m,t),this.openDialogs.push(l),l.closed.subscribe(()=>this._removeOpenDialog(l,!0)),this.afterOpened.next(l),l}closeAll(){wt(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){wt(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),wt(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new j({positionStrategy:e.positionStrategy||le().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,i){let a=i.injector||i.viewContainerRef?.injector,r=[{provide:Z,useValue:i},{provide:ae,useValue:t},{provide:st$1,useValue:e}],l;i.container?typeof i.container==`function`?l=i.container:(l=i.container.type,r.push(...i.container.providers(i))):l=St;let m=new Ct(l,i.viewContainerRef,ae$3.create({parent:a||this._injector,providers:r}));return e.attach(m).instance}_attachDialogContent(e,t,i,a){if(e instanceof uo){let r$2=this._createInjector(a,t,i,void 0),l={$implicit:a.data,dialogRef:t};a.templateContext&&(l=r(r({},l),typeof a.templateContext==`function`?a.templateContext():a.templateContext)),i.attachTemplatePortal(new H(e,null,l,r$2))}else{let r=this._createInjector(a,t,i,this._injector),l=i.attachComponentPortal(new Ct(e,a.viewContainerRef,r,null,a.bindings));t.componentRef=l,t.componentInstance=l.instance}}_createInjector(e,t,i,a){let r=e.injector||e.viewContainerRef?.injector,l=[{provide:ki,useValue:e.data},{provide:ae,useValue:t}];return e.providers&&(typeof e.providers==`function`?l.push(...e.providers(t,e,i)):l.push(...e.providers)),e.direction&&(!r||!r.get(g0,null,{optional:!0}))&&l.push({provide:g0,useValue:Ai(e.direction)}),ae$3.create({parent:r||a,providers:l})}_removeOpenDialog(e,t){let i=this.openDialogs.indexOf(e);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((a,r)=>{a?r.setAttribute(`aria-hidden`,a):r.removeAttribute(`aria-hidden`)}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let i=t.length-1;i>-1;i--){let a=t[i];a!==e&&a.nodeName!==`SCRIPT`&&a.nodeName!==`STYLE`&&!a.hasAttribute(`aria-live`)&&!a.hasAttribute(`popover`)&&(this._ariaHiddenElements.set(a,a.getAttribute(`aria-hidden`)),a.setAttribute(`aria-hidden`,`true`))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static ɵfac=function(t){return new(t||n)};static ɵprov=S$1({token:n,factory:n.ɵfac})}return n})();function wt(n,o){let e=n.length;for(;e--;)o(n[e])}var ai=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=gt$3({type:n});static ɵinj=Je$1({providers:[kt],imports:[we,Ut,a0,Ut]})}return n})();var nt=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings};var It=`mdc-dialog--open`;var oi=`mdc-dialog--opening`;var ri=`mdc-dialog--closing`;var Ti=150;var Ei=75;var Oi=(()=>{class n extends St{_animationStateChanged=new De;_animationsEnabled=!Zq();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?li(this._config.enterAnimationDuration)??Ti:0;_exitAnimationDuration=this._animationsEnabled?li(this._config.exitAnimationDuration)??Ei:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(si,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(oi,It)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(It),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(It),this._animationsEnabled?(this._hostElement.style.setProperty(si,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(ri)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(oi,ri)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),t}static ɵfac=(()=>{let e;return function(i){return(e||(e=$m(n)))(i||n)}})();static ɵcmp=(function(){function e(t,i){}return Fi({type:n,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function(i,a){i&2&&(xv(`id`,a._config.id),Ui$2(`aria-modal`,a._config.ariaModal)(`role`,a._config.role)(`aria-labelledby`,a._config.ariaLabel?null:a._ariaLabelledByQueue[0])(`aria-label`,a._config.ariaLabel)(`aria-describedby`,a._config.ariaDescribedBy||null),Vv(`_mat-animation-noopable`,!a._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,a._actionSectionCount>0))},features:[bv],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function(i,a){i&1&&(rc(0,`div`,0)(1,`div`,1),_v(2,e,0,0,`ng-template`,2),Tf()())},dependencies:[_i$1],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--%NS%mat-dialog-container-max-width, 560px);
  min-width: var(--%NS%mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--%NS%mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--%NS%mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--%NS%mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--%NS%mat-dialog-container-elevation-shadow, none);
  border-radius: var(--%NS%mat-dialog-container-shape, var(--%NS%mat-sys-corner-extra-large, 4px));
  background-color: var(--%NS%mat-dialog-container-color, var(--%NS%mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--%NS%mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--%NS%mat-dialog-subhead-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-dialog-subhead-font, var(--%NS%mat-sys-headline-small-font, inherit));
  line-height: var(--%NS%mat-dialog-subhead-line-height, var(--%NS%mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-subhead-size, var(--%NS%mat-sys-headline-small-size, 1rem));
  font-weight: var(--%NS%mat-dialog-subhead-weight, var(--%NS%mat-sys-headline-small-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-subhead-tracking, var(--%NS%mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--%NS%mat-dialog-supporting-text-color, var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--%NS%mat-dialog-supporting-text-font, var(--%NS%mat-sys-body-medium-font, inherit));
  line-height: var(--%NS%mat-dialog-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 1rem));
  font-weight: var(--%NS%mat-dialog-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--%NS%mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--%NS%mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2,changeDetection:1})})()}return n})();var si=`--mat-dialog-transition-duration`;function li(n){return n==null?null:typeof n==`number`?n:n.endsWith(`ms`)?HR(n.substring(0,n.length-2)):n.endsWith(`s`)?HR(n.substring(0,n.length-1))*1e3:n===`0`?0:null}var tt=(function(n){return n[n.OPEN=0]=`OPEN`,n[n.CLOSING=1]=`CLOSING`,n[n.CLOSED=2]=`CLOSED`,n})(tt||{});var Ie=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Vo(1);_beforeClosed=new Vo(1);_result;_closeFallbackTimeout;_state=tt.OPEN;_closeInteractionType;constructor(o,e,t){this._ref=o,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=o.id,o.addPanelClass(`mat-mdc-dialog-panel`),t._animationStateChanged.pipe(Ne(i=>i.state===`opened`),wt$4(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(Ne(i=>i.state===`closed`),wt$4(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),o.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),cw(this.backdropClick(),this.keydownEvents().pipe(Ne(i=>i.keyCode===27&&!this.disableClose&&!wI(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),di(this,i.type===`keydown`?`keyboard`:`mouse`))})}close(o){let e=this._config.closePredicate;e&&!e(o,this._config,this.componentInstance)||(this._result=o,this._containerInstance._animationStateChanged.pipe(Ne(t=>t.state===`closing`),wt$4(1)).subscribe(t=>{this._beforeClosed.next(o),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=tt.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(o){let e=this._ref.config.positionStrategy;return o&&(o.left||o.right)?o.left?e.left(o.left):e.right(o.right):e.centerHorizontally(),o&&(o.top||o.bottom)?o.top?e.top(o.top):e.bottom(o.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(o=``,e=``){return this._ref.updateSize(o,e),this}addPanelClass(o){return this._ref.addPanelClass(o),this}removePanelClass(o){return this._ref.removePanelClass(o),this}getState(){return this._state}_finishDialogClose(){this._state=tt.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function di(n,o,e){return n._closeInteractionType=o,n.close(e)}var Pi=new v(`MatMdcDialogData`);var Ri=new v(`mat-mdc-dialog-default-options`);var Ni=new v(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=p(ae$3);return()=>te(n)}});var Ae=(()=>{class n{_defaultOptions=p(Ri,{optional:!0});_scrollStrategy=p(Ni);_parentDialog=p(n,{optional:!0,skipSelf:!0});_idGenerator=p(Yh);_injector=p(ae$3);_dialog=p(kt);_animationsDisabled=Zq();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new F$1;_afterOpenedAtThisLevel=new F$1;dialogConfigClass=nt;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=zo$1(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Zo(void 0)));constructor(){this._dialogRefConstructor=Ie,this._dialogContainerType=Oi,this._dialogDataToken=Pi}open(e,t){let i;t=r(r({},this._defaultOptions||new nt),t),t.id=t.id||this._idGenerator.getId(`mat-mdc-dialog-`),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let a=this._dialog.open(e,s(r({},t),{positionStrategy:le(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()===`0`||t.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:Z,useValue:t}]},templateContext:()=>({dialogRef:i}),providers:(r,l,m)=>(i=new this._dialogRefConstructor(r,t,m),i.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:m},{provide:this._dialogDataToken,useValue:l.data},{provide:this._dialogRefConstructor,useValue:i},{provide:ae,useValue:null}])}));return i.componentRef=a.componentRef,i.componentInstance=a.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let r=this.openDialogs.indexOf(i);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static ɵfac=function(t){return new(t||n)};static ɵprov=S$1({token:n,factory:n.ɵfac})}return n})();var it=(()=>{class n{dialogRef=p(Ie,{optional:!0});_elementRef=p(Ze$2);_dialog=p(Ae);ariaLabel;type=`button`;dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=mi(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){this._elementRef.nativeElement.getAttribute(`aria-disabled`)!==`true`&&di(this.dialogRef,e.screenX===0&&e.screenY===0?`keyboard`:`mouse`,this.dialogResult)}static ɵfac=function(t){return new(t||n)};static ɵdir=ot$4({type:n,selectors:[[``,`mat-dialog-close`,``],[``,`matDialogClose`,``]],hostVars:2,hostBindings:function(t,i){t&1&&vc(`click`,function(r){return i._onButtonClick(r)}),t&2&&Ui$2(`aria-label`,i.ariaLabel||null)(`type`,i.type)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],type:`type`,dialogResult:[0,`mat-dialog-close`,`dialogResult`],_matDialogClose:[0,`matDialogClose`,`_matDialogClose`]},exportAs:[`matDialogClose`],features:[Yt$1]})}return n})();var ci=(()=>{class n{_dialogRef=p(Ie,{optional:!0});_elementRef=p(Ze$2);_dialog=p(Ae);ngOnInit(){this._dialogRef||(this._dialogRef=mi(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static ɵfac=function(t){return new(t||n)};static ɵdir=ot$4({type:n})}return n})();var at=(()=>{class n extends ci{id=p(Yh).getId(`mat-mdc-dialog-title-`);_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static ɵfac=(()=>{let e;return function(i){return(e||(e=$m(n)))(i||n)}})();static ɵdir=ot$4({type:n,selectors:[[``,`mat-dialog-title`,``],[``,`matDialogTitle`,``]],hostAttrs:[1,`mat-mdc-dialog-title`,`mdc-dialog__title`],hostVars:1,hostBindings:function(t,i){t&2&&xv(`id`,i.id)},inputs:{id:`id`},exportAs:[`matDialogTitle`],features:[bv]})}return n})();var ot=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=ot$4({type:n,selectors:[[``,`mat-dialog-content`,``],[`mat-dialog-content`],[``,`matDialogContent`,``]],hostAttrs:[1,`mat-mdc-dialog-content`,`mdc-dialog__content`],features:[TS([pe])]})}return n})();var rt=(()=>{class n extends ci{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static ɵfac=(()=>{let e;return function(i){return(e||(e=$m(n)))(i||n)}})();static ɵdir=ot$4({type:n,selectors:[[``,`mat-dialog-actions`,``],[`mat-dialog-actions`],[``,`matDialogActions`,``]],hostAttrs:[1,`mat-mdc-dialog-actions`,`mdc-dialog__actions`],hostVars:6,hostBindings:function(t,i){t&2&&Vv(`mat-mdc-dialog-actions-align-start`,i.align===`start`)(`mat-mdc-dialog-actions-align-center`,i.align===`center`)(`mat-mdc-dialog-actions-align-end`,i.align===`end`)},inputs:{align:`align`},features:[bv]})}return n})();function mi(n,o){let e=n.nativeElement.parentElement;for(;e&&!e.classList.contains(`mat-mdc-dialog-container`);)e=e.parentElement;return e?o.find(t=>t.id===e.id):null}var ge=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=gt$3({type:n});static ɵinj=Je$1({providers:[Ae],imports:[ai,we,Ut,i4]})}return n})();var Tt=new v(`MAT_MENU_PANEL`);var Te=(()=>{class n{_isAnchor;_elementRef=p(Ze$2);_document=p(j$3);_focusMonitor=p($R);_parentMenu=p(Tt,{optional:!0});_changeDetectorRef=p($i$2);role=`menuitem`;disabled=!1;disabledInteractive=!1;disableRipple=!1;_hovered=new F$1;_focused=new F$1;_highlighted=!1;_triggersSubmenu=!1;constructor(){p(Es).load(Nt),this._parentMenu?.addItem?.(this),this._isAnchor=this._elementRef.nativeElement.tagName===`A`}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled&&!this.disabledInteractive?`-1`:`0`}_getAriaDisabled(){return this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabled(){return this.disabledInteractive||!this.disabled?null:!0}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp`);for(let i=0;i<t.length;i++)t[i].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`],t=[`mat-icon, [matMenuItemIcon]`,`*`];function i(a,r){a&1&&(Sg(),rc(0,`svg`,2),yc(1,`polygon`,3),Tf())}return Fi({type:n,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:12,hostBindings:function(r,l){r&1&&vc(`click`,function(h){return l._checkDisabled(h)})(`mouseenter`,function(){return l._handleMouseEnter()}),r&2&&(Ui$2(`role`,l.role)(`tabindex`,l._getTabIndex())(`aria-disabled`,l._getAriaDisabled())(`disabled`,l._getDisabled()),Vv(`mat-mdc-menu-item-highlighted`,l._highlighted)(`mat-mdc-menu-item-submenu-trigger`,l._triggersSubmenu)(`mat-mdc-menu-item-disabled`,l.disabled)(`mat-mdc-menu-item-disabled-interactive`,l.disabledInteractive))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,zi$2],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,zi$2],disableRipple:[2,`disableRipple`,`disableRipple`,zi$2]},exportAs:[`matMenuItem`],ngContentSelectors:t,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(r,l){r&1&&(aT(e),cT(0),rc(1,`span`,0),cT(2,1),Tf(),yc(3,`div`,1),HS(4,i,2,0,`svg`,2)),r&2&&(GC(3),Nv(`matRippleDisabled`,l.disableRipple||l.disabled)(`matRippleTrigger`,l._getHostElement()),GC(),zS(l._triggersSubmenu?4:-1))},dependencies:[Gt$1],encapsulation:2})})()}return n})();var Vi=new v(`MatMenuContent`);var zi=new v(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var At=`_mat-menu-enter`;var st=`_mat-menu-exit`;var _e=(()=>{class n{_elementRef=p(Ze$2);_changeDetectorRef=p($i$2);_injector=p(ae$3);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Zq();_allItems;_directDescendantItems=new hr$1;_classList={};_panelAnimationState=`void`;_animationDone=new F$1;_isAnimating=Z$3(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,i=r({},this._classList);t&&t.length&&t.split(` `).forEach(a=>{i[a]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(a=>{i[a]=!0}),this._elementRef.nativeElement.className=``),this._classList=i}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new De;close=this.closed;panelId=p(Yh).getId(`mat-menu-panel-`);constructor(){let e=p(zi);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Kh(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd().skipPredicate(e=>e.disabled&&!e.disabledInteractive),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(Zo(this._directDescendantItems),$e$2(e=>cw(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let i=e.toArray(),a=Math.max(0,Math.min(i.length-1,t.activeItemIndex||0));i[a]&&!i[a].disabled?t.setActiveItem(a):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Zo(this._directDescendantItems),$e$2(t=>cw(...t.map(i=>i._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,i=this._keyManager;switch(t){case 27:wI(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&i.setFocusOrigin(`keyboard`),i.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=xi$1(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=s(r({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===st;(t||e===At)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===At||e===st)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(st),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?At:st)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Zo(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`*`];function t(i,a){if(i&1){let r=JS();Mf(0,`div`,0),kv(`click`,function(){pg(r);let m=iT();return gg(m.closed.emit(`click`))})(`animationstart`,function(m){pg(r);let h=iT();return gg(h._onAnimationStart(m.animationName))})(`animationend`,function(m){pg(r);let h=iT();return gg(h._onAnimationDone(m.animationName))})(`animationcancel`,function(m){pg(r);let h=iT();return gg(h._onAnimationDone(m.animationName))}),Mf(1,`div`,1),cT(2),Nf()()}if(i&2){let r=iT();wT(r._classList),Vv(`mat-menu-panel-animations-disabled`,r._animationsDisabled)(`mat-menu-panel-exit-animation`,r._panelAnimationState===`void`)(`mat-menu-panel-animating`,r._isAnimating()),xv(`id`,r.panelId),Ui$2(`aria-label`,r.ariaLabel||null)(`aria-labelledby`,r.ariaLabelledby||null)(`aria-describedby`,r.ariaDescribedby||null)}}return Fi({type:n,selectors:[[`mat-menu`]],contentQueries:function(a,r,l){if(a&1&&Dc(l,Vi,5)(l,Te,5)(l,Te,4),a&2){let m;Af(m=Rf())&&(r.lazyContent=m.first),Af(m=Rf())&&(r._allItems=m),Af(m=Rf())&&(r.items=m)}},viewQuery:function(a,r){if(a&1&&Lv(uo,5),a&2){let l;Af(l=Rf())&&(r.templateRef=l.first)}},hostVars:3,hostBindings:function(a,r){a&2&&Ui$2(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,zi$2],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,i=>i==null?null:zi$2(i)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[oD([{provide:Tt,useExisting:n}])],ngContentSelectors:e,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(a,r){a&1&&(aT(),Sv(0,t,3,12,`ng-template`))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--%NS%mat-menu-item-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-menu-item-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-menu-item-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-menu-item-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-menu-item-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--%NS%mat-menu-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-menu-container-color, var(--%NS%mat-sys-surface-container));
  box-shadow: var(--%NS%mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--%NS%mat-menu-divider-color, var(--%NS%mat-sys-surface-variant));
  margin-bottom: var(--%NS%mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--%NS%mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--%NS%mat-menu-item-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--%NS%mat-menu-item-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--%NS%mat-menu-item-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled], .mat-mdc-menu-item.mat-mdc-menu-item-disabled {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after, .mat-mdc-menu-item.mat-mdc-menu-item-disabled::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--%NS%mat-menu-item-spacing, 12px);
  height: var(--%NS%mat-menu-item-icon-size, 24px);
  width: var(--%NS%mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--%NS%mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--%NS%mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--%NS%mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--%NS%mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--%NS%mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--%NS%mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})})()}return n})();var ji=new v(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=p(ae$3);return()=>Pt(n)}});var fe=/* @__PURE__ */ new WeakMap;var Ui=(()=>{class n{_canHaveBackdrop;_element=p(Ze$2);_viewContainerRef=p(Mn$1);_menuItemInstance=p(Te,{optional:!0,self:!0});_dir=p(g0,{optional:!0});_focusMonitor=p($R);_ngZone=p(Y$2);_injector=p(ae$3);_scrollStrategy=p(ji);_changeDetectorRef=p($i$2);_animationsDisabled=Zq();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=re$1.EMPTY;_menuCloseSubscription=re$1.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=p(Tt,{optional:!0});this._parentMaterialMenu=t instanceof _e?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&fe.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let i=fe.get(t);fe.set(t,this),i&&i!==this&&i._closeMenu();let a=this._createOverlay(t),r=a.getConfig(),l=r.positionStrategy;this._setPosition(t,l),this._canHaveBackdrop?r.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:r.hasBackdrop=t.hasBackdrop??!1,a.hasAttached()||(a.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof _e&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(Ut$2(t.close)).subscribe(()=>{l.withLockedPosition(!1).reapplyLastPosition(),l.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,i=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),i instanceof _e&&this._ownsMenu(i)?(this._pendingRemoval=i._animationDone.pipe(wt$4(1)).subscribe(()=>{t.detach(),fe.has(i)||i.lazyContent?.detach()}),i._setIsOpen(!1)):(t.detach(),i?.lazyContent?.detach()),i&&this._ownsMenu(i)&&fe.delete(i),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=Vt(this._injector,t),this._overlayRef.keydownEvents().subscribe(i=>{this._menu instanceof _e&&this._menu._handleKeydown(i)})}return this._overlayRef}_getOverlayConfig(e){return new j({positionStrategy:Dt$1(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(i=>{this._ngZone.run(()=>{let a=i.connectionPair.overlayX===`start`?`after`:`before`,r=i.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(a,r)})})}_setPosition(e,t){let[i,a]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[r,l]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[m,h]=[r,l],[j,gt]=[i,a],be=0;if(this._triggersSubmenu()){if(gt=i=e.xPosition===`before`?`start`:`end`,a=j=i===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let Pt=this._parentMaterialMenu.items.first;this._parentInnerPadding=Pt?Pt._getHostElement().offsetTop:0}be=r===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(m=r===`top`?`bottom`:`top`,h=l===`top`?`bottom`:`top`);t.withPositions([{originX:i,originY:m,overlayX:j,overlayY:r,offsetY:be},{originX:a,originY:m,overlayX:gt,overlayY:r,offsetY:be},{originX:i,originY:h,overlayX:j,overlayY:l,offsetY:-be},{originX:a,originY:h,overlayX:gt,overlayY:l,offsetY:-be}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:R$1(),a=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Ne(r=>this._menuOpen&&r!==this._menuItemInstance)):R$1();return cw(e,i,a,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new H(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return fe.get(e)===this}_triggerIsAriaDisabled(){return zi$2(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){mf()};static ɵdir=ot$4({type:n})}return n})();var gi=(()=>{class n extends Ui{_cleanupTouchstart;_hoverSubscription=re$1.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new De;onMenuOpen=this.menuOpened;menuClosed=new De;onMenuClose=this.menuClosed;constructor(){super(!0);let e=p(gr);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{jh(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){Fh(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||n)};static ɵdir=ot$4({type:n,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,i){t&1&&vc(`click`,function(r){return i._handleClick(r)})(`mousedown`,function(r){return i._handleMousedown(r)})(`keydown`,function(r){return i._handleKeydown(r)}),t&2&&Ui$2(`aria-haspopup`,i.menu?`menu`:null)(`aria-expanded`,i.menuOpen)(`aria-controls`,i.menuOpen?i.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[bv]})}return n})();var fi=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=gt$3({type:n});static ɵinj=Je$1({imports:[wt$2,we,i4,wt$1]})}return n})();var lt=class n{zone=p(Y$2);deferred=null;_canInstall=Z$3(!1);canInstall=this._canInstall.asReadonly();constructor(){window.addEventListener(`beforeinstallprompt`,o=>{o.preventDefault(),this.deferred=o,this.zone.run(()=>this._canInstall.set(!0))}),window.addEventListener(`appinstalled`,()=>{this.deferred=null,this.zone.run(()=>this._canInstall.set(!1))})}async install(){let o=this.deferred;o&&(this.deferred=null,this._canInstall.set(!1),await o.prompt(),await o.userChoice)}static ɵfac=function(e){return new(e||n)};static ɵprov=L({token:n,factory:n.ɵfac,providedIn:`root`})};var Gi=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=Fi({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(t,i){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return n})();var qi={passive:!0};var _i=(()=>{class n{_platform=p(Dt$4);_ngZone=p(Y$2);_renderer=p(Kt$2).createRenderer(null,null);_styleLoader=p(Es);_monitoredElements=/* @__PURE__ */ new Map;monitor(e){if(!this._platform.isBrowser)return ye$2;this._styleLoader.load(Gi);let t=ws(e),i=this._monitoredElements.get(t);if(i)return i.subject;let a=new F$1,r=`cdk-text-field-autofilled`,l=h=>{h.animationName===`cdk-text-field-autofill-start`&&!t.classList.contains(r)?(t.classList.add(r),this._ngZone.run(()=>a.next({target:h.target,isAutofilled:!0}))):h.animationName===`cdk-text-field-autofill-end`&&t.classList.contains(r)&&(t.classList.remove(r),this._ngZone.run(()=>a.next({target:h.target,isAutofilled:!1})))},m=this._ngZone.runOutsideAngular(()=>(t.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(t,`animationstart`,l,qi)));return this._monitoredElements.set(t,{subject:a,unlisten:m}),a}stopMonitoring(e){let t=ws(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove(`cdk-text-field-autofill-monitored`),t.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static ɵfac=function(t){return new(t||n)};static ɵprov=S$1({token:n,factory:n.ɵfac})}return n})();var bi=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=gt$3({type:n});static ɵinj=Je$1({})}return n})();var yi=new v(`MAT_INPUT_VALUE_ACCESSOR`);var Yi=[`button`,`checkbox`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`];var Xi=new v(`MAT_INPUT_CONFIG`);var vi=(()=>{class n{_elementRef=p(Ze$2);_platform=p(Dt$4);ngControl=p(_,{optional:!0,self:!0});_autofillMonitor=p(_i);_ngZone=p(Y$2);_formField=p(bt$2,{optional:!0});_renderer=p(gr);_uid=p(Yh).getId(`mat-input-`);_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=p(Xi,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new F$1;controlType=`mat-input`;autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Xq(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(de$1.required)??!1}set required(e){this._required=Xq(e)}_required;get type(){return this._type}set type(e){this._type=e||`text`,this._validateType(),!this._isTextarea&&Uq().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type=`text`;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Xq(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=[`date`,`datetime`,`datetime-local`,`month`,`time`,`week`].filter(e=>Uq().has(e));constructor(){let e=p(qt$1,{optional:!0}),t=p(Xt,{optional:!0}),i=p(Qn),a=p(yi,{optional:!0,self:!0}),r=p(fn,{optional:!0,self:!0}),l=this._elementRef.nativeElement,m=l.nodeName.toLowerCase();a?lr(a.value)?this._signalBasedValueAccessor=a:this._inputValueAccessor=a:this._inputValueAccessor=l,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(l,`keyup`,this._iOSKeyupListener)}),this._errorStateTracker=new Ze$1(i,r||this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=m===`select`,this._isTextarea=m===`textarea`,this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=l.multiple?`mat-native-select-multiple`:`mat-native-select`),this._signalBasedValueAccessor&&yi$1(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type===`number`?(t.type=`text`,t.setSelectionRange(0,0),t.type=`number`):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute(`placeholder`,e):t.removeAttribute(`placeholder`)}}_getPlaceholder(){return this.placeholder||null}_validateType(){Yi.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(t){return new(t||n)};static ɵdir=ot$4({type:n,selectors:[[`input`,`matInput`,``],[`textarea`,`matInput`,``],[`select`,`matNativeControl`,``],[`input`,`matNativeControl`,``],[`textarea`,`matNativeControl`,``]],hostAttrs:[1,`mat-mdc-input-element`],hostVars:21,hostBindings:function(t,i){t&1&&vc(`focus`,function(){return i._focusChanged(!0)})(`blur`,function(){return i._focusChanged(!1)})(`input`,function(){return i._onInput()}),t&2&&(xv(`id`,i.id)(`disabled`,i.disabled&&!i.disabledInteractive)(`required`,i.required),Ui$2(`name`,i.name||null)(`readonly`,i._getReadonlyAttribute())(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null)(`aria-invalid`,i.empty&&i.required?null:i.errorState)(`aria-required`,i.required)(`id`,i.id),Vv(`mat-input-server`,i._isServer)(`mat-mdc-form-field-textarea-control`,i._isInFormField&&i._isTextarea)(`mat-mdc-form-field-input-control`,i._isInFormField)(`mat-mdc-input-disabled-interactive`,i.disabledInteractive)(`mdc-text-field__input`,i._isInFormField)(`mat-mdc-native-select-inline`,i._isInlineSelect()))},inputs:{disabled:`disabled`,id:`id`,placeholder:`placeholder`,name:`name`,required:`required`,type:`type`,errorStateMatcher:`errorStateMatcher`,userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],value:`value`,readonly:`readonly`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,zi$2]},exportAs:[`matInput`],features:[oD([{provide:gt$2,useExisting:n}]),Yt$1]})}return n})();var Ci=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=gt$3({type:n});static ɵinj=Je$1({imports:[$n,$n,bi,i4]})}return n})();var Ki=`DELETE`;var dt=class n{phrase=Ki;typed=Z$3(``);static ɵfac=function(e){return new(e||n)};static ɵcmp=Fi({type:n,selectors:[[`app-delete-data-dialog`]],decls:14,vars:5,consts:[[`mat-dialog-title`,``],[1,`full`],[`matInput`,``,`autocomplete`,`off`,3,`ngModelChange`,`ngModel`],[`align`,`end`],[`mat-button`,``,3,`mat-dialog-close`],[`mat-flat-button`,``,3,`disabled`,`mat-dialog-close`]],template:function(e,t){e&1&&(rc(0,`h2`,0),OT(1,`Delete all data`),Tf(),rc(2,`mat-dialog-content`)(3,`p`),OT(4,` This clears everything this browser remembers about your data file. It does not delete the file itself. After this, delete the file (and its backup copy) from your computer yourself. `),Tf(),rc(5,`mat-form-field`,1)(6,`mat-label`),OT(7),Tf(),rc(8,`input`,2),O_(),vc(`ngModelChange`,function(a){return t.typed.set(a)}),Tf()()(),rc(9,`mat-dialog-actions`,3)(10,`button`,4),OT(11,`Cancel`),Tf(),rc(12,`button`,5),OT(13,` Delete all data `),Tf()()),e&2&&(GC(7),xf(`Type `,t.phrase,` to confirm`),GC(),Nv(`ngModel`,t.typed()),L_(),GC(2),Nv(`mat-dialog-close`,!1),GC(2),Nv(`disabled`,t.typed()!==t.phrase)(`mat-dialog-close`,!0))},dependencies:[Sn,ke,Mn,Kt$1,xn,yn,ge,it,at,rt,ot,$n,Xe$1,se$1,Ci,vi],styles:[`.full[_ngcontent-%COMP%]{width:100%}`]})};var Ot=`This tool gives general information for budgeting and planning. It is not financial, tax or legal advice.`;var mt=class n{text=Ot;static ɵfac=function(e){return new(e||n)};static ɵcmp=Fi({type:n,selectors:[[`app-disclaimer-dialog`]],decls:10,vars:2,consts:[[`mat-dialog-title`,``],[`align`,`end`],[`mat-flat-button`,``,3,`mat-dialog-close`]],template:function(e,t){e&1&&(rc(0,`h2`,0),OT(1,`Before you start`),Tf(),rc(2,`mat-dialog-content`)(3,`p`),OT(4),Tf(),rc(5,`p`),OT(6,` Your data stays on this device, in a file you control. Nothing is sent over the internet. `),Tf()(),rc(7,`mat-dialog-actions`,1)(8,`button`,2),OT(9,`I understand`),Tf()()),e&2&&(GC(4),Zv(t.text),GC(4),Nv(`mat-dialog-close`,!0))},dependencies:[xn,yn,ge,it,at,rt,ot],encapsulation:2})};function Zi(n,o){n&1&&(rc(0,`span`),OT(1,`Saving…`),Tf())}function $i(n,o){n&1&&(rc(0,`span`),OT(1,`Unsaved changes`),Tf())}function Ji(n,o){if(n&1&&(rc(0,`span`,0),OT(1),Tf()),n&2){let e=iT();GC(),Zv(e.store.error())}}function ea(n,o){n&1&&(OT(0),KT(1,`date`)),n&2&&xf(` Saved `,XT(1,1,o,`shortTime`),` `)}function ta(n,o){n&1&&OT(0,` No changes `)}function na(n,o){if(n&1&&(rc(0,`span`),HS(1,ea,2,4)(2,ta,1,0),Tf()),n&2){let e,t=iT();GC(),zS((e=t.store.savedAt())?1:2,e)}}function ia(n,o){if(n&1){let e=JS();rc(0,`button`,2),vc(`click`,function(){pg(e);let i=iT();return gg(i.store.save())}),OT(1,`Save`),Tf()}}var ut=class n{store=p(Yi$1);showSave=Ic(()=>this.store.mode===`download`&&(this.store.dirty()||this.store.saveState()===`error`));static ɵfac=function(e){return new(e||n)};static ɵcmp=Fi({type:n,selectors:[[`app-save-indicator`]],decls:5,vars:2,consts:[[`role`,`alert`,1,`error`],[`mat-flat-button`,``,`type`,`button`],[`mat-flat-button`,``,`type`,`button`,3,`click`]],template:function(e,t){if(e&1&&(HS(0,Zi,2,0,`span`)(1,$i,2,0,`span`)(2,Ji,2,1,`span`,0)(3,na,3,1,`span`),HS(4,ia,2,0,`button`,1)),e&2){let i;zS((i=t.store.saveState())===`saving`?0:i===`unsaved`?1:i===`error`?2:3),GC(4),zS(t.showSave()?4:-1)}},dependencies:[xn,yn,QM],styles:[`[_nghost-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;font:var(--%NS%mat-sys-label-large)}.error[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error)}`]})};var aa=(n,o)=>o.path;function oa(n,o){if(n&1&&(rc(0,`a`,16)(1,`mat-icon`,10),OT(2),Tf(),rc(3,`span`),OT(4),Tf()()),n&2){let e=o.$implicit;Nv(`routerLink`,e.path),Ui$2(`aria-label`,e.label),GC(2),Zv(e.icon),GC(2),Zv(e.label)}}function ra(n,o){if(n&1&&(rc(0,`nav`,6),qS(1,oa,5,4,`a`,16,aa),Tf()),n&2){let e=iT();GC(),ZS(e.nav)}}function sa(n,o){n&1&&(rc(0,`a`,8)(1,`mat-icon`,10),OT(2,`help_outline`),Tf(),rc(3,`span`),OT(4,`Help`),Tf()())}function la(n,o){n&1&&yc(0,`app-save-indicator`)}function da(n,o){if(n&1&&(rc(0,`span`,19)(1,`mat-icon`,10),OT(2),Tf(),OT(3),Tf(),HS(4,la,1,0,`app-save-indicator`)),n&2){let e=iT(2);Vv(`sample`,e.store.isSample()),GC(2),Zv(e.store.isSample()?`science`:`description`),GC(),xf(` `,e.store.fileName(),` `),GC(),zS(e.store.isSample()?-1:4)}}function ca(n,o){if(n&1){let e=JS();rc(0,`button`,20),vc(`click`,function(){pg(e);let i=iT(2);return gg(i.installPrompt.install())}),OT(1,` Install app `),Tf()}}function ma(n,o){if(n&1){let e=JS();rc(0,`button`,21)(1,`mat-icon`,5),OT(2,`more_vert`),Tf()(),rc(3,`mat-menu`,null,0)(5,`button`,22),vc(`click`,function(){pg(e);let i=iT(2);return gg(i.store.exportCopy())}),OT(6,`Export copy`),Tf(),rc(7,`button`,22),vc(`click`,function(){pg(e);let i=iT(2);return gg(i.closeFile())}),OT(8,`Close file`),Tf(),rc(9,`button`,22),vc(`click`,function(){pg(e);let i=iT(2);return gg(i.deleteAll())}),OT(10,`Delete all data…`),Tf()()}if(n&2){let e=dT(4);Nv(`matMenuTriggerFor`,e)}}function ua(n,o){if(n&1&&(rc(0,`header`,12),HS(1,da,5,5),yc(2,`span`,17),HS(3,ca,2,0,`button`,18),HS(4,ma,11,1),Tf()),n&2){let e=iT();GC(),zS(e.store.isOpen()?1:-1),GC(2),zS(e.installPrompt.canInstall()?3:-1),GC(),zS(e.store.isOpen()?4:-1)}}function pa(n,o){if(n&1){let e=JS();rc(0,`div`,13)(1,`span`),OT(2,`No safety copy yet. Without it, a bad save cannot be undone.`),Tf(),rc(3,`button`,20),vc(`click`,function(){pg(e);let i=iT();return gg(i.store.setUpBackup())}),OT(4,` Set up safety copy `),Tf()()}}var pt=class n$1{store=p(Yi$1);storage=p(ot$3);dialog=p(Ae);router=p(Mr);installPrompt=p(lt);theme=p(n);disclaimer=Ot;nav=[{path:`/dashboard`,label:`Dashboard`,icon:`space_dashboard`},{path:`/import`,label:`Import`,icon:`upload_file`},{path:`/budget`,label:`Budget`,icon:`pie_chart`},{path:`/debts`,label:`Debts`,icon:`credit_card`},{path:`/goals`,label:`Goals`,icon:`flag`},{path:`/checkin`,label:`Check-in`,icon:`event_available`},{path:`/progress`,label:`Progress`,icon:`show_chart`},{path:`/help`,label:`Help`,icon:`help_outline`}];async ngOnInit(){if((await this.storage.getSettings()).disclaimerAccepted)return;this.dialog.open(mt,{disableClose:!0}).beforeClosed().subscribe(()=>{this.storage.patchSettings({disclaimerAccepted:!0})})}async closeFile(){await this.store.close()&&await this.router.navigateByUrl(`/welcome`)}async deleteAll(){await new Promise(e=>this.dialog.open(dt).afterClosed().subscribe(t=>e(t===!0)))&&(await this.store.deleteAll(),await this.router.navigateByUrl(`/welcome`))}static ɵfac=function(e){return new(e||n$1)};static ɵcmp=Fi({type:n$1,selectors:[[`app-shell`]],decls:23,vars:8,consts:[[`menu`,`matMenu`],[1,`layout`],[1,`side`],[`routerLink`,`/`,1,`brand`],[`aria-hidden`,`true`,1,`mark`],[1,`material-icons`],[`aria-label`,`Main`,1,`nav`],[1,`side-foot`],[`routerLink`,`/help`,`routerLinkActive`,`active`,`aria-label`,`Help`,1,`nav-link`],[`type`,`button`,`role`,`switch`,`aria-label`,`Dark mode`,1,`nav-link`,3,`click`],[`aria-hidden`,`true`,1,`material-icons`],[1,`page`],[1,`top`],[`role`,`status`,1,`notice`],[1,`content`],[1,`footer`],[`routerLinkActive`,`active`,`ariaCurrentWhenActive`,`page`,1,`nav-link`,3,`routerLink`],[1,`spacer`],[`mat-stroked-button`,``,`type`,`button`],[1,`file`],[`mat-stroked-button`,``,`type`,`button`,3,`click`],[`mat-icon-button`,``,`type`,`button`,`aria-label`,`File menu`,3,`matMenuTriggerFor`],[`mat-menu-item`,``,`type`,`button`,3,`click`]],template:function(e,t){e&1&&(rc(0,`div`,1)(1,`aside`,2)(2,`a`,3)(3,`span`,4)(4,`mat-icon`,5),OT(5,`savings`),Tf()(),rc(6,`span`),OT(7,`Finance Health Check`),Tf()(),HS(8,ra,3,0,`nav`,6),rc(9,`div`,7),HS(10,sa,5,0,`a`,8),rc(11,`button`,9),vc(`click`,function(){return t.theme.toggle()}),rc(12,`mat-icon`,10),OT(13),Tf(),rc(14,`span`),OT(15),Tf()()()(),rc(16,`div`,11),HS(17,ua,5,3,`header`,12),HS(18,pa,5,0,`div`,13),rc(19,`main`,14),yc(20,`router-outlet`),Tf(),rc(21,`footer`,15),OT(22),Tf()()()),e&2&&(GC(8),zS(t.store.isOpen()?8:-1),GC(2),zS(t.store.isOpen()?-1:10),GC(),Ui$2(`aria-checked`,t.theme.dark()),GC(2),Zv(t.theme.dark()?`light_mode`:`dark_mode`),GC(2),Zv(t.theme.dark()?`Light mode`:`Dark mode`),GC(2),zS(t.store.isOpen()||t.installPrompt.canInstall()?17:-1),GC(),zS(t.store.backupMissing()?18:-1),GC(4),Zv(t.disclaimer))},dependencies:[xn,yn,Rt$1,ge,fs,ls,fi,_e,Te,gi,fu,MR,Rh,ut],styles:[`[_nghost-%COMP%]{display:block;min-height:100vh;background:var(--%NS%app-surface)}.layout[_ngcontent-%COMP%]{display:flex;min-height:100vh}.side[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;flex:0 0 14.5rem;box-sizing:border-box;padding:1rem .75rem;position:sticky;top:0;height:100vh;overflow-y:auto}.brand[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.625rem;padding:.25rem .5rem;color:inherit;text-decoration:none;font:700 1.0625rem/1.2 Roboto,sans-serif;letter-spacing:-.01em}.mark[_ngcontent-%COMP%]{display:grid;place-items:center;flex:none;width:2.25rem;height:2.25rem;border-radius:50%;background:var(--%NS%mat-sys-primary);color:var(--%NS%mat-sys-on-primary)}.mark[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.25rem;width:1.25rem;height:1.25rem}.nav[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.125rem}.nav-link[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;padding:.625rem .75rem;border:0;border-radius:.75rem;background:transparent;color:var(--%NS%mat-sys-on-surface);font:var(--%NS%mat-sys-label-large);font-size:.9375rem;text-decoration:none;text-align:left;white-space:nowrap;cursor:pointer}.nav-link[_ngcontent-%COMP%]:hover{background:var(--%NS%app-hover)}.nav-link.active[_ngcontent-%COMP%]{background:var(--%NS%app-bg);font-weight:700}.nav-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{flex:none;color:var(--%NS%mat-sys-on-surface-variant)}.side-foot[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.125rem;margin-top:auto}.page[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;background:var(--%NS%app-bg);border-top-left-radius:1.75rem}.top[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:.75rem;padding:.75rem 1.5rem 0;min-height:2.5rem}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.file[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.375rem;padding:.25rem .75rem .25rem .5rem;border-radius:999px;background:var(--%NS%app-surface);border:1px solid var(--%NS%app-border);font:var(--%NS%mat-sys-label-large);overflow-wrap:anywhere}.file[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.125rem;width:1.125rem;height:1.125rem;color:var(--%NS%mat-sys-on-surface-variant)}.file.sample[_ngcontent-%COMP%]{background:var(--%NS%app-warn-bg);color:var(--%NS%app-warn-fg);border-color:transparent}.file.sample[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:inherit}.content[_ngcontent-%COMP%]{flex:1 1 auto;padding:1.25rem 1.5rem 2rem}.footer[_ngcontent-%COMP%]{padding:.75rem 1.5rem;font:var(--%NS%mat-sys-body-small);color:var(--%NS%mat-sys-on-surface-variant)}.notice[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:.75rem;margin:.75rem 1.5rem 0;padding:.625rem 1rem;border-radius:.75rem;background:var(--%NS%app-warn-bg);color:var(--%NS%app-warn-fg)}@media(max-width:900px){.layout[_ngcontent-%COMP%]{flex-direction:column}.side[_ngcontent-%COMP%]{flex:none;flex-direction:row;flex-wrap:wrap;align-items:center;gap:.5rem;position:static;height:auto;padding:.5rem .75rem;overflow:visible}.brand[_ngcontent-%COMP%]{flex:1 1 auto;min-width:0}.side-foot[_ngcontent-%COMP%]{flex-direction:row;margin:0}.side-foot[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}.nav[_ngcontent-%COMP%]{order:3;flex:1 1 100%;flex-direction:row;min-width:0;overflow-x:auto;padding-bottom:.25rem}.nav-link[_ngcontent-%COMP%]{padding:.5rem .75rem}.nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{display:none}.page[_ngcontent-%COMP%]{border-top-left-radius:0}.top[_ngcontent-%COMP%]{padding:.75rem 1rem 0}.content[_ngcontent-%COMP%]{padding:1rem 1rem 1.5rem}.notice[_ngcontent-%COMP%]{margin:.75rem 1rem 0}.footer[_ngcontent-%COMP%]{padding:.75rem 1rem}}`]})};var ht=class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=Fi({type:n,selectors:[[`app-root`]],decls:1,vars:0,template:function(e,t){e&1&&yc(0,`app-shell`)},dependencies:[pt],encapsulation:2})};gN(ht,ii).catch(n=>console.error(n));export{lt$2 as A,gt$2 as B,Re as C,ft as D,de$1 as E,Qn as F,at$3 as G,n as H,Xe$1 as I,ur as J,fs as K,Ze$1 as L,qt$1 as M,tn as N,j$1 as O,$n as P,bt$2 as R,Q$1 as S,_ as T,Uo as U,se$1 as V,Yi$1 as W,D as _,Pt as a,In as b,me as c,xt as d,Gt$1 as f,yn as g,xn as h,Mt as i,ot$2 as j,ke as k,we as l,wt$2 as m,Dt$1 as n,Vt as o,Nt as p,ls as q,F as r,W as s,Ct as t,wt$1 as u,En as v,Xt as w,Mn as x,Fn as y,fn as z};