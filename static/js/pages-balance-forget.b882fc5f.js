(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-balance-forget"],{3339:function(t,e,a){"use strict";var n=a("4ea4");a("8e6e"),a("ac6a"),a("456d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("7f7f");var i=n(a("ade3")),r=a("2f62");function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){(0,i.default)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var f={name:"forget",data:function(){return{detail:null}},computed:d({},(0,r.mapState)({mall:function(t){return t.mallConfig.mall}})),onLoad:function(){this.detail=this.mall.setting.current_customer_service},methods:{saveImg:function(){this.$utils.batchSave(this.detail.qrcode_url,"image").then((function(){uni.showToast({title:"保存成功"})}))},saveName:function(){this.$utils.uniCopy({data:this.detail.name,success:function(){uni.showToast({icon:"none",title:"微信客服复制成功"})}})}}};e.default=f},3861:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-layout",[n("v-uni-view",{staticClass:"bd-forget"},[n("v-uni-view",{staticClass:"bd-image"},[n("v-uni-image",{staticClass:"bd-img",attrs:{src:a("92e8")}}),n("v-uni-view",{staticClass:"bd-text"},[t._v("请联系平台客服修改")])],1),n("v-uni-view",{staticClass:"bd-wechat"},[n("v-uni-view",{staticClass:"bd-border"},[n("v-uni-view",{staticClass:"border-title"},[t._v("客服微信")]),n("v-uni-image",{staticClass:"bd-img-wechat",attrs:{src:t.detail.qrcode_url}}),t.detail.name?n("v-uni-view",{staticClass:"bd-name"},[t._v("微信号："+t._s(t.detail.name))]):t._e(),n("v-uni-view",{staticClass:"bd-btns main-center cross-center"},[n("v-uni-view",{staticClass:"bd-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saveImg.apply(void 0,arguments)}}},[t._v("保存客服二维码图片")]),t.detail.name?n("v-uni-view",{staticClass:"bd-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saveName.apply(void 0,arguments)}}},[t._v("复制客服微信号")]):t._e()],1)],1)],1)],1)],1)},r=[]},"79f0":function(t,e,a){e=t.exports=a("24fb")(!1),e.push([t.i,'@charset "UTF-8";.text-center[data-v-f4e66df4]{text-align:center}.font-weight[data-v-f4e66df4]{font-weight:700}.page-width[data-v-f4e66df4]{width:100%}.goods-hover-class[data-v-f4e66df4]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-f4e66df4]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}\n/*全局文字大小*/\n/* 屏幕宽度*/uni-page-body[data-v-f4e66df4]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-f4e66df4]{width:100%}.u-hover-class[data-v-f4e66df4]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-f4e66df4]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.bd-image[data-v-f4e66df4]{width:%?750?%;height:%?460?%;background:#fff}.bd-img[data-v-f4e66df4]{width:%?335?%;height:%?200?%;margin:%?100?% %?207.5?% 0 %?207.5?%}.bd-wechat[data-v-f4e66df4]{padding:%?70?% %?40?%;width:%?750?%}.bd-text[data-v-f4e66df4]{font-size:%?35?%;font-weight:700;color:#333;text-align:center;margin-top:%?50?%}.bd-border[data-v-f4e66df4]{border:%?1?% dashed #999;background:#fff;border-radius:%?15?%;position:relative;height:%?650?%}.border-title[data-v-f4e66df4]{height:%?80?%;line-height:%?80?%;text-align:center;width:%?240?%;color:#353535;font-size:%?35?%;border:%?1?% dashed #999;background:#fff;border-radius:%?15?%;position:absolute;top:0;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);left:50%}.bd-img-wechat[data-v-f4e66df4]{width:%?360?%;height:%?360?%;margin:%?90?% %?155?% %?25?% %?155?%}.bd-name[data-v-f4e66df4]{font-size:%?26?%;color:#999;text-align:center}.bd-btns[data-v-f4e66df4]{padding:%?24?% 0}.bd-btn[data-v-f4e66df4]{width:%?264?%;height:%?64?%;border:%?1?% solid #ff4544;border-radius:%?32?%;color:#ff4544;font-size:%?24?%;line-height:%?64?%;text-align:center;margin:0 %?40?%}body.?%PAGE?%[data-v-f4e66df4]{background:#f7f7f7}',""])},"92e8":function(t,e,a){t.exports=a.p+"static/img/forget.3c6cb220.png"},"995b":function(t,e,a){var n=a("79f0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("6294c288",n,!0,{sourceMap:!1,shadowMode:!1})},b843:function(t,e,a){"use strict";a.r(e);var n=a("3861"),i=a("c4a4");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("e400");var o,d=a("f0c5"),f=Object(d["a"])(i["default"],n["b"],n["c"],!1,null,"f4e66df4",null,!1,n["a"],o);e["default"]=f.exports},c4a4:function(t,e,a){"use strict";a.r(e);var n=a("3339"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},e400:function(t,e,a){"use strict";var n=a("995b"),i=a.n(n);i.a}}]);