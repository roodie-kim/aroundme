<template>
    <div class="right-column">
        <div @click="goToCreatePostPage" class="button is-primary"
             style="margin-bottom: 20px; width: 100%;">
            <b-icon
                icon="pen"
                size="is-small">
            </b-icon>
            &nbsp; 글쓰기
        </div>
        <div style="display: flex; margin-bottom: 20px;">
            <input v-model="keyword" class="input" placeholder="검색"
                   style="border-top-right-radius: 0; border-bottom-right-radius: 0;" />
            <button @click="search()" class="button is-primary"
                    style="border-top-left-radius: 0; border-bottom-left-radius: 0;">
                <img src="../../../assets/images/icons/search-white.svg"
                     style="width: 25px;"
                     alt="search">
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            keyword: null,
        }
    },
    computed: {
        tags () {
            return this.$store.state.tags.tags
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
        // async fetchBoards () {
        //
        // },
        // search () {
        //     const string = this.keyword.replace(/ /g, '')
        //     this.$router.push(`/?tags=${string}`)
        //     this.keyword = null
        //     this.toggleSidebar(false)
        // },
    },
    // async mounted () {
    //     await this.fetchBoards()
    // },
}
</script>

<style scoped>

</style>
