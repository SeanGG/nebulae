(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{118:function(e,t,a){"use strict";a.r(t);a(50);var n=a(69).a,s=a(9),i=Object(s.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("main",[a("section",{staticClass:"alert"},[e._v("当前环境：\n      "),a("span",{staticClass:"agent"},[e._v(e._s(e.userAgent))])]),e._v(" "),e._l(e.apiList,function(t,n){return a("section",{key:n},[a("section",{staticClass:"h2"},[e._v(e._s(t.gridName))]),e._v(" "),a("ul",{staticClass:"api-list"},e._l(t.gridList,function(t,n){return a("li",{key:n},[a("section",{staticClass:"api-cell",attrs:{"data-key":t.key},on:{click:e.testApi}},[a("section",{staticClass:"api-btn"},[e._v(e._s(t.name))]),e._v(" "),a("section",{staticClass:"api-desc"},[e._v(e._s(t.desc))])])])}))])})],2)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("header",[t("section",{staticClass:"title"},[this._v("appApi列表")]),this._v(" "),t("section",{staticClass:"description"},[this._v("app提供原生功能接口")])])}],!1,null,null,null).exports;t.default=i},51:function(e,t){var a="production";console.log("config="+a);var n={API_DAtestTA_getPrem:"/promote/standard/getPrem.json",test1:"/test1.json"};e.exports=n},52:function(e,t){e.exports={chunkMode:!0,callApi:!0,root:"",mockHost:"https://www.easy-mock.com/mock/5a38ab6ae859572ed685340b/api",host:""}},54:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(57),s=a.n(n),i=a(1),r=a(56),o=a(52),_=a.n(o);i.a.use(r.a),i.a.http.options.emulateJSON=!1,i.a.http.options.emulateHTTP=!0;var c=function(e){var t=i.a.http,a=e.url,n=e.data;return t.get(_.a.callApi?""+_.a.host+a:""+_.a.mockHost+a,{params:n}).then(function(e){var t=e.data;return s.a.resolve(t)}).catch(function(e){return console.log("request get error:"),console.log(e),s.a.reject(e)})}},55:function(e,t){},69:function(module,__webpack_exports__,__webpack_require__){"use strict";var _utils_http__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(54),_api___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(51),_api___WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_api___WEBPACK_IMPORTED_MODULE_1__),_utils_platform__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(83);__webpack_exports__.a={name:"Invite",data:function(){return{userAgent:"当前环境计算中...",apiList:[{gridName:"api分类1",gridList:[{name:"app是否已安装",key:"isAppCanOpen",desc:"app是否已安装"},{name:"打开app",key:"openApp",desc:"打开app"},{name:"测试奖励弹框",key:"taskRewardAlert",desc:"测试奖励弹框"},{name:"隐藏导航栏",key:"hideNavigation",desc:"隐藏导航栏"},{name:"显示导航栏",key:"showNavigation",desc:"显示导航栏"}]},{gridName:"api分类测试",gridList:[{name:"测试接口1",key:"aa",desc:"测试描述aa"},{name:"测试接口2",key:"bb",desc:"测试描述bb"}]}]}},computed:{},created:function(){this.testAgent()},methods:{testAgent:function(){var e=Object(_utils_platform__WEBPACK_IMPORTED_MODULE_2__.a)(),t=Object(_utils_platform__WEBPACK_IMPORTED_MODULE_2__.b)();this.userAgent=e?"app":t?"weixin":"h5"},testApi:function testApi(e){if(this.userAgent&&"h5"===this.userAgent)alert("当前环境不在app内，无法调用app接口");else{var key=e.currentTarget.dataset.key;try{eval("this."+key+"(key)")}catch(e){console.error("不存在 "+key+" 方法 !请确认是否正确配置")}}},isAppCanOpen:function(e){var t=e||"unknowApi-isAppCanOpen";try{webkit.messageHandlers.isAppCanOpen.postMessage({url:"wxc21a915b1ea48402://"})}catch(e){console.error("The native "+t+" not exist !")}},openApp:function(e){var t=e||"unknowApi-openApp";try{webkit.messageHandlers.openApp.postMessage({url:"wxc21a915b1ea48402://"})}catch(e){console.error("The native "+t+" not exist !")}},taskRewardAlert:function(e){var t=e||"unknowApi-openApp";try{webkit.messageHandlers.taskRewardAlert.postMessage({title:"任务奖励测试",coin:.2,power:0})}catch(e){console.error("The native "+t+" not exist !")}},showNavigation:function(e){var t=e||"unknowApi-openApp";try{webkit.messageHandlers.showNavigation.postMessage({})}catch(e){console.error("The native "+t+" not exist !")}},hideNavigation:function(e){var t=e||"unknowApi-openApp";try{webkit.messageHandlers.hideNavigation.postMessage({})}catch(e){console.error("The native "+t+" not exist !")}}}}},83:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return i});var n=window.navigator.userAgent,s=function(){return/zhonganwebview/i.test(n)},i=function(){return/micromessenger/i.test(n)}}}]);
//# sourceMappingURL=7.80d0980a169f99d75c3c.js.map