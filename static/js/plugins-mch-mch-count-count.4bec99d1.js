(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plugins-mch-mch-count-count"],{"143e":function(t,a,i){a=t.exports=i("24fb")(!1),a.push([t.i,'@charset "UTF-8";.text-center[data-v-0af9b4a4]{text-align:center}.font-weight[data-v-0af9b4a4]{font-weight:700}.page-width[data-v-0af9b4a4]{width:100%}.goods-hover-class[data-v-0af9b4a4]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-0af9b4a4]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}\n/*全局文字大小*/\n/* 屏幕宽度*/uni-page-body[data-v-0af9b4a4]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-0af9b4a4]{width:100%}.u-hover-class[data-v-0af9b4a4]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-0af9b4a4]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.charts[data-v-0af9b4a4]{width:%?750?%;height:%?500?%;background-color:#fff}[data-v-0af9b4a4]::-webkit-scrollbar{width:0;height:0;color:rgba(0,0,0,0)}.month-list .month-item[data-v-0af9b4a4]{color:#bbb;width:%?150?%;text-align:center;height:%?120?%}.month-list .month-item .en[data-v-0af9b4a4]{font-size:%?24?%}.month-list .month-item .cn[data-v-0af9b4a4]{font-size:%?28?%}.month-list .month-item.active[data-v-0af9b4a4]{color:#e9ad33}.year-label[data-v-0af9b4a4]{font-size:%?20?%;color:#999;padding:%?24?% %?40?%}.year-line[data-v-0af9b4a4]{height:1px;width:100%;background:#e2e2e2}.count-num[data-v-0af9b4a4]{font-size:%?24?%;margin:0 %?24?%}.count-num .name[data-v-0af9b4a4]{color:#999;margin-bottom:%?16?%}.count-num .num[data-v-0af9b4a4]{color:#353535}.canvas-box[data-v-0af9b4a4]{margin-top:%?48?%;width:100%}body.?%PAGE?%[data-v-0af9b4a4]{background:#f7f7f7}',""])},"19bb":function(t,a,i){"use strict";var n;i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return n}));var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("app-layout",[t.year_list?i("v-uni-view",{staticStyle:{background:"#FFFFFF"}},[i("v-uni-scroll-view",{attrs:{"scroll-x":!0,"scroll-into-view":"mch_"+t.scrollId,"scroll-with-animation":!0}},[i("v-uni-view",{staticClass:"dir-left-nowrap month-list"},[i("v-uni-view",{staticClass:"box-grow-0 month-item",attrs:{id:"mch_0-2"}}),i("v-uni-view",{staticClass:"box-grow-0 month-item",attrs:{id:"mch_0-1"}}),t._l(t.year_list,(function(a,n){return t._l(a.month_list,(function(a,e){return i("app-form-id",{key:e+"_"+n+"_0",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.switchTaps(n,e)}}},[i("v-uni-view",{staticClass:"box-grow-0 dir-top-nowrap main-center month-item",class:a.active?"active":"",attrs:{id:"mch_"+n+e}},[i("v-uni-view",{staticClass:"en"},[t._v(t._s(a.name_en))]),i("v-uni-view",{staticClass:"cn"},[t._v(t._s(a.name_cn))])],1)],1)}))})),i("v-uni-view",{staticClass:"box-grow-0 month-item"}),i("v-uni-view",{staticClass:"box-grow-0 month-item"})],2)],1),i("v-uni-view",{staticClass:"dir-left-nowrap cross-center"},[i("v-uni-view",{staticClass:"year-line"}),i("v-uni-view",{staticClass:"year-label"},[t._v(t._s(t.year_str))]),i("v-uni-view",{staticClass:"year-line"})],1),i("v-uni-view",{staticClass:"main-between count-num"},[i("v-uni-view",{staticClass:"cross-center dir-top-nowrap"},[i("v-uni-view",{staticClass:"name"},[t._v("日均成交额")]),i("v-uni-view",{staticClass:"num"},[t._v(t._s(t.monthly_order_pay_price_average))])],1),i("v-uni-view",{staticClass:"cross-center dir-top-nowrap"},[i("v-uni-view",{staticClass:"name"},[t._v("当月成交额")]),i("v-uni-view",{staticClass:"num"},[t._v(t._s(t.monthly_order_pay_price_count))])],1),i("v-uni-view",{staticClass:"cross-center dir-top-nowrap"},[i("v-uni-view",{staticClass:"name"},[t._v("对比上月")]),i("v-uni-view",{staticClass:"num"},[t._v(t._s(t.contrast_prev_monthly))])],1)],1),i("v-uni-view",{staticClass:"main-center cross-center canvas-box"},[i("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":"canvasColumn",id:"canvasColumn"}})],1)],1):t._e()],1)},o=[]},"2a84":function(t,a,i){"use strict";i.r(a);var n=i("7402"),e=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(o);a["default"]=e.a},5381:function(t,a,i){"use strict";i.r(a);var n=i("19bb"),e=i("2a84");for(var o in e)["default"].indexOf(o)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(o);i("e0de");var r,s=i("f0c5"),c=Object(s["a"])(e["default"],n["b"],n["c"],!1,null,"0af9b4a4",null,!1,n["a"],r);a["default"]=c.exports},7402:function(t,a,i){"use strict";var n=i("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,i("ac6a"),i("6b54"),i("87b3");var e,o=n(i("a9cc")),r=null,s={name:"count",components:{},data:function(){return{contrast_prev_monthly:"",monthly_order_pay_price_average:"",monthly_order_pay_price_count:"",mch_id:0,options:[],year_str:"",month_str:"",year_list:null,scrollId:null,year_index:0,index:0,cWidth:"",cHeight:"",pixelRatio:1,serverData:""}},onLoad:function(t){this.$commonLoad.onload(t),this.mch_id=t.mch_id,this.getYear(),e=this,this.cWidth=uni.upx2px(750),this.cHeight=uni.upx2px(500)},methods:{showColumn:function(t,a){r=new o.default({$this:e,canvasId:t,type:"line",background:"#FFFFFF",animation:!0,dataPointShape:!1,pixelRatio:e.pixelRatio,categories:a.categories,series:a.series,width:e.cWidth*e.pixelRatio,height:e.cHeight*e.pixelRatio,legend:!0,xAxis:{disabled:!0,axisLine:!1,disableGrid:!0},yAxis:{format:function(t){return t}},dataLabel:!1,extra:{line:{type:"curve",width:"4rpx"}}})},changeData:function(){r.updateData({series:e.serverData.ColumnB.series,categories:e.serverData.ColumnB.categories})},getYear:function(){var t=this,a=this;a.$showLoading(),a.$request({url:a.$api.mch.year_list}).then((function(i){if(a.$hideLoading(),0===i.code){var n,e,o,r=i.data.year_list;r.map((function(t,a){t.month_list.map((function(t,i){t.active&&(n=a.toString()+i.toString(),e=r[a].year,o=r[a].month_list[i].month)}))}));var s=[r,n,e,o];a.year_list=s[0],a.scrollId=s[1],a.year_str=s[2],a.month_str=s[3],t.loadData()}}))},loadData:function(){var t=this;t.$request({url:t.$api.mch.statistic,data:{mch_id:t.mch_id,monthly:t.month_str,year:t.year_str}}).then((function(a){if(0===a.code){var i={categories:a.data.trend_arr,series:[{name:"日成交额",data:a.data.trend_arr,color:"#fa6855"}]};t.showColumn("canvasColumn",i);var n=[a.data.contrast_prev_monthly,a.data.monthly_order_pay_price_average,a.data.monthly_order_pay_price_count];t.contrast_prev_monthly=n[0],t.monthly_order_pay_price_average=n[1],t.monthly_order_pay_price_count=n[2]}}))},switchTaps:function(t,a){var i=this,n=i.year_list;n.forEach((function(i,n){i.active=n==t,i.month_list.forEach((function(i,e){i.active=n==t&&e==a}))}));var e=i.scrollId;e=a>=2||0==t?t.toString()+(a-2).toString():(t-1).toString()+(a+10).toString();var o=[t,n,a,e,n[t].year,n[t].month_list[a].month];i.index=o[0],i.year_list=o[1],i.year_index=o[2],i.scrollId=o[3],i.year_str=o[4],i.month_str=o[5],i.loadData()}}};a.default=s},8702:function(t,a,i){var n=i("143e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=i("4f06").default;e("3b7b5cab",n,!0,{sourceMap:!1,shadowMode:!1})},e0de:function(t,a,i){"use strict";var n=i("8702"),e=i.n(n);e.a}}]);