<template>
    <div class="main-index">
        <index-item-mobile v-for="(post, index) in posts"
                           :key="index" :post="post">
        </index-item-mobile>
        <div class="flex flex-center align-items-center"
             style="height: 60px;">
            <div @click="loadPosts()" v-if="!isNoMore"
                 class="flex align-items-center">
                <img src="../../../../assets/images/icons/plus-blue.svg"
                     style="width: 20px; margin-right: 5px;" alt="plus">
                <p style="font-size: 18px; font-weight: 600;">더 보기</p>
            </div>
            <div v-if="isNoMore" class="flex align-items-center">
                <img src="../../../../assets/images/icons/minus-blue.svg"
                     style="width: 20px; margin-right: 5px;" alt="minus">
                <p style="font-size: 18px; font-weight: 600;">글이 없습니다.</p>
            </div>
        </div>
    </div>
</template>

<script>
import IndexDesktop from '../../../desktop/pages/index/Index'
import IndexItemMobile from './IndexItemM'
export default {
    components: { IndexItemMobile },
    extends: IndexDesktop,
}
</script>

<style scoped>

</style>
