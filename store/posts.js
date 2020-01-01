export const state = () => ({
    posts: [],
    page: 1,
    post: null,
    isNoMore: false,
})

export const mutations = {
    SET_POSTS (state, posts) {
        state.posts = [ ...state.posts, ...posts ]
    },
    UNSHIFT_POST (state, post) {
        state.posts.unshift(post)
    },
    SET_PAGE (state, page) {
        state.page = page
    },
    SET_POST (state, post) {
        state.post = post
    },
    SET_IS_NO_MORE (state, status) {
        state.isNoMore = status
    },
    RESET_POSTS (state) {
        state.posts = []
    },
    SET_LIKES_COUNT (state, like) {
        const post = state.post
        if (like.is_deleted) {
            post.likes_count = post.likes_count - 1
            post.is_liked = false
        } else {
            post.likes_count = post.likes_count + 1
            post.is_liked = true
        }
        state.post = post
    },
}

export const getters = {

}

export const actions = {
    async fetchPosts ({ commit, state, rootState }, query) {
        try {
            this.$axios.setToken(rootState.accessToken, 'Bearer')
            const response = await this.$axios.$get('/posts', {
                params: query,
            })
            commit('SET_POSTS', response)
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
    async createPost ({ commit, rootState }, post) {
        try {
            this.$axios.setToken(rootState.accessToken, 'Bearer')
            const response = await this.$axios.$post('/posts', post)
            commit('UNSHIFT_POST', response)
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
    async fetchPost ({ commit, rootState }, { post_id: postId }) {
        try {
            this.$axios.setToken(rootState.accessToken, 'Bearer')
            const response = await this.$axios.$get(`/posts/${postId}`)
            commit('SET_POST', response)
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
    async editPost ({ commit, rootState }, post) {
        try {
            this.$axios.setToken(rootState.accessToken, 'Bearer')
            const response = await this.$axios.$patch(`/posts/${post.id}`, post)
            // commit('SET_POST', response)
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
    async deletePost ({ commit, rootState }, postId) {
        try {
            this.$axios.setToken(rootState.accessToken, 'Bearer')
            const response = await this.$axios.$delete(`/posts/${postId}`)
            // commit('REMOVE_POST', response)
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
    async postLike ({ commit, rootState }, data) {
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
}
