import Vue from 'vue'

Vue.mixin({
    filters: {
        humanTimestamp (timestamp) {
            const now = new Date()
            const createdAt = new Date(timestamp)
            if (now.getDate() !== createdAt.getDate()) {
                return createdAt.getFullYear() + '.' + createdAt.getMonth() + '.' + createdAt.getDate()
            }
            if (now.getHours() - createdAt.getHours() >= 1) {
                return `${now.getHours() - createdAt.getHours()}시간 전`
            }
            if (now.getMinutes() - createdAt.getMinutes() >= 1) {
                return `${now.getMinutes() - createdAt.getMinutes()}분 전`
            }
            return '방금 전'
        },
    },
    computed: {
        user () {
            return this.$store.state.user
        },
    },
})
