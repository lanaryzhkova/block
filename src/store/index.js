import { createStore } from 'vuex'
import {metamaskModule} from "@/store/metamaskModule";
import {getModule} from "@/store/getModule";
import {postModule} from "@/store/postModule";

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    metamask: metamaskModule,
    get: getModule,
    post: postModule
  }
})
