export default {
  namespaced: true,
  state() {
    return {
      workspaces: []
    }
  },
  getters: {},
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  },
  actions: {
    createWorkspace() {

    },
    async readWorkspaces({ commit }) {
      const workspaces = await fetch('https://kdt.roto.codes/documents/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-username': 'TJ'
        }
      }).then(res => res.json())
      console.log(workspaces)
      commit('assignState', {
        workspaces
      })
    },
    readWorkspace() {

    },
    updateWorkspace() {

    },
    deleteWorkspace() {

    }
  }
}