exports.ids=[7],exports.modules={106:function(t,e,n){"use strict";n.r(e);var o=n(77),d=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=d.a},107:function(t,e,n){(e=n(2)(!1)).push([t.i,".button-outer[data-v-7af434a0]{padding:20px 0 0;display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end}.button-submit[data-v-7af434a0]{min-width:120px}.title-input[data-v-7af434a0]{padding:12px 15px;margin-bottom:20px}.quill-editor[data-v-7af434a0]{margin-bottom:10px}",""]),t.exports=e},108:function(t,e,n){"use strict";n.r(e);var o=n(78),d=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=d.a},109:function(t,e,n){(e=n(2)(!1)).push([t.i,".button-outer[data-v-086542a8]{padding:20px 0 0;display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end}.button-submit[data-v-086542a8]{min-width:120px}.title-input[data-v-086542a8]{padding:12px 15px;margin-bottom:20px}.quill-editor[data-v-086542a8]{margin-bottom:10px}",""]),t.exports=e},126:function(t,e,n){"use strict";n.r(e);var o={data:()=>({quill:null,editedPost:{id:null,title:"",body:"",tags:null},tags:""}),computed:{post(){return this.$store.state.posts.post},parsedTags(){if(0===this.tags.length)return[];const t=this.tags.trim().split(/[\s,]+/);return t.length>=10?t.slice(0,10):t}},methods:{updateBody(){this.editedPost.body=JSON.stringify(this.quill.getContents())},changeTagsIntoString(){let t="";this.post.tags.forEach((e,n)=>{0===n?t+=e.name:t=t+", "+e.name}),this.tags=t},async submit(){const t=this.validateBeforeSubmit();if(t.status){this.editedPost.tags=this.parsedTags;const t=await this.$store.dispatch("posts/editPost",this.editedPost);t.status?(this.$buefy.toast.open("등록되었습니다."),this.$router.push(`/posts/${t.data.id}`)):this.$buefy.toast.open("등록이 실패하였습니다. 나중에 다시 시도해주세요.")}else this.$buefy.toast.open(t.message)},validateBeforeSubmit(){const t={status:!1};return this.editedPost.title&&""!==this.editedPost.title.trim()?0!==this.quill.getText().trim().length||this.quill.container.firstChild.innerHTML.includes("img")||this.quill.container.firstChild.innerHTML.includes("video")?(t.status=!0,t):(t.message="내용을 작성해주세요.",t):(t.message="글 제목을 입력해주세요.",t)}},mounted(){const t={modules:{toolbar:{container:[[{size:["small",!1,"large","huge"]}],["bold","italic","underline","strike"],[{color:[]},{background:[]}],[{align:"center"},{align:"right"},{align:"justify"}],["link","image"]],handlers:{image:this.imageHandler}}},theme:"snow"},e=n(63),o=this.$refs.quillEditor;this.quill=new e(o,t),this.quill.on("text-change",this.updateBody),this.editedPost.id=this.post.id,this.editedPost.title=this.post.title,this.editedPost.tags=this.post.tags,this.quill.setContents(JSON.parse(this.post.body)),this.changeTagsIntoString()}},d=n(1);var r=Object(d.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"container"},[this._ssrNode('<h4 class="title is-size-4" data-v-7af434a0>수정하기</h4> <input placeholder="제목"'+this._ssrAttr("value",this.editedPost.title)+' class="input title-input" data-v-7af434a0> <div class="quill-editor" data-v-7af434a0></div> <div class="button-outer" data-v-7af434a0><button class="button is-primary button-submit" data-v-7af434a0><strong data-v-7af434a0>수정하기</strong></button></div>')])}),[],!1,(function(t){var e=n(106);e.__inject__&&e.__inject__(t)}),"7af434a0","173dd498").exports,l={extends:r};var c=Object(d.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"container",staticStyle:{padding:"0 10px"}},[this._ssrNode('<h4 class="title is-size-4" data-v-086542a8>수정하기</h4> <input placeholder="제목"'+this._ssrAttr("value",this.editedPost.title)+' class="input title-input" data-v-086542a8> <div class="quill-editor" data-v-086542a8></div> <div class="button-outer" data-v-086542a8><button class="button is-primary button-submit" data-v-086542a8><strong data-v-086542a8>수정하기</strong></button></div>')])}),[],!1,(function(t){var e=n(108);e.__inject__&&e.__inject__(t)}),"086542a8","c34cce82").exports,h={middleware:"authorized",name:"PostEdit",async asyncData({store:t,params:e,query:n,error:o}){const d=e.post;await t.dispatch("posts/fetchPost",{post_id:d})},computed:{isMobile(){return this.$device.isMobile?c:r}}};var f=Object(d.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e(this.isMobile,{tag:"component"})],1)}),[],!1,(function(t){}),"0b69999a","48d26c4c");e.default=f.exports},77:function(t,e,n){var content=n(107);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(3).default;t.exports.__inject__=function(t){o("6f6d981e",content,!0,t)}},78:function(t,e,n){var content=n(109);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(3).default;t.exports.__inject__=function(t){o("4f276aac",content,!0,t)}}};