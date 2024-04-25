// src/store/modules/news.js
import newsService from '../../services/newsService';

const state = {
  topHeadlines: [],
};

const getters = {
  topHeadlines: (state) => state.topHeadlines,
};

const actions = {
  async fetchTopHeadlines({ commit }) {
    try {
      const data = await newsService.getTopHeadlines();
      commit('setTopHeadlines', data.sources);
    } catch (error) {
      console.error('Error fetching top headlines:', error);
    }
  },
};

const mutations = {
  setTopHeadlines(state, topHeadlines) {
    state.topHeadlines = topHeadlines;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
