<template>
    <div>
        <component :is="isMobile"></component>
    </div>
</template>

<script>
import RegisterDesktop from '../../components/desktop/pages/auth/Register'
import RegisterMobile from '../../components/mobile/pages/auth/RegisterM'
export default {
    middleware: 'guest',
    computed: {
        isMobile () {
            return this.$device.isMobile ? RegisterMobile : RegisterDesktop
        },
    },
}
</script>

<style scoped>

</style>
