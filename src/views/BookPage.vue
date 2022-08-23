<template>
  <div class="book-page mt-10">
    <div class="flex mx-auto justify-center gap-6">
      <div class="book-img basis-1/4 rounded-sm">
        <img :src="imgSrc" class="rounded-sm" />
      </div>
      <div class="text-start book-content">
        <h2>
          Title:
          <span v-if="bookInfo.title.length > 0">{{ bookInfo.title }}</span>
        </h2>
        <h2>
          Author Name:
          <span v-if="bookInfo.authors.length > 0">{{
            bookInfo.authors[0].name
          }}</span>
        </h2>
        <h2>
          Download Count:
          <span v-if="bookInfo.download_count > 0">{{
            bookInfo.download_count
          }}</span>
        </h2>
        <h2>
          Languages:
          <span v-if="bookInfo.languages.length > 0">
            <span v-for="(lang, ind) in bookInfo.languages" :key="ind">
              {{ lang }}
            </span>
          </span>
        </h2>
      </div>
    </div>
    <Loader v-if="showLoader" />
  </div>
</template>

<script>
import "../assets/Styles/SCSS/Pages/book.css";
import Loader from "../components/LoaderComp.vue";
export default {
  data() {
    return {
      imgSrc: null,
    };
  },
  components: {
    Loader,
  },
  created() {
    this.$store.dispatch("getBookInfo", this.$route.params.id);
  },
  mounted() {
    this.imgSrc = JSON.parse(localStorage.getItem("imgSrc"));
  },
  computed: {
    bookInfo() {
      return this.$store.state.bookInfo;
    },
    showLoader() {
      return this.$store.state.showLoader;
    },
  },
};
</script>

<style>
</style>