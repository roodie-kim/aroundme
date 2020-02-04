<template>
    <div class="container">
        <component :is="isMobile"></component>
    </div>
</template>

<script>
import PostCreateDesktop from '../../components/desktop/pages/posts/Create'
import PostCreateMobile from '../../components/mobile/pages/posts/CreateM'
export default {
    middleware: 'authorized',
    name: 'PostCreate',
    computed: {
        isMobile () {
            return this.$device.isMobile ? PostCreateMobile : PostCreateDesktop
        },
    },
}
</script>

<style scoped>

</style>
