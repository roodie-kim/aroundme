<template>
    <div class="main-index flex">
        <index-item-desktop v-for="(board, index) in boards" :key="index" :board="board">
        </index-item-desktop>
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
.main-index {
    flex-flow: row wrap;
}
</style>
