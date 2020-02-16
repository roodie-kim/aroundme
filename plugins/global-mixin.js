import Vue from 'vue'

Vue.mixin({
    filters: {
        humanTimestamp (timestamp) {
            const now = new Date()
            const createdAt = new Date(timestamp)
            if (now.getDate() !== createdAt.getDate()) {
                return createdAt.getFullYear() + '.' + (createdAt.getMonth() + 1) + '.' + createdAt.getDate()
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
        isAuthenticated () {
            return this.$store.getters['isAuthenticated']
        },
    },
    methods: {
        toggleSidebar (isOpen) {
            this.$store.commit('TOGGLE_SIDE_BAR', isOpen)
        },
        realTimestamp (timestamp) {
            if (this.$moment(timestamp).isSame(this.$moment(), 'day')) {
                return this.$moment(timestamp).format('HH:mm')
            } else {
                return this.$moment(timestamp).format('MM-DD')
            }
        },
    },
})
