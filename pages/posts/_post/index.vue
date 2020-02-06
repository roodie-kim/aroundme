<template>
    <div>
        <component :is="isMobile"></component>
    </div>
</template>

<script>
import PostCreateDesktop from '../../../components/desktop/pages/posts/Id'
import PostCreateMobile from '../../../components/mobile/pages/posts/IdM'
export default {
    async asyncData ({ store, params, query, error }) {
        const postId = params.post
        await store.dispatch('posts/fetchPost', { post_id: postId })
    },
    computed: {
        isMobile () {
            return this.$device.isMobile ? PostCreateMobile : PostCreateDesktop
        },
    },
    beforeRouteEnter (to, from, next) {
        next((vm) => {
            vm.$store.commit('SET_PREVIOUS_PAGE', from)
        })
    },
}
</script>

<style scoped>

</style>
