(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04dcde5a"],{"616f":function(t,n,a){t.exports=a.p+"static/img/img.0615818f.jpeg"},a912:function(t,n,a){"use strict";a.d(n,"b",(function(){return s})),a.d(n,"f",(function(){return r})),a.d(n,"g",(function(){return c})),a.d(n,"j",(function(){return i})),a.d(n,"c",(function(){return o})),a.d(n,"d",(function(){return u})),a.d(n,"a",(function(){return p})),a.d(n,"e",(function(){return d})),a.d(n,"k",(function(){return f}));a("99af");var e=a("b775");function s(t){return Object(e["a"])({url:"/user/process/instance/".concat(t.page,"/").concat(t.pageSize),method:"put",data:t})}function r(t){return Object(e["a"])({url:"/user/process/instance/getById/".concat(t)})}function c(t){return Object(e["a"])({url:"/approvals/flows/".concat(t)})}function i(t){return Object(e["a"])({url:"/approvals/setting",method:"put",data:t})}function o(t){return Object(e["a"])({url:"/user/process/instance/".concat(t)})}function u(t){return Object(e["a"])({url:"/user/process/instance/tasks/".concat(t)})}function p(t){return Object(e["a"])({url:"//user/process/buss/showBussImgById/".concat(t)})}function d(t){return Object(e["a"])({url:"/user/process/definition",params:t})}function f(t){return Object(e["a"])({url:"/user/process/suspend/".concat(t.processKey),params:t})}},c7b9:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t._self._c;return n("div",{staticClass:"quitApproval"},[n("div",{staticClass:"contLeft"},[n("div",{staticClass:"topTit"},[n("img",{attrs:{src:a("616f"),alt:""}}),n("div",{staticClass:"info"},[n("p",{staticClass:"name"},[n("strong",[t._v(t._s(t.information.username))])]),n("p",[n("span",[t._v("部门："+t._s(t.information.departmentName))])]),n("p",[n("span",[t._v("入职时间： "+t._s(t._f("formatDate")(t.information.timeOfEntry)))])])])]),n("div",{staticClass:"content"},[t._m(0),n("p",[n("span",[t._v("加班开始时间：")]),t._v(" "+t._s(t._f("formatDate")(t.information.data.start_time))+" ")]),n("p",[n("span",[t._v("加班结束时间：")]),t._v(" "+t._s(t._f("formatDate")(t.information.data.end_time))+" ")]),n("p",[n("span",[t._v("申请原因：")]),t._v(" "+t._s(t.information.data.reason)+" ")])])]),n("div",{staticClass:"contRit"},[t._m(1),n("div",{staticClass:"Items"},t._l(t.taskInstanceOutList,(function(a,e){return n("li",{key:e},[n("div",{staticClass:"name",style:e==t.taskInstanceOutList.length-1?"border-right:none":""},[n("p",[t._v(t._s(t._f("formatDate")(a.handleTime)))])]),n("div",{staticClass:"act"},[n("strong",[t._v(t._s(a.handleUserName))]),0==e?n("span",[t._v("发起申请")]):"3"==a.handleType?n("span",[t._v("审批驳回")]):"4"==a.handleType?n("span",[t._v("已撤销")]):"1"==a.handleType?n("span",[t._v("未开始")]):"2"==a.handleType?n("span",[t._v("审批通过")]):n("span",[t._v("审批中")])])])})),0)])])},s=[function(){var t=this,n=t._self._c;return n("p",[n("span",[t._v("补偿方式：")]),t._v(" 调休 ")])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"topTit"},[n("strong",[t._v("审批记录")])])}],r=a("c7eb"),c=a("1da1"),i=(a("313d"),a("0eb6"),a("b7ef"),a("8bd4"),a("13d5"),a("d3b7"),a("ace4"),a("5cc6"),a("907a"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("986a"),a("1d02"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("1b3b"),a("3d71"),a("c6e3"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),a("a912")),o={name:"UsersTableIndex",data:function(){return{approvalId:this.$route.params.id,information:{data:{}},taskInstanceOutList:[],imgs:""}},created:function(){this.getApprovalsDetail(),this.getApprovalsTaskDetail()},methods:{getApprovalsDetail:function(){var t=this;return Object(c["a"])(Object(r["a"])().mark((function n(){return Object(r["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(i["c"])(t.approvalId);case 2:t.information=n.sent,t.information.data=JSON.parse(t.information.procData);case 4:case"end":return n.stop()}}),n)})))()},getApprovalsTaskDetail:function(){var t=this;return Object(c["a"])(Object(r["a"])().mark((function n(){return Object(r["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(i["d"])(t.approvalId);case 2:t.taskInstanceOutList=n.sent;case 3:case"end":return n.stop()}}),n)})))()},getReviewHistory:function(t){var n=this;return Object(c["a"])(Object(r["a"])().mark((function a(){var e;return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(i["a"])(t);case 2:e=a.sent,n.imgs="data:image/png;base64,"+btoa(new Uint8Array(e.request.response).reduce((function(t,n){return t+String.fromCharCode(n)}),""));case 4:case"end":return a.stop()}}),a)})))()},imgHandle:function(t){return window.URL.createObjectURL(t)}}},u=o,p=a("2877"),d=Object(p["a"])(u,e,s,!1,null,null,null);n["default"]=d.exports}}]);