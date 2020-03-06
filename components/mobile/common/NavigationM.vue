<template>
    <div class="nav"
         style="background-color: #ffffff; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
        <div class="container flex space-between align-items-center align-items-center"
             style="height: 50px;">
            <img @click="goToHome()"
                 src="../../../assets/images/logos/main-logo.png"
                 alt="Lightweight UI components for Vue.js based on Bulma"
                 style="margin-left: 8px; height: 22px;"
            >
            <div @click="toggleSideBar(null)"
                 class="flex flex-center align-items-center"
                 style="width: 50px; height: 50px;">
                <img src="../../../assets/images/icons/hamburger-menu.svg" alt=""
                     style="height: 20px;">
            </div>
        </div>
    </div>
</template>

<script>
import SidebarM from './SidebarM'
export default {
    components: {
        SidebarM,
    },
    computed: {
        isAuthenticated () {
            return this.$store.getters.isAuthenticated
        },
    },
    methods: {
        logout () {
            this.$store.commit('LOG_OUT')
        },
        toggleSideBar (isOpen) {
            this.$store.commit('TOGGLE_SIDE_BAR', isOpen)
        },
        goToHome () {
            if (!(this.$route.name === 'index' && this.$route.query.tags == null)) {
                this.$store.commit('posts/RESET_POSTS')
                this.$router.push('/')
            }
        },
    },
}
</script>

<style scoped>

</style>
