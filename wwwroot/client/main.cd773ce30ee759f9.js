"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[179],{866:(p,l,r)=>{var d=r(481),a=r(700),t=r(215),g=r(4);class e{constructor(o){this.http=o,this.products=[]}loadProducts(){return this.http.get("/api/products").pipe((0,g.U)(o=>{this.products=o}))}}e.\u0275fac=function(o){return new(o||e)(t.LFG(a.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac});var m=r(895);function h(s,o){if(1&s&&(t.TgZ(0,"div",2)(1,"div",3),t._UZ(2,"img",4),t.TgZ(3,"h5"),t._uU(4),t.qZA(),t.TgZ(5,"ul",5)(6,"li"),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.TgZ(9,"li"),t._uU(10),t.qZA(),t.TgZ(11,"li"),t._uU(12),t.qZA(),t.TgZ(13,"li"),t._uU(14),t.qZA()(),t.TgZ(15,"button",6),t._uU(16,"Buy"),t.qZA()()()),2&s){const c=o.$implicit;t.xp6(2),t.MGl("src","/img/",c.artId,".jpg",t.LSH),t.s9C("alt",c.title),t.xp6(2),t.AsE("",c.category," - ",c.size,""),t.xp6(3),t.hij("Price: ",t.xi3(8,8,c.price,"EUR"),""),t.xp6(3),t.hij("Artist: ",c.artist,""),t.xp6(2),t.hij("Title: ",c.title,""),t.xp6(2),t.Oqu(c.artDescription)}}class n{constructor(o){this.store=o}ngOnInit(){this.store.loadProducts().subscribe()}}n.\u0275fac=function(o){return new(o||n)(t.Y36(e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["product-list"]],decls:2,vars:1,consts:[[1,"row"],["class","col-md-4",4,"ngFor","ngForOf"],[1,"col-md-4"],[1,"border","bg-light","rounded","p-1"],[1,"img-fluid","product-image",3,"src","alt"],[1,"products-props"],["id","buyBtn",1,"btn","btn-success"]],template:function(o,c){1&o&&(t.TgZ(0,"div",0),t.YNc(1,h,17,11,"div",1),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngForOf",c.store.products))},dependencies:[m.sg,m.H9],styles:[".product-image[_ngcontent-%COMP%]{border:1px #ddd solid;box-shadow:#0006 2px 2px;margin:2px}.products-props[_ngcontent-%COMP%]{font-size:.9rem}"]});class u{constructor(){this.title="Shop"}}u.\u0275fac=function(o){return new(o||u)},u.\u0275cmp=t.Xpm({type:u,selectors:[["the-shop"]],decls:8,vars:1,consts:[[1,"row"],[1,"col-9"],[1,"col-3"]],template:function(o,c){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h3"),t._uU(3),t.qZA(),t._UZ(4,"product-list"),t.qZA(),t.TgZ(5,"div",2)(6,"h3"),t._uU(7,"Cart"),t.qZA()()()),2&o&&(t.xp6(3),t.Oqu(c.title))},dependencies:[n],encapsulation:2});class i{}i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i,bootstrap:[u]}),i.\u0275inj=t.cJS({providers:[e],imports:[d.b2,a.JF]}),d.q6().bootstrapModule(i).catch(s=>console.error(s))}},p=>{p.O(0,[736],()=>p(p.s=866)),p.O()}]);