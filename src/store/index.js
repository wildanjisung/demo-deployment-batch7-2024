// store/index.js
import { createStore } from 'vuex';
import axios from 'axios';

const apiKey = '97bc8a910c58443da30b2aad2bccf8bd';
const apiUrl = `https://newsapi.org/v2/everything?q=keyword&apiKey=${apiKey}`;

const state = {
  articles: [],
};

const actions = {
  async fetchNews({ commit }) {
    try {
      const response = await axios.get(apiUrl);
      commit('SET_ARTICLES', response.data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  },
};

const mutations = {
  SET_ARTICLES(state, articles) {
    state.articles = articles;
  },
};

export default createStore({
  state,
  actions,
  mutations,
});
