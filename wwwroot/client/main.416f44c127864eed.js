"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[179],{209:(g,v,u)=>{var T=u(481),q=u(529),t=u(256),d=u(773);class h{constructor(){this.title="Shop"}}h.\u0275fac=function(r){return new(r||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["the-shop"]],decls:5,vars:1,consts:[[1,"row"],[1,"col-12"]],template:function(r,e){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h3"),t._uU(3),t.qZA(),t._UZ(4,"router-outlet"),t.qZA()()),2&r&&(t.xp6(3),t.Oqu(e.title))},dependencies:[d.lC],encapsulation:2});var b=u(4);class U{}class x{constructor(){this.orderDate=new Date,this.orderNumber=Math.random().toString(36).substr(2,5),this.items=[]}get subtotal(){return this.items.reduce((e,n)=>e+n.unitPrice*n.quantity,0)}}class s{constructor(r){this.http=r,this.products=[],this.order=new x,this.token="",this.expiration=new Date}loadProducts(){return this.http.get("/api/products").pipe((0,b.U)(r=>{this.products=r}))}get loginRequired(){return 0==this.token.length||this.expiration>new Date}login(r){return this.http.post("/account/createtoken",r).pipe((0,b.U)(e=>{this.token=e.token,this.expiration=e.expiration}))}checkout(){const r=(new q.WM).set("Authorization",`Bearer ${this.token}`);return this.http.post("/api/orders",this.order,{headers:r}).pipe((0,b.U)(()=>{this.order=new x}))}addToOrder(r){let e;e=this.order.items.find(n=>n.productId===r.id),e?e.quantity++:(e=new U,e.productId=r.id,e.productTitle=r.title,e.productArtId=r.artId,e.productArtist=r.artist,e.productCategory=r.category,e.productSize=r.size,e.unitPrice=r.price,e.quantity=1,this.order.items.push(e))}}s.\u0275fac=function(r){return new(r||s)(t.LFG(q.eN))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac});var i=u(895);function y(o,r){if(1&o&&(t.TgZ(0,"div",9),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(e.errorMessage)}}function C(o,r){if(1&o&&(t.TgZ(0,"tr")(1,"td"),t._UZ(2,"img",10),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"currency"),t.qZA()()),2&o){const e=r.$implicit;t.xp6(2),t.MGl("src","/img/",e.productArtId,".jpg",t.LSH),t.xp6(2),t.HOy("",e.productCategory,"(",e.productSize,") - ",e.productArtist,": ",e.productTitle,""),t.xp6(2),t.Oqu(e.quantity),t.xp6(2),t.Oqu(t.Dn7(9,8,e.unitPrice,"EUR",!0)),t.xp6(3),t.Oqu(t.Dn7(12,12,e.unitPrice*e.quantity,"EUR",!0))}}class m{constructor(r,e){this.store=r,this.router=e,this.errorMessage=""}onCheckout(){this.errorMessage="",this.store.checkout().subscribe(()=>{this.router.navigate(["/"])},r=>this.errorMessage=`Failed to checkout: ${r}`)}}m.\u0275fac=function(r){return new(r||m)(t.Y36(s),t.Y36(d.F0))},m.\u0275cmp=t.Xpm({type:m,selectors:[["checkout"]],decls:29,vars:12,consts:[[1,"row"],["class","alert alert-danger",4,"ngIf"],[1,"table","table-bordered","table-hover"],[4,"ngFor","ngForOf"],[1,"col-md-4","col-md-offset-8","text-right"],[1,"table","table-condensed"],[1,"text-right"],[1,"btn","btn-success",3,"click"],["routerLink","/",1,"btn","btn-info"],[1,"alert","alert-danger"],["alt","o.productTitle",1,"img-thumbnail","checkout-thumb",3,"src"]],template:function(r,e){1&r&&(t.TgZ(0,"div",0)(1,"h3"),t._uU(2,"Confirm Order"),t.qZA(),t.YNc(3,y,2,1,"div",1),t.TgZ(4,"table",2),t.YNc(5,C,13,16,"tr",3),t.qZA(),t.TgZ(6,"div",4)(7,"table",5)(8,"tr")(9,"td",6),t._uU(10,"Subtotal"),t.qZA(),t.TgZ(11,"td",6),t._uU(12),t.ALo(13,"currency"),t.qZA()(),t.TgZ(14,"tr")(15,"td",6),t._uU(16,"Shipping"),t.qZA(),t.TgZ(17,"td",6),t._uU(18,"\u20ac 0.00"),t.qZA()(),t.TgZ(19,"tr")(20,"td",6),t._uU(21,"Total:"),t.qZA(),t.TgZ(22,"td",6),t._uU(23),t.ALo(24,"currency"),t.qZA()()(),t.TgZ(25,"button",7),t.NdJ("click",function(){return e.onCheckout()}),t._uU(26,"Complete Purchase"),t.qZA(),t.TgZ(27,"a",8),t._uU(28,"Cancel"),t.qZA()()()),2&r&&(t.xp6(3),t.Q6J("ngIf",e.errorMessage),t.xp6(2),t.Q6J("ngForOf",e.store.order.items),t.xp6(7),t.Oqu(t.Dn7(13,4,e.store.order.subtotal,"EUR",!0)),t.xp6(11),t.Oqu(t.Dn7(24,8,e.store.order.subtotal,"EUR",!0)))},dependencies:[i.sg,i.O5,d.rH,i.H9],styles:[".checkout-thumb[_ngcontent-%COMP%]{max-width:100px}"]});var a=u(433);function w(o,r){if(1&o&&(t.TgZ(0,"div",14),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(e.errorMessage)}}function P(o,r){1&o&&(t.TgZ(0,"div",15),t._uU(1,"Required"),t.qZA())}function O(o,r){1&o&&(t.TgZ(0,"div",15),t._uU(1,"Required"),t.qZA())}class Z{constructor(r,e){this.store=r,this.router=e,this.creds={username:"",password:""},this.errorMessage=""}onLogin(){this.store.login(this.creds).subscribe(()=>{this.router.navigate(this.store.order.items.length>0?["checkout"]:[""])},r=>{console.log(r),this.errorMessage="Failed to login"})}}function k(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",2)(1,"div",3),t._UZ(2,"img",4),t.TgZ(3,"h5"),t._uU(4),t.qZA(),t.TgZ(5,"ul",5)(6,"li"),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.TgZ(9,"li"),t._uU(10),t.qZA(),t.TgZ(11,"li"),t._uU(12),t.qZA(),t.TgZ(13,"li"),t._uU(14),t.qZA()(),t.TgZ(15,"button",6),t.NdJ("click",function(){const I=t.CHM(e).$implicit,Y=t.oxw();return t.KtG(Y.store.addToOrder(I))}),t._uU(16,"Buy"),t.qZA()()()}if(2&o){const e=r.$implicit;t.xp6(2),t.MGl("src","/img/",e.artId,".jpg",t.LSH),t.s9C("alt",e.title),t.xp6(2),t.AsE("",e.category," - ",e.size,""),t.xp6(3),t.hij("Price: ",t.xi3(8,8,e.price,"EUR"),""),t.xp6(3),t.hij("Artist: ",e.artist,""),t.xp6(2),t.hij("Title: ",e.title,""),t.xp6(2),t.Oqu(e.artDescription)}}Z.\u0275fac=function(r){return new(r||Z)(t.Y36(s),t.Y36(d.F0))},Z.\u0275cmp=t.Xpm({type:Z,selectors:[["login-page"]],decls:23,vars:9,consts:[[1,"row"],[1,"col-md-4","col-md-offset-4"],["class","alert alert-danger",4,"ngIf"],[3,"submit"],[1,"form-group"],["for","username"],["type","text","name","username","required","",1,"form-control",3,"ngModel","ngModelChange"],["username","ngModel"],["class","text-danger",4,"ngIf"],["for","password"],["type","password","name","password","required","",1,"form-control",3,"ngModel","ngModelChange"],["password","ngModel"],["type","submit","value","Login",1,"btn","btn-success",3,"disabled"],["href","#",1,"btn","btn-default"],[1,"alert","alert-danger"],[1,"text-danger"]],template:function(r,e){if(1&r&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,w,2,1,"div",2),t.TgZ(3,"form",3),t.NdJ("submit",function(){return e.onLogin()}),t.TgZ(4,"div",4)(5,"label",5),t._uU(6,"Username"),t.qZA(),t.TgZ(7,"input",6,7),t.NdJ("ngModelChange",function(c){return e.creds.username=c}),t.qZA(),t.YNc(9,P,2,0,"div",8),t.qZA(),t.TgZ(10,"div",4)(11,"label",9),t._uU(12,"Password"),t.qZA(),t.TgZ(13,"input",10,11),t.NdJ("ngModelChange",function(c){return e.creds.password=c}),t.qZA(),t.YNc(15,O,2,0,"div",8),t.qZA(),t.TgZ(16,"div",4),t._UZ(17,"input",12),t.TgZ(18,"a",13),t._uU(19,"Cancel"),t.qZA()()(),t.TgZ(20,"div"),t._uU(21),t.ALo(22,"json"),t.qZA()()()),2&r){const n=t.MAs(8),c=t.MAs(14);t.xp6(2),t.Q6J("ngIf",e.errorMessage),t.xp6(5),t.Q6J("ngModel",e.creds.username),t.xp6(2),t.Q6J("ngIf",n.touched&&n.invalid&&n.errors.required),t.xp6(4),t.Q6J("ngModel",e.creds.password),t.xp6(2),t.Q6J("ngIf",c.touched&&c.invalid&&c.errors.required),t.xp6(2),t.Q6J("disabled",n.invalid||c.invalid),t.xp6(4),t.Oqu(t.lcZ(22,7,e.creds))}},dependencies:[i.O5,a._Y,a.Fj,a.JJ,a.JL,a.Q7,a.On,a.F,i.Ts],encapsulation:2});class _{constructor(r){this.store=r}ngOnInit(){this.store.loadProducts().subscribe()}}function L(o,r){if(1&o&&(t.TgZ(0,"tr")(1,"td"),t._UZ(2,"img",4),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"currency"),t.qZA()()),2&o){const e=r.$implicit;t.xp6(2),t.MGl("src","/img/",e.productArtId,".jpg",t.LSH),t.s9C("alt",e.productArtist),t.xp6(2),t.Oqu(e.productCategory),t.xp6(2),t.Oqu(e.quantity),t.xp6(2),t.Oqu(t.xi3(9,6,e.unitPrice,"EUR")),t.xp6(3),t.Oqu(t.xi3(12,9,e.unitPrice*e.quantity,"EUR"))}}function M(o,r){1&o&&(t.TgZ(0,"a",5),t._uU(1,"Checkout"),t.qZA())}_.\u0275fac=function(r){return new(r||_)(t.Y36(s))},_.\u0275cmp=t.Xpm({type:_,selectors:[["product-list"]],decls:2,vars:1,consts:[[1,"row"],["class","col-md-4",4,"ngFor","ngForOf"],[1,"col-md-4"],[1,"border","bg-light","rounded","p-1"],[1,"img-fluid","product-image",3,"src","alt"],[1,"products-props"],["id","buyBtn",1,"btn","btn-success",3,"click"]],template:function(r,e){1&r&&(t.TgZ(0,"div",0),t.YNc(1,k,17,11,"div",1),t.qZA()),2&r&&(t.xp6(1),t.Q6J("ngForOf",e.store.products))},dependencies:[i.sg,i.H9],styles:[".product-image[_ngcontent-%COMP%]{border:1px #ddd solid;box-shadow:#0006 2px 2px;margin:2px}.products-props[_ngcontent-%COMP%]{font-size:.9rem}"]});class f{constructor(r){this.store=r}}f.\u0275fac=function(r){return new(r||f)(t.Y36(s))},f.\u0275cmp=t.Xpm({type:f,selectors:[["cart"]],decls:26,vars:7,consts:[[1,"table","table-condensed","table-striped"],[4,"ngFor","ngForOf"],["colspan","5"],["class","btn btn-success","routerLink","checkout",4,"ngIf"],[1,"img-fluid","product-thumb",3,"src","alt"],["routerLink","checkout",1,"btn","btn-success"]],template:function(r,e){1&r&&(t.TgZ(0,"h3"),t._uU(1,"Cart"),t.qZA(),t.TgZ(2,"div"),t._uU(3),t.qZA(),t._UZ(4,"hr"),t.TgZ(5,"table",0)(6,"thead")(7,"tr"),t._UZ(8,"th"),t.TgZ(9,"th"),t._uU(10,"Product"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Quantity"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Price"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Total"),t.qZA()()(),t.TgZ(17,"tbody"),t.YNc(18,L,13,12,"tr",1),t.qZA(),t.TgZ(19,"tfoot")(20,"tr")(21,"td",2)(22,"strong"),t._uU(23),t.ALo(24,"currency"),t.qZA()()()()(),t.YNc(25,M,2,0,"a",3)),2&r&&(t.xp6(3),t.hij("Count: ",e.store.order.items.length,""),t.xp6(15),t.Q6J("ngForOf",e.store.order.items),t.xp6(5),t.hij("Subtotal: ",t.xi3(24,4,e.store.order.subtotal,"EUR"),""),t.xp6(2),t.Q6J("ngIf",e.store.order.items.length>0))},dependencies:[i.sg,i.O5,d.rH,i.H9],styles:[".product-thumb[_ngcontent-%COMP%]{max-width:50px}"]});class A{}A.\u0275fac=function(r){return new(r||A)},A.\u0275cmp=t.Xpm({type:A,selectors:[["shop-page"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-9"],[1,"col-3"]],template:function(r,e){1&r&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"product-list"),t.qZA(),t.TgZ(3,"div",2),t._UZ(4,"cart"),t.qZA()())},dependencies:[_,f],encapsulation:2});class p{constructor(r,e){this.store=r,this.router=e}canActivate(r,e){return!this.store.loginRequired||(this.router.navigate(["login"]),!1)}}p.\u0275fac=function(r){return new(r||p)(t.LFG(s),t.LFG(d.F0))},p.\u0275prov=t.Yz7({token:p,factory:p.\u0275fac});const J=d.Bz.forRoot([{path:"",component:A},{path:"checkout",component:m,canActivate:[p]},{path:"login",component:Z},{path:"**",redirectTo:"/"}],{useHash:!1});class l{}l.\u0275fac=function(r){return new(r||l)},l.\u0275mod=t.oAB({type:l,bootstrap:[h]}),l.\u0275inj=t.cJS({providers:[s,p],imports:[T.b2,q.JF,J,a.u5]}),T.q6().bootstrapModule(l).catch(o=>console.error(o))}},g=>{g.O(0,[736],()=>g(g.s=209)),g.O()}]);