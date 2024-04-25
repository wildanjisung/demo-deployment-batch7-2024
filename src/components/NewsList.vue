<template>
  <div>
    <v-app-bar app color="primary">
      <v-toolbar-title>Berita Terkini</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container>
        <div class="loading-container" v-if="loading">
          <p class="loading-text">Sedang memuat data...</p>
        </div>
        <ul v-else>
          <li v-for="article in articles" :key="article.url" @click="viewDetail(article)">
            <div class="news-item">
              <img :src="article.urlToImage" alt="News Image" class="news-image" />
              <div class="news-details">
                <span>{{ article.source.name }}</span>
                <h3>{{ article.title }}</h3>
                <p>{{ formatDate(article.publishedAt) }}</p>
              </div>
            </div>
          </li>
        </ul>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapState(['articles']),
  },
  mounted() {
    this.fetchNews();
  },
  methods: {
    ...mapActions(['fetchNews']),
    async fetchNews() {
      try {
        this.loading = true;
        await this.$store.dispatch('fetchNews');
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        this.loading = false;
      }
    },
    viewDetail(article) {
      const encodedUrl = encodeURIComponent(article.url);
      // Simpan data artikel ke local storage
      localStorage.setItem('selectedArticle', JSON.stringify(article));
      this.$router.push({ name: 'NewsDetail', params: { id: encodedUrl } });
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    },
  },
};
</script>

<style>
.news-item {
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
}

.news-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-right: 20px;
}

.news-details {
  flex-grow: 1;
}

.news-item:hover {
  background-color: #f0f0f0;
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.loading-text {
  font-size: 24px;
}
</style>
