<template>
  <div class="nav flex items-center justify-between">
    <div class="logo basis-1/4">
      <h1 class="font-bold text-2xl text-start">
        <router-link to="/">Booksy</router-link>
      </h1>
    </div>

    <form class="flex items-center basis-1/2" @submit.prevent>
      <label for="voice-search" class="sr-only">Search</label>
      <div class="relative w-full">
        <div
          class="
            flex
            absolute
            inset-y-0
            left-0
            items-center
            pl-3
            pointer-events-pointer
          "
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            @click="searchFun"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="voice-search"
          class="
            bg-gray-50
            text-gray-900 text-sm
            rounded-lg
            block
            w-full
            pl-10
            p-2.5
            dark:bg-zinc-100 dark:border-gray-600
          "
          placeholder="Search..."
          required=""
          v-model="search"
          @keypress.enter="searchFun"
          @keyup="resetList"
        />

        <button
          type="button"
          class="flex absolute inset-y-0 right-0 items-center pr-3"
          @click="removeSearch"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </button>
      </div>
      <ul class="search-list">
        <li
          v-for="authInfo in authorsInfo"
          :key="authInfo.id"
          class="flex items-center justify-between"
        >
          <span class="text-start">Title: {{ authInfo.title }} </span>
          <span>Downloaded: {{ authInfo.download_count }}</span>
        </li>
        <Loader v-if="showLoader" />
      </ul>
    </form>
    <div class="nav-options flex justify-end basis-1/4 items-center">
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        ></path>
      </svg>
      <span class="num rounded-full text-white">0</span>
      <span class="lang">EN</span>
    </div>
  </div>
</template>

<script>
import "../../assets/tailwind.css";
import Loader from "../LoaderComp.vue";
export default {
  data() {
    return {
      search: "",
    };
  },
  components: {
    Loader,
  },
  methods: {
    searchFun() {
      if(this.search.length == 0){
        return
      }
      this.$store.dispatch("searchFunc", this.search);
      document.querySelector(".search-list").classList.add("active");
    },
    resetList() {
      if (this.authorsInfo.length == 0) {
        return;
      }
      document.querySelector(".search-list").classList.remove("active");
    },
    removeSearch() {
      this.search = "";
      this.$store.state.searchBoxData = [];
      document.querySelector(".search-list").classList.remove("active");
    },
    checkSearchArr() {
      if (this.authorsInfo.length == 0) {
        return;
      }
    },
  },
  computed: {
    authorsInfo() {
      return this.$store.state.searchBoxData;
    },
    showLoader() {
      return this.$store.state.showLoader;
    },
  },
};
</script>

<style>
</style>