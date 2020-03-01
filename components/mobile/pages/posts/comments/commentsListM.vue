<template>
    <div style="margin-bottom: 30px;">
        <div class="flex space-between" style="padding: 0 15px 5px;">
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
import CommentsList from '../../../../desktop/pages/posts/comments/commentsList'
import CommentForm from './commentFormM'
import CommentItem from './commentItemM'
export default {
    extends: CommentsList,
    components: {
        CommentForm,
        CommentItem,
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
