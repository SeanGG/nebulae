(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{2:function(t,e){},"9h9Y":function(t,e){t.exports={chunkMode:!0,callApi:!0,root:"",mockHost:"https://www.easy-mock.com/mock/5a38ab6ae859572ed685340b/api",host:""}},BOzI:function(t,e,o){"use strict";o.r(e);o("dRp0"),o("Nlzp");var a={name:"Prd",data:function(){return{header:{name:"盒子",desc:"盒子应用&功能入口集合"},userAgent:"当前环境计算中...",apiList:[{gridName:"页面列表",gridList:[{name:"商品列表页",key:"prdList",desc:"商城商品列表页"},{name:"商品详情页",key:"prd",desc:"商城商品详情页"}]}]}},computed:{},created:function(){this.$parent.header=this.header},methods:{goPage:function(t){this.$router.push({name:t})}}},s=(o("bNDy"),o("CY73")),n=Object(s.a)(a,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"content"},[o("main",t._l(t.apiList,function(e,a){return o("section",{key:a},[o("section",{staticClass:"h2"},[t._v(t._s(e.gridName))]),t._v(" "),o("ul",{staticClass:"api-list"},t._l(e.gridList,function(e,a){return o("li",{key:a},[o("section",{staticClass:"api-cell",attrs:{"data-key":e.key},on:{click:t.goPage}},[o("section",{staticClass:"api-btn"},[t._v(t._s(e.name))]),t._v(" "),o("section",{staticClass:"api-desc"},[t._v(t._s(e.desc))])])])}))])}))])},[],!1,null,"0fecda3e",null).exports;e.default=n},Nlzp:function(t,e,o){var a=o("rOcY"),s=(a.dev.proxyTable["/ngc"].target,a.dev.proxyTable["/test"].target);console.log(s);var n="production";console.log("config="+n);var r={API_DAtestTA_getPrem:s+"/promote/standard/getPrem.json",test1:s+"/test1.json",goodsList:s+"/goods/list"};t.exports=r},bNDy:function(t,e,o){"use strict";var a=o("dJ2U");o.n(a).a},dJ2U:function(t,e,o){},dRp0:function(t,e,o){"use strict";o.d(e,"a",function(){return l}),o.d(e,"b",function(){return d});var a=o("6ZY3"),s=o.n(a),n=o("Asgo"),r=o.n(n),c=o("mfXL"),i=o("g1LA"),u=o("9h9Y"),p=o.n(u);c.a.use(i.a),c.a.http.options.emulateJSON=!1,c.a.http.options.emulateHTTP=!0;var l=function(t){var e=c.a.http,o=t.url,a=t.data;return e.get(p.a.callApi?""+p.a.host+o:""+p.a.mockHost+o,{params:a}).then(function(t){var e=t.data;return r.a.resolve(e)}).catch(function(t){return console.log("request get error:"),console.log(t),r.a.reject(t)})},d=function(t){var e=c.a.http,o=t.url,a=t.data;return t.emulateJSON&&(e.options.emulateJSON=t.emulateJSON),e.headers.post=s()({},e.headers.post,t.headers),e.post(p.a.callApi?""+p.a.host+o:""+p.a.mockHost+o,a).then(function(t){var e=t.data;return r.a.resolve(e)}).catch(function(t){return console.log("request post error:"),console.log(t),r.a.reject(t)})}},h6FY:function(t,e){t.exports={NODE_ENV:'"production"'}},nV6j:function(t,e,o){var a=o("hCNL"),s=o("h6FY");t.exports=a(s,{NODE_ENV:'"development"'})},rOcY:function(t,e,o){(function(e){var a=o("1N+A");t.exports={build:{env:o("h6FY"),index:a.resolve(e,"../dist/index.html"),assetsRoot:a.resolve(e,"../dist"),assetsSubDirectory:"static",assetsPublicPath:"./",productionSourceMap:!1,productionGzip:!1,productionGzipExtensions:["js","css"],bundleAnalyzerReport:Object({NODE_ENV:"production"}).npm_config_report},dev:{env:o("nV6j"),port:8081,autoOpenBrowser:!0,assetsSubDirectory:"static",assetsPublicPath:"/",proxyTable:{"/mock":{target:"https://www.easy-mock.com/mock/5b2b7cf09bd86a040ba4cba3",changeOrigin:!0,pathRewrite:{"^/mock":""}},"/test":{target:"http://122.11.58.232:8003",changeOrigin:!0,pathRewrite:{"^/test":""}},"/ngc":{target:"https://ngc.ztgame.com/",changeOrigin:!0,pathRewrite:{"^/ngc":""}}},cssSourceMap:!1}}}).call(this,"/")}}]);