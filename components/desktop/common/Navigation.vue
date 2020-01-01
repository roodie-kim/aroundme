<template>
    <div class="nav">
        <div class="container">
            <b-navbar>
                <template slot="brand">
                    <b-navbar-item tag="router-link" :to="{ path: '/' }">
                        <img
                            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                            alt="Lightweight UI components for Vue.js based on Bulma"
                        >
                    </b-navbar-item>
                </template>

                <template slot="end">
                    <b-navbar-item tag="div">
                        <div class="buttons" v-if="!isAuthorized">
                            <nuxt-link to="/auth/register" class="button is-primary">
                                <strong>Sign up</strong>
                            </nuxt-link>
                            <nuxt-link to="/auth/login" class="button is-light">
                                Log in
                            </nuxt-link>
                        </div>
                        <div class="buttons" v-if="isAuthorized">
                            <button @click="logout" class="button is-primary">
                                <strong>Log out</strong>
                            </button>
                        </div>
                    </b-navbar-item>
                </template>
            </b-navbar>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        isAuthorized () {
            return this.$store.getters.isAuthorized
        },
    },
    methods: {
        logout () {
            this.$store.commit('LOG_OUT')
        },
    },
}
</script>

<style scoped>

</style>
