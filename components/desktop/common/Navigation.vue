<template>
    <div class="nav"
         style="background-color: #ffffff; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
        <div class="container">
            <b-navbar>
                <template slot="brand">
                    <b-navbar-item tag="div" class="navbar-brand" style="cursor: pointer;">
                        <img @click="goHome()"
                             src="https://philgdpublic.s3.ap-northeast-2.amazonaws.com/seo/Philgood_Logo_Horizontal.png"
                             alt="로고"
                        >
                    </b-navbar-item>
                </template>

                <template slot="end">
                    <b-navbar-item tag="div">
                        <div class="buttons" v-if="!isAuthenticated" style="cursor: pointer;">
                            <nuxt-link to="/auth/login" class="button is-primary is-small">
                                <strong>로그인</strong>
                            </nuxt-link>
                            <nuxt-link to="/auth/register" class="button is-primary is-small">
                                <strong>가입하기</strong>
                            </nuxt-link>
                        </div>
                        <div class="buttons" v-if="isAuthenticated" style="cursor: pointer;">
                            <nuxt-link to="/myPage" style="font-size: 18px; font-weight: 600;">
                                {{ user.name }}
                            </nuxt-link>
                        </div>
                    </b-navbar-item>
                </template>
            </b-navbar>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            route: null,
        }
    },
    methods: {
        goHome () {
            if (!(this.$route.name === 'index' && this.$route.query.tags == null)) {
                this.$store.commit('posts/RESET_POSTS')
                this.$router.push('/')
            }
        },
    },
}
</script>

<style scoped>
/*.navbar-brand {*/
/*    width: 200px;*/
/*}*/
</style>
