export const state = () => ({
    comments: [],
    page: 1,
    isNoMore: false,
})

export const mutations = {
    RESET_COMMENTS (state, comments) {
        state.comments = []
    },
    SET_COMMENTS (state, comments) {
        state.comments = [ ...state.comments, ...comments ]
    },
    UNSHIFT_COMMENT (state, comment) {
        state.comments.unshift(comment)
    },
    SET_PAGE (state, page) {
        state.page = page
    },
    SET_IS_NO_MORE (state, status) {
        state.isNoMore = status
    },
    SET_LIKES_COUNT (state, like) {
        const existingComments = JSON.parse(JSON.stringify(state.comments))
        const index = existingComments.findIndex((comment) => {
            return comment.id === like.comment_id
        })
        if (index < 0) return
        if (like.is_deleted) {
            existingComments[index].likes_count = existingComments[index].likes_count - 1
            existingComments[index].is_liked = false
        } else {
            existingComments[index].likes_count = existingComments[index].likes_count + 1
            existingComments[index].is_liked = true
        }
        state.comments = existingComments
    },
    DELETE_COMMENT (state, deletedComment) {
        const existingComments = JSON.parse(JSON.stringify(state.comments))
        const index = existingComments.findIndex((comment) => {
            return comment.id === deletedComment.id
        })
        if (index < 0) return
        existingComments.splice(index, 1)
        state.comments = existingComments
    },
}

export const getters = {

}

export const actions = {
    async fetchComments ({ commit, state, rootState }, query) {
        try {
            this.$axios.setToken(rootState.accessToken, 'Bearer')
            const response = await this.$axios.$get('/comments', {
                params: query,
            })
            commit('SET_COMMENTS', response)
            commit('SET_PAGE', state.page + 1)
            if (response.length < 20) {
                commit('SET_IS_NO_MORE', true)
            }
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
    async createComment ({ commit, rootState }, comment) {
        try {
            this.$axios.setToken(rootState.accessToken, 'Bearer')
            const response = await this.$axios.$post('/comments', comment)
            commit('UNSHIFT_COMMENT', response)
            commit('posts/ADD_COMMENT', null, { root: true })
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
    async likeComment ({ commit, rootState }, data) {
        try {
            this.$axios.setToken(rootState.accessToken, 'Bearer')
            const response = await this.$axios.$post('/likes', data)
            commit('SET_LIKES_COUNT', response)
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
    async deleteComment ({ commit, rootState }, id) {
        try {
            this.$axios.setToken(rootState.accessToken, 'Bearer')
            const response = await this.$axios.$delete(`/comments/${id}`)
            commit('DELETE_COMMENT', response)
            commit('posts/DELETE_COMMENT', id, { root: true })
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
