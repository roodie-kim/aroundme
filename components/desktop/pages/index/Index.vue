<template>
    <div class="main-index">
        <index-item-desktop v-for="(post, index) in posts"
                            :key="index" :post="post">
        </index-item-desktop>
        <div class="flex flex-center align-items-center"
             style="height: 60px;">
            <p @click="loadPosts()" v-if="!isNoMore"
               style="cursor: pointer;">더 보기</p>
            <p @click="loadPosts()" v-if="isNoMore">글이 없습니다.</p>
        </div>
    </div>
</template>

<script>
import IndexItemDesktop from './IndexItem'
export default {
    components: { IndexItemDesktop },
    computed: {
        posts () {
            return this.$store.state.posts.posts
        },
        postsQuery () {
            return {
                page: this.$store.state.posts.page,
                per_page: 20,
            }
        },
        isNoMore () {
            return this.$store.state.posts.isNoMore
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
