exports.ids=[2],exports.modules={126:function(t,e,r){"use strict";r.r(e);var n=r(4),o={name:"Login",components:{ValidationObserver:n.ValidationObserver,ValidationProvider:n.ValidationProvider},data:()=>({userInfo:{email:"",password:""}}),methods:{async submit(){if(await this.$refs.observer.validate()){const t=await this.$store.dispatch("login",this.userInfo);if(t.status){(await this.$store.dispatch("fetchUser",this.userInfo)).status&&this.$router.push("/")}else{const e=t.data.message;this.alertValidationWarning(e)}}else{const t="로그인 정보를 확인해주세요.";this.alertValidationWarning(t)}},alertValidationWarning(t){this.$buefy.dialog.alert({message:t,type:"is-danger"})}},mounted(){this.toggleSidebar(!1)}},d=r(1);var l=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container flex-center"},[t._ssrNode('<div class="card" data-v-74a746d5>',"</div>",[t._ssrNode('<div class="card-content" data-v-74a746d5>',"</div>",[t._ssrNode('<p class="header" data-v-74a746d5>로그인</p> '),r("ValidationObserver",{ref:"observer",attrs:{tag:"form",novalidate:""},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("ValidationProvider",{attrs:{rules:"required|email",name:"이메일"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors,o=e.valid;return[r("b-field",{attrs:{type:{"is-danger":n[0],"is-success":o},message:n}},[r("b-input",{attrs:{type:"email",placeholder:"이메일",autocomplete:"email"},model:{value:t.userInfo.email,callback:function(e){t.$set(t.userInfo,"email",e)},expression:"userInfo.email"}})],1)]}}])}),t._v(" "),r("ValidationProvider",{attrs:{rules:"required",name:"비밀번호"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors,o=e.valid;return[r("b-field",{attrs:{type:{"is-danger":n[0],"is-success":o},message:n}},[r("b-input",{attrs:{type:"password",placeholder:"비밀번호",autocomplete:"password"},model:{value:t.userInfo.password,callback:function(e){t.$set(t.userInfo,"password",e)},expression:"userInfo.password"}})],1)]}}])}),t._v(" "),r("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[t._v("로그인")])],1),t._ssrNode(" "),t._ssrNode('<p class="string" data-v-74a746d5>',"</p>",[t._ssrNode("아직 등록된 회원이 아니신가요? 이메일로 "),t._ssrNode("<span data-v-74a746d5>","</span>",[r("nuxt-link",{attrs:{to:"/auth/register"}},[t._v("회원가입")])],1),t._ssrNode("하기")],2),t._ssrNode(" "),t._ssrNode('<p class="string" data-v-74a746d5>',"</p>",[t._ssrNode("비밀번호를 잊어버리셨나요? "),t._ssrNode("<span data-v-74a746d5>","</span>",[r("nuxt-link",{attrs:{to:"/auth/password"}},[t._v("비밀번호")])],1),t._ssrNode(" 찾기.")],2)],2)])])}),[],!1,(function(t){var e=r(91);e.__inject__&&e.__inject__(t)}),"74a746d5","24088e20").exports,c={extends:l};var f=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container flex-center",staticStyle:{padding:"30px 15px"}},[t._ssrNode('<div class="card" data-v-453aae2d>',"</div>",[t._ssrNode('<div class="card-content" data-v-453aae2d>',"</div>",[t._ssrNode('<p class="header" data-v-453aae2d>로그인</p> '),r("ValidationObserver",{ref:"observer",attrs:{tag:"form",novalidate:""},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("ValidationProvider",{attrs:{rules:"required|email",name:"이메일"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors,o=e.valid;return[r("b-field",{attrs:{type:{"is-danger":n[0],"is-success":o},message:n}},[r("b-input",{attrs:{type:"email",placeholder:"이메일"},model:{value:t.userInfo.email,callback:function(e){t.$set(t.userInfo,"email",e)},expression:"userInfo.email"}})],1)]}}])}),t._v(" "),r("ValidationProvider",{attrs:{rules:"required",name:"비밀번호"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors,o=e.valid;return[r("b-field",{attrs:{type:{"is-danger":n[0],"is-success":o},message:n}},[r("b-input",{attrs:{type:"password",placeholder:"비밀번호"},model:{value:t.userInfo.password,callback:function(e){t.$set(t.userInfo,"password",e)},expression:"userInfo.password"}})],1)]}}])}),t._v(" "),r("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[t._v("로그인")])],1),t._ssrNode(" "),t._ssrNode('<p class="string" data-v-453aae2d>',"</p>",[t._ssrNode("아직 등록된 회원이 아니신가요? 이메일로 "),t._ssrNode("<span data-v-453aae2d>","</span>",[r("nuxt-link",{attrs:{to:"/auth/register"}},[t._v("회원가입")])],1),t._ssrNode("하기")],2),t._ssrNode(" "),t._ssrNode('<p class="string" data-v-453aae2d>',"</p>",[t._ssrNode("비밀번호를 잊어버리셨나요? "),t._ssrNode("<span data-v-453aae2d>","</span>",[r("nuxt-link",{attrs:{to:"/auth/password"}},[t._v("비밀번호")])],1),t._ssrNode(" 찾기.")],2)],2)])])}),[],!1,(function(t){var e=r(93);e.__inject__&&e.__inject__(t)}),"453aae2d","4fd945fa").exports,v={name:"Login",computed:{isMobile(){return this.$device.isMobile?f:l}}};var _=Object(d.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e(this.isMobile,{tag:"component"})],1)}),[],!1,(function(t){}),"814c0464","19f540c6");e.default=_.exports},68:function(t,e,r){var content=r(92);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(3).default;t.exports.__inject__=function(t){n("f347373e",content,!0,t)}},69:function(t,e,r){var content=r(94);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(3).default;t.exports.__inject__=function(t){n("5b672970",content,!0,t)}},91:function(t,e,r){"use strict";r.r(e);var n=r(68),o=r.n(n);for(var d in n)"default"!==d&&function(t){r.d(e,t,(function(){return n[t]}))}(d);e.default=o.a},92:function(t,e,r){(e=r(2)(!1)).push([t.i,".flex-center[data-v-74a746d5]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}.card[data-v-74a746d5]{width:400px;margin-top:100px}.header[data-v-74a746d5]{font-weight:700;font-size:18px;margin-bottom:25px}.field[data-v-74a746d5]{height:65px}form>button[data-v-74a746d5]{width:100%;font-size:14px;font-weight:700;margin-bottom:24px}.card-content>.string[data-v-74a746d5]{font-size:14px;margin-bottom:14px}",""]),t.exports=e},93:function(t,e,r){"use strict";r.r(e);var n=r(69),o=r.n(n);for(var d in n)"default"!==d&&function(t){r.d(e,t,(function(){return n[t]}))}(d);e.default=o.a},94:function(t,e,r){(e=r(2)(!1)).push([t.i,".flex-center[data-v-453aae2d]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}.card[data-v-453aae2d]{width:400px}.header[data-v-453aae2d]{font-weight:700;font-size:18px;margin-bottom:25px}.field[data-v-453aae2d]{height:65px}form>button[data-v-453aae2d]{width:100%;font-size:14px;font-weight:700;margin-bottom:24px}.card-content>.string[data-v-453aae2d]{font-size:14px;margin-bottom:14px}",""]),t.exports=e}};