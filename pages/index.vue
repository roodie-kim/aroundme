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
        tags () {
            return this.$route.query.tags == null ? null : this.$route.query.tags
        },
        queryData () {
            const data = {
                page: 1,
                per_page: 20,
            }
            if (this.tags !== null) {
                data.tags = this.tags
            }
            return data
        },
    },
    watch: {
        async tags () {
            this.$store.commit('posts/SET_PAGE', 1)
            this.$store.commit('posts/SET_IS_NO_MORE', false)
            this.$store.commit('posts/RESET_POSTS')
            await this.$store.dispatch('posts/fetchPosts', this.queryData)
        },
    },
    async mounted () {
        if (this.posts.length === 0) {
            await this.$store.dispatch('posts/fetchPosts', this.queryData)
        }
    },
}
</script>

<style scoped>

</style>
