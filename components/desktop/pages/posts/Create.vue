<template>
    <div class="container">
        <h4 class="title is-size-4">새글쓰기</h4>
        <b-select v-model="post.board_type" class="category-select"
                  placeholder="카테고리를 선택하세요" expanded>
            <option
                v-for="board in boards"
                :value="board.cd"
                :key="board.name">
                {{ board.name }}
            </option>
        </b-select>
        <div class="flex" v-if="post.board_type === 'B102'">
            <b-select v-model="post.area" class="category-select" style="margin-right: 20px;"
                      placeholder="지역을 선택하세요" expanded>
                <option
                    v-for="area in areas"
                    :value="area.cd"
                    :key="area.name">
                    {{ area.name }}
                </option>
            </b-select>
            <b-select v-model="post.sub_type" class="category-select"
                      placeholder="구매/판매" expanded>
                <option
                    v-for="type in subTypes"
                    :value="type.cd"
                    :key="type.name">
                    {{ type.name }}
                </option>
            </b-select>
        </div>
        <input class="input title-input" placeholder="제목" v-model="post.title"></input>
        <div ref="quillEditor" class="quill-editor" @click="focusOnQuill"></div>
        <div class="button-outer">
            <button class="button is-primary button-submit" @click="submit">
                <strong>등록하기</strong>
            </button>
        </div>
        {{ user }}
        <br>
        {{ boards }}
    </div>
</template>

<script>
export default {
    data () {
        return {
            quill: null,
            post: {
                title: '',
                body: '',
                board_type: null,
                tags: null,
                area: null,
                sub_type: null,
            },
        }
    },
    computed: {
        boards () {
            const boards = [ ...this.$store.state.boards.boards ]
            if (this.user && this.user.is_admin) {
                return boards
            }
            return boards.filter(function (board) {
                return !board.is_admin
            })
        },
        areas () {
            return this.$store.state.posts.areas
        },
        subTypes () {
            return this.$store.state.posts.subTypes
        },
    },
    watch: {
        post: {
            deep: true,
            handler (value) {
                if (value.board_type !== 'B102') {
                    this.post.area = null
                    this.post.sub_type = null
                }
            },
        },
    },
    methods: {
        updateBody () {
            this.post.body = JSON.stringify(this.quill.getContents())
        },
        async submit () {
            const validation = this.validateBeforeSubmit()
            if (!validation.status) {
                this.$buefy.toast.open(validation.message)
            } else {
                this.post.tags = this.parsedTags
                const postResponse = await this.$store.dispatch('posts/createPost', this.post)
                if (postResponse.status) {
                    this.$buefy.toast.open('등록되었습니다.')
                    this.$router.push(`/posts/${postResponse.data.id}`)
                } else {
                    this.$buefy.toast.open('등록이 실패하였습니다. 나중에 다시 시도해주세요.')
                }
            }
        },
        validateBeforeSubmit () {
            const result = {}
            result.status = false
            if (this.post.board_type === null) {
                result.message = '게시판을 선택해 주세요.'
                return result
            }
            if (!this.post.title || this.post.title.trim() === '') {
                result.message = '글 제목을 입력해주세요.'
                return result
            } else if (this.quill.getText().trim().length === 0 && (!this.quill.container.firstChild.innerHTML.includes('img') && !this.quill.container.firstChild.innerHTML.includes('video'))) {
                result.message = '내용을 작성해주세요.'
                return result
            }
            result.status = true
            return result
        },
    },
    mounted () {
        const options = {
            modules: {
                toolbar: {
                    container: [
                        [{ size: [ 'small', false, 'large', 'huge' ] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ color: [] }, { background: [] }],
                        [{ align: 'center' }, { align: 'right' }, { align: 'justify' }],
                        ['link', 'image'],
                    ],
                    handlers: {
                        image: this.imageHandler,
                    },
                },
            },
            theme: 'snow',
        }
        const Quill = require('quill')
        const container = this.$refs['quillEditor']
        this.quill = new Quill(container, options)
        this.quill.on('text-change', this.updateBody)
        if (this.$store.state.boards.currentBoard !== null) {
            this.post.board_type = this.$store.state.boards.currentBoard.cd
        }
    },
}
</script>

<style scoped>
.category-select {
    width: 200px;
}
.category-select, .title-input {
    margin-bottom: 20px;
}
.quill-editor {
    margin-bottom: 10px;
}
.button-outer {
    padding: 20px 0 0;
    display: flex;
    justify-content: flex-end;
}
.button-submit {
    min-width: 120px;
}
.title-input {
    padding: 12px 15px;
    margin-bottom: 20px;
}
</style>
