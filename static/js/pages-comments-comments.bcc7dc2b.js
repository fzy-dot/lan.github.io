(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-comments-comments"],{"191b":function(t,e,o){"use strict";o.r(e);var n=o("9ecc"),i=o.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(a);e["default"]=i.a},2909:function(t,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return s}));var n=o("6b75");function i(t){if(Array.isArray(t))return Object(n["a"])(t)}function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var c=o("06c5");function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t){return i(t)||a(t)||Object(c["a"])(t)||r()}},"2d06":function(t,e,o){e=t.exports=o("24fb")(!1),e.push([t.i,'@charset "UTF-8";.text-center[data-v-5238293c]{text-align:center}.font-weight[data-v-5238293c]{font-weight:700}.page-width[data-v-5238293c]{width:100%}.goods-hover-class[data-v-5238293c]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-5238293c]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}\n/*全局文字大小*/\n/* 屏幕宽度*/uni-page-body[data-v-5238293c]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-5238293c]{width:100%}.u-hover-class[data-v-5238293c]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-5238293c]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.app-comments .c-attr-name[data-v-5238293c]{margin-top:%?15?%;color:#999;font-size:%?24?%}.app-comments .more[data-v-5238293c]{font-size:%?24?%;color:#999}.app-comments .block[data-v-5238293c]{width:100%;height:%?80?%;font-size:%?26?%;background-color:#fff;padding:0 %?24?%}.app-comments .block uni-image[data-v-5238293c]{width:%?12?%;height:%?22?%;display:block;margin-left:%?12?%}.app-comments .comment-sort[data-v-5238293c]{z-index:1500;width:100vw;padding:%?20?% %?24?% %?10?% %?20?%;color:#999;background-color:#f6f6f6;font-size:%?24?%;position:fixed;top:0;left:0}.app-comments .comment-sort .sort[data-v-5238293c]{overflow:hidden}.app-comments .comment-sort .sort .scroll-view[data-v-5238293c]{width:100%;height:%?50?%;margin-bottom:%?20?%;white-space:nowrap}.app-comments .comment-sort .sort .scroll-view .comment-item[data-v-5238293c]{display:inline-block;padding:%?9?% %?20?%;margin-right:%?20?%;border-radius:%?8?%}.app-comments .comment-sort .sort .category[data-v-5238293c]{width:100%}.app-comments .comment-sort .sort .category .box[data-v-5238293c]{-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;padding:%?9?% %?20?%;margin:0 %?20?% %?20?% 0;border-radius:%?8?%;background-color:#fff}.app-comments .comment-sort .tip[data-v-5238293c]{width:100%}.app-comments .comment-sort .spread-icon[data-v-5238293c]{width:%?18?%;height:%?12?%;margin-left:%?6?%}.app-comments .list[data-v-5238293c]{background-color:#f6f6f6;padding:%?20?% %?24?%}.app-comments .list .block[data-v-5238293c]{padding:0}.app-comments .list .comments[data-v-5238293c]{padding:%?20?%;width:100%;border-radius:%?16?%;word-break:break-all;background-color:#fff}.app-comments .list .comments .title[data-v-5238293c]{font-size:%?28?%;color:#999;margin-bottom:%?26?%}.app-comments .list .comments .title uni-image[data-v-5238293c]{width:%?56?%;height:%?56?%;display:block;margin-right:%?26?%;border-radius:%?28?%}.app-comments .list .comments.bt[data-v-5238293c]{border-top:%?1?% solid #e2e2e2}.app-comments .list .comments.bb[data-v-5238293c]{margin-bottom:%?20?%}.app-comments .list .comments.bb[data-v-5238293c]:last-child{border:none}.app-comments .list .comments .content[data-v-5238293c]{word-break:break-all;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.app-comments .list .comments .pic-list uni-image[data-v-5238293c]{width:%?158?%;height:%?158?%;border-radius:%?16?%;display:inline-block;margin:%?20?% %?20?% 0 0}.app-comments .list .comments .replay[data-v-5238293c]{width:100%;background-color:#f7f7f7;padding:%?28?%;border-radius:%?16?%;font-size:%?28?%;color:#666}.u-text[data-v-5238293c]{color:#fff}body.?%PAGE?%[data-v-5238293c]{background:#f7f7f7}',""])},"30a4":function(t,e,o){"use strict";o.r(e);var n=o("fee0"),i=o("a92c");for(var a in i)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(a);o("81f1");var c,r=o("f0c5"),s=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"5238293c",null,!1,n["a"],c);e["default"]=s.exports},"81f1":function(t,e,o){"use strict";var n=o("ab90"),i=o.n(n);i.a},"9ecc":function(t,e,o){"use strict";var n=o("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(o("30a4")),a={name:"comments",components:{"app-comments":i.default},data:function(){return{goodsId:null,onReachBottom:0}},onLoad:function(t){this.$commonLoad.onload(t),this.goodsId=t.goods_id},onReachBottom:function(){this.onReachBottom=Math.random()}};e.default=a},a92c:function(t,e,o){"use strict";o.r(e);var n=o("bade"),i=o.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(a);e["default"]=i.a},ab90:function(t,e,o){var n=o("2d06");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("4f06").default;i("4d94c4ce",n,!0,{sourceMap:!1,shadowMode:!1})},bade:function(t,e,o){"use strict";var n=o("4ea4");o("8e6e"),o("ac6a"),o("456d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(o("2909")),a=n(o("ade3"));o("c5f6");var c=o("2f62");function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){(0,a.default)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var d=1,l=!1,u=!1,m={name:"app-comments",props:{goodsId:Number,url:{type:String,default:function(){return""}},showType:{type:String,default:function(){return"detail"}},reachBottom:Number},watch:{goodsId:{handler:function(){this.loadData()}},reachBottom:{handler:function(){u||this.loadData()}}},computed:s(s({},(0,c.mapState)({mall:function(t){return t.mallConfig.mall}})),(0,c.mapGetters)("mallConfig",{getTheme:"getTheme"})),methods:{loadData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";0!=this.mall.setting.is_comment&&(l||(l=!0,"detail"!==this.showType&&uni.showLoading({title:"加载中"}),this.$request({url:this.url?this.url:this.$api.goods.comments_list,data:{goods_id:this.goodsId,page:d,status:this.status,comment_category_id:this.comment_category_id}}).then((function(o){if(l=!1,uni.hideLoading(),0===o.code){t.commentCount=o.data.comment_count,e||(t.categorys=o.data.categorys),1===d&&(t.list=[]);var n=o.data.comments;n.length>0?("detail"===t.showType&&(n=n.splice(0,2)),t.list=[].concat((0,i.default)(t.list),(0,i.default)(n)),d++):u=!0,t.$nextTick((function(){var e;e=uni.createSelectorQuery(),e.select("#commentSort").boundingClientRect((function(e){e.height>130&&(t.maxHeight="105px",t.tip="展开"),t.$nextTick((function(){var e;e=uni.createSelectorQuery(),e.select(".comment-sort").boundingClientRect((function(e){t.height="".concat(e.height,"px")})).exec()}))})).exec()}))}})).catch((function(){l=!1,uni.hideLoading()}))))},goto:function(){uni.navigateTo({url:"/pages/comments/comments?goods_id=".concat(this.goodsId)})},clickStatus:function(t){this.status=t,this.comment_category_id="",this.tip="",this.categorys=[],d=1,u=!1,this.loadData()},clickCategory:function(t){this.comment_category_id=t,d=1,u=!1,this.loadData("category")},imgPreview:function(t,e){this.list&&this.list[t]&&this.list[t].pic_url&&this.list[t].pic_url.length>0&&uni.previewImage({current:e,urls:this.list[t].pic_url})},handleSpread:function(){var t=this;"展开"===this.tip?this.maxHeight="":this.maxHeight="105px",this.tip="展开"===this.tip?"收起":"展开",this.$nextTick((function(){var e;e=uni.createSelectorQuery(),e.select(".comment-sort").boundingClientRect((function(e){t.height="".concat(e.height,"px")})).exec()}))}},data:function(){return{commentCount:[],categorys:[],list:[],status:0,maxHeight:"",tip:"",height:"",comment_category_id:""}},created:function(){d=1,l=!1,u=!1},mounted:function(){this.goodsId&&this.loadData()}};e.default=m},edfe:function(t,e,o){"use strict";var n;o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("app-layout",[t.goodsId?o("v-uni-view",[o("app-comments",{attrs:{"show-type":"all","goods-id":t.goodsId,"reach-bottom":t.onReachBottom}})],1):t._e()],1)},a=[]},f179:function(t,e,o){"use strict";o.r(e);var n=o("edfe"),i=o("191b");for(var a in i)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(a);var c,r=o("f0c5"),s=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],c);e["default"]=s.exports},fee0:function(t,e,o){"use strict";var n;o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return 1==t.mall.setting.is_comment?o("v-uni-view",{staticClass:"app-comments"},["detail"!==t.showType?o("v-uni-view",{staticClass:"comment-sort dir-left-wrap"},[o("v-uni-view",{staticClass:"sort",style:{"max-height":t.maxHeight},attrs:{id:"commentSort"}},[o("v-uni-scroll-view",{staticClass:"scroll-view dir-left-nowrap",attrs:{"scroll-x":!0}},t._l(t.commentCount,(function(e,n){return o("v-uni-view",{key:n,staticClass:"comment-item main-center cross-center",style:{color:t.status===e.index?t.getTheme.color:"#333333"},on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.clickStatus(e.index)}}},[o("span",[t._v(t._s(e.name))]),o("span",{style:{color:t.status===e.index?t.getTheme.color:"#999999"}},[t._v("("+t._s(e.count)+")")])])})),1),o("v-uni-view",{staticClass:"category"},t._l(t.categorys,(function(e,n){return o("v-uni-view",{key:n,staticClass:"box main-center cross-center",style:{border:t.comment_category_id===e.index?"1rpx solid "+t.getTheme.color:"none","background-color":t.comment_category_id===e.index?t.getTheme.background_o:"#FFFFFF",color:t.comment_category_id===e.index?t.getTheme.color:"#333333"},on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.clickCategory(e.index)}}},[t._v(t._s(e.name)+" "+t._s(e.count))])})),1)],1),t.tip?o("v-uni-view",{staticClass:"main-center cross-center tip",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSpread.apply(void 0,arguments)}}},[t._v(t._s(t.tip)),"展开"===t.tip?o("v-uni-image",{staticClass:"spread-icon",attrs:{src:"/static/image/icon/icon-down.png"}}):o("v-uni-image",{staticClass:"spread-icon",attrs:{src:"/static/image/icon/icon-up.png"}})],1):t._e()],1):t._e(),t.list.length>0?o("v-uni-view",{staticClass:"list",style:{"margin-top":t.height}},["detail"===t.showType?o("v-uni-view",{staticClass:"dir-left-nowrap block cross-center"},[o("v-uni-view",{staticClass:"box-grow-1"},[t._v("评价")]),o("v-uni-view",{staticClass:"box-grow-0 more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goto.apply(void 0,arguments)}}},[t._v("查看更多")]),o("v-uni-image",{staticClass:"box-grow-0",attrs:{src:"/static/image/icon/arrow-right.png"}})],1):t._e(),t._l(t.list,(function(e,n){return o("v-uni-view",{key:n,staticClass:"comments",class:"detail"===t.showType?"bt":"bb"},[o("v-uni-view",{staticClass:"title dir-left-nowrap cross-center"},[o("v-uni-image",{staticClass:"box-grow-0",attrs:{src:e.avatar}}),o("v-uni-view",{staticClass:"box-grow-1"},[t._v(t._s(e.nickname))]),o("v-uni-view",{staticClass:"more box-grow-0"},[t._v(t._s(e.time))])],1),o("v-uni-view",{class:"detail"===t.showType?"content":""},[t._v(t._s(e.content))]),o("v-uni-view",{staticClass:"dir-left-wrap pic-list"},t._l(e.pic_url,(function(e,i){return o("v-uni-image",{key:i,attrs:{src:e},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.imgPreview(n,i)}}})})),1),o("v-uni-view",{staticClass:"c-attr-name"},[t._v(t._s(e.attr_name))]),"detail"!==t.showType&&e.reply_content?o("v-uni-view",{staticClass:"replay"},[o("v-uni-view",[o("v-uni-text",{style:{color:t.getTheme.color}},[t._v("商家：")]),t._v(t._s(e.reply_content))],1)],1):t._e()],1)}))],2):o("v-uni-view",{staticClass:"block cross-center",style:{"margin-top":t.height}},[t._v("暂无评价")])],1):t._e()},a=[]}}]);