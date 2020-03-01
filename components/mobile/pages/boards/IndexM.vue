<template>
    <div class="main-index">
        <h4 v-if="currentBoard" class="title is-4 has-text-primary"
            style="margin: 10px;">{{ currentBoard.name }}</h4>
        <index-item v-for="(post, index) in posts"
                    :key="index" :post="post">
        </index-item>
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
import Index from '../../../desktop/pages/boards/Index'
import IndexItem from './IndexItemM'
export default {
    components: { IndexItem },
    extends: Index,
}
</script>

<style scoped>

</style>
