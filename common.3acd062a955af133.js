"use strict";(self.webpackChunkmhbp_angular=self.webpackChunkmhbp_angular||[]).push([[592],{7520:(m,s,e)=>{function n(t){return t}e.d(s,{J:()=>n})},5986:(m,s,e)=>{e.d(s,{h:()=>n});var n=(()=>{return(t=n||(n={}))[t.Error=-1]="Error",t[t.Unknown=0]="Unknown",t[t.Stored=1]="Stored",t[t.Preparing=2]="Preparing",t[t.Processing=3]="Processing",t[t.Finished=4]="Finished",t[t.Archived=5]="Archived",n;var t})()},535:(m,s,e)=>{e.d(s,{C:()=>n});var n=(()=>{return(t=n||(n={}))[t.show=0]="show",t[t.loading=1]="loading",t[t.empty=2]="empty",t[t.wait=3]="wait",t[t.firstLoading=4]="firstLoading",n;var t})()},5126:(m,s,e)=>{e.d(s,{k:()=>a});var n=e(1180),t=e(2340),p=e(3788),u=e(4650),o=e(9299);let a=(()=>{class i{constructor(C,d){(0,n.Z)(this,"authenticationService",void 0),(0,n.Z)(this,"router",void 0),this.authenticationService=C,this.router=d}canActivate(C,d){var c,_,r,l;t.N.production||(console.groupCollapsed("%c%s","color:orange;",d.url),console.log("%c%s","color:blue;","requiredRoles: ",this.authenticationService.convertRolesToString(C.data.requiredRoles)),console.log("%c%s","color:blue;",this.authenticationService.user.username+": ",this.authenticationService.convertRolesToString(null===(r=this.authenticationService.user)||void 0===r||null===(l=r.authorities)||void 0===l?void 0:l.map(v=>v.authority))),console.groupEnd());let g=!1;const f=this.authenticationService.getUserRole();return null===(c=C.data)||void 0===c||null===(_=c.requiredRoles)||void 0===_||_.forEach(v=>{f.has(v)&&(g=!0)}),g}}return(0,n.Z)(i,"\u0275fac",function(C){return new(C||i)(u.LFG(p.$h),u.LFG(o.F0))}),(0,n.Z)(i,"\u0275prov",u.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})),i})()},1336:(m,s,e)=>{e.d(s,{v:()=>u});var n=e(1180),t=e(4650);const p=["*"];let u=(()=>{class o{constructor(){}}return(0,n.Z)(o,"\u0275fac",function(i){return new(i||o)}),(0,n.Z)(o,"\u0275cmp",t.Xpm({type:o,selectors:[["app-ct-alert"]],ngContentSelectors:p,decls:1,vars:0,template:function(i,h){1&i&&(t.F$t(),t.Hsn(0))},styles:["[_nghost-%COMP%]{display:block;padding:13.5px 15.75px 11.25px;line-height:1.2;border-radius:4.5px}[theme=info][_nghost-%COMP%]{background-color:#0080ff1a}[theme=warning][_nghost-%COMP%]{background-color:#ff80004d}[theme=danger][_nghost-%COMP%]{background-color:#ff000080}[theme=success][_nghost-%COMP%]{background-color:#80ff004d}"]})),o})()},197:(m,s,e)=>{e.d(s,{N:()=>d});var n=e(1180),t=e(4650),p=e(9299),u=e(6895),o=e(4859),a=e(8868),i=e(3370),h=e(3081);function C(c,_){if(1&c){const r=t.EpF();t.TgZ(0,"div"),t._uU(1,"\n    "),t.TgZ(2,"app-ct-flex",1),t._uU(3,"\n        "),t.TgZ(4,"app-ct-flex-item"),t._uU(5,"\n            "),t.TgZ(6,"button",2),t.NdJ("click",function(){t.CHM(r);const g=t.oxw();return t.KtG(g.back())}),t._uU(7),t.ALo(8,"translate"),t.qZA(),t._uU(9,"\n        "),t.qZA(),t._uU(10,"\n    "),t.qZA(),t._uU(11,"\n"),t.qZA()}2&c&&(t.xp6(7),t.hij("",t.lcZ(8,1,"ctBackButton.back")," "))}let d=(()=>{class c{constructor(r,l){(0,n.Z)(this,"router",void 0),(0,n.Z)(this,"activatedRoute",void 0),(0,n.Z)(this,"subs",[]),(0,n.Z)(this,"config",void 0),this.router=r,this.activatedRoute=l}ngOnInit(){this.subs.push(this.router.events.subscribe(()=>{this.setConfig()})),this.subs.push(this.activatedRoute.firstChild.data.subscribe(()=>{this.setConfig()}))}setConfig(){var r,l,g,f;this.config=null===(r=this.activatedRoute)||void 0===r||null===(l=r.snapshot)||void 0===l||null===(g=l.firstChild)||void 0===g||null===(f=g.data)||void 0===f?void 0:f.backConfig}ngOnDestroy(){this.subs.forEach(r=>r.unsubscribe())}back(){this.router.navigate(this.serialize(this.config))}serialize(r){let l=[].concat(this.router.url.split("/")).concat(r);return r.forEach(()=>l=function g(f){return f.indexOf("../")+1&&(f[f.indexOf("../")-1]=null,f[f.indexOf("../")]=null),f.filter(P=>P||!1)}(l)),l}}return(0,n.Z)(c,"\u0275fac",function(r){return new(r||c)(t.Y36(p.F0),t.Y36(p.gz))}),(0,n.Z)(c,"\u0275cmp",t.Xpm({type:c,selectors:[["app-ct-back-button"]],decls:1,vars:1,consts:[[4,"ngIf"],["justify-content","flex-end"],["mat-fab","","color","primary",3,"click"]],template:function(r,l){1&r&&t.YNc(0,C,12,3,"div",0),2&r&&t.Q6J("ngIf",l.config)},dependencies:[u.O5,o.cs,a.B,i.i,h.X$],styles:["div[_ngcontent-%COMP%]{padding:18px}"]})),c})()},1099:(m,s,e)=>{e.d(s,{E:()=>C});var n=e(1180),t=e(4650),p=e(6895),u=e(4859),o=e(7392);const a=["fileInput"];function i(d,c){if(1&d){const _=t.EpF();t.TgZ(0,"button",4),t.NdJ("click",function(){t.CHM(_),t.oxw();const l=t.MAs(1);return t.KtG(l.click())}),t._uU(1),t.qZA()}if(2&d){const _=t.oxw();t.xp6(1),t.Oqu(_.buttonTitleString)}}function h(d,c){if(1&d){const _=t.EpF();t.TgZ(0,"div",5),t._uU(1,"\n    "),t.TgZ(2,"div",6),t._uU(3),t.qZA(),t._uU(4,"\n    "),t.TgZ(5,"div",7),t.NdJ("click",function(){t.CHM(_);const l=t.oxw();return t.KtG(l.removeFile())}),t._uU(6,"\n        "),t.TgZ(7,"mat-icon"),t._uU(8,"close"),t.qZA(),t._uU(9,"\n    "),t.qZA(),t._uU(10,"\n"),t.qZA()}if(2&d){const _=t.oxw();t.xp6(3),t.Oqu(_.value)}}let C=(()=>{class d{constructor(){(0,n.Z)(this,"changed",new t.vpe),(0,n.Z)(this,"fileInput",void 0),(0,n.Z)(this,"buttonTitle",void 0),(0,n.Z)(this,"acceptTypes",""),(0,n.Z)(this,"value",""),(0,n.Z)(this,"buttonTitleString",void 0),(0,n.Z)(this,"accept",void 0)}ngOnInit(){this.buttonTitleString=this.buttonTitle||"Select File"}ngOnChanges(){this.buttonTitleString=this.buttonTitle||"Select File"}fileChanged(){this.value=this.fileInput.nativeElement.value,this.changed.emit("fileChanged")}removeFile(){this.fileInput.nativeElement.value="",this.value="",this.changed.emit("fileChanged")}}return(0,n.Z)(d,"\u0275fac",function(_){return new(_||d)}),(0,n.Z)(d,"\u0275cmp",t.Xpm({type:d,selectors:[["app-ct-file-upload"]],viewQuery:function(_,r){if(1&_&&t.Gf(a,7),2&_){let l;t.iGM(l=t.CRH())&&(r.fileInput=l.first)}},inputs:{buttonTitle:"buttonTitle",acceptTypes:"acceptTypes"},outputs:{changed:"changed"},features:[t.TTD],decls:6,vars:3,consts:[["hidden","hidden","type","file","name","file",3,"accept","change"],["fileInput",""],["mat-flat-button","mat-flat-button","wide","wide","color","primary",3,"click",4,"ngIf"],["class","file",4,"ngIf"],["mat-flat-button","mat-flat-button","wide","wide","color","primary",3,"click"],[1,"file"],[1,"file__value"],[1,"file__close",3,"click"]],template:function(_,r){1&_&&(t.TgZ(0,"input",0,1),t.NdJ("change",function(){return r.fileChanged()}),t.qZA(),t._uU(2,"\n"),t.YNc(3,i,2,1,"button",2),t._uU(4,"\n"),t.YNc(5,h,11,1,"div",3)),2&_&&(t.s9C("accept",r.acceptTypes),t.xp6(3),t.Q6J("ngIf",!r.value),t.xp6(2),t.Q6J("ngIf",r.value))},dependencies:[p.O5,u.lW,o.Hw],styles:["[_nghost-%COMP%]{display:block;margin-bottom:.55em}.file[_ngcontent-%COMP%]{display:flex;justify-content:space-between;border:1px solid rgba(128,128,128,.5);border-radius:5px;line-height:1;align-items:center;height:36px}.file__value[_ngcontent-%COMP%]{padding:4px 16px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;direction:rtl;text-align:left}.file__close[_ngcontent-%COMP%]{flex-shrink:0;border-left:1px solid rgba(128,128,128,.5);width:48px;height:32px;cursor:pointer}.file__close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.dark-theme[_nghost-%COMP%]   .file[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .file[_ngcontent-%COMP%]{border-color:#80808080}.dark-theme[_nghost-%COMP%]   .file__close[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .file__close[_ngcontent-%COMP%]{border-color:#80808080}"]})),d})()},2587:(m,s,e)=>{e.d(s,{C:()=>u});var n=e(1180),t=e(4650);const p=["*"];let u=(()=>{class o{constructor(){}}return(0,n.Z)(o,"\u0275fac",function(i){return new(i||o)}),(0,n.Z)(o,"\u0275cmp",t.Xpm({type:o,selectors:[["app-ct-hint"]],ngContentSelectors:p,decls:1,vars:0,template:function(i,h){1&i&&(t.F$t(),t.Hsn(0))},styles:["[_nghost-%COMP%]{font-size:75%;display:block;padding:0 1em}.light-theme[_nghost-%COMP%], .light-theme   [_nghost-%COMP%]{color:#0000008a}.dark-theme[_nghost-%COMP%], .dark-theme   [_nghost-%COMP%]{color:#ffffffb3}"]})),o})()},9160:(m,s,e)=>{e.d(s,{E:()=>u});var n=e(1180),t=e(4650);const p=["*"];let u=(()=>{class o{constructor(){}}return(0,n.Z)(o,"\u0275fac",function(i){return new(i||o)}),(0,n.Z)(o,"\u0275cmp",t.Xpm({type:o,selectors:[["app-ct-pre-10px"]],ngContentSelectors:p,decls:1,vars:0,template:function(i,h){1&i&&(t.F$t(),t.Hsn(0))},styles:["[_nghost-%COMP%]{display:block;font-family:Roboto Mono,Courier New,Courier,monospace;padding:0;font-size:10px;line-height:1;word-break:break-word;white-space:pre-wrap}[overflow-x=auto][_nghost-%COMP%]{overflow-x:auto}"]})),o})()},4853:(m,s,e)=>{e.d(s,{Q:()=>u});var n=e(1180),t=e(4650);const p=["*"];let u=(()=>{class o{constructor(){}}return(0,n.Z)(o,"\u0275fac",function(i){return new(i||o)}),(0,n.Z)(o,"\u0275cmp",t.Xpm({type:o,selectors:[["app-ct-pre"]],ngContentSelectors:p,decls:1,vars:0,template:function(i,h){1&i&&(t.F$t(),t.Hsn(0))},styles:["[_nghost-%COMP%]{display:block;font-family:Roboto Mono,Courier New,Courier,monospace;padding:0;font-size:12px;line-height:1.6;word-break:break-word;white-space:pre-wrap}[overflow-x=auto][_nghost-%COMP%]{overflow-x:auto}"]})),o})()},4190:(m,s,e)=>{e.d(s,{F:()=>u});var n=e(1180),t=(()=>{return(o=t||(t={})).local="local",o.source="source",o.replicated="replicated",t;var o})(),p=e(4650);let u=(()=>{class o{constructor(){}isLocal(i){return i===t.local}isReplicated(i){return i===t.replicated}isSource(i){return i===t.source}}return(0,n.Z)(o,"\u0275fac",function(i){return new(i||o)}),(0,n.Z)(o,"\u0275prov",p.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})),o})()}}]);