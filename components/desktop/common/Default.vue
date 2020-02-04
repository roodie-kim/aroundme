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
}
</script>

<style scoped>
.default-layout {
    height: 100%;
}
.main {
    /*overflow: scroll;*/
}
.sidebar {
    /*overflow: scroll;*/
}
</style>
