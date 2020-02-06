<template>
    <div class="layout">
        <navigation></navigation>
        <sidebar-m></sidebar-m>
        <nuxt />
        <div @click="goToTop()" v-if="!isCreatingPage"
             class="go-to-top-button flex flex-center align-items-center">
            <img src="../../../assets/images/icons/arrow-up-white.svg"
                 alt="arrow" style="height: 30px;">
        </div>
        <div @click="goToCreatePostPage()" v-if="!isCreatingPage"
             class="create-post-button flex flex-center align-items-center">
            <img src="../../../assets/images/icons/pen-white.svg" alt="plus">
        </div>
    </div>
</template>

<script>
import DefaultDesktop from '../../desktop/common/Default'
import NavigationM from './NavigationM'
import SidebarM from './SidebarM'
export default {
    extends: DefaultDesktop,
    components: {
        navigation: NavigationM,
        SidebarM,
    },
    computed: {
        isCreatingPage () {
            return this.$route.name === 'posts-create' ||
                this.$route.name === 'posts-post-edit' ||
                this.$route.name === 'auth-register' ||
                this.$route.name === 'auth-login' ||
                this.$route.name === 'auth-password'
        },
    },
    methods: {
        goToCreatePostPage () {
            if (this.isAuthenticated) {
                this.$router.push({ path: '/posts/create' })
            } else {
                this.$buefy.dialog.confirm({
                    title: '엇!',
                    message: '로그인이 필요한 페이지입니다. 지금 로그인 하시겠습니까?',
                    cancelText: '아니요',
                    confirmText: '네',
                    onConfirm: () => this.$router.push('/auth/login'),
                })
            }
        },
        goToTop () {
            window.scrollTo(0, 0)
        },
    },
}
</script>

<style scoped>
.layout {
    height: 100%;
}
.go-to-top-button {
    position: fixed;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #4099FF;
    bottom: 125px;
    right: 10px;
    box-shadow: 2px 2px 3px #999;
}
.create-post-button {
    position: fixed;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #283593;
    bottom: 60px;
    right: 10px;
    box-shadow: 2px 2px 3px #999;
}
</style>
