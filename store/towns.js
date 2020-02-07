export const state = () => ({
    towns: [],
})

export const mutations = {
    SET_TOWNS (state, towns) {
        state.towns = towns
    },
}

export const getters = {

}

export const actions = {
    async fetchTowns ({ commit, state }) {
        try {
            const response = await this.$axios.$get('/towns')
            commit('SET_TOWNS', response)
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
