<template>
  <div>
    <ul class="book-pop mb-12">
      <li v-for="book in popularBook" :key="book.id" class="card text-start" @click="bookPage(book.id)">
        <BookContent :book="book"/>
      </li>
    </ul>
    <router-link class="btn view-all" :to="{ path: `/allBooks/${1}` }">View All</router-link>
  </div>
</template>

<script>
import BookContent from "./BookContent"
export default {
  props: ["popularBook"],
  components:{
    BookContent
  },
  methods:{
    bookPage(id){
      let imgSrc = event.target.firstElementChild.firstElementChild.firstElementChild.src
      localStorage.setItem("imgSrc",JSON.stringify(imgSrc))
      this.$router.push({path:`/book/${id}`})
    }
  }
};
</script>

<style>
</style>