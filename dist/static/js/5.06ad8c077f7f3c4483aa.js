(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{123:function(t,a,s){"use strict";s.r(a);s(48);var i=s(62).a,n=s(10),e=Object(n.a)(i,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"list-content"},[t.page_sessionid?s("div",[t._v("\n    "+t._s(t.page_sessionid)+"\n  ")]):t._e(),t._v(" "),t.page_udid?s("div",[t._v("\n    "+t._s(t.page_udid)+"\n  ")]):t._e(),t._v(" "),t.url?s("div",[t._v("\n    url : "+t._s(t.url)+"\n  ")]):t._e(),t._v("\n  "+t._s(t.testName)+"\n  "),s("div",{staticClass:"topPic"},[s("div",{staticClass:"top_link",on:{click:t.linkTo}}),t._v(" "),s("div",{staticClass:"info clearfix"},[s("div",{staticClass:"game fl"},[s("img",{staticClass:"fl game_icon",attrs:{src:t.appIconUrl,alt:""}}),t._v(" "),s("div",{staticClass:"des fl"},[s("h3",[t._v(t._s(t.appName))])])]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"game_description fl"},[t._v(t._s(t.appInfo))])])]),t._v(" "),s("div",{staticClass:"list"},[s("h3",[t._v("安利墙")]),t._v(" "),t.anliList.length>0?s("ul",t._l(t.anliList,function(a,i){return s("li",{key:i},[s("div",{on:{click:function(s){t.anliLink(a.interactUrl,a.appId)}}},[s("img",{attrs:{src:a.appBanner,alt:""}})]),t._v(" "),s("div",{staticClass:"content"},[s("h4",[t._v(t._s(a.appName))]),t._v(" "),s("div",{staticClass:"info"},[t._v(t._s(a.appInfo))])])])})):s("div",{staticClass:"empty-list"},[t._v("\n      暂无安利内容\n    ")])])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"task fr"},[a("p",{staticClass:"top"},[this._v("独家算力任务")]),this._v(" "),a("p",{staticClass:"bottom"},[this._v("登录送星钻")])])}],!1,null,null,null).exports;a.default=e},52:function(t,a){var s="production";console.log("config="+s);var i={API_DAtestTA_getPrem:"/promote/standard/getPrem.json",test1:"/test1.json"};t.exports=i},53:function(t,a){t.exports={chunkMode:!0,callApi:!0,root:"",mockHost:"https://www.easy-mock.com/mock/5a38ab6ae859572ed685340b/api",host:""}},54:function(t,a,s){"use strict";s.d(a,"a",function(){return c});var i=s(58),n=s.n(i),e=s(1),o=s(56),p=s(53),r=s.n(p);e.a.use(o.a),e.a.http.options.emulateJSON=!1,e.a.http.options.emulateHTTP=!0;var c=function(t){var a=e.a.http,s=t.url,i=t.data;return a.get(r.a.callApi?""+r.a.host+s:""+r.a.mockHost+s,{params:i}).then(function(t){var a=t.data;return n.a.resolve(a)}).catch(function(t){return console.log("request get error:"),console.log(t),n.a.reject(t)})}},55:function(t,a){},62:function(t,a,s){"use strict";(function(t){var i=s(54),n=s(52),e=s(12);a.a={name:"List",data:function(){return{url:"",dataSource:{},appName:"",appIconUrl:"",appInfo:"",appId:"",appLink:"",anliList:[{interactUrl:"",appId:""}],page_sessionid:"",page_udid:"",testName:""}},computed:{},created:function(){this.handleChange(),this.setInitParams(),this.getData()},methods:{handleChange:function(t){var a=this;i.a({url:n.test1}).then(function(t){a.testName=t})},linkTo:function(){var t=this.appLink;if(!t||""===t)return!1;window.location.href=t},anliLink:function(t,a){window.location.href=t+"?session="+this.page_sessionid+"&appId="+a+"&udid="+this.page_udid},setInitParams:function(){var t=this.$route.query;this.url=Object(e.b)(t).url,this.page_sessionid=Object(e.b)(t).page_sessionid,this.page_udid=Object(e.b)(t).page_udid},getData:function(){var a=this;t.ajax({url:a.url,dataType:"jsonp",jsonpCallback:"jsonp_"+a.page_sessionid.slice(0,8),data:{r:"task/app-web-list",session:a.page_sessionid,platform:"ios"},success:function(t){0===t.state.code&&(a.dataSource=t,a.render_html())}})},render_html:function(){this.render_top()},render_top:function(){var t=this.dataSource.data.top;this.appName=t.appName,this.appIconUrl=t.appIconUrl,this.appInfo=t.appInfo,this.appId=t.appId,this.appLink=t.interactUrl+"?session="+this.page_sessionid+"&appId="+this.appid+"&udid="+this.page_udid}}}}).call(this,s(17))}}]);
//# sourceMappingURL=5.06ad8c077f7f3c4483aa.js.map