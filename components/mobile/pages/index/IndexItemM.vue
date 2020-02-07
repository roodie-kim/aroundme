<template>
    <div @click="moveToPost(post.id)" class="post-item"
         style="border-top: 1px solid #DBDBDB; border-radius: 4px; padding: 10px 15px;">
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
                <span v-if="post.town"
                      class="has-text-primary has-text-weight-bold"
                      style="font-size: 14px; margin-right: 10px;">
                    @{{ post.town.name }}
                </span>
                <span v-for="(tag, index) in post.tags" :key="index"
                      class="has-text-warm-red"
                      style="font-size: 14px; margin-right: 10px;">
                    #{{ tag.name }}
                </span>
            </div>
        </div>
        <div class="body-div">
            <div v-if="postBody.image" style="padding-top: 10px;">
                <img class="post-body-image"
                     :src="postBody.image">
            </div>
            <p class="has-text-black-ter ellipsis"
               style="font-size: 16px; font-weight: 600; padding-top: 8px;">
                {{ post.title }}
            </p>
            <p class="has-text-black ellipsis-multiple-line"
               style="font-size: 16px;">
                {{ postBody.text }}
            </p>
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
import IndexItemDesktop from '../../../desktop/pages/index/IndexItem'
export default {
    extends: IndexItemDesktop,
}
</script>

<style scoped>

</style>
