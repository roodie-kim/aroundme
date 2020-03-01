<template>
    <div class="main-item">
        <div class="flex flex-end">
            <div class="main-item-header flex space-between align-items-center"
                 style="padding-bottom: 8px;">
                <p @click="moveToBoard()" style="font-size: 18px; font-weight: 600; cursor: pointer;">{{ board.name }}</p>
                <p @click="moveToBoard()" style="font-size: 14px; cursor: pointer;">더보기</p>
            </div>
        </div>
        <div v-if="posts.length === 0 && !isLoading"
             class="flex flex-center align-items-center has-background-light"
             style="height: 160px; padding-top: 8px;">
            <p>아직 글이 없습니다.</p>
        </div>
        <div v-if="posts.length !== 0 && !isLoading"
             style="height: 160px; padding-top: 8px;">
            <div v-for="(post, index) in posts" :key="index">
                <nuxt-link :to="`/posts/${post.id}`"
                           class="flex space-between has-text-black-ter">
                    <p class="main-item-title ellipsis">{{ post.title }}</p>
                    <p class="main-item-date flex flex-end">{{ realTimestamp(post.created_at) }}</p>
                </nuxt-link>
            </div>
        </div>
        <div v-if="isLoading"
             class="flex flex-center align-items-center"
             style="height: 160px; padding-top: 8px;">
            <spinner-div></spinner-div>
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
.main-item {
    width: 100%;
    padding: 10px;
}
.main-item-header {
    width: 100%;
    height: 30px;
    border-bottom: 2px solid #B5B5B5;
}
.main-item-title {
    padding: 1px 12px 1px 0;
}
.main-item-date {
    min-width: 45px;
}
</style>
