(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-submit-gift"],{"0c06":function(t,e,i){"use strict";i.r(e);var a=i("7db4"),o=i("f5f7");for(var s in o)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(s);i("6890");var n,r=i("f0c5"),d=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"c078e2e2",null,!1,a["a"],n);e["default"]=d.exports},"25db":function(t,e,i){var a=i("e731");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("7a335cdf",a,!0,{sourceMap:!1,shadowMode:!1})},2821:function(t,e,i){"use strict";i.r(e);var a=i("f39e"),o=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=o.a},"2d39":function(t,e,i){"use strict";var a=i("25db"),o=i.n(a);o.a},4523:function(t,e,i){"use strict";i.r(e);var a=i("c8a6"),o=i("c539");for(var s in o)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(s);i("2d39");var n,r=i("f0c5"),d=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"12367b86",null,!1,a["a"],n);e["default"]=d.exports},"4e22":function(t,e,i){var a=i("e51e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("76c7c508",a,!0,{sourceMap:!1,shadowMode:!1})},"4fbc":function(t,e,i){"use strict";(function(t){var a=i("4ea4");i("8e6e"),i("ac6a"),i("456d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("28a5");var o=a(i("ade3"));i("7f7f"),i("6b54"),i("87b3");var s=a(i("53ca")),n=i("2f62"),r=a(i("0c06")),d=a(i("7d93")),l=a(i("92a5")),c=a(i("e047"));function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function f(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(Object(i),!0).forEach((function(e){(0,o.default)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var g={name:"address",data:function(){return{name:"",mobile:"",submitLock:!1,previewData:{hasCity:!1,all_ziti:!1},address_id:"",address:{},goods_id:-1,user_order_id:0,goods:[],store_list:[],store_index:0,send_type:[],remark:"",store:{},mch:{},send_data:null,deli:"",loading:!1,dis_send_type:"",diyForm:[],template_message_captain:[],address_disabled:!0}},onLoad:function(e){var i=this;this.$commonLoad.onload(e),this.goods_id=e.goods_id,this.user_order_id=e.id;var a="";2==e.status?a=this.$api.gift.join_detail:1==e.status&&(a=this.$api.gift.win_detail),this.$request({url:a,data:{user_order_id:e.id}}).then((function(a){for(var o in a.data.detail.detail)a.data.detail.detail[o].form_data=null;i.template_message_captain=a.data.template_message_captain,i.goods=a.data.detail.detail;for(var n={list:[{mch_id:0,goods_list:[],use_integral:0,user_coupon_id:0,distance:0,remark:"",order_form:[]}],address_id:0},r=0;r<i.goods.length;r++){for(var d={id:i.goods[r].goods_id,attr:[],num:i.goods[r].num,cat_id:0,goods_attr_id:i.goods[r].goods_attr_id,cart_id:0,user_order_id:e.id},l=[],c=i.goods[r].goods_info,u=0;u<c.length;u++)l.push({attr_id:c[u].attr_id,attr_group_id:c[u].attr_group_id});d.attr=l,n.list[0].goods_list.push(d)}i.send_data=n,i.$request({url:i.$api.gift.preview,method:"post",data:{form_data:JSON.stringify(n)}}).then((function(e){if(0===e.code){if(i.send_type=e.data.mch_list[0].delivery.send_type_list,i.dis_send_type=e.data.mch_list[0].delivery.send_type,i.mch=e.data.mch_list[0],"object"!==(0,s.default)(e.data.address)){var a=new t(e.data.address,"base64"),o=a.toString("utf8");e.data.address=JSON.parse(o)}i.address=e.data.address,i.address_disabled=e.data.address_enable,i.loading=!0,i.changeSendType(i.send_type[0].value)}else uni.showModal({title:"提示",content:e.msg,success:function(){uni.navigateBack()}})}))}))},onShow:function(){var e=this;if(this.$store.state.gift.address_id&&!this.$validation.isEmpty(this.send_data)){var i=this.send_data;i.list[0].send_type=this.deli,i.list[0].address_id=this.$store.state.gift.address_id,i.address_id=this.$store.state.gift.address_id,this.$request({url:this.$api.gift.preview,method:"post",data:{form_data:JSON.stringify(i)}}).then((function(i){if(0===i.code){if(e.send_type=i.data.mch_list[0].delivery.send_type_list,e.mch=i.data.mch_list[0],"object"!==(0,s.default)(i.data.address)){var a=new t(i.data.address,"base64"),o=a.toString("utf8");i.data.address=JSON.parse(o)}e.address=i.data.address,e.address_disabled=i.data.address_enable,"city"===e.deli&&(e.address=e.mch.address)}else uni.showModal({title:"提示",content:i.msg,success:function(){uni.navigateBack()}})}))}if(this.$store.state.gift.store_id)for(var a=0;a<this.store_list.length;a++)this.store_list[a].id===this.$store.state.gift.store_id&&(this.store=this.store_list[a])},methods:{subscribe:function(){var t=this;this.$subscribe(this.template_message_captain).then((function(){t.submission()})).catch((function(){t.submission()}))},submission:function(){var t=this;for(var e in this.goods){var i=this.goods[e];if(i.goods_form_validate_result&&i.goods_form_validate_result.hasError)return void uni.showModal({title:"提示",content:i.goods_form_validate_result.errors[0].msg,showCancel:!1})}uni.showLoading({title:"提交中"});for(var a={list:[{mch_id:0,goods_list:[],send_type:this.deli,store_id:this.store.id,use_integral:0,user_coupon_id:0,remark:this.remark,order_form:this.diyForm,address_id:this.address&&this.address.id?this.address.id:0}],address_id:this.address&&this.address.id?this.address.id:0,address:{name:this.name,mobile:this.mobile}},o=0;o<this.goods.length;o++){for(var s={id:this.goods[o].goods_id,attr:[],num:this.goods[o].num,cat_id:0,goods_attr_id:this.goods[o].goods_attr_id,cart_id:0,user_order_id:this.user_order_id,form_data:this.goods[o].form_data},n=[],r=this.goods[o].goods_info,d=0;d<r.length;d++)n.push({attr_id:r[d].attr_id,attr_group_id:r[d].attr_group_id});s.attr=n,a.list[0].goods_list.push(s)}this.$request({url:this.$api.gift.convert,method:"post",data:{form_data:JSON.stringify(a)}}).then((function(e){0===e.code?t.pay_data(e.data):(uni.hideLoading(),uni.showModal({title:"提示",content:e.msg}))}))},pay_data:function(t){var e=this;this.$request({url:this.$api.order.pay_data,method:"post",data:f({},t)}).then((function(i){if(0===i.code)if(i.data.hasOwnProperty("id")){var a=i.data.id;0==e.mch.express_price?e.$request({url:e.$api.payment.get_payments,method:"get",data:{id:a}}).then((function(t){0===t.code?e.$request({url:e.$api.payment.pay_data,method:"get",data:{id:a,pay_type:"balance"}}).then((function(t){0===t.code?e.$request({url:e.$api.payment.pay_buy_balance,data:{id:a}}).then((function(t){0===t.code?(uni.hideLoading(),uni.redirectTo({url:"/pages/order-submit/pay-result?payment_order_union_id=".concat(a,"&order_page_url=").concat(encodeURIComponent("/plugins/gift/order/order"))})):(uni.hideLoading(),uni.showModal({title:"提示",content:t.msg}))})):(uni.hideLoading(),uni.showModal({title:"提示",content:t.msg}))})):(uni.hideLoading(),uni.showModal({title:"提示",content:t.msg}))})):e.$payment.pay(a).then((function(t){uni.hideLoading(),uni.redirectTo({url:"/plugins/gift/order/order"})})).catch((function(t){uni.hideLoading(),uni.redirectTo({url:"/plugins/gift/order/order"})}))}else setTimeout((function(){e.pay_data(t)}),1e3);else uni.hideLoading(),uni.showModal({title:"提示",content:i.msg})}))},navigateStore:function(){uni.navigateTo({url:"/pages/order-submit/store-pick?plugin=gift"})},jump:function(){uni.navigateTo({url:"/pages/order-submit/map"})},handleAddressInput:function(t){"undefined"!==typeof t.name&&(this.name=t.name),"undefined"!==typeof t.mobile&&(this.mobile=t.mobile)},changeSendType:function(t){this.deli=t,this.mch.delivery.send_type=t,this.previewData.hasCity=!1,this.previewData.all_ziti=!1,"express"==t&&this.express(),"city"==t&&(this.previewData.hasCity=!0,this.city()),"offline"==t&&(this.previewData.all_ziti=!0,this.name=this.address?this.address.name:"",this.mobile=this.address?this.address.mobile:"",this.setMethod())},setMethod:function(){var t=this;this.$jwx.getLocation({success:function(e){t.$request({url:t.$api.order.store_list,data:{latitude:e.latitude,longitude:e.longitude,goods_id:t.goods_id}}).then((function(e){t.store_list=e.data.list,t.store=e.data.list[0]}))}})},city:function(){var t=this,e=this.send_data;e.list[0].send_type="city",this.address&&1!==this.address.type&&(e.list[0].address_id=this.address.id),this.$request({url:this.$api.gift.preview,method:"post",data:{form_data:JSON.stringify(e)}}).then((function(e){t.send_type=e.data.mch_list[0].delivery.send_type_list,t.mch=e.data.mch_list[0],t.address=e.data.mch_list[0].address,t.address&&1!==t.address.type&&(t.address=null),t.address_disabled=e.data.address_enable}))},express:function(){var t=this,e=this.send_data;e.list[0].send_type="express",this.address&&(e.list[0].address_id=this.address.id),this.$request({url:this.$api.gift.preview,method:"post",data:{form_data:JSON.stringify(e)}}).then((function(e){t.send_type=e.data.mch_list[0].delivery.send_type_list,t.mch=e.data.mch_list[0],t.address=e.data.mch_list[0].address,t.address_disabled=e.data.address_enable}))},diyFormInput:function(t){var e=t.data;this.diyForm=e},handleGoodsFormInput:function(t){var e=t.sign.split(","),i=parseInt(e[1]),a=[];for(var o in t.data)a[o]={key:t.data[o].key,label:t.data[o].name,value:t.data[o].value,required:t.data[o].is_required};this.goods[i].form_data=a},handleGoodsFormValidate:function(t){var e=t.sign.split(","),i=parseInt(e[1]);this.goods[i].goods_form_validate_result=t.result}},computed:f(f({},(0,n.mapState)("gift",{theme:function(t){return t.theme}})),{},{getTheme:function(t){return this.$storage.getStorageSync("giftThemeColor")}}),components:{"app-empty-bottom":r.default,"app-diy-form":d.default,appSubmitGoods:l.default,AppAddressBar:c.default}};e.default=g}).call(this,i("b639").Buffer)},6890:function(t,e,i){"use strict";var a=i("4e22"),o=i.n(a);o.a},"7d93":function(t,e,i){"use strict";i.r(e);var a=i("8236"),o=i("2821");for(var s in o)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(s);var n,r=i("f0c5"),d=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"0e5df579",null,!1,a["a"],n);e["default"]=d.exports},"7db4":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"empty-bottom",style:{backgroundColor:t.backgroundColor,height:(t.botBool?t.BotHeight+t.height:t.height+t.emptyHeight)+"rpx"}})},s=[]},8236:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view")},s=[]},9259:function(t,e,i){"use strict";var a=i("4ea4");i("8e6e"),i("ac6a"),i("456d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(i("ade3"));i("c5f6");var s=i("2f62");function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){(0,o.default)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var d={name:"app-empty-bottom",props:{backgroundColor:{type:String,default:function(){return"white"}},height:{type:Number,default:function(){return 0}},botBool:{type:Boolean,default:function(){return!1}}},computed:r({},(0,s.mapGetters)("iPhoneX",{BotHeight:"getBotHeight",emptyHeight:"getEmpty"}))};e.default=d},c539:function(t,e,i){"use strict";i.r(e);var a=i("4fbc"),o=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=o.a},c8a6:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("app-layout",[t.mch&&t.mch.goods_list&&t.mch.goods_list.length>0?i("v-uni-view",{staticClass:"page"},[i("v-uni-view",{staticClass:"group"},[i("app-address-bar",{attrs:{hasCity:t.previewData.hasCity,sign:"gift",allZiti:t.previewData.all_ziti,address:t.address},on:{"address-input":function(e){arguments[0]=e=t.$handleEvent(e),t.handleAddressInput.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"group"},[t.mch.mch.name?i("v-uni-view",{staticStyle:{padding:"26rpx 32rpx"}},[i("v-uni-view",{staticClass:"dir-left-nowrap cross-center",staticStyle:{padding:"10rpx 0","line-height":"1.2"}},[i("v-uni-view",{staticClass:"box-grow-0"},[i("v-uni-image",{staticClass:"title-icon mr-12",attrs:{src:"/static/image/icon/store-black.png"}})],1),i("v-uni-view",{staticClass:"box-grow-1 font-bold ellipsis-1"},[t._v(t._s(t.mch.mch.name))]),t.mch.mch.id>0&&t.mch.delivery&&"offline"===t.mch.delivery.send_type&&t.store&&"-m"!=t.store.distance?i("v-uni-view",{staticClass:"box-grow-0 dir-left-nowrap cross-center"},[i("v-uni-image",{staticClass:"mr-12",staticStyle:{display:"block",width:"22rpx",height:"26rpx"},attrs:{src:"/static/image/icon/location.png"}}),i("v-uni-view",[t._v("距您"+t._s(t.store.distance))])],1):t._e()],1),t.mch.delivery&&"offline"===t.mch.delivery.send_type?[t.mch.no_store&&!0===t.mch.no_store?i("v-uni-view",{style:{color:t.getTheme.color,paddding:"10rpx 0"}},[t._v("暂无门店，请选择其他配送方式")]):[t.store?[0==t.mch.mch.id?i("v-uni-view",{staticClass:"dir-left-nowrap",staticStyle:{padding:"10rpx 0","line-height":"1.2"}},[i("v-uni-view",{staticClass:"box-grow-1 dir-left-nowrap cross-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateStore.apply(void 0,arguments)}}},[i("v-uni-view",[i("v-uni-image",{staticClass:"title-icon mr-12",attrs:{src:"/static/image/icon/navigation-black.png"}})],1),i("v-uni-view",{staticClass:"font-bold ellipsis-1 mr-12"},[t._v(t._s(t.store.name))]),i("v-uni-view",{staticClass:"mr-12"},[i("v-uni-image",{staticClass:"mr-12",staticStyle:{width:"12rpx",height:"22rpx"},attrs:{src:"/static/image/icon/right.png"}})],1)],1),"-m"!=t.store.distance||t.getLocationFail?i("v-uni-view",{staticClass:"box-grow-0 dir-left-nowrap cross-center"},[i("v-uni-view",[i("v-uni-image",{staticClass:"mr-12",staticStyle:{display:"block",width:"22rpx",height:"26rpx"},attrs:{src:"/static/image/icon/location.png"}})],1),t.getLocationFail?i("v-uni-view",{style:{color:t.getTheme.color,"border-color":t.theme.border},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.openLocationSetting.apply(void 0,arguments)}}},[t._v("获取位置")]):"-m"!=t.store.distance?i("v-uni-view",[t._v("距您"+t._s(t.store.distance))]):t._e()],1):t._e()],1):t._e(),i("v-uni-view",{staticStyle:{padding:"10rpx 0","line-height":"1.2"}},[i("v-uni-view",{staticClass:"font-gray ellipsis-2",staticStyle:{"line-height":"30rpx","max-height":"60rpx"}},[t._v(t._s(t.store.address))])],1)]:i("v-uni-view",{staticClass:"dir-left-nowrap cross-center",staticStyle:{padding:"10rpx 0"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateStore.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"box-grow-1 dir-left-nowrap"},[i("v-uni-image",{staticClass:"title-icon mr-12",attrs:{src:"/static/image/icon/navigation-black.png"}}),i("v-uni-view",{staticClass:"mr-12 font-bold"},[t._v("选择门店")])],1),i("v-uni-view",{staticClass:"box-grow-0 dir-left-nowrap cross-center"},[i("v-uni-view",{staticClass:"mr-12 font-gray"},[t._v("请选择门店")]),i("v-uni-image",{staticClass:"mr-12",staticStyle:{width:"12rpx",height:"22rpx"},attrs:{src:"/static/image/icon/arrow-right.png"}})],1)],1)]]:t._e()],2):t._e(),!1!==t.mch.show_delivery?i("v-uni-view",{staticClass:"line"}):t._e(),!1!==t.mch.show_delivery?i("v-uni-view",{staticStyle:{padding:"18rpx 32rpx"}},[i("v-uni-view",{staticClass:"dir-left-nowrap cross-center",staticStyle:{padding:"18rpx 0"}},[i("v-uni-view",{staticClass:"box-grow-0"},[i("v-uni-image",{staticClass:"title-icon mr-12",attrs:{src:"/static/image/icon/delivery.png"}})],1),i("v-uni-view",{staticClass:"box-grow-1 font-bold"},[t._v("配送方式")])],1),i("v-uni-view",{staticClass:"dir-left-nowrap",staticStyle:{padding:"18rpx 0"}},t._l(t.mch.delivery.send_type_list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"send-type",class:e.value==t.mch.delivery.send_type?"theme-color":"app-light-gray-back",style:{"background-color":e.value==t.mch.delivery.send_type?t.getTheme.background:"#f7f7f7"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.changeSendType(e.value)}}},[t._v(t._s(e.name))])})),1)],1):t._e(),t.mch.delivery&&"city"===t.mch.delivery.send_type&&t.mch.city?[i("v-uni-view",{staticClass:"line"}),t.mch.city.error?i("v-uni-view",{staticClass:"dir-left-nowrap cross-center",staticStyle:{padding:"36rpx 32rpx"}},[i("v-uni-view",{staticClass:"box-grow-1"},[t._v(t._s(t.mch.city.error))]),i("v-uni-view",{staticClass:"box-grow-0 dir-left-nowrap delivery-coverage-btn",staticStyle:{margin:"-12rpx 0"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jump.apply(void 0,arguments)}}},[t._v("查看配送范围")])],1):i("v-uni-view",{staticStyle:{padding:"36rpx 32rpx"}},[i("v-uni-view",{staticStyle:{padding:"10rpx 0"}},[t._v("发货地址："+t._s(t.mch.city.address))]),i("v-uni-view",{staticClass:"dir-left-nowrap cross-center",staticStyle:{padding:"10rpx 0"}},[i("v-uni-view",{staticClass:"box-grow-1"},[t.mch.city.explain?i("v-uni-view",[t._v(t._s(t.mch.city.explain))]):t._e()],1),i("v-uni-view",{staticClass:"box-grow-0 dir-left-nowrap delivery-coverage-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jump.apply(void 0,arguments)}}},[t._v("查看配送范围")])],1)],1)]:t._e(),t.mch.pick_up_enable?t._e():i("v-uni-view",{staticClass:"line"}),t.mch.pick_up_enable?t._e():i("v-uni-view",{staticStyle:{height:"80rpx","line-height":"80rpx",background:"#fff4f3",padding:"0 24rpx"}},[i("v-uni-view",[t._v("本单还差"+t._s(t.mch.pick_up_to_send_price)+"元起送")])],1),i("app-submit-goods",{attrs:{hiddenPrice:!0,theme:t.getTheme,plugin:"gift",list:t.mch}})],2),i("v-uni-view",{staticClass:"group"},[t.mch.order_form&&"1"==t.mch.order_form.status?i("v-uni-view",[i("app-diy-form",{attrs:{showRequiredIcon:!0,title:t.mch.order_form.name,list:t.mch.order_form.value,"label-position":"top","show-scroll-btn":t.mch.order_form.show_scroll},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.diyFormInput.apply(void 0,arguments)}}})],1):t._e(),t.mch.has_goods_form?t._l(t.mch.goods_list,(function(e,a){return e.form&&!e.form.same_form?i("v-uni-view",{key:a,staticClass:"group goods-form"},[i("v-uni-view",{staticClass:"font-bold",staticStyle:{padding:"36rpx 32rpx"}},[t._v(t._s(e.form.name))]),i("v-uni-view",{staticClass:"line"}),1!==t.mch.diff_goods_form_count||t.previewData.mch_list.length>1?i("v-uni-view",{staticClass:"row goods-list"},t._l(t.mch.goods_list,(function(a,o){return a.form&&a.form.id==e.form.id?i("v-uni-view",{key:o,staticClass:"dir-left-nowrap goods-item"},[i("v-uni-view",{staticClass:"box-grow-0"},[i("v-uni-image",{staticClass:"goods-image",attrs:{src:a.goods_attr.pic_url?a.goods_attr.pic_url:a.cover_pic}})],1),i("v-uni-view",{staticClass:"box-grow-1"},[i("v-uni-view",{staticClass:"goods-name ellipsis-2"},[t._v(t._s(a.name))]),i("v-uni-view",{staticClass:"dir-left-wrap"},t._l(a.attr_list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"mr-12 font-gray font-small"},[t._v(t._s(e.attr_group_name)+":"+t._s(e.attr_name))])})),1),i("v-uni-view",{staticClass:"dir-left-nowrap"},[i("v-uni-view",{staticClass:"box-grow-1 font-gray font-small"},[t._v("×"+t._s(a.num))]),i("v-uni-view",{staticClass:"box-grow-0"},[i("v-uni-view",{staticClass:"font-small",staticStyle:{"text-align":"right"},style:{color:t.theme.color}},[t._l(a.custom_currency,(function(e,a){return i("v-uni-text",{key:a},[t._v(t._s(e)+"+")])})),t._v("￥"+t._s(a.total_original_price))],2),t._l(a.discounts,(function(e,a){return i("v-uni-view",{key:a,staticStyle:{"text-align":"right"},style:{color:t.theme.color}},[t._v(t._s(e.name)+": "+t._s(e.value))])}))],2)],1)],1)],1):t._e()})),1):t._e(),i("v-uni-view",{staticStyle:{padding:"0 12rpx"}},[i("app-diy-form",{attrs:{showRequiredIcon:!0,"label-position":"top","label-fs28":!0,list:e.form.value,sign:"0,"+a+","+e.form.id},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleGoodsFormInput.apply(void 0,arguments)},validate:function(e){arguments[0]=e=t.$handleEvent(e),t.handleGoodsFormValidate.apply(void 0,arguments)}}})],1)],1):t._e()})):t._e()],2)],1):t._e(),i("v-uni-view",{staticClass:"submit-bar u-bottom-fixed dir-top-nowrap safe-area-inset-bottom"},[i("v-uni-view",{staticClass:"bd-bottom dir-right-nowrap"},[i("v-uni-view",{staticClass:"submit-btn u-submit-bar-height box-grow-0 main-center cross-center",class:[t.submitLock?" lock":""],style:{"background-color":t.getTheme.background},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.subscribe.apply(void 0,arguments)}}},[i("v-uni-view",{staticStyle:{"background-color":"transparent",color:"#ffffff","text-align":"center"}},[t._v("提交订单")])],1)],1)],1)],1)},s=[]},e51e:function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,'@charset "UTF-8";.text-center[data-v-c078e2e2]{text-align:center}.font-weight[data-v-c078e2e2]{font-weight:700}.page-width[data-v-c078e2e2]{width:100%}.goods-hover-class[data-v-c078e2e2]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-c078e2e2]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}\n/*全局文字大小*/\n/* 屏幕宽度*/uni-page-body[data-v-c078e2e2]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-c078e2e2]{width:100%}.u-hover-class[data-v-c078e2e2]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-c078e2e2]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.empty-bottom[data-v-c078e2e2]{width:100%}body.?%PAGE?%[data-v-c078e2e2]{background:#f7f7f7}',""])},e731:function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,'@charset "UTF-8";.text-center[data-v-12367b86]{text-align:center}.font-weight[data-v-12367b86]{font-weight:700}.page-width[data-v-12367b86]{width:100%}.goods-hover-class[data-v-12367b86]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-12367b86]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}\n/*全局文字大小*/\n/* 屏幕宽度*/uni-page-body[data-v-12367b86]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-12367b86]{width:100%}.u-hover-class[data-v-12367b86]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-12367b86]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.page[data-v-12367b86]{padding-bottom:%?110?%;font-size:%?28?%;line-height:1;color:#353535;padding-bottom:calc(%?110?% + env(safe-area-inset-bottom));padding-bottom:calc(%?110?% + constant(safe-area-inset-bottom))}.page .group[data-v-12367b86]{margin:%?20?% %?26?%;background:#fff;border-radius:%?16?%;overflow:hidden;-webkit-box-shadow:0 0 %?5?% rgba(0,0,0,.025);box-shadow:0 0 %?5?% rgba(0,0,0,.025)}.page .group .title-icon[data-v-12367b86]{width:%?28?%;height:%?25?%;display:block}.page .group .send-type[data-v-12367b86]{display:inline-block;padding:0 0;height:%?56?%;line-height:%?56?%;width:%?190?%;text-align:center;border-radius:%?100?%;margin:0 %?32?% 0 0;font-size:%?28?%}.goods-form .goods-list[data-v-12367b86]{padding-top:%?12?%;padding-bottom:%?12?%}.goods-form .goods-item[data-v-12367b86]{margin:%?12?% 0}.goods-form .goods-image[data-v-12367b86]{width:%?200?%;height:%?200?%;margin-right:%?24?%}.goods-form .goods-name[data-v-12367b86]{line-height:%?35?%;height:%?70?%;margin-bottom:%?32?%}.u-bottom-fixed[data-v-12367b86]{position:fixed;bottom:0;left:0;width:100%;z-index:997;background-color:#fff;-webkit-box-shadow:0 %?-1?% %?20?% %?-15?% #353535;box-shadow:0 %?-1?% %?20?% %?-15?% #353535}.u-bottom-fixed .bd-bottom[data-v-12367b86]{width:%?750?%;height:%?110?%;padding:%?14?% %?24?%}.u-bottom-fixed .u-submit-bar-height[data-v-12367b86]{height:%?82?%}.u-bottom-fixed.submit-bar .price-info[data-v-12367b86]{padding:0 0}.u-bottom-fixed.submit-bar .price-info > uni-view[data-v-12367b86]{margin:%?16?% 0}.u-bottom-fixed.submit-bar .submit-btn[data-v-12367b86]{width:%?240?%;text-align:center;border-radius:%?41?%}.u-bottom-fixed.submit-bar .submit-btn[data-v-12367b86]:active{-webkit-box-shadow:inset 0 0 %?500?% rgba(0,0,0,.15);box-shadow:inset 0 0 %?500?% rgba(0,0,0,.15)}.u-bottom-fixed.submit-bar .submit-btn.lock[data-v-12367b86]{-webkit-box-shadow:inset 0 0 %?500?% hsla(0,0%,100%,.35);box-shadow:inset 0 0 %?500?% hsla(0,0%,100%,.35)}.u-bottom-fixed.submit-bar .submit-btn.disabled[data-v-12367b86]{background:#999}.mr-12[data-v-12367b86]{margin-right:%?12?%}.font-bold[data-v-12367b86]{font-weight:700}.font-small[data-v-12367b86]{font-size:%?24?%}.font-gray[data-v-12367b86]{color:#999}.ellipsis-1[data-v-12367b86]{white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis;overflow:hidden}.ellipsis-2[data-v-12367b86]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;-o-text-overflow:ellipsis;text-overflow:ellipsis;overflow:hidden}.line[data-v-12367b86]{height:0;width:100%;background:#e2e2e2;border-bottom:%?1?% solid #e2e2e2}.theme-color[data-v-12367b86]{color:#fff}\n/* 商品页面 */.address[data-v-12367b86]{position:absolute;width:100%;min-height:100%;background-color:#f7f7f7}.some-good[data-v-12367b86]{background:#fff;padding:%?28?% %?24?% 0 %?24?%;overflow:hidden}.some-good .goods[data-v-12367b86]{height:%?156?%;margin-bottom:%?28?%}.some-good .goods .pic[data-v-12367b86]{width:%?156?%;height:%?156?%;margin-right:%?24?%}.some-good .goods .content[data-v-12367b86]{width:%?522?%;height:%?156?%}.some-good .goods .content .name[data-v-12367b86]{font-size:%?32?%;color:#353535;line-height:%?38?%}.some-good .goods .content .attr[data-v-12367b86]{color:#999;font-size:%?24?%;line-height:1;margin-top:%?18?%}.some-good .goods .content .number[data-v-12367b86]{color:#999;font-size:%?24?%;line-height:1;margin-top:%?18?%}.some-good .goods .address-disabled[data-v-12367b86]{background:#ffecec;color:#ff4544;position:absolute;bottom:0;left:0;right:%?22?%;padding:%?12?% 0;text-align:center;font-size:%?20?%;z-index:100}.leave-message[data-v-12367b86]{margin-top:%?24?%;height:%?100?%;line-height:%?100?%;padding:%?18?% %?24?%;background-color:#fff}.leave-message .textarea[data-v-12367b86]{font-size:%?32?%;width:100%;height:100%;line-height:%?64?%;padding:0}.leave-message .place[data-v-12367b86]{line-height:%?64?%}.freight[data-v-12367b86]{width:%?750?%;background-color:#fff;padding:0 %?24?%;margin-top:%?20?%;height:%?88?%}.freight uni-text[data-v-12367b86]{font-size:%?32?%}.freight .text[data-v-12367b86]{color:#353535}body.?%PAGE?%[data-v-12367b86]{background:#f7f7f7}',""])},f39e:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6");var a={name:"app-diy-form",components:{},props:{sign:{default:null},datePadding:{type:String,default:"0 24rpx"},title:{type:String,default:null},backgroundColor:{default:"#ffffff"},backgroundImage:{default:null},backgroundPosition:{default:"center"},backgroundWidth:{default:100},backgroundHeight:{default:100},backgroundRepeat:{default:"no-repeat"},marginTop:{default:0},marginBottom:{default:0},paddingTop:{default:0},paddingBottom:{default:0},list:{type:Array,default:[]},showRequiredIcon:{type:Boolean,default:!1},itemPaddingX:{default:24},itemMarginY:{default:0},itemHeight:{type:Number,default:88},showItemBorder:{default:!0},labelPosition:{default:"left"},labelColor:{default:"#666666"},labelTextAlign:{default:"right"},showInputBorder:{type:Boolean,default:!1},inputBackground:{default:"#ffffff"},inputBorderColor:{default:"#c0c4cc"},inputTextColor:{default:"#666666"},inputPlaceholderColor:{default:"#bbbbbb"},inputRadius:{default:0},showSubmit:{type:Boolean,default:!1},submitUrl:{type:String,default:null},submitBtnText:{default:"提交"},submitBtnHeight:{default:80},submitBtnPadding:{default:24},submitBtnMargin:{default:40},submitBtnRadius:{default:40},submitBtnBackground:{default:"#ff4544"},submitBtnBorderColor:{default:"#ff4544"},submitBtnTextColor:{default:"#ffffff"},showScrollBtn:{default:!1},labelFs28:{default:!1},marginColor:{default:"#ffffff"},selectBoxColor:{default:"#ff4544"}},data:function(){return{}},computed:{},created:function(){}};e.default=a},f5f7:function(t,e,i){"use strict";i.r(e);var a=i("9259"),o=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=o.a}}]);