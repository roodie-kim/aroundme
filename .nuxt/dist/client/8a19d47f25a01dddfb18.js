(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{228:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMiAyMS41OTNjLTUuNjMtNS41MzktMTEtMTAuMjk3LTExLTE0LjQwMiAwLTMuNzkxIDMuMDY4LTUuMTkxIDUuMjgxLTUuMTkxIDEuMzEyIDAgNC4xNTEuNTAxIDUuNzE5IDQuNDU3IDEuNTktMy45NjggNC40NjQtNC40NDcgNS43MjYtNC40NDcgMi41NCAwIDUuMjc0IDEuNjIxIDUuMjc0IDUuMTgxIDAgNC4wNjktNS4xMzYgOC42MjUtMTEgMTQuNDAybTUuNzI2LTIwLjU4M2MtMi4yMDMgMC00LjQ0NiAxLjA0Mi01LjcyNiAzLjIzOC0xLjI4NS0yLjIwNi0zLjUyMi0zLjI0OC01LjcxOS0zLjI0OC0zLjE4MyAwLTYuMjgxIDIuMTg3LTYuMjgxIDYuMTkxIDAgNC42NjEgNS41NzEgOS40MjkgMTIgMTUuODA5IDYuNDMtNi4zOCAxMi0xMS4xNDggMTItMTUuODA5IDAtNC4wMTEtMy4wOTUtNi4xODEtNi4yNzQtNi4xODEiLz48L3N2Zz4="},248:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMjgzNTkzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgMTBoLTEwdi0xMGgtNHYxMGgtMTB2NGgxMHYxMGg0di0xMGgxMHoiLz48L3N2Zz4K"},249:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMjgzNTkzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAxMGgyNHY0aC0yNHoiLz48L3N2Zz4K"},250:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMiAxYy02LjMzOCAwLTEyIDQuMjI2LTEyIDEwLjAwNyAwIDIuMDUuNzM5IDQuMDYzIDIuMDQ3IDUuNjI1bC0xLjk5MyA2LjM2OCA2Ljk0Ni0zYzEuNzA1LjQzOSAzLjMzNC42NDEgNC44NjQuNjQxIDcuMTc0IDAgMTIuMTM2LTQuNDM5IDEyLjEzNi05LjYzNCAwLTUuODEyLTUuNzAxLTEwLjAwNy0xMi0xMC4wMDd6bTAgMWM2LjA2NSAwIDExIDQuMDQxIDExIDkuMDA3IDAgNC45MjItNC43ODcgOC42MzQtMTEuMTM2IDguNjM0LTEuODgxIDAtMy40MDEtLjI5OS00Ljk0Ni0uNjk1bC01LjI1OCAyLjI3MSAxLjUwNS00LjgwOGMtMS4zMDgtMS41NjQtMi4xNjUtMy4xMjgtMi4xNjUtNS40MDIgMC00Ljk2NiA0LjkzNS05LjAwNyAxMS05LjAwN3ptLTUgNy41Yy44MjggMCAxLjUuNjcyIDEuNSAxLjVzLS42NzIgMS41LTEuNSAxLjUtMS41LS42NzItMS41LTEuNS42NzItMS41IDEuNS0xLjV6bTUgMGMuODI4IDAgMS41LjY3MiAxLjUgMS41cy0uNjcyIDEuNS0xLjUgMS41LTEuNS0uNjcyLTEuNS0xLjUuNjcyLTEuNSAxLjUtMS41em01IDBjLjgyOCAwIDEuNS42NzIgMS41IDEuNXMtLjY3MiAxLjUtMS41IDEuNS0xLjUtLjY3Mi0xLjUtMS41LjY3Mi0xLjUgMS41LTEuNXoiLz48L3N2Zz4="},289:function(t,e,n){"use strict";n.r(e);n(12);var r,o,c=n(2),l=n(37),x=(n(140),{props:{post:{type:Object,default:null}},computed:{postBody:function(){try{var text=JSON.parse(this.post.body).ops.reduce((function(t,e){return e.hasOwnProperty("insert")&&"string"==typeof e.insert?t+e.insert:t}),""),image=JSON.parse(this.post.body).ops.find((function(t){return t.hasOwnProperty("insert")&&"object"===Object(l.a)(t.insert)&&t.insert.hasOwnProperty("image")}));return{text:text,image:image?image.insert.image:null}}catch(t){return this.post.body}}},methods:{moveToPost:function(t){this.$router.push("/posts/".concat(t))}}}),d=n(4),M=Object(d.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"post-item",staticStyle:{"background-color":"#ffffff",border:"1px solid #DBDBDB","border-radius":"4px",padding:"10px","margin-bottom":"10px",cursor:"pointer","box-shadow":"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},on:{click:function(e){return t.moveToPost(t.post.id)}}},[r("div",{staticClass:"header-div"},[r("div",{staticClass:"flex align-items-bottom"},[r("p",{staticClass:"has-text-black-ter",staticStyle:{"margin-right":"10px","font-size":"14px"}},[t._v("\n                "+t._s(t.post.user.name)+"\n            ")]),t._v(" "),r("p",{staticClass:"has-text-grey-light",staticStyle:{"font-size":"12px"}},[t._v("\n                "+t._s(t._f("humanTimestamp")(t.post.created_at))+"\n            ")])]),t._v(" "),r("div",t._l(t.post.tags,(function(e,n){return r("span",{key:n,staticClass:"has-text-warm-red",staticStyle:{"font-size":"14px","margin-right":"10px"}},[t._v("\n                #"+t._s(e.name)+"\n            ")])})),0)]),t._v(" "),r("div",{staticClass:"body-div",staticStyle:{width:"100%"}},[r("p",{staticClass:"has-text-black-ter ellipsis",staticStyle:{"font-size":"16px","font-weight":"600","padding-top":"8px","margin-bottom":"3px"}},[t._v("\n            "+t._s(t.post.title)+"\n        ")])]),t._v(" "),r("div",{staticClass:"footer-div flex",staticStyle:{"padding-top":"10px"}},[r("div",{staticClass:"flex align-items-center"},[r("img",{staticStyle:{width:"16px"},attrs:{src:n(228),alt:"likes"}}),t._v(" "),r("span",{staticStyle:{"margin-left":"5px"}},[t._v(t._s(t.post.likes_count))])]),t._v(" "),r("div",{staticClass:"flex align-items-center",staticStyle:{"margin-left":"20px"}},[r("img",{staticStyle:{width:"16px"},attrs:{src:n(250),alt:"likes"}}),t._v(" "),r("span",{staticStyle:{"margin-left":"5px"}},[t._v(t._s(t.post.comments_count))])])])])}),[],!1,null,"3564532c",null).exports,m={components:{IndexItem:M},computed:{posts:function(){return this.$store.state.posts.posts},postsQuery:function(){return{page:this.$store.state.posts.page,per_page:20,board_type:this.currentBoard.cd}},isNoMore:function(){return this.$store.state.posts.isNoMore},boardName:function(){return this.$route.params.boards},currentBoard:function(){return this.$store.state.boards.currentBoard}},methods:{loadPosts:(o=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==this.posts.length&&1===this.postsQuery.page){t.next=3;break}return t.next=3,this.$store.dispatch("posts/fetchPosts",this.postsQuery);case 3:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)}),setCurrentBoard:function(){this.$store.commit("boards/SET_CURRENT_BOARD",this.boardName)}},mounted:(r=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.$store.commit("posts/SET_IS_NO_MORE",!1),this.$store.commit("posts/SET_PAGE",1),this.setCurrentBoard(),t.next=5,this.loadPosts();case 5:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},N=Object(d.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-index"},[t.currentBoard?r("h4",{staticClass:"title is-4 has-text-primary",staticStyle:{"margin-bottom":"10px"}},[t._v(t._s(t.currentBoard.name))]):t._e(),t._v(" "),t._l(t.posts,(function(t,e){return r("index-item",{key:e,attrs:{post:t}})})),t._v(" "),r("div",{staticClass:"flex flex-center align-items-center",staticStyle:{height:"60px"}},[t.isNoMore?t._e():r("div",{staticClass:"flex align-items-center",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.loadPosts()}}},[r("img",{staticStyle:{width:"20px","margin-right":"5px"},attrs:{src:n(248),alt:"plus"}}),t._v(" "),r("p",{staticStyle:{"font-size":"18px","font-weight":"600"}},[t._v("더 보기")])]),t._v(" "),t.isNoMore?r("div",{staticClass:"flex align-items-center",staticStyle:{cursor:"pointer"}},[r("img",{staticStyle:{width:"20px","margin-right":"5px"},attrs:{src:n(249),alt:"minus"}}),t._v(" "),r("p",{staticStyle:{"font-size":"18px","font-weight":"600"}},[t._v("글이 없습니다.")])]):t._e()])],2)}),[],!1,null,"5fdbd4a0",null).exports,y={extends:M},j={components:{IndexItem:Object(d.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"post-item",staticStyle:{"background-color":"#ffffff",border:"1px solid #DBDBDB","border-radius":"4px",padding:"10px",margin:"0 3px 5px",cursor:"pointer","box-shadow":"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},on:{click:function(e){return t.moveToPost(t.post.id)}}},[r("div",{staticClass:"header-div"},[r("div",{staticClass:"flex align-items-bottom"},[r("p",{staticClass:"has-text-black-ter",staticStyle:{"margin-right":"10px","font-size":"14px"}},[t._v("\n                "+t._s(t.post.user.name)+"\n            ")]),t._v(" "),r("p",{staticClass:"has-text-grey-light",staticStyle:{"font-size":"12px"}},[t._v("\n                "+t._s(t._f("humanTimestamp")(t.post.created_at))+"\n            ")])]),t._v(" "),r("div",t._l(t.post.tags,(function(e,n){return r("span",{key:n,staticClass:"has-text-warm-red",staticStyle:{"font-size":"14px","margin-right":"10px"}},[t._v("\n                #"+t._s(e.name)+"\n            ")])})),0)]),t._v(" "),r("div",{staticClass:"body-div",staticStyle:{width:"100%"}},[r("p",{staticClass:"has-text-black-ter ellipsis",staticStyle:{"font-size":"16px","font-weight":"600","padding-top":"8px","margin-bottom":"3px"}},[t._v("\n            "+t._s(t.post.title)+"\n        ")])]),t._v(" "),r("div",{staticClass:"footer-div flex",staticStyle:{"padding-top":"10px"}},[r("div",{staticClass:"flex align-items-center"},[r("img",{staticStyle:{width:"16px"},attrs:{src:n(228),alt:"likes"}}),t._v(" "),r("span",{staticStyle:{"margin-left":"5px"}},[t._v(t._s(t.post.likes_count))])]),t._v(" "),r("div",{staticClass:"flex align-items-center",staticStyle:{"margin-left":"20px"}},[r("img",{staticStyle:{width:"16px"},attrs:{src:n(250),alt:"likes"}}),t._v(" "),r("span",{staticStyle:{"margin-left":"5px"}},[t._v(t._s(t.post.comments_count))])])])])}),[],!1,null,"819a9216",null).exports},extends:N},I=Object(d.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-index"},[t.currentBoard?r("h4",{staticClass:"title is-4 has-text-primary",staticStyle:{margin:"10px"}},[t._v(t._s(t.currentBoard.name))]):t._e(),t._v(" "),t._l(t.posts,(function(t,e){return r("index-item",{key:e,attrs:{post:t}})})),t._v(" "),r("div",{staticClass:"flex flex-center align-items-center",staticStyle:{height:"60px"}},[t.isNoMore?t._e():r("div",{staticClass:"flex align-items-center",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.loadPosts()}}},[r("img",{staticStyle:{width:"20px","margin-right":"5px"},attrs:{src:n(248),alt:"plus"}}),t._v(" "),r("p",{staticStyle:{"font-size":"18px","font-weight":"600"}},[t._v("더 보기")])]),t._v(" "),t.isNoMore?r("div",{staticClass:"flex align-items-center",staticStyle:{cursor:"pointer"}},[r("img",{staticStyle:{width:"20px","margin-right":"5px"},attrs:{src:n(249),alt:"minus"}}),t._v(" "),r("p",{staticStyle:{"font-size":"18px","font-weight":"600"}},[t._v("글이 없습니다.")])]):t._e()])],2)}),[],!1,null,"1132e010",null).exports,f={name:"Index",data:function(){return{mounted:!1}},components:{BoardsMobile:I,BoardsDesktop:N},computed:{isMobile:function(){return this.$device.isMobile?I:N},posts:function(){return this.$store.state.posts.posts},queryData:function(){return{page:1,per_page:20,board_type:this.$route.params.boards}}}},v=Object(d.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e(this.isMobile,{tag:"component"})],1)}),[],!1,null,"356995d8",null);e.default=v.exports}}]);