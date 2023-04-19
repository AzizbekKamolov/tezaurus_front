import { setItem } from "../helpers/parsistenceStorage"
import AuthService from "../service/auth"
const state = {
    isLoading: false,
    isLoggedIn:null,
    user:null,
    errors:null
}

const mutations = {
    registerStart(state) {
        state.isLoading = true
        state.user = null
        state.errors = null
        state.isLoggedIn = null
    },
    registerSuccess(state, payload) {
        state.isLoading = false
        state.user = payload
        state.isLoggedIn = true
    },
    registerFailure(state, payload) {
        state.isLoading = false
        state.errors = payload.data.errors
        state.isLoggedIn = null
    },

    loginStart(state) {
        state.isLoading = true
        state.user = null
        state.errors = null
        state.isLoggedIn = null
    },
    loginSuccess(state, payload) {
        state.isLoading = false
        state.user = payload
        state.isLoggedIn = true
    },
    loginFailure(state, payload) {
        state.isLoading = false
        state.errors = payload.data.errors
        state.isLoggedIn = null
    },
}

const actions = {
    register(context, user) {
        return new Promise((resolve, reject) => {
            context.commit('registerStart')
            AuthService.register(user).then(response => {
                context.commit('registerSuccess', response.data)
                setItem('token', response.data.data.token)
                resolve(response.data)
            }).catch(error => {
                context.commit('registerFailure', error.response.data)
                reject(error.response.data)
            })
        })
    },
    login(context, user) {
        return new Promise((resolve, reject) => {
            context.commit('loginStart')
            AuthService.login(user).then(response => {
                context.commit('loginSuccess', response.data)
                setItem('token', response.data.data.token)
                resolve(response.data)
            }).catch(error => {
                context.commit('loginFailure', error.response.data)
                reject(error.response.data)
            })
        })
    }
}

export default {
    state,
    mutations,
    actions
}