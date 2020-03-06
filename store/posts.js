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
        const posts = JSON.parse(JSON.stringify(state.posts))
        posts.unshift(post)
        state.posts = posts
    },
    SET_PAGE (state, page) {
        state.page = page
    },
    SET_POST (state, post) {
        state.post = post
    },
    EDIT_POST (state, editedPost) {
        const posts = JSON.parse(JSON.stringify(state.posts))
        const index = posts.findIndex((post) => {
            return post.id === editedPost.id
        })
        if (index >= 0) {
            posts[index] = editedPost
        }
        state.posts = posts
    },
    REMOVE_POST (state, deletedPost) {
        const posts = JSON.parse(JSON.stringify(state.posts))
        const index = posts.findIndex((post) => {
            return post.id === deletedPost.id
        })
        if (index >= 0) {
            posts.splice(index, 1)
        }
        state.posts = posts
    },
    SET_IS_NO_MORE (state, status) {
        state.isNoMore = status
    },
    RESET_POSTS (state) {
        state.posts = []
    },
    SET_LIKES_COUNT (state, like) {
        const existingPost = JSON.parse(JSON.stringify(state.post))
        if (like.is_deleted) {
            existingPost.likes_count = existingPost.likes_count - 1
            existingPost.is_liked = false
        } else {
            existingPost.likes_count = existingPost.likes_count + 1
            existingPost.is_liked = true
        }
        state.post = existingPost
    },
    ADD_COMMENT (state, comment) {
        const existingPost = JSON.parse(JSON.stringify(state.post))
        existingPost.comments_count++
        state.post = existingPost

        const posts = JSON.parse(JSON.stringify(state.posts))
        const index = posts.findIndex((post) => {
            return post.id === existingPost.id
        })
        if (index >= 0) {
            posts[index].comments_count++
        }
        state.posts = posts
    },
    DELETE_COMMENT (state, comment) {
        const existingPost = JSON.parse(JSON.stringify(state.post))
        existingPost.comments_count--
        state.post = existingPost

        const posts = JSON.parse(JSON.stringify(state.posts))
        const index = posts.findIndex((post) => {
            return post.id === existingPost.id
        })
        if (index >= 0) {
            posts[index].comments_count--
        }
        state.posts = posts
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
    async fetchPostsForIndex ({ commit, state, rootState }, query) {
        try {
            this.$axios.setToken(rootState.accessToken, 'Bearer')
            const response = await this.$axios.$get('/posts', {
                params: query,
            })
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
            if (rootState.boards.currentBoard && response.board_type === rootState.boards.currentBoard.board_type) {
                commit('UNSHIFT_POST', response)
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
            commit('EDIT_POST', response)
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
            commit('REMOVE_POST', response)
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
