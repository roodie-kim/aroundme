<template>
    <div class="default-layout">
        <navigation></navigation>
        <div class="container" style="padding-top: 30px;">
            <div class="flex">
                <nuxt style="width: calc(100% - 280px); min-width: 300px;" />
                <right-column style="width: 280px;"></right-column>
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
}
</script>

<style scoped>

</style>
