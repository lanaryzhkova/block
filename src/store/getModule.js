import axios from "axios";

export const getModule = {
    state: () => ({
        jsonNFT: '',
        allNfts: []
    }),
    getters: {},
    mutations: {
        setJsonNFT(state, jsonNFT){
            state.jsonNFT = jsonNFT;
        }
    },
    actions: {
        async getJSON({state, commit}, hash){
            let response = await axios.get(`http://127.0.0.1:8000/get-json-file/${hash}`)
            commit('setJsonNFT', response.data)
            return state.jsonNFT
        }
    },
    namespace: true
}