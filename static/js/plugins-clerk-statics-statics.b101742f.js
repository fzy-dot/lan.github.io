(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plugins-clerk-statics-statics"],{"1f94":function(t,a,e){var i=e("b1a0");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("7ef52012",i,!0,{sourceMap:!1,shadowMode:!1})},"4d1c":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("c5f6");var i={name:"app-tab-nav",props:{background:String,setTop:{type:[Number,String]},padding:{default:45,type:[Number,String]},setHeight:Number,placeHeight:Number,fontSize:Number,theme:{type:Object,default:function(){return{color:"#ff4544"}}},border:{default:!0,type:Boolean},shadow:{default:!0,type:Boolean},activeItem:{type:[Number,String]},tabList:Array,tabColor:{default:"#353535",type:String},paddingBottom:{default:0,type:[Number,String]},opacity:{default:1,type:[Number,String]}},methods:{handleClick:function(t){this.$emit("click",t)}}};a.default=i},"56c7":function(t,a,e){"use strict";var i=e("dc4e"),o=e.n(i);o.a},"64ef":function(t,a,e){"use strict";e.r(a);var i=e("6774"),o=e("e25f");for(var n in o)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return o[t]}))}(n);e("ac8e1");var r,c=e("f0c5"),d=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"a22003ae",null,!1,i["a"],r);a["default"]=d.exports},6774:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return i}));var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("app-layout",[e("app-tab-nav",{attrs:{shadow:t.noBorder,tabList:t.tabList,background:"#f7f7f7",padding:"0",border:t.noBorder,activeItem:t.activeTab},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabStatus.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"total-item"},[e("v-uni-view",{staticClass:"total-num",staticStyle:{color:"#417afd"}},[t._v(t._s(t.total_order_num))]),e("v-uni-view",{staticClass:"total-title"},[t._v("核销订单数")]),e("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":"canvasFirst",id:"canvasFirst"},on:{touchstart:function(a){arguments[0]=a=t.$handleEvent(a),t.touchIt(a,"canvasFirst")}}})],1),e("v-uni-view",{staticClass:"total-item"},[e("v-uni-view",{staticClass:"total-num",staticStyle:{color:"#ff9000"}},[t._v(t._s(t.total_order_price))]),e("v-uni-view",{staticClass:"total-title"},[t._v("核销订单金额")]),e("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":"canvasSec",id:"canvasSec"},on:{touchstart:function(a){arguments[0]=a=t.$handleEvent(a),t.touchIt(a,"canvasSec")}}})],1),e("v-uni-view",{staticClass:"total-item"},[e("v-uni-view",{staticClass:"total-num",staticStyle:{color:"#41c6fe"}},[t._v(t._s(t.total_card))]),e("v-uni-view",{staticClass:"total-title"},[t._v("核销卡券次数")]),e("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":"canvasThird",id:"canvasThird"},on:{touchstart:function(a){arguments[0]=a=t.$handleEvent(a),t.touchIt(a,"canvasThird")}}})],1)],1)},n=[]},"7b5e":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return i}));var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.opacity,expression:"opacity"}]},[e("v-uni-view",{class:[t.shadow?"main-between app-nav shadow":"main-between app-nav"],style:[{"line-height":(t.setHeight?t.setHeight:90)+"rpx","font-size":(t.fontSize?t.fontSize:28)+"rpx",height:(t.setHeight?t.setHeight:90)+"rpx",top:t.setTop>0?t.setTop+"rpx":"0",backgroundColor:""+(t.background?t.background:"#fff"),opacity:""+t.opacity}]},t._l(t.tabList,(function(a){return e("v-uni-view",{key:a.id,staticClass:"box-grow-1 nav-item",style:[{borderBottom:(t.border?1:0)+"rpx solid #e2e2e2"}],attrs:{"data-id":a.id,"data-name":a.name},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleClick.apply(void 0,arguments)}}},[e("v-uni-text",{class:[a.id==t.activeItem?"active-text":""],style:[{color:""+(a.id==t.activeItem?t.theme.color:t.tabColor),"border-color":""+(a.id==t.activeItem?t.theme.color:""),height:(t.setHeight?t.setHeight-t.paddingBottom:90-t.paddingBottom)+"rpx",padding:"0 "+t.padding+"rpx"}]},[t._v(t._s(a.name))])],1)})),1),e("v-uni-view",{style:[{height:(t.placeHeight?t.placeHeight:90)+"rpx"}]})],1)},n=[]},"7fd0":function(t,a,e){"use strict";e.r(a);var i=e("7b5e"),o=e("86a7");for(var n in o)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return o[t]}))}(n);e("56c7");var r,c=e("f0c5"),d=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"1fc36d2d",null,!1,i["a"],r);a["default"]=d.exports},"84f9":function(t,a,e){"use strict";var i=e("4ea4");e("8e6e"),e("456d"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("ac6a"),e("7f7f");var o,n=i(e("53ca")),r=i(e("ade3")),c=i(e("7fd0")),d=i(e("a9cc")),s=e("2f62");function u(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,i)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?u(Object(e),!0).forEach((function(a){(0,r.default)(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}var f={},v={name:"about",components:{"app-tab-nav":c.default},data:function(){return{noBorder:!1,tabList:[{id:0,name:"累计"},{id:1,name:"今日"},{id:-1,name:"昨日"},{id:7,name:"7日"},{id:30,name:"30日"}],cWidth:"",cHeight:"",pixelRatio:1,card_list:[],order_num_list:[],order_price_list:[],activeTab:0,total_card:0,total_order_num:0,total_order_price:0}},computed:l({},(0,s.mapState)({mall:function(t){return t.mallConfig.mall}})),onLoad:function(){this.$commonLoad.onload(),o=this,this.cWidth=uni.upx2px(702),this.cHeight=uni.upx2px(340),this.activeTab=0,this.getList()},methods:{showColumn:function(t,a,e,i){f[t]=new d.default({$this:o,canvasId:t,type:"area",legend:{show:!1},fontSize:9,background:"#FFFFFF",colors:e,padding:i||[15,15,4,0],pixelRatio:o.pixelRatio,animation:!1,categories:a.categories,series:a.series,xAxis:{disableGrid:!0},yAxis:{gridType:"dash",data:{disabled:!0}},dataLabel:!1,dataPointShape:!1,width:o.cWidth*o.pixelRatio,height:o.cHeight*o.pixelRatio,extra:{area:{type:"curve",addLine:!0},tooltip:{bgColor:"#000000",bgOpacity:.7}}})},tabStatus:function(t){this.activeTab=t.currentTarget.dataset.id,this.getList()},touchIt:function(t,a){var e=f[a].getCurrentDataIndex(t),i="canvasFirst"==a?this.order_num_list:"canvasSec"==a?this.order_price_list:this.card_list;f[a].showToolTip(t,{format:function(t,a){return t.color="rgba(0,0,0,0)","object"===(0,n.default)(t.data)?i[e].time+" "+t.name+":"+t.data.value:i[e].time+" "+t.name+":"+t.data}})},getList:function(){var t=this;t.$request({url:t.$api.clerk.statistics,data:{key:t.activeTab}}).then((function(a){if(t.$hideLoading(),0==a.code){t.card_list=a.data.card_list,t.order_num_list=a.data.order_num_list,t.order_price_list=a.data.order_price_list,t.total_card=0,t.total_order_num=0,t.total_order_price=0,t.card_list.forEach((function(a){t.total_card=(+t.total_card+ +a.num).toFixed(2)})),t.order_num_list.forEach((function(a){t.total_order_num=(+t.total_order_num+ +a.num).toFixed(2)})),t.order_price_list.forEach((function(a){t.total_order_price=(+t.total_order_price+ +a.num).toFixed(2)}));var e={categories:[],series:[{name:"核销订单数",data:[]}]},i={categories:[],series:[{name:"核销订单金额",data:[]}]},n={categories:[],series:[{name:"核销卡券次数",data:[]}]},r=[15,15,4,-10];1!=t.activeTab&&-1!=t.activeTab&&7!=t.activeTab||(r=[15,15,4,0]),e=t.create(t.order_num_list,e),o.showColumn("canvasFirst",e,["#417afd"],r),i=t.create(a.data.order_price_list,i),o.showColumn("canvasSec",i,["#ff9000"]),n=t.create(a.data.card_list,n),o.showColumn("canvasThird",n,["#41c6fe"])}else uni.showToast({title:a.msg,icon:"none",duration:1e3})})).catch((function(a){t.$hideLoading()}))},create:function(t,a){var e,i=this;return t.forEach((function(o,n){if(e=t[n].time,1==i.activeTab||-1==i.activeTab)n%6==0?(e<10?e="0"+e+":00":e+=":00",a.categories.push(e)):a.categories.push("");else if(30==i.activeTab)n%5==0||n==t.length-1?a.categories.push(e):a.categories.push("");else if(0==i.activeTab&&t.length>7){var r=Math.ceil((t.length+1)/5);0==n||n==t.length-1||n%r==0&&n>r-1&&n<t.length-r+1?a.categories.push(e):a.categories.push("")}else a.categories.push(e);a.series[0].data.push(o.num)})),1!=i.activeTab&&-1!=i.activeTab||a.categories.push("24:00"),a}}};a.default=v},"86a7":function(t,a,e){"use strict";e.r(a);var i=e("4d1c"),o=e.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=o.a},ac8e1:function(t,a,e){"use strict";var i=e("1f94"),o=e.n(i);o.a},b1a0:function(t,a,e){a=t.exports=e("24fb")(!1),a.push([t.i,'@charset "UTF-8";.text-center[data-v-a22003ae]{text-align:center}.font-weight[data-v-a22003ae]{font-weight:700}.page-width[data-v-a22003ae]{width:100%}.goods-hover-class[data-v-a22003ae]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-a22003ae]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}\n/*全局文字大小*/\n/* 屏幕宽度*/uni-page-body[data-v-a22003ae]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-a22003ae]{width:100%}.u-hover-class[data-v-a22003ae]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-a22003ae]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.total-item[data-v-a22003ae]{width:%?702?%;margin:%?24?% %?24?% 0;border-radius:%?16?%;background-color:#fff;padding-top:%?54?%;text-align:center}.total-title[data-v-a22003ae]{color:#999;font-size:%?24?%}.total-num[data-v-a22003ae]{font-size:%?46?%}.charts[data-v-a22003ae]{width:100%;height:%?340?%;margin:%?85?% auto 0}body.?%PAGE?%[data-v-a22003ae]{background:#f7f7f7}',""])},dc4e:function(t,a,e){var i=e("f221");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("1d1ffe7b",i,!0,{sourceMap:!1,shadowMode:!1})},e25f:function(t,a,e){"use strict";e.r(a);var i=e("84f9"),o=e.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=o.a},f221:function(t,a,e){a=t.exports=e("24fb")(!1),a.push([t.i,'@charset "UTF-8";.text-center[data-v-1fc36d2d]{text-align:center}.font-weight[data-v-1fc36d2d]{font-weight:700}.page-width[data-v-1fc36d2d]{width:100%}.goods-hover-class[data-v-1fc36d2d]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-1fc36d2d]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}\n/*全局文字大小*/\n/* 屏幕宽度*/uni-page-body[data-v-1fc36d2d]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-1fc36d2d]{width:100%}.u-hover-class[data-v-1fc36d2d]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-1fc36d2d]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.app-nav[data-v-1fc36d2d]{color:#353535;width:100%;position:fixed;left:0;background-color:#fff;z-index:11}.app-nav .nav-item[data-v-1fc36d2d]{text-align:center}.app-nav .nav-item uni-text[data-v-1fc36d2d]{display:inline-block}.app-nav .active-text[data-v-1fc36d2d]{color:#ff4544;border-bottom:%?4?% solid #ff4544}.app-nav.shadow[data-v-1fc36d2d]{-webkit-box-shadow:0 %?2?% %?10?% rgba(0,0,0,.06);box-shadow:0 %?2?% %?10?% rgba(0,0,0,.06)}.blue-m-text[data-v-1fc36d2d]{color:#446dfd}body.?%PAGE?%[data-v-1fc36d2d]{background:#f7f7f7}',""])}}]);