// src/services/newsService.js
import axios from 'axios';

const apiKey = '97bc8a910c58443da30b2aad2bccf8bd';
const apiUrl = 'https://newsapi.org/v2';

const newsService = {
  async getTopHeadlines() {
    try {
      const response = await axios.get(`${apiUrl}/top-headlines/sources?apiKey=${apiKey}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching top headlines:', error);
      throw error;
    }
  },
};

export default newsService;
