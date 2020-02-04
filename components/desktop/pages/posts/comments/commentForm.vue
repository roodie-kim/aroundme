<template>
    <div class="flex has-background-white-ter"
         style="padding: 15px 5px; border-bottom: 1px solid lightgrey; border-top: 1px solid lightgrey">
        <div style="flex-grow: 20; margin-right: 6px;">
            <textarea v-model="body"
                      class="textarea" style="margin-bottom: 5px;"
                      placeholder="댓글" rows="2"></textarea>
        </div>
        <button @click="submitComment()" class="button is-primary"
                style="flex-grow: 1; height: 70px;">
            등록하기
        </button>
    </div>
</template>

<script>
export default {
    props: {
        commentId: {
            type: Number,
            default: null,
        },
    },
    data () {
        return {
            body: '',
        }
    },
    computed: {
        post () {
            return this.$store.state.posts.post
        },
        comment () {
            return {
                post_id: this.post.id,
                comment_id: this.commentId,
                body: this.body,
            }
        },
    },
    methods: {
        async submitComment () {
            if (this.isAuthenticated) {
                const response = await this.$store.dispatch('comments/createComment', this.comment)
                if (response.status) {
                    this.body = ''
                }
            } else {
                this.$buefy.dialog.confirm({
                    title: '엇!',
                    message: '로그인이 필요한 페이지입니다. 지금 로그인 하시겠습니까?',
                    cancelText: '아니요',
                    confirmText: '네',
                    onConfirm: () => this.$router.push('/auth/login'),
                })
            }
        },
    },
}
</script>

<style scoped>

</style>
