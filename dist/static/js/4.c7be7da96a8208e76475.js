(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{2:function(t,e){},"9h9Y":function(t,e){t.exports={chunkMode:!0,callApi:!0,root:"",mockHost:"https://www.easy-mock.com/mock/5a38ab6ae859572ed685340b/api",host:""}},"Ba4/":function(t,e,n){},Nlzp:function(t,e){var n="production";console.log("config="+n);var o={API_DAtestTA_getPrem:"/promote/standard/getPrem.json",test1:"/test1.json"};t.exports=o},"V/u4":function(t,e,n){"use strict";n.r(e);n("Ba4/"),n("dRp0"),n("Nlzp"),n("ygAv");var o={name:"Nofound",data:function(){return{url:"",page_sessionid:"",page_udid:""}},computed:{},created:function(){},methods:{}},a=n("CY73"),s=Object(a.a)(o,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-404"},[e("div",{staticClass:"bg-404"})])}],!1,null,null,null).exports;e.default=s},dRp0:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var o=n("Asgo"),a=n.n(o),s=n("mfXL"),r=n("g1LA"),c=n("9h9Y"),u=n.n(c);s.a.use(r.a),s.a.http.options.emulateJSON=!1,s.a.http.options.emulateHTTP=!0;var i=function(t){var e=s.a.http,n=t.url,o=t.data;return e.get(u.a.callApi?""+u.a.host+n:""+u.a.mockHost+n,{params:o}).then(function(t){var e=t.data;return a.a.resolve(e)}).catch(function(t){return console.log("request get error:"),console.log(t),a.a.reject(t)})}}}]);