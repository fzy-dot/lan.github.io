(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-express-detail-express-detail"],{1803:function(t,e,s){var i=s("a056");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=s("4f06").default;a("af79aa0e",i,!0,{sourceMap:!1,shadowMode:!1})},3614:function(t,e,s){"use strict";s.r(e);var i=s("f989"),a=s("59b3");for(var o in a)["default"].indexOf(o)<0&&function(t){s.d(e,t,(function(){return a[t]}))}(o);s("dcf1");var n,r=s("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"16b8f0cf",null,!1,i["a"],n);e["default"]=c.exports},"59b3":function(t,e,s){"use strict";s.r(e);var i=s("bdb2"),a=s.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){s.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},a056:function(t,e,s){e=t.exports=s("24fb")(!1),e.push([t.i,'@charset "UTF-8";.text-center[data-v-16b8f0cf]{text-align:center}.font-weight[data-v-16b8f0cf]{font-weight:700}.page-width[data-v-16b8f0cf]{width:100%}.goods-hover-class[data-v-16b8f0cf]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-16b8f0cf]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}\n/*全局文字大小*/\n/* 屏幕宽度*/uni-page-body[data-v-16b8f0cf]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-16b8f0cf]{width:100%}.u-hover-class[data-v-16b8f0cf]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-16b8f0cf]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.express-box[data-v-16b8f0cf]{height:100%;width:100%}.express-box .top-box[data-v-16b8f0cf]{padding:%?20?%;background-color:#fff}.express-box .label[data-v-16b8f0cf]{margin-right:%?10?%}.express-box .goods-pic[data-v-16b8f0cf]{width:%?130?%;height:%?130?%;margin-right:%?20?%}.logistics-box[data-v-16b8f0cf]{padding:%?20?% %?25?%;background-color:#fff;margin-top:%?25?%;font-size:%?22?%;color:#999}.logistics-box .item-box[data-v-16b8f0cf]{border-left:%?1?% solid #e2e2e2;padding-left:%?45?%;position:relative}.logistics-box .item[data-v-16b8f0cf]{margin-bottom:%?25?%;padding-bottom:%?25?%;border-bottom:%?1?% solid #e2e2e2}.logistics-box .item .sign[data-v-16b8f0cf]{width:%?16?%;height:%?16?%;position:absolute;left:%?-7?%}.logistics-box .item .sign-big[data-v-16b8f0cf]{width:%?32?%;height:%?32?%;position:absolute;left:%?-16?%}.sign-text[data-v-16b8f0cf]{color:#25ae5f}.empty-box[data-v-16b8f0cf]{font-size:%?28?%}.detail-btn[data-v-16b8f0cf]{border:%?1?% solid #bbb;border-radius:%?30?%;padding:%?10?% %?30?%}body.?%PAGE?%[data-v-16b8f0cf]{background:#f7f7f7}',""])},bdb2:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{expressDetail:null,order:null,express:"",express_no:"",cover_pic:"",customer_name:"",is_show:!1}},methods:{getExpressDetail:function(){var t=this;this.$showLoading(),this.$request({url:this.$api.order.express_detail,data:{express:this.express,customer_name:this.customer_name,express_no:this.express_no}}).then((function(e){t.$hideLoading(),t.is_show=!0,t.order=e.data.order,0===e.code?t.expressDetail=e.data.express:t.expressDetail={status_text:"",list:[]}})).catch((function(){t.$hideLoading()}))},copyText:function(){this.$utils.uniCopy({data:this.order.express_no,success:function(){uni.showToast({title:"复制成功",icon:"none"})}})}},onLoad:function(t){this.$commonLoad.onload(t),this.express=t.express,this.express_no=t.express_no,this.customer_name=t.customer_name,this.cover_pic=t.cover_pic,this.getExpressDetail()}};e.default=i},dcf1:function(t,e,s){"use strict";var i=s("1803"),a=s.n(i);a.a},f989:function(t,e,s){"use strict";var i;s.d(e,"b",(function(){return a})),s.d(e,"c",(function(){return o})),s.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("app-layout",[t.is_show?s("v-uni-view",{staticClass:"express-box"},[s("v-uni-view",{staticClass:"box-grow-1 top-box dir-left-wrap"},[s("v-uni-view",{staticClass:"box-grow-0 cross-center main-center"},[s("v-uni-image",{staticClass:"goods-pic",attrs:{mode:"aspectFill",src:t.cover_pic}})],1),s("v-uni-view",{staticClass:"dir-top-wrap box-grow-1"},[s("v-uni-view",{staticClass:"dir-left-nowrap"},[s("v-uni-text",{staticClass:"box-grow-0 label"},[t._v("物流状态:")]),s("v-uni-text",{staticClass:"box-grow-0 sign-text"},[t._v(t._s(t.expressDetail.status_text?t.expressDetail.status_text:"未知"))])],1),s("v-uni-view",{staticClass:"dir-left-nowrap"},[s("v-uni-text",{staticClass:"box-grow-0 label"},[t._v("快递公司:")]),s("v-uni-text",{staticClass:"box-grow-0"},[t._v(t._s(t.order.express))])],1),s("v-uni-view",{staticClass:"dir-left-nowrap cross-center"},[s("v-uni-text",{staticClass:"box-grow-0 label"},[t._v("快递单号:")]),s("v-uni-text",{staticClass:"box-grow-1"},[t._v(t._s(t.order.express_no))]),s("v-uni-view",{staticClass:"box-grow-0 detail-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copyText.apply(void 0,arguments)}}},[t._v("复制")])],1)],1)],1),s("v-uni-view",{staticClass:"logistics-box dir-top-wrap"},[t.expressDetail.list&&t.expressDetail.list.length?[s("v-uni-view",{staticClass:"item-box"},t._l(t.expressDetail.list,(function(e){return s("v-uni-view",{key:e.id,staticClass:"dir-top item",class:{"sign-text":0==t.index}},[0==t.index?s("v-uni-image",{staticClass:"sign-big",attrs:{src:"/static/image/icon/order/point-green.png"}}):s("v-uni-image",{staticClass:"sign",attrs:{src:"/static/image/icon/order/point-gray.png"}}),s("v-uni-view",[t._v(t._s(e.desc))]),s("v-uni-view",[t._v(t._s(e.datetime))])],1)})),1)]:s("v-uni-view",{staticClass:"main-center empty-box"},[s("v-uni-view",[t._v("通知物流揽收中")])],1)],2)],1):t._e()],1)},o=[]}}]);