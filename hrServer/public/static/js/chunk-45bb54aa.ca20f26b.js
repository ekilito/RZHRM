(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45bb54aa"],{5994:function(e,r,o){"use strict";o("7962")},7962:function(e,r,o){},"9ed6":function(e,r,o){"use strict";o.r(r);var t=function(){var e=this,r=e._self._c;return r("div",{staticClass:"login-container"},[r("div",{staticClass:"logo"}),r("div",{staticClass:"form"},[r("h1",[e._v("登录")]),r("el-card",{staticClass:"login-card",attrs:{shadow:"never"}},[r("el-form",{ref:"form",attrs:{model:e.loginForm,rules:e.loginRules}},[r("el-form-item",{attrs:{prop:"mobile"}},[r("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.loginForm.mobile,callback:function(r){e.$set(e.loginForm,"mobile",r)},expression:"loginForm.mobile"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{"show-password":"",placeholder:"请输入密码"},model:{value:e.loginForm.password,callback:function(r){e.$set(e.loginForm,"password",r)},expression:"loginForm.password"}})],1),r("el-form-item",{attrs:{prop:"isAgree"}},[r("el-checkbox",{model:{value:e.loginForm.isAgree,callback:function(r){e.$set(e.loginForm,"isAgree",r)},expression:"loginForm.isAgree"}},[e._v(" 用户平台使用协议 ")])],1),r("el-form-item",[r("el-button",{staticStyle:{width:"350px"},attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")])],1)],1)],1)],1)])},i=[],s=o("c7eb"),n=o("1da1"),l=(o("d9e2"),o("14d9"),{name:"Login",data:function(){return{loginForm:{mobile:"",password:"",isAgree:!1},loginRules:{mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{pattern:/^1[3-9]\d{9}$/,message:"手机号格式不正确",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:16,message:"密码长度应该为6-16位之间",trigger:"blur"}],isAgree:[{validator:function(e,r,o){r?o():o(new Error("您必须勾选用户的使用协议"))}}]}}},methods:{login:function(){var e=this;this.$refs.form.validate(function(){var r=Object(n["a"])(Object(s["a"])().mark((function r(o){return Object(s["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!o){r.next=4;break}return r.next=3,e.$store.dispatch("user/login",e.loginForm);case 3:e.$router.push("/");case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}}}),a=l,c=(o("5994"),o("2877")),u=Object(c["a"])(a,t,i,!1,null,null,null);r["default"]=u.exports}}]);