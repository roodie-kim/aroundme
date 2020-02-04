<template>
    <div style="padding: 10px; border-bottom: 1px solid #DBDBDB;">
        <div class="flex space-between has-text-grey" style="padding-bottom: 3px;">
            <p style="font-size: 14px;">{{ comment.user.name }}</p>
            <p style="font-size: 14px;">{{ comment.created_at | humanTimestamp }}</p>
        </div>
        <p style="padding-bottom: 5px;">{{ comment.body }}</p>
        <div class="flex space-between">
            <div @click="likeComment()" class="flex align-items-center like-button"
                 style="cursor: pointer;">
                <img v-if="!comment.is_liked"
                     src="../../../../../assets/images/icons/heart-black.svg" alt="like"
                     style="width: 16px;">
                <img v-if="comment.is_liked"
                     src="../../../../../assets/images/icons/heart-red.svg" alt="like"
                     style="width: 16px;">
                <span style="margin-left: 5px;">{{ comment.likes_count }}</span>
            </div>
            <div v-if="comment.is_mine" class="flex flex-end has-text-grey">
                <!--<p style="font-size: 14px; margin-right: 5px;">수정</p>-->
                <!--<p style="font-size: 14px; margin-right: 5px;">|</p>-->
                <p @click="deleteComment()" style="font-size: 14px; cursor: pointer;">삭제</p>
            </div>
        </div>
    </div>
</template>

<script>
import CommentItem from '../../../../desktop/pages/posts/comments/commentItem'
export default {
    extends: CommentItem,
}
</script>

<style scoped>

</style>
