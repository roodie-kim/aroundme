<template>
    <div class="main-index">
        <div v-for="(board, index) in boards" :key="index">
            <nuxt-link :to="`/${board.name}`">
                {{ board }}
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import IndexItemDesktop from './IndexItem'
export default {
    components: { IndexItemDesktop },
    computed: {
        boards () {
            return this.$store.state.boards.boards
        },
    },
}
</script>

<style scoped>

</style>
