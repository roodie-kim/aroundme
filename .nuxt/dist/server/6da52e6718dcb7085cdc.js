exports.ids=[8],exports.modules={102:function(t,e,o){"use strict";o.r(e);var r=o(75),n=o.n(r);for(var c in r)"default"!==c&&function(t){o.d(e,t,(function(){return r[t]}))}(c);e.default=n.a},103:function(t,e,o){(e=o(2)(!1)).push([t.i,".like-button[data-v-e59b249c]{border:1px solid #000;border-radius:4px;padding:0 5px}",""]),t.exports=e},104:function(t,e,o){"use strict";o.r(e);var r=o(76),n=o.n(r);for(var c in r)"default"!==c&&function(t){o.d(e,t,(function(){return r[t]}))}(c);e.default=n.a},105:function(t,e,o){(e=o(2)(!1)).push([t.i,".like-button[data-v-6bcca734]{border:1px solid #000;border-radius:4px;padding:0 5px}",""]),t.exports=e},118:function(t,e,o){"use strict";o.r(e);var r={props:{commentId:{type:Number,default:null}},data:()=>({body:""}),computed:{post(){return this.$store.state.posts.post},comment(){return{post_id:this.post.id,comment_id:this.commentId,body:this.body}}},methods:{async submitComment(){if(this.isAuthenticated){(await this.$store.dispatch("comments/createComment",this.comment)).status&&(this.body="")}else this.$buefy.dialog.confirm({title:"엇!",message:"로그인이 필요한 페이지입니다. 지금 로그인 하시겠습니까?",cancelText:"아니요",confirmText:"네",onConfirm:()=>this.$router.push("/auth/login")})}}},n=o(1);var c=Object(n.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"flex has-background-white-ter",staticStyle:{padding:"15px 5px","border-bottom":"1px solid lightgrey","border-top":"1px solid lightgrey"}},[this._ssrNode('<div style="flex-grow: 20; margin-right: 6px;" data-v-74c7b849><textarea placeholder="댓글" rows="2" class="textarea" style="margin-bottom: 5px;" data-v-74c7b849>'+this._ssrEscape(this._s(this.body))+'</textarea></div> <button class="button is-primary" style="flex-grow: 1; height: 70px;" data-v-74c7b849>\n        등록하기\n    </button>')])}),[],!1,(function(t){}),"74c7b849","2073f4b2").exports,d={props:{comment:{type:Object,default:null}},methods:{likeComment(){const data={post_id:null,comment_id:this.comment.id};this.$store.dispatch("comments/likeComment",data)},deleteComment(){this.$store.dispatch("comments/deleteComment",this.comment.id)}}};var l=Object(n.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticStyle:{padding:"10px 5px 5px","border-bottom":"1px solid #DBDBDB"}},[t._ssrNode('<div class="flex space-between has-text-grey" style="padding-bottom: 3px;" data-v-739aee52><p style="font-size: 14px;" data-v-739aee52>'+t._ssrEscape(t._s(t.comment.user.name))+'</p> <p style="font-size: 14px;" data-v-739aee52>'+t._ssrEscape(t._s(t._f("humanTimestamp")(t.comment.created_at)))+'</p></div> <p style="padding-bottom: 5px;" data-v-739aee52>'+t._ssrEscape(t._s(t.comment.body))+'</p> <div class="flex flex-end" data-v-739aee52>'+(t.comment.is_mine?'<div class="flex flex-end has-text-grey" data-v-739aee52><p style="font-size: 14px; cursor: pointer;" data-v-739aee52>삭제</p></div>':"\x3c!----\x3e")+"</div>")])}),[],!1,(function(t){}),"739aee52","4a67a381").exports,m={components:{CommentForm:c,CommentItem:l},computed:{post(){return this.$store.state.posts.post},commentsQuery(){return{post_id:this.$store.state.posts.post.id,page:this.$store.state.comments.page,per_page:20}},comments(){return this.$store.state.comments.comments},isNoMore(){return this.$store.state.comments.isNoMore}},methods:{async fetchComments(){await this.$store.dispatch("comments/fetchComments",this.commentsQuery)},async likePost(){const data={post_id:this.post.id,comment_id:null};await this.$store.dispatch("posts/postLike",data)}},async mounted(){this.$store.commit("comments/RESET_COMMENTS"),this.$store.commit("comments/SET_IS_NO_MORE",!1),this.$store.commit("comments/SET_PAGE",1),await this.fetchComments()}};var x=Object(n.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._ssrNode('<div class="flex space-between" style="padding-bottom: 5px; cursor: pointer;" data-v-e59b249c><div class="flex align-items-center like-button" data-v-e59b249c>'+(t.post.is_liked?"\x3c!----\x3e":"<img"+t._ssrAttr("src",o(64))+' alt="like" style="width: 16px;" data-v-e59b249c>')+" "+(t.post.is_liked?"<img"+t._ssrAttr("src",o(74))+' alt="like" style="width: 16px;" data-v-e59b249c>':"\x3c!----\x3e")+' <span style="margin-left: 5px;" data-v-e59b249c>'+t._ssrEscape(t._s(t.post.likes_count))+"</span></div> <p data-v-e59b249c>댓글: <span data-v-e59b249c>"+t._ssrEscape(t._s(t.post.comments_count)+"개")+"</span></p></div> "),r("comment-form"),t._ssrNode(" "),t._l(t.comments,(function(t,e){return r("comment-item",{key:e,attrs:{comment:t}})})),t._ssrNode(" "+(0===t.comments.length?'<div class="flex flex-center align-items-center" style="height: 60px;" data-v-e59b249c><p data-v-e59b249c>첫 번째 댓글을 달아보세요.</p></div>':"\x3c!----\x3e")+' <div class="flex flex-center align-items-center" style="height: 60px;" data-v-e59b249c>'+(t.isNoMore?"\x3c!----\x3e":'<p style="cursor: pointer;" data-v-e59b249c>더 보기</p>')+" "+(t.isNoMore&&0!==t.comments.length?"<p data-v-e59b249c>더 이상 댓글이 없습니다.</p>":"\x3c!----\x3e")+"</div>")],2)}),[],!1,(function(t){var e=o(102);e.__inject__&&e.__inject__(t)}),"e59b249c","07b08d5a").exports,h={components:{CommentsList:x},data:()=>({quill:null}),computed:{post(){return this.$store.state.posts.post},postBody(){if(!this.quill||!this.post)return"";try{return this.quill.setContents(JSON.parse(this.post.body)),this.quill.root.innerHTML}catch(t){return this.quill.setText(this.post.body),this.quill.root.innerHTML}},previousPage(){return this.$store.state.previousPage}},methods:{editPost(){this.$router.push(`/posts/${this.post.id}/edit`)},async deletePost(){(await this.$store.dispatch("posts/deletePost",this.post.id)).status&&this.$router.go(-1)},backToList(){"posts-post-edit"===this.previousPage.name?this.$router.go(-3):"posts-create"===this.previousPage.name?this.$router.go(-2):this.$router.go(-1)}},mounted(){const t=o(63),e=document.createElement("div");this.quill=new t(e)}};var v=Object(n.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container",staticStyle:{margin:"0 15px 10px"}},[t._ssrNode('<div class="flex" style="margin-bottom: 10px; cursor: pointer;" data-v-f0b91ed6><img'+t._ssrAttr("src",o(65))+' alt="back" style="width: 20px; margin-right: 5px;" data-v-f0b91ed6> <p style="font-size: 18px; font-weight: 600;" data-v-f0b91ed6>목록으로 돌아가기</p></div> <div class="header" style="border-bottom: 1px solid lightgrey; padding-bottom: 5px;" data-v-f0b91ed6><p class="has-text-black-ter" style="font-size: 16px; font-weight: 600; word-break: break-word;" data-v-f0b91ed6>'+t._ssrEscape("\n            "+t._s(t.post.title)+"\n        ")+'</p> <div class="flex space-between align-items-center has-text-grey" style="margin-top: 2px; font-size: 14px;" data-v-f0b91ed6><p data-v-f0b91ed6>'+t._ssrEscape(t._s(t.post.user.name))+'</p> <div class="flex flex-end" data-v-f0b91ed6>'+(t.post.is_mine?'<p style="margin-right: 5px; cursor: pointer;" data-v-f0b91ed6>\n                    수정\n                </p>':"\x3c!----\x3e")+" "+(t.post.is_mine?'<p style="margin-right: 5px;" data-v-f0b91ed6>|</p>':"\x3c!----\x3e")+" "+(t.post.is_mine?'<p style="margin-right: 5px; cursor: pointer;" data-v-f0b91ed6>\n                    삭제\n                </p>':"\x3c!----\x3e")+" "+(t.post.is_mine?'<p style="margin-right: 5px;" data-v-f0b91ed6>|</p>':"\x3c!----\x3e")+" <p data-v-f0b91ed6>"+t._ssrEscape(t._s(t._f("humanTimestamp")(t.post.created_at)))+'</p></div></div></div> <div class="ql-editor" style="min-height: 300px; padding-bottom: 50px;" data-v-f0b91ed6>'+t._s(t.postBody)+'</div> <div style="margin-bottom: 30px;" data-v-f0b91ed6>'+t._ssrList(t.post.tags,(function(e,o){return'<span class="has-text-warm-red" style="font-size: 14px; margin-right: 10px;" data-v-f0b91ed6>'+t._ssrEscape("\n            #"+t._s(e.name)+"\n        ")+"</span>"}))+"</div> "),r("comments-list"),t._ssrNode(' <div class="flex" style="margin-top: 10px; cursor: pointer;" data-v-f0b91ed6><img'+t._ssrAttr("src",o(65))+' alt="back" style="width: 20px; margin-right: 5px;" data-v-f0b91ed6> <p style="font-size: 18px; font-weight: 600;" data-v-f0b91ed6>목록으로 돌아가기</p></div>')],2)}),[],!1,(function(t){}),"f0b91ed6","cd8dbe76").exports,f={extends:c};var y={extends:l};var _={extends:x,components:{CommentForm:Object(n.a)(f,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"flex has-background-white-ter",staticStyle:{padding:"15px 10px","border-bottom":"1px solid lightgrey","border-top":"1px solid lightgrey"}},[this._ssrNode('<div style="flex-grow: 20; margin-right: 6px;" data-v-0386605e><textarea placeholder="댓글" rows="2" class="textarea" style="margin-bottom: 5px;" data-v-0386605e>'+this._ssrEscape(this._s(this.body))+'</textarea></div> <button class="button is-primary" style="flex-grow: 1; height: 70px;" data-v-0386605e>\n        등록하기\n    </button>')])}),[],!1,(function(t){}),"0386605e","13d7ed81").exports,CommentItem:Object(n.a)(y,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticStyle:{padding:"10px","border-bottom":"1px solid #DBDBDB"}},[t._ssrNode('<div class="flex space-between has-text-grey" style="padding-bottom: 3px;" data-v-41f14a4f><p style="font-size: 14px;" data-v-41f14a4f>'+t._ssrEscape(t._s(t.comment.user.name))+'</p> <p style="font-size: 14px;" data-v-41f14a4f>'+t._ssrEscape(t._s(t._f("humanTimestamp")(t.comment.created_at)))+'</p></div> <p style="padding-bottom: 5px;" data-v-41f14a4f>'+t._ssrEscape(t._s(t.comment.body))+'</p> <div class="flex space-between" data-v-41f14a4f><div class="flex align-items-center like-button" style="cursor: pointer;" data-v-41f14a4f>'+(t.comment.is_liked?"\x3c!----\x3e":"<img"+t._ssrAttr("src",o(64))+' alt="like" style="width: 16px;" data-v-41f14a4f>')+" "+(t.comment.is_liked?"<img"+t._ssrAttr("src",o(74))+' alt="like" style="width: 16px;" data-v-41f14a4f>':"\x3c!----\x3e")+' <span style="margin-left: 5px;" data-v-41f14a4f>'+t._ssrEscape(t._s(t.comment.likes_count))+"</span></div> "+(t.comment.is_mine?'<div class="flex flex-end has-text-grey" data-v-41f14a4f><p style="font-size: 14px; cursor: pointer;" data-v-41f14a4f>삭제</p></div>':"\x3c!----\x3e")+"</div>")])}),[],!1,(function(t){}),"41f14a4f","285a1892").exports}};var M=Object(n.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{"margin-bottom":"30px"}},[t._ssrNode('<div class="flex space-between" style="padding: 0 15px 5px;" data-v-6bcca734><div class="flex align-items-center like-button" data-v-6bcca734>'+(t.post.is_liked?"\x3c!----\x3e":"<img"+t._ssrAttr("src",o(64))+' alt="like" style="width: 16px;" data-v-6bcca734>')+" "+(t.post.is_liked?"<img"+t._ssrAttr("src",o(74))+' alt="like" style="width: 16px;" data-v-6bcca734>':"\x3c!----\x3e")+' <span style="margin-left: 5px;" data-v-6bcca734>'+t._ssrEscape(t._s(t.post.likes_count))+"</span></div> <p data-v-6bcca734>댓글: <span data-v-6bcca734>"+t._ssrEscape(t._s(t.post.comments_count)+"개")+"</span></p></div> "),r("comment-form"),t._ssrNode(" "),t._l(t.comments,(function(t,e){return r("comment-item",{key:e,attrs:{comment:t}})})),t._ssrNode(" "+(0===t.comments.length?'<div class="flex flex-center align-items-center" style="height: 60px;" data-v-6bcca734><p data-v-6bcca734>첫 번째 댓글을 달아보세요.</p></div>':"\x3c!----\x3e")+' <div class="flex flex-center align-items-center" style="height: 60px;" data-v-6bcca734>'+(t.isNoMore?"\x3c!----\x3e":'<p style="cursor: pointer;" data-v-6bcca734>더 보기</p>')+" "+(t.isNoMore&&0!==t.comments.length?"<p data-v-6bcca734>더 이상 댓글이 없습니다.</p>":"\x3c!----\x3e")+"</div>")],2)}),[],!1,(function(t){var e=o(104);e.__inject__&&e.__inject__(t)}),"6bcca734","25612858").exports,N={extends:v,components:{CommentsList:M}};var w=Object(n.a)(N,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._ssrNode('<div class="container" style="margin: 10px;" data-v-523ee953>',"</div>",[t._ssrNode('<div class="flex align-items-center" style="margin-bottom: 10px;" data-v-523ee953><img'+t._ssrAttr("src",o(65))+' alt="back" style="width: 20px; margin-right: 5px;" data-v-523ee953> <p style="font-size: 18px; font-weight: 600;" data-v-523ee953>목록으로 돌아가기</p></div> <div class="header" style="border-bottom: 1px solid lightgrey; padding-bottom: 8px;" data-v-523ee953><p class="has-text-black-ter" style="font-size: 16px; font-weight: 600" data-v-523ee953>'+t._ssrEscape("\n                "+t._s(t.post.title)+"\n            ")+'</p> <div class="flex space-between align-items-center has-text-grey" style="margin-top: 2px; font-size: 14px;" data-v-523ee953><p data-v-523ee953>'+t._ssrEscape(t._s(t.post.user.name))+'</p> <div class="flex flex-end" data-v-523ee953>'+(t.post.is_mine?'<p style="margin-right: 5px; cursor: pointer;" data-v-523ee953>\n                        수정\n                    </p>':"\x3c!----\x3e")+" "+(t.post.is_mine?'<p style="margin-right: 5px;" data-v-523ee953>|</p>':"\x3c!----\x3e")+" "+(t.post.is_mine?'<p style="margin-right: 5px; cursor: pointer;" data-v-523ee953>\n                        삭제\n                    </p>':"\x3c!----\x3e")+" "+(t.post.is_mine?'<p style="margin-right: 5px;" data-v-523ee953>|</p>':"\x3c!----\x3e")+" <p data-v-523ee953>"+t._ssrEscape(t._s(t._f("humanTimestamp")(t.post.created_at)))+'</p></div></div></div> <div class="ql-editor" style="min-height: 150px; padding: 12px 0 30px" data-v-523ee953>'+t._s(t.postBody)+"</div> "),r("comments-list"),t._ssrNode(' <div class="flex align-items-center" style="padding-left: 5px; margin-bottom: 10px;" data-v-523ee953><img'+t._ssrAttr("src",o(65))+' alt="back" style="width: 20px; margin-right: 5px;" data-v-523ee953> <p style="font-size: 18px; font-weight: 600;" data-v-523ee953>목록으로 돌아가기</p></div>')],2)])}),[],!1,(function(t){}),"523ee953","1f991564").exports,j={async asyncData({store:t,params:e,query:o,error:r}){const n=e.post;await t.dispatch("posts/fetchPost",{post_id:n})},computed:{isMobile(){return this.$device.isMobile?w:v},post(){return this.$store.state.posts.post},postBody(){try{const text=JSON.parse(this.post.body).ops.reduce((t,e)=>e.hasOwnProperty("insert")&&"string"==typeof e.insert?t+e.insert:t,""),image=JSON.parse(this.post.body).ops.find(t=>t.hasOwnProperty("insert")&&"object"==typeof t.insert&&t.insert.hasOwnProperty("image"));return{text:text,image:image?image.insert.image:null}}catch(t){return this.post.body}}},beforeRouteEnter(t,e,o){o(t=>{t.$store.commit("SET_PREVIOUS_PAGE",e)})},head(){const title=this.post?"필굿 | "+this.post.title:"필굿 | POST",t=this.post?this.postBody.text.substring(0,100)+"...":"Your fans can use all the functions of the Fanboards",e=this.post&&this.postBody.image?this.postBody.image:"https://around-me-public.s3.ap-northeast-2.amazonaws.com/public/suji-sarams-space-seo.png";return{title:title,meta:[{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:t},{hid:"description",property:"description",content:t},{hid:"og:url",property:"og:url",content:`http://localhost:3000/posts/${1*this.$route.params.post}`},{hid:"og:image",property:"og:image",content:e},{hid:"og:image:secure_url",property:"og:image:secure_url",content:"https://around-me-public.s3.ap-northeast-2.amazonaws.com/public/suji-sarams-space-seo.png"},{hid:"og:image:width",property:"og:image:width",content:"1200"},{hid:"og:image:height",property:"og:image:height",content:"1200"},{hid:"og:image:type",property:"og:image:type",content:"image/png"}]}}};var I=Object(n.a)(j,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e(this.isMobile,{tag:"component"})],1)}),[],!1,(function(t){}),"654b4982","4e0ba99c");e.default=I.exports},64:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMiAyMS41OTNjLTUuNjMtNS41MzktMTEtMTAuMjk3LTExLTE0LjQwMiAwLTMuNzkxIDMuMDY4LTUuMTkxIDUuMjgxLTUuMTkxIDEuMzEyIDAgNC4xNTEuNTAxIDUuNzE5IDQuNDU3IDEuNTktMy45NjggNC40NjQtNC40NDcgNS43MjYtNC40NDcgMi41NCAwIDUuMjc0IDEuNjIxIDUuMjc0IDUuMTgxIDAgNC4wNjktNS4xMzYgOC42MjUtMTEgMTQuNDAybTUuNzI2LTIwLjU4M2MtMi4yMDMgMC00LjQ0NiAxLjA0Mi01LjcyNiAzLjIzOC0xLjI4NS0yLjIwNi0zLjUyMi0zLjI0OC01LjcxOS0zLjI0OC0zLjE4MyAwLTYuMjgxIDIuMTg3LTYuMjgxIDYuMTkxIDAgNC42NjEgNS41NzEgOS40MjkgMTIgMTUuODA5IDYuNDMtNi4zOCAxMi0xMS4xNDggMTItMTUuODA5IDAtNC4wMTEtMy4wOTUtNi4xODEtNi4yNzQtNi4xODEiLz48L3N2Zz4="},65:function(t,e,o){t.exports=o.p+"img/468bfe0.svg"},74:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9InJlZCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0xMiA0LjI0OGMtMy4xNDgtNS40MDItMTItMy44MjUtMTIgMi45NDQgMCA0LjY2MSA1LjU3MSA5LjQyNyAxMiAxNS44MDggNi40My02LjM4MSAxMi0xMS4xNDcgMTItMTUuODA4IDAtNi43OTItOC44NzUtOC4zMDYtMTItMi45NDR6Ii8+PC9zdmc+Cg=="},75:function(t,e,o){var content=o(103);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=o(3).default;t.exports.__inject__=function(t){r("59fa23f0",content,!0,t)}},76:function(t,e,o){var content=o(105);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=o(3).default;t.exports.__inject__=function(t){r("70607288",content,!0,t)}}};