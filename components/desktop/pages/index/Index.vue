<template>
    <div class="main-index">
        <index-item-desktop v-for="(post, index) in posts"
                            :key="index" :post="post">
        </index-item-desktop>
        <div v-if="!isLoading" class="flex flex-center align-items-center"
             style="height: 60px;">
            <div @click="loadPosts()" v-if="!isNoMore"
                 class="flex align-items-center"
                 style="cursor: pointer;">
                <img src="../../../../assets/images/icons/plus-blue.svg"
                     style="width: 20px; margin-right: 5px;" alt="plus">
                <p style="font-size: 18px; font-weight: 600;">더 보기</p>
            </div>
            <div v-if="isNoMore" class="flex align-items-center"
                 style="cursor: pointer;">
                <img src="../../../../assets/images/icons/minus-blue.svg"
                     style="width: 20px; margin-right: 5px;" alt="minus">
                <p style="font-size: 18px; font-weight: 600;">글이 없습니다.</p>
            </div>
        </div>
        <spinner v-if="isLoading" :style="{ 'margin-top': spinnerMargin }"></spinner>
    </div>
</template>

<script>
import Spinner from '../../../common/spinner'
import IndexItemDesktop from './IndexItem'
export default {
    components: {
        IndexItemDesktop,
        Spinner,
    },
    computed: {
        isLoading () {
            return this.$store.state.posts.isLoading
        },
        posts () {
            return this.$store.state.posts.posts
        },
        postsQuery () {
            return {
                page: this.$store.state.posts.page,
                per_page: 20,
                tags: this.$route.query.tags == null ? null : [this.$route.query.tags],
            }
        },
        isNoMore () {
            return this.$store.state.posts.isNoMore
        },
        spinnerMargin () {
            return this.posts.length === 0 ? '150px' : 0
        },
    },
    methods: {
        async loadPosts () {
            await this.$store.dispatch('posts/fetchPosts', this.postsQuery)
        },
    },
}
</script>

<style scoped>

</style>
