(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{2:function(t,e){},"2WEc":function(t,e,a){},"9h9Y":function(t,e){t.exports={chunkMode:!0,callApi:!0,root:"",mockHost:"https://www.easy-mock.com/mock/5a38ab6ae859572ed685340b/api",host:""}},FjRH:function(t,e,a){"use strict";a.r(e);a("2WEc");var n=a("G3lB").a,s=a("CY73"),o=Object(s.a)(n,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"invite-content"},[a("div",{staticClass:"invite-container"},[a("h4",[t._v("方式一：")]),t._v(" "),a("p",[t._v("已入驻基地的用户均可获得邀请码")]),t._v(" "),a("p",[t._v("多关注下身边好友以及基地用户活跃群，进行寻求。")]),t._v(" "),a("h4",[t._v("方式二：")]),t._v(" "),a("p",[t._v("关注微信公众号：星云基地")]),t._v(" "),a("p",[t._v("我们将不定期开放邀请码发放活动，敬请关注。")])])])}],!1,null,null,null).exports;e.default=o},G3lB:function(t,e,a){"use strict";(function(t){a("dRp0"),a("Nlzp");var n=a("ygAv");e.a={name:"Invite",data:function(){return{url:"",page_sessionid:"",page_udid:"",page_appid:""}},computed:{},created:function(){this.setInitParams()},methods:{setInitParams:function(){var t=this.$route.query;this.url=Object(n.b)(t).url,this.page_sessionid=Object(n.b)(t).page_sessionid,this.page_udid=Object(n.b)(t).page_udid,this.page_appid=Object(n.b)(t).page_appid},getData:function(){var e=this;t.ajax({url:e.url,dataType:"jsonp",jsonpCallback:"jsonp_"+e.page_sessionid.slice(0,8),data:{r:"task/app-web-list",session:e.page_sessionid,platform:"ios"},success:function(t){0===t.state.code&&(e.dataSource=t,e.render_html())}})}}}}).call(this,a("pgrL"))},Nlzp:function(t,e){var a="production";console.log("config="+a);var n={API_DAtestTA_getPrem:"/promote/standard/getPrem.json",test1:"/test1.json"};t.exports=n},dRp0:function(t,e,a){"use strict";a.d(e,"a",function(){return p});var n=a("Asgo"),s=a.n(n),o=a("mfXL"),i=a("g1LA"),r=a("9h9Y"),c=a.n(r);o.a.use(i.a),o.a.http.options.emulateJSON=!1,o.a.http.options.emulateHTTP=!0;var p=function(t){var e=o.a.http,a=t.url,n=t.data;return e.get(c.a.callApi?""+c.a.host+a:""+c.a.mockHost+a,{params:n}).then(function(t){var e=t.data;return s.a.resolve(e)}).catch(function(t){return console.log("request get error:"),console.log(t),s.a.reject(t)})}}}]);