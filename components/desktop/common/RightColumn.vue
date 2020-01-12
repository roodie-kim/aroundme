<template>
    <div class="right-column">
        <div @click="goToCreatePostPage" class="button is-primary" style="width: 100%;">
            <b-icon
                icon="pen"
                size="is-small">
            </b-icon>
            &nbsp; 글쓰기
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        isAuthenticated () {
            return this.$store.getters['isAuthenticated']
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
    },
}
</script>

<style scoped>

</style>
