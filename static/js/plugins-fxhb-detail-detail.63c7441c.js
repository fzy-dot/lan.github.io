(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plugins-fxhb-detail-detail"],{"0e37":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAMAAABpA6zvAAAAnFBMVEUAAAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAD/wAA8NrzLAAAAM3RSTlMAM7Fy8KaX9qFmCOLYycK7jFQT693Uz62Ed1pJRD8hAp2HfG1fJrCBUU07OTcqDraQTh655VjKAAABRklEQVQ4y43U15KCMBhA4T8rVaq9966rW877v9sC6hABh/1uMoHDkOQiUnb9jufyDyeAS33XtAG8RW3YJlMfygeAJfUWTqnb/WZDaz17XSVM9PmnB04yRsBSNA4Y2vRmAKylQepU2M0hn09JBTIgNc5f9ElN8wfd++5mpFb6j50t2jInPtBvi7gegD++ZQsPoafUGjBVM1nHMQSMx1crMIDQWvaASCXGXcDoeUDHxpQHg8OoSyYYqbthSMofujbXZ7ikr5RrmWbcUrlpYzVK5gMCeZrDRr3xA638BAaE70KHnuTO0KruzgauaALM6nCI0dTDLfasMvSJRdfsEFd1LuzkxZBuVRixl1dzGJW7I0ylwMQvh1/0pWgG42J3sXGlJCAqhhad/Gz0EyqGHrGULTpEm4ZmY2lno2tQYlbfEYOPgr12Wf0B9/sxhh3hgOgAAAAASUVORK5CYII="},"1e62":function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"app-layout"},[e("app-layout",[e("v-uni-view",{staticClass:"detail-bg"},[e("v-uni-view",{staticClass:"fxhb-bg",style:{"background-image":"url("+t.appImg.bg+")"}},[e("v-uni-view",{staticClass:"fxhb-right"},[e("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.rules.apply(void 0,arguments)}}},[t._v("活动规则")]),e("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.homes.apply(void 0,arguments)}}},[t._v("返回首页")])],1)],1),e("v-uni-view",{staticClass:"fxhb-box"},[0===t.status&&1==t.is_join?e("v-uni-view",{staticClass:"detail-info"},[e("v-uni-view",{staticClass:"user-list dir-left-wrap main-center"},[t._l(t.list,(function(t,i){return e("v-uni-view",{key:"k-"+i,staticClass:"user-item"},[e("v-uni-image",{attrs:{src:t.avatar,"load-lazy":!0}})],1)})),t._l(t.user_num_list,(function(i,a){return e("v-uni-view",{key:a,staticClass:"user-item none"},[e("v-uni-image",{attrs:{src:t.appImg.fxhb_none,"load-lazy":!0}})],1)}))],2),e("v-uni-view",{staticClass:"detail-info-text"},[t._v("还差"+t._s(t.user_num)+"人即可瓜分"+t._s(t.coupon_total_money)+"元红包,快邀好友来拆")]),e("v-uni-view",{staticClass:"detail-time-text"},[t._v(t._s(t.time_str)+"后结束")]),e("v-uni-view",{staticClass:"main-center"},[e("app-jump-button",{attrs:{open_type:"share"}},[e("app-button",{attrs:{color:"#FFFFFF",height:"88",width:"560",background:"#ff4544",round:!0},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hShareAppMessage.apply(void 0,arguments)}}},[t._v("邀请好友一起拆")])],1)],1)],1):t._e(),2===t.status?e("v-uni-view",{staticClass:"detail-info"},[e("v-uni-view",{staticClass:"detail-info-text cross-center dir-top-nowrap"},[e("v-uni-view",[t._v("超过规定时间，该红包不能拆了")]),e("v-uni-icon",{staticClass:"icon-detail-time",attrs:{type:!0}})],1),e("v-uni-view",{staticClass:"main-center"},[e("app-button",{attrs:{height:"88",width:"560",background:"#ff4544",color:"#FFFFFF","font-size":"32",round:!0},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.openNew.apply(void 0,arguments)}}},[t._v("拆一个新红包")])],1)],1):t._e(),1===t.status&&0==t.is_join?e("v-uni-view",{staticClass:"detail-info"},[e("v-uni-view",{staticClass:"user-list dir-left-wrap main-center"},[t._l(t.list,(function(t,i){return[e("v-uni-view",{key:i+"_0",staticClass:"user-item"},[e("v-uni-image",{attrs:{src:t.avatar,"load-lazy":!0}})],1)]}))],2),e("v-uni-view",{staticClass:"detail-info-text"},[t._v("很遗憾，该红包已被瓜分完了")]),e("v-uni-view",{staticClass:"main-center detail-error"},[e("app-button",{attrs:{height:"88",width:"560",color:"#FFFFFF",background:"#ff4544",round:!0},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.openNew.apply(void 0,arguments)}}},[t._v("拆一个新红包")])],1)],1):t._e(),1===t.status&&1==t.is_join?e("v-uni-view",{staticClass:"detail-info"},[e("v-uni-view",{staticClass:"detail-info-text"},[t._v("恭喜您，已成功瓜分红包")]),e("v-uni-view",{staticClass:"dir-left-nowrap cross-center coupon"},[e("v-uni-view",{staticClass:"box-grow-1"},[e("v-uni-view",{staticClass:"coupon-title"},[t._v("满减券")]),e("v-uni-view",{staticClass:"coupon-desc"},[t._v("满"+t._s(t.min_price)+"可用")])],1),e("v-uni-view",{staticClass:"box-grow-0 dir-left-nowrap cross-bottom"},[e("v-uni-view",{staticClass:"coupon-unit cross-bottom"},[t._v("￥")]),e("v-uni-view",{staticClass:"coupon-money"},[t._v(t._s(t.user_price))])],1)],1),e("v-uni-view",{staticClass:"main-center"},[e("app-button",{attrs:{"font-size":"32",background:"#ff4544",height:"88",width:"560",color:"#FFFFFF",round:!0},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.openNew.apply(void 0,arguments)}}},[t._v("拆一个新红包")])],1),e("v-uni-view",{staticClass:"main-center coupon-set"},[e("app-button",{attrs:{"font-size":"32",background:"#ffb82f",height:"88",width:"560",color:"#FFFFFF",round:!0},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goods.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"main-center cross-center"},[e("v-uni-view",{staticStyle:{"margin-right":"2px"}},[t._v("立即使用")]),e("v-uni-icon",{staticClass:"icon-right",attrs:{type:!0}})],1)],1)],1)],1):t._e(),1===t.status?e("v-uni-view",{staticClass:"detail-info award-list"},[e("v-uni-view",{staticClass:"dir-left dir-left-nowrap main-center cross-center"},[e("v-uni-view",{staticClass:"box-grow-0 list-line"}),e("v-uni-view",{staticClass:"box-grow-0 list-text"},[t._v("看看大家手气")]),e("v-uni-view",{staticClass:"box-grow-0 list-line"})],1),t._l(t.list,(function(i,a){return e("v-uni-view",{key:a,staticClass:"dir-left-nowrap cross-center list"},[e("v-uni-view",{staticClass:"box-grow-0"},[e("v-uni-image",{staticClass:"user-avatar",attrs:{src:i.avatar,"load-lazy":!0}})],1),e("v-uni-view",{staticClass:"box-grow-1"},[t._v(t._s(i.nickname))]),e("v-uni-view",{staticClass:"box-grow-0 dir-top-nowrap main-right"},[e("v-uni-view",{staticClass:"main-right"},[t._v(t._s(i.get_price)+"元")]),i.is_best?e("v-uni-view",{staticClass:"dir-left main-center best"},[e("v-uni-icon",{staticClass:"user-pond",attrs:{type:!0}}),e("v-uni-view",{staticClass:"t-extra-small"},[t._v("手气最佳")])],1):t._e()],1)],1)}))],2):t._e(),t.goods_list&&t.goods_list.length?e("v-uni-view",{staticClass:"more-goods"},[e("v-uni-view",{staticClass:"tt-goods dir-left-nowrap cross-center main-center"},[e("v-uni-view",{staticClass:"line"}),e("v-uni-view",{staticClass:"dir-left-nowrap cross-center"},[e("v-uni-icon",{staticClass:"icon-love",attrs:{type:!0}}),e("v-uni-view",[t._v("商品推荐")])],1),e("v-uni-view",{staticClass:"line"})],1),e("u-ordinary-list",{attrs:{isUnderLinePrice:1==t.isListUnderlinePrice,isShowAttr:!0,list:t.goods_list,theme:t.getTheme,"list-style":2}})],1):t._e(),t.show_share_model&&t.user_num?e("v-uni-view",{staticClass:"act-modal"},[e("v-uni-view",{staticClass:"act-modal-bg"}),e("v-uni-view",{staticClass:"act-modal-pic cross-center main-center"},[e("v-uni-view",{staticClass:"modal-box",style:{"background-image":"url("+t.appImg.share_modal_bg+")"}},[e("v-uni-view",{staticClass:"modal-close",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.closeShareModal.apply(void 0,arguments)}}},[e("v-uni-icon",{staticClass:"icon-close",attrs:{type:!0}})],1),e("v-uni-view",{staticClass:"modal-text dir-left-nowrap main-center cross-bottom"},[e("v-uni-view",[t._v("还差")]),e("v-uni-view",{staticClass:"bold-num"},[t._v(t._s(t.user_num))]),e("v-uni-view",[t._v("个人即可拆红包")])],1),e("v-uni-view",{staticClass:"dir-left-nowrap main-center cross-bottom"},[e("v-uni-view",[t._v("一起瓜分")]),e("v-uni-view",{staticClass:"bold-money"},[t._v(t._s(t.coupon_total_money))]),e("v-uni-view",[t._v("元！")])],1),e("v-uni-view",{staticClass:"main-center btn"},[e("app-jump-button",{attrs:{open_type:"share"}},[e("app-button",{attrs:{theme:t.getTheme,height:"80",width:"440",color:"#FFFFFF","font-size":"28",background:"#ff4544",round:!0},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hShareAppMessage.apply(void 0,arguments)}}},[t._v("邀请好友一起拆")])],1)],1)],1)],1)],1):t._e(),t.is_new?e("v-uni-view",{staticClass:"hongbao dir-left main-center"},[e("v-uni-view",{staticClass:"hongbao-content",style:{"background-image":"url("+t.appImg.hongbao_bg+")"}},[e("v-uni-view",{staticClass:"hongbao-desc"},[e("v-uni-view",[t._v(t._s(t.config.count_price)+"元红包已包好")]),e("v-uni-view",[t._v("快拆开和小伙伴分红包")])],1),e("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.open.apply(void 0,arguments)}}},[e("v-uni-icon",{staticClass:"hongbao-btn",attrs:{type:!0}})],1)],1)],1):t._e()],1)],1)],1)],1)},o=[]},"47c2":function(t,i,e){var a=e("dac8");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("03c09a02",a,!0,{sourceMap:!1,shadowMode:!1})},"67c4":function(t,i,e){"use strict";var a=e("47c2"),n=e.n(a);n.a},7317:function(t,i,e){t.exports=e.p+"static/img/open_hongbao_btn.6f4c358c.png"},"771c":function(t,i,e){t.exports=e.p+"static/img/cry.85ab8fca.png"},b634:function(t,i,e){"use strict";e.r(i);var a=e("cad2"),n=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},bf97:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAkFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+WABnwAAAAL3RSTlMA+/LuHxoEbBAIwK2HeXX30qiWkIo3Kybm4dm6tZuSgn5oRTEWFMp/cGNeVU1BFzfX1ycAAADjSURBVCjPhc5ZcsIwEATQHsuW8Yp3s4Qdsid9/9tFCYjK8AHvS9WtmhncFe3qNIsjIPlcpctN7/MXnu36y2Mxwa+UIs1rGwhJycptJeQIIKPEFoB9E0n/vg5CJojIDc72hd8p7FBwCqAvQ/zTufCZOZBzGqszGWDGDySsEnV/4oqKJawYKEcatJwDcXBSxTsFA7kHrMqtsAYCcgLtiRIB3645qnxFKeGErgn1/8vto5qWUXL/PgQU3zSUFlej8dNqSuFTv+cEYEnZQjkYisWa0uHGYLho/F4lNLzO177mszUe+wEbhhUgqlEN2gAAAABJRU5ErkJggg=="},cad2:function(t,i,e){"use strict";var a=e("4ea4");e("8e6e"),e("ac6a"),e("456d"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("96cf");var n=a(e("1da1")),o=a(e("ade3")),s=e("2f62"),r=a(e("24ba"));function c(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),e.push.apply(e,a)}return e}function u(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?c(Object(e),!0).forEach((function(i){(0,o.default)(t,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}))}return t}var d={name:"detail",components:{uOrdinaryList:r.default},computed:u(u({},(0,s.mapState)({appImg:function(t){return t.mallConfig.plugin.fxhb.app_image},isListUnderlinePrice:function(t){return t.mallConfig.mall.setting.is_list_underline_price}})),(0,s.mapGetters)("mallConfig",{getTheme:"getTheme"})),data:function(){var t;return{interval_time:t,user_activity_id:0,config:null,goods_list:[],show_share_model:!1,time_str:"00:00:00",is_new:!1,coupon_total_money:0,is_join:0,is_my_hongbao:!1,list:null,min_price:0,reset_time:null,status:-1,totalUser:0,user_num:0,user_num_list:[],user_price:0,again_open:!0,page_url:"",template_message:[]}},onLoad:function(t){this.$commonLoad.onload(t),this.user_activity_id=t.user_activity_id?t.user_activity_id:"",this.loadConfig()},onUnload:function(){clearInterval(this.intervalTime)},methods:{hShareAppMessage:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.$shareAppMessage({title:this.config.share_title,path:"/plugins/fxhb/detail/detail",params:{user_activity_id:this.user_activity_id},imageUrl:this.config.share_pic_url},t)},loadConfig:function(){var t=this;uni.showLoading({title:"加载中"}),t.$request({url:t.$api.fxhb.index,data:{user_activity_id:t.user_activity_id}}).then((function(i){uni.hideLoading(),0===i.code?(t.config=i.data.config,t.template_message=i.data.template_message,i.data.user_activity_id?(t.user_activity_id=i.data.user_activity_id,t.loadData()):t.user_activity_id?t.subscribe():t.openNew()):(uni.showToast({icon:"none",title:i.msg}),setTimeout((function(){uni.redirectTo({url:"/pages/index/index"})}),2e3))})).catch((function(){uni.hideLoading()}))},openNew:function(){var t=[-1,!0,[]];this.status=t[0],this.is_new=t[1],this.goods_list=t[2]},open:function(){this.again_open&&(this.user_activity_id=0,this.subscribe(),this.again_open=!1)},rules:function(){uni.navigateTo({url:"/pages/rules/index?url=".concat(encodeURIComponent(this.$api.fxhb.index),"&keys=").concat(JSON.stringify(["config","remark"]))})},homes:function(){uni.navigateTo({url:"/pages/index/index"})},goods:function(){uni.redirectTo({url:this.page_url})},subscribe:function(){this.detailSubmit()},detailSubmit:function(){var t=this,i=this;uni.showLoading({title:"抢红包中",mask:!0}),this.$request({url:this.$api.fxhb.join,method:"post",data:{user_activity_id:this.user_activity_id}}).then((function(e){uni.hideLoading(),0===e.code?t.result(e.data.queueId,e.data.token):(uni.showToast({icon:"none",title:e.msg}),setTimeout((function(){i.openNew()}),2e3))})).catch((function(){uni.hideLoading()}))},loadData:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(){var i,e,a,n,o,s,r,c,u,d,l,f,v;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return uni.showLoading({title:"加载中",mask:!0}),t.next=3,this.$request({url:this.$api.fxhb.detail,data:{user_activity_id:this.user_activity_id}});case 3:i=t.sent,uni.hideLoading(),0===i.code?(e=i.data,a=e.coupon_total_money,n=e.is_join,o=e.is_my_hongbao,s=e.list,r=e.min_price,c=e.page_url,u=e.reset_time,d=e.status,l=e.totalUser,f=e.user_num,v=e.user_price,this.coupon_total_money=a,this.is_join=n,this.is_my_hongbao=o,this.list=s,this.min_price=r,this.page_url=c,this.reset_time=u,this.totalUser=l,this.status=d,this.user_num=f,this.user_price=v,this.user_num_list=new Array(this.user_num),this.setTimeStart(),this.getRecommend(),this.again_open=!0):(uni.showToast({icon:"none",title:i.msg}),setTimeout((function(){uni.redirectTo({url:"/pages/index/index"})}),2e3));case 6:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}(),setTimeStart:function(){var t=this;clearInterval(this.interval_time);var i=function(){var i=0,e=0,a=0,n=t.reset_time;n--,n>0&&(i=Math.floor(n/3600),e=Math.floor(n/60)-60*i,a=Math.floor(n)-60*i*60-60*e);var o=[n,{hour:i,minute:e,second:a}];t.reset_time=o[0],t.time_list=o[1],t.time_str=(i<10?"0"+i:i)+":"+(e<10?"0"+e:e)+":"+(a<10?"0"+a:a),n<=0&&clearInterval(t.intervalTime)};i(),this.interval_time=setInterval((function(){i()}),1e3)},result:function(t,i){var e=this;uni.showLoading({title:"加载中",mask:!0}),this.$request({url:this.$api.fxhb.join_result,data:{queueId:t,token:i}}).then((function(a){0===a.code?a.data.retry&&1==a.data.retry?setTimeout((function(){e.result(t,i)}),1e3):(e.user_activity_id=a.data.user_activity_id,e.loadData(),uni.hideLoading(),e.showShareModal()):(uni.hideLoading(),e.status=2,uni.showToast({icon:"none",title:a.msg}),setTimeout((function(){uni.redirectTo({url:"/pages/index/index"})}),2e3))}))},showShareModal:function(){var t=[!1,!0];this.is_new=t[0],this.show_share_model=t[1]},closeShareModal:function(){var t=[!1];this.show_share_model=t[0]},getRecommend:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return uni.showLoading({title:"加载中",mask:!0}),t.next=3,this.$request({url:this.$api.fxhb.recommend});case 3:i=t.sent,uni.hideLoading(),0===i.code&&(this.goods_list=i.data.list);case 6:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}()}};i.default=d},dac8:function(t,i,e){i=t.exports=e("24fb")(!1);var a=e("b605"),n=a(e("7317")),o=a(e("771c")),s=a(e("bf97")),r=a(e("0e37")),c=a(e("ee44")),u=a(e("f542")),d=a(e("e6f7"));i.push([t.i,'@charset "UTF-8";.text-center[data-v-2f9c15cb]{text-align:center}.font-weight[data-v-2f9c15cb]{font-weight:700}.page-width[data-v-2f9c15cb]{width:100%}.goods-hover-class[data-v-2f9c15cb]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-2f9c15cb]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}\n/*全局文字大小*/\n/* 屏幕宽度*/uni-page-body[data-v-2f9c15cb]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-2f9c15cb]{width:100%}.u-hover-class[data-v-2f9c15cb]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-2f9c15cb]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.app-layout .detail-bg[data-v-2f9c15cb]{background:#fe6b2e;min-height:100vh}.app-layout[data-v-2f9c15cb] .app-layout{background:#fe6b2e;min-height:100vh}.fxhb-bg[data-v-2f9c15cb]{background-size:100% auto;background-repeat:no-repeat;height:%?464?%;position:relative;z-index:50}.fxhb-right[data-v-2f9c15cb]{font-size:%?24?%;color:#fff;float:right}.fxhb-right uni-view[data-v-2f9c15cb]{background:rgba(0,0,0,.5);border-radius:%?28?% 0 0 %?28?%;line-height:%?56?%;text-align:center;width:%?136?%;margin-top:%?24?%}.fxhb-start[data-v-2f9c15cb]{position:fixed;width:100%;left:0;top:%?380?%;height:100%;z-index:10}.hongbao[data-v-2f9c15cb]{position:relative;width:100%;left:0;height:100%;z-index:51}.hongbao .hongbao-content[data-v-2f9c15cb]{font-size:%?36?%;padding:%?350?% %?25?% 0 %?25?%;background-size:100% auto;background-repeat:no-repeat;width:%?602?%;height:%?712?%;text-align:center}.hongbao .hongbao-content .hongbao-desc[data-v-2f9c15cb]{margin-bottom:%?100?%;line-height:1.5;color:#ffe15d;font-size:13pt}.hongbao .hongbao-btn[data-v-2f9c15cb]{background-image:url('+n+");line-height:%?96?%;height:%?96?%;width:%?416?%;background-repeat:no-repeat;background-size:100% 100%;text-align:center}.fxhb-box[data-v-2f9c15cb]{margin-top:%?-68?%;background:#fe6b2e}.fxhb-box .detail-info[data-v-2f9c15cb]{background:hsla(0,0%,100%,.9);border-radius:%?16?%;margin:0 %?24?%;padding:%?50?%;z-index:100;position:relative}.fxhb-box .user-list[data-v-2f9c15cb]{overflow:hidden;margin-bottom:%?16?%}.fxhb-box .user-list .user-item[data-v-2f9c15cb]{border:%?2?% solid #ff5c5c;width:%?104?%;height:%?104?%;margin-left:%?23?%;margin-right:%?23?%;margin-bottom:%?40?%;display:inline-block;overflow:hidden;border-radius:%?999?%;background-color:#fff;float:left}.fxhb-box .user-list .none[data-v-2f9c15cb]{border-style:none}.fxhb-box .user-list uni-image[data-v-2f9c15cb]{width:100%;height:100%}.fxhb-box .detail-info-text[data-v-2f9c15cb]{text-align:center;color:#666;font-size:%?28?%}.fxhb-box .detail-time-text[data-v-2f9c15cb]{color:#999;text-align:center;margin-top:%?24?%;margin-bottom:%?40?%;font-size:%?28?%}.fxhb-box .icon-detail-time[data-v-2f9c15cb]{background-size:100% 100%;background-image:url("+o+");width:%?190?%;height:%?168?%;margin-top:%?48?%;margin-bottom:%?32?%}.more-goods[data-v-2f9c15cb]{padding-bottom:%?32?%;color:#fff;font-size:%?24?%;margin-top:%?48?%}.more-goods .tt-goods[data-v-2f9c15cb]{margin-bottom:%?12?%}.more-goods .line[data-v-2f9c15cb]{height:1px;width:%?40?%;background:#fff;margin:0 %?24?%}.more-goods .icon-love[data-v-2f9c15cb]{width:%?24?%;height:%?24?%;background-size:100% 100%;background-repeat:no-repeat;margin-right:%?12?%;background-image:url("+s+")}.detail-error[data-v-2f9c15cb]{margin-top:%?40?%}.award-list[data-v-2f9c15cb]{margin-top:%?32?%!important;padding-top:%?48?%!important;color:#353535;padding-bottom:%?56?%!important}.award-list .list[data-v-2f9c15cb]{margin-top:%?40?%}.award-list .list-line[data-v-2f9c15cb]{width:%?176?%;height:%?2?%;background:#dbdbdb}.award-list .list-text[data-v-2f9c15cb]{font-size:%?32?%;padding:0 %?50?%}.award-list .user-avatar[data-v-2f9c15cb]{width:%?80?%;height:%?80?%;border-radius:50%;margin-right:%?20?%}.award-list .best[data-v-2f9c15cb]{color:#ffb82f;font-size:%?28?%;margin-top:%?10?%}.award-list .best .user-pond[data-v-2f9c15cb]{width:%?40?%;height:%?30?%;margin-right:%?10?%;background-image:url("+r+");background-repeat:no-repeat;background-size:100% auto}.coupon-set[data-v-2f9c15cb]{margin-top:%?24?%}.coupon-set .icon-right[data-v-2f9c15cb]{width:%?12?%;height:%?22?%;margin-left:%?10?%;background-image:url("+c+");background-repeat:no-repeat;background-size:100% auto}.coupon[data-v-2f9c15cb]{margin-top:%?32?%;background-size:100% 100%;height:%?190?%;background-repeat:no-repeat;background-image:url("+u+");margin-bottom:%?24?%}.coupon .coupon-title[data-v-2f9c15cb]{font-size:%?48?%;padding-left:%?56?%;color:#8f4c1a;margin-bottom:%?16?%}.coupon .coupon-desc[data-v-2f9c15cb]{font-size:%?28?%;padding-left:%?56?%;color:#8f4c1a}.coupon .coupon-unit[data-v-2f9c15cb]{font-size:%?50?%;line-height:1.35;color:#ff5c5c;padding-bottom:%?2?%}.coupon .coupon-money[data-v-2f9c15cb]{font-size:%?80?%;line-height:1;font-weight:700;padding-right:%?56?%;color:#ff5c5c}.act-modal[data-v-2f9c15cb]{position:fixed;left:0;top:0;width:100%;height:100%;z-index:2001;-webkit-transition:.2s;-o-transition:.2s;transition:.2s}.act-modal .show[data-v-2f9c15cb]{visibility:visible;opacity:1}.act-modal .act-modal-bg[data-v-2f9c15cb]{background:rgba(0,0,0,.5);position:fixed;left:0;top:0;width:100%;height:100%;z-index:1}.act-modal .act-modal-pic[data-v-2f9c15cb]{background:rgba(0,0,0,.25);position:fixed;left:0;top:0;width:100%;height:100%;z-index:1}.modal-box[data-v-2f9c15cb]{background-size:100% 100%;background-repeat:no-repeat;height:%?816?%;width:%?606?%;text-align:center;font-size:%?40?%;color:#666}.modal-box .modal-close[data-v-2f9c15cb]{float:right;margin-top:%?32?%;margin-right:%?32?%}.modal-box .modal-close .icon-close[data-v-2f9c15cb]{background-image:url("+d+");background-repeat:no-repeat;background-size:100% auto;height:%?30?%;width:%?30?%}.modal-box .modal-text[data-v-2f9c15cb]{margin-top:%?448?%;margin-bottom:%?28?%}.modal-box .bold-num[data-v-2f9c15cb]{font-size:%?54?%;color:#ffc73f;line-height:1em;font-weight:700}.modal-box .bold-money[data-v-2f9c15cb]{font-size:%?68?%;color:#ffc73f;line-height:1em;font-weight:700}.modal-box .btn[data-v-2f9c15cb]{margin-top:%?64?%}body.?%PAGE?%[data-v-2f9c15cb]{background:#f7f7f7}",""])},e6f7:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAV1BMVEUAAAD////f39/n5+fU1NTx8fHX19ft7e3////Y2Nje3t7w8PD////Nzc3////////s7Oz////x8fH////u7u7MzMzx8fH////MzMzR0dHa2tr9/f3j4+Pgp5ThAAAAGHRSTlMAXp2eoJWijEakfZA6909BfL+aVt7Ney9JKnM1AAAA1ElEQVQ4y62USw6DMAxESYFCoXz7c6D3P2erUNmVHt7hlUWeZqTMkOzICc0y3vyze1oaEcnDPlOISNpEPCpc5DuqpBR05LHtp0Sdwi4jz8yopEUvqYbMoUynrPULqXBWxqGUqfT+QMGLlOm0Vz0FpV49GKPWn9dAxKhIL1Lq5VH5hsTZdDjrBi0TTpAXcmTupKgTF4+yvLpyQtrwal/sBDuGtOHV1kibPUx3iN7Dy+9qoV6kHC86Wp+dro5/f/Dce81Ju3WelELvGLuxd16eGGN24HwAWGcfgGkUetEAAAAASUVORK5CYII="},ee44:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAWCAMAAADD5o0oAAAATlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////+QlxstAAAAGXRSTlMAgtioHRUF5vjPvZOOdmdhUklA8LW0nZx9eessiAAAAFJJREFUGNNlz0kOwDAIA8BsTbqmexv//6M52hKcGAkBdrd3rAjVglXk8Ys2RFHFm6kds+jANFAnguhCSFQaiwXHdIGutkcrnqyPMsJnwpnYpbHvG2IDzAb67NcAAAAASUVORK5CYII="},f542:function(t,i,e){t.exports=e.p+"static/img/coupon.f46b5c4f.png"},f99b:function(t,i,e){"use strict";e.r(i);var a=e("1e62"),n=e("b634");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("67c4");var s,r=e("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"2f9c15cb",null,!1,a["a"],s);i["default"]=c.exports}}]);