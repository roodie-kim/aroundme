<template>
    <div class="main-index">
        <h4 v-if="currentBoard" class="title is-4 has-text-primary"
            style="margin-bottom: 10px;">{{ currentBoard.name }}</h4>
        <index-item-desktop v-for="(post, index) in posts"
                            :key="index" :post="post">
        </index-item-desktop>
        <div class="flex flex-center align-items-center"
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
                board_type: this.currentBoard.cd,
            }
        },
        isNoMore () {
            return this.$store.state.posts.isNoMore
        },
        boardName () {
            return this.$route.params.boards
        },
        currentBoard () {
            return this.$store.state.boards.currentBoard
        },
    },
    methods: {
        async loadPosts () {
            await this.$store.dispatch('posts/fetchPosts', this.postsQuery)
        },
        setCurrentBoard () {
            this.$store.commit('boards/SET_CURRENT_BOARD', this.boardName)
        },
    },
    async mounted () {
        this.$store.commit('posts/SET_IS_NO_MORE', false)
        this.$store.commit('posts/SET_PAGE', 1)
        this.setCurrentBoard()
        await this.loadPosts()
    },
}
</script>

<style scoped>

</style>
