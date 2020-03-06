<template>
    <div @click="moveToPost(post.id)" class="post-item"
         style="background-color: #ffffff; border: 1px solid #DBDBDB;
         border-radius: 4px; padding: 10px; margin: 0 3px 5px; cursor: pointer;
         box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
        <div class="header-div">
            <div class="flex align-items-bottom">
                <p class="has-text-black-ter"
                   style="margin-right: 10px; font-size: 14px;">
                    {{ post.user.name }}
                </p>
                <p class="has-text-grey-light"
                   style="font-size: 12px;">
                    {{ post.created_at | humanTimestamp }}
                </p>
            </div>
            <div>
                <span v-for="(tag, index) in post.tags" :key="index"
                      class="has-text-warm-red"
                      style="font-size: 14px; margin-right: 10px;">
                    #{{ tag.name }}
                </span>
            </div>
        </div>
        <div class="body-div" style="width: 100%;">
            <!--<div v-if="postBody.image" style="padding-top: 10px;">-->
            <!--    <img class="post-body-image"-->
            <!--         :src="postBody.image">-->
            <!--</div>-->
            <p class="has-text-black-ter ellipsis"
               style="font-size: 16px; font-weight: 600; padding-top: 8px; margin-bottom: 3px;">
                {{ post.title }}
            </p>
            <!--<p class="has-text-grey-dark ellipsis-multiple-line"-->
            <!--   style="font-size: 16px;">-->
            <!--    {{ postBody.text }}-->
            <!--</p>-->
        </div>
        <div class="footer-div flex" style="padding-top: 10px;">
            <div class="flex align-items-center">
                <img src="../../../../assets/images/icons/heart-black.svg" alt="likes"
                     style="width: 16px;">
                <span style="margin-left: 5px;">{{ post.likes_count }}</span>
            </div>
            <div class="flex align-items-center" style="margin-left: 20px;">
                <img src="../../../../assets/images/icons/speech-bubble-black.svg" alt="likes"
                     style="width: 16px;">
                <span style="margin-left: 5px;">{{ post.comments_count }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import IndexItem from '../../../desktop/pages/boards/IndexItem'
export default {
    extends: IndexItem,
}
</script>

<style scoped>

</style>
