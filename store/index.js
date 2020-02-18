import { setToken, unsetToken, getTokenFromCookie } from '../utils/cookie'

export const strict = process.env.NODE_ENV !== 'production'

export const state = () => ({
    cookieKey: null,
    accessToken: null,
    user: null,
    previousPage: null,
    sidebarOpen: false,
})

export const mutations = {
    SET_ENVIRONMENT (state, environment) {
        state.environment = environment
    },
    SET_USER (state, user) {
        state.user = user || null
    },
    SET_COOKIE_KEY (state, key) {
        state.cookieKey = key
    },
    SET_ACCESS_TOKEN (state, accessToken) {
        state.accessToken = accessToken || null
    },
    SET_ACCESS_TOKEN_TO_COOKIE (state) {
        setToken(state.cookieKey, state.accessToken)
    },
    LOG_OUT (state) {
        state.accessToken = null
        state.user = null
        this.$axios.setToken(null)
        unsetToken(state.cookieKey)
    },
    SET_PREVIOUS_PAGE (state, page) {
        state.previousPage = page
    },
    TOGGLE_SIDE_BAR (state, status) {
        if (status === null) {
            state.sidebarOpen = !state.sidebarOpen
        } else {
            state.sidebarOpen = status
        }
    },
    CHANGE_NAME (state, user) {
        state.user.name = user.name
    },
}

export const getters = {
    environment (state) {
        return state.environment
    },
    isAuthenticated (state) {
        return state.accessToken !== null && state.user !== null
    },
    accessToken (state) {
        return state.accessToken
    },
    user (state) {
        return state.user
    },
}

export const actions = {
    async nuxtServerInit ({ commit, state, dispatch }, { app, req, redirect, query, error }) {
        const cookieKey = process.env.COOKIE_KEY || 'jwt'
        if (cookieKey) commit('SET_COOKIE_KEY', cookieKey)
        const { access_token: accessToken = getTokenFromCookie(req, cookieKey) } = query
        if (accessToken) {
            state.accessToken = accessToken
            const { status = false } = await dispatch('fetchUser')
            if (status) {
                commit(`SET_ACCESS_TOKEN`, accessToken)
            } else {
                commit('LOG_OUT')
            }
        }
    },
    async fetchUser ({ commit, state }) {
        try {
            this.$axios.setToken(state.accessToken, 'Bearer')
            const response = await this.$axios.$get('/user')
            commit('SET_USER', response)
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
    async registerUser ({ commit, state }, data) {
        try {
            const response = await this.$axios.$post('/users', data)
            commit('SET_ACCESS_TOKEN', response.access_token)
            commit('SET_ACCESS_TOKEN_TO_COOKIE')
            return {
                data: response,
                status: true,
            }
        } catch (e) {
            return {
                data: e,
                status: false,
            }
        }
    },
    async login ({ commit, state }, data) {
        try {
            const response = await this.$axios.$post('/user', data)
            commit('SET_ACCESS_TOKEN', response.access_token)
            commit('SET_ACCESS_TOKEN_TO_COOKIE')
            return {
                data: response,
                status: true,
            }
        } catch (e) {
            return {
                data: e.response.data,
                status: false,
            }
        }
    },
    async changeNickname ({ commit, state }, data) {
        try {
            this.$axios.setToken(state.accessToken, 'Bearer')
            const response = await this.$axios.$patch('/user/name', data)
            commit('CHANGE_NAME', response)
            return {
                data: response,
                status: true,
            }
        } catch (e) {
            return {
                data: e.response.data,
                status: false,
            }
        }
    },
    async changePassword ({ commit, state }, data) {
        try {
            this.$axios.setToken(state.accessToken, 'Bearer')
            const response = await this.$axios.$patch('/user/password', data)
            return {
                data: response,
                status: true,
            }
        } catch (e) {
            return {
                data: e.response.data,
                status: false,
            }
        }
    },
}

// todo post list에 긴 이미지 처리
// todo bug fix after uploaded to twitch
// todo login fail toast message
// todo _post lazy-loading image
// todo google tag 관리자
