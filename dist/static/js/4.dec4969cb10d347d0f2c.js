(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{2:function(t,e){},"9h9Y":function(t,e){t.exports={chunkMode:!0,callApi:!0,root:"",mockHost:"https://www.easy-mock.com/mock/5a38ab6ae859572ed685340b/api",host:""}},BOzI:function(t,e,o){"use strict";o.r(e);o("dRp0"),o("Nlzp");var a={name:"Prd",data:function(){return{header:{name:"盒子",desc:"盒子应用&功能入口集合"},userAgent:"当前环境计算中...",apiList:[{gridName:"页面列表",gridList:[{name:"商品列表页",key:"prdList",desc:"商城商品列表页"},{name:"商品详情页",key:"prd",desc:"商城商品详情页"}]}]}},computed:{},created:function(){this.$parent.header=this.header},methods:{goPage:function(t){this.$router.push({name:t})}}},r=(o("bNDy"),o("CY73")),n=Object(r.a)(a,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"content"},[o("main",t._l(t.apiList,function(e,a){return o("section",{key:a},[o("section",{staticClass:"h2"},[t._v(t._s(e.gridName))]),t._v(" "),o("ul",{staticClass:"api-list"},t._l(e.gridList,function(e,a){return o("li",{key:a},[o("section",{staticClass:"api-cell",attrs:{"data-key":e.key},on:{click:t.goPage}},[o("section",{staticClass:"api-btn"},[t._v(t._s(e.name))]),t._v(" "),o("section",{staticClass:"api-desc"},[t._v(t._s(e.desc))])])])}))])}))])},[],!1,null,"0fecda3e",null).exports;e.default=n},Nlzp:function(t,e,o){var a=o("rOcY"),r=(a.dev.proxyTable["/pro"].target,a.dev.proxyTable["/dev"].target),n=(a.dev.proxyTable["/mock"].target,"production");console.log("config="+n);var s={API_DAtestTA_getPrem:r+"/promote/standard/getPrem.json",test1:r+"/test1.json",goodsList:r+"/goods/list",createOrder:r+"/order/create"};t.exports=s},bNDy:function(t,e,o){"use strict";var a=o("zfLU");o.n(a).a},dRp0:function(t,e,o){"use strict";o.d(e,"a",function(){return d}),o.d(e,"b",function(){return l});var a=o("6ZY3"),r=o.n(a),n=o("Asgo"),s=o.n(n),c=o("mfXL"),i=o("g1LA"),u=o("9h9Y"),p=o.n(u);c.a.use(i.a),c.a.http.options.emulateJSON=!1,c.a.http.options.emulateHTTP=!0;var d=function(t){var e=c.a.http,o=t.url,a=t.data;return e.get(p.a.callApi?""+p.a.host+o:""+p.a.mockHost+o,{params:a}).then(function(t){var e=t.data;return s.a.resolve(e)}).catch(function(t){return console.log("request get error:"),console.log(t),s.a.reject(t)})},l=function(t){var e=c.a.http,o=t.url,a=t.data;return t.emulateJSON&&(e.options.emulateJSON=t.emulateJSON),e.headers.post=r()({},e.headers.post,t.headers),e.post(p.a.callApi?""+p.a.host+o:""+p.a.mockHost+o,a).then(function(t){var e=t.data;return s.a.resolve(e)}).catch(function(t){return console.log("request post error:"),console.log(t),s.a.reject(t)})}},h6FY:function(t,e){t.exports={NODE_ENV:'"production"'}},nV6j:function(t,e,o){var a=o("hCNL"),r=o("h6FY");t.exports=a(r,{NODE_ENV:'"development"'})},rOcY:function(t,e,o){(function(e){var a=o("1N+A");t.exports={build:{env:o("h6FY"),index:a.resolve(e,"../dist/index.html"),assetsRoot:a.resolve(e,"../dist"),assetsSubDirectory:"static",assetsPublicPath:"./",productionSourceMap:!1,productionGzip:!1,productionGzipExtensions:["js","css"],bundleAnalyzerReport:Object({NODE_ENV:"production"}).npm_config_report,remUnit:24},dev:{env:o("nV6j"),port:8081,autoOpenBrowser:!0,assetsSubDirectory:"static",assetsPublicPath:"/",proxyTable:{"/mock":{target:"https://www.easy-mock.com/mock/5b2b7cf09bd86a040ba4cba3",changeOrigin:!0,pathRewrite:{"^/mock":""}},"/dev":{target:"http://122.11.58.232:8003",changeOrigin:!0,pathRewrite:{"^/dev":""}},"/pro":{target:"https://ngc.ztgame.com",changeOrigin:!0,pathRewrite:{"^/pro":""}}},cssSourceMap:!1,remUnit:24}}}).call(this,"/")},zfLU:function(t,e,o){}}]);