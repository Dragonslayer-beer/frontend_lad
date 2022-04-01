import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  // base_url       :   '/erp/lib/api'
  base_url: "http://128.199.248.20/api",
};

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getBaseUrl() {
      return state.base_url;
    },
  },
});
