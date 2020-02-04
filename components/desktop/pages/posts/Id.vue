<template>
    <div class="container" style="margin: 0 15px 10px;">
        <div @click="backToList" class="flex"
             style="margin-bottom: 10px; cursor: pointer;">
            <img src="../../../../assets/images/icons/arrow-left-blue.svg"
                 style="width: 20px; margin-right: 5px;" alt="back">
            <p style="font-size: 18px; font-weight: 600;">목록으로 돌아가기</p>
        </div>
        <div class="header"
             style="border-bottom: 1px solid lightgrey; padding-bottom: 5px;">
            <p class="has-text-black-ter"
               style="font-size: 16px; font-weight: 600; word-break: break-word;">
                {{ post.title }}
            </p>
            <div class="flex space-between align-items-center has-text-grey"
                 style="margin-top: 2px; font-size: 14px;">
                <p>{{ post.user.name }}</p>
                <div class="flex flex-end">
                    <p v-if="isAuthenticated" @click="editPost()"
                       style="margin-right: 5px; cursor: pointer;">
                        수정
                    </p>
                    <p v-if="isAuthenticated" style="margin-right: 5px;">|</p>
                    <p v-if="isAuthenticated" @click="deletePost()"
                       style="margin-right: 5px; cursor: pointer;">
                        삭제
                    </p>
                    <p v-if="isAuthenticated" style="margin-right: 5px;">|</p>
                    <p>{{ post.created_at | humanTimestamp }}</p>
                </div>
            </div>
        </div>
        <div class="ql-editor"
             style="min-height: 300px; padding-bottom: 50px;"
             v-html="postBody">
        </div>
        <div style="margin-bottom: 30px;">
            <span v-for="(tag, index) in post.tags" :key="index"
                  class="has-text-warm-red" style="font-size: 14px; margin-right: 10px;">
                #{{ tag.name }}
            </span>
        </div>
        <comments-list></comments-list>
        <div @click="backToList" class="flex"
             style="margin-top: 10px; cursor: pointer;">
            <img src="../../../../assets/images/icons/arrow-left-blue.svg"
                 style="width: 20px; margin-right: 5px;" alt="back">
            <p style="font-size: 18px; font-weight: 600;">목록으로 돌아가기</p>
        </div>
    </div>
</template>

<script>
import CommentsList from './comments/commentsList'
export default {
    components: {
        CommentsList,
    },
    data () {
        return {
            quill: null,
        }
    },
    computed: {
        post () {
            return this.$store.state.posts.post
        },
        postBody () {
            if (!this.quill || !this.post) return ''
            try {
                this.quill.setContents(JSON.parse(this.post.body))
                return this.quill.root.innerHTML
            } catch (e) {
                this.quill.setText(this.post.body)
                return this.quill.root.innerHTML
            }
        },
    },
    methods: {
        editPost () {
            this.$router.push(`/posts/${this.post.id}/edit`)
        },
        async deletePost () {
            const response = await this.$store.dispatch('posts/deletePost', this.post.id)
            if (response.status) {
                this.$router.go(-1)
            }
        },
        backToList () {
            this.$router.go(-1)
        },
    },
    mounted () {
        const Quill = require('quill')
        const tempContainer = document.createElement('div')
        this.quill = new Quill(tempContainer)
    },
}
</script>

<style scoped>

</style>
