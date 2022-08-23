<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="popular pb-8">
    <div class="title flex justify-between items-center pb-6">
      <h2 class="text-2xl font-bold mb-0">Popular Now</h2>
      <div class="flex">
        <svg class="w-5" @click="goLeft" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        <svg class="w-5" @click="goRight" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
      </div>
    </div>
    <popularBook :popularBook="popularBook" />
  </div>
</template>

<script>
import popularBook from "./PopularBook";
export default {
  components: {
    popularBook,
  },
  computed: {
    popularBook() {
      return this.$store.state.popularBook;
    },
  },
  methods:{
    goLeft(){
      console.log("done")
      document.querySelector(".book-pop").scrollLeft -= 200 
    },
    goRight(){
      console.log("done")
      document.querySelector(".book-pop").scrollLeft += 200 
    },
  }
};
</script>

<style>
</style>