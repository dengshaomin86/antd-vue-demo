export default {
  namespaced: true,
  state: {
    panes: [],
    activeTabKey: ''
  },
  getters: {},
  mutations: {
    appendPane(state, { title, key, url }) {
      state.activeTabKey = key;
      if (state.panes.find(item => item.key === key)) return;
      const pane = { title, key, url };
      state.panes = [...state.panes, pane];
    },
    removePane(state, data) {},
    setActiveTabKey(state, key) {
      state.activeTabKey = key;
    }
  },
  actions: {}
};
