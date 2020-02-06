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
        post () {
            return this.$store.state.posts.post
        },
        postBody () {
            try {
                const text = JSON.parse(this.post.body).ops.reduce((acc, cur) => {
                    if (cur.hasOwnProperty('insert') && typeof cur.insert === 'string') {
                        return acc + cur.insert
                    }
                    return acc
                }, '')
                const image = JSON.parse(this.post.body).ops.find((operation) => {
                    return operation.hasOwnProperty('insert') && typeof operation.insert === 'object' && operation.insert.hasOwnProperty('image')
                })
                return {
                    text,
                    image: image ? image.insert.image : null,
                }
            } catch (e) {
                return this.post.body
            }
        },
    },
    beforeRouteEnter (to, from, next) {
        next((vm) => {
            vm.$store.commit('SET_PREVIOUS_PAGE', from)
        })
    },
    head () {
        const title = this.post ? '수지사람공간 | ' + this.post.title : '수지사람공간 | POST'
        const description = this.post ? this.postBody.text.substring(0, 100) + '...' : `Your fans can use all the functions of the Fanboards`
        const imagePath = this.post && this.postBody.image ? this.postBody.image : process.env.SEO_IMAGE_PATH
        return {
            title,
            meta: [
                { hid: 'og:title', property: 'og:title', content: title },
                { hid: 'og:description', property: 'og:description', content: description },
                { hid: 'og:url', property: 'og:url', content: `${process.env.OG_URL}/posts/${this.$route.params.post * 1}` },
                { hid: 'og:image', property: 'og:image', content: imagePath },
                { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: process.env.SEO_IMAGE_PATH },
                { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
                { hid: 'og:image:height', property: 'og:image:height', content: '1200' },
                { hid: 'og:image:type', property: 'og:image:type', content: 'image/png' },
            ],
        }
    },
}
</script>

<style scoped>

</style>
