(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a690d15"],{5335:function(e,a,r){"use strict";r("67f7")},"67f7":function(e,a,r){},"9ed6":function(e,a,r){"use strict";r.r(a);var t=function(){var e=this,a=e._self._c;return a("div",{staticClass:"login-container"},[e._m(0),a("div",{staticClass:"main"},[a("img",{attrs:{src:"https://img.axureshop.com/7a/4a/a8/7a4aa826e79b40d086fba67fb100e0f9/images/0登陆页/u25.png",alt:""}}),a("el-card",{attrs:{shadow:"never"}},[a("div",{staticClass:"title"},[a("img",{attrs:{src:"https://img.axureshop.com/7a/4a/a8/7a4aa826e79b40d086fba67fb100e0f9/images/0登陆页/u24.png",alt:""}}),a("h2",[e._v("人力资源后台管理")])]),a("el-form",{ref:"loginForm",attrs:{model:e.loginForm,rules:e.loginRules}},[a("el-form-item",{attrs:{prop:"mobile"}},[a("el-input",{attrs:{placeholder:"请输入手机号"},scopedSlots:e._u([{key:"prefix",fn:function(){return[a("img",{attrs:{src:"https://img.axureshop.com/7a/4a/a8/7a4aa826e79b40d086fba67fb100e0f9/images/0登陆页/u13.png",alt:""}})]},proxy:!0}]),model:{value:e.loginForm.mobile,callback:function(a){e.$set(e.loginForm,"mobile",a)},expression:"loginForm.mobile"}})],1),a("el-form-item",{attrs:{prop:"password"}},[a("el-input",{attrs:{"show-password":"",placeholder:"请输入密码"},scopedSlots:e._u([{key:"prefix",fn:function(){return[a("img",{attrs:{src:"https://img.axureshop.com/7a/4a/a8/7a4aa826e79b40d086fba67fb100e0f9/images/0登陆页/u17.png",alt:""}})]},proxy:!0}]),model:{value:e.loginForm.password,callback:function(a){e.$set(e.loginForm,"password",a)},expression:"loginForm.password"}})],1),a("el-form-item",{attrs:{prop:"code"}},[a("el-input",{attrs:{placeholder:"请输入验证码"},scopedSlots:e._u([{key:"prefix",fn:function(){return[a("img",{attrs:{src:"https://img.axureshop.com/7a/4a/a8/7a4aa826e79b40d086fba67fb100e0f9/images/0登陆页/u21.png",alt:""}})]},proxy:!0},{key:"append",fn:function(){return[a("span",[e._v("1 2 7 4")])]},proxy:!0}]),model:{value:e.loginForm.code,callback:function(a){e.$set(e.loginForm,"code",a)},expression:"loginForm.code"}})],1),a("el-form-item",{attrs:{prop:"isAgree"}},[a("el-checkbox",{model:{value:e.loginForm.isAgree,callback:function(a){e.$set(e.loginForm,"isAgree",a)},expression:"loginForm.isAgree"}},[e._v("用户平台使用协议")])],1),a("el-form-item",[a("el-button",{staticClass:"login-btn",attrs:{type:"primary"},on:{click:e.loginClick}},[e._v("登录")])],1)],1)],1)],1)])},s=[function(){var e=this,a=e._self._c;return a("div",{staticClass:"bg-circle"},[a("img",{staticClass:"lt",attrs:{src:"https://img.axureshop.com/7a/4a/a8/7a4aa826e79b40d086fba67fb100e0f9/images/0登陆页/u3.png",alt:""}}),a("img",{staticClass:"lb",attrs:{src:"https://img.axureshop.com/7a/4a/a8/7a4aa826e79b40d086fba67fb100e0f9/images/0登陆页/u5.png",alt:""}}),a("img",{staticClass:"rt",attrs:{src:"https://img.axureshop.com/7a/4a/a8/7a4aa826e79b40d086fba67fb100e0f9/images/0登陆页/u4.png",alt:""}})])}],o=r("c7eb"),i=r("1da1"),n=(r("d9e2"),r("14d9"),{name:"Login",data:function(){return{loginForm:{mobile:"",password:"",isAgree:!1,code:""},loginRules:{mobile:[{required:!0,message:"手机号不能为空",trigger:"blur"},{pattern:/^1[3-9]\d{9}$/,message:"手机号格式不正确",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:6,max:16,message:"密码长度6-16位",trigger:"blur"}],isAgree:[{validator:function(e,a,r){a?r():r(new Error("未勾选用户协议"))}}],code:[{required:!0,message:"验证码不能为空",trigger:"blur"},{pattern:/^\d{4}$/,message:"验证码是四位数字",trigger:"blur"}]}}},methods:{loginClick:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function a(){var r;return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$refs.loginForm.validate();case 2:if(r=a.sent,!r){a.next=7;break}return a.next=6,e.$store.dispatch("user/login",e.loginForm);case 6:e.$router.push("/");case 7:case"end":return a.stop()}}),a)})))()}}}),l=n,c=(r("5335"),r("2877")),m=Object(c["a"])(l,t,s,!1,null,"bfb0f1dc",null);a["default"]=m.exports}}]);