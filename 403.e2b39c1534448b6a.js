"use strict";(self.webpackChunkmhbp_angular=self.webpackChunkmhbp_angular||[]).push([[403],{9272:(D,C,a)=>{a.d(C,{K:()=>p});var s=a(1180),o=a(5938),f=a(4128),c=a(4650),T=a(4859);let h=(()=>{class u{constructor(m,g){(0,s.Z)(this,"dialogRef",void 0),(0,s.Z)(this,"data",void 0),this.dialogRef=m,this.data=g}onNoClick(){this.dialogRef.close(0)}onYesClick(){this.dialogRef.close(1)}}return(0,s.Z)(u,"\u0275fac",function(m){return new(m||u)(c.Y36(o.so),c.Y36(o.WI))}),(0,s.Z)(u,"\u0275cmp",c.Xpm({type:u,selectors:[["app-dialog-confirmation"]],decls:18,vars:3,consts:[[1,"mat-dialog-content"],[1,"mat-dialog-actions"],[1,"mat-dialog-action"],["mat-flat-button","mat-flat-button","color","warn",3,"click"],["mat-stroked-button","mat-stroked-button",3,"click"]],template:function(m,g){1&m&&(c.TgZ(0,"div",0),c._uU(1),c.qZA(),c._UZ(2,"br"),c._uU(3,"\n"),c.TgZ(4,"div",1),c._uU(5,"\n  "),c.TgZ(6,"div",2),c._uU(7,"\n    "),c.TgZ(8,"button",3),c.NdJ("click",function(){return g.onYesClick()}),c._uU(9),c.qZA(),c._uU(10,"\n  "),c.qZA(),c._uU(11,"\n  "),c.TgZ(12,"div",2),c._uU(13,"\n    "),c.TgZ(14,"button",4),c.NdJ("click",function(){return g.onNoClick()}),c._uU(15),c.qZA(),c._uU(16,"\n  "),c.qZA(),c._uU(17,"\n"),c.qZA()),2&m&&(c.xp6(1),c.Oqu(g.data.question),c.xp6(8),c.Oqu(g.data.resolveTitle),c.xp6(6),c.Oqu(g.data.rejectTitle))},dependencies:[T.lW],styles:[".mat-dialog-actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin:0 -8px}.mat-dialog-action[_ngcontent-%COMP%]{flex:1;margin:0 8px}.mat-dialog-action[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:100%}.mat-dialog-content[_ngcontent-%COMP%]{max-height:none!important;overflow:hidden!important}"]})),u})();function p(u){return function(m,g,t){const O=t.value;return t.value=function(...b){let U={text:"",params:!1};"string"==typeof u.question(...b)?U.text=u.question(...b):U=u.question(...b),this.dialog||function _(){throw new Error("\ncomponent require MatDialog\n\nimport { MatDialog } from '@angular/material';\n...\nconstructor(\n    ...\n    private dialog: MatDialog\n    ...\n) {}\n                ")}(),U.params&&!this.translate&&function x(){throw new Error("\ncomponent require TranslateService\n\nimport { TranslateService } from '@ngx-translate/core';\n...\nconstructor(\n    ...\n    private translate: TranslateService\n    ...\n) {}\n                ")}(),this.translate?(0,f.D)(this.translate.get(U.text,U.params),this.translate.get(u.resolveTitle),this.translate.get(u.rejectTitle)).subscribe(v=>{this.dialog.open(h,{width:"500px",data:{question:v[0],resolveTitle:v[1],rejectTitle:v[2]}}).afterClosed().subscribe(w=>{w&&O.apply(this,b)})}):this.dialog.open(h,{width:"500px",data:{question:U.text,resolveTitle:u.resolveTitle,rejectTitle:u.rejectTitle}}).afterClosed().subscribe(v=>{v&&O.apply(this,b)})},t}}},7824:(D,C,a)=>{a.d(C,{C:()=>x});var s=a(1180),o=a(4650),f=a(6895),c=a(4859),T=a(7392),h=a(8868),p=a(3370);function _(u,Z){if(1&u){const m=o.EpF();o.TgZ(0,"app-ct-flex",1),o._uU(1,"\n    "),o.TgZ(2,"app-ct-flex-item"),o._uU(3,"\n        "),o.TgZ(4,"button",2),o.NdJ("click",function(){o.CHM(m);const t=o.oxw();return o.KtG(t._prev())}),o._uU(5,"\n            "),o.TgZ(6,"mat-icon"),o._uU(7,"arrow_back_ios"),o.qZA(),o._uU(8,"\n        "),o.qZA(),o._uU(9,"\n    "),o.qZA(),o._uU(10,"\n    "),o.TgZ(11,"app-ct-flex-item"),o._uU(12,"\n        "),o.TgZ(13,"button",2),o.NdJ("click",function(){o.CHM(m);const t=o.oxw();return o.KtG(t._next())}),o._uU(14,"\n            "),o.TgZ(15,"mat-icon"),o._uU(16,"arrow_forward_ios"),o.qZA(),o._uU(17,"\n        "),o.qZA(),o._uU(18,"\n    "),o.qZA(),o._uU(19,"\n"),o.qZA()}if(2&u){const m=o.oxw();o.xp6(4),o.Q6J("disabled",m.globalDisable||m.pageableDefault.first),o.xp6(9),o.Q6J("disabled",m.globalDisable||m.pageableDefault.last)}}let x=(()=>{class u{constructor(){(0,s.Z)(this,"next",new o.vpe),(0,s.Z)(this,"prev",new o.vpe),(0,s.Z)(this,"globalDisable",void 0),(0,s.Z)(this,"pageableDefault",void 0)}_next(){this.next.emit()}_prev(){this.prev.emit()}}return(0,s.Z)(u,"\u0275fac",function(m){return new(m||u)}),(0,s.Z)(u,"\u0275cmp",o.Xpm({type:u,selectors:[["app-ct-table-pagination"]],inputs:{globalDisable:"globalDisable",pageableDefault:"pageableDefault"},outputs:{next:"next",prev:"prev"},decls:1,vars:1,consts:[["justify-content","flex-start","gap","8px",4,"ngIf"],["justify-content","flex-start","gap","8px"],["mat-flat-button","","color","primary",3,"disabled","click"]],template:function(m,g){1&m&&o.YNc(0,_,20,2,"app-ct-flex",0),2&m&&o.Q6J("ngIf",g.pageableDefault)},dependencies:[f.O5,c.lW,T.Hw,h.B,p.i]})),u})()},7530:(D,C,a)=>{a.d(C,{a:()=>T});var s=a(1180),o=a(4650),f=a(1572);const c=["*"];let T=(()=>{class h{constructor(_){(0,s.Z)(this,"changeDetector",void 0),(0,s.Z)(this,"isWaiting",void 0),(0,s.Z)(this,"state",{wait:!1}),(0,s.Z)(this,"isFnMode",void 0),this.changeDetector=_}ngOnInit(){void 0===this.isWaiting?this.isFnMode=!0:(this.isFnMode=!1,this.state.wait=this.isWaiting)}ngOnDestroy(){this.changeDetector.detach()}ngOnChanges(){this.isFnMode||(this.state.wait=this.isWaiting)}wait(){this.isFnMode&&(this.state.wait=!0,this.changeDetector.destroyed||this.changeDetector.detectChanges())}show(){this.isFnMode&&(this.state.wait=!1,this.changeDetector.destroyed||this.changeDetector.detectChanges())}}return(0,s.Z)(h,"\u0275fac",function(_){return new(_||h)(o.Y36(o.sBO))}),(0,s.Z)(h,"\u0275cmp",o.Xpm({type:h,selectors:[["ct-table"]],inputs:{isWaiting:"isWaiting"},features:[o.TTD],ngContentSelectors:c,decls:12,vars:2,consts:[[1,"ct-table"],[1,"ct-table__body"],[1,"ct-table__wait"]],template:function(_,x){1&_&&(o.F$t(),o.TgZ(0,"div",0),o._uU(1,"\n    "),o.TgZ(2,"div",1),o._uU(3,"\n        "),o.Hsn(4),o._uU(5,"\n    "),o.qZA(),o._uU(6,"\n    "),o.TgZ(7,"div",2),o._uU(8,"\n        "),o._UZ(9,"mat-spinner"),o._uU(10,"\n    "),o.qZA(),o._uU(11,"\n"),o.qZA()),2&_&&o.ekj("ct-table--wait",x.state.wait)},dependencies:[f.Ou],styles:["[_nghost-%COMP%]{display:block;position:relative;margin:0;overflow-y:auto}[_nghost-%COMP%]     .mat-table{width:100%;border-collapse:collapse;background:none}[_nghost-%COMP%]     .mat-header-row{height:auto}[_nghost-%COMP%]     .mat-header-cell, [_nghost-%COMP%]     .mat-cell, [_nghost-%COMP%]     .mat-footer-cell{border-bottom-width:1px;border-bottom-style:solid;border-top-width:1px;border-top-style:solid;padding:9px;font-family:Roboto Condensed,sans-serif;font-size:14.94px;line-height:18px}[_nghost-%COMP%]     .mat-header-cell{white-space:nowrap;font-weight:700;vertical-align:baseline;color:inherit}[_nghost-%COMP%]     .mat-cell{vertical-align:baseline}[_nghost-%COMP%]     .mat-header-cell:first-child, [_nghost-%COMP%]     .mat-cell:first-child{padding-left:9px}[_nghost-%COMP%]     .mat-header-cell:last-child, [_nghost-%COMP%]     .mat-cell:last-child{padding-right:9px}[_nghost-%COMP%]     .mat-row{height:auto}.light-theme[_nghost-%COMP%]     .mat-header-cell, .light-theme   [_nghost-%COMP%]     .mat-header-cell, .light-theme[_nghost-%COMP%]     .mat-cell, .light-theme   [_nghost-%COMP%]     .mat-cell, .light-theme[_nghost-%COMP%]     .mat-footer-cell, .light-theme   [_nghost-%COMP%]     .mat-footer-cell{border-top-color:#f0f0f0;border-bottom-color:#f0f0f0}.dark-theme[_nghost-%COMP%]     .mat-header-cell, .dark-theme   [_nghost-%COMP%]     .mat-header-cell, .dark-theme[_nghost-%COMP%]     .mat-cell, .dark-theme   [_nghost-%COMP%]     .mat-cell, .dark-theme[_nghost-%COMP%]     .mat-footer-cell, .dark-theme   [_nghost-%COMP%]     .mat-footer-cell{border-top-color:#474747;border-bottom-color:#474747}.ct-table[_ngcontent-%COMP%]{position:relative}.ct-table__wait[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:none;align-items:center;justify-content:center;background-color:#ffffff1a;overflow:hidden}.ct-table--wait[_ngcontent-%COMP%]   .ct-table__body[_ngcontent-%COMP%]{opacity:.5}.ct-table--wait[_ngcontent-%COMP%]   .ct-table__wait[_ngcontent-%COMP%]{display:flex}"]})),h})()},6403:(D,C,a)=>{a.r(C),a.d(C,{KbModule:()=>Kt,KbRoutes:()=>H,KbRoutingModule:()=>z});var s=a(1180),o=a(6895),f=a(9299),c=a(3081),T=a(1623),h=a(6603),p=a(4006),_=a(3626),x=a(8318),u=a(3788),Z=a(9272),m=a(2340),g=a(7528),t=a(4650),O=a(529);const b=e=>`${m.N.baseUrl}dispatcher/kb/${e}`;let U=(()=>{class e{constructor(n){(0,s.Z)(this,"http",void 0),(0,s.Z)(this,"editFormCommit",(l,r)=>this.http.post(b(`kb-edit-commit/${l}`),(0,g.P)({params:r}))),this.http=n}getKbs(n){let l=b("kbs");return console.log("KbService.newUrl: "+l),this.http.get(l,{params:{page:n}})}getKb(n){return this.http.get(b(`kb/${n}`))}kbDeleteCommit(n){return console.log("Delete KB #"+n),this.http.post(b("kb-delete-commit"),(0,g.P)({id:n}))}addFormCommit(n,l){return this.http.post(b("kb-add-commit"),(0,g.P)({code:n,params:l}))}kbInit(n){return console.log("Init KB #"+n),this.http.post(b("kb-init"),(0,g.P)({id:n}))}}return(0,s.Z)(e,"\u0275fac",function(n){return new(n||e)(t.LFG(O.eN))}),(0,s.Z)(e,"\u0275prov",t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})),e})();var v=a(5938),w=a(9160),E=a(1439),Y=a(9185),k=a(6890),q=a(2555),G=a(7530),R=a(6264),S=a(305),I=a(5014),N=a(8868),J=a(3370),j=a(9863),X=a(7824),P=a(4859),V=a(7392),tt=a(455),F=function(e,i,n,l){var y,r=arguments.length,d=r<3?i:null===l?l=Object.getOwnPropertyDescriptor(i,n):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(e,i,n,l);else for(var B=e.length-1;B>=0;B--)(y=e[B])&&(d=(r<3?y(d):r>3?y(i,n,d):y(i,n))||d);return r>3&&d&&Object.defineProperty(i,n,d),d},M=function(e,i){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,i)};function et(e,i){1&e&&t.GkF(0)}function nt(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"app-ct-section"),t._uU(1,"\n    "),t.TgZ(2,"app-ct-section-header"),t._uU(3,"\n        "),t.TgZ(4,"app-ct-section-header-row"),t._uU(5,"\n            "),t.TgZ(6,"app-ct-flex",2),t._uU(7,"\n                "),t.TgZ(8,"app-ct-flex-item"),t._uU(9,"\n                    "),t.TgZ(10,"app-ct-heading"),t._uU(11,"Knowledge Bases"),t.qZA(),t._uU(12,"\n                "),t.qZA(),t._uU(13,"\n            "),t.qZA(),t._uU(14,"\n            "),t.TgZ(15,"app-ct-flex-item"),t._uU(16,"\n                "),t.TgZ(17,"mat-slide-toggle",3),t.NdJ("ngModelChange",function(r){t.CHM(n);const d=t.oxw();return t.KtG(d.expandParams=r)}),t._uU(18,"\n                    Expand params\n                "),t.qZA(),t._uU(19,"\n            "),t.qZA(),t._uU(20,"\n            "),t.TgZ(21,"app-ct-flex",4),t._uU(22,"\n                "),t.TgZ(23,"app-ct-flex-item"),t._uU(24,"\n                    "),t.TgZ(25,"button",5),t._uU(26,"Add KB"),t.qZA(),t._uU(27,"\n                "),t.qZA(),t._uU(28,"\n            "),t.qZA(),t._uU(29,"\n        "),t.qZA(),t._uU(30,"\n    "),t.qZA(),t._uU(31,"\n    "),t.TgZ(32,"app-ct-section-body"),t._uU(33,"\n        "),t.TgZ(34,"app-ct-section-body-row"),t._uU(35,"\n            "),t.YNc(36,et,1,0,"ng-container",6),t._uU(37,"\n        "),t.qZA(),t._uU(38,"\n    "),t.qZA(),t._uU(39,"\n    "),t.TgZ(40,"app-ct-section-footer"),t._uU(41,"\n        "),t.TgZ(42,"app-ct-section-footer-row"),t._uU(43,"\n            "),t.TgZ(44,"app-ct-flex",2),t._uU(45,"\n                "),t.TgZ(46,"app-ct-flex-item"),t._uU(47,"\n                    "),t.TgZ(48,"app-ct-flex",7),t._uU(49,"\n                        "),t.TgZ(50,"app-ct-table-pagination",8),t.NdJ("next",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.nextPage())})("prev",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.prevPage())}),t._uU(51,"\n                        "),t.qZA(),t._uU(52,"\n                    "),t.qZA(),t._uU(53,"\n                "),t.qZA(),t._uU(54,"\n            "),t.qZA(),t._uU(55,"\n        "),t.qZA(),t._uU(56,"\n    "),t.qZA(),t._uU(57,"\n"),t.qZA()}if(2&e){const n=t.oxw(),l=t.MAs(3);t.xp6(17),t.Q6J("ngModel",n.expandParams),t.xp6(19),t.Q6J("ngTemplateOutlet",l),t.xp6(14),t.Q6J("pageableDefault",n.simpleKbsResult.kbs)("globalDisable",n.isLoading)}}function ot(e,i){1&e&&(t.TgZ(0,"th",23),t._uU(1,"Id"),t.qZA())}function at(e,i){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&e){const n=i.$implicit;t.xp6(1),t.hij("",n.id," ")}}function it(e,i){1&e&&(t.TgZ(0,"th",23),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"kb.code")))}function st(e,i){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&e){const n=i.$implicit;t.xp6(1),t.hij("",n.code," ")}}function lt(e,i){1&e&&(t.TgZ(0,"th",23),t._uU(1,"Status"),t.qZA())}function ct(e,i){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&e){const n=i.$implicit;t.xp6(1),t.hij("",n.status," ")}}function rt(e,i){1&e&&t._UZ(0,"th",23)}const pt=function(e){return["/dispatcher/kb/edit/",e]};function ut(e,i){if(1&e&&(t.TgZ(0,"app-ct-flex-item"),t._uU(1,"\n                            "),t.TgZ(2,"button",30),t._uU(3,"\n                                Edit"),t.qZA(),t._uU(4,"\n                        "),t.qZA()),2&e){const n=t.oxw(2).$implicit;t.xp6(2),t.Q6J("routerLink",t.VKq(1,pt,n.id))}}function _t(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"app-ct-flex",27),t._uU(1,"\n                        "),t.YNc(2,ut,5,3,"app-ct-flex-item",0),t._uU(3,"\n                        "),t.TgZ(4,"app-ct-flex-item"),t._uU(5,"\n                            "),t.TgZ(6,"button",28),t.NdJ("click",function(){t.CHM(n);const r=t.oxw().$implicit,d=t.oxw(2);return t.KtG(d.initKb(r))}),t._uU(7,"\n                                Init\n                            "),t.qZA(),t._uU(8,"\n                        "),t.qZA(),t._uU(9,"\n                        "),t.TgZ(10,"app-ct-flex-item"),t._uU(11,"\n                            "),t.TgZ(12,"button",29),t.NdJ("click",function(){t.CHM(n);const r=t.oxw().$implicit,d=t.oxw(2);return t.KtG(d.delete(r))}),t._uU(13,"\n                                "),t.TgZ(14,"mat-icon"),t._uU(15,"delete"),t.qZA(),t._uU(16,"\n                            "),t.qZA(),t._uU(17,"\n                        "),t.qZA(),t._uU(18,"\n                    "),t.qZA()}2&e&&(t.xp6(2),t.Q6J("ngIf",!1))}function mt(e,i){if(1&e&&(t.TgZ(0,"td",25),t._uU(1,"\n                    "),t.YNc(2,_t,19,1,"app-ct-flex",26),t._uU(3,"\n                "),t.qZA()),2&e){const n=i.$implicit;t.xp6(2),t.Q6J("ngIf",n.editable)}}function dt(e,i){1&e&&(t.TgZ(0,"td",25),t._uU(1," "),t.qZA())}function gt(e,i){if(1&e&&(t.TgZ(0,"td",25),t._uU(1,"\n                    "),t.TgZ(2,"b"),t._uU(3,"Params:"),t.qZA(),t._uU(4,"\n                    "),t.TgZ(5,"app-ct-pre-10px"),t._uU(6),t.qZA(),t._uU(7,"\n                "),t.qZA()),2&e){const n=i.$implicit,l=t.oxw(2);t.uIk("colspan",l.columnsToDisplay.length-1),t.xp6(6),t.hij("",n.params||"\u2014"," ")}}function ft(e,i){1&e&&t._UZ(0,"tr",31)}function ht(e,i){1&e&&t._UZ(0,"tr",32)}function bt(e,i){if(1&e&&t._UZ(0,"tr",33),2&e){const n=t.oxw(2);t.Q6J("hidden",!n.expandParams)}}function Zt(e,i){if(1&e&&(t._uU(0,"\n    "),t.TgZ(1,"ct-table",9),t._uU(2,"\n        "),t.TgZ(3,"table",10),t._uU(4,"\n            "),t.ynx(5,11),t._uU(6,"\n                "),t.YNc(7,ot,2,0,"th",12),t._uU(8,"\n                "),t.YNc(9,at,2,1,"td",13),t._uU(10,"\n            "),t.BQk(),t._uU(11,"\n            "),t.ynx(12,14),t._uU(13,"\n                "),t.YNc(14,it,3,3,"th",12),t._uU(15,"\n                "),t.YNc(16,st,2,1,"td",13),t._uU(17,"\n            "),t.BQk(),t._uU(18,"\n            "),t.ynx(19,15),t._uU(20,"\n                "),t.YNc(21,lt,2,0,"th",12),t._uU(22,"\n                "),t.YNc(23,ct,2,1,"td",13),t._uU(24,"\n            "),t.BQk(),t._uU(25,"\n            "),t.ynx(26,16),t._uU(27,"\n                "),t.YNc(28,rt,1,0,"th",12),t._uU(29,"\n                "),t.YNc(30,mt,4,1,"td",17),t._uU(31,"\n            "),t.BQk(),t._uU(32,"\n            "),t.ynx(33,18),t._uU(34,"\n                "),t.YNc(35,dt,2,0,"td",17),t._uU(36,"\n            "),t.BQk(),t._uU(37,"\n            "),t.ynx(38,19),t._uU(39,"\n                "),t.YNc(40,gt,8,2,"td",17),t._uU(41,"\n            "),t.BQk(),t._uU(42,"\n            "),t.YNc(43,ft,1,0,"tr",20),t._uU(44,"\n            "),t.YNc(45,ht,1,0,"tr",21),t._uU(46,"\n            "),t.YNc(47,bt,1,1,"tr",22),t._uU(48,"\n        "),t.qZA(),t._uU(49,"\n    "),t.qZA(),t._uU(50,"\n")),2&e){const n=t.oxw();t.xp6(1),t.Q6J("isWaiting",n.isLoading),t.xp6(2),t.Q6J("dataSource",n.dataSource),t.xp6(40),t.Q6J("matHeaderRowDef",n.columnsToDisplay),t.xp6(2),t.Q6J("matRowDefColumns",n.columnsToDisplay),t.xp6(2),t.Q6J("matRowDefColumns",n.secondColumnsToDisplay)}}class A extends x.S{constructor(i,n,l){super(n),(0,s.Z)(this,"dialog",void 0),(0,s.Z)(this,"authenticationService",void 0),(0,s.Z)(this,"kbService",void 0),(0,s.Z)(this,"columnsToDisplay",["id","code","status","bts"]),(0,s.Z)(this,"secondColumnsToDisplay",["empty","params"]),(0,s.Z)(this,"simpleKbsResult",void 0),(0,s.Z)(this,"dataSource",new _.by([])),(0,s.Z)(this,"expandParams",!1),this.dialog=i,this.authenticationService=n,this.kbService=l}ngOnInit(){console.log("kbs.component.ts.ngOnInit()"),this.getKbs(0)}getKbs(i){this.setIsLoadingStart(),this.kbService.getKbs(i.toString()).subscribe({next:n=>{this.simpleKbsResult=n,console.log("KbsComponent.simpleKbsResult: "+JSON.stringify(this.simpleKbsResult)),this.dataSource=new _.by(this.simpleKbsResult.kbs.content||[]),console.log("KbsComponent.simpleKbsResult: #3")},complete:()=>{this.setIsLoadingEnd()}})}initKb(i){this.kbService.kbInit(i.id.toString()).subscribe(n=>this.getKbs(this.simpleKbsResult.kbs.number))}delete(i){this.kbService.kbDeleteCommit(i.id.toString()).subscribe(n=>this.getKbs(this.simpleKbsResult.kbs.number))}prevPage(){this.getKbs(this.simpleKbsResult.kbs.number-1)}nextPage(){this.getKbs(this.simpleKbsResult.kbs.number+1)}}(0,s.Z)(A,"\u0275fac",function(i){return new(i||A)(t.Y36(v.uw),t.Y36(u.$h),t.Y36(U))}),(0,s.Z)(A,"\u0275cmp",t.Xpm({type:A,selectors:[["kbs"]],features:[t.qOj],decls:5,vars:1,consts:[[4,"ngIf"],["mainTableTemplate",""],["justify-content","space-between"],[3,"ngModel","ngModelChange"],["justify-content","flex-end"],["mat-flat-button","mat-flat-button","color","primary","routerLink","add"],[4,"ngTemplateOutlet"],["justify-content","flex-start","gap","8px"],[3,"pageableDefault","globalDisable","next","prev"],[3,"isWaiting"],["mat-table","mat-table","multiTemplateDataRows","multiTemplateDataRows",1,"mat-table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","mat-cell",4,"matCellDef"],["matColumnDef","code"],["matColumnDef","status"],["matColumnDef","bts"],["mat-cell","",4,"matCellDef"],["matColumnDef","empty"],["matColumnDef","params"],["mat-header-row","",4,"matHeaderRowDef"],["class","first-row","mat-row","",4,"matRowDef","matRowDefColumns"],["class","second-row","mat-row","",3,"hidden",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell","mat-cell"],["mat-cell",""],["justify-content","flex-end","gap","8px",4,"ngIf"],["justify-content","flex-end","gap","8px"],["mat-flat-button","","size","forTableRow","color","primary",3,"click"],["mat-flat-button","","color","warn","size","forTableRow",3,"click"],["mat-flat-button","","size","forTableRow","color","primary",3,"routerLink"],["mat-header-row",""],["mat-row","",1,"first-row"],["mat-row","",1,"second-row",3,"hidden"]],template:function(i,n){1&i&&(t.YNc(0,nt,58,4,"app-ct-section",0),t._uU(1,"\n\n"),t.YNc(2,Zt,51,5,"ng-template",null,1,t.W1O),t._uU(4,"\n\n\n")),2&i&&t.Q6J("ngIf",n.simpleKbsResult)},dependencies:[o.O5,o.tP,f.rH,w.E,E.U,Y.n,k.V,q.R,G.a,R.i,S.Z,I.t,N.B,J.i,j._,X.C,P.lW,V.Hw,tt.Rr,_.BZ,_.fO,_.as,_.w1,_.Dz,_.nj,_.ge,_.ev,_.XQ,_.Gk,p.JJ,p.On,c.X$],styles:[".section[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-width:0}.mat-mdc-cell[_ngcontent-%COMP%]{vertical-align:top}.first-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .first-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-bottom:none}.second-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .second-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:none}.alert-success[_ngcontent-%COMP%]{background-color:#00800040;padding:0 2px}.alert-danger[_ngcontent-%COMP%]{background-color:#ff000040;padding:0 2px}mat-checkbox[_ngcontent-%COMP%]{padding-left:10px}"]})),F([(0,Z.K)({question:e=>`Do you want to init KB #${e.id}`,resolveTitle:"Init",rejectTitle:"Cancel"}),M("design:type",Function),M("design:paramtypes",[Object]),M("design:returntype",void 0)],A.prototype,"initKb",null),F([(0,Z.K)({question:e=>`Do you want to delete KB #${e.id}`,resolveTitle:"Delete",rejectTitle:"Cancel"}),M("design:type",Function),M("design:paramtypes",[Object]),M("design:returntype",void 0)],A.prototype,"delete",null);var L=a(535),Ut=a(3735),W=a(2379),Q=a(5510),$=a(284),K=a(9549);function Ct(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"app-ct-section-body"),t._uU(1,"\n                "),t.TgZ(2,"app-ct-section-body-row"),t._uU(3,"\n                    "),t.TgZ(4,"app-ct-section-content"),t._uU(5,"\n                        "),t.TgZ(6,"mat-form-field",6),t._uU(7,"\n                            "),t.TgZ(8,"mat-label"),t._uU(9,"Params"),t.qZA(),t._uU(10,"\n                            "),t.TgZ(11,"input",7),t.NdJ("ngModelChange",function(r){t.CHM(n);const d=t.oxw();return t.KtG(d.kb.params=r)}),t.qZA(),t._uU(12,"\n                        "),t.qZA(),t._uU(13,"\n                    "),t.qZA(),t._uU(14,"\n                "),t.qZA(),t._uU(15,"\n            "),t.qZA()}if(2&e){const n=t.oxw();t.xp6(11),t.Q6J("ngModel",n.kb.params)}}function Tt(e,i){if(1&e&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&e){const n=i.$implicit;t.xp6(1),t.Oqu(n)}}function xt(e,i){if(1&e&&(t.TgZ(0,"app-ct-section"),t._uU(1,"\n            "),t.TgZ(2,"app-ct-section-body"),t._uU(3,"\n                "),t.TgZ(4,"app-ct-section-body-row"),t._uU(5,"\n                    "),t.TgZ(6,"p"),t._uU(7),t.qZA(),t._uU(8,"\n                    "),t.YNc(9,Tt,2,1,"p",8),t._uU(10,"\n                "),t.qZA(),t._uU(11,"\n            "),t.qZA(),t._uU(12,"\n        "),t.qZA()),2&e){const n=t.oxw();t.xp6(7),t.hij("STATUS: ",n.response.status,""),t.xp6(2),t.Q6J("ngForOf",n.response.errorMessages)}}let vt=(()=>{class e{constructor(n,l,r,d){(0,s.Z)(this,"route",void 0),(0,s.Z)(this,"router",void 0),(0,s.Z)(this,"kbService",void 0),(0,s.Z)(this,"location",void 0),(0,s.Z)(this,"states",L.C),(0,s.Z)(this,"currentStates",new Set),(0,s.Z)(this,"response",void 0),(0,s.Z)(this,"kb",void 0),this.route=n,this.router=l,this.kbService=r,this.location=d}ngOnInit(){this.currentStates.add(this.states.firstLoading),this.getApi()}getApi(){const n=this.route.snapshot.paramMap.get("id");this.kbService.getKb(n).subscribe(l=>{this.kb=l.kb},()=>{},()=>{this.currentStates.delete(this.states.firstLoading)})}back(){this.location.back()}save(){this.currentStates.add(this.states.wait),this.kbService.editFormCommit(this.kb.id.toString(),this.kb.params).subscribe(n=>{this.router.navigate(["/dispatcher","kbs"])},()=>{},()=>{this.currentStates.delete(this.states.wait)})}}return(0,s.Z)(e,"\u0275fac",function(n){return new(n||e)(t.Y36(f.gz),t.Y36(f.F0),t.Y36(U),t.Y36(o.Ye))}),(0,s.Z)(e,"\u0275cmp",t.Xpm({type:e,selectors:[["kb-edit"]],decls:46,vars:8,consts:[["align-items","baseline"],["size","6"],[4,"ngIf"],["justify-content","flex-end","gap","8px"],["mat-stroked-button","mat-stroked-button",3,"click"],["mat-flat-button","mat-flat-button","color","primary",3,"disabled","click"],["appearance","outline"],["matInput","matInput",3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"]],template:function(n,l){1&n&&(t.TgZ(0,"app-ct-cols",0),t._uU(1,"\n    "),t.TgZ(2,"app-ct-col",1),t._uU(3,"\n        "),t.TgZ(4,"app-ct-section"),t._uU(5,"\n            "),t.TgZ(6,"app-ct-section-header"),t._uU(7,"\n                "),t.TgZ(8,"app-ct-section-header-row"),t._uU(9,"\n                    "),t.TgZ(10,"app-ct-heading"),t._uU(11),t.qZA(),t._uU(12,"\n                "),t.qZA(),t._uU(13,"\n            "),t.qZA(),t._uU(14,"\n            "),t.YNc(15,Ct,16,1,"app-ct-section-body",2),t._uU(16,"\n            "),t.TgZ(17,"app-ct-section-footer"),t._uU(18,"\n                "),t.TgZ(19,"app-ct-section-footer-row"),t._uU(20,"\n                    "),t.TgZ(21,"app-ct-flex",3),t._uU(22,"\n                        "),t.TgZ(23,"app-ct-flex-item"),t._uU(24,"\n                            "),t.TgZ(25,"button",4),t.NdJ("click",function(){return l.back()}),t._uU(26),t.ALo(27,"translate"),t.qZA(),t._uU(28,"\n                        "),t.qZA(),t._uU(29,"\n                        "),t.TgZ(30,"app-ct-flex-item"),t._uU(31,"\n                            "),t.TgZ(32,"button",5),t.NdJ("click",function(){return l.save()}),t._uU(33,"Save"),t.qZA(),t._uU(34,"\n                        "),t.qZA(),t._uU(35,"\n                    "),t.qZA(),t._uU(36,"\n                "),t.qZA(),t._uU(37,"\n            "),t.qZA(),t._uU(38,"\n        "),t.qZA(),t._uU(39,"\n    "),t.qZA(),t._uU(40,"\n    "),t.TgZ(41,"app-ct-col",1),t._uU(42,"\n        "),t.YNc(43,xt,13,2,"app-ct-section",2),t._uU(44,"\n    "),t.qZA(),t._uU(45,"\n"),t.qZA()),2&n&&(t.xp6(11),t.AsE("Edit params for KB  ",l.kb?l.kb.id:""," (",l.kb?l.kb.code:"",")\n                    "),t.xp6(4),t.Q6J("ngIf",!l.currentStates.has(l.states.firstLoading)),t.xp6(11),t.hij("\n                                ",t.lcZ(27,6,"main.Cancel"),""),t.xp6(6),t.Q6J("disabled",l.currentStates.has(l.states.wait)),t.xp6(11),t.Q6J("ngIf",l.response))},dependencies:[o.sg,o.O5,Ut.a,E.U,Y.n,k.V,q.R,W.t,Q.W,R.i,S.Z,I.t,N.B,J.i,j._,P.lW,$.Nt,K.KE,K.hX,p.Fj,p.JJ,p.On,c.X$],styles:["[_nghost-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}"]})),e})();var At=a(2199),Mt=a(9349);const H=[{path:"",component:A},{path:"add",component:(()=>{class e{constructor(n,l,r){(0,s.Z)(this,"kbService",void 0),(0,s.Z)(this,"router",void 0),(0,s.Z)(this,"activatedRoute",void 0),(0,s.Z)(this,"states",L.C),(0,s.Z)(this,"currentStates",new Set),(0,s.Z)(this,"response",void 0),(0,s.Z)(this,"form",new p.cw({code:new p.NI("",[p.kI.required,p.kI.minLength(3)]),params:new p.NI("",[p.kI.required,p.kI.minLength(3)])})),(0,s.Z)(this,"button",void 0),this.kbService=n,this.router=l,this.activatedRoute=r}create(){this.button.disabled=!0,this.currentStates.add(this.states.wait);const n=this.kbService.addFormCommit(this.form.value.code,this.form.value.params).subscribe(l=>{l.status===At.o.OK&&this.router.navigate(["../"],{relativeTo:this.activatedRoute})},()=>{},()=>{this.currentStates.delete(this.states.wait),n.unsubscribe()})}}return(0,s.Z)(e,"\u0275fac",function(n){return new(n||e)(t.Y36(U),t.Y36(f.F0),t.Y36(f.gz))}),(0,s.Z)(e,"\u0275cmp",t.Xpm({type:e,selectors:[["kb-add"]],viewQuery:function(n,l){if(1&n&&t.Gf(P.lW,5),2&n){let r;t.iGM(r=t.CRH())&&(l.button=r.first)}},decls:71,vars:5,consts:[["align-items","baseline"],["size","6"],["novalidate","novalidate",3,"formGroup"],["appearance","outline",2,"width","100%"],["matInput","matInput","type","text","autocomplete","code","formControlName","code"],["formControlName","params","matInput","matInput","cdkTextareaAutosize","cdkTextareaAutosize","cdkAutosizeMinRows","10","value","","autocomplete","off"],["justify-content","flex-end","gap","8px"],["mat-stroked-button","mat-stroked-button","routerLink","/dispatcher/kb"],["mat-flat-button","mat-flat-button","color","primary",3,"disabled","click"],["button",""]],template:function(n,l){1&n&&(t.TgZ(0,"app-ct-cols",0),t._uU(1,"\n  "),t.TgZ(2,"app-ct-col",1),t._uU(3,"\n    "),t.TgZ(4,"app-ct-section"),t._uU(5,"\n      "),t.TgZ(6,"app-ct-section-header"),t._uU(7,"\n        "),t.TgZ(8,"app-ct-section-header-row"),t._uU(9,"\n          "),t.TgZ(10,"app-ct-heading"),t._uU(11,"Add new KB"),t.qZA(),t._uU(12,"\n        "),t.qZA(),t._uU(13,"\n      "),t.qZA(),t._uU(14,"\n      "),t.TgZ(15,"app-ct-section-body"),t._uU(16,"\n        "),t.TgZ(17,"form",2),t._uU(18,"\n          "),t.TgZ(19,"mat-form-field",3),t._uU(20,"\n            "),t.TgZ(21,"mat-label"),t._uU(22,"Code"),t.qZA(),t._uU(23,"\n            "),t._UZ(24,"input",4),t._uU(25,"\n            "),t.TgZ(26,"mat-hint"),t._uU(27,"This is a required field."),t.qZA(),t._uU(28,"\n          "),t.qZA(),t._uU(29,"\n          "),t._UZ(30,"br"),t._uU(31,"\n          "),t.TgZ(32,"mat-form-field",3),t._uU(33,"\n            "),t.TgZ(34,"mat-label"),t._uU(35,"KB parameters"),t.qZA(),t._uU(36,"\n            "),t._UZ(37,"textarea",5),t._uU(38,"\n            "),t.TgZ(39,"mat-hint"),t._uU(40,"This is a required field."),t.qZA(),t._uU(41,"\n          "),t.qZA(),t._uU(42,"\n        "),t.qZA(),t._uU(43,"\n      "),t.qZA(),t._uU(44,"\n\n      "),t.TgZ(45,"app-ct-section-footer"),t._uU(46,"\n        "),t.TgZ(47,"app-ct-section-footer-row"),t._uU(48,"\n          "),t.TgZ(49,"app-ct-flex",6),t._uU(50,"\n            "),t.TgZ(51,"app-ct-flex-item"),t._uU(52,"\n              "),t.TgZ(53,"button",7),t._uU(54),t.ALo(55,"translate"),t.qZA(),t._uU(56,"\n            "),t.qZA(),t._uU(57,"\n            "),t.TgZ(58,"app-ct-flex-item"),t._uU(59,"\n              "),t.TgZ(60,"button",8,9),t.NdJ("click",function(){return l.create()}),t._uU(62,"Add"),t.qZA(),t._uU(63,"\n            "),t.qZA(),t._uU(64,"\n          "),t.qZA(),t._uU(65,"\n        "),t.qZA(),t._uU(66,"\n      "),t.qZA(),t._uU(67,"\n    "),t.qZA(),t._uU(68,"\n  "),t.qZA(),t._uU(69,"\n"),t.qZA(),t._uU(70,"\n\n")),2&n&&(t.xp6(17),t.Q6J("formGroup",l.form),t.xp6(37),t.hij("\n                ",t.lcZ(55,3,"main.Cancel"),""),t.xp6(6),t.Q6J("disabled",!l.form.valid))},dependencies:[f.rH,E.U,k.V,q.R,W.t,Q.W,R.i,S.Z,I.t,N.B,J.i,j._,P.lW,$.Nt,K.KE,K.hX,K.bx,Mt.IC,p._Y,p.Fj,p.JJ,p.JL,p.sg,p.u,c.X$],styles:["[_nghost-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}"]})),e})(),data:{backConfig:["../"]}},{path:"edit",component:vt,data:{backConfig:["../"]}}];let z=(()=>{class e{}return(0,s.Z)(e,"\u0275fac",function(n){return new(n||e)}),(0,s.Z)(e,"\u0275mod",t.oAB({type:e})),(0,s.Z)(e,"\u0275inj",t.cJS({imports:[f.Bz.forChild(H),f.Bz]})),e})(),Kt=(()=>{class e{}return(0,s.Z)(e,"\u0275fac",function(n){return new(n||e)}),(0,s.Z)(e,"\u0275mod",t.oAB({type:e})),(0,s.Z)(e,"\u0275inj",t.cJS({imports:[o.ez,z,T.E,h.$,p.u5,p.UX,c.aw.forChild({})]})),e})()}}]);