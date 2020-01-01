<template>
    <div @click="moveToPost(post.id)" class="post-item"
         style="border: 1px solid #DBDBDB; border-radius: 4px; padding: 10px; margin: 0 20px 15px; cursor: pointer;">
        <div class="header-div">
            <div class="flex align-items-bottom">
                <p class="has-text-black-ter"
                   style="margin-right: 10px; font-size: 14px;">
                    {{ post.user.name }}
                </p>
                <p class="has-text-grey-light"
                   style="font-size: 12px;">
                    {{ post.created_at | humanTimestamp }}
                </p>
            </div>
            <div class="flex align-items-bottom">
                <p v-for="(tag, index) in post.tags" :key="index"
                   class="has-text-warm-red"
                   style="font-size: 14px; margin-right: 10px;">
                    #{{ tag.name }}
                </p>
            </div>
        </div>
        <div class="body-div" style="padding-top: 20px;">
            <div>
                <img class="post-body-image"
                     v-if="postBody.image" :src="postBody.image">
            </div>
            <p class="has-text-black-ter"
               style="font-size: 16px; font-weight: 600">
                {{ post.title }}
            </p>
            <p class="has-text-black"
               style="font-size: 16px;">
                {{ postBody.text }}
            </p>
        </div>
        <div class="footer-div flex">
            <div class="flex">
                <!--<img src="" alt="">-->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            default: null,
        },
    },
    computed: {
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
    methods: {
        moveToPost (id) {
            this.$router.push(`/posts/${id}`)
        },
    },
}
</script>

<style scoped>

</style>
