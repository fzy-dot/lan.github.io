(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plugins-clerk-order-order"],{"2aaa":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAJ1BMVEUAAADOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TKgG3AAAADHRSTlMAvoJN5vQq1UkZ1LWmWVxKAAAAj0lEQVQoz2NgYGg5gwI8GEDAB1XwCE5BTO0kAbYzaCABKMiELqgAFORCFywACuagCx4DCuqgCx4CCq5BFzwOthzDepDlmNazYwoWgCzHsB5kOab1NUASw3oZIHkQjWCwAZKH0QiwkxTQCAYGw1BhdIIkcOYACu/MoBU8iSTGCRM8PQEhOBsmiAIoFiQlzQMA8BRu15zTyKEAAAAASUVORK5CYII="},"33b1":function(t,e,i){"use strict";var a=i("4ea4");i("8e6e"),i("456d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("ac6a");var o=a(i("ade3")),n=a(i("7fd0")),s=a(i("88e8")),r=i("2f62");function d(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?d(Object(i),!0).forEach((function(e){(0,o.default)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var l={name:"about",components:{"app-tab-nav":n.default,formGoodsTime:s.default},data:function(){return{activeTab:2,order_list:[{id:2,name:"未核销"},{id:1,name:"已核销"},{id:5,name:"已退款"},{id:3,name:"我的"}],card_list:[{id:2,name:"未核销"},{id:1,name:"已核销"},{id:3,name:"我的"}],page:1,tabList:[],candidate:[],status:1,placeHeight:312,setTop:190,more_list:!1,is_mall:!1,is_mystery:!1,toSearch:!1,searchResult:!1,first:!1,keyword:"",list:[],sign:""}},computed:c({},(0,r.mapState)({clerkImg:function(t){return t.mallConfig.__wxapp_img.clerk},mall:function(t){return t.mallConfig.mall}})),onLoad:function(t){var e=this;this.$commonLoad.onload(t),this.status=t.status,t.type>0&&(this.activeTab=t.type),this.$showLoading({type:"global",text:"加载中..."}),this.$request({url:this.$api.clerk.info}).then((function(t){0==t.code?(e.is_mall=t.data.is_mall,e.is_mystery=t.data.is_mystery,t.data.is_mall||e.is_mystery||(e.placeHeight=210,e.setTop=88),e.list=[],1==e.status?(e.tabList=e.order_list,e.sign="",e.getList(),uni.setNavigationBarTitle({title:"订单"})):2==e.status?(e.tabList=e.card_list,e.getCard(),uni.setNavigationBarTitle({title:"卡券"})):3==e.status&&(e.tabList=e.order_list,e.sign="mystery",e.getList(),uni.setNavigationBarTitle({title:"盲盒订单"}))):uni.redirectTo({url:"/pages/user-center/user-center"})}))},onReachBottom:function(){this.more_list&&this.getMore()},onShow:function(t){var e=this,i=this;i.first&&i.$request({url:i.$api.clerk.info}).then((function(t){0==t.code?(i.is_mall=t.data.is_mall,i.is_mystery=t.data.is_mystery,t.data.is_mall||i.is_mystery||(e.placeHeight=210),1==i.status?(e.sign="",i.getList(),uni.setNavigationBarTitle({title:"订单"})):2==i.status?(i.getCard("reload",1),uni.setNavigationBarTitle({title:"卡券"})):3==i.status&&(i.sign="mystery",i.getList(),uni.setNavigationBarTitle({title:"盲盒订单"}))):uni.redirectTo({url:"/pages/user-center/user-center"})})),i.first||(1==i.status?(i.sign="",i.getList()):2==i.status?i.getCard():3==i.status&&(i.sign="mystery",i.getList()))},methods:{jumpDetail:function(t){uni.navigateTo({url:"/plugins/diy/detail/detail?id="+t})},getMore:function(){var t,e,i=this;if(i.load)return!1;i.load=!0,1==i.status||3==this.status?3==i.activeTab?(t=i.$api.clerk.my,e={page:i.page}):5==i.activeTab?(t=i.$api.clerk.order,e={status:i.activeTab,keyword_1:8,keyword:i.keyword}):(t=i.$api.clerk.order,e={page:i.page,is_clerk:i.activeTab}):3==i.activeTab?(t=i.$api.clerk.my_card,e={page:i.page}):(t=i.$api.clerk.card,e={page:i.page,keyword:i.keyword,is_clerk:i.activeTab}),i.$request({url:t,data:Object.assign(e,{sign:i.sign})}).then((function(t){i.$hideLoading(),i.load=!1,0==t.code?(i.list=i.list.concat(t.data.list),i.page++,i.more_list=!1,t.data.list.length==t.data.pagination.pageSize&&(i.more_list=!0),i.list.forEach((function(t){t.refund=null,2==t.cancel_status?t.refund="申请取消中":0==t.is_pay&&(t.refund="订单未支付")}))):uni.showToast({title:t.msg,icon:"none",duration:1e3})})).catch((function(t){i.load=!1,i.$hideLoading()}))},toClerk:function(t){uni.navigateTo({url:"/pages/order/clerk/clerk?id="+t})},toClerkCard:function(t){uni.navigateTo({url:"/pages/card/clerk/clerk?cardId="+t})},toDetail:function(t){uni.navigateTo({url:"/plugins/clerk/detail/detail?id="+t})},toCardDetail:function(t){uni.navigateTo({url:"/plugins/clerk/detail/detail?card_id="+t})},keywordSearch:function(t){this.keyword=t,this.searchResult=!0,1==this.status||3==this.status?this.getList():this.getCard()},beSearch:function(){this.candidate=this.$storage.getStorageSync("clerk_keyword")?this.$storage.getStorageSync("clerk_keyword"):[],2==this.status?this.candidate=this.$storage.getStorageSync("clerk_card_keyword")?this.$storage.getStorageSync("clerk_card_keyword"):[]:1==this.status?this.sign="":3==this.status&&(this.sign="mystery"),this.toSearch=!this.toSearch,this.list=[],this.searchResult=!1,uni.setNavigationBarTitle({title:"搜索"})},cancelSeacrch:function(){this.toSearch=!this.toSearch,this.keyword="",1==this.status?(this.getList(),this.sign="",uni.setNavigationBarTitle({title:"订单"})):3==this.status?(this.sign="mystery",this.getList(),uni.setNavigationBarTitle({title:"盲盒订单"})):(this.getCard(),uni.setNavigationBarTitle({title:"卡券"}))},search:function(){var t=this.$storage.getStorageSync("clerk_keyword")?this.$storage.getStorageSync("clerk_keyword"):[];2==this.status&&(t=this.$storage.getStorageSync("clerk_card_keyword")?this.$storage.getStorageSync("clerk_card_keyword"):[]),0!=this.keyword.length&&0!=this.keyword.trim().length?(t.length>0?t.unshift(this.keyword):t=[this.keyword],t.forEach((function(e,i){t[0]==t[i]&&i>0&&t.splice(i,1)})),1==this.status||3==this.status?(this.$storage.setStorageSync("clerk_keyword",t),this.getList()):(this.$storage.setStorageSync("clerk_card_keyword",t),this.getCard())):this.keyword=""},clear:function(){2==this.status?this.$storage.removeStorageSync("clerk_card_keyword"):this.$storage.removeStorageSync("clerk_keyword")},tabStatus:function(t){var e=this;if(e.load)return!1;uni.showLoading({mask:!0,title:"加载中..."}),e.list=[],e.page=2,e.activeTab=+t.currentTarget.dataset.id,1==this.status||3==this.status?this.getList():this.getCard()},tab:function(t){var e=this;if(e.load)return!1;uni.showLoading({mask:!0,title:"加载中..."}),e.list=[],e.page=2,e.activeTab=2,e.status=t,1==t?(this.sign="",this.tabList=this.order_list,this.getList()):3==t?(this.sign="mystery",this.tabList=this.order_list,this.getList()):(this.tabList=this.card_list,this.getCard())},getList:function(){var t,e,i=this;if(i.load)return!1;i.load=!0,3==this.activeTab?(t=i.$api.clerk.my,e={keyword_1:8,keyword:this.keyword}):5==this.activeTab?(t=i.$api.clerk.order,e={status:this.activeTab,keyword_1:9,keyword:this.keyword}):(t=i.$api.clerk.order,e={is_clerk:this.activeTab,keyword_1:9,keyword:this.keyword}),i.$request({url:t,data:Object.assign(e,{sign:this.sign})}).then((function(t){uni.hideLoading(),i.$hideLoading(),i.load=!1,0==t.code?(i.first=!0,i.list=t.data.list,i.page=2,i.searchResult=!0,i.more_list=!1,t.data.list.length==t.data.pagination.pageSize&&(i.more_list=!0),i.list.forEach((function(t){t.refund=null,2==t.cancel_status?t.refund="申请退款中":0==t.is_pay&&(t.refund="订单未支付")}))):uni.showToast({title:t.msg,icon:"none",duration:1e3})})).catch((function(t){i.load=!1,uni.hideLoading(),i.$hideLoading()}))},getCard:function(t,e){var i,a,o=this,n=this;if(n.load)return!1;n.load=!0,3==this.activeTab?(i=n.$api.clerk.my_card,a={keyword:this.keyword}):(i=n.$api.clerk.card,a={is_clerk:this.activeTab,keyword:this.keyword}),"reload"==t&&e&&(a.page=e),n.$request({url:i,data:Object.assign(a,{sign:this.sign})}).then((function(i){if(n.load=!1,n.first=!0,n.$hideLoading(),0==i.code)if("reload"==t){for(var a in i.data.list)n.list.splice(20*+e-20+ +a,1,i.data.list[a]);e++,e>o.page?uni.hideLoading():o.getCard("reload",e)}else uni.hideLoading(),n.list=i.data.list,n.page=2,n.searchResult=!0,n.more_list=!1,i.data.list.length==i.data.pagination.pageSize&&(n.more_list=!0);else uni.hideLoading(),uni.showToast({title:i.msg,icon:"none",duration:1e3})})).catch((function(t){n.load=!1,uni.hideLoading(),n.$hideLoading()}))}}};e.default=l},"376e":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"form-goods-time"},[t.value&&t.value.day?i("v-uni-view",{staticClass:"dir-left-nowrap cross-center",staticStyle:{"padding-bottom":"16rpx","font-size":"24rpx"}},[i("v-uni-view",[t._v("预约时间：")]),1==t.value.is_alone?i("v-uni-view",[t._v(t._s(t.value.new_before))]):t._e(),0==t.value.is_alone?i("v-uni-view",[t._v(t._s(t.value.new_before)+"-"+t._s(t.value.new_after)+"   共"+t._s(t.value.day)+t._s(t.value.place_unit))]):t._e()],1):t._e()],1)},n=[]},4626:function(t,e,i){"use strict";i.r(e);var a=i("94ba"),o=i.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},"4d1c":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6");var a={name:"app-tab-nav",props:{background:String,setTop:{type:[Number,String]},padding:{default:45,type:[Number,String]},setHeight:Number,placeHeight:Number,fontSize:Number,theme:{type:Object,default:function(){return{color:"#ff4544"}}},border:{default:!0,type:Boolean},shadow:{default:!0,type:Boolean},activeItem:{type:[Number,String]},tabList:Array,tabColor:{default:"#353535",type:String},paddingBottom:{default:0,type:[Number,String]},opacity:{default:1,type:[Number,String]}},methods:{handleClick:function(t){this.$emit("click",t)}}};e.default=a},"56c7":function(t,e,i){"use strict";var a=i("dc4e"),o=i.n(a);o.a},"7b5e":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.opacity,expression:"opacity"}]},[i("v-uni-view",{class:[t.shadow?"main-between app-nav shadow":"main-between app-nav"],style:[{"line-height":(t.setHeight?t.setHeight:90)+"rpx","font-size":(t.fontSize?t.fontSize:28)+"rpx",height:(t.setHeight?t.setHeight:90)+"rpx",top:t.setTop>0?t.setTop+"rpx":"0",backgroundColor:""+(t.background?t.background:"#fff"),opacity:""+t.opacity}]},t._l(t.tabList,(function(e){return i("v-uni-view",{key:e.id,staticClass:"box-grow-1 nav-item",style:[{borderBottom:(t.border?1:0)+"rpx solid #e2e2e2"}],attrs:{"data-id":e.id,"data-name":e.name},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[i("v-uni-text",{class:[e.id==t.activeItem?"active-text":""],style:[{color:""+(e.id==t.activeItem?t.theme.color:t.tabColor),"border-color":""+(e.id==t.activeItem?t.theme.color:""),height:(t.setHeight?t.setHeight-t.paddingBottom:90-t.paddingBottom)+"rpx",padding:"0 "+t.padding+"rpx"}]},[t._v(t._s(e.name))])],1)})),1),i("v-uni-view",{style:[{height:(t.placeHeight?t.placeHeight:90)+"rpx"}]})],1)},n=[]},"7fd0":function(t,e,i){"use strict";i.r(e);var a=i("7b5e"),o=i("86a7");for(var n in o)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("56c7");var s,r=i("f0c5"),d=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"1fc36d2d",null,!1,a["a"],s);e["default"]=d.exports},"86a7":function(t,e,i){"use strict";i.r(e);var a=i("4d1c"),o=i.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},"88e8":function(t,e,i){"use strict";i.r(e);var a=i("376e"),o=i("4626");for(var n in o)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(n);var s,r=i("f0c5"),d=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"51c4fef9",null,!1,a["a"],s);e["default"]=d.exports},"8eed":function(t,e,i){var a=i("a39f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("33e4bac1",a,!0,{sourceMap:!1,shadowMode:!1})},"94ba":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"form-goods-time",props:{value:Object},data:function(){return{}},methods:{}};e.default=a},a39f:function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,'@charset "UTF-8";.text-center[data-v-6d62d122]{text-align:center}.font-weight[data-v-6d62d122]{font-weight:700}.page-width[data-v-6d62d122]{width:100%}.goods-hover-class[data-v-6d62d122]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-6d62d122]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}\n/*全局文字大小*/\n/* 屏幕宽度*/uni-page-body[data-v-6d62d122]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-6d62d122]{width:100%}.u-hover-class[data-v-6d62d122]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-6d62d122]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.search[data-v-6d62d122]{height:%?88?%;padding:%?16?% %?26?%;background-color:#efeff4;position:fixed;top:%?104?%;left:0;width:100%;z-index:10}.search-place[data-v-6d62d122]{height:%?120?%;width:100%}.search.no-mall[data-v-6d62d122]{top:0}.search-content[data-v-6d62d122]{background-color:#fff;height:%?56?%;border-radius:%?28?%}.search-content uni-image[data-v-6d62d122]{height:%?24?%;width:%?24?%}.search-content uni-text[data-v-6d62d122]{color:#b2b2b2;font-size:%?24?%;margin:0 %?5?%}.tab-list[data-v-6d62d122]{height:%?96?%;position:fixed;top:%?192?%;left:0;right:0;z-index:10;width:100%;background-color:#fff;border-bottom:%?1?% solid #e2e2e2}.tab-list.no-mall[data-v-6d62d122]{top:%?88?%}.tab-item[data-v-6d62d122]{text-align:center;font-size:%?28?%;color:#666}.tab-item uni-text[data-v-6d62d122]{height:%?92?%;line-height:%?92?%;display:inline-block}.tab-item uni-text.active[data-v-6d62d122]{border-bottom:%?4?% solid #ff4544;color:#ff4544}.status[data-v-6d62d122]{width:100%;height:%?104?%;background-color:#fff;position:fixed;top:0;left:0;right:0;z-index:10}.status-list[data-v-6d62d122]{width:%?368?%;height:%?56?%;margin:%?24?% auto;border-radius:%?28?%;line-height:%?54?%;font-size:%?24?%;color:#666;background-color:#fff}.status-list uni-view[data-v-6d62d122]{width:50%;text-align:center;border:%?2?% solid #ff4544}.status-list .active[data-v-6d62d122]{background-color:#ff4544;height:%?56?%;color:#fff}.item[data-v-6d62d122]{width:%?702?%;margin:0 %?24?% %?24?%;background-color:#fff;border-radius:%?16?%;padding:%?24?%;position:relative}.item.card-item[data-v-6d62d122]{padding:%?40?% %?160?% %?40?% %?132?%}.shop[data-v-6d62d122]{font-size:%?24?%;color:#353535;max-width:%?500?%}.shop uni-image[data-v-6d62d122]{height:%?24?%;width:%?24?%;margin-right:%?12?%}.goods[data-v-6d62d122]{height:%?160?%;position:relative}.goods uni-image[data-v-6d62d122]{height:%?160?%;width:%?160?%;border-radius:%?10?%;float:left;margin-right:%?20?%}.goods-info[data-v-6d62d122]{font-size:%?24?%;color:#999}.goods-name[data-v-6d62d122]{color:#353535;height:%?70?%}.goods-price[data-v-6d62d122]{color:#353535;font-size:%?24?%;position:absolute;bottom:0;right:0}.total[data-v-6d62d122]{font-size:%?24?%;margin-top:%?28?%;color:#999;text-align:right}.total uni-text[data-v-6d62d122]{color:#353535;font-size:%?28?%}.clerk-btn uni-button[data-v-6d62d122]{padding:0 %?30?%;text-align:center;height:%?48?%!important;border-radius:%?24?%;border:%?1?% solid #ff4544;line-height:%?46?%;margin-top:%?28?%;font-size:%?24?%;color:#ff4544;background-color:#fff}.card-clerk .clerk-btn uni-button[data-v-6d62d122]{margin-top:0}.clerk-btn uni-button[data-v-6d62d122]::after{border:0}.clerk-btn-1[data-v-6d62d122]{width:%?138?%;padding:%?8?% 0;text-align:center;color:#ff4544;background-color:#ffecec;font-size:%?24?%}.search-item[data-v-6d62d122]{height:%?96?%;background-color:#efeff4;padding:0 %?24?%;font-size:%?28?%;color:#00c203;width:100%;position:fixed;top:0;left:0;z-index:22}.search-input[data-v-6d62d122]{height:%?64?%;position:relative;width:%?620?%}.search-input uni-image[data-v-6d62d122]{height:%?22?%;width:%?22?%;position:absolute;top:%?21?%;left:%?28?%;z-index:10}.search-input uni-input[data-v-6d62d122]{padding-left:%?62?%;background-color:#fff;border-radius:%?32?%;height:%?64?%;font-size:%?26?%;color:#353535}.search-history[data-v-6d62d122]{position:fixed;top:0;left:0;right:0;height:100%;background-color:#fff;padding:%?120?% %?4?% %?24?%;font-size:%?28?%;color:#666;z-index:20}.search-title[data-v-6d62d122]{padding:0 %?20?%;margin-bottom:%?24?%}.keyword-item[data-v-6d62d122]{height:%?64?%;line-height:%?64?%;padding:0 %?20?%;background-color:#f7f7f7;color:#333;border-radius:%?32?%;font-size:%?28?%;margin-left:%?20?%;margin-bottom:%?20?%;max-width:90%}.scan[data-v-6d62d122]{position:fixed;bottom:%?80?%;right:0;z-index:30;height:%?116?%;width:%?112?%}.scan uni-button[data-v-6d62d122]{height:%?116?%!important;width:%?112?%;border-top-left-radius:%?58?%;border-bottom-left-radius:%?58?%;border:%?1?% solid #cdcdcd;border-right:0;background-color:hsla(0,0%,100%,.8);-webkit-box-shadow:0 0 %?10?% #efefef;box-shadow:0 0 %?10?% #efefef;text-align:center}.scan uni-button uni-image[data-v-6d62d122]{height:%?64?%;width:%?64?%;margin-top:%?26?%}.item .card-img[data-v-6d62d122]{position:absolute;top:%?40?%;left:%?24?%;width:%?88?%;height:%?88?%;border-radius:50%}.platform[data-v-6d62d122]{font-size:%?24?%;color:#999;height:%?24?%;margin-top:%?20?%;margin-bottom:%?20?%}.platform-img[data-v-6d62d122]{height:%?24?%;width:%?24?%;margin-right:%?12?%}.card-name[data-v-6d62d122]{width:%?370?%;font-size:%?28?%;color:#353535}.card-clerk[data-v-6d62d122]{position:absolute;right:%?24?%;top:0;height:%?168?%}.card-clerk .clerked-img[data-v-6d62d122]{width:%?120?%;height:%?120?%}.no-tip[data-v-6d62d122]{position:fixed;top:%?400?%;left:0;right:0;margin:0 auto;color:#666;font-size:%?24?%;width:%?240?%;text-align:center}.no-tip uni-image[data-v-6d62d122]{height:%?240?%;width:%?240?%;margin-bottom:%?20?%}.left-status[data-v-6d62d122]{border-top-left-radius:%?28?%;border-bottom-left-radius:%?28?%}.right-status[data-v-6d62d122]{border-top-right-radius:%?28?%;border-bottom-right-radius:%?28?%}.history-img[data-v-6d62d122]{height:%?34?%;width:%?28?%}.history-list[data-v-6d62d122]{max-height:%?420?%;overflow:hidden}.item-top[data-v-6d62d122]{margin-bottom:%?28?%}.item-top .item-status[data-v-6d62d122]{font-size:%?24?%;color:#ff4544}.goods-attr[data-v-6d62d122]{margin-bottom:%?16?%}.goods-attr uni-text[data-v-6d62d122]{margin-right:%?18?%}.refund-text[data-v-6d62d122]{font-size:%?24?%;color:#ff4544;margin-top:%?24?%;text-align:right}.surplus-number[data-v-6d62d122]{font-size:%?24?%;color:#999;margin:%?12?% 0}body.?%PAGE?%[data-v-6d62d122]{background:#f7f7f7}',""])},b46e:function(t,e,i){"use strict";i.r(e);var a=i("d1b6"),o=i("c5ea");for(var n in o)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("b756");var s,r=i("f0c5"),d=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"6d62d122",null,!1,a["a"],s);e["default"]=d.exports},b756:function(t,e,i){"use strict";var a=i("8eed"),o=i.n(a);o.a},c5ea:function(t,e,i){"use strict";i.r(e);var a=i("33b1"),o=i.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},d1b6:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("app-layout",[t.toSearch?t._e():a("v-uni-view",{staticStyle:{"z-index":"50"}},[t.is_mall||t.is_mystery?a("v-uni-view",{staticClass:"status"},[a("v-uni-view",{staticClass:"status-list main-between"},[a("v-uni-view",{staticClass:"box-grow-1",class:[1==t.status?"active":"","left-status"],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tab(1)}}},[t._v("订单")]),t.is_mall?a("v-uni-view",{staticClass:"box-grow-1",class:[2==t.status?"active":"","right-status"],style:t.is_mystery?"border-radius: 0;border-left-width: 0;border-right-width: 0":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tab(2)}}},[t._v("卡券")]):t._e(),t.is_mystery?a("v-uni-view",{staticClass:"box-grow-1",class:[3==t.status?"active":"","right-status"],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tab(3)}}},[t._v("盲盒")]):t._e()],1)],1):t._e(),a("v-uni-view",{class:["search",t.is_mall||t.is_mystery?"":"no-mall"]},[a("v-uni-view",{staticClass:"main-center search-content cross-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.beSearch.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:"/static/image/icon/icon-search.png"}}),1==t.status||3==t.status?a("v-uni-text",[t._v("请输入订单号、手机号")]):t._e(),2==t.status?a("v-uni-text",[t._v("请输入用户昵称、卡券名称、备注名或手机号")]):t._e()],1)],1),a("app-tab-nav",{attrs:{setTop:t.setTop,placeHeight:t.placeHeight,setHeight:96,tabList:t.tabList,padding:0,activeItem:t.activeTab},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabStatus.apply(void 0,arguments)}}})],1),t.toSearch?a("v-uni-view",{staticClass:"search-item main-between cross-center"},[a("v-uni-view",{staticClass:"search-input"},[a("v-uni-image",{attrs:{src:"/static/image/icon/icon-search.png"}}),1==t.status&&t.toSearch?a("v-uni-input",{attrs:{focus:!0,"confirm-type":"search","placeholder-style":"color:#999999;font-size:13px;",placeholder:"输入订单号、手机号搜索"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}):t._e(),2==t.status&&t.toSearch?a("v-uni-input",{attrs:{focus:!0,"confirm-type":"search","placeholder-style":"color:#999999;font-size:13px;",placeholder:"输入用户昵称、卡券名称、备注名或手机号搜索"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}):t._e(),3==t.status&&t.toSearch?a("v-uni-input",{attrs:{focus:!0,"confirm-type":"search","placeholder-style":"color:#999999;font-size:13px;",placeholder:"搜索全部订单"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}):t._e()],1),a("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancelSeacrch.apply(void 0,arguments)}}},[t._v("取消")])],1):t._e(),!t.searchResult&&t.toSearch?a("v-uni-view",{class:["search-history",0==t.list.length?"":"go-out"]},[0!=t.candidate.length?a("v-uni-view",{staticClass:"main-between search-title"},[a("v-uni-view",[t._v("历史搜索")]),a("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[a("v-uni-image",{staticClass:"history-img",attrs:{src:"/static/image/icon/delete.png"}})],1)],1):t._e(),a("v-uni-view",{staticClass:"flex-wrap history-list"},t._l(t.candidate,(function(e){return a("v-uni-view",{key:e,staticClass:"keyword-item box-grow-0",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.keywordSearch(e)}}},[a("v-uni-text",{staticClass:"t-omit"},[t._v(t._s(e))])],1)})),1)],1):t._e(),t.toSearch?a("v-uni-view",{staticClass:"search-place"}):t._e(),1==t.status||3==t.status?t._l(t.list,(function(e,o){return a("v-uni-view",{key:e.id,staticClass:"item"},[a("v-uni-view",{staticClass:"main-between item-top"},[a("v-uni-view",{staticClass:"shop t-omit"},[a("v-uni-image",{attrs:{src:i("2aaa")}})],1),a("v-uni-view",{staticClass:"item-status"},[t._v(t._s(e.status_text))])],1),a("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDetail(e.id)}}},t._l(e.detail,(function(e){return a("v-uni-view",{key:e.id,staticClass:"goods",style:{"margin-top":(0==o?"0":"12")+"px"}},[a("form-goods-time",{attrs:{value:e}}),a("v-uni-image",{attrs:{src:e.goods_info.goods_attr.cover_pic}}),a("v-uni-view",{staticClass:"goods-info"},[e.goods_info.goods_attr.corner_icon?a("v-uni-image",{staticStyle:{height:"78rpx",width:"78rpx",position:"absolute",left:"84rpx",bottom:"-1rpx","z-index":"1"},attrs:{src:e.goods_info.goods_attr.corner_icon}}):t._e(),a("v-uni-view",{staticClass:"goods-name t-omit-two"},[t._v(t._s(e.goods_info.goods_attr.name))]),a("v-uni-view",{staticClass:"goods-attr  t-omit-two"},t._l(e.goods_info.attr_list,(function(e){return a("v-uni-text",{key:e.id},[t._v(t._s(e.attr_group_name)+":"+t._s(e.attr_name))])})),1),a("v-uni-view",[t._v("x"+t._s(e.num))])],1),a("v-uni-view",{staticClass:"goods-price"},[t._v("￥ "+t._s(e.total_price))])],1)})),1),a("v-uni-view",{staticClass:"total"},[t._v("合计"),a("v-uni-text",[t._v("￥"+t._s(e.total_pay_price))]),t._v("(含运费￥"+t._s(e.express_price)+")")],1),0==e.clerk_id&&1!=e.cancel_status?a("v-uni-view",{staticClass:"dir-right-nowrap"},[e.refund?a("v-uni-view",{staticClass:"refund-text"},[t._v(t._s(e.refund))]):a("v-uni-view",{staticClass:"clerk-btn dir-right-nowrap"},[e.action_status&&e.action_status.is_show_form_diy&&1==e.action_status.is_clerk_order?a("v-uni-button",{staticStyle:{"margin-left":"16rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.jumpDetail(e.plugin_data.diy_form_id)}}},[t._v("表单详情")]):t._e(),a("v-uni-button",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toClerk(e.id)}}},[t._v("核销")])],1)],1):e.action_status&&e.action_status.is_show_form_diy?a("v-uni-view",{staticClass:"clerk-btn main-right",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.jumpDetail(e.plugin_data.diy_form_id)}}},[e.action_status&&e.action_status.is_show_form_diy?a("v-uni-button",{staticClass:"box-grow-0",staticStyle:{"margin-right":"0"}},[t._v("表单详情")]):t._e()],1):t._e()],1)})):t._e(),2==t.status?t._l(t.list,(function(e){return a("v-uni-view",{key:e.id,staticClass:"item card-item"},[a("v-uni-image",{staticClass:"card-img",attrs:{src:e.pic_url}}),a("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toCardDetail(e.id)}}},[a("v-uni-view",{staticClass:"t-omit-two card-name"},[t._v(t._s(e.name))]),a("v-uni-view",{staticClass:"surplus-number"},[t._v("剩余"+t._s(e.number-e.use_number)+"次")]),a("v-uni-view",{staticClass:"dir-left-nowrap platform cross-center"},[a("v-uni-image",{staticClass:"platform-img",attrs:{src:e.platform_icon}}),a("v-uni-view",[t._v(t._s(e.nickname)),e.remark_name?a("span",[t._v("("+t._s(e.remark_name)+")")]):t._e()])],1)],1),a("v-uni-view",{staticClass:"cross-center card-clerk"},[0==e.is_use&&0==e.receive_id?a("v-uni-view",{staticClass:"clerk-btn dir-right-nowrap",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toClerkCard(e.id)}}},[a("v-uni-button",[t._v("核销")])],1):0==e.is_use&&e.receive_id>0?a("v-uni-view",{staticClass:"clerk-btn-1"},[t._v("已转赠")]):a("v-uni-image",{staticClass:"clerked-img",attrs:{src:i("f36d")}})],1)],1)})):t._e(),0==t.list.length&&1==t.status?a("v-uni-view",{staticClass:"no-tip"},[a("v-uni-image",{attrs:{src:t.clerkImg.order}}),a("v-uni-view",[t._v("没有任何订单哦~")])],1):t._e(),0==t.list.length&&2==t.status?a("v-uni-view",{staticClass:"no-tip"},[a("v-uni-image",{attrs:{src:t.clerkImg.card}}),a("v-uni-view",[t._v("没有任何卡券哦~")])],1):t._e()],2)},n=[]},dc4e:function(t,e,i){var a=i("f221");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("1d1ffe7b",a,!0,{sourceMap:!1,shadowMode:!1})},f221:function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,'@charset "UTF-8";.text-center[data-v-1fc36d2d]{text-align:center}.font-weight[data-v-1fc36d2d]{font-weight:700}.page-width[data-v-1fc36d2d]{width:100%}.goods-hover-class[data-v-1fc36d2d]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-1fc36d2d]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}\n/*全局文字大小*/\n/* 屏幕宽度*/uni-page-body[data-v-1fc36d2d]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-1fc36d2d]{width:100%}.u-hover-class[data-v-1fc36d2d]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-1fc36d2d]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.app-nav[data-v-1fc36d2d]{color:#353535;width:100%;position:fixed;left:0;background-color:#fff;z-index:11}.app-nav .nav-item[data-v-1fc36d2d]{text-align:center}.app-nav .nav-item uni-text[data-v-1fc36d2d]{display:inline-block}.app-nav .active-text[data-v-1fc36d2d]{color:#ff4544;border-bottom:%?4?% solid #ff4544}.app-nav.shadow[data-v-1fc36d2d]{-webkit-box-shadow:0 %?2?% %?10?% rgba(0,0,0,.06);box-shadow:0 %?2?% %?10?% rgba(0,0,0,.06)}.blue-m-text[data-v-1fc36d2d]{color:#446dfd}body.?%PAGE?%[data-v-1fc36d2d]{background:#f7f7f7}',""])},f36d:function(t,e,i){t.exports=i.p+"static/img/clerked.1fc51ced.png"}}]);