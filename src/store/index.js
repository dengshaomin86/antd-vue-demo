import Vue from 'vue';
import Vuex from 'vuex';
import tabs from './modules/tabs';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    tabs
  }
});
