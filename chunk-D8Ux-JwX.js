import{C as nn,E as w,F as Rs,G as bt,H as Qn,J as se,K as fn,P as Os,Q as U,R as fr,U as Xe$1,V as $n,W as Ze,X as De,Y as Bo,Z as Te,a as Rt,at as zo,c as ye,et as Xe,g as V,i as N$1,it as wt$1,m as Qt,n as Ht,nt as _t$1,o as me,p as N,q as gt,rt as lo,s as xt,t as Dt$1,y as fe,z as ha}from"./main-KT33V6QW.js";import{a as Se,i as Re,o as xe,r as Me,t as Ce}from"./chunk-DzdgVw36.js";import{n as s,t as n}from"./chunk-_rBx5Aja.js";import"./chunk-Bh4Kkur6.js";import{n as I,r as _,t as A}from"./chunk-T_MhsTch.js";import{t as i}from"./chunk-DSSv5e5z.js";import"./chunk-BSAT0nGo.js";import{c as Jn,r as An}from"./chunk-CeAhbriU.js";import{$ as Qh,$n as rT,A as Ga,An as lc,B as Jy,Br as w$1,Bt as c3,C as Ee,Cn as je,Cr as vf,D as Fi$1,Dr as wr,E as FG,Er as wn,Fr as r,H as Ky,In as mf,It as av,Jn as pr,L as JT,Mn as ln$1,Mr as xv,Nt as aT,O as GG,On as kT,P as Iv,Pr as yT,Pt as ac,Qt as di$1,R as Jc,S as ET,Sr as ve,Ut as c_,Vn as oT,Wt as cc,Xt as dc,Y as Nv,Yn as pv,Zt as df,_n as i_,a as BE,ar as s_,dn as h,dr as te,dt as W,f as CT,fr as tn,g as D,gn as iT,h as Cv,hn as iA,hr as ue,ht as X,i as A$,in as fT,ir as sT,it as Sv,jr as xi$1,jt as _u,k as GT,kn as l_,kr as wv,l as Bo$1,ln as gf,lr as tT,lt as Uh,n as $_,nn as e_,nr as rv,nt as Ri$1,or as sc,p as Cn,pn as hf,qn as pn$1,r as $e,rn as ev,s as Bh,sn as fo,tn as eA,tr as rt,v as DI,vn as ib,vt as Xh,w as Ev,wn as jo,xt as YG,y as DT,yn as ic,yt as Xs,zr as v,zt as bv}from"./chunk-DRXCYdeg.js";var ka=v((tn,nn)=>{"use strict";((a,n)=>{typeof define==`function`&&define.amd?define([],n):typeof nn==`object`&&typeof tn<`u`?nn.exports=n():a.Papa=n()})(tn,function a(){var n=typeof self<`u`?self:typeof window<`u`?window:n!==void 0?n:{},e=!n.document&&!!n.postMessage,t=n.IS_PAPA_WORKER||!1,c={},h=0,l={};function u(s){return s.charCodeAt(0)===65279?s.slice(1):s}function g(s){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine=``,this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(r){var p=qt(r);p.chunkSize=parseInt(p.chunkSize),r.step||r.chunk||(p.chunkSize=null),this._handle=new b(p),(this._handle.streamer=this)._config=p}.call(this,s),this.parseChunk=function(r,p){var y=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<y){let P=this._config.newline;P||(f=this._config.quoteChar||`"`,P=this._handle.guessLineEndings(r,f)),r=[...r.split(P).slice(y)].join(P)}this.isFirstChunk&&J(this._config.beforeFirstChunk)&&(f=this._config.beforeFirstChunk(r))!==void 0&&(r=f),this.isFirstChunk=!1,this._halted=!1;var y=this._partialLine+r,f=(this._partialLine=``,this._handle.parse(y,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(r=f.meta.cursor,y=(this._finished||(this._partialLine=y.substring(r-this._baseIndex),this._baseIndex=r),f&&f.data&&(this._rowCount+=f.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),t)n.postMessage({results:f,workerId:l.WORKER_ID,finished:y});else if(J(this._config.chunk)&&!p){if(this._config.chunk(f,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=f=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(f.data),this._completeResults.errors=this._completeResults.errors.concat(f.errors),this._completeResults.meta=f.meta),this._completed||!y||!J(this._config.complete)||f&&f.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),y||f&&f.meta.paused||this._nextChunk(),f}this._halted=!0},this._sendError=function(r){J(this._config.error)?this._config.error(r):t&&this._config.error&&n.postMessage({workerId:l.WORKER_ID,error:r,finished:!1})}}function R(s){var r;(s=s||{}).chunkSize||(s.chunkSize=l.RemoteChunkSize),g.call(this,s),this._nextChunk=e?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(p){this._input=p,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(r=new XMLHttpRequest,this._config.withCredentials&&(r.withCredentials=this._config.withCredentials),e||(r.onload=Be(this._chunkLoaded,this),r.onerror=Be(this._chunkError,this)),r.ontimeout=Be(this._chunkTimeout,this),r.open(this._config.downloadRequestBody?`POST`:`GET`,this._input,!e),this._config.downloadTimeout&&!e&&(r.timeout=this._config.downloadTimeout),this._config.downloadRequestHeaders){var p,y=this._config.downloadRequestHeaders;for(p in y)r.setRequestHeader(p,y[p])}var f;this._config.chunkSize&&(f=this._start+this._config.chunkSize-1,r.setRequestHeader(`Range`,`bytes=`+this._start+`-`+f));try{r.send(this._config.downloadRequestBody)}catch(P){this._chunkError(P.message)}e&&r.status===0&&this._chunkError()}},this._chunkLoaded=function(){r.readyState===4&&(r.status<200||400<=r.status?this._chunkError():(this._start+=this._config.chunkSize||r.responseText.length,this._finished=!this._config.chunkSize||this._start>=(p=>(p=p.getResponseHeader(`Content-Range`))!==null?parseInt(p.substring(p.lastIndexOf(`/`)+1)):-1)(r),this.parseChunk(r.responseText)))},this._chunkError=function(p){p=r.statusText||p,this._sendError(new Error(p))},this._chunkTimeout=function(){this._chunkError(`Request timed out after `+this._config.downloadTimeout+`ms`)}}function k(s){(s=s||{}).chunkSize||(s.chunkSize=l.LocalChunkSize),g.call(this,s);var r,p,y=typeof FileReader<`u`;this.stream=function(f){this._input=f,p=f.slice||f.webkitSlice||f.mozSlice,y?((r=new FileReader).onload=Be(this._chunkLoaded,this),r.onerror=Be(this._chunkError,this)):r=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var f=this._input,P=(this._config.chunkSize&&(P=Math.min(this._start+this._config.chunkSize,this._input.size),f=p.call(f,this._start,P)),r.readAsText(f,this._config.encoding));y||this._chunkLoaded({target:{result:P}})},this._chunkLoaded=function(f){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(f.target.result)},this._chunkError=function(){this._sendError(r.error)}}function I(s){var r;g.call(this,s=s||{}),this.stream=function(p){return r=p,this._nextChunk()},this._nextChunk=function(){var p,y;if(!this._finished)return p=this._config.chunkSize,r=p?(y=r.substring(0,p),r.substring(p)):(y=r,``),this._finished=!r,this.parseChunk(y)}}function W(s){g.call(this,s=s||{});var r=[],p=!0,y=!1;this.pause=function(){g.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){g.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(f){this._input=f,this._input.on(`data`,this._streamData),this._input.on(`end`,this._streamEnd),this._input.on(`error`,this._streamError)},this._checkIsFinished=function(){y&&r.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),r.length?this.parseChunk(r.shift()):p=!0},this._streamData=Be(function(f){try{r.push(typeof f==`string`?f:f.toString(this._config.encoding)),p&&(p=!1,this._checkIsFinished(),this.parseChunk(r.shift()))}catch(P){this._streamError(P)}},this),this._streamError=Be(function(f){this._streamCleanUp(),this._sendError(f)},this),this._streamEnd=Be(function(){this._streamCleanUp(),y=!0,this._streamData(``)},this),this._streamCleanUp=Be(function(){this._input.removeListener(`data`,this._streamData),this._input.removeListener(`end`,this._streamEnd),this._input.removeListener(`error`,this._streamError)},this)}function b(s){var r,p,y,f,P=Math.pow(2,53),ge=-P,De=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,Te=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,G=this,ke=0,w=0,fe=!1,S=!1,E=[],v={data:[],errors:[],meta:{}};function se(D){return s.skipEmptyLines===`greedy`?D.join(``).trim()===``:D.length===1&&D[0].length===0}function H(){if(v&&y&&(Ee(`Delimiter`,`UndetectableDelimiter`,`Unable to auto-detect delimiting character; defaulted to '`+l.DefaultDelimiter+`'`),y=!1),s.skipEmptyLines&&(v.data=v.data.filter(function(K){return!se(K)})),ee()){let K=function(pe){E.push(pe)};if(v)if(Array.isArray(v.data[0])){for(var D=0;ee()&&D<v.data.length;D++)v.data[D].forEach(K);v.data.splice(0,1)}else v.data.forEach(K)}function O(K,pe){for(var Q=s.header?{}:[],T=0;T<K.length;T++){var C=T,ue=K[T],ue=((z,$)=>(ne=>(s.dynamicTypingFunction&&s.dynamicTyping[ne]===void 0&&(s.dynamicTyping[ne]=s.dynamicTypingFunction(ne)),(s.dynamicTyping[ne]||s.dynamicTyping)===!0))(z)?$===`true`||$===`TRUE`||$!==`false`&&$!==`FALSE`&&((ne=>{if(De.test(ne)&&(ne=parseFloat(ne),ge<ne&&ne<P))return 1})($)?parseFloat($):Te.test($)?new Date($):$===``?null:$):$)(C=s.header?T>=E.length?`__parsed_extra`:E[T]:C,ue=s.transform?s.transform(ue,C):ue);C===`__parsed_extra`?(Q[C]=Q[C]||[],Q[C].push(ue)):Q[C]=ue}return s.header&&(T>E.length?Ee(`FieldMismatch`,`TooManyFields`,`Too many fields: expected `+E.length+` fields but parsed `+T,w+pe):T<E.length&&Ee(`FieldMismatch`,`TooFewFields`,`Too few fields: expected `+E.length+` fields but parsed `+T,w+pe)),Q}var X;v&&(s.header||s.dynamicTyping||s.transform)&&(X=1,!v.data.length||Array.isArray(v.data[0])?(v.data=v.data.map(O),X=v.data.length):v.data=O(v.data,0),s.header&&v.meta&&(v.meta.fields=E),w+=X)}function ee(){return s.header&&E.length===0}function Ee(D,O,X,N){D={type:D,code:O,message:X},N!==void 0&&(D.row=N),v.errors.push(D)}J(s.step)&&(f=s.step,s.step=function(D){v=D,ee()?H():(H(),v.data.length!==0&&(ke+=D.data.length,s.preview&&ke>s.preview?p.abort():(v.data=v.data[0],f(v,G))))}),this.parse=function(D,O,X){var N=s.quoteChar||`"`,N=(s.newline||(s.newline=this.guessLineEndings(D,N)),y=!1,s.delimiter?J(s.delimiter)&&(s.delimiter=s.delimiter(D),v.meta.delimiter=s.delimiter):((N=((K,pe,Q,T,C)=>{var ue,z,$,ne;C=C||[`,`,`	`,`|`,`;`,l.RECORD_SEP,l.UNIT_SEP];for(var tt=0;tt<C.length;tt++){for(var Re,kt=C[tt],le=0,Pe=0,ae=0,ve=($=void 0,new he({comments:T,delimiter:kt,newline:pe,preview:10}).parse(K)),qe=0;qe<ve.data.length;qe++)Q&&se(ve.data[qe])?ae++:(Re=ve.data[qe].length,Pe+=Re,$===void 0?$=Re:0<Re&&(le+=Math.abs(Re-$),$=Re));0<ve.data.length&&(Pe/=ve.data.length-ae),1.99<Pe&&(z===void 0||le<z||le===z&&ne<Pe)&&(z=le,ue=kt,ne=Pe)}return{successful:!!(s.delimiter=ue),bestDelimiter:ue}})(D,s.newline,s.skipEmptyLines,s.comments,s.delimitersToGuess)).successful?s.delimiter=N.bestDelimiter:(y=!0,s.delimiter=l.DefaultDelimiter),v.meta.delimiter=s.delimiter),qt(s));return N.header=ee(),s.preview&&s.header&&N.preview++,r=D,p=new he(N),v=p.parse(r,O,X),H(),fe?{meta:{paused:!0}}:v||{meta:{paused:!1}}},this.paused=function(){return fe},this.pause=function(){fe=!0,p.abort(),r=J(s.chunk)?``:r.substring(p.getCharIndex())},this.resume=function(){G.streamer._halted?(fe=!1,G.streamer.parseChunk(r,!0)):setTimeout(G.resume,3)},this.aborted=function(){return S},this.abort=function(){S=!0,p.abort(),v.meta.aborted=!0,J(s.complete)&&s.complete(v),r=``},this.guessLineEndings=function(K,N){K=K.substring(0,1048576);var N=new RegExp(j(N)+`([^]*?)`+j(N),`gm`),X=(K=K.replace(N,``)).split(`\r`),N=K.split(`
`),K=1<N.length&&N[0].length<X[0].length;if(X.length===1||K)return`
`;for(var pe=0,Q=0;Q<X.length;Q++)X[Q][0]===`
`&&pe++;return pe>=X.length/2?`\r
`:`\r`}}function j(s){return s.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function he(s){var r=(s=s||{}).delimiter,p=s.newline,y=s.comments,f=s.step,P=s.preview,ge=s.fastMode,De=null,Te=!1,G=s.quoteChar==null?`"`:s.quoteChar,ke=G;if(s.escapeChar!==void 0&&(ke=s.escapeChar),(typeof r!=`string`||-1<l.BAD_DELIMITERS.indexOf(r))&&(r=`,`),y===r)throw new Error(`Comment character same as delimiter`);y===!0?y=`#`:(typeof y!=`string`||-1<l.BAD_DELIMITERS.indexOf(y))&&(y=!1),p!==`
`&&p!==`\r`&&p!==`\r
`&&(p=`
`);var w=0,fe=!1;this.parse=function(S,E,v){if(typeof S!=`string`)throw new Error(`Input must be a string`);var se=S.length,H=r.length,ee=p.length,Ee=y.length,D=J(f),O=[],X=[],N=[],K=w=0;if(!S)return le();if(ge||ge!==!1&&S.indexOf(G)===-1){for(var pe=S.split(p),Q=0;Q<pe.length;Q++){if(N=pe[Q],w+=N.length,Q!==pe.length-1)w+=p.length;else if(v)return le();if(!y||N.substring(0,Ee)!==y){if(D){if(O=[],ne(N.split(r)),Pe(),fe)return le()}else ne(N.split(r));if(P&&P<=Q)return O=O.slice(0,P),le(!0)}}return le()}for(var T=S.indexOf(r,w),C=S.indexOf(p,w),ue=new RegExp(j(ke)+j(G),`g`),z=S.indexOf(G,w);;)if(S[w]===G)for(z=w,w++;;){if((z=S.indexOf(G,z+1))===-1)return v||X.push({type:`Quotes`,code:`MissingQuotes`,message:`Quoted field unterminated`,row:O.length,index:w}),Re();if(z===se-1)return Re(S.substring(w,z).replace(ue,G));if(G===ke&&S[z+1]===ke)z++;else if(G===ke||z===0||S[z-1]!==ke){T!==-1&&T<z+1&&(T=S.indexOf(r,z+1));var $=tt((C=C!==-1&&C<z+1?S.indexOf(p,z+1):C)===-1?T:Math.min(T,C));if(S.substr(z+1+$,H)===r){N.push(S.substring(w,z).replace(ue,G)),S[w=z+1+$+H]!==G&&(z=S.indexOf(G,w)),T!==-1&&T<w&&(T=S.indexOf(r,w)),C!==-1&&C<w&&(C=S.indexOf(p,w));break}if($=tt(C),S.substring(z+1+$,z+1+$+ee)===p){if(N.push(S.substring(w,z).replace(ue,G)),kt(z+1+$+ee),T!==-1&&T<w&&(T=S.indexOf(r,w)),z=S.indexOf(G,w),D&&(Pe(),fe))return le();if(P&&O.length>=P)return le(!0);break}X.push({type:`Quotes`,code:`InvalidQuotes`,message:`Trailing quote on quoted field is malformed`,row:O.length,index:w}),z++}}else if(y&&N.length===0&&S.substring(w,w+Ee)===y){if(C===-1)return le();w=C+ee,C=S.indexOf(p,w),T!==-1&&T<w&&(T=S.indexOf(r,w))}else if(T!==-1&&(T<C||C===-1))N.push(S.substring(w,T)),w=T+H,T=S.indexOf(r,w);else{if(C===-1)break;if(N.push(S.substring(w,C)),kt(C+ee),D&&(Pe(),fe))return le();if(P&&O.length>=P)return le(!0)}return Re();function ne(ae){O.push(ae),K=w}function tt(ae){var ve=0;return ve=ae!==-1&&(ae=S.substring(z+1,ae))&&ae.trim()===``?ae.length:ve}function Re(ae){return v||(ae===void 0&&(ae=S.substring(w)),N.push(ae),w=se,ne(N),D&&Pe()),le()}function kt(ae){w=ae,ne(N),N=[],C=S.indexOf(p,w)}function le(ae){if(s.header&&!E&&O.length&&!Te){var ve=O[0],qe=Object.create(null),jt=new Set(ve);let fn=!1;for(let nt=0;nt<ve.length;nt++){let Ae=u(ve[nt]);if(qe[Ae=J(s.transformHeader)?s.transformHeader(Ae,nt):Ae]){let vt,_n=qe[Ae];for(;vt=Ae+`_`+_n,_n++,jt.has(vt););jt.add(vt),ve[nt]=vt,qe[Ae]++,fn=!0,(De=De===null?{}:De)[vt]=Ae}else qe[Ae]=1,ve[nt]=Ae;jt.add(Ae)}fn&&console.warn(`Duplicate headers found and renamed.`),Te=!0}return{data:O,errors:X,meta:{delimiter:r,linebreak:p,aborted:fe,truncated:!!ae,cursor:K+(E||0),renamedHeaders:De}}}function Pe(){f(le()),O=[],X=[]}},this.abort=function(){fe=!0},this.getCharIndex=function(){return w}}function Bt(s){var r=s.data,p=c[r.workerId],y=!1;if(r.error)p.userError(r.error,r.file);else if(r.results&&r.results.data){var f={abort:function(){y=!0,bn(r.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:gn,resume:gn};if(J(p.userStep)){for(var P=0;P<r.results.data.length&&(p.userStep({data:r.results.data[P],errors:r.results.errors,meta:r.results.meta},f),!y);P++);delete r.results}else J(p.userChunk)&&(p.userChunk(r.results,f,r.file),delete r.results)}r.finished&&!y&&bn(r.workerId,r.results)}function bn(s,r){var p=c[s];J(p.userComplete)&&p.userComplete(r),p.terminate(),delete c[s]}function gn(){throw new Error(`Not implemented.`)}function qt(s){if(typeof s!=`object`||s===null)return s;var r,p=Array.isArray(s)?[]:{};for(r in s)p[r]=qt(s[r]);return p}function Be(s,r){return function(){s.apply(r,arguments)}}function J(s){return typeof s==`function`}return l.parse=function(s,r){var p=(r=r||{}).dynamicTyping||!1;if(J(p)&&(r.dynamicTypingFunction=p,p={}),r.dynamicTyping=p,r.transform=!!J(r.transform)&&r.transform,r.downloadTimeout!==void 0){var p=parseInt(r.downloadTimeout);if(isNaN(p))throw new Error(`Config downloadTimeout value (`+r.downloadTimeout+`) not parsable by parseInt(val).`);r.downloadTimeout=p}if(!r.worker||!l.WORKERS_SUPPORTED)return p=null,l.NODE_STREAM_INPUT,typeof s==`string`?(s=u(s),p=new(r.download?R:I)(r)):s.readable===!0&&J(s.read)&&J(s.on)?p=new W(r):(n.File&&s instanceof File||s instanceof Object)&&(p=new k(r)),p.stream(s);(p=(()=>{var y;return!!l.WORKERS_SUPPORTED&&(y=(()=>{var f=n.URL||n.webkitURL||null,P=a.toString();return l.BLOB_URL||(l.BLOB_URL=f.createObjectURL(new Blob([`var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; `,`(`,P,`)();`],{type:`text/javascript`})))})(),(y=new n.Worker(y)).onmessage=Bt,y.id=h++,c[y.id]=y)})()).userStep=r.step,p.userChunk=r.chunk,p.userComplete=r.complete,p.userError=r.error,r.step=J(r.step),r.chunk=J(r.chunk),r.complete=J(r.complete),r.error=J(r.error),delete r.worker,p.postMessage({input:s,config:r,workerId:p.id})},l.unparse=function(s,r){var p=!1,y=!0,f=`,`,P=`\r
`,ge=`"`,De=ge+ge,Te=!1,G=null,ke=!1,w=((()=>{if(typeof r==`object`){if(typeof r.delimiter!=`string`||l.BAD_DELIMITERS.filter(function(E){return r.delimiter.indexOf(E)!==-1}).length||(f=r.delimiter),typeof r.quotes!=`boolean`&&typeof r.quotes!=`function`&&!Array.isArray(r.quotes)||(p=r.quotes),typeof r.skipEmptyLines!=`boolean`&&typeof r.skipEmptyLines!=`string`||(Te=r.skipEmptyLines),typeof r.newline==`string`&&(P=r.newline),typeof r.quoteChar==`string`&&(ge=r.quoteChar,De=ge+ge),typeof r.header==`boolean`&&(y=r.header),Array.isArray(r.columns)){if(r.columns.length===0)throw new Error(`Option columns is empty`);G=r.columns}r.escapeChar!==void 0&&(De=r.escapeChar+ge),r.escapeFormulae instanceof RegExp?ke=r.escapeFormulae:typeof r.escapeFormulae==`boolean`&&r.escapeFormulae&&(ke=/^[=+\-@\t\r].*$/)}})(),new RegExp(j(ge),`g`));if(typeof s==`string`&&(s=JSON.parse(s)),Array.isArray(s)){if(!s.length)return fe(G,s,Te);if(Array.isArray(s[0]))return fe(null,s,Te);if(typeof s[0]==`object`)return fe(G||Object.keys(s[0]),s,Te)}else if(typeof s==`object`)return typeof s.data==`string`&&(s.data=JSON.parse(s.data)),Array.isArray(s.data)&&(s.fields||(s.fields=s.meta&&s.meta.fields||G),s.fields||(s.fields=Array.isArray(s.data[0])?s.fields:typeof s.data[0]==`object`?Object.keys(s.data[0]):[]),Array.isArray(s.data[0])||typeof s.data[0]==`object`||(s.data=[s.data])),fe(s.fields||[],s.data||[],Te);throw new Error(`Unable to serialize unrecognized input`);function fe(E,v,se){var H=``,ee=(typeof E==`string`&&(E=JSON.parse(E)),typeof v==`string`&&(v=JSON.parse(v)),Array.isArray(E)&&0<E.length),Ee=!Array.isArray(v[0]);if(ee&&y){for(var D=0;D<E.length;D++)0<D&&(H+=f),H+=S(E[D],D);0<v.length&&(H+=P)}for(var O=0;O<v.length;O++){var X=(ee?E:v[O]).length,N=!1,K=ee?Object.keys(v[O]).length===0:v[O].length===0;if(se&&!ee&&(N=se===`greedy`?v[O].join(``).trim()===``:v[O].length===1&&(v[O][0]==null||v[O][0].length===0)),se===`greedy`&&ee){for(var pe=[],Q=0;Q<X;Q++){var T=Ee?E[Q]:Q;pe.push(v[O][T])}N=pe.join(``).trim()===``}if(!N){for(var C=0;C<X;C++){0<C&&!K&&(H+=f);var ue=ee&&Ee?E[C]:C;H+=S(v[O][ue],C)}O<v.length-1&&(!se||0<X&&!K)&&(H+=P)}}return H}function S(E,v){var se,H,ee;return E==null?``:E.constructor===Date?isNaN(E.getTime())?``:E.toISOString():(ee=!1,se=E.toString(),ke&&typeof E!=`number`&&typeof E!=`bigint`&&typeof E!=`boolean`&&ke.test(se)&&(E=se=`'`+se,ee=!0),H=se.replace(w,De),(ee=ee||p===!0||typeof p==`function`&&p(E,v)||Array.isArray(p)&&p[v]||((Ee,D)=>{for(var O=0;O<D.length;O++)if(-1<Ee.indexOf(D[O]))return!0;return!1})(H,l.BAD_DELIMITERS)||-1<H.indexOf(f)||-1<se.indexOf(ge)||H.charAt(0)===` `||H.charAt(H.length-1)===` `)?ge+H+ge:H)}},l.RECORD_SEP=``,l.UNIT_SEP=``,l.BYTE_ORDER_MARK=`﻿`,l.BAD_DELIMITERS=[`\r`,`
`,`"`,l.BYTE_ORDER_MARK],l.WORKERS_SUPPORTED=!e&&!!n.Worker,l.NODE_STREAM_INPUT=1,l.LocalChunkSize=10485760,l.RemoteChunkSize=5242880,l.DefaultDelimiter=`,`,l.Parser=he,l.ParserHandle=b,l.NetworkStreamer=R,l.FileStreamer=k,l.StringStreamer=I,l.ReadableStreamStreamer=W,t&&(n.onmessage=function(s){s=s.data,l.WORKER_ID===void 0&&s&&(l.WORKER_ID=s.workerId),typeof s.input==`string`?n.postMessage({workerId:l.WORKER_ID,results:l.parse(s.input,s.config),finished:!0}):(n.File&&s.input instanceof File||s.input instanceof Object)&&(s=l.parse(s.input,s.config))&&n.postMessage({workerId:l.WORKER_ID,results:s,finished:!0})}),(R.prototype=Object.create(g.prototype)).constructor=R,(k.prototype=Object.create(g.prototype)).constructor=k,(I.prototype=Object.create(I.prototype)).constructor=I,(W.prototype=Object.create(g.prototype)).constructor=W,l})});var va=w$1(ka());function ya(a){let n=a.charCodeAt(0)===65279?a.slice(1):a,e=va.default.parse(n,{header:!0,skipEmptyLines:`greedy`,transformHeader:h=>h.trim(),transform:h=>h.trim()}),t=e.meta.fields??[];return{headers:t,rows:e.data.map(h=>{let l={};for(let u of t)l[u]=h[u]??``;return l})}}function an(a){return a.map(n=>n.trim().toLowerCase()).join(`|`)}var Ba={record_type:[`record_type`,`record type`],date:[`date`,`transaction date`,`posted date`,`posting date`,`trans date`],description:[`description`,`name`,`merchant`,`payee`,`memo`,`details`],amount:[`amount`,`transaction amount`,`value`],category:[`category`,`categories`],account:[`account`,`account name`,`account_name`],notes:[`notes`,`note`],account_type:[`account_type`,`account type`]};function xa(a,n$1){let e={},t=/* @__PURE__ */ new Set,c=new Map(a.map(l=>[l.trim().toLowerCase(),l]));for(let l of n){let g=(Ba[l]??[l]).map(R=>c.get(R)).find(R=>R!==void 0&&!t.has(R));g!==void 0&&(e[l]=g,t.add(g))}let h=(l,u)=>{if(e[l]!==void 0)return;let g=a.find(R=>{if(t.has(R))return!1;let k=n$1.map(I=>I[R]??``).filter(I=>I!==``);return k.length>0&&k.every(u)});g!==void 0&&(e[l]=g,t.add(g))};return h(`date`,l=>An(l)!==null),h(`amount`,l=>Jn(l)!==null),{columns:e,flipSign:!1}}function wa(a,n,e){let t=u=>n.columns[u],c=e.map(u=>u.trim().toUpperCase()).filter(u=>u!==``),h=0,l=0;for(let u of a){let g=(u[t(`category`)??``]??``).trim().toLowerCase(),R=(u[t(`description`)??``]??``).toUpperCase(),k=g===`income`||c.some(W=>R.includes(W)),I=Jn(u[t(`amount`)??``]??``);!k||I===null||(h++,I<0&&l++)}return h===0?0:l/h}function on(a,n$2){return a.map(e=>{let t={};for(let c of n){let h=n$2.columns[c];t[c]=h===void 0?``:(e[h]??``).trim()}return t.record_type===``&&(t.record_type=`transaction`),n$2.flipSign&&(t.amount=qa(t.amount)),t})}function qa(a){let n=Jn(a);if(n===null)return a;let e=-n,t=Math.abs(e),c=`${Math.trunc(t/100)}.${String(t%100).padStart(2,`0`)}`;return e<0?`-`+c:c}var Dt=(()=>{class a{labelPosition=`after`;static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){return Ri$1({type:a,selectors:[[``,`mat-internal-form-field`,``]],hostAttrs:[1,`mdc-form-field`,`mat-internal-form-field`],hostVars:2,hostBindings:function(c,h){c&2&&pv(`mdc-form-field--align-end`,h.labelPosition===`before`)},inputs:{labelPosition:`labelPosition`},ngContentSelectors:[`*`],decls:1,vars:0,template:function(c,h){c&1&&(DT(),ET(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2})})()}return a})();var rn={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var ja=new D(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>rn});var be=(function(a){return a[a.Init=0]=`Init`,a[a.Checked=1]=`Checked`,a[a.Unchecked=2]=`Unchecked`,a[a.Indeterminate=3]=`Indeterminate`,a})(be||{});var cn=class{source;checked};var et=(()=>{class a{_elementRef=h(rt);_changeDetectorRef=h(fo);_ngZone=h(Ee);_animationsDisabled=U();_options=h(ja,{optional:!0});_injector=h(ue);_signalFormField=null;focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new cn;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new ve;indeterminateChange=new ve;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=be.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){h(eA).load(Te);let e=h(new lc(`tabindex`),{optional:!0});this._options=this._options||rn,this.color=this._options.color||rn.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=h(BE).getId(`mat-mdc-checkbox-`),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngOnInit(){this._signalFormField=this._injector.get(fn,void 0,{optional:!0,self:!0})}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(be.Indeterminate):this._transitionCheckState(this.checked?be.Checked:be.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=te(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0&&!this._signalFormField?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,c=this._getAnimationTargetElement();if(!(t===e||!c)&&(this._currentAnimationClass&&c.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){c.classList.add(this._currentAnimationClass);let h=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{c.classList.remove(h)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!==`noop`?(this.indeterminate&&e!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?be.Checked:be.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return``;switch(e){case be.Init:if(t===be.Checked)return this._animationClasses.uncheckedToChecked;if(t==be.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case be.Unchecked:return t===be.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case be.Checked:return t===be.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case be.Indeterminate:return t===be.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`input`];return Ri$1({type:a,selectors:[[`mat-checkbox`]],viewQuery:function(h,l){if(h&1&&av(e,5),h&2){let u;hf(u=gf())&&(l._inputElement=u.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(h,l){h&2&&(rv(`id`,l.id),xi$1(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),kT(l.color?`mat-`+l.color:`mat-accent`),pv(`_mat-animation-noopable`,l._animationsDisabled)(`mdc-checkbox--disabled`,l.disabled)(`mat-mdc-checkbox-disabled`,l.disabled)(`mat-mdc-checkbox-checked`,l.checked)(`mat-mdc-checkbox-disabled-interactive`,l.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,Fi$1],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,Fi$1],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,Fi$1],tabIndex:[2,`tabIndex`,`tabIndex`,c=>c==null?void 0:$_(c)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Fi$1],checked:[2,`checked`,`checked`,Fi$1],disabled:[2,`disabled`,`disabled`,Fi$1],indeterminate:[2,`indeterminate`,`indeterminate`,Fi$1]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[xv([{provide:w,useExisting:Xs(()=>a),multi:!0},{provide:N,useExisting:a,multi:!0}]),Cn],ngContentSelectors:[`*`],decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(h,l){if(h&1&&(DT(),Ga(0,`label`,3),sc(`click`,function(g){return l._preventBubblingFromLabel(g)}),Ga(1,`span`,4,0),ic(3,`span`,5),Ga(4,`input`,6,1),sc(`blur`,function(){return l._onBlur()})(`click`,function(){return l._onInputClick()})(`change`,function(g){return l._onInteractionEvent(g)}),df(),ic(6,`span`,7),Ga(7,`span`,8),Qh(),Ga(8,`svg`,9),ic(9,`path`,10),df(),Xh(),ic(10,`span`,11),df(),ic(11,`span`,12),df(),Ga(12,`span`,13,2),ET(14),df()()),h&2){let u=CT(2);ev(`labelPosition`,l.labelPosition)(`for`,l.inputId),ib(4),pv(`mdc-checkbox--selected`,l.checked),ev(`checked`,l.checked)(`indeterminate`,l.indeterminate)(`disabled`,l.disabled&&!l.disabledInteractive)(`id`,l.inputId)(`required`,l.required)(`tabIndex`,l.disabled&&!l.disabledInteractive?-1:l.tabIndex),xi$1(`aria-label`,l.ariaLabel||null)(`aria-labelledby`,l.ariaLabelledby)(`aria-describedby`,l.ariaDescribedby)(`aria-checked`,l.indeterminate?`mixed`:null)(`aria-controls`,l.ariaControls)(`aria-disabled`,l.disabled&&l.disabledInteractive?!0:null)(`aria-expanded`,l.ariaExpanded)(`aria-owns`,l.ariaOwns)(`name`,l.name)(`value`,l.value),ib(7),ev(`matRippleTrigger`,u)(`matRippleDisabled`,l.disableRipple||l.disabled)(`matRippleCentered`,!0)}},dependencies:[lo,Dt],styles:[`.mdc-checkbox {
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
`],encapsulation:2})})()}return a})();var ft=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=pr({type:a});static ɵinj=pn$1({imports:[et,GG]})}return a})();var wt=class{_multiple;_emitChanges;compareWith;_selection=/* @__PURE__ */ new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new X;bulk={select:n=>this._select(n),deselect:n=>this._deselect(n),setSelection:n=>this._setSelection(n)};constructor(n=!1,e,t=!0,c){this._multiple=n,this._emitChanges=t,this.compareWith=c,e&&e.length&&(n?e.forEach(h=>this._markSelected(h)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){return this._select(n)}deselect(...n){return this._deselect(n)}setSelection(...n){return this._setSelection(n)}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_select(n){this._verifyValueAssignment(n),n.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(n){this._verifyValueAssignment(n),n.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(n){this._verifyValueAssignment(n);let e=this.selected,t=new Set(n.map(h=>this._getConcreteValue(h)));n.forEach(h=>this._markSelected(h)),e.filter(h=>!t.has(this._getConcreteValue(h,t))).forEach(h=>this._unmarkSelected(h));let c=this._hasQueuedChanges();return this._emitChangeEvent(),c}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(n,t))return t;return n}else return n}};var Sa=(()=>{class a{_animationsDisabled=U();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(t){return new(t||a)};static ɵcmp=Ri$1({type:a,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(t,c){t&2&&pv(`mat-pseudo-checkbox-indeterminate`,c.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,c.state===`checked`)(`mat-pseudo-checkbox-disabled`,c.disabled)(`mat-pseudo-checkbox-minimal`,c.appearance===`minimal`)(`mat-pseudo-checkbox-full`,c.appearance===`full`)(`_mat-animation-noopable`,c._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(t,c){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2})}return a})();var dn=new D(`MAT_OPTION_PARENT_COMPONENT`);var mn=new D(`MatOptgroup`);var ln=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}};var _t=(()=>{class a{_element=h(rt);_changeDetectorRef=h(fo);_parent=h(dn,{optional:!0});group=h(mn,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=h(BE).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=te(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new ve;_text;_stateChanges=new X;constructor(){let e=h(eA);e.load(Te),e.load(FG),this._signalDisableRipple=!!this._parent&&di$1(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let c=this._getHostElement();typeof c.focus==`function`&&c.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!c3(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new ln(this,e))}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`text`],t=[[[`mat-icon`]],`*`],c=[`mat-icon`,`*`];function h(g,R){if(g&1&&ic(0,`mat-pseudo-checkbox`,1),g&2){let k=yT();ev(`disabled`,k.disabled)(`state`,k.selected?`checked`:`unchecked`)}}function l(g,R){if(g&1&&ic(0,`mat-pseudo-checkbox`,3),g&2){let k=yT();ev(`disabled`,k.disabled)}}function u(g,R){if(g&1&&(Ga(0,`span`,4),GT(1),df()),g&2){let k=yT();ib(),mf(`(`,k.group.label,`)`)}}return Ri$1({type:a,selectors:[[`mat-option`]],viewQuery:function(R,k){if(R&1&&av(e,7),R&2){let I;hf(I=gf())&&(k._text=I.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(R,k){R&1&&sc(`click`,function(){return k._selectViaInteraction()})(`keydown`,function(W){return k._handleKeydown(W)}),R&2&&(rv(`id`,k.id),xi$1(`aria-selected`,k.selected)(`aria-disabled`,k.disabled.toString()),pv(`mdc-list-item--selected`,k.selected)(`mat-mdc-option-multiple`,k.multiple)(`mat-mdc-option-active`,k.active)(`mdc-list-item--disabled`,k.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,Fi$1]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:c,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(R,k){R&1&&(DT(t),tT(0,h,1,2,`mat-pseudo-checkbox`,1),ET(1),Ga(2,`span`,2,0),ET(4,1),df(),tT(5,l,1,1,`mat-pseudo-checkbox`,3),tT(6,u,2,1,`span`,4),ic(7,`div`,5)),R&2&&(rT(k.multiple?0:-1),ib(5),rT(!k.multiple&&k.selected&&!k.hideSingleSelectionIndicator?5:-1),ib(),rT(k.group&&k.group._inert?6:-1),ib(),ev(`matRippleTrigger`,k._getHostElement())(`matRippleDisabled`,k.disabled||k.disableRipple))},dependencies:[Sa,lo],styles:[`.mat-mdc-option {
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
`],encapsulation:2})})()}return a})();function Ca(a,n,e){if(e.length){let t=n.toArray(),c=e.toArray(),h=0;for(let l=0;l<a+1;l++)t[l].group&&t[l].group===c[h]&&h++;return h}return 0}function Ia(a,n,e,t){return a<e?a:a+n>e+t?Math.max(0,a-t+n):e}var Na=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=pr({type:a});static ɵinj=pn$1({imports:[GG]})}return a})();var hn=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=pr({type:a});static ɵinj=pn$1({imports:[De,Na,_t,GG]})}return a})();var Ka=new D(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let a=h(ue);return()=>xt(a)}});var $a=new D(`MAT_SELECT_CONFIG`);var Xa=new D(`MatSelectTrigger`);var pn=class{source;value;constructor(n,e){this.source=n,this.value=e}};var Oa=(()=>{class a{_viewportRuler=h(N$1);_changeDetectorRef=h(fo);_elementRef=h(rt);_dir=h(iA,{optional:!0});_idGenerator=h(BE);_renderer=h(wn);_parentFormField=h(bt,{optional:!0});ngControl=h(V,{self:!0,optional:!0});_liveAnnouncer=h(Xe);_defaultOptions=h($a,{optional:!0});_animationsDisabled=U();_popoverLocation;_initialized=new X;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let c=this.panel.nativeElement,h=Ca(e,this.options,this.optionGroups),l=t._getHostElement();e===0&&h===1?c.scrollTop=0:c.scrollTop=Ia(l.offsetTop,l.offsetHeight,c.scrollTop,c.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new pn(this,e)}_scrollStrategyFactory=h(Ka);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new X;_errorStateTracker;stateChanges=new X;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=te(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(fe.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=jo(()=>{let e=this.options;return e?e.changes.pipe(_u(e),$e(()=>DI(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe($e(()=>this.optionSelectionChanges))});openedChange=new ve;_openedStream=this.openedChange.pipe(je(e=>e),W(()=>{}));_closedStream=this.openedChange.pipe(je(e=>!e),W(()=>{}));selectionChange=new ve;valueChange=new ve;constructor(){let e=h(Qn),t=h(Qt,{optional:!0}),c=h(nn,{optional:!0}),h$1=h(new lc(`tabindex`),{optional:!0}),l=h(Dt$1,{optional:!0}),u=h(fn,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Ze(e,u||this.ngControl,c,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=h$1==null?0:parseInt(h$1)||0,this._popoverLocation=l?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new wt(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Bo$1(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Bo$1(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(_u(null),Bo$1(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let c=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?c.setAttribute(`aria-labelledby`,e):c.removeAttribute(`aria-labelledby`)}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(ln$1(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(c),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,`animationend`,h=>{h.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),c=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,c=t===40||t===38||t===37||t===39,h=t===13||t===32,l=this._keyManager;if(!l.isTyping()&&h&&!c3(e)||(this.multiple||e.altKey)&&c)e.preventDefault(),this.open();else if(!this.multiple){let u=this.selected;l.onKeydown(e);let g=this.selected;g&&u!==g&&this._liveAnnouncer.announce(g.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,c=e.keyCode,h=c===40||c===38,l=t.isTyping();if(h&&e.altKey)e.preventDefault(),this.close();else if(!l&&(c===13||c===32)&&t.activeItem&&!c3(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!l&&this._multiple&&c===65&&e.ctrlKey){e.preventDefault();let u=this.options.some(g=>!g.disabled&&!g.selected);this.options.forEach(g=>{g.disabled||(u?g.select():g.deselect())})}else{let u=t.activeItemIndex;t.onKeydown(e),this._multiple&&h&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==u&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!c3(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(c=>{if(this._selectionModel.isSelected(c))return!1;try{return(c.value!=null||this.canSelectNullableOptions)&&this._compareWith(c.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof Rt?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new wt$1(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=DI(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Bo$1(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),DI(...this.options.map(t=>t._stateChanges)).pipe(Bo$1(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let c=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(c!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),c!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,c)=>this.sortComparator?this.sortComparator(t,c,e):e.indexOf(t)-e.indexOf(c)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(c=>c.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+` `:``;return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(e){let t=YG(e);t&&(t.tagName===`MAT-OPTION`||t.classList.contains(`cdk-overlay-backdrop`)||t.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`trigger`],t=[`panel`],c=[[[`mat-select-trigger`]],`*`],h=[`mat-select-trigger`,`*`];function l(I,W){if(I&1&&(Ga(0,`span`,4),GT(1),df()),I&2){let b=yT();ib(),Ev(b.placeholder)}}function u(I,W){I&1&&ET(0)}function g(I,W){if(I&1&&(Ga(0,`span`,11),GT(1),df()),I&2){let b=yT(2);ib(),Ev(b.triggerValue)}}function R(I,W){if(I&1&&(Ga(0,`span`,5),tT(1,u,1,0)(2,g,2,1,`span`,11),df()),I&2){let b=yT();ib(),rT(b.customTrigger?1:2)}}function k(I,W){if(I&1){let b=fT();Ga(0,`div`,12,1),sc(`keydown`,function(he){Uh(b);let Bt=yT();return Bh(Bt._handleKeydown(he))}),ET(2,1),df()}if(I&2){let b=yT();kT(b.panelClass),pv(`mat-select-panel-animations-enabled`,!b._animationsDisabled)(`mat-primary`,b._parentFormField?.color===`primary`)(`mat-accent`,b._parentFormField?.color===`accent`)(`mat-warn`,b._parentFormField?.color===`warn`)(`mat-undefined`,!b._parentFormField?.color),xi$1(`id`,b.id+`-panel`)(`aria-multiselectable`,b.multiple)(`aria-label`,b.ariaLabel||null)(`aria-labelledby`,b._getPanelAriaLabelledby())}}return Ri$1({type:a,selectors:[[`mat-select`]],contentQueries:function(W,b,j){if(W&1&&ac(j,Xa,5)(j,_t,5)(j,mn,5),W&2){let he;hf(he=gf())&&(b.customTrigger=he.first),hf(he=gf())&&(b.options=he),hf(he=gf())&&(b.optionGroups=he)}},viewQuery:function(W,b){if(W&1&&av(e,5)(t,5)(ye,5),W&2){let j;hf(j=gf())&&(b.trigger=j.first),hf(j=gf())&&(b.panel=j.first),hf(j=gf())&&(b._overlayDir=j.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(W,b){W&1&&sc(`keydown`,function(he){return b._handleKeydown(he)})(`focus`,function(){return b._onFocus()})(`blur`,function(){return b._onBlur()}),W&2&&(xi$1(`id`,b.id)(`tabindex`,b.disabled?-1:b.tabIndex)(`aria-controls`,b.panelOpen?b.id+`-panel`:null)(`aria-expanded`,b.panelOpen)(`aria-label`,b.ariaLabel||null)(`aria-required`,b.required.toString())(`aria-disabled`,b.disabled.toString())(`aria-invalid`,b.errorState)(`aria-activedescendant`,b._getAriaActiveDescendant()),pv(`mat-mdc-select-disabled`,b.disabled)(`mat-mdc-select-invalid`,b.errorState)(`mat-mdc-select-required`,b.required)(`mat-mdc-select-empty`,b.empty)(`mat-mdc-select-multiple`,b.multiple)(`mat-select-open`,b.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,Fi$1],disableRipple:[2,`disableRipple`,`disableRipple`,Fi$1],tabIndex:[2,`tabIndex`,`tabIndex`,I=>I==null?0:$_(I)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,Fi$1],placeholder:`placeholder`,required:[2,`required`,`required`,Fi$1],multiple:[2,`multiple`,`multiple`,Fi$1],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,Fi$1],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,$_],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,Fi$1]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[xv([{provide:gt,useExisting:a},{provide:dn,useExisting:a}]),Cn],ngContentSelectors:h,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(W,b){if(W&1&&(DT(c),Ga(0,`div`,2,0),sc(`click`,function(){return b.open()}),Ga(3,`div`,3),tT(4,l,2,1,`span`,4)(5,R,3,1,`span`,5),df(),Ga(6,`div`,6)(7,`div`,7),Qh(),Ga(8,`svg`,8),ic(9,`path`,9),df()()()(),Ky(10,k,3,16,`ng-template`,10),sc(`detach`,function(){return b.close()})(`backdropClick`,function(){return b.close()})(`overlayKeydown`,function(he){return b._handleOverlayKeydown(he)})),W&2){let j=CT(1);ib(3),xi$1(`id`,b._valueId),ib(),rT(b.empty?4:5),ib(6),ev(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,b._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,b._scrollStrategy)(`cdkConnectedOverlayOrigin`,b._preferredOverlayOrigin||j)(`cdkConnectedOverlayPositions`,b._positions)(`cdkConnectedOverlayWidth`,b._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,b._popoverLocation)}},dependencies:[Rt,ye],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2})})()}return a})();var Da=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=pr({type:a});static ɵinj=pn$1({imports:[me,hn,GG,Ht,$n,hn]})}return a})();var Ya=(a,n)=>n.field;function Za(a,n){if(a&1&&(Ga(0,`mat-option`,8),GT(1),df()),a&2){let e=n.$implicit;ev(`value`,e),ib(),Ev(e)}}function Ja(a,n){if(a&1){let e=fT();Ga(0,`mat-form-field`,1)(1,`mat-label`),GT(2),df(),Ga(3,`mat-select`,6),sc(`valueChange`,function(c){let h=Uh(e).$implicit,l=yT();return Bh(l.setColumn(h.field,c))}),Ga(4,`mat-option`,7),GT(5,`(not in this file)`),df(),sT(6,Za,2,2,`mat-option`,8,iT),df()()}if(a&2){let e=n.$implicit,t=yT();ib(2),Iv(``,e.label,``,e.required?` *`:``),ib(),ev(`value`,t.columns()[e.field]??``),ib(3),aT(t.headers())}}function ei(a,n){if(a&1){let e=fT();Ga(0,`div`,2)(1,`p`),GT(2,` Most income rows in this file are negative. This file seems to use positive = money out (some budgeting apps do). Flip signs? `),df(),Ga(3,`mat-checkbox`,9),sc(`change`,function(c){Uh(e);let h=yT();return Bh(h.flipSign.set(c.checked))}),GT(4,` Yes, flip signs so money out is negative `),df()()}if(a&2){let e=yT();ib(3),ev(`checked`,e.flipSign())}}var Ta=[{field:`date`,label:`Date`,required:!0},{field:`description`,label:`Description (merchant)`,required:!0},{field:`amount`,label:`Amount`,required:!0},{field:`category`,label:`Category`,required:!1},{field:`account`,label:`Account`,required:!1},{field:`account_type`,label:`Account type`,required:!1},{field:`link`,label:`Link (debt or income name)`,required:!1},{field:`notes`,label:`Notes`,required:!1}];var ti=.8;var Pt=class a{headers=dc.required();rows=dc.required();initial=dc.required();incomeNames=dc([]);confirmed=A$();cancelled=A$();fields=Ta;columns=vf(()=>r({},this.initial().columns));flipSign=vf(()=>this.initial().flipSign);complete=cc(()=>Ta.every(n=>!n.required||this.columns()[n.field]));proposeFlip=cc(()=>wa(this.rows(),{columns:this.columns(),flipSign:!1},this.incomeNames())>=ti);setColumn(n,e){this.columns.update(t=>{let c=r({},t);return e?c[n]=e:delete c[n],c})}confirm(){this.confirmed.emit({columns:this.columns(),flipSign:this.proposeFlip()&&this.flipSign()})}static ɵfac=function(e){return new(e||a)};static ɵcmp=Ri$1({type:a,selectors:[[`app-column-mapper`]],inputs:{headers:[1,`headers`],rows:[1,`rows`],initial:[1,`initial`],incomeNames:[1,`incomeNames`]},outputs:{confirmed:`confirmed`,cancelled:`cancelled`},decls:13,vars:2,consts:[[1,`grid`],[`appearance`,`outline`],[`role`,`status`,1,`sign`],[1,`actions`],[`mat-flat-button`,``,`type`,`button`,3,`click`,`disabled`],[`mat-button`,``,`type`,`button`,3,`click`],[3,`valueChange`,`value`],[`value`,``],[3,`value`],[3,`change`,`checked`]],template:function(e,t){e&1&&(Ga(0,`h2`),GT(1,`Match your columns`),df(),Ga(2,`p`),GT(3,` This file is not in the template format. Pick which of its columns holds each value. Your choice is remembered for files with the same columns. `),df(),Ga(4,`div`,0),sT(5,Ja,8,3,`mat-form-field`,1,Ya),df(),tT(7,ei,5,1,`div`,2),Ga(8,`div`,3)(9,`button`,4),sc(`click`,function(){return t.confirm()}),GT(10,` Use these columns `),df(),Ga(11,`button`,5),sc(`click`,function(){return t.cancelled.emit()}),GT(12,`Cancel`),df()()),e&2&&(ib(5),aT(t.fields),ib(2),rT(t.proposeFlip()?7:-1),ib(2),ev(`disabled`,!t.complete()))},dependencies:[Bo,zo,ft,et,$n,Xe$1,se,Da,Oa,_t],styles:[`.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(16rem,1fr));gap:0 1rem}.sign[_ngcontent-%COMP%]{padding:.75rem 1rem;border-radius:.5rem;background:var(--%NS%mat-sys-secondary-container);color:var(--%NS%mat-sys-on-secondary-container);margin-bottom:1rem}.actions[_ngcontent-%COMP%]{display:flex;gap:.5rem}`]})};var ni=new D(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var Ft=class{source;checked;constructor(n,e){this.source=n,this.checked=e}};var un=(()=>{class a{_elementRef=h(rt);_focusMonitor=h(_t$1);_changeDetectorRef=h(fo);defaults=h(ni);_injector=h(ue);_signalFormField=null;_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Ft(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=U();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new ve;toggleChange=new ve;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){h(eA).load(Te);let e=h(new lc(`tabindex`),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||`accent`,this.id=this._uniqueId=h(BE).getId(`mat-mdc-slide-toggle-`),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngOnInit(){this._signalFormField=this._injector.get(fn,void 0,{optional:!0,self:!0})}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0&&!this._signalFormField?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Ft(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`switch`],t=[`*`];function c(h,l){h&1&&(Ga(0,`span`,11),Qh(),Ga(1,`svg`,13),ic(2,`path`,14),df(),Ga(3,`svg`,15),ic(4,`path`,16),df()())}return Ri$1({type:a,selectors:[[`mat-slide-toggle`]],viewQuery:function(l,u){if(l&1&&av(e,5),l&2){let g;hf(g=gf())&&(u._switchElement=g.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(l,u){l&2&&(rv(`id`,u.id),xi$1(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),kT(u.color?`mat-`+u.color:``),pv(`mat-mdc-slide-toggle-focused`,u._focused)(`mat-mdc-slide-toggle-checked`,u.checked)(`mat-slide-toggle-full-width`,u.fullWidth)(`_mat-animation-noopable`,u._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,Fi$1],color:`color`,disabled:[2,`disabled`,`disabled`,Fi$1],fullWidth:[2,`fullWidth`,`fullWidth`,Fi$1],disableRipple:[2,`disableRipple`,`disableRipple`,Fi$1],tabIndex:[2,`tabIndex`,`tabIndex`,h=>h==null?0:$_(h)],checked:[2,`checked`,`checked`,Fi$1],hideIcon:[2,`hideIcon`,`hideIcon`,Fi$1],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Fi$1]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[xv([{provide:w,useExisting:Xs(()=>a),multi:!0},{provide:N,useExisting:a,multi:!0}]),Cn],ngContentSelectors:t,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(l,u){if(l&1&&(DT(),Ga(0,`div`,1)(1,`button`,2,0),sc(`click`,function(){return u._handleClick()}),ic(3,`div`,3)(4,`span`,4),Ga(5,`span`,5)(6,`span`,6)(7,`span`,7),ic(8,`span`,8),df(),Ga(9,`span`,9),ic(10,`span`,10),df(),tT(11,c,5,0,`span`,11),df()()(),Ga(12,`label`,12),sc(`click`,function(R){return R.stopPropagation()}),ET(13),df()()),l&2){let g=CT(2);ev(`labelPosition`,u.labelPosition),ib(),pv(`mdc-switch--selected`,u.checked)(`mdc-switch--unselected`,!u.checked)(`mdc-switch--checked`,u.checked)(`mdc-switch--disabled`,u.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,u.disabledInteractive),ev(`tabIndex`,u.disabled&&!u.disabledInteractive?-1:u.tabIndex)(`disabled`,u.disabled&&!u.disabledInteractive),xi$1(`id`,u.buttonId)(`name`,u.name)(`aria-label`,u.ariaLabel)(`aria-labelledby`,u._getAriaLabelledBy())(`aria-describedby`,u.ariaDescribedby)(`aria-required`,u.required||null)(`aria-checked`,u.checked)(`aria-disabled`,u.disabled&&u.disabledInteractive?`true`:null),ib(9),ev(`matRippleTrigger`,g)(`matRippleDisabled`,u.disableRipple||u.disabled)(`matRippleCentered`,!0),ib(),rT(u.hideIcon?-1:11),ib(),ev(`for`,u.buttonId),xi$1(`id`,u._labelId)}},dependencies:[lo,Dt],styles:[`.mdc-switch {
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
`],encapsulation:2})})()}return a})();var Pa=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=pr({type:a});static ɵinj=pn$1({imports:[un,GG]})}return a})();var ii=(a,n)=>n.file.id;var oi=(a,n)=>n.id;var ri=(a,n)=>n.field;function ci(a,n){if(a&1){let e=fT();Ga(0,`tr`)(1,`td`)(2,`mat-checkbox`,3),sc(`change`,function(c){let h=Uh(e).$implicit,l=yT(2);return Bh(l.toggle(h.file.id,c.checked))}),df()(),Ga(3,`td`),GT(4),df(),Ga(5,`td`),GT(6),df(),Ga(7,`td`,4),GT(8),c_(9,`money`),df(),Ga(10,`td`),GT(11),c_(12,`money`),df()()}if(a&2){let e=n.$implicit,t=yT(2);xi$1(`data-correction`,e.kind),ib(2),ev(`checked`,!t.declined().has(e.file.id)),Jy(`aria-label`,`Correct `+e.saved.description+` on `+e.saved.date),ib(2),Ev(e.saved.date),ib(2),Ev(e.saved.description),ib(2),Iv(` `,l_(9,9,e.saved.amount),` · `,e.saved.category??`no category`,` `),ib(3),Iv(``,l_(12,11,e.file.amount),` · `,e.file.category??`no category`)}}function si(a,n){if(a&1&&(Ga(0,`h4`),GT(1),df(),Ga(2,`p`),GT(3,` These rows match a saved transaction but the file has a different amount or category. The saved transaction will be corrected. Untick one to leave it as it is; an unticked row with a different amount is then saved as a separate transaction. `),df(),Ga(4,`div`,0)(5,`table`,1)(6,`thead`)(7,`tr`)(8,`th`,2),GT(9,`Correct`),df(),Ga(10,`th`,2),GT(11,`Date`),df(),Ga(12,`th`,2),GT(13,`Description`),df(),Ga(14,`th`,2),GT(15,`You have`),df(),Ga(16,`th`,2),GT(17,`The file says`),df()()(),Ga(18,`tbody`),sT(19,ci,13,13,`tr`,null,ii),df()()()),a&2){yT();let e=e_(0);ib(),mf(`Corrections to transactions you already have (`,e.corrections.length,`)`),ib(18),aT(e.corrections)}}function li(a,n){if(a&1&&(Ga(0,`div`),GT(1),Ga(2,`span`,4),GT(3),df(),GT(4),df()),a&2){let e=n.$implicit;ib(),mf(` `,e.field,`: `),ib(2),Ev(e.before),ib(),mf(` `,e.after,` `)}}function di(a,n){if(a&1){let e=fT();Ga(0,`tr`)(1,`td`)(2,`mat-checkbox`,3),sc(`change`,function(c){let h=Uh(e).$implicit,l=yT(2);return Bh(l.toggle(h.id,c.checked))}),df()(),Ga(3,`td`),GT(4),df(),Ga(5,`td`),sT(6,li,5,3,`div`,null,ri),df()()}if(a&2){let e=n.$implicit,t=yT(2);xi$1(`data-change`,e.id),ib(2),ev(`checked`,!t.declined().has(e.id)),Jy(`aria-label`,`Update `+e.label),ib(2),Ev(e.label),ib(2),aT(e.fields)}}function mi(a,n){if(a&1&&(Ga(0,`h4`),GT(1),df(),Ga(2,`p`),GT(3,` The file has different values for these. They will be updated. Untick one to keep what you have. `),df(),Ga(4,`div`,0)(5,`table`,5)(6,`thead`)(7,`tr`)(8,`th`,2),GT(9,`Update`),df(),Ga(10,`th`,2),GT(11,`What`),df(),Ga(12,`th`,2),GT(13,`Change`),df()()(),Ga(14,`tbody`),sT(15,di,8,4,`tr`,null,oi),df()()()),a&2){yT();let e=e_(0);ib(),mf(`Changes to what you already have (`,e.recordChanges.length,`)`),ib(14),aT(e.recordChanges)}}var zt=class a{preview=dc.required();declined=dc.required();declinedChange=A$();toggle(n,e){let t=new Set(this.declined());e?t.delete(n):t.add(n),this.declinedChange.emit(t)}static ɵfac=function(e){return new(e||a)};static ɵcmp=Ri$1({type:a,selectors:[[`app-import-updates`]],inputs:{preview:[1,`preview`],declined:[1,`declined`]},outputs:{declinedChange:`declinedChange`},decls:3,vars:3,consts:[[1,`list`],[`aria-label`,`Corrections to saved transactions`,`data-list`,`corrections`],[`scope`,`col`],[3,`change`,`checked`,`aria-label`],[1,`was`],[`aria-label`,`Changes to saved records`,`data-list`,`record-changes`]],template:function(e,t){if(e&1&&(Nv(0),tT(1,si,21,1),tT(2,mi,17,1)),e&2){let c=JT(t.preview());ib(),rT(c.corrections.length>0?1:-1),ib(),rT(c.recordChanges.length>0?2:-1)}},dependencies:[ft,et,i],styles:[`.list[_ngcontent-%COMP%]{max-height:22rem;overflow:auto}table[_ngcontent-%COMP%]{border-collapse:collapse;width:100%}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:.25rem .5rem;text-align:left;vertical-align:top}.was[_ngcontent-%COMP%]{text-decoration:line-through;color:var(--%NS%mat-sys-on-surface-variant)}h4[_ngcontent-%COMP%]{margin:1rem 0 .25rem;font:var(--%NS%mat-sys-title-small)}`]})};var hi=(a,n)=>n.id;function pi(a,n){if(a&1){let e=fT();Ga(0,`tr`)(1,`td`)(2,`mat-checkbox`,4),sc(`change`,function(c){let h=Uh(e).$implicit,l=yT();return Bh(l.toggle(h.id,c.checked))}),df()(),Ga(3,`td`),GT(4),df(),Ga(5,`td`),GT(6),df(),Ga(7,`td`),GT(8),df(),Ga(9,`td`,5),GT(10),c_(11,`money`),df()()}if(a&2){let e=n.$implicit,t=yT();ib(2),ev(`checked`,t.kept().has(e.id)),Jy(`aria-label`,`Keep `+e.description+` on `+e.date),ib(2),Ev(e.date),ib(2),Ev(e.account),ib(2),Ev(e.description),ib(2),Ev(l_(11,6,e.amount))}}var Lt=class a{duplicates=dc.required();kept=dc.required();keptChange=A$();toggle(n,e){let t=new Set(this.kept());e?t.add(n):t.delete(n),this.keptChange.emit(t)}static ɵfac=function(e){return new(e||a)};static ɵcmp=Ri$1({type:a,selectors:[[`app-reimport-duplicates`]],inputs:{duplicates:[1,`duplicates`],kept:[1,`kept`]},outputs:{keptChange:`keptChange`},decls:19,vars:1,consts:[[1,`list`],[`aria-label`,`Likely duplicates`],[`scope`,`col`],[`scope`,`col`,1,`amount`],[3,`change`,`checked`,`aria-label`],[1,`amount`]],template:function(e,t){e&1&&(Ga(0,`p`),GT(1),df(),Ga(2,`div`,0)(3,`table`,1)(4,`thead`)(5,`tr`)(6,`th`,2),GT(7,`Keep`),df(),Ga(8,`th`,2),GT(9,`Date`),df(),Ga(10,`th`,2),GT(11,`Account`),df(),Ga(12,`th`,2),GT(13,`Description`),df(),Ga(14,`th`,3),GT(15,`Amount`),df()()(),Ga(16,`tbody`),sT(17,pi,12,8,`tr`,null,hi),df()()()),e&2&&(ib(),mf(` `,t.duplicates().length,` transactions match ones you already have (same date, account, description and amount). They will be skipped. Tick any that are real new transactions. `),ib(16),aT(t.duplicates()))},dependencies:[Bo,ft,et,i],styles:[`.list[_ngcontent-%COMP%]{max-height:20rem;overflow:auto}.amount[_ngcontent-%COMP%]{text-align:right;font-variant-numeric:tabular-nums}table[_ngcontent-%COMP%]{border-collapse:collapse;width:100%}td[_ngcontent-%COMP%]{padding:.125rem .5rem}`]})};var ui=(a,n)=>n.type;var bi=(a,n)=>n.account+n.windowStart;var gi=(a,n)=>n.returned.id;var Aa=(a,n)=>n.id;var fi=(a,n)=>n.income.id;var _i=(a,n)=>n.rowNumber;function ki(a,n){a&1&&(Ga(0,`p`,1),GT(1),df()),a&2&&(ib(),Ev(n))}function vi(a,n){if(a&1){let e=fT();Ga(0,`mat-card`,2)(1,`mat-card-content`)(2,`h3`),GT(3,`Updating your data`),df(),Ga(4,`p`,19),GT(5,` What you already have stays. This file adds `),Ga(6,`strong`),GT(7),df(),GT(8),df(),Ga(9,`app-import-updates`,20),sc(`declinedChange`,function(c){Uh(e);let h=yT();return Bh(h.declinedChange.emit(c))}),df()()()}if(a&2){let e=yT();ib(7),Ev(e.preview().transactionsToSave),ib(),Cv(` new transaction`,e.preview().transactionsToSave===1?``:`s`,`; `,e.preview().duplicates.length,` already saved `,e.preview().duplicates.length===1?`is`:`are`,` skipped; and `,e.preview().corrections.length+e.preview().recordChanges.length,` will be corrected. `),ib(),ev(`preview`,e.preview())(`declined`,e.declined())}}function yi(a,n){if(a&1&&(Ga(0,`tr`)(1,`th`,6),GT(2),df(),Ga(3,`td`,7),GT(4),df()()),a&2){let e=n.$implicit;xi$1(`data-count`,e.type),ib(2),Ev(e.label),ib(2),Ev(e.count)}}function xi(a,n){if(a&1){let e=fT();Ga(0,`mat-card`,8)(1,`mat-card-content`)(2,`h3`),GT(3,`Rows imported twice`),df(),Ga(4,`p`),GT(5),df(),Ga(6,`mat-slide-toggle`,21),sc(`change`,function(c){Uh(e);let h=yT();return Bh(h.removeDoubleFeedChange.emit(c.checked))}),GT(7,` Remove the copies `),df()()()}if(a&2){let e=n.$implicit,t=yT();ib(5),bv(` `,e.account,`: from `,e.windowStart,` to the day before `,e.cutoff,` (`,e.weeks,` weeks) most rows appear twice. `,e.removed,` copies will be removed. `),ib(),ev(`checked`,t.removeDoubleFeed())}}function wi(a,n){if(a&1){let e=fT();Ga(0,`mat-card`,9)(1,`mat-card-content`)(2,`h3`),GT(3,`Already imported`),df(),Ga(4,`app-reimport-duplicates`,22),sc(`keptChange`,function(c){Uh(e);let h=yT();return Bh(h.keptDuplicatesChange.emit(c))}),df()()()}if(a&2){let e=yT();ib(4),ev(`duplicates`,e.preview().duplicates)(`kept`,e.keptDuplicates())}}function Si(a,n){if(a&1&&(Ga(0,`li`),GT(1),c_(2,`money`),c_(3,`money`),df()),a&2){let e=n.$implicit;ib(),bv(` `,e.returned.date,` `,e.returned.description,` `,l_(2,5,e.returned.amount),` matches `,e.original.date,` `,l_(3,7,e.original.amount),` `)}}function Ci(a,n){if(a&1&&(Ga(0,`li`),GT(1),c_(2,`money`),df()),a&2){let e=n.$implicit;ib(),wv(` `,e.date,` `,e.description,` `,l_(2,3,e.amount),`: no matching payment found `)}}function Ii(a,n){if(a&1&&(Ga(0,`mat-card`,10)(1,`mat-card-content`)(2,`h3`),GT(3,`Returned payments`),df(),Ga(4,`p`),GT(5,`A payment that bounced cancels out with the original payment.`),df(),Ga(6,`ul`),sT(7,Si,4,9,`li`,null,gi),sT(9,Ci,3,5,`li`,null,Aa),df()()()),a&2){let e=yT();ib(7),aT(e.preview().returnedPayments),ib(2),aT(e.preview().unmatchedReturns)}}function Ni(a,n){if(a&1&&(Ga(0,`li`),GT(1),c_(2,`money`),df()),a&2){let e=n.$implicit;ib(),wv(``,e.date,` `,e.description,` `,l_(2,3,e.amount))}}function Mi(a,n){if(a&1&&(Ga(0,`mat-card`,11)(1,`mat-card-content`)(2,`h3`),GT(3,`Refunds`),df(),Ga(4,`p`),GT(5,`Refunds reduce spending on the line they belong to.`),df(),Ga(6,`ul`),sT(7,Ni,3,5,`li`,null,Aa),df()()()),a&2){let e=yT();ib(7),aT(e.preview().refunds)}}function Ei(a,n){if(a&1&&(Ga(0,`li`),GT(1),c_(2,`money`),df()),a&2){let e=n.$implicit;ib(),Sv(` `,e.income.date,` `,e.income.description,` `,l_(2,6,e.income.amount),` after `,e.transfer.date,` `,e.transfer.description,` on `,e.transfer.account,` `)}}function Oi(a,n){if(a&1&&(Ga(0,`mat-card`,12)(1,`mat-card-content`)(2,`h3`),GT(3,`May be your own money coming back`),df(),Ga(4,`p`),GT(5,` These deposits follow a transfer out of the same amount, so they are not counted as income. `),df(),Ga(6,`ul`),sT(7,Ei,3,8,`li`,null,fi),df()()()),a&2){let e=yT();ib(7),aT(e.preview().mirrors)}}function Di(a,n){if(a&1&&(Ga(0,`tr`)(1,`td`),GT(2),df(),Ga(3,`td`),GT(4),df()()),a&2){let e=n.$implicit;ib(2),Ev(e.rowNumber??``),ib(2),Ev(e.message)}}function Ti(a,n){if(a&1&&(Ga(0,`mat-card`,13)(1,`mat-card-content`)(2,`h3`),GT(3),df(),Ga(4,`p`),GT(5,`They will be imported, but something looks off.`),df(),Ga(6,`table`,23)(7,`thead`)(8,`tr`)(9,`th`,24),GT(10,`Row`),df(),Ga(11,`th`,24),GT(12,`What to check`),df()()(),Ga(13,`tbody`),sT(14,Di,5,2,`tr`,null,oT),df()()()()),a&2){let e=yT();ib(3),mf(`Check these rows (`,e.preview().warnings.length,`)`),ib(11),aT(e.preview().warnings)}}function Ri(a,n){if(a&1&&(Ga(0,`tr`)(1,`td`),GT(2),df(),Ga(3,`td`),GT(4),df(),Ga(5,`td`),GT(6),df()()),a&2){let e=n.$implicit;ib(2),Ev(e.rowNumber),ib(2),Ev(e.recordType||`(no type)`),ib(2),Ev(e.reason)}}function Pi(a,n){if(a&1&&(Ga(0,`mat-card`,14)(1,`mat-card-content`)(2,`h3`),GT(3),df(),Ga(4,`p`),GT(5,`These rows are not imported. Fix them in the CSV and import again.`),df(),Ga(6,`table`,25)(7,`thead`)(8,`tr`)(9,`th`,24),GT(10,`Row`),df(),Ga(11,`th`,24),GT(12,`Record type`),df(),Ga(13,`th`,24),GT(14,`Reason`),df()()(),Ga(15,`tbody`),sT(16,Ri,7,3,`tr`,null,_i),df()()()()),a&2){let e=yT();ib(3),mf(`Skipped rows (`,e.preview().skipped.length,`)`),ib(13),aT(e.preview().skipped)}}var Ai={transaction:`Transaction rows`,debt:`Debts`,income:`Income sources`,deduction:`Payroll deductions`,bill:`Bills`,balance:`Cash balances`,schedule:`Payment schedule changes`,windfall:`Windfalls`};var Vt=class a{preview=dc.required();notice=dc(null);removeDoubleFeed=dc.required();keptDuplicates=dc.required();declined=dc(/* @__PURE__ */ new Set);declinedChange=A$();removeDoubleFeedChange=A$();keptDuplicatesChange=A$();confirmed=A$();cancelled=A$();countRows=cc(()=>Object.entries(this.preview().counts).map(([n,e])=>({type:n,count:e,label:Ai[n]??n})));toSave=cc(()=>{let n=this.declined(),e=this.preview().corrections.filter(t=>t.kind===`amount`&&n.has(t.file.id)).length;return this.preview().transactionsToSave+this.keptDuplicates().size+e});static ɵfac=function(e){return new(e||a)};static ɵcmp=Ri$1({type:a,selectors:[[`app-import-preview`]],inputs:{preview:[1,`preview`],notice:[1,`notice`],removeDoubleFeed:[1,`removeDoubleFeed`],keptDuplicates:[1,`keptDuplicates`],declined:[1,`declined`]},outputs:{declinedChange:`declinedChange`,removeDoubleFeedChange:`removeDoubleFeedChange`,keptDuplicatesChange:`keptDuplicatesChange`,confirmed:`confirmed`,cancelled:`cancelled`},decls:55,vars:18,consts:[[`data-note`,`not-saved`,1,`lead`],[`role`,`status`,1,`notice`],[`appearance`,`outlined`,`data-section`,`update`],[`appearance`,`outlined`],[`aria-label`,`Records per type`],[`aria-label`,`Totals`],[`scope`,`row`],[1,`num`],[`appearance`,`outlined`,`data-section`,`double-feed`],[`appearance`,`outlined`,`data-section`,`duplicates`],[`appearance`,`outlined`,`data-section`,`returns`],[`appearance`,`outlined`,`data-section`,`refunds`],[`appearance`,`outlined`,`data-section`,`mirrors`],[`appearance`,`outlined`,`data-section`,`warnings`],[`appearance`,`outlined`,`data-section`,`skipped`],[1,`confirm-bar`],[1,`actions`],[`mat-flat-button`,``,`type`,`button`,3,`click`],[`mat-button`,``,`type`,`button`,3,`click`],[`data-note`,`update-summary`],[3,`declinedChange`,`preview`,`declined`],[3,`change`,`checked`],[3,`keptChange`,`duplicates`,`kept`],[`aria-label`,`Flagged rows`],[`scope`,`col`],[`aria-label`,`Skipped rows`]],template:function(e,t){if(e&1&&(Ga(0,`p`,0),GT(1,` Nothing is saved yet. Look over the preview, then press `),Ga(2,`strong`),GT(3,`Confirm`),df(),GT(4,` at the bottom of the window to import. `),df(),tT(5,ki,2,1,`p`,1),tT(6,vi,10,7,`mat-card`,2),Ga(7,`mat-card`,3)(8,`mat-card-content`)(9,`h3`),GT(10,`What is in the file`),df(),Ga(11,`table`,4)(12,`tbody`),sT(13,yi,5,3,`tr`,null,ui),df()(),Ga(15,`h3`),GT(16,`Totals`),df(),Ga(17,`table`,5)(18,`tbody`)(19,`tr`)(20,`th`,6),GT(21,`Income`),df(),Ga(22,`td`,7),GT(23),c_(24,`money`),df()(),Ga(25,`tr`)(26,`th`,6),GT(27,`Spending`),df(),Ga(28,`td`,7),GT(29),c_(30,`money`),df()(),Ga(31,`tr`)(32,`th`,6),GT(33,`Debt`),df(),Ga(34,`td`,7),GT(35),c_(36,`money`),df()()()(),Ga(37,`p`),GT(38,` Income leaves out money moved from your own accounts. Spending is money out less refunds, leaving out transfers, card payments, returned payments and loan statements. Debt is the sum of the debt balances in the file. `),df()()(),sT(39,xi,8,6,`mat-card`,8,bi),tT(41,wi,5,2,`mat-card`,9),tT(42,Ii,11,0,`mat-card`,10),tT(43,Mi,9,0,`mat-card`,11),tT(44,Oi,9,0,`mat-card`,12),tT(45,Ti,16,1,`mat-card`,13),tT(46,Pi,18,1,`mat-card`,14),Ga(47,`div`,15)(48,`p`),GT(49),df(),Ga(50,`div`,16)(51,`button`,17),sc(`click`,function(){return t.confirmed.emit()}),GT(52,`Confirm`),df(),Ga(53,`button`,18),sc(`click`,function(){return t.cancelled.emit()}),GT(54,`Cancel`),df()()()),e&2){let c;ib(5),rT((c=t.notice())?5:-1,c),ib(),rT(t.preview().updating?6:-1),ib(7),aT(t.countRows()),ib(10),Ev(l_(24,12,t.preview().totals.income)),ib(6),Ev(l_(30,14,t.preview().totals.spending)),ib(6),Ev(l_(36,16,t.preview().totals.debt)),ib(4),aT(t.preview().doubleFeed.windows),ib(2),rT(t.preview().duplicates.length>0?41:-1),ib(),rT(t.preview().returnedPayments.length>0||t.preview().unmatchedReturns.length>0?42:-1),ib(),rT(t.preview().refunds.length>0?43:-1),ib(),rT(t.preview().mirrors.length>0?44:-1),ib(),rT(t.preview().warnings.length>0?45:-1),ib(),rT(t.preview().skipped.length>0?46:-1),ib(3),mf(``,t.toSave(),` transactions will be saved.`)}},dependencies:[Bo,zo,A,I,_,Pa,un,zt,Lt,i],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;gap:1rem}table[_ngcontent-%COMP%]{border-collapse:collapse}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{text-align:left;padding:.125rem .75rem .125rem 0;vertical-align:top}.num[_ngcontent-%COMP%]{text-align:right;font-variant-numeric:tabular-nums}.notice[_ngcontent-%COMP%]{padding:.5rem 1rem;border-radius:.5rem;background:var(--%NS%mat-sys-secondary-container);color:var(--%NS%mat-sys-on-secondary-container)}.lead[_ngcontent-%COMP%]{margin:0}.confirm-bar[_ngcontent-%COMP%]{position:sticky;bottom:0;z-index:1;display:flex;flex-wrap:wrap;align-items:center;gap:.5rem 1rem;margin:0 -.5rem;padding:.75rem .5rem;background:var(--%NS%app-bg);border-top:1px solid var(--%NS%app-border)}.confirm-bar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{flex:1 1 12rem;margin:0;font-weight:500}.actions[_ngcontent-%COMP%]{display:flex;gap:.5rem}h3[_ngcontent-%COMP%]{margin:0 0 .5rem}`]})};var Fi=()=>({});var zi=a=>({columns:a,flipSign:!1});function Li(a,n){a&1&&(Ga(0,`p`),GT(1,`Open or create a data file first.`),df(),Ga(2,`a`,1),GT(3,`Go to Welcome`),df())}function Vi(a,n){a&1&&(Ga(0,`p`,4),GT(1,` You are trying the sample. Anything you import here stays in memory and is not saved. To use your own data, choose Close file in the menu at the top right and create a data file. `),df())}function Bi(a,n){a&1&&(Ga(0,`p`,6)(1,`mat-icon`,13),GT(2,`info`),df(),Ga(3,`span`),GT(4,` You already have transactions up to `),Ga(5,`strong`),GT(6),df(),GT(7,`. To update, import a file with only what is newer: everything saved stays, rows you already have are skipped, and corrections to old rows are shown before anything is saved. `),df()()),a&2&&(ib(6),Ev(n))}function qi(a,n){if(a&1){let e=fT();Ga(0,`button`,14),sc(`click`,function(){Uh(e);let c=yT(3);return Bh(c.importSample())}),GT(1,` Import the sample file `),df()}}function ji(a,n){if(a&1){let e=fT();tT(0,Vi,2,0,`p`,4),Ga(1,`p`),GT(2,` Import the CSV your AI assistant made from your statements. Nothing leaves this device. `),df(),Ga(3,`p`),GT(4,` No CSV yet? `),Ga(5,`a`,5),GT(6,`The Help page shows how to make one`),df(),GT(7,`, step by step. `),df(),tT(8,Bi,8,1,`p`,6),Ga(9,`div`,7),sc(`dragover`,function(c){Uh(e);let h=yT(2);return Bh(h.onDragOver(c))})(`dragleave`,function(){Uh(e);let c=yT(2);return Bh(c.dragging.set(!1))})(`drop`,function(c){Uh(e);let h=yT(2);return Bh(h.onDrop(c))}),Ga(10,`p`),GT(11,`Drop a CSV file here, or`),df(),Ga(12,`div`,8)(13,`button`,9),sc(`click`,function(){Uh(e);let c=CT(19);return Bh(c.click())}),Ga(14,`mat-icon`,10),GT(15,`upload_file`),df(),GT(16,` Choose CSV file `),df(),tT(17,qi,2,0,`button`,11),df(),Ga(18,`input`,12,0),sc(`change`,function(c){Uh(e);let h=yT(2);return Bh(h.onFileInput(c))}),df()()}if(a&2){let e,t=yT(2);rT(t.store.isSample()?0:-1),ib(8),rT((e=t.latestSaved())?8:-1,e),ib(),pv(`over`,t.dragging()),ib(8),rT(t.store.isSample()?17:-1)}}function Ui(a,n){if(a&1){let e=fT();Ga(0,`app-column-mapper`,15),sc(`confirmed`,function(c){Uh(e);let h=yT(2);return Bh(h.onMapped(c))})(`cancelled`,function(){Uh(e);let c=yT(2);return Bh(c.reset())}),df()}if(a&2){let e=yT(2);ev(`headers`,e.headers())(`rows`,e.rawRows().slice(0,50))(`initial`,e.mapping()??s_(5,zi,i_(4,Fi)))(`incomeNames`,e.incomeNames())}}function Wi(a,n){if(a&1){let e=fT();Ga(0,`h2`),GT(1),df(),Ga(2,`app-import-preview`,16),sc(`declinedChange`,function(c){Uh(e);let h=yT(3);return Bh(h.declined.set(c))})(`removeDoubleFeedChange`,function(c){Uh(e);let h=yT(3);return Bh(h.setRemoveDoubleFeed(c))})(`keptDuplicatesChange`,function(c){Uh(e);let h=yT(3);return Bh(h.keptDuplicates.set(c))})(`confirmed`,function(){Uh(e);let c=yT(3);return Bh(c.confirm())})(`cancelled`,function(){Uh(e);let c=yT(3);return Bh(c.reset())}),df()}if(a&2){let e=yT(3);ib(),mf(`Preview: `,e.fileName()),ib(),ev(`preview`,n.preview)(`notice`,e.notice())(`removeDoubleFeed`,e.removeDoubleFeed())(`keptDuplicates`,e.keptDuplicates())(`declined`,e.declined())}}function Gi(a,n){if(a&1&&tT(0,Wi,3,6),a&2){let e,t=yT(2);rT((e=t.prepared())?0:-1,e)}}function Hi(a,n){if(a&1){let e=fT();Ga(0,`p`,17),GT(1),df(),Ga(2,`section`,18)(3,`h2`,19),GT(4,`What to do next`),df(),Ga(5,`ol`)(6,`li`)(7,`a`,20),GT(8,`Dashboard`),df(),GT(9,`: see your health check and confirm anything the app was unsure about. `),df(),Ga(10,`li`)(11,`a`,21),GT(12,`Budget`),df(),GT(13,`: adjust the monthly target for each line.`),df(),Ga(14,`li`)(15,`a`,22),GT(16,`Debts`),df(),GT(17,`: choose a payoff strategy and see your debt-free month. `),df(),Ga(18,`li`)(19,`a`,23),GT(20,`Check-in`),df(),GT(21,`: add the weekly check-ins to your calendar. `),df()(),Ga(22,`div`,24)(23,`a`,25),GT(24,`Go to Dashboard`),df(),Ga(25,`button`,14),sc(`click`,function(){Uh(e);let c=yT(2);return Bh(c.reset())}),GT(26,` Import another file `),df()()()}if(a&2){let e=yT(2);ib(),Ev(e.savedMessage())}}function Ki(a,n){a&1&&(Ga(0,`p`,3),GT(1),df()),a&2&&(ib(),Ev(n))}function $i(a,n){if(a&1&&(tT(0,ji,20,5)(1,Ui,1,7,`app-column-mapper`,2)(2,Gi,1,1)(3,Hi,27,1),tT(4,Ki,2,1,`p`,3)),a&2){let e,t,c=yT();rT((e=c.step())===`pick`?0:e===`map`?1:e===`preview`?2:e===`done`?3:-1),ib(4),rT((t=c.error())?4:-1,t)}}var Xi=`This file uses the older template (v1). It was imported; the newer columns (account type, link, credit limit and others) are empty.`;var Fa=class a{store=h(ha);route=h(tn);router=h(wr);step=te(`pick`);dragging=te(!1);error=te(null);fileName=te(``);headers=te([]);rawRows=te([]);notice=te(null);mapping=te(null);newMappingSignature=te(null);templateRows=te([]);removeDoubleFeed=te(!0);prepared=te(null);keptDuplicates=te(/* @__PURE__ */ new Set);declined=te(/* @__PURE__ */ new Set);latestSaved=cc(()=>(this.store.data()?.transactions??[]).reduce((n,e)=>e.date>n?e.date:n,``));savedMessage=te(``);incomeNames=cc(()=>this.store.data()?.incomes.map(n=>n.name)??[]);ngOnInit(){this.store.isSample()&&this.route.snapshot.queryParamMap.has(`sample`)&&this.importSample()}onDragOver(n){n.preventDefault(),this.dragging.set(!0)}async onDrop(n){n.preventDefault(),this.dragging.set(!1);let e=n.dataTransfer?.files[0];e&&await this.readFile(e)}async onFileInput(n){let e=n.target,t=e.files?.[0];e.value=``,t&&await this.readFile(t)}async importSample(){let{csv:n}=await Me();this.start(n,Re)}onMapped(n){this.mapping.set(n),this.newMappingSignature.set(an(this.headers())),this.templateRows.set(on(this.rawRows(),n)),this.prepare()}setRemoveDoubleFeed(n){this.removeDoubleFeed.set(n),this.prepare()}confirm(){let n=this.prepared();if(!n)return;let e=Ce(n),t=this.keptDuplicates();e.skipTransactionIds=e.skipTransactionIds.filter(k=>!t.has(k));let c=this.declined();e.declinedCorrections=n.preview.corrections.map(k=>k.file.id).filter(k=>c.has(k)),e.keepExisting=n.preview.recordChanges.map(k=>k.id).filter(k=>c.has(k));let h=this.newMappingSignature(),l=this.mapping();h&&l&&(e.mapping={signature:h,mapping:l}),this.store.update(k=>xe(k,n,e,this.fileName(),za()));let u=n.preview.corrections.filter(k=>k.kind===`amount`&&c.has(k.file.id)).length,g=n.preview.transactionsToSave+t.size+u,R=n.preview.corrections.length+n.preview.recordChanges.length-c.size;this.savedMessage.set(`Imported ${this.fileName()}: ${g} transactions saved.`+(R>0?` ${R} corrected.`:``)),this.step.set(`done`),this.prepared.set(null)}reset(){this.step.set(`pick`),this.error.set(null),this.notice.set(null),this.mapping.set(null),this.newMappingSignature.set(null),this.prepared.set(null),this.removeDoubleFeed.set(!0),this.keptDuplicates.set(/* @__PURE__ */ new Set),this.declined.set(/* @__PURE__ */ new Set),this.route.snapshot.queryParamMap.has(`sample`)&&this.router.navigate([],{queryParams:{}})}async readFile(n){try{this.start(await n.text(),n.name)}catch(e){this.error.set(fr(e,`import`))}}start(n,e){this.reset();let{headers:t,rows:c}=ya(n);if(t.length===0||c.length===0){this.error.set(`That file has no header row or no data rows.`);return}this.fileName.set(e),this.headers.set(t),this.rawRows.set(c);let h=s(t);if(h!==`unknown`){this.notice.set(h===`v1`?Xi:null),this.templateRows.set(c),this.prepare();return}let l=this.store.data()?.columnMappings[an(t)];if(l){this.mapping.set(l),this.templateRows.set(on(c,l)),this.prepare();return}this.mapping.set(xa(t,c.slice(0,20))),this.step.set(`map`)}prepare(){let n=this.store.data();if(!n)return;let e={importId:crypto.randomUUID(),newId:()=>crypto.randomUUID(),importDate:za()};this.prepared.set(Se(this.templateRows(),n,e,{removeDoubleFeed:this.removeDoubleFeed()})),this.keptDuplicates.set(/* @__PURE__ */ new Set),this.declined.set(/* @__PURE__ */ new Set),this.step.set(`preview`)}static ɵfac=function(e){return new(e||a)};static ɵcmp=Ri$1({type:a,selectors:[[`app-import-page`]],decls:4,vars:1,consts:[[`picker`,``],[`mat-flat-button`,``,`routerLink`,`/welcome`],[3,`headers`,`rows`,`initial`,`incomeNames`],[`role`,`alert`,1,`error`],[`role`,`note`,1,`sample-note`],[`routerLink`,`/help`],[`role`,`note`,`data-note`,`update-hint`,1,`callout`],[1,`drop`,3,`dragover`,`dragleave`,`drop`],[1,`row`],[`mat-flat-button`,``,`type`,`button`,3,`click`],[1,`material-icons`],[`mat-stroked-button`,``,`type`,`button`],[`type`,`file`,`accept`,`.csv,text/csv`,`hidden`,``,3,`change`],[`aria-hidden`,`true`,1,`material-icons`],[`mat-stroked-button`,``,`type`,`button`,3,`click`],[3,`confirmed`,`cancelled`,`headers`,`rows`,`initial`,`incomeNames`],[3,`declinedChange`,`removeDoubleFeedChange`,`keptDuplicatesChange`,`confirmed`,`cancelled`,`preview`,`notice`,`removeDoubleFeed`,`keptDuplicates`,`declined`],[`role`,`status`],[`aria-labelledby`,`next`,1,`panel`,`next`],[`id`,`next`],[`routerLink`,`/dashboard`],[`routerLink`,`/budget`],[`routerLink`,`/debts`],[`routerLink`,`/checkin`],[1,`row`,`start`],[`mat-flat-button`,``,`routerLink`,`/dashboard`]],template:function(e,t){e&1&&(Ga(0,`h1`),GT(1,`Import`),df(),tT(2,Li,4,0)(3,$i,5,2)),e&2&&(ib(2),rT(t.store.isOpen()?3:2))},dependencies:[Bo,zo,A,Rs,Os,Jc,Pt,Vt],styles:[`[_nghost-%COMP%]{display:block;max-width:56rem;margin:0 auto}.drop[_ngcontent-%COMP%]{border:2px dashed var(--%NS%mat-sys-outline);border-radius:.75rem;padding:2rem;text-align:center}.drop.over[_ngcontent-%COMP%]{border-color:var(--%NS%mat-sys-primary);background:var(--%NS%mat-sys-primary-container)}.row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem;justify-content:center}.row.start[_ngcontent-%COMP%]{justify-content:flex-start}.next[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-medium)}.next[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.375rem}.error[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error)}.sample-note[_ngcontent-%COMP%]{padding:.625rem 1rem;border-radius:.75rem;background:var(--%NS%app-warn-bg);color:var(--%NS%app-warn-fg)}.drop[_ngcontent-%COMP%]{background:var(--%NS%app-surface)}`]})};function za(){let a=/* @__PURE__ */ new Date,n=e=>String(e).padStart(2,`0`);return`${a.getFullYear()}-${n(a.getMonth()+1)}-${n(a.getDate())}`}export{Fa as ImportPage};