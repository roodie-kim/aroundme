<template>
    <div class="container">
        <h4 class="title is-size-4">수정하기</h4>
        <input class="input title-input" placeholder="제목" v-model="editedPost.title"></input>
        <div ref="quillEditor" class="quill-editor" @click="focusOnQuill"></div>
        <p class="has-text-grey-light" style="font-size: 14px;">태그는 스페이스 혹 콤마로 구분되며 최대 10개까지 사용할 수 있습니다.</p>
        <input class="input title-input" placeholder="제목"
               v-model="tags" style="margin-bottom: 5px;"></input>
        <div class="flex" style="flex-wrap: wrap;">
            <span v-for="(tag, index) in parsedTags" :key="index"
                  class="has-text-warm-red" style="font-size: 14px; margin-right: 10px;">
                #{{ tag }}
            </span>
        </div>
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
                tags: null,
            },
            tags: '',
        }
    },
    computed: {
        post () {
            return this.$store.state.posts.post
        },
        parsedTags () {
            if (this.tags.length === 0) return []
            const tags = this.tags.trim().split(/[\s,]+/)
            if (tags.length >= 10) {
                return tags.slice(0, 10)
            } else {
                return tags
            }
        },
    },
    methods: {
        updateBody () {
            this.editedPost.body = JSON.stringify(this.quill.getContents())
        },
        changeTagsIntoString () {
            let string = ''
            this.post.tags.forEach((item, index) => {
                if (index === 0) {
                    string = string + item.name
                } else {
                    string = string + ', ' + item.name
                }
            })
            this.tags = string
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
        const Quill = require('Quill')
        const container = this.$refs['quillEditor']
        this.quill = new Quill(container, options)
        this.quill.on('text-change', this.updateBody)
        this.editedPost.id = this.post.id
        this.editedPost.title = this.post.title
        this.editedPost.tags = this.post.tags
        this.quill.setContents(JSON.parse(this.post.body))
        this.changeTagsIntoString()
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
.quill-editor {
    margin-bottom: 10px;
}
</style>
