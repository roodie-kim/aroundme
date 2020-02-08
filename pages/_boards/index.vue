<template>
    <div class="container">
        <component :is="isMobile" />
    </div>
</template>

<script>
import BoardsMobile from '../../components/mobile/pages/boards/IndexM'
import BoardsDesktop from '../../components/desktop/pages/boards/Index'
export default {
    name: 'Index',
    data () {
        return {
            mounted: false,
        }
    },
    components: {
        BoardsMobile,
        BoardsDesktop,
    },
    computed: {
        isMobile () {
            return this.$device.isMobile ? BoardsMobile : BoardsDesktop
        },
        posts () {
            return this.$store.state.posts.posts
        },
        queryData () {
            const data = {
                page: 1,
                per_page: 20,
                board_type: null,
            }
            return data
        },
    },
    mounted () {
        if (this.posts.length === 0) {
            // await this.$store.dispatch('posts/fetchPosts', this.queryData)
        }
    },
}
</script>

<style scoped>

</style>
