(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b0b5218a"],{1401:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"h",(function(){return n})),a.d(e,"e",(function(){return o})),a.d(e,"a",(function(){return s})),a.d(e,"i",(function(){return p})),a.d(e,"d",(function(){return c})),a.d(e,"f",(function(){return u})),a.d(e,"g",(function(){return d}));a("99af");var l=a("b775");function r(t){return Object(l["a"])({url:"/social_securitys/historys/".concat(t.month),params:t})}function i(t){return Object(l["a"])({url:"/social_securitys/historys/".concat(t.year,"/list"),data:t})}function n(t){return Object(l["a"])({url:"/social_securitys/historys/".concat(t.yearMonth,"/newReport"),method:"put",data:t})}function o(t){return Object(l["a"])({url:"/social_securitys/historys/archiveDetail/".concat(t.userId,"/").concat(t.yearMonth),data:t})}function s(t){return Object(l["a"])({url:"/social_securitys/historys/".concat(t.yearMonth,"/archive"),method:"post",data:t})}function p(t){return Object(l["a"])({url:"/social_securitys/".concat(t.userId),method:"put",data:t})}function c(t){return Object(l["a"])({url:"/social_securitys/".concat(t)})}function u(t){return Object(l["a"])({url:"/social_securitys/payment_item/".concat(t)})}function d(){return Object(l["a"])({url:"/social_securitys/settings"})}},"7d33":function(t,e,a){},abc8:function(t,e,a){"use strict";a("7d33")},c555:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"historicalArcBox"},[e("div",{staticClass:"historicalArcTop"},[e("div",{staticClass:"title"},[e("span",[t._v("全公司")]),e("div",{staticClass:"yearChange"},[e("el-date-picker",{attrs:{"value-format":"yyyy",type:"year",size:"mini",width:"130px",placeholder:"选择年"},on:{change:t.changeYear},model:{value:t.yearVal,callback:function(e){t.yearVal=e},expression:"yearVal"}})],1)])]),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"historicalTable"},t._l(t.tableData,(function(a,l){return e("div",{key:l,staticClass:"itemes"},[e("div",{staticClass:"itemTopLab",class:{act:a.act}},[e("div",{staticClass:"lab",on:{click:function(e){return t.openTable(a,l)}}},[t._v(" > ")]),e("div",[e("p",{staticClass:"title"},[t._v(t._s(a.month)+"社保报表 "),e("span",[t._v(t._s(a.creationTime))])]),e("p",{staticClass:"labTit",on:{click:function(e){return t.openTable(a,l)}}},[t._v("社保报表")])]),e("div",[t._m(0,!0),e("p",{staticClass:"itemNum"},[t._v(t._s(a.enterprisePayment))])]),e("div",[t._m(1,!0),e("p",{staticClass:"itemNum"},[t._v(t._s(a.personalPayment))])]),e("div",[t._m(2,!0),e("p",{staticClass:"itemNum"},[t._v(t._s(a.total))])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:a.act,expression:"itemes.act"}],staticClass:"itemDropDown"},[t._m(3,!0),e("el-table",{staticStyle:{width:"100%","text-align":"center"},attrs:{id:"item",data:a.contentData,height:"300",border:""}},[e("el-table-column",{attrs:{type:"index",label:"序号",center:"",width:"50"}}),e("el-table-column",{attrs:{prop:"username",label:"姓名",width:"150px"}}),e("el-table-column",{attrs:{prop:"timeOfEntry",formatter:t.transformDateFormat,label:"入职时间",width:"150px"}}),e("el-table-column",{attrs:{prop:"mobile",label:"手机号",width:"150px"}}),e("el-table-column",{attrs:{prop:"idNumber",label:"身份证号码",width:"150px"}}),e("el-table-column",{attrs:{prop:"theHighestDegreeOfEducation",label:"学历",width:"150px"}}),e("el-table-column",{attrs:{prop:"bankCardNumber",label:"开户行",width:"150px"}}),e("el-table-column",{attrs:{prop:"firstLevelDepartment",label:"一级部门",width:"150px"}}),e("el-table-column",{attrs:{prop:"twoLevelDepartment",label:"二级部门",width:"150px"}}),e("el-table-column",{attrs:{prop:"workingCity",label:"工作城市",width:"150px"}}),e("el-table-column",{attrs:{prop:"socialSecurityComputerNumber",label:"社保电脑号",width:"150px"}}),e("el-table-column",{attrs:{prop:"providentFundAccount",label:"公积金账号",width:"150px"}}),e("el-table-column",{attrs:{prop:"leaveDate",label:"离职时间",width:"150px"}}),e("el-table-column",{attrs:{prop:"householdRegistrationType",label:"户籍类型",width:"150px"}}),e("el-table-column",{attrs:{prop:"participatingInTheCity",label:"参保城市",width:"150px"}}),e("el-table-column",{attrs:{prop:"socialSecurityMonth",label:"社保月份",width:"150px"}}),e("el-table-column",{attrs:{prop:"socialSecurityBase",label:"社保基数",width:"150px"}}),e("el-table-column",{attrs:{prop:"socialSecurity",label:"社保合计",width:"150px"}}),e("el-table-column",{attrs:{prop:"socialSecurityEnterprise",label:"社保企业",width:"150px"}}),e("el-table-column",{attrs:{prop:"socialSecurityIndividual",label:"社保个人",width:"150px"}}),e("el-table-column",{attrs:{prop:"providentFundCity",label:"公积金城市",width:"150px"}}),e("el-table-column",{attrs:{prop:"providentFundMonth",label:"公积金月份",width:"150px"}}),e("el-table-column",{attrs:{prop:"providentFundBase",label:"公积金基数",width:"150px"}}),e("el-table-column",{attrs:{prop:"accumulationFundEnterpriseBase",label:"公积金企业基数",width:"150px"}}),e("el-table-column",{attrs:{prop:"proportionOfProvidentFundEnterprises",label:"公积金企业比例",width:"150px"}}),e("el-table-column",{attrs:{prop:"individualBaseOfProvidentFund",label:"公积金个人基数",width:"150px"}}),e("el-table-column",{attrs:{prop:"personalRatioOfProvidentFund",label:"公积金个人比例",width:"150px"}}),e("el-table-column",{attrs:{prop:"totalProvidentFund",label:"公积金合计",width:"150px"}}),e("el-table-column",{attrs:{prop:"providentFundEnterprises",label:"公积金企业",width:"150px"}}),e("el-table-column",{attrs:{prop:"providentFundIndividual",label:"公积金个人",width:"150px"}}),e("el-table-column",{attrs:{prop:"pensionEnterpriseBase",label:"养老企业基数",width:"150px"}}),e("el-table-column",{attrs:{prop:"proportionOfPensionEnterprises",label:"养老企业比例",width:"150px"}}),e("el-table-column",{attrs:{prop:"pensionEnterprise",label:"养老企业",width:"150px"}}),e("el-table-column",{attrs:{prop:"personalPensionBase",label:"养老个人基数",width:"150px"}}),e("el-table-column",{attrs:{prop:"personalPensionRatio",label:"养老个人比例",width:"150px"}}),e("el-table-column",{attrs:{prop:"oldAgeIndividual",label:"养老个人",width:"150px"}}),e("el-table-column",{attrs:{prop:"unemploymentEnterpriseBase",label:"失业企业基数",width:"150px"}}),e("el-table-column",{attrs:{prop:"proportionOfUnemployedEnterprises",label:"失业企业比例",width:"150px"}}),e("el-table-column",{attrs:{prop:"unemployedEnterprise",label:"失业企业",width:"150px"}}),e("el-table-column",{attrs:{prop:"theNumberOfUnemployedIndividuals",label:"失业个人基数",width:"150px"}}),e("el-table-column",{attrs:{prop:"percentageOfUnemployedIndividuals",label:"失业个人比例",width:"150px"}}),e("el-table-column",{attrs:{prop:"unemployedIndividual",label:"失业个人",width:"150px"}}),e("el-table-column",{attrs:{prop:"medicalEnterpriseBase",label:"医疗企业基数",width:"150px"}}),e("el-table-column",{attrs:{prop:"proportionOfMedicalEnterprises",label:"医疗企业比例",width:"150px"}}),e("el-table-column",{attrs:{prop:"medicalEnterprise",label:"医疗企业",width:"150px"}}),e("el-table-column",{attrs:{prop:"medicalPersonalBase",label:"医疗个人基数",width:"150px"}}),e("el-table-column",{attrs:{prop:"medicalPersonalRatio",label:"医疗个人比例",width:"150px"}}),e("el-table-column",{attrs:{prop:"medicalIndividual",label:"医疗个人",width:"150px"}}),e("el-table-column",{attrs:{prop:"baseOfIndustrialInjuryEnterprises",label:"工伤企业基数",width:"150px"}}),e("el-table-column",{attrs:{prop:"proportionOfIndustrialInjuryEnterprises",label:"工伤企业比例",width:"150px"}}),e("el-table-column",{attrs:{prop:"industrialInjuryEnterprise",label:"工伤企业",width:"150px"}}),e("el-table-column",{attrs:{prop:"fertilityEnterpriseBase",label:"生育企业基数",width:"150px"}}),e("el-table-column",{attrs:{prop:"proportionOfFertilityEnterprises",label:"生育企业比例",width:"150px"}}),e("el-table-column",{attrs:{prop:"childbearingEnterprise",label:"生育企业",width:"150px"}}),e("el-table-column",{attrs:{prop:"baseOfSeriousIllness",label:"大病企业基数",width:"150px"}}),e("el-table-column",{attrs:{prop:"proportionOfSeriouslyIllEnterprises",label:"大病企业比例",width:"150px"}}),e("el-table-column",{attrs:{prop:"bigDiseaseEnterprise",label:"大病企业",width:"150px"}}),e("el-table-column",{attrs:{prop:"personalBaseOfSeriousIllness",label:"大病个人基数",width:"150px"}}),e("el-table-column",{attrs:{prop:"personalProportionOfSeriousIllness",label:"大病个人比例",width:"150px"}}),e("el-table-column",{attrs:{prop:"aPersonOfGreatDisease",label:"大病个人",width:"150px"}}),e("el-table-column",{attrs:{prop:"providentFundNotes",label:"公积金备注",width:"150px"}}),e("el-table-column",{attrs:{prop:"socialSecurityNotes",label:"社保备注",width:"150px"}})],1)],1)])})),0)])},r=[function(){var t=this,e=t._self._c;return e("p",{staticClass:"itemTit"},[e("span",[t._v("企业缴纳")])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"itemTit"},[e("span",[t._v("个人缴纳")])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"itemTit"},[e("span",[t._v("合计")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"topLab"},[e("div",[e("span",{staticStyle:{"background-color":"#cfeffe"}}),t._v("已离职")]),e("div",[e("span",{staticStyle:{"background-color":"#a8f8bb"}}),t._v("再入职")]),e("div",[e("span",{staticStyle:{"background-color":"#fedbd7"}}),t._v("公司合计")]),e("div",[e("span",{staticStyle:{"background-color":"#ffe8c9"}}),t._v("一级部门")]),e("div",[e("span",{staticStyle:{"background-color":"#fdfcd5"}}),t._v("二级部门")]),e("div",{staticClass:"rightLabBox"},[e("a",{attrs:{href:"/"}},[e("i",{staticClass:"el-icon-search"})]),e("a",{attrs:{href:"/"}},[e("div",[t._v("导出")])])])])}],i=a("c7eb"),n=a("1da1"),o=a("1401"),s={name:"HistoricalArchiving",data:function(){return{loading:!1,num:0,yearVal:"2020",tableData:[]}},mounted:function(){this.getArchivingList()},methods:{getArchivingList:function(){var t=this;return Object(n["a"])(Object(i["a"])().mark((function e(){return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,Object(o["c"])({year:t.yearVal});case 3:t.tableData=e.sent,t.loading=!1;case 5:case"end":return e.stop()}}),e)})))()},openTable:function(t,e){var a=this;return Object(n["a"])(Object(i["a"])().mark((function l(){var r;return Object(i["a"])().wrap((function(l){while(1)switch(l.prev=l.next){case 0:if(t.act){l.next=9;break}return l.next=3,Object(o["b"])({month:t.yearsMonth,year:a.yearVal,opType:2});case 3:r=l.sent,a.$set(a.tableData[e],"contentData",r),a.loading=!1,a.$set(a.tableData[e],"act",!0),l.next=10;break;case 9:a.$set(a.tableData[e],"act",!1);case 10:case"end":return l.stop()}}),l)})))()},changeYear:function(){this.getArchivingList()}}},p=s,c=(a("abc8"),a("2877")),u=Object(c["a"])(p,l,r,!1,null,"55ad3ad6",null);e["default"]=u.exports}}]);