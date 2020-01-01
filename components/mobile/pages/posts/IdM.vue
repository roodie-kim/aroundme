<template>
    <div>
        mobile
    </div>
</template>

<script>
export default {
    computed: {
        post () {
            return this.$store.state.posts.post
        },
    },
}
</script>

<style scoped>

</style>
