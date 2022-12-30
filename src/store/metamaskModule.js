import {ethers} from "ethers";

export const metamaskModule = {
    state: () => ({
        connected: Boolean,
        wallet: String,
        balance: Number,
        signer: ''
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
        },
        setSigner (state, signer){
            state.signer = signer;
        }
    },

    actions: {
        async connectMeta({state, commit}){
            try{
                const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
                let accounts = await provider.send("eth_requestAccounts", []);
                commit('setWallet', accounts[0]);
                commit('setSigner', provider.getSigner());
                commit('setBalance', ethers.utils.formatEther(await provider.getBalance(state.wallet)))
                commit('setConnected', true)
            }
            catch (e) {
                console.log(e)
            }

        }

    },
    namespace: true
}