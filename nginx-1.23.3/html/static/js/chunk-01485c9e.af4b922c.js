(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01485c9e"],{1148:function(e,t,r){"use strict";var i=r("5926"),o=r("577e"),a=r("1d80"),n=RangeError;e.exports=function(e){var t=o(a(this)),r="",s=i(e);if(s<0||s==1/0)throw n("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(t+=t))1&s&&(r+=t);return r}},1401:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return a})),r.d(t,"h",(function(){return n})),r.d(t,"e",(function(){return s})),r.d(t,"a",(function(){return c})),r.d(t,"i",(function(){return u})),r.d(t,"d",(function(){return l})),r.d(t,"f",(function(){return m})),r.d(t,"g",(function(){return p}));r("99af");var i=r("b775");function o(e){return Object(i["a"])({url:"/social_securitys/historys/".concat(e.month),params:e})}function a(e){return Object(i["a"])({url:"/social_securitys/historys/".concat(e.year,"/list"),data:e})}function n(e){return Object(i["a"])({url:"/social_securitys/historys/".concat(e.yearMonth,"/newReport"),method:"put",data:e})}function s(e){return Object(i["a"])({url:"/social_securitys/historys/archiveDetail/".concat(e.userId,"/").concat(e.yearMonth),data:e})}function c(e){return Object(i["a"])({url:"/social_securitys/historys/".concat(e.yearMonth,"/archive"),method:"post",data:e})}function u(e){return Object(i["a"])({url:"/social_securitys/".concat(e.userId),method:"put",data:e})}function l(e){return Object(i["a"])({url:"/social_securitys/".concat(e)})}function m(e){return Object(i["a"])({url:"/social_securitys/payment_item/".concat(e)})}function p(){return Object(i["a"])({url:"/social_securitys/settings"})}},"417d":function(e,t,r){"use strict";r("abc2")},"495e":function(e,t,r){"use strict";r.r(t);r("b0c0");var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"detailBox"},[t("div",{staticClass:"detailTop"},[e._m(0),t("div",[t("b",[e._v(e._s(e.sizeForm.user.username))]),t("span",{class:e.dutyStatus?"job-txt-green":"job-txt-red"},[e._v(e._s(e.dutyStatusTxt))]),t("br"),t("p",[t("span",[e._v("最新工资基数 "+e._s(e.sizeForm.salaryBase)+" ")]),e._v("    "),t("span",[e._v("入职时间 "+e._s(e._f("formatDate")(e.sizeForm.user.timeOfEntry)))]),e._v("    "),t("span",[e._v("联系电话 "+e._s(e.sizeForm.user.mobile))])]),t("br"),t("p",[e._v(" 本月不缴纳社保 "),t("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.isPaySocialInMonth,callback:function(t){e.isPaySocialInMonth=t},expression:"isPaySocialInMonth"}}),e._v("   本月不缴纳公积金 "),t("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.isPayProvidentInMonth,callback:function(t){e.isPayProvidentInMonth=t},expression:"isPayProvidentInMonth"}})],1)])]),t("div",{staticClass:"detailContentBox"},[t("el-form",{ref:"sizeForm.userSocialSecurity",attrs:{model:e.sizeForm.userSocialSecurity,rules:e.rules,"label-width":"100px",size:"mini"}},[t("el-form-item",{attrs:{label:"参保城市",prop:"participatingInTheCity"}},[t("el-select",{attrs:{"value-key":"id",placeholder:"请选择参保城市"},on:{change:e.socialSecurityCityChange},model:{value:e.sizeForm.userSocialSecurity.participatingInTheCity,callback:function(t){e.$set(e.sizeForm.userSocialSecurity,"participatingInTheCity",t)},expression:"sizeForm.userSocialSecurity.participatingInTheCity"}},e._l(e.cityList,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e}})})),1)],1),t("el-form-item",{attrs:{label:"社保类型",prop:"socialSecurityType"}},[t("el-select",{attrs:{placeholder:"请选择社保类型"},model:{value:e.sizeForm.userSocialSecurity.socialSecurityType,callback:function(t){e.$set(e.sizeForm.userSocialSecurity,"socialSecurityType",t)},expression:"sizeForm.userSocialSecurity.socialSecurityType"}},[t("el-option",{attrs:{label:"首次开户",value:1}}),t("el-option",{attrs:{label:"非首次开户",value:2}})],1)],1),t("el-form-item",{attrs:{label:"户籍类型",prop:"householdRegistrationType"}},[t("el-select",{attrs:{placeholder:"请选择户籍类型"},model:{value:e.sizeForm.userSocialSecurity.householdRegistrationType,callback:function(t){e.$set(e.sizeForm.userSocialSecurity,"householdRegistrationType",t)},expression:"sizeForm.userSocialSecurity.householdRegistrationType"}},[t("el-option",{attrs:{label:"本市城镇",value:1}}),t("el-option",{attrs:{label:"本市农村",value:2}}),t("el-option",{attrs:{label:"外阜城镇",value:3}}),t("el-option",{attrs:{label:"外阜农村",value:4}})],1)],1),t("el-form-item",{attrs:{label:"社保基数",prop:"socialSecurityBase"}},[t("el-input",{staticStyle:{width:"38%"},attrs:{type:"number"},model:{value:e.sizeForm.userSocialSecurity.socialSecurityBase,callback:function(t){e.$set(e.sizeForm.userSocialSecurity,"socialSecurityBase",t)},expression:"sizeForm.userSocialSecurity.socialSecurityBase"}}),e._v("（基数范围是3387 ~ 25401） ")],1),t("el-form-item",{attrs:{label:"工伤比例",prop:"industrialInjuryRatio"}},[t("el-input",{staticStyle:{width:"38%"},attrs:{type:"number"},model:{value:e.sizeForm.userSocialSecurity.industrialInjuryRatio,callback:function(t){e.$set(e.sizeForm.userSocialSecurity,"industrialInjuryRatio",t)},expression:"sizeForm.userSocialSecurity.industrialInjuryRatio"}}),e._v("（比例范围是0.2％ ~ 3％，推荐0.2％） ")],1),t("el-form-item",{attrs:{label:"社保缴纳"}},[t("el-form-item",{staticStyle:{display:"inline-block"},attrs:{label:"个人","label-width":"74px"}},[t("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"个人",inline:"true",disabled:!0},model:{value:e.personalPayment,callback:function(t){e.personalPayment=t},expression:"personalPayment"}})],1),t("el-form-item",{staticStyle:{display:"inline-block"},attrs:{label:"公司","label-width":"74px"}},[t("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"企业",size:"small",inline:"true",disabled:!0},model:{value:e.companyPayment,callback:function(t){e.companyPayment=t},expression:"companyPayment"}})],1),t("el-table",{attrs:{data:e.computePaymentItemList}},[t("el-table-column",{attrs:{label:"缴费项目",prop:"name"}}),t("el-table-column",{attrs:{label:"企业基数"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("span",{directives:[{name:"show",rawName:"v-show",value:r.row.switchCompany,expression:"paymentItem.row.switchCompany"}]},[e._v(e._s(e.sizeForm.userSocialSecurity.socialSecurityBase))])]}}])}),t("el-table-column",{attrs:{label:"企业比例"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("span",{directives:[{name:"show",rawName:"v-show",value:r.row.switchCompany,expression:"paymentItem.row.switchCompany"}]},[e._v(e._s(r.row.scaleCompany)+"%")])]}}])}),t("el-table-column",{attrs:{label:"企业缴纳"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("el-input",{directives:[{name:"show",rawName:"v-show",value:r.row.switchCompany,expression:"paymentItem.row.switchCompany"}],attrs:{disabled:!0},model:{value:r.row.companyPay,callback:function(t){e.$set(r.row,"companyPay",t)},expression:"paymentItem.row.companyPay"}})]}}])}),t("el-table-column",{attrs:{label:"个人基数"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("span",{directives:[{name:"show",rawName:"v-show",value:r.row.switchPersonal,expression:"paymentItem.row.switchPersonal"}]},[e._v(e._s(e.sizeForm.socialSecurityBase))])]}}])}),t("el-table-column",{attrs:{label:"个人比例"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("span",{directives:[{name:"show",rawName:"v-show",value:r.row.switchPersonal,expression:"paymentItem.row.switchPersonal"}]},[e._v(e._s(r.row.scalePersonal)+"%")])]}}])}),t("el-table-column",{attrs:{label:"个人缴纳"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("el-input",{directives:[{name:"show",rawName:"v-show",value:r.row.switchPersonal,expression:"paymentItem.row.switchPersonal"}],attrs:{disabled:!0},model:{value:r.row.personalPay,callback:function(t){e.$set(r.row,"personalPay",t)},expression:"paymentItem.row.personalPay"}})]}}])})],1)],1),t("el-form-item",{attrs:{label:"社保备注"}},[t("el-input",{staticStyle:{width:"38%"},attrs:{type:"textarea",rows:2,placeholder:"1-300字符",maxlength:"300","show-word-limit":""},model:{value:e.sizeForm.userSocialSecurity.socialSecurityNotes,callback:function(t){e.$set(e.sizeForm.userSocialSecurity,"socialSecurityNotes",t)},expression:"sizeForm.userSocialSecurity.socialSecurityNotes"}})],1),t("el-form-item",{attrs:{label:"公积金城市",prop:"providentFundCity"}},[t("el-select",{attrs:{placeholder:"请选择公积金城市","value-key":"id"},model:{value:e.sizeForm.userSocialSecurity.providentFundCity,callback:function(t){e.$set(e.sizeForm.userSocialSecurity,"providentFundCity",t)},expression:"sizeForm.userSocialSecurity.providentFundCity"}},e._l(e.cityList,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e}})})),1)],1),t("el-form-item",{attrs:{label:"公积金基数",prop:"providentFundBase"}},[t("el-input",{staticStyle:{width:"38%"},attrs:{type:"number"},model:{value:e.sizeForm.userSocialSecurity.providentFundBase,callback:function(t){e.$set(e.sizeForm.userSocialSecurity,"providentFundBase",t)},expression:"sizeForm.userSocialSecurity.providentFundBase"}}),e._v("（基数范围是2273 ~ 25401） ")],1),t("el-form-item",{attrs:{label:"企业比例",prop:"enterpriseProportion"}},[t("el-input",{staticStyle:{width:"38%"},attrs:{placeholder:"12",type:"number"},model:{value:e.sizeForm.userSocialSecurity.enterpriseProportion,callback:function(t){e.$set(e.sizeForm.userSocialSecurity,"enterpriseProportion",t)},expression:"sizeForm.userSocialSecurity.enterpriseProportion"}}),e._v("（比例范围是5％ ~ 12％，推荐12％ ） ")],1),t("el-form-item",{attrs:{label:"个人比例",prop:"personalProportion"}},[t("el-input",{staticStyle:{width:"38%"},attrs:{placeholder:"12",type:"number"},model:{value:e.sizeForm.userSocialSecurity.personalProportion,callback:function(t){e.$set(e.sizeForm.userSocialSecurity,"personalProportion",t)},expression:"sizeForm.userSocialSecurity.personalProportion"}}),e._v("（比例范围是5％ ~ 12％，推荐12％ ） ")],1),t("el-form-item",{attrs:{label:"公积金缴纳"}},[t("el-form-item",{staticStyle:{display:"inline-block"},attrs:{label:"个人","label-width":"50px",prop:"personalProvidentFundPayment"}},[t("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"个人",inline:"true",type:"number"},model:{value:e.sizeForm.userSocialSecurity.personalProvidentFundPayment,callback:function(t){e.$set(e.sizeForm.userSocialSecurity,"personalProvidentFundPayment",t)},expression:"sizeForm.userSocialSecurity.personalProvidentFundPayment"}})],1),t("el-form-item",{staticStyle:{display:"inline-block"},attrs:{label:"公司","label-width":"50px",prop:"enterpriseProvidentFundPayment"}},[t("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"企业",inline:"true",type:"number"},model:{value:e.sizeForm.userSocialSecurity.enterpriseProvidentFundPayment,callback:function(t){e.$set(e.sizeForm.userSocialSecurity,"enterpriseProvidentFundPayment",t)},expression:"sizeForm.userSocialSecurity.enterpriseProvidentFundPayment"}})],1),t("el-form-item",{staticStyle:{display:"inline-block"}},[t("span",[e._v("（为自动测算结果，可手动调整）")])])],1),t("el-form-item",{attrs:{label:"公积金备注"}},[t("el-input",{staticStyle:{width:"38%"},attrs:{type:"textarea",rows:2,placeholder:"1-300字符",maxlength:"300","show-word-limit":""},model:{value:e.sizeForm.userSocialSecurity.providentFundNotes,callback:function(t){e.$set(e.sizeForm.userSocialSecurity,"providentFundNotes",t)},expression:"sizeForm.userSocialSecurity.providentFundNotes"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit()}}},[e._v("保存")]),t("el-button",[e._v("取消")])],1)],1)],1)])},o=[function(){var e=this,t=e._self._c;return t("div",[t("img",{attrs:{src:r("616f"),width:"100",height:"100",alt:""}})])}],a=r("c7eb"),n=r("1da1"),s=(r("d9e2"),r("a9e3"),r("d3b7"),r("159b"),r("b680"),r("1401")),c={name:"DetailSocial",data:function(){var e=function(e,t,r){""===t?r(new Error("请输入社保基数")):t<3387||t>25401?r(new Error("请不要超出范围，基数范围是3387 ~ 25401")):r()},t=function(e,t,r){""===t?r(new Error("请输入工伤比例")):t<.2||t>3?r(new Error("请不要超出范围，比例范围是0.2％ ~ 3％")):r()},r=function(e,t,r){""===t?r(new Error("请输入公积金基数")):t<2273||t>25401?r(new Error("请不要超出范围，基数范围是2273 ~ 25401")):r()},i=function(e,t,r){""===t?r(new Error("请输入企业比例")):t<5||t>12?r(new Error("请不要超出范围，比例范围是5％ ~ 12％")):r()},o=function(e,t,r){""===t?r(new Error("请输入个人比例")):t<5||t>12?r(new Error("请不要超出范围，比例范围是5％ ~ 12％")):r()};return{sizeForm:{user:{},userSocialSecurity:{socialSecurityBase:3387,industrialInjuryRatio:.2}},cityList:[],paymentItemList:[],personalPayment:0,companyPayment:0,isPaySocialInMonth:!1,isPayProvidentInMonth:!1,rules:{participatingInTheCity:[{required:!0,message:"请选择参保城市1234",trigger:"change"}],socialSecurityType:[{required:!0,message:"请选择社保类型",trigger:"change"}],householdRegistrationType:[{required:!0,message:"请选择户籍类型",trigger:"change"}],socialSecurityBase:[{required:!0,validator:e,trigger:"blur"}],industrialInjuryRatio:[{required:!0,validator:t,trigger:"blur"}],providentFundCity:[{required:!0,message:"请选择公积金城市",trigger:"change"}],providentFundBase:[{required:!0,validator:r,trigger:"blur"}],enterpriseProportion:[{required:!0,validator:i,trigger:"blur"}],personalProportion:[{required:!0,validator:o,trigger:"blur"}],enterpriseProvidentFundPayment:[{required:!0,message:"请输入公司公积金缴纳数额",trigger:"change"}],personalProvidentFundPayment:[{required:!0,message:"请输入个人公积金缴纳数额",trigger:"change"}]}}},computed:{dutyStatusTxt:function(){return 1===this.sizeForm.user.inServiceStatus?"在职":"离职"},dutyStatus:function(){return 1===this.sizeForm.user.inServiceStatus},computePaymentItemList:function(){var e=this,t=Number(0),r=Number(0);return this.paymentItemList.forEach((function(i){"工伤"===i.name&&i.switchCompany&&(i.scaleCompany=e.sizeForm.userSocialSecurity.industrialInjuryRatio),i.switchCompany&&(i.companyPay=parseFloat(e.sizeForm.userSocialSecurity.socialSecurityBase*i.scaleCompany/100).toFixed(2),r=Number(r+Number(i.companyPay))),i.switchPersonal&&(i.personalPay=parseFloat(e.sizeForm.userSocialSecurity.socialSecurityBase*i.scalePersonal/100).toFixed(2),t=Number(t+Number(i.personalPay)))})),this.paymentItemList},computeEnterpriseProvidentFundPayment:function(){return parseFloat(this.sizeForm.userSocialSecurity.enterpriseProportion*this.sizeForm.userSocialSecurity.providentFundBase/100).toFixed(2)},computePersonalProvidentFundPayment:function(){return parseFloat(this.sizeForm.userSocialSecurity.personalProportion*this.sizeForm.userSocialSecurity.providentFundBase/100).toFixed(2)}},watch:{"sizeForm.userSocialSecurity.providentFundBase":function(){this.changeProvidentFundPayment()},"sizeForm.userSocialSecurity.enterpriseProportion":function(){this.changeProvidentFundPayment()},"sizeForm.userSocialSecurity.personalProportion":function(){this.changeProvidentFundPayment()},"sizeForm.userSocialSecurity.enterprisesPaySocialSecurityThisMonth":function(){this.isPaySocialInMonth=1===this.sizeForm.enterprisesPaySocialSecurityThisMonth},"sizeForm.userSocialSecurity.enterprisesPayTheProvidentFundThisMonth":function(){this.isPayProvidentInMonth=1===this.sizeForm.enterprisesPayTheProvidentFundThisMonth}},created:function(){this.sizeForm.userId=this.$route.params.id,this.getCityList(),this.getContent()},methods:{onSubmit:function(){this.saveData()},socialSecurityCityChange:function(e){this.sizeForm.userSocialSecurity.participatingInTheCity=e,this.initPaymentItem(e)},saveData:function(){var e=this;return Object(n["a"])(Object(a["a"])().mark((function t(){var r,i;return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.sizeForm.userSocialSecurity.enterprisesPaySocialSecurityThisMonth=e.isPaySocialInMonth?1:0,e.sizeForm.userSocialSecurity.enterprisesPayTheProvidentFundThisMonth=e.isPayProvidentInMonth?1:0,e.sizeForm.userSocialSecurity.userId=e.sizeForm.userId,r=e.sizeForm.userSocialSecurity.participatingInTheCity,i=e.sizeForm.userSocialSecurity.participatingInTheCity,e.sizeForm.userSocialSecurity.participatingInTheCity=r.name,e.sizeForm.userSocialSecurity.participatingInTheCityId=r.id,e.sizeForm.userSocialSecurity.providentFundCity=i.name,e.sizeForm.userSocialSecurity.providentFundCityId=i.id,t.next=11,Object(s["i"])(e.sizeForm.userSocialSecurity);case 11:e.$message.success("保存成功");case 12:case"end":return t.stop()}}),t)})))()},getCityList:function(){var e=this;return Object(n["a"])(Object(a["a"])().mark((function t(){return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.cityList=[];case 1:case"end":return t.stop()}}),t)})))()},getContent:function(){var e=this;return Object(n["a"])(Object(a["a"])().mark((function t(){var r,i;return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["d"])(e.$route.params.id);case 2:r=t.sent,r.userSocialSecurity?(e.sizeForm=r,e.sizeForm.userId=e.$route.params.id,i={},i.name=e.sizeForm.userSocialSecurity.participatingInTheCity,i.id=e.sizeForm.userSocialSecurity.participatingInTheCityId,e.initPaymentItem(i)):e.sizeForm.user=r.user;case 4:case"end":return t.stop()}}),t)})))()},initPaymentItem:function(e){var t=this;return Object(n["a"])(Object(a["a"])().mark((function r(){return Object(a["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(s["f"])(e.id);case 2:t.paymentItemList=r.sent;case 3:case"end":return r.stop()}}),r)})))()},changeProvidentFundPayment:function(){this.sizeForm.userSocialSecurity.enterpriseProvidentFundPayment=parseFloat(this.sizeForm.userSocialSecurity.enterpriseProportion*this.sizeForm.userSocialSecurity.providentFundBase/100).toFixed(2),this.sizeForm.userSocialSecurity.personalProvidentFundPayment=parseFloat(this.sizeForm.userSocialSecurity.personalProportion*this.sizeForm.userSocialSecurity.providentFundBase/100).toFixed(2)}}},u=c,l=(r("417d"),r("2877")),m=Object(l["a"])(u,i,o,!1,null,"648be008",null);t["default"]=m.exports},"616f":function(e,t,r){e.exports=r.p+"static/img/img.0615818f.jpeg"},abc2:function(e,t,r){},b680:function(e,t,r){"use strict";var i=r("23e7"),o=r("e330"),a=r("5926"),n=r("408a"),s=r("1148"),c=r("d039"),u=RangeError,l=String,m=Math.floor,p=o(s),y=o("".slice),d=o(1..toFixed),S=function(e,t,r){return 0===t?r:t%2===1?S(e,t-1,r*e):S(e*e,t/2,r)},h=function(e){var t=0,r=e;while(r>=4096)t+=12,r/=4096;while(r>=2)t+=1,r/=2;return t},v=function(e,t,r){var i=-1,o=r;while(++i<6)o+=t*e[i],e[i]=o%1e7,o=m(o/1e7)},f=function(e,t){var r=6,i=0;while(--r>=0)i+=e[r],e[r]=m(i/t),i=i%t*1e7},b=function(e){var t=6,r="";while(--t>=0)if(""!==r||0===t||0!==e[t]){var i=l(e[t]);r=""===r?i:r+p("0",7-i.length)+i}return r},F=c((function(){return"0.000"!==d(8e-5,3)||"1"!==d(.9,0)||"1.25"!==d(1.255,2)||"1000000000000000128"!==d(0xde0b6b3a7640080,0)}))||!c((function(){d({})}));i({target:"Number",proto:!0,forced:F},{toFixed:function(e){var t,r,i,o,s=n(this),c=a(e),m=[0,0,0,0,0,0],d="",F="0";if(c<0||c>20)throw u("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return l(s);if(s<0&&(d="-",s=-s),s>1e-21)if(t=h(s*S(2,69,1))-69,r=t<0?s*S(2,-t,1):s/S(2,t,1),r*=4503599627370496,t=52-t,t>0){v(m,0,r),i=c;while(i>=7)v(m,1e7,0),i-=7;v(m,S(10,i,1),0),i=t-1;while(i>=23)f(m,1<<23),i-=23;f(m,1<<i),v(m,1,1),f(m,2),F=b(m)}else v(m,0,r),v(m,1<<-t,0),F=b(m)+p("0",c);return c>0?(o=F.length,F=d+(o<=c?"0."+p("0",c-o)+F:y(F,0,o-c)+"."+y(F,o-c))):F=d+F,F}})}}]);