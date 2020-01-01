<template>
    <div class="container">
        <h4 class="title is-size-4">수정하기</h4>
        <input class="input title-input" placeholder="제목" v-model="editedPost.title"></input>
        <div ref="quillEditor"></div>
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
                body: '',
                tags: ['aa', 'bb', 'cc', 'dd'],
            },
        }
    },
    computed: {
        post () {
            return this.$store.state.posts.post
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
        const Quill = require('Quill')
        const container = this.$refs['quillEditor']
        this.quill = new Quill(container, options)
        this.quill.on('text-change', this.updateBody)
        this.editedPost.id = this.post.id
        this.editedPost.title = this.post.title
        this.editedPost.tags = this.post.tags
        this.quill.setContents(JSON.parse(this.post.body))
    },
}
</script>

<style scoped>
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
</style>
