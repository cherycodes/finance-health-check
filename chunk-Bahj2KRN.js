import{B as gt,E as de,F as Qn,I as Xe,J as ur,K as fs,L as Ze,M as qt,P as $n,R as bt$1,S as Q,T as _,V as se,W as Yi,_ as D,a as Pt,c as me$1,d as xt,f as Gt,g as yn,h as xn,i as Mt$1,l as we,m as wt,p as Nt,q as ls,r as F,u as wt$1,w as Xt,z as fn}from"./main-LC4P3VVC.js";import{a as Ue,i as Oe,o as ze,r as Le,t as Ae}from"./chunk-DZC-RnnK.js";import{n as s,t as n}from"./chunk-_rBx5Aja.js";import{t as i}from"./chunk-DmnT0muZ.js";import{h as Wn,w as ot}from"./chunk-D6jl9EM4.js";import{n as I,r as _$1,t as A}from"./chunk-C5hQpH0g.js";import{$ as Lv,$t as ZS,An as gt$1,Ar as yc,At as Ut,Br as zo,Dt as Tg,En as g0,Er as xf,Et as Tf,Fn as i4,Ft as Vv,Gn as lr,Gr as v,I as Ic,In as iT,Ir as zS,Jt as Yt,K as KT,Kt as Yh,Lt as WS,M as HS,O as GC,On as gg,Or as xv,Ot as Ui,Pr as z2,Qn as oD,Rr as zi,Rt as WT,S as F$1,Sr as wT,Tn as fu,Tr as wt$2,U as Jv,Ut as Xv,V as Je,Vn as kf,Vr as r,Wr as u,Wt as Y,Xt as Z,Y as Kv,Yt as Yv,Zt as Z2,_ as De,_n as cT,_t as Rf,at as Ne,bn as dT,br as vc,cr as qT,ct as Nv,dn as an$1,en as Ze$1,fr as s0,g as Dc,in as Zv,it as Mv,jn as gu,jt as V,k as GS,kn as gr,ln as aT,lt as OT,mn as bc,n as $e,nn as Zo,o as Af,p as Cc,pt as QT,r as $i,rn as Zq,rr as pg,rt as Mr,sn as _v,sr as qS,st as Nr,t as $R,tn as Zh,tr as p,un as ae,ur as rc,w as Fi,x as Es,xn as da,xr as wI,xt as Sg,yn as cw,yr as v$1,z as JS}from"./chunk-B7W6jEV5.js";var pa=u((Qt,Yt)=>{"use strict";((n,a)=>{typeof define==`function`&&define.amd?define([],a):typeof Yt==`object`&&typeof Qt<`u`?Yt.exports=a():n.Papa=a()})(Qt,function n(){var a=typeof self<`u`?self:typeof window<`u`?window:a!==void 0?a:{},e=!a.document&&!!a.postMessage,t=a.IS_PAPA_WORKER||!1,r={},d=0,c={};function u(o){return o.charCodeAt(0)===65279?o.slice(1):o}function f(o){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine=``,this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(i){var m=Pt(i);m.chunkSize=parseInt(m.chunkSize),i.step||i.chunk||(m.chunkSize=null),this._handle=new b(m),(this._handle.streamer=this)._config=m}.call(this,o),this.parseChunk=function(i,m){var k=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<k){let T=this._config.newline;T||(g=this._config.quoteChar||`"`,T=this._handle.guessLineEndings(i,g)),i=[...i.split(T).slice(k)].join(T)}this.isFirstChunk&&Y(this._config.beforeFirstChunk)&&(g=this._config.beforeFirstChunk(i))!==void 0&&(i=g),this.isFirstChunk=!1,this._halted=!1;var k=this._partialLine+i,g=(this._partialLine=``,this._handle.parse(k,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(i=g.meta.cursor,k=(this._finished||(this._partialLine=k.substring(i-this._baseIndex),this._baseIndex=i),g&&g.data&&(this._rowCount+=g.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),t)a.postMessage({results:g,workerId:c.WORKER_ID,finished:k});else if(Y(this._config.chunk)&&!m){if(this._config.chunk(g,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=g=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(g.data),this._completeResults.errors=this._completeResults.errors.concat(g.errors),this._completeResults.meta=g.meta),this._completed||!k||!Y(this._config.complete)||g&&g.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),k||g&&g.meta.paused||this._nextChunk(),g}this._halted=!0},this._sendError=function(i){Y(this._config.error)?this._config.error(i):t&&this._config.error&&a.postMessage({workerId:c.WORKER_ID,error:i,finished:!1})}}function z(o){var i;(o=o||{}).chunkSize||(o.chunkSize=c.RemoteChunkSize),f.call(this,o),this._nextChunk=e?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(m){this._input=m,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(i=new XMLHttpRequest,this._config.withCredentials&&(i.withCredentials=this._config.withCredentials),e||(i.onload=Be(this._chunkLoaded,this),i.onerror=Be(this._chunkError,this)),i.ontimeout=Be(this._chunkTimeout,this),i.open(this._config.downloadRequestBody?`POST`:`GET`,this._input,!e),this._config.downloadTimeout&&!e&&(i.timeout=this._config.downloadTimeout),this._config.downloadRequestHeaders){var m,k=this._config.downloadRequestHeaders;for(m in k)i.setRequestHeader(m,k[m])}var g;this._config.chunkSize&&(g=this._start+this._config.chunkSize-1,i.setRequestHeader(`Range`,`bytes=`+this._start+`-`+g));try{i.send(this._config.downloadRequestBody)}catch(T){this._chunkError(T.message)}e&&i.status===0&&this._chunkError()}},this._chunkLoaded=function(){i.readyState===4&&(i.status<200||400<=i.status?this._chunkError():(this._start+=this._config.chunkSize||i.responseText.length,this._finished=!this._config.chunkSize||this._start>=(m=>(m=m.getResponseHeader(`Content-Range`))!==null?parseInt(m.substring(m.lastIndexOf(`/`)+1)):-1)(i),this.parseChunk(i.responseText)))},this._chunkError=function(m){m=i.statusText||m,this._sendError(new Error(m))},this._chunkTimeout=function(){this._chunkError(`Request timed out after `+this._config.downloadTimeout+`ms`)}}function w(o){(o=o||{}).chunkSize||(o.chunkSize=c.LocalChunkSize),f.call(this,o);var i,m,k=typeof FileReader<`u`;this.stream=function(g){this._input=g,m=g.slice||g.webkitSlice||g.mozSlice,k?((i=new FileReader).onload=Be(this._chunkLoaded,this),i.onerror=Be(this._chunkError,this)):i=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var g=this._input,T=(this._config.chunkSize&&(T=Math.min(this._start+this._config.chunkSize,this._input.size),g=m.call(g,this._start,T)),i.readAsText(g,this._config.encoding));k||this._chunkLoaded({target:{result:T}})},this._chunkLoaded=function(g){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(g.target.result)},this._chunkError=function(){this._sendError(i.error)}}function N(o){var i;f.call(this,o=o||{}),this.stream=function(m){return i=m,this._nextChunk()},this._nextChunk=function(){var m,k;if(!this._finished)return m=this._config.chunkSize,i=m?(k=i.substring(0,m),i.substring(m)):(k=i,``),this._finished=!i,this.parseChunk(k)}}function q(o){f.call(this,o=o||{});var i=[],m=!0,k=!1;this.pause=function(){f.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){f.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(g){this._input=g,this._input.on(`data`,this._streamData),this._input.on(`end`,this._streamEnd),this._input.on(`error`,this._streamError)},this._checkIsFinished=function(){k&&i.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),i.length?this.parseChunk(i.shift()):m=!0},this._streamData=Be(function(g){try{i.push(typeof g==`string`?g:g.toString(this._config.encoding)),m&&(m=!1,this._checkIsFinished(),this.parseChunk(i.shift()))}catch(T){this._streamError(T)}},this),this._streamError=Be(function(g){this._streamCleanUp(),this._sendError(g)},this),this._streamEnd=Be(function(){this._streamCleanUp(),k=!0,this._streamData(``)},this),this._streamCleanUp=Be(function(){this._input.removeListener(`data`,this._streamData),this._input.removeListener(`end`,this._streamEnd),this._input.removeListener(`error`,this._streamError)},this)}function b(o){var i,m,k,g,T=Math.pow(2,53),he=-T,Ee=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,Oe=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,W=this,be=0,x=0,pe=!1,S=!1,M=[],_={data:[],errors:[],meta:{}};function ie(O){return o.skipEmptyLines===`greedy`?O.join(``).trim()===``:O.length===1&&O[0].length===0}function G(){if(_&&k&&(Se(`Delimiter`,`UndetectableDelimiter`,`Unable to auto-detect delimiting character; defaulted to '`+c.DefaultDelimiter+`'`),k=!1),o.skipEmptyLines&&(_.data=_.data.filter(function(U){return!ie(U)})),Z()){let U=function(se){M.push(se)};if(_)if(Array.isArray(_.data[0])){for(var O=0;Z()&&O<_.data.length;O++)_.data[O].forEach(U);_.data.splice(0,1)}else _.data.forEach(U)}function E(U,se){for(var Q=o.header?{}:[],D=0;D<U.length;D++){var C=D,le=U[D],le=((A,H)=>(te=>(o.dynamicTypingFunction&&o.dynamicTyping[te]===void 0&&(o.dynamicTyping[te]=o.dynamicTypingFunction(te)),(o.dynamicTyping[te]||o.dynamicTyping)===!0))(A)?H===`true`||H===`TRUE`||H!==`false`&&H!==`FALSE`&&((te=>{if(Ee.test(te)&&(te=parseFloat(te),he<te&&te<T))return 1})(H)?parseFloat(H):Oe.test(H)?new Date(H):H===``?null:H):H)(C=o.header?D>=M.length?`__parsed_extra`:M[D]:C,le=o.transform?o.transform(le,C):le);C===`__parsed_extra`?(Q[C]=Q[C]||[],Q[C].push(le)):Q[C]=le}return o.header&&(D>M.length?Se(`FieldMismatch`,`TooManyFields`,`Too many fields: expected `+M.length+` fields but parsed `+D,x+se):D<M.length&&Se(`FieldMismatch`,`TooFewFields`,`Too few fields: expected `+M.length+` fields but parsed `+D,x+se)),Q}var $;_&&(o.header||o.dynamicTyping||o.transform)&&($=1,!_.data.length||Array.isArray(_.data[0])?(_.data=_.data.map(E),$=_.data.length):_.data=E(_.data,0),o.header&&_.meta&&(_.meta.fields=M),x+=$)}function Z(){return o.header&&M.length===0}function Se(O,E,$,I){O={type:O,code:E,message:$},I!==void 0&&(O.row=I),_.errors.push(O)}Y(o.step)&&(g=o.step,o.step=function(O){_=O,Z()?G():(G(),_.data.length!==0&&(be+=O.data.length,o.preview&&be>o.preview?m.abort():(_.data=_.data[0],g(_,W))))}),this.parse=function(O,E,$){var I=o.quoteChar||`"`,I=(o.newline||(o.newline=this.guessLineEndings(O,I)),k=!1,o.delimiter?Y(o.delimiter)&&(o.delimiter=o.delimiter(O),_.meta.delimiter=o.delimiter):((I=((U,se,Q,D,C)=>{var le,A,H,te;C=C||[`,`,`	`,`|`,`;`,c.RECORD_SEP,c.UNIT_SEP];for(var et=0;et<C.length;et++){for(var De,gt=C[et],oe=0,Te=0,ne=0,ge=(H=void 0,new ce({comments:D,delimiter:gt,newline:se,preview:10}).parse(U)),qe=0;qe<ge.data.length;qe++)Q&&ie(ge.data[qe])?ne++:(De=ge.data[qe].length,Te+=De,H===void 0?H=De:0<De&&(oe+=Math.abs(De-H),H=De));0<ge.data.length&&(Te/=ge.data.length-ne),1.99<Te&&(A===void 0||oe<A||oe===A&&te<Te)&&(A=oe,le=gt,te=Te)}return{successful:!!(o.delimiter=le),bestDelimiter:le}})(O,o.newline,o.skipEmptyLines,o.comments,o.delimitersToGuess)).successful?o.delimiter=I.bestDelimiter:(k=!0,o.delimiter=c.DefaultDelimiter),_.meta.delimiter=o.delimiter),Pt(o));return I.header=Z(),o.preview&&o.header&&I.preview++,i=O,m=new ce(I),_=m.parse(i,E,$),G(),pe?{meta:{paused:!0}}:_||{meta:{paused:!1}}},this.paused=function(){return pe},this.pause=function(){pe=!0,m.abort(),i=Y(o.chunk)?``:i.substring(m.getCharIndex())},this.resume=function(){W.streamer._halted?(pe=!1,W.streamer.parseChunk(i,!0)):setTimeout(W.resume,3)},this.aborted=function(){return S},this.abort=function(){S=!0,m.abort(),_.meta.aborted=!0,Y(o.complete)&&o.complete(_),i=``},this.guessLineEndings=function(U,I){U=U.substring(0,1048576);var I=new RegExp(P(I)+`([^]*?)`+P(I),`gm`),$=(U=U.replace(I,``)).split(`\r`),I=U.split(`
`),U=1<I.length&&I[0].length<$[0].length;if($.length===1||U)return`
`;for(var se=0,Q=0;Q<$.length;Q++)$[Q][0]===`
`&&se++;return se>=$.length/2?`\r
`:`\r`}}function P(o){return o.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function ce(o){var i=(o=o||{}).delimiter,m=o.newline,k=o.comments,g=o.step,T=o.preview,he=o.fastMode,Ee=null,Oe=!1,W=o.quoteChar==null?`"`:o.quoteChar,be=W;if(o.escapeChar!==void 0&&(be=o.escapeChar),(typeof i!=`string`||-1<c.BAD_DELIMITERS.indexOf(i))&&(i=`,`),k===i)throw new Error(`Comment character same as delimiter`);k===!0?k=`#`:(typeof k!=`string`||-1<c.BAD_DELIMITERS.indexOf(k))&&(k=!1),m!==`
`&&m!==`\r`&&m!==`\r
`&&(m=`
`);var x=0,pe=!1;this.parse=function(S,M,_){if(typeof S!=`string`)throw new Error(`Input must be a string`);var ie=S.length,G=i.length,Z=m.length,Se=k.length,O=Y(g),E=[],$=[],I=[],U=x=0;if(!S)return oe();if(he||he!==!1&&S.indexOf(W)===-1){for(var se=S.split(m),Q=0;Q<se.length;Q++){if(I=se[Q],x+=I.length,Q!==se.length-1)x+=m.length;else if(_)return oe();if(!k||I.substring(0,Se)!==k){if(O){if(E=[],te(I.split(i)),Te(),pe)return oe()}else te(I.split(i));if(T&&T<=Q)return E=E.slice(0,T),oe(!0)}}return oe()}for(var D=S.indexOf(i,x),C=S.indexOf(m,x),le=new RegExp(P(be)+P(W),`g`),A=S.indexOf(W,x);;)if(S[x]===W)for(A=x,x++;;){if((A=S.indexOf(W,A+1))===-1)return _||$.push({type:`Quotes`,code:`MissingQuotes`,message:`Quoted field unterminated`,row:E.length,index:x}),De();if(A===ie-1)return De(S.substring(x,A).replace(le,W));if(W===be&&S[A+1]===be)A++;else if(W===be||A===0||S[A-1]!==be){D!==-1&&D<A+1&&(D=S.indexOf(i,A+1));var H=et((C=C!==-1&&C<A+1?S.indexOf(m,A+1):C)===-1?D:Math.min(D,C));if(S.substr(A+1+H,G)===i){I.push(S.substring(x,A).replace(le,W)),S[x=A+1+H+G]!==W&&(A=S.indexOf(W,x)),D!==-1&&D<x&&(D=S.indexOf(i,x)),C!==-1&&C<x&&(C=S.indexOf(m,x));break}if(H=et(C),S.substring(A+1+H,A+1+H+Z)===m){if(I.push(S.substring(x,A).replace(le,W)),gt(A+1+H+Z),D!==-1&&D<x&&(D=S.indexOf(i,x)),A=S.indexOf(W,x),O&&(Te(),pe))return oe();if(T&&E.length>=T)return oe(!0);break}$.push({type:`Quotes`,code:`InvalidQuotes`,message:`Trailing quote on quoted field is malformed`,row:E.length,index:x}),A++}}else if(k&&I.length===0&&S.substring(x,x+Se)===k){if(C===-1)return oe();x=C+Z,C=S.indexOf(m,x),D!==-1&&D<x&&(D=S.indexOf(i,x))}else if(D!==-1&&(D<C||C===-1))I.push(S.substring(x,D)),x=D+G,D=S.indexOf(i,x);else{if(C===-1)break;if(I.push(S.substring(x,C)),gt(C+Z),O&&(Te(),pe))return oe();if(T&&E.length>=T)return oe(!0)}return De();function te(ne){E.push(ne),U=x}function et(ne){var ge=0;return ge=ne!==-1&&(ne=S.substring(A+1,ne))&&ne.trim()===``?ne.length:ge}function De(ne){return _||(ne===void 0&&(ne=S.substring(x)),I.push(ne),x=ie,te(I),O&&Te()),oe()}function gt(ne){x=ne,te(I),I=[],C=S.indexOf(m,x)}function oe(ne){if(o.header&&!M&&E.length&&!Oe){var ge=E[0],qe=Object.create(null),Lt=new Set(ge);let hn=!1;for(let tt=0;tt<ge.length;tt++){let Re=u(ge[tt]);if(qe[Re=Y(o.transformHeader)?o.transformHeader(Re,tt):Re]){let ft,pn=qe[Re];for(;ft=Re+`_`+pn,pn++,Lt.has(ft););Lt.add(ft),ge[tt]=ft,qe[Re]++,hn=!0,(Ee=Ee===null?{}:Ee)[ft]=Re}else qe[Re]=1,ge[tt]=Re;Lt.add(Re)}hn&&console.warn(`Duplicate headers found and renamed.`),Oe=!0}return{data:E,errors:$,meta:{delimiter:i,linebreak:m,aborted:pe,truncated:!!ne,cursor:U+(M||0),renamedHeaders:Ee}}}function Te(){g(oe()),E=[],$=[]}},this.abort=function(){pe=!0},this.getCharIndex=function(){return x}}function Ft(o){var i=o.data,m=r[i.workerId],k=!1;if(i.error)m.userError(i.error,i.file);else if(i.results&&i.results.data){var g={abort:function(){k=!0,dn(i.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:mn,resume:mn};if(Y(m.userStep)){for(var T=0;T<i.results.data.length&&(m.userStep({data:i.results.data[T],errors:i.results.errors,meta:i.results.meta},g),!k);T++);delete i.results}else Y(m.userChunk)&&(m.userChunk(i.results,g,i.file),delete i.results)}i.finished&&!k&&dn(i.workerId,i.results)}function dn(o,i){var m=r[o];Y(m.userComplete)&&m.userComplete(i),m.terminate(),delete r[o]}function mn(){throw new Error(`Not implemented.`)}function Pt(o){if(typeof o!=`object`||o===null)return o;var i,m=Array.isArray(o)?[]:{};for(i in o)m[i]=Pt(o[i]);return m}function Be(o,i){return function(){o.apply(i,arguments)}}function Y(o){return typeof o==`function`}return c.parse=function(o,i){var m=(i=i||{}).dynamicTyping||!1;if(Y(m)&&(i.dynamicTypingFunction=m,m={}),i.dynamicTyping=m,i.transform=!!Y(i.transform)&&i.transform,i.downloadTimeout!==void 0){var m=parseInt(i.downloadTimeout);if(isNaN(m))throw new Error(`Config downloadTimeout value (`+i.downloadTimeout+`) not parsable by parseInt(val).`);i.downloadTimeout=m}if(!i.worker||!c.WORKERS_SUPPORTED)return m=null,c.NODE_STREAM_INPUT,typeof o==`string`?(o=u(o),m=new(i.download?z:N)(i)):o.readable===!0&&Y(o.read)&&Y(o.on)?m=new q(i):(a.File&&o instanceof File||o instanceof Object)&&(m=new w(i)),m.stream(o);(m=(()=>{var k;return!!c.WORKERS_SUPPORTED&&(k=(()=>{var g=a.URL||a.webkitURL||null,T=n.toString();return c.BLOB_URL||(c.BLOB_URL=g.createObjectURL(new Blob([`var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; `,`(`,T,`)();`],{type:`text/javascript`})))})(),(k=new a.Worker(k)).onmessage=Ft,k.id=d++,r[k.id]=k)})()).userStep=i.step,m.userChunk=i.chunk,m.userComplete=i.complete,m.userError=i.error,i.step=Y(i.step),i.chunk=Y(i.chunk),i.complete=Y(i.complete),i.error=Y(i.error),delete i.worker,m.postMessage({input:o,config:i,workerId:m.id})},c.unparse=function(o,i){var m=!1,k=!0,g=`,`,T=`\r
`,he=`"`,Ee=he+he,Oe=!1,W=null,be=!1,x=((()=>{if(typeof i==`object`){if(typeof i.delimiter!=`string`||c.BAD_DELIMITERS.filter(function(M){return i.delimiter.indexOf(M)!==-1}).length||(g=i.delimiter),typeof i.quotes!=`boolean`&&typeof i.quotes!=`function`&&!Array.isArray(i.quotes)||(m=i.quotes),typeof i.skipEmptyLines!=`boolean`&&typeof i.skipEmptyLines!=`string`||(Oe=i.skipEmptyLines),typeof i.newline==`string`&&(T=i.newline),typeof i.quoteChar==`string`&&(he=i.quoteChar,Ee=he+he),typeof i.header==`boolean`&&(k=i.header),Array.isArray(i.columns)){if(i.columns.length===0)throw new Error(`Option columns is empty`);W=i.columns}i.escapeChar!==void 0&&(Ee=i.escapeChar+he),i.escapeFormulae instanceof RegExp?be=i.escapeFormulae:typeof i.escapeFormulae==`boolean`&&i.escapeFormulae&&(be=/^[=+\-@\t\r].*$/)}})(),new RegExp(P(he),`g`));if(typeof o==`string`&&(o=JSON.parse(o)),Array.isArray(o)){if(!o.length)return pe(W,o,Oe);if(Array.isArray(o[0]))return pe(null,o,Oe);if(typeof o[0]==`object`)return pe(W||Object.keys(o[0]),o,Oe)}else if(typeof o==`object`)return typeof o.data==`string`&&(o.data=JSON.parse(o.data)),Array.isArray(o.data)&&(o.fields||(o.fields=o.meta&&o.meta.fields||W),o.fields||(o.fields=Array.isArray(o.data[0])?o.fields:typeof o.data[0]==`object`?Object.keys(o.data[0]):[]),Array.isArray(o.data[0])||typeof o.data[0]==`object`||(o.data=[o.data])),pe(o.fields||[],o.data||[],Oe);throw new Error(`Unable to serialize unrecognized input`);function pe(M,_,ie){var G=``,Z=(typeof M==`string`&&(M=JSON.parse(M)),typeof _==`string`&&(_=JSON.parse(_)),Array.isArray(M)&&0<M.length),Se=!Array.isArray(_[0]);if(Z&&k){for(var O=0;O<M.length;O++)0<O&&(G+=g),G+=S(M[O],O);0<_.length&&(G+=T)}for(var E=0;E<_.length;E++){var $=(Z?M:_[E]).length,I=!1,U=Z?Object.keys(_[E]).length===0:_[E].length===0;if(ie&&!Z&&(I=ie===`greedy`?_[E].join(``).trim()===``:_[E].length===1&&(_[E][0]==null||_[E][0].length===0)),ie===`greedy`&&Z){for(var se=[],Q=0;Q<$;Q++){var D=Se?M[Q]:Q;se.push(_[E][D])}I=se.join(``).trim()===``}if(!I){for(var C=0;C<$;C++){0<C&&!U&&(G+=g);var le=Z&&Se?M[C]:C;G+=S(_[E][le],C)}E<_.length-1&&(!ie||0<$&&!U)&&(G+=T)}}return G}function S(M,_){var ie,G,Z;return M==null?``:M.constructor===Date?isNaN(M.getTime())?``:M.toISOString():(Z=!1,ie=M.toString(),be&&typeof M!=`number`&&typeof M!=`bigint`&&typeof M!=`boolean`&&be.test(ie)&&(M=ie=`'`+ie,Z=!0),G=ie.replace(x,Ee),(Z=Z||m===!0||typeof m==`function`&&m(M,_)||Array.isArray(m)&&m[_]||((Se,O)=>{for(var E=0;E<O.length;E++)if(-1<Se.indexOf(O[E]))return!0;return!1})(G,c.BAD_DELIMITERS)||-1<G.indexOf(g)||-1<ie.indexOf(he)||G.charAt(0)===` `||G.charAt(G.length-1)===` `)?he+G+he:G)}},c.RECORD_SEP=``,c.UNIT_SEP=``,c.BYTE_ORDER_MARK=`﻿`,c.BAD_DELIMITERS=[`\r`,`
`,`"`,c.BYTE_ORDER_MARK],c.WORKERS_SUPPORTED=!e&&!!a.Worker,c.NODE_STREAM_INPUT=1,c.LocalChunkSize=10485760,c.RemoteChunkSize=5242880,c.DefaultDelimiter=`,`,c.Parser=ce,c.ParserHandle=b,c.NetworkStreamer=z,c.FileStreamer=w,c.StringStreamer=N,c.ReadableStreamStreamer=q,t&&(a.onmessage=function(o){o=o.data,c.WORKER_ID===void 0&&o&&(c.WORKER_ID=o.workerId),typeof o.input==`string`?a.postMessage({workerId:c.WORKER_ID,results:c.parse(o.input,o.config),finished:!0}):(a.File&&o.input instanceof File||o.input instanceof Object)&&(o=c.parse(o.input,o.config))&&a.postMessage({workerId:c.WORKER_ID,results:o,finished:!0})}),(z.prototype=Object.create(f.prototype)).constructor=z,(w.prototype=Object.create(f.prototype)).constructor=w,(N.prototype=Object.create(N.prototype)).constructor=N,(q.prototype=Object.create(f.prototype)).constructor=q,c})});var ua=v(pa());function ba(n){let a=n.charCodeAt(0)===65279?n.slice(1):n,e=ua.default.parse(a,{header:!0,skipEmptyLines:`greedy`,transformHeader:d=>d.trim(),transform:d=>d.trim()}),t=e.meta.fields??[];return{headers:t,rows:e.data.map(d=>{let c={};for(let u of t)c[u]=d[u]??``;return c})}}function Zt(n){return n.map(a=>a.trim().toLowerCase()).join(`|`)}var za={record_type:[`record_type`,`record type`],date:[`date`,`transaction date`,`posted date`,`posting date`,`trans date`],description:[`description`,`name`,`merchant`,`payee`,`memo`,`details`],amount:[`amount`,`transaction amount`,`value`],category:[`category`,`categories`],account:[`account`,`account name`,`account_name`],notes:[`notes`,`note`],account_type:[`account_type`,`account type`]};function ga(n$1,a){let e={},t=/* @__PURE__ */ new Set,r=new Map(n$1.map(c=>[c.trim().toLowerCase(),c]));for(let c of n){let f=(za[c]??[c]).map(z=>r.get(z)).find(z=>z!==void 0&&!t.has(z));f!==void 0&&(e[c]=f,t.add(f))}let d=(c,u)=>{if(e[c]!==void 0)return;let f=n$1.find(z=>{if(t.has(z))return!1;let w=a.map(N=>N[z]??``).filter(N=>N!==``);return w.length>0&&w.every(u)});f!==void 0&&(e[c]=f,t.add(f))};return d(`date`,c=>Wn(c)!==null),d(`amount`,c=>ot(c)!==null),{columns:e,flipSign:!1}}function fa(n,a,e){let t=u=>a.columns[u],r=e.map(u=>u.trim().toUpperCase()).filter(u=>u!==``),d=0,c=0;for(let u of n){let f=(u[t(`category`)??``]??``).trim().toLowerCase(),z=(u[t(`description`)??``]??``).toUpperCase(),w=f===`income`||r.some(q=>z.includes(q)),N=ot(u[t(`amount`)??``]??``);!w||N===null||(d++,N<0&&c++)}return d===0?0:c/d}function Jt(n$2,a){return n$2.map(e=>{let t={};for(let r of n){let d=a.columns[r];t[r]=d===void 0?``:(e[d]??``).trim()}return t.record_type===``&&(t.record_type=`transaction`),a.flipSign&&(t.amount=Fa(t.amount)),t})}function Fa(n){let a=ot(n);if(a===null)return n;let e=-a,t=Math.abs(e),r=`${Math.trunc(t/100)}.${String(t%100).padStart(2,`0`)}`;return e<0?`-`+r:r}var Mt=(()=>{class n{labelPosition=`after`;static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){return Fi({type:n,selectors:[[``,`mat-internal-form-field`,``]],hostAttrs:[1,`mdc-form-field`,`mat-internal-form-field`],hostVars:2,hostBindings:function(r,d){r&2&&Vv(`mdc-form-field--align-end`,d.labelPosition===`before`)},inputs:{labelPosition:`labelPosition`},ngContentSelectors:[`*`],decls:1,vars:0,template:function(r,d){r&1&&(aT(),cT(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2})})()}return n})();var en={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var Pa=new v$1(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>en});var me=(function(n){return n[n.Init=0]=`Init`,n[n.Checked=1]=`Checked`,n[n.Unchecked=2]=`Unchecked`,n[n.Indeterminate=3]=`Indeterminate`,n})(me||{});var tn=class{source;checked};var _t=(()=>{class n{_elementRef=p(Ze$1);_changeDetectorRef=p($i);_ngZone=p(Y);_animationsDisabled=Zq();_options=p(Pa,{optional:!0});_injector=p(ae);_signalFormField=null;focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new tn;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new De;indeterminateChange=new De;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=me.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){p(Es).load(Nt);let e=p(new bc(`tabindex`),{optional:!0});this._options=this._options||en,this.color=this._options.color||en.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=p(Yh).getId(`mat-mdc-checkbox-`),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngOnInit(){this._signalFormField=this._injector.get(fn,void 0,{optional:!0,self:!0})}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(me.Indeterminate):this._transitionCheckState(this.checked?me.Checked:me.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=Z(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0&&!this._signalFormField?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,r=this._getAnimationTargetElement();if(!(t===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let d=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(d)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!==`noop`?(this.indeterminate&&e!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?me.Checked:me.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return``;switch(e){case me.Init:if(t===me.Checked)return this._animationClasses.uncheckedToChecked;if(t==me.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case me.Unchecked:return t===me.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case me.Checked:return t===me.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case me.Indeterminate:return t===me.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`input`];return Fi({type:n,selectors:[[`mat-checkbox`]],viewQuery:function(d,c){if(d&1&&Lv(e,5),d&2){let u;Af(u=Rf())&&(c._inputElement=u.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(d,c){d&2&&(xv(`id`,c.id),Ui(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),wT(c.color?`mat-`+c.color:`mat-accent`),Vv(`_mat-animation-noopable`,c._animationsDisabled)(`mdc-checkbox--disabled`,c.disabled)(`mat-mdc-checkbox-disabled`,c.disabled)(`mat-mdc-checkbox-checked`,c.checked)(`mat-mdc-checkbox-disabled-interactive`,c.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,zi],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,zi],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,zi],tabIndex:[2,`tabIndex`,`tabIndex`,r=>r==null?void 0:Z2(r)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,zi],checked:[2,`checked`,`checked`,zi],disabled:[2,`disabled`,`disabled`,zi],indeterminate:[2,`indeterminate`,`indeterminate`,zi]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[oD([{provide:Q,useExisting:da(()=>n),multi:!0},{provide:D,useExisting:n,multi:!0}]),Yt],ngContentSelectors:[`*`],decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(d,c){if(d&1&&(aT(),rc(0,`label`,3),vc(`click`,function(f){return c._preventBubblingFromLabel(f)}),rc(1,`span`,4,0),yc(3,`span`,5),rc(4,`input`,6,1),vc(`blur`,function(){return c._onBlur()})(`click`,function(){return c._onInputClick()})(`change`,function(f){return c._onInteractionEvent(f)}),Tf(),yc(6,`span`,7),rc(7,`span`,8),Sg(),rc(8,`svg`,9),yc(9,`path`,10),Tf(),Tg(),yc(10,`span`,11),Tf(),yc(11,`span`,12),Tf(),rc(12,`span`,13,2),cT(14),Tf()()),d&2){let u=dT(2);Nv(`labelPosition`,c.labelPosition)(`for`,c.inputId),GC(4),Vv(`mdc-checkbox--selected`,c.checked),Nv(`checked`,c.checked)(`indeterminate`,c.indeterminate)(`disabled`,c.disabled&&!c.disabledInteractive)(`id`,c.inputId)(`required`,c.required)(`tabIndex`,c.disabled&&!c.disabledInteractive?-1:c.tabIndex),Ui(`aria-label`,c.ariaLabel||null)(`aria-labelledby`,c.ariaLabelledby)(`aria-describedby`,c.ariaDescribedby)(`aria-checked`,c.indeterminate?`mixed`:null)(`aria-controls`,c.ariaControls)(`aria-disabled`,c.disabled&&c.disabledInteractive?!0:null)(`aria-expanded`,c.ariaExpanded)(`aria-owns`,c.ariaOwns)(`name`,c.name)(`value`,c.value),GC(7),Nv(`matRippleTrigger`,u)(`matRippleDisabled`,c.disableRipple||c.disabled)(`matRippleCentered`,!0)}},dependencies:[Gt,Mt],styles:[`.mdc-checkbox {
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
`],encapsulation:2})})()}return n})();var Et=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=gt$1({type:n});static ɵinj=Je({imports:[_t,i4]})}return n})();var kt=class{_multiple;_emitChanges;compareWith;_selection=/* @__PURE__ */ new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new F$1;bulk={select:a=>this._select(a),deselect:a=>this._deselect(a),setSelection:a=>this._setSelection(a)};constructor(a=!1,e,t=!0,r){this._multiple=a,this._emitChanges=t,this.compareWith=r,e&&e.length&&(a?e.forEach(d=>this._markSelected(d)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...a){return this._select(a)}deselect(...a){return this._deselect(a)}setSelection(...a){return this._setSelection(a)}toggle(a){return this.isSelected(a)?this.deselect(a):this.select(a)}clear(a=!0){this._unmarkAll();let e=this._hasQueuedChanges();return a&&this._emitChangeEvent(),e}isSelected(a){return this._selection.has(this._getConcreteValue(a))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(a){this._multiple&&this.selected&&this._selected.sort(a)}isMultipleSelection(){return this._multiple}_select(a){this._verifyValueAssignment(a),a.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(a){this._verifyValueAssignment(a),a.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(a){this._verifyValueAssignment(a);let e=this.selected,t=new Set(a.map(d=>this._getConcreteValue(d)));a.forEach(d=>this._markSelected(d)),e.filter(d=>!t.has(this._getConcreteValue(d,t))).forEach(d=>this._unmarkSelected(d));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(a){a=this._getConcreteValue(a),this.isSelected(a)||(this._multiple||this._unmarkAll(),this.isSelected(a)||this._selection.add(a),this._emitChanges&&this._selectedToEmit.push(a))}_unmarkSelected(a){a=this._getConcreteValue(a),this.isSelected(a)&&(this._selection.delete(a),this._emitChanges&&this._deselectedToEmit.push(a))}_unmarkAll(){this.isEmpty()||this._selection.forEach(a=>this._unmarkSelected(a))}_verifyValueAssignment(a){a.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(a,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(a,t))return t;return a}else return a}};var ka=(()=>{class n{_animationsDisabled=Zq();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(t){return new(t||n)};static ɵcmp=Fi({type:n,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(t,r){t&2&&Vv(`mat-pseudo-checkbox-indeterminate`,r.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,r.state===`checked`)(`mat-pseudo-checkbox-disabled`,r.disabled)(`mat-pseudo-checkbox-minimal`,r.appearance===`minimal`)(`mat-pseudo-checkbox-full`,r.appearance===`full`)(`_mat-animation-noopable`,r._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(t,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2})}return n})();var an=new v$1(`MAT_OPTION_PARENT_COMPONENT`);var on=new v$1(`MatOptgroup`);var nn=class{source;isUserInput;constructor(a,e=!1){this.source=a,this.isUserInput=e}};var bt=(()=>{class n{_element=p(Ze$1);_changeDetectorRef=p($i);_parent=p(an,{optional:!0});group=p(on,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=p(Yh).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Z(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new De;_text;_stateChanges=new F$1;constructor(){let e=p(Es);e.load(Nt),e.load(gu),this._signalDisableRipple=!!this._parent&&lr(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let r=this._getHostElement();typeof r.focus==`function`&&r.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!wI(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new nn(this,e))}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`text`],t=[[[`mat-icon`]],`*`],r=[`mat-icon`,`*`];function d(f,z){if(f&1&&yc(0,`mat-pseudo-checkbox`,1),f&2){let w=iT();Nv(`disabled`,w.disabled)(`state`,w.selected?`checked`:`unchecked`)}}function c(f,z){if(f&1&&yc(0,`mat-pseudo-checkbox`,3),f&2){let w=iT();Nv(`disabled`,w.disabled)}}function u(f,z){if(f&1&&(rc(0,`span`,4),OT(1),Tf()),f&2){let w=iT();GC(),xf(`(`,w.group.label,`)`)}}return Fi({type:n,selectors:[[`mat-option`]],viewQuery:function(z,w){if(z&1&&Lv(e,7),z&2){let N;Af(N=Rf())&&(w._text=N.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(z,w){z&1&&vc(`click`,function(){return w._selectViaInteraction()})(`keydown`,function(q){return w._handleKeydown(q)}),z&2&&(xv(`id`,w.id),Ui(`aria-selected`,w.selected)(`aria-disabled`,w.disabled.toString()),Vv(`mdc-list-item--selected`,w.selected)(`mat-mdc-option-multiple`,w.multiple)(`mat-mdc-option-active`,w.active)(`mdc-list-item--disabled`,w.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,zi]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:r,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(z,w){z&1&&(aT(t),HS(0,d,1,2,`mat-pseudo-checkbox`,1),cT(1),rc(2,`span`,2,0),cT(4,1),Tf(),HS(5,c,1,1,`mat-pseudo-checkbox`,3),HS(6,u,2,1,`span`,4),yc(7,`div`,5)),z&2&&(zS(w.multiple?0:-1),GC(5),zS(!w.multiple&&w.selected&&!w.hideSingleSelectionIndicator?5:-1),GC(),zS(w.group&&w.group._inert?6:-1),GC(),Nv(`matRippleTrigger`,w._getHostElement())(`matRippleDisabled`,w.disabled||w.disableRipple))},dependencies:[ka,Gt],styles:[`.mat-mdc-option {
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
`],encapsulation:2})})()}return n})();function va(n,a,e){if(e.length){let t=a.toArray(),r=e.toArray(),d=0;for(let c=0;c<n+1;c++)t[c].group&&t[c].group===r[d]&&d++;return d}return 0}function ya(n,a,e,t){return n<e?n:n+a>e+t?Math.max(0,n-t+a):e}var xa=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=gt$1({type:n});static ɵinj=Je({imports:[i4]})}return n})();var rn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=gt$1({type:n});static ɵinj=Je({imports:[wt,xa,bt,i4]})}return n})();var ja=new v$1(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=p(ae);return()=>Pt(n)}});var Wa=new v$1(`MAT_SELECT_CONFIG`);var Ga=new v$1(`MatSelectTrigger`);var cn=class{source;value;constructor(a,e){this.source=a,this.value=e}};var Ca=(()=>{class n{_viewportRuler=p(F);_changeDetectorRef=p($i);_elementRef=p(Ze$1);_dir=p(g0,{optional:!0});_idGenerator=p(Yh);_renderer=p(gr);_parentFormField=p(bt$1,{optional:!0});ngControl=p(_,{self:!0,optional:!0});_liveAnnouncer=p(s0);_defaultOptions=p(Wa,{optional:!0});_animationsDisabled=Zq();_popoverLocation;_initialized=new F$1;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let r=this.panel.nativeElement,d=va(e,this.options,this.optionGroups),c=t._getHostElement();e===0&&d===1?r.scrollTop=0:r.scrollTop=ya(c.offsetTop,c.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new cn(this,e)}_scrollStrategyFactory=p(ja);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new F$1;_errorStateTracker;stateChanges=new F$1;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=Z(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(de.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=zo(()=>{let e=this.options;return e?e.changes.pipe(Zo(e),$e(()=>cw(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe($e(()=>this.optionSelectionChanges))});openedChange=new De;_openedStream=this.openedChange.pipe(Ne(e=>e),V(()=>{}));_closedStream=this.openedChange.pipe(Ne(e=>!e),V(()=>{}));selectionChange=new De;valueChange=new De;constructor(){let e=p(Qn),t=p(qt,{optional:!0}),r=p(Xt,{optional:!0}),d=p(new bc(`tabindex`),{optional:!0}),c=p(Mt$1,{optional:!0}),u=p(fn,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Ze(e,u||this.ngControl,r,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=d==null?0:parseInt(d)||0,this._popoverLocation=c?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new kt(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Ut(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Ut(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Zo(null),Ut(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute(`aria-labelledby`,e):r.removeAttribute(`aria-labelledby`)}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(wt$2(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,`animationend`,d=>{d.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,r=t===40||t===38||t===37||t===39,d=t===13||t===32,c=this._keyManager;if(!c.isTyping()&&d&&!wI(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let u=this.selected;c.onKeydown(e);let f=this.selected;f&&u!==f&&this._liveAnnouncer.announce(f.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,r=e.keyCode,d=r===40||r===38,c=t.isTyping();if(d&&e.altKey)e.preventDefault(),this.close();else if(!c&&(r===13||r===32)&&t.activeItem&&!wI(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!c&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let u=this.options.some(f=>!f.disabled&&!f.selected);this.options.forEach(f=>{f.disabled||(u?f.select():f.deselect())})}else{let u=t.activeItemIndex;t.onKeydown(e),this._multiple&&d&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==u&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!wI(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof xt?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Zh(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=cw(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Ut(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),cw(...this.options.map(t=>t._stateChanges)).pipe(Ut(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,r)=>this.sortComparator?this.sortComparator(t,r,e):e.indexOf(t)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(r=>r.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+` `:``;return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(e){let t=Nr(e);t&&(t.tagName===`MAT-OPTION`||t.classList.contains(`cdk-overlay-backdrop`)||t.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`trigger`],t=[`panel`],r=[[[`mat-select-trigger`]],`*`],d=[`mat-select-trigger`,`*`];function c(N,q){if(N&1&&(rc(0,`span`,4),OT(1),Tf()),N&2){let b=iT();GC(),Zv(b.placeholder)}}function u(N,q){N&1&&cT(0)}function f(N,q){if(N&1&&(rc(0,`span`,11),OT(1),Tf()),N&2){let b=iT(2);GC(),Zv(b.triggerValue)}}function z(N,q){if(N&1&&(rc(0,`span`,5),HS(1,u,1,0)(2,f,2,1,`span`,11),Tf()),N&2){let b=iT();GC(),zS(b.customTrigger?1:2)}}function w(N,q){if(N&1){let b=JS();rc(0,`div`,12,1),vc(`keydown`,function(ce){pg(b);let Ft=iT();return gg(Ft._handleKeydown(ce))}),cT(2,1),Tf()}if(N&2){let b=iT();wT(b.panelClass),Vv(`mat-select-panel-animations-enabled`,!b._animationsDisabled)(`mat-primary`,b._parentFormField?.color===`primary`)(`mat-accent`,b._parentFormField?.color===`accent`)(`mat-warn`,b._parentFormField?.color===`warn`)(`mat-undefined`,!b._parentFormField?.color),Ui(`id`,b.id+`-panel`)(`aria-multiselectable`,b.multiple)(`aria-label`,b.ariaLabel||null)(`aria-labelledby`,b._getPanelAriaLabelledby())}}return Fi({type:n,selectors:[[`mat-select`]],contentQueries:function(q,b,P){if(q&1&&Dc(P,Ga,5)(P,bt,5)(P,on,5),q&2){let ce;Af(ce=Rf())&&(b.customTrigger=ce.first),Af(ce=Rf())&&(b.options=ce),Af(ce=Rf())&&(b.optionGroups=ce)}},viewQuery:function(q,b){if(q&1&&Lv(e,5)(t,5)(me$1,5),q&2){let P;Af(P=Rf())&&(b.trigger=P.first),Af(P=Rf())&&(b.panel=P.first),Af(P=Rf())&&(b._overlayDir=P.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(q,b){q&1&&vc(`keydown`,function(ce){return b._handleKeydown(ce)})(`focus`,function(){return b._onFocus()})(`blur`,function(){return b._onBlur()}),q&2&&(Ui(`id`,b.id)(`tabindex`,b.disabled?-1:b.tabIndex)(`aria-controls`,b.panelOpen?b.id+`-panel`:null)(`aria-expanded`,b.panelOpen)(`aria-label`,b.ariaLabel||null)(`aria-required`,b.required.toString())(`aria-disabled`,b.disabled.toString())(`aria-invalid`,b.errorState)(`aria-activedescendant`,b._getAriaActiveDescendant()),Vv(`mat-mdc-select-disabled`,b.disabled)(`mat-mdc-select-invalid`,b.errorState)(`mat-mdc-select-required`,b.required)(`mat-mdc-select-empty`,b.empty)(`mat-mdc-select-multiple`,b.multiple)(`mat-select-open`,b.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,zi],disableRipple:[2,`disableRipple`,`disableRipple`,zi],tabIndex:[2,`tabIndex`,`tabIndex`,N=>N==null?0:Z2(N)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,zi],placeholder:`placeholder`,required:[2,`required`,`required`,zi],multiple:[2,`multiple`,`multiple`,zi],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,zi],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,Z2],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,zi]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[oD([{provide:gt,useExisting:n},{provide:an,useExisting:n}]),Yt],ngContentSelectors:d,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(q,b){if(q&1&&(aT(r),rc(0,`div`,2,0),vc(`click`,function(){return b.open()}),rc(3,`div`,3),HS(4,c,2,1,`span`,4)(5,z,3,1,`span`,5),Tf(),rc(6,`div`,6)(7,`div`,7),Sg(),rc(8,`svg`,8),yc(9,`path`,9),Tf()()()(),_v(10,w,3,16,`ng-template`,10),vc(`detach`,function(){return b.close()})(`backdropClick`,function(){return b.close()})(`overlayKeydown`,function(ce){return b._handleOverlayKeydown(ce)})),q&2){let P=dT(1);GC(3),Ui(`id`,b._valueId),GC(),zS(b.empty?4:5),GC(6),Nv(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,b._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,b._scrollStrategy)(`cdkConnectedOverlayOrigin`,b._preferredOverlayOrigin||P)(`cdkConnectedOverlayPositions`,b._positions)(`cdkConnectedOverlayWidth`,b._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,b._popoverLocation)}},dependencies:[xt,me$1],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2})})()}return n})();var Na=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=gt$1({type:n});static ɵinj=Je({imports:[we,rn,i4,wt$1,$n,rn]})}return n})();var Ha=(n,a)=>a.field;function Ka(n,a){if(n&1&&(rc(0,`mat-option`,8),OT(1),Tf()),n&2){let e=a.$implicit;Nv(`value`,e),GC(),Zv(e)}}function Xa(n,a){if(n&1){let e=JS();rc(0,`mat-form-field`,1)(1,`mat-label`),OT(2),Tf(),rc(3,`mat-select`,6),vc(`valueChange`,function(r){let d=pg(e).$implicit,c=iT();return gg(c.setColumn(d.field,r))}),rc(4,`mat-option`,7),OT(5,`(not in this file)`),Tf(),qS(6,Ka,2,2,`mat-option`,8,WS),Tf()()}if(n&2){let e=a.$implicit,t=iT();GC(2),Kv(``,e.label,``,e.required?` *`:``),GC(),Nv(`value`,t.columns()[e.field]??``),GC(3),ZS(t.headers())}}function $a(n,a){if(n&1){let e=JS();rc(0,`div`,2)(1,`p`),OT(2,` Most income rows in this file are negative. This file seems to use positive = money out (some budgeting apps do). Flip signs? `),Tf(),rc(3,`mat-checkbox`,9),vc(`change`,function(r){pg(e);let d=iT();return gg(d.flipSign.set(r.checked))}),OT(4,` Yes, flip signs so money out is negative `),Tf()()}if(n&2){let e=iT();GC(3),Nv(`checked`,e.flipSign())}}var Ia=[{field:`date`,label:`Date`,required:!0},{field:`description`,label:`Description (merchant)`,required:!0},{field:`amount`,label:`Amount`,required:!0},{field:`category`,label:`Category`,required:!1},{field:`account`,label:`Account`,required:!1},{field:`account_type`,label:`Account type`,required:!1},{field:`link`,label:`Link (debt or income name)`,required:!1},{field:`notes`,label:`Notes`,required:!1}];var Qa=.8;var Tt=class n{headers=Cc.required();rows=Cc.required();initial=Cc.required();incomeNames=Cc([]);confirmed=z2();cancelled=z2();fields=Ia;columns=kf(()=>r({},this.initial().columns));flipSign=kf(()=>this.initial().flipSign);complete=Ic(()=>Ia.every(a=>!a.required||this.columns()[a.field]));proposeFlip=Ic(()=>fa(this.rows(),{columns:this.columns(),flipSign:!1},this.incomeNames())>=Qa);setColumn(a,e){this.columns.update(t=>{let r$1=r({},t);return e?r$1[a]=e:delete r$1[a],r$1})}confirm(){this.confirmed.emit({columns:this.columns(),flipSign:this.proposeFlip()&&this.flipSign()})}static ɵfac=function(e){return new(e||n)};static ɵcmp=Fi({type:n,selectors:[[`app-column-mapper`]],inputs:{headers:[1,`headers`],rows:[1,`rows`],initial:[1,`initial`],incomeNames:[1,`incomeNames`]},outputs:{confirmed:`confirmed`,cancelled:`cancelled`},decls:13,vars:2,consts:[[1,`grid`],[`appearance`,`outline`],[`role`,`status`,1,`sign`],[1,`actions`],[`mat-flat-button`,``,`type`,`button`,3,`click`,`disabled`],[`mat-button`,``,`type`,`button`,3,`click`],[3,`valueChange`,`value`],[`value`,``],[3,`value`],[3,`change`,`checked`]],template:function(e,t){e&1&&(rc(0,`h2`),OT(1,`Match your columns`),Tf(),rc(2,`p`),OT(3,` This file is not in the template format. Pick which of its columns holds each value. Your choice is remembered for files with the same columns. `),Tf(),rc(4,`div`,0),qS(5,Xa,8,3,`mat-form-field`,1,Ha),Tf(),HS(7,$a,5,1,`div`,2),rc(8,`div`,3)(9,`button`,4),vc(`click`,function(){return t.confirm()}),OT(10,` Use these columns `),Tf(),rc(11,`button`,5),vc(`click`,function(){return t.cancelled.emit()}),OT(12,`Cancel`),Tf()()),e&2&&(GC(5),ZS(t.fields),GC(2),zS(t.proposeFlip()?7:-1),GC(2),Nv(`disabled`,!t.complete()))},dependencies:[xn,yn,Et,_t,$n,Xe,se,Na,Ca,bt],styles:[`.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(16rem,1fr));gap:0 1rem}.sign[_ngcontent-%COMP%]{padding:.75rem 1rem;border-radius:.5rem;background:var(--%NS%mat-sys-secondary-container);color:var(--%NS%mat-sys-on-secondary-container);margin-bottom:1rem}.actions[_ngcontent-%COMP%]{display:flex;gap:.5rem}`]})};var Ya=new v$1(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var Rt=class{source;checked;constructor(a,e){this.source=a,this.checked=e}};var ln=(()=>{class n{_elementRef=p(Ze$1);_focusMonitor=p($R);_changeDetectorRef=p($i);defaults=p(Ya);_injector=p(ae);_signalFormField=null;_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Rt(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=Zq();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new De;toggleChange=new De;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){p(Es).load(Nt);let e=p(new bc(`tabindex`),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||`accent`,this.id=this._uniqueId=p(Yh).getId(`mat-mdc-slide-toggle-`),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngOnInit(){this._signalFormField=this._injector.get(fn,void 0,{optional:!0,self:!0})}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0&&!this._signalFormField?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Rt(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`switch`],t=[`*`];function r(d,c){d&1&&(rc(0,`span`,11),Sg(),rc(1,`svg`,13),yc(2,`path`,14),Tf(),rc(3,`svg`,15),yc(4,`path`,16),Tf()())}return Fi({type:n,selectors:[[`mat-slide-toggle`]],viewQuery:function(c,u){if(c&1&&Lv(e,5),c&2){let f;Af(f=Rf())&&(u._switchElement=f.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(c,u){c&2&&(xv(`id`,u.id),Ui(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),wT(u.color?`mat-`+u.color:``),Vv(`mat-mdc-slide-toggle-focused`,u._focused)(`mat-mdc-slide-toggle-checked`,u.checked)(`mat-slide-toggle-full-width`,u.fullWidth)(`_mat-animation-noopable`,u._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,zi],color:`color`,disabled:[2,`disabled`,`disabled`,zi],fullWidth:[2,`fullWidth`,`fullWidth`,zi],disableRipple:[2,`disableRipple`,`disableRipple`,zi],tabIndex:[2,`tabIndex`,`tabIndex`,d=>d==null?0:Z2(d)],checked:[2,`checked`,`checked`,zi],hideIcon:[2,`hideIcon`,`hideIcon`,zi],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,zi]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[oD([{provide:Q,useExisting:da(()=>n),multi:!0},{provide:D,useExisting:n,multi:!0}]),Yt],ngContentSelectors:t,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(c,u){if(c&1&&(aT(),rc(0,`div`,1)(1,`button`,2,0),vc(`click`,function(){return u._handleClick()}),yc(3,`div`,3)(4,`span`,4),rc(5,`span`,5)(6,`span`,6)(7,`span`,7),yc(8,`span`,8),Tf(),rc(9,`span`,9),yc(10,`span`,10),Tf(),HS(11,r,5,0,`span`,11),Tf()()(),rc(12,`label`,12),vc(`click`,function(z){return z.stopPropagation()}),cT(13),Tf()()),c&2){let f=dT(2);Nv(`labelPosition`,u.labelPosition),GC(),Vv(`mdc-switch--selected`,u.checked)(`mdc-switch--unselected`,!u.checked)(`mdc-switch--checked`,u.checked)(`mdc-switch--disabled`,u.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,u.disabledInteractive),Nv(`tabIndex`,u.disabled&&!u.disabledInteractive?-1:u.tabIndex)(`disabled`,u.disabled&&!u.disabledInteractive),Ui(`id`,u.buttonId)(`name`,u.name)(`aria-label`,u.ariaLabel)(`aria-labelledby`,u._getAriaLabelledBy())(`aria-describedby`,u.ariaDescribedby)(`aria-required`,u.required||null)(`aria-checked`,u.checked)(`aria-disabled`,u.disabled&&u.disabledInteractive?`true`:null),GC(9),Nv(`matRippleTrigger`,f)(`matRippleDisabled`,u.disableRipple||u.disabled)(`matRippleCentered`,!0),GC(),zS(u.hideIcon?-1:11),GC(),Nv(`for`,u.buttonId),Ui(`id`,u._labelId)}},dependencies:[Gt,Mt],styles:[`.mdc-switch {
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
`],encapsulation:2})})()}return n})();var Ea=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=gt$1({type:n});static ɵinj=Je({imports:[ln,i4]})}return n})();var Ja=(n,a)=>a.id;function ei(n,a){if(n&1){let e=JS();rc(0,`tr`)(1,`td`)(2,`mat-checkbox`,4),vc(`change`,function(r){let d=pg(e).$implicit,c=iT();return gg(c.toggle(d.id,r.checked))}),Tf()(),rc(3,`td`),OT(4),Tf(),rc(5,`td`),OT(6),Tf(),rc(7,`td`),OT(8),Tf(),rc(9,`td`,5),OT(10),KT(11,`money`),Tf()()}if(n&2){let e=a.$implicit,t=iT();GC(2),Nv(`checked`,t.kept().has(e.id)),Mv(`aria-label`,`Keep `+e.description+` on `+e.date),GC(2),Zv(e.date),GC(2),Zv(e.account),GC(2),Zv(e.description),GC(2),Zv(QT(11,6,e.amount))}}var At=class n{duplicates=Cc.required();kept=Cc.required();keptChange=z2();toggle(a,e){let t=new Set(this.kept());e?t.add(a):t.delete(a),this.keptChange.emit(t)}static ɵfac=function(e){return new(e||n)};static ɵcmp=Fi({type:n,selectors:[[`app-reimport-duplicates`]],inputs:{duplicates:[1,`duplicates`],kept:[1,`kept`]},outputs:{keptChange:`keptChange`},decls:19,vars:1,consts:[[1,`list`],[`aria-label`,`Likely duplicates`],[`scope`,`col`],[`scope`,`col`,1,`amount`],[3,`change`,`checked`,`aria-label`],[1,`amount`]],template:function(e,t){e&1&&(rc(0,`p`),OT(1),Tf(),rc(2,`div`,0)(3,`table`,1)(4,`thead`)(5,`tr`)(6,`th`,2),OT(7,`Keep`),Tf(),rc(8,`th`,2),OT(9,`Date`),Tf(),rc(10,`th`,2),OT(11,`Account`),Tf(),rc(12,`th`,2),OT(13,`Description`),Tf(),rc(14,`th`,3),OT(15,`Amount`),Tf()()(),rc(16,`tbody`),qS(17,ei,12,8,`tr`,null,Ja),Tf()()()),e&2&&(GC(),xf(` `,t.duplicates().length,` transactions match ones you already have (same date, account, description and amount). They will be skipped. Tick any that are real new transactions. `),GC(16),ZS(t.duplicates()))},dependencies:[xn,Et,_t,i],styles:[`.list[_ngcontent-%COMP%]{max-height:20rem;overflow:auto}.amount[_ngcontent-%COMP%]{text-align:right;font-variant-numeric:tabular-nums}table[_ngcontent-%COMP%]{border-collapse:collapse;width:100%}td[_ngcontent-%COMP%]{padding:.125rem .5rem}`]})};var ti=(n,a)=>a.type;var ni=(n,a)=>a.account+a.windowStart;var ai=(n,a)=>a.returned.id;var Oa=(n,a)=>a.id;var ii=(n,a)=>a.income.id;var oi=(n,a)=>a.rowNumber;function ri(n,a){n&1&&(rc(0,`p`,0),OT(1),Tf()),n&2&&(GC(),Zv(a))}function ci(n,a){if(n&1&&(rc(0,`tr`)(1,`th`,4),OT(2),Tf(),rc(3,`td`,5),OT(4),Tf()()),n&2){let e=a.$implicit;Ui(`data-count`,e.type),GC(2),Zv(e.label),GC(2),Zv(e.count)}}function si(n,a){if(n&1){let e=JS();rc(0,`mat-card`,6)(1,`mat-card-content`)(2,`h3`),OT(3,`Rows imported twice`),Tf(),rc(4,`p`),OT(5),Tf(),rc(6,`mat-slide-toggle`,16),vc(`change`,function(r){pg(e);let d=iT();return gg(d.removeDoubleFeedChange.emit(r.checked))}),OT(7,` Remove the copies `),Tf()()()}if(n&2){let e=a.$implicit,t=iT();GC(5),Xv(` `,e.account,`: from `,e.windowStart,` to the day before `,e.cutoff,` (`,e.weeks,` weeks) most rows appear twice. `,e.removed,` copies will be removed. `),GC(),Nv(`checked`,t.removeDoubleFeed())}}function li(n,a){if(n&1){let e=JS();rc(0,`mat-card`,7)(1,`mat-card-content`)(2,`h3`),OT(3,`Already imported`),Tf(),rc(4,`app-reimport-duplicates`,17),vc(`keptChange`,function(r){pg(e);let d=iT();return gg(d.keptDuplicatesChange.emit(r))}),Tf()()()}if(n&2){let e=iT();GC(4),Nv(`duplicates`,e.preview().duplicates)(`kept`,e.keptDuplicates())}}function di(n,a){if(n&1&&(rc(0,`li`),OT(1),KT(2,`money`),KT(3,`money`),Tf()),n&2){let e=a.$implicit;GC(),Xv(` `,e.returned.date,` `,e.returned.description,` `,QT(2,5,e.returned.amount),` matches `,e.original.date,` `,QT(3,7,e.original.amount),` `)}}function mi(n,a){if(n&1&&(rc(0,`li`),OT(1),KT(2,`money`),Tf()),n&2){let e=a.$implicit;GC(),Yv(` `,e.date,` `,e.description,` `,QT(2,3,e.amount),`: no matching payment found `)}}function hi(n,a){if(n&1&&(rc(0,`mat-card`,8)(1,`mat-card-content`)(2,`h3`),OT(3,`Returned payments`),Tf(),rc(4,`p`),OT(5,`A payment that bounced cancels out with the original payment.`),Tf(),rc(6,`ul`),qS(7,di,4,9,`li`,null,ai),qS(9,mi,3,5,`li`,null,Oa),Tf()()()),n&2){let e=iT();GC(7),ZS(e.preview().returnedPayments),GC(2),ZS(e.preview().unmatchedReturns)}}function pi(n,a){if(n&1&&(rc(0,`li`),OT(1),KT(2,`money`),Tf()),n&2){let e=a.$implicit;GC(),Yv(``,e.date,` `,e.description,` `,QT(2,3,e.amount))}}function ui(n,a){if(n&1&&(rc(0,`mat-card`,9)(1,`mat-card-content`)(2,`h3`),OT(3,`Refunds`),Tf(),rc(4,`p`),OT(5,`Refunds reduce spending on the line they belong to.`),Tf(),rc(6,`ul`),qS(7,pi,3,5,`li`,null,Oa),Tf()()()),n&2){let e=iT();GC(7),ZS(e.preview().refunds)}}function bi(n,a){if(n&1&&(rc(0,`li`),OT(1),KT(2,`money`),Tf()),n&2){let e=a.$implicit;GC(),Jv(` `,e.income.date,` `,e.income.description,` `,QT(2,6,e.income.amount),` after `,e.transfer.date,` `,e.transfer.description,` on `,e.transfer.account,` `)}}function gi(n,a){if(n&1&&(rc(0,`mat-card`,10)(1,`mat-card-content`)(2,`h3`),OT(3,`May be your own money coming back`),Tf(),rc(4,`p`),OT(5,` These deposits follow a transfer out of the same amount, so they are not counted as income. `),Tf(),rc(6,`ul`),qS(7,bi,3,8,`li`,null,ii),Tf()()()),n&2){let e=iT();GC(7),ZS(e.preview().mirrors)}}function fi(n,a){if(n&1&&(rc(0,`tr`)(1,`td`),OT(2),Tf(),rc(3,`td`),OT(4),Tf()()),n&2){let e=a.$implicit;GC(2),Zv(e.rowNumber??``),GC(2),Zv(e.message)}}function _i(n,a){if(n&1&&(rc(0,`mat-card`,11)(1,`mat-card-content`)(2,`h3`),OT(3),Tf(),rc(4,`p`),OT(5,`They will be imported, but something looks off.`),Tf(),rc(6,`table`,18)(7,`thead`)(8,`tr`)(9,`th`,19),OT(10,`Row`),Tf(),rc(11,`th`,19),OT(12,`What to check`),Tf()()(),rc(13,`tbody`),qS(14,fi,5,2,`tr`,null,GS),Tf()()()()),n&2){let e=iT();GC(3),xf(`Check these rows (`,e.preview().warnings.length,`)`),GC(11),ZS(e.preview().warnings)}}function ki(n,a){if(n&1&&(rc(0,`tr`)(1,`td`),OT(2),Tf(),rc(3,`td`),OT(4),Tf(),rc(5,`td`),OT(6),Tf()()),n&2){let e=a.$implicit;GC(2),Zv(e.rowNumber),GC(2),Zv(e.recordType||`(no type)`),GC(2),Zv(e.reason)}}function vi(n,a){if(n&1&&(rc(0,`mat-card`,12)(1,`mat-card-content`)(2,`h3`),OT(3),Tf(),rc(4,`p`),OT(5,`These rows are not imported. Fix them in the CSV and import again.`),Tf(),rc(6,`table`,20)(7,`thead`)(8,`tr`)(9,`th`,19),OT(10,`Row`),Tf(),rc(11,`th`,19),OT(12,`Record type`),Tf(),rc(13,`th`,19),OT(14,`Reason`),Tf()()(),rc(15,`tbody`),qS(16,ki,7,3,`tr`,null,oi),Tf()()()()),n&2){let e=iT();GC(3),xf(`Skipped rows (`,e.preview().skipped.length,`)`),GC(13),ZS(e.preview().skipped)}}var yi={transaction:`Transaction rows`,debt:`Debts`,income:`Income sources`,deduction:`Payroll deductions`,bill:`Bills`,balance:`Cash balances`,schedule:`Payment schedule changes`,windfall:`Windfalls`};var zt=class n{preview=Cc.required();notice=Cc(null);removeDoubleFeed=Cc.required();keptDuplicates=Cc.required();removeDoubleFeedChange=z2();keptDuplicatesChange=z2();confirmed=z2();cancelled=z2();countRows=Ic(()=>Object.entries(this.preview().counts).map(([a,e])=>({type:a,count:e,label:yi[a]??a})));toSave=Ic(()=>this.preview().transactionsToSave+this.keptDuplicates().size);static ɵfac=function(e){return new(e||n)};static ɵcmp=Fi({type:n,selectors:[[`app-import-preview`]],inputs:{preview:[1,`preview`],notice:[1,`notice`],removeDoubleFeed:[1,`removeDoubleFeed`],keptDuplicates:[1,`keptDuplicates`]},outputs:{removeDoubleFeedChange:`removeDoubleFeedChange`,keptDuplicatesChange:`keptDuplicatesChange`,confirmed:`confirmed`,cancelled:`cancelled`},decls:48,vars:17,consts:[[`role`,`status`,1,`notice`],[`appearance`,`outlined`],[`aria-label`,`Records per type`],[`aria-label`,`Totals`],[`scope`,`row`],[1,`num`],[`appearance`,`outlined`,`data-section`,`double-feed`],[`appearance`,`outlined`,`data-section`,`duplicates`],[`appearance`,`outlined`,`data-section`,`returns`],[`appearance`,`outlined`,`data-section`,`refunds`],[`appearance`,`outlined`,`data-section`,`mirrors`],[`appearance`,`outlined`,`data-section`,`warnings`],[`appearance`,`outlined`,`data-section`,`skipped`],[1,`actions`],[`mat-flat-button`,``,`type`,`button`,3,`click`],[`mat-button`,``,`type`,`button`,3,`click`],[3,`change`,`checked`],[3,`keptChange`,`duplicates`,`kept`],[`aria-label`,`Flagged rows`],[`scope`,`col`],[`aria-label`,`Skipped rows`]],template:function(e,t){if(e&1&&(HS(0,ri,2,1,`p`,0),rc(1,`mat-card`,1)(2,`mat-card-content`)(3,`h3`),OT(4,`What is in the file`),Tf(),rc(5,`table`,2)(6,`tbody`),qS(7,ci,5,3,`tr`,null,ti),Tf()(),rc(9,`h3`),OT(10,`Totals`),Tf(),rc(11,`table`,3)(12,`tbody`)(13,`tr`)(14,`th`,4),OT(15,`Income`),Tf(),rc(16,`td`,5),OT(17),KT(18,`money`),Tf()(),rc(19,`tr`)(20,`th`,4),OT(21,`Spending`),Tf(),rc(22,`td`,5),OT(23),KT(24,`money`),Tf()(),rc(25,`tr`)(26,`th`,4),OT(27,`Debt`),Tf(),rc(28,`td`,5),OT(29),KT(30,`money`),Tf()()()(),rc(31,`p`),OT(32,` Income leaves out money moved from your own accounts. Spending is money out less refunds, leaving out transfers, card payments, returned payments and loan statements. Debt is the sum of the debt balances in the file. `),Tf()()(),qS(33,si,8,6,`mat-card`,6,ni),HS(35,li,5,2,`mat-card`,7),HS(36,hi,11,0,`mat-card`,8),HS(37,ui,9,0,`mat-card`,9),HS(38,gi,9,0,`mat-card`,10),HS(39,_i,16,1,`mat-card`,11),HS(40,vi,18,1,`mat-card`,12),rc(41,`p`),OT(42),Tf(),rc(43,`div`,13)(44,`button`,14),vc(`click`,function(){return t.confirmed.emit()}),OT(45,`Confirm`),Tf(),rc(46,`button`,15),vc(`click`,function(){return t.cancelled.emit()}),OT(47,`Cancel`),Tf()()),e&2){let r;zS((r=t.notice())?0:-1,r),GC(7),ZS(t.countRows()),GC(10),Zv(QT(18,11,t.preview().totals.income)),GC(6),Zv(QT(24,13,t.preview().totals.spending)),GC(6),Zv(QT(30,15,t.preview().totals.debt)),GC(4),ZS(t.preview().doubleFeed.windows),GC(2),zS(t.preview().duplicates.length>0?35:-1),GC(),zS(t.preview().returnedPayments.length>0||t.preview().unmatchedReturns.length>0?36:-1),GC(),zS(t.preview().refunds.length>0?37:-1),GC(),zS(t.preview().mirrors.length>0?38:-1),GC(),zS(t.preview().warnings.length>0?39:-1),GC(),zS(t.preview().skipped.length>0?40:-1),GC(2),xf(``,t.toSave(),` transactions will be saved.`)}},dependencies:[xn,yn,A,I,_$1,Ea,ln,At,i],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;gap:1rem}table[_ngcontent-%COMP%]{border-collapse:collapse}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{text-align:left;padding:.125rem .75rem .125rem 0;vertical-align:top}.num[_ngcontent-%COMP%]{text-align:right;font-variant-numeric:tabular-nums}.notice[_ngcontent-%COMP%]{padding:.5rem 1rem;border-radius:.5rem;background:var(--%NS%mat-sys-secondary-container);color:var(--%NS%mat-sys-on-secondary-container)}.actions[_ngcontent-%COMP%]{display:flex;gap:.5rem}h3[_ngcontent-%COMP%]{margin:0 0 .5rem}`]})};var xi=()=>({});var wi=n=>({columns:n,flipSign:!1});function Si(n,a){n&1&&(rc(0,`p`),OT(1,`Open or create a data file first.`),Tf(),rc(2,`a`,1),OT(3,`Go to Welcome`),Tf())}function Ci(n,a){n&1&&(rc(0,`p`,4),OT(1,` You are trying the sample. Anything you import here stays in memory and is not saved. To use your own data, choose Close file in the menu at the top right and create a data file. `),Tf())}function Ni(n,a){if(n&1){let e=JS();rc(0,`button`,11),vc(`click`,function(){pg(e);let r=iT(3);return gg(r.importSample())}),OT(1,` Import the sample file `),Tf()}}function Ii(n,a){if(n&1){let e=JS();HS(0,Ci,2,0,`p`,4),rc(1,`p`),OT(2,` Import the CSV your AI assistant made from your statements (see Help for the template). Nothing leaves this device. `),Tf(),rc(3,`div`,5),vc(`dragover`,function(r){pg(e);let d=iT(2);return gg(d.onDragOver(r))})(`dragleave`,function(){pg(e);let r=iT(2);return gg(r.dragging.set(!1))})(`drop`,function(r){pg(e);let d=iT(2);return gg(d.onDrop(r))}),rc(4,`p`),OT(5,`Drop a CSV file here, or`),Tf(),rc(6,`div`,6)(7,`button`,7),vc(`click`,function(){pg(e);let r=dT(13);return gg(r.click())}),rc(8,`mat-icon`,8),OT(9,`upload_file`),Tf(),OT(10,` Choose CSV file `),Tf(),HS(11,Ni,2,0,`button`,9),Tf(),rc(12,`input`,10,0),vc(`change`,function(r){pg(e);let d=iT(2);return gg(d.onFileInput(r))}),Tf()()}if(n&2){let e=iT(2);zS(e.store.isSample()?0:-1),GC(3),Vv(`over`,e.dragging()),GC(8),zS(e.store.isSample()?11:-1)}}function Mi(n,a){if(n&1){let e=JS();rc(0,`app-column-mapper`,12),vc(`confirmed`,function(r){pg(e);let d=iT(2);return gg(d.onMapped(r))})(`cancelled`,function(){pg(e);let r=iT(2);return gg(r.reset())}),Tf()}if(n&2){let e=iT(2);Nv(`headers`,e.headers())(`rows`,e.rawRows().slice(0,50))(`initial`,e.mapping()??qT(5,wi,WT(4,xi)))(`incomeNames`,e.incomeNames())}}function Ei(n,a){if(n&1){let e=JS();rc(0,`h2`),OT(1),Tf(),rc(2,`app-import-preview`,13),vc(`removeDoubleFeedChange`,function(r){pg(e);let d=iT(3);return gg(d.setRemoveDoubleFeed(r))})(`keptDuplicatesChange`,function(r){pg(e);let d=iT(3);return gg(d.keptDuplicates.set(r))})(`confirmed`,function(){pg(e);let r=iT(3);return gg(r.confirm())})(`cancelled`,function(){pg(e);let r=iT(3);return gg(r.reset())}),Tf()}if(n&2){let e=iT(3);GC(),xf(`Preview: `,e.fileName()),GC(),Nv(`preview`,a.preview)(`notice`,e.notice())(`removeDoubleFeed`,e.removeDoubleFeed())(`keptDuplicates`,e.keptDuplicates())}}function Oi(n,a){if(n&1&&HS(0,Ei,3,5),n&2){let e,t=iT(2);zS((e=t.prepared())?0:-1,e)}}function Di(n,a){if(n&1){let e=JS();rc(0,`p`,14),OT(1),Tf(),rc(2,`div`,6)(3,`a`,15),OT(4,`Go to Dashboard`),Tf(),rc(5,`button`,11),vc(`click`,function(){pg(e);let r=iT(2);return gg(r.reset())}),OT(6,`Import another file`),Tf()()}if(n&2){let e=iT(2);GC(),Zv(e.savedMessage())}}function Ti(n,a){n&1&&(rc(0,`p`,3),OT(1),Tf()),n&2&&(GC(),Zv(a))}function Ri(n,a){if(n&1&&(HS(0,Ii,14,4)(1,Mi,1,7,`app-column-mapper`,2)(2,Oi,1,1)(3,Di,7,1),HS(4,Ti,2,1,`p`,3)),n&2){let e,t,r=iT();zS((e=r.step())===`pick`?0:e===`map`?1:e===`preview`?2:e===`done`?3:-1),GC(4),zS((t=r.error())?4:-1,t)}}var Ai=`This file uses the older template (v1). It was imported; the newer columns (account type, link, credit limit and others) are empty.`;var Da=class n{store=p(Yi);route=p(an$1);router=p(Mr);step=Z(`pick`);dragging=Z(!1);error=Z(null);fileName=Z(``);headers=Z([]);rawRows=Z([]);notice=Z(null);mapping=Z(null);newMappingSignature=Z(null);templateRows=Z([]);removeDoubleFeed=Z(!0);prepared=Z(null);keptDuplicates=Z(/* @__PURE__ */ new Set);savedMessage=Z(``);incomeNames=Ic(()=>this.store.data()?.incomes.map(a=>a.name)??[]);ngOnInit(){this.store.isSample()&&this.route.snapshot.queryParamMap.has(`sample`)&&this.importSample()}onDragOver(a){a.preventDefault(),this.dragging.set(!0)}async onDrop(a){a.preventDefault(),this.dragging.set(!1);let e=a.dataTransfer?.files[0];e&&await this.readFile(e)}async onFileInput(a){let e=a.target,t=e.files?.[0];e.value=``,t&&await this.readFile(t)}async importSample(){let{csv:a}=await ze();this.start(a,Ue)}onMapped(a){this.mapping.set(a),this.newMappingSignature.set(Zt(this.headers())),this.templateRows.set(Jt(this.rawRows(),a)),this.prepare()}setRemoveDoubleFeed(a){this.removeDoubleFeed.set(a),this.prepare()}confirm(){let a=this.prepared();if(!a)return;let e=Ae(a),t=this.keptDuplicates();e.skipTransactionIds=e.skipTransactionIds.filter(u=>!t.has(u));let r=this.newMappingSignature(),d=this.mapping();r&&d&&(e.mapping={signature:r,mapping:d}),this.store.update(u=>Le(u,a,e,this.fileName(),Ta()));let c=a.preview.transactionsToSave+t.size;this.savedMessage.set(`Imported ${this.fileName()}: ${c} transactions saved.`),this.step.set(`done`),this.prepared.set(null)}reset(){this.step.set(`pick`),this.error.set(null),this.notice.set(null),this.mapping.set(null),this.newMappingSignature.set(null),this.prepared.set(null),this.removeDoubleFeed.set(!0),this.keptDuplicates.set(/* @__PURE__ */ new Set),this.route.snapshot.queryParamMap.has(`sample`)&&this.router.navigate([],{queryParams:{}})}async readFile(a){try{this.start(await a.text(),a.name)}catch(e){this.error.set(ur(e,`import`))}}start(a,e){this.reset();let{headers:t,rows:r}=ba(a);if(t.length===0||r.length===0){this.error.set(`That file has no header row or no data rows.`);return}this.fileName.set(e),this.headers.set(t),this.rawRows.set(r);let d=s(t);if(d!==`unknown`){this.notice.set(d===`v1`?Ai:null),this.templateRows.set(r),this.prepare();return}let c=this.store.data()?.columnMappings[Zt(t)];if(c){this.mapping.set(c),this.templateRows.set(Jt(r,c)),this.prepare();return}this.mapping.set(ga(t,r.slice(0,20))),this.step.set(`map`)}prepare(){let a=this.store.data();if(!a)return;let e={importId:crypto.randomUUID(),newId:()=>crypto.randomUUID(),importDate:Ta()};this.prepared.set(Oe(this.templateRows(),a,e,{removeDoubleFeed:this.removeDoubleFeed()})),this.keptDuplicates.set(/* @__PURE__ */ new Set),this.step.set(`preview`)}static ɵfac=function(e){return new(e||n)};static ɵcmp=Fi({type:n,selectors:[[`app-import-page`]],decls:4,vars:1,consts:[[`picker`,``],[`mat-flat-button`,``,`routerLink`,`/welcome`],[3,`headers`,`rows`,`initial`,`incomeNames`],[`role`,`alert`,1,`error`],[`role`,`note`,1,`sample-note`],[1,`drop`,3,`dragover`,`dragleave`,`drop`],[1,`row`],[`mat-flat-button`,``,`type`,`button`,3,`click`],[1,`material-icons`],[`mat-stroked-button`,``,`type`,`button`],[`type`,`file`,`accept`,`.csv,text/csv`,`hidden`,``,3,`change`],[`mat-stroked-button`,``,`type`,`button`,3,`click`],[3,`confirmed`,`cancelled`,`headers`,`rows`,`initial`,`incomeNames`],[3,`removeDoubleFeedChange`,`keptDuplicatesChange`,`confirmed`,`cancelled`,`preview`,`notice`,`removeDoubleFeed`,`keptDuplicates`],[`role`,`status`],[`mat-flat-button`,``,`routerLink`,`/dashboard`]],template:function(e,t){e&1&&(rc(0,`h1`),OT(1,`Import`),Tf(),HS(2,Si,4,0)(3,Ri,5,2)),e&2&&(GC(2),zS(t.store.isOpen()?3:2))},dependencies:[xn,yn,A,fs,ls,fu,Tt,zt],styles:[`[_nghost-%COMP%]{display:block;max-width:56rem;margin:0 auto}.drop[_ngcontent-%COMP%]{border:2px dashed var(--%NS%mat-sys-outline);border-radius:.75rem;padding:2rem;text-align:center}.drop.over[_ngcontent-%COMP%]{border-color:var(--%NS%mat-sys-primary);background:var(--%NS%mat-sys-primary-container)}.row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem;justify-content:center}.error[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error)}.sample-note[_ngcontent-%COMP%]{padding:.625rem 1rem;border-radius:.75rem;background:var(--%NS%app-warn-bg);color:var(--%NS%app-warn-fg)}.drop[_ngcontent-%COMP%]{background:var(--%NS%app-surface)}`]})};function Ta(){let n=/* @__PURE__ */ new Date,a=e=>String(e).padStart(2,`0`);return`${n.getFullYear()}-${a(n.getMonth()+1)}-${a(n.getDate())}`}export{Da as ImportPage};