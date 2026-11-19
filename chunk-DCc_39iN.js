import{t as X}from"./chunk-a0JYNoWz.js";import"./chunk-CQRa0fDQ.js";import{n as p}from"./chunk-pyPvjN6g.js";import{t}from"./chunk-Cs6r8R3r.js";import{n as I,r as _,t as A}from"./chunk-BwspRDeg.js";import{n as D,t as C}from"./chunk-BEfy9VbH.js";import{t as i}from"./chunk-HzzEJbgN.js";import"./chunk-BcQZ2G6J.js";import{t as N}from"./chunk-BPImQ2T4.js";import{a as bt,c as se,i as Ze,n as Qn,o as fn,r as Xe,s as gt,t as $n}from"./chunk-BtZzy4F9.js";import{o as te,s as vn$1}from"./chunk-D0Xgcoho.js";import{b as w,f as fe,g as nn$1,l as V,o as N$1,s as Qt}from"./chunk-DBT6bN3b.js";import{F as oe,_ as Y,c as He,g as We,h as Tt,r as Bt,u as Nt}from"./chunk-B5i0u83o.js";import{c as _e,i as Fe,n as De,o as Re,r as Ee,s as We$1,t as Ae}from"./chunk-CRdeJu-A.js";import{n as b}from"./chunk--gzageFs.js";import"./chunk-oap__m5R.js";import{n as s,t as n}from"./chunk-_rBx5Aja.js";import{_ as wt$1,c as U,d as Xe$1,m as lo$1,n as Bo$1,p as _t,r as De$1,s as Te,y as zo$1}from"./chunk-Do5UI6RK.js";import{A as Vp,I as _f,N as Yf,O as Sf,S as Np,V as gc,W as hs,et as tn$1,f as Gl,h as If,nt as vp,ot as ya$1,q as lc,w as Ps}from"./chunk-a1Bxv7Nb.js";import{o as Ut,s as W,u as le}from"./chunk-CRIyDtlI.js";import{A as GC,At as Sv,B as Hv,Br as zm,Bt as Um,Dr as xT,E as FT,En as eB,Fn as hy,G as JV,Gn as mS,Gt as Vi$1,Hr as r,Ht as Uv,I as HT,It as Ub,Jn as ne,Jt as WC,Kr as v,L as Hb,Lr as zb,Lt as Ud,Mn as fo$1,N as Gm,Nr as yS,Nt as Ta,O as Fm,On as ea$1,Or as xf,Pn as ht,Pt as Tm,Qn as os,R as Hf,Rt as Uf,Sn as bo$1,Sr as wm,Ut as Vb,V as IC,Vt as Ur,Xn as nn$2,Xt as Wm,Yn as nm,Z as Kg,_n as bT,an as ZC,ar as rm,at as Mm,b as Cm,bn as bm,br as vT,ct as NT,dr as tm,dt as Nv,er as oy,et as Ll,f as Bb,g as C$1,hr as um,i as $u,j as Gb,k as Fs,kt as Sn$1,lr as tB,lt as Nm,mr as ue,n as $T,nr as qC,o as AT,on as Zb,p as Bl,pn as aT,pt as OT,q as Js,qr as w$1,r as $m,rr as qb,s as Af,sn as Zm,st as NI,t as $C,tn as YC,ur as tb,v as CT,vr as v$1,wn as ce,xr as wT,xt as Qb,yn as be,zn as jb,zt as Ul}from"./main-N5A4Y5F5.js";var zi=v((bn,fn)=>{"use strict";((i,t)=>{typeof define==`function`&&define.amd?define([],t):typeof fn==`object`&&typeof bn<`u`?fn.exports=t():i.Papa=t()})(bn,function i(){var t=typeof self<`u`?self:typeof window<`u`?window:t!==void 0?t:{},e=!t.document&&!!t.postMessage,n=t.IS_PAPA_WORKER||!1,r={},m=0,s={};function h(l){return l.charCodeAt(0)===65279?l.slice(1):l}function g(l){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine=``,this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(c){var p=H(c);p.chunkSize=parseInt(p.chunkSize),c.step||c.chunk||(p.chunkSize=null),this._handle=new f(p),(this._handle.streamer=this)._config=p}.call(this,l),this.parseChunk=function(c,p){var E=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<E){let $=this._config.newline;$||(k=this._config.quoteChar||`"`,$=this._handle.guessLineEndings(c,k)),c=[...c.split($).slice(E)].join($)}this.isFirstChunk&&Y(this._config.beforeFirstChunk)&&(k=this._config.beforeFirstChunk(c))!==void 0&&(c=k),this.isFirstChunk=!1,this._halted=!1;var E=this._partialLine+c,k=(this._partialLine=``,this._handle.parse(E,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(c=k.meta.cursor,E=(this._finished||(this._partialLine=E.substring(c-this._baseIndex),this._baseIndex=c),k&&k.data&&(this._rowCount+=k.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),n)t.postMessage({results:k,workerId:s.WORKER_ID,finished:E});else if(Y(this._config.chunk)&&!p){if(this._config.chunk(k,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=k=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(k.data),this._completeResults.errors=this._completeResults.errors.concat(k.errors),this._completeResults.meta=k.meta),this._completed||!E||!Y(this._config.complete)||k&&k.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),E||k&&k.meta.paused||this._nextChunk(),k}this._halted=!0},this._sendError=function(c){Y(this._config.error)?this._config.error(c):n&&this._config.error&&t.postMessage({workerId:s.WORKER_ID,error:c,finished:!1})}}function M(l){var c;(l=l||{}).chunkSize||(l.chunkSize=s.RemoteChunkSize),g.call(this,l),this._nextChunk=e?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(p){this._input=p,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(c=new XMLHttpRequest,this._config.withCredentials&&(c.withCredentials=this._config.withCredentials),e||(c.onload=Oe(this._chunkLoaded,this),c.onerror=Oe(this._chunkError,this)),c.ontimeout=Oe(this._chunkTimeout,this),c.open(this._config.downloadRequestBody?`POST`:`GET`,this._input,!e),this._config.downloadTimeout&&!e&&(c.timeout=this._config.downloadTimeout),this._config.downloadRequestHeaders){var p,E=this._config.downloadRequestHeaders;for(p in E)c.setRequestHeader(p,E[p])}var k;this._config.chunkSize&&(k=this._start+this._config.chunkSize-1,c.setRequestHeader(`Range`,`bytes=`+this._start+`-`+k));try{c.send(this._config.downloadRequestBody)}catch($){this._chunkError($.message)}e&&c.status===0&&this._chunkError()}},this._chunkLoaded=function(){c.readyState===4&&(c.status<200||400<=c.status?this._chunkError():(this._start+=this._config.chunkSize||c.responseText.length,this._finished=!this._config.chunkSize||this._start>=(p=>(p=p.getResponseHeader(`Content-Range`))!==null?parseInt(p.substring(p.lastIndexOf(`/`)+1)):-1)(c),this.parseChunk(c.responseText)))},this._chunkError=function(p){p=c.statusText||p,this._sendError(new Error(p))},this._chunkTimeout=function(){this._chunkError(`Request timed out after `+this._config.downloadTimeout+`ms`)}}function C(l){(l=l||{}).chunkSize||(l.chunkSize=s.LocalChunkSize),g.call(this,l);var c,p,E=typeof FileReader<`u`;this.stream=function(k){this._input=k,p=k.slice||k.webkitSlice||k.mozSlice,E?((c=new FileReader).onload=Oe(this._chunkLoaded,this),c.onerror=Oe(this._chunkError,this)):c=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var k=this._input,$=(this._config.chunkSize&&($=Math.min(this._start+this._config.chunkSize,this._input.size),k=p.call(k,this._start,$)),c.readAsText(k,this._config.encoding));E||this._chunkLoaded({target:{result:$}})},this._chunkLoaded=function(k){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(k.target.result)},this._chunkError=function(){this._sendError(c.error)}}function T(l){var c;g.call(this,l=l||{}),this.stream=function(p){return c=p,this._nextChunk()},this._nextChunk=function(){var p,E;if(!this._finished)return p=this._config.chunkSize,c=p?(E=c.substring(0,p),c.substring(p)):(E=c,``),this._finished=!c,this.parseChunk(E)}}function z(l){g.call(this,l=l||{});var c=[],p=!0,E=!1;this.pause=function(){g.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){g.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(k){this._input=k,this._input.on(`data`,this._streamData),this._input.on(`end`,this._streamEnd),this._input.on(`error`,this._streamError)},this._checkIsFinished=function(){E&&c.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),c.length?this.parseChunk(c.shift()):p=!0},this._streamData=Oe(function(k){try{c.push(typeof k==`string`?k:k.toString(this._config.encoding)),p&&(p=!1,this._checkIsFinished(),this.parseChunk(c.shift()))}catch($){this._streamError($)}},this),this._streamError=Oe(function(k){this._streamCleanUp(),this._sendError(k)},this),this._streamEnd=Oe(function(){this._streamCleanUp(),E=!0,this._streamData(``)},this),this._streamCleanUp=Oe(function(){this._input.removeListener(`data`,this._streamData),this._input.removeListener(`end`,this._streamEnd),this._input.removeListener(`error`,this._streamError)},this)}function f(l){var c,p,E,k,$=Math.pow(2,53),me=-$,fe=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,Re=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,j=this,he=0,P=0,_e=!1,O=!1,A=[],S={data:[],errors:[],meta:{}};function se(U){return l.skipEmptyLines===`greedy`?U.join(``).trim()===``:U.length===1&&U[0].length===0}function y(){if(S&&E&&(Ne(`Delimiter`,`UndetectableDelimiter`,`Unable to auto-detect delimiting character; defaulted to '`+s.DefaultDelimiter+`'`),E=!1),l.skipEmptyLines&&(S.data=S.data.filter(function(oe){return!se(oe)})),ae()){let oe=function(Me){A.push(Me)};if(S)if(Array.isArray(S.data[0])){for(var U=0;ae()&&U<S.data.length;U++)S.data[U].forEach(oe);S.data.splice(0,1)}else S.data.forEach(oe)}function b(oe,Me){for(var de=l.header?{}:[],B=0;B<oe.length;B++){var D=B,Pe=oe[B],Pe=((K,re)=>(ye=>(l.dynamicTypingFunction&&l.dynamicTyping[ye]===void 0&&(l.dynamicTyping[ye]=l.dynamicTypingFunction(ye)),(l.dynamicTyping[ye]||l.dynamicTyping)===!0))(K)?re===`true`||re===`TRUE`||re!==`false`&&re!==`FALSE`&&((ye=>{if(fe.test(ye)&&(ye=parseFloat(ye),me<ye&&ye<$))return 1})(re)?parseFloat(re):Re.test(re)?new Date(re):re===``?null:re):re)(D=l.header?B>=A.length?`__parsed_extra`:A[B]:D,Pe=l.transform?l.transform(Pe,D):Pe);D===`__parsed_extra`?(de[D]=de[D]||[],de[D].push(Pe)):de[D]=Pe}return l.header&&(B>A.length?Ne(`FieldMismatch`,`TooManyFields`,`Too many fields: expected `+A.length+` fields but parsed `+B,P+Me):B<A.length&&Ne(`FieldMismatch`,`TooFewFields`,`Too few fields: expected `+A.length+` fields but parsed `+B,P+Me)),de}var le;S&&(l.header||l.dynamicTyping||l.transform)&&(le=1,!S.data.length||Array.isArray(S.data[0])?(S.data=S.data.map(b),le=S.data.length):S.data=b(S.data,0),l.header&&S.meta&&(S.meta.fields=A),P+=le)}function ae(){return l.header&&A.length===0}function Ne(U,b,le,G){U={type:U,code:b,message:le},G!==void 0&&(U.row=G),S.errors.push(U)}Y(l.step)&&(k=l.step,l.step=function(U){S=U,ae()?y():(y(),S.data.length!==0&&(he+=U.data.length,l.preview&&he>l.preview?p.abort():(S.data=S.data[0],k(S,j))))}),this.parse=function(U,b,le){var G=l.quoteChar||`"`,G=(l.newline||(l.newline=this.guessLineEndings(U,G)),E=!1,l.delimiter?Y(l.delimiter)&&(l.delimiter=l.delimiter(U),S.meta.delimiter=l.delimiter):((G=((oe,Me,de,B,D)=>{var Pe,K,re,ye;D=D||[`,`,`	`,`|`,`;`,s.RECORD_SEP,s.UNIT_SEP];for(var ht=0;ht<D.length;ht++){for(var qe,Ot=D[ht],Te=0,Ke=0,ke=0,Ae=(re=void 0,new N({comments:B,delimiter:Ot,newline:Me,preview:10}).parse(oe)),et=0;et<Ae.data.length;et++)de&&se(Ae.data[et])?ke++:(qe=Ae.data[et].length,Ke+=qe,re===void 0?re=qe:0<qe&&(Te+=Math.abs(qe-re),re=qe));0<Ae.data.length&&(Ke/=Ae.data.length-ke),1.99<Ke&&(K===void 0||Te<K||Te===K&&ye<Ke)&&(K=Te,Pe=Ot,ye=Ke)}return{successful:!!(l.delimiter=Pe),bestDelimiter:Pe}})(U,l.newline,l.skipEmptyLines,l.comments,l.delimitersToGuess)).successful?l.delimiter=G.bestDelimiter:(E=!0,l.delimiter=s.DefaultDelimiter),S.meta.delimiter=l.delimiter),H(l));return G.header=ae(),l.preview&&l.header&&G.preview++,c=U,p=new N(G),S=p.parse(c,b,le),y(),_e?{meta:{paused:!0}}:S||{meta:{paused:!1}}},this.paused=function(){return _e},this.pause=function(){_e=!0,p.abort(),c=Y(l.chunk)?``:c.substring(p.getCharIndex())},this.resume=function(){j.streamer._halted?(_e=!1,j.streamer.parseChunk(c,!0)):setTimeout(j.resume,3)},this.aborted=function(){return O},this.abort=function(){O=!0,p.abort(),S.meta.aborted=!0,Y(l.complete)&&l.complete(S),c=``},this.guessLineEndings=function(oe,G){oe=oe.substring(0,1048576);var G=new RegExp(L(G)+`([^]*?)`+L(G),`gm`),le=(oe=oe.replace(G,``)).split(`\r`),G=oe.split(`
`),oe=1<G.length&&G[0].length<le[0].length;if(le.length===1||oe)return`
`;for(var Me=0,de=0;de<le.length;de++)le[de][0]===`
`&&Me++;return Me>=le.length/2?`\r
`:`\r`}}function L(l){return l.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function N(l){var c=(l=l||{}).delimiter,p=l.newline,E=l.comments,k=l.step,$=l.preview,me=l.fastMode,fe=null,Re=!1,j=l.quoteChar==null?`"`:l.quoteChar,he=j;if(l.escapeChar!==void 0&&(he=l.escapeChar),(typeof c!=`string`||-1<s.BAD_DELIMITERS.indexOf(c))&&(c=`,`),E===c)throw new Error(`Comment character same as delimiter`);E===!0?E=`#`:(typeof E!=`string`||-1<s.BAD_DELIMITERS.indexOf(E))&&(E=!1),p!==`
`&&p!==`\r`&&p!==`\r
`&&(p=`
`);var P=0,_e=!1;this.parse=function(O,A,S){if(typeof O!=`string`)throw new Error(`Input must be a string`);var se=O.length,y=c.length,ae=p.length,Ne=E.length,U=Y(k),b=[],le=[],G=[],oe=P=0;if(!O)return Te();if(me||me!==!1&&O.indexOf(j)===-1){for(var Me=O.split(p),de=0;de<Me.length;de++){if(G=Me[de],P+=G.length,de!==Me.length-1)P+=p.length;else if(S)return Te();if(!E||G.substring(0,Ne)!==E){if(U){if(b=[],ye(G.split(c)),Ke(),_e)return Te()}else ye(G.split(c));if($&&$<=de)return b=b.slice(0,$),Te(!0)}}return Te()}for(var B=O.indexOf(c,P),D=O.indexOf(p,P),Pe=new RegExp(L(he)+L(j),`g`),K=O.indexOf(j,P);;)if(O[P]===j)for(K=P,P++;;){if((K=O.indexOf(j,K+1))===-1)return S||le.push({type:`Quotes`,code:`MissingQuotes`,message:`Quoted field unterminated`,row:b.length,index:P}),qe();if(K===se-1)return qe(O.substring(P,K).replace(Pe,j));if(j===he&&O[K+1]===he)K++;else if(j===he||K===0||O[K-1]!==he){B!==-1&&B<K+1&&(B=O.indexOf(c,K+1));var re=ht((D=D!==-1&&D<K+1?O.indexOf(p,K+1):D)===-1?B:Math.min(B,D));if(O.substr(K+1+re,y)===c){G.push(O.substring(P,K).replace(Pe,j)),O[P=K+1+re+y]!==j&&(K=O.indexOf(j,P)),B!==-1&&B<P&&(B=O.indexOf(c,P)),D!==-1&&D<P&&(D=O.indexOf(p,P));break}if(re=ht(D),O.substring(K+1+re,K+1+re+ae)===p){if(G.push(O.substring(P,K).replace(Pe,j)),Ot(K+1+re+ae),B!==-1&&B<P&&(B=O.indexOf(c,P)),K=O.indexOf(j,P),U&&(Ke(),_e))return Te();if($&&b.length>=$)return Te(!0);break}le.push({type:`Quotes`,code:`InvalidQuotes`,message:`Trailing quote on quoted field is malformed`,row:b.length,index:P}),K++}}else if(E&&G.length===0&&O.substring(P,P+Ne)===E){if(D===-1)return Te();P=D+ae,D=O.indexOf(p,P),B!==-1&&B<P&&(B=O.indexOf(c,P))}else if(B!==-1&&(B<D||D===-1))G.push(O.substring(P,B)),P=B+y,B=O.indexOf(c,P);else{if(D===-1)break;if(G.push(O.substring(P,D)),Ot(D+ae),U&&(Ke(),_e))return Te();if($&&b.length>=$)return Te(!0)}return qe();function ye(ke){b.push(ke),oe=P}function ht(ke){var Ae=0;return Ae=ke!==-1&&(ke=O.substring(K+1,ke))&&ke.trim()===``?ke.length:Ae}function qe(ke){return S||(ke===void 0&&(ke=O.substring(P)),G.push(ke),P=se,ye(G),U&&Ke()),Te()}function Ot(ke){P=ke,ye(G),G=[],D=O.indexOf(p,P)}function Te(ke){if(l.header&&!A&&b.length&&!Re){var Ae=b[0],et=Object.create(null),an=new Set(Ae);let wn=!1;for(let ut=0;ut<Ae.length;ut++){let je=h(Ae[ut]);if(et[je=Y(l.transformHeader)?l.transformHeader(je,ut):je]){let Nt,In=et[je];for(;Nt=je+`_`+In,In++,an.has(Nt););an.add(Nt),Ae[ut]=Nt,et[je]++,wn=!0,(fe=fe===null?{}:fe)[Nt]=je}else et[je]=1,Ae[ut]=je;an.add(je)}wn&&console.warn(`Duplicate headers found and renamed.`),Re=!0}return{data:b,errors:le,meta:{delimiter:c,linebreak:p,aborted:_e,truncated:!!ke,cursor:oe+(A||0),renamedHeaders:fe}}}function Ke(){k(Te()),b=[],le=[]}},this.abort=function(){_e=!0},this.getCharIndex=function(){return P}}function xe(l){var c=l.data,p=r[c.workerId],E=!1;if(c.error)p.userError(c.error,c.file);else if(c.results&&c.results.data){var k={abort:function(){E=!0,Fe(c.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:Ie,resume:Ie};if(Y(p.userStep)){for(var $=0;$<c.results.data.length&&(p.userStep({data:c.results.data[$],errors:c.results.errors,meta:c.results.meta},k),!E);$++);delete c.results}else Y(p.userChunk)&&(p.userChunk(c.results,k,c.file),delete c.results)}c.finished&&!E&&Fe(c.workerId,c.results)}function Fe(l,c){var p=r[l];Y(p.userComplete)&&p.userComplete(c),p.terminate(),delete r[l]}function Ie(){throw new Error(`Not implemented.`)}function H(l){if(typeof l!=`object`||l===null)return l;var c,p=Array.isArray(l)?[]:{};for(c in l)p[c]=H(l[c]);return p}function Oe(l,c){return function(){l.apply(c,arguments)}}function Y(l){return typeof l==`function`}return s.parse=function(l,c){var p=(c=c||{}).dynamicTyping||!1;if(Y(p)&&(c.dynamicTypingFunction=p,p={}),c.dynamicTyping=p,c.transform=!!Y(c.transform)&&c.transform,c.downloadTimeout!==void 0){var p=parseInt(c.downloadTimeout);if(isNaN(p))throw new Error(`Config downloadTimeout value (`+c.downloadTimeout+`) not parsable by parseInt(val).`);c.downloadTimeout=p}if(!c.worker||!s.WORKERS_SUPPORTED)return p=null,s.NODE_STREAM_INPUT,typeof l==`string`?(l=h(l),p=new(c.download?M:T)(c)):l.readable===!0&&Y(l.read)&&Y(l.on)?p=new z(c):(t.File&&l instanceof File||l instanceof Object)&&(p=new C(c)),p.stream(l);(p=(()=>{var E;return!!s.WORKERS_SUPPORTED&&(E=(()=>{var k=t.URL||t.webkitURL||null,$=i.toString();return s.BLOB_URL||(s.BLOB_URL=k.createObjectURL(new Blob([`var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; `,`(`,$,`)();`],{type:`text/javascript`})))})(),(E=new t.Worker(E)).onmessage=xe,E.id=m++,r[E.id]=E)})()).userStep=c.step,p.userChunk=c.chunk,p.userComplete=c.complete,p.userError=c.error,c.step=Y(c.step),c.chunk=Y(c.chunk),c.complete=Y(c.complete),c.error=Y(c.error),delete c.worker,p.postMessage({input:l,config:c,workerId:p.id})},s.unparse=function(l,c){var p=!1,E=!0,k=`,`,$=`\r
`,me=`"`,fe=me+me,Re=!1,j=null,he=!1,P=((()=>{if(typeof c==`object`){if(typeof c.delimiter!=`string`||s.BAD_DELIMITERS.filter(function(A){return c.delimiter.indexOf(A)!==-1}).length||(k=c.delimiter),typeof c.quotes!=`boolean`&&typeof c.quotes!=`function`&&!Array.isArray(c.quotes)||(p=c.quotes),typeof c.skipEmptyLines!=`boolean`&&typeof c.skipEmptyLines!=`string`||(Re=c.skipEmptyLines),typeof c.newline==`string`&&($=c.newline),typeof c.quoteChar==`string`&&(me=c.quoteChar,fe=me+me),typeof c.header==`boolean`&&(E=c.header),Array.isArray(c.columns)){if(c.columns.length===0)throw new Error(`Option columns is empty`);j=c.columns}c.escapeChar!==void 0&&(fe=c.escapeChar+me),c.escapeFormulae instanceof RegExp?he=c.escapeFormulae:typeof c.escapeFormulae==`boolean`&&c.escapeFormulae&&(he=/^[=+\-@\t\r].*$/)}})(),new RegExp(L(me),`g`));if(typeof l==`string`&&(l=JSON.parse(l)),Array.isArray(l)){if(!l.length)return _e(j,l,Re);if(Array.isArray(l[0]))return _e(null,l,Re);if(typeof l[0]==`object`)return _e(j||Object.keys(l[0]),l,Re)}else if(typeof l==`object`)return typeof l.data==`string`&&(l.data=JSON.parse(l.data)),Array.isArray(l.data)&&(l.fields||(l.fields=l.meta&&l.meta.fields||j),l.fields||(l.fields=Array.isArray(l.data[0])?l.fields:typeof l.data[0]==`object`?Object.keys(l.data[0]):[]),Array.isArray(l.data[0])||typeof l.data[0]==`object`||(l.data=[l.data])),_e(l.fields||[],l.data||[],Re);throw new Error(`Unable to serialize unrecognized input`);function _e(A,S,se){var y=``,ae=(typeof A==`string`&&(A=JSON.parse(A)),typeof S==`string`&&(S=JSON.parse(S)),Array.isArray(A)&&0<A.length),Ne=!Array.isArray(S[0]);if(ae&&E){for(var U=0;U<A.length;U++)0<U&&(y+=k),y+=O(A[U],U);0<S.length&&(y+=$)}for(var b=0;b<S.length;b++){var le=(ae?A:S[b]).length,G=!1,oe=ae?Object.keys(S[b]).length===0:S[b].length===0;if(se&&!ae&&(G=se===`greedy`?S[b].join(``).trim()===``:S[b].length===1&&(S[b][0]==null||S[b][0].length===0)),se===`greedy`&&ae){for(var Me=[],de=0;de<le;de++){var B=Ne?A[de]:de;Me.push(S[b][B])}G=Me.join(``).trim()===``}if(!G){for(var D=0;D<le;D++){0<D&&!oe&&(y+=k);var Pe=ae&&Ne?A[D]:D;y+=O(S[b][Pe],D)}b<S.length-1&&(!se||0<le&&!oe)&&(y+=$)}}return y}function O(A,S){var se,y,ae;return A==null?``:A.constructor===Date?isNaN(A.getTime())?``:A.toISOString():(ae=!1,se=A.toString(),he&&typeof A!=`number`&&typeof A!=`bigint`&&typeof A!=`boolean`&&he.test(se)&&(A=se=`'`+se,ae=!0),y=se.replace(P,fe),(ae=ae||p===!0||typeof p==`function`&&p(A,S)||Array.isArray(p)&&p[S]||((Ne,U)=>{for(var b=0;b<U.length;b++)if(-1<Ne.indexOf(U[b]))return!0;return!1})(y,s.BAD_DELIMITERS)||-1<y.indexOf(k)||-1<se.indexOf(me)||y.charAt(0)===` `||y.charAt(y.length-1)===` `)?me+y+me:y)}},s.RECORD_SEP=``,s.UNIT_SEP=``,s.BYTE_ORDER_MARK=`﻿`,s.BAD_DELIMITERS=[`\r`,`
`,`"`,s.BYTE_ORDER_MARK],s.WORKERS_SUPPORTED=!e&&!!t.Worker,s.NODE_STREAM_INPUT=1,s.LocalChunkSize=10485760,s.RemoteChunkSize=5242880,s.DefaultDelimiter=`,`,s.Parser=N,s.ParserHandle=f,s.NetworkStreamer=M,s.FileStreamer=C,s.StringStreamer=T,s.ReadableStreamStreamer=z,n&&(t.onmessage=function(l){l=l.data,s.WORKER_ID===void 0&&l&&(s.WORKER_ID=l.workerId),typeof l.input==`string`?t.postMessage({workerId:s.WORKER_ID,results:s.parse(l.input,l.config),finished:!0}):(t.File&&l.input instanceof File||l.input instanceof Object)&&(l=s.parse(l.input,l.config))&&t.postMessage({workerId:s.WORKER_ID,results:l,finished:!0})}),(M.prototype=Object.create(g.prototype)).constructor=M,(C.prototype=Object.create(g.prototype)).constructor=C,(T.prototype=Object.create(T.prototype)).constructor=T,(z.prototype=Object.create(g.prototype)).constructor=z,s})});var Vi=w$1(zi());function Xi(i){let t=i.charCodeAt(0)===65279?i.slice(1):i,e=Vi.default.parse(t,{header:!0,skipEmptyLines:`greedy`,transformHeader:m=>m.trim(),transform:m=>m.trim()}),n=e.meta.fields??[];return{headers:n,rows:e.data.map(m=>{let s={};for(let h of n)s[h]=m[h]??``;return s})}}function yn(i){return i.map(t=>t.trim().toLowerCase()).join(`|`)}var sa={record_type:[`record_type`,`record type`],date:[`date`,`transaction date`,`posted date`,`posting date`,`trans date`],description:[`description`,`name`,`merchant`,`payee`,`memo`,`details`],amount:[`amount`,`transaction amount`,`value`],category:[`category`,`categories`],account:[`account`,`account name`,`account_name`],notes:[`notes`,`note`],account_type:[`account_type`,`account type`]};function Bi(i,t){let e={},n$1=/* @__PURE__ */ new Set,r=new Map(i.map(s=>[s.trim().toLowerCase(),s]));for(let s of n){let g=(sa[s]??[s]).map(M=>r.get(M)).find(M=>M!==void 0&&!n$1.has(M));g!==void 0&&(e[s]=g,n$1.add(g))}let m=(s,h)=>{if(e[s]!==void 0)return;let g=i.find(M=>{if(n$1.has(M))return!1;let C=t.map(T=>T[M]??``).filter(T=>T!==``);return C.length>0&&C.every(h)});g!==void 0&&(e[s]=g,n$1.add(g))};return m(`date`,s=>If(s)!==null),m(`amount`,s=>vp(s)!==null),{columns:e,flipSign:!1}}function Wi(i,t,e){let n=h=>t.columns[h],r=e.map(h=>h.trim().toUpperCase()).filter(h=>h!==``),m=0,s=0;for(let h of i){let g=(h[n(`category`)??``]??``).trim().toLowerCase(),M=(h[n(`description`)??``]??``).toUpperCase(),C=g===`income`||r.some(z=>M.includes(z)),T=vp(h[n(`amount`)??``]??``);!C||T===null||(m++,T<0&&s++)}return m===0?0:s/m}function kn(i,t){return i.map(e=>{let n$2={};for(let r of n){let m=t.columns[r];n$2[r]=m===void 0?``:(e[m]??``).trim()}return n$2.record_type===``&&(n$2.record_type=`transaction`),t.flipSign&&(n$2.amount=la(n$2.amount)),n$2})}function la(i){let t=vp(i);if(t===null)return i;let e=-t,n=Math.abs(e),r=`${Math.trunc(n/100)}.${String(n%100).padStart(2,`0`)}`;return e<0?`-`+r:r}var da=(i,t)=>t.id;function ma(i,t){if(i&1&&(Fs(0,`p`,14),wm(1,2),rm(2,`strong`,15),Cm(),Ll()),i&2){let e=Ub(2);NI(2),bm(e.rows().length),Bb(1)}}function _a(i,t){if(i&1&&(Fs(0,`p`,14),wm(1,3),rm(2,`strong`,15),Cm(),Ll()),i&2){let e=Ub(2);NI(2),bm(e.rows().length),Bb(1)}}function pa(i,t){if(i&1&&(Fs(0,`h2`,12),Bl(1),jb(2,1),ea$1(),vT(3,` `),rm(4,`app-info-tooltip`,13),Ll(),$C(5,ma,3,1,`p`,14)(6,_a,3,1,`p`,14)),i&2){let e=Ub();NI(5),GC(e.rows().length===1?5:6)}}function ha(i,t){i&1&&(Fs(0,`h2`,16),Bl(1),jb(2,4),ea$1(),vT(3,` `),rm(4,`app-info-tooltip`,17),Ll(),Fs(5,`p`,14),jb(6,5),Ll())}function ua(i,t){i&1&&(Bl(0),jb(1,6),ea$1())}function ga(i,t){i&1&&(Bl(0),jb(1,7),ea$1())}function ba(i,t){if(i&1&&(Fs(0,`option`,21),jb(1,8),Ll()),i&2){let e=Ub().$implicit,n=Ub();nm(`selected`,!n.picks()[e.id])}}function fa(i,t){if(i&1&&(Fs(0,`option`,22),vT(1),Ll()),i&2){let e=t.$implicit,n=Ub().$implicit,r=Ub();nm(`value`,e)(`selected`,(r.picks()[n.id]??n.category)===e),NI(),Ul(` `,r.label(e),` `)}}function ya(i,t){if(i&1){let e=tb();Fs(0,`li`,11)(1,`span`,18),vT(2),Fs(3,`span`,14),vT(4),Ll()(),Fs(5,`span`,19),vT(6),OT(7,`money`),Ll(),Fs(8,`select`,20,0),Tm(`change`,function(){let r=Af(e).$implicit,m=Qb(9),s=Ub();return xf(s.set(r.id,m.value))}),$C(10,ba,2,1,`option`,21),ZC(11,fa,2,3,`option`,22,qC),Ll()()}if(i&2){let e=t.$implicit,n=Ub();NI(2),Ul(` `,e.description,` `),NI(2),$m(`· `,e.date,` · `,e.account),NI(2),Um(FT(7,6,e.amount)),NI(2),tm(`aria-label`,n.categoryFor(e.description)),NI(2),GC(e.category?-1:10),NI(),YC(n.categories)}}var jt=class i$1{rows=eB.required();guessed=eB(!1);picks=tB({});categories=b;label=t;set(t,e){let n=r({},this.picks()),r$1=this.rows().find(m=>m.id===t)?.category;e&&e!==r$1?n[t]=e:delete n[t],this.picks.set(n)}categoryFor(t){return $localize`Category for ${t}`}static ɵfac=function(e){return new(e||i$1)};static ɵcmp=IC({type:i$1,selectors:[[`app-bank-categories`]],inputs:{rows:[1,`rows`],guessed:[1,`guessed`],picks:[1,`picks`]},outputs:{picks:`picksChange`},decls:11,vars:6,consts:()=>{let t;t=$localize`These rows came with no category, so the app chose one from its built-in list of common shops, payroll words and bank words. Nothing is sent anywhere.`;let e;e=$localize`Categories the app chose`;let n;n=$localize`${`�#2�`}:START_TAG_STRONG:${`�0�`}:INTERPOLATION:${`�/#2�`}:CLOSE_TAG_STRONG: transaction got a category from the app's built-in list. Change any that are wrong here, or later on the Transactions screen, where they are marked "category chosen by the app". Your choice is remembered for next time. `;let r;r=$localize`${`�#2�`}:START_TAG_STRONG:${`�0�`}:INTERPOLATION:${`�/#2�`}:CLOSE_TAG_STRONG: transactions got a category from the app's built-in list. Change any that are wrong here, or later on the Transactions screen, where they are marked "category chosen by the app". Your choice is remembered for next time. `;let m;m=$localize`These rows came with no category, and neither your earlier choices nor the app's built-in list matched them.`;let s;s=$localize`Choose a category`;let h;h=$localize` Optional. A row left without a category counts as Uncategorized. Next time the same description comes in, it gets the category you pick here. `;let g;g=$localize`Show them`;let M;M=$localize`Rows with no category`;let C;return C=$localize`No category yet`,[[`pick`,``],e,n,r,s,h,g,M,C,[1,`panel`],[3,`open`],[`data-row`,`needs-category`],[`id`,`guessed-cat-title`],[`text`,t,`section`,`8.12.11`],[1,`muted`,`small`],[`data-metric`,`guessed-count`],[`id`,`bank-cat-title`],[`text`,m,`section`,`8.12.8`],[1,`what`],[1,`amount`],[`data-input`,`bank-category`,1,`field`,3,`change`],[`value`,``,3,`selected`],[3,`value`,`selected`]]},template:function(e,n){e&1&&(Fs(0,`section`,9),$C(1,pa,7,1)(2,ha,7,0),Fs(3,`details`,10)(4,`summary`),$C(5,ua,2,0,`ng-container`)(6,ga,2,0,`ng-container`),vT(7),Ll(),Fs(8,`ul`),ZC(9,ya,13,8,`li`,11,da),Ll()()()),e&2&&(tm(`data-panel`,n.guessed()?`guessed-categories`:`bank-categories`)(`aria-labelledby`,n.guessed()?`guessed-cat-title`:`bank-cat-title`),NI(),GC(n.guessed()?1:2),NI(2),nm(`open`,!n.guessed()),NI(2),GC(n.guessed()?5:6),NI(2),Ul(` (`,n.rows().length,`) `),NI(2),YC(n.rows()))},dependencies:[N,i],styles:[`[_nghost-%COMP%]{display:block}ul[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}li[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:.375rem 1rem;padding:.5rem 0;border-top:1px solid var(--%NS%app-border)}.what[_ngcontent-%COMP%]{flex:1 1 14rem;min-width:0}.amount[_ngcontent-%COMP%]{font-variant-numeric:tabular-nums}select[_ngcontent-%COMP%]{max-width:100%}summary[_ngcontent-%COMP%]{cursor:pointer;padding:.25rem 0}`]})};var Ht=(()=>{class i{labelPosition=`after`;static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){return IC({type:i,selectors:[[``,`mat-internal-form-field`,``]],hostAttrs:[1,`mdc-form-field`,`mat-internal-form-field`],hostVars:2,hostBindings:function(r,m){r&2&&Fm(`mdc-form-field--align-end`,m.labelPosition===`before`)},inputs:{labelPosition:`labelPosition`},ngContentSelectors:[`*`],decls:1,vars:0,template:function(r,m){r&1&&(zb(),Gb(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2})})()}return i})();var vn={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var ka=new C$1(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>vn});var we=(function(i){return i[i.Init=0]=`Init`,i[i.Checked=1]=`Checked`,i[i.Unchecked=2]=`Unchecked`,i[i.Indeterminate=3]=`Indeterminate`,i})(we||{});var Sn=class{source;checked};var pt=(()=>{class i{_elementRef=v$1(Sn$1);_changeDetectorRef=v$1(hy);_ngZone=v$1(ue);_animationsDisabled=U();_options=v$1(ka,{optional:!0});_injector=v$1(ce);_signalFormField=null;focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let n=new Sn;return n.source=this,n.checked=e,n}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new ht;indeterminateChange=new ht;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=we.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){v$1(lc).load(Te);let e=v$1(new oy(`tabindex`),{optional:!0});this._options=this._options||vn,this.color=this._options.color||vn.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=v$1(Ps).getId(`mat-mdc-checkbox-`),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngOnInit(){this._signalFormField=this._injector.get(fn,void 0,{optional:!0,self:!0})}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let n=e!=this._indeterminate();this._indeterminate.set(e),n&&(e?this._transitionCheckState(we.Indeterminate):this._transitionCheckState(this.checked?we.Checked:we.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=os(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0&&!this._signalFormField?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let n=this._currentCheckState,r=this._getAnimationTargetElement();if(!(n===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(n,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let m=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(m)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!==`noop`?(this.indeterminate&&e!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?we.Checked:we.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,n){if(this._animationsDisabled)return``;switch(e){case we.Init:if(n===we.Checked)return this._animationClasses.uncheckedToChecked;if(n==we.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case we.Unchecked:return n===we.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case we.Checked:return n===we.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case we.Indeterminate:return n===we.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(e){let n=this._inputElement;n&&(n.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){let e=[`input`];return IC({type:i,selectors:[[`mat-checkbox`]],viewQuery:function(m,s){if(m&1&&Nm(e,5),m&2){let h;qb(h=Zb())&&(s._inputElement=h.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(m,s){m&2&&(um(`id`,s.id),tm(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),aT(s.color?`mat-`+s.color:`mat-accent`),Fm(`_mat-animation-noopable`,s._animationsDisabled)(`mdc-checkbox--disabled`,s.disabled)(`mat-mdc-checkbox-disabled`,s.disabled)(`mat-mdc-checkbox-checked`,s.checked)(`mat-mdc-checkbox-disabled-interactive`,s.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,mS],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,mS],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,mS],tabIndex:[2,`tabIndex`,`tabIndex`,r=>r==null?void 0:yS(r)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,mS],checked:[2,`checked`,`checked`,mS],disabled:[2,`disabled`,`disabled`,mS],indeterminate:[2,`indeterminate`,`indeterminate`,mS]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[NT([{provide:w,useExisting:Vi$1(()=>i),multi:!0},{provide:N$1,useExisting:i,multi:!0}]),$u],ngContentSelectors:[`*`],decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(m,s){if(m&1&&(zb(),Fs(0,`label`,3),Tm(`click`,function(g){return s._preventBubblingFromLabel(g)}),Fs(1,`span`,4,0),rm(3,`span`,5),Fs(4,`input`,6,1),Tm(`blur`,function(){return s._onBlur()})(`click`,function(){return s._onInputClick()})(`change`,function(g){return s._onInteractionEvent(g)}),Ll(),rm(6,`span`,7),Fs(7,`span`,8),Hf(),Fs(8,`svg`,9),rm(9,`path`,10),Ll(),Uf(),rm(10,`span`,11),Ll(),rm(11,`span`,12),Ll(),Fs(12,`span`,13,2),Gb(14),Ll()()),m&2){let h=Qb(2);nm(`labelPosition`,s.labelPosition)(`for`,s.inputId),NI(4),Fm(`mdc-checkbox--selected`,s.checked),nm(`checked`,s.checked)(`indeterminate`,s.indeterminate)(`disabled`,s.disabled&&!s.disabledInteractive)(`id`,s.inputId)(`required`,s.required)(`tabIndex`,s.disabled&&!s.disabledInteractive?-1:s.tabIndex),tm(`aria-label`,s.ariaLabel||null)(`aria-labelledby`,s.ariaLabelledby)(`aria-describedby`,s.ariaDescribedby)(`aria-checked`,s.indeterminate?`mixed`:null)(`aria-controls`,s.ariaControls)(`aria-disabled`,s.disabled&&s.disabledInteractive?!0:null)(`aria-expanded`,s.ariaExpanded)(`aria-owns`,s.ariaOwns)(`name`,s.name)(`value`,s.value),NI(7),nm(`matRippleTrigger`,h)(`matRippleDisabled`,s.disableRipple||s.disabled)(`matRippleCentered`,!0)}},dependencies:[lo$1,Ht],styles:[`.mdc-checkbox {
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
`],encapsulation:2})})()}return i})();var wt=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Js({type:i});static ɵinj=Ur({imports:[pt,ya$1]})}return i})();var Lt=class{_multiple;_emitChanges;compareWith;_selection=/* @__PURE__ */ new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new ne;bulk={select:t=>this._select(t),deselect:t=>this._deselect(t),setSelection:t=>this._setSelection(t)};constructor(t=!1,e,n=!0,r){this._multiple=t,this._emitChanges=n,this.compareWith=r,e&&e.length&&(t?e.forEach(m=>this._markSelected(m)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...t){return this._select(t)}deselect(...t){return this._deselect(t)}setSelection(...t){return this._setSelection(t)}toggle(t){return this.isSelected(t)?this.deselect(t):this.select(t)}clear(t=!0){this._unmarkAll();let e=this._hasQueuedChanges();return t&&this._emitChangeEvent(),e}isSelected(t){return this._selection.has(this._getConcreteValue(t))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(t){this._multiple&&this.selected&&this._selected.sort(t)}isMultipleSelection(){return this._multiple}_select(t){this._verifyValueAssignment(t),t.forEach(n=>this._markSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(t){this._verifyValueAssignment(t),t.forEach(n=>this._unmarkSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(t){this._verifyValueAssignment(t);let e=this.selected,n=new Set(t.map(m=>this._getConcreteValue(m)));t.forEach(m=>this._markSelected(m)),e.filter(m=>!n.has(this._getConcreteValue(m,n))).forEach(m=>this._unmarkSelected(m));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(t){t=this._getConcreteValue(t),this.isSelected(t)||(this._multiple||this._unmarkAll(),this.isSelected(t)||this._selection.add(t),this._emitChanges&&this._selectedToEmit.push(t))}_unmarkSelected(t){t=this._getConcreteValue(t),this.isSelected(t)&&(this._selection.delete(t),this._emitChanges&&this._deselectedToEmit.push(t))}_unmarkAll(){this.isEmpty()||this._selection.forEach(t=>this._unmarkSelected(t))}_verifyValueAssignment(t){t.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(t,e){if(this.compareWith){e=e??this._selection;for(let n of e)if(this.compareWith(t,n))return n;return t}else return t}};var qi=(()=>{class i{_animationsDisabled=U();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(n){return new(n||i)};static ɵcmp=IC({type:i,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(n,r){n&2&&Fm(`mat-pseudo-checkbox-indeterminate`,r.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,r.state===`checked`)(`mat-pseudo-checkbox-disabled`,r.disabled)(`mat-pseudo-checkbox-minimal`,r.appearance===`minimal`)(`mat-pseudo-checkbox-full`,r.appearance===`full`)(`_mat-animation-noopable`,r._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(n,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2})}return i})();var Cn=new C$1(`MAT_OPTION_PARENT_COMPONENT`);var xn=new C$1(`MatOptgroup`);var En=class{source;isUserInput;constructor(t,e=!1){this.source=t,this.isUserInput=e}};var It=(()=>{class i{_element=v$1(Sn$1);_changeDetectorRef=v$1(hy);_parent=v$1(Cn,{optional:!0});group=v$1(xn,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=v$1(Ps).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=os(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new ht;_text;_stateChanges=new ne;constructor(){let e=v$1(lc);e.load(Te),e.load(Gl),this._signalDisableRipple=!!this._parent&&fo$1(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,n){let r=this._getHostElement();typeof r.focus==`function`&&r.focus(n)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Vp(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new En(this,e))}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){let e=[`text`],n=[[[`mat-icon`]],`*`],r=[`mat-icon`,`*`];function m(g,M){if(g&1&&rm(0,`mat-pseudo-checkbox`,1),g&2){let C=Ub();nm(`disabled`,C.disabled)(`state`,C.selected?`checked`:`unchecked`)}}function s(g,M){if(g&1&&rm(0,`mat-pseudo-checkbox`,3),g&2){let C=Ub();nm(`disabled`,C.disabled)}}function h(g,M){if(g&1&&(Fs(0,`span`,4),vT(1),Ll()),g&2){let C=Ub();NI(),Ul(`(`,C.group.label,`)`)}}return IC({type:i,selectors:[[`mat-option`]],viewQuery:function(M,C){if(M&1&&Nm(e,7),M&2){let T;qb(T=Zb())&&(C._text=T.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(M,C){M&1&&Tm(`click`,function(){return C._selectViaInteraction()})(`keydown`,function(z){return C._handleKeydown(z)}),M&2&&(um(`id`,C.id),tm(`aria-selected`,C.selected)(`aria-disabled`,C.disabled.toString()),Fm(`mdc-list-item--selected`,C.selected)(`mat-mdc-option-multiple`,C.multiple)(`mat-mdc-option-active`,C.active)(`mdc-list-item--disabled`,C.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,mS]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:r,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(M,C){M&1&&(zb(n),$C(0,m,1,2,`mat-pseudo-checkbox`,1),Gb(1),Fs(2,`span`,2,0),Gb(4,1),Ll(),$C(5,s,1,1,`mat-pseudo-checkbox`,3),$C(6,h,2,1,`span`,4),rm(7,`div`,5)),M&2&&(GC(C.multiple?0:-1),NI(5),GC(!C.multiple&&C.selected&&!C.hideSingleSelectionIndicator?5:-1),NI(),GC(C.group&&C.group._inert?6:-1),NI(),nm(`matRippleTrigger`,C._getHostElement())(`matRippleDisabled`,C.disabled||C.disableRipple))},dependencies:[qi,lo$1],styles:[`.mat-mdc-option {
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
`],encapsulation:2})})()}return i})();function Ki(i,t,e){if(e.length){let n=t.toArray(),r=e.toArray(),m=0;for(let s=0;s<i+1;s++)n[s].group&&n[s].group===r[m]&&m++;return m}return 0}function ji(i,t,e,n){return i<e?i:i+t>e+n?Math.max(0,i-n+t):e}var Hi=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Js({type:i});static ɵinj=Ur({imports:[ya$1]})}return i})();var Rn=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Js({type:i});static ɵinj=Ur({imports:[De$1,Hi,It,ya$1]})}return i})();var Ca=new C$1(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=v$1(ce);return()=>Tt(i)}});var xa=new C$1(`MAT_SELECT_CONFIG`);var Ra=new C$1(`MatSelectTrigger`);var Mn=class{source;value;constructor(t,e){this.source=t,this.value=e}};var Zi=(()=>{class i{_viewportRuler=v$1(Y);_changeDetectorRef=v$1(hy);_elementRef=v$1(Sn$1);_dir=v$1(gc,{optional:!0});_idGenerator=v$1(Ps);_renderer=v$1(bo$1);_parentFormField=v$1(bt,{optional:!0});ngControl=v$1(V,{self:!0,optional:!0});_liveAnnouncer=v$1(Xe$1);_defaultOptions=v$1(xa,{optional:!0});_animationsDisabled=U();_popoverLocation;_initialized=new ne;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let n=this.options.toArray()[e];if(n){let r=this.panel.nativeElement,m=Ki(e,this.options,this.optionGroups),s=n._getHostElement();e===0&&m===1?r.scrollTop=0:r.scrollTop=ji(s.offsetTop,s.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Mn(this,e)}_scrollStrategyFactory=v$1(Ca);_panelOpen=!1;_compareWith=(e,n)=>e===n;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new ne;_errorStateTracker;stateChanges=new ne;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=os(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(fe.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Sv(()=>{let e=this.options;return e?e.changes.pipe(Hv(e),Ud(()=>Nv(...e.map(n=>n.onSelectionChange)))):this._initialized.pipe(Ud(()=>this.optionSelectionChanges))});openedChange=new ht;_openedStream=this.openedChange.pipe(nn$2(e=>e),be(()=>{}));_closedStream=this.openedChange.pipe(nn$2(e=>!e),be(()=>{}));selectionChange=new ht;valueChange=new ht;constructor(){let e=v$1(Qn),n=v$1(Qt,{optional:!0}),r=v$1(nn$1,{optional:!0}),m=v$1(new oy(`tabindex`),{optional:!0}),s=v$1(Nt,{optional:!0}),h=v$1(fn,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Ze(e,h||this.ngControl,r,n,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=m==null?0:parseInt(m)||0,this._popoverLocation=s?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new Lt(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Uv(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Uv(this._destroy)).subscribe(e=>{e.added.forEach(n=>n.select()),e.removed.forEach(n=>n.deselect())}),this.options.changes.pipe(Hv(null),Uv(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),n=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute(`aria-labelledby`,e):r.removeAttribute(`aria-labelledby`)}n&&(this._previousControl!==n.control&&(this._previousControl!==void 0&&n.disabled!==null&&n.disabled!==this.disabled&&(this.disabled=n.disabled),this._previousControl=n.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Ta(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{n(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,n=this._renderer.listen(e,`animationend`,m=>{m.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(n=>n.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let n=e.keyCode,r=n===40||n===38||n===37||n===39,m=n===13||n===32,s=this._keyManager;if(!s.isTyping()&&m&&!Vp(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let h=this.selected;s.onKeydown(e);let g=this.selected;g&&h!==g&&this._liveAnnouncer.announce(g.viewValue,1e4)}}_handleOpenKeydown(e){let n=this._keyManager,r=e.keyCode,m=r===40||r===38,s=n.isTyping();if(m&&e.altKey)e.preventDefault(),this.close();else if(!s&&(r===13||r===32)&&n.activeItem&&!Vp(e))e.preventDefault(),n.activeItem._selectViaInteraction();else if(!s&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let h=this.options.some(g=>!g.disabled&&!g.selected);this.options.forEach(g=>{g.disabled||(h?g.select():g.deselect())})}else{let h=n.activeItemIndex;n.onKeydown(e),this._multiple&&m&&e.shiftKey&&n.activeItem&&n.activeItemIndex!==h&&n.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Vp(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(n=>n.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(n=>this._selectOptionByValue(n)),this._sortValues();else{let n=this._selectOptionByValue(e);n?this._keyManager.updateActiveItem(n):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let n=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return n&&this._selectionModel.select(n),n}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof Bt?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new wt$1(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Nv(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Uv(e)).subscribe(n=>{this._onSelect(n.source,n.isUserInput),n.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Nv(...this.options.map(n=>n._stateChanges)).pipe(Uv(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,n){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),n&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),n&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((n,r)=>this.sortComparator?this.sortComparator(n,r,e):e.indexOf(n)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let n;this.multiple?n=this.selected.map(r=>r.value):n=this.selected?this.selected.value:e,this._value=n,this.valueChange.emit(n),this._onChange(n),this.selectionChange.emit(this._getChangeEvent(n)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let n=0;n<this.options.length;n++)if(!this.options.get(n).disabled){e=n;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,n=e?e+` `:``;return this.ariaLabelledby?n+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute(`aria-describedby`,e.join(` `)):n.removeAttribute(`aria-describedby`)}onContainerClick(e){let n=Np(e);n&&(n.tagName===`MAT-OPTION`||n.classList.contains(`cdk-overlay-backdrop`)||n.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){let e=[`trigger`],n=[`panel`],r=[[[`mat-select-trigger`]],`*`],m=[`mat-select-trigger`,`*`];function s(T,z){if(T&1&&(Fs(0,`span`,4),vT(1),Ll()),T&2){let f=Ub();NI(),Um(f.placeholder)}}function h(T,z){T&1&&Gb(0)}function g(T,z){if(T&1&&(Fs(0,`span`,11),vT(1),Ll()),T&2){let f=Ub(2);NI(),Um(f.triggerValue)}}function M(T,z){if(T&1&&(Fs(0,`span`,5),$C(1,h,1,0)(2,g,2,1,`span`,11),Ll()),T&2){let f=Ub();NI(),GC(f.customTrigger?1:2)}}function C(T,z){if(T&1){let f=tb();Fs(0,`div`,12,1),Tm(`keydown`,function(N){Af(f);let xe=Ub();return xf(xe._handleKeydown(N))}),Gb(2,1),Ll()}if(T&2){let f=Ub();aT(f.panelClass),Fm(`mat-select-panel-animations-enabled`,!f._animationsDisabled)(`mat-primary`,f._parentFormField?.color===`primary`)(`mat-accent`,f._parentFormField?.color===`accent`)(`mat-warn`,f._parentFormField?.color===`warn`)(`mat-undefined`,!f._parentFormField?.color),tm(`id`,f.id+`-panel`)(`aria-multiselectable`,f.multiple)(`aria-label`,f.ariaLabel||null)(`aria-labelledby`,f._getPanelAriaLabelledby())}}return IC({type:i,selectors:[[`mat-select`]],contentQueries:function(z,f,L){if(z&1&&Mm(L,Ra,5)(L,It,5)(L,xn,5),z&2){let N;qb(N=Zb())&&(f.customTrigger=N.first),qb(N=Zb())&&(f.options=N),qb(N=Zb())&&(f.optionGroups=N)}},viewQuery:function(z,f){if(z&1&&Nm(e,5)(n,5)(We,5),z&2){let L;qb(L=Zb())&&(f.trigger=L.first),qb(L=Zb())&&(f.panel=L.first),qb(L=Zb())&&(f._overlayDir=L.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(z,f){z&1&&Tm(`keydown`,function(N){return f._handleKeydown(N)})(`focus`,function(){return f._onFocus()})(`blur`,function(){return f._onBlur()}),z&2&&(tm(`id`,f.id)(`tabindex`,f.disabled?-1:f.tabIndex)(`aria-controls`,f.panelOpen?f.id+`-panel`:null)(`aria-expanded`,f.panelOpen)(`aria-label`,f.ariaLabel||null)(`aria-required`,f.required.toString())(`aria-disabled`,f.disabled.toString())(`aria-invalid`,f.errorState)(`aria-activedescendant`,f._getAriaActiveDescendant()),Fm(`mat-mdc-select-disabled`,f.disabled)(`mat-mdc-select-invalid`,f.errorState)(`mat-mdc-select-required`,f.required)(`mat-mdc-select-empty`,f.empty)(`mat-mdc-select-multiple`,f.multiple)(`mat-select-open`,f.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,mS],disableRipple:[2,`disableRipple`,`disableRipple`,mS],tabIndex:[2,`tabIndex`,`tabIndex`,T=>T==null?0:yS(T)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,mS],placeholder:`placeholder`,required:[2,`required`,`required`,mS],multiple:[2,`multiple`,`multiple`,mS],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,mS],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,yS],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,mS]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[NT([{provide:gt,useExisting:i},{provide:Cn,useExisting:i}]),$u],ngContentSelectors:m,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(z,f){if(z&1&&(zb(r),Fs(0,`div`,2,0),Tm(`click`,function(){return f.open()}),Fs(3,`div`,3),$C(4,s,2,1,`span`,4)(5,M,3,1,`span`,5),Ll(),Fs(6,`div`,6)(7,`div`,7),Hf(),Fs(8,`svg`,8),rm(9,`path`,9),Ll()()()(),Kg(10,C,3,16,`ng-template`,10),Tm(`detach`,function(){return f.close()})(`backdropClick`,function(){return f.close()})(`overlayKeydown`,function(N){return f._handleOverlayKeydown(N)})),z&2){let L=Qb(1);NI(3),tm(`id`,f._valueId),NI(),GC(f.empty?4:5),NI(6),nm(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,f._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,f._scrollStrategy)(`cdkConnectedOverlayOrigin`,f._preferredOverlayOrigin||L)(`cdkConnectedOverlayPositions`,f._positions)(`cdkConnectedOverlayWidth`,f._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,f._popoverLocation)}},dependencies:[Bt,We],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2})})()}return i})();var Ji=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Js({type:i});static ɵinj=Ur({imports:[He,Rn,ya$1,oe,$n,Rn]})}return i})();var Pa=(i,t)=>t.field;function wa(i,t){if(i&1&&(Fs(0,`mat-option`,15),vT(1),Ll()),i&2){let e=t.$implicit;nm(`value`,e),NI(),Um(e)}}function Ia(i,t){if(i&1){let e=tb();Fs(0,`mat-form-field`,8)(1,`mat-label`),vT(2),Ll(),Fs(3,`mat-select`,13),Tm(`valueChange`,function(r){let m=Af(e).$implicit,s=Ub();return xf(s.setColumn(m.field,r))}),Fs(4,`mat-option`,14),jb(5,4),Ll(),ZC(6,wa,2,2,`mat-option`,15,qC),Ll()()}if(i&2){let e=t.$implicit,n=Ub();NI(2),$m(``,e.label,``,e.required?` *`:``),NI(),nm(`value`,n.columns()[e.field]??``),NI(3),YC(n.headers())}}function Oa(i,t){if(i&1){let e=tb();Fs(0,`div`,9)(1,`p`),jb(2,5),Ll(),Fs(3,`mat-checkbox`,16),Tm(`change`,function(r){Af(e);let m=Ub();return xf(m.flipSign.set(r.checked))}),jb(4,6),Ll()()}if(i&2){let e=Ub();NI(3),nm(`checked`,e.flipSign())}}var ea=[{field:`date`,label:$localize`:A column of the CSV file:Date`,required:!0},{field:`description`,label:$localize`:A column of the CSV file:Description (merchant)`,required:!0},{field:`amount`,label:$localize`:A column of the CSV file:Amount`,required:!0},{field:`category`,label:$localize`:A column of the CSV file:Category`,required:!1},{field:`account`,label:$localize`:A column of the CSV file:Account`,required:!1},{field:`account_type`,label:$localize`:A column of the CSV file:Account type`,required:!1},{field:`link`,label:$localize`:A column of the CSV file:Link (debt or income name)`,required:!1},{field:`notes`,label:$localize`:A column of the CSV file:Notes`,required:!1}];var Na=.8;var Zt=class i{headers=eB.required();rows=eB.required();initial=eB.required();incomeNames=eB([]);confirmed=JV();cancelled=JV();fields=ea;columns=$T(()=>r({},this.initial().columns));flipSign=$T(()=>this.initial().flipSign);complete=HT(()=>ea.every(t=>!t.required||this.columns()[t.field]));proposeFlip=HT(()=>Wi(this.rows(),{columns:this.columns(),flipSign:!1},this.incomeNames())>=Na);setColumn(t,e){this.columns.update(n=>{let r$2=r({},n);return e?r$2[t]=e:delete r$2[t],r$2})}confirm(){this.confirmed.emit({columns:this.columns(),flipSign:this.proposeFlip()&&this.flipSign()})}static ɵfac=function(e){return new(e||i)};static ɵcmp=IC({type:i,selectors:[[`app-column-mapper`]],inputs:{headers:[1,`headers`],rows:[1,`rows`],initial:[1,`initial`],incomeNames:[1,`incomeNames`]},outputs:{confirmed:`confirmed`,cancelled:`cancelled`},decls:13,vars:2,consts:()=>{let t;t=$localize`Match your columns`;let e;e=$localize` This file is not in the template format. Pick which of its columns holds each value. Your choice is remembered for files with the same columns. `;let n;n=$localize` Use these columns `;let r;r=$localize`:Closes a dialog without doing anything: Cancel `;let m;m=$localize`(not in this file)`;let s;s=$localize` Most income rows in this file are negative. This file seems to use positive = money out (some budgeting apps do). Flip signs? `;let h;return h=$localize` Yes, flip signs so money out is negative `,[t,e,n,r,m,s,h,[1,`grid`],[`appearance`,`outline`],[`role`,`status`,1,`sign`],[1,`actions`],[`mat-flat-button`,``,`type`,`button`,3,`click`,`disabled`],[`mat-button`,``,`type`,`button`,3,`click`],[3,`valueChange`,`value`],[`value`,``],[3,`value`],[3,`change`,`checked`]]},template:function(e,n){e&1&&(Fs(0,`h2`),jb(1,0),Ll(),Fs(2,`p`),jb(3,1),Ll(),Fs(4,`div`,7),ZC(5,Ia,8,3,`mat-form-field`,8,Pa),Ll(),$C(7,Oa,5,1,`div`,9),Fs(8,`div`,10)(9,`button`,11),Tm(`click`,function(){return n.confirm()}),jb(10,2),Ll(),Fs(11,`button`,12),Tm(`click`,function(){return n.cancelled.emit()}),jb(12,3),Ll()()),e&2&&(NI(5),YC(n.fields),NI(2),GC(n.proposeFlip()?7:-1),NI(2),nm(`disabled`,!n.complete()))},dependencies:[Bo$1,zo$1,wt,pt,$n,Xe,se,Ji,Zi,It],styles:[`.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(16rem,1fr));gap:0 1rem}.sign[_ngcontent-%COMP%]{padding:.75rem 1rem;border-radius:.5rem;background:var(--%NS%mat-sys-secondary-container);color:var(--%NS%mat-sys-on-secondary-container);margin-bottom:1rem}.actions[_ngcontent-%COMP%]{display:flex;gap:.5rem}`]})};var Aa=new C$1(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var Jt=class{source;checked;constructor(t,e){this.source=t,this.checked=e}};var Pn=(()=>{class i{_elementRef=v$1(Sn$1);_focusMonitor=v$1(_t);_changeDetectorRef=v$1(hy);defaults=v$1(Aa);_injector=v$1(ce);_signalFormField=null;_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Jt(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=U();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new ht;toggleChange=new ht;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){v$1(lc).load(Te);let e=v$1(new oy(`tabindex`),{optional:!0}),n=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=n.color||`accent`,this.id=this._uniqueId=v$1(Ps).getId(`mat-mdc-slide-toggle-`),this.hideIcon=n.hideIcon??!1,this.disabledInteractive=n.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngOnInit(){this._signalFormField=this._injector.get(fn,void 0,{optional:!0,self:!0})}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0&&!this._signalFormField?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Jt(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){let e=[`switch`],n=[`*`];function r(m,s){m&1&&(Fs(0,`span`,11),Hf(),Fs(1,`svg`,13),rm(2,`path`,14),Ll(),Fs(3,`svg`,15),rm(4,`path`,16),Ll()())}return IC({type:i,selectors:[[`mat-slide-toggle`]],viewQuery:function(s,h){if(s&1&&Nm(e,5),s&2){let g;qb(g=Zb())&&(h._switchElement=g.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(s,h){s&2&&(um(`id`,h.id),tm(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),aT(h.color?`mat-`+h.color:``),Fm(`mat-mdc-slide-toggle-focused`,h._focused)(`mat-mdc-slide-toggle-checked`,h.checked)(`mat-slide-toggle-full-width`,h.fullWidth)(`_mat-animation-noopable`,h._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,mS],color:`color`,disabled:[2,`disabled`,`disabled`,mS],fullWidth:[2,`fullWidth`,`fullWidth`,mS],disableRipple:[2,`disableRipple`,`disableRipple`,mS],tabIndex:[2,`tabIndex`,`tabIndex`,m=>m==null?0:yS(m)],checked:[2,`checked`,`checked`,mS],hideIcon:[2,`hideIcon`,`hideIcon`,mS],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,mS]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[NT([{provide:w,useExisting:Vi$1(()=>i),multi:!0},{provide:N$1,useExisting:i,multi:!0}]),$u],ngContentSelectors:n,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(s,h){if(s&1&&(zb(),Fs(0,`div`,1)(1,`button`,2,0),Tm(`click`,function(){return h._handleClick()}),rm(3,`div`,3)(4,`span`,4),Fs(5,`span`,5)(6,`span`,6)(7,`span`,7),rm(8,`span`,8),Ll(),Fs(9,`span`,9),rm(10,`span`,10),Ll(),$C(11,r,5,0,`span`,11),Ll()()(),Fs(12,`label`,12),Tm(`click`,function(M){return M.stopPropagation()}),Gb(13),Ll()()),s&2){let g=Qb(2);nm(`labelPosition`,h.labelPosition),NI(),Fm(`mdc-switch--selected`,h.checked)(`mdc-switch--unselected`,!h.checked)(`mdc-switch--checked`,h.checked)(`mdc-switch--disabled`,h.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,h.disabledInteractive),nm(`tabIndex`,h.disabled&&!h.disabledInteractive?-1:h.tabIndex)(`disabled`,h.disabled&&!h.disabledInteractive),tm(`id`,h.buttonId)(`name`,h.name)(`aria-label`,h.ariaLabel)(`aria-labelledby`,h._getAriaLabelledBy())(`aria-describedby`,h.ariaDescribedby)(`aria-required`,h.required||null)(`aria-checked`,h.checked)(`aria-disabled`,h.disabled&&h.disabledInteractive?`true`:null),NI(9),nm(`matRippleTrigger`,g)(`matRippleDisabled`,h.disableRipple||h.disabled)(`matRippleCentered`,!0),NI(),GC(h.hideIcon?-1:11),NI(),nm(`for`,h.buttonId),tm(`id`,h._labelId)}},dependencies:[lo$1,Ht],styles:[`.mdc-switch {
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
`],encapsulation:2})})()}return i})();var na=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Js({type:i});static ɵinj=Ur({imports:[Pn,ya$1]})}return i})();var $a=(i,t)=>t.file.id;var Da=(i,t)=>t.id;var La=(i,t)=>t.field;function Ga(i,t){if(i&1&&(vT(0),OT(1,`categoryLabel`)),i&2){let e=Ub().$implicit;Ul(` `,FT(1,1,e.saved.category),` `)}}function Ua(i,t){i&1&&(Bl(0),jb(1,7),ea$1())}function za(i,t){if(i&1&&(vT(0),OT(1,`categoryLabel`)),i&2){let e=Ub().$implicit;Ul(` `,FT(1,1,e.file.category),` `)}}function Va(i,t){i&1&&(Bl(0),jb(1,8),ea$1())}function Xa(i,t){if(i&1){let e=tb();Fs(0,`tr`)(1,`td`)(2,`mat-checkbox`,19),Tm(`change`,function(r){let m=Af(e).$implicit,s=Ub(2);return xf(s.toggle(m.file.id,r.checked))}),Vb(3,14),Ll()(),Fs(4,`td`),vT(5),Ll(),Fs(6,`td`),vT(7),Ll(),Fs(8,`td`,20),vT(9),OT(10,`money`),$C(11,Ga,2,3)(12,Ua,2,0,`ng-container`),Ll(),Fs(13,`td`),vT(14),OT(15,`money`),$C(16,za,2,3)(17,Va,2,0,`ng-container`),Ll()()}if(i&2){let e=t.$implicit,n=Ub(2);tm(`data-correction`,e.kind),NI(2),bm(e.saved.description)(e.saved.date),Bb(3),nm(`checked`,!n.declined().has(e.file.id)),NI(3),Um(e.saved.date),NI(2),Um(e.saved.description),NI(2),Ul(` `,FT(10,10,e.saved.amount),` · `),NI(2),GC(e.saved.category?11:12),NI(3),Ul(` `,FT(15,12,e.file.amount),` · `),NI(2),GC(e.file.category?16:17)}}function Ba(i,t){if(i&1&&(Fs(0,`h4`),jb(1,0),Ll(),Fs(2,`p`),jb(3,1),Ll(),Fs(4,`div`,16)(5,`table`,17)(6,`thead`)(7,`tr`)(8,`th`,18),jb(9,2),Ll(),Fs(10,`th`,18),jb(11,3),Ll(),Fs(12,`th`,18),jb(13,4),Ll(),Fs(14,`th`,18),jb(15,5),Ll(),Fs(16,`th`,18),jb(17,6),Ll()()(),Fs(18,`tbody`),ZC(19,Xa,18,14,`tr`,null,$a),Ll()()()),i&2){Ub();let e=bT(0);NI(),bm(e.corrections.length),Bb(1),NI(18),YC(e.corrections)}}function Wa(i,t){if(i&1&&(Fs(0,`div`),vT(1),Fs(2,`span`,20),vT(3),Ll(),vT(4),Ll()),i&2){let e=t.$implicit;NI(),Ul(` `,e.field,`: `),NI(2),Um(e.before),NI(),Ul(` `,e.after,` `)}}function qa(i,t){if(i&1){let e=tb();Fs(0,`tr`)(1,`td`)(2,`mat-checkbox`,19),Tm(`change`,function(r){let m=Af(e).$implicit,s=Ub(2);return xf(s.toggle(m.id,r.checked))}),Vb(3,15),Ll()(),Fs(4,`td`),vT(5),Ll(),Fs(6,`td`),ZC(7,Wa,5,3,`div`,null,La),Ll()()}if(i&2){let e=t.$implicit,n=Ub(2);tm(`data-change`,e.id),NI(2),bm(e.label),Bb(3),nm(`checked`,!n.declined().has(e.id)),NI(3),Um(e.label),NI(2),YC(e.fields)}}function Ka(i,t){if(i&1&&(Fs(0,`h4`),jb(1,9),Ll(),Fs(2,`p`),jb(3,10),Ll(),Fs(4,`div`,16)(5,`table`,21)(6,`thead`)(7,`tr`)(8,`th`,18),jb(9,11),Ll(),Fs(10,`th`,18),jb(11,12),Ll(),Fs(12,`th`,18),jb(13,13),Ll()()(),Fs(14,`tbody`),ZC(15,qa,9,4,`tr`,null,Da),Ll()()()),i&2){Ub();let e=bT(0);NI(),bm(e.recordChanges.length),Bb(1),NI(14),YC(e.recordChanges)}}var en=class i$2{preview=eB.required();declined=eB.required();declinedChange=JV();toggle(t,e){let n=new Set(this.declined());e?n.delete(t):n.add(t),this.declinedChange.emit(n)}static ɵfac=function(e){return new(e||i$2)};static ɵcmp=IC({type:i$2,selectors:[[`app-import-updates`]],inputs:{preview:[1,`preview`],declined:[1,`declined`]},outputs:{declinedChange:`declinedChange`},decls:3,vars:3,consts:()=>{let t;t=$localize`Corrections to saved transactions`;let e;e=$localize`Corrections to transactions you already have (${`�0�`}:INTERPOLATION:)`;let n;n=$localize` These rows match a saved transaction but the file has a different amount or category. The saved transaction will be corrected. Untick one to leave it as it is; an unticked row with a different amount is then saved as a separate transaction. `;let r;r=$localize`Correct`;let m;m=$localize`Date`;let s;s=$localize`Description`;let h;h=$localize`You have`;let g;g=$localize`The file says`;let M;M=$localize`Correct ${`�0�`}:INTERPOLATION: on ${`�1�`}:INTERPOLATION_1:`;let C;C=$localize`no category`;let T;T=$localize`no category`;let z;z=$localize`Changes to saved records`;let f;f=$localize`Changes to what you already have (${`�0�`}:INTERPOLATION:)`;let L;L=$localize` The file has different values for these. They will be updated. Untick one to keep what you have. `;let N;N=$localize`Update`;let xe;xe=$localize`What`;let Fe;Fe=$localize`Change`;let Ie;return Ie=$localize`Update ${`�0�`}:INTERPOLATION:`,[e,n,r,m,s,h,g,C,T,f,L,N,xe,Fe,[`aria-label`,M],[`aria-label`,Ie],[1,`list`],[`aria-label`,t,`data-list`,`corrections`],[`scope`,`col`],[3,`change`,`checked`,6,`aria-label`],[1,`was`],[`aria-label`,z,`data-list`,`record-changes`]]},template:function(e,n){if(e&1&&(Zm(0),$C(1,Ba,21,1),$C(2,Ka,17,1)),e&2){let r=CT(n.preview());NI(),GC(r.corrections.length>0?1:-1),NI(),GC(r.recordChanges.length>0?2:-1)}},dependencies:[wt,pt,p,i],styles:[`.list[_ngcontent-%COMP%]{max-height:22rem;overflow:auto}table[_ngcontent-%COMP%]{border-collapse:collapse;width:100%}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:.25rem .5rem;text-align:left;vertical-align:top}.was[_ngcontent-%COMP%]{text-decoration:line-through;color:var(--%NS%mat-sys-on-surface-variant)}h4[_ngcontent-%COMP%]{margin:1rem 0 .25rem;font:var(--%NS%mat-sys-title-small)}`]})};var ja=(i,t)=>t.id;function Ha(i,t){if(i&1){let e=tb();Fs(0,`tr`)(1,`td`)(2,`mat-checkbox`,14),Tm(`change`,function(r){let m=Af(e).$implicit,s=Ub();return xf(s.toggle(m.id,r.checked))}),Vb(3,6),Ll()(),Fs(4,`td`),vT(5),Ll(),Fs(6,`td`),vT(7),Ll(),Fs(8,`td`),vT(9),Ll(),Fs(10,`td`,15),vT(11),OT(12,`money`),Ll()()}if(i&2){let e=t.$implicit,n=Ub();NI(2),bm(e.description)(e.date),Bb(3),nm(`checked`,n.kept().has(e.id)),NI(3),Um(e.date),NI(2),Um(e.account),NI(2),Um(e.description),NI(2),Um(FT(12,7,e.amount))}}var tn=class i$3{sort=new D({date:t=>t.date,account:t=>t.account,description:t=>t.description,amount:t=>t.amount});duplicates=eB.required();kept=eB.required();keptChange=JV();toggle(t,e){let n=new Set(this.kept());e?n.add(t):n.delete(t),this.keptChange.emit(n)}static ɵfac=function(e){return new(e||i$3)};static ɵcmp=IC({type:i$3,selectors:[[`app-reimport-duplicates`]],inputs:{duplicates:[1,`duplicates`],kept:[1,`kept`]},outputs:{keptChange:`keptChange`},decls:19,vars:5,consts:()=>{let t;t=$localize`Likely duplicates`;let e;e=$localize` ${`�0�`}:INTERPOLATION: transactions match ones you already have (same date, account, description and amount). They will be skipped. Tick any that are real new transactions. `;let n;n=$localize`Keep`;let r;r=$localize`Date`;let m;m=$localize`Account`;let s;s=$localize`Description`;let h;h=$localize` Amount `;let g;return g=$localize`Keep ${`�0�`}:INTERPOLATION: on ${`�1�`}:INTERPOLATION_1:`,[e,n,r,m,s,h,[`aria-label`,g],[1,`list`],[`aria-label`,t],[`scope`,`col`],[`scope`,`col`,`app-sort`,``,`sortKey`,`date`,3,`sort`],[`scope`,`col`,`app-sort`,``,`sortKey`,`account`,3,`sort`],[`scope`,`col`,`app-sort`,``,`sortKey`,`description`,3,`sort`],[`scope`,`col`,`app-sort`,``,`sortKey`,`amount`,`first`,`desc`,1,`amount`,3,`sort`],[3,`change`,`checked`,6,`aria-label`],[1,`amount`]]},template:function(e,n){e&1&&(Fs(0,`p`),jb(1,0),Ll(),Fs(2,`div`,7)(3,`table`,8)(4,`thead`)(5,`tr`)(6,`th`,9),jb(7,1),Ll(),Fs(8,`th`,10),jb(9,2),Ll(),Fs(10,`th`,11),jb(11,3),Ll(),Fs(12,`th`,12),jb(13,4),Ll(),Fs(14,`th`,13),jb(15,5),Ll()()(),Fs(16,`tbody`),ZC(17,Ha,13,9,`tr`,null,ja),Ll()()()),e&2&&(NI(),bm(n.duplicates().length),Bb(1),NI(7),nm(`sort`,n.sort),NI(2),nm(`sort`,n.sort),NI(2),nm(`sort`,n.sort),NI(2),nm(`sort`,n.sort),NI(3),YC(n.sort.apply(n.duplicates())))},dependencies:[Bo$1,wt,pt,C,i],styles:[`.list[_ngcontent-%COMP%]{max-height:20rem;overflow:auto}.amount[_ngcontent-%COMP%]{text-align:right;font-variant-numeric:tabular-nums}table[_ngcontent-%COMP%]{border-collapse:collapse;width:100%}td[_ngcontent-%COMP%]{padding:.125rem .5rem}`]})};var Ya=(i,t)=>t.type;var Qa=(i,t)=>t.account+t.windowStart;var Za=(i,t)=>t.returned.id;var ia=(i,t)=>t.id;var Ja=(i,t)=>t.income.id;var eo=(i,t)=>t.rowNumber;function to(i,t){i&1&&(Fs(0,`p`,36),vT(1),Ll()),i&2&&(NI(),Um(t))}function no(i,t){if(i&1){let e=tb();Fs(0,`mat-card`,37)(1,`mat-card-content`)(2,`h3`),jb(3,10),Ll(),Fs(4,`p`,54),jb(5,11),Ll(),Fs(6,`app-import-updates`,55),Tm(`declinedChange`,function(r){Af(e);let m=Ub();return xf(m.declinedChange.emit(r))}),Ll()()()}if(i&2){let e=Ub();NI(5),bm(e.preview().duplicates.length)(e.preview().duplicates.length)(e.preview().transactionsToSave)(e.preview().duplicates.length)(e.preview().corrections.length+e.preview().recordChanges.length)(e.preview().transactionsToSave),Bb(5),NI(),nm(`preview`,e.preview())(`declined`,e.declined())}}function io(i,t){if(i&1&&(Fs(0,`tr`)(1,`th`,41),vT(2),Ll(),Fs(3,`td`,42),vT(4),Ll()()),i&2){let e=t.$implicit;tm(`data-count`,e.type),NI(2),Um(e.label),NI(2),Um(e.count)}}function ao(i,t){if(i&1){let e=tb();Fs(0,`mat-card`,43)(1,`mat-card-content`)(2,`h3`),jb(3,12),Ll(),Fs(4,`p`),jb(5,13),Ll(),Fs(6,`mat-slide-toggle`,56),Tm(`change`,function(r){Af(e);let m=Ub();return xf(m.removeDoubleFeedChange.emit(r.checked))}),jb(7,14),Ll()()()}if(i&2){let e=t.$implicit,n=Ub();NI(5),bm(e.weeks)(e.weeks)(e.removed)(e.account)(e.windowStart)(e.cutoff)(e.weeks)(e.removed),Bb(5),NI(),nm(`checked`,n.removeDoubleFeed())}}function oo(i,t){if(i&1){let e=tb();Fs(0,`mat-card`,44)(1,`mat-card-content`)(2,`h3`),jb(3,15),Ll(),Fs(4,`app-reimport-duplicates`,57),Tm(`keptChange`,function(r){Af(e);let m=Ub();return xf(m.keptDuplicatesChange.emit(r))}),Ll()()()}if(i&2){let e=Ub();NI(4),nm(`duplicates`,e.preview().duplicates)(`kept`,e.keptDuplicates())}}function ro(i,t){if(i&1&&(Fs(0,`li`),jb(1,18),OT(2,`money`),OT(3,`money`),Ll()),i&2){let e=t.$implicit;NI(3),bm(e.returned.date)(e.returned.description)(FT(2,5,e.returned.amount))(e.original.date)(FT(3,7,e.original.amount)),Bb(1)}}function co(i,t){if(i&1&&(Fs(0,`li`),jb(1,19),OT(2,`money`),Ll()),i&2){let e=t.$implicit;NI(2),bm(e.date)(e.description)(FT(2,3,e.amount)),Bb(1)}}function so(i,t){if(i&1&&(Fs(0,`mat-card`,45)(1,`mat-card-content`)(2,`h3`),jb(3,16),Ll(),Fs(4,`p`),jb(5,17),Ll(),Fs(6,`ul`),ZC(7,ro,4,9,`li`,null,Za),ZC(9,co,3,5,`li`,null,ia),Ll()()()),i&2){let e=Ub();NI(7),YC(e.preview().returnedPayments),NI(2),YC(e.preview().unmatchedReturns)}}function lo(i,t){if(i&1&&(Fs(0,`li`),vT(1),OT(2,`money`),Ll()),i&2){let e=t.$implicit;NI(),zm(``,e.date,` `,e.description,` `,FT(2,3,e.amount))}}function mo(i,t){if(i&1&&(Fs(0,`mat-card`,46)(1,`mat-card-content`)(2,`h3`),jb(3,20),Ll(),Fs(4,`p`),jb(5,21),Ll(),Fs(6,`ul`),ZC(7,lo,3,5,`li`,null,ia),Ll()()()),i&2){let e=Ub();NI(7),YC(e.preview().refunds)}}function _o(i,t){if(i&1&&(Fs(0,`li`),jb(1,24),OT(2,`money`),Ll()),i&2){let e=t.$implicit;NI(2),bm(e.income.date)(e.income.description)(FT(2,6,e.income.amount))(e.transfer.date)(e.transfer.description)(e.transfer.account),Bb(1)}}function po(i,t){if(i&1&&(Fs(0,`mat-card`,47)(1,`mat-card-content`)(2,`h3`),jb(3,22),Ll(),Fs(4,`p`),jb(5,23),Ll(),Fs(6,`ul`),ZC(7,_o,3,8,`li`,null,Ja),Ll()()()),i&2){let e=Ub();NI(7),YC(e.preview().mirrors)}}function ho(i,t){if(i&1&&(Fs(0,`tr`)(1,`td`),vT(2),Ll(),Fs(3,`td`),vT(4),Ll()()),i&2){let e=t.$implicit;NI(2),Um(e.rowNumber??``),NI(2),Um(e.message)}}function uo(i,t){if(i&1&&(Fs(0,`mat-card`,48)(1,`mat-card-content`)(2,`h3`),jb(3,25),Ll(),Fs(4,`p`),jb(5,26),Ll(),Fs(6,`table`,58)(7,`thead`)(8,`tr`)(9,`th`,59),jb(10,27),Ll(),Fs(11,`th`,60),jb(12,28),Ll()()(),Fs(13,`tbody`),ZC(14,ho,5,2,`tr`,null,WC),Ll()()()()),i&2){let e=Ub();NI(3),bm(e.preview().warnings.length),Bb(3),NI(6),nm(`sort`,e.warningSort),NI(2),nm(`sort`,e.warningSort),NI(3),YC(e.warningSort.apply(e.preview().warnings))}}function go(i,t){if(i&1&&vT(0),i&2){let e=Ub().$implicit;Ul(` `,e.recordType,` `)}}function bo(i,t){i&1&&(Bl(0),jb(1,34),ea$1())}function fo(i,t){if(i&1&&(Fs(0,`tr`)(1,`td`),vT(2),Ll(),Fs(3,`td`),$C(4,go,1,1)(5,bo,2,0,`ng-container`),Ll(),Fs(6,`td`),vT(7),Ll()()),i&2){let e=t.$implicit;NI(2),Um(e.rowNumber),NI(2),GC(e.recordType?4:5),NI(3),Um(e.reason)}}function yo(i,t){if(i&1&&(Fs(0,`mat-card`,49)(1,`mat-card-content`)(2,`h3`),jb(3,29),Ll(),Fs(4,`p`),jb(5,30),Ll(),Fs(6,`table`,61)(7,`thead`)(8,`tr`)(9,`th`,59),jb(10,31),Ll(),Fs(11,`th`,62),jb(12,32),Ll(),Fs(13,`th`,63),jb(14,33),Ll()()(),Fs(15,`tbody`),ZC(16,fo,8,3,`tr`,null,eo),Ll()()()()),i&2){let e=Ub();NI(3),bm(e.preview().skipped.length),Bb(3),NI(6),nm(`sort`,e.skippedSort),NI(2),nm(`sort`,e.skippedSort),NI(2),nm(`sort`,e.skippedSort),NI(3),YC(e.skippedSort.apply(e.preview().skipped))}}var ko={transaction:$localize`:Kind of row in a CSV file:Transaction rows`,debt:$localize`:Kind of row in a CSV file:Debts`,income:$localize`:Kind of row in a CSV file:Income sources`,deduction:$localize`:Kind of row in a CSV file:Payroll deductions`,bill:$localize`:Kind of row in a CSV file:Bills`,balance:$localize`:Kind of row in a CSV file:Cash balances`,schedule:$localize`:Kind of row in a CSV file:Payment schedule changes`,windfall:$localize`:Kind of row in a CSV file:Windfalls`};var nn=class i$4{warningSort=new D({row:t=>t.rowNumber,message:t=>t.message});skippedSort=new D({row:t=>t.rowNumber,type:t=>t.recordType,reason:t=>t.reason});preview=eB.required();notice=eB(null);removeDoubleFeed=eB.required();keptDuplicates=eB.required();declined=eB(/* @__PURE__ */ new Set);declinedChange=JV();removeDoubleFeedChange=JV();keptDuplicatesChange=JV();confirmed=JV();cancelled=JV();countRows=HT(()=>Object.entries(this.preview().counts).map(([t,e])=>({type:t,count:e,label:ko[t]??t})));toSave=HT(()=>{let t=this.declined(),e=this.preview().corrections.filter(n=>n.kind===`amount`&&t.has(n.file.id)).length;return this.preview().transactionsToSave+this.keptDuplicates().size+e});static ɵfac=function(e){return new(e||i$4)};static ɵcmp=IC({type:i$4,selectors:[[`app-import-preview`]],inputs:{preview:[1,`preview`],notice:[1,`notice`],removeDoubleFeed:[1,`removeDoubleFeed`],keptDuplicates:[1,`keptDuplicates`],declined:[1,`declined`]},outputs:{declinedChange:`declinedChange`,removeDoubleFeedChange:`removeDoubleFeedChange`,keptDuplicatesChange:`keptDuplicatesChange`,confirmed:`confirmed`,cancelled:`cancelled`},decls:53,vars:19,consts:()=>{let t;t=$localize`Records per type`;let e;e=$localize`Totals`;let n;n=$localize` Nothing is saved yet. Look over the preview, then press ${`�#2�`}:START_TAG_STRONG:Confirm${`�/#2�`}:CLOSE_TAG_STRONG: at the bottom of the window to import. `;let r;r=$localize`What is in the file`;let m;m=$localize`Totals`;let s;s=$localize`Income`;let h;h=$localize`Spending`;let g;g=$localize`Debt`;let M;M=$localize` Income leaves out money moved from your own accounts. Spending is money out less refunds, leaving out transfers, card payments, returned payments and loan statements. Debt is the sum of the debt balances in the file. `;let C;C=$localize`{VAR_PLURAL, plural, =1 {1 transaction will be saved.} other {{INTERPOLATION} transactions will be saved.}}`,C=Hb(C,{INTERPOLATION:`�1�`,VAR_PLURAL:`�0�`});let T;T=$localize` ${C}:ICU@@2604519014464367128: `;let z;z=$localize`Confirm`;let f;f=$localize`:Closes a dialog without doing anything: Cancel `;let L;L=$localize`Updating your data`;let N;N=$localize`{VAR_PLURAL_2, plural, =1 {{VAR_PLURAL, plural, =1 {What you already have stays. This file adds {START_TAG_STRONG}1{CLOSE_TAG_STRONG} new transaction; {INTERPOLATION} already saved is skipped; and {INTERPOLATION_1} will be corrected.} other {What you already have stays. This file adds {START_TAG_STRONG}1{CLOSE_TAG_STRONG} new transaction; {INTERPOLATION} already saved are skipped; and {INTERPOLATION_1} will be corrected.}}} other {{VAR_PLURAL_1, plural, =1 {What you already have stays. This file adds {START_TAG_STRONG}{INTERPOLATION_2}{CLOSE_TAG_STRONG} new transactions; {INTERPOLATION} already saved is skipped; and {INTERPOLATION_1} will be corrected.} other {What you already have stays. This file adds {START_TAG_STRONG}{INTERPOLATION_2}{CLOSE_TAG_STRONG} new transactions; {INTERPOLATION} already saved are skipped; and {INTERPOLATION_1} will be corrected.}}}}`,N=Hb(N,{CLOSE_TAG_STRONG:`</strong>`,INTERPOLATION:`�3�`,INTERPOLATION_1:`�4�`,INTERPOLATION_2:`�5�`,START_TAG_STRONG:`<strong>`,VAR_PLURAL:`�0�`,VAR_PLURAL_1:`�1�`,VAR_PLURAL_2:`�2�`});let xe;xe=$localize` ${N}:ICU@@488057365159253509: `;let Fe;Fe=$localize`Rows imported twice`;let Ie;Ie=$localize`{VAR_PLURAL_2, plural, =1 {{INTERPOLATION}: from {INTERPOLATION_1} to the day before {INTERPOLATION_2} ({VAR_PLURAL, plural, =1 {1 week} other {{INTERPOLATION_3} weeks}}) most rows appear twice. 1 copy will be removed.} other {{INTERPOLATION}: from {INTERPOLATION_1} to the day before {INTERPOLATION_2} ({VAR_PLURAL_1, plural, =1 {1 week} other {{INTERPOLATION_3} weeks}}) most rows appear twice. {INTERPOLATION_4} copies will be removed.}}`,Ie=Hb(Ie,{INTERPOLATION:`�3�`,INTERPOLATION_1:`�4�`,INTERPOLATION_2:`�5�`,INTERPOLATION_3:`�6�`,INTERPOLATION_4:`�7�`,VAR_PLURAL:`�0�`,VAR_PLURAL_1:`�1�`,VAR_PLURAL_2:`�2�`});let H;H=$localize` ${Ie}:ICU@@8857912880632126738: `;let Oe;Oe=$localize` Remove the copies `;let Y;Y=$localize`Already imported`;let l;l=$localize`Returned payments`;let c;c=$localize`A payment that bounced cancels out with the original payment.`;let p;p=$localize` ${`�0�`}:INTERPOLATION: ${`�1�`}:INTERPOLATION_1: ${`�2�`}:INTERPOLATION_2: matches ${`�3�`}:INTERPOLATION_3: ${`�4�`}:INTERPOLATION_4: `;let E;E=$localize` ${`�0�`}:INTERPOLATION: ${`�1�`}:INTERPOLATION_1: ${`�2�`}:INTERPOLATION_2:: no matching payment found `;let k;k=$localize`Refunds`;let $;$=$localize`Refunds reduce spending on the line they belong to.`;let me;me=$localize`May be your own money coming back`;let fe;fe=$localize` These deposits follow a transfer out of the same amount, so they are not counted as income. `;let Re;Re=$localize` ${`�0�`}:INTERPOLATION: ${`�1�`}:INTERPOLATION_1: ${`�2�`}:INTERPOLATION_2: after ${`�3�`}:INTERPOLATION_3: ${`�4�`}:INTERPOLATION_4: on ${`�5�`}:INTERPOLATION_5: `;let j;j=$localize`Flagged rows`;let he;he=$localize`Check these rows (${`�0�`}:INTERPOLATION:)`;let P;P=$localize`They will be imported, but something looks off.`;let _e;_e=$localize` Row `;let O;O=$localize` What to check `;let A;A=$localize`Skipped rows`;let S;S=$localize`Skipped rows (${`�0�`}:INTERPOLATION:)`;let se;se=$localize`These rows are not imported. Fix them in the CSV and import again.`;let y;y=$localize` Row `;let ae;ae=$localize` Record type `;let Ne;Ne=$localize` Reason `;let U;return U=$localize`(no type)`,[n,r,m,s,h,g,M,T,z,f,L,xe,Fe,H,Oe,Y,l,c,p,E,k,$,me,fe,Re,he,P,_e,O,S,se,y,ae,Ne,U,[`data-note`,`not-saved`,1,`lead`],[`role`,`status`,1,`notice`],[`appearance`,`outlined`,`data-section`,`update`],[`appearance`,`outlined`],[`aria-label`,t],[`aria-label`,e],[`scope`,`row`],[1,`num`],[`appearance`,`outlined`,`data-section`,`double-feed`],[`appearance`,`outlined`,`data-section`,`duplicates`],[`appearance`,`outlined`,`data-section`,`returns`],[`appearance`,`outlined`,`data-section`,`refunds`],[`appearance`,`outlined`,`data-section`,`mirrors`],[`appearance`,`outlined`,`data-section`,`warnings`],[`appearance`,`outlined`,`data-section`,`skipped`],[1,`confirm-bar`],[1,`actions`],[`mat-flat-button`,``,`type`,`button`,3,`click`],[`mat-button`,``,`type`,`button`,3,`click`],[`data-note`,`update-summary`],[3,`declinedChange`,`preview`,`declined`],[3,`change`,`checked`],[3,`keptChange`,`duplicates`,`kept`],[`aria-label`,j],[`scope`,`col`,`app-sort`,``,`sortKey`,`row`,3,`sort`],[`scope`,`col`,`app-sort`,``,`sortKey`,`message`,3,`sort`],[`aria-label`,A],[`scope`,`col`,`app-sort`,``,`sortKey`,`type`,3,`sort`],[`scope`,`col`,`app-sort`,``,`sortKey`,`reason`,3,`sort`]]},template:function(e,n){if(e&1&&(Fs(0,`p`,35),wm(1,0),rm(2,`strong`),Cm(),Ll(),$C(3,to,2,1,`p`,36),$C(4,no,7,8,`mat-card`,37),Fs(5,`mat-card`,38)(6,`mat-card-content`)(7,`h3`),jb(8,1),Ll(),Fs(9,`table`,39)(10,`tbody`),ZC(11,io,5,3,`tr`,null,Ya),Ll()(),Fs(13,`h3`),jb(14,2),Ll(),Fs(15,`table`,40)(16,`tbody`)(17,`tr`)(18,`th`,41),jb(19,3),Ll(),Fs(20,`td`,42),vT(21),OT(22,`money`),Ll()(),Fs(23,`tr`)(24,`th`,41),jb(25,4),Ll(),Fs(26,`td`,42),vT(27),OT(28,`money`),Ll()(),Fs(29,`tr`)(30,`th`,41),jb(31,5),Ll(),Fs(32,`td`,42),vT(33),OT(34,`money`),Ll()()()(),Fs(35,`p`),jb(36,6),Ll()()(),ZC(37,ao,8,9,`mat-card`,43,Qa),$C(39,oo,5,2,`mat-card`,44),$C(40,so,11,0,`mat-card`,45),$C(41,mo,9,0,`mat-card`,46),$C(42,po,9,0,`mat-card`,47),$C(43,uo,16,3,`mat-card`,48),$C(44,yo,18,4,`mat-card`,49),Fs(45,`div`,50)(46,`p`),jb(47,7),Ll(),Fs(48,`div`,51)(49,`button`,52),Tm(`click`,function(){return n.confirmed.emit()}),jb(50,8),Ll(),Fs(51,`button`,53),Tm(`click`,function(){return n.cancelled.emit()}),jb(52,9),Ll()()()),e&2){let r;NI(3),GC((r=n.notice())?3:-1,r),NI(),GC(n.preview().updating?4:-1),NI(7),YC(n.countRows()),NI(10),Um(FT(22,13,n.preview().totals.income)),NI(6),Um(FT(28,15,n.preview().totals.spending)),NI(6),Um(FT(34,17,n.preview().totals.debt)),NI(4),YC(n.preview().doubleFeed.windows),NI(2),GC(n.preview().duplicates.length>0?39:-1),NI(),GC(n.preview().returnedPayments.length>0||n.preview().unmatchedReturns.length>0?40:-1),NI(),GC(n.preview().refunds.length>0?41:-1),NI(),GC(n.preview().mirrors.length>0?42:-1),NI(),GC(n.preview().warnings.length>0?43:-1),NI(),GC(n.preview().skipped.length>0?44:-1),NI(3),bm(n.toSave())(n.toSave()),Bb(47)}},dependencies:[Bo$1,zo$1,A,I,_,na,Pn,C,en,tn,i],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;gap:1rem}table[_ngcontent-%COMP%]{border-collapse:collapse}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{text-align:left;padding:.125rem .75rem .125rem 0;vertical-align:top}.num[_ngcontent-%COMP%]{text-align:right;font-variant-numeric:tabular-nums}.notice[_ngcontent-%COMP%]{padding:.5rem 1rem;border-radius:.5rem;background:var(--%NS%mat-sys-secondary-container);color:var(--%NS%mat-sys-on-secondary-container)}.lead[_ngcontent-%COMP%]{margin:0}.confirm-bar[_ngcontent-%COMP%]{position:sticky;bottom:0;z-index:1;display:flex;flex-wrap:wrap;align-items:center;gap:.5rem 1rem;margin:0 -.5rem;padding:.75rem .5rem;background:var(--%NS%app-bg);border-top:1px solid var(--%NS%app-border)}.confirm-bar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{flex:1 1 12rem;margin:0;font-weight:500}.actions[_ngcontent-%COMP%]{display:flex;gap:.5rem}h3[_ngcontent-%COMP%]{margin:0 0 .5rem}`]})};var vo=()=>({});var So=i=>({columns:i,flipSign:!1});var To=(i,t)=>t.bank;function Eo(i,t){i&1&&(Fs(0,`p`),jb(1,2),Ll(),Fs(2,`a`,38),jb(3,3),Ll())}function Co(i,t){i&1&&(Fs(0,`p`,41),jb(1,7),Ll())}function xo(i,t){i&1&&(Fs(0,`p`,44)(1,`mat-icon`,54),vT(2,`info`),Ll(),Fs(3,`span`),wm(4,8),rm(5,`strong`),Cm(),Ll()()),i&2&&(NI(5),bm(t),Bb(4))}function Ro(i,t){if(i&1){let e=tb();Fs(0,`button`,55),Tm(`click`,function(){Af(e);let r=Ub(3);return xf(r.importSample())}),Bl(1),jb(2,9),ea$1(),Ll()}}function Mo(i,t){i&1&&(Fs(0,`span`,59),jb(1,13),Ll())}function Po(i,t){if(i&1){let e=tb();Fs(0,`section`,51)(1,`h2`,56),jb(2,10),Ll(),Fs(3,`p`,57),jb(4,11),Ll(),Fs(5,`button`,58),Tm(`click`,function(){Af(e);let r=Ub(3);return xf(r.refreshBank())}),Fs(6,`mat-icon`,48),vT(7,`sync`),Ll(),Bl(8),jb(9,12),ea$1(),Ll(),$C(10,Mo,2,0,`span`,59),Ll()}if(i&2){let e=Ub(3);NI(5),nm(`disabled`,e.bank.busy()),NI(5),GC(e.bank.busy()?10:-1)}}function wo(i,t){if(i&1&&(Fs(0,`span`,62),jb(1,17),Ll()),i&2){let e=Ub(4);NI(),bm(e.plaidWait()),Bb(1)}}function Io(i,t){i&1&&(Fs(0,`span`,59),jb(1,18),Ll())}function Oo(i,t){if(i&1){let e=tb();Fs(0,`section`,52)(1,`h2`,60),jb(2,14),Ll(),Fs(3,`p`,57),jb(4,15),Ll(),Fs(5,`button`,61),Tm(`click`,function(){Af(e);let r=Ub(3);return xf(r.refreshPlaid())}),Fs(6,`mat-icon`,48),vT(7,`sync`),Ll(),Bl(8),jb(9,16),ea$1(),Ll(),$C(10,wo,2,1,`span`,62),$C(11,Io,2,0,`span`,59),Ll()}if(i&2){let e=Ub(3);NI(5),nm(`disabled`,e.plaid.busy()||e.plaidWait()>0),NI(5),GC(e.plaidWait()>0?10:-1),NI(),GC(e.plaid.busy()?11:-1)}}function No(i,t){i&1&&(Bl(0),jb(1,19),ea$1())}function Ao(i,t){i&1&&(Bl(0),jb(1,20),ea$1())}function Fo(i,t){i&1&&(Fs(0,`p`,57),jb(1,21),Ll())}function $o(i,t){i&1&&(Fs(0,`p`,57),jb(1,22),Ll())}function Do(i,t){i&1&&(Bl(0),jb(1,23),ea$1())}function Lo(i,t){i&1&&(Bl(0),jb(1,24),ea$1())}function Go(i,t){if(i&1&&(Fs(0,`section`,53)(1,`h2`,63)(2,`mat-icon`,54),vT(3,`account_balance`),Ll(),$C(4,No,2,0,`ng-container`)(5,Ao,2,0,`ng-container`),Ll(),$C(6,Fo,2,0,`p`,57)(7,$o,2,0,`p`,57),Fs(8,`a`,64)(9,`mat-icon`,48),vT(10,`link`),Ll(),$C(11,Do,2,0,`ng-container`)(12,Lo,2,0,`ng-container`),Ll()()),i&2){let e=Ub(3);NI(4),GC(e.bank.connected()?4:5),NI(2),GC(e.bank.connected()?6:7),NI(5),GC(e.bank.connected()?11:12)}}function Uo(i,t){if(i&1){let e=tb();$C(0,Co,2,0,`p`,41),Fs(1,`p`,42),wm(2,4),rm(3,`a`,43),Cm(),Ll(),$C(4,xo,6,1,`p`,44),Fs(5,`div`,45),Tm(`dragover`,function(r){Af(e);let m=Ub(2);return xf(m.onDragOver(r))})(`dragleave`,function(){Af(e);let r=Ub(2);return xf(r.dragging.set(!1))})(`drop`,function(r){Af(e);let m=Ub(2);return xf(m.onDrop(r))}),Fs(6,`p`),jb(7,5),Ll(),Fs(8,`div`,46)(9,`button`,47),Tm(`click`,function(){Af(e);let r=Qb(16);return xf(r.click())}),Fs(10,`mat-icon`,48),vT(11,`upload_file`),Ll(),Bl(12),jb(13,6),ea$1(),Ll(),$C(14,Ro,3,0,`button`,49),Ll(),Fs(15,`input`,50,0),Tm(`change`,function(r){Af(e);let m=Ub(2);return xf(m.onFileInput(r))}),Ll()(),$C(17,Po,11,2,`section`,51),$C(18,Oo,12,3,`section`,52),$C(19,Go,13,3,`section`,53)}if(i&2){let e,n=Ub(2);GC(n.store.isSample()?0:-1),NI(4),GC((e=n.latestSaved())?4:-1,e),NI(),Fm(`over`,n.dragging()),NI(9),GC(n.store.isSample()?14:-1),NI(3),GC(n.bank.mapped()?17:-1),NI(),GC(n.plaid.mapped()?18:-1),NI(),GC(!n.bank.mapped()&&!n.plaid.mapped()&&!n.store.isSample()?19:-1)}}function zo(i,t){if(i&1){let e=tb();Fs(0,`app-column-mapper`,65),Tm(`confirmed`,function(r){Af(e);let m=Ub(2);return xf(m.onMapped(r))})(`cancelled`,function(){Af(e);let r=Ub(2);return xf(r.reset())}),Ll()}if(i&2){let e=Ub(2);nm(`headers`,e.headers())(`rows`,e.rawRows().slice(0,50))(`initial`,e.mapping()??xT(5,So,AT(4,vo)))(`incomeNames`,e.incomeNames())}}function Vo(i,t){if(i&1&&(Fs(0,`li`),vT(1),Ll()),i&2){let e=t.$implicit;NI(),Um(e)}}function Xo(i,t){if(i&1&&(Fs(0,`div`,70)(1,`mat-icon`,54),vT(2,`info`),Ll(),Fs(3,`div`)(4,`p`),jb(5,26),Ll(),Fs(6,`ul`),ZC(7,Vo,2,1,`li`,null,qC),Ll()()()),i&2){let e=Ub();NI(7),YC(e.messages)}}function Bo(i,t){i&1&&(Fs(0,`h2`,69),jb(1,25),Ll(),$C(2,Xo,9,0,`div`,70)),i&2&&(NI(2),GC(t.messages.length>0?2:-1))}function Wo(i,t){if(i&1&&(Fs(0,`li`)(1,`strong`),vT(2),Ll(),vT(3),Ll()),i&2){let e=t.$implicit;NI(2),Um(e.bank),NI(),Ul(`: `,e.message,` `)}}function qo(i,t){if(i&1&&(Fs(0,`div`,71)(1,`mat-icon`,54),vT(2,`info`),Ll(),Fs(3,`div`)(4,`p`),jb(5,28),Ll(),Fs(6,`ul`),ZC(7,Wo,4,2,`li`,null,To),Ll()()()),i&2){let e=Ub();NI(7),YC(e.failures)}}function Ko(i,t){if(i&1&&(Fs(0,`p`,72)(1,`mat-icon`,54),vT(2,`info`),Ll(),Fs(3,`span`),jb(4,29),Ll()()),i&2){let e=Ub();NI(4),bm(e.changedAtBank)(e.changedAtBank),Bb(4)}}function jo(i,t){if(i&1&&(Fs(0,`p`,73)(1,`mat-icon`,54),vT(2,`schedule`),Ll(),Fs(3,`span`),vT(4),Ll()()),i&2){let e=t.$implicit;NI(4),Um(e)}}function Ho(i,t){if(i&1&&(Fs(0,`h2`,69),jb(1,27),Ll(),$C(2,qo,9,0,`div`,71),$C(3,Ko,5,2,`p`,72),ZC(4,jo,5,1,`p`,73,qC)),i&2){let e=t;NI(2),GC(e.failures.length>0?2:-1),NI(),GC(e.changedAtBank>0?3:-1),NI(),YC(e.notes)}}function Yo(i,t){if(i&1&&(Fs(0,`h2`),jb(1,30),Ll()),i&2){let e=Ub(4);NI(),bm(e.fileName()),Bb(1)}}function Qo(i,t){if(i&1){let e=tb();Fs(0,`app-bank-categories`,74),Wm(`picksChange`,function(r){Af(e);let m=Ub(4);return wT(m.categoryPicks,r)||(m.categoryPicks=r),xf(r)}),Ll()}if(i&2){let e=Ub(4);nm(`rows`,e.needsCategory()),Gm(`picks`,e.categoryPicks)}}function Zo(i,t){if(i&1){let e=tb();Fs(0,`app-bank-categories`,75),Wm(`picksChange`,function(r){Af(e);let m=Ub(4);return wT(m.categoryPicks,r)||(m.categoryPicks=r),xf(r)}),Ll()}if(i&2){let e=Ub(4);nm(`rows`,e.guessedCategory())(`guessed`,!0),Gm(`picks`,e.categoryPicks)}}function Jo(i,t){if(i&1){let e=tb();$C(0,Bo,3,1)(1,Ho,6,2)(2,Yo,2,1,`h2`),$C(3,Qo,1,2,`app-bank-categories`,66),$C(4,Zo,1,3,`app-bank-categories`,67),Fs(5,`app-import-preview`,68),Tm(`declinedChange`,function(r){Af(e);let m=Ub(3);return xf(m.declined.set(r))})(`removeDoubleFeedChange`,function(r){Af(e);let m=Ub(3);return xf(m.setRemoveDoubleFeed(r))})(`keptDuplicatesChange`,function(r){Af(e);let m=Ub(3);return xf(m.keptDuplicates.set(r))})(`confirmed`,function(){Af(e);let r=Ub(3);return xf(r.confirm())})(`cancelled`,function(){Af(e);let r=Ub(3);return xf(r.reset())}),Ll()}if(i&2){let e,n=Ub(3);GC((e=n.bankSync())?0:(e=n.plaidSync())?1:2,e),NI(3),GC(n.needsCategory().length>0?3:-1),NI(),GC(n.guessedCategory().length>0?4:-1),NI(),nm(`preview`,t.preview)(`notice`,n.notice())(`removeDoubleFeed`,n.removeDoubleFeed())(`keptDuplicates`,n.keptDuplicates())(`declined`,n.declined())}}function er(i,t){if(i&1&&$C(0,Jo,6,8),i&2){let e,n=Ub(2);GC((e=n.prepared())?0:-1,e)}}function tr(i,t){if(i&1){let e=tb();Fs(0,`p`,76),vT(1),Ll(),Fs(2,`section`,77)(3,`h2`,78),jb(4,31),Ll(),Fs(5,`ol`)(6,`li`),wm(7,32),rm(8,`a`,79),Cm(),Ll(),Fs(9,`li`),wm(10,33),rm(11,`a`,80),Cm(),Ll(),Fs(12,`li`),wm(13,34),rm(14,`a`,81),Cm(),Ll(),Fs(15,`li`),wm(16,35),rm(17,`a`,82),Cm(),Ll()(),Fs(18,`div`,83)(19,`a`,84),jb(20,36),Ll(),Fs(21,`button`,55),Tm(`click`,function(){Af(e);let r=Ub(2);return xf(r.reset())}),jb(22,37),Ll()()()}if(i&2){let e=Ub(2);NI(),Um(e.savedMessage())}}function nr(i,t){i&1&&(Fs(0,`p`,40),vT(1),Ll()),i&2&&(NI(),Um(t))}function ir(i,t){if(i&1&&($C(0,Uo,20,8)(1,zo,1,7,`app-column-mapper`,39)(2,er,1,1)(3,tr,23,1),$C(4,nr,2,1,`p`,40)),i&2){let e,n,r=Ub();GC((e=r.step())===`pick`?0:e===`map`?1:e===`preview`?2:e===`done`?3:-1),NI(4),GC((n=r.error())?4:-1,n)}}var ar=`Bank connection (SimpleFIN)`;var or=`Bank connection (Plaid)`;var rr=$localize`This file uses the older template (v1). It was imported; the newer columns (account type, link, credit limit and others) are empty.`;var aa=class i{store=v$1(hs);route=v$1(W);router=v$1(le);bank=v$1(X);plaid=v$1(te);plaidWait=vn$1();step=os(`pick`);dragging=os(!1);error=os(null);fileName=os(``);headers=os([]);rawRows=os([]);notice=os(null);mapping=os(null);newMappingSignature=os(null);templateRows=os([]);removeDoubleFeed=os(!0);prepared=os(null);keptDuplicates=os(/* @__PURE__ */ new Set);declined=os(/* @__PURE__ */ new Set);latestSaved=HT(()=>(this.store.data()?.transactions??[]).reduce((t,e)=>e.date>t?e.date:t,``));savedMessage=os(``);bankSync=os(null);plaidSync=os(null);needsCategory=HT(()=>{let t=this.prepared();return t?We$1(t):[]});guessedCategory=HT(()=>{let t=this.prepared();return t?_e(t):[]});categoryPicks=os({});incomeNames=HT(()=>this.store.data()?.incomes.map(t=>t.name)??[]);ngOnInit(){let t=this.bank.takePending();if(t){this.startBankImport(t);return}let e=this.plaid.takePending();if(e){this.startPlaidImport(e);return}this.store.isSample()&&this.route.snapshot.queryParamMap.has(`sample`)&&this.importSample()}startBankImport(t){this.reset(),this.fileName.set(ar),this.bankSync.set(t),this.templateRows.set(t.rows),this.prepare()}startPlaidImport(t){this.reset(),this.fileName.set(or),this.plaidSync.set(t),this.templateRows.set(t.rows),this.prepare()}async refreshPlaid(){this.error.set(null);let t=await this.plaid.refresh();if(!t.ok){this.error.set(t.message);return}this.startPlaidImport(t.value)}async refreshBank(){this.error.set(null);let t=await this.bank.sync();if(!t.ok){this.error.set(t.message);return}this.startBankImport(t.value)}onDragOver(t){t.preventDefault(),this.dragging.set(!0)}async onDrop(t){t.preventDefault(),this.dragging.set(!1);let e=t.dataTransfer?.files[0];e&&await this.readFile(e)}async onFileInput(t){let e=t.target,n=e.files?.[0];e.value=``,n&&await this.readFile(n)}async importSample(){let{csv:t}=await Ee();this.start(t,Ae)}onMapped(t){this.mapping.set(t),this.newMappingSignature.set(yn(this.headers())),this.templateRows.set(kn(this.rawRows(),t)),this.prepare()}setRemoveDoubleFeed(t){this.removeDoubleFeed.set(t),this.prepare()}confirm(){let t=this.prepared();if(!t)return;let e=De(t),n=this.keptDuplicates();e.skipTransactionIds=e.skipTransactionIds.filter(N=>!n.has(N));let r=this.declined();e.declinedCorrections=t.preview.corrections.map(N=>N.file.id).filter(N=>r.has(N)),e.keepExisting=t.preview.recordChanges.map(N=>N.id).filter(N=>r.has(N));let m=this.newMappingSignature(),s=this.mapping();m&&s&&(e.mapping={signature:m,mapping:s});let h=this.bankSync(),g=h?`simplefin`:this.plaidSync()?`plaid`:`csv`,M=Object.entries(this.categoryPicks()),C=(/* @__PURE__ */ new Date()).toISOString();this.store.update(N=>{let xe=Re(N,t,e,this.fileName(),oa(),g);for(let[Fe,Ie]of M)xe=Yf(xe,Fe,{category:Ie},C);return xe}),h&&this.bank.markSynced(h.end);let T=this.plaidSync();T&&this.plaid.confirm(T);let z=t.preview.corrections.filter(N=>N.kind===`amount`&&r.has(N.file.id)).length,f=t.preview.transactionsToSave+n.size+z,L=t.preview.corrections.length+t.preview.recordChanges.length-r.size;this.savedMessage.set((f===1?$localize`Imported ${this.fileName()}\: 1 transaction saved.`:$localize`Imported ${this.fileName()}\: ${f} transactions saved.`)+(L>0?` `+$localize`${L} corrected.`:``)),this.step.set(`done`),this.prepared.set(null),this.bankSync.set(null),this.plaidSync.set(null),this.categoryPicks.set({})}reset(){this.step.set(`pick`),this.error.set(null),this.notice.set(null),this.mapping.set(null),this.newMappingSignature.set(null),this.prepared.set(null),this.removeDoubleFeed.set(!0),this.keptDuplicates.set(/* @__PURE__ */ new Set),this.declined.set(/* @__PURE__ */ new Set),this.bankSync.set(null),this.plaidSync.set(null),this.categoryPicks.set({}),this.route.snapshot.queryParamMap.has(`sample`)&&this.router.navigate([],{queryParams:{}})}async readFile(t){try{this.start(await t.text(),t.name)}catch(e){this.error.set(tn$1(e,`import`))}}start(t,e){this.reset();let{headers:n,rows:r}=Xi(t);if(n.length===0||r.length===0){this.error.set($localize`That file has no header row or no data rows.`);return}this.fileName.set(e),this.headers.set(n),this.rawRows.set(r);let m=s(n);if(m!==`unknown`){this.notice.set(m===`v1`?rr:null),this.templateRows.set(r),this.prepare();return}let s$1=this.store.data()?.columnMappings[yn(n)];if(s$1){this.mapping.set(s$1),this.templateRows.set(kn(r,s$1)),this.prepare();return}this.mapping.set(Bi(n,r.slice(0,20))),this.step.set(`map`)}prepare(){let t=this.store.data();if(!t)return;let e={importId:crypto.randomUUID(),newId:()=>crypto.randomUUID(),importDate:oa()};this.prepared.set(Fe(this.templateRows(),t,e,{removeDoubleFeed:this.removeDoubleFeed(),guessedRows:this.plaidSync()?.guessedRows})),this.keptDuplicates.set(/* @__PURE__ */ new Set),this.declined.set(/* @__PURE__ */ new Set),this.step.set(`preview`)}static ɵfac=function(e){return new(e||i)};static ɵcmp=IC({type:i,selectors:[[`app-import-page`]],decls:4,vars:1,consts:()=>{let t;t=$localize`:Screen title:Import`;let e;e=$localize`Open or create a data file first.`;let n;n=$localize`Go to Welcome`;let r;r=$localize` Import the CSV your AI assistant made from your statements. Nothing leaves this device. No CSV yet? ${`�#3�`}:START_LINK:Help shows how to make one${`�/#3�`}:CLOSE_LINK:, step by step. `;let m;m=$localize`Drop a CSV file here, or`;let s;s=$localize`Choose CSV file`;let h;h=$localize` You are trying the sample, so nothing you import here is saved. To use your own data, choose Close file in the menu at the top right, then create a data file. `;let g;g=$localize` You already have transactions up to ${`�#5�`}:START_TAG_STRONG:${`�0�`}:INTERPOLATION:${`�/#5�`}:CLOSE_TAG_STRONG:. To update, import a file with only what is newer: everything saved stays, rows you already have are skipped, and corrections to old rows are shown before anything is saved. `;let M;M=$localize`Import the sample file`;let C;C=$localize`From your bank connection`;let T;T=$localize` Fetch new transactions and balances from SimpleFIN. You see the same preview as for a CSV before anything is saved. `;let z;z=$localize`Refresh from bank`;let f;f=$localize`Asking SimpleFIN…`;let L;L=$localize`From Plaid`;let N;N=$localize` Fetch new transactions and balances from every bank connected with Plaid. You see the same preview as for a CSV before anything is saved. `;let xe;xe=$localize`Refresh from Plaid`;let Fe;Fe=$localize` Opens again in ${`�0�`}:INTERPOLATION: seconds. `;let Ie;Ie=$localize`Asking Plaid…`;let H;H=$localize`Finish connecting your bank`;let Oe;Oe=$localize`Or connect your bank`;let Y;Y=$localize` Your bank is connected but no account is chosen yet. Choose which accounts to import, and new transactions and balances come in with one click. `;let l;l=$localize` Skip the CSV: fetch transactions and balances straight from your bank through SimpleFIN Bridge, a paid service you sign up for yourself. The app never sees your bank login, and you still see a preview before anything is saved. Your data file needs a passphrase first. `;let c;c=$localize`Choose accounts`;let p;p=$localize`Connect bank`;let E;E=$localize`From your bank connection`;let k;k=$localize`SimpleFIN says:`;let $;$=$localize`From your bank connection`;let me;me=$localize`These banks didn't sync. Nothing was changed for them:`;let fe;fe=$localize`{VAR_PLURAL, plural, =1 {1 transaction was} other {{INTERPOLATION} transactions were}}`,fe=Hb(fe,{INTERPOLATION:`�1�`,VAR_PLURAL:`�0�`});let Re;Re=$localize` ${fe}:ICU@@2059463843892353373: changed or removed at your bank. Transactions already saved in your file are left as they are. `;let j;j=$localize`Preview: ${`�0�`}:INTERPOLATION:`;let he;he=$localize`What to do next`;let P;P=$localize`${`�#8�`}:START_LINK:Dashboard${`�/#8�`}:CLOSE_LINK:: see your health check and confirm anything the app was unsure about. `;let _e;_e=$localize`${`�#11�`}:START_LINK:Budget${`�/#11�`}:CLOSE_LINK:: adjust the monthly target for each line.`;let O;O=$localize`${`�#14�`}:START_LINK:Debts${`�/#14�`}:CLOSE_LINK:: choose a payoff strategy and see your debt-free month. `;let A;A=$localize`${`�#17�`}:START_LINK:Check-in${`�/#17�`}:CLOSE_LINK:: add the weekly check-ins to your calendar. `;let S;S=$localize`Go to Dashboard`;let se;return se=$localize` Import another file `,[[`picker`,``],t,e,n,r,m,s,h,g,M,C,T,z,f,L,N,xe,Fe,Ie,H,Oe,Y,l,c,p,E,k,$,me,Re,j,he,P,_e,O,A,S,se,[`mat-flat-button`,``,`routerLink`,`/welcome`],[3,`headers`,`rows`,`initial`,`incomeNames`],[`role`,`alert`,1,`error`],[`role`,`note`,1,`sample-note`],[1,`page-intro`],[`routerLink`,`/help`],[`role`,`note`,`data-note`,`update-hint`,1,`callout`],[1,`drop`,3,`dragover`,`dragleave`,`drop`],[1,`row`],[`mat-flat-button`,``,`type`,`button`,3,`click`],[1,`material-icons`],[`mat-stroked-button`,``,`type`,`button`],[`type`,`file`,`accept`,`.csv,text/csv`,`hidden`,``,3,`change`],[`data-panel`,`bank-refresh`,`aria-labelledby`,`bank-refresh`,1,`panel`,`bank`],[`data-panel`,`plaid-refresh`,`aria-labelledby`,`plaid-refresh`,1,`panel`,`bank`],[`data-panel`,`bank-offer`,`aria-labelledby`,`bank-offer`,1,`panel`,`bank`],[`aria-hidden`,`true`,1,`material-icons`],[`mat-stroked-button`,``,`type`,`button`,3,`click`],[`id`,`bank-refresh`],[1,`muted`,`small`],[`mat-stroked-button`,``,`type`,`button`,`data-action`,`refresh-bank`,3,`click`,`disabled`],[`role`,`status`,1,`muted`,`small`],[`id`,`plaid-refresh`],[`mat-stroked-button`,``,`type`,`button`,`data-action`,`refresh-plaid`,3,`click`,`disabled`],[`data-field`,`refresh-wait`,1,`muted`,`small`],[`id`,`bank-offer`],[`mat-stroked-button`,``,`routerLink`,`/bank`,`data-action`,`go-bank`],[3,`confirmed`,`cancelled`,`headers`,`rows`,`initial`,`incomeNames`],[3,`rows`,`picks`],[3,`rows`,`guessed`,`picks`],[3,`declinedChange`,`removeDoubleFeedChange`,`keptDuplicatesChange`,`confirmed`,`cancelled`,`preview`,`notice`,`removeDoubleFeed`,`keptDuplicates`,`declined`],[`data-field`,`preview-source`],[`role`,`note`,`data-list`,`simplefin-messages`,1,`callout`,`warn`],[`role`,`note`,`data-list`,`plaid-failures`,1,`callout`,`warn`],[`role`,`note`,`data-note`,`changed-at-bank`,1,`callout`],[`role`,`note`,`data-note`,`plaid-note`,1,`callout`,`warn`],[3,`picksChange`,`rows`,`picks`],[3,`picksChange`,`rows`,`guessed`,`picks`],[`role`,`status`],[`aria-labelledby`,`next`,1,`panel`,`next`],[`id`,`next`],[`routerLink`,`/dashboard`],[`routerLink`,`/budget`],[`routerLink`,`/debts`],[`routerLink`,`/checkin`],[1,`row`,`start`],[`mat-flat-button`,``,`routerLink`,`/dashboard`]]},template:function(e,n){e&1&&(Fs(0,`h1`),jb(1,1),Ll(),$C(2,Eo,4,0)(3,ir,5,2)),e&2&&(NI(2),GC(n.store.isOpen()?3:2))},dependencies:[Bo$1,zo$1,A,_f,Sf,Ut,Zt,nn,jt],styles:[`[_nghost-%COMP%]{display:block;max-width:56rem;margin:0 auto}.drop[_ngcontent-%COMP%]{border:2px dashed var(--%NS%mat-sys-outline);border-radius:.75rem;padding:2rem;text-align:center}.drop.over[_ngcontent-%COMP%]{border-color:var(--%NS%mat-sys-primary);background:var(--%NS%mat-sys-primary-container)}.row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem;justify-content:center}.row.start[_ngcontent-%COMP%]{justify-content:flex-start}.next[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-medium)}.next[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.375rem}.error[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error)}.sample-note[_ngcontent-%COMP%]{padding:.625rem 1rem;border-radius:.75rem;background:var(--%NS%app-warn-bg);color:var(--%NS%app-warn-fg)}.drop[_ngcontent-%COMP%]{background:var(--%NS%app-surface)}.bank[_ngcontent-%COMP%]{margin-top:1.25rem}.bank[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:.75rem}.bank[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}app-bank-categories[_ngcontent-%COMP%]{margin-bottom:1.25rem}`]})};function oa(){let i=/* @__PURE__ */ new Date,t=e=>String(e).padStart(2,`0`);return`${i.getFullYear()}-${t(i.getMonth()+1)}-${t(i.getDate())}`}export{aa as ImportPage};