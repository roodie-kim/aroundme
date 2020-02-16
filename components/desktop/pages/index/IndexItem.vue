<template>
    <div class="main-item">
        <div class="flex flex-end">
            <div class="main-item-header flex space-between align-items-center"
                 style="padding-bottom: 8px;">
                <p @click="moveToBoard()" style="font-size: 18px; font-weight: 600; cursor: pointer;">{{ board.name }}</p>
                <p @click="moveToBoard()" style="font-size: 14px; cursor: pointer;">더보기</p>
            </div>
        </div>
        <div style="height: 180px; padding-top: 8px;">
            <div v-for="(post, index) in posts" :key="index">
                <nuxt-link :to="`/posts/${post.id}`"
                           class="flex space-between has-text-black-ter">
                    <p class="main-item-title ellipsis">{{ post.title }}</p>
                    <p class="main-item-date flex flex-end">{{ realTimestamp(post.created_at) }}</p>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        board: {
            type: Object,
            default: null,
        },
    },
    data () {
        return {
            posts: [],
        }
    },
    methods: {
        async fetchPosts () {
            const query = {
                page: 1,
                per_page: 6,
                board_type: this.board.cd,
            }
            const posts = await this.$store.dispatch('posts/fetchPostsForIndex', query)
            this.posts = posts.data
        },
        moveToBoard () {
            this.$router.push(`/${this.board.name}`)
        },
    },
    async mounted () {
        await this.fetchPosts()
    },
}
</script>

<style scoped>
.main-item {
    width: 50%;
    min-width: 300px;
    padding-right: 15px;
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
