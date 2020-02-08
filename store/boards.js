export const state = () => ({
    boards: [],
    currentBoard: null,
})

export const mutations = {
    SET_BOARDS (state, boards) {
        state.boards = boards
    },
    SET_CURRENT_BOARD (state, board) {
        state.currentBoard = board
    },
}

export const getters = {

}

export const actions = {
    async fetchBoards ({ commit, state }) {
        try {
            const response = await this.$axios.$get('/codes/B1')
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
