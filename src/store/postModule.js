import axios from "axios";

export const postModule = {
    state: () => ({
        user: {
            email: '',
            password: '',
            wallet: ''
        },
        isAuth: false,
        errorText: ''

    }),
    getters: {

    },
    mutations: {
        setUser(state, user){
            state.user = user
        },
        setIsAuth(state, bool){
            state.isAuth = bool
        },
        setErrorText(state, errorText){
            state.errorText = errorText
        }
    },
    actions: {
        async login({state}){
            await axios.post('http://127.0.0.1:8000/login/', {
                'Email': state.user.email,
                'Password': state.user.password,
                'Address': state.user.wallet,
            }).then(response => {
                console.log(response)
                state.isAuth = true;
            })
                .catch(e => {
                    console.log(e)
                })
         },
        async register({state, commit}){
            await axios.post('http://127.0.0.1:8000/register/', {
                'Email': state.user.email,
                'Password': state.user.password,
                'Address': state.user.wallet,
            }).then(response => {
                console.log(response)
                state.isAuth = true;
                console.log('yes1')
            })
                .catch(e => {
                    commit('setErrorText', 'Вы уже зарегистрированы')
                    console.log(state.errorText)
                })
        },
        async logOut({state,commit}){
            commit('setIsAuth', false);
            state.user.email = '';
            state.user.password = '';
            state.user.wallet = '';

        }
    },
    namespace: true,
}