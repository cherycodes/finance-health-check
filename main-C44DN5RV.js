import{$n as hy,$r as xF,$t as WY,A as Fm,An as ao,At as SO,B as HO,Bn as dl,Br as uO,C as EY,Cn as _Z,Cr as ot$3,Ct as RC,D as FC,Dn as _s,Dr as qp,E as Et$3,En as _r,Er as qa,Et as RO,F as Ge$4,Fn as cm,Ft as St$4,G as K$3,Gr as vd,Gt as VA,H as Ia$1,Hr as ue$2,Ht as Ue$4,I as Gl,In as co,Ir as so,It as TC,J as LO,Jr as wd,K as KQ,Kn as gd,Kr as vx,Kt as VC,Ln as dF,Lr as tX,Lt as TF,Mn as cF,Mr as sX,N as GQ,O as FQ,Or as qw,Ot as Rm,P as GY,Pr as s_,Pt as Sr,Q as Lt$2,Qn as hn$1,Qt as WQ,Rn as dZ,Sr as od,St as Qk,T as Ei$1,Tr as qN,Tt as RM,U as Ii,Un as fP,Ur as uo,Vn as dt$3,Vt as Tr,W as JC,Wn as ff,Wr as vF,Wt as V$4,Xn as he$3,Xr as wn,Xt as WA,Y as LQ,Yn as h_,Yr as wi$1,Yt as Vn,Z as Lm,Zn as hi$1,Zr as wt$5,Zt as WO,_ as Dt$3,_n as ZY,_t as P_,a as BC,ai as y9,ar as kQ,at as NC,b as EF,c as Ce$4,ci as ye$5,cn as Xt$1,cr as lZ,ct as Ni$1,ei as xP,en as Wa,et as MP,f as DY,fi as zn,fn as Yc,fr as m9,ft as OM,g as Ds,gi as u$1,gn as ZQ,gt as PC,h as Di,hi as s$1,hn as ZA,hr as nX,ii as xm,in as XY,ir as kC,it as N$3,j as GA,jn as bT,jr as rn$2,jt as Se$2,kn as a_,l as D9,li as zA,ln as YA,lt as Nm,m as Dd,mi as r$1,mn as Yt$1,mr as mx,mt as Om,n as $C,ni as xb,nn as Wp,nr as it$3,nt as Mk,o as By,oi as yZ,on as Xe$4,or as km,ot as NO,p as Da$1,pi as zp,pn as Ys,pt as OP,q as Ke$4,qn as gi$1,qt as VQ,r as AC,ri as xk,rn as XA,rr as jm,s as Cd,si as ya$1,sn as Xs,sr as lO,st as Ne$2,t as $A,ti as x_,tn as Wn,tt as MR,u as DD,ui as zO,ur as lk,ut as Ns,v as E9,vn as Zh,vr as ns,vt as Pm,w as Ed,wn as _e$5,wr as pF,wt as RD,xn as _O,xt as Qe$4,y as ED,yn as Zn,yr as oX,yt as QA,z as HC,zn as db,zr as te$3}from"./chunk-DQ8CPunn.js";function w$2(t){t||(t=N$3(Dt$3));let i=new ye$5(e=>{if(t.destroyed){e.next();return}return t.onDestroy(e.next.bind(e))});return e=>e.pipe(Ia$1(i))}function Z$3(a){return a.buttons===0||a.detail===0}function W$2(a){let n=a.touches&&a.touches[0]||a.changedTouches&&a.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var $$4;function re$2(){if($$4==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>$$4=!0}))}finally{$$4=$$4||!1}return $$4}function z$2(a){return re$2()?a:!!a.capture}var se$3=new K$3(`cdk-input-modality-detector-options`);var ce$2={ignoreKeys:[18,17,224,91,16]};var me$2=650;var yt$3={passive:!0,capture:!0};var de$1=(()=>{class a{_platform=N$3(VQ);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new St$4(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=FQ(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<me$2||(this._modality.next(Z$3(t)?`keyboard`:`mouse`),this._mostRecentTarget=FQ(t))};_onTouchstart=t=>{if(W$2(t)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=FQ(t)};constructor(){let t=N$3(wt$5),e=N$3(Ne$2),o=N$3(se$3,{optional:!0});if(this._options=r$1(r$1({},ce$2),o),this.modalityDetected=this._modality.pipe(QA(1)),this.modalityChanged=this.modalityDetected.pipe(GA()),this._platform.isBrowser){let i=N$3(hi$1).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[i.listen(e,`keydown`,this._onKeydown,yt$3),i.listen(e,`mousedown`,this._onMousedown,yt$3),i.listen(e,`touchstart`,this._onTouchstart,yt$3)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static ɵfac=function(e){return new(e||a)};static ɵprov=_e$5({token:a,factory:a.ɵfac})}return a})();var Y$3=(function(a){return a[a.IMMEDIATE=0]=`IMMEDIATE`,a[a.EVENTUAL=1]=`EVENTUAL`,a})(Y$3||{});var le$2=new K$3(`cdk-focus-monitor-default-options`);var ct$2=z$2({passive:!0,capture:!0});var _t$3=(()=>{class a{_ngZone=N$3(wt$5);_platform=N$3(VQ);_inputModalityDetector=N$3(de$1);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=/* @__PURE__ */ new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=/* @__PURE__ */ new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=N$3(Ne$2);_stopInputModalityDetector=new Ge$4;constructor(){let t=N$3(le$2,{optional:!0});this._detectionMode=t?.detectionMode||Y$3.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=FQ(t);for(let o=e;o;o=o.parentElement)t.type===`focus`?this._onFocus(t,o):this._onBlur(t,o)};monitor(t,e=!1){let o=GQ(t);if(!this._platform.isBrowser||o.nodeType!==1)return he$3();let i=kQ(o)||this._document,s=this._elementInfo.get(o);if(s)return e&&(s.checkChildren=!0),s.subject;let c={checkChildren:e,subject:new Ge$4,rootNode:i};return this._elementInfo.set(o,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(t){let e=GQ(t),o=this._elementInfo.get(e);o&&(o.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(o))}focusVia(t,e,o){let i=GQ(t);i===this._document.activeElement?this._getClosestElementsInfo(i).forEach(([c,h])=>this._originChanged(c,e,h)):(this._setOrigin(e),typeof i.focus==`function`&&i.focus(o))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?`mouse`:`program`}_shouldBeAttributedToTouch(t){return this._detectionMode===Y$3.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle(`cdk-focused`,!!e),t.classList.toggle(`cdk-touch-focused`,e===`touch`),t.classList.toggle(`cdk-keyboard-focused`,e===`keyboard`),t.classList.toggle(`cdk-mouse-focused`,e===`mouse`),t.classList.toggle(`cdk-program-focused`,e===`program`)}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t===`touch`&&e,this._detectionMode===Y$3.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?me$2:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(t,e){let o=this._elementInfo.get(e),i=FQ(t);!o||!o.checkChildren&&e!==i||this._originChanged(e,this._getFocusOrigin(i),o)}_onBlur(t,e){let o=this._elementInfo.get(e);!o||o.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(o,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,o=this._rootNodeFocusListenerCount.get(e)||0;o||this._ngZone.runOutsideAngular(()=>{e.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,ct$2),e.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,ct$2)}),this._rootNodeFocusListenerCount.set(e,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Ia$1(this._stopInputModalityDetector)).subscribe(i=>{this._setOrigin(i,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let o=this._rootNodeFocusListenerCount.get(e);o>1?this._rootNodeFocusListenerCount.set(e,o-1):(e.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,ct$2),e.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,ct$2),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,o){this._setClasses(t,e),this._emitOrigin(o,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((o,i)=>{(i===t||o.checkChildren&&i.contains(t))&&e.push([i,o])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:o}=this._inputModalityDetector;if(o!==`mouse`||!e||e===t||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`||t.disabled)return!1;let i=t.labels;if(i){for(let s=0;s<i.length;s++)if(i[s].contains(e))return!0}return!1}static ɵfac=function(e){return new(e||a)};static ɵprov=_e$5({token:a,factory:a.ɵfac})}return a})();var be$2=/* @__PURE__ */ new Set;var D$2;var mt$3=(()=>{class a{_platform=N$3(VQ);_nonce=N$3(Wa,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Pe$3}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&Re$2(t,this._nonce),this._matchMedia(t)}static ɵfac=function(e){return new(e||a)};static ɵprov=_e$5({token:a,factory:a.ɵfac})}return a})();function Re$2(a,n){if(!be$2.has(a))try{D$2||(D$2=document.createElement(`style`),n&&D$2.setAttribute(`nonce`,n),D$2.setAttribute(`type`,`text/css`),document.head.appendChild(D$2)),D$2.sheet&&(D$2.sheet.insertRule(`@media ${a.replace(/[{}]/g,``)} {body{ }}`,0),be$2.add(a))}catch(t){console.error(t)}}function Pe$3(a){return{matches:a===`all`||a===``,media:a,addListener:()=>{},removeListener:()=>{}}}var xt$4=(()=>{class a{_mediaMatcher=N$3(mt$3);_zone=N$3(wt$5);_queries=/* @__PURE__ */ new Map;_destroySubject=new Ge$4;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return ue$1(KQ(t)).some(o=>this._registerQuery(o).mql.matches)}observe(t){let o=ue$1(KQ(t)).map(s=>this._registerQuery(s).observable),i=zp(o);return i=ns(i.pipe(Vn(1)),i.pipe(QA(1),WA(0))),i.pipe(Se$2(s=>{let c={matches:!1,breakpoints:{}};return s.forEach(({matches:h,query:y})=>{c.matches=c.matches||h,c.breakpoints[y]=h}),c}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let e=this._mediaMatcher.matchMedia(t),i={observable:new ye$5(s=>{let c=h=>this._zone.run(()=>s.next(h));return e.addListener(c),()=>{e.removeListener(c)}}).pipe(qp(e),Se$2(({matches:s})=>({query:t,matches:s})),Ia$1(this._destroySubject)),mql:e};return this._queries.set(t,i),i}static ɵfac=function(e){return new(e||a)};static ɵprov=_e$5({token:a,factory:a.ɵfac})}return a})();function ue$1(a){return a.map(n=>n.split(`,`)).reduce((n,t)=>n.concat(t)).map(n=>n.trim())}var Le$2=(()=>{class a{create(t){return typeof MutationObserver>`u`?null:new MutationObserver(t)}static ɵfac=function(e){return new(e||a)};static ɵprov=_e$5({token:a,factory:a.ɵfac})}return a})();var pe$1=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=Sr({type:a});static ɵinj=zn({providers:[Le$2]})}return a})();var ze$2=(()=>{class a{_platform=N$3(VQ);isDisabled(t){return t.hasAttribute(`disabled`)}isVisible(t){return je$3(t)&&getComputedStyle(t).visibility===`visible`}isTabbable(t){if(!this._platform.isBrowser)return!1;let e=Be$2(Ye$3(t));if(e&&(fe$2(e)===-1||!this.isVisible(e)))return!1;let o=t.nodeName.toLowerCase(),i=fe$2(t);return t.hasAttribute(`contenteditable`)?i!==-1:o===`iframe`||o===`object`||this._platform.WEBKIT&&this._platform.IOS&&!We$3(t)?!1:o===`audio`?t.hasAttribute(`controls`)?i!==-1:!1:o===`video`?i===-1?!1:i!==null?!0:this._platform.FIREFOX||t.hasAttribute(`controls`):t.tabIndex>=0}isFocusable(t,e){return $e$3(t)&&!this.isDisabled(t)&&(e?.ignoreInert||!t.closest?.(`[inert]`))&&(e?.ignoreVisibility||this.isVisible(t))}static ɵfac=function(e){return new(e||a)};static ɵprov=_e$5({token:a,factory:a.ɵfac})}return a})();function Be$2(a){try{return a.frameElement}catch{return null}}function je$3(a){return!!(a.offsetWidth||a.offsetHeight||typeof a.getClientRects==`function`&&a.getClientRects().length)}function Ue$3(a){let n=a.nodeName.toLowerCase();return n===`input`||n===`select`||n===`button`||n===`textarea`}function He$3(a){return Ke$3(a)&&a.type==`hidden`}function Ve$2(a){return Ze$3(a)&&a.hasAttribute(`href`)}function Ke$3(a){return a.nodeName.toLowerCase()==`input`}function Ze$3(a){return a.nodeName.toLowerCase()==`a`}function ge$2(a){if(!a.hasAttribute(`tabindex`)||a.tabIndex===void 0)return!1;let n=a.getAttribute(`tabindex`);return!!(n&&!isNaN(parseInt(n,10)))}function fe$2(a){if(!ge$2(a))return null;let n=parseInt(a.getAttribute(`tabindex`)||``,10);return isNaN(n)?-1:n}function We$3(a){let n=a.nodeName.toLowerCase(),t=n===`input`&&a.type;return t===`text`||t===`password`||n===`select`||n===`textarea`}function $e$3(a){return He$3(a)?!1:Ue$3(a)||Ve$2(a)||a.hasAttribute(`contenteditable`)||ge$2(a)}function Ye$3(a){return a.ownerDocument&&a.ownerDocument.defaultView||window}var St$3=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,t,e,o,i=!1,s){this._element=n,this._checker=t,this._ngZone=e,this._document=o,this._injector=s,i||this.attachAnchors()}destroy(){let n=this._startAnchor,t=this._endAnchor;n&&(n.removeEventListener(`focus`,this.startAnchorListener),n.remove()),t&&(t.removeEventListener(`focus`,this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let t=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n==`start`?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let t=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(t){if(!this._checker.isFocusable(t)){let e=this._getFirstTabbableElement(t);return e?.focus(n),!!e}return t.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let t=this._getRegionBoundary(`start`);return t&&t.focus(n),!!t}focusLastTabbableElement(n){let t=this._getRegionBoundary(`end`);return t&&t.focus(n),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let t=n.children;for(let e=0;e<t.length;e++){let o=t[e].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[e]):null;if(o)return o}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let t=n.children;for(let e=t.length-1;e>=0;e--){let o=t[e].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[e]):null;if(o)return o}return null}_createAnchor(){let n=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add(`cdk-visually-hidden`),n.classList.add(`cdk-focus-trap-anchor`),n.setAttribute(`aria-hidden`,`true`),n}_toggleAnchorTabIndex(n,t){n?t.setAttribute(`tabindex`,`0`):t.removeAttribute(`tabindex`)}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){cm(n,{injector:this._injector})}};var Ge$3=(()=>{class a{_checker=N$3(ze$2);_ngZone=N$3(wt$5);_document=N$3(Ne$2);_injector=N$3(ot$3);constructor(){N$3(EF).load(EY)}create(t,e=!1){return new St$3(t,this._checker,this._ngZone,this._document,e,this._injector)}static ɵfac=function(e){return new(e||a)};static ɵprov=_e$5({token:a,factory:a.ɵfac})}return a})();var ye$4=new K$3(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var _e$4=new K$3(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var qe$2=0;var Xe$3=(()=>{class a{_ngZone=N$3(wt$5);_defaultOptions=N$3(_e$4,{optional:!0});_liveElement;_document=N$3(Ne$2);_sanitizer=N$3(hy);_previousTimeout;_currentPromise;_currentResolve;constructor(){let t=N$3(ye$4,{optional:!0});this._liveElement=t||this._createLiveElement()}announce(t,...e){let o=this._defaultOptions,i,s;return e.length===1&&typeof e[0]==`number`?s=e[0]:[i,s]=e,this.clear(),clearTimeout(this._previousTimeout),i||(i=o&&o.politeness?o.politeness:`polite`),s==null&&o&&(s=o.duration),this._liveElement.setAttribute(`aria-live`,i),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(c=>this._currentResolve=c)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!t||typeof t==`string`?this._liveElement.textContent=t:DY(this._liveElement,t,this._sanitizer),typeof s==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),s)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let t=`cdk-live-announcer-element`,e=this._document.getElementsByClassName(t),o=this._document.createElement(`div`);for(let i=0;i<e.length;i++)e[i].remove();return o.classList.add(t),o.classList.add(`cdk-visually-hidden`),o.setAttribute(`aria-atomic`,`true`),o.setAttribute(`aria-live`,`polite`),o.id=`cdk-live-announcer-${qe$2++}`,this._document.body.appendChild(o),o}_exposeAnnouncerToModals(t){let e=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let o=0;o<e.length;o++){let i=e[o],s=i.getAttribute(`aria-owns`);s?s.indexOf(t)===-1&&i.setAttribute(`aria-owns`,s+` `+t):i.setAttribute(`aria-owns`,t)}}static ɵfac=function(e){return new(e||a)};static ɵprov=_e$5({token:a,factory:a.ɵfac})}return a})();var A$1=(function(a){return a[a.NONE=0]=`NONE`,a[a.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,a[a.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,a})(A$1||{});var he$2=`cdk-high-contrast-black-on-white`;var ve$4=`cdk-high-contrast-white-on-black`;var Nt$1=`cdk-high-contrast-active`;var xe$2=(()=>{class a{_platform=N$3(VQ);_hasCheckedHighContrastMode=!1;_document=N$3(Ne$2);_breakpointSubscription;constructor(){this._breakpointSubscription=N$3(xt$4).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return A$1.NONE;let t=this._document.createElement(`div`);t.style.backgroundColor=`rgb(1,2,3)`,t.style.position=`absolute`,this._document.body.appendChild(t);let e=this._document.defaultView||window,o=e&&e.getComputedStyle?e.getComputedStyle(t):null,i=(o&&o.backgroundColor||``).replace(/ /g,``);switch(t.remove(),i){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return A$1.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return A$1.BLACK_ON_WHITE}return A$1.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(Nt$1,he$2,ve$4),this._hasCheckedHighContrastMode=!0;let e=this.getHighContrastMode();e===A$1.BLACK_ON_WHITE?t.add(Nt$1,he$2):e===A$1.WHITE_ON_BLACK&&t.add(Nt$1,ve$4)}}static ɵfac=function(e){return new(e||a)};static ɵprov=_e$5({token:a,factory:a.ɵfac})}return a})();var Qe$3=(()=>{class a{constructor(){N$3(xe$2)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(e){return new(e||a)};static ɵmod=Sr({type:a});static ɵinj=zn({imports:[pe$1]})}return a})();var Je$2=200;var dt$2=class{_letterKeyStream=new Ge$4;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new Ge$4;selectedItem=this._selectedItem;constructor(n,t){let e=typeof t?.debounceInterval==`number`?t.debounceInterval:Je$2;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(n),this._setupKeyHandler(e)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let t=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(Lt$2(t=>this._pressedLetters.push(t)),WA(n),Yt$1(()=>this._pressedLetters.length>0),Se$2(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(t=>{for(let e=1;e<this._items.length+1;e++){let o=(this._selectedItemIndex+e)%this._items.length,i=this._items[o];if(!this._skipPredicateFn?.(i)&&i.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(i);break}}this._pressedLetters=[]})}};var B$2=class{_items;_activeItemIndex=Ce$4(-1);_activeItem=Ce$4(null);_wrap=!1;_typeaheadSubscription=Qe$4.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,t){this._items=n,n instanceof Gl?this._itemChangesSubscription=n.changes.subscribe(e=>this._itemsChanged(e.toArray())):qa(n)&&(this._effectRef=Zh(()=>this._itemsChanged(n()),{injector:t}))}tabOut=new Ge$4;change=new Ge$4;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new dt$2(t,{debounceInterval:typeof n==`number`?n:void 0,skipPredicate:e=>this._skipPredicateFn(e)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(e=>{this.setActiveItem(e)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,t=10){return this._pageUpAndDown={enabled:n,delta:t},this}setActiveItem(n){let t=this._activeItem();this.updateActiveItem(n),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(n){let t=n.keyCode,o=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(i=>!n[i]||this._allowedModifierKeys.indexOf(i)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&o){this.setNextItemActive();break}else return;case 38:if(this._vertical&&o){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&o){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&o){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&o){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&o){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&o){let i=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(i>0?i:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&o){let i=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(i<s?i:s-1,-1);break}else return;default:(o||ZQ(n,`shiftKey`))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let t=this._getItemsArray(),e=typeof n==`number`?n:t.indexOf(n),o=t[e];this._activeItem.set(o??null),this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let t=this._getItemsArray();for(let e=1;e<=t.length;e++){let o=(this._activeItemIndex()+n*e+t.length)%t.length,i=t[o];if(!this._skipPredicateFn(i)){this.setActiveItem(o);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,t){let e=this._getItemsArray();if(e[n]){for(;this._skipPredicateFn(e[n]);)if(n+=t,!e[n])return;this.setActiveItem(n)}}_getItemsArray(){return qa(this._items)?this._items():this._items instanceof Gl?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let t=this._activeItem();if(t){let e=n.indexOf(t);e>-1&&e!==this._activeItemIndex()&&(this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e))}}};var wt$4=class extends B$2{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var Et$2=class extends B$2{_origin=`program`;setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var j$3;var Ne$1=[`color`,`button`,`checkbox`,`date`,`datetime-local`,`email`,`file`,`hidden`,`image`,`month`,`number`,`password`,`radio`,`range`,`reset`,`search`,`submit`,`tel`,`text`,`time`,`url`,`week`];function Ba$1(){if(j$3)return j$3;if(typeof document!=`object`||!document)return j$3=new Set(Ne$1),j$3;let a=document.createElement(`input`);return j$3=new Set(Ne$1.filter(n=>(a.setAttribute(`type`,n),a.type===n))),j$3}var tn$2=new K$3(`MATERIAL_ANIMATIONS`);var Se$1=null;function en$2(){return N$3(tn$2,{optional:!0})?.animationsDisabled||N$3(OM,{optional:!0})===`NoopAnimations`?`di-disabled`:(Se$1??=N$3(mt$3).matchMedia(`(prefers-reduced-motion)`).matches,Se$1?`reduced-motion`:`enabled`)}function U$3(){return en$2()!==`enabled`}function Xa(a){return a!=null&&`${a}`!=`false`}var f$1=(function(a){return a[a.FADING_IN=0]=`FADING_IN`,a[a.VISIBLE=1]=`VISIBLE`,a[a.FADING_OUT=2]=`FADING_OUT`,a[a.HIDDEN=3]=`HIDDEN`,a})(f$1||{});var kt$4=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=f$1.HIDDEN;constructor(n,t,e,o=!1){this._renderer=n,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}};var we$1=z$2({passive:!0,capture:!0});var It$2=class{_events=/* @__PURE__ */ new Map;addHandler(n,t,e,o){let i=this._events.get(t);if(i){let s=i.get(e);s?s.add(o):i.set(e,/* @__PURE__ */ new Set([o]))}else this._events.set(t,/* @__PURE__ */ new Map([[e,/* @__PURE__ */ new Set([o])]])),n.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,we$1)})}removeHandler(n,t,e){let o=this._events.get(n);if(!o)return;let i=o.get(t);i&&(i.delete(e),i.size===0&&o.delete(t),o.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,we$1)))}_delegateEventHandler=n=>{let t=FQ(n);t&&this._events.get(n.type)?.forEach((e,o)=>{(o===t||o.contains(t))&&e.forEach(i=>i.handleEvent(n))})}};var G$2={enterDuration:225,exitDuration:150};var nn$2=800;var Ee$2=z$2({passive:!0,capture:!0});var ke$2=[`mousedown`,`touchstart`];var Ie$1=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var an$2=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵcmp=Ei$1({type:a,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(e,o){},styles:[`.mat-ripple {
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
`],encapsulation:2})}return a})();var q$4=class a{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=/* @__PURE__ */ new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new It$2;constructor(n,t,e,o,i){this._target=n,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=GQ(e)),i&&i.get(EF).load(an$2)}fadeInRipple(n,t,e={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i=r$1(r$1({},G$2),e.animation);e.centered&&(n=o.left+o.width/2,t=o.top+o.height/2);let s=e.radius||on$2(n,t,o),c=n-o.left,h=t-o.top,y=i.enterDuration,b=document.createElement(`div`);b.classList.add(`mat-ripple-element`),b.style.left=`${c-s}px`,b.style.top=`${h-s}px`,b.style.height=`${s*2}px`,b.style.width=`${s*2}px`,e.color!=null&&(b.style.backgroundColor=e.color),b.style.transitionDuration=`${y}ms`,this._containerElement.appendChild(b);let Dt=window.getComputedStyle(b),Oe=Dt.transitionProperty,Ft=Dt.transitionDuration,bt=Oe===`none`||Ft===`0s`||Ft===`0s, 0s`||o.width===0&&o.height===0,M=new kt$4(this,b,e,bt);b.style.transform=`scale3d(1, 1, 1)`,M.state=f$1.FADING_IN,e.persistent||(this._mostRecentTransientRipple=M);let X=null;return!bt&&(y||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Ot=()=>{X&&(X.fallbackTimer=null),clearTimeout(Rt),this._finishRippleTransition(M)},ut=()=>this._destroyRipple(M),Rt=setTimeout(ut,y+100);b.addEventListener(`transitionend`,Ot),b.addEventListener(`transitioncancel`,ut),X={onTransitionEnd:Ot,onTransitionCancel:ut,fallbackTimer:Rt}}),this._activeRipples.set(M,X),(bt||!y)&&this._finishRippleTransition(M),M}fadeOutRipple(n){if(n.state===f$1.FADING_OUT||n.state===f$1.HIDDEN)return;let t=n.element,e=r$1(r$1({},G$2),n.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity=`0`,n.state=f$1.FADING_OUT,(n._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let t=GQ(n);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,ke$2.forEach(e=>{a._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(n){n.type===`mousedown`?this._onMousedown(n):n.type===`touchstart`?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Ie$1.forEach(t=>{this._triggerElement.addEventListener(t,this,Ee$2)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===f$1.FADING_IN?this._startFadeOutTransition(n):n.state===f$1.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let t=n===this._mostRecentTransientRipple,{persistent:e}=n.config;n.state=f$1.VISIBLE,!e&&(!t||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let t=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=f$1.HIDDEN,t!==null&&(n.element.removeEventListener(`transitionend`,t.onTransitionEnd),n.element.removeEventListener(`transitioncancel`,t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),n.element.remove()}_onMousedown(n){let t=Z$3(n),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+nn$2;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!W$2(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=n.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let t=n.state===f$1.VISIBLE||n.config.terminateOnPointerUp&&n.state===f$1.FADING_IN;!n.config.persistent&&t&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(ke$2.forEach(t=>a._eventManager.removeHandler(t,n,this)),this._pointerUpEventsRegistered&&(Ie$1.forEach(t=>n.removeEventListener(t,this,Ee$2)),this._pointerUpEventsRegistered=!1))}};function on$2(a,n,t){let e=Math.max(Math.abs(a-t.left),Math.abs(a-t.right)),o=Math.max(Math.abs(n-t.top),Math.abs(n-t.bottom));return Math.sqrt(e*e+o*o)}var At$1=new K$3(`mat-ripple-global-options`);var lo=(()=>{class a{_elementRef=N$3(Xt$1);_animationsDisabled=U$3();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=N$3(wt$5),e=N$3(VQ),o=N$3(At$1,{optional:!0}),i=N$3(ot$3);this._globalOptions=o||{},this._rippleRenderer=new q$4(this,t,this._elementRef,e,i)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:r$1(r$1(r$1({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,e=0,o){return typeof t==`number`?this._rippleRenderer.fadeInRipple(t,e,r$1(r$1({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,r$1(r$1({},this.rippleConfig),t))}static ɵfac=function(e){return new(e||a)};static ɵdir=Tr({type:a,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(e,o){e&2&&wd(`mat-ripple-unbounded`,o.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return a})();var rn$1={capture:!0};var sn$1=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var Mt$3=`mat-ripple-loader-uninitialized`;var Tt$1=`mat-ripple-loader-class-name`;var Ae$2=`mat-ripple-loader-centered`;var lt$3=`mat-ripple-loader-disabled`;var Me$1=(()=>{class a{_document=N$3(Ne$2);_animationsDisabled=U$3();_globalRippleOptions=N$3(At$1,{optional:!0});_platform=N$3(VQ);_ngZone=N$3(wt$5);_injector=N$3(ot$3);_eventCleanups;_hosts=/* @__PURE__ */ new Map;constructor(){let t=N$3(hi$1).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>sn$1.map(e=>t.listen(this._document,e,this._onInteraction,rn$1)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(Mt$3,this._globalRippleOptions?.namespace??``),(e.className||!t.hasAttribute(Tt$1))&&t.setAttribute(Tt$1,e.className||``),e.centered&&t.setAttribute(Ae$2,``),e.disabled&&t.setAttribute(lt$3,``)}setDisabled(t,e){let o=this._hosts.get(t);o?(o.target.rippleDisabled=e,!e&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(t))):e?t.setAttribute(lt$3,``):t.removeAttribute(lt$3)}_onInteraction=t=>{let e=FQ(t);if(e instanceof HTMLElement){let o=e.closest(`[${Mt$3}="${this._globalRippleOptions?.namespace??``}"]`);o&&this._createRipple(o)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(`.mat-ripple`)?.remove();let e=this._document.createElement(`span`);e.classList.add(`mat-ripple`,t.getAttribute(Tt$1)),t.append(e);let o=this._globalRippleOptions,i=this._animationsDisabled?0:o?.animation?.enterDuration??G$2.enterDuration,s=this._animationsDisabled?0:o?.animation?.exitDuration??G$2.exitDuration,c={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute(lt$3),rippleConfig:{centered:t.hasAttribute(Ae$2),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:i,exitDuration:s}}},h=new q$4(c,this._ngZone,e,this._platform,this._injector),y=!c.rippleDisabled;y&&h.setupTriggerEvents(t),this._hosts.set(t,{target:c,renderer:h,hasSetUpEvents:y}),t.removeAttribute(Mt$3)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static ɵfac=function(e){return new(e||a)};static ɵprov=_e$5({token:a,factory:a.ɵfac})}return a})();var Te$2=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵcmp=Ei$1({type:a,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(e,o){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2})}return a})();var cn$2=new K$3(`MAT_BUTTON_CONFIG`);function Ce$3(a){return a==null?void 0:lk(a)}var Ct$3=(()=>{class a{_elementRef=N$3(Xt$1);_ngZone=N$3(wt$5);_animationsDisabled=U$3();_config=N$3(cn$2,{optional:!0});_focusMonitor=N$3(_t$3);_cleanupClick;_renderer=N$3(so);_rippleLoader=N$3(Me$1);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=Cd(!1,{transform:wi$1});constructor(){N$3(EF).load(Te$2);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t=`program`,e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static ɵfac=function(e){return new(e||a)};static ɵdir=Tr({type:a,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(e,o){e&2&&(Di(`disabled`,o._getDisabledAttribute())(`aria-disabled`,o._getAriaDisabled())(`tabindex`,o._getTabIndex()),Fm(o.color?`mat-`+o.color:``),wd(`mat-mdc-button-progress-indicator-shown`,o.showProgress())(`mat-mdc-button-disabled`,o.disabled)(`mat-mdc-button-disabled-interactive`,o.disabledInteractive)(`mat-unthemed`,!o.color)(`_mat-animation-noopable`,o._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,wi$1],disabled:[2,`disabled`,`disabled`,wi$1],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,wi$1],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,wi$1],tabIndex:[2,`tabIndex`,`tabIndex`,Ce$3],_tabindex:[2,`tabindex`,`_tabindex`,Ce$3],showProgress:[1,`showProgress`]}})}return a})();var mn=(()=>{class a extends Ct$3{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`*`,[[``,`progressIndicator`,``]]],e=[`*`,`[progressIndicator]`];function o(i,s){i&1&&(Rm(0,`div`,1),Pm(1,1),xm())}return Ei$1({type:a,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[AC],ngContentSelectors:e,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(s,c){s&1&&(Om(t),kC(0,`span`,0),Pm(1),SO(2,o,2,0,`div`,1),kC(3,`span`,2)(4,`span`,3)),s&2&&(MR(2),_O(c.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2})})()}return a})();var De$2=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=Sr({type:a});static ɵinj=zn({imports:[bT]})}return a})();var Fe$1=/* @__PURE__ */ new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var zo=(()=>{class a extends Ct$3{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let t=dn$1(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,o=this._appearance?Fe$1.get(this._appearance):null,i=Fe$1.get(t);o&&e.remove(...o),e.add(...i),this._appearance=t}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],e=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function o(i,s){i&1&&(Rm(0,`div`,2),Pm(1,3),xm())}return Ei$1({type:a,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[AC],ngContentSelectors:e,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(s,c){s&1&&(Om(t),kC(0,`span`,0),Pm(1),Rm(2,`span`,1),Pm(3,1),xm(),Pm(4,2),SO(5,o,2,0,`div`,2),kC(6,`span`,3)(7,`span`,4)),s&2&&(wd(`mdc-button__ripple`,!c._isFab)(`mdc-fab__ripple`,c._isFab),MR(5),_O(c.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2})})()}return a})();function dn$1(a){return a.hasAttribute(`mat-raised-button`)?`elevated`:a.hasAttribute(`mat-stroked-button`)?`outlined`:a.hasAttribute(`mat-flat-button`)?`filled`:a.hasAttribute(`mat-button`)?`text`:null}var Bo=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=Sr({type:a});static ɵinj=zn({imports:[De$2,bT]})}return a})();var je$2=Symbol(`FIELD_TREE`);function I(i){return typeof i==`function`&&i[je$2]===!0}var fn=new K$3(``);var ae$3=class{_box;_destroyed=new Ge$4;_resizeSubject=new Ge$4;_resizeObserver;_elementObservables=/* @__PURE__ */ new Map;constructor(d){this._box=d,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(d){return this._elementObservables.has(d)||this._elementObservables.set(d,new ye$5(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(d,{box:this._box}),()=>{this._resizeObserver?.unobserve(d),t.unsubscribe(),this._elementObservables.delete(d)}}).pipe(Se$2(e=>e.filter(t=>t.target===d)),Yt$1(e=>e.length>0),ZA({bufferSize:1,refCount:!0}),Ia$1(this._destroyed))),this._elementObservables.get(d)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var He$2=(()=>{class i{_cleanupErrorListener;_observers=/* @__PURE__ */ new Map;_ngZone=N$3(wt$5);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let r=t?.box||`content-box`;return this._observers.has(r)||this._observers.set(r,new ae$3(r)),this._observers.get(r).observe(e)}static ɵfac=function(t){return new(t||i)};static ɵprov=_e$5({token:i,factory:i.ɵfac})}return i})();var se$2=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵdir=Tr({type:i,selectors:[[`mat-label`]]})}return i})();var mt$2=new K$3(`MatError`);var ce$1=(()=>{class i{align=`start`;id=N$3(P_).getId(`mat-mdc-hint-`);static ɵfac=function(t){return new(t||i)};static ɵdir=Tr({type:i,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(t,r){t&2&&(FC(`id`,r.id),Di(`align`,null),wd(`mat-mdc-form-field-hint-end`,r.align===`end`))},inputs:{align:`align`,id:`id`}})}return i})();var ut$3=new K$3(`MatPrefix`);var ht$3=new K$3(`MatSuffix`);var Qe$2=new K$3(`FloatingLabelParent`);var Ke$2=(()=>{class i{_elementRef=N$3(Xt$1);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=N$3(He$2);_ngZone=N$3(wt$5);_parent=N$3(Qe$2);_resizeSubscription=new Qe$4;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return pt$3(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(t){return new(t||i)};static ɵdir=Tr({type:i,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(t,r){t&2&&wd(`mdc-floating-label--float-above`,r.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return i})();function pt$3(i){let d=i;if(d.offsetParent!==null)return d.scrollWidth;let e=d.cloneNode(!0);e.style.setProperty(`position`,`absolute`),e.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var Ue$2=`mdc-line-ripple--active`;var j$2=`mdc-line-ripple--deactivating`;var Ge$2=(()=>{class i{_elementRef=N$3(Xt$1);_cleanupTransitionEnd;constructor(){let e=N$3(wt$5),t=N$3(so);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(j$2),e.add(Ue$2)}deactivate(){this._elementRef.nativeElement.classList.add(j$2)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,r=t.contains(j$2);e.propertyName===`opacity`&&r&&t.remove(Ue$2,j$2)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(t){return new(t||i)};static ɵdir=Tr({type:i,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return i})();var We$2=(()=>{class i{_elementRef=N$3(Xt$1);_ngZone=N$3(wt$5);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(`.mdc-floating-label`);t?(e.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(t.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration=``)}))):e.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width=``:t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${e}px)`)}static ɵfac=function(t){return new(t||i)};static ɵcmp=(function(){let e=[`notch`];return Ei$1({type:i,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(s,f){if(s&1&&HC(e,5),s&2){let y;km(y=Lm())&&(f._notch=y.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(s,f){s&2&&wd(`mdc-notched-outline--notched`,f.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:[`*`],decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(s,f){s&1&&(Om(),kC(0,`div`,1),Rm(1,`div`,2,0),Pm(3),xm(),kC(4,`div`,3))},encapsulation:2})})()}return i})();var gt$3=(()=>{class i{id;ngField=null;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;stateChanges=null;value;static ɵfac=function(t){return new(t||i)};static ɵdir=Tr({type:i})}return i})();var bt$4=new K$3(`MatFormField`);var xt$3=new K$3(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var $e$2=`fill`;var vt$1=`auto`;var Ye$2=`fixed`;var yt$2=`translateY(-50%)`;var Xe$2=(()=>{class i{_elementRef=N$3(Xt$1);_changeDetectorRef=N$3(Ns);_platform=N$3(VQ);_idGenerator=N$3(P_);_ngZone=N$3(wt$5);_defaults=N$3(xt$3,{optional:!0});_currentDirection;_unwrapMaybeSignal(e){return qa(e)?e():e}_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=m9(`iconPrefixContainer`);_textPrefixContainerSignal=m9(`textPrefixContainer`);_iconSuffixContainerSignal=m9(`iconSuffixContainer`);_textSuffixContainerSignal=m9(`textSuffixContainer`);_prefixSuffixContainers=uo(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=y9(se$2);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Xa(e)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||vt$1}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||$e$2;this._appearanceSignal.set(t)}_appearanceSignal=Ce$4($e$2);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Ye$2}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Ye$2}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new Ge$4;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=U$3();constructor(){let e=this._defaults,t=N$3(TF);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Zh(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=I(this._control.ngField)?null:this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&!I(this._control.ngField)&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=uo(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(e){let t=this._control,r=`mat-mdc-form-field-type-`;e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(r+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges?.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges?.pipe(qp([void 0,void 0]),Se$2(()=>[this._unwrapMaybeSignal(t.errorState),t.userAriaDescribedBy]),YA(),Yt$1(([[s,f],[y,R]])=>s!==y||f!==R)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&!I(t.ngField)&&(this._valueChanges=t.ngControl.valueChanges.pipe(Ia$1(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),VA(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._unwrapMaybeSignal(this._control.focused);e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,e),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,e)}_syncOutlineLabelOffset(){E9({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=uo(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._shouldAlwaysFloat()||this._unwrapMaybeSignal(this._control.shouldLabelFloat):!1}_shouldForward(e){let t=this._control?.ngField||this._control?.ngControl;if(!t)return!1;if(I(t)){let r=t();return e===`valid`?r.valid():e===`dirty`?r.dirty():e===`touched`?r.touched():e===`pending`?r.pending():e===`untouched`?!r.touched():e===`pristine`?!r.dirty():e===`invalid`?!r.valid():!1}else{let r=t;return e===`valid`?r.valid:e===`dirty`?r.dirty:e===`touched`?r.touched:e===`pending`?r.pending:e===`untouched`?r.untouched:e===`pristine`?r.pristine:e===`invalid`?r.invalid:!1}}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._unwrapMaybeSignal(this._control.errorState)?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&e.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let s=this._hintChildren?this._hintChildren.find(y=>y.align===`start`):null,f=this._hintChildren?this._hintChildren.find(y=>y.align===`end`):null;s?e.push(s.id):this._hintLabel&&e.push(this._hintLabelId),f&&e.push(f.id)}else this._errorChildren&&e.push(...this._errorChildren.map(s=>s.id));let t=this._control.describedByIds,r;if(t){let s=this._describedByIds||e;r=e.concat(t.filter(f=>f&&!s.includes(f)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,s=this._textSuffixContainer?.nativeElement,f=e?.getBoundingClientRect().width??0,y=t?.getBoundingClientRect().width??0,R=r?.getBoundingClientRect().width??0,q=s?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${yt$2} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${f+y}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,f+y+R+q]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static ɵfac=function(t){return new(t||i)};static ɵcmp=(function(){let e=[`iconPrefixContainer`],t=[`textPrefixContainer`],r=[`iconSuffixContainer`],s=[`textSuffixContainer`],f=[`textField`],y=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]],R=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function q(o,a){o&1&&vd(0,`span`,21)}function H(o,a){if(o&1&&(od(0,`label`,20),Pm(1,1),SO(2,q,1,0,`span`,21),Nm()),o&2){let n=HO(2);PC(`floating`,n._shouldLabelFloat())(`monitorResize`,n._hasOutline())(`id`,n._labelId),Di(`for`,n._control.disableAutomaticLabeling?null:n._control.id),MR(2),_O(!n.hideRequiredMarker&&n._unwrapMaybeSignal(n._control.required)?2:-1)}}function K(o,a){if(o&1&&SO(0,H,3,5,`label`,20),o&2){let n=HO();_O(n._hasFloatingLabel()?0:-1)}}function fe(o,a){o&1&&vd(0,`div`,7)}function U(o,a){}function G(o,a){if(o&1&&NC(0,U,0,0,`ng-template`,13),o&2){HO(2);let n=WO(1);PC(`ngTemplateOutlet`,n)}}function W(o,a){if(o&1&&(od(0,`div`,9),SO(1,G,1,1,null,13),Nm()),o&2){let n=HO();PC(`matFormFieldNotchedOutlineOpen`,n._shouldLabelFloat()),MR(),_O(n._forceDisplayInfixLabel()?-1:1)}}function Je(o,a){o&1&&(od(0,`div`,10,2),Pm(2,2),Nm())}function et(o,a){o&1&&(od(0,`div`,11,3),Pm(2,3),Nm())}function tt(o,a){}function nt(o,a){if(o&1&&NC(0,tt,0,0,`ng-template`,13),o&2){HO();let n=WO(1);PC(`ngTemplateOutlet`,n)}}function it(o,a){o&1&&(od(0,`div`,14,4),Pm(2,4),Nm())}function rt(o,a){o&1&&(od(0,`div`,15,5),Pm(2,5),Nm())}function ot(o,a){o&1&&vd(0,`div`,16)}function at(o,a){o&1&&(od(0,`div`,18),Pm(1,6),Nm())}function lt(o,a){if(o&1&&(od(0,`mat-hint`,22),fP(1),Nm()),o&2){let n=HO(2);PC(`id`,n._hintLabelId),MR(),JC(n.hintLabel)}}function dt(o,a){if(o&1&&(od(0,`div`,19),SO(1,lt,2,2,`mat-hint`,22),Pm(2,7),vd(3,`div`,23),Pm(4,8),Nm()),o&2){let n=HO();MR(),_O(n.hintLabel?1:-1)}}return Ei$1({type:i,selectors:[[`mat-form-field`]],contentQueries:function(a,n,l){if(a&1&&(VC(l,n._labelChild,se$2,5),Dd(l,gt$3,5)(l,ut$3,5)(l,ht$3,5)(l,mt$2,5)(l,ce$1,5)),a&2){zO();let u;km(u=Lm())&&(n._formFieldControl=u.first),km(u=Lm())&&(n._prefixChildren=u),km(u=Lm())&&(n._suffixChildren=u),km(u=Lm())&&(n._errorChildren=u),km(u=Lm())&&(n._hintChildren=u)}},viewQuery:function(a,n){if(a&1&&($C(n._iconPrefixContainerSignal,e,5)(n._textPrefixContainerSignal,t,5)(n._iconSuffixContainerSignal,r,5)(n._textSuffixContainerSignal,s,5),HC(f,5)(e,5)(t,5)(r,5)(s,5)(Ke$2,5)(We$2,5)(Ge$2,5)),a&2){zO(4);let l;km(l=Lm())&&(n._textField=l.first),km(l=Lm())&&(n._iconPrefixContainer=l.first),km(l=Lm())&&(n._textPrefixContainer=l.first),km(l=Lm())&&(n._iconSuffixContainer=l.first),km(l=Lm())&&(n._textSuffixContainer=l.first),km(l=Lm())&&(n._floatingLabel=l.first),km(l=Lm())&&(n._notchedOutline=l.first),km(l=Lm())&&(n._lineRipple=l.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(a,n){a&2&&wd(`mat-mdc-form-field-label-always-float`,n._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,n._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,n._hasIconSuffix)(`mat-form-field-invalid`,n._unwrapMaybeSignal(n._control.errorState))(`mat-form-field-disabled`,n._unwrapMaybeSignal(n._control.disabled))(`mat-form-field-autofilled`,n._unwrapMaybeSignal(n._control.autofilled))(`mat-form-field-appearance-fill`,n.appearance==`fill`)(`mat-form-field-appearance-outline`,n.appearance==`outline`)(`mat-form-field-hide-placeholder`,n._hasFloatingLabel()&&!n._shouldLabelFloat())(`mat-primary`,n.color!==`accent`&&n.color!==`warn`)(`mat-accent`,n.color===`accent`)(`mat-warn`,n.color===`warn`)(`ng-untouched`,n._shouldForward(`untouched`))(`ng-touched`,n._shouldForward(`touched`))(`ng-pristine`,n._shouldForward(`pristine`))(`ng-dirty`,n._shouldForward(`dirty`))(`ng-valid`,n._shouldForward(`valid`))(`ng-invalid`,n._shouldForward(`invalid`))(`ng-pending`,n._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[db([{provide:bt$4,useExisting:i},{provide:Qe$2,useExisting:i}])],ngContentSelectors:R,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(a,n){if(a&1&&(Om(y),NC(0,K,1,1,`ng-template`,null,0,OP),od(2,`div`,6,1),Ed(`click`,function(u){return n._control.onContainerClick(u)}),SO(4,fe,1,0,`div`,7),od(5,`div`,8),SO(6,W,2,2,`div`,9),SO(7,Je,3,0,`div`,10),SO(8,et,3,0,`div`,11),od(9,`div`,12),SO(10,nt,1,1,null,13),Pm(11),Nm(),SO(12,it,3,0,`div`,14),SO(13,rt,3,0,`div`,15),Nm(),SO(14,ot,1,0,`div`,16),Nm(),od(15,`div`,17),SO(16,at,2,0,`div`,18)(17,dt,5,1,`div`,19),Nm()),a&2){let l,u=n._unwrapMaybeSignal(n._control.disabled);MR(2),wd(`mdc-text-field--filled`,!n._hasOutline())(`mdc-text-field--outlined`,n._hasOutline())(`mdc-text-field--no-label`,!n._hasFloatingLabel())(`mdc-text-field--disabled`,u)(`mdc-text-field--invalid`,n._unwrapMaybeSignal(n._control.errorState)),MR(2),_O(!n._hasOutline()&&!u?4:-1),MR(2),_O(n._hasOutline()?6:-1),MR(),_O(n._hasIconPrefix?7:-1),MR(),_O(n._hasTextPrefix?8:-1),MR(2),_O(!n._hasOutline()||n._forceDisplayInfixLabel()?10:-1),MR(2),_O(n._hasTextSuffix?12:-1),MR(),_O(n._hasIconSuffix?13:-1),MR(),_O(n._hasOutline()?-1:14),MR(),wd(`mat-mdc-form-field-subscript-dynamic-size`,n.subscriptSizing===`dynamic`);let st=n._getSubscriptMessageType();MR(),_O((l=st)===`error`?16:l===`hint`?17:-1)}},dependencies:[Ke$2,We$2,Mk,Ge$2,ce$1],styles:[`.mdc-text-field {
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
`],encapsulation:2})})()}return i})();var $n=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Sr({type:i});static ɵinj=zn({imports:[pe$1,Xe$2,bT]})}return i})();var Qn=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}isSignalErrorState(e){if(!e)return!1;let t=e().invalid(),r=e().touched();return t&&r}static ɵfac=function(t){return new(t||i)};static ɵprov=_e$5({token:i,factory:i.ɵfac})}return i})();var Ze$2=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(d,e,t,r,s){this._defaultMatcher=d,this._parentFormGroup=t,this._parentForm=r,this._stateChanges=s,e?qa(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let d=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==d&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(d){if(this.formField&&d?.isSignalErrorState)return d.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,t=this.ngControl?this.ngControl.control:null;return d?.isErrorState(t,e)??!1}};var n$1=[`record_type`,`date`,`description`,`amount`,`category`,`account`,`balance`,`interest_rate`,`minimum_payment`,`due_day`,`frequency`,`gross_amount`,`net_amount`,`notes`,`account_type`,`link`,`credit_limit`,`original_principal`,`term_months`,`opened_date`,`promo_end_date`,`status`,`days_past_due`,`past_due_amount`,`last_late_date`,`hardship_date`];var i=n$1.slice(0,14);function r(t,e){return t.length===e.length&&t.every((o,a)=>o.trim().toLowerCase()===e[a])}function s(t){return r(t,n$1)?`v2`:r(t,i)?`v1`:`unknown`}function u(){return n$1.join(`,`)+`
`}function f(t){let n=/* @__PURE__ */ new Map;for(let e of t){let c=n.get(e.name);(!c||e.date>=c.date)&&n.set(e.name,e)}return[...n.values()]}var h$1=/* @__PURE__ */ new Map;function x$1(t){let n=h$1.get(t);return n||(n=new Intl.DateTimeFormat(`en-US`,{timeZone:t,year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`,second:`2-digit`,hourCycle:`h23`}),h$1.set(t,n)),n}function E$1(t,n){let e={};for(let c of x$1(n).formatToParts(/* @__PURE__ */ new Date(t*1e3)))c.type!==`literal`&&(e[c.type]=Number(c.value));return e}function C$1(t,n){let e=E$1(t,n);return Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second)/1e3-Math.floor(t)}function A(t,n){let e=E$1(t,n),c=(r,o=2)=>String(r).padStart(o,`0`);return`${c(e.year,4)}-${c(e.month)}-${c(e.day)}`}function N$2(t,n){let[e,c,r]=t.split(`-`).map(Number),o=Date.UTC(e,c-1,r)/1e3,a=o-C$1(o,n);for(a=o-C$1(a,n);A(a,n)<t;)a+=1800;return a}var B$1=7776e3;function y(t,n,e,c){let r=``;for(let o of n.transactions)o.account===t&&o.date>r&&(r=o.date);return r?xF(r,1):`${XY(ZY(e),-c.longWindowMonths)}-01`}function P(t,n){return t.lastSyncedTo?xF(t.lastSyncedTo,-n.overlapDays):t.syncFrom}function R$2(t){return t.filter(n=>n.accountType!==`ignore`)}function V$3(t,n,e,c){let r=R$2(t).map(i=>P(i,c));if(r.length===0)return[];let o=N$2(r.reduce((i,p)=>p<i?p:i),e),a=[];for(let i=o;i<n;i+=B$1)a.push({start:i,end:Math.min(i+B$1,n)});return a}function G$1(t,n,e){let c=A(n,e);return s$1(r$1({},t),{accounts:t.accounts.map(r=>r.accountType===`ignore`?r:s$1(r$1({},r),{lastSyncedTo:c}))})}var Z$2=[`checking`,`savings`,`credit_card`,`loan`,`ignore`];var q$3={checking:`Checking`,savings:`Savings`,credit_card:`Credit card`,loan:`Loan`,other:`Other`,ignore:`Ignore`};function d(t){return t===`credit_card`||t===`loan`}function O$1(t){let n=/* @__PURE__ */ new Set;for(let e of t.transactions)e.account&&n.add(e.account);for(let e of t.balances)e.account&&n.add(e.account);for(let e of t.debts)e.account&&n.add(e.account);return[...n].sort((e,c)=>e.localeCompare(c))}function J$3(t){return f(t.debts).map(n=>n.name).sort((n,e)=>n.localeCompare(e))}function b$1(t,n){return f(n.debts).find(e=>e.account===t)?.name}function U$2(t,n=[]){return((t.conn_id?n.find(c=>c.conn_id===t.conn_id):void 0)?.name??t.org?.name??``).trim()}var _$1=[[`checking`,/\b(CHECKING|CHEQUING|CHECKNG|CHK|SPENDING|DEBIT)\b/],[`savings`,/\b(SAVINGS?|SAVER|SAV|MONEY MARKET|MMA|CD|CERTIFICATE)\b/],[`loan`,/\b(LOAN|MORTGAGE|HELOC|LINE OF CREDIT|AUTO FINANCE|LEASE|STUDENT)\b/],[`credit_card`,/\b(CREDIT|CARD|VISA|MASTERCARD|AMEX|AMERICAN EXPRESS|DISCOVER|PLATINUM|REWARDS?|CASH ?BACK|SIGNATURE|QUICKSILVER|SAVOR|VENTURE|FREEDOM|SAPPHIRE|DOUBLE CASH|CUSTOM CASH|BLUE CASH)\b/]];function $$3(t,n){let e=t.toUpperCase(),c=_$1.find(([,r])=>r.test(e));return c?c[0]:n>=0?`checking`:`credit_card`}function z$1(t,n){let e=/* @__PURE__ */ new Map;for(let a of n)a.accountType!==`ignore`&&e.set(a.appAccount,a.accountType);let c=a=>a===void 0?void 0:e.get(a),r=a=>{let i=c(a.account);return i!==void 0&&a.accountType!==i},o=a=>d(e.get(a.account)??`ignore`);return!t.transactions.some(r)&&!t.balances.some(o)?t:s$1(r$1({},t),{transactions:t.transactions.map(a=>{let i=c(a.account);return i!==void 0&&a.accountType!==i?s$1(r$1({},a),{accountType:i}):a}),balances:t.balances.filter(a=>!o(a))})}function F$1(t,n,e,c,r=[]){let o=U$2(t,r),a=t.name.trim(),p=$$3(a,lZ(String(t.balance))??0),I=a.toLowerCase(),m=O$1(n).find(w=>w.toLowerCase()===I)??[o,a].filter(Boolean).join(` `),k={id:t.id,orgName:o,name:a,accountType:p,appAccount:m,syncFrom:y(m,n,e,c)},S=d(p)?b$1(m,n):void 0;return S?s$1(r$1({},k),{debtName:S}):k}function nn$1(t,n,e,c,r,o=[]){return t.map(a=>n.find(i=>i.id===a.id)??F$1(a,e,c,r,o))}function tn$1(t,n,e,c,r){let o=r$1(r$1({},t),n);if(n.appAccount!==void 0){if(o.appAccount=n.appAccount.trim(),n.debtName===void 0){let a=d(o.accountType)?b$1(o.appAccount,e):void 0;a?o.debtName=a:delete o.debtName}n.syncFrom===void 0&&!t.lastSyncedTo&&(o.syncFrom=y(o.appAccount,e,c,r))}if(n.accountType!==void 0&&d(n.accountType)&&!o.debtName){let a=b$1(o.appAccount,e);a&&(o.debtName=a)}return(!d(o.accountType)||o.debtName===``)&&delete o.debtName,o}function en$1(t){return[...t.bankConnection?.accounts??[],...t.plaid?.items.flatMap(n=>n.accounts)??[]]}function on$1(t,n){let e=(t.plaid?.items??[]).filter(r=>n.provider!==`plaid`||r.itemId!==n.itemId).flatMap(r=>r.accounts);return[...n.provider===`simplefin`?[]:t.bankConnection?.accounts??[],...e]}function an$1(t,n=[]){let e=[],c=new Set(n.filter(o=>o.accountType!==`ignore`&&o.appAccount.trim()!==``).map(o=>o.appAccount.trim().toLowerCase())),r=/* @__PURE__ */ new Map;for(let o of t){if(o.accountType===`ignore`)continue;let a=g(o);if(o.appAccount.trim()===``){e.push(`Give "${a}" an account name, or choose Ignore.`);continue}/^\d{4}-\d{2}-\d{2}$/.test(o.syncFrom)||e.push(`Choose the date to start "${a}" from.`);let i=o.appAccount.trim().toLowerCase(),p=r.get(i);c.has(i)?e.push(`"${a}" uses the account name "${o.appAccount.trim()}", which another bank connection already uses. Each bank account needs its own name.`):p?e.push(`"${p}" and "${a}" both use the account name "${o.appAccount.trim()}". Each bank account needs its own name.`):r.set(i,a)}return e}function cn$1(t){return t.filter(n=>d(n.accountType)&&!n.debtName).map(n=>n.accountType===`credit_card`?`"${g(n)}" will be added to your debts as "${n.appAccount.trim()}" with the balance from the bank. The bank doesn't send the interest rate, so the plan counts no interest on it until you import the card's details in a CSV.`:`"${g(n)}" will be added to your debts as "${n.appAccount.trim()}", a loan with the balance from the bank. The bank doesn't send the payment or the interest rate, so the plan counts a payment of $0 and no interest on it until you import the loan's details in a CSV.`)}function g(t){return[t.orgName,t.name].filter(Boolean).join(` `)}var D$1=(e,n)=>e==null||e===``?`none`:n===`money`?dZ(e):String(e);function $$2(e,n,i){let s=[];for(let[l,[u,d]]of Object.entries(i)){let a=e[l],r=n[l];(a??``)!==(r??``)&&s.push({field:u,before:D$1(a,d),after:D$1(r,d)})}return s}function m(e,n,i,s,l,u){let d=new Map(n.map(a=>[s(a),a]));return i.flatMap(a=>{let r=d.get(s(a)),g=r?$$2(r,a,u):[];return g.length>0?[{id:e+`|`+s(a),type:e,label:l(a),fields:g}]:[]})}var o={income:e=>e.name,bill:e=>e.name,deduction:e=>e.income+`|`+e.type,schedule:e=>e.debt+`|`+e.effective,windfall:e=>e.name+`|`+e.date,debt:e=>e.name+`|`+e.date,balance:e=>e.account+`|`+e.date};function K$2(e,n){return[...m(`income`,e.incomes,n.incomes,o.income,i=>i.name,{frequency:[`How often`,`text`],net:[`Take-home per paycheck`,`money`],gross:[`Before taxes`,`money`]}),...m(`bill`,e.bills,n.bills,o.bill,i=>i.name,{amount:[`Amount`,`money`],frequency:[`How often`,`text`],dueDay:[`Due day`,`text`],category:[`Category`,`text`],account:[`Account`,`text`]}),...m(`deduction`,e.deductions,n.deductions,o.deduction,i=>i.income+`: `+i.type,{amount:[`Amount`,`money`],frequency:[`How often`,`text`]}),...m(`schedule`,e.paymentSchedules,n.paymentSchedules,o.schedule,i=>i.debt+` payment from `+i.effective,{amount:[`Amount`,`money`]}),...m(`windfall`,e.windfalls,n.windfalls,o.windfall,i=>i.name+` on `+i.date,{kind:[`Kind`,`text`],net:[`Take-home`,`money`],gross:[`Before taxes`,`money`]}),...m(`debt`,e.debts,n.debts,o.debt,i=>i.name+` on `+i.date,{balance:[`Balance`,`money`],apr:[`Interest rate`,`text`],minimumPayment:[`Minimum payment`,`money`],dueDay:[`Due day`,`text`],status:[`Status`,`text`],creditLimit:[`Credit limit`,`money`],pastDueAmount:[`Past due`,`money`]}),...m(`balance`,e.balances,n.balances,o.balance,i=>i.account+` on `+i.date,{balance:[`Balance`,`money`]})]}function p(e,n,i){let s=new Set(n.map(i));return[...e.filter(l=>!s.has(i(l))),...n]}function j$1(e,n,i,s,l,u){let d=new Set(s.skipTransactionIds),a=new Set(s.duplicateIds),r=new Set(s.declinedCorrections),g=i.corrections.filter(t=>!r.has(t.fileId)),I=new Map(i.txs.map(t=>[t.id,t])),S=new Map(g.map(t=>[t.existingId,I.get(t.fileId)]));for(let t of g)d.add(t.fileId);let x=i.txs.filter(t=>!d.has(t.id)).map(t=>a.has(t.id)?Ys(t,`duplicate_kept`):t),k=new Map(i.updatedExisting.map(t=>[t.id,t])),R=e.transactions.map(t=>{let b=k.get(t.id)??t,f=S.get(t.id);return f?yZ(b,f):b}),A=new Set(s.keepExisting),c=(t,b,f)=>b.filter(M=>!A.has(t+`|`+f(M)));return n=s$1(r$1({},n),{incomes:c(`income`,n.incomes,o.income),bills:c(`bill`,n.bills,o.bill),deductions:c(`deduction`,n.deductions,o.deduction),paymentSchedules:c(`schedule`,n.paymentSchedules,o.schedule),windfalls:c(`windfall`,n.windfalls,o.windfall),debts:c(`debt`,n.debts,o.debt),balances:c(`balance`,n.balances,o.balance)}),s$1(r$1({},e),{transactions:[...R,...x],debts:p(e.debts,n.debts,t=>`${t.name}|${t.date}`),balances:p(e.balances,n.balances,t=>`${t.account}|${t.date}`),incomes:p(e.incomes,n.incomes,t=>t.name),deductions:p(e.deductions,n.deductions,t=>`${t.income}|${t.type}`),bills:p(e.bills,n.bills,t=>t.name),paymentSchedules:p(e.paymentSchedules,n.paymentSchedules,t=>`${t.debt}|${t.effective}`),windfalls:p(e.windfalls,n.windfalls,t=>`${t.name}|${t.date}`),importLog:[...e.importLog,{id:n.importId,date:l,fileName:u,counts:{transaction:x.length,debt:n.debts.length,income:n.incomes.length,deduction:n.deductions.length,bill:n.bills.length,balance:n.balances.length,schedule:n.paymentSchedules.length,windfall:n.windfalls.length},skipped:n.skipped.length,doubleFeedRemoved:n.transactions.length-i.txs.length,flagged:s.flagged}],columnMappings:s.mapping?s$1(r$1({},e.columnMappings),{[s.mapping.signature]:s.mapping.mapping}):e.columnMappings})}function q$2(e,n){return e.settings.analysisDate?e.settings.analysisDate:e.importLog.map(s=>s.date.slice(0,10)).sort().at(-1)??n}function ye$3(e){return e?.institution?.name?.trim()||`Bank`}function G(e,t){let n={inviteCode:t.trim(),items:e.plaid?.items??[]};return s$1(r$1({},e),{plaid:n})}function _e$3(e,t,n){let i=e.plaid?.items??[],a=i.find(r=>r.itemId===n.itemId),o=s$1(r$1({},n),{accounts:a?.accounts??[]});return s$1(r$1({},e),{plaid:{inviteCode:e.plaid?.inviteCode??t,items:a?i.map(r=>r===a?o:r):[...i,o]}})}function E(e,t,n){let i=e.plaid;return i?.items.some(a=>a.itemId===t)?s$1(r$1({},e),{plaid:s$1(r$1({},i),{items:i.items.map(a=>a.itemId===t?n(a):a)})}):e}function v(e,t,n){return E(e,t,i=>{let a=r$1({},i);return n?a.needsReconnect=!0:delete a.needsReconnect,a})}function he$1(e,t){let n=e.plaid;return n?s$1(r$1({},e),{plaid:s$1(r$1({},n),{items:n.items.filter(i=>i.itemId!==t)})}):e}var _={badInvite:`That invite code isn't valid. Ask the person who shared the app with you.`,needsReconnect:`Your bank needs you to sign in again. Press Reconnect next to it.`,institutionDown:`Your bank isn't answering Plaid right now. Try again later.`,rateLimited:`Too many requests. Try again in a few minutes.`,unreachable:`Couldn't reach the bank connection service.`,nothingChanged:`Nothing was changed.`,historyPending:`Your bank is still sending your history to Plaid. Press Refresh in a few minutes.`,tooMuchHistory:`Too much history in one go. Press Refresh again.`};var ke$1=`TRANSACTIONS_SYNC_MUTATION_DURING_PAGINATION`;function b(e,t,n={}){return r$1(s$1(r$1({message:e},t?{code:t}:{}),{needsReconnect:!1,badInvite:!1}),n)}function j(e){return typeof e==`string`?e.trim():``}function He$1(e){return/[.!?]$/.test(e)?e:`${e}.`}function w$1(e,t){if(e===null)return b(_.unreachable);let n=typeof t==`object`&&t!==null?t:{},i=j(n.error_code)||void 0;if(e===401)return b(_.badInvite,i,{badInvite:!0});if(e>=500)return b(_.unreachable,i);let a=j(n.error_type);if(a===``)return b(`The bank connection service refused the request (${i??`HTTP ${e}`}). ${_.nothingChanged}`,i);if(i===`ITEM_LOGIN_REQUIRED`)return b(_.needsReconnect,i,{needsReconnect:!0});if(i===`INSTITUTION_DOWN`||i===`INSTITUTION_NOT_RESPONDING`)return b(_.institutionDown,i);if(a===`RATE_LIMIT_EXCEEDED`&&i!==`TRIAL_CONNECTION_LIMIT`)return b(_.rateLimited,i);return b(`${He$1(j(n.error_message)||i||`Plaid refused the request`)} ${_.nothingChanged}`,i)}function Ie(e){return(e??``).trim().toLowerCase().replace(/[_\s]+/g,` `)}var Ye$1=/* @__PURE__ */ new Set([`savings`,`money market`,`cd`]);var Ke$1=/* @__PURE__ */ new Set([`mortgage`,`home equity`,`home equity loan`]);function U$1(e,t){switch(e.trim().toLowerCase()){case`depository`:return Ye$1.has(Ie(t))?`savings`:`checking`;case`credit`:return`credit_card`;case`loan`:return`loan`;default:return`ignore`}}function be$1(e,t){let n=U$1(e,t);if(n===`credit_card`)return`credit_card`;if(n!==`loan`)return;let i=Ie(t);return Ke$1.has(i)?`mortgage`:i===`auto`?`auto`:i===`student`?`student`:`personal`}function We$1(e,t,n,i,a){let o=t.trim(),r=e.name.trim(),s=U$1(e.type,e.subtype),f=r.toLowerCase(),p=O$1(n).find(m=>m.toLowerCase()===f)??[o,r].filter(Boolean).join(` `),c={id:e.account_id,orgName:o,name:r,accountType:s,appAccount:p,syncFrom:y(p,n,i,a)},u=d(s)?b$1(p,n):void 0;return u?s$1(r$1({},c),{debtName:u}):c}function Ae$1(e,t,n,i,a,o){return e.map(r=>t.find(s=>s.id===r.account_id)??We$1(r,n,i,a,o))}var $$1=`plaid-link-resume`;function V$2(e,t){try{return e()}catch{return t}}function Te$1(e,t,n){let i=s$1(r$1({},t),{savedAtMs:n});V$2(()=>e.setItem($$1,JSON.stringify(i)),void 0)}function H$2(e){V$2(()=>e.removeItem($$1),void 0)}function qe$1(e,t){let n=V$2(()=>e.getItem($$1),null);if(n===null)return null;try{let i=JSON.parse(n);if(i&&typeof i.token==`string`&&i.token!==``&&typeof i.savedAtMs==`number`&&t-i.savedAtMs>=0&&t-i.savedAtMs<=18e5)return r$1({token:i.token,savedAtMs:i.savedAtMs},typeof i.reconnectItemId==`string`?{reconnectItemId:i.reconnectItemId}:{})}catch{}return H$2(e),null}function ze$1(e){try{return new URL(e).searchParams.has(`oauth_state_id`)}catch{return!1}}function wt$3(e,t,n){if(!ze$1(e))return null;let i=qe$1(t,n);return i?r$1({receivedRedirectUri:e,token:i.token},i.reconnectItemId?{reconnectItemId:i.reconnectItemId}:{}):null}function Ut$3(e,t,n,i){let a=/* @__PURE__ */ new Map;for(let u of t.accounts)u.accountType!==`ignore`&&a.set(u.id,u);let o=[],r=/* @__PURE__ */ new Set;for(let u of e)for(let m of u.accounts){let g=a.get(m.id);if(g)for(let y of m.transactions??[]){if(y.pending===!0||!(y.posted>0))continue;let k=A(y.posted,i),N=`${m.id}\0${y.id}`;k<g.syncFrom||r.has(N)||(r.add(N),o.push({a:g,t:y,date:k,cents:lZ(String(y.amount))}))}}let s=Xe$1(o,n),f$2=o.map(({a:u,t:m,date:g,cents:y},k)=>R$1({record_type:`transaction`,date:g,description:m.description.trim(),amount:y===null?String(m.amount):h(y),account:u.appAccount,account_type:u.accountType,category:s[k]?.category??``,link:s[k]?.link??``})),p=o.filter(({a:u,t:m,cents:g},y)=>f$2[y].category===``&&h_({description:m.description,amount:g??0,accountType:u.accountType})===void 0).length,c=f(n.debts);for(let u of e.at(-1)?.accounts??[]){let m=a.get(u.id);if(!m)continue;let g=Je$1(m,u,c,i);g&&f$2.push(g)}return{rows:f$2,needsCategory:p}}function Xe$1(e,t){let n=_Z(e.map(({a,date:o,cents:r})=>({date:o,amount:r??NaN,account:a.appAccount,accountType:a.accountType,debtName:a.debtName})),t.settings.pairWindowDays),i=s_(t.transactions);return e.map(({t:a},o)=>n[o]??a_(a.description,i))}function Je$1(e,t,n,i){let a=A(t[`balance-date`],i),o=lZ(String(t.balance));if(e.accountType===`checking`||e.accountType===`savings`)return Y$2(e,a,o===null?String(t.balance):h(o));if(e.accountType===`credit_card`||e.accountType===`loan`)return K$1(e,n,{date:a,balance:o===null?String(t.balance):h(Math.abs(o))})}function Y$2(e,t,n){return R$1({record_type:`balance`,date:t,account:e.appAccount,account_type:e.accountType,balance:n})}function K$1(e,t,n,i=`personal`){let a=e.debtName??e.appAccount,o=t.find(s=>s.name===a);if(o)return Qe$1(o,n);let r=e.accountType===`loan`;return R$1(s$1(r$1({record_type:`debt`,date:n.date,description:a,category:r?i:`credit_card`,account:e.appAccount,account_type:e.accountType,balance:n.balance},r?{minimum_payment:`0`}:{}),{status:`current`,notes:`Added from bank connection`}))}function Qe$1(e,t){let n=a=>a===void 0?``:h(a),i=a=>a===void 0?``:String(a);return R$1({record_type:`debt`,date:t.date,description:e.name,category:e.kind,account:i(e.account),balance:t.balance,interest_rate:e.aprSource===`statement`?i(e.apr):``,minimum_payment:n(e.minimumPayment),due_day:i(e.dueDay),notes:`Balance from bank connection`,account_type:i(e.accountType),credit_limit:n(e.creditLimit),original_principal:n(e.originalPrincipal),term_months:i(e.termMonths),opened_date:i(e.openedDate),promo_end_date:i(e.promoEndDate),status:e.status,days_past_due:i(e.daysPastDue),past_due_amount:n(e.pastDueAmount),last_late_date:i(e.lastLateDate),hardship_date:i(e.hardshipDate)})}function R$1(e){let t={};for(let n of n$1)t[n]=e[n]??``;return t}function h(e){let t=Math.abs(e);return`${e<0?`-`:``}${Math.trunc(t/100)}.${String(t%100).padStart(2,`0`)}`}var Ze$1=[[`LOAN_PAYMENTS_CREDIT_CARD_PAYMENT`,`credit_card_payment`],[`LOAN_PAYMENTS_`,`debt_payment`],[`LOAN_DISBURSEMENTS_`,`loan_proceeds`],[`TRANSFER_OUT_WITHDRAWAL`,`cash_atm`],[`TRANSFER_IN_DEPOSIT`,null],[`TRANSFER_IN_`,`transfer`],[`TRANSFER_OUT_`,`transfer`],[`INCOME_TAX_REFUND`,`other`],[`INCOME_`,`income`],[`BANK_FEES_INTEREST_CHARGE`,`interest_fee`],[`BANK_FEES_`,`bank_fee`],[`FOOD_AND_DRINK_GROCERIES`,`groceries`],[`FOOD_AND_DRINK_`,`dining`],[`RENT_AND_UTILITIES_RENT`,`housing`],[`RENT_AND_UTILITIES_INTERNET_AND_CABLE`,`phone_internet`],[`RENT_AND_UTILITIES_TELEPHONE`,`phone_internet`],[`RENT_AND_UTILITIES_`,`utilities`],[`GENERAL_SERVICES_INSURANCE`,`insurance`],[`GENERAL_SERVICES_CHILDCARE`,`childcare`],[`GENERAL_SERVICES_AUTOMOTIVE`,`auto_transport`],[`GENERAL_SERVICES_`,`other`],[`GENERAL_MERCHANDISE_PET_SUPPLIES`,`pets`],[`MEDICAL_VETERINARY_SERVICES`,`pets`],[`GENERAL_MERCHANDISE_`,`shopping`],[`MEDICAL_`,`medical`],[`ENTERTAINMENT_TV_AND_MOVIES`,`subscriptions`],[`ENTERTAINMENT_MUSIC_AND_AUDIO`,`subscriptions`],[`PERSONAL_CARE_GYMS_AND_FITNESS_CENTERS`,`subscriptions`],[`ENTERTAINMENT_`,`entertainment`],[`PERSONAL_CARE_`,`personal_care`],[`HOME_IMPROVEMENT_`,`home`],[`TRANSPORTATION_`,`auto_transport`],[`TRAVEL_`,`travel_gifts`],[`GOVERNMENT_AND_NON_PROFIT_TAX_PAYMENT`,`taxes`],[`GOVERNMENT_AND_NON_PROFIT_`,`other`]];var et$2=/* @__PURE__ */ new Set([`income`,`transfer`,`credit_card_payment`,`debt_payment`,`loan_proceeds`,`other`]);function tt$2(e,t){return t.endsWith(`_`)?e.startsWith(t)||e===t.slice(0,-1):e===t}function Pe$2(e){let t=e.trim().toUpperCase();if(t!==``)return Ze$1.find(([n])=>tt$2(t,n))?.[1]}function Re$1(e,t){if(!e)return;let n=Pe$2(e.detailed??``),i=n!==void 0?n:Pe$2(e.primary??``);if(i)return t>0&&!et$2.has(i)?`refund`:i}var nt$2=[`PRODUCTS_NOT_SUPPORTED`,`NO_LIABILITY_ACCOUNTS`,`NOT_ENABLED`];var D=e=>typeof e==`object`&&e!==null&&!Array.isArray(e);function S$1(e){if(typeof e!=`number`||!Number.isFinite(e)||e<0)return;let t=lZ(String(e));return t===null?void 0:h(t)}function W$1(e){if(typeof e!=`number`||!Number.isFinite(e)||e<0)return;let t=String(e);return/^\d+(\.\d+)?$/.test(t)?t:void 0}function q$1(e){if(typeof e!=`string`)return;let t=/^\d{4}-\d{2}-(\d{2})$/.exec(e),n=t?Number(t[1]):0;return n>=1&&n<=31?String(n):void 0}function z(e){let t={};for(let[n,i]of Object.entries(e))i!==void 0&&(t[n]=i);return t}function it$2(e){let i=z({interest_rate:W$1((Array.isArray(e.aprs)?e.aprs.filter(D):[]).find(a=>a.apr_type===`purchase_apr`)?.apr_percentage),minimum_payment:S$1(e.minimum_payment_amount),due_day:q$1(e.next_payment_due_date),original_principal:void 0,past_due_amount:void 0,status:e.is_overdue===!0?`past_due`:void 0});return e.is_overdue===!1?s$1(r$1({},i),{notOverdue:!0}):i}function at$2(e){return z({interest_rate:W$1(e.interest_rate_percentage),minimum_payment:S$1(e.minimum_payment_amount),due_day:q$1(e.next_payment_due_date),original_principal:S$1(e.origination_principal_amount),past_due_amount:void 0,status:void 0})}function ot$2(e){let t=D(e.interest_rate)?e.interest_rate.percentage:void 0,n=e.past_due_amount,i=S$1(n),a=i!==void 0&&typeof n==`number`&&n>0,o=z({interest_rate:W$1(t),minimum_payment:S$1(e.next_monthly_payment),due_day:q$1(e.next_payment_due_date),original_principal:S$1(e.origination_principal_amount),past_due_amount:a?i:void 0,status:a?`past_due`:void 0});return n===0?s$1(r$1({},o),{notOverdue:!0}):o}function rt$2(e){let t={},n=D(e)&&D(e.liabilities)?e.liabilities:{},i=(a,o)=>{let r=Array.isArray(n[a])?n[a]:[];for(let s of r){if(!D(s)||typeof s.account_id!=`string`)continue;let f=o(s);Object.keys(f).length>0&&(t[s.account_id]=f)}};return i(`credit`,it$2),i(`student`,at$2),i(`mortgage`,ot$2),t}function Se(e,t){if(!t)return e;let o=t,{notOverdue:n}=o,i=u$1(o,[`notOverdue`]),a=r$1(r$1({},e),i);return n&&e.status===`past_due`?s$1(r$1({},a),{status:`current`,past_due_amount:``,days_past_due:``}):a}function st$2(e){return e.accounts.some(t=>t.accountType===`credit_card`||t.accountType===`loan`)}async function Ne(e,t){if(!st$2(e))return{kind:`none`};let n=await t(e.accessToken);if(n.ok)return{kind:`details`,details:rt$2(n.value)};let i=n.failure.code;return i!==void 0&&nt$2.includes(i)?{kind:`none`}:{kind:`failed`,failure:n.failure}}function Ee$1(e){return`${e}: couldn't get loan and card details this time, so the saved ones were kept.`}function ve$3(e){let t=/* @__PURE__ */ new Map;for(let n of e.accounts)n.accountType!==`ignore`&&t.set(n.id,n);return t}function X$2(e){return typeof e==`number`&&Number.isFinite(e)?lZ(String(e)):null}function ct$1(e,t){let n=ve$3(e),i=/* @__PURE__ */ new Set;for(let p of t)for(let c of[...p.added,...p.modified])c.pending_transaction_id&&i.add(c.pending_transaction_id);let a=/* @__PURE__ */ new Map,o=/* @__PURE__ */ new Set,r=0;for(let p of t){for(let c of p.added)a.set(c.transaction_id,{t:c,modified:!1}),o.add(c.transaction_id);for(let c of p.modified)a.set(c.transaction_id,{t:c,modified:!0});for(let c of p.removed){let u=a.get(c.transaction_id);if(a.delete(c.transaction_id),o.has(c.transaction_id)||i.has(c.transaction_id))continue;let m=c.account_id??u?.t.account_id;(m===void 0||n.has(m))&&(r+=1)}}let s=[],f=0;for(let{t:p,modified:c}of a.values()){let u=n.get(p.account_id);if(!u||p.pending===!0||!(p.date>=u.syncFrom))continue;let m=X$2(p.amount);s.push({a:u,t:p,description:(p.merchant_name??``).trim()||(p.name??``).trim(),cents:m===null?null:-m||0}),c&&(f+=1)}return{txs:s,changed:r+f}}function dt$1(e,t){let n=_Z(e.map(({a,t:o,cents:r})=>({date:o.date,amount:r??NaN,account:a.appAccount,accountType:a.accountType,debtName:a.debtName})),t.settings.pairWindowDays),i=s_(t.transactions);return e.map(({t:a,description:o,cents:r},s)=>{let f=n[s]??a_(o,i);if(f)return{choice:f,plaid:!1};let p=Re$1(a.personal_finance_category,r??0);return p?{choice:{category:p},plaid:!0}:{plaid:!1}})}function ut$2(e,t,n,i,a){let o=X$2(t.balances?.current);if(o===null)return;if(e.accountType===`checking`||e.accountType===`savings`)return Y$2(e,i,h(o));if(e.accountType!==`credit_card`&&e.accountType!==`loan`)return;let r=U$1(t.type,t.subtype)===`loan`?be$1(t.type,t.subtype)??`personal`:`personal`,s=K$1(e,n,{date:i,balance:h(Math.abs(o))},r),f=X$2(t.balances?.limit);return Se(f===null?s:s$1(r$1({},s),{credit_limit:h(f)}),a?.[t.account_id])}function we(e,t,n){let i=[],a=0;for(let{item:c,pages:u}of e){let m=ct$1(c,u);i.push(...m.txs),a+=m.changed}let o=dt$1(i,t),r=i.map(({a:c,t:u,description:m,cents:g},y)=>R$1({record_type:`transaction`,date:u.date,description:m,amount:g===null?String(u.amount):h(g),account:c.appAccount,account_type:c.accountType,category:o[y].choice?.category??``,link:o[y].choice?.link??``})),s=o.flatMap((c,u)=>c.plaid?[u]:[]),f$3=i.filter(({a:c,description:u,cents:m},g)=>r[g].category===``&&h_({description:u,amount:m??0,accountType:c.accountType})===void 0).length,p=f(t.debts);for(let{item:c,pages:u,liabilities:m}of e){let g=ve$3(c);for(let y of u.at(-1)?.accounts??[]){let k=g.get(y.account_id),N=k&&ut$2(k,y,p,n,m);N&&r.push(N)}}return{rows:r,needsCategory:f$3,changedAtBank:a,guessedRows:s}}var lt$2=20;async function De$1(e,t){let n=e.cursor??``,i=[];for(;i.length<lt$2;){let a=await t(e.accessToken,n);if(!a.ok)return{ok:!1,failure:a.failure};if(i.push(a.value),n=a.value.next_cursor??``,!a.value.has_more)return{ok:!0,pages:i,cursor:n,complete:!0}}return{ok:!0,pages:i,cursor:n,complete:!1}}function pt$2(e,t){return t.some(n=>n.transactions_update_status===`NOT_READY`)?!0:!e.cursor&&t.every(n=>n.added.length===0&&n.modified.length===0)}async function J$2(e,t){if(e.needsReconnect)return{kind:`skipped`,item:e};let n=await De$1(e,t);if(!n.ok&&n.failure.code===ke$1&&(n=await De$1(e,t)),!n.ok)return{kind:`failed`,item:e,failure:n.failure};let i=[];pt$2(e,n.pages)&&i.push(_.historyPending),n.complete||i.push(_.tooMuchHistory);let a=n.cursor||(e.cursor??``);return{kind:`synced`,item:e,pages:n.pages,nextCursor:a,notes:i}}async function xe$1(e,t){let n=[];for(let i of e)n.push(await J$2(i,t));return n}async function Le$1(e,t){let n=[];for(let i of e){if(i.kind!==`synced`){n.push(i);continue}let a=await Ne(i.item,t);a.kind===`details`?n.push(s$1(r$1({},i),{liabilities:a.details})):a.kind===`failed`?n.push(s$1(r$1({},i),{notes:[...i.notes,Ee$1(i.item.institutionName)]})):n.push(i)}return n}function Me(e){return e.flatMap(t=>t.kind===`synced`?[r$1({item:t.item,pages:t.pages},t.liabilities?{liabilities:t.liabilities}:{})]:[])}function Q$1(e,t){return t.reduce((n,i)=>i.kind===`failed`&&i.failure.needsReconnect?v(n,i.item.itemId,!0):n,e)}function mt$1(e,t,n){return s$1(r$1({},e),{cursor:t,accounts:e.accounts.map(i=>i.accountType===`ignore`?i:s$1(r$1({},i),{lastSyncedTo:n}))})}function Ce$2(e,t,n){return t.reduce((i,a)=>a.kind===`synced`?E(i,a.item.itemId,o=>mt$1(o,a.nextCursor,n)):i,e)}var Oe$1=`https://nxcnkjrwdkvgczrvyhrk.supabase.co/functions/v1/plaid`;var ft$2=/^[\x20-\x7e]+$/;var gt$2=e=>typeof e==`object`&&e!==null&&!Array.isArray(e);async function x(e,t,n){let i=e.trim();if(!ft$2.test(i))return{ok:!1,failure:w$1(401,null)};let a;try{a=await fetch(Oe$1,{method:`POST`,headers:{"content-type":`application/json`,"x-invite-code":i},body:JSON.stringify(t),credentials:`omit`,cache:`no-store`,referrerPolicy:`no-referrer`})}catch{return{ok:!1,failure:w$1(null,null)}}let o;try{o=await a.json()}catch{o=void 0}return a.ok?!gt$2(o)||!n(o)?{ok:!1,failure:w$1(502,null)}:{ok:!0,value:o}:{ok:!1,failure:w$1(a.status,o)}}var Z$1=e=>typeof e==`string`&&e!==``;function ee$3(e,t){return x(e,t===void 0?{action:`link-token`}:{action:`link-token`,access_token:t},n=>Z$1(n.link_token))}function Fe(e,t){return x(e,{action:`exchange`,public_token:t},n=>Z$1(n.access_token)&&Z$1(n.item_id))}function te$2(e,t,n){return x(e,n===``?{action:`sync`,access_token:t}:{action:`sync`,access_token:t,cursor:n},i=>Array.isArray(i.accounts)&&Array.isArray(i.added)&&Array.isArray(i.modified)&&Array.isArray(i.removed)&&typeof i.has_more==`boolean`)}function Be$1(e,t){return x(e,{action:`remove`,access_token:t},n=>n.removed===!0).then(n=>n.ok?{ok:!0,value:null}:n)}function Ue$1(e,t){return x(e,{action:`liabilities`,access_token:t},()=>!0)}var _t$2=`https://cdn.plaid.com/link/v2/stable/link-initialize.js`;var je$1=`Couldn't open Plaid's sign-in window. Check your connection and try again. Nothing was changed.`;var ne$2=null;function Ge$1(){return window.Plaid}function ht$2(){let e=Ge$1();return e?Promise.resolve(e):(ne$2??=new Promise((t,n)=>{let i=document.createElement(`script`);i.src=_t$2,i.async=!0;let a=()=>{i.remove(),ne$2=null,n(new Error(je$1))};i.onload=()=>{let o=Ge$1();o?t(o):a()},i.onerror=a,document.head.appendChild(i)}),ne$2)}async function $e$1(e){let t=await ht$2();return new Promise((n,i)=>{try{t.create(s$1(r$1({token:e.token},e.receivedRedirectUri?{receivedRedirectUri:e.receivedRedirectUri}:{}),{onSuccess:(o,r)=>n({kind:`success`,publicToken:o,metadata:r}),onExit:o=>n({kind:`exit`,message:o&&(o.display_message||o.error_message)||null})})).open()}catch{i(new Error(je$1))}})}var kt$3=6e4;var Ve$1=`Set a passphrase for your data file first (Settings, Encryption).`;var ie$2=`Enter the invite code first.`;var It$1=`Connected, but the data file couldn't be saved. Press Save at the top now: without the saved file this bank can't be used or removed again.`;function bt$3(){try{return window.sessionStorage}catch{return{getItem:()=>null,setItem:()=>{},removeItem:()=>{}}}}var ae$2=class e{store=N$3(x_);_busy=Ce$4(!1);_pending=Ce$4(null);_draft=Ce$4(null);_refreshAt=Ce$4(0);_flash=Ce$4(null);busy=this._busy.asReadonly();draft=this._draft.asReadonly();flash=this._flash.asReadonly();refreshAt=this._refreshAt.asReadonly();connection=uo(()=>this.store.data()?.plaid??null);items=uo(()=>this.connection()?.items??[]);inviteCode=uo(()=>this.connection()?.inviteCode??``);mapped=uo(()=>this.items().some(t=>t.accounts.some(n=>n.accountType!==`ignore`)));tz=Intl.DateTimeFormat().resolvedOptions().timeZone;clearFlash(){this._flash.set(null)}saveInviteCode(t){return!this.store.data()||this.store.isSample()||!this.store.encrypted()?{ok:!1,message:Ve$1}:t.trim()===``?{ok:!1,message:ie$2}:(this.store.update(i=>G(i,t)),{ok:!0,value:null})}addBank(){return this.run(async()=>{let t=this.requireInvite();if(typeof t!=`string`)return t;let n=await ee$3(t);if(!n.ok)return this.failed(n.failure);let i=await this.link(n.value.link_token);return!i.ok||i.value.kind===`exit`?this.exited(i):this.finishAdd(t,i.value)})}reconnect(t){return this.run(async()=>{let n=this.requireInvite();if(typeof n!=`string`)return n;let i=this.items().find(r=>r.itemId===t);if(!i)return{ok:!1,message:`That bank is no longer connected.`};let a=await ee$3(n,i.accessToken);if(!a.ok)return this.failed(a.failure);let o=await this.link(a.value.link_token,{reconnectItemId:t});return!o.ok||o.value.kind===`exit`?this.exited(o):(this.store.update(r=>v(r,t,!1)),{ok:!0,value:null})})}async resumeOauth(t){let n=await this.run(async()=>{let i=this.requireInvite();if(typeof i!=`string`)return i;let a=await this.link(t.token,r$1({receivedRedirectUri:t.receivedRedirectUri},t.reconnectItemId?{reconnectItemId:t.reconnectItemId}:{}));if(!a.ok||a.value.kind===`exit`)return this.exited(a);let o=t.reconnectItemId;return o?(this.store.update(r=>v(r,o,!1)),{ok:!0,value:null}):this.finishAdd(i,a.value)});!n.ok&&n.message&&this._flash.set(n.message)}learnAccounts(t,n=!1){return this.run(()=>this.learn(t,n))}cancelDraft(){this._draft.set(null)}async confirmMapping(t,n){let i=this._draft();this.store.update(r=>z$1(E(r,t,s=>s$1(r$1({},s),{accounts:n})),n)),this._draft.set(null);let a=this.items().find(r=>r.itemId===t);if(!i?.firstTime||!i.sync||!a)return{ok:!0,value:null};let o=i.sync;return this.run(async()=>{let r=await this.addLiabilities(this.inviteCode(),[s$1(r$1({},o),{item:a})]);return{ok:!0,value:this.buildSync(r)}})}refresh(){return this.run(async()=>{let t=this.items(),n=this.inviteCode();if(t.length===0)return{ok:!1,message:`No bank is connected.`};if(n===``)return{ok:!1,message:ie$2};let i=await xe$1(t,(s,f)=>te$2(n,s,f));this._refreshAt.set(Date.now()+kt$3);let a=i.find(s=>s.kind===`failed`&&s.failure.badInvite);if(a?.kind===`failed`)return this.failed(a.failure);let o=await this.addLiabilities(n,i),r=this.buildSync(o);return o.some(s=>s.kind===`synced`)?{ok:!0,value:r}:{ok:!1,message:r.failures.map(s=>`${s.bank}: ${s.message}`).join(` `)}})}setPending(t){this._pending.set(t)}takePending(){let t=this._pending();return this._pending.set(null),t}confirm(t){let n=A(Math.floor(Date.now()/1e3),this.tz);this.store.update(i=>Ce$2(i,t.results,n))}disconnect(t){return this.run(async()=>{let n=this.requireInvite();if(typeof n!=`string`)return n;let i=this.items().find(o=>o.itemId===t);if(!i)return{ok:!0,value:null};let a=await Be$1(n,i.accessToken);if(!a.ok){let o=a.failure;return o.badInvite?this.failed(o):{ok:!1,message:`${o.message} The bank was kept.`}}return this._pending.set(null),this._draft()?.itemId===t&&this._draft.set(null),this.store.update(o=>he$1(o,t)),{ok:!0,value:null}})}requireInvite(){if(!this.store.data()||this.store.isSample()||!this.store.encrypted())return{ok:!1,message:Ve$1};let n=this.inviteCode();return n===``?{ok:!1,message:ie$2}:n}async link(t,n={}){let i=bt$3();Te$1(i,r$1({token:t},n.reconnectItemId?{reconnectItemId:n.reconnectItemId}:{}),Date.now());try{return{ok:!0,value:await $e$1(r$1({token:t},n.receivedRedirectUri?{receivedRedirectUri:n.receivedRedirectUri}:{}))}}catch(a){return{ok:!1,message:a instanceof Error?a.message:_.unreachable}}finally{H$2(i)}}exited(t){if(!t.ok)return t;let n=t.value;return n.kind===`exit`&&n.message?{ok:!1,message:`${n.message} ${_.nothingChanged}`}:{ok:!0,value:null}}async finishAdd(t,n){if(n.kind!==`success`)return{ok:!0,value:null};let i=await Fe(t,n.publicToken);if(!i.ok)return this.failed(i.failure);let a=i.value.item_id;return this.store.update(o=>_e$3(o,t,{itemId:a,accessToken:i.value.access_token,institutionName:ye$3(n.metadata),connectedAt:A(Math.floor(Date.now()/1e3),this.tz)})),this.store.mode===`fs-access`&&(await this.store.save(),this.store.dirty())?{ok:!1,message:It$1}:this.learn(a,!0)}async learn(t,n){let i=this.items().find(c=>c.itemId===t),a=this.store.data();if(!i||!a)return{ok:!1,message:`That bank is no longer connected.`};let o=this.inviteCode(),r=await J$2(i,(c,u)=>te$2(o,c,u));if(r.kind===`skipped`)return{ok:!1,message:_.needsReconnect};if(r.kind===`failed`)return this.store.update(c=>Q$1(c,[r])),this.failed(r.failure);let s=r.pages.at(-1)?.accounts??[],f=q$2(a,A(Math.floor(Date.now()/1e3),this.tz)),p=this.store.data()??a;return this._draft.set({itemId:t,bankName:i.institutionName,maps:Ae$1(s,i.accounts,i.institutionName,p,f,p.settings),balances:Object.fromEntries(s.flatMap(c=>typeof c.balances?.current==`number`?[[c.account_id,c.balances.current.toFixed(2)]]:[])),firstTime:n,sync:r}),{ok:!0,value:null}}addLiabilities(t,n){return Le$1(n,i=>Ue$1(t,i))}buildSync(t){this.store.update(s=>Q$1(s,t));let n=this.store.data(),i=A(Math.floor(Date.now()/1e3),this.tz),a=n?we(Me(t),n,i):{rows:[],needsCategory:0,changedAtBank:0,guessedRows:[]},o=t.flatMap(s=>s.kind===`failed`?[{bank:s.item.institutionName,message:s.failure.message}]:s.kind===`skipped`?[{bank:s.item.institutionName,message:_.needsReconnect}]:[]),r=[...new Set(t.flatMap(s=>s.kind===`synced`?s.notes:[]))];return s$1(r$1({},a),{results:t,failures:o,notes:r})}failed(t){return t.badInvite&&this.store.update(n=>n.plaid?G(n,``):n),{ok:!1,message:t.message}}async run(t){if(this._busy())return{ok:!1,message:`Still waiting for Plaid.`};this._busy.set(!0);try{return await t()}catch{return{ok:!1,message:_.unreachable}}finally{this._busy.set(!1)}}static ɵfac=function(n){return new(n||e)};static ɵprov=ue$2({token:e,factory:e.ɵfac,providedIn:`root`})};function En(){let e=N$3(ae$2),t=Ce$4(Date.now()),n=setInterval(()=>t.set(Date.now()),1e3);return N$3(Dt$3).onDestroy(()=>clearInterval(n)),uo(()=>Math.max(0,Math.ceil((e.refreshAt()-t())/1e3)))}var n=class e{storage=N$3(Xs);_dark=Ce$4(!1);dark=this._dark.asReadonly();constructor(){this.storage.getSettings().then(t=>this.apply(t.theme===`dark`))}toggle(){this.apply(!this._dark()),this.storage.patchSettings({theme:this._dark()?`dark`:`light`})}apply(t){document.documentElement.classList.toggle(`dark-theme`,t),this._dark.set(t)}static ɵfac=function(s){return new(s||e)};static ɵprov=ue$2({token:e,factory:e.ɵfac,providedIn:`root`})};var He=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,r){this._renderer=e,this._elementRef=r}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty(`disabled`,e)}static ɵfac=function(r){return new(r||n)(it$3(so),it$3(Xt$1))};static ɵdir=Tr({type:n})}return n})();var ie$1=(()=>{class n extends He{static ɵfac=(()=>{let e;return function(i){return(e||(e=qw(n)))(i||n)}})();static ɵdir=Tr({type:n,features:[AC]})}return n})();var w=new K$3(``);var Ct$2={provide:w,useExisting:dl(()=>Vt$1),multi:!0};var Vt$1=(()=>{class n extends ie$1{writeValue(e){this.setProperty(`checked`,e)}static ɵfac=(()=>{let e;return function(i){return(e||(e=qw(n)))(i||n)}})();static ɵdir=Tr({type:n,selectors:[[`input`,`type`,`checkbox`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`type`,`checkbox`,`formControl`,``,3,`ngNoCva`,``],[`input`,`type`,`checkbox`,`ngModel`,``,3,`ngNoCva`,``]],hostBindings:function(r,i){r&1&&Ed(`change`,function(a){return i.onChange(a.target.checked)})(`blur`,function(){return i.onTouched()})},standalone:!1,features:[db([Ct$2]),AC]})}return n})();var Dt$2={provide:w,useExisting:dl(()=>$e),multi:!0};function At(){let n=_r()?_r().getUserAgent():``;return/android (\d+)/.test(n.toLowerCase())}var bt$2=new K$3(``);var $e=(()=>{class n extends He{_compositionMode;_composing=!1;constructor(e,r,i){super(e,r),this._compositionMode=i,this._compositionMode??=!At()}writeValue(e){let r=e??``;this.setProperty(`value`,r)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static ɵfac=function(r){return new(r||n)(it$3(so),it$3(Xt$1),it$3(bt$2,8))};static ɵdir=Tr({type:n,selectors:[[`input`,`formControlName`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`formControl`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControl`,``,3,`ngNoCva`,``],[`input`,`ngModel`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`ngModel`,``,3,`ngNoCva`,``],[``,`ngDefaultControl`,``]],hostBindings:function(r,i){r&1&&Ed(`input`,function(a){return i._handleInput(a.target.value)})(`blur`,function(){return i.onTouched()})(`compositionstart`,function(){return i._compositionStart()})(`compositionend`,function(a){return i._compositionEnd(a.target.value)})},standalone:!1,features:[db([Dt$2]),AC]})}return n})();function _e$2(n){return n==null||ve$2(n)===0}function ve$2(n){return n==null?null:Array.isArray(n)||typeof n==`string`?n.length:n instanceof Set?n.size:null}var N$1=new K$3(``);var R=new K$3(``);var Mt$2=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var fe$1=class{static min(t){return Et$1(t)}static max(t){return Nt(t)}static required(t){return qe(t)}static requiredTrue(t){return It(t)}static email(t){return St$2(t)}static minLength(t){return Ft(t)}static maxLength(t){return Ot$1(t)}static pattern(t){return wt$2(t)}static nullValidator(t){return X$1()}static compose(t){return Ke(t)}static composeAsync(t){return Qe(t)}};function Et$1(n){return t=>{if(t.value==null||n==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null}}function Nt(n){return t=>{if(t.value==null||n==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e>n?{max:{max:n,actual:t.value}}:null}}function qe(n){return _e$2(n.value)?{required:!0}:null}function It(n){return n.value===!0?null:{required:!0}}function St$2(n){return _e$2(n.value)||Mt$2.test(n.value)?null:{email:!0}}function Ft(n){return t=>{let e=t.value?.length??ve$2(t.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function Ot$1(n){return t=>{let e=t.value?.length??ve$2(t.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function wt$2(n){if(!n)return X$1;let t,e;return typeof n==`string`?(e=``,n.charAt(0)!==`^`&&(e+=`^`),e+=n,n.charAt(n.length-1)!==`$`&&(e+=`$`),t=new RegExp(e)):(e=n.toString(),t=n),r=>{if(_e$2(r.value))return null;let i=r.value;return t.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}function X$1(n){return null}function We(n){return n!=null}function ze(n){return _s(n)?Xe$4(n):n}function Ye(n){let t={};return n.forEach(e=>{t=e!=null?r$1(r$1({},t),e):t}),Object.keys(t).length===0?null:t}function Xe(n,t){return t.map(e=>e(n))}function Rt$1(n){return!n.validate}function Ze(n){return n.map(t=>Rt$1(t)?t:e=>t.validate(e))}function Ke(n){if(!n)return null;let t=n.filter(We);return t.length==0?null:function(e){return Ye(Xe(e,t))}}function Ce$1(n){return n!=null?Ke(Ze(n)):null}function Qe(n){if(!n)return null;let t=n.filter(We);return t.length==0?null:function(e){let r=Xe(e,t).map(ze);return Wp(r).pipe(Se$2(Ye))}}function Ve(n){return n!=null?Qe(Ze(n)):null}function Re(n,t){return n===null?[t]:Array.isArray(n)?[...n,t]:[n,t]}function Je(n){return n._rawValidators}function et$1(n){return n._rawAsyncValidators}function ge$1(n){return n?Array.isArray(n)?n:[n]:[]}function Z(n,t){return Array.isArray(n)?n.includes(t):n===t}function xe(n,t){let e=ge$1(t);return ge$1(n).forEach(i=>{Z(e,i)||e.push(i)}),e}function Te(n,t){return ge$1(t).filter(e=>!Z(n,e))}var K=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=Ce$1(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=Ve(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control?.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}};var c=class extends K{name;get formDirective(){return null}get path(){return null}};var k=`VALID`;var Y$1=`INVALID`;var S=`PENDING`;var B=`DISABLED`;var C=class{};var Q=class extends C{value;source;constructor(t,e){super(),this.value=t,this.source=e}};var U=class extends C{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}};var H$1=class extends C{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}};var F=class extends C{status;source;constructor(t,e){super(),this.status=t,this.source=e}};var J$1=class extends C{source;constructor(t){super(),this.source=t}};var O=class extends C{source;constructor(t){super(),this.source=t}};function tt$1(n){return(oe$1(n)?n.validators:n)||null}function xt$2(n){return Array.isArray(n)?Ce$1(n):n||null}function nt$1(n,t){return(oe$1(t)?t.asyncValidators:n)||null}function Tt(n){return Array.isArray(n)?Ve(n):n||null}function oe$1(n){return n!=null&&!Array.isArray(n)&&typeof n==`object`}function Pt$1(n,t,e){let r=n.controls;if(!(t?Object.keys(r):r).length)throw new V$4(1e3,``);if(!rt$1(r,e))throw new V$4(1001,``)}function jt$1(n,t,e){n._forEachChild((r,i)=>{if(e[i]===void 0)throw new V$4(-1002,``)})}var ee$2=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=Ce$4(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return Ue$4(this.statusReactive)}set status(t){Ue$4(()=>this.statusReactive.set(t))}_status=uo(()=>this.statusReactive());statusReactive=Ce$4(void 0);get valid(){return this.status===k}get invalid(){return this.status===Y$1}get pending(){return this.status===S}get disabled(){return this.status===B}get enabled(){return this.status!==B}errors;get pristine(){return Ue$4(this.pristineReactive)}set pristine(t){Ue$4(()=>this.pristineReactive.set(t))}_pristine=uo(()=>this.pristineReactive());pristineReactive=Ce$4(!0);get dirty(){return!this.pristine}get touched(){return Ue$4(this.touchedReactive)}set touched(t){Ue$4(()=>this.touchedReactive.set(t))}_touched=uo(()=>this.touchedReactive());touchedReactive=Ce$4(!1);get untouched(){return!this.touched}_events=new Ge$4;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:`change`}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(xe(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(xe(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Te(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Te(t,this._rawAsyncValidators))}hasValidator(t){return Z(this._rawValidators,t)}hasAsyncValidator(t){return Z(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let r=t.sourceControl??this;t.onlySelf||this._parent?.markAsTouched(s$1(r$1({},t),{sourceControl:r})),e&&t.emitEvent!==!1&&this._events.next(new H$1(!0,r))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let r=t.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:r})}),t.onlySelf||this._parent?._updateTouched(t,r),e&&t.emitEvent!==!1&&this._events.next(new H$1(!1,r))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let r=t.sourceControl??this;t.onlySelf||this._parent?.markAsDirty(s$1(r$1({},t),{sourceControl:r})),e&&t.emitEvent!==!1&&this._events.next(new U(!1,r))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let r=t.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),t.onlySelf||this._parent?._updatePristine(t,r),e&&t.emitEvent!==!1&&this._events.next(new U(!0,r))}markAsPending(t={}){this.status=S;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new F(this.status,e)),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.markAsPending(s$1(r$1({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=B,this.errors=null,this._forEachChild(i=>{i.disable(s$1(r$1({},t),{onlySelf:!0}))}),this._updateValue();let r=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Q(this.value,r)),this._events.next(new F(this.status,r)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(s$1(r$1({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=k,this._forEachChild(r=>{r.enable(s$1(r$1({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(s$1(r$1({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t,e){t.onlySelf||(this._parent?.updateValueAndValidity(t),t.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let r=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===k||this.status===S)&&this._runAsyncValidator(r,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Q(this.value,e)),this._events.next(new F(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.updateValueAndValidity(s$1(r$1({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?B:k}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=S,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:t!==!1};let r=ze(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(`.`)),e.length===0)?null:e.reduce((r,i)=>r&&r._find(i),this)}getError(t,e){let r=e?this.get(e):this;return r?.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,r){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||r)&&this._events.next(new F(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,r)}_initObservables(){this.valueChanges=new Et$3,this.statusChanges=new Et$3}_calculateStatus(){return this._allControlsDisabled()?B:this.errors?Y$1:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(S)?S:this._anyControlsHaveStatus(Y$1)?Y$1:k}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let r=!this._anyControlsDirty(),i=this.pristine!==r;this.pristine=r,t.onlySelf||this._parent?._updatePristine(t,e),i&&this._events.next(new U(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new H$1(this.touched,e)),t.onlySelf||this._parent?._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){oe$1(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=xt$2(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=Tt(this._rawAsyncValidators)}_updateHasRequiredValidator(){Ue$4(()=>this._hasRequired.set(this.hasValidator(fe$1.required)))}};function rt$1(n,t){return Object.hasOwn(n,t)}function Gt$1(n){return n.tagName===`INPUT`||n.tagName===`SELECT`||n.tagName===`TEXTAREA`}function kt$2(n,t,e,r){switch(e){case`name`:n.setAttribute(t,e,r);break;case`disabled`:case`readonly`:case`required`:r?n.setAttribute(t,e,``):n.removeAttribute(t,e);break;case`max`:case`min`:case`minLength`:case`maxLength`:r!==void 0?n.setAttribute(t,e,r.toString()):n.removeAttribute(t,e)}}var me$1=class{kind;context;control;message;constructor({kind:t,context:e,control:r}){this.kind=t,this.context=e,this.control=r}};var Bt$1=(()=>{class n{_validator=X$1;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let r=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):X$1,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static ɵfac=function(r){return new(r||n)};static ɵdir=Tr({type:n,features:[ao]})}return n})();var Lt$1={provide:N$1,useExisting:dl(()=>it$1),multi:!0};var it$1=(()=>{class n extends Bt$1{required;inputName=`required`;normalizeInput=wi$1;createValidator=e=>qe;enabled(e){return e}static ɵfac=(()=>{let e;return function(i){return(e||(e=qw(n)))(i||n)}})();static ɵdir=Tr({type:n,selectors:[[``,`required`,``,`formControlName`,``,3,`type`,`checkbox`],[``,`required`,``,`formControl`,``,3,`type`,`checkbox`],[``,`required`,``,`ngModel`,``,3,`type`,`checkbox`]],hostVars:1,hostBindings:function(r,i){r&2&&Di(`required`,i._enabled?``:null)},inputs:{required:`required`},standalone:!1,features:[db([Lt$1]),AC]})}return n})();var Ut$2=new K$3(``);var q=new K$3(``,{factory:()=>se$1});var se$1=`always`;function ae$1(n,t){return[...t.path,n]}function ye$2(n,t,e=se$1){De(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||e===`always`)&&t.valueAccessor.setDisabledState?.(n.disabled),$t$1(n,t),Wt$1(n,t),qt$1(n,t),Ht$2(n,t)}function Pe$1(n,t,e=!0){let r=()=>{};t?.valueAccessor?.registerOnChange(r),t?.valueAccessor?.registerOnTouched(r),ne$1(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function te$1(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function Ht$2(n,t){if(t.valueAccessor.setDisabledState){let e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function De(n,t){let e=Je(n);t.validator!==null?n.setValidators(Re(e,t.validator)):typeof e==`function`&&n.setValidators([e]);let r=et$1(n);t.asyncValidator!==null?n.setAsyncValidators(Re(r,t.asyncValidator)):typeof r==`function`&&n.setAsyncValidators([r]);let i=()=>n.updateValueAndValidity();te$1(t._rawValidators,i),te$1(t._rawAsyncValidators,i)}function ne$1(n,t){let e=!1;if(n!==null){if(t.validator!==null){let i=Je(n);if(Array.isArray(i)&&i.length>0){let o=i.filter(a=>a!==t.validator);o.length!==i.length&&(e=!0,n.setValidators(o))}}if(t.asyncValidator!==null){let i=et$1(n);if(Array.isArray(i)&&i.length>0){let o=i.filter(a=>a!==t.asyncValidator);o.length!==i.length&&(e=!0,n.setAsyncValidators(o))}}}let r=()=>{};return te$1(t._rawValidators,r),te$1(t._rawAsyncValidators,r),e}function $t$1(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn===`change`&&ot$1(n,t)})}function qt$1(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn===`blur`&&n._pendingChange&&ot$1(n,t),n.updateOn!==`submit`&&n.markAsTouched()})}function ot$1(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Wt$1(n,t){let e=(r,i)=>{t.valueAccessor.writeValue(r),i&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function st$1(n,t){De(n,t)}function zt$1(n,t){return ne$1(n,t)}function at$1(n,t){if(!Object.hasOwn(n,`model`))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(t,e.currentValue)}function Yt(n){return Object.getPrototypeOf(n.constructor)===ie$1}function lt$1(n,t){n._syncPendingControls(),t.forEach(e=>{let r=e.control;r.updateOn===`submit`&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}function Xt(n,t){if(!t)return null;let e,r,i;return t.forEach(o=>{o.constructor===$e?e=o:Yt(o)?r=o:i=o}),i||r||e||null}function Zt$1(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}var ut$1={provide:Ut$2,useFactory:()=>{let n=N$3(V$1,{self:!0});return{setParseErrors:t=>{n.setParseErrorSource(t)},set onReset(t){n.onReset=t}}}};var V$1=class extends K{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(t){this.userOnReset=t,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof O&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=Xt(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;pendingCustomValue=void 0;hasPendingCustomValue=!1;constructor(t,e,r){super(),this.injector=t,this.renderer=e,this.rawValueAccessors=r,this.injector?.get(Dt$3)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let t=this.control,e=this.injector?.get(Ns);if(!t||!e)return;let r=e.markForCheck.bind(e);if(this.subscription=new Qe$4,this.subscription.add(()=>this.discardPendingCustomValue(t)),typeof t.registerOnChange==`function`){let i=(o,a)=>{this.discardPendingCustomValue(t),a&&this.viewToModelUpdate(o),r()};t.registerOnChange(i),this.subscription.add(()=>t._unregisterOnChange(i))}this.subscription.add(t.valueChanges.subscribe(r)),this.subscription.add(t.statusChanges.subscribe(r)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=t.events.subscribe(i=>{i instanceof O&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&t.addValidators(this.parseErrorsValidator)}ngControlCreate(t){!t.nativeElement.hasAttribute?.(`ngNoCva`)&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!t.customControl||(this.isCustomControlBased=!0,t.listenToCustomControlModel(i=>{let o=this.control;o&&(o._pendingValue=i,o._pendingChange=!0,o._pendingDirty=!0,this.pendingCustomValue=i,this.hasPendingCustomValue=!0,o.updateOn===`change`&&this.updateControlFromCustom(o))}),t.listenToCustomControlOutput(`touch`,()=>{let i=this.control;i&&(i._pendingTouched=!0,i.updateOn===`blur`&&i._pendingChange&&this.updateControlFromCustom(i),i.updateOn!==`submit`&&i.markAsTouched())}),this.customControlBindings={},this.isNativeFormElement=Gt$1(t.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(i=>i instanceof it$1))}updateControlFromCustom(t){let e=t._pendingValue;t._pendingChange=!1,this.clearPendingCustomValue(),this.customControlBindings&&(this.customControlBindings.value=e),t._pendingDirty&&t.markAsDirty(),t.setValue(e,{emitModelToViewChange:!1}),this.viewToModelUpdate(t.value)}discardPendingCustomValue(t){this.hasPendingCustomValue&&(this.customControlBindings&&(this.customControlBindings.value=this.pendingCustomValue),this.clearPendingCustomValue(),t._pendingValue=t.value,t._pendingChange=!1,t._pendingDirty=!1)}clearPendingCustomValue(){this.pendingCustomValue=void 0,this.hasPendingCustomValue=!1}ngControlUpdate(t,e){if(!this.isCustomControlBased)return;let r=this.control,i=this.customControlBindings;if(!r||!i)return;this.hasPendingCustomValue&&!r._pendingChange&&(i.value=this.pendingCustomValue,this.clearPendingCustomValue()),Object.is(i.value,r.value)||(this.discardPendingCustomValue(r),i.value=r.value,t.setCustomControlModelInput(r.value)),this.bindControlProperty(t,i,`touched`,r.touched),this.bindControlProperty(t,i,`dirty`,r.dirty),this.bindControlProperty(t,i,`valid`,r.valid),this.bindControlProperty(t,i,`invalid`,r.invalid),this.bindControlProperty(t,i,`pending`,r.pending),this.bindControlProperty(t,i,`disabled`,r.disabled),this.shouldBindRequired&&this.bindControlProperty(t,i,`required`,this.isRequired);let o=r.errors;if(i.errors!==o){i.errors=o;let a=this._convertErrors(o);t.setInputOnDirectives(`errors`,a)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(t,e,r,i){if(e[r]===i)return;e[r]=i;let o=t.setInputOnDirectives(r,i);this.isNativeFormElement&&!o&&(r===`disabled`||r===`required`)&&this.renderer&&kt$2(this.renderer,t.nativeElement,r,i)}_convertErrors(t){if(t===null)return[];let e=this.control;return Object.entries(t).map(([r,i])=>new me$1({context:i,kind:r,control:e}))}setParseErrorSource(t){if(t===void 0)return;let e=null,r=uo(()=>{let i=t();return i.length===0?null:i.reduce((o,a)=>(o[a.kind]=a,o),{})});this.parseErrorsValidator=(()=>e).bind(this),Zh(()=>{e=r(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(t){this.parseErrorsValidator&&(t?.removeValidators(this.parseErrorsValidator),t?.updateValueAndValidity({emitEvent:!1}))}};var re$1=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var xn=(()=>{class n extends re$1{constructor(e){super(e)}static ɵfac=function(r){return new(r||n)(it$3(V$1,2))};static ɵdir=Tr({type:n,selectors:[[``,`formControlName`,``],[``,`ngModel`,``],[``,`formControl`,``]],hostVars:14,hostBindings:function(r,i){r&2&&wd(`ng-untouched`,i.isUntouched)(`ng-touched`,i.isTouched)(`ng-pristine`,i.isPristine)(`ng-dirty`,i.isDirty)(`ng-valid`,i.isValid)(`ng-invalid`,i.isInvalid)(`ng-pending`,i.isPending)},standalone:!1,features:[AC]})}return n})();var Tn=(()=>{class n extends re$1{constructor(e){super(e)}static ɵfac=function(r){return new(r||n)(it$3(c,10))};static ɵdir=Tr({type:n,selectors:[[``,`formGroupName`,``],[``,`formArrayName`,``],[``,`ngModelGroup`,``],[``,`formGroup`,``],[``,`formArray`,``],[`form`,3,`ngNoForm`,``],[``,`ngForm`,``]],hostVars:16,hostBindings:function(r,i){r&2&&wd(`ng-untouched`,i.isUntouched)(`ng-touched`,i.isTouched)(`ng-pristine`,i.isPristine)(`ng-dirty`,i.isDirty)(`ng-valid`,i.isValid)(`ng-invalid`,i.isInvalid)(`ng-pending`,i.isPending)(`ng-submitted`,i.isSubmitted)},standalone:!1,features:[AC]})}return n})();var $=class extends ee$2{constructor(t,e,r){super(tt$1(e),nt$1(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(t,e){return this._find(t)||(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,r={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){let r=this._find(t);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,r={}){let i=this._find(t);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this._find(t)?.enabled===!0}setValue(t,e={}){Ue$4(()=>{jt$1(this,!0,t),Object.keys(t).forEach(r=>{Pt$1(this,!0,r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(r=>{let i=this._find(r);i&&i.patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r,i)=>{r.reset(t?t[i]:null,s$1(r$1({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new O(this))}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>r._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,r]of Object.entries(this.controls))if(this.contains(e)&&t(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,r,i)=>((r.enabled||this.disabled)&&(e[i]=r.value),e))}_reduceChildren(t,e){let r=t;return this._forEachChild((i,o)=>{r=e(r,i,o)}),r}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return rt$1(this.controls,t)?this.controls[t]:null}};var je=class extends ${};var Kt$1={provide:c,useExisting:dl(()=>Qt$1)};var L=Promise.resolve();var Qt$1=(()=>{class n extends c{callSetDisabledState;get submitted(){return Ue$4(this.submittedReactive)}_submitted=uo(()=>this.submittedReactive());submittedReactive=Ce$4(!1);_directives=/* @__PURE__ */ new Set;form;ngSubmit=new Et$3;options;constructor(e,r,i){super(),this.callSetDisabledState=i,this.form=new $({},Ce$1(e),Ve(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){L.then(()=>{e.control=this._findContainer(e.path).registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){L.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){L.then(()=>{let r=this._findContainer(e.path),i=new $({});st$1(i,e),r.registerControl(e.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){L.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,r){L.then(()=>{this.form.get(e.path).setValue(r)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),lt$1(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new J$1(this.control)),e?.target?.method===`dialog`}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static ɵfac=function(r){return new(r||n)(it$3(N$1,10),it$3(R,10),it$3(q,8))};static ɵdir=Tr({type:n,selectors:[[`form`,3,`ngNoForm`,``,3,`formGroup`,``,3,`formArray`,``],[`ng-form`],[``,`ngForm`,``]],hostBindings:function(r,i){r&1&&Ed(`submit`,function(a){return i.onSubmit(a)})(`reset`,function(){return i.onReset()})},inputs:{options:[0,`ngFormOptions`,`options`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[db([Kt$1]),AC]})}return n})();function Ge(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}function ke(n){return typeof n==`object`&&n!==null&&Object.keys(n).length===2&&`value`in n&&`disabled`in n}var dt=class extends ee$2{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,r){super(tt$1(e),nt$1(r,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),oe$1(e)&&(e.nonNullable||e.initialValueIsDefault)&&(ke(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){Ue$4(()=>{this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(r=>r(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new O(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Ge(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Ge(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn===`submit`&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){ke(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var Jt$1=n=>n instanceof dt;var en=(()=>{class n extends c{_parent;ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective?.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return ae$1(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}static ɵfac=(()=>{let e;return function(i){return(e||(e=qw(n)))(i||n)}})();static ɵdir=Tr({type:n,standalone:!1,features:[AC]})}return n})();var ct=(()=>{class n extends c{callSetDisabledState;get submitted(){return Ue$4(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=uo(()=>this._submittedReactive());_submittedReactive=Ce$4(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,r,i){super(),this.callSetDisabledState=i,this._setValidators(e),this._setAsyncValidators(r)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){if(!this.form)throw new V$4(1052,!1);Object.hasOwn(e,`form`)&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(ne$1(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let r=this.form.get(e.path);if(!r)throw new V$4(-1055,!1);return e._setupWithForm(r,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),r}getControl(e){return this.form.get(e.path)}removeControl(e){Pe$1(e.control||null,e,!1),Zt$1(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,r){this.form.get(e.path).setValue(r)}onReset(){this.resetForm()}resetForm(e=void 0,r={}){this.form.reset(e,r),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,lt$1(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new J$1(this.control)),e?.target?.method===`dialog`}_updateDomValue(){this.directives.forEach(e=>{let r=e.control,i=this.form.get(e.path);r!==i&&(Pe$1(r||null,e),Jt$1(i)&&e._setupWithForm(i,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let r=this.form.get(e.path);st$1(r,e),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let r=this.form?.get(e.path);r&&zt$1(r,e)&&r.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){De(this.form,this),this._oldForm&&ne$1(this._oldForm,this)}static ɵfac=function(r){return new(r||n)(it$3(N$1,10),it$3(R,10),it$3(q,8))};static ɵdir=Tr({type:n,features:[AC,ao]})}return n})();var tn={provide:c,useExisting:dl(()=>nn)};var nn=(()=>{class n extends ct{form=null;ngSubmit=new Et$3;get control(){return this.form}static ɵfac=(()=>{let e;return function(i){return(e||(e=qw(n)))(i||n)}})();static ɵdir=Tr({type:n,selectors:[[``,`formGroup`,``]],hostBindings:function(r,i){r&1&&Ed(`submit`,function(a){return i.onSubmit(a)})(`reset`,function(){return i.onReset()})},inputs:{form:[0,`formGroup`,`form`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[db([tn]),AC]})}return n})();var rn={provide:V$1,useExisting:dl(()=>on)};var Be=Promise.resolve();var on=(()=>{class n extends V$1{_changeDetectorRef;callSetDisabledState;control=new dt;static ngAcceptInputType_isDisabled;_registered=!1;_ngModelInjector;viewModel;name=``;isDisabled;model;options;update=new Et$3;constructor(e,r,i,o,a,d,m,x){super(m,x,o),this._changeDetectorRef=a,this.callSetDisabledState=d,this._parent=e,this._setValidators(r),this._setAsyncValidators(i)}ngOnChanges(e){if(this._registered,this._checkForErrors(),!this._registered||`name`in e){if(this._registered&&(this._checkName(),this.formDirective)){let r=e.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}`isDisabled`in e&&this._updateDisabled(e),at$1(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}ɵngControlCreate(e){super.ngControlCreate(e)}ɵngControlUpdate(e){super.ngControlUpdate(e,!1)}get shouldBindRequired(){return!1}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,ye$2(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(e){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,ye$2(this.control,this,e))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Be.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let r=e.isDisabled.currentValue,i=r!==0&&wi$1(r);Be.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?ae$1(e,this._parent):[e]}static ɵfac=function(r){return new(r||n)(it$3(c,9),it$3(N$1,10),it$3(R,10),it$3(w,10),it$3(Ns,8),it$3(q,8),it$3(ot$3,8),it$3(so,8))};static ɵdir=Tr({type:n,selectors:[[``,`ngModel`,``,3,`formControlName`,``,3,`formControl`,``]],inputs:{name:`name`,isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`],options:[0,`ngModelOptions`,`options`]},outputs:{update:`ngModelChange`},exportAs:[`ngModel`],standalone:!1,features:[db([rn,ut$1]),AC,ao,uO(null)]})}return n})();var jn=(()=>{class n{static ɵfac=function(r){return new(r||n)};static ɵdir=Tr({type:n,selectors:[[`form`,3,`ngNoForm`,``,3,`ngNativeValidate`,``]],hostAttrs:[`novalidate`,``],standalone:!1})}return n})();var ht$1=new K$3(``);var sn={provide:c,useExisting:dl(()=>pt$1)};var pt$1=(()=>{class n extends en{name=null;constructor(e,r,i){super(),this._parent=e,this._setValidators(r),this._setAsyncValidators(i)}_checkParentType(){gt$1(this._parent)}static ɵfac=function(r){return new(r||n)(it$3(c,13),it$3(N$1,10),it$3(R,10))};static ɵdir=Tr({type:n,selectors:[[``,`formGroupName`,``]],inputs:{name:[0,`formGroupName`,`name`]},standalone:!1,features:[db([sn]),AC]})}return n})();var an={provide:c,useExisting:dl(()=>ft$1)};var ft$1=(()=>{class n extends c{_parent;name=null;constructor(e,r,i){super(),this._parent=e,this._setValidators(r),this._setAsyncValidators(i)}ngOnInit(){gt$1(this._parent),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective?.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return ae$1(this.name==null?this.name:this.name.toString(),this._parent)}static ɵfac=function(r){return new(r||n)(it$3(c,13),it$3(N$1,10),it$3(R,10))};static ɵdir=Tr({type:n,selectors:[[``,`formArrayName`,``]],inputs:{name:[0,`formArrayName`,`name`]},standalone:!1,features:[db([an]),AC]})}return n})();function gt$1(n){return!(n instanceof pt$1)&&!(n instanceof ct)&&!(n instanceof ft$1)}var ln={provide:V$1,useExisting:dl(()=>un)};var un=(()=>{class n extends V$1{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new Et$3;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,r,i,o,a,d,m){super(m,d,o),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(r),this._setAsyncValidators(i)}_setupWithForm(e,r){this.control=e,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,ye$2(e,this,r))}ngOnChanges(e){this._added||this._setUpControl(),at$1(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return ae$1(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}ɵngControlCreate(e){super.ngControlCreate(e)}ɵngControlUpdate(e){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(e,!0))}static ɵfac=function(r){return new(r||n)(it$3(c,13),it$3(N$1,10),it$3(R,10),it$3(w,10),it$3(ht$1,8),it$3(so,8),it$3(ot$3,8))};static ɵdir=Tr({type:n,selectors:[[``,`formControlName`,``]],inputs:{name:[0,`formControlName`,`name`],isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`]},outputs:{update:`ngModelChange`},standalone:!1,features:[db([ln,ut$1]),AC,ao,uO(null)]})}return n})();var dn={provide:w,useExisting:dl(()=>yt$1),multi:!0};function mt(n,t){return n==null?`${t}`:(t&&typeof t==`object`&&(t=`Object`),`${n}: ${t}`.slice(0,50))}function cn(n){return n.split(`:`)[0]}var yt$1=(()=>{class n extends ie$1{value;_optionMap=/* @__PURE__ */ new Map;_idCounter=0;set compareWith(e){this._compareWith=e}_compareWith=Object.is;appRefInjector=N$3(Zn).injector;destroyRef=N$3(Dt$3);cdr=N$3(Ns);_queuedWrite=!1;_writeValueAfterRender(){this._queuedWrite||this.appRefInjector.destroyed||(this._queuedWrite=!0,cm({write:()=>{this.destroyRef.destroyed||(this._queuedWrite=!1,this.writeValue(this.value))}},{injector:this.appRefInjector}))}writeValue(e){this.cdr.markForCheck(),this.value=e;let i=mt(this._getOptionId(e),e);this.setProperty(`value`,i)}registerOnChange(e){this.onChange=r=>{this.value=this._getOptionValue(r),e(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(let r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r),e))return r;return null}_getOptionValue(e){let r=cn(e);return this._optionMap.has(r)?this._optionMap.get(r):e}static ɵfac=(()=>{let e;return function(i){return(e||(e=qw(n)))(i||n)}})();static ɵdir=Tr({type:n,selectors:[[`select`,`formControlName`,``,3,`multiple`,``,3,`ngNoCva`,``],[`select`,`formControl`,``,3,`multiple`,``,3,`ngNoCva`,``],[`select`,`ngModel`,``,3,`multiple`,``,3,`ngNoCva`,``]],hostBindings:function(r,i){r&1&&Ed(`change`,function(a){return i.onChange(a.target.value)})(`blur`,function(){return i.onTouched()})},inputs:{compareWith:`compareWith`},standalone:!1,features:[db([dn]),AC]})}return n})();var Gn=(()=>{class n{_element;_renderer;_select;id;constructor(e,r,i){this._element=e,this._renderer=r,this._select=i,this._select&&(this.id=this._select._registerOption())}set ngValue(e){this._select!=null&&(this._select._optionMap.set(this.id,e),this._setElementValue(mt(this.id,e)),this._select._writeValueAfterRender())}set value(e){this._setElementValue(e),this._select?._writeValueAfterRender()}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,`value`,e)}ngOnDestroy(){this._select?._optionMap.delete(this.id),this._select?._writeValueAfterRender()}static ɵfac=function(r){return new(r||n)(it$3(Xt$1),it$3(so),it$3(yt$1,9))};static ɵdir=Tr({type:n,selectors:[[`option`]],inputs:{ngValue:`ngValue`,value:`value`},standalone:!1})}return n})();var Le=Symbol(`negativeZero`);var hn={provide:w,useExisting:dl(()=>_t$1),multi:!0};function Ue(n,t){return n==null?`${t}`:(typeof t==`string`&&(t=`'${t}'`),t&&typeof t==`object`&&(t=`Object`),`${n}: ${t}`.slice(0,50))}function pn(n){return n.split(`:`)[0]}var _t$1=(()=>{class n extends ie$1{value;_optionMap=/* @__PURE__ */ new Map;_idCounter=0;set compareWith(e){this._compareWith=e}_compareWith=Object.is;writeValue(e){this.value=e;let r;if(Array.isArray(e)){let i=this._getOptionIds(e);r=(o,a)=>{o._setSelected(i.has(a))}}else r=i=>{i._setSelected(!1)};this._optionMap.forEach(r)}registerOnChange(e){this.onChange=r=>{let i=[],o=r.selectedOptions;if(o!==void 0){let a=o;for(let d=0;d<a.length;d++){let m=a[d],x=this._getOptionValue(m.value);i.push(x)}}else{let a=r.options;for(let d=0;d<a.length;d++){let m=a[d];if(m.selected){let x=this._getOptionValue(m.value);i.push(x)}}}this.value=i,e(i)}}_registerOption(e){let r=(this._idCounter++).toString();return this._optionMap.set(r,e),r}_getOptionIds(e){if(this._compareWith!==Object.is||e.length<2)return new Set(e.map(o=>this._getOptionId(o)).filter(o=>o!==null));let r=/* @__PURE__ */ new Set;e.forEach(o=>r.add(o===0&&Object.is(o,-0)?Le:o));let i=/* @__PURE__ */ new Set;for(let[o,a]of this._optionMap){if(r.size===0)break;let d=a._value,m=d===0&&Object.is(d,-0)?Le:d;r.delete(m)&&i.add(o)}return i}_getOptionId(e){for(let r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r)._value,e))return r;return null}_getOptionValue(e){let r=pn(e);return this._optionMap.has(r)?this._optionMap.get(r)._value:e}static ɵfac=(()=>{let e;return function(i){return(e||(e=qw(n)))(i||n)}})();static ɵdir=Tr({type:n,selectors:[[`select`,`multiple`,``,`formControlName`,``,3,`ngNoCva`,``],[`select`,`multiple`,``,`formControl`,``,3,`ngNoCva`,``],[`select`,`multiple`,``,`ngModel`,``,3,`ngNoCva`,``]],hostBindings:function(r,i){r&1&&Ed(`change`,function(a){return i.onChange(a.target)})(`blur`,function(){return i.onTouched()})},inputs:{compareWith:`compareWith`},standalone:!1,features:[db([hn]),AC]})}return n})();var kn=(()=>{class n{_element;_renderer;_select;id;_value;constructor(e,r,i){this._element=e,this._renderer=r,this._select=i,this._select&&(this.id=this._select._registerOption(this))}set ngValue(e){this._select!=null&&(this._value=e,this._setElementValue(Ue(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._select?(this._value=e,this._setElementValue(Ue(this.id,e)),this._select.writeValue(this._select.value)):this._setElementValue(e)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,`value`,e)}_setSelected(e){this._renderer.setProperty(this._element.nativeElement,`selected`,e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static ɵfac=function(r){return new(r||n)(it$3(Xt$1),it$3(so),it$3(_t$1,9))};static ɵdir=Tr({type:n,selectors:[[`option`]],inputs:{ngValue:`ngValue`,value:`value`},standalone:!1})}return n})();var vt=(()=>{class n{static ɵfac=function(r){return new(r||n)};static ɵmod=Sr({type:n});static ɵinj=zn({})}return n})();var Bn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:q,useValue:e.callSetDisabledState??se$1}]}}static ɵfac=function(r){return new(r||n)};static ɵmod=Sr({type:n});static ɵinj=zn({imports:[vt]})}return n})();var Ln=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:ht$1,useValue:e.warnOnNgModelWithFormControl??`always`},{provide:q,useValue:e.callSetDisabledState??se$1}]}}static ɵfac=function(r){return new(r||n)};static ɵmod=Sr({type:n});static ɵinj=zn({imports:[vt]})}return n})();var ue=20;var J=(()=>{class n{_ngZone=N$3(wt$5);_platform=N$3(VQ);_renderer=N$3(hi$1).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new Ge$4;_scrolledCount=0;scrollContainers=/* @__PURE__ */ new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let i=this.scrollContainers.get(t);i&&(i.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=ue){return this._platform.isBrowser?new ye$5(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let o=t>0?this._scrolled.pipe(zA(t)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):he$3()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(t,i){let o=this.getAncestorScrollContainers(t);return this.scrolled(i).pipe(Yt$1(r=>!r||o.indexOf(r)>-1))}getAncestorScrollContainers(t){let i=[];return this.scrollContainers.forEach((o,r)=>{this._targetContainsElement(r,t)&&i.push(r)}),i}_targetContainsElement(t,i){let o=GQ(i),r=t.getElementRef().nativeElement;do if(o==r)return!0;while(o=o.parentElement);return!1}static ɵfac=function(i){return new(i||n)};static ɵprov=_e$5({token:n,factory:n.ɵfac})}return n})();var ci=(()=>{class n{elementRef=N$3(Xt$1);scrollDispatcher=N$3(J);ngZone=N$3(wt$5);dir=N$3(TF,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new Ge$4;_renderer=N$3(so);_cleanupScroll;_elementScrolled=new Ge$4;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,`scroll`,t=>this._elementScrolled.next(t))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){let i=this.elementRef.nativeElement,o=this.dir&&this.dir.value==`rtl`;t.left??=o?t.end:t.start,t.right??=o?t.start:t.end,t.bottom!=null&&(t.top=i.scrollHeight-i.clientHeight-t.bottom),o&&nX()!=Yc.NORMAL?(t.left!=null&&(t.right=i.scrollWidth-i.clientWidth-t.left),nX()==Yc.INVERTED?t.left=t.right:nX()==Yc.NEGATED&&(t.left=t.right?-t.right:t.right)):t.right!=null&&(t.left=i.scrollWidth-i.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){let i=this.elementRef.nativeElement;tX()?i.scrollTo(t):(t.top!=null&&(i.scrollTop=t.top),t.left!=null&&(i.scrollLeft=t.left))}measureScrollOffset(t){let i=`left`,o=`right`,r=this.elementRef.nativeElement;if(t==`top`)return r.scrollTop;if(t==`bottom`)return r.scrollHeight-r.clientHeight-r.scrollTop;let s=this.dir&&this.dir.value==`rtl`;return t==`start`?t=s?o:i:t==`end`&&(t=s?i:o),s&&nX()==Yc.INVERTED?t==i?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:s&&nX()==Yc.NEGATED?t==i?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:t==i?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}static ɵfac=function(i){return new(i||n)};static ɵdir=Tr({type:n,selectors:[[``,`cdk-scrollable`,``],[``,`cdkScrollable`,``]]})}return n})();var pe=20;var N=(()=>{class n{_platform=N$3(VQ);_listeners;_viewportSize=null;_change=new Ge$4;_document=N$3(Ne$2);constructor(){let t=N$3(wt$5),i=N$3(hi$1).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[i.listen(`window`,`resize`,o),i.listen(`window`,`orientationchange`,o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:i,height:o}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+o,right:t.left+i,height:o,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,i=this._getWindow(),o=t.documentElement,r=o.getBoundingClientRect();return{top:-r.top||t.body?.scrollTop||i.scrollY||o.scrollTop||0,left:-r.left||t.body?.scrollLeft||i.scrollX||o.scrollLeft||0}}change(t=pe){return t>0?this._change.pipe(zA(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static ɵfac=function(i){return new(i||n)};static ɵprov=_e$5({token:n,factory:n.ɵfac})}return n})();var Ht$1=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Sr({type:n});static ɵinj=zn({})}return n})();var wt$1=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Sr({type:n});static ɵinj=zn({imports:[bT,Ht$1,bT,Ht$1]})}return n})();var W=class{_attachedHost=null;attach(e){return this._attachedHost=e,e.attach(this)}detach(){let e=this._attachedHost;e!=null&&(this._attachedHost=null,e.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(e){this._attachedHost=e}};var bt$1=class extends W{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(e,t,i,o,r,s){super(),this.component=e,this.viewContainerRef=t,this.injector=i,this.projectableNodes=o,this.bindings=r||null,this.directives=s||null}};var Y=class extends W{templateRef;viewContainerRef;context;injector;constructor(e,t,i,o){super(),this.templateRef=e,this.viewContainerRef=t,this.context=i,this.injector=o}get origin(){return this.templateRef.elementRef}attach(e,t=this.context){return this.context=t,super.attach(e)}detach(){return this.context=void 0,super.detach()}};var Ct$1=class extends W{element;constructor(e){super(),this.element=e instanceof Xt$1?e.nativeElement:e}};var tt=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(e){if(e instanceof bt$1)return this._attachedPortal=e,this.attachComponentPortal(e);if(e instanceof Y)return this._attachedPortal=e,this.attachTemplatePortal(e);if(this.attachDomPortal&&e instanceof Ct$1)return this._attachedPortal=e,this.attachDomPortal(e)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(e){this._disposeFn=e}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var et=class extends tt{outletElement;_appRef;_defaultInjector;constructor(e,t,i){super(),this.outletElement=e,this._appRef=t,this._defaultInjector=i}attachComponentPortal(e){let t;if(e.viewContainerRef){let i=e.injector||e.viewContainerRef.injector,o=i.get(gi$1,null,{optional:!0})||void 0;t=e.viewContainerRef.createComponent(e.component,{index:e.viewContainerRef.length,injector:i,ngModuleRef:o,projectableNodes:e.projectableNodes||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0}),this.setDisposeFn(()=>t.destroy())}else{let i=this._appRef,o=e.injector||this._defaultInjector||ot$3.NULL,r=o.get(Ke$4,i.injector);t=xb(e.component,{elementInjector:o,environmentInjector:r,projectableNodes:e.projectableNodes||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0}),i.attachView(t.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=e,t}attachTemplatePortal(e){let t=e.viewContainerRef,i=t.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return i.rootNodes.forEach(o=>this.outletElement.appendChild(o)),i.detectChanges(),this.setDisposeFn(()=>{let o=t.indexOf(i);o!==-1&&t.remove(o)}),this._attachedPortal=e,i}attachDomPortal=e=>{let t=e.element;t.parentNode;let i=this.outletElement.ownerDocument.createComment(`dom-portal`);t.parentNode.insertBefore(i,t),this.outletElement.appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(t,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(e){return e.hostView.rootNodes[0]}};var _i$1=(()=>{class n extends tt{_moduleRef=N$3(gi$1,{optional:!0});_document=N$3(Ne$2);_viewContainerRef=N$3(co);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}attached=new Et$3;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let i=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,o=i.createComponent(t.component,{index:i.length,injector:t.injector||i.injector,projectableNodes:t.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0});return i!==this._viewContainerRef&&this._insertContent(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=t,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(t){t.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=t=>{let i=t.element;i.parentNode;let o=this._document.createComment(`dom-portal`);t.setAttachedHost(this),i.parentNode.insertBefore(o,i),this._insertContent(i),this._attachedPortal=t,super.setDisposeFn(()=>o.parentNode?.replaceChild(i,o))};_insertContent(t){let i=this._viewContainerRef.element.nativeElement;i.nodeType===i.ELEMENT_NODE?i.appendChild(t):i.parentNode?.insertBefore(t,i)}static ɵfac=(()=>{let t;return function(o){return(t||(t=qw(n)))(o||n)}})();static ɵdir=Tr({type:n,selectors:[[``,`cdkPortalOutlet`,``]],inputs:{portal:[0,`cdkPortalOutlet`,`portal`]},outputs:{attached:`attached`},exportAs:[`cdkPortalOutlet`],features:[AC]})}return n})();var Ut$1=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Sr({type:n});static ɵinj=zn({})}return n})();var Zt=tX();function te(n){return new it(n.get(N),n.get(Ne$2))}var it=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(e,t){this._viewportRuler=e,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let e=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=e.style.left||``,this._previousHTMLStyles.top=e.style.top||``,e.style.left=sX(-this._previousScrollPosition.left),e.style.top=sX(-this._previousScrollPosition.top),e.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let e=this._document.documentElement,t=this._document.body,i=e.style,o=t.style,r=i.scrollBehavior||``,s=o.scrollBehavior||``;this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,e.classList.remove(`cdk-global-scrollblock`),Zt&&(i.scrollBehavior=o.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Zt&&(i.scrollBehavior=r,o.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let t=this._document.documentElement,i=this._viewportRuler.getViewportSize();return t.scrollHeight>i.height||t.scrollWidth>i.width}};function ee$1(n,e){return new nt(n.get(J),n.get(wt$5),n.get(N),e)}var nt=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(e,t,i,o){this._scrollDispatcher=e,this._ngZone=t,this._viewportRuler=i,this._config=o}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(this._scrollSubscription)return;let e=this._scrollDispatcher.scrolled(0).pipe(Yt$1(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=e.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=e.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var H=class{enable(){}disable(){}attach(){}};function St$1(n,e){return e.some(t=>{let i=n.bottom<t.top,o=n.top>t.bottom,r=n.right<t.left,s=n.left>t.right;return i||o||r||s})}function Gt(n,e){return e.some(t=>{let i=n.top<t.top,o=n.bottom>t.bottom,r=n.left<t.left,s=n.right>t.right;return i||o||r||s})}function xt$1(n,e){return new ot(n.get(J),n.get(N),n.get(wt$5),e)}var ot=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(e,t,i,o){this._scrollDispatcher=e,this._viewportRuler=t,this._ngZone=i,this._config=o}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(!this._scrollSubscription){let e=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(e).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:o}=this._viewportRuler.getViewportSize();St$1(t,[{width:i,height:o,bottom:o,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var ie=(()=>{class n{_injector=N$3(ot$3);noop=()=>new H;close=t=>ee$1(this._injector,t);block=()=>te(this._injector);reposition=t=>xt$1(this._injector,t);static ɵfac=function(i){return new(i||n)};static ɵprov=_e$5({token:n,factory:n.ɵfac})}return n})();var X=class{positionStrategy;scrollStrategy=new H;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(e){if(e){let t=Object.keys(e);for(let i of t)e[i]!==void 0&&(this[i]=e[i])}}};var rt=class{connectionPair;scrollableViewProperties;constructor(e,t){this.connectionPair=e,this.scrollableViewProperties=t}};var ne=(()=>{class n{_attachedOverlays=[];_document=N$3(Ne$2);_isAttached=!1;ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let i=this._attachedOverlays.indexOf(t);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,i,o){return o.observers.length<1?!1:t.eventPredicate?t.eventPredicate(i):!0}static ɵfac=function(i){return new(i||n)};static ɵprov=_e$5({token:n,factory:n.ɵfac})}return n})();var oe=(()=>{class n extends ne{_ngZone=N$3(wt$5);_renderer=N$3(hi$1).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let i=this._attachedOverlays;for(let o=i.length-1;o>-1;o--){let r=i[o];if(this.canReceiveEvent(r,t,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(t));break}}};static ɵfac=function(i){return new(i||n)};static ɵprov=_e$5({token:n,factory:n.ɵfac})}return n})();var re=(()=>{class n extends ne{_platform=N$3(VQ);_ngZone=N$3(wt$5);_renderer=N$3(hi$1).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let i=this._document.body,o={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(i,`pointerdown`,this._pointerDownListener,o),r.listen(i,`click`,this._clickListener,o),r.listen(i,`auxclick`,this._clickListener,o),r.listen(i,`contextmenu`,this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=FQ(t)};_clickListener=t=>{let i=FQ(t),o=t.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let s=r.length-1;s>-1;s--){let a=r[s],h=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,t,h))){if($t(a.overlayElement,i)||$t(a.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>h.next(t)):h.next(t)}}};static ɵfac=function(i){return new(i||n)};static ɵprov=_e$5({token:n,factory:n.ɵfac})}return n})();function $t(n,e){let t=typeof ShadowRoot<`u`&&ShadowRoot,i=e;for(;i;){if(i===n)return!0;i=t&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var se=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Ei$1({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(i,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2})}return n})();var ae=(()=>{class n{_platform=N$3(VQ);_containerElement;_document=N$3(Ne$2);_styleLoader=N$3(EF);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=`cdk-overlay-container`;if(this._platform.isBrowser||oX()){let o=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let r=0;r<o.length;r++)o[r].remove()}let i=this._document.createElement(`div`);i.classList.add(t),oX()?i.setAttribute(`platform`,`test`):this._platform.isBrowser||i.setAttribute(`platform`,`server`),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(se)}static ɵfac=function(i){return new(i||n)};static ɵprov=_e$5({token:n,factory:n.ɵfac})}return n})();var Ot=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(e,t,i,o){this._renderer=t,this._ngZone=i,this.element=e.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=t.listen(this.element,`click`,o)}detach(){this._ngZone.runOutsideAngular(()=>{let e=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(e,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),e.style.pointerEvents=`none`,e.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Pt(n){return n&&n.nodeType===1}var kt$1=Ce$4([]);var st=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new Ge$4;_attachments=new Ge$4;_detachments=new Ge$4;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new Ge$4;_outsidePointerEvents=new Ge$4;_afterNextRenderRef;constructor(e,t,i,o,r,s,a,h,u,c=!1,d,f){this._portalOutlet=e,this._host=t,this._pane=i,this._config=o,this._ngZone=r,this._keyboardDispatcher=s,this._document=a,this._location=h,this._outsideClickDispatcher=u,this._animationsDisabled=c,this._injector=d,this._renderer=f,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(e){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(e);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),Ue$4(()=>{kt$1.update(i=>i.includes(this)?i:[...i,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=cm(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation===`pop-state`){let i=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>i.unsubscribe()}else this._config.disposeOnNavigation===`url-change`&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof t?.onDestroy==`function`&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let e=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),Ue$4(()=>{kt$1.update(t=>t.filter(i=>i!==this))}),e}dispose(){if(this._disposed)return;let e=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,e&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,Ue$4(()=>{kt$1.update(t=>t.filter(i=>i!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(e){e!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=e,this.hasAttached()&&(e.attach(this),this.updatePosition()))}updateSize(e){this._config=r$1(r$1({},this._config),e),this._updateElementSize()}setDirection(e){this._config=s$1(r$1({},this._config),{direction:e}),this._updateElementDirection()}addPanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!0)}removePanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!1)}getDirection(){let e=this._config.direction;return e?typeof e==`string`?e:e.value:`ltr`}updateScrollStrategy(e){e!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=e,this.hasAttached()&&(e.attach(this),e.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let e=this._pane.style;e.width=sX(this._config.width),e.height=sX(this._config.height),e.minWidth=sX(this._config.minWidth),e.minHeight=sX(this._config.minHeight),e.maxWidth=sX(this._config.maxWidth),e.maxHeight=sX(this._config.maxHeight)}_togglePointerEvents(e){this._pane.style.pointerEvents=e?``:`none`}_attachHost(){if(!this._host.parentElement){let e=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Pt(e)?e.after(this._host):e?.type===`parent`?e.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let e=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new Ot(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(e))}):this._backdropRef.element.classList.add(e)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(e,t,i){let o=KQ(t||[]).filter(r=>!!r);o.length&&(i?e.classList.add(...o):e.classList.remove(...o))}_detachContentWhenEmpty(){let e=!1;try{this._detachContentAfterRenderRef=cm(()=>{e=!0,this._detachContent()},{injector:this._injector})}catch(t){if(e)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let e=this._scrollStrategy;e?.disable(),e?.detach?.()}};var Kt=`cdk-overlay-connected-position-bounding-box`;var fe=/([A-Za-z%]+)$/;function Et(n,e){return new at(e,n.get(N),n.get(Ne$2),n.get(VQ),n.get(ae))}var at=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new Ge$4;_resizeSubscription=Qe$4.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(e,t,i,o,r){this._viewportRuler=t,this._document=i,this._platform=o,this._overlayContainer=r,this.setOrigin(e)}attach(e){this._overlayRef&&this._overlayRef,this._validatePositions(),e.hostElement.classList.add(Kt),this._overlayRef=e,this._boundingBox=e.hostElement,this._pane=e.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let e=this._originRect,t=this._overlayRect,i=this._viewportRect,o=this._containerRect,r=[],s;for(let a of this._preferredPositions){let h=this._getOriginPoint(e,o,a),u=this._getOverlayPoint(h,t,a),c=this._getOverlayFit(u,t,i,a);if(c.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,h);return}if(this._canFitWithFlexibleDimensions(c,u,i)){r.push({position:a,origin:h,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(h,a)});continue}(!s||s.overlayFit.visibleArea<c.visibleArea)&&(s={overlayFit:c,overlayPoint:u,originPoint:h,position:a,overlayRect:t})}if(r.length){let a=null,h=-1;for(let u of r){let c=u.boundingBoxRect.width*u.boundingBoxRect.height*(u.position.weight||1);c>h&&(h=c,a=u)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&V(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Kt),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let e=this._lastPosition;e?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(e,this._getOriginPoint(this._originRect,this._containerRect,e))):this.apply()}withScrollableContainers(e){return this._scrollables=e,this}withPositions(e){return this._preferredPositions=e,e.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(e){return this._viewportMargin=e,this}withFlexibleDimensions(e=!0){return this._hasFlexibleDimensions=e,this}withGrowAfterOpen(e=!0){return this._growAfterOpen=e,this}withPush(e=!0){return this._canPush=e,this}withLockedPosition(e=!0){return this._positionLocked=e,this}setOrigin(e){return this._origin=e,this}withDefaultOffsetX(e){return this._offsetX=e,this}withDefaultOffsetY(e){return this._offsetY=e,this}withTransformOriginOn(e){return this._transformOriginSelector=e,this}withPopoverLocation(e){return this._popoverLocation=e,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof Xt$1?this._origin.nativeElement:Pt(this._origin)?this._origin:null}_getOriginPoint(e,t,i){let o;if(i.originX==`center`)o=e.left+e.width/2;else{let s=this._isRtl()?e.right:e.left,a=this._isRtl()?e.left:e.right;o=i.originX==`start`?s:a}t.left<0&&(o-=t.left);let r;return i.originY==`center`?r=e.top+e.height/2:r=i.originY==`top`?e.top:e.bottom,t.top<0&&(r-=t.top),{x:o,y:r}}_getOverlayPoint(e,t,i){let o;i.overlayX==`center`?o=-t.width/2:i.overlayX===`start`?o=this._isRtl()?-t.width:0:o=this._isRtl()?0:-t.width;let r;return i.overlayY==`center`?r=-t.height/2:r=i.overlayY==`top`?0:-t.height,{x:e.x+o,y:e.y+r}}_getOverlayFit(e,t,i,o){let r=Qt(t),{x:s,y:a}=e,h=this._getOffset(o,`x`),u=this._getOffset(o,`y`);h&&(s+=h),u&&(a+=u);let c=0-s,d=s+r.width-i.width,f=0-a,_=a+r.height-i.height,g=this._subtractOverflows(r.width,c,d),w=this._subtractOverflows(r.height,f,_),Vt=g*w;return{visibleArea:Vt,isCompletelyWithinViewport:r.width*r.height===Vt,fitsInViewportVertically:w===r.height,fitsInViewportHorizontally:g==r.width}}_canFitWithFlexibleDimensions(e,t,i){if(this._hasFlexibleDimensions){let o=i.bottom-t.y,r=i.right-t.x,s=qt(this._overlayRef.getConfig().minHeight),a=qt(this._overlayRef.getConfig().minWidth),h=e.fitsInViewportVertically||s!=null&&s<=o,u=e.fitsInViewportHorizontally||a!=null&&a<=r;return h&&u}return!1}_pushOverlayOnScreen(e,t,i){if(this._previousPushAmount&&this._positionLocked)return{x:e.x+this._previousPushAmount.x,y:e.y+this._previousPushAmount.y};let o=Qt(t),r=this._viewportRect,s=Math.max(e.x+o.width-r.width,0),a=Math.max(e.y+o.height-r.height,0),h=Math.max(r.top-i.top-e.y,0),u=Math.max(r.left-i.left-e.x,0),c=0,d=0;return o.width<=r.width?c=u||-s:c=e.x<this._getViewportMarginStart()?r.left-i.left-e.x:0,o.height<=r.height?d=h||-a:d=e.y<this._getViewportMarginTop()?r.top-i.top-e.y:0,this._previousPushAmount={x:c,y:d},{x:e.x+c,y:e.y+d}}_applyPosition(e,t){if(this._setTransformOrigin(e),this._setOverlayElementStyles(t,e),this._setBoundingBoxStyles(t,e),e.panelClass&&this._addPanelClasses(e.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(e!==this._lastPosition||!this._lastScrollVisibility||!ge(this._lastScrollVisibility,i)){let o=new rt(e,i);this._positionChanges.next(o)}this._lastScrollVisibility=i}this._lastPosition=e,this._isInitialRender=!1}_setTransformOrigin(e){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,o=e.overlayY;e.overlayX===`center`?i=`center`:this._isRtl()?i=e.overlayX===`start`?`right`:`left`:i=e.overlayX===`start`?`left`:`right`;for(let r=0;r<t.length;r++)t[r].style.transformOrigin=`${i} ${o}`}_calculateBoundingBoxRect(e,t){let i=this._viewportRect,o=this._isRtl(),r,s,a;if(t.overlayY===`top`)s=e.y,r=i.height-s+this._getViewportMarginBottom();else if(t.overlayY===`bottom`)a=i.height-e.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=i.height-a+this._getViewportMarginTop();else{let _=Math.min(i.bottom-e.y+i.top,e.y),g=this._lastBoundingBoxSize.height;r=_*2,s=e.y-_,r>g&&!this._isInitialRender&&!this._growAfterOpen&&(s=e.y-g/2)}let h=t.overlayX===`start`&&!o||t.overlayX===`end`&&o,u=t.overlayX===`end`&&!o||t.overlayX===`start`&&o,c,d,f;if(u)f=i.width-e.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),c=e.x-this._getViewportMarginStart();else if(h)d=e.x,c=i.right-e.x-this._getViewportMarginEnd();else{let _=Math.min(i.right-e.x+i.left,e.x),g=this._lastBoundingBoxSize.width;c=_*2,d=e.x-_,c>g&&!this._isInitialRender&&!this._growAfterOpen&&(d=e.x-g/2)}return{top:s,left:d,bottom:a,right:f,width:c,height:r}}_setBoundingBoxStyles(e,t){let i=this._calculateBoundingBoxRect(e,t);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left=`0`,o.bottom=o.right=`auto`,o.maxHeight=o.maxWidth=``,o.width=o.height=`100%`;else{let r=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;o.width=sX(i.width),o.height=sX(i.height),o.top=sX(i.top)||`auto`,o.bottom=sX(i.bottom)||`auto`,o.left=sX(i.left)||`auto`,o.right=sX(i.right)||`auto`,t.overlayX===`center`?o.alignItems=`center`:o.alignItems=t.overlayX===`end`?`flex-end`:`flex-start`,t.overlayY===`center`?o.justifyContent=`center`:o.justifyContent=t.overlayY===`bottom`?`flex-end`:`flex-start`,r&&(o.maxHeight=sX(r)),s&&(o.maxWidth=sX(s))}this._lastBoundingBoxSize=i,V(this._boundingBox.style,o)}_resetBoundingBoxStyles(){V(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){V(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(e,t){let i={},o=this._hasExactPosition(),r=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(o){let c=this._viewportRuler.getViewportScrollPosition();V(i,this._getExactOverlayY(t,e,c)),V(i,this._getExactOverlayX(t,e,c))}else i.position=`static`;let a=``,h=this._getOffset(t,`x`),u=this._getOffset(t,`y`);h&&(a+=`translateX(${h}px) `),u&&(a+=`translateY(${u}px)`),i.transform=a.trim(),s.maxHeight&&(o?i.maxHeight=sX(s.maxHeight):r&&(i.maxHeight=``)),s.maxWidth&&(o?i.maxWidth=sX(s.maxWidth):r&&(i.maxWidth=``)),V(this._pane.style,i)}_getExactOverlayY(e,t,i){let o={top:``,bottom:``},r=this._getOverlayPoint(t,this._overlayRect,e);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,i)),e.overlayY===`bottom`)o.bottom=`${this._document.documentElement.clientHeight-(r.y+this._overlayRect.height)}px`;else o.top=sX(r.y);return o}_getExactOverlayX(e,t,i){let o={left:``,right:``},r=this._getOverlayPoint(t,this._overlayRect,e);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,i));let s;if(this._isRtl()?s=e.overlayX===`end`?`left`:`right`:s=e.overlayX===`end`?`right`:`left`,s===`right`)o.right=`${this._document.documentElement.clientWidth-(r.x+this._overlayRect.width)}px`;else o.left=sX(r.x);return o}_getScrollVisibility(){let e=this._getOriginRect(),t=this._pane.getBoundingClientRect(),i=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Gt(e,i),isOriginOutsideView:St$1(e,i),isOverlayClipped:Gt(t,i),isOverlayOutsideView:St$1(t,i)}}_subtractOverflows(e,...t){return t.reduce((i,o)=>i-Math.max(o,0),e)}_getNarrowedViewportRect(){let e=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+e-this._getViewportMarginEnd(),bottom:i.top+t-this._getViewportMarginBottom(),width:e-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(e,t){return t===`x`?e.offsetX==null?this._offsetX:e.offsetX:e.offsetY==null?this._offsetY:e.offsetY}_validatePositions(){}_addPanelClasses(e){this._pane&&KQ(e).forEach(t=>{t!==``&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(e=>{this._pane.classList.remove(e)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let e=this._origin;if(e instanceof Xt$1)return e.nativeElement.getBoundingClientRect();if(e instanceof Element)return e.getBoundingClientRect();let t=e.width||0,i=e.height||0;return{top:e.y,bottom:e.y+i,left:e.x,right:e.x+t,height:i,width:t}}_getContainerRect(){let e=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,t=this._overlayContainer.getContainerElement();e&&(t.style.display=`block`);let i=t.getBoundingClientRect();return e&&(t.style.display=``),i}};function V(n,e){for(let t in e)Object.hasOwn(e,t)&&(n[t]=e[t]);return n}function qt(n){if(typeof n!=`number`&&n!=null){let[e,t]=n.split(fe);return!t||t===`px`?parseFloat(e):null}return n||null}function Qt(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function ge(n,e){return n===e?!0:n.isOriginClipped===e.isOriginClipped&&n.isOriginOutsideView===e.isOriginOutsideView&&n.isOverlayClipped===e.isOverlayClipped&&n.isOverlayOutsideView===e.isOverlayOutsideView}var Jt=`cdk-global-overlay-wrapper`;function le$1(n){return new lt}var lt=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(e){let t=e.getConfig();this._overlayRef=e,this._width&&!t.width&&e.updateSize({width:this._width}),this._height&&!t.height&&e.updateSize({height:this._height}),e.hostElement.classList.add(Jt),this._isDisposed=!1}top(e=``){return this._bottomOffset=``,this._topOffset=e,this._alignItems=`flex-start`,this}left(e=``){return this._xOffset=e,this._xPosition=`left`,this}bottom(e=``){return this._topOffset=``,this._bottomOffset=e,this._alignItems=`flex-end`,this}right(e=``){return this._xOffset=e,this._xPosition=`right`,this}start(e=``){return this._xOffset=e,this._xPosition=`start`,this}end(e=``){return this._xOffset=e,this._xPosition=`end`,this}width(e=``){return this._overlayRef?this._overlayRef.updateSize({width:e}):this._width=e,this}height(e=``){return this._overlayRef?this._overlayRef.updateSize({height:e}):this._height=e,this}centerHorizontally(e=``){return this.left(e),this._xPosition=`center`,this}centerVertically(e=``){return this.top(e),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,{width:o,height:r,maxWidth:s,maxHeight:a}=this._overlayRef.getConfig(),h=(o===`100%`||o===`100vw`)&&(!s||s===`100%`||s===`100vw`),u=(r===`100%`||r===`100vh`)&&(!a||a===`100%`||a===`100vh`),c=this._xPosition,d=this._xOffset,f=this._overlayRef.getConfig().direction===`rtl`,_=``,g=``,w=``;h?w=`flex-start`:c===`center`?(w=`center`,f?g=d:_=d):f?c===`left`||c===`end`?(w=`flex-end`,_=d):(c===`right`||c===`start`)&&(w=`flex-start`,g=d):c===`left`||c===`start`?(w=`flex-start`,_=d):(c===`right`||c===`end`)&&(w=`flex-end`,g=d),e.position=this._cssPosition,e.marginLeft=h?`0`:_,e.marginTop=u?`0`:this._topOffset,e.marginBottom=this._bottomOffset,e.marginRight=h?`0`:g,t.justifyContent=w,t.alignItems=u?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,i=t.style;t.classList.remove(Jt),i.justifyContent=i.alignItems=e.marginTop=e.marginBottom=e.marginLeft=e.marginRight=e.position=``,this._overlayRef=null,this._isDisposed=!0}};var ce=(()=>{class n{_injector=N$3(ot$3);global(){return le$1()}flexibleConnectedTo(t){return Et(this._injector,t)}static ɵfac=function(i){return new(i||n)};static ɵprov=_e$5({token:n,factory:n.ɵfac})}return n})();var Dt$1=new K$3(`OVERLAY_DEFAULT_CONFIG`);function Mt$1(n,e){n.get(EF).load(se);let t=n.get(ae),i=n.get(Ne$2),o=n.get(P_),r=n.get(Zn),s=n.get(TF),a=n.get(so,null,{optional:!0})||n.get(hi$1).createRenderer(null,null),h=new X(e),u=n.get(Dt$1,null,{optional:!0})?.usePopover??!0;h.direction=h.direction||s.value,!i.body||!(`showPopover`in i.body)?h.usePopover=!1:h.usePopover=e?.usePopover??u;let c=i.createElement(`div`),d=i.createElement(`div`);c.id=o.getId(`cdk-overlay-`),c.classList.add(`cdk-overlay-pane`),d.appendChild(c),h.usePopover&&(d.setAttribute(`popover`,`manual`),d.classList.add(`cdk-overlay-popover`));let f=h.usePopover?h.positionStrategy?.getPopoverInsertionPoint?.():null;return Pt(f)?f.after(d):f?.type===`parent`?f.element.appendChild(d):t.getContainerElement().appendChild(d),new st(new et(c,r,n),d,c,h,n.get(wt$5),n.get(oe),i,n.get(Ii),n.get(re),e?.disableAnimations??n.get(OM,null,{optional:!0})===`NoopAnimations`,n.get(Ke$4),a)}var he=(()=>{class n{scrollStrategies=N$3(ie);_positionBuilder=N$3(ce);_injector=N$3(ot$3);create(t){return Mt$1(this._injector,t)}position(){return this._positionBuilder}static ɵfac=function(i){return new(i||n)};static ɵprov=_e$5({token:n,factory:n.ɵfac})}return n})();var _e$1=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}];var ve$1=new K$3(`cdk-connected-overlay-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=N$3(ot$3);return()=>xt$1(n)}});var Rt=(()=>{class n{elementRef=N$3(Xt$1);static ɵfac=function(i){return new(i||n)};static ɵdir=Tr({type:n,selectors:[[``,`cdk-overlay-origin`,``],[``,`overlay-origin`,``],[``,`cdkOverlayOrigin`,``]],exportAs:[`cdkOverlayOrigin`]})}return n})();var de=new K$3(`cdk-connected-overlay-default-config`);var ye$1=(()=>{class n{_dir=N$3(TF,{optional:!0});_injector=N$3(ot$3);_overlayRef;_templatePortal;_backdropSubscription=Qe$4.EMPTY;_attachSubscription=Qe$4.EMPTY;_detachSubscription=Qe$4.EMPTY;_positionSubscription=Qe$4.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=N$3(ve$1);_ngZone=N$3(wt$5);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(t){this._offsetX=t,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(t){this._offsetY=t,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(t){typeof t!=`string`&&this._assignConfig(t)}backdropClick=new Et$3;positionChange=new Et$3;attach=new Et$3;detach=new Et$3;overlayKeydown=new Et$3;overlayOutsideClick=new Et$3;constructor(){let t=N$3(Ds),i=N$3(co),o=N$3(de,{optional:!0}),r=N$3(Dt$1,{optional:!0});this.usePopover=r?.usePopover===!1?null:`global`,this._templatePortal=new Y(t,i),this.scrollStrategy=this._scrollStrategyFactory(),o&&this._assignConfig(o)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:`ltr`}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(t){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),t.origin&&this.open&&this._position.apply()),t.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=_e$1);let t=this._overlayRef=Mt$1(this._injector,this._buildConfig());this._attachSubscription=t.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=t.detachments().subscribe(()=>this.detach.emit()),t.keydownEvents().subscribe(i=>{this.overlayKeydown.next(i),i.keyCode===27&&!this.disableClose&&!ZQ(i)&&(i.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(i=>{let o=this._getOriginElement(),r=FQ(i);(!o||o!==r&&!o.contains(r))&&this.overlayOutsideClick.next(i)})}_buildConfig(){let t=this._position=this.positionStrategy||this._createPositionStrategy(),i=new X({direction:this._dir||`ltr`,positionStrategy:t,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(i.height=this.height),(this.minWidth||this.minWidth===0)&&(i.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(i.minHeight=this.minHeight),this.backdropClass&&(i.backdropClass=this.backdropClass),this.panelClass&&(i.panelClass=this.panelClass),i}_updatePositionStrategy(t){let i=this.positions.map(o=>({originX:o.originX,originY:o.originY,overlayX:o.overlayX,overlayY:o.overlayY,offsetX:o.offsetX||this.offsetX,offsetY:o.offsetY||this.offsetY,panelClass:o.panelClass||void 0}));return t.setOrigin(this._getOrigin()).withPositions(i).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?`global`:this.usePopover)}_createPositionStrategy(){let t=Et(this._injector,this._getOrigin());return this._updatePositionStrategy(t),t}_getOrigin(){return this.origin instanceof Rt?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Rt?this.origin.elementRef.nativeElement:this.origin instanceof Xt$1?this.origin.nativeElement:typeof Element<`u`&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let t=this._overlayRef;t.getConfig().hasBackdrop=this.hasBackdrop,t.updateSize({width:this._getWidth()}),t.hasAttached()||t.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=t.backdropClick().subscribe(i=>this.backdropClick.emit(i)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(XA(()=>this.positionChange.observers.length>0)).subscribe(i=>{this._ngZone.run(()=>this.positionChange.emit(i)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(t){this.origin=t.origin??this.origin,this.positions=t.positions??this.positions,this.positionStrategy=t.positionStrategy??this.positionStrategy,this.offsetX=t.offsetX??this.offsetX,this.offsetY=t.offsetY??this.offsetY,this.width=t.width??this.width,this.height=t.height??this.height,this.minWidth=t.minWidth??this.minWidth,this.minHeight=t.minHeight??this.minHeight,this.backdropClass=t.backdropClass??this.backdropClass,this.panelClass=t.panelClass??this.panelClass,this.viewportMargin=t.viewportMargin??this.viewportMargin,this.scrollStrategy=t.scrollStrategy??this.scrollStrategy,this.disableClose=t.disableClose??this.disableClose,this.transformOriginSelector=t.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=t.hasBackdrop??this.hasBackdrop,this.lockPosition=t.lockPosition??this.lockPosition,this.flexibleDimensions=t.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=t.growAfterOpen??this.growAfterOpen,this.push=t.push??this.push,this.disposeOnNavigation=t.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=t.usePopover??this.usePopover,this.matchWidth=t.matchWidth??this.matchWidth}static ɵfac=function(i){return new(i||n)};static ɵdir=Tr({type:n,selectors:[[``,`cdk-connected-overlay`,``],[``,`connected-overlay`,``],[``,`cdkConnectedOverlay`,``]],inputs:{origin:[0,`cdkConnectedOverlayOrigin`,`origin`],positions:[0,`cdkConnectedOverlayPositions`,`positions`],positionStrategy:[0,`cdkConnectedOverlayPositionStrategy`,`positionStrategy`],offsetX:[0,`cdkConnectedOverlayOffsetX`,`offsetX`],offsetY:[0,`cdkConnectedOverlayOffsetY`,`offsetY`],width:[0,`cdkConnectedOverlayWidth`,`width`],height:[0,`cdkConnectedOverlayHeight`,`height`],minWidth:[0,`cdkConnectedOverlayMinWidth`,`minWidth`],minHeight:[0,`cdkConnectedOverlayMinHeight`,`minHeight`],backdropClass:[0,`cdkConnectedOverlayBackdropClass`,`backdropClass`],panelClass:[0,`cdkConnectedOverlayPanelClass`,`panelClass`],viewportMargin:[0,`cdkConnectedOverlayViewportMargin`,`viewportMargin`],scrollStrategy:[0,`cdkConnectedOverlayScrollStrategy`,`scrollStrategy`],open:[0,`cdkConnectedOverlayOpen`,`open`],disableClose:[0,`cdkConnectedOverlayDisableClose`,`disableClose`],transformOriginSelector:[0,`cdkConnectedOverlayTransformOriginOn`,`transformOriginSelector`],hasBackdrop:[2,`cdkConnectedOverlayHasBackdrop`,`hasBackdrop`,wi$1],lockPosition:[2,`cdkConnectedOverlayLockPosition`,`lockPosition`,wi$1],flexibleDimensions:[2,`cdkConnectedOverlayFlexibleDimensions`,`flexibleDimensions`,wi$1],growAfterOpen:[2,`cdkConnectedOverlayGrowAfterOpen`,`growAfterOpen`,wi$1],push:[2,`cdkConnectedOverlayPush`,`push`,wi$1],disposeOnNavigation:[2,`cdkConnectedOverlayDisposeOnNavigation`,`disposeOnNavigation`,t=>t===`url-change`||t===`pop-state`?t:wi$1(t)],usePopover:[0,`cdkConnectedOverlayUsePopover`,`usePopover`],matchWidth:[2,`cdkConnectedOverlayMatchWidth`,`matchWidth`,wi$1],_config:[0,`cdkConnectedOverlay`,`_config`]},outputs:{backdropClick:`backdropClick`,positionChange:`positionChange`,attach:`attach`,detach:`detach`,overlayKeydown:`overlayKeydown`,overlayOutsideClick:`overlayOutsideClick`},exportAs:[`cdkConnectedOverlay`],features:[ao]})}return n})();var me=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Sr({type:n});static ɵinj=zn({providers:[he],imports:[bT,Ut$1,wt$1,wt$1]})}return n})();var Lt=`Service workers are disabled or not supported by this browser`;var _e=class{serviceWorker;worker;registration;events;constructor(a,e){if(this.serviceWorker=a,!a)this.worker=this.events=this.registration=new ye$5(t=>t.error(new V$4(5601,!1)));else{let t=null,i=new Ge$4;this.worker=new ye$5(h=>(t!==null&&h.next(t),i.subscribe(q=>h.next(q))));let o=()=>{let{controller:h}=a;h!==null&&(t=h,i.next(t))};a.addEventListener(`controllerchange`,o),o(),this.registration=this.worker.pipe(rn$2(()=>a.getRegistration().then(h=>{if(!h)throw new V$4(5601,!1);return h})));let s=new Ge$4;this.events=s.asObservable();let l=h=>{let{data:q}=h;q?.type&&s.next(q)};a.addEventListener(`message`,l),e?.get(Zn,null,{optional:!0})?.onDestroy(()=>{a.removeEventListener(`controllerchange`,o),a.removeEventListener(`message`,l)})}}postMessage(a,e){return new Promise(t=>{this.worker.pipe(Vn(1)).subscribe(i=>{i.postMessage(r$1({action:a},e)),t()})})}postMessageWithOperation(a,e,t){let i=this.waitForOperationCompleted(t),o=this.postMessage(a,e);return Promise.all([o,i]).then(([,s])=>s)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(a){let e;return typeof a==`string`?e=t=>t.type===a:e=t=>a.includes(t.type),this.events.pipe(Yt$1(e))}nextEventOfType(a){return this.eventsOfType(a).pipe(Vn(1))}waitForOperationCompleted(a){return new Promise((e,t)=>{this.eventsOfType(`OPERATION_COMPLETED`).pipe(Yt$1(i=>i.nonce===a),Vn(1),Se$2(i=>{if(i.result!==void 0)return i.result;throw new Error(i.error)})).subscribe({next:e,error:t})})}get isEnabled(){return!!this.serviceWorker}};var Bi=(()=>{class n{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new Ge$4;constructor(e){if(this.sw=e,!e.isEnabled){this.messages=$A,this.notificationClicks=$A,this.notificationCloses=$A,this.pushSubscriptionChanges=$A,this.subscription=$A;return}this.messages=this.sw.eventsOfType(`PUSH`).pipe(Se$2(i=>i.data)),this.notificationClicks=this.sw.eventsOfType(`NOTIFICATION_CLICK`).pipe(Se$2(i=>i.data)),this.notificationCloses=this.sw.eventsOfType(`NOTIFICATION_CLOSE`).pipe(Se$2(i=>i.data)),this.pushSubscriptionChanges=this.sw.eventsOfType(`PUSH_SUBSCRIPTION_CHANGE`).pipe(Se$2(i=>i.data)),this.pushManager=this.sw.registration.pipe(Se$2(i=>i.pushManager));let t=this.pushManager.pipe(rn$2(i=>i.getSubscription()));this.subscription=new ye$5(i=>{let o=t.subscribe(i),s=this.subscriptionChanges.subscribe(i);return()=>{o.unsubscribe(),s.unsubscribe()}})}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(Lt));let t={userVisibleOnly:!0},i=this.decodeBase64(e.serverPublicKey.replace(/_/g,`/`).replace(/-/g,`+`)),o=new Uint8Array(new ArrayBuffer(i.length));for(let s=0;s<i.length;s++)o[s]=i.charCodeAt(s);return t.applicationServerKey=o,new Promise((s,l)=>{this.pushManager.pipe(rn$2(p=>p.subscribe(t)),Vn(1)).subscribe({next:p=>{this.subscriptionChanges.next(p),s(p)},error:l})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(Lt));let e=t=>{if(t===null)throw new V$4(5602,!1);return t.unsubscribe().then(i=>{if(!i)throw new V$4(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((t,i)=>{this.subscription.pipe(Vn(1),rn$2(e)).subscribe({next:t,error:i})})}decodeBase64(e){return atob(e)}static ɵfac=function(t){return new(t||n)(te$3(_e))};static ɵprov=ue$2({token:n,factory:n.ɵfac})}return n})();var Hi=(()=>{class n{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=$A,this.unrecoverable=$A;return}this.versionUpdates=this.sw.eventsOfType([`VERSION_DETECTED`,`VERSION_INSTALLATION_FAILED`,`VERSION_READY`,`NO_NEW_VERSION_DETECTED`]),this.unrecoverable=this.sw.eventsOfType(`UNRECOVERABLE_STATE`)}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(Lt));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let e=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation(`CHECK_FOR_UPDATES`,{nonce:e},e).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new V$4(5601,!1));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation(`ACTIVATE_UPDATE`,{nonce:e},e)}static ɵfac=function(t){return new(t||n)(te$3(_e))};static ɵprov=ue$2({token:n,factory:n.ɵfac})}return n})();var hi=new K$3(``);function Vi(){let n=N$3(Ae);if(!(`serviceWorker`in navigator&&n.enabled!==!1))return;let a=N$3(hi),e=N$3(wt$5),t=N$3(Zn);e.runOutsideAngular(()=>{let i=navigator.serviceWorker,o=()=>i.controller?.postMessage({action:`INITIALIZE`});i.addEventListener(`controllerchange`,o),t.onDestroy(()=>{i.removeEventListener(`controllerchange`,o)})}),e.runOutsideAngular(()=>{let i,{registrationStrategy:o}=n;if(typeof o==`function`)i=new Promise(s=>o().subscribe(()=>s()));else{let[s,...l]=(o||`registerWhenStable:30000`).split(`:`);switch(s){case`registerImmediately`:i=Promise.resolve();break;case`registerWithDelay`:i=pi(+l[0]||0);break;case`registerWhenStable`:i=Promise.race([t.whenStable(),pi(+l[0])]);break;default:throw new V$4(5600,!1)}}i.then(()=>{t.destroyed||navigator.serviceWorker.register(a,{scope:n.scope,updateViaCache:n.updateViaCache,type:n.type}).catch(s=>console.error(hn$1(5604,!1)))})})}function pi(n){return new Promise(a=>setTimeout(a,n))}function zi(){let n=N$3(Ae),a=N$3(ot$3);return new _e(n.enabled!==!1?navigator.serviceWorker:void 0,a)}var Ae=class{enabled;updateViaCache;type;scope;registrationStrategy};function gi(n,a={}){return Wn([Bi,Hi,{provide:hi,useValue:n},{provide:Ae,useValue:a},{provide:_e,useFactory:zi},TC(Vi)])}var fi=[{path:``,pathMatch:`full`,redirectTo:`welcome`},{path:`welcome`,title:`Welcome`,loadComponent:()=>import(`./chunk-BsBcQzyY.js`).then(n=>n.WelcomePage)},{path:`import`,title:`Import`,loadComponent:()=>import(`./chunk-Du54V_Fx.js`).then(n=>n.ImportPage)},{path:`bank`,title:`Connect bank`,loadComponent:()=>import(`./chunk-DJZ9HPVc.js`).then(n=>n.BankPage)},{path:`dashboard`,title:`Dashboard`,loadComponent:()=>import(`./chunk-BorEC7fz.js`).then(n=>n.DashboardPage)},{path:`income`,title:`Income`,loadComponent:()=>import(`./chunk-CkaZt34F.js`).then(n=>n.IncomePage)},{path:`budget`,title:`Budget`,loadComponent:()=>import(`./chunk-BdfRNL84.js`).then(n=>n.BudgetPage)},{path:`debts`,title:`Debts`,loadComponent:()=>import(`./chunk-EMdqCnfU.js`).then(n=>n.DebtsPage)},{path:`goals`,title:`Goals`,loadComponent:()=>import(`./chunk-DRI-VtFb.js`).then(n=>n.GoalsPage)},{path:`afford`,title:`Can I afford this?`,loadComponent:()=>import(`./chunk-3ZZDJ6HX.js`).then(n=>n.AffordPage)},{path:`household`,title:`Household`,loadComponent:()=>import(`./chunk-DCiI9XAx.js`).then(n=>n.HouseholdPage)},{path:`checkin`,title:`Check-in`,loadComponent:()=>import(`./chunk-Ceke106z.js`).then(n=>n.CheckinPage)},{path:`progress`,title:`Progress`,loadComponent:()=>import(`./chunk-DCfrDjCT.js`).then(n=>n.ProgressPage)},{path:`transactions`,title:`Transactions`,loadComponent:()=>import(`./chunk-FhYtFRLC.js`).then(n=>n.TransactionsPage)},{path:`settings`,title:`Settings`,loadComponent:()=>import(`./chunk-B-LYR-9r.js`).then(n=>n.SettingsPage)},{path:`help`,title:`Help`,loadComponent:()=>import(`./chunk-AtTXRju0.js`).then(n=>n.HelpPage)},{path:`**`,redirectTo:`welcome`}];var be=class n{_pending=Ce$4(null);pending=this._pending.asReadonly();capture(){try{this._pending.set(wt$3(window.location.href,window.sessionStorage,Date.now()))}catch{this._pending.set(null)}}take(){let a=this._pending();return this._pending.set(null),a}static ɵfac=function(e){return new(e||n)};static ɵprov=ue$2({token:n,factory:n.ɵfac,providedIn:`root`})};var _i={providers:[RM(),TC(()=>N$3(be).capture()),dF(fi,vF(),pF({scrollPositionRestoration:`enabled`,anchorScrolling:`enabled`})),gi(`ngsw-worker.js`,{enabled:!D9(),registrationStrategy:`registerWhenStable:30000`})]};var ee=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var Ht=(()=>{class n extends tt{_elementRef=N$3(Xt$1);_focusTrapFactory=N$3(Ge$3);_config;_interactivityChecker=N$3(ze$2);_ngZone=N$3(wt$5);_focusMonitor=N$3(_t$3);_renderer=N$3(so);_changeDetectorRef=N$3(Ns);_injector=N$3(ot$3);_platform=N$3(VQ);_document=N$3(Ne$2);_portalOutlet;_focusTrapped=new Ge$4;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=N$3(ee,{optional:!0})||new ee,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{o(),s(),e.removeAttribute(`tabindex`)},o=this._renderer.listen(e,`blur`,i),s=this._renderer.listen(e,`mousedown`,i)})),e.focus(t)}_focusByCssSelector(e,t){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,t)}_trapFocus(e){this._isDestroyed||cm(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case`dialog`:this._containsFocus()||t.focus(e);break;case!0:case`first-tabbable`:this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`,e);break;default:this._focusByCssSelector(this._config.autoFocus,e)}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e==`string`?t=this._document.querySelector(e):typeof e==`boolean`?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus==`function`){let i=LQ(),o=this._elementRef.nativeElement;(!i||i===this._document.body||i===o||o.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=LQ();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=LQ()))}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){function e(t,i){}return Ei$1({type:n,selectors:[[`cdk-dialog-container`]],viewQuery:function(i,o){if(i&1&&HC(_i$1,7),i&2){let s;km(s=Lm())&&(o._portalOutlet=s.first)}},hostAttrs:[`tabindex`,`-1`,1,`cdk-dialog-container`],hostVars:6,hostBindings:function(i,o){i&2&&Di(`id`,o._config.id||null)(`role`,o._config.role)(`aria-modal`,o._config.ariaModal)(`aria-labelledby`,o._config.ariaLabel?null:o._ariaLabelledByQueue[0])(`aria-label`,o._config.ariaLabel)(`aria-describedby`,o._config.ariaDescribedBy||null)},features:[AC],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(i,o){i&1&&NC(0,e,0,0,`ng-template`,0)},dependencies:[_i$1],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})})()}return n})();var le=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new Ge$4;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(a,e){this.overlayRef=a,this.config=e,this.disableClose=e.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!ZQ(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:`keyboard`}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:`mouse`}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=a.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(a,e){if(this._canClose(a)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||`program`,this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(a),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a=``,e=``){return this.overlayRef.updateSize({width:a,height:e}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}_canClose(a){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(a,e,this.componentInstance))}};var ji=new K$3(`DialogScrollStrategy`,{providedIn:`root`,factory:()=>{let n=N$3(ot$3);return()=>te(n)}});var Ui=new K$3(`DialogData`);var Wi=new K$3(`DefaultDialogConfig`);function Gi(n){let a=Ce$4(n),e=new Et$3;return{valueSignal:a,get value(){return a()},change:e,ngOnDestroy(){e.complete()}}}var Vt=(()=>{class n{_injector=N$3(ot$3);_defaultOptions=N$3(Wi,{optional:!0});_parentDialog=N$3(n,{optional:!0,skipSelf:!0});_overlayContainer=N$3(ae);_idGenerator=N$3(P_);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new Ge$4;_afterOpenedAtThisLevel=new Ge$4;_ariaHiddenElements=/* @__PURE__ */ new Map;_scrollStrategy=N$3(ji);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Da$1(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(qp(void 0)));open(e,t){let i=this._defaultOptions||new ee;t=r$1(r$1({},i),t),t.id=t.id||this._idGenerator.getId(`cdk-dialog-`),t.id&&this.getDialogById(t.id);let o=this._getOverlayConfig(t),s=Mt$1(this._injector,o),l=new le(s,t),p=this._attachContainer(s,l,t);if(l.containerInstance=p,!this.openDialogs.length){let h=this._overlayContainer.getContainerElement();p._focusTrapped?p._focusTrapped.pipe(Vn(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(h)}):this._hideNonDialogContentFromAssistiveTechnology(h)}return this._attachDialogContent(e,l,p,t),this.openDialogs.push(l),l.closed.subscribe(()=>this._removeOpenDialog(l,!0)),this.afterOpened.next(l),l}closeAll(){Bt(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){Bt(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Bt(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new X({positionStrategy:e.positionStrategy||le$1().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,i){let o=i.injector||i.viewContainerRef?.injector,s=[{provide:ee,useValue:i},{provide:le,useValue:t},{provide:st,useValue:e}],l;i.container?typeof i.container==`function`?l=i.container:(l=i.container.type,s.push(...i.container.providers(i))):l=Ht;let p=new bt$1(l,i.viewContainerRef,ot$3.create({parent:o||this._injector,providers:s}));return e.attach(p).instance}_attachDialogContent(e,t,i,o){if(e instanceof Ds){let s=this._createInjector(o,t,i,void 0),l={$implicit:o.data,dialogRef:t};o.templateContext&&(l=r$1(r$1({},l),typeof o.templateContext==`function`?o.templateContext():o.templateContext)),i.attachTemplatePortal(new Y(e,null,l,s))}else{let s=this._createInjector(o,t,i,this._injector),l=i.attachComponentPortal(new bt$1(e,o.viewContainerRef,s,null,o.bindings));t.componentRef=l,t.componentInstance=l.instance}}_createInjector(e,t,i,o){let s=e.injector||e.viewContainerRef?.injector,l=[{provide:Ui,useValue:e.data},{provide:le,useValue:t}];return e.providers&&(typeof e.providers==`function`?l.push(...e.providers(t,e,i)):l.push(...e.providers)),e.direction&&(!s||!s.get(TF,null,{optional:!0}))&&l.push({provide:TF,useValue:Gi(e.direction)}),ot$3.create({parent:s||o,providers:l})}_removeOpenDialog(e,t){let i=this.openDialogs.indexOf(e);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,s)=>{o?s.setAttribute(`aria-hidden`,o):s.removeAttribute(`aria-hidden`)}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let i=t.length-1;i>-1;i--){let o=t[i];o!==e&&o.nodeName!==`SCRIPT`&&o.nodeName!==`STYLE`&&!o.hasAttribute(`aria-live`)&&!o.hasAttribute(`popover`)&&(this._ariaHiddenElements.set(o,o.getAttribute(`aria-hidden`)),o.setAttribute(`aria-hidden`,`true`))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static ɵfac=function(t){return new(t||n)};static ɵprov=_e$5({token:n,factory:n.ɵfac})}return n})();function Bt(n,a){let e=n.length;for(;e--;)a(n[e])}var bi=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Sr({type:n});static ɵinj=zn({providers:[Vt],imports:[me,Ut$1,Qe$3,Ut$1]})}return n})();var pt=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings};var zt=`mdc-dialog--open`;var yi=`mdc-dialog--opening`;var vi=`mdc-dialog--closing`;var Yi=150;var qi=75;var Qi=(()=>{class n extends Ht{_animationStateChanged=new Et$3;_animationsEnabled=!U$3();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Mi(this._config.enterAnimationDuration)??Yi:0;_exitAnimationDuration=this._animationsEnabled?Mi(this._config.exitAnimationDuration)??qi:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Ci,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(yi,zt)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(zt),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(zt),this._animationsEnabled?(this._hostElement.style.setProperty(Ci,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(vi)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(yi,vi)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),t}static ɵfac=(()=>{let e;return function(i){return(e||(e=qw(n)))(i||n)}})();static ɵcmp=(function(){function e(t,i){}return Ei$1({type:n,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function(i,o){i&2&&(FC(`id`,o._config.id),Di(`aria-modal`,o._config.ariaModal)(`role`,o._config.role)(`aria-labelledby`,o._config.ariaLabel?null:o._ariaLabelledByQueue[0])(`aria-label`,o._config.ariaLabel)(`aria-describedby`,o._config.ariaDescribedBy||null),wd(`_mat-animation-noopable`,!o._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,o._actionSectionCount>0))},features:[AC],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function(i,o){i&1&&(od(0,`div`,0)(1,`div`,1),NC(2,e,0,0,`ng-template`,2),Nm()())},dependencies:[_i$1],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2,changeDetection:1})})()}return n})();var Ci=`--mat-dialog-transition-duration`;function Mi(n){return n==null?null:typeof n==`number`?n:n.endsWith(`ms`)?WQ(n.substring(0,n.length-2)):n.endsWith(`s`)?WQ(n.substring(0,n.length-1))*1e3:n===`0`?0:null}var ut=(function(n){return n[n.OPEN=0]=`OPEN`,n[n.CLOSING=1]=`CLOSING`,n[n.CLOSED=2]=`CLOSED`,n})(ut||{});var Ee=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new ya$1(1);_beforeClosed=new ya$1(1);_result;_closeFallbackTimeout;_state=ut.OPEN;_closeInteractionType;constructor(a,e,t){this._ref=a,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=a.id,a.addPanelClass(`mat-mdc-dialog-panel`),t._animationStateChanged.pipe(Yt$1(i=>i.state===`opened`),Vn(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(Yt$1(i=>i.state===`closed`),Vn(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),VA(this.backdropClick(),this.keydownEvents().pipe(Yt$1(i=>i.keyCode===27&&!this.disableClose&&!ZQ(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),xi(this,i.type===`keydown`?`keyboard`:`mouse`))})}close(a){let e=this._config.closePredicate;e&&!e(a,this._config,this.componentInstance)||(this._result=a,this._containerInstance._animationStateChanged.pipe(Yt$1(t=>t.state===`closing`),Vn(1)).subscribe(t=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=ut.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let e=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?e.left(a.left):e.right(a.right):e.centerHorizontally(),a&&(a.top||a.bottom)?a.top?e.top(a.top):e.bottom(a.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(a=``,e=``){return this._ref.updateSize(a,e),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=ut.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function xi(n,a,e){return n._closeInteractionType=a,n.close(e)}var Xi=new K$3(`MatMdcDialogData`);var $i=new K$3(`mat-mdc-dialog-default-options`);var Ki=new K$3(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=N$3(ot$3);return()=>te(n)}});var Pe=(()=>{class n{_defaultOptions=N$3($i,{optional:!0});_scrollStrategy=N$3(Ki);_parentDialog=N$3(n,{optional:!0,skipSelf:!0});_idGenerator=N$3(P_);_injector=N$3(ot$3);_dialog=N$3(Vt);_animationsDisabled=U$3();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new Ge$4;_afterOpenedAtThisLevel=new Ge$4;dialogConfigClass=pt;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Da$1(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(qp(void 0)));constructor(){this._dialogRefConstructor=Ee,this._dialogContainerType=Qi,this._dialogDataToken=Xi}open(e,t){let i;t=r$1(r$1({},this._defaultOptions||new pt),t),t.id=t.id||this._idGenerator.getId(`mat-mdc-dialog-`),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,s$1(r$1({},t),{positionStrategy:le$1(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()===`0`||t.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:ee,useValue:t}]},templateContext:()=>({dialogRef:i}),providers:(s,l,p)=>(i=new this._dialogRefConstructor(s,t,p),i.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:p},{provide:this._dialogDataToken,useValue:l.data},{provide:this._dialogRefConstructor,useValue:i},{provide:le,useValue:null}])}));return i.componentRef=o.componentRef,i.componentInstance=o.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let s=this.openDialogs.indexOf(i);s>-1&&(this.openDialogs.splice(s,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static ɵfac=function(t){return new(t||n)};static ɵprov=_e$5({token:n,factory:n.ɵfac})}return n})();var ht=(()=>{class n{dialogRef=N$3(Ee,{optional:!0});_elementRef=N$3(Xt$1);_dialog=N$3(Pe);ariaLabel;type=`button`;dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=Si(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){this._elementRef.nativeElement.getAttribute(`aria-disabled`)!==`true`&&xi(this.dialogRef,e.screenX===0&&e.screenY===0?`keyboard`:`mouse`,this.dialogResult)}static ɵfac=function(t){return new(t||n)};static ɵdir=Tr({type:n,selectors:[[``,`mat-dialog-close`,``],[``,`matDialogClose`,``]],hostVars:2,hostBindings:function(t,i){t&1&&Ed(`click`,function(s){return i._onButtonClick(s)}),t&2&&Di(`aria-label`,i.ariaLabel||null)(`type`,i.type)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],type:`type`,dialogResult:[0,`mat-dialog-close`,`dialogResult`],_matDialogClose:[0,`matDialogClose`,`_matDialogClose`]},exportAs:[`matDialogClose`],features:[ao]})}return n})();var wi=(()=>{class n{_dialogRef=N$3(Ee,{optional:!0});_elementRef=N$3(Xt$1);_dialog=N$3(Pe);ngOnInit(){this._dialogRef||(this._dialogRef=Si(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static ɵfac=function(t){return new(t||n)};static ɵdir=Tr({type:n})}return n})();var gt=(()=>{class n extends wi{id=N$3(P_).getId(`mat-mdc-dialog-title-`);_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static ɵfac=(()=>{let e;return function(i){return(e||(e=qw(n)))(i||n)}})();static ɵdir=Tr({type:n,selectors:[[``,`mat-dialog-title`,``],[``,`matDialogTitle`,``]],hostAttrs:[1,`mat-mdc-dialog-title`,`mdc-dialog__title`],hostVars:1,hostBindings:function(t,i){t&2&&FC(`id`,i.id)},inputs:{id:`id`},exportAs:[`matDialogTitle`],features:[AC]})}return n})();var ft=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=Tr({type:n,selectors:[[``,`mat-dialog-content`,``],[`mat-dialog-content`],[``,`matDialogContent`,``]],hostAttrs:[1,`mat-mdc-dialog-content`,`mdc-dialog__content`],features:[lO([ci])]})}return n})();var _t=(()=>{class n extends wi{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static ɵfac=(()=>{let e;return function(i){return(e||(e=qw(n)))(i||n)}})();static ɵdir=Tr({type:n,selectors:[[``,`mat-dialog-actions`,``],[`mat-dialog-actions`],[``,`matDialogActions`,``]],hostAttrs:[1,`mat-mdc-dialog-actions`,`mdc-dialog__actions`],hostVars:6,hostBindings:function(t,i){t&2&&wd(`mat-mdc-dialog-actions-align-start`,i.align===`start`)(`mat-mdc-dialog-actions-align-center`,i.align===`center`)(`mat-mdc-dialog-actions-align-end`,i.align===`end`)},inputs:{align:`align`},features:[AC]})}return n})();function Si(n,a){let e=n.nativeElement.parentElement;for(;e&&!e.classList.contains(`mat-mdc-dialog-container`);)e=e.parentElement;return e?a.find(t=>t.id===e.id):null}var ye=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Sr({type:n});static ɵinj=zn({providers:[Pe],imports:[bi,me,Ut$1,bT]})}return n})();var Ut=new K$3(`MAT_MENU_PANEL`);var Oe=(()=>{class n{_isAnchor;_elementRef=N$3(Xt$1);_document=N$3(Ne$2);_focusMonitor=N$3(_t$3);_parentMenu=N$3(Ut,{optional:!0});_changeDetectorRef=N$3(Ns);role=`menuitem`;disabled=!1;disabledInteractive=!1;disableRipple=!1;_hovered=new Ge$4;_focused=new Ge$4;_highlighted=!1;_triggersSubmenu=!1;constructor(){N$3(EF).load(Te$2),this._parentMenu?.addItem?.(this),this._isAnchor=this._elementRef.nativeElement.tagName===`A`}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled&&!this.disabledInteractive?`-1`:`0`}_getAriaDisabled(){return this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabled(){return this.disabledInteractive||!this.disabled?null:!0}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp`);for(let i=0;i<t.length;i++)t[i].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`],t=[`mat-icon, [matMenuItemIcon]`,`*`];function i(o,s){o&1&&(RD(),od(0,`svg`,2),vd(1,`polygon`,3),Nm())}return Ei$1({type:n,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:12,hostBindings:function(s,l){s&1&&Ed(`click`,function(h){return l._checkDisabled(h)})(`mouseenter`,function(){return l._handleMouseEnter()}),s&2&&(Di(`role`,l.role)(`tabindex`,l._getTabIndex())(`aria-disabled`,l._getAriaDisabled())(`disabled`,l._getDisabled()),wd(`mat-mdc-menu-item-highlighted`,l._highlighted)(`mat-mdc-menu-item-submenu-trigger`,l._triggersSubmenu)(`mat-mdc-menu-item-disabled`,l.disabled)(`mat-mdc-menu-item-disabled-interactive`,l.disabledInteractive))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,wi$1],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,wi$1],disableRipple:[2,`disableRipple`,`disableRipple`,wi$1]},exportAs:[`matMenuItem`],ngContentSelectors:t,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(s,l){s&1&&(Om(e),Pm(0),od(1,`span`,0),Pm(2,1),Nm(),vd(3,`div`,1),SO(4,i,2,0,`svg`,2)),s&2&&(MR(3),PC(`matRippleDisabled`,l.disableRipple||l.disabled)(`matRippleTrigger`,l._getHostElement()),MR(),_O(l._triggersSubmenu?4:-1))},dependencies:[lo],encapsulation:2})})()}return n})();var na=new K$3(`MatMenuContent`);var ia=new K$3(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var jt=`_mat-menu-enter`;var bt=`_mat-menu-exit`;var Ce=(()=>{class n{_elementRef=N$3(Xt$1);_changeDetectorRef=N$3(Ns);_injector=N$3(ot$3);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=U$3();_allItems;_directDescendantItems=new Gl;_classList={};_panelAnimationState=`void`;_animationDone=new Ge$4;_isAnimating=Ce$4(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,i=r$1({},this._classList);t&&t.length&&t.split(` `).forEach(o=>{i[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(o=>{i[o]=!0}),this._elementRef.nativeElement.className=``),this._classList=i}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new Et$3;close=this.closed;panelId=N$3(P_).getId(`mat-menu-panel-`);constructor(){let e=N$3(ia);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Et$2(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd().skipPredicate(e=>e.disabled&&!e.disabledInteractive),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(qp(this._directDescendantItems),rn$2(e=>VA(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let i=e.toArray(),o=Math.max(0,Math.min(i.length-1,t.activeItemIndex||0));i[o]&&!i[o].disabled?t.setActiveItem(o):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(qp(this._directDescendantItems),rn$2(t=>VA(...t.map(i=>i._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,i=this._keyManager;switch(t){case 27:ZQ(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&i.setFocusOrigin(`keyboard`),i.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=cm(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=s$1(r$1({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===bt;(t||e===jt)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===jt||e===bt)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(bt),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?jt:bt)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(qp(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`*`];function t(i,o){if(i&1){let s=LO();Rm(0,`div`,0),BC(`click`,function(){ED(s);let p=HO();return DD(p.closed.emit(`click`))})(`animationstart`,function(p){ED(s);let h=HO();return DD(h._onAnimationStart(p.animationName))})(`animationend`,function(p){ED(s);let h=HO();return DD(h._onAnimationDone(p.animationName))})(`animationcancel`,function(p){ED(s);let h=HO();return DD(h._onAnimationDone(p.animationName))}),Rm(1,`div`,1),Pm(2),xm()()}if(i&2){let s=HO();Fm(s._classList),wd(`mat-menu-panel-animations-disabled`,s._animationsDisabled)(`mat-menu-panel-exit-animation`,s._panelAnimationState===`void`)(`mat-menu-panel-animating`,s._isAnimating()),FC(`id`,s.panelId),Di(`aria-label`,s.ariaLabel||null)(`aria-labelledby`,s.ariaLabelledby||null)(`aria-describedby`,s.ariaDescribedby||null)}}return Ei$1({type:n,selectors:[[`mat-menu`]],contentQueries:function(o,s,l){if(o&1&&Dd(l,na,5)(l,Oe,5)(l,Oe,4),o&2){let p;km(p=Lm())&&(s.lazyContent=p.first),km(p=Lm())&&(s._allItems=p),km(p=Lm())&&(s.items=p)}},viewQuery:function(o,s){if(o&1&&HC(Ds,5),o&2){let l;km(l=Lm())&&(s.templateRef=l.first)}},hostVars:3,hostBindings:function(o,s){o&2&&Di(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,wi$1],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,i=>i==null?null:wi$1(i)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[db([{provide:Ut,useExisting:n}])],ngContentSelectors:e,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(o,s){o&1&&(Om(),RC(0,t,3,12,`ng-template`))},styles:[`mat-menu {
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
`],encapsulation:2})})()}return n})();var aa=new K$3(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=N$3(ot$3);return()=>xt$1(n)}});var ve=/* @__PURE__ */ new WeakMap;var oa=(()=>{class n{_canHaveBackdrop;_element=N$3(Xt$1);_viewContainerRef=N$3(co);_menuItemInstance=N$3(Oe,{optional:!0,self:!0});_dir=N$3(TF,{optional:!0});_focusMonitor=N$3(_t$3);_ngZone=N$3(wt$5);_injector=N$3(ot$3);_scrollStrategy=N$3(aa);_changeDetectorRef=N$3(Ns);_animationsDisabled=U$3();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=Qe$4.EMPTY;_menuCloseSubscription=Qe$4.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=N$3(Ut,{optional:!0});this._parentMaterialMenu=t instanceof Ce?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&ve.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let i=ve.get(t);ve.set(t,this),i&&i!==this&&i._closeMenu();let o=this._createOverlay(t),s=o.getConfig(),l=s.positionStrategy;this._setPosition(t,l),this._canHaveBackdrop?s.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:s.hasBackdrop=t.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof Ce&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(Ia$1(t.close)).subscribe(()=>{l.withLockedPosition(!1).reapplyLastPosition(),l.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,i=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),i instanceof Ce&&this._ownsMenu(i)?(this._pendingRemoval=i._animationDone.pipe(Vn(1)).subscribe(()=>{t.detach(),ve.has(i)||i.lazyContent?.detach()}),i._setIsOpen(!1)):(t.detach(),i?.lazyContent?.detach()),i&&this._ownsMenu(i)&&ve.delete(i),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=Mt$1(this._injector,t),this._overlayRef.keydownEvents().subscribe(i=>{this._menu instanceof Ce&&this._menu._handleKeydown(i)})}return this._overlayRef}_getOverlayConfig(e){return new X({positionStrategy:Et(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(i=>{this._ngZone.run(()=>{let o=i.connectionPair.overlayX===`start`?`after`:`before`,s=i.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(o,s)})})}_setPosition(e,t){let[i,o]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[s,l]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[p,h]=[s,l],[q,It]=[i,o],Me=0;if(this._triggersSubmenu()){if(It=i=e.xPosition===`before`?`start`:`end`,o=q=i===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let Gt=this._parentMaterialMenu.items.first;this._parentInnerPadding=Gt?Gt._getHostElement().offsetTop:0}Me=s===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(p=s===`top`?`bottom`:`top`,h=l===`top`?`bottom`:`top`);t.withPositions([{originX:i,originY:p,overlayX:q,overlayY:s,offsetY:Me},{originX:o,originY:p,overlayX:It,overlayY:s,offsetY:Me},{originX:i,originY:h,overlayX:q,overlayY:l,offsetY:-Me},{originX:o,originY:h,overlayX:It,overlayY:l,offsetY:-Me}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:he$3(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Yt$1(s=>this._menuOpen&&s!==this._menuItemInstance)):he$3();return VA(e,i,o,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Y(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return ve.get(e)===this}_triggerIsAriaDisabled(){return wi$1(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){gd()};static ɵdir=Tr({type:n})}return n})();var Ai=(()=>{class n extends oa{_cleanupTouchstart;_hoverSubscription=Qe$4.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new Et$3;onMenuOpen=this.menuOpened;menuClosed=new Et$3;onMenuClose=this.menuClosed;constructor(){super(!0);let e=N$3(so);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{W$2(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){Z$3(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||n)};static ɵdir=Tr({type:n,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,i){t&1&&Ed(`click`,function(s){return i._handleClick(s)})(`mousedown`,function(s){return i._handleMousedown(s)})(`keydown`,function(s){return i._handleKeydown(s)}),t&2&&Di(`aria-haspopup`,i.menu?`menu`:null)(`aria-expanded`,i.menuOpen)(`aria-controls`,i.menuOpen?i.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[AC]})}return n})();var Ti=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Sr({type:n});static ɵinj=zn({imports:[De$2,me,bT,Ht$1]})}return n})();function la(n,a){n&1&&(od(0,`p`,7),fP(1),Nm()),n&2&&(MR(),JC(a))}var yt=class n{store=N$3(x_);router=N$3(Ni$1);error=Ce$4(null);busy=Ce$4(!1);async submit(a,e){if(a.preventDefault(),!e){this.error.set(`Enter the passphrase.`);return}this.busy.set(!0),this.error.set(await this.store.unlock(e)),this.busy.set(!1)}async close(){await this.store.close()&&await this.router.navigateByUrl(`/welcome`)}static ɵfac=function(e){return new(e||n)};static ɵcmp=Ei$1({type:n,selectors:[[`app-unlock-page`]],decls:22,vars:6,consts:[[`pass`,``],[`aria-hidden`,`true`,1,`material-icons`],[1,`panel`],[`data-field`,`locked-file`],[`aria-label`,`Unlock`,3,`submit`],[1,`fld`],[`type`,`password`,`autocomplete`,`current-password`,`data-input`,`unlock-passphrase`,1,`field`,3,`input`,`disabled`],[`role`,`alert`,1,`form-error`],[1,`actions`],[`mat-flat-button`,``,`type`,`submit`,3,`disabled`],[`mat-stroked-button`,``,`type`,`button`,3,`click`,`disabled`],[1,`muted`,`small`]],template:function(e,t){if(e&1){let i=LO();od(0,`h1`)(1,`mat-icon`,1),fP(2,`lock`),Nm(),fP(3,`Unlock your data`),Nm(),od(4,`section`,2)(5,`p`)(6,`strong`,3),fP(7),Nm(),fP(8,` is encrypted. Enter its passphrase to open it. `),Nm(),od(9,`form`,4),Ed(`submit`,function(s){ED(i);let l=WO(13);return DD(t.submit(s,l.value))}),od(10,`label`,5),fP(11,` Passphrase `),od(12,`input`,6,0),Ed(`input`,function(){return t.error.set(null)}),Nm()(),SO(14,la,2,1,`p`,7),od(15,`div`,8)(16,`button`,9),fP(17),Nm(),od(18,`button`,10),Ed(`click`,function(){return t.close()}),fP(19,` Close file `),Nm()()(),od(20,`p`,11),fP(21,` A forgotten passphrase can't be recovered. Without it, the file can't be opened. `),Nm()()}if(e&2){let i;MR(7),JC(t.store.fileName()),MR(5),PC(`disabled`,t.busy()),MR(2),_O((i=t.error())?14:-1,i),MR(2),PC(`disabled`,t.busy()),MR(),jm(` `,t.busy()?`Unlocking…`:`Unlock`,` `),MR(),PC(`disabled`,t.busy())}},dependencies:[Bo,zo,GY,WY],styles:[`[_nghost-%COMP%]{display:block;max-width:32rem;margin:2rem auto}h1[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}form[_ngcontent-%COMP%]{display:grid;gap:1rem}input.field[_ngcontent-%COMP%]{width:100%;box-sizing:border-box}.actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.75rem}`]})};var Ei=[`pointerdown`,`pointermove`,`keydown`,`wheel`,`touchstart`];var da=1e3;var Ct=class n{store=N$3(x_);timer;lastRestart=0;waiting=!1;minutes=uo(()=>{let a=this.store.data();return!a||!this.store.encrypted()||this.store.isSample()?0:a.settings.autoLockMinutes});constructor(){let a=e=>{e instanceof PointerEvent&&e.type===`pointermove`&&e.movementX===0&&e.movementY===0||this.activity()};for(let e of Ei)document.addEventListener(e,a,{passive:!0,capture:!0});N$3(Dt$3).onDestroy(()=>{clearTimeout(this.timer);for(let e of Ei)document.removeEventListener(e,a,{capture:!0})}),Zh(()=>{this.minutes(),this.waiting=!1,this.restart()}),Zh(()=>{!this.store.dirty()&&this.waiting&&this.tryLock()})}activity(){this.waiting=!1,!(Date.now()-this.lastRestart<da)&&this.restart()}restart(){clearTimeout(this.timer),this.lastRestart=Date.now();let a=this.minutes();a>0&&(this.timer=setTimeout(()=>{this.tryLock()},a*6e4))}async tryLock(){if(this.waiting=!1,this.minutes()===0)return;let a=!1;try{a=await this.store.lock()}catch{}a||(this.waiting=this.store.dirty(),!this.waiting&&this.minutes()>0&&(clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tryLock()},6e4)))}static ɵfac=function(e){return new(e||n)};static ɵprov=ue$2({token:n,factory:n.ɵfac,providedIn:`root`})};var Mt=class n{zone=N$3(wt$5);deferred=null;_canInstall=Ce$4(!1);canInstall=this._canInstall.asReadonly();constructor(){window.addEventListener(`beforeinstallprompt`,a=>{a.preventDefault(),this.deferred=a,this.zone.run(()=>this._canInstall.set(!0))}),window.addEventListener(`appinstalled`,()=>{this.deferred=null,this.zone.run(()=>this._canInstall.set(!1))})}async install(){let a=this.deferred;a&&(this.deferred=null,this._canInstall.set(!1),await a.prompt(),await a.userChoice)}static ɵfac=function(e){return new(e||n)};static ɵprov=ue$2({token:n,factory:n.ɵfac,providedIn:`root`})};var ca=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=Ei$1({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(t,i){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return n})();var ma={passive:!0};var Pi=(()=>{class n{_platform=N$3(VQ);_ngZone=N$3(wt$5);_renderer=N$3(hi$1).createRenderer(null,null);_styleLoader=N$3(EF);_monitoredElements=/* @__PURE__ */ new Map;monitor(e){if(!this._platform.isBrowser)return dt$3;this._styleLoader.load(ca);let t=GQ(e),i=this._monitoredElements.get(t);if(i)return i.subject;let o=new Ge$4,s=`cdk-text-field-autofilled`,l=h=>{h.animationName===`cdk-text-field-autofill-start`&&!t.classList.contains(s)?(t.classList.add(s),this._ngZone.run(()=>o.next({target:h.target,isAutofilled:!0}))):h.animationName===`cdk-text-field-autofill-end`&&t.classList.contains(s)&&(t.classList.remove(s),this._ngZone.run(()=>o.next({target:h.target,isAutofilled:!1})))},p=this._ngZone.runOutsideAngular(()=>(t.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(t,`animationstart`,l,ma)));return this._monitoredElements.set(t,{subject:o,unlisten:p}),o}stopMonitoring(e){let t=GQ(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove(`cdk-text-field-autofill-monitored`),t.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static ɵfac=function(t){return new(t||n)};static ɵprov=_e$5({token:n,factory:n.ɵfac})}return n})();var Oi=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Sr({type:n});static ɵinj=zn({})}return n})();var Ri=new K$3(`MAT_INPUT_VALUE_ACCESSOR`);var ua=[`button`,`checkbox`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`];var pa=new K$3(`MAT_INPUT_CONFIG`);var Ni=(()=>{class n{_elementRef=N$3(Xt$1);_platform=N$3(VQ);ngControl=N$3(V$1,{optional:!0,self:!0});_autofillMonitor=N$3(Pi);_ngZone=N$3(wt$5);_formField=N$3(bt$4,{optional:!0});_renderer=N$3(so);_uid=N$3(P_).getId(`mat-input-`);_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=N$3(pa,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new Ge$4;controlType=`mat-input`;autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Xa(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(fe$1.required)??!1}set required(e){this._required=Xa(e)}_required;get type(){return this._type}set type(e){this._type=e||`text`,this._validateType(),!this._isTextarea&&Ba$1().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type=`text`;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Xa(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=[`date`,`datetime`,`datetime-local`,`month`,`time`,`week`].filter(e=>Ba$1().has(e));constructor(){let e=N$3(Qt$1,{optional:!0}),t=N$3(nn,{optional:!0}),i=N$3(Qn),o=N$3(Ri,{optional:!0,self:!0}),s=N$3(fn,{optional:!0,self:!0}),l=this._elementRef.nativeElement,p=l.nodeName.toLowerCase();o?qa(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=l,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(l,`keyup`,this._iOSKeyupListener)}),this._errorStateTracker=new Ze$2(i,s||this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=p===`select`,this._isTextarea=p===`textarea`,this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=l.multiple?`mat-native-select-multiple`:`mat-native-select`),this._signalBasedValueAccessor&&Zh(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type===`number`?(t.type=`text`,t.setSelectionRange(0,0),t.type=`number`):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute(`placeholder`,e):t.removeAttribute(`placeholder`)}}_getPlaceholder(){return this.placeholder||null}_validateType(){ua.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(t){return new(t||n)};static ɵdir=Tr({type:n,selectors:[[`input`,`matInput`,``],[`textarea`,`matInput`,``],[`select`,`matNativeControl`,``],[`input`,`matNativeControl`,``],[`textarea`,`matNativeControl`,``]],hostAttrs:[1,`mat-mdc-input-element`],hostVars:21,hostBindings:function(t,i){t&1&&Ed(`focus`,function(){return i._focusChanged(!0)})(`blur`,function(){return i._focusChanged(!1)})(`input`,function(){return i._onInput()}),t&2&&(FC(`id`,i.id)(`disabled`,i.disabled&&!i.disabledInteractive)(`required`,i.required),Di(`name`,i.name||null)(`readonly`,i._getReadonlyAttribute())(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null)(`aria-invalid`,i.empty&&i.required?null:i.errorState)(`aria-required`,i.required)(`id`,i.id),wd(`mat-input-server`,i._isServer)(`mat-mdc-form-field-textarea-control`,i._isInFormField&&i._isTextarea)(`mat-mdc-form-field-input-control`,i._isInFormField)(`mat-mdc-input-disabled-interactive`,i.disabledInteractive)(`mdc-text-field__input`,i._isInFormField)(`mat-mdc-native-select-inline`,i._isInlineSelect()))},inputs:{disabled:`disabled`,id:`id`,placeholder:`placeholder`,name:`name`,required:`required`,type:`type`,errorStateMatcher:`errorStateMatcher`,userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],value:`value`,readonly:`readonly`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,wi$1]},exportAs:[`matInput`],features:[db([{provide:gt$3,useExisting:n}]),ao]})}return n})();var Fi=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Sr({type:n});static ɵinj=zn({imports:[$n,$n,Oi,bT]})}return n})();var ga=`DELETE`;var xt=class n{phrase=ga;typed=Ce$4(``);static ɵfac=function(e){return new(e||n)};static ɵcmp=Ei$1({type:n,selectors:[[`app-delete-data-dialog`]],decls:14,vars:5,consts:[[`mat-dialog-title`,``],[1,`full`],[`matInput`,``,`autocomplete`,`off`,3,`ngModelChange`,`ngModel`],[`align`,`end`],[`mat-button`,``,3,`mat-dialog-close`],[`mat-flat-button`,``,3,`disabled`,`mat-dialog-close`]],template:function(e,t){e&1&&(od(0,`h2`,0),fP(1,`Delete all data`),Nm(),od(2,`mat-dialog-content`)(3,`p`),fP(4,` This clears everything this browser remembers about your data file. It does not delete the file itself. After this, delete the file (and its backup copy) from your computer yourself. `),Nm(),od(5,`mat-form-field`,1)(6,`mat-label`),fP(7),Nm(),od(8,`input`,2),mx(),Ed(`ngModelChange`,function(o){return t.typed.set(o)}),Nm()()(),od(9,`mat-dialog-actions`,3)(10,`button`,4),fP(11,`Cancel`),Nm(),od(12,`button`,5),fP(13,` Delete all data `),Nm()()),e&2&&(MR(7),jm(`Type `,t.phrase,` to confirm`),MR(),PC(`ngModel`,t.typed()),vx(),MR(2),PC(`mat-dialog-close`,!1),MR(2),PC(`disabled`,t.typed()!==t.phrase)(`mat-dialog-close`,!0))},dependencies:[Bn,$e,xn,on,Bo,zo,ye,ht,gt,_t,ft,$n,Xe$2,se$2,Fi,Ni],styles:[`.full[_ngcontent-%COMP%]{width:100%}`]})};var Wt=`This tool gives general information for budgeting and planning. It is not financial, tax or legal advice.`;var wt=class n{text=Wt;static ɵfac=function(e){return new(e||n)};static ɵcmp=Ei$1({type:n,selectors:[[`app-disclaimer-dialog`]],decls:10,vars:2,consts:[[`mat-dialog-title`,``],[`align`,`end`],[`mat-flat-button`,``,3,`mat-dialog-close`]],template:function(e,t){e&1&&(od(0,`h2`,0),fP(1,`Before you start`),Nm(),od(2,`mat-dialog-content`)(3,`p`),fP(4),Nm(),od(5,`p`),fP(6,` Your data stays on this device, in a file you control. Nothing is sent over the internet unless you choose to connect a bank. `),Nm()(),od(7,`mat-dialog-actions`,1)(8,`button`,2),fP(9,`I understand`),Nm()()),e&2&&(MR(4),JC(t.text),MR(4),PC(`mat-dialog-close`,!0))},dependencies:[Bo,zo,ye,ht,gt,_t,ft],encapsulation:2})};function fa(n,a){n&1&&(od(0,`span`),fP(1,`Saving…`),Nm())}function _a(n,a){n&1&&(od(0,`span`),fP(1,`Unsaved changes`),Nm())}function ba(n,a){if(n&1&&(od(0,`span`,0),fP(1),Nm()),n&2){let e=HO();MR(),JC(e.store.error())}}function ya(n,a){n&1&&(fP(0),MP(1,`date`)),n&2&&jm(` Saved `,xP(1,1,a,`shortTime`),` `)}function va(n,a){n&1&&fP(0,` No changes `)}function Ca(n,a){if(n&1&&(od(0,`span`),SO(1,ya,2,4)(2,va,1,0),Nm()),n&2){let e,t=HO();MR(),_O((e=t.store.savedAt())?1:2,e)}}function Ma(n,a){if(n&1){let e=LO();od(0,`button`,2),Ed(`click`,function(){ED(e);let i=HO();return DD(i.store.save())}),fP(1,`Save`),Nm()}}var St=class n{store=N$3(x_);showSave=uo(()=>this.store.mode===`download`&&(this.store.dirty()||this.store.saveState()===`error`));static ɵfac=function(e){return new(e||n)};static ɵcmp=Ei$1({type:n,selectors:[[`app-save-indicator`]],decls:5,vars:2,consts:[[`role`,`alert`,1,`error`],[`mat-flat-button`,``,`type`,`button`],[`mat-flat-button`,``,`type`,`button`,3,`click`]],template:function(e,t){if(e&1&&(SO(0,fa,2,0,`span`)(1,_a,2,0,`span`)(2,ba,2,1,`span`,0)(3,Ca,3,1,`span`),SO(4,Ma,2,0,`button`,1)),e&2){let i;_O((i=t.store.saveState())===`saving`?0:i===`unsaved`?1:i===`error`?2:3),MR(4),_O(t.showSave()?4:-1)}},dependencies:[Bo,zo,xk],styles:[`[_nghost-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;font:var(--%NS%mat-sys-label-large)}.error[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error)}`]})};var xa=[`pageArea`];var wa=(n,a)=>a.label;var Li=(n,a)=>a.path;function Sa(n,a){if(n&1&&(od(0,`a`,20)(1,`mat-icon`,11),fP(2),Nm(),od(3,`span`),fP(4),Nm()()),n&2){let e=a.$implicit;PC(`routerLink`,e.path),Di(`aria-label`,e.label),MR(2),JC(e.icon),MR(2),JC(e.label)}}function Da(n,a){if(n&1&&(od(0,`span`,19),fP(1),Nm(),NO(2,Sa,5,4,`a`,20,Li)),n&2){let e=a.$implicit;MR(),JC(e.label),MR(),RO(e.items)}}function ka(n,a){if(n&1&&(od(0,`nav`,18),NO(1,Da,4,1,null,null,wa),Nm()),n&2){let e=HO();wd(`open`,e.menuOpen()),MR(),RO(e.nav)}}function Ia(n,a){n&1&&(od(0,`a`,9)(1,`mat-icon`,11),fP(2,`help_outline`),Nm(),od(3,`span`),fP(4,`Help`),Nm()())}function Aa(n,a){n&1&&vd(0,`app-save-indicator`)}function Ta(n,a){if(n&1&&(od(0,`span`,23)(1,`mat-icon`,11),fP(2),Nm(),fP(3),Nm(),SO(4,Aa,1,0,`app-save-indicator`)),n&2){let e=HO(2);wd(`sample`,e.store.isSample()),MR(2),JC(e.store.isSample()?`science`:`description`),MR(),jm(` `,e.store.fileName(),` `),MR(),_O(e.store.isSample()?-1:4)}}function Ea(n,a){if(n&1){let e=LO();od(0,`button`,24),Ed(`click`,function(){ED(e);let i=HO(2);return DD(i.installPrompt.install())}),fP(1,` Install app `),Nm()}}function Pa(n,a){if(n&1){let e=LO();od(0,`button`,25)(1,`mat-icon`,6),fP(2,`more_vert`),Nm()(),od(3,`mat-menu`,null,1)(5,`button`,26),Ed(`click`,function(){ED(e);let i=HO(2);return DD(i.store.exportCopy())}),fP(6,`Export copy`),Nm(),od(7,`button`,26),Ed(`click`,function(){ED(e);let i=HO(2);return DD(i.closeFile())}),fP(8,`Close file`),Nm(),od(9,`button`,26),Ed(`click`,function(){ED(e);let i=HO(2);return DD(i.deleteAll())}),fP(10,`Delete all data…`),Nm()()}if(n&2){let e=WO(4);PC(`matMenuTriggerFor`,e)}}function Oa(n,a){if(n&1&&(od(0,`header`,13),SO(1,Ta,5,5),vd(2,`span`,21),SO(3,Ea,2,0,`button`,22),SO(4,Pa,11,1),Nm()),n&2){let e=HO();MR(),_O(e.store.isOpen()?1:-1),MR(2),_O(e.installPrompt.canInstall()?3:-1),MR(),_O(e.store.isOpen()?4:-1)}}function Ra(n,a){if(n&1){let e=LO();od(0,`div`,14)(1,`span`),fP(2,`No safety copy yet. Without it, a bad save cannot be undone.`),Nm(),od(3,`button`,24),Ed(`click`,function(){ED(e);let i=HO();return DD(i.store.setUpBackup())}),fP(4,` Set up safety copy `),Nm()()}}function Na(n,a){n&1&&(od(0,`div`,15)(1,`span`),fP(2,` Your bank sent you back here. Open your data file and unlock it to finish connecting the bank. `),Nm()())}function Fa(n,a){n&1&&vd(0,`app-unlock-page`)}function La(n,a){n&1&&vd(0,`router-outlet`)}function Ba(n,a){if(n&1&&(od(0,`a`,29)(1,`mat-icon`,11),fP(2),Nm(),od(3,`span`),fP(4),Nm()()),n&2){let e=a.$implicit;PC(`routerLink`,e.path),MR(2),JC(e.icon),MR(2),JC(e.label)}}function Ha(n,a){if(n&1){let e=LO();od(0,`button`,27),Ed(`click`,function(){ED(e);let i=HO();return DD(i.menuOpen.set(!1))}),Nm(),od(1,`nav`,28),NO(2,Ba,5,3,`a`,29,Li),od(4,`button`,30),Ed(`click`,function(){ED(e);let i=HO();return DD(i.menuOpen.set(!i.menuOpen()))}),od(5,`mat-icon`,11),fP(6),Nm(),od(7,`span`),fP(8),Nm()()()}if(n&2){let e=HO();wd(`open`,e.menuOpen()),MR(2),RO(e.quick),MR(2),Di(`aria-expanded`,e.menuOpen()),MR(2),JC(e.menuOpen()?`close`:`menu`),MR(2),JC(e.menuOpen()?`Close`:`More`)}}var Dt=class n$2{store=N$3(x_);storage=N$3(Xs);dialog=N$3(Pe);router=N$3(Ni$1);installPrompt=N$3(Mt);autoLock=N$3(Ct);theme=N$3(n);oauthResume=N$3(be);plaid=N$3(ae$2);constructor(){Zh(()=>{!this.oauthResume.pending()||!this.store.isOpen()||!this.store.encrypted()||Ue$4(()=>{this.resumePlaid()})}),this.router.events.pipe(w$2()).subscribe(a=>{a instanceof wn&&(this.menuOpen.set(!1),this.pageArea()?.nativeElement.scrollTo({top:0}))})}async resumePlaid(){let a=this.oauthResume.take();a&&(await this.router.navigateByUrl(`/bank`),await this.plaid.resumeOauth(a))}disclaimer=Wt;pageArea=m9(`pageArea`);menuOpen=Ce$4(!1);quick=[{path:`/dashboard`,label:`Dashboard`,icon:`space_dashboard`},{path:`/budget`,label:`Budget`,icon:`pie_chart`},{path:`/debts`,label:`Debts`,icon:`credit_card`},{path:`/checkin`,label:`Check-in`,icon:`event_available`}];nav=[{label:`Your money`,items:[{path:`/dashboard`,label:`Dashboard`,icon:`space_dashboard`},{path:`/income`,label:`Income`,icon:`payments`},{path:`/budget`,label:`Budget`,icon:`pie_chart`},{path:`/debts`,label:`Debts`,icon:`credit_card`}]},{label:`Stay on track`,items:[{path:`/checkin`,label:`Check-in`,icon:`event_available`},{path:`/goals`,label:`Goals`,icon:`flag`},{path:`/progress`,label:`Progress`,icon:`show_chart`},{path:`/afford`,label:`Afford it?`,icon:`shopping_cart`}]},{label:`Your data`,items:[{path:`/import`,label:`Import`,icon:`upload_file`},{path:`/bank`,label:`Connect bank`,icon:`account_balance`},{path:`/transactions`,label:`Transactions`,icon:`receipt_long`},{path:`/household`,label:`Household`,icon:`groups`}]},{label:`More`,items:[{path:`/settings`,label:`Settings`,icon:`tune`},{path:`/help`,label:`Help`,icon:`help_outline`}]}];async ngOnInit(){if((await this.storage.getSettings()).disclaimerAccepted)return;this.dialog.open(wt,{disableClose:!0}).beforeClosed().subscribe(()=>{this.storage.patchSettings({disclaimerAccepted:!0})})}async closeFile(){await this.store.close()&&await this.router.navigateByUrl(`/welcome`)}async deleteAll(){await new Promise(e=>this.dialog.open(xt).afterClosed().subscribe(t=>e(t===!0)))&&(await this.store.deleteAll(),await this.router.navigateByUrl(`/welcome`))}static ɵfac=function(e){return new(e||n$2)};static ɵcmp=Ei$1({type:n$2,selectors:[[`app-shell`]],viewQuery:function(e,t){e&1&&$C(t.pageArea,xa,5),e&2&&zO()},hostBindings:function(e,t){e&1&&Ed(`keydown.escape`,function(){return t.menuOpen.set(!1)},qN)},decls:27,vars:13,consts:[[`pageArea`,``],[`menu`,`matMenu`],[1,`layout`],[1,`side`],[`routerLink`,`/`,1,`brand`],[`aria-hidden`,`true`,1,`mark`],[1,`material-icons`],[`id`,`main-menu`,`aria-label`,`Main`,1,`nav`,3,`open`],[1,`side-foot`],[`routerLink`,`/help`,`routerLinkActive`,`active`,`aria-label`,`Help`,1,`nav-link`],[`type`,`button`,`role`,`switch`,`aria-label`,`Dark mode`,1,`nav-link`,3,`click`],[`aria-hidden`,`true`,1,`material-icons`],[1,`page`],[1,`top`],[`role`,`status`,1,`notice`],[`role`,`status`,`data-note`,`plaid-resume`,1,`notice`],[1,`content`],[1,`footer`],[`id`,`main-menu`,`aria-label`,`Main`,1,`nav`],[`aria-hidden`,`true`,1,`nav-group`],[`routerLinkActive`,`active`,`ariaCurrentWhenActive`,`page`,1,`nav-link`,3,`routerLink`],[1,`spacer`],[`mat-stroked-button`,``,`type`,`button`],[1,`file`],[`mat-stroked-button`,``,`type`,`button`,3,`click`],[`mat-icon-button`,``,`type`,`button`,`aria-label`,`File menu`,3,`matMenuTriggerFor`],[`mat-menu-item`,``,`type`,`button`,3,`click`],[`type`,`button`,`tabindex`,`-1`,`aria-label`,`Close the menu`,1,`scrim`,3,`click`],[`aria-label`,`Quick links`,1,`bottom`],[`routerLinkActive`,`active`,`ariaCurrentWhenActive`,`page`,1,`bottom-link`,3,`routerLink`],[`type`,`button`,`data-action`,`more-menu`,`aria-controls`,`main-menu`,1,`bottom-link`,3,`click`]],template:function(e,t){e&1&&(od(0,`div`,2)(1,`aside`,3)(2,`a`,4)(3,`span`,5)(4,`mat-icon`,6),fP(5,`savings`),Nm()(),od(6,`span`),fP(7,`Finance Health Check`),Nm()(),SO(8,ka,3,2,`nav`,7),od(9,`div`,8),SO(10,Ia,5,0,`a`,9),od(11,`button`,10),Ed(`click`,function(){return t.theme.toggle()}),od(12,`mat-icon`,11),fP(13),Nm(),od(14,`span`),fP(15),Nm()()()(),od(16,`div`,12,0),SO(18,Oa,5,3,`header`,13),SO(19,Ra,5,0,`div`,14),SO(20,Na,3,0,`div`,15),od(21,`main`,16),SO(22,Fa,1,0,`app-unlock-page`)(23,La,1,0,`router-outlet`),Nm(),od(24,`footer`,17),fP(25),Nm()(),SO(26,Ha,9,5),Nm()),e&2&&(MR(8),_O(t.store.isOpen()?8:-1),MR(2),_O(t.store.isOpen()?-1:10),MR(),Di(`aria-checked`,t.theme.dark()),MR(2),JC(t.theme.dark()?`light_mode`:`dark_mode`),MR(2),JC(t.theme.dark()?`Light mode`:`Dark mode`),MR(),wd(`with-bottom`,t.store.isOpen()),MR(2),_O(t.store.isOpen()||t.installPrompt.canInstall()?18:-1),MR(),_O(t.store.backupMissing()?19:-1),MR(),_O(t.oauthResume.pending()&&!t.store.isOpen()?20:-1),MR(2),_O(t.store.locked()?22:23),MR(3),JC(t.disclaimer),MR(),_O(t.store.isOpen()?26:-1))},dependencies:[Bo,zo,mn,ye,GY,WY,Ti,Ce,Oe,Ai,ff,cF,By,St,yt],styles:[`[_nghost-%COMP%]{display:block;min-height:100vh}.layout[_ngcontent-%COMP%]{display:flex;min-height:100vh}.side[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem;flex:0 0 14.5rem;box-sizing:border-box;margin:.75rem 0 .75rem .75rem;padding:1rem .75rem;position:sticky;top:.75rem;height:calc(100vh - 1.5rem);overflow-y:auto;border:1px solid var(--%NS%app-glass-border);border-radius:var(--%NS%app-radius);background:var(--%NS%app-glass);-webkit-backdrop-filter:var(--%NS%app-blur);backdrop-filter:var(--%NS%app-blur);box-shadow:var(--%NS%app-shadow)}.brand[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.625rem;padding:.25rem .5rem;color:inherit;text-decoration:none;font:700 1.0625rem/1.2 Roboto,sans-serif;letter-spacing:-.01em}.mark[_ngcontent-%COMP%]{display:grid;place-items:center;flex:none;width:2.25rem;height:2.25rem;border-radius:.75rem;background:var(--%NS%app-accent);color:#fff;box-shadow:0 6px 16px -6px var(--%NS%app-accent-shadow)}.mark[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.25rem;width:1.25rem;height:1.25rem}.nav[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.125rem}.nav-group[_ngcontent-%COMP%]{padding:.75rem .75rem .25rem;color:var(--%NS%mat-sys-on-surface-variant);font:var(--%NS%mat-sys-label-small);letter-spacing:.06em;text-transform:uppercase}.nav-group[_ngcontent-%COMP%]:first-child{padding-top:0}.nav-link[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;padding:.5rem .75rem;border:0;border-radius:.75rem;background:transparent;color:var(--%NS%mat-sys-on-surface);font:var(--%NS%mat-sys-label-large);font-size:.9375rem;text-decoration:none;text-align:left;white-space:nowrap;cursor:pointer}.nav-link[_ngcontent-%COMP%]:hover{background:var(--%NS%app-hover)}.nav-link.active[_ngcontent-%COMP%]{background:var(--%NS%app-accent-soft);color:var(--%NS%app-accent-fg);font-weight:700}.nav-link.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:inherit}.nav-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{flex:none;color:var(--%NS%mat-sys-on-surface-variant)}.side-foot[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.125rem;margin-top:auto}.page[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0}@media(min-width:901px){[_nghost-%COMP%], .layout[_ngcontent-%COMP%]{height:100dvh;min-height:0}.layout[_ngcontent-%COMP%]{overflow:hidden}.side[_ngcontent-%COMP%]{top:0;height:calc(100dvh - 1.5rem)}.page[_ngcontent-%COMP%]{overflow-y:auto}}.top[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:.75rem;padding:.75rem 1.5rem 0;min-height:2.5rem}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.file[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.375rem;padding:.25rem .75rem .25rem .5rem;border-radius:999px;background:var(--%NS%app-glass);border:1px solid var(--%NS%app-glass-border);font:var(--%NS%mat-sys-label-large);overflow-wrap:anywhere}.file[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.125rem;width:1.125rem;height:1.125rem;color:var(--%NS%mat-sys-on-surface-variant)}.file.sample[_ngcontent-%COMP%]{background:var(--%NS%app-warn-bg);color:var(--%NS%app-warn-fg);border-color:transparent}.file.sample[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:inherit}.content[_ngcontent-%COMP%]{flex:1 1 auto;padding:1.25rem 1.5rem 2rem}.footer[_ngcontent-%COMP%]{padding:.75rem 1.5rem;font:var(--%NS%mat-sys-body-small);color:var(--%NS%mat-sys-on-surface-variant)}.notice[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:.75rem;margin:.75rem 1.5rem 0;padding:.625rem 1rem;border-radius:.75rem;background:var(--%NS%app-warn-bg);color:var(--%NS%app-warn-fg)}.bottom[_ngcontent-%COMP%], .scrim[_ngcontent-%COMP%], .sheet-title[_ngcontent-%COMP%]{display:none}@media(max-width:900px){.layout[_ngcontent-%COMP%]{flex-direction:column}.side[_ngcontent-%COMP%]{flex:none;flex-direction:row;align-items:center;gap:.5rem;position:static;height:auto;margin:0;padding:.5rem .75rem;overflow:visible;border:0;border-radius:0;background:transparent;-webkit-backdrop-filter:none;backdrop-filter:none;box-shadow:none}.brand[_ngcontent-%COMP%]{flex:1 1 auto;min-width:0}.side-foot[_ngcontent-%COMP%]{flex-direction:row;margin:0}.side-foot[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}.nav[_ngcontent-%COMP%]{display:none;position:fixed;z-index:30;left:.5rem;right:.5rem;bottom:calc(4.5rem + env(safe-area-inset-bottom));max-height:calc(100vh - 7rem);overflow-y:auto;box-sizing:border-box;padding:.75rem;border:1px solid var(--%NS%app-glass-border);border-radius:var(--%NS%app-radius);background:var(--%NS%app-glass-strong);-webkit-backdrop-filter:var(--%NS%app-blur);backdrop-filter:var(--%NS%app-blur);box-shadow:var(--%NS%app-shadow-lift)}.nav.open[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.25rem}.nav-group[_ngcontent-%COMP%]{grid-column:1/-1;padding:.5rem .5rem .125rem}.nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{padding:.75rem .625rem;white-space:normal}.scrim.open[_ngcontent-%COMP%]{display:block;position:fixed;z-index:20;inset:0;border:0;background:#00000059}.bottom[_ngcontent-%COMP%]{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);position:fixed;z-index:25;left:.5rem;right:.5rem;bottom:calc(.5rem + env(safe-area-inset-bottom));padding:.25rem;border:1px solid var(--%NS%app-glass-border);border-radius:1.25rem;background:var(--%NS%app-glass-strong);-webkit-backdrop-filter:var(--%NS%app-blur);backdrop-filter:var(--%NS%app-blur);box-shadow:var(--%NS%app-shadow-lift)}.bottom-link[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:.125rem;min-width:0;padding:.375rem .125rem;border:0;border-radius:1rem;background:transparent;color:var(--%NS%mat-sys-on-surface-variant);font:var(--%NS%mat-sys-label-small);text-decoration:none;cursor:pointer}.bottom-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.bottom-link.active[_ngcontent-%COMP%], .bottom-link[aria-expanded=true][_ngcontent-%COMP%]{background:var(--%NS%app-accent-soft);color:var(--%NS%app-accent-fg);font-weight:700}.page.with-bottom[_ngcontent-%COMP%]{padding-bottom:calc(5rem + env(safe-area-inset-bottom))}.top[_ngcontent-%COMP%]{padding:.25rem 1rem 0}.content[_ngcontent-%COMP%]{padding:.75rem 1rem 1.5rem}.notice[_ngcontent-%COMP%]{margin:.75rem 1rem 0}.footer[_ngcontent-%COMP%]{padding:.75rem 1rem}}`]})};var kt=class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=Ei$1({type:n,selectors:[[`app-root`]],decls:1,vars:0,template:function(e,t){e&1&&vd(0,`app-shell`)},dependencies:[Dt],encapsulation:2})};Qk(kt,_i).catch(n=>console.error(n));export{n$1 as $,En as A,V$3 as B,nn as C,xn as D,w as E,q$2 as F,en$1 as G,an$1 as H,A as I,nn$1 as J,f as K,G$1 as L,ae$2 as M,K$2 as N,yt$1 as O,j$1 as P,z$1 as Q,J$3 as R,kn as S,un as T,cn$1 as U,Z$2 as V,d as W,q$3 as X,on$1 as Y,tn$1 as Z,Vt$1 as _,_t$3 as _t,Rt as a,Ze$2 as at,je as b,zo as bt,ye$1 as c,gt$3 as ct,Gn as d,De$2 as dt,s as et,Ln as f,Te$2 as ft,V$1 as g,Z$3 as gt,Tn as h,Xe$3 as ht,N as i,Xe$2 as it,Ut$3 as j,n as k,$ as l,se$2 as lt,Qt$1 as m,W$2 as mt,Ht$1 as n,$n as nt,me as o,bt$4 as ot,N$1 as p,U$3 as pt,g as q,J as r,Qn as rt,xt$1 as s,fn as st,Dt$1 as t,u as tt,$e as u,Bo as ut,dt as v,lo as vt,pt$1 as w,jn as x,w$2 as xt,fe$1 as y,wt$4 as yt,O$1 as z};