(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-app_admin-payment-code-payment-code"],{4082:function(t,a,e){a=t.exports=e("24fb")(!1),a.push([t.i,'@charset "UTF-8";.text-center[data-v-3a92f243]{text-align:center}.font-weight[data-v-3a92f243]{font-weight:700}.page-width[data-v-3a92f243]{width:100%}.goods-hover-class[data-v-3a92f243]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-3a92f243]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}\n/*全局文字大小*/\n/* 屏幕宽度*/uni-page-body[data-v-3a92f243]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-3a92f243]{width:100%}.u-hover-class[data-v-3a92f243]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-3a92f243]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.back-o[data-v-3a92f243]{background:#fb8a36;height:100vh;padding-top:%?32?%}.back-t[data-v-3a92f243]{width:100%;height:100%;padding-top:%?32?%}.code-box[data-v-3a92f243]{text-align:center;background:#fff;margin:0 auto;width:%?686?%;border-radius:%?16?%}.code-box.set[data-v-3a92f243]{padding:%?48?%;color:#353535}.set .receipt[data-v-3a92f243]{font-size:%?68?%}.code-box .btn[data-v-3a92f243]{color:#fff;height:%?88?%;background:#ff4544;font-size:%?32?%;margin-top:%?48?%;border-radius:%?44?%}.code-box uni-image[data-v-3a92f243]{width:%?360?%;height:%?360?%}.code-box .code-title[data-v-3a92f243]{color:#353535;font-size:%?36?%;margin-top:%?120?%;margin-bottom:%?64?%}.code-box .end[data-v-3a92f243]{color:#418bfb;font-size:%?32?%;margin-top:%?80?%;margin-bottom:%?100?%}.code-box .line[data-v-3a92f243]{height:%?32?%;background:#418bfb;width:1px;margin:0 %?60?%}.code-box .set-line[data-v-3a92f243]{width:100%;height:1px;background:#e2e2e2;margin-top:%?40?%}.code-box .price[data-v-3a92f243]{font-size:%?56?%;color:#353535;margin-bottom:%?40?%}.code-input[data-v-3a92f243]{font-size:%?68?%;margin-top:%?40?%}.code-input > uni-view[data-v-3a92f243]{padding-right:%?22?%}.code-input uni-input[data-v-3a92f243]{height:%?100?%;text-align:left}body.?%PAGE?%[data-v-3a92f243]{background:#f7f7f7}',""])},"67ec":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("app-layout",[t.edit?e("v-uni-view",{staticClass:"back-t"},[e("v-uni-view",{staticClass:"code-box set"},[e("v-uni-view",{staticStyle:{"text-align":"left"}},[t._v("收款金额")]),e("v-uni-view",{staticClass:"dir-left-nowrap cross-center code-input"},[e("v-uni-view",[t._v("￥")]),e("v-uni-input",{attrs:{type:"digit"},model:{value:t.tmp_price,callback:function(a){t.tmp_price=a},expression:"tmp_price"}})],1),e("v-uni-view",{staticClass:"set-line"}),e("v-uni-view",{staticClass:"btn main-center cross-center",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.submit.apply(void 0,arguments)}}},[t._v("确认")])],1)],1):e("v-uni-view",{staticClass:"back-o"},[e("v-uni-view",{staticClass:"code-box dir-top-nowrap main-center cross-center"},[e("v-uni-view",{staticClass:"box-grow-0 code-title"},[t._v("扫描二维码，向我付钱")]),t.price>0?e("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(t.price))]):t._e(),e("v-uni-image",{staticClass:"box-grow-0",attrs:{src:t.pic_url},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.qrcodeClick.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"dir-left-nowrap cross-center end"},[e("v-uni-view",{on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.savePrice.apply(void 0,arguments)}}},[t._v("设置金额")]),e("v-uni-view",{staticClass:"line"}),e("v-uni-view",{on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.saveQrcode.apply(void 0,arguments)}}},[t._v("保存图片")])],1)],1)],1)],1)},o=[]},"73ff":function(t,a,e){"use strict";e.r(a);var i=e("67ec"),n=e("cf8f");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("f6be");var c,r=e("f0c5"),d=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"3a92f243",null,!1,i["a"],c);a["default"]=d.exports},abc1:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"payment-code",components:{},data:function(){return{edit:!1,pic_url:"",save_loading:!1,price:"",tmp_price:"",is_clerk_enter:0}},onLoad:function(t){this.$commonLoad.onload(t),this.is_clerk_enter=t.is_clerk_enter?1:0,this.submit()},methods:{savePrice:function(){this.edit=!0},submit:function(){var t=this,a=this.tmp_price?parseFloat(this.tmp_price).toFixed(2):"";this.$showLoading({text:"生成中"}),this.$request({url:this.$api.scan_code_pay.qr_code,method:"POST",data:{price:a,is_clerk_enter:this.is_clerk_enter}}).then((function(e){if(t.$hideLoading(),0===e.code){var i=[e.data.qr_code.file_path,a,a,!1];t.pic_url=i[0],t.price=i[1],t.tmp_price=i[2],t.edit=i[3]}else uni.showToast({icon:"none",title:e.msg})})).catch((function(){t.$hideLoading()}))},qrcodeClick:function(){uni.previewImage({urls:[this.pic_url]})},saveQrcode:function(){var t=this;uni.showLoading({mask:!0,title:"图片保存中"}),t.$utils.batchSave(t.pic_url,"image").then((function(t){uni.showToast({title:"保存成功"})}))}}};a.default=i},cf8f:function(t,a,e){"use strict";e.r(a);var i=e("abc1"),n=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},f4e6:function(t,a,e){var i=e("4082");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("15f6f840",i,!0,{sourceMap:!1,shadowMode:!1})},f6be:function(t,a,e){"use strict";var i=e("f4e6"),n=e.n(i);n.a}}]);