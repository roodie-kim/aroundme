<template>
    <div class="nav">
        <div class="container">
            <b-navbar>
                <template slot="brand">
                    <b-navbar-item tag="router-link" :to="{ path: '/' }" @click.native="resetPosts()">
                        <img
                            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                            alt="Lightweight UI components for Vue.js based on Bulma"
                        >
                    </b-navbar-item>
                </template>

                <template slot="end">
                    <b-navbar-item tag="div">
                        <div class="buttons" v-if="!isAuthenticated">
                            <nuxt-link to="/auth/register" class="button is-primary">
                                <strong>가입하기</strong>
                            </nuxt-link>
                        </div>
                        <div class="buttons" v-if="isAuthenticated">
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
    methods: {
        resetPosts () {
            this.$store.commit('posts/RESET_POSTS')
        },
    },
}
</script>

<style scoped>

</style>
