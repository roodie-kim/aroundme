<template>
    <div class="container">
        <h4 class="title is-size-4">새글쓰기</h4>
        <input class="input title-input" placeholder="제목" v-model="post.title"></input>
        <b-taglist>
            <b-tag @click.native="selectTown(town.id)" :type="isSelected(town.id)" size="is-medium" :rounded="true"
                   v-for="(town, index) in towns" :key="index"
                   style="cursor: pointer;">
                {{ town.name }}
            </b-tag>
        </b-taglist>
        <div ref="quillEditor" class="quill-editor" @click="focusOnQuill"></div>
        <p class="has-text-grey-light" style="font-size: 14px;">태그는 스페이스 혹 콤마로 구분되며 최대 10개까지 사용할 수 있습니다.</p>
        <input class="input title-input" placeholder="태그"
               v-model="tags" style="margin-bottom: 5px;"></input>
        <div class="flex" style="flex-wrap: wrap;">
            <span v-for="(tag, index) in parsedTags" :key="index"
                  class="has-text-warm-red" style="font-size: 14px; margin-right: 10px;">
                #{{ tag }}
            </span>
        </div>
        <div class="button-outer">
            <button class="button is-primary button-submit" @click="submit">
                <strong>등록하기</strong>
            </button>
        </div>
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
                tags: null,
                town_id: null,
            },
            tags: '',
        }
    },
    computed: {
        parsedTags () {
            if (this.tags.length === 0) return []
            const tags = this.tags.trim().split(/[\s,]+/)
            if (tags.length >= 10) {
                return tags.slice(0, 10)
            } else {
                return tags
            }
        },
        towns () {
            if (this.$store.state.towns.towns.length === 0) {
                return []
            } else {
                const towns = [ ...this.$store.state.towns.towns ]
                towns.push({
                    id: null,
                    name: '선택안함',
                })
                return towns
            }
        },
    },
    methods: {
        selectTown (id) {
            this.post.town_id = id
        },
        isSelected (id) {
            return this.post.town_id === id ? 'is-primary' : 'is-grey-light'
        },
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
        async fetchTowns () {
            if (this.towns.length === 0) {
                await this.$store.dispatch('towns/fetchTowns')
            }
        },
    },
    async mounted () {
        await this.fetchTowns()
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
    },
}
</script>

<style scoped>
.title-input {
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
