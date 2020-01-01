<template>
    <div style="padding: 10px 5px; border-bottom: 1px solid #DBDBDB;">
        <div class="flex space-between has-text-grey" style="padding-bottom: 3px;">
            <p style="font-size: 14px;">{{ comment.user.name }}</p>
            <p style="font-size: 14px;">{{ comment.created_at | humanTimestamp }}</p>
        </div>
        <p style="padding-bottom: 3px;">{{ comment.body }}</p>
        <div class="flex space-between">
            <!--add likes count-->
            <p style="font-size: 14px;">likes 14</p>
            <div v-if="comment.is_mine" class="flex flex-end has-text-grey">
                <!--<p style="font-size: 14px; margin-right: 5px;">수정</p>-->
                <!--<p style="font-size: 14px; margin-right: 5px;">|</p>-->
                <p style="font-size: 14px; cursor: pointer;">삭제</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        comment: {
            type: Object,
            default: null,
        },
    },
}
</script>

<style scoped>

</style>
