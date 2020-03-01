<template>
    <div class="main-index flex">
        <index-item v-for="(board, index) in boards" :key="index" :board="board">
        </index-item>
    </div>
</template>

<script>
import IndexDesktop from '../../../desktop/pages/index/Index'
import IndexItem from './IndexItemM'
export default {
    components: { IndexItem },
    extends: IndexDesktop,
}
</script>

<style scoped>
    .main-index {
        flex-flow: row wrap;
    }
</style>
