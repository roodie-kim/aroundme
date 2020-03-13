exports.ids=[9],exports.modules={100:function(t,e,o){(e=o(2)(!1)).push([t.i,".category-select[data-v-a6e30758]{width:200px}.category-select[data-v-a6e30758],.title-input[data-v-a6e30758]{margin-bottom:20px}.quill-editor[data-v-a6e30758]{margin-bottom:10px}.button-outer[data-v-a6e30758]{padding:20px 0 0;display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end}.button-submit[data-v-a6e30758]{min-width:120px}.title-input[data-v-a6e30758]{padding:12px 15px;margin-bottom:20px}",""]),t.exports=e},124:function(t,e,o){"use strict";o.r(e);var n={data:()=>({quill:null,post:{title:"",body:"",board_type:null,tags:null,area:null,sub_type:null}}),computed:{boards(){const t=[...this.$store.state.boards.boards];return this.user&&this.user.is_admin?t:t.filter((function(t){return!t.is_admin}))},areas(){return this.$store.state.posts.areas},subTypes(){return this.$store.state.posts.subTypes}},watch:{post:{deep:!0,handler(t){"B102"!==t.board_type&&(this.post.area=null,this.post.sub_type=null)}}},methods:{updateBody(){this.post.body=JSON.stringify(this.quill.getContents())},async submit(){const t=this.validateBeforeSubmit();if(t.status){this.post.tags=this.parsedTags;const t=await this.$store.dispatch("posts/createPost",this.post);t.status?(this.$buefy.toast.open("등록되었습니다."),this.$router.push(`/posts/${t.data.id}`)):this.$buefy.toast.open("등록이 실패하였습니다. 나중에 다시 시도해주세요.")}else this.$buefy.toast.open(t.message)},validateBeforeSubmit(){const t={status:!1};return null===this.post.board_type?(t.message="게시판을 선택해 주세요.",t):this.post.title&&""!==this.post.title.trim()?0!==this.quill.getText().trim().length||this.quill.container.firstChild.innerHTML.includes("img")||this.quill.container.firstChild.innerHTML.includes("video")?(t.status=!0,t):(t.message="내용을 작성해주세요.",t):(t.message="글 제목을 입력해주세요.",t)}},mounted(){const t={modules:{toolbar:{container:[[{size:["small",!1,"large","huge"]}],["bold","italic","underline","strike"],[{color:[]},{background:[]}],[{align:"center"},{align:"right"},{align:"justify"}],["link","image"]],handlers:{image:this.imageHandler}}},theme:"snow"},e=o(62),n=this.$refs.quillEditor;this.quill=new e(n,t),this.quill.on("text-change",this.updateBody),null!==this.$store.state.boards.currentBoard&&(this.post.board_type=this.$store.state.boards.currentBoard.cd)}},r=o(1);var l=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[t._ssrNode('<h4 class="title is-size-4" data-v-2650a1e0>새글쓰기</h4> '),o("b-select",{staticClass:"category-select",attrs:{placeholder:"카테고리를 선택하세요",expanded:""},model:{value:t.post.board_type,callback:function(e){t.$set(t.post,"board_type",e)},expression:"post.board_type"}},t._l(t.boards,(function(e){return o("option",{key:e.name,domProps:{value:e.cd}},[t._v("\n            "+t._s(e.name)+"\n        ")])})),0),t._ssrNode(" "),"B102"===t.post.board_type?t._ssrNode('<div class="flex" data-v-2650a1e0>',"</div>",[o("b-select",{staticClass:"category-select",staticStyle:{"margin-right":"20px"},attrs:{placeholder:"지역을 선택하세요",expanded:""},model:{value:t.post.area,callback:function(e){t.$set(t.post,"area",e)},expression:"post.area"}},t._l(t.areas,(function(area){return o("option",{key:area.name,domProps:{value:area.cd}},[t._v("\n                "+t._s(area.name)+"\n            ")])})),0),t._ssrNode(" "),o("b-select",{staticClass:"category-select",attrs:{placeholder:"구매/판매",expanded:""},model:{value:t.post.sub_type,callback:function(e){t.$set(t.post,"sub_type",e)},expression:"post.sub_type"}},t._l(t.subTypes,(function(e){return o("option",{key:e.name,domProps:{value:e.cd}},[t._v("\n                "+t._s(e.name)+"\n            ")])})),0)],2):t._e(),t._ssrNode(' <input placeholder="제목"'+t._ssrAttr("value",t.post.title)+' class="input title-input" data-v-2650a1e0> <div class="quill-editor" data-v-2650a1e0></div> <div class="button-outer" data-v-2650a1e0><button class="button is-primary button-submit" data-v-2650a1e0><strong data-v-2650a1e0>등록하기</strong></button></div>'+t._ssrEscape("\n    "+t._s(t.user)+"\n    ")+"<br data-v-2650a1e0>"+t._ssrEscape("\n    "+t._s(t.boards)+"\n"))],2)}),[],!1,(function(t){var e=o(97);e.__inject__&&e.__inject__(t)}),"2650a1e0","7d664326").exports,d={extends:l};var c=Object(r.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container",staticStyle:{padding:"0 10px"}},[t._ssrNode('<h4 class="title is-size-4" data-v-a6e30758>새글쓰기</h4> '),o("b-select",{staticClass:"category-select",attrs:{placeholder:"카테고리를 선택하세요",expanded:""},model:{value:t.post.board_type,callback:function(e){t.$set(t.post,"board_type",e)},expression:"post.board_type"}},t._l(t.boards,(function(e){return o("option",{key:e.name,domProps:{value:e.cd}},[t._v("\n            "+t._s(e.name)+"\n        ")])})),0),t._ssrNode(" "),"B102"===t.post.board_type?t._ssrNode('<div class="flex" data-v-a6e30758>',"</div>",[o("b-select",{staticClass:"category-select",staticStyle:{"margin-right":"20px"},attrs:{placeholder:"지역",expanded:""},model:{value:t.post.area,callback:function(e){t.$set(t.post,"area",e)},expression:"post.area"}},t._l(t.areas,(function(area){return o("option",{key:area.name,domProps:{value:area.cd}},[t._v("\n                "+t._s(area.name)+"\n            ")])})),0),t._ssrNode(" "),o("b-select",{staticClass:"category-select",attrs:{placeholder:"구매/판매",expanded:""},model:{value:t.post.sub_type,callback:function(e){t.$set(t.post,"sub_type",e)},expression:"post.sub_type"}},t._l(t.subTypes,(function(e){return o("option",{key:e.name,domProps:{value:e.cd}},[t._v("\n                "+t._s(e.name)+"\n            ")])})),0)],2):t._e(),t._ssrNode(' <input placeholder="제목"'+t._ssrAttr("value",t.post.title)+' class="input title-input" data-v-a6e30758> <div class="quill-editor" data-v-a6e30758></div> <div class="button-outer" data-v-a6e30758><button class="button is-primary button-submit" data-v-a6e30758><strong data-v-a6e30758>등록하기</strong></button></div>')],2)}),[],!1,(function(t){var e=o(99);e.__inject__&&e.__inject__(t)}),"a6e30758","0454f40d").exports,_={middleware:"authorized",name:"PostCreate",computed:{isMobile(){return this.$device.isMobile?c:l}}};var v=Object(r.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e(this.isMobile,{tag:"component"})],1)}),[],!1,(function(t){}),"01c9edc4","7db4f93c");e.default=v.exports},71:function(t,e,o){var content=o(98);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=o(3).default;t.exports.__inject__=function(t){n("0671f270",content,!0,t)}},72:function(t,e,o){var content=o(100);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=o(3).default;t.exports.__inject__=function(t){n("048ca2bd",content,!0,t)}},97:function(t,e,o){"use strict";o.r(e);var n=o(71),r=o.n(n);for(var l in n)"default"!==l&&function(t){o.d(e,t,(function(){return n[t]}))}(l);e.default=r.a},98:function(t,e,o){(e=o(2)(!1)).push([t.i,".category-select[data-v-2650a1e0]{width:200px}.category-select[data-v-2650a1e0],.title-input[data-v-2650a1e0]{margin-bottom:20px}.quill-editor[data-v-2650a1e0]{margin-bottom:10px}.button-outer[data-v-2650a1e0]{padding:20px 0 0;display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end}.button-submit[data-v-2650a1e0]{min-width:120px}.title-input[data-v-2650a1e0]{padding:12px 15px;margin-bottom:20px}",""]),t.exports=e},99:function(t,e,o){"use strict";o.r(e);var n=o(72),r=o.n(n);for(var l in n)"default"!==l&&function(t){o.d(e,t,(function(){return n[t]}))}(l);e.default=r.a}};