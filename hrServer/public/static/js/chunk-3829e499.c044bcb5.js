(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3829e499"],{"0b04":function(e,t,a){},a912:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"f",(function(){return i})),a.d(t,"g",(function(){return c})),a.d(t,"j",(function(){return o})),a.d(t,"c",(function(){return r})),a.d(t,"d",(function(){return l})),a.d(t,"a",(function(){return u})),a.d(t,"e",(function(){return d})),a.d(t,"k",(function(){return p}));a("99af");var n=a("b775");function s(e){return Object(n["a"])({url:"/user/process/instance/".concat(e.page,"/").concat(e.pageSize),method:"put",data:e})}function i(e){return Object(n["a"])({url:"/user/process/instance/getById/".concat(e)})}function c(e){return Object(n["a"])({url:"/approvals/flows/".concat(e)})}function o(e){return Object(n["a"])({url:"/approvals/setting",method:"put",data:e})}function r(e){return Object(n["a"])({url:"/user/process/instance/".concat(e)})}function l(e){return Object(n["a"])({url:"/user/process/instance/tasks/".concat(e)})}function u(e){return Object(n["a"])({url:"//user/process/buss/showBussImgById/".concat(e)})}function d(e){return Object(n["a"])({url:"/user/process/definition",params:e})}function p(e){return Object(n["a"])({url:"/user/process/suspend/".concat(e.processKey),params:e})}},b22d:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"securitySetting"},[t("div",{staticClass:"settingList"},[t("div",{staticClass:"set"},[t("span",[e._v("请假")]),t("span",[t("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":e.inactiveColor},on:{change:function(t){return e.handleChange(e.levelData,t)}},model:{value:e.levelData.enable,callback:function(t){e.$set(e.levelData,"enable",t)},expression:"levelData.enable"}})],1),t("i",{staticClass:"el-icon-setting",on:{click:function(t){return e.setFlow("regular")}}})]),t("div",{staticClass:"set"},[t("span",[e._v("加班")]),t("span",[t("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":e.inactiveColor},on:{change:function(t){return e.handleChange(e.overtimeData,t)}},model:{value:e.overtimeData.enable,callback:function(t){e.$set(e.overtimeData,"enable",t)},expression:"overtimeData.enable"}})],1),t("i",{staticClass:"el-icon-setting",on:{click:function(t){return e.setFlow("regular")}}})]),t("div",{staticClass:"set"},[t("span",[e._v("离职")]),t("span",[t("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":e.inactiveColor},on:{change:function(t){return e.handleChange(e.dimissionData,t)}},model:{value:e.dimissionData.enable,callback:function(t){e.$set(e.dimissionData,"enable",t)},expression:"dimissionData.enable"}})],1),t("i",{staticClass:"el-icon-setting",on:{click:function(t){return e.setFlow("regular")}}})])]),t("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("span",{staticStyle:{"text-align":"center"}},[t("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"/api/user/process/deploy",headers:e.myheader,"before-upload":e.beforeUpload,"on-error":e.uploadFail,"on-success":e.handleFileSuccess,"show-file-list":!1,"file-list":e.fileList}},[t("i",{staticClass:"el-icon-upload"}),t("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处")])])],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)])],1)},s=[],i=a("c7eb"),c=a("5530"),o=a("1da1"),r=(a("d81d"),a("a912")),l=a("5f87"),u={name:"UsersTableIndex",components:{},data:function(){return{requestData:{},activeColor:"#13ce66",inactiveColor:"#ccc",dialogVisible:!1,processing:!1,uploadTip:"点击上传",fileList:[],dataBase:[],levelData:{enable:!1},overtimeData:{enable:!1},dimissionData:{enable:!1}}},computed:{myheader:function(){return{Authorization:"Bearer ".concat(Object(l["a"])())}}},created:function(){this.getFlowList()},methods:{getFlowList:function(){var e=this;return Object(o["a"])(Object(i["a"])().mark((function t(){var a;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(r["e"])();case 2:a=t.sent,a.map((function(t){var a=Object(c["a"])(Object(c["a"])({},t),{},{enable:2!==t.persistentState.suspensionState});"process_leave"===a.key?e.levelData=a:"process_dimission"===a.key?e.dimissionData=a:e.overtimeData=a}));case 4:case"end":return t.stop()}}),t)})))()},handleChange:function(e,t){if(e.key){var a={processKey:e.key,enable:t};Object(r["k"])(a)}else this.$message.error("还未上传流程")},changeSet:function(){var e=this;return Object(o["a"])(Object(i["a"])().mark((function t(){return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(r["j"])(e.requestData);case 2:e.$message.success("设置保存成功！");case 3:case"end":return t.stop()}}),t)})))()},setFlow:function(e){this.dialogVisible=!0},typeTip:function(e){this.$message.error(e)},beforeUpload:function(e,t){},uploadFail:function(e,t,a){this.uploadTip="点击上传",this.processing=!1,this.$message.error(e)},handleFileSuccess:function(e,t,a){this.uploadTip="点击上传",this.processing=!1,this.dialogImportVisible=!1,99999===e.code?this.$message.error("导入失败!"):(this.$message.success("导入成功!"),this.$router.back(-1))}}},d=u,p=(a("faef"),a("2877")),f=Object(p["a"])(d,n,s,!1,null,"05747c62",null);t["default"]=f.exports},faef:function(e,t,a){"use strict";a("0b04")}}]);