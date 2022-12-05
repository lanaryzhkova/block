import axios from "axios";
import {metamaskModule} from "@/store/metamaskModule";

export const getModule = {
    state: () => ({
        nft: String
    }),
    getters: {

    },
    mutations: {
        setNft(state, nft){
            state.nft = nft;
        }
    },
    actions: {
        async getNftByWallet({state, commit}){
            let address = metamaskModule.state.wallet;
            let response =  await axios.get(`http://127.0.0.1:8000/get-nfts/${{address}}`)
            commit('setNft', response.data)
            console.log(state.nft)
        }
    },
    namespace: true
}