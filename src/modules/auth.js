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
        state.errors = payload
    },
}

const actions = {
    register(context, user) {
        return new Promise(() => {
            context.commit('registerStart')
            AuthService.register(user).then(response => {
                context.commit('registerSuccess', response.data)
            }).catch(error => {
                context.commit('registerFailure', error.data.errors)
            })
        })
    }
}

export default {
    state,
    mutations,
    actions
}