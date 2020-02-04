export const state = () => ({
    tags: [],
})

export const mutations = {
    SET_TAGS (state, tags) {
        state.tags = tags
    },
}

export const getters = {

}

export const actions = {
    async fetchTags ({ commit, state }, query) {
        try {
            const response = await this.$axios.$get(`/tags?type=trending`)
            commit('SET_TAGS', response)
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
