"use strict";(self.webpackChunkdevlight_university=self.webpackChunkdevlight_university||[]).push([[895],{328:(ne,L,_)=>{_.d(L,{FN:()=>Ei,Q_:()=>Ii,g7:()=>Mi,_G:()=>gt,w6:()=>yt});var u=_(177),m=_(4438),y=_(6860),K=_(1413),xe=(_(8359),_(4402),_(7673)),Wt=_(4412),Qt=(_(8141),_(3888)),it=_(9974),nt=_(4360);var ot=_(5964),Fe=_(6354),ke=_(6697);function rt(s){return(0,ot.p)((t,e)=>s<=e)}var zt=_(3669);function Xt(s,t){return s===t}var at=_(6977),ie=_(4085),Yt=_(4572),Zt=_(8793),Jt=_(1985),qt=_(9172);const lt=new Set;let H,ei=(()=>{class s{_platform=(0,m.WQX)(y.OD);_nonce=(0,m.WQX)(m.BIS,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):ii}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&function ti(s,t){if(!lt.has(s))try{H||(H=document.createElement("style"),t&&H.setAttribute("nonce",t),H.setAttribute("type","text/css"),document.head.appendChild(H)),H.sheet&&(H.sheet.insertRule(`@media ${s} {body{ }}`,0),lt.add(s))}catch(e){console.error(e)}}(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(n){return new(n||s)};static \u0275prov=m.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();function ii(s){return{matches:"all"===s||""===s,media:s,addListener:()=>{},removeListener:()=>{}}}let ni=(()=>{class s{_mediaMatcher=(0,m.WQX)(ei);_zone=(0,m.WQX)(m.SKi);_queries=new Map;_destroySubject=new K.B;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return dt((0,ie.FG)(e)).some(a=>this._registerQuery(a).mql.matches)}observe(e){const a=dt((0,ie.FG)(e)).map(g=>this._registerQuery(g).observable);let d=(0,Yt.z)(a);return d=(0,Zt.x)(d.pipe((0,ke.s)(1)),d.pipe(rt(1),function st(s,t=Qt.E){return(0,it.N)((e,n)=>{let a=null,d=null,g=null;const v=()=>{if(a){a.unsubscribe(),a=null;const j=d;d=null,n.next(j)}};function R(){const j=g+s,It=t.now();if(It<j)return a=this.schedule(void 0,j-It),void n.add(a);v()}e.subscribe((0,nt._)(n,j=>{d=j,g=t.now(),a||(a=t.schedule(R,s),n.add(a))},()=>{v(),n.complete()},void 0,()=>{d=a=null}))})}(0))),d.pipe((0,Fe.T)(g=>{const v={matches:!1,breakpoints:{}};return g.forEach(({matches:R,query:j})=>{v.matches=v.matches||R,v.breakpoints[j]=R}),v}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);const n=this._mediaMatcher.matchMedia(e),d={observable:new Jt.c(g=>{const v=R=>this._zone.run(()=>g.next(R));return n.addListener(v),()=>{n.removeListener(v)}}).pipe((0,qt.Z)(n),(0,Fe.T)(({matches:g})=>({query:e,matches:g})),(0,at.Q)(this._destroySubject)),mql:n};return this._queries.set(e,d),d}static \u0275fac=function(n){return new(n||s)};static \u0275prov=m.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();function dt(s){return s.map(t=>t.split(",")).reduce((t,e)=>t.concat(e)).map(t=>t.trim())}function gt(s){return 0===s.buttons||0===s.detail}function yt(s){const t=s.touches&&s.touches[0]||s.changedTouches&&s.changedTouches[0];return!(!t||-1!==t.identifier||null!=t.radiusX&&1!==t.radiusX||null!=t.radiusY&&1!==t.radiusY)}const fi=new m.nKC("cdk-input-modality-detector-options"),gi={ignoreKeys:[18,17,224,91,16]},X=(0,y.BQ)({passive:!0,capture:!0});let yi=(()=>{class s{_platform=(0,m.WQX)(y.OD);modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Wt.t(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=(0,y.Fb)(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<650||(this._modality.next(gt(e)?"keyboard":"mouse"),this._mostRecentTarget=(0,y.Fb)(e))};_onTouchstart=e=>{yt(e)?this._modality.next("keyboard"):(this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=(0,y.Fb)(e))};constructor(){const e=(0,m.WQX)(m.SKi),n=(0,m.WQX)(u.qQ),a=(0,m.WQX)(fi,{optional:!0});this._options={...gi,...a},this.modalityDetected=this._modality.pipe(rt(1)),this.modalityChanged=this.modalityDetected.pipe(function $t(s,t=zt.D){return s=s??Xt,(0,it.N)((e,n)=>{let a,d=!0;e.subscribe((0,nt._)(n,g=>{const v=t(g);(d||!s(a,v))&&(d=!1,a=v,n.next(g))}))})}()),this._platform.isBrowser&&e.runOutsideAngular(()=>{n.addEventListener("keydown",this._onKeydown,X),n.addEventListener("mousedown",this._onMousedown,X),n.addEventListener("touchstart",this._onTouchstart,X)})}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,X),document.removeEventListener("mousedown",this._onMousedown,X),document.removeEventListener("touchstart",this._onTouchstart,X))}static \u0275fac=function(n){return new(n||s)};static \u0275prov=m.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var le=function(s){return s[s.IMMEDIATE=0]="IMMEDIATE",s[s.EVENTUAL=1]="EVENTUAL",s}(le||{});const bi=new m.nKC("cdk-focus-monitor-default-options"),de=(0,y.BQ)({passive:!0,capture:!0});let Ei=(()=>{class s{_ngZone=(0,m.WQX)(m.SKi);_platform=(0,m.WQX)(y.OD);_inputModalityDetector=(0,m.WQX)(yi);_origin=null;_lastFocusOrigin;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=(0,m.WQX)(u.qQ,{optional:!0});_stopInputModalityDetector=new K.B;constructor(){const e=(0,m.WQX)(bi,{optional:!0});this._detectionMode=e?.detectionMode||le.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{for(let a=(0,y.Fb)(e);a;a=a.parentElement)"focus"===e.type?this._onFocus(e,a):this._onBlur(e,a)};monitor(e,n=!1){const a=(0,ie.i8)(e);if(!this._platform.isBrowser||1!==a.nodeType)return(0,xe.of)();const d=(0,y.KT)(a)||this._getDocument(),g=this._elementInfo.get(a);if(g)return n&&(g.checkChildren=!0),g.subject;const v={checkChildren:n,subject:new K.B,rootNode:d};return this._elementInfo.set(a,v),this._registerGlobalListeners(v),v.subject}stopMonitoring(e){const n=(0,ie.i8)(e),a=this._elementInfo.get(n);a&&(a.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(a))}focusVia(e,n,a){const d=(0,ie.i8)(e);d===this._getDocument().activeElement?this._getClosestElementsInfo(d).forEach(([v,R])=>this._originChanged(v,n,R)):(this._setOrigin(n),"function"==typeof d.focus&&d.focus(a))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===le.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle("cdk-focused",!!n),e.classList.toggle("cdk-touch-focused","touch"===n),e.classList.toggle("cdk-keyboard-focused","keyboard"===n),e.classList.toggle("cdk-mouse-focused","mouse"===n),e.classList.toggle("cdk-program-focused","program"===n)}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{this._origin=e,this._originFromTouchInteraction="touch"===e&&n,this._detectionMode===le.IMMEDIATE&&(clearTimeout(this._originTimeoutId),this._originTimeoutId=setTimeout(()=>this._origin=null,this._originFromTouchInteraction?650:1))})}_onFocus(e,n){const a=this._elementInfo.get(n),d=(0,y.Fb)(e);!a||!a.checkChildren&&n!==d||this._originChanged(n,this._getFocusOrigin(d),a)}_onBlur(e,n){const a=this._elementInfo.get(n);!a||a.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(a,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;const n=e.rootNode,a=this._rootNodeFocusListenerCount.get(n)||0;a||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,de),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,de)}),this._rootNodeFocusListenerCount.set(n,a+1),1==++this._monitoredElementCount&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe((0,at.Q)(this._stopInputModalityDetector)).subscribe(d=>{this._setOrigin(d,!0)}))}_removeGlobalListeners(e){const n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){const a=this._rootNodeFocusListenerCount.get(n);a>1?this._rootNodeFocusListenerCount.set(n,a-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,de),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,de),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,a){this._setClasses(e,n),this._emitOrigin(a,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){const n=[];return this._elementInfo.forEach((a,d)=>{(d===e||a.checkChildren&&d.contains(e))&&n.push([d,a])}),n}_isLastInteractionFromInputLabel(e){const{_mostRecentTarget:n,mostRecentModality:a}=this._inputModalityDetector;if("mouse"!==a||!n||n===e||"INPUT"!==e.nodeName&&"TEXTAREA"!==e.nodeName||e.disabled)return!1;const d=e.labels;if(d)for(let g=0;g<d.length;g++)if(d[g].contains(n))return!0;return!1}static \u0275fac=function(n){return new(n||s)};static \u0275prov=m.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var W=function(s){return s[s.NONE=0]="NONE",s[s.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",s[s.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",s}(W||{});const bt="cdk-high-contrast-black-on-white",Et="cdk-high-contrast-white-on-black",we="cdk-high-contrast-active";let Ii=(()=>{class s{_platform=(0,m.WQX)(y.OD);_hasCheckedHighContrastMode;_document=(0,m.WQX)(u.qQ);_breakpointSubscription;constructor(){this._breakpointSubscription=(0,m.WQX)(ni).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return W.NONE;const e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);const n=this._document.defaultView||window,a=n&&n.getComputedStyle?n.getComputedStyle(e):null,d=(a&&a.backgroundColor||"").replace(/ /g,"");switch(e.remove(),d){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return W.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return W.BLACK_ON_WHITE}return W.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){const e=this._document.body.classList;e.remove(we,bt,Et),this._hasCheckedHighContrastMode=!0;const n=this.getHighContrastMode();n===W.BLACK_ON_WHITE?e.add(we,bt):n===W.WHITE_ON_BLACK&&e.add(we,Et)}}static \u0275fac=function(n){return new(n||s)};static \u0275prov=m.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();const Oe={};let Mi=(()=>{class s{_appId=(0,m.WQX)(m.sZ2);getId(e){return"ng"!==this._appId&&(e+=this._appId),Oe.hasOwnProperty(e)||(Oe[e]=0),`${e}${Oe[e]++}`}static \u0275fac=function(n){return new(n||s)};static \u0275prov=m.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()},4085:(ne,L,_)=>{_.d(L,{FG:()=>C,i8:()=>M});var u=_(4438);function C(p){return Array.isArray(p)?p:[p]}function M(p){return p instanceof u.aKT?p.nativeElement:p}},6860:(ne,L,_)=>{_.d(L,{BQ:()=>A,Fb:()=>me,KT:()=>he,OD:()=>G});var u=_(4438),m=_(177);let y;try{y=typeof Intl<"u"&&Intl.v8BreakIterator}catch{y=!1}let p,Y,G=(()=>{class h{_platformId=(0,u.WQX)(u.Agw);isBrowser=this._platformId?(0,m.UE)(this._platformId):"object"==typeof document&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!(!window.chrome&&!y)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(O){return new(O||h)};static \u0275prov=u.jDH({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})();function A(h){return function x(){if(null==p&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>p=!0}))}finally{p=p||!1}return p}()?h:!!h.capture}function he(h){if(function ue(){if(null==Y){const h=typeof document<"u"?document.head:null;Y=!(!h||!h.createShadowRoot&&!h.attachShadow)}return Y}()){const b=h.getRootNode?h.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&b instanceof ShadowRoot)return b}return null}function me(h){return h.composedPath?h.composedPath()[0]:h.target}},9046:(ne,L,_)=>{_.d(L,{l:()=>y});var u=_(4438);const m=new WeakMap;let y=(()=>{class C{_appRef;_injector=(0,u.WQX)(u.zZn);_environmentInjector=(0,u.WQX)(u.uvJ);load(M){const T=this._appRef=this._appRef||this._injector.get(u.o8S);let p=m.get(T);p||(p={loaders:new Set,refs:[]},m.set(T,p),T.onDestroy(()=>{m.get(T)?.refs.forEach(x=>x.destroy()),m.delete(T)})),p.loaders.has(M)||(p.loaders.add(M),p.refs.push((0,u.a0P)(M,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(T){return new(T||C)};static \u0275prov=u.jDH({token:C,factory:C.\u0275fac,providedIn:"root"})}return C})()},8895:(ne,L,_)=>{_.d(L,{yE:()=>U,r6:()=>Xe,Ej:()=>Je,tO:()=>qe,Ah:()=>He});var u=_(4438),m=_(328),y=_(177);let x=(()=>{class c{static \u0275fac=function(o){return new(o||c)};static \u0275mod=u.$C({type:c});static \u0275inj=u.G2t({})}return c})();var A=_(6860),w=_(4085),S=_(9046);const pe=["mat-internal-form-field",""],_e=["*"];let U=(()=>{class c{constructor(){(0,u.WQX)(m.Q_)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(o){return new(o||c)};static \u0275mod=u.$C({type:c});static \u0275inj=u.G2t({imports:[x,x]})}return c})(),He=(()=>{class c{static \u0275fac=function(o){return new(o||c)};static \u0275cmp=u.VBU({type:c,selectors:[["structural-styles"]],decls:0,vars:0,template:function(o,l){},styles:['.mat-focus-indicator{position:relative}.mat-focus-indicator::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border-width:var(--mat-focus-indicator-border-width, 3px);border-style:var(--mat-focus-indicator-border-style, solid);border-color:var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus::before{content:""}@media(forced-colors: active){html{--mat-focus-indicator-display: block}}'],encapsulation:2,changeDetection:0})}return c})();var D=function(c){return c[c.FADING_IN=0]="FADING_IN",c[c.VISIBLE=1]="VISIBLE",c[c.FADING_OUT=2]="FADING_OUT",c[c.HIDDEN=3]="HIDDEN",c}(D||{});class We{_renderer;element;config;_animationForciblyDisabledThroughCss;state=D.HIDDEN;constructor(r,i,o,l=!1){this._renderer=r,this.element=i,this.config=o,this._animationForciblyDisabledThroughCss=l}fadeOut(){this._renderer.fadeOutRipple(this)}}const fe=(0,A.BQ)({passive:!0,capture:!0});class Ge{_events=new Map;addHandler(r,i,o,l){const f=this._events.get(i);if(f){const E=f.get(o);E?E.add(l):f.set(o,new Set([l]))}else this._events.set(i,new Map([[o,new Set([l])]])),r.runOutsideAngular(()=>{document.addEventListener(i,this._delegateEventHandler,fe)})}removeHandler(r,i,o){const l=this._events.get(r);if(!l)return;const f=l.get(i);f&&(f.delete(o),0===f.size&&l.delete(i),0===l.size&&(this._events.delete(r),document.removeEventListener(r,this._delegateEventHandler,fe)))}_delegateEventHandler=r=>{const i=(0,A.Fb)(r);i&&this._events.get(r.type)?.forEach((o,l)=>{(l===i||l.contains(i))&&o.forEach(f=>f.handleEvent(r))})}}const J={enterDuration:225,exitDuration:150},ge=(0,A.BQ)({passive:!0,capture:!0}),ye=["mousedown","touchstart"],ve=["mouseup","mouseleave","touchend","touchcancel"];let ze=(()=>{class c{static \u0275fac=function(o){return new(o||c)};static \u0275cmp=u.VBU({type:c,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(o,l){},styles:[".mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale3d(0, 0, 0);background-color:var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent))}@media(forced-colors: active){.mat-ripple-element{display:none}}.cdk-drag-preview .mat-ripple-element,.cdk-drag-placeholder .mat-ripple-element{display:none}"],encapsulation:2,changeDetection:0})}return c})();class z{_target;_ngZone;_platform;_containerElement;_triggerElement;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect;static _eventManager=new Ge;constructor(r,i,o,l,f){this._target=r,this._ngZone=i,this._platform=l,l.isBrowser&&(this._containerElement=(0,w.i8)(o)),f&&f.get(S.l).load(ze)}fadeInRipple(r,i,o={}){const l=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),f={...J,...o.animation};o.centered&&(r=l.left+l.width/2,i=l.top+l.height/2);const E=o.radius||function $e(c,r,i){const o=Math.max(Math.abs(c-i.left),Math.abs(c-i.right)),l=Math.max(Math.abs(r-i.top),Math.abs(r-i.bottom));return Math.sqrt(o*o+l*l)}(r,i,l),ee=r-l.left,$=i-l.top,P=f.enterDuration,I=document.createElement("div");I.classList.add("mat-ripple-element"),I.style.left=ee-E+"px",I.style.top=$-E+"px",I.style.height=2*E+"px",I.style.width=2*E+"px",null!=o.color&&(I.style.backgroundColor=o.color),I.style.transitionDuration=`${P}ms`,this._containerElement.appendChild(I);const Te=window.getComputedStyle(I),Ae=Te.transitionDuration,ae="none"===Te.transitionProperty||"0s"===Ae||"0s, 0s"===Ae||0===l.width&&0===l.height,B=new We(this,I,o,ae);I.style.transform="scale3d(1, 1, 1)",B.state=D.FADING_IN,o.persistent||(this._mostRecentTransientRipple=B);let te=null;return!ae&&(P||f.exitDuration)&&this._ngZone.runOutsideAngular(()=>{const De=()=>{te&&(te.fallbackTimer=null),clearTimeout(Ce),this._finishRippleTransition(B)},ce=()=>this._destroyRipple(B),Ce=setTimeout(ce,P+100);I.addEventListener("transitionend",De),I.addEventListener("transitioncancel",ce),te={onTransitionEnd:De,onTransitionCancel:ce,fallbackTimer:Ce}}),this._activeRipples.set(B,te),(ae||!P)&&this._finishRippleTransition(B),B}fadeOutRipple(r){if(r.state===D.FADING_OUT||r.state===D.HIDDEN)return;const i=r.element,o={...J,...r.config.animation};i.style.transitionDuration=`${o.exitDuration}ms`,i.style.opacity="0",r.state=D.FADING_OUT,(r._animationForciblyDisabledThroughCss||!o.exitDuration)&&this._finishRippleTransition(r)}fadeOutAll(){this._getActiveRipples().forEach(r=>r.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(r=>{r.config.persistent||r.fadeOut()})}setupTriggerEvents(r){const i=(0,w.i8)(r);!this._platform.isBrowser||!i||i===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=i,ye.forEach(o=>{z._eventManager.addHandler(this._ngZone,o,i,this)}))}handleEvent(r){"mousedown"===r.type?this._onMousedown(r):"touchstart"===r.type?this._onTouchStart(r):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{ve.forEach(i=>{this._triggerElement.addEventListener(i,this,ge)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(r){r.state===D.FADING_IN?this._startFadeOutTransition(r):r.state===D.FADING_OUT&&this._destroyRipple(r)}_startFadeOutTransition(r){const i=r===this._mostRecentTransientRipple,{persistent:o}=r.config;r.state=D.VISIBLE,!o&&(!i||!this._isPointerDown)&&r.fadeOut()}_destroyRipple(r){const i=this._activeRipples.get(r)??null;this._activeRipples.delete(r),this._activeRipples.size||(this._containerRect=null),r===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),r.state=D.HIDDEN,null!==i&&(r.element.removeEventListener("transitionend",i.onTransitionEnd),r.element.removeEventListener("transitioncancel",i.onTransitionCancel),null!==i.fallbackTimer&&clearTimeout(i.fallbackTimer)),r.element.remove()}_onMousedown(r){const i=(0,m._G)(r),o=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+800;!this._target.rippleDisabled&&!i&&!o&&(this._isPointerDown=!0,this.fadeInRipple(r.clientX,r.clientY,this._target.rippleConfig))}_onTouchStart(r){if(!this._target.rippleDisabled&&!(0,m.w6)(r)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;const i=r.changedTouches;if(i)for(let o=0;o<i.length;o++)this.fadeInRipple(i[o].clientX,i[o].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(r=>{!r.config.persistent&&(r.state===D.VISIBLE||r.config.terminateOnPointerUp&&r.state===D.FADING_IN)&&r.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){const r=this._triggerElement;r&&(ye.forEach(i=>z._eventManager.removeHandler(i,r,this)),this._pointerUpEventsRegistered&&(ve.forEach(i=>r.removeEventListener(i,this,ge)),this._pointerUpEventsRegistered=!1))}}const be=new u.nKC("mat-ripple-global-options");let Xe=(()=>{class c{_elementRef=(0,u.WQX)(u.aKT);_animationMode=(0,u.WQX)(u.bc$,{optional:!0});color;unbounded;centered;radius=0;animation;get disabled(){return this._disabled}set disabled(i){i&&this.fadeOutAllNonPersistent(),this._disabled=i,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(i){this._trigger=i,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){const i=(0,u.WQX)(u.SKi),o=(0,u.WQX)(A.OD),l=(0,u.WQX)(be,{optional:!0}),f=(0,u.WQX)(u.zZn);this._globalOptions=l||{},this._rippleRenderer=new z(this,i,this._elementRef,o,f)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:{...this._globalOptions.animation,..."NoopAnimations"===this._animationMode?{enterDuration:0,exitDuration:0}:{},...this.animation},terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(i,o=0,l){return"number"==typeof i?this._rippleRenderer.fadeInRipple(i,o,{...this.rippleConfig,...l}):this._rippleRenderer.fadeInRipple(0,0,{...this.rippleConfig,...i})}static \u0275fac=function(o){return new(o||c)};static \u0275dir=u.FsC({type:c,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(o,l){2&o&&u.AVh("mat-ripple-unbounded",l.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return c})();const Ee={capture:!0},Ie=["focus","mousedown","mouseenter","touchstart"],oe="mat-ripple-loader-uninitialized",re="mat-ripple-loader-class-name",Me="mat-ripple-loader-centered",q="mat-ripple-loader-disabled";let Je=(()=>{class c{_document=(0,u.WQX)(y.qQ,{optional:!0});_animationMode=(0,u.WQX)(u.bc$,{optional:!0});_globalRippleOptions=(0,u.WQX)(be,{optional:!0});_platform=(0,u.WQX)(A.OD);_ngZone=(0,u.WQX)(u.SKi);_injector=(0,u.WQX)(u.zZn);_hosts=new Map;constructor(){this._ngZone.runOutsideAngular(()=>{for(const i of Ie)this._document?.addEventListener(i,this._onInteraction,Ee)})}ngOnDestroy(){const i=this._hosts.keys();for(const o of i)this.destroyRipple(o);for(const o of Ie)this._document?.removeEventListener(o,this._onInteraction,Ee)}configureRipple(i,o){i.setAttribute(oe,this._globalRippleOptions?.namespace??""),(o.className||!i.hasAttribute(re))&&i.setAttribute(re,o.className||""),o.centered&&i.setAttribute(Me,""),o.disabled&&i.setAttribute(q,"")}setDisabled(i,o){const l=this._hosts.get(i);l?(l.target.rippleDisabled=o,!o&&!l.hasSetUpEvents&&(l.hasSetUpEvents=!0,l.renderer.setupTriggerEvents(i))):o?i.setAttribute(q,""):i.removeAttribute(q)}_onInteraction=i=>{const o=(0,A.Fb)(i);if(o instanceof HTMLElement){const l=o.closest(`[${oe}="${this._globalRippleOptions?.namespace??""}"]`);l&&this._createRipple(l)}};_createRipple(i){if(!this._document||this._hosts.has(i))return;i.querySelector(".mat-ripple")?.remove();const o=this._document.createElement("span");o.classList.add("mat-ripple",i.getAttribute(re)),i.append(o);const l="NoopAnimations"===this._animationMode,f=this._globalRippleOptions,E=l?0:f?.animation?.enterDuration??J.enterDuration,ee=l?0:f?.animation?.exitDuration??J.exitDuration,$={rippleDisabled:l||f?.disabled||i.hasAttribute(q),rippleConfig:{centered:i.hasAttribute(Me),terminateOnPointerUp:f?.terminateOnPointerUp,animation:{enterDuration:E,exitDuration:ee}}},P=new z($,this._ngZone,o,this._platform,this._injector),I=!$.rippleDisabled;I&&P.setupTriggerEvents(i),this._hosts.set(i,{target:$,renderer:P,hasSetUpEvents:I}),i.removeAttribute(oe)}destroyRipple(i){const o=this._hosts.get(i);o&&(o.renderer._removeTriggerEvents(),this._hosts.delete(i))}static \u0275fac=function(o){return new(o||c)};static \u0275prov=u.jDH({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),qe=(()=>{class c{labelPosition;static \u0275fac=function(o){return new(o||c)};static \u0275cmp=u.VBU({type:c,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(o,l){2&o&&u.AVh("mdc-form-field--align-end","before"===l.labelPosition)},inputs:{labelPosition:"labelPosition"},attrs:pe,ngContentSelectors:_e,decls:1,vars:0,template:function(o,l){1&o&&(u.NAR(),u.SdG(0))},styles:[".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}"],encapsulation:2,changeDetection:0})}return c})()}}]);