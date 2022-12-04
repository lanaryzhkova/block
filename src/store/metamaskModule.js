import {ethers} from "ethers";

export const metamaskModule = {
    state: () => ({
        connected: Boolean,
        wallet: String,
        balance: Number
    }),

    getters: {

    },

    mutations: {
        setConnected (state, bool){
            state.connected = bool;
        },
        setWallet (state, wallet){
            state.wallet = wallet;
        },
        setBalance (state, balance){
            state.balance = balance;
        }
    },

    actions: {
        async connectMeta({state, commit}){
            try{
                const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
                let accounts = await provider.send("eth_requestAccounts", []);
                commit('setWallet', accounts[0]);
                commit('setBalance', ethers.utils.formatEther(await provider.getBalance(state.wallet)))
                commit('setConnected', true)
                console.log(state.connected)
            }
            catch (e) {
                console.log(e)
            }

        }

    },
    namespace: true
}