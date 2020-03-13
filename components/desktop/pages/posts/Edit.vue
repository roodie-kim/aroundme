<template>
    <div class="container">
        <h4 class="title is-size-4">수정하기</h4>
        <b-select v-model="editedPost.board_type" class="category-select"
                  placeholder="카테고리를 선택하세요" expanded>
            <option
                v-for="board in boards"
                :value="board.cd"
                :key="board.name">
                {{ board.name }}
            </option>
        </b-select>
        <div class="flex" v-if="editedPost.board_type === 'B102'">
            <b-select v-model="editedPost.area" class="category-select" style="margin-right: 20px;"
                      placeholder="지역을 선택하세요" expanded>
                <option
                    v-for="area in areas"
                    :value="area.cd"
                    :key="area.name">
                    {{ area.name }}
                </option>
            </b-select>
            <b-select v-model="editedPost.sub_type" class="category-select"
                      placeholder="구매/판매" expanded>
                <option
                    v-for="type in subTypes"
                    :value="type.cd"
                    :key="type.name">
                    {{ type.name }}
                </option>
            </b-select>
        </div>
        <input class="input title-input" placeholder="제목" v-model="editedPost.title"></input>
        <div ref="quillEditor" class="quill-editor" @click="focusOnQuill"></div>
        <div class="button-outer">
            <button class="button is-primary button-submit" @click="submit">
                <strong>수정하기</strong>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            quill: null,
            editedPost: {
                id: null,
                title: '',
                board_type: '',
                body: '',
                tags: null,
                area: null,
                sub_type: null,
            },
        }
    },
    computed: {
        boards () {
            const boards = [ ...this.$store.state.boards.boards ]
            // const index = boards.findIndex((board) => {
            //     return board.board_type === 'B101'
            // })
            // boards.splice(index, 1)
            return boards
        },
        post () {
            return this.$store.state.posts.post
        },
        areas () {
            return this.$store.state.posts.areas
        },
        subTypes () {
            return this.$store.state.posts.subTypes
        },
    },
    watch: {
        editedPost: {
            deep: true,
            handler (value) {
                if (value.board_type !== 'B102') {
                    this.editedPost.area = null
                    this.editedPost.sub_type = null
                }
            },
        },
    },
    methods: {
        updateBody () {
            this.editedPost.body = JSON.stringify(this.quill.getContents())
        },
        async submit () {
            const validation = this.validateBeforeSubmit()
            if (!validation.status) {
                this.$buefy.toast.open(validation.message)
            } else {
                this.editedPost.tags = this.parsedTags
                const postResponse = await this.$store.dispatch('posts/editPost', this.editedPost)
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
            if (!this.editedPost.title || this.editedPost.title.trim() === '') {
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
        const post = JSON.parse(JSON.stringify(this.post))
        this.editedPost.id = post.id
        this.editedPost.board_type = post.board_type
        this.editedPost.title = post.title
        this.editedPost.area = post.area
        this.editedPost.sub_type = post.sub_type
        this.quill.setContents(JSON.parse(this.post.body))
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
.title-input {
    margin-bottom: 20px;
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
.quill-editor {
    margin-bottom: 10px;
}
</style>
