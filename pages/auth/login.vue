<template>
    <div>
        <component :is="isMobile"></component>
    </div>
</template>

<script>
import LoginDesktop from '../../components/desktop/pages/auth/Login'
import LoginMobile from '../../components/mobile/pages/auth/LoginM'
export default {
    name: 'Login',
    middleware: 'guest',
    computed: {
        isMobile () {
            return this.$device.isMobile ? LoginMobile : LoginDesktop
        },
    },
}
</script>

<style scoped>

</style>
