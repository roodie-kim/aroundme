(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{242:function(t,e,n){var content=n(277);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("6f6d981e",content,!0,{sourceMap:!1})},243:function(t,e,n){var content=n(279);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("25ae6a52",content,!0,{sourceMap:!1})},276:function(t,e,n){"use strict";var o=n(242);n.n(o).a},277:function(t,e,n){(e=n(15)(!1)).push([t.i,".button-outer[data-v-7af434a0]{padding:20px 0 0;display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end}.button-submit[data-v-7af434a0]{min-width:120px}.title-input[data-v-7af434a0]{padding:12px 15px;margin-bottom:20px}.quill-editor[data-v-7af434a0]{margin-bottom:10px}",""]),t.exports=e},278:function(t,e,n){"use strict";var o=n(243);n.n(o).a},279:function(t,e,n){(e=n(15)(!1)).push([t.i,".button-outer[data-v-182865fa]{padding:20px 0 0;display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end}.button-submit[data-v-182865fa]{min-width:120px}.title-input[data-v-182865fa]{padding:12px 15px;margin-bottom:20px}.quill-editor[data-v-182865fa]{margin-bottom:10px}",""]),t.exports=e},294:function(t,e,n){"use strict";n.r(e);n(12);var o,r,l=n(2),d=(n(77),n(93),n(17),n(54),{data:function(){return{quill:null,editedPost:{id:null,title:"",body:"",tags:null},tags:""}},computed:{post:function(){return this.$store.state.posts.post},parsedTags:function(){if(0===this.tags.length)return[];var t=this.tags.trim().split(/[\s,]+/);return t.length>=10?t.slice(0,10):t}},methods:{updateBody:function(){this.editedPost.body=JSON.stringify(this.quill.getContents())},changeTagsIntoString:function(){var t="";this.post.tags.forEach((function(e,n){0===n?t+=e.name:t=t+", "+e.name})),this.tags=t},submit:(o=Object(l.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((e=this.validateBeforeSubmit()).status){t.next=5;break}this.$buefy.toast.open(e.message),t.next=10;break;case 5:return this.editedPost.tags=this.parsedTags,t.next=8,this.$store.dispatch("posts/editPost",this.editedPost);case 8:(n=t.sent).status?(this.$buefy.toast.open("등록되었습니다."),this.$router.push("/posts/".concat(n.data.id))):this.$buefy.toast.open("등록이 실패하였습니다. 나중에 다시 시도해주세요.");case 10:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)}),validateBeforeSubmit:function(){var t={status:!1};return this.editedPost.title&&""!==this.editedPost.title.trim()?0!==this.quill.getText().trim().length||this.quill.container.firstChild.innerHTML.includes("img")||this.quill.container.firstChild.innerHTML.includes("video")?(t.status=!0,t):(t.message="내용을 작성해주세요.",t):(t.message="글 제목을 입력해주세요.",t)}},mounted:function(){var t={modules:{toolbar:{container:[[{size:["small",!1,"large","huge"]}],["bold","italic","underline","strike"],[{color:[]},{background:[]}],[{align:"center"},{align:"right"},{align:"justify"}],["link","image"]],handlers:{image:this.imageHandler}}},theme:"snow"},e=n(236),o=this.$refs.quillEditor;this.quill=new e(o,t),this.quill.on("text-change",this.updateBody),this.editedPost.id=this.post.id,this.editedPost.title=this.post.title,this.editedPost.tags=this.post.tags,this.quill.setContents(JSON.parse(this.post.body)),this.changeTagsIntoString()}}),c=(n(276),n(4)),h=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h4",{staticClass:"title is-size-4"},[t._v("수정하기")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.editedPost.title,expression:"editedPost.title"}],staticClass:"input title-input",attrs:{placeholder:"제목"},domProps:{value:t.editedPost.title},on:{input:function(e){e.target.composing||t.$set(t.editedPost,"title",e.target.value)}}}),t._v(" "),n("div",{ref:"quillEditor",staticClass:"quill-editor",on:{click:t.focusOnQuill}}),t._v(" "),n("div",{staticClass:"button-outer"},[n("button",{staticClass:"button is-primary button-submit",on:{click:t.submit}},[n("strong",[t._v("수정하기")])])])])}),[],!1,null,"7af434a0",null).exports,f={extends:h},m=(n(278),Object(c.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",staticStyle:{padding:"0 10px"}},[n("h4",{staticClass:"title is-size-4"},[t._v("수정하기")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.editedPost.title,expression:"editedPost.title"}],staticClass:"input title-input",attrs:{placeholder:"제목"},domProps:{value:t.editedPost.title},on:{input:function(e){e.target.composing||t.$set(t.editedPost,"title",e.target.value)}}}),t._v(" "),n("div",{ref:"quillEditor",staticClass:"quill-editor",on:{click:t.focusOnQuill}}),t._v(" "),n("p",{staticClass:"has-text-grey-light",staticStyle:{"font-size":"14px"}},[t._v("태그는 스페이스 혹 콤마로 구분되며 최대 10개까지 사용할 수 있습니다.")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.tags,expression:"tags"}],staticClass:"input title-input",staticStyle:{"margin-bottom":"5px"},attrs:{placeholder:"제목"},domProps:{value:t.tags},on:{input:function(e){e.target.composing||(t.tags=e.target.value)}}}),t._v(" "),n("div",{staticClass:"flex",staticStyle:{"flex-wrap":"wrap"}},t._l(t.parsedTags,(function(e,o){return n("span",{key:o,staticClass:"has-text-warm-red",staticStyle:{"font-size":"14px","margin-right":"10px"}},[t._v("\n            #"+t._s(e)+"\n        ")])})),0),t._v(" "),n("div",{staticClass:"button-outer"},[n("button",{staticClass:"button is-primary button-submit",on:{click:t.submit}},[n("strong",[t._v("수정하기")])])])])}),[],!1,null,"182865fa",null).exports),v={middleware:"authorized",name:"PostEdit",asyncData:(r=Object(l.a)(regeneratorRuntime.mark((function t(e){var n,o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,o=e.params,e.query,e.error,r=o.post,t.next=4,n.dispatch("posts/fetchPost",{post_id:r});case 4:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)}),computed:{isMobile:function(){return this.$device.isMobile?m:h}}},x=Object(c.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e(this.isMobile,{tag:"component"})],1)}),[],!1,null,"0b69999a",null);e.default=x.exports}}]);