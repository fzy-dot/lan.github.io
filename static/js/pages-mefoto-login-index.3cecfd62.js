(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mefoto-login-index"],{3275:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"mefoto-login"},[n("v-uni-view",{staticClass:"barnne"},[n("v-uni-image",{attrs:{src:e.imgs,mode:"widthFix"}})],1),n("v-uni-view",{staticClass:"censt"},[n("v-uni-checkbox-group",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.change.apply(void 0,arguments)}}},[n("v-uni-checkbox",{staticStyle:{transform:"scale(0.7)"},attrs:{value:"cb",checked:e.bocke}})],1),n("v-uni-view",{},[e._v("点击即表示同意"),n("v-uni-text",{attrs:{t:!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toDetail(1)}}},[e._v("《隐私条款》")]),e._v("和"),n("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toDetail(3)}}},[e._v("《会员规则》")])],1)],1),n("v-uni-view",{staticClass:"botns"},[n("v-uni-button",{staticClass:"right",style:e.bocke?"background-color: #0D469D;":" background-color: #C5C5C5;",attrs:{"open-type":"getPhoneNumber",scope:"userInfo",disabled:!e.bocke},on:{getphonenumber:function(t){arguments[0]=t=e.$handleEvent(t),e.getPhoneNumber.apply(void 0,arguments)}}},[e._v("登录/注册")])],1)],1)},a=[]},"399e":function(e,t,n){"use strict";n.r(t);var i=n("a996"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},a513:function(e,t,n){t=e.exports=n("24fb")(!1),t.push([e.i,'@charset "UTF-8";.text-center[data-v-290eedce]{text-align:center}.font-weight[data-v-290eedce]{font-weight:700}.page-width[data-v-290eedce]{width:100%}.goods-hover-class[data-v-290eedce]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-290eedce]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}\n/*全局文字大小*/\n/* 屏幕宽度*/uni-page-body[data-v-290eedce]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-290eedce]{width:100%}.u-hover-class[data-v-290eedce]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-290eedce]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.barnne[data-v-290eedce]{width:100%}.barnne uni-image[data-v-290eedce]{width:100%}.censt[data-v-290eedce]{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:%?28?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-top:%?100?%}.censt uni-text[data-v-290eedce]{color:#1d53a3}.botns[data-v-290eedce]{width:80%;height:%?85?%;text-align:center;line-height:%?85?%;border-radius:%?40?%;left:50%;position:fixed;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%);bottom:8%;color:#fff;font-family:PingFangSC-Regular,PingFang SC}.botns uni-button[data-v-290eedce]{width:100%;height:%?85?%;font-family:PingFangSC-Medium,PingFang SC;color:#fff;line-height:%?85?%;font-size:%?29?%;border-radius:%?40?%}body.?%PAGE?%[data-v-290eedce]{background:#f7f7f7}',""])},a996:function(e,t,n){"use strict";var i=n("4ea4");n("8e6e"),n("ac6a"),n("456d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("ade3")),a=n("2f62");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={name:"mefoto-login",data:function(){return{bocke:!1,code:"",imgs:"",serviceId:""}},computed:r({},(0,a.mapState)("user",{kcUserInfo:"kcUserInfo"})),watch:{kcUserInfo:function(){0!=this.kcUserInfo.ulp_user_id&&uni.redirectTo({url:"/pages/index/index"})}},onLoad:function(e){console.log(e),this.serviceId=decodeURIComponent(e.scene)||"",uni.showLoading({title:"加载中",mask:!0}),this.curing_config(),setTimeout((function(){uni.hideLoading()}),2e3)},onShow:function(){var e=this;this.Ligon(),this.timer=setInterval((function(){e.Ligon()}),12e4)},onUnload:function(){this.timer&&(clearInterval(this.timer),this.timer=null),this.$store.dispatch("user/get_kcUserInfo"),this.$store.dispatch("user/get_kcUsertask")},methods:{toDetail:function(e){switch(e){case 1:uni.navigateTo({url:"/pages/article/article-detail/article-detail?id=".concat(e)});break;case 3:uni.navigateTo({url:"/pages/article/article-detail/article-detail?id=".concat(e)+"&tpye=1"});break;default:break}},curing_config:function(){var e=this;this.$request({method:"get",url:this.$api.user.curing_config}).then((function(t){e.imgs=t.data.img_url,console.log(t,"---")}))},userRegisters:function(e){this.$request({method:"post",url:this.$api.user.userRegister,data:{mobile:e,serviceId:this.serviceId}}).then((function(e){console.log(e,"----"),0==e.code?(uni.showToast({title:"注册成功",duration:2e3}),uni.redirectTo({url:"/pages/index/index"})):uni.showToast({title:e.msg,duration:2e3,icon:"none"})}))},Ligon:function(){var e=this;wx.login({success:function(t){e.code=t.code}})},change:function(){this.bocke=!this.bocke,console.log(this.bocke)},getPhoneNumber:function(e){if(console.log(e,"--0",this.code),"getPhoneNumber:fail user deny"!==e.detail.errMsg&&this.code){var t=this;uni.showLoading({title:"加载中"}),this.$request({method:"post",url:t.$api.phone.binding,data:{encryptedData:e.detail.encryptedData,iv:e.detail.iv,code:t.code}}).then((function(e){console.log(e),uni.hideLoading(),0==e.code?t.userRegisters(e.data.mobile):uni.showModal({content:e.msg,showCancel:!1})})).catch((function(e){uni.hideLoading()}))}}}};t.default=s},beae:function(e,t,n){var i=n("a513");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("654d5515",i,!0,{sourceMap:!1,shadowMode:!1})},c745:function(e,t,n){"use strict";n.r(t);var i=n("3275"),o=n("399e");for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("df79");var c,r=n("f0c5"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"290eedce",null,!1,i["a"],c);t["default"]=s.exports},df79:function(e,t,n){"use strict";var i=n("beae"),o=n.n(i);o.a}}]);