(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{234:function(e,t,r){var content=r(261);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("f94c39e8",content,!0,{sourceMap:!1})},235:function(e,t,r){var content=r(263);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("9ccb470e",content,!0,{sourceMap:!1})},260:function(e,t,r){"use strict";var n=r(234);r.n(n).a},261:function(e,t,r){(t=r(15)(!1)).push([e.i,".flex-center[data-v-71bc50cd]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}.card[data-v-71bc50cd]{width:400px;margin-top:100px}.header[data-v-71bc50cd]{font-weight:700;font-size:18px;margin-bottom:25px}.field[data-v-71bc50cd]{height:65px}form>button[data-v-71bc50cd]{width:100%;font-size:14px;font-weight:700;margin-bottom:24px}.card-content>.string[data-v-71bc50cd]{font-size:14px;margin-bottom:14px}",""]),e.exports=t},262:function(e,t,r){"use strict";var n=r(235);r.n(n).a},263:function(e,t,r){(t=r(15)(!1)).push([e.i,".flex-center[data-v-6dae0864]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}.card[data-v-6dae0864]{width:400px}.header[data-v-6dae0864]{font-weight:700;font-size:18px;margin-bottom:25px}.field[data-v-6dae0864]{height:65px}form>button[data-v-6dae0864]{width:100%;font-size:14px;font-weight:700;margin-bottom:24px}.card-content>.string[data-v-6dae0864]{font-size:14px;margin-bottom:14px}",""]),e.exports=t},296:function(e,t,r){"use strict";r.r(t);r(12);var n,o=r(2),l=r(20),c={components:{ValidationObserver:l.a,ValidationProvider:l.b},data:function(){return{userInfo:{email:"",name:"",password:"",password_confirm:""}}},methods:{submit:(n=Object(o.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.observer.validate();case 2:if(!e.sent){e.next=17;break}return e.next=6,this.$store.dispatch("registerUser",this.userInfo);case 6:if(!(t=e.sent).status){e.next=14;break}return e.next=10,this.$store.dispatch("fetchUser",this.userInfo);case 10:e.sent.status&&this.$router.push("/"),e.next=15;break;case 14:this.manageErrorResponse(t);case 15:e.next=19;break;case 17:this.alertValidationWarning("가입 정보를 다시 확인해주세요.");case 19:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)}),alertValidationWarning:function(e){this.$buefy.dialog.alert({title:"엇!",message:e,type:"is-danger"})},manageErrorResponse:function(e){var t=e.data.response.data.message;this.alertValidationWarning(t)}},mounted:function(){this.toggleSidebar(!1)}},d=(r(260),r(4)),f=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container flex-center"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-content"},[r("p",{staticClass:"header"},[e._v("회원가입")]),e._v(" "),r("ValidationObserver",{ref:"observer",attrs:{tag:"form",novalidate:""},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("ValidationProvider",{attrs:{rules:"required|email",name:"이메일"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,o=t.valid;return[r("b-field",{attrs:{type:{"is-danger":n[0],"is-success":o},message:n}},[r("b-input",{attrs:{type:"email",placeholder:"이메일",autocomplete:"no"},model:{value:e.userInfo.email,callback:function(t){e.$set(e.userInfo,"email",t)},expression:"userInfo.email"}})],1)]}}])}),e._v(" "),r("ValidationProvider",{attrs:{rules:"required|alphaKor|between:2,12",name:"닉네임"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,o=t.valid;return[r("b-field",{attrs:{type:{"is-danger":n[0],"is-success":o},message:n}},[r("b-input",{attrs:{type:"text",placeholder:"닉네임",autocomplete:"no"},model:{value:e.userInfo.name,callback:function(t){e.$set(e.userInfo,"name",t)},expression:"userInfo.name"}})],1)]}}])}),e._v(" "),r("ValidationProvider",{attrs:{rules:"required|min:8|confirmed:비밀번호 확인",name:"비밀번호"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,o=t.valid;return[r("b-field",{attrs:{type:{"is-danger":n[0],"is-success":o},message:n}},[r("b-input",{attrs:{type:"password",placeholder:"비밀번호",autocomplete:"no"},model:{value:e.userInfo.password,callback:function(t){e.$set(e.userInfo,"password",t)},expression:"userInfo.password"}})],1)]}}])}),e._v(" "),r("ValidationProvider",{attrs:{rules:"required",name:"비밀번호확인",vid:"비밀번호 확인"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,o=t.valid;return[r("b-field",{attrs:{type:{"is-danger":n[0],"is-success":o},message:n}},[r("b-input",{attrs:{type:"password",placeholder:"비밀번호 확인",autocomplete:"no"},model:{value:e.userInfo.password_confirm,callback:function(t){e.$set(e.userInfo,"password_confirm",t)},expression:"userInfo.password_confirm"}})],1)]}}])}),e._v(" "),r("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[e._v("가입하기")])],1),e._v(" "),r("p",{staticClass:"string"},[e._v("이미 가입한 계정이 있나요? 등록된 계정으로 "),r("span",[r("nuxt-link",{attrs:{to:"/auth/login"}},[e._v("로그인")])],1),e._v("하세요.")])],1)])])}),[],!1,null,"71bc50cd",null).exports,m={extends:f},v=(r(262),Object(d.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container flex-center",staticStyle:{padding:"30px 15px"}},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-content"},[r("p",{staticClass:"header"},[e._v("회원가입")]),e._v(" "),r("ValidationObserver",{ref:"observer",attrs:{tag:"form",novalidate:""},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("ValidationProvider",{attrs:{rules:"required|email",name:"이메일"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,o=t.valid;return[r("b-field",{attrs:{type:{"is-danger":n[0],"is-success":o},message:n}},[r("b-input",{attrs:{type:"email",placeholder:"이메일"},model:{value:e.userInfo.email,callback:function(t){e.$set(e.userInfo,"email",t)},expression:"userInfo.email"}})],1)]}}])}),e._v(" "),r("ValidationProvider",{attrs:{rules:"required|alphaKor|between:2,12",name:"닉네임"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,o=t.valid;return[r("b-field",{attrs:{type:{"is-danger":n[0],"is-success":o},message:n}},[r("b-input",{attrs:{type:"text",placeholder:"닉네임"},model:{value:e.userInfo.name,callback:function(t){e.$set(e.userInfo,"name",t)},expression:"userInfo.name"}})],1)]}}])}),e._v(" "),r("ValidationProvider",{attrs:{rules:"required|min:8|confirmed:비밀번호 확인",name:"비밀번호"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,o=t.valid;return[r("b-field",{attrs:{type:{"is-danger":n[0],"is-success":o},message:n}},[r("b-input",{attrs:{type:"password",placeholder:"비밀번호"},model:{value:e.userInfo.password,callback:function(t){e.$set(e.userInfo,"password",t)},expression:"userInfo.password"}})],1)]}}])}),e._v(" "),r("ValidationProvider",{attrs:{rules:"required",name:"비밀번호확인",vid:"비밀번호 확인"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,o=t.valid;return[r("b-field",{attrs:{type:{"is-danger":n[0],"is-success":o},message:n}},[r("b-input",{attrs:{type:"password",placeholder:"비밀번호 확인"},model:{value:e.userInfo.password_confirm,callback:function(t){e.$set(e.userInfo,"password_confirm",t)},expression:"userInfo.password_confirm"}})],1)]}}])}),e._v(" "),r("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[e._v("가입하기")])],1),e._v(" "),r("p",{staticClass:"string"},[e._v("이미 가입한 계정이 있나요? 등록된 계정으로 "),r("span",[r("nuxt-link",{attrs:{to:"/auth/login"}},[e._v("로그인")])],1),e._v("하세요.")])],1)])])}),[],!1,null,"6dae0864",null).exports),x={middleware:"guest",computed:{isMobile:function(){return this.$device.isMobile?v:f}}},h=Object(d.a)(x,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t(this.isMobile,{tag:"component"})],1)}),[],!1,null,"71c491a0",null);t.default=h.exports}}]);