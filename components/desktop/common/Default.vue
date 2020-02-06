<template>
    <div class="default-layout">
        <navigation></navigation>
        <div class="container" style="padding-top: 30px;">
            <div class="flex">
                <nuxt class="main" style="min-width: 300px;" :style="{ width: mainWidth }" />
                <right-column class="sidebar" v-if="sidebarVisible"
                              style="width: 280px; padding-right: 20px;">
                </right-column>
            </div>
        </div>
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
import Navigation from './Navigation'
import RightColumn from './RightColumn'
export default {
    components: {
        Navigation,
        RightColumn,
    },
    computed: {
        isCreatingPage () {
            return this.$route.name === 'posts-create' ||
                this.$route.name === 'posts-post-edit' ||
                this.$route.name === 'auth-register' ||
                this.$route.name === 'auth-login' ||
                this.$route.name === 'auth-password'
        },
        sidebarVisible () {
            return this.$route.name !== 'auth-register' &&
                this.$route.name !== 'posts-create' &&
                this.$route.name !== 'auth-login' &&
                this.$route.name !== 'auth-password'
        },
        mainWidth () {
            return this.sidebarVisible ? 'calc(100% - 280px)' : '100%'
        },
        name () {
            return this.$route.name
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
.default-layout {
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
