(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{228:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMiAyMS41OTNjLTUuNjMtNS41MzktMTEtMTAuMjk3LTExLTE0LjQwMiAwLTMuNzkxIDMuMDY4LTUuMTkxIDUuMjgxLTUuMTkxIDEuMzEyIDAgNC4xNTEuNTAxIDUuNzE5IDQuNDU3IDEuNTktMy45NjggNC40NjQtNC40NDcgNS43MjYtNC40NDcgMi41NCAwIDUuMjc0IDEuNjIxIDUuMjc0IDUuMTgxIDAgNC4wNjktNS4xMzYgOC42MjUtMTEgMTQuNDAybTUuNzI2LTIwLjU4M2MtMi4yMDMgMC00LjQ0NiAxLjA0Mi01LjcyNiAzLjIzOC0xLjI4NS0yLjIwNi0zLjUyMi0zLjI0OC01LjcxOS0zLjI0OC0zLjE4MyAwLTYuMjgxIDIuMTg3LTYuMjgxIDYuMTkxIDAgNC42NjEgNS41NzEgOS40MjkgMTIgMTUuODA5IDYuNDMtNi4zOCAxMi0xMS4xNDggMTItMTUuODA5IDAtNC4wMTEtMy4wOTUtNi4xODEtNi4yNzQtNi4xODEiLz48L3N2Zz4="},229:function(t,e,n){t.exports=n.p+"img/468bfe0.svg"},239:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9InJlZCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0xMiA0LjI0OGMtMy4xNDgtNS40MDItMTItMy44MjUtMTIgMi45NDQgMCA0LjY2MSA1LjU3MSA5LjQyNyAxMiAxNS44MDggNi40My02LjM4MSAxMi0xMS4xNDcgMTItMTUuODA4IDAtNi43OTItOC44NzUtOC4zMDYtMTItMi45NDR6Ii8+PC9zdmc+Cg=="},240:function(t,e,n){var content=n(273);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("59fa23f0",content,!0,{sourceMap:!1})},241:function(t,e,n){var content=n(275);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("70607288",content,!0,{sourceMap:!1})},272:function(t,e,n){"use strict";var o=n(240);n.n(o).a},273:function(t,e,n){(e=n(15)(!1)).push([t.i,".like-button[data-v-e59b249c]{border:1px solid #000;border-radius:4px;padding:0 5px}",""]),t.exports=e},274:function(t,e,n){"use strict";var o=n(241);n.n(o).a},275:function(t,e,n){(e=n(15)(!1)).push([t.i,".like-button[data-v-6bcca734]{border:1px solid #000;border-radius:4px;padding:0 5px}",""]),t.exports=e},290:function(t,e,n){"use strict";n.r(e);var o,r,c,l,m,d,x=n(37),h=(n(140),n(12),n(2)),_=(n(17),n(141),{props:{commentId:{type:Number,default:null}},data:function(){return{body:""}},computed:{post:function(){return this.$store.state.posts.post},comment:function(){return{post_id:this.post.id,comment_id:this.commentId,body:this.body}}},methods:{submitComment:(o=Object(h.a)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.isAuthenticated){t.next=7;break}return t.next=3,this.$store.dispatch("comments/createComment",this.comment);case 3:t.sent.status&&(this.body=""),t.next=8;break;case 7:this.$buefy.dialog.confirm({title:"엇!",message:"로그인이 필요한 페이지입니다. 지금 로그인 하시겠습니까?",cancelText:"아니요",confirmText:"네",onConfirm:function(){return e.$router.push("/auth/login")}});case 8:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})}}),f=n(4),v=Object(f.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex has-background-white-ter",staticStyle:{padding:"15px 5px","border-bottom":"1px solid lightgrey","border-top":"1px solid lightgrey"}},[n("div",{staticStyle:{"flex-grow":"20","margin-right":"6px"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.body,expression:"body"}],staticClass:"textarea",staticStyle:{"margin-bottom":"5px"},attrs:{placeholder:"댓글",rows:"2"},domProps:{value:t.body},on:{input:function(e){e.target.composing||(t.body=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"button is-primary",staticStyle:{"flex-grow":"1",height:"70px"},on:{click:function(e){return t.submitComment()}}},[t._v("\n        등록하기\n    ")])])}),[],!1,null,"74c7b849",null).exports,y={props:{comment:{type:Object,default:null}},methods:{likeComment:function(){var data={post_id:null,comment_id:this.comment.id};this.$store.dispatch("comments/likeComment",data)},deleteComment:function(){this.$store.dispatch("comments/deleteComment",this.comment.id)}}},S=Object(f.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{padding:"10px 5px 5px","border-bottom":"1px solid #DBDBDB"}},[n("div",{staticClass:"flex space-between has-text-grey",staticStyle:{"padding-bottom":"3px"}},[n("p",{staticStyle:{"font-size":"14px"}},[t._v(t._s(t.comment.user.name))]),t._v(" "),n("p",{staticStyle:{"font-size":"14px"}},[t._v(t._s(t._f("humanTimestamp")(t.comment.created_at)))])]),t._v(" "),n("p",{staticStyle:{"padding-bottom":"5px"}},[t._v(t._s(t.comment.body))]),t._v(" "),n("div",{staticClass:"flex flex-end"},[t.comment.is_mine?n("div",{staticClass:"flex flex-end has-text-grey"},[n("p",{staticStyle:{"font-size":"14px",cursor:"pointer"},on:{click:function(e){return t.deleteComment()}}},[t._v("삭제")])]):t._e()])])}),[],!1,null,"739aee52",null).exports,M={components:{CommentForm:v,CommentItem:S},computed:{post:function(){return this.$store.state.posts.post},commentsQuery:function(){return{post_id:this.$store.state.posts.post.id,page:this.$store.state.comments.page,per_page:20}},comments:function(){return this.$store.state.comments.comments},isNoMore:function(){return this.$store.state.comments.isNoMore}},methods:{fetchComments:(l=Object(h.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("comments/fetchComments",this.commentsQuery);case 2:case"end":return t.stop()}}),t,this)}))),function(){return l.apply(this,arguments)}),likePost:(c=Object(h.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return data={post_id:this.post.id,comment_id:null},t.next=3,this.$store.dispatch("posts/postLike",data);case 3:case"end":return t.stop()}}),t,this)}))),function(){return c.apply(this,arguments)})},mounted:(r=Object(h.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.$store.commit("comments/RESET_COMMENTS"),this.$store.commit("comments/SET_IS_NO_MORE",!1),this.$store.commit("comments/SET_PAGE",1),t.next=5,this.fetchComments();case 5:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},k=(n(272),Object(f.a)(M,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"flex space-between",staticStyle:{"padding-bottom":"5px",cursor:"pointer"}},[o("div",{staticClass:"flex align-items-center like-button",on:{click:function(e){return t.likePost()}}},[t.post.is_liked?t._e():o("img",{staticStyle:{width:"16px"},attrs:{src:n(228),alt:"like"}}),t._v(" "),t.post.is_liked?o("img",{staticStyle:{width:"16px"},attrs:{src:n(239),alt:"like"}}):t._e(),t._v(" "),o("span",{staticStyle:{"margin-left":"5px"}},[t._v(t._s(t.post.likes_count))])]),t._v(" "),o("p",[t._v("댓글: "),o("span",[t._v(t._s(t.post.comments_count)+"개")])])]),t._v(" "),o("comment-form"),t._v(" "),t._l(t.comments,(function(t,e){return o("comment-item",{key:e,attrs:{comment:t}})})),t._v(" "),0===t.comments.length?o("div",{staticClass:"flex flex-center align-items-center",staticStyle:{height:"60px"}},[o("p",[t._v("첫 번째 댓글을 달아보세요.")])]):t._e(),t._v(" "),o("div",{staticClass:"flex flex-center align-items-center",staticStyle:{height:"60px"}},[t.isNoMore?t._e():o("p",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.fetchComments()}}},[t._v("더 보기")]),t._v(" "),t.isNoMore&&0!==t.comments.length?o("p",{on:{click:function(e){return t.fetchComments()}}},[t._v("더 이상 댓글이 없습니다.")]):t._e()])],2)}),[],!1,null,"e59b249c",null).exports),C={components:{CommentsList:k},data:function(){return{quill:null}},computed:{post:function(){return this.$store.state.posts.post},postBody:function(){if(!this.quill||!this.post)return"";try{return this.quill.setContents(JSON.parse(this.post.body)),this.quill.root.innerHTML}catch(t){return this.quill.setText(this.post.body),this.quill.root.innerHTML}},previousPage:function(){return this.$store.state.previousPage}},methods:{editPost:function(){this.$router.push("/posts/".concat(this.post.id,"/edit"))},deletePost:(m=Object(h.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("posts/deletePost",this.post.id);case 2:t.sent.status&&this.$router.go(-1);case 4:case"end":return t.stop()}}),t,this)}))),function(){return m.apply(this,arguments)}),backToList:function(){"posts-post-edit"===this.previousPage.name?this.$router.go(-3):"posts-create"===this.previousPage.name?this.$router.go(-2):this.$router.go(-1)}},mounted:function(){var t=n(236),e=document.createElement("div");this.quill=new t(e)}},w=Object(f.a)(C,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container",staticStyle:{margin:"0 15px 10px"}},[o("div",{staticClass:"flex",staticStyle:{"margin-bottom":"10px",cursor:"pointer"},on:{click:t.backToList}},[o("img",{staticStyle:{width:"20px","margin-right":"5px"},attrs:{src:n(229),alt:"back"}}),t._v(" "),o("p",{staticStyle:{"font-size":"18px","font-weight":"600"}},[t._v("목록으로 돌아가기")])]),t._v(" "),o("div",{staticClass:"header",staticStyle:{"border-bottom":"1px solid lightgrey","padding-bottom":"5px"}},[o("p",{staticClass:"has-text-black-ter",staticStyle:{"font-size":"16px","font-weight":"600","word-break":"break-word"}},[t._v("\n            "+t._s(t.post.title)+"\n        ")]),t._v(" "),o("div",{staticClass:"flex space-between align-items-center has-text-grey",staticStyle:{"margin-top":"2px","font-size":"14px"}},[o("p",[t._v(t._s(t.post.user.name))]),t._v(" "),o("div",{staticClass:"flex flex-end"},[t.post.is_mine?o("p",{staticStyle:{"margin-right":"5px",cursor:"pointer"},on:{click:function(e){return t.editPost()}}},[t._v("\n                    수정\n                ")]):t._e(),t._v(" "),t.post.is_mine?o("p",{staticStyle:{"margin-right":"5px"}},[t._v("|")]):t._e(),t._v(" "),t.post.is_mine?o("p",{staticStyle:{"margin-right":"5px",cursor:"pointer"},on:{click:function(e){return t.deletePost()}}},[t._v("\n                    삭제\n                ")]):t._e(),t._v(" "),t.post.is_mine?o("p",{staticStyle:{"margin-right":"5px"}},[t._v("|")]):t._e(),t._v(" "),o("p",[t._v(t._s(t._f("humanTimestamp")(t.post.created_at)))])])])]),t._v(" "),o("div",{staticClass:"ql-editor",staticStyle:{"min-height":"300px","padding-bottom":"50px"},domProps:{innerHTML:t._s(t.postBody)}}),t._v(" "),o("div",{staticStyle:{"margin-bottom":"30px"}},t._l(t.post.tags,(function(e,n){return o("span",{key:n,staticClass:"has-text-warm-red",staticStyle:{"font-size":"14px","margin-right":"10px"}},[t._v("\n            #"+t._s(e.name)+"\n        ")])})),0),t._v(" "),o("comments-list"),t._v(" "),o("div",{staticClass:"flex",staticStyle:{"margin-top":"10px",cursor:"pointer"},on:{click:t.backToList}},[o("img",{staticStyle:{width:"20px","margin-right":"5px"},attrs:{src:n(229),alt:"back"}}),t._v(" "),o("p",{staticStyle:{"font-size":"18px","font-weight":"600"}},[t._v("목록으로 돌아가기")])])],1)}),[],!1,null,"f0b91ed6",null).exports,N={extends:v},j={extends:S},I={extends:k,components:{CommentForm:Object(f.a)(N,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex has-background-white-ter",staticStyle:{padding:"15px 10px","border-bottom":"1px solid lightgrey","border-top":"1px solid lightgrey"}},[n("div",{staticStyle:{"flex-grow":"20","margin-right":"6px"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.body,expression:"body"}],staticClass:"textarea",staticStyle:{"margin-bottom":"5px"},attrs:{placeholder:"댓글",rows:"2"},domProps:{value:t.body},on:{input:function(e){e.target.composing||(t.body=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"button is-primary",staticStyle:{"flex-grow":"1",height:"70px"},on:{click:function(e){return t.submitComment()}}},[t._v("\n        등록하기\n    ")])])}),[],!1,null,"0386605e",null).exports,CommentItem:Object(f.a)(j,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{padding:"10px","border-bottom":"1px solid #DBDBDB"}},[o("div",{staticClass:"flex space-between has-text-grey",staticStyle:{"padding-bottom":"3px"}},[o("p",{staticStyle:{"font-size":"14px"}},[t._v(t._s(t.comment.user.name))]),t._v(" "),o("p",{staticStyle:{"font-size":"14px"}},[t._v(t._s(t._f("humanTimestamp")(t.comment.created_at)))])]),t._v(" "),o("p",{staticStyle:{"padding-bottom":"5px"}},[t._v(t._s(t.comment.body))]),t._v(" "),o("div",{staticClass:"flex space-between"},[o("div",{staticClass:"flex align-items-center like-button",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.likeComment()}}},[t.comment.is_liked?t._e():o("img",{staticStyle:{width:"16px"},attrs:{src:n(228),alt:"like"}}),t._v(" "),t.comment.is_liked?o("img",{staticStyle:{width:"16px"},attrs:{src:n(239),alt:"like"}}):t._e(),t._v(" "),o("span",{staticStyle:{"margin-left":"5px"}},[t._v(t._s(t.comment.likes_count))])]),t._v(" "),t.comment.is_mine?o("div",{staticClass:"flex flex-end has-text-grey"},[o("p",{staticStyle:{"font-size":"14px",cursor:"pointer"},on:{click:function(e){return t.deleteComment()}}},[t._v("삭제")])]):t._e()])])}),[],!1,null,"41f14a4f",null).exports}},T=(n(274),Object(f.a)(I,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{"margin-bottom":"30px"}},[o("div",{staticClass:"flex space-between",staticStyle:{padding:"0 15px 5px"}},[o("div",{staticClass:"flex align-items-center like-button",on:{click:function(e){return t.likePost()}}},[t.post.is_liked?t._e():o("img",{staticStyle:{width:"16px"},attrs:{src:n(228),alt:"like"}}),t._v(" "),t.post.is_liked?o("img",{staticStyle:{width:"16px"},attrs:{src:n(239),alt:"like"}}):t._e(),t._v(" "),o("span",{staticStyle:{"margin-left":"5px"}},[t._v(t._s(t.post.likes_count))])]),t._v(" "),o("p",[t._v("댓글: "),o("span",[t._v(t._s(t.post.comments_count)+"개")])])]),t._v(" "),o("comment-form"),t._v(" "),t._l(t.comments,(function(t,e){return o("comment-item",{key:e,attrs:{comment:t}})})),t._v(" "),0===t.comments.length?o("div",{staticClass:"flex flex-center align-items-center",staticStyle:{height:"60px"}},[o("p",[t._v("첫 번째 댓글을 달아보세요.")])]):t._e(),t._v(" "),o("div",{staticClass:"flex flex-center align-items-center",staticStyle:{height:"60px"}},[t.isNoMore?t._e():o("p",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.fetchComments()}}},[t._v("더 보기")]),t._v(" "),t.isNoMore&&0!==t.comments.length?o("p",{on:{click:function(e){return t.fetchComments()}}},[t._v("더 이상 댓글이 없습니다.")]):t._e()])],2)}),[],!1,null,"6bcca734",null).exports),D={extends:w,components:{CommentsList:T}},O=Object(f.a)(D,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"container",staticStyle:{margin:"10px"}},[o("div",{staticClass:"flex align-items-center",staticStyle:{"margin-bottom":"10px"},on:{click:t.backToList}},[o("img",{staticStyle:{width:"20px","margin-right":"5px"},attrs:{src:n(229),alt:"back"}}),t._v(" "),o("p",{staticStyle:{"font-size":"18px","font-weight":"600"}},[t._v("목록으로 돌아가기")])]),t._v(" "),o("div",{staticClass:"header",staticStyle:{"border-bottom":"1px solid lightgrey","padding-bottom":"8px"}},[o("p",{staticClass:"has-text-black-ter",staticStyle:{"font-size":"16px","font-weight":"600"}},[t._v("\n                "+t._s(t.post.title)+"\n            ")]),t._v(" "),o("div",{staticClass:"flex space-between align-items-center has-text-grey",staticStyle:{"margin-top":"2px","font-size":"14px"}},[o("p",[t._v(t._s(t.post.user.name))]),t._v(" "),o("div",{staticClass:"flex flex-end"},[t.post.is_mine?o("p",{staticStyle:{"margin-right":"5px",cursor:"pointer"},on:{click:function(e){return t.editPost()}}},[t._v("\n                        수정\n                    ")]):t._e(),t._v(" "),t.post.is_mine?o("p",{staticStyle:{"margin-right":"5px"}},[t._v("|")]):t._e(),t._v(" "),t.post.is_mine?o("p",{staticStyle:{"margin-right":"5px",cursor:"pointer"},on:{click:function(e){return t.deletePost()}}},[t._v("\n                        삭제\n                    ")]):t._e(),t._v(" "),t.post.is_mine?o("p",{staticStyle:{"margin-right":"5px"}},[t._v("|")]):t._e(),t._v(" "),o("p",[t._v(t._s(t._f("humanTimestamp")(t.post.created_at)))])])])]),t._v(" "),o("div",{staticClass:"ql-editor",staticStyle:{"min-height":"150px",padding:"12px 0 30px"},domProps:{innerHTML:t._s(t.postBody)}}),t._v(" "),o("comments-list"),t._v(" "),o("div",{staticClass:"flex align-items-center",staticStyle:{"padding-left":"5px","margin-bottom":"10px"},on:{click:t.backToList}},[o("img",{staticStyle:{width:"20px","margin-right":"5px"},attrs:{src:n(229),alt:"back"}}),t._v(" "),o("p",{staticStyle:{"font-size":"18px","font-weight":"600"}},[t._v("목록으로 돌아가기")])])],1)])}),[],!1,null,"523ee953",null).exports,L={asyncData:(d=Object(h.a)(regeneratorRuntime.mark((function t(e){var n,o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,o=e.params,e.query,e.error,r=o.post,t.next=4,n.dispatch("posts/fetchPost",{post_id:r});case 4:case"end":return t.stop()}}),t)}))),function(t){return d.apply(this,arguments)}),computed:{isMobile:function(){return this.$device.isMobile?O:w},post:function(){return this.$store.state.posts.post},postBody:function(){try{var text=JSON.parse(this.post.body).ops.reduce((function(t,e){return e.hasOwnProperty("insert")&&"string"==typeof e.insert?t+e.insert:t}),""),image=JSON.parse(this.post.body).ops.find((function(t){return t.hasOwnProperty("insert")&&"object"===Object(x.a)(t.insert)&&t.insert.hasOwnProperty("image")}));return{text:text,image:image?image.insert.image:null}}catch(t){return this.post.body}}},beforeRouteEnter:function(t,e,n){n((function(t){t.$store.commit("SET_PREVIOUS_PAGE",e)}))},head:function(){var title=this.post?"필굿 | "+this.post.title:"필굿 | POST",t=this.post?this.postBody.text.substring(0,100)+"...":"Your fans can use all the functions of the Fanboards",e=this.post&&this.postBody.image?this.postBody.image:"https://around-me-public.s3.ap-northeast-2.amazonaws.com/public/suji-sarams-space-seo.png";return{title:title,meta:[{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:t},{hid:"description",property:"description",content:t},{hid:"og:url",property:"og:url",content:"".concat("http://localhost:3000","/posts/").concat(1*this.$route.params.post)},{hid:"og:image",property:"og:image",content:e},{hid:"og:image:secure_url",property:"og:image:secure_url",content:"https://around-me-public.s3.ap-northeast-2.amazonaws.com/public/suji-sarams-space-seo.png"},{hid:"og:image:width",property:"og:image:width",content:"1200"},{hid:"og:image:height",property:"og:image:height",content:"1200"},{hid:"og:image:type",property:"og:image:type",content:"image/png"}]}}},z=Object(f.a)(L,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e(this.isMobile,{tag:"component"})],1)}),[],!1,null,"654b4982",null);e.default=z.exports}}]);