webpackJsonp([0],{"4ml/":function(t,e){},"7Akg":function(t,e,n){t.exports=n.p+"static/img/card2.be19f87.jpg"},B0O0:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},i,!1,function(t){n("vVJ9")},null,null).exports,s=n("/ocq"),c={name:"slidecard",data:function(){return{imgarr:[n("xV6w"),n("7Akg"),n("cGsi"),n("bk4B"),n("ujJy")]}},methods:{onChange:function(t){console.log("当前 Swipe 索引："+t)}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("van-swipe",{attrs:{autoplay:3e3,height:232},on:{change:this.onChange}},this._l(this.imgarr,function(t,n){return e("van-swipe-item",{key:n},[e("router-link",{attrs:{to:{name:"slidedetail",params:{id:n}}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"image"}]})])],1)}),1)],1)},staticRenderFns:[]};var d={name:"hellozsq",components:{slidecard:n("VU/8")(c,o,!1,function(t){n("B0O0")},"data-v-58b58420",null).exports},data:function(){return{}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("van-nav-bar",{attrs:{title:"Welcome to 粽*47自闭网！"}}),this._v(" "),e("slidecard",{attrs:{id:"slidecard"}})],1)},staticRenderFns:[]};var u=n("VU/8")(d,l,!1,function(t){n("hh/b")},"data-v-1063ac0a",null).exports,p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v(this._s(this.id))])])},staticRenderFns:[]};var m=n("VU/8")({name:"slidedetail",data:function(){return{id:this.$route.params.id}},methods:{}},p,!1,function(t){n("gKm7")},"data-v-27ef1af4",null).exports;a.a.use(s.a);var f=new s.a({routes:[{path:"/",redirect:"/hellozsq"},{path:"/hellozsq",name:"hellozsq",component:u},{path:"/slidedetail",name:"slidedetail",component:m}]}),h=n("Fd2+");n("4ml/");a.a.config.productionTip=!1,a.a.use(h.c),a.a.use(h.a,h.b),new a.a({el:"#app",router:f,components:{App:r},template:"<App/>"})},bk4B:function(t,e,n){t.exports=n.p+"static/img/card4.8a78021.jpg"},cGsi:function(t,e,n){t.exports=n.p+"static/img/card3.20472fd.jpg"},gKm7:function(t,e){},"hh/b":function(t,e){},ujJy:function(t,e,n){t.exports=n.p+"static/img/card5.4c596f7.jpg"},vVJ9:function(t,e){},xV6w:function(t,e,n){t.exports=n.p+"static/img/card1.8fbcd14.jpg"}},["NHnr"]);
//# sourceMappingURL=app.c362b52968781417f103.js.map