export default {
    state:{
        isRegistered:true
    },
    actions:{
        registrate({commit}) {
            commit("login")
        },
        exit({commit}) {
            commit("logout")
        }
    },
    mutations:{
        login(state) {
            state.isRegistered=true;
        },
        logout(state) {
            state.isRegistered=false
        }
    },
    getters:{
        IS_REGISTERED(state){
            return state.isRegistered
        }
    }
}
