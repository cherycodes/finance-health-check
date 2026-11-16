import{A as $n,B as Te,C as nn,E as w,F as fn$1,G as _t,I as gt,J as zo,K as lo$1,L as se,M as Xe$1,N as Ze,P as bt,R as Bo,U as Xe,V as U,a as Rt,c as ye,g as V,i as N$1,j as Qn,m as Qt,n as Ht,o as me,p as N,q as wt,s as xt,t as Dt,y as fe$1,z as De}from"./main-RHNI5NID.js";import{c as Re,i as De$1,n as Ae,o as Me,r as Ce,s as Pe,t as $e}from"./chunk-CzEKyi3W.js";import{n as b}from"./chunk-Be4cRJhE.js";import{i as Tn}from"./chunk-BVl6bjqj.js";import{n as s,t as n}from"./chunk-_rBx5Aja.js";import{n as I,r as _,t as A}from"./chunk-CSL7lOsM.js";import{t as i}from"./chunk-BCbIuHEq.js";import"./chunk-7vnyJKO-.js";import{t as N$2}from"./chunk-DHWc_unt.js";import"./chunk-DnPlXeTF.js";import{n as In}from"./chunk-x1SvCLhT.js";import{Ar as ve,Bn as is,Br as xO,C as FE,Ct as Qw,D as Ft$1,Dr as ut,E as Fe,F as Ht$1,Fn as hp,Ft as VS,G as JS,Gr as yC,Gt as Xs,Hn as jT,Hr as xR,I as Hu,In as hr,J as Jl,Jt as YE,K as JY,Kt as Xw,Lr as wq,Lt as Vr,Mr as wC,N as Hd,Nn as gO,Nr as wF,O as GA,On as em,Or as vC,Ot as TC,Pr as wO,Pt as Ur,Qr as r,R as IC,Rn as iC,Rt as W,Sr as tC,St as Qo,Tn as e9,Tr as tm,Tt as Rx,Vn as jE,Wr as xx,Xt as Yo,Yt as Yl,Zr as zx,_ as DC,_n as bs,_t as Px,a as An,an as Zo,ar as pP,at as MO,br as ss,bt as Qg,cn as _Y,d as CC,dn as am,dr as qx,er as nm,et as LT,f as CO,fr as r9,ft as Ox,gt as Pt$1,h as Cq,in as Zl,ir as om,it as MF,kt as Tn$1,l as Br,lr as ql,lt as NO,mn as bO,mr as rm,mt as Pl,ni as w$1,nn as Ze$1,on as Zs,p as Ca,pn as bC,pt as PO,rt as MC,s as Ax,ti as v,tn as ZE,tt as M,u as Bx,ur as qw,ut as Nx,vr as si,wn as dt,x as EC,xt as Ql,y as De$2,yr as sr,zn as im,zr as x7,zt as W7}from"./chunk-CKrPsxX0.js";var Ta=v((cn,sn)=>{"use strict";((a,n)=>{typeof define==`function`&&define.amd?define([],n):typeof sn==`object`&&typeof cn<`u`?sn.exports=n():a.Papa=n()})(cn,function a(){var n=typeof self<`u`?self:typeof window<`u`?window:n!==void 0?n:{},e=!n.document&&!!n.postMessage,t=n.IS_PAPA_WORKER||!1,r={},p=0,d={};function u(l){return l.charCodeAt(0)===65279?l.slice(1):l}function _(l){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine=``,this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(c){var h=Wt(c);h.chunkSize=parseInt(h.chunkSize),c.step||c.chunk||(h.chunkSize=null),this._handle=new g(h),(this._handle.streamer=this)._config=h}.call(this,l),this.parseChunk=function(c,h){var y=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<y){let B=this._config.newline;B||(f=this._config.quoteChar||`"`,B=this._handle.guessLineEndings(c,f)),c=[...c.split(B).slice(y)].join(B)}this.isFirstChunk&&ne(this._config.beforeFirstChunk)&&(f=this._config.beforeFirstChunk(c))!==void 0&&(c=f),this.isFirstChunk=!1,this._halted=!1;var y=this._partialLine+c,f=(this._partialLine=``,this._handle.parse(y,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(c=f.meta.cursor,y=(this._finished||(this._partialLine=y.substring(c-this._baseIndex),this._baseIndex=c),f&&f.data&&(this._rowCount+=f.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),t)n.postMessage({results:f,workerId:d.WORKER_ID,finished:y});else if(ne(this._config.chunk)&&!h){if(this._config.chunk(f,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=f=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(f.data),this._completeResults.errors=this._completeResults.errors.concat(f.errors),this._completeResults.meta=f.meta),this._completed||!y||!ne(this._config.complete)||f&&f.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),y||f&&f.meta.paused||this._nextChunk(),f}this._halted=!0},this._sendError=function(c){ne(this._config.error)?this._config.error(c):t&&this._config.error&&n.postMessage({workerId:d.WORKER_ID,error:c,finished:!1})}}function q(l){var c;(l=l||{}).chunkSize||(l.chunkSize=d.RemoteChunkSize),_.call(this,l),this._nextChunk=e?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(h){this._input=h,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(c=new XMLHttpRequest,this._config.withCredentials&&(c.withCredentials=this._config.withCredentials),e||(c.onload=je(this._chunkLoaded,this),c.onerror=je(this._chunkError,this)),c.ontimeout=je(this._chunkTimeout,this),c.open(this._config.downloadRequestBody?`POST`:`GET`,this._input,!e),this._config.downloadTimeout&&!e&&(c.timeout=this._config.downloadTimeout),this._config.downloadRequestHeaders){var h,y=this._config.downloadRequestHeaders;for(h in y)c.setRequestHeader(h,y[h])}var f;this._config.chunkSize&&(f=this._start+this._config.chunkSize-1,c.setRequestHeader(`Range`,`bytes=`+this._start+`-`+f));try{c.send(this._config.downloadRequestBody)}catch(B){this._chunkError(B.message)}e&&c.status===0&&this._chunkError()}},this._chunkLoaded=function(){c.readyState===4&&(c.status<200||400<=c.status?this._chunkError():(this._start+=this._config.chunkSize||c.responseText.length,this._finished=!this._config.chunkSize||this._start>=(h=>(h=h.getResponseHeader(`Content-Range`))!==null?parseInt(h.substring(h.lastIndexOf(`/`)+1)):-1)(c),this.parseChunk(c.responseText)))},this._chunkError=function(h){h=c.statusText||h,this._sendError(new Error(h))},this._chunkTimeout=function(){this._chunkError(`Request timed out after `+this._config.downloadTimeout+`ms`)}}function w(l){(l=l||{}).chunkSize||(l.chunkSize=d.LocalChunkSize),_.call(this,l);var c,h,y=typeof FileReader<`u`;this.stream=function(f){this._input=f,h=f.slice||f.webkitSlice||f.mozSlice,y?((c=new FileReader).onload=je(this._chunkLoaded,this),c.onerror=je(this._chunkError,this)):c=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var f=this._input,B=(this._config.chunkSize&&(B=Math.min(this._start+this._config.chunkSize,this._input.size),f=h.call(f,this._start,B)),c.readAsText(f,this._config.encoding));y||this._chunkLoaded({target:{result:B}})},this._chunkLoaded=function(f){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(f.target.result)},this._chunkError=function(){this._sendError(c.error)}}function I(l){var c;_.call(this,l=l||{}),this.stream=function(h){return c=h,this._nextChunk()},this._nextChunk=function(){var h,y;if(!this._finished)return h=this._config.chunkSize,c=h?(y=c.substring(0,h),c.substring(h)):(y=c,``),this._finished=!c,this.parseChunk(y)}}function N(l){_.call(this,l=l||{});var c=[],h=!0,y=!1;this.pause=function(){_.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){_.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(f){this._input=f,this._input.on(`data`,this._streamData),this._input.on(`end`,this._streamEnd),this._input.on(`error`,this._streamError)},this._checkIsFinished=function(){y&&c.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),c.length?this.parseChunk(c.shift()):h=!0},this._streamData=je(function(f){try{c.push(typeof f==`string`?f:f.toString(this._config.encoding)),h&&(h=!1,this._checkIsFinished(),this.parseChunk(c.shift()))}catch(B){this._streamError(B)}},this),this._streamError=je(function(f){this._streamCleanUp(),this._sendError(f)},this),this._streamEnd=je(function(){this._streamCleanUp(),y=!0,this._streamData(``)},this),this._streamCleanUp=je(function(){this._input.removeListener(`data`,this._streamData),this._input.removeListener(`end`,this._streamEnd),this._input.removeListener(`error`,this._streamError)},this)}function g(l){var c,h,y,f,B=Math.pow(2,53),ke=-B,De=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,Re=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,H=this,ve=0,x=0,ye=!1,M=!1,R=[],k={data:[],errors:[],meta:{}};function me(A){return l.skipEmptyLines===`greedy`?A.join(``).trim()===``:A.length===1&&A[0].length===0}function $(){if(k&&y&&(Ee(`Delimiter`,`UndetectableDelimiter`,`Unable to auto-detect delimiting character; defaulted to '`+d.DefaultDelimiter+`'`),y=!1),l.skipEmptyLines&&(k.data=k.data.filter(function(K){return!me(K)})),ae()){let K=function(ue){R.push(ue)};if(k)if(Array.isArray(k.data[0])){for(var A=0;ae()&&A<k.data.length;A++)k.data[A].forEach(K);k.data.splice(0,1)}else k.data.forEach(K)}function P(K,ue){for(var te=l.header?{}:[],z=0;z<K.length;z++){var T=z,be=K[z],be=((j,X)=>(le=>(l.dynamicTypingFunction&&l.dynamicTyping[le]===void 0&&(l.dynamicTyping[le]=l.dynamicTypingFunction(le)),(l.dynamicTyping[le]||l.dynamicTyping)===!0))(j)?X===`true`||X===`TRUE`||X!==`false`&&X!==`FALSE`&&((le=>{if(De.test(le)&&(le=parseFloat(le),ke<le&&le<B))return 1})(X)?parseFloat(X):Re.test(X)?new Date(X):X===``?null:X):X)(T=l.header?z>=R.length?`__parsed_extra`:R[z]:T,be=l.transform?l.transform(be,T):be);T===`__parsed_extra`?(te[T]=te[T]||[],te[T].push(be)):te[T]=be}return l.header&&(z>R.length?Ee(`FieldMismatch`,`TooManyFields`,`Too many fields: expected `+R.length+` fields but parsed `+z,x+ue):z<R.length&&Ee(`FieldMismatch`,`TooFewFields`,`Too few fields: expected `+R.length+` fields but parsed `+z,x+ue)),te}var ee;k&&(l.header||l.dynamicTyping||l.transform)&&(ee=1,!k.data.length||Array.isArray(k.data[0])?(k.data=k.data.map(P),ee=k.data.length):k.data=P(k.data,0),l.header&&k.meta&&(k.meta.fields=R),x+=ee)}function ae(){return l.header&&R.length===0}function Ee(A,P,ee,D){A={type:A,code:P,message:ee},D!==void 0&&(A.row=D),k.errors.push(A)}ne(l.step)&&(f=l.step,l.step=function(A){k=A,ae()?$():($(),k.data.length!==0&&(ve+=A.data.length,l.preview&&ve>l.preview?h.abort():(k.data=k.data[0],f(k,H))))}),this.parse=function(A,P,ee){var D=l.quoteChar||`"`,D=(l.newline||(l.newline=this.guessLineEndings(A,D)),y=!1,l.delimiter?ne(l.delimiter)&&(l.delimiter=l.delimiter(A),k.meta.delimiter=l.delimiter):((D=((K,ue,te,z,T)=>{var be,j,X,le;T=T||[`,`,`	`,`|`,`;`,d.RECORD_SEP,d.UNIT_SEP];for(var at=0;at<T.length;at++){for(var Pe,vt=T[at],pe=0,Fe=0,de=0,xe=(X=void 0,new se({comments:z,delimiter:vt,newline:ue,preview:10}).parse(K)),Ue=0;Ue<xe.data.length;Ue++)te&&me(xe.data[Ue])?de++:(Pe=xe.data[Ue].length,Fe+=Pe,X===void 0?X=Pe:0<Pe&&(pe+=Math.abs(Pe-X),X=Pe));0<xe.data.length&&(Fe/=xe.data.length-de),1.99<Fe&&(j===void 0||pe<j||pe===j&&le<Fe)&&(j=pe,be=vt,le=Fe)}return{successful:!!(l.delimiter=be),bestDelimiter:be}})(A,l.newline,l.skipEmptyLines,l.comments,l.delimitersToGuess)).successful?l.delimiter=D.bestDelimiter:(y=!0,l.delimiter=d.DefaultDelimiter),k.meta.delimiter=l.delimiter),Wt(l));return D.header=ae(),l.preview&&l.header&&D.preview++,c=A,h=new se(D),k=h.parse(c,P,ee),$(),ye?{meta:{paused:!0}}:k||{meta:{paused:!1}}},this.paused=function(){return ye},this.pause=function(){ye=!0,h.abort(),c=ne(l.chunk)?``:c.substring(h.getCharIndex())},this.resume=function(){H.streamer._halted?(ye=!1,H.streamer.parseChunk(c,!0)):setTimeout(H.resume,3)},this.aborted=function(){return M},this.abort=function(){M=!0,h.abort(),k.meta.aborted=!0,ne(l.complete)&&l.complete(k),c=``},this.guessLineEndings=function(K,D){K=K.substring(0,1048576);var D=new RegExp(U(D)+`([^]*?)`+U(D),`gm`),ee=(K=K.replace(D,``)).split(`\r`),D=K.split(`
`),K=1<D.length&&D[0].length<ee[0].length;if(ee.length===1||K)return`
`;for(var ue=0,te=0;te<ee.length;te++)ee[te][0]===`
`&&ue++;return ue>=ee.length/2?`\r
`:`\r`}}function U(l){return l.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function se(l){var c=(l=l||{}).delimiter,h=l.newline,y=l.comments,f=l.step,B=l.preview,ke=l.fastMode,De=null,Re=!1,H=l.quoteChar==null?`"`:l.quoteChar,ve=H;if(l.escapeChar!==void 0&&(ve=l.escapeChar),(typeof c!=`string`||-1<d.BAD_DELIMITERS.indexOf(c))&&(c=`,`),y===c)throw new Error(`Comment character same as delimiter`);y===!0?y=`#`:(typeof y!=`string`||-1<d.BAD_DELIMITERS.indexOf(y))&&(y=!1),h!==`
`&&h!==`\r`&&h!==`\r
`&&(h=`
`);var x=0,ye=!1;this.parse=function(M,R,k){if(typeof M!=`string`)throw new Error(`Input must be a string`);var me=M.length,$=c.length,ae=h.length,Ee=y.length,A=ne(f),P=[],ee=[],D=[],K=x=0;if(!M)return pe();if(ke||ke!==!1&&M.indexOf(H)===-1){for(var ue=M.split(h),te=0;te<ue.length;te++){if(D=ue[te],x+=D.length,te!==ue.length-1)x+=h.length;else if(k)return pe();if(!y||D.substring(0,Ee)!==y){if(A){if(P=[],le(D.split(c)),Fe(),ye)return pe()}else le(D.split(c));if(B&&B<=te)return P=P.slice(0,B),pe(!0)}}return pe()}for(var z=M.indexOf(c,x),T=M.indexOf(h,x),be=new RegExp(U(ve)+U(H),`g`),j=M.indexOf(H,x);;)if(M[x]===H)for(j=x,x++;;){if((j=M.indexOf(H,j+1))===-1)return k||ee.push({type:`Quotes`,code:`MissingQuotes`,message:`Quoted field unterminated`,row:P.length,index:x}),Pe();if(j===me-1)return Pe(M.substring(x,j).replace(be,H));if(H===ve&&M[j+1]===ve)j++;else if(H===ve||j===0||M[j-1]!==ve){z!==-1&&z<j+1&&(z=M.indexOf(c,j+1));var X=at((T=T!==-1&&T<j+1?M.indexOf(h,j+1):T)===-1?z:Math.min(z,T));if(M.substr(j+1+X,$)===c){D.push(M.substring(x,j).replace(be,H)),M[x=j+1+X+$]!==H&&(j=M.indexOf(H,x)),z!==-1&&z<x&&(z=M.indexOf(c,x)),T!==-1&&T<x&&(T=M.indexOf(h,x));break}if(X=at(T),M.substring(j+1+X,j+1+X+ae)===h){if(D.push(M.substring(x,j).replace(be,H)),vt(j+1+X+ae),z!==-1&&z<x&&(z=M.indexOf(c,x)),j=M.indexOf(H,x),A&&(Fe(),ye))return pe();if(B&&P.length>=B)return pe(!0);break}ee.push({type:`Quotes`,code:`InvalidQuotes`,message:`Trailing quote on quoted field is malformed`,row:P.length,index:x}),j++}}else if(y&&D.length===0&&M.substring(x,x+Ee)===y){if(T===-1)return pe();x=T+ae,T=M.indexOf(h,x),z!==-1&&z<x&&(z=M.indexOf(c,x))}else if(z!==-1&&(z<T||T===-1))D.push(M.substring(x,z)),x=z+$,z=M.indexOf(c,x);else{if(T===-1)break;if(D.push(M.substring(x,T)),vt(T+ae),A&&(Fe(),ye))return pe();if(B&&P.length>=B)return pe(!0)}return Pe();function le(de){P.push(de),K=x}function at(de){var xe=0;return xe=de!==-1&&(de=M.substring(j+1,de))&&de.trim()===``?de.length:xe}function Pe(de){return k||(de===void 0&&(de=M.substring(x)),D.push(de),x=me,le(D),A&&Fe()),pe()}function vt(de){x=de,le(D),D=[],T=M.indexOf(h,x)}function pe(de){if(l.header&&!R&&P.length&&!Re){var xe=P[0],Ue=Object.create(null),Gt=new Set(xe);let xn=!1;for(let it=0;it<xe.length;it++){let Ae=u(xe[it]);if(Ue[Ae=ne(l.transformHeader)?l.transformHeader(Ae,it):Ae]){let xt,wn=Ue[Ae];for(;xt=Ae+`_`+wn,wn++,Gt.has(xt););Gt.add(xt),xe[it]=xt,Ue[Ae]++,xn=!0,(De=De===null?{}:De)[xt]=Ae}else Ue[Ae]=1,xe[it]=Ae;Gt.add(Ae)}xn&&console.warn(`Duplicate headers found and renamed.`),Re=!0}return{data:P,errors:ee,meta:{delimiter:c,linebreak:h,aborted:ye,truncated:!!de,cursor:K+(R||0),renamedHeaders:De}}}function Fe(){f(pe()),P=[],ee=[]}},this.abort=function(){ye=!0},this.getCharIndex=function(){return x}}function Ut(l){var c=l.data,h=r[c.workerId],y=!1;if(c.error)h.userError(c.error,c.file);else if(c.results&&c.results.data){var f={abort:function(){y=!0,yn(c.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:vn,resume:vn};if(ne(h.userStep)){for(var B=0;B<c.results.data.length&&(h.userStep({data:c.results.data[B],errors:c.results.errors,meta:c.results.meta},f),!y);B++);delete c.results}else ne(h.userChunk)&&(h.userChunk(c.results,f,c.file),delete c.results)}c.finished&&!y&&yn(c.workerId,c.results)}function yn(l,c){var h=r[l];ne(h.userComplete)&&h.userComplete(c),h.terminate(),delete r[l]}function vn(){throw new Error(`Not implemented.`)}function Wt(l){if(typeof l!=`object`||l===null)return l;var c,h=Array.isArray(l)?[]:{};for(c in l)h[c]=Wt(l[c]);return h}function je(l,c){return function(){l.apply(c,arguments)}}function ne(l){return typeof l==`function`}return d.parse=function(l,c){var h=(c=c||{}).dynamicTyping||!1;if(ne(h)&&(c.dynamicTypingFunction=h,h={}),c.dynamicTyping=h,c.transform=!!ne(c.transform)&&c.transform,c.downloadTimeout!==void 0){var h=parseInt(c.downloadTimeout);if(isNaN(h))throw new Error(`Config downloadTimeout value (`+c.downloadTimeout+`) not parsable by parseInt(val).`);c.downloadTimeout=h}if(!c.worker||!d.WORKERS_SUPPORTED)return h=null,d.NODE_STREAM_INPUT,typeof l==`string`?(l=u(l),h=new(c.download?q:I)(c)):l.readable===!0&&ne(l.read)&&ne(l.on)?h=new N(c):(n.File&&l instanceof File||l instanceof Object)&&(h=new w(c)),h.stream(l);(h=(()=>{var y;return!!d.WORKERS_SUPPORTED&&(y=(()=>{var f=n.URL||n.webkitURL||null,B=a.toString();return d.BLOB_URL||(d.BLOB_URL=f.createObjectURL(new Blob([`var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; `,`(`,B,`)();`],{type:`text/javascript`})))})(),(y=new n.Worker(y)).onmessage=Ut,y.id=p++,r[y.id]=y)})()).userStep=c.step,h.userChunk=c.chunk,h.userComplete=c.complete,h.userError=c.error,c.step=ne(c.step),c.chunk=ne(c.chunk),c.complete=ne(c.complete),c.error=ne(c.error),delete c.worker,h.postMessage({input:l,config:c,workerId:h.id})},d.unparse=function(l,c){var h=!1,y=!0,f=`,`,B=`\r
`,ke=`"`,De=ke+ke,Re=!1,H=null,ve=!1,x=((()=>{if(typeof c==`object`){if(typeof c.delimiter!=`string`||d.BAD_DELIMITERS.filter(function(R){return c.delimiter.indexOf(R)!==-1}).length||(f=c.delimiter),typeof c.quotes!=`boolean`&&typeof c.quotes!=`function`&&!Array.isArray(c.quotes)||(h=c.quotes),typeof c.skipEmptyLines!=`boolean`&&typeof c.skipEmptyLines!=`string`||(Re=c.skipEmptyLines),typeof c.newline==`string`&&(B=c.newline),typeof c.quoteChar==`string`&&(ke=c.quoteChar,De=ke+ke),typeof c.header==`boolean`&&(y=c.header),Array.isArray(c.columns)){if(c.columns.length===0)throw new Error(`Option columns is empty`);H=c.columns}c.escapeChar!==void 0&&(De=c.escapeChar+ke),c.escapeFormulae instanceof RegExp?ve=c.escapeFormulae:typeof c.escapeFormulae==`boolean`&&c.escapeFormulae&&(ve=/^[=+\-@\t\r].*$/)}})(),new RegExp(U(ke),`g`));if(typeof l==`string`&&(l=JSON.parse(l)),Array.isArray(l)){if(!l.length)return ye(H,l,Re);if(Array.isArray(l[0]))return ye(null,l,Re);if(typeof l[0]==`object`)return ye(H||Object.keys(l[0]),l,Re)}else if(typeof l==`object`)return typeof l.data==`string`&&(l.data=JSON.parse(l.data)),Array.isArray(l.data)&&(l.fields||(l.fields=l.meta&&l.meta.fields||H),l.fields||(l.fields=Array.isArray(l.data[0])?l.fields:typeof l.data[0]==`object`?Object.keys(l.data[0]):[]),Array.isArray(l.data[0])||typeof l.data[0]==`object`||(l.data=[l.data])),ye(l.fields||[],l.data||[],Re);throw new Error(`Unable to serialize unrecognized input`);function ye(R,k,me){var $=``,ae=(typeof R==`string`&&(R=JSON.parse(R)),typeof k==`string`&&(k=JSON.parse(k)),Array.isArray(R)&&0<R.length),Ee=!Array.isArray(k[0]);if(ae&&y){for(var A=0;A<R.length;A++)0<A&&($+=f),$+=M(R[A],A);0<k.length&&($+=B)}for(var P=0;P<k.length;P++){var ee=(ae?R:k[P]).length,D=!1,K=ae?Object.keys(k[P]).length===0:k[P].length===0;if(me&&!ae&&(D=me===`greedy`?k[P].join(``).trim()===``:k[P].length===1&&(k[P][0]==null||k[P][0].length===0)),me===`greedy`&&ae){for(var ue=[],te=0;te<ee;te++){var z=Ee?R[te]:te;ue.push(k[P][z])}D=ue.join(``).trim()===``}if(!D){for(var T=0;T<ee;T++){0<T&&!K&&($+=f);var be=ae&&Ee?R[T]:T;$+=M(k[P][be],T)}P<k.length-1&&(!me||0<ee&&!K)&&($+=B)}}return $}function M(R,k){var me,$,ae;return R==null?``:R.constructor===Date?isNaN(R.getTime())?``:R.toISOString():(ae=!1,me=R.toString(),ve&&typeof R!=`number`&&typeof R!=`bigint`&&typeof R!=`boolean`&&ve.test(me)&&(R=me=`'`+me,ae=!0),$=me.replace(x,De),(ae=ae||h===!0||typeof h==`function`&&h(R,k)||Array.isArray(h)&&h[k]||((Ee,A)=>{for(var P=0;P<A.length;P++)if(-1<Ee.indexOf(A[P]))return!0;return!1})($,d.BAD_DELIMITERS)||-1<$.indexOf(f)||-1<me.indexOf(ke)||$.charAt(0)===` `||$.charAt($.length-1)===` `)?ke+$+ke:$)}},d.RECORD_SEP=``,d.UNIT_SEP=``,d.BYTE_ORDER_MARK=`﻿`,d.BAD_DELIMITERS=[`\r`,`
`,`"`,d.BYTE_ORDER_MARK],d.WORKERS_SUPPORTED=!e&&!!n.Worker,d.NODE_STREAM_INPUT=1,d.LocalChunkSize=10485760,d.RemoteChunkSize=5242880,d.DefaultDelimiter=`,`,d.Parser=se,d.ParserHandle=g,d.NetworkStreamer=q,d.FileStreamer=w,d.StringStreamer=I,d.ReadableStreamStreamer=N,t&&(n.onmessage=function(l){l=l.data,d.WORKER_ID===void 0&&l&&(d.WORKER_ID=l.workerId),typeof l.input==`string`?n.postMessage({workerId:d.WORKER_ID,results:d.parse(l.input,l.config),finished:!0}):(n.File&&l.input instanceof File||l.input instanceof Object)&&(l=d.parse(l.input,l.config))&&n.postMessage({workerId:d.WORKER_ID,results:l,finished:!0})}),(q.prototype=Object.create(_.prototype)).constructor=q,(w.prototype=Object.create(_.prototype)).constructor=w,(I.prototype=Object.create(I.prototype)).constructor=I,(N.prototype=Object.create(_.prototype)).constructor=N,d})});var Oa=w$1(Ta());function Da(a){let n=a.charCodeAt(0)===65279?a.slice(1):a,e=Oa.default.parse(n,{header:!0,skipEmptyLines:`greedy`,transformHeader:p=>p.trim(),transform:p=>p.trim()}),t=e.meta.fields??[];return{headers:t,rows:e.data.map(p=>{let d={};for(let u of t)d[u]=p[u]??``;return d})}}function ln(a){return a.map(n=>n.trim().toLowerCase()).join(`|`)}var Ya={record_type:[`record_type`,`record type`],date:[`date`,`transaction date`,`posted date`,`posting date`,`trans date`],description:[`description`,`name`,`merchant`,`payee`,`memo`,`details`],amount:[`amount`,`transaction amount`,`value`],category:[`category`,`categories`],account:[`account`,`account name`,`account_name`],notes:[`notes`,`note`],account_type:[`account_type`,`account type`]};function Ra(a,n$1){let e={},t=/* @__PURE__ */ new Set,r=new Map(a.map(d=>[d.trim().toLowerCase(),d]));for(let d of n){let _=(Ya[d]??[d]).map(q=>r.get(q)).find(q=>q!==void 0&&!t.has(q));_!==void 0&&(e[d]=_,t.add(_))}let p=(d,u)=>{if(e[d]!==void 0)return;let _=a.find(q=>{if(t.has(q))return!1;let w=n$1.map(I=>I[q]??``).filter(I=>I!==``);return w.length>0&&w.every(u)});_!==void 0&&(e[d]=_,t.add(_))};return p(`date`,d=>r9(d)!==null),p(`amount`,d=>In(d)!==null),{columns:e,flipSign:!1}}function Pa(a,n,e){let t=u=>n.columns[u],r=e.map(u=>u.trim().toUpperCase()).filter(u=>u!==``),p=0,d=0;for(let u of a){let _=(u[t(`category`)??``]??``).trim().toLowerCase(),q=(u[t(`description`)??``]??``).toUpperCase(),w=_===`income`||r.some(N=>q.includes(N)),I=In(u[t(`amount`)??``]??``);!w||I===null||(p++,I<0&&d++)}return p===0?0:d/p}function dn(a,n$2){return a.map(e=>{let t={};for(let r of n){let p=n$2.columns[r];t[r]=p===void 0?``:(e[p]??``).trim()}return t.record_type===``&&(t.record_type=`transaction`),n$2.flipSign&&(t.amount=Za(t.amount)),t})}function Za(a){let n=In(a);if(n===null)return a;let e=-n,t=Math.abs(e),r=`${Math.trunc(t/100)}.${String(t%100).padStart(2,`0`)}`;return e<0?`-`+r:r}var Ja=(a,n)=>n.id;function ei(a,n){if(a&1&&(Pl(0,`h2`,4),gO(1,` Categories the app chose `),ql(2,`app-info-tooltip`,5),Qg(),Pl(3,`p`,6)(4,`strong`,7),gO(5),Qg(),gO(6),Qg()),a&2){let e=zx();xR(5),yC(e.rows().length),xR(),im(` `,e.rows().length===1?`transaction`:`transactions`,` got a category from the app's built-in list. Change any that are wrong here, or later on the Transactions screen, where they are marked "category chosen by the app". Your choice is remembered for next time. `)}}function ti(a,n){a&1&&(Pl(0,`h2`,8),gO(1,` Choose a category `),ql(2,`app-info-tooltip`,9),Qg(),Pl(3,`p`,6),gO(4,` Optional. A row left without a category counts as Uncategorized. Next time the same description comes in, it gets the category you pick here. `),Qg())}function ni(a,n){if(a&1&&(Pl(0,`option`,13),gO(1,`No category yet`),Qg()),a&2){let e=zx().$implicit,t=zx();Xw(`selected`,!t.picks()[e.id])}}function ai(a,n){if(a&1&&(Pl(0,`option`,14),gO(1),Qg()),a&2){let e=n.$implicit,t=zx().$implicit,r=zx();Xw(`value`,e)(`selected`,(r.picks()[t.id]??t.category)===e),xR(),im(` `,r.label(e),` `)}}function ii(a,n){if(a&1){let e=Bx();Pl(0,`li`,3)(1,`span`,10),gO(2),Pl(3,`span`,6),gO(4),Qg()(),Pl(5,`span`,11),gO(6),xO(7,`money`),Qg(),Pl(8,`select`,12,0),Yl(`change`,function(){let r=FE(e).$implicit,p=qx(9),d=zx();return jE(d.set(r.id,p.value))}),Ax(10,ni,2,1,`option`,13),Ox(11,ai,2,3,`option`,14,xx),Qg()()}if(a&2){let e=n.$implicit,t=zx();xR(2),im(` `,e.description,` `),xR(2),vC(`· `,e.date,` · `,e.account),xR(2),yC(PO(7,6,e.amount)),xR(2),Zo(`aria-label`,`Category for `+e.description),xR(2),Nx(e.category?-1:10),xR(),Px(t.categories)}}var Pt=class a{rows=Jl.required();guessed=Jl(!1);picks=Cq({});categories=b;label(n){let e=n.replace(/_/g,` `);return e.charAt(0).toUpperCase()+e.slice(1)}set(n,e){let t=r({},this.picks()),r$1=this.rows().find(p=>p.id===n)?.category;e&&e!==r$1?t[n]=e:delete t[n],this.picks.set(t)}static ɵfac=function(e){return new(e||a)};static ɵcmp=Yo({type:a,selectors:[[`app-bank-categories`]],inputs:{rows:[1,`rows`],guessed:[1,`guessed`],picks:[1,`picks`]},outputs:{picks:`picksChange`},decls:9,vars:6,consts:[[`pick`,``],[1,`panel`],[3,`open`],[`data-row`,`needs-category`],[`id`,`guessed-cat-title`],[`text`,`These rows came with no category, so the app chose one from its built-in list of common shops, payroll words and bank words. Nothing is sent anywhere.`,`section`,`8.12.11`],[1,`muted`,`small`],[`data-metric`,`guessed-count`],[`id`,`bank-cat-title`],[`text`,`These rows came with no category, and neither your earlier choices nor the app's built-in list matched them.`,`section`,`8.12.8`],[1,`what`],[1,`amount`],[`data-input`,`bank-category`,1,`field`,3,`change`],[`value`,``,3,`selected`],[3,`value`,`selected`]],template:function(e,t){e&1&&(Pl(0,`section`,1),Ax(1,ei,7,2)(2,ti,5,0),Pl(3,`details`,2)(4,`summary`),gO(5),Qg(),Pl(6,`ul`),Ox(7,ii,13,8,`li`,3,Ja),Qg()()()),e&2&&(Zo(`data-panel`,t.guessed()?`guessed-categories`:`bank-categories`)(`aria-labelledby`,t.guessed()?`guessed-cat-title`:`bank-cat-title`),xR(),Nx(t.guessed()?1:2),xR(2),Xw(`open`,!t.guessed()),xR(2),vC(` `,t.guessed()?`Show them`:`Rows with no category`,` (`,t.rows().length,`) `),xR(2),Px(t.rows()))},dependencies:[N$2,i],styles:[`[_nghost-%COMP%]{display:block}ul[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}li[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:.375rem 1rem;padding:.5rem 0;border-top:1px solid var(--%NS%app-border)}.what[_ngcontent-%COMP%]{flex:1 1 14rem;min-width:0}.amount[_ngcontent-%COMP%]{font-variant-numeric:tabular-nums}select[_ngcontent-%COMP%]{max-width:100%}summary[_ngcontent-%COMP%]{cursor:pointer;padding:.25rem 0}`]})};var Ft=(()=>{class a{labelPosition=`after`;static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){return Yo({type:a,selectors:[[``,`mat-internal-form-field`,``]],hostAttrs:[1,`mdc-form-field`,`mat-internal-form-field`],hostVars:2,hostBindings:function(r,p){r&2&&Ql(`mdc-form-field--align-end`,p.labelPosition===`before`)},inputs:{labelPosition:`labelPosition`},ngContentSelectors:[`*`],decls:1,vars:0,template:function(r,p){r&1&&(em(),tm(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})})()}return a})();var mn={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var oi=new W(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>mn});var fe=(function(a){return a[a.Init=0]=`Init`,a[a.Checked=1]=`Checked`,a[a.Unchecked=2]=`Unchecked`,a[a.Indeterminate=3]=`Indeterminate`,a})(fe||{});var pn=class{source;checked};var nt=(()=>{class a{_elementRef=M(Ft$1);_changeDetectorRef=M(ss);_ngZone=M(dt);_animationsDisabled=U();_options=M(oi,{optional:!0});_injector=M(Ze$1);_signalFormField=null;focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new pn;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new ut;indeterminateChange=new ut;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=fe.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){M(wF).load(Te);let e=M(new is(`tabindex`),{optional:!0});this._options=this._options||mn,this.color=this._options.color||mn.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=M(jT).getId(`mat-mdc-checkbox-`),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngOnInit(){this._signalFormField=this._injector.get(fn$1,void 0,{optional:!0,self:!0})}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(fe.Indeterminate):this._transitionCheckState(this.checked?fe.Checked:fe.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=ve(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0&&!this._signalFormField?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,r=this._getAnimationTargetElement();if(!(t===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let p=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(p)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!==`noop`?(this.indeterminate&&e!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?fe.Checked:fe.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return``;switch(e){case fe.Init:if(t===fe.Checked)return this._animationClasses.uncheckedToChecked;if(t==fe.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case fe.Unchecked:return t===fe.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case fe.Checked:return t===fe.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case fe.Indeterminate:return t===fe.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`input`];return Yo({type:a,selectors:[[`mat-checkbox`]],viewQuery:function(p,d){if(p&1&&iC(e,5),p&2){let u;nm(u=rm())&&(d._inputElement=u.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(p,d){p&2&&(tC(`id`,d.id),Zo(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),om(d.color?`mat-`+d.color:`mat-accent`),Ql(`_mat-animation-noopable`,d._animationsDisabled)(`mdc-checkbox--disabled`,d.disabled)(`mat-mdc-checkbox-disabled`,d.disabled)(`mat-mdc-checkbox-checked`,d.checked)(`mat-mdc-checkbox-disabled-interactive`,d.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,Qo],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,Qo],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,Qo],tabIndex:[2,`tabIndex`,`tabIndex`,r=>r==null?void 0:pP(r)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Qo],checked:[2,`checked`,`checked`,Qo],disabled:[2,`disabled`,`disabled`,Qo],indeterminate:[2,`indeterminate`,`indeterminate`,Qo]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[MC([{provide:w,useExisting:Hu(()=>a),multi:!0},{provide:N,useExisting:a,multi:!0}]),Ur],ngContentSelectors:[`*`],decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(p,d){if(p&1&&(em(),Pl(0,`label`,3),Yl(`click`,function(_){return d._preventBubblingFromLabel(_)}),Pl(1,`span`,4,0),ql(3,`span`,5),Pl(4,`input`,6,1),Yl(`blur`,function(){return d._onBlur()})(`click`,function(){return d._onInputClick()})(`change`,function(_){return d._onInteractionEvent(_)}),Qg(),ql(6,`span`,7),Pl(7,`span`,8),YE(),Pl(8,`svg`,9),ql(9,`path`,10),Qg(),ZE(),ql(10,`span`,11),Qg(),ql(11,`span`,12),Qg(),Pl(12,`span`,13,2),tm(14),Qg()()),p&2){let u=qx(2);Xw(`labelPosition`,d.labelPosition)(`for`,d.inputId),xR(4),Ql(`mdc-checkbox--selected`,d.checked),Xw(`checked`,d.checked)(`indeterminate`,d.indeterminate)(`disabled`,d.disabled&&!d.disabledInteractive)(`id`,d.inputId)(`required`,d.required)(`tabIndex`,d.disabled&&!d.disabledInteractive?-1:d.tabIndex),Zo(`aria-label`,d.ariaLabel||null)(`aria-labelledby`,d.ariaLabelledby)(`aria-describedby`,d.ariaDescribedby)(`aria-checked`,d.indeterminate?`mixed`:null)(`aria-controls`,d.ariaControls)(`aria-disabled`,d.disabled&&d.disabledInteractive?!0:null)(`aria-expanded`,d.ariaExpanded)(`aria-owns`,d.ariaOwns)(`name`,d.name)(`value`,d.value),xR(7),Xw(`matRippleTrigger`,u)(`matRippleDisabled`,d.disableRipple||d.disabled)(`matRippleCentered`,!0)}},dependencies:[lo$1,Ft],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-checkbox-state-layer-size, 40px);
  height: var(--%NS%mat-checkbox-state-layer-size, 40px);
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--%NS%mat-checkbox-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--%NS%mat-checkbox-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-checkbox-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-checkbox-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-checkbox-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-checkbox-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-checkbox-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
  color: var(--%NS%mat-checkbox-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
    color: GrayText;
  }
}
.mat-mdc-checkbox .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-checkbox-touch-target-size, 48px);
  width: var(--%NS%mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return a})();var kt=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=sr({type:a});static ɵinj=An({imports:[nt,VS]})}return a})();var It=class{_multiple;_emitChanges;compareWith;_selection=/* @__PURE__ */ new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new Fe;bulk={select:n=>this._select(n),deselect:n=>this._deselect(n),setSelection:n=>this._setSelection(n)};constructor(n=!1,e,t=!0,r){this._multiple=n,this._emitChanges=t,this.compareWith=r,e&&e.length&&(n?e.forEach(p=>this._markSelected(p)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){return this._select(n)}deselect(...n){return this._deselect(n)}setSelection(...n){return this._setSelection(n)}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_select(n){this._verifyValueAssignment(n),n.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(n){this._verifyValueAssignment(n),n.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(n){this._verifyValueAssignment(n);let e=this.selected,t=new Set(n.map(p=>this._getConcreteValue(p)));n.forEach(p=>this._markSelected(p)),e.filter(p=>!t.has(this._getConcreteValue(p,t))).forEach(p=>this._unmarkSelected(p));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(n,t))return t;return n}else return n}};var Fa=(()=>{class a{_animationsDisabled=U();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(t){return new(t||a)};static ɵcmp=Yo({type:a,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(t,r){t&2&&Ql(`mat-pseudo-checkbox-indeterminate`,r.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,r.state===`checked`)(`mat-pseudo-checkbox-disabled`,r.disabled)(`mat-pseudo-checkbox-minimal`,r.appearance===`minimal`)(`mat-pseudo-checkbox-full`,r.appearance===`full`)(`_mat-animation-noopable`,r._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(t,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return a})();var bn=new W(`MAT_OPTION_PARENT_COMPONENT`);var gn=new W(`MatOptgroup`);var un=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}};var yt=(()=>{class a{_element=M(Ft$1);_changeDetectorRef=M(ss);_parent=M(bn,{optional:!0});group=M(gn,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=M(jT).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=ve(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new ut;_text;_stateChanges=new Fe;constructor(){let e=M(wF);e.load(Te),e.load(_Y),this._signalDisableRipple=!!this._parent&&Ca(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let r=this._getHostElement();typeof r.focus==`function`&&r.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!W7(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new un(this,e))}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`text`],t=[[[`mat-icon`]],`*`],r=[`mat-icon`,`*`];function p(_,q){if(_&1&&ql(0,`mat-pseudo-checkbox`,1),_&2){let w=zx();Xw(`disabled`,w.disabled)(`state`,w.selected?`checked`:`unchecked`)}}function d(_,q){if(_&1&&ql(0,`mat-pseudo-checkbox`,3),_&2){let w=zx();Xw(`disabled`,w.disabled)}}function u(_,q){if(_&1&&(Pl(0,`span`,4),gO(1),Qg()),_&2){let w=zx();xR(),im(`(`,w.group.label,`)`)}}return Yo({type:a,selectors:[[`mat-option`]],viewQuery:function(q,w){if(q&1&&iC(e,7),q&2){let I;nm(I=rm())&&(w._text=I.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(q,w){q&1&&Yl(`click`,function(){return w._selectViaInteraction()})(`keydown`,function(N){return w._handleKeydown(N)}),q&2&&(tC(`id`,w.id),Zo(`aria-selected`,w.selected)(`aria-disabled`,w.disabled.toString()),Ql(`mdc-list-item--selected`,w.selected)(`mat-mdc-option-multiple`,w.multiple)(`mat-mdc-option-active`,w.active)(`mdc-list-item--disabled`,w.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,Qo]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:r,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(q,w){q&1&&(em(t),Ax(0,p,1,2,`mat-pseudo-checkbox`,1),tm(1),Pl(2,`span`,2,0),tm(4,1),Qg(),Ax(5,d,1,1,`mat-pseudo-checkbox`,3),Ax(6,u,2,1,`span`,4),ql(7,`div`,5)),q&2&&(Nx(w.multiple?0:-1),xR(5),Nx(!w.multiple&&w.selected&&!w.hideSingleSelectionIndicator?5:-1),xR(),Nx(w.group&&w.group._inert?6:-1),xR(),Xw(`matRippleTrigger`,w._getHostElement())(`matRippleDisabled`,w.disabled||w.disableRipple))},dependencies:[Fa,lo$1],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return a})();function Aa(a,n,e){if(e.length){let t=n.toArray(),r=e.toArray(),p=0;for(let d=0;d<a+1;d++)t[d].group&&t[d].group===r[p]&&p++;return p}return 0}function za(a,n,e,t){return a<e?a:a+n>e+t?Math.max(0,a-t+n):e}var Va=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=sr({type:a});static ɵinj=An({imports:[VS]})}return a})();var _n=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=sr({type:a});static ɵinj=An({imports:[De,Va,yt,VS]})}return a})();var di=new W(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let a=M(Ze$1);return()=>xt(a)}});var mi=new W(`MAT_SELECT_CONFIG`);var pi=new W(`MatSelectTrigger`);var fn=class{source;value;constructor(n,e){this.source=n,this.value=e}};var qa=(()=>{class a{_viewportRuler=M(N$1);_changeDetectorRef=M(ss);_elementRef=M(Ft$1);_dir=M(MF,{optional:!0});_idGenerator=M(jT);_renderer=M(Br);_parentFormField=M(bt,{optional:!0});ngControl=M(V,{self:!0,optional:!0});_liveAnnouncer=M(Xe);_defaultOptions=M(mi,{optional:!0});_animationsDisabled=U();_popoverLocation;_initialized=new Fe;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let r=this.panel.nativeElement,p=Aa(e,this.options,this.optionGroups),d=t._getHostElement();e===0&&p===1?r.scrollTop=0:r.scrollTop=za(d.offsetTop,d.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new fn(this,e)}_scrollStrategyFactory=M(di);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new Fe;_errorStateTracker;stateChanges=new Fe;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=ve(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(fe$1.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Zs(()=>{let e=this.options;return e?e.changes.pipe(hp(e),Ht$1(()=>GA(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Ht$1(()=>this.optionSelectionChanges))});openedChange=new ut;_openedStream=this.openedChange.pipe(Pt$1(e=>e),De$2(()=>{}));_closedStream=this.openedChange.pipe(Pt$1(e=>!e),De$2(()=>{}));selectionChange=new ut;valueChange=new ut;constructor(){let e=M(Qn),t=M(Qt,{optional:!0}),r=M(nn,{optional:!0}),p=M(new is(`tabindex`),{optional:!0}),d=M(Dt,{optional:!0}),u=M(fn$1,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Ze(e,u||this.ngControl,r,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=p==null?0:parseInt(p)||0,this._popoverLocation=d?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new It(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Xs(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Xs(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(hp(null),Xs(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute(`aria-labelledby`,e):r.removeAttribute(`aria-labelledby`)}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Tn$1(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,`animationend`,p=>{p.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,r=t===40||t===38||t===37||t===39,p=t===13||t===32,d=this._keyManager;if(!d.isTyping()&&p&&!W7(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let u=this.selected;d.onKeydown(e);let _=this.selected;_&&u!==_&&this._liveAnnouncer.announce(_.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,r=e.keyCode,p=r===40||r===38,d=t.isTyping();if(p&&e.altKey)e.preventDefault(),this.close();else if(!d&&(r===13||r===32)&&t.activeItem&&!W7(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!d&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let u=this.options.some(_=>!_.disabled&&!_.selected);this.options.forEach(_=>{_.disabled||(u?_.select():_.deselect())})}else{let u=t.activeItemIndex;t.onKeydown(e),this._multiple&&p&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==u&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!W7(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof Rt?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new wt(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=GA(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Xs(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),GA(...this.options.map(t=>t._stateChanges)).pipe(Xs(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,r)=>this.sortComparator?this.sortComparator(t,r,e):e.indexOf(t)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(r=>r.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+` `:``;return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(e){let t=x7(e);t&&(t.tagName===`MAT-OPTION`||t.classList.contains(`cdk-overlay-backdrop`)||t.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`trigger`],t=[`panel`],r=[[[`mat-select-trigger`]],`*`],p=[`mat-select-trigger`,`*`];function d(I,N){if(I&1&&(Pl(0,`span`,4),gO(1),Qg()),I&2){let g=zx();xR(),yC(g.placeholder)}}function u(I,N){I&1&&tm(0)}function _(I,N){if(I&1&&(Pl(0,`span`,11),gO(1),Qg()),I&2){let g=zx(2);xR(),yC(g.triggerValue)}}function q(I,N){if(I&1&&(Pl(0,`span`,5),Ax(1,u,1,0)(2,_,2,1,`span`,11),Qg()),I&2){let g=zx();xR(),Nx(g.customTrigger?1:2)}}function w(I,N){if(I&1){let g=Bx();Pl(0,`div`,12,1),Yl(`keydown`,function(se){FE(g);let Ut=zx();return jE(Ut._handleKeydown(se))}),tm(2,1),Qg()}if(I&2){let g=zx();om(g.panelClass),Ql(`mat-select-panel-animations-enabled`,!g._animationsDisabled)(`mat-primary`,g._parentFormField?.color===`primary`)(`mat-accent`,g._parentFormField?.color===`accent`)(`mat-warn`,g._parentFormField?.color===`warn`)(`mat-undefined`,!g._parentFormField?.color),Zo(`id`,g.id+`-panel`)(`aria-multiselectable`,g.multiple)(`aria-label`,g.ariaLabel||null)(`aria-labelledby`,g._getPanelAriaLabelledby())}}return Yo({type:a,selectors:[[`mat-select`]],contentQueries:function(N,g,U){if(N&1&&Zl(U,pi,5)(U,yt,5)(U,gn,5),N&2){let se;nm(se=rm())&&(g.customTrigger=se.first),nm(se=rm())&&(g.options=se),nm(se=rm())&&(g.optionGroups=se)}},viewQuery:function(N,g){if(N&1&&iC(e,5)(t,5)(ye,5),N&2){let U;nm(U=rm())&&(g.trigger=U.first),nm(U=rm())&&(g.panel=U.first),nm(U=rm())&&(g._overlayDir=U.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(N,g){N&1&&Yl(`keydown`,function(se){return g._handleKeydown(se)})(`focus`,function(){return g._onFocus()})(`blur`,function(){return g._onBlur()}),N&2&&(Zo(`id`,g.id)(`tabindex`,g.disabled?-1:g.tabIndex)(`aria-controls`,g.panelOpen?g.id+`-panel`:null)(`aria-expanded`,g.panelOpen)(`aria-label`,g.ariaLabel||null)(`aria-required`,g.required.toString())(`aria-disabled`,g.disabled.toString())(`aria-invalid`,g.errorState)(`aria-activedescendant`,g._getAriaActiveDescendant()),Ql(`mat-mdc-select-disabled`,g.disabled)(`mat-mdc-select-invalid`,g.errorState)(`mat-mdc-select-required`,g.required)(`mat-mdc-select-empty`,g.empty)(`mat-mdc-select-multiple`,g.multiple)(`mat-select-open`,g.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,Qo],disableRipple:[2,`disableRipple`,`disableRipple`,Qo],tabIndex:[2,`tabIndex`,`tabIndex`,I=>I==null?0:pP(I)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,Qo],placeholder:`placeholder`,required:[2,`required`,`required`,Qo],multiple:[2,`multiple`,`multiple`,Qo],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,Qo],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,pP],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,Qo]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[MC([{provide:gt,useExisting:a},{provide:bn,useExisting:a}]),Ur],ngContentSelectors:p,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(N,g){if(N&1&&(em(r),Pl(0,`div`,2,0),Yl(`click`,function(){return g.open()}),Pl(3,`div`,3),Ax(4,d,2,1,`span`,4)(5,q,3,1,`span`,5),Qg(),Pl(6,`div`,6)(7,`div`,7),YE(),Pl(8,`svg`,8),ql(9,`path`,9),Qg()()()(),qw(10,w,3,16,`ng-template`,10),Yl(`detach`,function(){return g.close()})(`backdropClick`,function(){return g.close()})(`overlayKeydown`,function(se){return g._handleOverlayKeydown(se)})),N&2){let U=qx(1);xR(3),Zo(`id`,g._valueId),xR(),Nx(g.empty?4:5),xR(6),Xw(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,g._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,g._scrollStrategy)(`cdkConnectedOverlayOrigin`,g._preferredOverlayOrigin||U)(`cdkConnectedOverlayPositions`,g._positions)(`cdkConnectedOverlayWidth`,g._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,g._popoverLocation)}},dependencies:[Rt,ye],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear forwards;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})})()}return a})();var ja=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=sr({type:a});static ɵinj=An({imports:[me,_n,VS,Ht,$n,_n]})}return a})();var ui=(a,n)=>n.field;function bi(a,n){if(a&1&&(Pl(0,`mat-option`,8),gO(1),Qg()),a&2){let e=n.$implicit;Xw(`value`,e),xR(),yC(e)}}function gi(a,n){if(a&1){let e=Bx();Pl(0,`mat-form-field`,1)(1,`mat-label`),gO(2),Qg(),Pl(3,`mat-select`,6),Yl(`valueChange`,function(r){let p=FE(e).$implicit,d=zx();return jE(d.setColumn(p.field,r))}),Pl(4,`mat-option`,7),gO(5,`(not in this file)`),Qg(),Ox(6,bi,2,2,`mat-option`,8,xx),Qg()()}if(a&2){let e=n.$implicit,t=zx();xR(2),vC(``,e.label,``,e.required?` *`:``),xR(),Xw(`value`,t.columns()[e.field]??``),xR(3),Px(t.headers())}}function _i(a,n){if(a&1){let e=Bx();Pl(0,`div`,2)(1,`p`),gO(2,` Most income rows in this file are negative. This file seems to use positive = money out (some budgeting apps do). Flip signs? `),Qg(),Pl(3,`mat-checkbox`,9),Yl(`change`,function(r){FE(e);let p=zx();return jE(p.flipSign.set(r.checked))}),gO(4,` Yes, flip signs so money out is negative `),Qg()()}if(a&2){let e=zx();xR(3),Xw(`checked`,e.flipSign())}}var Ua=[{field:`date`,label:`Date`,required:!0},{field:`description`,label:`Description (merchant)`,required:!0},{field:`amount`,label:`Amount`,required:!0},{field:`category`,label:`Category`,required:!1},{field:`account`,label:`Account`,required:!1},{field:`account_type`,label:`Account type`,required:!1},{field:`link`,label:`Link (debt or income name)`,required:!1},{field:`notes`,label:`Notes`,required:!1}];var fi=.8;var Vt=class a{headers=Jl.required();rows=Jl.required();initial=Jl.required();incomeNames=Jl([]);confirmed=wq();cancelled=wq();fields=Ua;columns=am(()=>r({},this.initial().columns));flipSign=am(()=>this.initial().flipSign);complete=Vr(()=>Ua.every(n=>!n.required||this.columns()[n.field]));proposeFlip=Vr(()=>Pa(this.rows(),{columns:this.columns(),flipSign:!1},this.incomeNames())>=fi);setColumn(n,e){this.columns.update(t=>{let r$2=r({},t);return e?r$2[n]=e:delete r$2[n],r$2})}confirm(){this.confirmed.emit({columns:this.columns(),flipSign:this.proposeFlip()&&this.flipSign()})}static ɵfac=function(e){return new(e||a)};static ɵcmp=Yo({type:a,selectors:[[`app-column-mapper`]],inputs:{headers:[1,`headers`],rows:[1,`rows`],initial:[1,`initial`],incomeNames:[1,`incomeNames`]},outputs:{confirmed:`confirmed`,cancelled:`cancelled`},decls:13,vars:2,consts:[[1,`grid`],[`appearance`,`outline`],[`role`,`status`,1,`sign`],[1,`actions`],[`mat-flat-button`,``,`type`,`button`,3,`click`,`disabled`],[`mat-button`,``,`type`,`button`,3,`click`],[3,`valueChange`,`value`],[`value`,``],[3,`value`],[3,`change`,`checked`]],template:function(e,t){e&1&&(Pl(0,`h2`),gO(1,`Match your columns`),Qg(),Pl(2,`p`),gO(3,` This file is not in the template format. Pick which of its columns holds each value. Your choice is remembered for files with the same columns. `),Qg(),Pl(4,`div`,0),Ox(5,gi,8,3,`mat-form-field`,1,ui),Qg(),Ax(7,_i,5,1,`div`,2),Pl(8,`div`,3)(9,`button`,4),Yl(`click`,function(){return t.confirm()}),gO(10,` Use these columns `),Qg(),Pl(11,`button`,5),Yl(`click`,function(){return t.cancelled.emit()}),gO(12,`Cancel`),Qg()()),e&2&&(xR(5),Px(t.fields),xR(2),Nx(t.proposeFlip()?7:-1),xR(2),Xw(`disabled`,!t.complete()))},dependencies:[Bo,zo,kt,nt,$n,Xe$1,se,ja,qa,yt],styles:[`.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(16rem,1fr));gap:0 1rem}.sign[_ngcontent-%COMP%]{padding:.75rem 1rem;border-radius:.5rem;background:var(--%NS%mat-sys-secondary-container);color:var(--%NS%mat-sys-on-secondary-container);margin-bottom:1rem}.actions[_ngcontent-%COMP%]{display:flex;gap:.5rem}`]})};var ki=new W(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var Lt=class{source;checked;constructor(n,e){this.source=n,this.checked=e}};var kn=(()=>{class a{_elementRef=M(Ft$1);_focusMonitor=M(_t);_changeDetectorRef=M(ss);defaults=M(ki);_injector=M(Ze$1);_signalFormField=null;_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Lt(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=U();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new ut;toggleChange=new ut;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){M(wF).load(Te);let e=M(new is(`tabindex`),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||`accent`,this.id=this._uniqueId=M(jT).getId(`mat-mdc-slide-toggle-`),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngOnInit(){this._signalFormField=this._injector.get(fn$1,void 0,{optional:!0,self:!0})}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0&&!this._signalFormField?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Lt(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`switch`],t=[`*`];function r(p,d){p&1&&(Pl(0,`span`,11),YE(),Pl(1,`svg`,13),ql(2,`path`,14),Qg(),Pl(3,`svg`,15),ql(4,`path`,16),Qg()())}return Yo({type:a,selectors:[[`mat-slide-toggle`]],viewQuery:function(d,u){if(d&1&&iC(e,5),d&2){let _;nm(_=rm())&&(u._switchElement=_.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(d,u){d&2&&(tC(`id`,u.id),Zo(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),om(u.color?`mat-`+u.color:``),Ql(`mat-mdc-slide-toggle-focused`,u._focused)(`mat-mdc-slide-toggle-checked`,u.checked)(`mat-slide-toggle-full-width`,u.fullWidth)(`_mat-animation-noopable`,u._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,Qo],color:`color`,disabled:[2,`disabled`,`disabled`,Qo],fullWidth:[2,`fullWidth`,`fullWidth`,Qo],disableRipple:[2,`disableRipple`,`disableRipple`,Qo],tabIndex:[2,`tabIndex`,`tabIndex`,p=>p==null?0:pP(p)],checked:[2,`checked`,`checked`,Qo],hideIcon:[2,`hideIcon`,`hideIcon`,Qo],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Qo]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[MC([{provide:w,useExisting:Hu(()=>a),multi:!0},{provide:N,useExisting:a,multi:!0}]),Ur],ngContentSelectors:t,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(d,u){if(d&1&&(em(),Pl(0,`div`,1)(1,`button`,2,0),Yl(`click`,function(){return u._handleClick()}),ql(3,`div`,3)(4,`span`,4),Pl(5,`span`,5)(6,`span`,6)(7,`span`,7),ql(8,`span`,8),Qg(),Pl(9,`span`,9),ql(10,`span`,10),Qg(),Ax(11,r,5,0,`span`,11),Qg()()(),Pl(12,`label`,12),Yl(`click`,function(q){return q.stopPropagation()}),tm(13),Qg()()),d&2){let _=qx(2);Xw(`labelPosition`,u.labelPosition),xR(),Ql(`mdc-switch--selected`,u.checked)(`mdc-switch--unselected`,!u.checked)(`mdc-switch--checked`,u.checked)(`mdc-switch--disabled`,u.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,u.disabledInteractive),Xw(`tabIndex`,u.disabled&&!u.disabledInteractive?-1:u.tabIndex)(`disabled`,u.disabled&&!u.disabledInteractive),Zo(`id`,u.buttonId)(`name`,u.name)(`aria-label`,u.ariaLabel)(`aria-labelledby`,u._getAriaLabelledBy())(`aria-describedby`,u.ariaDescribedby)(`aria-required`,u.required||null)(`aria-checked`,u.checked)(`aria-disabled`,u.disabled&&u.disabledInteractive?`true`:null),xR(9),Xw(`matRippleTrigger`,_)(`matRippleDisabled`,u.disableRipple||u.disabled)(`matRippleCentered`,!0),xR(),Nx(u.hideIcon?-1:11),xR(),Xw(`for`,u.buttonId),Zo(`id`,u._labelId)}},dependencies:[lo$1,Ft],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--%NS%mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--%NS%mat-slide-toggle-track-height, 32px);
  border-radius: var(--%NS%mat-slide-toggle-track-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--%NS%mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--%NS%mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-track-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-color, var(--%NS%mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--%NS%mat-slide-toggle-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-hover-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-focus-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-track-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--%NS%mat-slide-toggle-selected-track-color, var(--%NS%mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-track-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-track-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--%NS%mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--%NS%mat-slide-toggle-handle-width);
  height: var(--%NS%mat-slide-toggle-handle-height);
  border-radius: var(--%NS%mat-slide-toggle-handle-shape, var(--%NS%mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--%NS%mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--%NS%mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--%NS%selected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-handle-color, var(--%NS%mat-sys-on-primary));
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-handle-color, var(--%NS%mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-handle-color, var(--%NS%mat-sys-surface));
}
.mdc-switch--%NS%unselected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-handle-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--%NS%unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-handle-color, var(--%NS%mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--%NS%mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
  height: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--%NS%unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-selected-icon-color, var(--%NS%mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--%NS%mat-slide-toggle-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-slide-toggle-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-slide-toggle-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-slide-toggle-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-slide-toggle-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-slide-toggle-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--%NS%mat-slide-toggle-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-slide-toggle-full-width {
  width: 100%;
}
.mat-slide-toggle-full-width .mat-internal-form-field {
  width: 100%;
  justify-content: space-between;
}
.mat-slide-toggle-full-width .mat-internal-form-field label {
  margin: 0;
  flex-grow: 1;
  text-align: end;
}
.mat-slide-toggle-full-width .mdc-form-field--align-end label {
  text-align: start;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})})()}return a})();var Ga=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=sr({type:a});static ɵinj=An({imports:[kn,VS]})}return a})();var vi=(a,n)=>n.file.id;var xi=(a,n)=>n.id;var wi=(a,n)=>n.field;function Ci(a,n){if(a&1){let e=Bx();Pl(0,`tr`)(1,`td`)(2,`mat-checkbox`,3),Yl(`change`,function(r){let p=FE(e).$implicit,d=zx(2);return jE(d.toggle(p.file.id,r.checked))}),Qg()(),Pl(3,`td`),gO(4),Qg(),Pl(5,`td`),gO(6),Qg(),Pl(7,`td`,4),gO(8),xO(9,`money`),Qg(),Pl(10,`td`),gO(11),xO(12,`money`),Qg()()}if(a&2){let e=n.$implicit,t=zx(2);Zo(`data-correction`,e.kind),xR(2),Xw(`checked`,!t.declined().has(e.file.id)),Qw(`aria-label`,`Correct `+e.saved.description+` on `+e.saved.date),xR(2),yC(e.saved.date),xR(2),yC(e.saved.description),xR(2),vC(` `,PO(9,9,e.saved.amount),` · `,e.saved.category??`no category`,` `),xR(3),vC(``,PO(12,11,e.file.amount),` · `,e.file.category??`no category`)}}function Si(a,n){if(a&1&&(Pl(0,`h4`),gO(1),Qg(),Pl(2,`p`),gO(3,` These rows match a saved transaction but the file has a different amount or category. The saved transaction will be corrected. Untick one to leave it as it is; an unticked row with a different amount is then saved as a separate transaction. `),Qg(),Pl(4,`div`,0)(5,`table`,1)(6,`thead`)(7,`tr`)(8,`th`,2),gO(9,`Correct`),Qg(),Pl(10,`th`,2),gO(11,`Date`),Qg(),Pl(12,`th`,2),gO(13,`Description`),Qg(),Pl(14,`th`,2),gO(15,`You have`),Qg(),Pl(16,`th`,2),gO(17,`The file says`),Qg()()(),Pl(18,`tbody`),Ox(19,Ci,13,13,`tr`,null,vi),Qg()()()),a&2){zx();let e=bO(0);xR(),im(`Corrections to transactions you already have (`,e.corrections.length,`)`),xR(18),Px(e.corrections)}}function Ii(a,n){if(a&1&&(Pl(0,`div`),gO(1),Pl(2,`span`,4),gO(3),Qg(),gO(4),Qg()),a&2){let e=n.$implicit;xR(),im(` `,e.field,`: `),xR(2),yC(e.before),xR(),im(` `,e.after,` `)}}function Ni(a,n){if(a&1){let e=Bx();Pl(0,`tr`)(1,`td`)(2,`mat-checkbox`,3),Yl(`change`,function(r){let p=FE(e).$implicit,d=zx(2);return jE(d.toggle(p.id,r.checked))}),Qg()(),Pl(3,`td`),gO(4),Qg(),Pl(5,`td`),Ox(6,Ii,5,3,`div`,null,wi),Qg()()}if(a&2){let e=n.$implicit,t=zx(2);Zo(`data-change`,e.id),xR(2),Xw(`checked`,!t.declined().has(e.id)),Qw(`aria-label`,`Update `+e.label),xR(2),yC(e.label),xR(2),Px(e.fields)}}function Mi(a,n){if(a&1&&(Pl(0,`h4`),gO(1),Qg(),Pl(2,`p`),gO(3,` The file has different values for these. They will be updated. Untick one to keep what you have. `),Qg(),Pl(4,`div`,0)(5,`table`,5)(6,`thead`)(7,`tr`)(8,`th`,2),gO(9,`Update`),Qg(),Pl(10,`th`,2),gO(11,`What`),Qg(),Pl(12,`th`,2),gO(13,`Change`),Qg()()(),Pl(14,`tbody`),Ox(15,Ni,8,4,`tr`,null,xi),Qg()()()),a&2){zx();let e=bO(0);xR(),im(`Changes to what you already have (`,e.recordChanges.length,`)`),xR(14),Px(e.recordChanges)}}var Bt=class a{preview=Jl.required();declined=Jl.required();declinedChange=wq();toggle(n,e){let t=new Set(this.declined());e?t.delete(n):t.add(n),this.declinedChange.emit(t)}static ɵfac=function(e){return new(e||a)};static ɵcmp=Yo({type:a,selectors:[[`app-import-updates`]],inputs:{preview:[1,`preview`],declined:[1,`declined`]},outputs:{declinedChange:`declinedChange`},decls:3,vars:3,consts:[[1,`list`],[`aria-label`,`Corrections to saved transactions`,`data-list`,`corrections`],[`scope`,`col`],[3,`change`,`checked`,`aria-label`],[1,`was`],[`aria-label`,`Changes to saved records`,`data-list`,`record-changes`]],template:function(e,t){if(e&1&&(TC(0),Ax(1,Si,21,1),Ax(2,Mi,17,1)),e&2){let r=CO(t.preview());xR(),Nx(r.corrections.length>0?1:-1),xR(),Nx(r.recordChanges.length>0?2:-1)}},dependencies:[kt,nt,i],styles:[`.list[_ngcontent-%COMP%]{max-height:22rem;overflow:auto}table[_ngcontent-%COMP%]{border-collapse:collapse;width:100%}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:.25rem .5rem;text-align:left;vertical-align:top}.was[_ngcontent-%COMP%]{text-decoration:line-through;color:var(--%NS%mat-sys-on-surface-variant)}h4[_ngcontent-%COMP%]{margin:1rem 0 .25rem;font:var(--%NS%mat-sys-title-small)}`]})};var Ei=(a,n)=>n.id;function Ti(a,n){if(a&1){let e=Bx();Pl(0,`tr`)(1,`td`)(2,`mat-checkbox`,4),Yl(`change`,function(r){let p=FE(e).$implicit,d=zx();return jE(d.toggle(p.id,r.checked))}),Qg()(),Pl(3,`td`),gO(4),Qg(),Pl(5,`td`),gO(6),Qg(),Pl(7,`td`),gO(8),Qg(),Pl(9,`td`,5),gO(10),xO(11,`money`),Qg()()}if(a&2){let e=n.$implicit,t=zx();xR(2),Xw(`checked`,t.kept().has(e.id)),Qw(`aria-label`,`Keep `+e.description+` on `+e.date),xR(2),yC(e.date),xR(2),yC(e.account),xR(2),yC(e.description),xR(2),yC(PO(11,6,e.amount))}}var qt=class a{duplicates=Jl.required();kept=Jl.required();keptChange=wq();toggle(n,e){let t=new Set(this.kept());e?t.add(n):t.delete(n),this.keptChange.emit(t)}static ɵfac=function(e){return new(e||a)};static ɵcmp=Yo({type:a,selectors:[[`app-reimport-duplicates`]],inputs:{duplicates:[1,`duplicates`],kept:[1,`kept`]},outputs:{keptChange:`keptChange`},decls:19,vars:1,consts:[[1,`list`],[`aria-label`,`Likely duplicates`],[`scope`,`col`],[`scope`,`col`,1,`amount`],[3,`change`,`checked`,`aria-label`],[1,`amount`]],template:function(e,t){e&1&&(Pl(0,`p`),gO(1),Qg(),Pl(2,`div`,0)(3,`table`,1)(4,`thead`)(5,`tr`)(6,`th`,2),gO(7,`Keep`),Qg(),Pl(8,`th`,2),gO(9,`Date`),Qg(),Pl(10,`th`,2),gO(11,`Account`),Qg(),Pl(12,`th`,2),gO(13,`Description`),Qg(),Pl(14,`th`,3),gO(15,`Amount`),Qg()()(),Pl(16,`tbody`),Ox(17,Ti,12,8,`tr`,null,Ei),Qg()()()),e&2&&(xR(),im(` `,t.duplicates().length,` transactions match ones you already have (same date, account, description and amount). They will be skipped. Tick any that are real new transactions. `),xR(16),Px(t.duplicates()))},dependencies:[Bo,kt,nt,i],styles:[`.list[_ngcontent-%COMP%]{max-height:20rem;overflow:auto}.amount[_ngcontent-%COMP%]{text-align:right;font-variant-numeric:tabular-nums}table[_ngcontent-%COMP%]{border-collapse:collapse;width:100%}td[_ngcontent-%COMP%]{padding:.125rem .5rem}`]})};var Oi=(a,n)=>n.type;var Di=(a,n)=>n.account+n.windowStart;var Ri=(a,n)=>n.returned.id;var Ha=(a,n)=>n.id;var Pi=(a,n)=>n.income.id;var Fi=(a,n)=>n.rowNumber;function Ai(a,n){a&1&&(Pl(0,`p`,1),gO(1),Qg()),a&2&&(xR(),yC(n))}function zi(a,n){if(a&1){let e=Bx();Pl(0,`mat-card`,2)(1,`mat-card-content`)(2,`h3`),gO(3,`Updating your data`),Qg(),Pl(4,`p`,19),gO(5,` What you already have stays. This file adds `),Pl(6,`strong`),gO(7),Qg(),gO(8),Qg(),Pl(9,`app-import-updates`,20),Yl(`declinedChange`,function(r){FE(e);let p=zx();return jE(p.declinedChange.emit(r))}),Qg()()()}if(a&2){let e=zx();xR(7),yC(e.preview().transactionsToSave),xR(),DC(` new transaction`,e.preview().transactionsToSave===1?``:`s`,`; `,e.preview().duplicates.length,` already saved `,e.preview().duplicates.length===1?`is`:`are`,` skipped; and `,e.preview().corrections.length+e.preview().recordChanges.length,` will be corrected. `),xR(),Xw(`preview`,e.preview())(`declined`,e.declined())}}function Vi(a,n){if(a&1&&(Pl(0,`tr`)(1,`th`,6),gO(2),Qg(),Pl(3,`td`,7),gO(4),Qg()()),a&2){let e=n.$implicit;Zo(`data-count`,e.type),xR(2),yC(e.label),xR(2),yC(e.count)}}function Li(a,n){if(a&1){let e=Bx();Pl(0,`mat-card`,8)(1,`mat-card-content`)(2,`h3`),gO(3,`Rows imported twice`),Qg(),Pl(4,`p`),gO(5),Qg(),Pl(6,`mat-slide-toggle`,21),Yl(`change`,function(r){FE(e);let p=zx();return jE(p.removeDoubleFeedChange.emit(r.checked))}),gO(7,` Remove the copies `),Qg()()()}if(a&2){let e=n.$implicit,t=zx();xR(5),IC(` `,e.account,`: from `,e.windowStart,` to the day before `,e.cutoff,` (`,e.weeks,` weeks) most rows appear twice. `,e.removed,` copies will be removed. `),xR(),Xw(`checked`,t.removeDoubleFeed())}}function Bi(a,n){if(a&1){let e=Bx();Pl(0,`mat-card`,9)(1,`mat-card-content`)(2,`h3`),gO(3,`Already imported`),Qg(),Pl(4,`app-reimport-duplicates`,22),Yl(`keptChange`,function(r){FE(e);let p=zx();return jE(p.keptDuplicatesChange.emit(r))}),Qg()()()}if(a&2){let e=zx();xR(4),Xw(`duplicates`,e.preview().duplicates)(`kept`,e.keptDuplicates())}}function qi(a,n){if(a&1&&(Pl(0,`li`),gO(1),xO(2,`money`),xO(3,`money`),Qg()),a&2){let e=n.$implicit;xR(),IC(` `,e.returned.date,` `,e.returned.description,` `,PO(2,5,e.returned.amount),` matches `,e.original.date,` `,PO(3,7,e.original.amount),` `)}}function ji(a,n){if(a&1&&(Pl(0,`li`),gO(1),xO(2,`money`),Qg()),a&2){let e=n.$implicit;xR(),EC(` `,e.date,` `,e.description,` `,PO(2,3,e.amount),`: no matching payment found `)}}function Ui(a,n){if(a&1&&(Pl(0,`mat-card`,10)(1,`mat-card-content`)(2,`h3`),gO(3,`Returned payments`),Qg(),Pl(4,`p`),gO(5,`A payment that bounced cancels out with the original payment.`),Qg(),Pl(6,`ul`),Ox(7,qi,4,9,`li`,null,Ri),Ox(9,ji,3,5,`li`,null,Ha),Qg()()()),a&2){let e=zx();xR(7),Px(e.preview().returnedPayments),xR(2),Px(e.preview().unmatchedReturns)}}function Wi(a,n){if(a&1&&(Pl(0,`li`),gO(1),xO(2,`money`),Qg()),a&2){let e=n.$implicit;xR(),EC(``,e.date,` `,e.description,` `,PO(2,3,e.amount))}}function Gi(a,n){if(a&1&&(Pl(0,`mat-card`,11)(1,`mat-card-content`)(2,`h3`),gO(3,`Refunds`),Qg(),Pl(4,`p`),gO(5,`Refunds reduce spending on the line they belong to.`),Qg(),Pl(6,`ul`),Ox(7,Wi,3,5,`li`,null,Ha),Qg()()()),a&2){let e=zx();xR(7),Px(e.preview().refunds)}}function Hi(a,n){if(a&1&&(Pl(0,`li`),gO(1),xO(2,`money`),Qg()),a&2){let e=n.$implicit;xR(),wC(` `,e.income.date,` `,e.income.description,` `,PO(2,6,e.income.amount),` after `,e.transfer.date,` `,e.transfer.description,` on `,e.transfer.account,` `)}}function $i(a,n){if(a&1&&(Pl(0,`mat-card`,12)(1,`mat-card-content`)(2,`h3`),gO(3,`May be your own money coming back`),Qg(),Pl(4,`p`),gO(5,` These deposits follow a transfer out of the same amount, so they are not counted as income. `),Qg(),Pl(6,`ul`),Ox(7,Hi,3,8,`li`,null,Pi),Qg()()()),a&2){let e=zx();xR(7),Px(e.preview().mirrors)}}function Ki(a,n){if(a&1&&(Pl(0,`tr`)(1,`td`),gO(2),Qg(),Pl(3,`td`),gO(4),Qg()()),a&2){let e=n.$implicit;xR(2),yC(e.rowNumber??``),xR(2),yC(e.message)}}function Xi(a,n){if(a&1&&(Pl(0,`mat-card`,13)(1,`mat-card-content`)(2,`h3`),gO(3),Qg(),Pl(4,`p`),gO(5,`They will be imported, but something looks off.`),Qg(),Pl(6,`table`,23)(7,`thead`)(8,`tr`)(9,`th`,24),gO(10,`Row`),Qg(),Pl(11,`th`,24),gO(12,`What to check`),Qg()()(),Pl(13,`tbody`),Ox(14,Ki,5,2,`tr`,null,Rx),Qg()()()()),a&2){let e=zx();xR(3),im(`Check these rows (`,e.preview().warnings.length,`)`),xR(11),Px(e.preview().warnings)}}function Qi(a,n){if(a&1&&(Pl(0,`tr`)(1,`td`),gO(2),Qg(),Pl(3,`td`),gO(4),Qg(),Pl(5,`td`),gO(6),Qg()()),a&2){let e=n.$implicit;xR(2),yC(e.rowNumber),xR(2),yC(e.recordType||`(no type)`),xR(2),yC(e.reason)}}function Yi(a,n){if(a&1&&(Pl(0,`mat-card`,14)(1,`mat-card-content`)(2,`h3`),gO(3),Qg(),Pl(4,`p`),gO(5,`These rows are not imported. Fix them in the CSV and import again.`),Qg(),Pl(6,`table`,25)(7,`thead`)(8,`tr`)(9,`th`,24),gO(10,`Row`),Qg(),Pl(11,`th`,24),gO(12,`Record type`),Qg(),Pl(13,`th`,24),gO(14,`Reason`),Qg()()(),Pl(15,`tbody`),Ox(16,Qi,7,3,`tr`,null,Fi),Qg()()()()),a&2){let e=zx();xR(3),im(`Skipped rows (`,e.preview().skipped.length,`)`),xR(13),Px(e.preview().skipped)}}var Zi={transaction:`Transaction rows`,debt:`Debts`,income:`Income sources`,deduction:`Payroll deductions`,bill:`Bills`,balance:`Cash balances`,schedule:`Payment schedule changes`,windfall:`Windfalls`};var jt=class a{preview=Jl.required();notice=Jl(null);removeDoubleFeed=Jl.required();keptDuplicates=Jl.required();declined=Jl(/* @__PURE__ */ new Set);declinedChange=wq();removeDoubleFeedChange=wq();keptDuplicatesChange=wq();confirmed=wq();cancelled=wq();countRows=Vr(()=>Object.entries(this.preview().counts).map(([n,e])=>({type:n,count:e,label:Zi[n]??n})));toSave=Vr(()=>{let n=this.declined(),e=this.preview().corrections.filter(t=>t.kind===`amount`&&n.has(t.file.id)).length;return this.preview().transactionsToSave+this.keptDuplicates().size+e});static ɵfac=function(e){return new(e||a)};static ɵcmp=Yo({type:a,selectors:[[`app-import-preview`]],inputs:{preview:[1,`preview`],notice:[1,`notice`],removeDoubleFeed:[1,`removeDoubleFeed`],keptDuplicates:[1,`keptDuplicates`],declined:[1,`declined`]},outputs:{declinedChange:`declinedChange`,removeDoubleFeedChange:`removeDoubleFeedChange`,keptDuplicatesChange:`keptDuplicatesChange`,confirmed:`confirmed`,cancelled:`cancelled`},decls:55,vars:18,consts:[[`data-note`,`not-saved`,1,`lead`],[`role`,`status`,1,`notice`],[`appearance`,`outlined`,`data-section`,`update`],[`appearance`,`outlined`],[`aria-label`,`Records per type`],[`aria-label`,`Totals`],[`scope`,`row`],[1,`num`],[`appearance`,`outlined`,`data-section`,`double-feed`],[`appearance`,`outlined`,`data-section`,`duplicates`],[`appearance`,`outlined`,`data-section`,`returns`],[`appearance`,`outlined`,`data-section`,`refunds`],[`appearance`,`outlined`,`data-section`,`mirrors`],[`appearance`,`outlined`,`data-section`,`warnings`],[`appearance`,`outlined`,`data-section`,`skipped`],[1,`confirm-bar`],[1,`actions`],[`mat-flat-button`,``,`type`,`button`,3,`click`],[`mat-button`,``,`type`,`button`,3,`click`],[`data-note`,`update-summary`],[3,`declinedChange`,`preview`,`declined`],[3,`change`,`checked`],[3,`keptChange`,`duplicates`,`kept`],[`aria-label`,`Flagged rows`],[`scope`,`col`],[`aria-label`,`Skipped rows`]],template:function(e,t){if(e&1&&(Pl(0,`p`,0),gO(1,` Nothing is saved yet. Look over the preview, then press `),Pl(2,`strong`),gO(3,`Confirm`),Qg(),gO(4,` at the bottom of the window to import. `),Qg(),Ax(5,Ai,2,1,`p`,1),Ax(6,zi,10,7,`mat-card`,2),Pl(7,`mat-card`,3)(8,`mat-card-content`)(9,`h3`),gO(10,`What is in the file`),Qg(),Pl(11,`table`,4)(12,`tbody`),Ox(13,Vi,5,3,`tr`,null,Oi),Qg()(),Pl(15,`h3`),gO(16,`Totals`),Qg(),Pl(17,`table`,5)(18,`tbody`)(19,`tr`)(20,`th`,6),gO(21,`Income`),Qg(),Pl(22,`td`,7),gO(23),xO(24,`money`),Qg()(),Pl(25,`tr`)(26,`th`,6),gO(27,`Spending`),Qg(),Pl(28,`td`,7),gO(29),xO(30,`money`),Qg()(),Pl(31,`tr`)(32,`th`,6),gO(33,`Debt`),Qg(),Pl(34,`td`,7),gO(35),xO(36,`money`),Qg()()()(),Pl(37,`p`),gO(38,` Income leaves out money moved from your own accounts. Spending is money out less refunds, leaving out transfers, card payments, returned payments and loan statements. Debt is the sum of the debt balances in the file. `),Qg()()(),Ox(39,Li,8,6,`mat-card`,8,Di),Ax(41,Bi,5,2,`mat-card`,9),Ax(42,Ui,11,0,`mat-card`,10),Ax(43,Gi,9,0,`mat-card`,11),Ax(44,$i,9,0,`mat-card`,12),Ax(45,Xi,16,1,`mat-card`,13),Ax(46,Yi,18,1,`mat-card`,14),Pl(47,`div`,15)(48,`p`),gO(49),Qg(),Pl(50,`div`,16)(51,`button`,17),Yl(`click`,function(){return t.confirmed.emit()}),gO(52,`Confirm`),Qg(),Pl(53,`button`,18),Yl(`click`,function(){return t.cancelled.emit()}),gO(54,`Cancel`),Qg()()()),e&2){let r;xR(5),Nx((r=t.notice())?5:-1,r),xR(),Nx(t.preview().updating?6:-1),xR(7),Px(t.countRows()),xR(10),yC(PO(24,12,t.preview().totals.income)),xR(6),yC(PO(30,14,t.preview().totals.spending)),xR(6),yC(PO(36,16,t.preview().totals.debt)),xR(4),Px(t.preview().doubleFeed.windows),xR(2),Nx(t.preview().duplicates.length>0?41:-1),xR(),Nx(t.preview().returnedPayments.length>0||t.preview().unmatchedReturns.length>0?42:-1),xR(),Nx(t.preview().refunds.length>0?43:-1),xR(),Nx(t.preview().mirrors.length>0?44:-1),xR(),Nx(t.preview().warnings.length>0?45:-1),xR(),Nx(t.preview().skipped.length>0?46:-1),xR(3),im(``,t.toSave(),` transactions will be saved.`)}},dependencies:[Bo,zo,A,I,_,Ga,kn,Bt,qt,i],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;gap:1rem}table[_ngcontent-%COMP%]{border-collapse:collapse}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{text-align:left;padding:.125rem .75rem .125rem 0;vertical-align:top}.num[_ngcontent-%COMP%]{text-align:right;font-variant-numeric:tabular-nums}.notice[_ngcontent-%COMP%]{padding:.5rem 1rem;border-radius:.5rem;background:var(--%NS%mat-sys-secondary-container);color:var(--%NS%mat-sys-on-secondary-container)}.lead[_ngcontent-%COMP%]{margin:0}.confirm-bar[_ngcontent-%COMP%]{position:sticky;bottom:0;z-index:1;display:flex;flex-wrap:wrap;align-items:center;gap:.5rem 1rem;margin:0 -.5rem;padding:.75rem .5rem;background:var(--%NS%app-bg);border-top:1px solid var(--%NS%app-border)}.confirm-bar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{flex:1 1 12rem;margin:0;font-weight:500}.actions[_ngcontent-%COMP%]{display:flex;gap:.5rem}h3[_ngcontent-%COMP%]{margin:0 0 .5rem}`]})};var Ji=()=>({});var eo=a=>({columns:a,flipSign:!1});function to(a,n){a&1&&(Pl(0,`p`),gO(1,`Open or create a data file first.`),Qg(),Pl(2,`a`,1),gO(3,`Go to Welcome`),Qg())}function no(a,n){a&1&&(Pl(0,`p`,4),gO(1,` You are trying the sample. Anything you import here stays in memory and is not saved. To use your own data, choose Close file in the menu at the top right and create a data file. `),Qg())}function ao(a,n){a&1&&(gO(0,` Or `),Pl(1,`a`,15),gO(2,`connect your bank`),Qg(),gO(3,` to fetch transactions without a CSV. `))}function io(a,n){a&1&&(Pl(0,`p`,6)(1,`mat-icon`,16),gO(2,`info`),Qg(),Pl(3,`span`),gO(4,` You already have transactions up to `),Pl(5,`strong`),gO(6),Qg(),gO(7,`. To update, import a file with only what is newer: everything saved stays, rows you already have are skipped, and corrections to old rows are shown before anything is saved. `),Qg()()),a&2&&(xR(6),yC(n))}function oo(a,n){if(a&1){let e=Bx();Pl(0,`button`,17),Yl(`click`,function(){FE(e);let r=zx(3);return jE(r.importSample())}),gO(1,` Import the sample file `),Qg()}}function ro(a,n){a&1&&(Pl(0,`span`,21),gO(1,`Asking SimpleFIN…`),Qg())}function co(a,n){if(a&1){let e=Bx();Pl(0,`section`,13)(1,`h2`,18),gO(2,`From your bank connection`),Qg(),Pl(3,`p`,19),gO(4,` Fetch new transactions and balances from SimpleFIN. You see the same preview as for a CSV before anything is saved. `),Qg(),Pl(5,`button`,20),Yl(`click`,function(){FE(e);let r=zx(3);return jE(r.refreshBank())}),Pl(6,`mat-icon`,10),gO(7,`sync`),Qg(),gO(8,` Refresh from bank `),Qg(),Ax(9,ro,2,0,`span`,21),Qg()}if(a&2){let e=zx(3);xR(5),Xw(`disabled`,e.bank.busy()),xR(4),Nx(e.bank.busy()?9:-1)}}function so(a,n){a&1&&(Pl(0,`p`,19),gO(1,` Your bank is connected but no account is chosen yet. Choose which accounts to import, and new transactions and balances come in with one click. `),Qg())}function lo(a,n){a&1&&(Pl(0,`p`,19),gO(1,` Instead of making a CSV every time, the app can fetch your transactions and balances from your bank through SimpleFIN Bridge, a paid service you sign up for yourself. The app never sees your bank login, and you see the same preview before anything is saved. Optional; the data file needs a passphrase first. `),Qg())}function mo(a,n){if(a&1&&(Pl(0,`section`,14)(1,`h2`,22)(2,`mat-icon`,16),gO(3,`account_balance`),Qg(),gO(4),Qg(),Ax(5,so,2,0,`p`,19)(6,lo,2,0,`p`,19),Pl(7,`a`,23)(8,`mat-icon`,10),gO(9,`link`),Qg(),gO(10),Qg()()),a&2){let e=zx(3);xR(4),im(` `,e.bank.connected()?`Finish connecting your bank`:`Or connect your bank`,` `),xR(),Nx(e.bank.connected()?5:6),xR(5),im(` `,e.bank.connected()?`Choose accounts`:`Connect bank`,` `)}}function po(a,n){if(a&1){let e=Bx();Ax(0,no,2,0,`p`,4),Pl(1,`p`),gO(2,` Import the CSV your AI assistant made from your statements. Nothing leaves this device. `),Ax(3,ao,4,0),Qg(),Pl(4,`p`),gO(5,` No CSV yet? `),Pl(6,`a`,5),gO(7,`The Help page shows how to make one`),Qg(),gO(8,`, step by step. `),Qg(),Ax(9,io,8,1,`p`,6),Pl(10,`div`,7),Yl(`dragover`,function(r){FE(e);let p=zx(2);return jE(p.onDragOver(r))})(`dragleave`,function(){FE(e);let r=zx(2);return jE(r.dragging.set(!1))})(`drop`,function(r){FE(e);let p=zx(2);return jE(p.onDrop(r))}),Pl(11,`p`),gO(12,`Drop a CSV file here, or`),Qg(),Pl(13,`div`,8)(14,`button`,9),Yl(`click`,function(){FE(e);let r=qx(20);return jE(r.click())}),Pl(15,`mat-icon`,10),gO(16,`upload_file`),Qg(),gO(17,` Choose CSV file `),Qg(),Ax(18,oo,2,0,`button`,11),Qg(),Pl(19,`input`,12,0),Yl(`change`,function(r){FE(e);let p=zx(2);return jE(p.onFileInput(r))}),Qg()(),Ax(21,co,10,2,`section`,13)(22,mo,11,3,`section`,14)}if(a&2){let e,t=zx(2);Nx(t.store.isSample()?0:-1),xR(3),Nx(!t.store.isSample()&&!t.bank.mapped()?3:-1),xR(6),Nx((e=t.latestSaved())?9:-1,e),xR(),Ql(`over`,t.dragging()),xR(8),Nx(t.store.isSample()?18:-1),xR(3),Nx(t.bank.mapped()?21:t.store.isSample()?-1:22)}}function ho(a,n){if(a&1){let e=Bx();Pl(0,`app-column-mapper`,24),Yl(`confirmed`,function(r){FE(e);let p=zx(2);return jE(p.onMapped(r))})(`cancelled`,function(){FE(e);let r=zx(2);return jE(r.reset())}),Qg()}if(a&2){let e=zx(2);Xw(`headers`,e.headers())(`rows`,e.rawRows().slice(0,50))(`initial`,e.mapping()??NO(5,eo,MO(4,Ji)))(`incomeNames`,e.incomeNames())}}function uo(a,n){if(a&1&&(Pl(0,`li`),gO(1),Qg()),a&2){let e=n.$implicit;xR(),yC(e)}}function bo(a,n){if(a&1&&(Pl(0,`div`,29)(1,`mat-icon`,16),gO(2,`info`),Qg(),Pl(3,`div`)(4,`p`),gO(5,`SimpleFIN says:`),Qg(),Pl(6,`ul`),Ox(7,uo,2,1,`li`,null,xx),Qg()()()),a&2){let e=zx();xR(7),Px(e.messages)}}function go(a,n){a&1&&(Pl(0,`h2`,28),gO(1,`From your bank connection`),Qg(),Ax(2,bo,9,0,`div`,29)),a&2&&(xR(2),Nx(n.messages.length>0?2:-1))}function _o(a,n){if(a&1&&(Pl(0,`h2`),gO(1),Qg()),a&2){let e=zx(4);xR(),im(`Preview: `,e.fileName())}}function fo(a,n){if(a&1){let e=Bx();Pl(0,`app-bank-categories`,30),bC(`picksChange`,function(r){FE(e);let p=zx(4);return wO(p.categoryPicks,r)||(p.categoryPicks=r),jE(r)}),Qg()}if(a&2){let e=zx(4);Xw(`rows`,e.needsCategory()),CC(`picks`,e.categoryPicks)}}function ko(a,n){if(a&1){let e=Bx();Pl(0,`app-bank-categories`,31),bC(`picksChange`,function(r){FE(e);let p=zx(4);return wO(p.categoryPicks,r)||(p.categoryPicks=r),jE(r)}),Qg()}if(a&2){let e=zx(4);Xw(`rows`,e.guessedCategory())(`guessed`,!0),CC(`picks`,e.categoryPicks)}}function yo(a,n){if(a&1){let e=Bx();Ax(0,go,3,1)(1,_o,2,1,`h2`),Ax(2,fo,1,2,`app-bank-categories`,25),Ax(3,ko,1,3,`app-bank-categories`,26),Pl(4,`app-import-preview`,27),Yl(`declinedChange`,function(r){FE(e);let p=zx(3);return jE(p.declined.set(r))})(`removeDoubleFeedChange`,function(r){FE(e);let p=zx(3);return jE(p.setRemoveDoubleFeed(r))})(`keptDuplicatesChange`,function(r){FE(e);let p=zx(3);return jE(p.keptDuplicates.set(r))})(`confirmed`,function(){FE(e);let r=zx(3);return jE(r.confirm())})(`cancelled`,function(){FE(e);let r=zx(3);return jE(r.reset())}),Qg()}if(a&2){let e,t=zx(3);Nx((e=t.bankSync())?0:1,e),xR(2),Nx(t.needsCategory().length>0?2:-1),xR(),Nx(t.guessedCategory().length>0?3:-1),xR(),Xw(`preview`,n.preview)(`notice`,t.notice())(`removeDoubleFeed`,t.removeDoubleFeed())(`keptDuplicates`,t.keptDuplicates())(`declined`,t.declined())}}function vo(a,n){if(a&1&&Ax(0,yo,5,8),a&2){let e,t=zx(2);Nx((e=t.prepared())?0:-1,e)}}function xo(a,n){if(a&1){let e=Bx();Pl(0,`p`,32),gO(1),Qg(),Pl(2,`section`,33)(3,`h2`,34),gO(4,`What to do next`),Qg(),Pl(5,`ol`)(6,`li`)(7,`a`,35),gO(8,`Dashboard`),Qg(),gO(9,`: see your health check and confirm anything the app was unsure about. `),Qg(),Pl(10,`li`)(11,`a`,36),gO(12,`Budget`),Qg(),gO(13,`: adjust the monthly target for each line.`),Qg(),Pl(14,`li`)(15,`a`,37),gO(16,`Debts`),Qg(),gO(17,`: choose a payoff strategy and see your debt-free month. `),Qg(),Pl(18,`li`)(19,`a`,38),gO(20,`Check-in`),Qg(),gO(21,`: add the weekly check-ins to your calendar. `),Qg()(),Pl(22,`div`,39)(23,`a`,40),gO(24,`Go to Dashboard`),Qg(),Pl(25,`button`,17),Yl(`click`,function(){FE(e);let r=zx(2);return jE(r.reset())}),gO(26,` Import another file `),Qg()()()}if(a&2){let e=zx(2);xR(),yC(e.savedMessage())}}function wo(a,n){a&1&&(Pl(0,`p`,3),gO(1),Qg()),a&2&&(xR(),yC(n))}function Co(a,n){if(a&1&&(Ax(0,po,23,7)(1,ho,1,7,`app-column-mapper`,2)(2,vo,1,1)(3,xo,27,1),Ax(4,wo,2,1,`p`,3)),a&2){let e,t,r=zx();Nx((e=r.step())===`pick`?0:e===`map`?1:e===`preview`?2:e===`done`?3:-1),xR(4),Nx((t=r.error())?4:-1,t)}}var So=`Bank connection (SimpleFIN)`;var Io=`This file uses the older template (v1). It was imported; the newer columns (account type, link, credit limit and others) are empty.`;var $a=class a{store=M(LT);route=M(hr);router=M(si);bank=M(Tn);step=ve(`pick`);dragging=ve(!1);error=ve(null);fileName=ve(``);headers=ve([]);rawRows=ve([]);notice=ve(null);mapping=ve(null);newMappingSignature=ve(null);templateRows=ve([]);removeDoubleFeed=ve(!0);prepared=ve(null);keptDuplicates=ve(/* @__PURE__ */ new Set);declined=ve(/* @__PURE__ */ new Set);latestSaved=Vr(()=>(this.store.data()?.transactions??[]).reduce((n,e)=>e.date>n?e.date:n,``));savedMessage=ve(``);bankSync=ve(null);needsCategory=Vr(()=>{let n=this.prepared();return n?Me(n):[]});guessedCategory=Vr(()=>{let n=this.prepared();return n?Re(n):[]});categoryPicks=ve({});incomeNames=Vr(()=>this.store.data()?.incomes.map(n=>n.name)??[]);ngOnInit(){let n=this.bank.takePending();if(n){this.startBankImport(n);return}this.store.isSample()&&this.route.snapshot.queryParamMap.has(`sample`)&&this.importSample()}startBankImport(n){this.reset(),this.fileName.set(So),this.bankSync.set(n),this.templateRows.set(n.rows),this.prepare()}async refreshBank(){this.error.set(null);let n=await this.bank.sync();if(!n.ok){this.error.set(n.message);return}this.startBankImport(n.value)}onDragOver(n){n.preventDefault(),this.dragging.set(!0)}async onDrop(n){n.preventDefault(),this.dragging.set(!1);let e=n.dataTransfer?.files[0];e&&await this.readFile(e)}async onFileInput(n){let e=n.target,t=e.files?.[0];e.value=``,t&&await this.readFile(t)}async importSample(){let{csv:n}=await Ae();this.start(n,$e)}onMapped(n){this.mapping.set(n),this.newMappingSignature.set(ln(this.headers())),this.templateRows.set(dn(this.rawRows(),n)),this.prepare()}setRemoveDoubleFeed(n){this.removeDoubleFeed.set(n),this.prepare()}confirm(){let n=this.prepared();if(!n)return;let e=Pe(n),t=this.keptDuplicates();e.skipTransactionIds=e.skipTransactionIds.filter(N=>!t.has(N));let r=this.declined();e.declinedCorrections=n.preview.corrections.map(N=>N.file.id).filter(N=>r.has(N)),e.keepExisting=n.preview.recordChanges.map(N=>N.id).filter(N=>r.has(N));let p=this.newMappingSignature(),d=this.mapping();p&&d&&(e.mapping={signature:p,mapping:d});let u=this.bankSync(),_=Object.entries(this.categoryPicks());this.store.update(N=>{let g=De$1(N,n,e,this.fileName(),Ka());for(let[U,se]of _)g=JS(g,U,{category:se});return g}),u&&this.bank.markSynced(u.end);let q=n.preview.corrections.filter(N=>N.kind===`amount`&&r.has(N.file.id)).length,w=n.preview.transactionsToSave+t.size+q,I=n.preview.corrections.length+n.preview.recordChanges.length-r.size;this.savedMessage.set(`Imported ${this.fileName()}: ${w} transactions saved.`+(I>0?` ${I} corrected.`:``)),this.step.set(`done`),this.prepared.set(null),this.bankSync.set(null),this.categoryPicks.set({})}reset(){this.step.set(`pick`),this.error.set(null),this.notice.set(null),this.mapping.set(null),this.newMappingSignature.set(null),this.prepared.set(null),this.removeDoubleFeed.set(!0),this.keptDuplicates.set(/* @__PURE__ */ new Set),this.declined.set(/* @__PURE__ */ new Set),this.bankSync.set(null),this.categoryPicks.set({}),this.route.snapshot.queryParamMap.has(`sample`)&&this.router.navigate([],{queryParams:{}})}async readFile(n){try{this.start(await n.text(),n.name)}catch(e){this.error.set(bs(e,`import`))}}start(n,e){this.reset();let{headers:t,rows:r}=Da(n);if(t.length===0||r.length===0){this.error.set(`That file has no header row or no data rows.`);return}this.fileName.set(e),this.headers.set(t),this.rawRows.set(r);let p=s(t);if(p!==`unknown`){this.notice.set(p===`v1`?Io:null),this.templateRows.set(r),this.prepare();return}let d=this.store.data()?.columnMappings[ln(t)];if(d){this.mapping.set(d),this.templateRows.set(dn(r,d)),this.prepare();return}this.mapping.set(Ra(t,r.slice(0,20))),this.step.set(`map`)}prepare(){let n=this.store.data();if(!n)return;let e={importId:crypto.randomUUID(),newId:()=>crypto.randomUUID(),importDate:Ka()};this.prepared.set(Ce(this.templateRows(),n,e,{removeDoubleFeed:this.removeDoubleFeed()})),this.keptDuplicates.set(/* @__PURE__ */ new Set),this.declined.set(/* @__PURE__ */ new Set),this.step.set(`preview`)}static ɵfac=function(e){return new(e||a)};static ɵcmp=Yo({type:a,selectors:[[`app-import-page`]],decls:4,vars:1,consts:[[`picker`,``],[`mat-flat-button`,``,`routerLink`,`/welcome`],[3,`headers`,`rows`,`initial`,`incomeNames`],[`role`,`alert`,1,`error`],[`role`,`note`,1,`sample-note`],[`routerLink`,`/help`],[`role`,`note`,`data-note`,`update-hint`,1,`callout`],[1,`drop`,3,`dragover`,`dragleave`,`drop`],[1,`row`],[`mat-flat-button`,``,`type`,`button`,3,`click`],[1,`material-icons`],[`mat-stroked-button`,``,`type`,`button`],[`type`,`file`,`accept`,`.csv,text/csv`,`hidden`,``,3,`change`],[`data-panel`,`bank-refresh`,`aria-labelledby`,`bank-refresh`,1,`panel`,`bank`],[`data-panel`,`bank-offer`,`aria-labelledby`,`bank-offer`,1,`panel`,`bank`],[`routerLink`,`/bank`],[`aria-hidden`,`true`,1,`material-icons`],[`mat-stroked-button`,``,`type`,`button`,3,`click`],[`id`,`bank-refresh`],[1,`muted`,`small`],[`mat-stroked-button`,``,`type`,`button`,`data-action`,`refresh-bank`,3,`click`,`disabled`],[`role`,`status`,1,`muted`,`small`],[`id`,`bank-offer`],[`mat-stroked-button`,``,`routerLink`,`/bank`,`data-action`,`go-bank`],[3,`confirmed`,`cancelled`,`headers`,`rows`,`initial`,`incomeNames`],[3,`rows`,`picks`],[3,`rows`,`guessed`,`picks`],[3,`declinedChange`,`removeDoubleFeedChange`,`keptDuplicatesChange`,`confirmed`,`cancelled`,`preview`,`notice`,`removeDoubleFeed`,`keptDuplicates`,`declined`],[`data-field`,`preview-source`],[`role`,`note`,`data-list`,`simplefin-messages`,1,`callout`,`warn`],[3,`picksChange`,`rows`,`picks`],[3,`picksChange`,`rows`,`guessed`,`picks`],[`role`,`status`],[`aria-labelledby`,`next`,1,`panel`,`next`],[`id`,`next`],[`routerLink`,`/dashboard`],[`routerLink`,`/budget`],[`routerLink`,`/debts`],[`routerLink`,`/checkin`],[1,`row`,`start`],[`mat-flat-button`,``,`routerLink`,`/dashboard`]],template:function(e,t){e&1&&(Pl(0,`h1`),gO(1,`Import`),Qg(),Ax(2,to,4,0)(3,Co,5,2)),e&2&&(xR(2),Nx(t.store.isOpen()?3:2))},dependencies:[Bo,zo,A,e9,JY,Hd,Vt,jt,Pt],styles:[`[_nghost-%COMP%]{display:block;max-width:56rem;margin:0 auto}.drop[_ngcontent-%COMP%]{border:2px dashed var(--%NS%mat-sys-outline);border-radius:.75rem;padding:2rem;text-align:center}.drop.over[_ngcontent-%COMP%]{border-color:var(--%NS%mat-sys-primary);background:var(--%NS%mat-sys-primary-container)}.row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem;justify-content:center}.row.start[_ngcontent-%COMP%]{justify-content:flex-start}.next[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-medium)}.next[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.375rem}.error[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error)}.sample-note[_ngcontent-%COMP%]{padding:.625rem 1rem;border-radius:.75rem;background:var(--%NS%app-warn-bg);color:var(--%NS%app-warn-fg)}.drop[_ngcontent-%COMP%]{background:var(--%NS%app-surface)}.bank[_ngcontent-%COMP%]{margin-top:1.25rem}.bank[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:.75rem}.bank[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}app-bank-categories[_ngcontent-%COMP%]{margin-bottom:1.25rem}`]})};function Ka(){let a=/* @__PURE__ */ new Date,n=e=>String(e).padStart(2,`0`);return`${a.getFullYear()}-${n(a.getMonth()+1)}-${n(a.getDate())}`}export{$a as ImportPage};