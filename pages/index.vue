<template>
    <div class="container">
        <component :is="isMobile" />
    </div>
</template>

<script>
import IndexMobile from '../components/mobile/pages/index/IndexM'
import IndexDesktop from '../components/desktop/pages/index/Index'
export default {
    name: 'Index',
    data () {
        return {
            mounted: false,
        }
    },
    components: {
        IndexMobile,
        IndexDesktop,
    },
    computed: {
        isMobile () {
            return this.$device.isMobile ? IndexMobile : IndexDesktop
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
