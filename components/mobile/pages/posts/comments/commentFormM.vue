<template>
    <div class="flex has-background-white-ter"
         style="padding: 15px 10px; border-bottom: 1px solid lightgrey; border-top: 1px solid lightgrey">
        <div style="flex-grow: 20; margin-right: 6px;">
            <textarea v-model="body"
                      class="textarea" style="margin-bottom: 5px;"
                      placeholder="댓글" rows="2" />
        </div>
        <button @click="submitComment()" class="button is-primary"
                style="flex-grow: 1; height: 70px;">
            등록하기
        </button>
    </div>
</template>

<script>
import commentsForm from '../../../../desktop/pages/posts/comments/commentForm'
export default {
    extends: commentsForm,
}
</script>

<style scoped>

</style>
