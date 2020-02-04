<template>
    <div>
        <component :is="isMobile"></component>
    </div>
</template>

<script>
import PasswordDesktop from '../../components/desktop/pages/auth/Password'
import PasswordMobile from '../../components/mobile/pages/auth/PasswordM'
export default {
    middleware: 'guest',
    name: 'PasswordReset',
    computed: {
        isMobile () {
            return this.$device.isMobile ? PasswordMobile : PasswordDesktop
        },
    },
}
</script>

<style scoped>

</style>
