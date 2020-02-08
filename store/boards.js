export const state = () => ({
    boards: [],
})

export const mutations = {
    SET_BOARDS (state, boards) {
        state.boards = boards
    },
}

export const getters = {

}

export const actions = {
    async fetchBoards ({ commit, state }) {
        try {
            const response = await this.$axios.$get('/codes?board_type=B101')
            commit('SET_BOARDS', response)
            return {
                data: response,
                status: true,
            }
        } catch (e) {
            console.log(e)
            return {
                data: e,
                status: false,
            }
        }
    },
}
