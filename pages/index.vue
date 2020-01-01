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
    async asyncData ({ store, params, query, error }) {
        if (process.server) {
            console.log('server')
            const queryData = {
                page: 1,
                per_page: 20,
                tags: query.tags ? query.tags : null,
            }
            await store.dispatch('posts/fetchPosts', queryData)
        }
    },
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
    },
}
</script>

<style scoped>

</style>
