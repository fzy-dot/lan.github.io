(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plugins-bargain-goods-goods~plugins-community-goods-goods~plugins-exchange-goods-goods~plugins-lotte~af8ac5b4"],{"105a":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"floating",style:{bottom:t.getBoolEmpty.XBoolean?"280rpx":"230rpx"}},t._l(t.suspension_icon,(function(e,i){return a("v-uni-view",{key:i},["购物车"==e.title?a("app-jump-button",{attrs:{url:"/pages/cart/cart"}},[a("v-uni-view",{staticClass:"btn"},[a("v-uni-image",{attrs:{src:e.icon}}),t.cart_nums>0?a("v-uni-view",[t._v(t._s(t.cart_nums>99?"99+":t.cart_nums))]):t._e()],1)],1):"分享"==e.title?[t.isShare&&t.is_share_btn?a("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.shareClick.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:e.icon}})],1):t._e()]:"置顶"==e.title?[t.isToTop?a("app-jump-button",[a("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.backTop.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:e.icon}})],1)],1):t._e()]:a("app-jump-button",{attrs:{url:e.link.new_link_url,open_type:e.link.open_type}},[a("v-uni-view",{staticClass:"btn"},[a("v-uni-image",{attrs:{src:e.icon}})],1)],1)],2)})),1),a("bd-quick-share",{attrs:{"goods-id":t.goodsId,"is-video-number":t.goods.is_video_number,"extra-quick-share":t.extraQuickShare,"app-share-pic":t.appSharePic,"app-share-title":t.appShareTitle},on:{quickShare:function(e){arguments[0]=e=t.$handleEvent(e),t.quickShare.apply(void 0,arguments)}},model:{value:t.quickShareShow,callback:function(e){t.quickShareShow=e},expression:"quickShareShow"}}),a("app-share-qr-code",{attrs:{url:t.newShareUrl,goods:t.goods,"poster-config":t.posterConfig,"poster-generate":t.posterGenerate,"has-poster-nav":t.hasPosterNav,"app-share-pic":t.appSharePic,"app-share-title":t.appShareTitle},on:{share:function(e){arguments[0]=e=t.$handleEvent(e),t.testShare.apply(void 0,arguments)}},model:{value:t.shareShow,callback:function(e){t.shareShow=e},expression:"shareShow"}})],1)},n=[]},"161e":function(t,e,a){"use strict";a.r(e);var i=a("4d87"),o=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},"22a5":function(t,e,a){"use strict";var i=a("aaa4"),o=a.n(i);o.a},"2f80":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"app-goods-quick-share"},[t.friendModel?a("v-uni-cover-view",{staticClass:"friend-box"},[a("v-uni-cover-view",{staticClass:"info main-center cross-center dir-top-nowrap"},[a("v-uni-cover-view",{staticClass:"dir-left-nowrap cross-center"},[a("v-uni-cover-image",{staticClass:"icon",attrs:{src:"/static/image/icon/friend-v.png"}}),a("v-uni-cover-view",{staticClass:"text"},[t._v("文本已复制到剪贴板")])],1),a("v-uni-cover-view",{staticClass:"dir-left-nowrap cross-center",staticStyle:{"margin-top":"30rpx"}},[a("v-uni-cover-image",{staticClass:"icon",attrs:{src:"/static/image/icon/friend-v.png"}}),a("v-uni-cover-view",{staticClass:"text"},[t._v("图片已保存到相册")])],1)],1)],1):t._e(),a("v-uni-text",{staticClass:"opacity-hide",attrs:{id:"opacity-hide"}},[t._v("第一行\n        第二行\n        第三行\n        第四行\n        第五行")]),t.value?a("v-uni-view",{staticClass:"box"},[t.posterShow?a("v-uni-view",[a("app-goods-preview-poster",{attrs:{url:t.posterUrl},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}},model:{value:t.posterShow,callback:function(e){t.posterShow=e},expression:"posterShow"}})],1):a("v-uni-view",{staticClass:"quick-center"},[a("v-uni-view",{staticClass:"head"},[a("v-uni-view",{staticClass:"t-omit name"},[t._v(t._s(t.extraQuickShare.mall_name))]),a("v-uni-view",{staticClass:"time"},[t._v(t._s(t.extraQuickShare.format_time))]),a("v-uni-view",{staticClass:"close",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[a("v-uni-icon",{attrs:{type:!0}})],1)],1),a("v-uni-scroll-view",{staticClass:"scrollbar",attrs:{"scroll-y":!0}},[a("v-uni-view",{staticClass:"goods-text"},[a("v-uni-text",{staticClass:"opacity-hide",attrs:{space:"nbsp",id:"all_hide_text_0"},domProps:{textContent:t._s(t.extraQuickShare.share_text)}}),a("v-uni-text",{staticClass:"share-text",class:{limit:t.is_limit},attrs:{space:"nbsp"},domProps:{textContent:t._s(t.extraQuickShare.share_text)}}),t.is_all_btn?a("v-uni-view",{staticClass:"all",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.showText.apply(void 0,arguments)}}},[t.is_limit?[t._v("全文")]:[t._v("收起")]],2):t._e()],1),a("v-uni-view",{staticClass:"goods-image dir-left-wrap"},t._l(t.extraQuickShare.share_pic,(function(e,i){return a("v-uni-view",{key:i},[a("v-uni-image",{attrs:{src:e.pic_url,"lazy-load":!0},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.previewImage(i)}}})],1)})),1)],1),a("v-uni-view",{staticClass:"goods-set cross-center dir-left-nowrap"},[a("v-uni-view",{staticClass:"box-grow-0",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copyText.apply(void 0,arguments)}}},[t._v("复制文本")]),a("v-uni-view",{staticClass:"box-grow-0 margin",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saveImage(!1)}}},[t._v("保存图片")]),a("v-uni-view",{staticClass:"box-grow-0",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[t._v("生成海报")]),a("v-uni-view",{staticClass:"line"}),a("v-uni-view",{staticClass:"box-grow-0"},[t._v("分享到")]),a("v-uni-image",{staticClass:"friend box-grow-0",style:{backgroundImage:"url("+t.appImg.friend+")"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.batchCopy.apply(void 0,arguments)}}}),a("v-uni-view",{staticStyle:{width:"50rpx"}},[a("app-jump-button",{attrs:{open_type:"share"}},[a("v-uni-image",{staticClass:"card",style:{backgroundImage:"url("+t.appImg.wechat+")"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.shareCard.apply(void 0,arguments)}}})],1)],1),t.isVideoNumber?a("v-uni-image",{staticClass:"video-number box-grow-0",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.videoNumber.apply(void 0,arguments)}}}):t._e()],1)],1)],1):t._e(),a("app-share-video-number",{attrs:{"goods-id":t.goodsId,"is-show":t.isShowVideoNumber},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.closeVideoNumber.apply(void 0,arguments)}}})],1)},n=[]},"33fe":function(t,e,a){"use strict";a.r(e);var i=a("7e30"),o=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},"4d87":function(t,e,a){"use strict";var i=a("4ea4");a("8e6e"),a("ac6a"),a("456d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(a("ade3"));a("c5f6");var n=a("2f62"),r=i(a("519b")),s=i(a("409e"));function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){(0,o.default)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var l={name:"app-floating-btn",components:{bdQuickShare:r.default,appShareQrCode:s.default},props:{isCart:{type:Boolean,default:!1},isShare:{type:Boolean,default:!0},isToTop:{type:Boolean,default:!1},extraQuickShare:Object,goodsId:[String,Number],goods:Object,appSharePic:String,appShareTitle:String,shareUrl:String,posterConfig:String,posterGenerate:String,hasPosterNav:{type:Boolean,default:function(){return!1}}},data:function(){return{shareShow:!1,quickShareShow:!1}},watch:{},computed:d(d(d({},(0,n.mapState)("user",{cart_nums:function(t){return t.cart_nums}})),(0,n.mapState)({is_share_btn:function(t){return t.mallConfig.mall.setting.is_share_btn},suspension_icon:function(t){return t.mallConfig.mall.setting.suspension_icon}})),(0,n.mapGetters)("iPhoneX",{getBoolEmpty:"getBoolEmpty"})),methods:{backTop:function(){uni.pageScrollTo({scrollTop:0,duration:300})},shareClick:function(){this.$user.isLogin()?this.extraQuickShare?this.quickShareShow=!0:this.shareShow=!0:this.$user.getInfo().then((function(){}))},testShare:function(t){this.$emit("share",t)},quickShare:function(t){this.$emit("quickShare",t)},newShareUrl:function(){return this.shareUrl?this.shareUrl:this.goodsId?this.$api.poster.goods+"&goods_id="+this.goodsId:""}}};e.default=l},5103:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAM1BMVEUAAAB/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f399PI1hAAAAEHRSTlMAB+vnamVu7wXUc9xczspRPl/H7wAAALhJREFUKM910kkWgyAQANFmEhBU7n/aKJoUAuntf4UySI7JKZmMsilmiaV4i6OLL2WTVE6np/UnRHG+0L/borMoi/d6Lapqr3E03J/Rt6MabX1U3FiFGrT1U01VfoVkkfBoaPUXrWunrH+B9+isR/sJq6m6yHTUw2v4r+yfac5K47ONLwYf1IlU13h3zsriozaOenS8X7RzlNvHnUJfv8r7tLSjO0kz/b7fKBsrj/0uxxYz+urjfnwAXFAPGlgL/NYAAAAASUVORK5CYII="},"519b":function(t,e,a){"use strict";a.r(e);var i=a("2f80"),o=a("97e4");for(var n in o)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("691f");var r,s=a("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"619af04d",null,!1,i["a"],r);e["default"]=c.exports},6028:function(t,e,a){e=t.exports=a("24fb")(!1),e.push([t.i,'@charset "UTF-8";.text-center[data-v-69c1b1ea]{text-align:center}.font-weight[data-v-69c1b1ea]{font-weight:700}.page-width[data-v-69c1b1ea]{width:100%}.goods-hover-class[data-v-69c1b1ea]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-69c1b1ea]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}\n/*全局文字大小*/\n/* 屏幕宽度*/uni-page-body[data-v-69c1b1ea]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-69c1b1ea]{width:100%}.u-hover-class[data-v-69c1b1ea]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-69c1b1ea]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.floating[data-v-69c1b1ea]{z-index:1600;position:fixed;right:%?50?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:%?80?%}.floating .btn[data-v-69c1b1ea]{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-top:%?20?%}.floating .btn uni-image[data-v-69c1b1ea]{width:%?65?%;height:%?65?%}.floating .btn uni-view[data-v-69c1b1ea]{position:absolute;top:0;left:%?40?%;display:inline-block;height:%?26?%;padding:0 %?7?%;border-radius:%?13?%;line-height:%?26?%;font-size:%?20?%;color:#fff;background-color:#ff4544}body.?%PAGE?%[data-v-69c1b1ea]{background:#f7f7f7}',""])},"691f":function(t,e,a){"use strict";var i=a("e75b"),o=a.n(i);o.a},7873:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAhFBMVEUAAAAPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNoPlNo3PZk8AAAAK3RSTlMA8vmcCJUC1MuBtq+QRgXpxKiijG9WT8/BvLRnE+DehXVdPjQmHhAvuHwYo1f0agAAAWhJREFUSMftlN2OgjAQRmlBUVBRAf8FRMTd/d7//XZKgQUSO9xtTDwXOG16OpNpq/XhLXlkh0C4djzeOEtovGKkMUGLfI42xDzeRWsKgstI46gXRhRuxxleM1gAYI0tgK925EhIzrDJOPV2ECNyHLoTGadM+gaxYZRFvyriIgGTsVPd7U/5QGBSBDCjn+LezswBnM1JJJ3gEgg7hsf016/XzauJlCLXMrHRRTgegGfdjJnDKbcquAKbqkC4q9c1HWP6VCuJOyBW6rtfmc6cblJMX70mAXJKc3Ze56gbI5uDXAMxexMPasMbBf6UAhdYcvdqPW3lkv4rJGRpMNTWs1a/Tkimuo4G40fqHDUqCmGuKwJEaxDaOFkGfCAbPgAq1EQyKCLkb0kA5IMce8vMHtj9jVJlUA7u7fq9F0VVMeSgNB3DrdvHtAyRWvewdQ6eUgBIwm9bNu+Dp3DR4GmDx0kDobhG1od/5hcD4y3szUOdOAAAAABJRU5ErkJggg=="},"7dc7":function(t,e,a){"use strict";a.r(e);var i=a("c63f"),o=a("33fe");for(var n in o)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("b5c0");var r,s=a("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"435978fd",null,!1,i["a"],r);e["default"]=c.exports},"7e30":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"app-goods-preview-poster",props:{value:{type:Boolean,default:function(){return!1}},url:{type:String,default:function(){return""}},disabled:{type:Boolean,default:function(){return!1}}},created:function(){this.showHidden=this.value},watch:{value:function(t){this.showHidden=t},showHidden:function(t){t&&this.getShareImg()}},data:function(){return{showHidden:!1,loading:!0,shareImage:""}},methods:{showHiddenClick:function(){this.$emit("close",!1)},savePicture:function(){this.loading||this.$utils.batchSave(this.shareImage,"image").then((function(){uni.showToast({title:"保存成功"})}))},getShareImg:function(){var t=this;this.url&&(this.loading=!0,this.$request({url:this.url}).then((function(e){0===e.code?(t.shareImage=e.data.pic_url,t.loading=!1):uni.showModal({content:e.msg,showCancel:!1})})))},preview:function(){uni.previewImage({urls:[this.shareImage]})}}};e.default=i},"97e4":function(t,e,a){"use strict";a.r(e);var i=a("bcca"),o=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},aaa4:function(t,e,a){var i=a("6028");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("2078b06c",i,!0,{sourceMap:!1,shadowMode:!1})},b11b:function(t,e,a){var i=a("b965");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("19f7338c",i,!0,{sourceMap:!1,shadowMode:!1})},b5c0:function(t,e,a){"use strict";var i=a("b11b"),o=a.n(i);o.a},b965:function(t,e,a){e=t.exports=a("24fb")(!1);var i=a("b605"),o=i(a("e6f7"));e.push([t.i,'@charset "UTF-8";.text-center[data-v-435978fd]{text-align:center}.font-weight[data-v-435978fd]{font-weight:700}.page-width[data-v-435978fd]{width:100%}.goods-hover-class[data-v-435978fd]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-435978fd]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}\n/*全局文字大小*/\n/* 屏幕宽度*/uni-page-body[data-v-435978fd]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-435978fd]{width:100%}.u-hover-class[data-v-435978fd]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-435978fd]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.app-goods-preview-poster .app-center[data-v-435978fd]{width:calc(100% - %?80?%);padding-top:%?100?%;padding-bottom:%?77?%;border-radius:%?8?%;background-color:#fff;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.app-goods-preview-poster .app-center .loading[data-v-435978fd]{width:%?220?%;height:%?220?%}.app-goods-preview-poster .app-center .app-close[data-v-435978fd]{width:%?30?%;height:%?30?%;background-size:cover;background-repeat:no-repeat;background-image:url('+o+");position:absolute;top:%?28?%;right:%?24?%}.app-goods-preview-poster .app-center .app-image-iframe[data-v-435978fd]{width:%?440?%;height:%?783?%;position:relative;-webkit-box-shadow:%?2?% %?2?% %?10?% #d9d9d9;box-shadow:%?2?% %?2?% %?10?% #d9d9d9}.app-goods-preview-poster .app-center .app-image-iframe .text[data-v-435978fd]{text-align:center;color:#888}.app-goods-preview-poster .app-center .app-button[data-v-435978fd]{width:%?500?%;height:%?80?%;margin-top:%?38?%;margin-bottom:%?24?%}.app-goods-preview-poster .app-center .app-text[data-v-435978fd]{font-size:%?24?%;color:#999}body.?%PAGE?%[data-v-435978fd]{background:#f7f7f7}",""])},bcca:function(t,e,a){"use strict";var i=a("4ea4");a("8e6e"),a("ac6a"),a("456d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(a("ade3"));a("c5f6");var n=i(a("7dc7")),r=i(a("29ab")),s=a("2f62");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){(0,o.default)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var l={name:"bd-quick-share",components:{appGoodsPreviewPoster:n.default,appShareVideoNumber:r.default},props:{value:{type:Boolean,default:function(){return!1}},goodsId:{type:[Number,String]},extraQuickShare:{type:Object,required:!1},isVideoNumber:{type:Boolean,default:function(){return!1}},appSharePic:String,appShareTitle:String},computed:d({},(0,s.mapState)({appImg:function(t){return t.mallConfig.__wxapp_img.quick_share}})),data:function(){return{friendModel:!1,posterUrl:"",is_all_btn:!1,is_limit:!0,shareData:null,posterShow:!1,isShowVideoNumber:!1}},watch:{value:function(t,e){var a=this;t&&setTimeout((function(){var t=a,e=uni.createSelectorQuery().in(t);e.select("#opacity-hide").boundingClientRect((function(e){var a=uni.createSelectorQuery().in(t);a.select("#all_hide_text_0").boundingClientRect((function(a){t.is_all_btn=a.height+1>=e.height})).exec()})).exec()}))}},methods:{showText:function(){this.is_limit=!this.is_limit},close:function(){this.$emit("input",!1),this.posterShow=!1},open:function(){var t,e=this.$api.quick_share.poster_config+"&goods_id="+this.goodsId,a=this.$api.quick_share.poster_generate+"&goods_id="+this.goodsId;t="/pages/poster/goods?poster_config=".concat(btoa(e),"&poster_generate=").concat(btoa(a)),uni.navigateTo({url:t})},batchCopy:function(){this.copyText(),this.saveImage(!0)},copyText:function(){this.$utils.uniCopy({data:this.extraQuickShare.share_text,success:function(){uni.showToast({title:"复制成功"})}})},saveImage:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this;if(!e.extraQuickShare.share_pic)return"";uni.showLoading({title:"图片保存中"}),e.$request({url:e.$api.quick_share.poster_list,data:{goods_id:e.goodsId}}).then((function(a){if(0===a.code){var i=e.extraQuickShare.share_pic.map((function(t){return t.pic_url}));i.splice(0,1,a.data.pic_url),e.$utils.batchSave(i,"image").then((function(a){var i=function(){uni.showToast({title:"保存成功"})},o=function(){e.friendModel=!0,setTimeout((function(){e.friendModel=!1}),1500)};t?o():i()}))}})).catch((function(t){uni.hideLoading()}))},shareCard:function(){var t=this.appShareTitle?this.appShareTitle:this.extraQuickShare.share_text,e="";this.extraQuickShare.share_pic[0].pic_url&&(e=this.extraQuickShare.share_pic[0].pic_url),this.appSharePic&&(e=this.appSharePic),this.$emit("quickShare",{title:t,imageUrl:e,path:0===this.goodsId?"/pages/index/index":"/pages/goods/goods",params:0===this.goodsId?{}:{id:this.goodsId}})},previewImage:function(t){if(!this.extraQuickShare.share_pic)return"";var e=this.extraQuickShare.share_pic.map((function(t){return t.pic_url}));uni.previewImage({urls:e,current:t})},closeVideoNumber:function(){this.isShowVideoNumber=!1},videoNumber:function(){this.isShowVideoNumber=!0}}};e.default=l},c63f:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"app-goods-preview-poster"},[a("v-uni-view",{staticClass:"app-center dir-top-wrap main-center cross-center"},[a("v-uni-view",{staticClass:"app-close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showHiddenClick.apply(void 0,arguments)}}}),t.loading?a("v-uni-view",{staticClass:"app-image-iframe main-center dir-top-nowrap cross-center"},[a("v-uni-image",{staticClass:"loading",attrs:{src:"/static/image/loading.gif"}}),a("v-uni-view",{staticClass:"text"},[t._v("海报生成中")])],1):t._e(),t.loading?t._e():a("v-uni-image",{staticClass:"app-image-iframe",attrs:{"show-menu-by-longpress":!0,mode:"aspectFit",src:t.shareImage},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.preview.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"app-button"},[a("app-button",{attrs:{width:"500",disabled:t.disabled,height:"80",background:t.disabled?"#cdcdcd":"#ff4544",fontSize:"32rpx",color:"white",roundSize:"40rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.savePicture.apply(void 0,arguments)}}},[t._v("保存图片")])],1)],1)],1)},n=[]},ca69:function(t,e,a){e=t.exports=a("24fb")(!1);var i=a("b605"),o=i(a("e6f7")),n=i(a("5103")),r=i(a("7873"));e.push([t.i,'@charset "UTF-8";.text-center[data-v-619af04d]{text-align:center}.font-weight[data-v-619af04d]{font-weight:700}.page-width[data-v-619af04d]{width:100%}.goods-hover-class[data-v-619af04d]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-619af04d]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}\n/*全局文字大小*/\n/* 屏幕宽度*/uni-page-body[data-v-619af04d]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-619af04d]{width:100%}.u-hover-class[data-v-619af04d]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-619af04d]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.friend-box[data-v-619af04d]{position:fixed;top:%?563?%;width:100%;left:0;z-index:1701}.friend-box .info > uni-cover-view[data-v-619af04d]:first-child{margin-bottom:%?30?%}.friend-box .info[data-v-619af04d]{width:%?413?%;height:%?209?%;color:#fff;font-size:%?28?%;border-radius:%?16?%;margin:0 auto;background:rgba(0,0,0,.8)}.friend-box .info uni-cover-view[data-v-619af04d]{background:rgba(0,0,0,0)}.friend-box .info .text[data-v-619af04d]{padding-left:%?13?%}.friend-box .info .icon[data-v-619af04d]{height:%?28?%;width:%?28?%}.opacity-hide[data-v-619af04d]{position:fixed;top:0;z-index:-10;opacity:0;word-break:break-all;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;white-space:normal!important;-webkit-line-clamp:5;pointer-events:none}.share-text[data-v-619af04d]{word-break:break-all;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;white-space:normal!important}.share-text.limit[data-v-619af04d]{-webkit-line-clamp:2}.app-goods-quick-share .box[data-v-619af04d]{position:fixed;z-index:1700;left:0;bottom:0;width:%?750?%;opacity:1;visibility:visible;height:100%;background-color:hsla(0,0%,60%,.5)}.app-goods-quick-share .quick-center[data-v-619af04d]{background:#fff;border-top-left-radius:%?16?%;border-top-right-radius:%?16?%;position:absolute;width:100%;height:auto;left:0;bottom:0;z-index:111}.app-center[data-v-619af04d]{width:calc(100% - %?80?%);padding-top:%?100?%;padding-bottom:%?77?%;border-radius:%?8?%;background-color:#fff;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.app-center .app-close[data-v-619af04d]{width:%?30?%;height:%?30?%;background-size:cover;background-repeat:no-repeat;background-image:url('+o+");position:absolute;top:%?28?%;right:%?24?%}.app-center .app-image-iframe[data-v-619af04d]{width:%?440?%;height:%?783?%;position:relative;-webkit-box-shadow:%?2?% %?2?% %?10?% #d9d9d9;box-shadow:%?2?% %?2?% %?10?% #d9d9d9}.app-center .app-image-iframe .text[data-v-619af04d]{text-align:center;color:#888}.app-center .app-button[data-v-619af04d]{width:%?500?%;height:%?80?%;margin-top:%?38?%;margin-bottom:%?24?%}.app-center .app-text[data-v-619af04d]{font-size:%?24?%;color:#999}.head[data-v-619af04d]{padding:0 %?24?%}.head .name[data-v-619af04d]{padding-top:%?30?%;color:#212121;font-size:%?34?%;max-width:80%}.head .time[data-v-619af04d]{font-size:%?24?%;color:#a0a0a0;padding-top:%?10?%;padding-bottom:%?20?%}.head .close[data-v-619af04d]{position:absolute;top:%?12?%;right:%?12?%;padding:%?12?%;z-index:111}.head .close uni-icon[data-v-619af04d]{background-image:url("+n+");background-repeat:no-repeat;background-size:100% 100%;height:%?30?%;width:%?30?%}.scrollbar[data-v-619af04d]{max-height:%?876?%}.goods-text[data-v-619af04d]{padding:0 %?24?%;font-size:%?32?%;color:#212121}.goods-text .share-text[data-v-619af04d]{word-break:break-all;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;white-space:normal!important}.goods-text .share-text.limit[data-v-619af04d]{-webkit-line-clamp:4}.goods-text .all[data-v-619af04d]{padding-top:%?10?%;color:#5b6a91}.goods-image[data-v-619af04d]{padding:%?10?% %?16?% %?30?% %?16?%}.goods-image uni-view[data-v-619af04d]{height:%?227?%;width:%?227?%;margin:%?6?%}.goods-image uni-image[data-v-619af04d]{height:100%;width:100%;display:block}.goods-set[data-v-619af04d]{color:#a0a0a0;font-size:%?28?%;border-top:%?1?% solid #e2e2e2;padding:%?20?% %?24?% %?53?%}.goods-set .margin[data-v-619af04d]{margin:0 auto}.goods-set .line[data-v-619af04d]{height:%?50?%;width:1px;margin:0 %?26?%;background:#dcdfe6}.goods-set uni-image[data-v-619af04d]{background-repeat:no-repeat;background-size:100% 100%;height:%?50?%;width:%?50?%}.goods-set .friend[data-v-619af04d]{margin-right:%?15?%;margin-left:%?20?%}.goods-set .video-number[data-v-619af04d]{margin-left:%?20?%;background-image:url("+r+")}body.?%PAGE?%[data-v-619af04d]{background:#f7f7f7}",""])},d816d:function(t,e,a){"use strict";a.r(e);var i=a("105a"),o=a("161e");for(var n in o)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("22a5");var r,s=a("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"69c1b1ea",null,!1,i["a"],r);e["default"]=c.exports},db8d:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAWCAMAAADD5o0oAAAARVBMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZkBVNYgAAAAFnRSTlMAgtiokR0V5s+9dmdhUklA8LW0nZx9Nlin2AAAAE9JREFUGNNlz0cOwDAIRFHXOInTy9z/qF7yJVjxJARMuGKwyqKKChT1Qasy1PVAmxZo1zyZDiXoVKqmquaAMS7gan+06+ajiPC6cC52+60f0acDStr+zywAAAAASUVORK5CYII="},e6f7:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAV1BMVEUAAAD////f39/n5+fU1NTx8fHX19ft7e3////Y2Nje3t7w8PD////Nzc3////////s7Oz////x8fH////u7u7MzMzx8fH////MzMzR0dHa2tr9/f3j4+Pgp5ThAAAAGHRSTlMAXp2eoJWijEakfZA6909BfL+aVt7Ney9JKnM1AAAA1ElEQVQ4y62USw6DMAxESYFCoXz7c6D3P2erUNmVHt7hlUWeZqTMkOzICc0y3vyze1oaEcnDPlOISNpEPCpc5DuqpBR05LHtp0Sdwi4jz8yopEUvqYbMoUynrPULqXBWxqGUqfT+QMGLlOm0Vz0FpV49GKPWn9dAxKhIL1Lq5VH5hsTZdDjrBi0TTpAXcmTupKgTF4+yvLpyQtrwal/sBDuGtOHV1kibPUx3iN7Dy+9qoV6kHC86Wp+dro5/f/Dce81Ju3WelELvGLuxd16eGGN24HwAWGcfgGkUetEAAAAASUVORK5CYII="},e75b:function(t,e,a){var i=a("ca69");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("27688def",i,!0,{sourceMap:!1,shadowMode:!1})}}]);