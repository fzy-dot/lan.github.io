(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-search-search"],{"0e5d6":function(t,i,e){"use strict";var o;e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return o}));var s=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("v-uni-view",{staticClass:"app-layout",style:{background:t.isSearch?"#f7f7f7":"#fafafa"}},[o("app-layout",[o("v-uni-view",{staticClass:"search"},[o("v-uni-view",{staticClass:"top"},[o("v-uni-view",{staticClass:"dir-left-nowrap box"},[o("v-uni-input",{staticClass:"box-grow-1 input",attrs:{type:"text","confirm-type":"搜索"},on:{confirm:function(i){arguments[0]=i=t.$handleEvent(i),t.search.apply(void 0,arguments)}},model:{value:t.keyword,callback:function(i){t.keyword=i},expression:"keyword"}}),o("v-uni-view",{staticClass:"close-tip",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clear.apply(void 0,arguments)}}},[t.keyword?o("v-uni-image",{staticClass:"search-close",attrs:{src:"/static/image/icon/delete-yuan.png"}}):t._e()],1),o("v-uni-view",{staticClass:"box-grow-0 cross-center",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.search.apply(void 0,arguments)}}},[t._v("搜索")])],1)],1),o("v-uni-view",{staticStyle:{height:"104rpx"}}),o("v-uni-view",{staticClass:"hot opacity-hide"},[t.historyList.length>0?o("v-uni-view",{staticClass:"history"},[o("v-uni-view",{staticClass:"dir-left-wrap list"},[t._l(t.historyList,(function(i,e){return[o("v-uni-view",{key:e+"_0",staticClass:"box-grow-0 cross-center item once-item"},[o("v-uni-view",{staticClass:"t-omit",staticStyle:{"max-width":"650rpx"}},[t._v(t._s(i.keyword))])],1)]}))],2)],1):t._e()],1),o("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.isSearch,expression:"!isSearch"}],staticClass:"hot"},[t.historyList.length>0?o("v-uni-view",{staticClass:"history"},[o("v-uni-view",{staticClass:"dir-left-nowrap cross-center title"},[o("v-uni-view",{staticClass:"box-grow-1"},[t._v("历史搜索")]),o("v-uni-image",{staticClass:"box-grow-0",attrs:{src:e("281b")},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.deleteHistory.apply(void 0,arguments)}}})],1),o("v-uni-view",{staticClass:"dir-left-wrap list"},[o("v-uni-view",{staticClass:"dir-top-nowrap"},t._l(t.realHistoryList,(function(i,s){return o("v-uni-view",{key:s,staticClass:"dir-left-wrap box-grow-1"},t._l(i,(function(i,a){return o("v-uni-view",{key:a,staticClass:"dir-left-wrap"},[i.mark?t._e():o("v-uni-view",{staticClass:"box-grow-0 cross-center item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.historyClick(i.keyword)}}},[o("v-uni-view",{staticClass:"t-omit",staticStyle:{"max-width":"650rpx"}},[t._v(t._s(i.keyword))])],1),i.mark&&1===s?o("v-uni-view",{staticClass:"box-grow-0 close-pic cross-center",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.selectAllList.apply(void 0,arguments)}}},[o("v-uni-image",{attrs:{src:e("82c6")}})],1):t._e()],1)})),1)})),1)],1)],1):t._e(),1==t.getSetting.is_show_hot_goods&&"goods"===t.sign?o("v-uni-view",{staticClass:"hot-center"},[o("v-uni-image",{staticClass:"top-image",attrs:{src:e("ee86")}}),t.hotGoodsList&&t.hotGoodsList.length?o("v-uni-view",{staticClass:"top-list"},t._l(t.hotGoodsList,(function(i,e){return o("v-uni-view",{key:e,staticClass:"item cross-center dir-left-nowrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goodsNav(i.url)}}},[o("v-uni-view",{staticClass:"box-grow-0 main-center first"},[i.sort<4?o("v-uni-image",{attrs:{src:1===i.sort?"./image/list_icon_first.png":2===i.sort?"./image/list_icon_second.png":"./image/list_cion_third.png"}}):t._e(),i.sort>3?o("v-uni-view",[t._v(t._s(i.sort))]):t._e()],1),o("v-uni-view",{staticClass:"goods-image box-grow-0"},[o("v-uni-image",{attrs:{src:i.cover_pic}})],1),o("v-uni-view",{staticClass:"goods-name t-omit"},[t._v(t._s(i.title))])],1)})),1):t._e()],1):t._e()],1),t.isSearch?o("v-uni-view",{staticClass:"goods-list"},[t.list.length<=0?[o("v-uni-view",{staticClass:"main-center no-result"},[o("v-uni-view",{staticClass:"dir-left-nowrap cross-center"},[o("v-uni-image",{staticClass:"box-grow-0 empty",attrs:{src:e("1a50")}}),o("v-uni-view",{staticClass:"box-grow-1"},[o("v-uni-view",[t._v("抱歉，没有相关商品")]),t.mch_id?t._e():o("v-uni-view",{staticClass:"text"},[t._v("以下是为您推荐的商品")])],1)],1)],1)]:t._e(),o("v-uni-view",{staticClass:"main-between corss-center",staticStyle:{"background-color":"#f7f7f7",padding:"0 24rpx","flex-wrap":"wrap"}},t._l(t.newList,(function(i,e){return o("app-goods",{key:i.id,attrs:{no_extra:!0,listStyle:2,index:e,theme:t.getTheme,goods:i,show_time:!1,showBuyBtn:!1,c_border_top:16,c_border_bottom:16,padding:24,show_sale:!0}})})),1)],2):t._e(),t.loading?o("v-uni-view",{staticClass:"u-loading-list"},[t._v("加载中...")]):t._e()],1)],1),t.attrGoods.goods?o("u-attr",{attrs:{goods:t.attrGoods.goods,previewUrl:t.previewUrl,submitUrl:t.submitUrl,attrGroupList:t.attrGoods.goods.attr_groups,theme:t.getTheme,"cart-show":"goods"===t.attrGoods.goods.type,show:t.attrGoods.attrShow}}):t._e()],1)},a=[]},"1a50":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAABLFBMVEUAAAD////////////////t7e3////////////////////8/Pz////+/v7z8/PCwsLJycn////g4ODq6uqOjo7////k5OT+/v7Kysr9/f3////////////i4uL+/v7s7Ozz8/P////x8fG8vLyoqKi4uLinp6fU1NTp6en6+vr8/Pzy8vL////p6enb29vCwsKUlJS/v7/a2trOzs7///+3t7egoKCurq7W1tb8/Pzq6urp6enq6urb29vy8vKXl5f8/PzJycn+/v7R0dHf39+vr6+7u7vc3Nzj4+Pi4uL9/f2FhYW8vLzW1tZmZmbS0tLNzc1vb2+MjIyTk5Oqqqp8fHzz8/PHx8eEhIR3d3eYmJjZ2dng4OClpaWenp6xsbFXV1djY2O7u7toaGiWposYAAAAT3RSTlMAmWZrdJWgDh2zfqsGhcH+9DPe/vGPzVDZWD8qI/IU4Mi6mfTw6d/T0uDOpkXw6+jn176tivzq5N/FubGB9PHx7evTva3KyMahk/7xt4jqeQfE+gAABcxJREFUaN7t2mlX2kAUBmBC0mgSNqEsQllURMClrrVWq1at1m6zJGN21v//HzpRahQQCYWeLryewzl+4D7MnQRlLr4/IEkAqjyXfOWbZNIIaTo26rAsTY6awyrzaefjCaGR6+EyLyYzgXEjs3aNucvizuUm1nQi262V1fFSMybhmYe5uCwZGiHYsFMX4vyYqDMUYnqzer5fw4ha9tY4qF1tqVtwqe2tmtNBbGztHM3PjU6l9zAzOPy7LcXpoCaXRqUCWd3dlIHUypKNdWqVvn7zTAn6O2bo8FIiomCN6DjhCWHlZcZjeCFPjLQX5FVdZrzHIozPS6JkBKSCNjwhjL7tHeFlxVO/kniL8R6oM542JTzKphygytBCYF6IGU25WLo8P1z1pODWkP1a47MK0TCq12sy1nVN02R7OXX1TuKfR5bwMP2ai+cVohsrPIOCrJ/lxN3V7dSybWCN0B+5Vg+/TRSEJ713+umzGyGWbULkFafEC8T53VAtLtH3EIUujlAOG4oSfp+vHgj8Y4+A3CAhxyYUHeGU86Qe5IEWZIRQVG0phqzphGDKhYF1XKkKgvPMYi0wYKsPFUIFiaHpIKx/QNhbrZo3w3s1rGnk9i9aC8YU8uRWfyq6Ql9ksMYvnB3HQNjGCDW/H/Xd6ut9Hcmu4A1xsWAFqKr5Xov1bvVRibTxB+Ex4Blhj3ZSKlhfiHOcfNNFsB8JcoVuZEiAuz7/oEIHuP0NdyNGO+IIIyOsuLgdUUE2RIFO2B5ErjPM0wjHsgP3YDWhqjAbYm6BAYjyNLLYDAPTzObLoRC9v+NBkePuTW5XikIVvneBEZEXaP30JmZZAKhQBRCYwLJujitnB0JoA6qqC/waMusL5F7NrSX9XDDOS6FEdIN69CfsAuNAejIzm5kPx51iE0RoMlCcPPLqdyCzU2SKTBDhpsj/iOTGi8z0RWamyN+G+KfIFBkdCUweoZki3hB2iowPeTlF/j0kMJuZWxsz8vMTthjnhYVq5fTz55ubm1irssBw7HiQxSa0TOgkrEIA1TAEANIH01QhtGJnfJAdA9IGN7HY8WnlrHqwIEg8z8R3g6LIcc4p2sWKqgJr3V3SyO1iWfaZAyIqxapSkB2EZIxmPcH/wlEUFzykS4Kmu6RHyJyfKaxb8A1CpBaVRkLcJV1Bp3nluyVtuggAAEJIH9U3BCFjQ/i140Fu9zAKgBk7XWA2P98jRxEVgk7g/pc2kiOF0RGWE4OMkG3JBLUb4Qf/dHAbEIJ7Z/kLQtpegfeCsBwXZHjpKrVk1zAmziG7XY+kmvJuwL192ajDuM5LHZF6XnKRJ0vH6ajsbUQxDGfeqOGavby1ffjz/H7xSzM153MZ/yMGwNcneltXNoRehGWd0kLobaSlyFjXnMlzbX+LTj76XJ2phhEMPGTKoMuhF5xugAOGcZC70oVEpFW3ZUxLa9h4c3l+8cxQRcJ6gi7GzXwBqAA8dghCNQVFN2C90xHtpPTx684nZtgItYYhPh5f3TOuU9TaDaThTaf0orfhWWhlqYYxIrB71BsyfzbNuXveXidzGbHYkLxOM50ZLdERIvuL3Jr74dllLEijQrDtz3T6qJPhyyc+2LKGkK5tll7TIiD4xJxJsMxyMB1w76SrJh6qfF3WSBORu/KdwOunhk1dgyJ/uFEcUJ/eKnUDI4T0l6Vlt3yn6eq3YUeze43XfcuHonT8oyOd4M3lCASPA1UqWrH82nBIEtqNaHf5sE3Ltwl+Q8u79d0V0PpVnkvnhp8yQ6NR7jR/gb6P0L3VETnZ7y0PaQCwjg8Yv9fRvx9CDRWEckQxiHPpvCwuqf1evQpMKy8E50f6Hk0gC1XSQAhpJ53yvQA0Y3meW8v5Ro4IQaS453Sib3vM9YLbnpGTy/Z7+U57zGxodz7jG0sY2AtYeUlMzvrGl4wFH/YnW2DY9Ixv3BHU290FtD1xp/0TSdpUzagkTvgLZf70qFfnD7Cq7WfLZIDOAAAAAElFTkSuQmCC"},"207f":function(t,i,e){var o=e("ad24");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var s=e("4f06").default;s("bc50e1d6",o,!0,{sourceMap:!1,shadowMode:!1})},"21ad":function(t,i,e){"use strict";var o=e("4ea4");e("ac4d"),e("8a81"),e("5df3"),e("1c4c"),e("7f7f"),e("6b54"),e("87b3"),e("8e6e"),e("456d"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=o(e("2909"));e("ac6a"),e("96cf");var a=o(e("1da1")),r=o(e("ade3")),n=e("2f62"),c=o(e("d3c4")),d=o(e("ad05"));function l(t,i){var e="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=h(t))||i&&t&&"number"===typeof t.length){e&&(t=e);var o=0,s=function(){};return{s:s,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,n=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return r=t.done,t},e:function(t){n=!0,a=t},f:function(){try{r||null==e.return||e.return()}finally{if(n)throw a}}}}function h(t,i){if(t){if("string"===typeof t)return u(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(t,i):void 0}}function u(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,o=new Array(i);e<i;e++)o[e]=t[e];return o}function f(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);i&&(o=o.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),e.push.apply(e,o)}return e}function g(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?f(Object(e),!0).forEach((function(i){(0,r.default)(t,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}))}return t}var v=1,m=!1,p=!1,w={name:"search",components:{uAttr:c.default,appGoods:d.default},data:function(){return{hotGoodsList:[],list:[],isSearch:!1,historyList:[],keyword:"",recommend_list:[],mch_id:0,beginAfter:!0,tempList:[],realHistoryList:[],loading:!1,goodsReset:!1,attrGoods:{attrShow:0,goods:null},submitUrl:"",previewUrl:"",sign:"",url:""}},computed:g(g({},(0,n.mapGetters)("mallConfig",{getSetting:"getSetting",getTheme:"getTheme"})),{},{newList:function(){return this.list.length>0?this.list:this.recommend_list},sizeTransform:function(){var t=uni.getSystemInfoSync().windowWidth,i=750/t,e=24/i,o=20/i,s=60/i,a=t-2*e;return{p:i,boxLeft:e,marginRight:o,btnWidth:s,listWidth:a}}},(0,n.mapState)({isListUnderlinePrice:function(t){return t.mallConfig.mall.setting.is_list_underline_price}})),onLoad:function(t){this.$commonLoad.onload(t),this.mch_id=t.mch_id?t.mch_id:0,this.sign=t.sign?t.sign:"goods","goods"===this.sign||"mch"===this.sign?this.url=this.$api.default.goods_list:"book"===this.sign?this.url=this.$api.book.list:"pt"===this.sign?this.url=this.$api.pt.goods:"wholesale"===this.sign?this.url=this.$api.wholesale.index:"exchange"===this.sign?this.url=this.$api.exchange.list:"weekly_buy"===this.sign&&(this.url=this.$api.weekly_buy.index),v=1,m=!1,p=!1,this.historyList=this.getHistory(),this.getSelect(),this.getRecommend(),this.getHotSearch()},onReachBottom:function(){p||(this.goodsReset=!1,this.keyword&&(this.loading=!0,this.getGoodsList()))},watch:{keyword:{handler:function(t){""==t&&this.cancel()},immediate:!0}},methods:{getSelect:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(){var i,e,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=this.historyList,i&&i.length&&(e=this,o=0,setTimeout((function(){var t=uni.createSelectorQuery();t.selectAll(".once-item").fields({size:!0},(function(t){e.formatData(t),e.beginAfter?e.selectLimitList(t):e.selectAllList()})).exec()}),o));case 2:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}(),formatData:function(t){for(var i=this,e=i.historyList,o=i.sizeTransform,s=o.marginRight,a=o.listWidth,r=[],n=[],c=0,d=0;d<t.length;d++){var l=t[d].width+s,h=l+c;h<=a?(n.push(e[d]),c=h):0===n.length&&0===c?r.push([e[d]]):(r.push(n),c=0,n=[],d--)}n.length&&r.push(n),this.tempList=r},selectLimitList:function(t){var i=this,e=i.sizeTransform,o=e.btnWidth,s=e.listWidth,a=e.marginRight,r=JSON.parse(JSON.stringify(i.tempList)),n=[];if(r.length>2){var c=0,d=s-o-a,l=0;r[1].forEach((function(i,e){l+=t[r[0].length+e].width+a,l<=d&&(c=e+1)})),r[1].splice(c,r[1].length-c,{mark:!0}),n=[r[0],r[1]],i.beginAfter=!0}else r.forEach((function(t){return n.push(t)})),i.beginAfter=!1;i.realHistoryList=n},selectAllList:function(){var t=this.tempList,i=[];if(t&&t.length)for(var e=0;e<5&&e<t.length;e++)i.push(t[e]);this.beginAfter=!1,this.realHistoryList=i},goodsNav:function(t){uni.navigateTo({url:t})},clear:function(){uni.hideKeyboard(),this.keyword="",this.loading=!1},getHotSearch:function(){var t=this;1==this.getSetting.is_show_hot_goods&&this.$request({url:this.$api.goods.hot_search}).then((function(i){t.hotGoodsList=i.data.list}))},cancel:function(){this.isSearch=!1,this.loading=!1,this.keyword="",this.list=[]},reset:function(){v=1,p=!1,this.goodsReset=!0,this.getGoodsList()},search:function(){var t=this.keyword;""!==t&&(this.keyword=t.trim(),this.setHistory(),this.getSelect(),this.reset())},getGoodsList:function(){var t=this;if(this.keyword&&!m){m=!0;var i={keyword:this.keyword,mch_id:this.mch_id,page:v};"goods"===this.sign&&(i.is_search=1),this.$request({url:this.url,data:i}).then((function(i){m=!1,t.isSearch=!0,t.loading=!1;var e=i.code,o=i.data,a=i.msg;if(0===e){var r;if(1===v&&(t.list=[]),o.list.length>0)(r=t.list).push.apply(r,(0,s.default)(o.list)),v++;else p=!0,1===v&&t.getRecommend();var n,c=l(t.list);try{for(c.s();!(n=c.n()).done;){var d=n.value;switch(d.tag="",d.sign){case"miaosha":d.tag="秒杀";break;case"bargain":d.tag="砍价";break;case"pintuan":d.tag="拼团";break;case"advance":d.tag="预售";break;case"pick":d.tag="N元任选";break;case"composition":d.tag="套餐组合";break;case"gift":d.tag="社交送礼";break;case"flash-sale":d.tag="限时抢购";break;case"wholesale":d.tag="商品批发";break;case"exchange":d.tag="礼品卡";break;case"step":d.tag="步数宝";break;case"booking":d.tag="预约";break;case"flash_sale":d.tag="限时抢购";break;case"weekly_buy":d.tag="周期购";break}}}catch(h){c.e(h)}finally{c.f()}}else uni.showModal({content:a})})).catch((function(){m=!1}))}},setHistory:function(){var t=this.getHistory(),i=this.keyword.trim();t.forEach((function(e,o){e.keyword===i&&t.splice(o,1)})),t.unshift({keyword:i}),t.length>20&&t.pop(),this.historyList=t,uni.setStorageSync("SEARCH_HISTORY_LIST",t)},getHistory:function(){var t=uni.getStorageSync("SEARCH_HISTORY_LIST");return t||(t=[]),t},deleteHistory:function(){var t=this;uni.showModal({content:"确认删除全部历史记录？",success:function(i){i.confirm&&(uni.removeStorageSync("SEARCH_HISTORY_LIST"),t.historyList=[])}})},historyClick:function(t){this.keyword=t.trim(),this.reset()},getRecommend:function(){var t=this;this.mch_id||this.recommend_list.length>0||this.$request({url:this.$api.goods.new_recommend,data:{goods_id:0,type:"goods"}}).then((function(i){0===i.code&&(t.recommend_list=i.data.list)}))},buyProduct:function(t){var i=this,e=t.goods,o=t.attrShow;this.attrGoods.goods=e,setTimeout((function(){i.attrGoods.attrShow=o}))}}};i.default=w},"281b":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAV1BMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZkABlXAAAAAHXRSTlMAD/72CFrq3tHHuoVBdxgsIh+hl498rlFibThIMsMkcD4AAAEbSURBVDjL5ZIJbsQgDAB9EJuQOwRy7f/fWUq1UdKlL+ggGRAjGyzgxti4jD+giFmIJMEUsSigyomJo9bfgskMYscsLnqYzPt8WFLhGC2RW/zsI5O6mO/yowyRJGNVOA1RlQzVbRZ28j2WCLRkIVAHRSqa89yK7OseugehWyvLWxbMKkRa2we1ZeIdr1xuwP4BTv5W+aAAH6zUXuu2LKw3oSm9oXoKuK0GTLWZtN+wIAxsEXqVCdDxUBJIEVB5BOPoVRBGqpNQ8wRmLmYY+X8IZJNgvxsV/+ikIPSShJTmo5MBoHfeAHqHAJ2bAE7aLuHM3xdNCgbfYbtl6K2cBhK3MNhU5+Kl7JquWfzShByaKFw9/peyPmDdTT75Alo5E3ei9xzWAAAAAElFTkSuQmCC"},"4e69":function(t,i,e){"use strict";var o=e("207f"),s=e.n(o);s.a},"650b":function(t,i,e){"use strict";e.r(i);var o=e("0e5d6"),s=e("e143f");for(var a in s)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return s[t]}))}(a);e("4e69");var r,n=e("f0c5"),c=Object(n["a"])(s["default"],o["b"],o["c"],!1,null,"65cf1c77",null,!1,o["a"],r);i["default"]=c.exports},"82c6":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAE00lEQVRoge2bXUikZRTHf+loIK6Gbcm2Ee6FUCxLmLGZbGmbgaUgViqsN34WKN65oBeK7Y2QgpCoF3qhkH0oFl5YG7S6trusLYmB7ZVQ9o2SspYipi5x3s7IOM2M48z7zIxj/6vR933Oc36c9/k+zwObm5sYUjLwPPAscBY4A5wGHgIStcp14B7wG/A9cBf4BrgNrJlwy27gx4Ey4HXgOSA2QDu7wNfAJ8Ao8JNdDtoF/CJwGXg1CEhvEvjPgU5gOlhjwQLnAleAF4J1xE/dAFqB64EaiAmw3CngfWAqhLBoXVNa96lADAQS4RKgXzulcEo6tVpt437rMBGOB7qBkQiARX0YUZ8e9LeQvxE+AXwKvByUi+b0FVAMrB5Ugz8RfkTbTaTCoqPEpPrqUwcBy2dzFcg073PQehr44qDm5gs4Xgf+ZyKLy6cy1Od4by/5Au4CLobWX1t0UX33KG+dVon2gEdZMsX9D4MnYJngf6eT/KMsWZScA35xZfD0SXdHASzK8J77P90j/JJ279GkPOCak8c9wleiDFbU5vqHK7AM3hdC749xXVA2S67Al6OPdU97bM42/CjwK+AIu2tmtKOjz7IzwpeiGBZlE8a9T/qN8PoTElmM8knLZHvFwF5UpEn2xh6WCGcfA1iUMTvGztVQUVERLS0tdpmjtbWV/Px82+zJHrkAn7PLWnFxMVNTU3R1eV2s+C2xMTk5SWlpqV3uic469ETAFlVUVLCzs8Pg4CCJiYnU1tYGZLa/v5+xsTEqKyupqqqyE/iMAD9mp8WamhpkbB8aGiIhIYHy8vJDlR8eHrbKlpWVUV1dbadrotMOEyujhoYG1tfX6evrsyItbdsfjY+PW2UKCwstGwaU5HA52LJVzc3NbG1t0dHRgcPhoKCgwKf5iYkJ6928vDyamppMuCQ6YXR21dbWxsbGBu3t7Vakc3JyPL43PT1tvZOdnW2VMai/ZeLxl6koi7a3t2lsbGR2dpbOzk6ysrL2PZ+ZmbGeZ2ZmWs/j4uJMAq8K8M96zGlMu7u7Vme2sLBAd3c3GRkZVlVzc3NWW01PT2dgYIDYWOPznx8FWM5hz5uuaW1tjfr6ehYXFxkd/fc4qKSkhLS0NHp6ekhODsnpzR0B/kh3+IxrdXWVuro6lpaWrKpSU1Pp7e0lJSUlFNWLPpaZ1nyoahMw+aSTkpKsiMrvEMKK7kqE5dT+s1DWGka9dtyWhydj9GD5dgQ4ZFrCeM+54zEWvZx7shiP7Sbesp6tRquuKuO+fel3oxi4w/nDFVjyJG6Gxx+juqlsltzPlowuVcKkd1yrdQe+ptk60SJh+dKV5f8DcR2e3gqdX8b0tjssPpJaZP3WezQ5LfV5y1HxlYkXr2NzrlHX7Jf0yK/Ido4ny77SlqTAm6FcPtqgeU1O9wiLH5l4K5oj8W2kkXnQvPq64uslf3ItZUqWo/mWkaob2vSWD/LP3/ThPzW9vycCgXu1zR6YScsRTxCXINSYTBB3Sip4CvgggLJ26UPgycPCEsSdh9+Bck1kC+WC45Ymj15SHw6tQIGduq4XL6TDmADu24K1X/fVdq7mXAXVedp9UesJoFTHwvNBXtS6o7nPI5F4UcuTXK/iySReDt5PermK9wfwg46l5q7iAf8AEXVdfmlU1NEAAAAASUVORK5CYII="},ad24:function(t,i,e){i=t.exports=e("24fb")(!1),i.push([t.i,'@charset "UTF-8";.text-center[data-v-65cf1c77]{text-align:center}.font-weight[data-v-65cf1c77]{font-weight:700}.page-width[data-v-65cf1c77]{width:100%}.goods-hover-class[data-v-65cf1c77]{opacity:.9;background-color:#f7f7f7}.background-image[data-v-65cf1c77]{background-repeat:no-repeat;background-size:100% 100%;background-position:50%}\n/*全局文字大小*/\n/* 屏幕宽度*/uni-page-body[data-v-65cf1c77]{font-size:%?32?%;background:#f7f7f7}.page-width[data-v-65cf1c77]{width:100%}.u-hover-class[data-v-65cf1c77]{opacity:.9;background-color:#f7f7f7}.safe-area-inset-bottom[data-v-65cf1c77]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.opacity-hide[data-v-65cf1c77]{position:fixed;top:0;z-index:-10;opacity:0;overflow:hidden}.search[data-v-65cf1c77]{background-color:#efeff4}.close-pic[data-v-65cf1c77]{margin-right:%?20?%;margin-bottom:%?16?%;border-radius:50%}.close-pic uni-image[data-v-65cf1c77]{height:%?60?%;width:%?60?%;display:block}.hot[data-v-65cf1c77]{background-color:#fafafa;border-radius:%?16?%}.hot .hot-center[data-v-65cf1c77]{padding:%?32?% %?24?%}.hot .hot-center .top-image[data-v-65cf1c77]{width:%?159?%;height:%?25?%;display:block}.hot .hot-center .top-list[data-v-65cf1c77]{margin-top:%?32?%;border-radius:%?16?%;padding:%?22?% 0;-webkit-box-shadow:0 0 %?12?% 0 #e0e0e0;box-shadow:0 0 %?12?% 0 #e0e0e0}.hot .hot-center .top-list .item[data-v-65cf1c77]{height:%?110?%}.hot .hot-center .top-list .item .first[data-v-65cf1c77]{width:%?120?%;font-weight:700}.hot .hot-center .top-list .item .first uni-image[data-v-65cf1c77]{width:%?48?%;height:%?43?%;display:block}.hot .hot-center .top-list .item .first uni-view[data-v-65cf1c77]{color:#999;font-size:%?26?%}.hot .hot-center .top-list .item .goods-image uni-image[data-v-65cf1c77]{height:%?90?%;width:%?90?%;display:block;border-radius:%?8?%}.hot .hot-center .top-list .item .goods-name[data-v-65cf1c77]{color:#333;font-size:%?26?%;margin:0 %?24?%}.app-layout[data-v-65cf1c77]{min-height:100vh}.top[data-v-65cf1c77]{position:fixed;width:100%;top:0;z-index:15;padding:%?20?% %?24?%;background-color:#efeff4;font-size:%?32?%;color:#666}.top .input[data-v-65cf1c77]{background-color:#fff;border-radius:%?50?% 0 0 %?50?%;padding:0 %?32?%;font-size:%?28?%;height:%?64?%}.top .box[data-v-65cf1c77]{position:relative}.top .box .close-tip[data-v-65cf1c77]{width:%?64?%;height:%?64?%;background-color:#fff;border-radius:0 %?50?% %?50?% 0;margin-right:%?20?%}.top .box .search-close[data-v-65cf1c77]{width:%?32?%;height:%?32?%;border-radius:50%;margin:%?16?%}.top .radio[data-v-65cf1c77]{margin-top:%?32?%}.top .radio .radio-item[data-v-65cf1c77]{padding-bottom:%?12?%}.top .radio .active[data-v-65cf1c77]{border-bottom:%?4?% solid}.history[data-v-65cf1c77]{padding:%?36?% %?24?%;border-radius:%?16?% %?16?% 0 0;background-color:#fff;font-size:%?28?%}.history .title[data-v-65cf1c77]{padding-bottom:%?24?%;color:#666}.history .title uni-image[data-v-65cf1c77]{width:%?28?%;height:%?34?%;display:block}.history .list .item[data-v-65cf1c77]{height:%?64?%;background-color:#f7f7f7;padding:0 %?20?%;margin-right:%?20?%;margin-bottom:%?16?%;border-radius:%?32?%}.goods-list .no-result[data-v-65cf1c77]{height:%?156?%;padding:%?28?% 0;font-size:%?28?%;background-color:#fff}.goods-list .no-result .text[data-v-65cf1c77]{color:#999}.goods-list .no-result .empty[data-v-65cf1c77]{width:%?100?%;height:%?100?%;display:block;margin-right:%?40?%}.u-loading-list[data-v-65cf1c77]{height:%?64?%;line-height:%?64?%;text-align:center;color:#b0b0b0;font-size:%?24?%;background-color:#f7f7f7}body.?%PAGE?%[data-v-65cf1c77]{background:#f7f7f7}',""])},e143f:function(t,i,e){"use strict";e.r(i);var o=e("21ad"),s=e.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return o[t]}))}(a);i["default"]=s.a},ee86:function(t,i,e){t.exports=e.p+"static/img/icon_top.ab7430f6.png"}}]);