(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e49cb70"],{"2efc":function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"f",(function(){return o})),n.d(e,"e",(function(){return l})),n.d(e,"i",(function(){return i})),n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return c})),n.d(e,"g",(function(){return u})),n.d(e,"b",(function(){return m})),n.d(e,"h",(function(){return d}));var s=n("b775");function a(t){return Object(s["a"])({url:"/sys/user",params:t})}function o(t){return Object(s["a"])({url:"/salarys/tips/".concat(t)})}function l(){return Object(s["a"])({url:"/salarys/settings"})}function i(t){return Object(s["a"])({url:"/salarys/settings",method:"post",data:t})}function r(t){return Object(s["a"])({url:"/salarys/modify/".concat(t)})}function c(t){return Object(s["a"])({url:"/salarys/modify/".concat(t.userId),method:"post",data:t})}function u(t){return Object(s["a"])({url:"/salarys/init/".concat(t.userId),method:"post",data:t})}function m(t){return Object(s["a"])({url:"/salarys/reports/".concat(t.yearMonth),params:t})}function d(t){return Object(s["a"])({url:"/salarys/reports/".concat(t.yearMonth,"/newReport"),method:"put",data:t})}},3821:function(t,e,n){},9267:function(t,e,n){"use strict";n.r(e);n("b0c0");var s=function(){var t=this,e=t._self._c;return e("el-card",{staticClass:"settingContent"},[e("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"计薪设置",name:"first"}},[e("el-form",{attrs:{"label-position":t.labelPosition,"label-width":"140px",model:t.sendForm}},[e("el-form-item",{attrs:{label:"对应社保自然月"}},[e("el-select",{staticStyle:{width:"280px"},model:{value:t.sendForm.socialSecurityType,callback:function(e){t.$set(t.sendForm,"socialSecurityType",e)},expression:"sendForm.socialSecurityType"}},[e("el-option",{attrs:{label:"当月",value:1}}),e("el-option",{attrs:{label:"次月",value:2}})],1),e("el-tooltip",{attrs:{content:"如果201606月工资中扣除2016年6月自然月的社保公积金，请选择当月；如果扣除2016年7月自然月的社保公积金，请选择次月。",placement:"top"}},[e("i",{staticClass:"el-icon-bell"})])],1),e("el-form-item",{staticStyle:{width:"450px"},attrs:{label:"社保数据来源"}},[e("el-input",{staticStyle:{width:"280px"},attrs:{placeholder:"社保模块",disabled:!0}}),e("el-tooltip",{attrs:{content:"计算工资时的五险一金金额将取自社保报表",placement:"top"}},[e("i",{staticClass:"el-icon-bell"})])],1),e("el-form-item",{staticStyle:{width:"450px"},attrs:{label:"考勤数据来源"}},[e("el-input",{staticStyle:{width:"280px"},attrs:{placeholder:"考勤模块",disabled:!0}}),e("el-tooltip",{attrs:{content:"计算工资时的考勤数据将取自考勤统计表",placement:"top"}},[e("i",{staticClass:"el-icon-bell"})])],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm()}}},[t._v("提交")]),e("el-button",{on:{click:function(e){return t.resetForm()}}},[t._v("重置")])],1)],1)],1),e("el-tab-pane",{attrs:{label:"津贴设置",name:"second"}},[e("el-form",{ref:"sendForm",staticClass:"demo-ruleForm",attrs:{model:t.sendForm,"status-icon":"","label-width":"100px"}},[e("el-form-item",{attrs:{label:"通用方案",prop:"pass"}},[e("el-input",{staticStyle:{width:"400px"},attrs:{autocomplete:"off"},model:{value:t.sendForm.subsidyName,callback:function(e){t.$set(t.sendForm,"subsidyName",e)},expression:"sendForm.subsidyName"}})],1),e("el-form-item",{attrs:{label:"备注",prop:"checkPass"}},[e("el-input",{staticStyle:{width:"400px"},attrs:{value:"适用于全体",autocomplete:"off"},model:{value:t.sendForm.subsidyRemark,callback:function(e){t.$set(t.sendForm,"subsidyRemark",e)},expression:"sendForm.subsidyRemark"}})],1),e("el-form-item",{staticClass:"nameList",attrs:{label:"津贴名称",prop:"age"}},[e("p",[e("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"交通补贴"}}),e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.sendForm.transportationSubsidyScheme,callback:function(e){t.$set(t.sendForm,"transportationSubsidyScheme",e)},expression:"sendForm.transportationSubsidyScheme"}},t._l(t.subsidySchemes,(function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1),e("el-tooltip",{attrs:{content:t.text,placement:"top"}},[e("i",{staticClass:"el-icon-bell"})]),e("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入内容"},model:{value:t.sendForm.transportationSubsidyAmount,callback:function(e){t.$set(t.sendForm,"transportationSubsidyAmount",e)},expression:"sendForm.transportationSubsidyAmount"}})],1),e("p",[e("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"通讯补贴"}}),e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.sendForm.communicationSubsidyScheme,callback:function(e){t.$set(t.sendForm,"communicationSubsidyScheme",e)},expression:"sendForm.communicationSubsidyScheme"}},t._l(t.subsidySchemes,(function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1),e("el-tooltip",{attrs:{content:t.text,placement:"top"}},[e("i",{staticClass:"el-icon-bell"})]),t._v(" "),e("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入内容"},model:{value:t.sendForm.communicationSubsidyAmount,callback:function(e){t.$set(t.sendForm,"communicationSubsidyAmount",e)},expression:"sendForm.communicationSubsidyAmount"}})],1),e("p",[e("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"午餐补贴",disabled:!0}}),e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.sendForm.lunchAllowanceScheme,callback:function(e){t.$set(t.sendForm,"lunchAllowanceScheme",e)},expression:"sendForm.lunchAllowanceScheme"}},t._l(t.subsidySchemes,(function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1),e("el-tooltip",{attrs:{content:t.text,placement:"top"}},[e("i",{staticClass:"el-icon-bell"})]),t._v(" "),e("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入内容"},model:{value:t.sendForm.lunchAllowanceAmount,callback:function(e){t.$set(t.sendForm,"lunchAllowanceAmount",e)},expression:"sendForm.lunchAllowanceAmount"}})],1),e("p",[e("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"住房补助",disabled:!0}}),e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.sendForm.housingSubsidyScheme,callback:function(e){t.$set(t.sendForm,"housingSubsidyScheme",e)},expression:"sendForm.housingSubsidyScheme"}},t._l(t.subsidySchemes,(function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1),e("el-tooltip",{attrs:{content:t.text,placement:"top"}},[e("i",{staticClass:"el-icon-bell"})]),t._v(" "),e("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入内容"},model:{value:t.sendForm.housingSubsidyAmount,callback:function(e){t.$set(t.sendForm,"housingSubsidyAmount",e)},expression:"sendForm.housingSubsidyAmount"}})],1)]),e("el-form-item",{attrs:{label:"适用计税方式",prop:"age"}},[[e("el-radio",{attrs:{label:"1"},model:{value:t.sendForm.taxCalculationType,callback:function(e){t.$set(t.sendForm,"taxCalculationType",e)},expression:"sendForm.taxCalculationType"}},[t._v("税前")]),e("el-radio",{attrs:{label:"2"},model:{value:t.sendForm.taxCalculationType,callback:function(e){t.$set(t.sendForm,"taxCalculationType",e)},expression:"sendForm.taxCalculationType"}},[t._v("税后")])]],2),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("提交")]),e("el-button",{on:{click:t.resetForm}},[t._v("重置")])],1)],1)],1)],1)],1)},a=[],o=n("c7eb"),l=n("1da1"),i=n("2efc"),r={name:"UsersTableIndex",data:function(){return{labelPosition:"left",text:"每出勤日：金额*实际出勤天数； 每计薪日：金额*计薪天数； 每月固定：固定金额； 每月（按出勤日）：金额*实际出勤天数/应出勤工作日； 每月（按计薪日）：金额*计薪天数/计薪标准（如21.75）；",formLabelAlign:{name:"当月",region:"社保模块",type:"考勤模块"},activeName:"first",subsidySchemes:[{id:1,name:"每出勤日"},{id:3,name:"每月固定"}],sendForm:{socialSecurityType:1,transportationSubsidyScheme:1,communicationSubsidyScheme:1,lunchAllowanceScheme:1,housingSubsidyScheme:1,taxCalculationType:"1",transportationSubsidyAmount:2.1,communicationSubsidyAmount:1.2,lunchAllowanceAmount:1.3,housingSubsidyAmount:1.5}}},mounted:function(){this.getSettings()},methods:{getSettings:function(){var t=this;Object(i["e"])().then((function(e){t.sendForm=e}))},tabSwitch:function(t){this.tabLab=t},submitForm:function(){var t=this;return Object(l["a"])(Object(o["a"])().mark((function e(){return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["i"])(t.sendForm);case 2:t.$message({message:"保存成功",type:"success"});case 3:case"end":return e.stop()}}),e)})))()},resetForm:function(){this.$refs.sendForm.resetFields(),this.getSettings()}}},c=r,u=(n("9fe4"),n("2877")),m=Object(u["a"])(c,s,a,!1,null,"5b739a08",null);e["default"]=m.exports},"9fe4":function(t,e,n){"use strict";n("3821")}}]);