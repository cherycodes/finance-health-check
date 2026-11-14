import{C as nn,D as xn,G as en,J as zo,L as Bo,T as un,Z as Yi,f as Ln,h as Tn,l as $,u as $e$1,v as dt,x as jn,y as fe}from"./main-5ZGMOXVL.js";import{c as Xn,u as Zn}from"./chunk-OaanQFKD.js";import{t as i}from"./chunk-Bol1gLGt.js";import{n as I,r as _,t as A}from"./chunk-Ymwp39S9.js";import{E as ot,h as Wn}from"./chunk-D2s12p0q.js";import{$n as rT,A as Ga,C as Ee,Er as wn,Et as Zb,Gn as pf,In as mf,Jn as pr,L as JT,Nt as aT,O as GG,On as kT,P as Iv,Pr as yT,R as Jc,Sr as ve,Ut as c_,Wt as cc,Xt as dc,Y as Nv,Yn as pv,Zt as df,cn as fv,dn as h,dr as te,g as D,i as A$,in as fT,ir as sT,jr as xi,k as GT,kn as l_,kr as wv,lr as tT,lt as Uh,n as $_,nn as e_,nt as Ri,on as ff,or as sc,pr as tv,pt as Wb,qn as pn,rn as ev,s as Bh,sn as fo,tr as rt,vn as ib,w as Ev,yn as ic}from"./chunk-Cnhyu77j.js";function Te(n,t){n&1&&(Ga(0,`p`,5),GT(1),df()),n&2&&(ib(),Ev(t))}var O=class n{add=A$();error=te(null);form=new $({name:new dt(``,{nonNullable:!0,validators:[fe.required]}),target:new dt(``,{nonNullable:!0,validators:[fe.required]}),date:new dt(``,{nonNullable:!0,validators:[fe.required]})});submit(){let{name:t,target:e,date:s}=this.form.getRawValue(),r=ot(e),l=Wn(s);if(!t.trim())return this.error.set(`Give the goal a name.`);if(r===null||r<=0)return this.error.set(`Enter a target amount in dollars, like 1200 or 450.50.`);if(!l)return this.error.set(`Choose a target date.`);this.error.set(null),this.add.emit({id:crypto.randomUUID(),name:t.trim(),target:r,kind:`custom`,targetDate:l}),this.form.reset()}static ɵfac=function(e){return new(e||n)};static ɵcmp=Ri({type:n,selectors:[[`app-custom-goal-form`]],outputs:{add:`add`},decls:13,vars:2,consts:[[`aria-label`,`Add a custom goal`,3,`ngSubmit`,`formGroup`],[`formControlName`,`name`,`data-input`,`goal-name`,`placeholder`,`Trip to see family`],[`formControlName`,`target`,`data-input`,`goal-target`,`inputmode`,`decimal`,`placeholder`,`1200`],[`formControlName`,`date`,`data-input`,`goal-date`,`type`,`date`],[`mat-flat-button`,``,`type`,`submit`],[`role`,`alert`,1,`error`]],template:function(e,s){if(e&1&&(Ga(0,`form`,0),sc(`ngSubmit`,function(){return s.submit()}),Ga(1,`label`),GT(2,` Goal name `),Ga(3,`input`,1),Wb(),df()(),Ga(4,`label`),GT(5,` Target amount `),Ga(6,`input`,2),Wb(),df()(),Ga(7,`label`),GT(8,` Target date `),Ga(9,`input`,3),Wb(),df()(),Ga(10,`button`,4),GT(11,`Add goal`),df()(),tT(12,Te,2,1,`p`,5)),e&2){let r;ev(`formGroup`,s.form),ib(3),Zb(),ib(3),Zb(),ib(3),Zb(),ib(3),rT((r=s.error())?12:-1,r)}},dependencies:[Ln,jn,$e$1,xn,Tn,nn,un,Bo,zo],styles:[`form[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:end;gap:.75rem}label[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem}input[_ngcontent-%COMP%]{font:inherit;color:inherit;background:var(--%NS%mat-sys-surface);border:1px solid var(--%NS%mat-sys-outline);border-radius:.25rem;padding:.375rem;min-height:2rem}.error[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error);font:var(--%NS%mat-sys-body-small)}`]})};var ze=new D(`MAT_PROGRESS_BAR_DEFAULT_OPTIONS`);var Pe=(()=>{class n{_elementRef=h(rt);_ngZone=h(Ee);_changeDetectorRef=h(fo);_renderer=h(wn);_cleanupTransitionEnd;constructor(){let e=en(),s=h(ze,{optional:!0});this._isNoopAnimation=e===`di-disabled`,e===`reduced-motion`&&this._elementRef.nativeElement.classList.add(`mat-progress-bar-reduced-motion`),s&&(s.color&&(this.color=this._defaultColor=s.color),this.mode=s.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;get value(){return this._value}set value(e){this._value=we(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=we(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new ve;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode=`determinate`;ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode===`buffer`?this.bufferValue:100}%`}_isIndeterminate(){return this.mode===`indeterminate`||this.mode===`query`}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains(`mdc-linear-progress__primary-bar`)||(this.mode===`determinate`||this.mode===`buffer`)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static ɵfac=function(s){return new(s||n)};static ɵcmp=(function(){function e(s,r){s&1&&tv(0,`div`,2)}return Ri({type:n,selectors:[[`mat-progress-bar`]],hostAttrs:[`role`,`progressbar`,`aria-valuemin`,`0`,`aria-valuemax`,`100`,`tabindex`,`-1`,1,`mat-mdc-progress-bar`,`mdc-linear-progress`],hostVars:10,hostBindings:function(r,l){r&2&&(xi(`aria-valuenow`,l._isIndeterminate()?null:l.value)(`mode`,l.mode),kT(`mat-`+l.color),pv(`_mat-animation-noopable`,l._isNoopAnimation)(`mdc-linear-progress--animation-ready`,!l._isNoopAnimation)(`mdc-linear-progress--indeterminate`,l._isIndeterminate()))},inputs:{color:`color`,value:[2,`value`,`value`,$_],bufferValue:[2,`bufferValue`,`bufferValue`,$_],mode:`mode`},outputs:{animationEnd:`animationEnd`},exportAs:[`matProgressBar`],decls:7,vars:5,consts:[[`aria-hidden`,`true`,1,`mdc-linear-progress__buffer`],[1,`mdc-linear-progress__buffer-bar`],[1,`mdc-linear-progress__buffer-dots`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__primary-bar`],[1,`mdc-linear-progress__bar-inner`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__secondary-bar`]],template:function(r,l){r&1&&(ff(0,`div`,0),tv(1,`div`,1),tT(2,e,1,0,`div`,2),pf(),ff(3,`div`,3),tv(4,`span`,4),pf(),ff(5,`div`,5),tv(6,`span`,4),pf()),r&2&&(ib(),fv(`flex-basis`,l._getBufferBarFlexBasis()),ib(),rT(l.mode===`buffer`?2:-1),ib(),fv(`transform`,l._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --%NS%mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --%NS%mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--%NS%mat-progress-bar-track-height, 4px), var(--%NS%mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--%NS%mat-progress-bar-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--%NS%mat-progress-bar-track-height, 4px);
  border-radius: var(--%NS%mat-progress-bar-track-shape, var(--%NS%mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant)) calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--%NS%mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2})})()}return n})();function we(n,t=0,e=100){return Math.max(t,Math.min(e,n))}var Xe=(()=>{class n{static ɵfac=function(s){return new(s||n)};static ɵmod=pr({type:n});static ɵinj=pn({imports:[GG]})}return n})();function Ie(n,t){if(n&1&&(Ga(0,`strong`,9),GT(1),df()),n&2){yT(2);let e=e_(0);pv(`late`,e.monthsLate>0),ib(),mf(` · `,e.monthsLate===0?`on time`:e.monthsLate+` month`+(e.monthsLate===1?``:`s`)+` late`,` `)}}function Ae(n,t){if(n&1&&(Ga(0,`span`),GT(1),tT(2,Ie,2,3,`strong`,8),df()),n&2){yT();let e=e_(0);ib(),mf(` Your date: `,e.targetDate,` `),ib(),rT(e.monthsLate!==void 0?2:-1)}}function Oe(n,t){n&1&&(Ga(0,`span`,6),GT(1,`· met already`),df())}function Ve(n,t){if(n&1&&(GT(0),c_(1,`money`)),n&2){yT();let e=e_(0);mf(` · projected cash then `,l_(1,1,e.projectedCash),` `)}}function Fe(n,t){if(n&1){let e=fT();Ga(0,`button`,10),sc(`click`,function(){Uh(e);let r=yT(),l=e_(0);return Bh(r.remove.emit(l.id))}),GT(1,`Remove`),df()}}var V=class n{goal=dc.required();remove=A$();percent=cc(()=>{let t=this.goal();return t.target>0?Math.min(100,Math.floor(t.current*100/t.target)):100});static ɵfac=function(e){return new(e||n)};static ɵcmp=Ri({type:n,selectors:[[`app-goal-card`]],inputs:{goal:[1,`goal`]},outputs:{remove:`remove`},decls:26,vars:22,consts:[[`appearance`,`outlined`],[1,`hint`],[1,`row`],[`data-field`,`target`],[`data-field`,`month`],[`mode`,`determinate`,3,`value`],[1,`done`],[`mat-button`,``,`type`,`button`],[`data-field`,`timing`,3,`late`],[`data-field`,`timing`],[`mat-button`,``,`type`,`button`,3,`click`]],template:function(e,s){if(e&1&&(Nv(0),Ga(1,`mat-card`,0)(2,`mat-card-content`)(3,`h3`),GT(4),df(),Ga(5,`p`,1),GT(6),df(),Ga(7,`div`,2)(8,`span`),GT(9,`Target: `),Ga(10,`strong`,3),GT(11),c_(12,`money`),df()(),Ga(13,`span`),GT(14,` Reached: `),Ga(15,`strong`,4),GT(16),df()(),tT(17,Ae,3,2,`span`),df(),ic(18,`mat-progress-bar`,5),Ga(19,`p`,1),GT(20),c_(21,`money`),c_(22,`money`),tT(23,Oe,2,0,`span`,6),tT(24,Ve,2,3),df(),tT(25,Fe,2,0,`button`,7),df()()),e&2){let r=JT(s.goal());ib(),xi(`data-goal`,r.n),ib(3),Iv(``,r.n,`. `,r.name),ib(2),Ev(r.description),ib(5),Ev(l_(12,16,r.target)),ib(5),Ev(r.monthReached??`not within the plan`),ib(),rT(r.targetDate?17:-1),ib(),ev(`value`,s.percent()),xi(`aria-label`,r.name+` progress `+s.percent()+`%`),ib(2),wv(` `,l_(21,18,r.current),` of `,l_(22,20,r.target),` (`,s.percent(),`%) `),ib(3),rT(r.metAtStart?23:-1),ib(),rT(r.projectedCash!==void 0&&r.kind.startsWith(`emergency`)?24:-1),ib(),rT(r.kind===`custom`&&r.id?25:-1)}},dependencies:[Bo,zo,A,I,_,Xe,Pe,i],styles:[`[_nghost-%COMP%]{display:block}h3[_ngcontent-%COMP%]{margin:0 0 .25rem;font:var(--%NS%mat-sys-title-medium)}.row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.25rem 1.5rem;margin:.5rem 0}.hint[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-body-small);color:var(--%NS%mat-sys-on-surface-variant)}.done[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-primary);font-weight:500}.late[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error)}`]})};var Re=(n,t)=>t.n;function Le(n,t){n&1&&(Ga(0,`p`,3),GT(1,` The plan cannot cover the minimum payments, so these months will not hold. See the `),Ga(2,`a`,8),GT(3,`Debts`),df(),GT(4,` page. `),df())}function je(n,t){if(n&1){let e=fT();Ga(0,`app-goal-card`,9),sc(`remove`,function(r){Uh(e);let l=yT(3);return Bh(l.remove(r))}),df()}if(n&2){let e=t.$implicit;ev(`goal`,e)}}function qe(n,t){if(n&1){let e=fT();Ga(0,`p`,0),GT(1,` The milestones of your plan, in the order you will reach them, each with its expected month. You can add your own at the bottom. `),df(),Ga(2,`section`,1)(3,`h2`),GT(4,` Your goals, in order `),ic(5,`app-info-tooltip`,2),df(),tT(6,Le,5,0,`p`,3),Ga(7,`div`,4),sT(8,je,1,1,`app-goal-card`,5,Re),df()(),Ga(10,`section`,6)(11,`h2`),GT(12,`Add your own goal`),df(),Ga(13,`app-custom-goal-form`,7),sc(`add`,function(r){Uh(e);let l=yT(2);return Bh(l.add(r))}),df()()}if(n&2){let e=yT(),s=yT();ib(6),rT(e.sim.shortfall?6:-1),ib(2),aT(s.view.goals())}}function Ze(n,t){n&1&&(Ga(0,`p`),GT(1,` No goals yet. `),Ga(2,`a`,10),GT(3,`Import your data`),df(),GT(4,` and the plan will suggest them in order. `),df())}function Ue(n,t){if(n&1&&tT(0,qe,14,1)(1,Ze,5,0,`p`),n&2){let e=yT();rT(e.view.goals().length>0?0:1)}}function $e(n,t){n&1&&(Ga(0,`p`),GT(1,`No data file is open. `),Ga(2,`a`,11),GT(3,`Go to Welcome`),df(),GT(4,`.`),df())}var Ge=class n{view=h(Xn);store=h(Yi);add(t){this.store.addGoal(t)}remove(t){this.store.removeGoal(t)}static ɵfac=function(e){return new(e||n)};static ɵcmp=Ri({type:n,selectors:[[`app-goals-page`]],decls:4,vars:1,consts:[[1,`page-intro`],[`aria-label`,`Goals in order`],[`text`,`Each target month comes from the payoff plan, or from the savings projection after you are debt-free.`,`section`,`8.4`],[`role`,`alert`],[`data-list`,`goals`,1,`goals`],[3,`goal`],[1,`panel`],[3,`add`],[`routerLink`,`/debts`],[3,`remove`,`goal`],[`routerLink`,`/import`],[`routerLink`,`/welcome`]],template:function(e,s){if(e&1&&(Ga(0,`h1`),GT(1,`Goals`),df(),tT(2,Ue,2,1)(3,$e,5,0,`p`)),e&2){let r;ib(2),rT((r=s.view.analysis())?2:3,r)}},dependencies:[Jc,Zn,O,V],styles:[`[_nghost-%COMP%]{display:block;max-width:72rem;margin:0 auto}section[_ngcontent-%COMP%]{margin-top:1.5rem}h2[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.25rem;font:var(--%NS%mat-sys-title-medium)}.goals[_ngcontent-%COMP%]{display:grid;gap:.75rem;grid-template-columns:repeat(auto-fill,minmax(min(100%,20rem),1fr))}`]})};export{Ge as GoalsPage};