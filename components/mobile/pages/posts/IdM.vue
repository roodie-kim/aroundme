<template>
    <div>
        <div class="container" style="margin: 10px;">
            <div @click="backToList" class="flex align-items-center"
                 style="margin-bottom: 10px;">
                <img src="../../../../assets/images/icons/arrow-left-blue.svg"
                     style="width: 20px; margin-right: 5px;" alt="back">
                <p style="font-size: 18px; font-weight: 600;">목록으로 돌아가기</p>
            </div>
            <div class="header"
                 style="border-bottom: 1px solid lightgrey; padding-bottom: 8px;">
                <p class="has-text-black-ter"
                   style="font-size: 16px; font-weight: 600">
                    <span v-if="post.area_name" class="has-text-primary">[{{ post.area_name }}]</span>
                    <span v-if="post.sub_type_name" :class="subTypeNameClass(post)">[{{ post.sub_type_name }}]</span>
                    {{ post.title }}
                </p>
                <div class="flex space-between align-items-center has-text-grey"
                     style="margin-top: 2px; font-size: 14px;">
                    <p>{{ post.user.name }}</p>
                    <div class="flex flex-end">
                        <p v-if="post.is_mine"
                           @click="editPost()"
                           style="margin-right: 5px; cursor: pointer;">
                            수정
                        </p>
                        <p v-if="post.is_mine" style="margin-right: 5px;">|</p>
                        <p v-if="post.is_mine"
                           @click="customDelete()"
                           style="margin-right: 5px; cursor: pointer;">
                            삭제
                        </p>
                        <p v-if="post.is_mine" style="margin-right: 5px;">|</p>
                        <p>{{ post.created_at | humanTimestamp }}</p>
                    </div>
                </div>
            </div>
            <div class="ql-editor"
                 style="min-height: 150px; padding: 12px 0 30px"
                 v-html="postBody">
            </div>
            <comments-list></comments-list>
            <div @click="backToList" class="flex align-items-center"
                 style="padding-left: 5px; margin-bottom: 10px;">
                <img src="../../../../assets/images/icons/arrow-left-blue.svg"
                     style="width: 20px; margin-right: 5px;" alt="back">
                <p style="font-size: 18px; font-weight: 600;">목록으로 돌아가기</p>
            </div>
        </div>
    </div>
</template>

<script>
import IdM from '../../../desktop/pages/posts/Id'
import CommentsList from './comments/commentsListM'
export default {
    extends: IdM,
    components: {
        CommentsList,
    },
}
</script>

<style scoped>

</style>
