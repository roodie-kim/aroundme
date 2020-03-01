<template>
    <div class="main-index flex">
        <index-item v-for="(board, index) in boards" :key="index" :board="board">
        </index-item>
    </div>
</template>

<script>
import IndexItem from './IndexItem'
export default {
    components: { IndexItem },
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
