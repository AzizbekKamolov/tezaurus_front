import { setItem } from "../helpers/parsistenceStorage"
import AuthService from "../service/auth"
const state = {
    isLoading: false,
    user:null,
    errors:null
}

const mutations = {
    registerStart(state) {
        state.isLoading = true
        state.user = null
        state.errors = null
    },
    registerSuccess(state, payload) {
        state.isLoading = false
        state.user = payload
    },
    registerFailure(state, payload) {
        state.isLoading = false
        state.errors = payload.data.errors
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
    }
}

export default {
    state,
    mutations,
    actions
}