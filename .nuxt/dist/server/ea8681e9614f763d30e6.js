exports.ids=[4],exports.modules={127:function(e,t,r){"use strict";r.r(t);var n=r(4),o={components:{ValidationObserver:n.ValidationObserver,ValidationProvider:n.ValidationProvider},data:()=>({userInfo:{email:"",name:"",password:"",password_confirm:""}}),methods:{async submit(){if(await this.$refs.observer.validate()){const e=await this.$store.dispatch("registerUser",this.userInfo);if(e.status){(await this.$store.dispatch("fetchUser",this.userInfo)).status&&this.$router.push("/")}else this.manageErrorResponse(e)}else{const e="가입 정보를 다시 확인해주세요.";this.alertValidationWarning(e)}},alertValidationWarning(e){this.$buefy.dialog.alert({title:"엇!",message:e,type:"is-danger"})},manageErrorResponse(e){const t=e.data.response.data.message;this.alertValidationWarning(t)}},mounted(){this.toggleSidebar(!1)}},d=r(1);var c=Object(d.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container flex-center"},[e._ssrNode('<div class="card" data-v-71bc50cd>',"</div>",[e._ssrNode('<div class="card-content" data-v-71bc50cd>',"</div>",[e._ssrNode('<p class="header" data-v-71bc50cd>회원가입</p> '),r("ValidationObserver",{ref:"observer",attrs:{tag:"form",novalidate:""},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("ValidationProvider",{attrs:{rules:"required|email",name:"이메일"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,o=t.valid;return[r("b-field",{attrs:{type:{"is-danger":n[0],"is-success":o},message:n}},[r("b-input",{attrs:{type:"email",placeholder:"이메일",autocomplete:"no"},model:{value:e.userInfo.email,callback:function(t){e.$set(e.userInfo,"email",t)},expression:"userInfo.email"}})],1)]}}])}),e._v(" "),r("ValidationProvider",{attrs:{rules:"required|alphaKor|between:2,12",name:"닉네임"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,o=t.valid;return[r("b-field",{attrs:{type:{"is-danger":n[0],"is-success":o},message:n}},[r("b-input",{attrs:{type:"text",placeholder:"닉네임",autocomplete:"no"},model:{value:e.userInfo.name,callback:function(t){e.$set(e.userInfo,"name",t)},expression:"userInfo.name"}})],1)]}}])}),e._v(" "),r("ValidationProvider",{attrs:{rules:"required|min:8|confirmed:비밀번호 확인",name:"비밀번호"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,o=t.valid;return[r("b-field",{attrs:{type:{"is-danger":n[0],"is-success":o},message:n}},[r("b-input",{attrs:{type:"password",placeholder:"비밀번호",autocomplete:"no"},model:{value:e.userInfo.password,callback:function(t){e.$set(e.userInfo,"password",t)},expression:"userInfo.password"}})],1)]}}])}),e._v(" "),r("ValidationProvider",{attrs:{rules:"required",name:"비밀번호확인",vid:"비밀번호 확인"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,o=t.valid;return[r("b-field",{attrs:{type:{"is-danger":n[0],"is-success":o},message:n}},[r("b-input",{attrs:{type:"password",placeholder:"비밀번호 확인",autocomplete:"no"},model:{value:e.userInfo.password_confirm,callback:function(t){e.$set(e.userInfo,"password_confirm",t)},expression:"userInfo.password_confirm"}})],1)]}}])}),e._v(" "),r("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[e._v("가입하기")])],1),e._ssrNode(" "),e._ssrNode('<p class="string" data-v-71bc50cd>',"</p>",[e._ssrNode("이미 가입한 계정이 있나요? 등록된 계정으로 "),e._ssrNode("<span data-v-71bc50cd>","</span>",[r("nuxt-link",{attrs:{to:"/auth/login"}},[e._v("로그인")])],1),e._ssrNode("하세요.")],2)],2)])])}),[],!1,(function(e){var t=r(95);t.__inject__&&t.__inject__(e)}),"71bc50cd","1e8779ec").exports,l={extends:c};var f=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container flex-center",staticStyle:{padding:"30px 15px"}},[e._ssrNode('<div class="card" data-v-6dae0864>',"</div>",[e._ssrNode('<div class="card-content" data-v-6dae0864>',"</div>",[e._ssrNode('<p class="header" data-v-6dae0864>회원가입</p> '),r("ValidationObserver",{ref:"observer",attrs:{tag:"form",novalidate:""},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("ValidationProvider",{attrs:{rules:"required|email",name:"이메일"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,o=t.valid;return[r("b-field",{attrs:{type:{"is-danger":n[0],"is-success":o},message:n}},[r("b-input",{attrs:{type:"email",placeholder:"이메일"},model:{value:e.userInfo.email,callback:function(t){e.$set(e.userInfo,"email",t)},expression:"userInfo.email"}})],1)]}}])}),e._v(" "),r("ValidationProvider",{attrs:{rules:"required|alphaKor|between:2,12",name:"닉네임"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,o=t.valid;return[r("b-field",{attrs:{type:{"is-danger":n[0],"is-success":o},message:n}},[r("b-input",{attrs:{type:"text",placeholder:"닉네임"},model:{value:e.userInfo.name,callback:function(t){e.$set(e.userInfo,"name",t)},expression:"userInfo.name"}})],1)]}}])}),e._v(" "),r("ValidationProvider",{attrs:{rules:"required|min:8|confirmed:비밀번호 확인",name:"비밀번호"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,o=t.valid;return[r("b-field",{attrs:{type:{"is-danger":n[0],"is-success":o},message:n}},[r("b-input",{attrs:{type:"password",placeholder:"비밀번호"},model:{value:e.userInfo.password,callback:function(t){e.$set(e.userInfo,"password",t)},expression:"userInfo.password"}})],1)]}}])}),e._v(" "),r("ValidationProvider",{attrs:{rules:"required",name:"비밀번호확인",vid:"비밀번호 확인"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,o=t.valid;return[r("b-field",{attrs:{type:{"is-danger":n[0],"is-success":o},message:n}},[r("b-input",{attrs:{type:"password",placeholder:"비밀번호 확인"},model:{value:e.userInfo.password_confirm,callback:function(t){e.$set(e.userInfo,"password_confirm",t)},expression:"userInfo.password_confirm"}})],1)]}}])}),e._v(" "),r("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[e._v("가입하기")])],1),e._ssrNode(" "),e._ssrNode('<p class="string" data-v-6dae0864>',"</p>",[e._ssrNode("이미 가입한 계정이 있나요? 등록된 계정으로 "),e._ssrNode("<span data-v-6dae0864>","</span>",[r("nuxt-link",{attrs:{to:"/auth/login"}},[e._v("로그인")])],1),e._ssrNode("하세요.")],2)],2)])])}),[],!1,(function(e){var t=r(97);t.__inject__&&t.__inject__(e)}),"6dae0864","4c7307db").exports,v={middleware:"guest",computed:{isMobile(){return this.$device.isMobile?f:c}}};var m=Object(d.a)(v,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t(this.isMobile,{tag:"component"})],1)}),[],!1,(function(e){}),"71c491a0","fca44b54");t.default=m.exports},70:function(e,t,r){var content=r(96);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var n=r(3).default;e.exports.__inject__=function(e){n("f94c39e8",content,!0,e)}},71:function(e,t,r){var content=r(98);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var n=r(3).default;e.exports.__inject__=function(e){n("9ccb470e",content,!0,e)}},95:function(e,t,r){"use strict";r.r(t);var n=r(70),o=r.n(n);for(var d in n)"default"!==d&&function(e){r.d(t,e,(function(){return n[e]}))}(d);t.default=o.a},96:function(e,t,r){(t=r(2)(!1)).push([e.i,".flex-center[data-v-71bc50cd]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}.card[data-v-71bc50cd]{width:400px;margin-top:100px}.header[data-v-71bc50cd]{font-weight:700;font-size:18px;margin-bottom:25px}.field[data-v-71bc50cd]{height:65px}form>button[data-v-71bc50cd]{width:100%;font-size:14px;font-weight:700;margin-bottom:24px}.card-content>.string[data-v-71bc50cd]{font-size:14px;margin-bottom:14px}",""]),e.exports=t},97:function(e,t,r){"use strict";r.r(t);var n=r(71),o=r.n(n);for(var d in n)"default"!==d&&function(e){r.d(t,e,(function(){return n[e]}))}(d);t.default=o.a},98:function(e,t,r){(t=r(2)(!1)).push([e.i,".flex-center[data-v-6dae0864]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}.card[data-v-6dae0864]{width:400px}.header[data-v-6dae0864]{font-weight:700;font-size:18px;margin-bottom:25px}.field[data-v-6dae0864]{height:65px}form>button[data-v-6dae0864]{width:100%;font-size:14px;font-weight:700;margin-bottom:24px}.card-content>.string[data-v-6dae0864]{font-size:14px;margin-bottom:14px}",""]),e.exports=t}};