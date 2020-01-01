export const state = () => ({

})

export const mutations = {

}

export const getters = {

}

export const actions = {
    async postImage ({ commit, rootState }, post) {
        try {
            this.$axios.setToken(rootState.accessToken, 'Bearer')
            const response = await this.$axios.$post('/images', post)
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
