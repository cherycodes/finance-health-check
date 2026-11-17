import{$ as n,A as En,C as nn,E as w,M as ae,_t,a as Rt,at as Ze,bt as zo$1,c as ye,ct as gt,dt as De,et as s,ft as Te,g as V,ht as Xe,i as N$1,it as Xe$1,lt as se,m as Qt,n as Ht,nt as $n,o as me,ot as bt,p as N,pt as U,rt as Qn,s as xt,st as fn$1,t as Dt,ut as Bo,vt as lo$1,y as fe$1,yt as wt}from"./main-C44DN5RV.js";import{c as _e,i as Fe,n as De$1,o as Re,r as Ee,s as We,t as Ae}from"./chunk-DeJu1Xq5.js";import{n as b}from"./chunk-D1eHnIie.js";import{t as Z}from"./chunk-pKFpmR67.js";import{n as I,r as _,t as A}from"./chunk-BWifJgM4.js";import{t as i}from"./chunk-pZUfv9KN.js";import"./chunk-6Pb_W5GM.js";import{n as D,t as C}from"./chunk-2uhlsz_1.js";import{t as N$2}from"./chunk-CYAHyt1M.js";import{$ as MO,$t as WY,A as Fm,An as ao$1,Ar as rb,At as SO,B as HO,Bn as dl,C as EY,Cr as ot,D as FC,Dr as qp,Dt as RP,E as Et,Er as qa$1,Et as RO,F as Ge,Fr as sb,G as K,Gn as g9,Gr as vd,Gt as VA,H as Ia,Hn as eb,Ir as so$1,J as LO,Jn as h9,Jr as wd,Lt as TF,O as FQ,P as GY,Pn as cb,Pt as Sr,Qr as xD,Rr as tb,Rt as TP,S as EP,Sn as _P,Sr as od,T as Ei$1,Un as fP,Ur as uo$1,Ut as Um,W as JC,Wn as ff,Yr as wi$1,Yt as Vn,Z as Lm,Zr as wt$1,Zt as WO,_i as v,_r as nb,_t as P_,at as NC,b as EF,bn as Zs,c as Ce,cn as Xt,cr as lZ,ct as Ni$1,d as DP,dn as YY,dt as OC,et as MP,fi as zn,gn as ZQ,gt as PC,h as Di$1,ht as Or,i as AO,it as N$3,jn as bT,jr as rn,jt as Se,lt as Nm,m as Dd,mi as r,mn as Yt,mt as Om,or as km,ot as NO,p as Da,qr as wP,rr as jm,rt as Ms,s as Cd,ti as x_,tr as ib,tt as MR,u as DD,un as YT,ur as lk,ut as Ns,vi as w$1,vt as Pm,w as Ed,wt as RD,xn as _O,xr as ob,y as ED,z as HC,zn as db}from"./chunk-DQ8CPunn.js";var Pa=v((ln,dn)=>{"use strict";((a,n)=>{typeof define==`function`&&define.amd?define([],n):typeof dn==`object`&&typeof ln<`u`?dn.exports=n():a.Papa=n()})(ln,function a(){var n=typeof self<`u`?self:typeof window<`u`?window:n!==void 0?n:{},e=!n.document&&!!n.postMessage,t=n.IS_PAPA_WORKER||!1,r={},p=0,m={};function u(l){return l.charCodeAt(0)===65279?l.slice(1):l}function _(l){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine=``,this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(s){var h=Kt(s);h.chunkSize=parseInt(h.chunkSize),s.step||s.chunk||(h.chunkSize=null),this._handle=new g(h),(this._handle.streamer=this)._config=h}.call(this,l),this.parseChunk=function(s,h){var y=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<y){let B=this._config.newline;B||(f=this._config.quoteChar||`"`,B=this._handle.guessLineEndings(s,f)),s=[...s.split(B).slice(y)].join(B)}this.isFirstChunk&&ae(this._config.beforeFirstChunk)&&(f=this._config.beforeFirstChunk(s))!==void 0&&(s=f),this.isFirstChunk=!1,this._halted=!1;var y=this._partialLine+s,f=(this._partialLine=``,this._handle.parse(y,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(s=f.meta.cursor,y=(this._finished||(this._partialLine=y.substring(s-this._baseIndex),this._baseIndex=s),f&&f.data&&(this._rowCount+=f.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),t)n.postMessage({results:f,workerId:m.WORKER_ID,finished:y});else if(ae(this._config.chunk)&&!h){if(this._config.chunk(f,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=f=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(f.data),this._completeResults.errors=this._completeResults.errors.concat(f.errors),this._completeResults.meta=f.meta),this._completed||!y||!ae(this._config.complete)||f&&f.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),y||f&&f.meta.paused||this._nextChunk(),f}this._halted=!0},this._sendError=function(s){ae(this._config.error)?this._config.error(s):t&&this._config.error&&n.postMessage({workerId:m.WORKER_ID,error:s,finished:!1})}}function L(l){var s;(l=l||{}).chunkSize||(l.chunkSize=m.RemoteChunkSize),_.call(this,l),this._nextChunk=e?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(h){this._input=h,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(s=new XMLHttpRequest,this._config.withCredentials&&(s.withCredentials=this._config.withCredentials),e||(s.onload=We(this._chunkLoaded,this),s.onerror=We(this._chunkError,this)),s.ontimeout=We(this._chunkTimeout,this),s.open(this._config.downloadRequestBody?`POST`:`GET`,this._input,!e),this._config.downloadTimeout&&!e&&(s.timeout=this._config.downloadTimeout),this._config.downloadRequestHeaders){var h,y=this._config.downloadRequestHeaders;for(h in y)s.setRequestHeader(h,y[h])}var f;this._config.chunkSize&&(f=this._start+this._config.chunkSize-1,s.setRequestHeader(`Range`,`bytes=`+this._start+`-`+f));try{s.send(this._config.downloadRequestBody)}catch(B){this._chunkError(B.message)}e&&s.status===0&&this._chunkError()}},this._chunkLoaded=function(){s.readyState===4&&(s.status<200||400<=s.status?this._chunkError():(this._start+=this._config.chunkSize||s.responseText.length,this._finished=!this._config.chunkSize||this._start>=(h=>(h=h.getResponseHeader(`Content-Range`))!==null?parseInt(h.substring(h.lastIndexOf(`/`)+1)):-1)(s),this.parseChunk(s.responseText)))},this._chunkError=function(h){h=s.statusText||h,this._sendError(new Error(h))},this._chunkTimeout=function(){this._chunkError(`Request timed out after `+this._config.downloadTimeout+`ms`)}}function I(l){(l=l||{}).chunkSize||(l.chunkSize=m.LocalChunkSize),_.call(this,l);var s,h,y=typeof FileReader<`u`;this.stream=function(f){this._input=f,h=f.slice||f.webkitSlice||f.mozSlice,y?((s=new FileReader).onload=We(this._chunkLoaded,this),s.onerror=We(this._chunkError,this)):s=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var f=this._input,B=(this._config.chunkSize&&(B=Math.min(this._start+this._config.chunkSize,this._input.size),f=h.call(f,this._start,B)),s.readAsText(f,this._config.encoding));y||this._chunkLoaded({target:{result:B}})},this._chunkLoaded=function(f){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(f.target.result)},this._chunkError=function(){this._sendError(s.error)}}function M(l){var s;_.call(this,l=l||{}),this.stream=function(h){return s=h,this._nextChunk()},this._nextChunk=function(){var h,y;if(!this._finished)return h=this._config.chunkSize,s=h?(y=s.substring(0,h),s.substring(h)):(y=s,``),this._finished=!s,this.parseChunk(y)}}function W(l){_.call(this,l=l||{});var s=[],h=!0,y=!1;this.pause=function(){_.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){_.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(f){this._input=f,this._input.on(`data`,this._streamData),this._input.on(`end`,this._streamEnd),this._input.on(`error`,this._streamError)},this._checkIsFinished=function(){y&&s.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),s.length?this.parseChunk(s.shift()):h=!0},this._streamData=We(function(f){try{s.push(typeof f==`string`?f:f.toString(this._config.encoding)),h&&(h=!1,this._checkIsFinished(),this.parseChunk(s.shift()))}catch(B){this._streamError(B)}},this),this._streamError=We(function(f){this._streamCleanUp(),this._sendError(f)},this),this._streamEnd=We(function(){this._streamCleanUp(),y=!0,this._streamData(``)},this),this._streamCleanUp=We(function(){this._input.removeListener(`data`,this._streamData),this._input.removeListener(`end`,this._streamEnd),this._input.removeListener(`error`,this._streamError)},this)}function g(l){var s,h,y,f,B=Math.pow(2,53),ke=-B,De=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,Re=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,X=this,ve=0,S=0,ye=!1,E=!1,R=[],k={data:[],errors:[],meta:{}};function me(z){return l.skipEmptyLines===`greedy`?z.join(``).trim()===``:z.length===1&&z[0].length===0}function Q(){if(k&&y&&(Ee(`Delimiter`,`UndetectableDelimiter`,`Unable to auto-detect delimiting character; defaulted to '`+m.DefaultDelimiter+`'`),y=!1),l.skipEmptyLines&&(k.data=k.data.filter(function(Y){return!me(Y)})),ie()){let Y=function(ue){R.push(ue)};if(k)if(Array.isArray(k.data[0])){for(var z=0;ie()&&z<k.data.length;z++)k.data[z].forEach(Y);k.data.splice(0,1)}else k.data.forEach(Y)}function P(Y,ue){for(var ne=l.header?{}:[],V=0;V<Y.length;V++){var T=V,be=Y[V],be=((q,Z)=>(le=>(l.dynamicTypingFunction&&l.dynamicTyping[le]===void 0&&(l.dynamicTyping[le]=l.dynamicTypingFunction(le)),(l.dynamicTyping[le]||l.dynamicTyping)===!0))(q)?Z===`true`||Z===`TRUE`||Z!==`false`&&Z!==`FALSE`&&((le=>{if(De.test(le)&&(le=parseFloat(le),ke<le&&le<B))return 1})(Z)?parseFloat(Z):Re.test(Z)?new Date(Z):Z===``?null:Z):Z)(T=l.header?V>=R.length?`__parsed_extra`:R[V]:T,be=l.transform?l.transform(be,T):be);T===`__parsed_extra`?(ne[T]=ne[T]||[],ne[T].push(be)):ne[T]=be}return l.header&&(V>R.length?Ee(`FieldMismatch`,`TooManyFields`,`Too many fields: expected `+R.length+` fields but parsed `+V,S+ue):V<R.length&&Ee(`FieldMismatch`,`TooFewFields`,`Too few fields: expected `+R.length+` fields but parsed `+V,S+ue)),ne}var te;k&&(l.header||l.dynamicTyping||l.transform)&&(te=1,!k.data.length||Array.isArray(k.data[0])?(k.data=k.data.map(P),te=k.data.length):k.data=P(k.data,0),l.header&&k.meta&&(k.meta.fields=R),S+=te)}function ie(){return l.header&&R.length===0}function Ee(z,P,te,O){z={type:z,code:P,message:te},O!==void 0&&(z.row=O),k.errors.push(z)}ae(l.step)&&(f=l.step,l.step=function(z){k=z,ie()?Q():(Q(),k.data.length!==0&&(ve+=z.data.length,l.preview&&ve>l.preview?h.abort():(k.data=k.data[0],f(k,X))))}),this.parse=function(z,P,te){var O=l.quoteChar||`"`,O=(l.newline||(l.newline=this.guessLineEndings(z,O)),y=!1,l.delimiter?ae(l.delimiter)&&(l.delimiter=l.delimiter(z),k.meta.delimiter=l.delimiter):((O=((Y,ue,ne,V,T)=>{var be,q,Z,le;T=T||[`,`,`	`,`|`,`;`,m.RECORD_SEP,m.UNIT_SEP];for(var it=0;it<T.length;it++){for(var Pe,xt=T[it],pe=0,Fe=0,de=0,xe=(Z=void 0,new se({comments:V,delimiter:xt,newline:ue,preview:10}).parse(Y)),Ue=0;Ue<xe.data.length;Ue++)ne&&me(xe.data[Ue])?de++:(Pe=xe.data[Ue].length,Fe+=Pe,Z===void 0?Z=Pe:0<Pe&&(pe+=Math.abs(Pe-Z),Z=Pe));0<xe.data.length&&(Fe/=xe.data.length-de),1.99<Fe&&(q===void 0||pe<q||pe===q&&le<Fe)&&(q=pe,be=xt,le=Fe)}return{successful:!!(l.delimiter=be),bestDelimiter:be}})(z,l.newline,l.skipEmptyLines,l.comments,l.delimitersToGuess)).successful?l.delimiter=O.bestDelimiter:(y=!0,l.delimiter=m.DefaultDelimiter),k.meta.delimiter=l.delimiter),Kt(l));return O.header=ie(),l.preview&&l.header&&O.preview++,s=z,h=new se(O),k=h.parse(s,P,te),Q(),ye?{meta:{paused:!0}}:k||{meta:{paused:!1}}},this.paused=function(){return ye},this.pause=function(){ye=!0,h.abort(),s=ae(l.chunk)?``:s.substring(h.getCharIndex())},this.resume=function(){X.streamer._halted?(ye=!1,X.streamer.parseChunk(s,!0)):setTimeout(X.resume,3)},this.aborted=function(){return E},this.abort=function(){E=!0,h.abort(),k.meta.aborted=!0,ae(l.complete)&&l.complete(k),s=``},this.guessLineEndings=function(Y,O){Y=Y.substring(0,1048576);var O=new RegExp(j(O)+`([^]*?)`+j(O),`gm`),te=(Y=Y.replace(O,``)).split(`\r`),O=Y.split(`
`),Y=1<O.length&&O[0].length<te[0].length;if(te.length===1||Y)return`
`;for(var ue=0,ne=0;ne<te.length;ne++)te[ne][0]===`
`&&ue++;return ue>=te.length/2?`\r
`:`\r`}}function j(l){return l.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function se(l){var s=(l=l||{}).delimiter,h=l.newline,y=l.comments,f=l.step,B=l.preview,ke=l.fastMode,De=null,Re=!1,X=l.quoteChar==null?`"`:l.quoteChar,ve=X;if(l.escapeChar!==void 0&&(ve=l.escapeChar),(typeof s!=`string`||-1<m.BAD_DELIMITERS.indexOf(s))&&(s=`,`),y===s)throw new Error(`Comment character same as delimiter`);y===!0?y=`#`:(typeof y!=`string`||-1<m.BAD_DELIMITERS.indexOf(y))&&(y=!1),h!==`
`&&h!==`\r`&&h!==`\r
`&&(h=`
`);var S=0,ye=!1;this.parse=function(E,R,k){if(typeof E!=`string`)throw new Error(`Input must be a string`);var me=E.length,Q=s.length,ie=h.length,Ee=y.length,z=ae(f),P=[],te=[],O=[],Y=S=0;if(!E)return pe();if(ke||ke!==!1&&E.indexOf(X)===-1){for(var ue=E.split(h),ne=0;ne<ue.length;ne++){if(O=ue[ne],S+=O.length,ne!==ue.length-1)S+=h.length;else if(k)return pe();if(!y||O.substring(0,Ee)!==y){if(z){if(P=[],le(O.split(s)),Fe(),ye)return pe()}else le(O.split(s));if(B&&B<=ne)return P=P.slice(0,B),pe(!0)}}return pe()}for(var V=E.indexOf(s,S),T=E.indexOf(h,S),be=new RegExp(j(ve)+j(X),`g`),q=E.indexOf(X,S);;)if(E[S]===X)for(q=S,S++;;){if((q=E.indexOf(X,q+1))===-1)return k||te.push({type:`Quotes`,code:`MissingQuotes`,message:`Quoted field unterminated`,row:P.length,index:S}),Pe();if(q===me-1)return Pe(E.substring(S,q).replace(be,X));if(X===ve&&E[q+1]===ve)q++;else if(X===ve||q===0||E[q-1]!==ve){V!==-1&&V<q+1&&(V=E.indexOf(s,q+1));var Z=it((T=T!==-1&&T<q+1?E.indexOf(h,q+1):T)===-1?V:Math.min(V,T));if(E.substr(q+1+Z,Q)===s){O.push(E.substring(S,q).replace(be,X)),E[S=q+1+Z+Q]!==X&&(q=E.indexOf(X,S)),V!==-1&&V<S&&(V=E.indexOf(s,S)),T!==-1&&T<S&&(T=E.indexOf(h,S));break}if(Z=it(T),E.substring(q+1+Z,q+1+Z+ie)===h){if(O.push(E.substring(S,q).replace(be,X)),xt(q+1+Z+ie),V!==-1&&V<S&&(V=E.indexOf(s,S)),q=E.indexOf(X,S),z&&(Fe(),ye))return pe();if(B&&P.length>=B)return pe(!0);break}te.push({type:`Quotes`,code:`InvalidQuotes`,message:`Trailing quote on quoted field is malformed`,row:P.length,index:S}),q++}}else if(y&&O.length===0&&E.substring(S,S+Ee)===y){if(T===-1)return pe();S=T+ie,T=E.indexOf(h,S),V!==-1&&V<S&&(V=E.indexOf(s,S))}else if(V!==-1&&(V<T||T===-1))O.push(E.substring(S,V)),S=V+Q,V=E.indexOf(s,S);else{if(T===-1)break;if(O.push(E.substring(S,T)),xt(T+ie),z&&(Fe(),ye))return pe();if(B&&P.length>=B)return pe(!0)}return Pe();function le(de){P.push(de),Y=S}function it(de){var xe=0;return xe=de!==-1&&(de=E.substring(q+1,de))&&de.trim()===``?de.length:xe}function Pe(de){return k||(de===void 0&&(de=E.substring(S)),O.push(de),S=me,le(O),z&&Fe()),pe()}function xt(de){S=de,le(O),O=[],T=E.indexOf(h,S)}function pe(de){if(l.header&&!R&&P.length&&!Re){var xe=P[0],Ue=Object.create(null),$t=new Set(xe);let Cn=!1;for(let ot=0;ot<xe.length;ot++){let Ae=u(xe[ot]);if(Ue[Ae=ae(l.transformHeader)?l.transformHeader(Ae,ot):Ae]){let wt,Sn=Ue[Ae];for(;wt=Ae+`_`+Sn,Sn++,$t.has(wt););$t.add(wt),xe[ot]=wt,Ue[Ae]++,Cn=!0,(De=De===null?{}:De)[wt]=Ae}else Ue[Ae]=1,xe[ot]=Ae;$t.add(Ae)}Cn&&console.warn(`Duplicate headers found and renamed.`),Re=!0}return{data:P,errors:te,meta:{delimiter:s,linebreak:h,aborted:ye,truncated:!!de,cursor:Y+(R||0),renamedHeaders:De}}}function Fe(){f(pe()),P=[],te=[]}},this.abort=function(){ye=!0},this.getCharIndex=function(){return S}}function vt(l){var s=l.data,h=r[s.workerId],y=!1;if(s.error)h.userError(s.error,s.file);else if(s.results&&s.results.data){var f={abort:function(){y=!0,xn(s.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:wn,resume:wn};if(ae(h.userStep)){for(var B=0;B<s.results.data.length&&(h.userStep({data:s.results.data[B],errors:s.results.errors,meta:s.results.meta},f),!y);B++);delete s.results}else ae(h.userChunk)&&(h.userChunk(s.results,f,s.file),delete s.results)}s.finished&&!y&&xn(s.workerId,s.results)}function xn(l,s){var h=r[l];ae(h.userComplete)&&h.userComplete(s),h.terminate(),delete r[l]}function wn(){throw new Error(`Not implemented.`)}function Kt(l){if(typeof l!=`object`||l===null)return l;var s,h=Array.isArray(l)?[]:{};for(s in l)h[s]=Kt(l[s]);return h}function We(l,s){return function(){l.apply(s,arguments)}}function ae(l){return typeof l==`function`}return m.parse=function(l,s){var h=(s=s||{}).dynamicTyping||!1;if(ae(h)&&(s.dynamicTypingFunction=h,h={}),s.dynamicTyping=h,s.transform=!!ae(s.transform)&&s.transform,s.downloadTimeout!==void 0){var h=parseInt(s.downloadTimeout);if(isNaN(h))throw new Error(`Config downloadTimeout value (`+s.downloadTimeout+`) not parsable by parseInt(val).`);s.downloadTimeout=h}if(!s.worker||!m.WORKERS_SUPPORTED)return h=null,m.NODE_STREAM_INPUT,typeof l==`string`?(l=u(l),h=new(s.download?L:M)(s)):l.readable===!0&&ae(l.read)&&ae(l.on)?h=new W(s):(n.File&&l instanceof File||l instanceof Object)&&(h=new I(s)),h.stream(l);(h=(()=>{var y;return!!m.WORKERS_SUPPORTED&&(y=(()=>{var f=n.URL||n.webkitURL||null,B=a.toString();return m.BLOB_URL||(m.BLOB_URL=f.createObjectURL(new Blob([`var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; `,`(`,B,`)();`],{type:`text/javascript`})))})(),(y=new n.Worker(y)).onmessage=vt,y.id=p++,r[y.id]=y)})()).userStep=s.step,h.userChunk=s.chunk,h.userComplete=s.complete,h.userError=s.error,s.step=ae(s.step),s.chunk=ae(s.chunk),s.complete=ae(s.complete),s.error=ae(s.error),delete s.worker,h.postMessage({input:l,config:s,workerId:h.id})},m.unparse=function(l,s){var h=!1,y=!0,f=`,`,B=`\r
`,ke=`"`,De=ke+ke,Re=!1,X=null,ve=!1,S=((()=>{if(typeof s==`object`){if(typeof s.delimiter!=`string`||m.BAD_DELIMITERS.filter(function(R){return s.delimiter.indexOf(R)!==-1}).length||(f=s.delimiter),typeof s.quotes!=`boolean`&&typeof s.quotes!=`function`&&!Array.isArray(s.quotes)||(h=s.quotes),typeof s.skipEmptyLines!=`boolean`&&typeof s.skipEmptyLines!=`string`||(Re=s.skipEmptyLines),typeof s.newline==`string`&&(B=s.newline),typeof s.quoteChar==`string`&&(ke=s.quoteChar,De=ke+ke),typeof s.header==`boolean`&&(y=s.header),Array.isArray(s.columns)){if(s.columns.length===0)throw new Error(`Option columns is empty`);X=s.columns}s.escapeChar!==void 0&&(De=s.escapeChar+ke),s.escapeFormulae instanceof RegExp?ve=s.escapeFormulae:typeof s.escapeFormulae==`boolean`&&s.escapeFormulae&&(ve=/^[=+\-@\t\r].*$/)}})(),new RegExp(j(ke),`g`));if(typeof l==`string`&&(l=JSON.parse(l)),Array.isArray(l)){if(!l.length)return ye(X,l,Re);if(Array.isArray(l[0]))return ye(null,l,Re);if(typeof l[0]==`object`)return ye(X||Object.keys(l[0]),l,Re)}else if(typeof l==`object`)return typeof l.data==`string`&&(l.data=JSON.parse(l.data)),Array.isArray(l.data)&&(l.fields||(l.fields=l.meta&&l.meta.fields||X),l.fields||(l.fields=Array.isArray(l.data[0])?l.fields:typeof l.data[0]==`object`?Object.keys(l.data[0]):[]),Array.isArray(l.data[0])||typeof l.data[0]==`object`||(l.data=[l.data])),ye(l.fields||[],l.data||[],Re);throw new Error(`Unable to serialize unrecognized input`);function ye(R,k,me){var Q=``,ie=(typeof R==`string`&&(R=JSON.parse(R)),typeof k==`string`&&(k=JSON.parse(k)),Array.isArray(R)&&0<R.length),Ee=!Array.isArray(k[0]);if(ie&&y){for(var z=0;z<R.length;z++)0<z&&(Q+=f),Q+=E(R[z],z);0<k.length&&(Q+=B)}for(var P=0;P<k.length;P++){var te=(ie?R:k[P]).length,O=!1,Y=ie?Object.keys(k[P]).length===0:k[P].length===0;if(me&&!ie&&(O=me===`greedy`?k[P].join(``).trim()===``:k[P].length===1&&(k[P][0]==null||k[P][0].length===0)),me===`greedy`&&ie){for(var ue=[],ne=0;ne<te;ne++){var V=Ee?R[ne]:ne;ue.push(k[P][V])}O=ue.join(``).trim()===``}if(!O){for(var T=0;T<te;T++){0<T&&!Y&&(Q+=f);var be=ie&&Ee?R[T]:T;Q+=E(k[P][be],T)}P<k.length-1&&(!me||0<te&&!Y)&&(Q+=B)}}return Q}function E(R,k){var me,Q,ie;return R==null?``:R.constructor===Date?isNaN(R.getTime())?``:R.toISOString():(ie=!1,me=R.toString(),ve&&typeof R!=`number`&&typeof R!=`bigint`&&typeof R!=`boolean`&&ve.test(me)&&(R=me=`'`+me,ie=!0),Q=me.replace(S,De),(ie=ie||h===!0||typeof h==`function`&&h(R,k)||Array.isArray(h)&&h[k]||((Ee,z)=>{for(var P=0;P<z.length;P++)if(-1<Ee.indexOf(z[P]))return!0;return!1})(Q,m.BAD_DELIMITERS)||-1<Q.indexOf(f)||-1<me.indexOf(ke)||Q.charAt(0)===` `||Q.charAt(Q.length-1)===` `)?ke+Q+ke:Q)}},m.RECORD_SEP=``,m.UNIT_SEP=``,m.BYTE_ORDER_MARK=`﻿`,m.BAD_DELIMITERS=[`\r`,`
`,`"`,m.BYTE_ORDER_MARK],m.WORKERS_SUPPORTED=!e&&!!n.Worker,m.NODE_STREAM_INPUT=1,m.LocalChunkSize=10485760,m.RemoteChunkSize=5242880,m.DefaultDelimiter=`,`,m.Parser=se,m.ParserHandle=g,m.NetworkStreamer=L,m.FileStreamer=I,m.StringStreamer=M,m.ReadableStreamStreamer=W,t&&(n.onmessage=function(l){l=l.data,m.WORKER_ID===void 0&&l&&(m.WORKER_ID=l.workerId),typeof l.input==`string`?n.postMessage({workerId:m.WORKER_ID,results:m.parse(l.input,l.config),finished:!0}):(n.File&&l.input instanceof File||l.input instanceof Object)&&(l=m.parse(l.input,l.config))&&n.postMessage({workerId:m.WORKER_ID,results:l,finished:!0})}),(L.prototype=Object.create(_.prototype)).constructor=L,(I.prototype=Object.create(_.prototype)).constructor=I,(M.prototype=Object.create(M.prototype)).constructor=M,(W.prototype=Object.create(_.prototype)).constructor=W,m})});var Fa=w$1(Pa());function Aa(a){let n=a.charCodeAt(0)===65279?a.slice(1):a,e=Fa.default.parse(n,{header:!0,skipEmptyLines:`greedy`,transformHeader:p=>p.trim(),transform:p=>p.trim()}),t=e.meta.fields??[];return{headers:t,rows:e.data.map(p=>{let m={};for(let u of t)m[u]=p[u]??``;return m})}}function mn(a){return a.map(n=>n.trim().toLowerCase()).join(`|`)}var ti={record_type:[`record_type`,`record type`],date:[`date`,`transaction date`,`posted date`,`posting date`,`trans date`],description:[`description`,`name`,`merchant`,`payee`,`memo`,`details`],amount:[`amount`,`transaction amount`,`value`],category:[`category`,`categories`],account:[`account`,`account name`,`account_name`],notes:[`notes`,`note`],account_type:[`account_type`,`account type`]};function za(a,n$1){let e={},t=/* @__PURE__ */ new Set,r=new Map(a.map(m=>[m.trim().toLowerCase(),m]));for(let m of n){let _=(ti[m]??[m]).map(L=>r.get(L)).find(L=>L!==void 0&&!t.has(L));_!==void 0&&(e[m]=_,t.add(_))}let p=(m,u)=>{if(e[m]!==void 0)return;let _=a.find(L=>{if(t.has(L))return!1;let I=n$1.map(M=>M[L]??``).filter(M=>M!==``);return I.length>0&&I.every(u)});_!==void 0&&(e[m]=_,t.add(_))};return p(`date`,m=>YY(m)!==null),p(`amount`,m=>lZ(m)!==null),{columns:e,flipSign:!1}}function Va(a,n,e){let t=u=>n.columns[u],r=e.map(u=>u.trim().toUpperCase()).filter(u=>u!==``),p=0,m=0;for(let u of a){let _=(u[t(`category`)??``]??``).trim().toLowerCase(),L=(u[t(`description`)??``]??``).toUpperCase(),I=_===`income`||r.some(W=>L.includes(W)),M=lZ(u[t(`amount`)??``]??``);!I||M===null||(p++,M<0&&m++)}return p===0?0:m/p}function pn(a,n$2){return a.map(e=>{let t={};for(let r of n){let p=n$2.columns[r];t[r]=p===void 0?``:(e[p]??``).trim()}return t.record_type===``&&(t.record_type=`transaction`),n$2.flipSign&&(t.amount=ni(t.amount)),t})}function ni(a){let n=lZ(a);if(n===null)return a;let e=-n,t=Math.abs(e),r=`${Math.trunc(t/100)}.${String(t%100).padStart(2,`0`)}`;return e<0?`-`+r:r}var ai=(a,n)=>n.id;function ii(a,n){if(a&1&&(od(0,`h2`,4),fP(1,` Categories the app chose `),vd(2,`app-info-tooltip`,5),Nm(),od(3,`p`,6)(4,`strong`,7),fP(5),Nm(),fP(6),Nm()),a&2){let e=HO();MR(5),JC(e.rows().length),MR(),jm(` `,e.rows().length===1?`transaction`:`transactions`,` got a category from the app's built-in list. Change any that are wrong here, or later on the Transactions screen, where they are marked "category chosen by the app". Your choice is remembered for next time. `)}}function oi(a,n){a&1&&(od(0,`h2`,8),fP(1,` Choose a category `),vd(2,`app-info-tooltip`,9),Nm(),od(3,`p`,6),fP(4,` Optional. A row left without a category counts as Uncategorized. Next time the same description comes in, it gets the category you pick here. `),Nm())}function ri(a,n){if(a&1&&(od(0,`option`,13),fP(1,`No category yet`),Nm()),a&2){let e=HO().$implicit,t=HO();PC(`selected`,!t.picks()[e.id])}}function ci(a,n){if(a&1&&(od(0,`option`,14),fP(1),Nm()),a&2){let e=n.$implicit,t=HO().$implicit,r=HO();PC(`value`,e)(`selected`,(r.picks()[t.id]??t.category)===e),MR(),jm(` `,r.label(e),` `)}}function si(a,n){if(a&1){let e=LO();od(0,`li`,3)(1,`span`,10),fP(2),od(3,`span`,6),fP(4),Nm()(),od(5,`span`,11),fP(6),MP(7,`money`),Nm(),od(8,`select`,12,0),Ed(`change`,function(){let r=ED(e).$implicit,p=WO(9),m=HO();return DD(m.set(r.id,p.value))}),SO(10,ri,2,1,`option`,13),NO(11,ci,2,3,`option`,14,MO),Nm()()}if(a&2){let e=n.$implicit,t=HO();MR(2),jm(` `,e.description,` `),MR(2),eb(`· `,e.date,` · `,e.account),MR(2),JC(RP(7,6,e.amount)),MR(2),Di$1(`aria-label`,`Category for `+e.description),MR(2),_O(e.category?-1:10),MR(),RO(t.categories)}}var zt=class a{rows=Cd.required();guessed=Cd(!1);picks=g9({});categories=b;label(n){let e=n.replace(/_/g,` `);return e.charAt(0).toUpperCase()+e.slice(1)}set(n,e){let t=r({},this.picks()),r$1=this.rows().find(p=>p.id===n)?.category;e&&e!==r$1?t[n]=e:delete t[n],this.picks.set(t)}static ɵfac=function(e){return new(e||a)};static ɵcmp=Ei$1({type:a,selectors:[[`app-bank-categories`]],inputs:{rows:[1,`rows`],guessed:[1,`guessed`],picks:[1,`picks`]},outputs:{picks:`picksChange`},decls:9,vars:6,consts:[[`pick`,``],[1,`panel`],[3,`open`],[`data-row`,`needs-category`],[`id`,`guessed-cat-title`],[`text`,`These rows came with no category, so the app chose one from its built-in list of common shops, payroll words and bank words. Nothing is sent anywhere.`,`section`,`8.12.11`],[1,`muted`,`small`],[`data-metric`,`guessed-count`],[`id`,`bank-cat-title`],[`text`,`These rows came with no category, and neither your earlier choices nor the app's built-in list matched them.`,`section`,`8.12.8`],[1,`what`],[1,`amount`],[`data-input`,`bank-category`,1,`field`,3,`change`],[`value`,``,3,`selected`],[3,`value`,`selected`]],template:function(e,t){e&1&&(od(0,`section`,1),SO(1,ii,7,2)(2,oi,5,0),od(3,`details`,2)(4,`summary`),fP(5),Nm(),od(6,`ul`),NO(7,si,13,8,`li`,3,ai),Nm()()()),e&2&&(Di$1(`data-panel`,t.guessed()?`guessed-categories`:`bank-categories`)(`aria-labelledby`,t.guessed()?`guessed-cat-title`:`bank-cat-title`),MR(),_O(t.guessed()?1:2),MR(2),PC(`open`,!t.guessed()),MR(2),eb(` `,t.guessed()?`Show them`:`Rows with no category`,` (`,t.rows().length,`) `),MR(2),RO(t.rows()))},dependencies:[N$2,i],styles:[`[_nghost-%COMP%]{display:block}ul[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}li[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:.375rem 1rem;padding:.5rem 0;border-top:1px solid var(--%NS%app-border)}.what[_ngcontent-%COMP%]{flex:1 1 14rem;min-width:0}.amount[_ngcontent-%COMP%]{font-variant-numeric:tabular-nums}select[_ngcontent-%COMP%]{max-width:100%}summary[_ngcontent-%COMP%]{cursor:pointer;padding:.25rem 0}`]})};var Vt=(()=>{class a{labelPosition=`after`;static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){return Ei$1({type:a,selectors:[[``,`mat-internal-form-field`,``]],hostAttrs:[1,`mdc-form-field`,`mat-internal-form-field`],hostVars:2,hostBindings:function(r,p){r&2&&wd(`mdc-form-field--align-end`,p.labelPosition===`before`)},inputs:{labelPosition:`labelPosition`},ngContentSelectors:[`*`],decls:1,vars:0,template:function(r,p){r&1&&(Om(),Pm(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2})})()}return a})();var hn={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var li=new K(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>hn});var fe=(function(a){return a[a.Init=0]=`Init`,a[a.Checked=1]=`Checked`,a[a.Unchecked=2]=`Unchecked`,a[a.Indeterminate=3]=`Indeterminate`,a})(fe||{});var un=class{source;checked};var at=(()=>{class a{_elementRef=N$3(Xt);_changeDetectorRef=N$3(Ns);_ngZone=N$3(wt$1);_animationsDisabled=U();_options=N$3(li,{optional:!0});_injector=N$3(ot);_signalFormField=null;focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new un;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new Et;indeterminateChange=new Et;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=fe.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){N$3(EF).load(Te);let e=N$3(new Ms(`tabindex`),{optional:!0});this._options=this._options||hn,this.color=this._options.color||hn.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=N$3(P_).getId(`mat-mdc-checkbox-`),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngOnInit(){this._signalFormField=this._injector.get(fn$1,void 0,{optional:!0,self:!0})}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(fe.Indeterminate):this._transitionCheckState(this.checked?fe.Checked:fe.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=Ce(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0&&!this._signalFormField?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,r=this._getAnimationTargetElement();if(!(t===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let p=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(p)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!==`noop`?(this.indeterminate&&e!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?fe.Checked:fe.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return``;switch(e){case fe.Init:if(t===fe.Checked)return this._animationClasses.uncheckedToChecked;if(t==fe.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case fe.Unchecked:return t===fe.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case fe.Checked:return t===fe.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case fe.Indeterminate:return t===fe.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`input`];return Ei$1({type:a,selectors:[[`mat-checkbox`]],viewQuery:function(p,m){if(p&1&&HC(e,5),p&2){let u;km(u=Lm())&&(m._inputElement=u.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(p,m){p&2&&(FC(`id`,m.id),Di$1(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),Fm(m.color?`mat-`+m.color:`mat-accent`),wd(`_mat-animation-noopable`,m._animationsDisabled)(`mdc-checkbox--disabled`,m.disabled)(`mat-mdc-checkbox-disabled`,m.disabled)(`mat-mdc-checkbox-checked`,m.checked)(`mat-mdc-checkbox-disabled-interactive`,m.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,wi$1],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,wi$1],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,wi$1],tabIndex:[2,`tabIndex`,`tabIndex`,r=>r==null?void 0:lk(r)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,wi$1],checked:[2,`checked`,`checked`,wi$1],disabled:[2,`disabled`,`disabled`,wi$1],indeterminate:[2,`indeterminate`,`indeterminate`,wi$1]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[db([{provide:w,useExisting:dl(()=>a),multi:!0},{provide:N,useExisting:a,multi:!0}]),ao$1],ngContentSelectors:[`*`],decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(p,m){if(p&1&&(Om(),od(0,`label`,3),Ed(`click`,function(_){return m._preventBubblingFromLabel(_)}),od(1,`span`,4,0),vd(3,`span`,5),od(4,`input`,6,1),Ed(`blur`,function(){return m._onBlur()})(`click`,function(){return m._onInputClick()})(`change`,function(_){return m._onInteractionEvent(_)}),Nm(),vd(6,`span`,7),od(7,`span`,8),RD(),od(8,`svg`,9),vd(9,`path`,10),Nm(),xD(),vd(10,`span`,11),Nm(),vd(11,`span`,12),Nm(),od(12,`span`,13,2),Pm(14),Nm()()),p&2){let u=WO(2);PC(`labelPosition`,m.labelPosition)(`for`,m.inputId),MR(4),wd(`mdc-checkbox--selected`,m.checked),PC(`checked`,m.checked)(`indeterminate`,m.indeterminate)(`disabled`,m.disabled&&!m.disabledInteractive)(`id`,m.inputId)(`required`,m.required)(`tabIndex`,m.disabled&&!m.disabledInteractive?-1:m.tabIndex),Di$1(`aria-label`,m.ariaLabel||null)(`aria-labelledby`,m.ariaLabelledby)(`aria-describedby`,m.ariaDescribedby)(`aria-checked`,m.indeterminate?`mixed`:null)(`aria-controls`,m.ariaControls)(`aria-disabled`,m.disabled&&m.disabledInteractive?!0:null)(`aria-expanded`,m.ariaExpanded)(`aria-owns`,m.ariaOwns)(`name`,m.name)(`value`,m.value),MR(7),PC(`matRippleTrigger`,u)(`matRippleDisabled`,m.disableRipple||m.disabled)(`matRippleCentered`,!0)}},dependencies:[lo$1,Vt],styles:[`.mdc-checkbox {
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
`],encapsulation:2})})()}return a})();var kt=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=Sr({type:a});static ɵinj=zn({imports:[at,bT]})}return a})();var Mt=class{_multiple;_emitChanges;compareWith;_selection=/* @__PURE__ */ new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new Ge;bulk={select:n=>this._select(n),deselect:n=>this._deselect(n),setSelection:n=>this._setSelection(n)};constructor(n=!1,e,t=!0,r){this._multiple=n,this._emitChanges=t,this.compareWith=r,e&&e.length&&(n?e.forEach(p=>this._markSelected(p)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){return this._select(n)}deselect(...n){return this._deselect(n)}setSelection(...n){return this._setSelection(n)}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_select(n){this._verifyValueAssignment(n),n.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(n){this._verifyValueAssignment(n),n.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(n){this._verifyValueAssignment(n);let e=this.selected,t=new Set(n.map(p=>this._getConcreteValue(p)));n.forEach(p=>this._markSelected(p)),e.filter(p=>!t.has(this._getConcreteValue(p,t))).forEach(p=>this._unmarkSelected(p));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(n,t))return t;return n}else return n}};var La=(()=>{class a{_animationsDisabled=U();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(t){return new(t||a)};static ɵcmp=Ei$1({type:a,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(t,r){t&2&&wd(`mat-pseudo-checkbox-indeterminate`,r.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,r.state===`checked`)(`mat-pseudo-checkbox-disabled`,r.disabled)(`mat-pseudo-checkbox-minimal`,r.appearance===`minimal`)(`mat-pseudo-checkbox-full`,r.appearance===`full`)(`_mat-animation-noopable`,r._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(t,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2})}return a})();var _n=new K(`MAT_OPTION_PARENT_COMPONENT`);var fn=new K(`MatOptgroup`);var gn=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}};var yt=(()=>{class a{_element=N$3(Xt);_changeDetectorRef=N$3(Ns);_parent=N$3(_n,{optional:!0});group=N$3(fn,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=N$3(P_).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Ce(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new Et;_text;_stateChanges=new Ge;constructor(){let e=N$3(EF);e.load(Te),e.load(EY),this._signalDisableRipple=!!this._parent&&qa$1(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let r=this._getHostElement();typeof r.focus==`function`&&r.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!ZQ(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new gn(this,e))}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`text`],t=[[[`mat-icon`]],`*`],r=[`mat-icon`,`*`];function p(_,L){if(_&1&&vd(0,`mat-pseudo-checkbox`,1),_&2){let I=HO();PC(`disabled`,I.disabled)(`state`,I.selected?`checked`:`unchecked`)}}function m(_,L){if(_&1&&vd(0,`mat-pseudo-checkbox`,3),_&2){let I=HO();PC(`disabled`,I.disabled)}}function u(_,L){if(_&1&&(od(0,`span`,4),fP(1),Nm()),_&2){let I=HO();MR(),jm(`(`,I.group.label,`)`)}}return Ei$1({type:a,selectors:[[`mat-option`]],viewQuery:function(L,I){if(L&1&&HC(e,7),L&2){let M;km(M=Lm())&&(I._text=M.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(L,I){L&1&&Ed(`click`,function(){return I._selectViaInteraction()})(`keydown`,function(W){return I._handleKeydown(W)}),L&2&&(FC(`id`,I.id),Di$1(`aria-selected`,I.selected)(`aria-disabled`,I.disabled.toString()),wd(`mdc-list-item--selected`,I.selected)(`mat-mdc-option-multiple`,I.multiple)(`mat-mdc-option-active`,I.active)(`mdc-list-item--disabled`,I.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,wi$1]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:r,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(L,I){L&1&&(Om(t),SO(0,p,1,2,`mat-pseudo-checkbox`,1),Pm(1),od(2,`span`,2,0),Pm(4,1),Nm(),SO(5,m,1,1,`mat-pseudo-checkbox`,3),SO(6,u,2,1,`span`,4),vd(7,`div`,5)),L&2&&(_O(I.multiple?0:-1),MR(5),_O(!I.multiple&&I.selected&&!I.hideSingleSelectionIndicator?5:-1),MR(),_O(I.group&&I.group._inert?6:-1),MR(),PC(`matRippleTrigger`,I._getHostElement())(`matRippleDisabled`,I.disabled||I.disableRipple))},dependencies:[La,lo$1],styles:[`.mat-mdc-option {
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
`],encapsulation:2})})()}return a})();function Ba(a,n,e){if(e.length){let t=n.toArray(),r=e.toArray(),p=0;for(let m=0;m<a+1;m++)t[m].group&&t[m].group===r[p]&&p++;return p}return 0}function qa(a,n,e,t){return a<e?a:a+n>e+t?Math.max(0,a-t+n):e}var ja=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=Sr({type:a});static ɵinj=zn({imports:[bT]})}return a})();var kn=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=Sr({type:a});static ɵinj=zn({imports:[De,ja,yt,bT]})}return a})();var ui=new K(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let a=N$3(ot);return()=>xt(a)}});var bi=new K(`MAT_SELECT_CONFIG`);var gi=new K(`MatSelectTrigger`);var yn=class{source;value;constructor(n,e){this.source=n,this.value=e}};var Ga=(()=>{class a{_viewportRuler=N$3(N$1);_changeDetectorRef=N$3(Ns);_elementRef=N$3(Xt);_dir=N$3(TF,{optional:!0});_idGenerator=N$3(P_);_renderer=N$3(so$1);_parentFormField=N$3(bt,{optional:!0});ngControl=N$3(V,{self:!0,optional:!0});_liveAnnouncer=N$3(Xe);_defaultOptions=N$3(bi,{optional:!0});_animationsDisabled=U();_popoverLocation;_initialized=new Ge;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let r=this.panel.nativeElement,p=Ba(e,this.options,this.optionGroups),m=t._getHostElement();e===0&&p===1?r.scrollTop=0:r.scrollTop=qa(m.offsetTop,m.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new yn(this,e)}_scrollStrategyFactory=N$3(ui);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new Ge;_errorStateTracker;stateChanges=new Ge;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=Ce(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(fe$1.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Da(()=>{let e=this.options;return e?e.changes.pipe(qp(e),rn(()=>VA(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(rn(()=>this.optionSelectionChanges))});openedChange=new Et;_openedStream=this.openedChange.pipe(Yt(e=>e),Se(()=>{}));_closedStream=this.openedChange.pipe(Yt(e=>!e),Se(()=>{}));selectionChange=new Et;valueChange=new Et;constructor(){let e=N$3(Qn),t=N$3(Qt,{optional:!0}),r=N$3(nn,{optional:!0}),p=N$3(new Ms(`tabindex`),{optional:!0}),m=N$3(Dt,{optional:!0}),u=N$3(fn$1,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Ze(e,u||this.ngControl,r,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=p==null?0:parseInt(p)||0,this._popoverLocation=m?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new Mt(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Ia(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Ia(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(qp(null),Ia(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute(`aria-labelledby`,e):r.removeAttribute(`aria-labelledby`)}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Vn(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,`animationend`,p=>{p.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,r=t===40||t===38||t===37||t===39,p=t===13||t===32,m=this._keyManager;if(!m.isTyping()&&p&&!ZQ(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let u=this.selected;m.onKeydown(e);let _=this.selected;_&&u!==_&&this._liveAnnouncer.announce(_.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,r=e.keyCode,p=r===40||r===38,m=t.isTyping();if(p&&e.altKey)e.preventDefault(),this.close();else if(!m&&(r===13||r===32)&&t.activeItem&&!ZQ(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!m&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let u=this.options.some(_=>!_.disabled&&!_.selected);this.options.forEach(_=>{_.disabled||(u?_.select():_.deselect())})}else{let u=t.activeItemIndex;t.onKeydown(e),this._multiple&&p&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==u&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!ZQ(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof Rt?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new wt(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=VA(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Ia(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),VA(...this.options.map(t=>t._stateChanges)).pipe(Ia(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,r)=>this.sortComparator?this.sortComparator(t,r,e):e.indexOf(t)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(r=>r.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+` `:``;return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(e){let t=FQ(e);t&&(t.tagName===`MAT-OPTION`||t.classList.contains(`cdk-overlay-backdrop`)||t.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`trigger`],t=[`panel`],r=[[[`mat-select-trigger`]],`*`],p=[`mat-select-trigger`,`*`];function m(M,W){if(M&1&&(od(0,`span`,4),fP(1),Nm()),M&2){let g=HO();MR(),JC(g.placeholder)}}function u(M,W){M&1&&Pm(0)}function _(M,W){if(M&1&&(od(0,`span`,11),fP(1),Nm()),M&2){let g=HO(2);MR(),JC(g.triggerValue)}}function L(M,W){if(M&1&&(od(0,`span`,5),SO(1,u,1,0)(2,_,2,1,`span`,11),Nm()),M&2){let g=HO();MR(),_O(g.customTrigger?1:2)}}function I(M,W){if(M&1){let g=LO();od(0,`div`,12,1),Ed(`keydown`,function(se){ED(g);let vt=HO();return DD(vt._handleKeydown(se))}),Pm(2,1),Nm()}if(M&2){let g=HO();Fm(g.panelClass),wd(`mat-select-panel-animations-enabled`,!g._animationsDisabled)(`mat-primary`,g._parentFormField?.color===`primary`)(`mat-accent`,g._parentFormField?.color===`accent`)(`mat-warn`,g._parentFormField?.color===`warn`)(`mat-undefined`,!g._parentFormField?.color),Di$1(`id`,g.id+`-panel`)(`aria-multiselectable`,g.multiple)(`aria-label`,g.ariaLabel||null)(`aria-labelledby`,g._getPanelAriaLabelledby())}}return Ei$1({type:a,selectors:[[`mat-select`]],contentQueries:function(W,g,j){if(W&1&&Dd(j,gi,5)(j,yt,5)(j,fn,5),W&2){let se;km(se=Lm())&&(g.customTrigger=se.first),km(se=Lm())&&(g.options=se),km(se=Lm())&&(g.optionGroups=se)}},viewQuery:function(W,g){if(W&1&&HC(e,5)(t,5)(ye,5),W&2){let j;km(j=Lm())&&(g.trigger=j.first),km(j=Lm())&&(g.panel=j.first),km(j=Lm())&&(g._overlayDir=j.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(W,g){W&1&&Ed(`keydown`,function(se){return g._handleKeydown(se)})(`focus`,function(){return g._onFocus()})(`blur`,function(){return g._onBlur()}),W&2&&(Di$1(`id`,g.id)(`tabindex`,g.disabled?-1:g.tabIndex)(`aria-controls`,g.panelOpen?g.id+`-panel`:null)(`aria-expanded`,g.panelOpen)(`aria-label`,g.ariaLabel||null)(`aria-required`,g.required.toString())(`aria-disabled`,g.disabled.toString())(`aria-invalid`,g.errorState)(`aria-activedescendant`,g._getAriaActiveDescendant()),wd(`mat-mdc-select-disabled`,g.disabled)(`mat-mdc-select-invalid`,g.errorState)(`mat-mdc-select-required`,g.required)(`mat-mdc-select-empty`,g.empty)(`mat-mdc-select-multiple`,g.multiple)(`mat-select-open`,g.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,wi$1],disableRipple:[2,`disableRipple`,`disableRipple`,wi$1],tabIndex:[2,`tabIndex`,`tabIndex`,M=>M==null?0:lk(M)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,wi$1],placeholder:`placeholder`,required:[2,`required`,`required`,wi$1],multiple:[2,`multiple`,`multiple`,wi$1],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,wi$1],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,lk],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,wi$1]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[db([{provide:gt,useExisting:a},{provide:_n,useExisting:a}]),ao$1],ngContentSelectors:p,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(W,g){if(W&1&&(Om(r),od(0,`div`,2,0),Ed(`click`,function(){return g.open()}),od(3,`div`,3),SO(4,m,2,1,`span`,4)(5,L,3,1,`span`,5),Nm(),od(6,`div`,6)(7,`div`,7),RD(),od(8,`svg`,8),vd(9,`path`,9),Nm()()()(),NC(10,I,3,16,`ng-template`,10),Ed(`detach`,function(){return g.close()})(`backdropClick`,function(){return g.close()})(`overlayKeydown`,function(se){return g._handleOverlayKeydown(se)})),W&2){let j=WO(1);MR(3),Di$1(`id`,g._valueId),MR(),_O(g.empty?4:5),MR(6),PC(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,g._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,g._scrollStrategy)(`cdkConnectedOverlayOrigin`,g._preferredOverlayOrigin||j)(`cdkConnectedOverlayPositions`,g._positions)(`cdkConnectedOverlayWidth`,g._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,g._popoverLocation)}},dependencies:[Rt,ye],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2})})()}return a})();var Ka=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=Sr({type:a});static ɵinj=zn({imports:[me,kn,bT,Ht,$n,kn]})}return a})();var fi=(a,n)=>n.field;function ki(a,n){if(a&1&&(od(0,`mat-option`,8),fP(1),Nm()),a&2){let e=n.$implicit;PC(`value`,e),MR(),JC(e)}}function yi(a,n){if(a&1){let e=LO();od(0,`mat-form-field`,1)(1,`mat-label`),fP(2),Nm(),od(3,`mat-select`,6),Ed(`valueChange`,function(r){let p=ED(e).$implicit,m=HO();return DD(m.setColumn(p.field,r))}),od(4,`mat-option`,7),fP(5,`(not in this file)`),Nm(),NO(6,ki,2,2,`mat-option`,8,MO),Nm()()}if(a&2){let e=n.$implicit,t=HO();MR(2),eb(``,e.label,``,e.required?` *`:``),MR(),PC(`value`,t.columns()[e.field]??``),MR(3),RO(t.headers())}}function vi(a,n){if(a&1){let e=LO();od(0,`div`,2)(1,`p`),fP(2,` Most income rows in this file are negative. This file seems to use positive = money out (some budgeting apps do). Flip signs? `),Nm(),od(3,`mat-checkbox`,9),Ed(`change`,function(r){ED(e);let p=HO();return DD(p.flipSign.set(r.checked))}),fP(4,` Yes, flip signs so money out is negative `),Nm()()}if(a&2){let e=HO();MR(3),PC(`checked`,e.flipSign())}}var $a=[{field:`date`,label:`Date`,required:!0},{field:`description`,label:`Description (merchant)`,required:!0},{field:`amount`,label:`Amount`,required:!0},{field:`category`,label:`Category`,required:!1},{field:`account`,label:`Account`,required:!1},{field:`account_type`,label:`Account type`,required:!1},{field:`link`,label:`Link (debt or income name)`,required:!1},{field:`notes`,label:`Notes`,required:!1}];var xi=.8;var qt=class a{headers=Cd.required();rows=Cd.required();initial=Cd.required();incomeNames=Cd([]);confirmed=h9();cancelled=h9();fields=$a;columns=Um(()=>r({},this.initial().columns));flipSign=Um(()=>this.initial().flipSign);complete=uo$1(()=>$a.every(n=>!n.required||this.columns()[n.field]));proposeFlip=uo$1(()=>Va(this.rows(),{columns:this.columns(),flipSign:!1},this.incomeNames())>=xi);setColumn(n,e){this.columns.update(t=>{let r$2=r({},t);return e?r$2[n]=e:delete r$2[n],r$2})}confirm(){this.confirmed.emit({columns:this.columns(),flipSign:this.proposeFlip()&&this.flipSign()})}static ɵfac=function(e){return new(e||a)};static ɵcmp=Ei$1({type:a,selectors:[[`app-column-mapper`]],inputs:{headers:[1,`headers`],rows:[1,`rows`],initial:[1,`initial`],incomeNames:[1,`incomeNames`]},outputs:{confirmed:`confirmed`,cancelled:`cancelled`},decls:13,vars:2,consts:[[1,`grid`],[`appearance`,`outline`],[`role`,`status`,1,`sign`],[1,`actions`],[`mat-flat-button`,``,`type`,`button`,3,`click`,`disabled`],[`mat-button`,``,`type`,`button`,3,`click`],[3,`valueChange`,`value`],[`value`,``],[3,`value`],[3,`change`,`checked`]],template:function(e,t){e&1&&(od(0,`h2`),fP(1,`Match your columns`),Nm(),od(2,`p`),fP(3,` This file is not in the template format. Pick which of its columns holds each value. Your choice is remembered for files with the same columns. `),Nm(),od(4,`div`,0),NO(5,yi,8,3,`mat-form-field`,1,fi),Nm(),SO(7,vi,5,1,`div`,2),od(8,`div`,3)(9,`button`,4),Ed(`click`,function(){return t.confirm()}),fP(10,` Use these columns `),Nm(),od(11,`button`,5),Ed(`click`,function(){return t.cancelled.emit()}),fP(12,`Cancel`),Nm()()),e&2&&(MR(5),RO(t.fields),MR(2),_O(t.proposeFlip()?7:-1),MR(2),PC(`disabled`,!t.complete()))},dependencies:[Bo,zo$1,kt,at,$n,Xe$1,se,Ka,Ga,yt],styles:[`.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(16rem,1fr));gap:0 1rem}.sign[_ngcontent-%COMP%]{padding:.75rem 1rem;border-radius:.5rem;background:var(--%NS%mat-sys-secondary-container);color:var(--%NS%mat-sys-on-secondary-container);margin-bottom:1rem}.actions[_ngcontent-%COMP%]{display:flex;gap:.5rem}`]})};var wi=new K(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var jt=class{source;checked;constructor(n,e){this.source=n,this.checked=e}};var vn=(()=>{class a{_elementRef=N$3(Xt);_focusMonitor=N$3(_t);_changeDetectorRef=N$3(Ns);defaults=N$3(wi);_injector=N$3(ot);_signalFormField=null;_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new jt(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=U();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new Et;toggleChange=new Et;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){N$3(EF).load(Te);let e=N$3(new Ms(`tabindex`),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||`accent`,this.id=this._uniqueId=N$3(P_).getId(`mat-mdc-slide-toggle-`),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngOnInit(){this._signalFormField=this._injector.get(fn$1,void 0,{optional:!0,self:!0})}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0&&!this._signalFormField?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new jt(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`switch`],t=[`*`];function r(p,m){p&1&&(od(0,`span`,11),RD(),od(1,`svg`,13),vd(2,`path`,14),Nm(),od(3,`svg`,15),vd(4,`path`,16),Nm()())}return Ei$1({type:a,selectors:[[`mat-slide-toggle`]],viewQuery:function(m,u){if(m&1&&HC(e,5),m&2){let _;km(_=Lm())&&(u._switchElement=_.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(m,u){m&2&&(FC(`id`,u.id),Di$1(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),Fm(u.color?`mat-`+u.color:``),wd(`mat-mdc-slide-toggle-focused`,u._focused)(`mat-mdc-slide-toggle-checked`,u.checked)(`mat-slide-toggle-full-width`,u.fullWidth)(`_mat-animation-noopable`,u._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,wi$1],color:`color`,disabled:[2,`disabled`,`disabled`,wi$1],fullWidth:[2,`fullWidth`,`fullWidth`,wi$1],disableRipple:[2,`disableRipple`,`disableRipple`,wi$1],tabIndex:[2,`tabIndex`,`tabIndex`,p=>p==null?0:lk(p)],checked:[2,`checked`,`checked`,wi$1],hideIcon:[2,`hideIcon`,`hideIcon`,wi$1],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,wi$1]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[db([{provide:w,useExisting:dl(()=>a),multi:!0},{provide:N,useExisting:a,multi:!0}]),ao$1],ngContentSelectors:t,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(m,u){if(m&1&&(Om(),od(0,`div`,1)(1,`button`,2,0),Ed(`click`,function(){return u._handleClick()}),vd(3,`div`,3)(4,`span`,4),od(5,`span`,5)(6,`span`,6)(7,`span`,7),vd(8,`span`,8),Nm(),od(9,`span`,9),vd(10,`span`,10),Nm(),SO(11,r,5,0,`span`,11),Nm()()(),od(12,`label`,12),Ed(`click`,function(L){return L.stopPropagation()}),Pm(13),Nm()()),m&2){let _=WO(2);PC(`labelPosition`,u.labelPosition),MR(),wd(`mdc-switch--selected`,u.checked)(`mdc-switch--unselected`,!u.checked)(`mdc-switch--checked`,u.checked)(`mdc-switch--disabled`,u.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,u.disabledInteractive),PC(`tabIndex`,u.disabled&&!u.disabledInteractive?-1:u.tabIndex)(`disabled`,u.disabled&&!u.disabledInteractive),Di$1(`id`,u.buttonId)(`name`,u.name)(`aria-label`,u.ariaLabel)(`aria-labelledby`,u._getAriaLabelledBy())(`aria-describedby`,u.ariaDescribedby)(`aria-required`,u.required||null)(`aria-checked`,u.checked)(`aria-disabled`,u.disabled&&u.disabledInteractive?`true`:null),MR(9),PC(`matRippleTrigger`,_)(`matRippleDisabled`,u.disableRipple||u.disabled)(`matRippleCentered`,!0),MR(),_O(u.hideIcon?-1:11),MR(),PC(`for`,u.buttonId),Di$1(`id`,u._labelId)}},dependencies:[lo$1,Vt],styles:[`.mdc-switch {
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
`],encapsulation:2})})()}return a})();var Xa=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=Sr({type:a});static ɵinj=zn({imports:[vn,bT]})}return a})();var Si=(a,n)=>n.file.id;var Ii=(a,n)=>n.id;var Ni=(a,n)=>n.field;function Mi(a,n){if(a&1){let e=LO();od(0,`tr`)(1,`td`)(2,`mat-checkbox`,3),Ed(`change`,function(r){let p=ED(e).$implicit,m=HO(2);return DD(m.toggle(p.file.id,r.checked))}),Nm()(),od(3,`td`),fP(4),Nm(),od(5,`td`),fP(6),Nm(),od(7,`td`,4),fP(8),MP(9,`money`),Nm(),od(10,`td`),fP(11),MP(12,`money`),Nm()()}if(a&2){let e=n.$implicit,t=HO(2);Di$1(`data-correction`,e.kind),MR(2),PC(`checked`,!t.declined().has(e.file.id)),OC(`aria-label`,`Correct `+e.saved.description+` on `+e.saved.date),MR(2),JC(e.saved.date),MR(2),JC(e.saved.description),MR(2),eb(` `,RP(9,9,e.saved.amount),` · `,e.saved.category??`no category`,` `),MR(3),eb(``,RP(12,11,e.file.amount),` · `,e.file.category??`no category`)}}function Ei(a,n){if(a&1&&(od(0,`h4`),fP(1),Nm(),od(2,`p`),fP(3,` These rows match a saved transaction but the file has a different amount or category. The saved transaction will be corrected. Untick one to leave it as it is; an unticked row with a different amount is then saved as a separate transaction. `),Nm(),od(4,`div`,0)(5,`table`,1)(6,`thead`)(7,`tr`)(8,`th`,2),fP(9,`Correct`),Nm(),od(10,`th`,2),fP(11,`Date`),Nm(),od(12,`th`,2),fP(13,`Description`),Nm(),od(14,`th`,2),fP(15,`You have`),Nm(),od(16,`th`,2),fP(17,`The file says`),Nm()()(),od(18,`tbody`),NO(19,Mi,13,13,`tr`,null,Si),Nm()()()),a&2){HO();let e=wP(0);MR(),jm(`Corrections to transactions you already have (`,e.corrections.length,`)`),MR(18),RO(e.corrections)}}function Ti(a,n){if(a&1&&(od(0,`div`),fP(1),od(2,`span`,4),fP(3),Nm(),fP(4),Nm()),a&2){let e=n.$implicit;MR(),jm(` `,e.field,`: `),MR(2),JC(e.before),MR(),jm(` `,e.after,` `)}}function Oi(a,n){if(a&1){let e=LO();od(0,`tr`)(1,`td`)(2,`mat-checkbox`,3),Ed(`change`,function(r){let p=ED(e).$implicit,m=HO(2);return DD(m.toggle(p.id,r.checked))}),Nm()(),od(3,`td`),fP(4),Nm(),od(5,`td`),NO(6,Ti,5,3,`div`,null,Ni),Nm()()}if(a&2){let e=n.$implicit,t=HO(2);Di$1(`data-change`,e.id),MR(2),PC(`checked`,!t.declined().has(e.id)),OC(`aria-label`,`Update `+e.label),MR(2),JC(e.label),MR(2),RO(e.fields)}}function Di(a,n){if(a&1&&(od(0,`h4`),fP(1),Nm(),od(2,`p`),fP(3,` The file has different values for these. They will be updated. Untick one to keep what you have. `),Nm(),od(4,`div`,0)(5,`table`,5)(6,`thead`)(7,`tr`)(8,`th`,2),fP(9,`Update`),Nm(),od(10,`th`,2),fP(11,`What`),Nm(),od(12,`th`,2),fP(13,`Change`),Nm()()(),od(14,`tbody`),NO(15,Oi,8,4,`tr`,null,Ii),Nm()()()),a&2){HO();let e=wP(0);MR(),jm(`Changes to what you already have (`,e.recordChanges.length,`)`),MR(14),RO(e.recordChanges)}}var Wt=class a{preview=Cd.required();declined=Cd.required();declinedChange=h9();toggle(n,e){let t=new Set(this.declined());e?t.delete(n):t.add(n),this.declinedChange.emit(t)}static ɵfac=function(e){return new(e||a)};static ɵcmp=Ei$1({type:a,selectors:[[`app-import-updates`]],inputs:{preview:[1,`preview`],declined:[1,`declined`]},outputs:{declinedChange:`declinedChange`},decls:3,vars:3,consts:[[1,`list`],[`aria-label`,`Corrections to saved transactions`,`data-list`,`corrections`],[`scope`,`col`],[3,`change`,`checked`,`aria-label`],[1,`was`],[`aria-label`,`Changes to saved records`,`data-list`,`record-changes`]],template:function(e,t){if(e&1&&(cb(0),SO(1,Ei,21,1),SO(2,Di,17,1)),e&2){let r=DP(t.preview());MR(),_O(r.corrections.length>0?1:-1),MR(),_O(r.recordChanges.length>0?2:-1)}},dependencies:[kt,at,i],styles:[`.list[_ngcontent-%COMP%]{max-height:22rem;overflow:auto}table[_ngcontent-%COMP%]{border-collapse:collapse;width:100%}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:.25rem .5rem;text-align:left;vertical-align:top}.was[_ngcontent-%COMP%]{text-decoration:line-through;color:var(--%NS%mat-sys-on-surface-variant)}h4[_ngcontent-%COMP%]{margin:1rem 0 .25rem;font:var(--%NS%mat-sys-title-small)}`]})};var Ri=(a,n)=>n.id;function Pi(a,n){if(a&1){let e=LO();od(0,`tr`)(1,`td`)(2,`mat-checkbox`,7),Ed(`change`,function(r){let p=ED(e).$implicit,m=HO();return DD(m.toggle(p.id,r.checked))}),Nm()(),od(3,`td`),fP(4),Nm(),od(5,`td`),fP(6),Nm(),od(7,`td`),fP(8),Nm(),od(9,`td`,8),fP(10),MP(11,`money`),Nm()()}if(a&2){let e=n.$implicit,t=HO();MR(2),PC(`checked`,t.kept().has(e.id)),OC(`aria-label`,`Keep `+e.description+` on `+e.date),MR(2),JC(e.date),MR(2),JC(e.account),MR(2),JC(e.description),MR(2),JC(RP(11,6,e.amount))}}var Ut=class a{sort=new D({date:n=>n.date,account:n=>n.account,description:n=>n.description,amount:n=>n.amount});duplicates=Cd.required();kept=Cd.required();keptChange=h9();toggle(n,e){let t=new Set(this.kept());e?t.add(n):t.delete(n),this.keptChange.emit(t)}static ɵfac=function(e){return new(e||a)};static ɵcmp=Ei$1({type:a,selectors:[[`app-reimport-duplicates`]],inputs:{duplicates:[1,`duplicates`],kept:[1,`kept`]},outputs:{keptChange:`keptChange`},decls:19,vars:5,consts:[[1,`list`],[`aria-label`,`Likely duplicates`],[`scope`,`col`],[`scope`,`col`,`app-sort`,``,`sortKey`,`date`,3,`sort`],[`scope`,`col`,`app-sort`,``,`sortKey`,`account`,3,`sort`],[`scope`,`col`,`app-sort`,``,`sortKey`,`description`,3,`sort`],[`scope`,`col`,`app-sort`,``,`sortKey`,`amount`,`first`,`desc`,1,`amount`,3,`sort`],[3,`change`,`checked`,`aria-label`],[1,`amount`]],template:function(e,t){e&1&&(od(0,`p`),fP(1),Nm(),od(2,`div`,0)(3,`table`,1)(4,`thead`)(5,`tr`)(6,`th`,2),fP(7,`Keep`),Nm(),od(8,`th`,3),fP(9,`Date`),Nm(),od(10,`th`,4),fP(11,`Account`),Nm(),od(12,`th`,5),fP(13,`Description`),Nm(),od(14,`th`,6),fP(15,` Amount `),Nm()()(),od(16,`tbody`),NO(17,Pi,12,8,`tr`,null,Ri),Nm()()()),e&2&&(MR(),jm(` `,t.duplicates().length,` transactions match ones you already have (same date, account, description and amount). They will be skipped. Tick any that are real new transactions. `),MR(7),PC(`sort`,t.sort),MR(2),PC(`sort`,t.sort),MR(2),PC(`sort`,t.sort),MR(2),PC(`sort`,t.sort),MR(3),RO(t.sort.apply(t.duplicates())))},dependencies:[Bo,kt,at,C,i],styles:[`.list[_ngcontent-%COMP%]{max-height:20rem;overflow:auto}.amount[_ngcontent-%COMP%]{text-align:right;font-variant-numeric:tabular-nums}table[_ngcontent-%COMP%]{border-collapse:collapse;width:100%}td[_ngcontent-%COMP%]{padding:.125rem .5rem}`]})};var Fi=(a,n)=>n.type;var Ai=(a,n)=>n.account+n.windowStart;var zi=(a,n)=>n.returned.id;var Qa=(a,n)=>n.id;var Vi=(a,n)=>n.income.id;var Li=(a,n)=>n.rowNumber;function Bi(a,n){a&1&&(od(0,`p`,1),fP(1),Nm()),a&2&&(MR(),JC(n))}function qi(a,n){if(a&1){let e=LO();od(0,`mat-card`,2)(1,`mat-card-content`)(2,`h3`),fP(3,`Updating your data`),Nm(),od(4,`p`,19),fP(5,` What you already have stays. This file adds `),od(6,`strong`),fP(7),Nm(),fP(8),Nm(),od(9,`app-import-updates`,20),Ed(`declinedChange`,function(r){ED(e);let p=HO();return DD(p.declinedChange.emit(r))}),Nm()()()}if(a&2){let e=HO();MR(7),JC(e.preview().transactionsToSave),MR(),nb(` new transaction`,e.preview().transactionsToSave===1?``:`s`,`; `,e.preview().duplicates.length,` already saved `,e.preview().duplicates.length===1?`is`:`are`,` skipped; and `,e.preview().corrections.length+e.preview().recordChanges.length,` will be corrected. `),MR(),PC(`preview`,e.preview())(`declined`,e.declined())}}function ji(a,n){if(a&1&&(od(0,`tr`)(1,`th`,6),fP(2),Nm(),od(3,`td`,7),fP(4),Nm()()),a&2){let e=n.$implicit;Di$1(`data-count`,e.type),MR(2),JC(e.label),MR(2),JC(e.count)}}function Wi(a,n){if(a&1){let e=LO();od(0,`mat-card`,8)(1,`mat-card-content`)(2,`h3`),fP(3,`Rows imported twice`),Nm(),od(4,`p`),fP(5),Nm(),od(6,`mat-slide-toggle`,21),Ed(`change`,function(r){ED(e);let p=HO();return DD(p.removeDoubleFeedChange.emit(r.checked))}),fP(7,` Remove the copies `),Nm()()()}if(a&2){let e=n.$implicit,t=HO();MR(5),rb(` `,e.account,`: from `,e.windowStart,` to the day before `,e.cutoff,` (`,e.weeks,` weeks) most rows appear twice. `,e.removed,` copies will be removed. `),MR(),PC(`checked`,t.removeDoubleFeed())}}function Ui(a,n){if(a&1){let e=LO();od(0,`mat-card`,9)(1,`mat-card-content`)(2,`h3`),fP(3,`Already imported`),Nm(),od(4,`app-reimport-duplicates`,22),Ed(`keptChange`,function(r){ED(e);let p=HO();return DD(p.keptDuplicatesChange.emit(r))}),Nm()()()}if(a&2){let e=HO();MR(4),PC(`duplicates`,e.preview().duplicates)(`kept`,e.keptDuplicates())}}function Gi(a,n){if(a&1&&(od(0,`li`),fP(1),MP(2,`money`),MP(3,`money`),Nm()),a&2){let e=n.$implicit;MR(),rb(` `,e.returned.date,` `,e.returned.description,` `,RP(2,5,e.returned.amount),` matches `,e.original.date,` `,RP(3,7,e.original.amount),` `)}}function Ki(a,n){if(a&1&&(od(0,`li`),fP(1),MP(2,`money`),Nm()),a&2){let e=n.$implicit;MR(),tb(` `,e.date,` `,e.description,` `,RP(2,3,e.amount),`: no matching payment found `)}}function $i(a,n){if(a&1&&(od(0,`mat-card`,10)(1,`mat-card-content`)(2,`h3`),fP(3,`Returned payments`),Nm(),od(4,`p`),fP(5,`A payment that bounced cancels out with the original payment.`),Nm(),od(6,`ul`),NO(7,Gi,4,9,`li`,null,zi),NO(9,Ki,3,5,`li`,null,Qa),Nm()()()),a&2){let e=HO();MR(7),RO(e.preview().returnedPayments),MR(2),RO(e.preview().unmatchedReturns)}}function Hi(a,n){if(a&1&&(od(0,`li`),fP(1),MP(2,`money`),Nm()),a&2){let e=n.$implicit;MR(),tb(``,e.date,` `,e.description,` `,RP(2,3,e.amount))}}function Xi(a,n){if(a&1&&(od(0,`mat-card`,11)(1,`mat-card-content`)(2,`h3`),fP(3,`Refunds`),Nm(),od(4,`p`),fP(5,`Refunds reduce spending on the line they belong to.`),Nm(),od(6,`ul`),NO(7,Hi,3,5,`li`,null,Qa),Nm()()()),a&2){let e=HO();MR(7),RO(e.preview().refunds)}}function Qi(a,n){if(a&1&&(od(0,`li`),fP(1),MP(2,`money`),Nm()),a&2){let e=n.$implicit;MR(),ob(` `,e.income.date,` `,e.income.description,` `,RP(2,6,e.income.amount),` after `,e.transfer.date,` `,e.transfer.description,` on `,e.transfer.account,` `)}}function Yi(a,n){if(a&1&&(od(0,`mat-card`,12)(1,`mat-card-content`)(2,`h3`),fP(3,`May be your own money coming back`),Nm(),od(4,`p`),fP(5,` These deposits follow a transfer out of the same amount, so they are not counted as income. `),Nm(),od(6,`ul`),NO(7,Qi,3,8,`li`,null,Vi),Nm()()()),a&2){let e=HO();MR(7),RO(e.preview().mirrors)}}function Zi(a,n){if(a&1&&(od(0,`tr`)(1,`td`),fP(2),Nm(),od(3,`td`),fP(4),Nm()()),a&2){let e=n.$implicit;MR(2),JC(e.rowNumber??``),MR(2),JC(e.message)}}function Ji(a,n){if(a&1&&(od(0,`mat-card`,13)(1,`mat-card-content`)(2,`h3`),fP(3),Nm(),od(4,`p`),fP(5,`They will be imported, but something looks off.`),Nm(),od(6,`table`,23)(7,`thead`)(8,`tr`)(9,`th`,24),fP(10,`Row`),Nm(),od(11,`th`,25),fP(12,`What to check`),Nm()()(),od(13,`tbody`),NO(14,Zi,5,2,`tr`,null,AO),Nm()()()()),a&2){let e=HO();MR(3),jm(`Check these rows (`,e.preview().warnings.length,`)`),MR(6),PC(`sort`,e.warningSort),MR(2),PC(`sort`,e.warningSort),MR(3),RO(e.warningSort.apply(e.preview().warnings))}}function eo(a,n){if(a&1&&(od(0,`tr`)(1,`td`),fP(2),Nm(),od(3,`td`),fP(4),Nm(),od(5,`td`),fP(6),Nm()()),a&2){let e=n.$implicit;MR(2),JC(e.rowNumber),MR(2),JC(e.recordType||`(no type)`),MR(2),JC(e.reason)}}function to(a,n){if(a&1&&(od(0,`mat-card`,14)(1,`mat-card-content`)(2,`h3`),fP(3),Nm(),od(4,`p`),fP(5,`These rows are not imported. Fix them in the CSV and import again.`),Nm(),od(6,`table`,26)(7,`thead`)(8,`tr`)(9,`th`,24),fP(10,`Row`),Nm(),od(11,`th`,27),fP(12,`Record type`),Nm(),od(13,`th`,28),fP(14,`Reason`),Nm()()(),od(15,`tbody`),NO(16,eo,7,3,`tr`,null,Li),Nm()()()()),a&2){let e=HO();MR(3),jm(`Skipped rows (`,e.preview().skipped.length,`)`),MR(6),PC(`sort`,e.skippedSort),MR(2),PC(`sort`,e.skippedSort),MR(2),PC(`sort`,e.skippedSort),MR(3),RO(e.skippedSort.apply(e.preview().skipped))}}var no={transaction:`Transaction rows`,debt:`Debts`,income:`Income sources`,deduction:`Payroll deductions`,bill:`Bills`,balance:`Cash balances`,schedule:`Payment schedule changes`,windfall:`Windfalls`};var Gt=class a{warningSort=new D({row:n=>n.rowNumber,message:n=>n.message});skippedSort=new D({row:n=>n.rowNumber,type:n=>n.recordType,reason:n=>n.reason});preview=Cd.required();notice=Cd(null);removeDoubleFeed=Cd.required();keptDuplicates=Cd.required();declined=Cd(/* @__PURE__ */ new Set);declinedChange=h9();removeDoubleFeedChange=h9();keptDuplicatesChange=h9();confirmed=h9();cancelled=h9();countRows=uo$1(()=>Object.entries(this.preview().counts).map(([n,e])=>({type:n,count:e,label:no[n]??n})));toSave=uo$1(()=>{let n=this.declined(),e=this.preview().corrections.filter(t=>t.kind===`amount`&&n.has(t.file.id)).length;return this.preview().transactionsToSave+this.keptDuplicates().size+e});static ɵfac=function(e){return new(e||a)};static ɵcmp=Ei$1({type:a,selectors:[[`app-import-preview`]],inputs:{preview:[1,`preview`],notice:[1,`notice`],removeDoubleFeed:[1,`removeDoubleFeed`],keptDuplicates:[1,`keptDuplicates`],declined:[1,`declined`]},outputs:{declinedChange:`declinedChange`,removeDoubleFeedChange:`removeDoubleFeedChange`,keptDuplicatesChange:`keptDuplicatesChange`,confirmed:`confirmed`,cancelled:`cancelled`},decls:55,vars:18,consts:[[`data-note`,`not-saved`,1,`lead`],[`role`,`status`,1,`notice`],[`appearance`,`outlined`,`data-section`,`update`],[`appearance`,`outlined`],[`aria-label`,`Records per type`],[`aria-label`,`Totals`],[`scope`,`row`],[1,`num`],[`appearance`,`outlined`,`data-section`,`double-feed`],[`appearance`,`outlined`,`data-section`,`duplicates`],[`appearance`,`outlined`,`data-section`,`returns`],[`appearance`,`outlined`,`data-section`,`refunds`],[`appearance`,`outlined`,`data-section`,`mirrors`],[`appearance`,`outlined`,`data-section`,`warnings`],[`appearance`,`outlined`,`data-section`,`skipped`],[1,`confirm-bar`],[1,`actions`],[`mat-flat-button`,``,`type`,`button`,3,`click`],[`mat-button`,``,`type`,`button`,3,`click`],[`data-note`,`update-summary`],[3,`declinedChange`,`preview`,`declined`],[3,`change`,`checked`],[3,`keptChange`,`duplicates`,`kept`],[`aria-label`,`Flagged rows`],[`scope`,`col`,`app-sort`,``,`sortKey`,`row`,3,`sort`],[`scope`,`col`,`app-sort`,``,`sortKey`,`message`,3,`sort`],[`aria-label`,`Skipped rows`],[`scope`,`col`,`app-sort`,``,`sortKey`,`type`,3,`sort`],[`scope`,`col`,`app-sort`,``,`sortKey`,`reason`,3,`sort`]],template:function(e,t){if(e&1&&(od(0,`p`,0),fP(1,` Nothing is saved yet. Look over the preview, then press `),od(2,`strong`),fP(3,`Confirm`),Nm(),fP(4,` at the bottom of the window to import. `),Nm(),SO(5,Bi,2,1,`p`,1),SO(6,qi,10,7,`mat-card`,2),od(7,`mat-card`,3)(8,`mat-card-content`)(9,`h3`),fP(10,`What is in the file`),Nm(),od(11,`table`,4)(12,`tbody`),NO(13,ji,5,3,`tr`,null,Fi),Nm()(),od(15,`h3`),fP(16,`Totals`),Nm(),od(17,`table`,5)(18,`tbody`)(19,`tr`)(20,`th`,6),fP(21,`Income`),Nm(),od(22,`td`,7),fP(23),MP(24,`money`),Nm()(),od(25,`tr`)(26,`th`,6),fP(27,`Spending`),Nm(),od(28,`td`,7),fP(29),MP(30,`money`),Nm()(),od(31,`tr`)(32,`th`,6),fP(33,`Debt`),Nm(),od(34,`td`,7),fP(35),MP(36,`money`),Nm()()()(),od(37,`p`),fP(38,` Income leaves out money moved from your own accounts. Spending is money out less refunds, leaving out transfers, card payments, returned payments and loan statements. Debt is the sum of the debt balances in the file. `),Nm()()(),NO(39,Wi,8,6,`mat-card`,8,Ai),SO(41,Ui,5,2,`mat-card`,9),SO(42,$i,11,0,`mat-card`,10),SO(43,Xi,9,0,`mat-card`,11),SO(44,Yi,9,0,`mat-card`,12),SO(45,Ji,16,3,`mat-card`,13),SO(46,to,18,4,`mat-card`,14),od(47,`div`,15)(48,`p`),fP(49),Nm(),od(50,`div`,16)(51,`button`,17),Ed(`click`,function(){return t.confirmed.emit()}),fP(52,`Confirm`),Nm(),od(53,`button`,18),Ed(`click`,function(){return t.cancelled.emit()}),fP(54,`Cancel`),Nm()()()),e&2){let r;MR(5),_O((r=t.notice())?5:-1,r),MR(),_O(t.preview().updating?6:-1),MR(7),RO(t.countRows()),MR(10),JC(RP(24,12,t.preview().totals.income)),MR(6),JC(RP(30,14,t.preview().totals.spending)),MR(6),JC(RP(36,16,t.preview().totals.debt)),MR(4),RO(t.preview().doubleFeed.windows),MR(2),_O(t.preview().duplicates.length>0?41:-1),MR(),_O(t.preview().returnedPayments.length>0||t.preview().unmatchedReturns.length>0?42:-1),MR(),_O(t.preview().refunds.length>0?43:-1),MR(),_O(t.preview().mirrors.length>0?44:-1),MR(),_O(t.preview().warnings.length>0?45:-1),MR(),_O(t.preview().skipped.length>0?46:-1),MR(3),jm(``,t.toSave(),` transactions will be saved.`)}},dependencies:[Bo,zo$1,A,I,_,Xa,vn,C,Wt,Ut,i],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;gap:1rem}table[_ngcontent-%COMP%]{border-collapse:collapse}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{text-align:left;padding:.125rem .75rem .125rem 0;vertical-align:top}.num[_ngcontent-%COMP%]{text-align:right;font-variant-numeric:tabular-nums}.notice[_ngcontent-%COMP%]{padding:.5rem 1rem;border-radius:.5rem;background:var(--%NS%mat-sys-secondary-container);color:var(--%NS%mat-sys-on-secondary-container)}.lead[_ngcontent-%COMP%]{margin:0}.confirm-bar[_ngcontent-%COMP%]{position:sticky;bottom:0;z-index:1;display:flex;flex-wrap:wrap;align-items:center;gap:.5rem 1rem;margin:0 -.5rem;padding:.75rem .5rem;background:var(--%NS%app-bg);border-top:1px solid var(--%NS%app-border)}.confirm-bar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{flex:1 1 12rem;margin:0;font-weight:500}.actions[_ngcontent-%COMP%]{display:flex;gap:.5rem}h3[_ngcontent-%COMP%]{margin:0 0 .5rem}`]})};var ao=()=>({});var io=a=>({columns:a,flipSign:!1});var oo=(a,n)=>n.bank;function ro(a,n){a&1&&(od(0,`p`),fP(1,`Open or create a data file first.`),Nm(),od(2,`a`,1),fP(3,`Go to Welcome`),Nm())}function co(a,n){a&1&&(od(0,`p`,4),fP(1,` You are trying the sample, so nothing you import here is saved. To use your own data, choose Close file in the menu at the top right, then create a data file. `),Nm())}function so(a,n){a&1&&(od(0,`p`,7)(1,`mat-icon`,17),fP(2,`info`),Nm(),od(3,`span`),fP(4,` You already have transactions up to `),od(5,`strong`),fP(6),Nm(),fP(7,`. To update, import a file with only what is newer: everything saved stays, rows you already have are skipped, and corrections to old rows are shown before anything is saved. `),Nm()()),a&2&&(MR(6),JC(n))}function lo(a,n){if(a&1){let e=LO();od(0,`button`,18),Ed(`click`,function(){ED(e);let r=HO(3);return DD(r.importSample())}),fP(1,` Import the sample file `),Nm()}}function mo(a,n){a&1&&(od(0,`span`,22),fP(1,`Asking SimpleFIN…`),Nm())}function po(a,n){if(a&1){let e=LO();od(0,`section`,14)(1,`h2`,19),fP(2,`From your bank connection`),Nm(),od(3,`p`,20),fP(4,` Fetch new transactions and balances from SimpleFIN. You see the same preview as for a CSV before anything is saved. `),Nm(),od(5,`button`,21),Ed(`click`,function(){ED(e);let r=HO(3);return DD(r.refreshBank())}),od(6,`mat-icon`,11),fP(7,`sync`),Nm(),fP(8,` Refresh from bank `),Nm(),SO(9,mo,2,0,`span`,22),Nm()}if(a&2){let e=HO(3);MR(5),PC(`disabled`,e.bank.busy()),MR(4),_O(e.bank.busy()?9:-1)}}function ho(a,n){if(a&1&&(od(0,`span`,25),fP(1),Nm()),a&2){let e=HO(4);MR(),jm(` Opens again in `,e.plaidWait(),` seconds. `)}}function uo(a,n){a&1&&(od(0,`span`,22),fP(1,`Asking Plaid…`),Nm())}function bo(a,n){if(a&1){let e=LO();od(0,`section`,15)(1,`h2`,23),fP(2,`From Plaid`),Nm(),od(3,`p`,20),fP(4,` Fetch new transactions and balances from every bank connected with Plaid. You see the same preview as for a CSV before anything is saved. `),Nm(),od(5,`button`,24),Ed(`click`,function(){ED(e);let r=HO(3);return DD(r.refreshPlaid())}),od(6,`mat-icon`,11),fP(7,`sync`),Nm(),fP(8,` Refresh from Plaid `),Nm(),SO(9,ho,2,1,`span`,25),SO(10,uo,2,0,`span`,22),Nm()}if(a&2){let e=HO(3);MR(5),PC(`disabled`,e.plaid.busy()||e.plaidWait()>0),MR(4),_O(e.plaidWait()>0?9:-1),MR(),_O(e.plaid.busy()?10:-1)}}function go(a,n){a&1&&(od(0,`p`,20),fP(1,` Your bank is connected but no account is chosen yet. Choose which accounts to import, and new transactions and balances come in with one click. `),Nm())}function _o(a,n){a&1&&(od(0,`p`,20),fP(1,` Skip the CSV: fetch transactions and balances straight from your bank through SimpleFIN Bridge, a paid service you sign up for yourself. The app never sees your bank login, and you still see a preview before anything is saved. Your data file needs a passphrase first. `),Nm())}function fo(a,n){if(a&1&&(od(0,`section`,16)(1,`h2`,26)(2,`mat-icon`,17),fP(3,`account_balance`),Nm(),fP(4),Nm(),SO(5,go,2,0,`p`,20)(6,_o,2,0,`p`,20),od(7,`a`,27)(8,`mat-icon`,11),fP(9,`link`),Nm(),fP(10),Nm()()),a&2){let e=HO(3);MR(4),jm(` `,e.bank.connected()?`Finish connecting your bank`:`Or connect your bank`,` `),MR(),_O(e.bank.connected()?5:6),MR(5),jm(` `,e.bank.connected()?`Choose accounts`:`Connect bank`,` `)}}function ko(a,n){if(a&1){let e=LO();SO(0,co,2,0,`p`,4),od(1,`p`,5),fP(2,` Import the CSV your AI assistant made from your statements. Nothing leaves this device. No CSV yet? `),od(3,`a`,6),fP(4,`Help shows how to make one`),Nm(),fP(5,`, step by step. `),Nm(),SO(6,so,8,1,`p`,7),od(7,`div`,8),Ed(`dragover`,function(r){ED(e);let p=HO(2);return DD(p.onDragOver(r))})(`dragleave`,function(){ED(e);let r=HO(2);return DD(r.dragging.set(!1))})(`drop`,function(r){ED(e);let p=HO(2);return DD(p.onDrop(r))}),od(8,`p`),fP(9,`Drop a CSV file here, or`),Nm(),od(10,`div`,9)(11,`button`,10),Ed(`click`,function(){ED(e);let r=WO(17);return DD(r.click())}),od(12,`mat-icon`,11),fP(13,`upload_file`),Nm(),fP(14,` Choose CSV file `),Nm(),SO(15,lo,2,0,`button`,12),Nm(),od(16,`input`,13,0),Ed(`change`,function(r){ED(e);let p=HO(2);return DD(p.onFileInput(r))}),Nm()(),SO(18,po,10,2,`section`,14),SO(19,bo,11,3,`section`,15),SO(20,fo,11,3,`section`,16)}if(a&2){let e,t=HO(2);_O(t.store.isSample()?0:-1),MR(6),_O((e=t.latestSaved())?6:-1,e),MR(),wd(`over`,t.dragging()),MR(8),_O(t.store.isSample()?15:-1),MR(3),_O(t.bank.mapped()?18:-1),MR(),_O(t.plaid.mapped()?19:-1),MR(),_O(!t.bank.mapped()&&!t.plaid.mapped()&&!t.store.isSample()?20:-1)}}function yo(a,n){if(a&1){let e=LO();od(0,`app-column-mapper`,28),Ed(`confirmed`,function(r){ED(e);let p=HO(2);return DD(p.onMapped(r))})(`cancelled`,function(){ED(e);let r=HO(2);return DD(r.reset())}),Nm()}if(a&2){let e=HO(2);PC(`headers`,e.headers())(`rows`,e.rawRows().slice(0,50))(`initial`,e.mapping()??_P(5,io,TP(4,ao)))(`incomeNames`,e.incomeNames())}}function vo(a,n){if(a&1&&(od(0,`li`),fP(1),Nm()),a&2){let e=n.$implicit;MR(),JC(e)}}function xo(a,n){if(a&1&&(od(0,`div`,33)(1,`mat-icon`,17),fP(2,`info`),Nm(),od(3,`div`)(4,`p`),fP(5,`SimpleFIN says:`),Nm(),od(6,`ul`),NO(7,vo,2,1,`li`,null,MO),Nm()()()),a&2){let e=HO();MR(7),RO(e.messages)}}function wo(a,n){a&1&&(od(0,`h2`,32),fP(1,`From your bank connection`),Nm(),SO(2,xo,9,0,`div`,33)),a&2&&(MR(2),_O(n.messages.length>0?2:-1))}function Co(a,n){if(a&1&&(od(0,`li`)(1,`strong`),fP(2),Nm(),fP(3),Nm()),a&2){let e=n.$implicit;MR(2),JC(e.bank),MR(),jm(`: `,e.message,` `)}}function So(a,n){if(a&1&&(od(0,`div`,34)(1,`mat-icon`,17),fP(2,`info`),Nm(),od(3,`div`)(4,`p`),fP(5,`These banks didn't sync. Nothing was changed for them:`),Nm(),od(6,`ul`),NO(7,Co,4,2,`li`,null,oo),Nm()()()),a&2){let e=HO();MR(7),RO(e.failures)}}function Io(a,n){if(a&1&&(od(0,`p`,35)(1,`mat-icon`,17),fP(2,`info`),Nm(),od(3,`span`),fP(4),Nm()()),a&2){let e=HO();MR(4),eb(` `,e.changedAtBank,` `,e.changedAtBank===1?`transaction was`:`transactions were`,` changed or removed at your bank. Transactions already saved in your file are left as they are. `)}}function No(a,n){if(a&1&&(od(0,`p`,36)(1,`mat-icon`,17),fP(2,`schedule`),Nm(),od(3,`span`),fP(4),Nm()()),a&2){let e=n.$implicit;MR(4),JC(e)}}function Mo(a,n){if(a&1&&(od(0,`h2`,32),fP(1,`From your bank connection`),Nm(),SO(2,So,9,0,`div`,34),SO(3,Io,5,2,`p`,35),NO(4,No,5,1,`p`,36,MO)),a&2){let e=n;MR(2),_O(e.failures.length>0?2:-1),MR(),_O(e.changedAtBank>0?3:-1),MR(),RO(e.notes)}}function Eo(a,n){if(a&1&&(od(0,`h2`),fP(1),Nm()),a&2){let e=HO(4);MR(),jm(`Preview: `,e.fileName())}}function To(a,n){if(a&1){let e=LO();od(0,`app-bank-categories`,37),sb(`picksChange`,function(r){ED(e);let p=HO(4);return EP(p.categoryPicks,r)||(p.categoryPicks=r),DD(r)}),Nm()}if(a&2){let e=HO(4);PC(`rows`,e.needsCategory()),ib(`picks`,e.categoryPicks)}}function Oo(a,n){if(a&1){let e=LO();od(0,`app-bank-categories`,38),sb(`picksChange`,function(r){ED(e);let p=HO(4);return EP(p.categoryPicks,r)||(p.categoryPicks=r),DD(r)}),Nm()}if(a&2){let e=HO(4);PC(`rows`,e.guessedCategory())(`guessed`,!0),ib(`picks`,e.categoryPicks)}}function Do(a,n){if(a&1){let e=LO();SO(0,wo,3,1)(1,Mo,6,2)(2,Eo,2,1,`h2`),SO(3,To,1,2,`app-bank-categories`,29),SO(4,Oo,1,3,`app-bank-categories`,30),od(5,`app-import-preview`,31),Ed(`declinedChange`,function(r){ED(e);let p=HO(3);return DD(p.declined.set(r))})(`removeDoubleFeedChange`,function(r){ED(e);let p=HO(3);return DD(p.setRemoveDoubleFeed(r))})(`keptDuplicatesChange`,function(r){ED(e);let p=HO(3);return DD(p.keptDuplicates.set(r))})(`confirmed`,function(){ED(e);let r=HO(3);return DD(r.confirm())})(`cancelled`,function(){ED(e);let r=HO(3);return DD(r.reset())}),Nm()}if(a&2){let e,t=HO(3);_O((e=t.bankSync())?0:(e=t.plaidSync())?1:2,e),MR(3),_O(t.needsCategory().length>0?3:-1),MR(),_O(t.guessedCategory().length>0?4:-1),MR(),PC(`preview`,n.preview)(`notice`,t.notice())(`removeDoubleFeed`,t.removeDoubleFeed())(`keptDuplicates`,t.keptDuplicates())(`declined`,t.declined())}}function Ro(a,n){if(a&1&&SO(0,Do,6,8),a&2){let e,t=HO(2);_O((e=t.prepared())?0:-1,e)}}function Po(a,n){if(a&1){let e=LO();od(0,`p`,39),fP(1),Nm(),od(2,`section`,40)(3,`h2`,41),fP(4,`What to do next`),Nm(),od(5,`ol`)(6,`li`)(7,`a`,42),fP(8,`Dashboard`),Nm(),fP(9,`: see your health check and confirm anything the app was unsure about. `),Nm(),od(10,`li`)(11,`a`,43),fP(12,`Budget`),Nm(),fP(13,`: adjust the monthly target for each line.`),Nm(),od(14,`li`)(15,`a`,44),fP(16,`Debts`),Nm(),fP(17,`: choose a payoff strategy and see your debt-free month. `),Nm(),od(18,`li`)(19,`a`,45),fP(20,`Check-in`),Nm(),fP(21,`: add the weekly check-ins to your calendar. `),Nm()(),od(22,`div`,46)(23,`a`,47),fP(24,`Go to Dashboard`),Nm(),od(25,`button`,18),Ed(`click`,function(){ED(e);let r=HO(2);return DD(r.reset())}),fP(26,` Import another file `),Nm()()()}if(a&2){let e=HO(2);MR(),JC(e.savedMessage())}}function Fo(a,n){a&1&&(od(0,`p`,3),fP(1),Nm()),a&2&&(MR(),JC(n))}function Ao(a,n){if(a&1&&(SO(0,ko,21,8)(1,yo,1,7,`app-column-mapper`,2)(2,Ro,1,1)(3,Po,27,1),SO(4,Fo,2,1,`p`,3)),a&2){let e,t,r=HO();_O((e=r.step())===`pick`?0:e===`map`?1:e===`preview`?2:e===`done`?3:-1),MR(4),_O((t=r.error())?4:-1,t)}}var zo=`Bank connection (SimpleFIN)`;var Vo=`Bank connection (Plaid)`;var Lo=`This file uses the older template (v1). It was imported; the newer columns (account type, link, credit limit and others) are empty.`;var Ya=class a{store=N$3(x_);route=N$3(Or);router=N$3(Ni$1);bank=N$3(Z);plaid=N$3(ae);plaidWait=En();step=Ce(`pick`);dragging=Ce(!1);error=Ce(null);fileName=Ce(``);headers=Ce([]);rawRows=Ce([]);notice=Ce(null);mapping=Ce(null);newMappingSignature=Ce(null);templateRows=Ce([]);removeDoubleFeed=Ce(!0);prepared=Ce(null);keptDuplicates=Ce(/* @__PURE__ */ new Set);declined=Ce(/* @__PURE__ */ new Set);latestSaved=uo$1(()=>(this.store.data()?.transactions??[]).reduce((n,e)=>e.date>n?e.date:n,``));savedMessage=Ce(``);bankSync=Ce(null);plaidSync=Ce(null);needsCategory=uo$1(()=>{let n=this.prepared();return n?We(n):[]});guessedCategory=uo$1(()=>{let n=this.prepared();return n?_e(n):[]});categoryPicks=Ce({});incomeNames=uo$1(()=>this.store.data()?.incomes.map(n=>n.name)??[]);ngOnInit(){let n=this.bank.takePending();if(n){this.startBankImport(n);return}let e=this.plaid.takePending();if(e){this.startPlaidImport(e);return}this.store.isSample()&&this.route.snapshot.queryParamMap.has(`sample`)&&this.importSample()}startBankImport(n){this.reset(),this.fileName.set(zo),this.bankSync.set(n),this.templateRows.set(n.rows),this.prepare()}startPlaidImport(n){this.reset(),this.fileName.set(Vo),this.plaidSync.set(n),this.templateRows.set(n.rows),this.prepare()}async refreshPlaid(){this.error.set(null);let n=await this.plaid.refresh();if(!n.ok){this.error.set(n.message);return}this.startPlaidImport(n.value)}async refreshBank(){this.error.set(null);let n=await this.bank.sync();if(!n.ok){this.error.set(n.message);return}this.startBankImport(n.value)}onDragOver(n){n.preventDefault(),this.dragging.set(!0)}async onDrop(n){n.preventDefault(),this.dragging.set(!1);let e=n.dataTransfer?.files[0];e&&await this.readFile(e)}async onFileInput(n){let e=n.target,t=e.files?.[0];e.value=``,t&&await this.readFile(t)}async importSample(){let{csv:n}=await Ee();this.start(n,Ae)}onMapped(n){this.mapping.set(n),this.newMappingSignature.set(mn(this.headers())),this.templateRows.set(pn(this.rawRows(),n)),this.prepare()}setRemoveDoubleFeed(n){this.removeDoubleFeed.set(n),this.prepare()}confirm(){let n=this.prepared();if(!n)return;let e=De$1(n),t=this.keptDuplicates();e.skipTransactionIds=e.skipTransactionIds.filter(g=>!t.has(g));let r=this.declined();e.declinedCorrections=n.preview.corrections.map(g=>g.file.id).filter(g=>r.has(g)),e.keepExisting=n.preview.recordChanges.map(g=>g.id).filter(g=>r.has(g));let p=this.newMappingSignature(),m=this.mapping();p&&m&&(e.mapping={signature:p,mapping:m});let u=this.bankSync(),_=Object.entries(this.categoryPicks());this.store.update(g=>{let j=Re(g,n,e,this.fileName(),Za());for(let[se,vt]of _)j=YT(j,se,{category:vt});return j}),u&&this.bank.markSynced(u.end);let L=this.plaidSync();L&&this.plaid.confirm(L);let I=n.preview.corrections.filter(g=>g.kind===`amount`&&r.has(g.file.id)).length,M=n.preview.transactionsToSave+t.size+I,W=n.preview.corrections.length+n.preview.recordChanges.length-r.size;this.savedMessage.set(`Imported ${this.fileName()}: ${M} transactions saved.`+(W>0?` ${W} corrected.`:``)),this.step.set(`done`),this.prepared.set(null),this.bankSync.set(null),this.plaidSync.set(null),this.categoryPicks.set({})}reset(){this.step.set(`pick`),this.error.set(null),this.notice.set(null),this.mapping.set(null),this.newMappingSignature.set(null),this.prepared.set(null),this.removeDoubleFeed.set(!0),this.keptDuplicates.set(/* @__PURE__ */ new Set),this.declined.set(/* @__PURE__ */ new Set),this.bankSync.set(null),this.plaidSync.set(null),this.categoryPicks.set({}),this.route.snapshot.queryParamMap.has(`sample`)&&this.router.navigate([],{queryParams:{}})}async readFile(n){try{this.start(await n.text(),n.name)}catch(e){this.error.set(Zs(e,`import`))}}start(n,e){this.reset();let{headers:t,rows:r}=Aa(n);if(t.length===0||r.length===0){this.error.set(`That file has no header row or no data rows.`);return}this.fileName.set(e),this.headers.set(t),this.rawRows.set(r);let p=s(t);if(p!==`unknown`){this.notice.set(p===`v1`?Lo:null),this.templateRows.set(r),this.prepare();return}let m=this.store.data()?.columnMappings[mn(t)];if(m){this.mapping.set(m),this.templateRows.set(pn(r,m)),this.prepare();return}this.mapping.set(za(t,r.slice(0,20))),this.step.set(`map`)}prepare(){let n=this.store.data();if(!n)return;let e={importId:crypto.randomUUID(),newId:()=>crypto.randomUUID(),importDate:Za()};this.prepared.set(Fe(this.templateRows(),n,e,{removeDoubleFeed:this.removeDoubleFeed(),guessedRows:this.plaidSync()?.guessedRows})),this.keptDuplicates.set(/* @__PURE__ */ new Set),this.declined.set(/* @__PURE__ */ new Set),this.step.set(`preview`)}static ɵfac=function(e){return new(e||a)};static ɵcmp=Ei$1({type:a,selectors:[[`app-import-page`]],decls:4,vars:1,consts:[[`picker`,``],[`mat-flat-button`,``,`routerLink`,`/welcome`],[3,`headers`,`rows`,`initial`,`incomeNames`],[`role`,`alert`,1,`error`],[`role`,`note`,1,`sample-note`],[1,`page-intro`],[`routerLink`,`/help`],[`role`,`note`,`data-note`,`update-hint`,1,`callout`],[1,`drop`,3,`dragover`,`dragleave`,`drop`],[1,`row`],[`mat-flat-button`,``,`type`,`button`,3,`click`],[1,`material-icons`],[`mat-stroked-button`,``,`type`,`button`],[`type`,`file`,`accept`,`.csv,text/csv`,`hidden`,``,3,`change`],[`data-panel`,`bank-refresh`,`aria-labelledby`,`bank-refresh`,1,`panel`,`bank`],[`data-panel`,`plaid-refresh`,`aria-labelledby`,`plaid-refresh`,1,`panel`,`bank`],[`data-panel`,`bank-offer`,`aria-labelledby`,`bank-offer`,1,`panel`,`bank`],[`aria-hidden`,`true`,1,`material-icons`],[`mat-stroked-button`,``,`type`,`button`,3,`click`],[`id`,`bank-refresh`],[1,`muted`,`small`],[`mat-stroked-button`,``,`type`,`button`,`data-action`,`refresh-bank`,3,`click`,`disabled`],[`role`,`status`,1,`muted`,`small`],[`id`,`plaid-refresh`],[`mat-stroked-button`,``,`type`,`button`,`data-action`,`refresh-plaid`,3,`click`,`disabled`],[`data-field`,`refresh-wait`,1,`muted`,`small`],[`id`,`bank-offer`],[`mat-stroked-button`,``,`routerLink`,`/bank`,`data-action`,`go-bank`],[3,`confirmed`,`cancelled`,`headers`,`rows`,`initial`,`incomeNames`],[3,`rows`,`picks`],[3,`rows`,`guessed`,`picks`],[3,`declinedChange`,`removeDoubleFeedChange`,`keptDuplicatesChange`,`confirmed`,`cancelled`,`preview`,`notice`,`removeDoubleFeed`,`keptDuplicates`,`declined`],[`data-field`,`preview-source`],[`role`,`note`,`data-list`,`simplefin-messages`,1,`callout`,`warn`],[`role`,`note`,`data-list`,`plaid-failures`,1,`callout`,`warn`],[`role`,`note`,`data-note`,`changed-at-bank`,1,`callout`],[`role`,`note`,`data-note`,`plaid-note`,1,`callout`,`warn`],[3,`picksChange`,`rows`,`picks`],[3,`picksChange`,`rows`,`guessed`,`picks`],[`role`,`status`],[`aria-labelledby`,`next`,1,`panel`,`next`],[`id`,`next`],[`routerLink`,`/dashboard`],[`routerLink`,`/budget`],[`routerLink`,`/debts`],[`routerLink`,`/checkin`],[1,`row`,`start`],[`mat-flat-button`,``,`routerLink`,`/dashboard`]],template:function(e,t){e&1&&(od(0,`h1`),fP(1,`Import`),Nm(),SO(2,ro,4,0)(3,Ao,5,2)),e&2&&(MR(2),_O(t.store.isOpen()?3:2))},dependencies:[Bo,zo$1,A,GY,WY,ff,qt,Gt,zt],styles:[`[_nghost-%COMP%]{display:block;max-width:56rem;margin:0 auto}.drop[_ngcontent-%COMP%]{border:2px dashed var(--%NS%mat-sys-outline);border-radius:.75rem;padding:2rem;text-align:center}.drop.over[_ngcontent-%COMP%]{border-color:var(--%NS%mat-sys-primary);background:var(--%NS%mat-sys-primary-container)}.row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem;justify-content:center}.row.start[_ngcontent-%COMP%]{justify-content:flex-start}.next[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-medium)}.next[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.375rem}.error[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error)}.sample-note[_ngcontent-%COMP%]{padding:.625rem 1rem;border-radius:.75rem;background:var(--%NS%app-warn-bg);color:var(--%NS%app-warn-fg)}.drop[_ngcontent-%COMP%]{background:var(--%NS%app-surface)}.bank[_ngcontent-%COMP%]{margin-top:1.25rem}.bank[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:.75rem}.bank[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}app-bank-categories[_ngcontent-%COMP%]{margin-bottom:1.25rem}`]})};function Za(){let a=/* @__PURE__ */ new Date,n=e=>String(e).padStart(2,`0`);return`${a.getFullYear()}-${n(a.getMonth()+1)}-${n(a.getDate())}`}export{Ya as ImportPage};