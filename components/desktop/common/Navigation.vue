<template>
    <div class="nav">
        <div class="container">
            <b-navbar>
                <template slot="brand">
                    <b-navbar-item tag="div" class="navbar-brand" @click="goHome()" style="cursor: pointer;">
                        <img
                            src="../../../assets/images/logos/main-logo.png"
                            alt="수지"
                        >
                    </b-navbar-item>
                </template>

                <template slot="end">
                    <b-navbar-item tag="div">
                        <div class="buttons" v-if="!isAuthenticated" style="cursor: pointer;">
                            <nuxt-link to="/auth/register" class="button is-primary">
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
