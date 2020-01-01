<template>
    <div>
        <div class="flex space-between" style="padding-bottom: 5px;">
            <div @click="likePost()" class="flex align-items-center like-button">
                <img v-if="!post.is_liked"
                     src="../../../../../assets/images/icons/heart-black.svg" alt="like"
                     style="width: 16px;">
                <img v-if="post.is_liked"
                     src="../../../../../assets/images/icons/heart-red.svg" alt="like"
                     style="width: 16px;">
                <span style="margin-left: 5px;">{{ post.likes_count }}</span>
            </div>
            <p>댓글: <span>{{ post.comments_count }}개</span></p>
        </div>
        <comment-form></comment-form>
        <comment-item v-for="(comment, index) in comments"
                      :key="index"
                      :comment="comment">
        </comment-item>
        <div v-if="comments.length === 0"
             class="flex flex-center align-items-center"
             style="height: 60px;">
            <p>첫 번째 댓글을 달아보세요.</p>
        </div>
        <div class="flex flex-center align-items-center"
             style="height: 60px;">
            <p @click="fetchComments()" v-if="!isNoMore"
               style="cursor: pointer;">더 보기</p>
            <p @click="fetchComments()" v-if="isNoMore && comments.length !== 0">더 이상 댓글이 없습니다.</p>
        </div>
    </div>
</template>

<script>
import CommentForm from './commentForm'
import CommentItem from './commentItem'
export default {
    components: {
        CommentForm,
        CommentItem,
    },
    computed: {
        post () {
            return this.$store.state.posts.post
        },
        commentsQuery () {
            return {
                post_id: this.$store.state.posts.post.id,
                page: this.$store.state.comments.page,
                per_page: 20,
            }
        },
        comments () {
            return this.$store.state.comments.comments
        },
        isNoMore () {
            return this.$store.state.comments.isNoMore
        },
    },
    methods: {
        async fetchComments () {
            await this.$store.dispatch('comments/fetchComments', this.commentsQuery)
        },
        async likePost () {
            const data = {
                post_id: this.post.id,
                comment_id: null,
            }
            await this.$store.dispatch('posts/postLike', data)
        },
    },
    async mounted () {
        this.$store.commit('comments/RESET_COMMENTS')
        this.$store.commit('comments/SET_IS_NO_MORE', false)
        this.$store.commit('comments/SET_PAGE', 1)
        await this.fetchComments()
    },
}
</script>

<style scoped>
.like-button {
    border: 1px solid black;
    border-radius: 4px;
    padding: 0 5px;
}
</style>
