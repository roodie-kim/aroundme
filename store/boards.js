export const state = () => ({
    boards: [],
    currentBoard: null,
    summary: [],
})

export const mutations = {
    SET_BOARDS (state, boards) {
        state.boards = boards
    },
    SET_CURRENT_BOARD (state, boardName) {
        const boards = [ ...state.boards ]
        const index = boards.findIndex((board) => {
            return board.name === boardName
        })
        state.currentBoard = boards[index]
    },
    SET_SUMMARY (state, summary) {
        state.summary = summary.sort(function (a, b) {
            return a.order - b.order
        })
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
    async fetchSummary ({ commit, state }) {
        try {
            const response = await this.$axios.$get('/posts/summary')
            console.log(response)
            commit('SET_SUMMARY', response)
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
