(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-share-team-team"],{"3c94":function(t,e,a){"use strict";a.r(e);var n=a("7450"),o=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},"45e6":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("app-layout",[a("app-tab-nav",{attrs:{tabList:t.tabList,activeItem:t.activeTab,padding:"0",theme:t.theme},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabStatus.apply(void 0,arguments)}}}),t.list&&t.list.length>0?a("v-uni-view",t._l(t.list,(function(e){return a("v-uni-view",{key:e.id,staticClass:"item"},[a("v-uni-view",{staticClass:"user-info"},[a("v-uni-image",{staticClass:"avatar",attrs:{src:e.avatar}}),a("v-uni-view",{staticClass:"t-omit user-name"},[t._v(t._s(e.nickname))]),a("v-uni-view",{staticClass:"time"},[t._v("绑定时间："+t._s(e.junior_at))])],1),a("v-uni-view",{staticClass:"number"},[t._v("推广"+t._s(e.peopleCount)+"人")]),a("v-uni-view",{staticClass:"order-info"},[a("v-uni-text",[t._v(t._s(e.orderPrice)+"元")]),a("v-uni-text",{staticClass:"order-num"},[t._v(t._s(e.orderCount)+"个订单")])],1)],1)})),1):t._e(),0==t.list.length?a("v-uni-view",{staticClass:"no-tip"},[a("v-uni-image",{attrs:{src:"/static/image/user-default-avatar.png"}}),a("span",[t._v("暂无相关成员")])],1):t._e()],1)},i=[]},"4d1c":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("c5f6");var n={name:"app-tab-nav",props:{background:String,setTop:{type:[Number,String]},padding:{default:45,type:[Number,String]},setHeight:Number,placeHeight:Number,fontSize:Number,theme:{type:Object,default:function(){return{color:"#ff4544"}}},border:{default:!0,type:Boolean},shadow:{default:!0,type:Boolean},activeItem:{type:[Number,String]},tabList:Array,tabColor:{default:"#353535",type:String},paddingBottom:{default:0,type:[Number,String]},opacity:{default:1,type:[Number,String]}},methods:{handleClick:function(t){this.$emit("click",t)}}};e.default=n},5529:function(t,e,a){var n=a("b00b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("4f06").default;o("4ba35be7",n,!0,{sourceMap:!1,shadowMode:!1})},"56c7":function(t,e,a){"use strict";var n=a("dc4e"),o=a.n(n);o.a},7377:function(t,e,a){"use strict";a.r(e);var n=a("45e6"),o=a("3c94");for(var i in o)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(i);a("a753");var r,s=a("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"c053a81c",null,!1,n["a"],r);e["default"]=c.exports},7450:function(t,e,a){"use strict";var n=a("4ea4");a("8e6e"),a("ac6a"),a("456d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("7f7f");var o=n(a("ade3")),i=n(a("7fd0")),r=a("2f62");function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){(0,o.default)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var d={data:function(){return{theme:{color:"#ff4544"},tabList:[{id:1,name:"一级分销"}],loading:null,list:[],activeTab:1,id:null,page:2}},components:{"app-tab-nav":i.default},computed:c({},(0,r.mapState)({mall:function(t){return t.mallConfig.mall},custom_setting:function(t){return t.mallConfig.share_setting_custom},share_setting:function(t){return t.mallConfig.share_setting}})),methods:{open:function(t){this.id=t},tabStatus:function(t){this.list=[],this.page=2,this.activeTab=t.currentTarget.dataset.id,uni.showLoading({title:"加载中..."}),this.getList()},getList:function(){var t=this;t.$request({url:t.$api.share.team,data:{status:t.activeTab}}).then((function(e){if(t.$hideLoading(),uni.hideLoading(),0==e.code){if(t.list=e.data.list,t.first_count=e.data.first_count,t.second_count=e.data.second_count,t.third_count=e.data.third_count,t.custom_setting.words.one_share.name?(t.custom_setting.words.one_share.name.length>7&&(t.custom_setting.words.one_share.name=t.custom_setting.words.one_share.name.substring(0,5)+"..."),t.tabList[0].name=t.custom_setting.words.one_share.name+"("+t.first_count+")"):t.tabList[0].name="一级分销("+t.first_count+")",t.second_count>0){var a={id:2};if(t.custom_setting.words.second_share.name.length>7&&(t.custom_setting.words.second_share.name=t.custom_setting.words.second_share.name.substring(0,5)+"..."),a.name=t.custom_setting.words.second_share.name?t.custom_setting.words.second_share.name+"("+t.second_count+")":"二级分销("+t.second_count+")",t.tabList[1]=a,t.third_count>0){t.custom_setting.words.three_share.name.length>7&&(t.custom_setting.words.three_share.name=t.custom_setting.words.three_share.name.substring(0,5)+"...");var n={id:3};n.name=t.custom_setting.words.three_share.name?t.custom_setting.words.three_share.name+"("+t.third_count+")":"三级分销("+t.third_count+")",t.tabList[2]=n}}}else uni.showToast({title:e.msg,icon:"none",duration:1e3})})).catch((function(e){t.$hideLoading(),uni.hideLoading(),t.$event.on(t.$const.EVENT_USER_LOGIN).then((function(){t.getList()}))}))},getMore:function(){var t=this;uni.showLoading({title:"加载中..."}),t.$request({url:t.$api.share.team,data:{status:t.activeTab,page:t.page}}).then((function(e){t.$hideLoading(),uni.hideLoading(),0==e.code?e.data.list.length>0&&(t.loading=null,t.list=t.list.concat(e.data.list),t.page++):uni.showToast({title:e.msg,icon:"none",duration:1e3})})).catch((function(e){t.$hideLoading(),uni.hideLoading()}))},toGoods:function(t){uni.navigateTo({url:"/pages/goods/goods?id="+t})}},onLoad:function(t){this.$commonLoad.onload(t);var e=this;uni.setNavigationBarTitle({title:e.custom_setting.menus.team.name}),e.$showLoading({type:"global",text:"加载中..."}),e.getList()},onReachBottom:function(){this.getMore()}};e.default=d},"7b5e":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.opacity,expression:"opacity"}]},[a("v-uni-view",{class:[t.shadow?"main-between app-nav shadow":"main-between app-nav"],style:[{"line-height":(t.setHeight?t.setHeight:90)+"rpx","font-size":(t.fontSize?t.fontSize:28)+"rpx",height:(t.setHeight?t.setHeight:90)+"rpx",top:t.setTop>0?t.setTop+"rpx":"0",backgroundColor:""+(t.background?t.background:"#fff"),opacity:""+t.opacity}]},t._l(t.tabList,(function(e){return a("v-uni-view",{key:e.id,staticClass:"box-grow-1 nav-item",style:[{borderBottom:(t.border?1:0)+"rpx solid #e2e2e2"}],attrs:{"data-id":e.id,"data-name":e.name},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[a("v-uni-text",{class:[e.id==t.activeItem?"active-text":""],style:[{color:""+(e.id==t.activeItem?t.theme.color:t.tabColor),"border-color":""+(e.id==t.activeItem?t.theme.color:""),height:(t.setHeight?t.setHeight-t.paddingBottom:90-t.paddingBottom)+"rpx",padding:"0 "+t.padding+"rpx"}]},[t._v(t._s(e.name))])],1)})),1),a("v-uni-view",{style:[{height:(t.placeHeight?t.placeHeight:90)+"rpx"}]})],1)},i=[]},"7fd0":function(t,e,a){"use strict";a.r(e);var n=a("7b5e"),o=a("86a7");for(var i in o)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(i);a("56c7");var r,s=a("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"1fc36d2d",null,!1,n["a"],r);e["default"]=c.exports},"86a7":function(t,e,a){"use strict";a.r(e);var n=a("4d1c"),o=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},a753:function(t,e,a){"use strict";var n=a("5529"),o=a.n(n);o.a},b00b:function(t,e,a){e=t.exports=a("24fb")(!1),e.push([t.i,'@charset "UTF-8";.text-center[data-v-c053a81c]{text-align:center}.font-weight[data-v-c053a81c]{font-weight:700}.page-width[data-v-c053a81c]{width:100%}.goods-hover-class[data-v-c053a81c]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-c053a81c]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}\n/*全局文字大小*/\n/* 屏幕宽度*/uni-page-body[data-v-c053a81c]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-c053a81c]{width:100%}.u-hover-class[data-v-c053a81c]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-c053a81c]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.no-tip[data-v-c053a81c]{position:fixed;top:%?400?%;left:0;right:0;margin:0 auto;color:#666;font-size:%?24?%;width:%?240?%;text-align:center}.no-tip uni-image[data-v-c053a81c]{height:%?240?%;width:%?240?%;margin-bottom:%?20?%}.item[data-v-c053a81c]{background-color:#fff;padding:%?24?%;color:#353535;margin-bottom:%?25?%}.user-info[data-v-c053a81c]{width:75%;display:inline-block;height:%?136?%}.avatar[data-v-c053a81c]{height:%?100?%;width:%?100?%;float:left;margin-right:%?25?%}.user-info .user-name[data-v-c053a81c]{width:40%}.time[data-v-c053a81c]{font-size:%?24?%;color:#666;margin-top:%?20?%}.number[data-v-c053a81c]{float:right;font-size:%?24?%}.order-info[data-v-c053a81c]{color:#666;border-top:%?1?% solid #e2e2e2;padding-top:%?24?%;font-size:%?30?%}.order-num[data-v-c053a81c]{float:right}body.?%PAGE?%[data-v-c053a81c]{background:#f7f7f7}',""])},dc4e:function(t,e,a){var n=a("f221");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("4f06").default;o("1d1ffe7b",n,!0,{sourceMap:!1,shadowMode:!1})},f221:function(t,e,a){e=t.exports=a("24fb")(!1),e.push([t.i,'@charset "UTF-8";.text-center[data-v-1fc36d2d]{text-align:center}.font-weight[data-v-1fc36d2d]{font-weight:700}.page-width[data-v-1fc36d2d]{width:100%}.goods-hover-class[data-v-1fc36d2d]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-1fc36d2d]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}\n/*全局文字大小*/\n/* 屏幕宽度*/uni-page-body[data-v-1fc36d2d]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-1fc36d2d]{width:100%}.u-hover-class[data-v-1fc36d2d]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-1fc36d2d]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.app-nav[data-v-1fc36d2d]{color:#353535;width:100%;position:fixed;left:0;background-color:#fff;z-index:11}.app-nav .nav-item[data-v-1fc36d2d]{text-align:center}.app-nav .nav-item uni-text[data-v-1fc36d2d]{display:inline-block}.app-nav .active-text[data-v-1fc36d2d]{color:#ff4544;border-bottom:%?4?% solid #ff4544}.app-nav.shadow[data-v-1fc36d2d]{-webkit-box-shadow:0 %?2?% %?10?% rgba(0,0,0,.06);box-shadow:0 %?2?% %?10?% rgba(0,0,0,.06)}.blue-m-text[data-v-1fc36d2d]{color:#446dfd}body.?%PAGE?%[data-v-1fc36d2d]{background:#f7f7f7}',""])}}]);