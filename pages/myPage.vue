<template>
    <div class="container">
        <component :is="isMobile"></component>
    </div>
</template>

<script>
import MyPageDesktop from '../components/desktop/pages/MyPage'
import MyPageMobile from '../components/mobile/pages/MyPageM'
export default {
    name: 'PostCreate',
    computed: {
        isMobile () {
            return this.$device.isMobile ? MyPageMobile : MyPageDesktop
        },
    },
}
</script>

<style scoped>

</style>
