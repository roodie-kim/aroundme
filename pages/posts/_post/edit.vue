<template>
    <div>
        <component :is="isMobile"></component>
    </div>
</template>

<script>
import PostEditDesktop from '../../../components/desktop/pages/posts/Edit'
import PostEdidMobile from '../../../components/mobile/pages/posts/EditM'
export default {
    middleware: 'authorized',
    name: 'PostEdit',
    async asyncData ({ store, params, query, error }) {
        const postId = params.post
        await store.dispatch('posts/fetchPost', { post_id: postId })
    },
    computed: {
        isMobile () {
            return this.$device.isMobile ? PostEdidMobile : PostEditDesktop
        },
    },
}
</script>

<style scoped>

</style>
