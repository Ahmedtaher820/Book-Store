<template>
  <div class="home">
    <buildLibrary />
    <Popular />
  </div>
</template>

<script>
import "../assets/tailwind.css"
import buildLibrary from "../components/Homepage/BuildLibrary";
import Popular from "../components/Homepage/Popular"
import "../assets/Styles/SCSS/Pages/mainScss.css"
export default {
  name: "HomeView",
  components: {
    buildLibrary,Popular
  },
  mounted() {
    this.$store.dispatch("getAllBookInfo");
  },
};
</script>
