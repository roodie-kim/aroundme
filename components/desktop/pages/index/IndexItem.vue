<template>
    <div class="main-item">
        <div class="main-inner"
             style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
            <div class="flex flex-end">
                <div class="main-item-header flex space-between align-items-center"
                     style="padding: 0 5px 0 10px;
                            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                    <p @click="moveToBoard()" style="font-size: 18px; font-weight: 600; cursor: pointer;">{{ board.name }}</p>
                    <p @click="moveToBoard()" style="font-size: 14px; cursor: pointer;">더보기</p>
                </div>
            </div>
            <div v-if="board.posts.length === 0"
                 class="flex flex-center align-items-center has-background-light"
                 style="height: 160px; padding-top: 8px;">
                <p>아직 글이 없습니다.</p>
            </div>
            <div v-if="board.posts.length !== 0"
                 style="height: 190px; padding: 10px 10px 5px; background-color: #ffffff;">
                <div v-for="(post, index) in board.posts" :key="index">
                    <nuxt-link :to="`/posts/${post.id}`"
                               class="flex space-between has-text-black-ter">
                        <p class="flex main-item-title ellipsis">
                            <span v-if="post.area_name" class="has-text-primary">[{{ post.area_name }}]</span>
                            <span v-if="post.sub_type_name" :class="subTypeNameClass(post)">[{{ post.sub_type_name }}]</span>
                            {{ post.title }}
                        </p>
                        <p class="main-item-date flex flex-end">{{ realTimestamp(post.created_at) }}</p>
                    </nuxt-link>
                </div>
            </div>
            <!--<div v-if="isLoading"-->
            <!--     class="flex flex-center align-items-center"-->
            <!--     style="height: 180px; padding-top: 8px;">-->
            <!--    <spinner-div></spinner-div>-->
            <!--</div>-->
        </div>
    </div>
</template>

<script>
// import SpinnerDiv from '../../../common/spinner'
export default {
    props: {
        board: {
            type: Object,
            default: null,
        },
    },
    // components: {
    //     SpinnerDiv,
    // },
    methods: {
        moveToBoard () {
            const inPost = this.$route.params.boards === undefined
            const differentBoard = this.$route.params.boards !== this.board.name
            this.$store.commit('TOGGLE_SIDE_BAR', false)
            if (inPost || differentBoard) {
                this.$store.commit('posts/RESET_POSTS')
                this.$router.push(`/${this.board.name}`)
            }
        },
        subTypeNameClass (post) {
            return post.sub_type_name === '판매' ? 'has-text-twitter' : 'has-text-warm-red'
        },
    },
}
</script>

<style scoped>
.main-item {
    width: 50%;
    min-width: 300px;
    padding: 5px;
}
.main-item-header {
    width: 100%;
    height: 40px;
}
/*.main-item-title {*/
/*    padding: 1px 12px 1px 0;*/
/*}*/
.main-item-date {
    min-width: 45px;
}
</style>
