import{E as de,N as tn,O as j,W as Yi,b as In,g as yn,h as xn,j as ot,k as ke,v as En,w as Xt,x as Mn,y as Fn$1}from"./main-LC4P3VVC.js";import{c as ko,n as Mo}from"./chunk-C2ag7lUe.js";import{t as i}from"./chunk-DmnT0muZ.js";import{h as Wn,w as ot$1}from"./chunk-D6jl9EM4.js";import{n as I,r as _,t as A}from"./chunk-C5hQpH0g.js";import{$t as ZS,An as gt,Ar as yc,Er as xf,Et as Tf,Fn as i4,Ft as Vv,I as Ic,In as iT,Ir as zS,K as KT,M as HS,Nt as VT,O as GC,On as gg,Ot as Ui,Pr as z2,Sr as wT,Tn as fu,V as Je,Wt as Y,Xt as Z,Y as Kv,Yt as Yv,Z as L_,Zt as Z2,_ as De,br as vc,ct as Nv,en as Ze,f as Bv,hr as tD,in as Zv,kn as gr,lt as OT,ot as Nf,p as Cc,pt as QT,r as $i,rr as pg,s as Av,sr as qS,tr as p,tt as Mf,u as BT,ur as rc,ut as O_,w as Fi,wn as f0,yr as v,z as JS}from"./chunk-B7W6jEV5.js";function zn(e,t){e&1&&(rc(0,`p`,5),OT(1),Tf()),e&2&&(GC(),Zv(t))}var O=class e{add=z2();error=Z(null);form=new j({name:new ot(``,{nonNullable:!0,validators:[de.required]}),target:new ot(``,{nonNullable:!0,validators:[de.required]}),date:new ot(``,{nonNullable:!0,validators:[de.required]})});submit(){let{name:t,target:n,date:s}=this.form.getRawValue(),r=ot$1(n),l=Wn(s);if(!t.trim())return this.error.set(`Give the goal a name.`);if(r===null||r<=0)return this.error.set(`Enter a target amount in dollars, like 1200 or 450.50.`);if(!l)return this.error.set(`Choose a target date.`);this.error.set(null),this.add.emit({id:crypto.randomUUID(),name:t.trim(),target:r,kind:`custom`,targetDate:l}),this.form.reset()}static ɵfac=function(n){return new(n||e)};static ɵcmp=Fi({type:e,selectors:[[`app-custom-goal-form`]],outputs:{add:`add`},decls:13,vars:2,consts:[[`aria-label`,`Add a custom goal`,3,`ngSubmit`,`formGroup`],[`formControlName`,`name`,`data-input`,`goal-name`,`placeholder`,`Trip to see family`],[`formControlName`,`target`,`data-input`,`goal-target`,`inputmode`,`decimal`,`placeholder`,`1200`],[`formControlName`,`date`,`data-input`,`goal-date`,`type`,`date`],[`mat-flat-button`,``,`type`,`submit`],[`role`,`alert`,1,`error`]],template:function(n,s){if(n&1&&(rc(0,`form`,0),vc(`ngSubmit`,function(){return s.submit()}),rc(1,`label`),OT(2,` Goal name `),rc(3,`input`,1),O_(),Tf()(),rc(4,`label`),OT(5,` Target amount `),rc(6,`input`,2),O_(),Tf()(),rc(7,`label`),OT(8,` Target date `),rc(9,`input`,3),O_(),Tf()(),rc(10,`button`,4),OT(11,`Add goal`),Tf()(),HS(12,zn,2,1,`p`,5)),n&2){let r;Nv(`formGroup`,s.form),GC(3),L_(),GC(3),L_(),GC(3),L_(),GC(3),zS((r=s.error())?12:-1,r)}},dependencies:[Fn$1,In,ke,Mn,En,Xt,tn,xn,yn],styles:[`form[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:end;gap:.75rem}label[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem}input[_ngcontent-%COMP%]{font:inherit;color:inherit;background:var(--%NS%mat-sys-surface);border:1px solid var(--%NS%mat-sys-outline);border-radius:.25rem;padding:.375rem;min-height:2rem}.error[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error);font:var(--%NS%mat-sys-body-small)}`]})};var Dn=new v(`MAT_PROGRESS_BAR_DEFAULT_OPTIONS`);var Xn=(()=>{class e{_elementRef=p(Ze);_ngZone=p(Y);_changeDetectorRef=p($i);_renderer=p(gr);_cleanupTransitionEnd;constructor(){let n=f0(),s=p(Dn,{optional:!0});this._isNoopAnimation=n===`di-disabled`,n===`reduced-motion`&&this._elementRef.nativeElement.classList.add(`mat-progress-bar-reduced-motion`),s&&(s.color&&(this.color=this._defaultColor=s.color),this.mode=s.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(n){this._color=n}_color;_defaultColor=`primary`;get value(){return this._value}set value(n){this._value=wn(n||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(n){this._bufferValue=wn(n||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new De;get mode(){return this._mode}set mode(n){this._mode=n,this._changeDetectorRef.markForCheck()}_mode=`determinate`;ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode===`buffer`?this.bufferValue:100}%`}_isIndeterminate(){return this.mode===`indeterminate`||this.mode===`query`}_transitionendHandler=n=>{this.animationEnd.observers.length===0||!n.target||!n.target.classList.contains(`mdc-linear-progress__primary-bar`)||(this.mode===`determinate`||this.mode===`buffer`)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static ɵfac=function(s){return new(s||e)};static ɵcmp=(function(){function n(s,r){s&1&&Av(0,`div`,2)}return Fi({type:e,selectors:[[`mat-progress-bar`]],hostAttrs:[`role`,`progressbar`,`aria-valuemin`,`0`,`aria-valuemax`,`100`,`tabindex`,`-1`,1,`mat-mdc-progress-bar`,`mdc-linear-progress`],hostVars:10,hostBindings:function(r,l){r&2&&(Ui(`aria-valuenow`,l._isIndeterminate()?null:l.value)(`mode`,l.mode),wT(`mat-`+l.color),Vv(`_mat-animation-noopable`,l._isNoopAnimation)(`mdc-linear-progress--animation-ready`,!l._isNoopAnimation)(`mdc-linear-progress--indeterminate`,l._isIndeterminate()))},inputs:{color:`color`,value:[2,`value`,`value`,Z2],bufferValue:[2,`bufferValue`,`bufferValue`,Z2],mode:`mode`},outputs:{animationEnd:`animationEnd`},exportAs:[`matProgressBar`],decls:7,vars:5,consts:[[`aria-hidden`,`true`,1,`mdc-linear-progress__buffer`],[1,`mdc-linear-progress__buffer-bar`],[1,`mdc-linear-progress__buffer-dots`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__primary-bar`],[1,`mdc-linear-progress__bar-inner`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__secondary-bar`]],template:function(r,l){r&1&&(Mf(0,`div`,0),Av(1,`div`,1),HS(2,n,1,0,`div`,2),Nf(),Mf(3,`div`,3),Av(4,`span`,4),Nf(),Mf(5,`div`,5),Av(6,`span`,4),Nf()),r&2&&(GC(),Bv(`flex-basis`,l._getBufferBarFlexBasis()),GC(),zS(l.mode===`buffer`?2:-1),GC(),Bv(`transform`,l._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
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
`],encapsulation:2})})()}return e})();function wn(e,t=0,n=100){return Math.max(t,Math.min(n,e))}var Gn=(()=>{class e{static ɵfac=function(s){return new(s||e)};static ɵmod=gt({type:e});static ɵinj=Je({imports:[i4]})}return e})();function An(e,t){if(e&1&&(rc(0,`strong`,9),OT(1),Tf()),e&2){iT(2);let n=VT(0);Vv(`late`,n.monthsLate>0),GC(),xf(` · `,n.monthsLate===0?`on time`:n.monthsLate+` month`+(n.monthsLate===1?``:`s`)+` late`,` `)}}function On(e,t){if(e&1&&(rc(0,`span`),OT(1),HS(2,An,2,3,`strong`,8),Tf()),e&2){iT();let n=VT(0);GC(),xf(` Your date: `,n.targetDate,` `),GC(),zS(n.monthsLate!==void 0?2:-1)}}function Vn(e,t){e&1&&(rc(0,`span`,6),OT(1,`· met already`),Tf())}function Fn(e,t){if(e&1&&(OT(0),KT(1,`money`)),e&2){iT();let n=VT(0);xf(` · projected cash then `,QT(1,1,n.projectedCash),` `)}}function Rn(e,t){if(e&1){let n=JS();rc(0,`button`,10),vc(`click`,function(){pg(n);let r=iT(),l=VT(0);return gg(r.remove.emit(l.id))}),OT(1,`Remove`),Tf()}}var V=class e{goal=Cc.required();remove=z2();percent=Ic(()=>{let t=this.goal();return t.target>0?Math.min(100,Math.floor(t.current*100/t.target)):100});static ɵfac=function(n){return new(n||e)};static ɵcmp=Fi({type:e,selectors:[[`app-goal-card`]],inputs:{goal:[1,`goal`]},outputs:{remove:`remove`},decls:26,vars:22,consts:[[`appearance`,`outlined`],[1,`hint`],[1,`row`],[`data-field`,`target`],[`data-field`,`month`],[`mode`,`determinate`,3,`value`],[1,`done`],[`mat-button`,``,`type`,`button`],[`data-field`,`timing`,3,`late`],[`data-field`,`timing`],[`mat-button`,``,`type`,`button`,3,`click`]],template:function(n,s){if(n&1&&(tD(0),rc(1,`mat-card`,0)(2,`mat-card-content`)(3,`h3`),OT(4),Tf(),rc(5,`p`,1),OT(6),Tf(),rc(7,`div`,2)(8,`span`),OT(9,`Target: `),rc(10,`strong`,3),OT(11),KT(12,`money`),Tf()(),rc(13,`span`),OT(14,` Reached: `),rc(15,`strong`,4),OT(16),Tf()(),HS(17,On,3,2,`span`),Tf(),yc(18,`mat-progress-bar`,5),rc(19,`p`,1),OT(20),KT(21,`money`),KT(22,`money`),HS(23,Vn,2,0,`span`,6),HS(24,Fn,2,3),Tf(),HS(25,Rn,2,0,`button`,7),Tf()()),n&2){let r=BT(s.goal());GC(),Ui(`data-goal`,r.n),GC(3),Kv(``,r.n,`. `,r.name),GC(2),Zv(r.description),GC(5),Zv(QT(12,16,r.target)),GC(5),Zv(r.monthReached??`not within the plan`),GC(),zS(r.targetDate?17:-1),GC(),Nv(`value`,s.percent()),Ui(`aria-label`,r.name+` progress `+s.percent()+`%`),GC(2),Yv(` `,QT(21,18,r.current),` of `,QT(22,20,r.target),` (`,s.percent(),`%) `),GC(3),zS(r.metAtStart?23:-1),GC(),zS(r.projectedCash!==void 0&&r.kind.startsWith(`emergency`)?24:-1),GC(),zS(r.kind===`custom`&&r.id?25:-1)}},dependencies:[xn,yn,A,I,_,Gn,Xn,i],styles:[`[_nghost-%COMP%]{display:block}h3[_ngcontent-%COMP%]{margin:0 0 .25rem;font:var(--%NS%mat-sys-title-medium)}.row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.25rem 1.5rem;margin:.5rem 0}.hint[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-body-small);color:var(--%NS%mat-sys-on-surface-variant)}.done[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-primary);font-weight:500}.late[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error)}`]})};var Ln=(e,t)=>t.n;function jn(e,t){e&1&&(rc(0,`p`,2),OT(1,` The plan cannot cover the minimum payments, so these months will not hold. See the `),rc(2,`a`,7),OT(3,`Debts`),Tf(),OT(4,` page. `),Tf())}function qn(e,t){if(e&1){let n=JS();rc(0,`app-goal-card`,8),vc(`remove`,function(r){pg(n);let l=iT(3);return gg(l.remove(r))}),Tf()}if(e&2){let n=t.$implicit;Nv(`goal`,n)}}function Zn(e,t){if(e&1){let n=JS();rc(0,`section`,0)(1,`h2`),OT(2,` Your goals, in order `),yc(3,`app-info-tooltip`,1),Tf(),HS(4,jn,5,0,`p`,2),rc(5,`div`,3),qS(6,qn,1,1,`app-goal-card`,4,Ln),Tf()(),rc(8,`section`,5)(9,`h2`),OT(10,`Add your own goal`),Tf(),rc(11,`app-custom-goal-form`,6),vc(`add`,function(r){pg(n);let l=iT(2);return gg(l.add(r))}),Tf()()}if(e&2){let n=iT(),s=iT();GC(4),zS(n.sim.shortfall?4:-1),GC(2),ZS(s.view.goals())}}function Un(e,t){e&1&&(rc(0,`p`),OT(1,` No goals yet. `),rc(2,`a`,9),OT(3,`Import your data`),Tf(),OT(4,` and the plan will suggest them in order. `),Tf())}function $n(e,t){if(e&1&&HS(0,Zn,12,1)(1,Un,5,0,`p`),e&2){let n=iT();zS(n.view.goals().length>0?0:1)}}function Hn(e,t){e&1&&(rc(0,`p`),OT(1,`No data is open. `),rc(2,`a`,10),OT(3,`Go to the start page`),Tf(),OT(4,`.`),Tf())}var Bn=class e{view=p(Mo);store=p(Yi);add(t){this.store.addGoal(t)}remove(t){this.store.removeGoal(t)}static ɵfac=function(n){return new(n||e)};static ɵcmp=Fi({type:e,selectors:[[`app-goals-page`]],decls:4,vars:1,consts:[[`aria-label`,`Goals in order`],[`text`,`Each target month comes from the payoff plan, or from the savings projection after you are debt-free.`,`section`,`8.4`],[`role`,`alert`],[`data-list`,`goals`,1,`goals`],[3,`goal`],[1,`panel`],[3,`add`],[`routerLink`,`/debts`],[3,`remove`,`goal`],[`routerLink`,`/import`],[`routerLink`,`/`]],template:function(n,s){if(n&1&&(rc(0,`h1`),OT(1,`Goals`),Tf(),HS(2,$n,2,1)(3,Hn,5,0,`p`)),n&2){let r;GC(2),zS((r=s.view.analysis())?2:3,r)}},dependencies:[fu,ko,O,V],styles:[`[_nghost-%COMP%]{display:block;max-width:72rem;margin:0 auto}section[_ngcontent-%COMP%]{margin-top:1.5rem}h2[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.25rem;font:var(--%NS%mat-sys-title-medium)}.goals[_ngcontent-%COMP%]{display:grid;gap:.75rem;grid-template-columns:repeat(auto-fill,minmax(min(100%,20rem),1fr))}`]})};export{Bn as GoalsPage};