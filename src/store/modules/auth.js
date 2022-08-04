import api from '../../api/imgur'
import qs from 'qs'

const state = {
  token: window.localStorage.getItem('imgur_token')
};

const getters = {
  isLoggedIn(state) {
    return !!state.token
  }
};

const actions = {
  login() {
    api.login();
  },
  finalizeLogin({ commit }, hash) {
    const params = qs.parse(hash.replace('#', ''));

    commit('setToken', params.access_token);
    window.localStorage.setItem('imgur_token', params.access_token)
  },
  logout({ commit }) {
    commit('setToken', null);
  }
};

const mutations = {
  setToken(state, token) {
    state.token = token;
    window.localStorage.removeItem('imgur_token');
  }
};

export default {
  state,
  getters,
  actions, 
  mutations
};

