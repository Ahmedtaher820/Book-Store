<template>
  <div class="all-books py-10">
    <h1 class="text-4xl mb-6">All Books</h1>
    <div class="book-row">
      <popularBook :popularBook="popularBook" />
    </div>
    <Pagination />
    <loader v-if="showLoader" />
  </div>
</template>

<script>
import popularBook from "../components/Homepage/PopularBook.vue";
import Pagination from "../components/LayoutComponents/PaginationPage.vue";
import loader from "../components/LoaderComp.vue";
import "../assets/Styles/SCSS/Pages/allBook.css";
export default {
  components: {
    popularBook,
    loader,
    Pagination,
  },
  mounted() {
    console.log(this.$route.params.id);
    this.$store.dispatch("booksWithNumPage", this.$route.params.id);
  },
  methods: {
    checkMyRouter() {
      this.$router.push(this.$route.path)
      this.$store.dispatch("booksWithNumPage", this.$route.params.id);
    },
  },
  computed: {
    popularBook() {
      return this.$store.state.books;
    },
    showLoader() {
      return this.$store.state.showLoader;
    },
  },
  watch: {
    $route() {
      this.checkMyRouter();
    },
  },
};
</script>

<style>
</style>