<template>
  <div>
    <div class="card-header">
      <img :src="this.selected" alt="Book" ref="img" />
    </div>
    <div class="card-content flex flex-col gap-1">
      <span class="font-semibold">{{ book.title }}</span>
      <!-- make big bug for meeeeeeee -->
      <!-- because there are data , authors is [] -->
      <span class="text-slate-400" v-if="book.authors.length > 0">{{ book.authors[0].name }}</span>
      <Stars />
    </div>
  </div>
</template>

<script>
import Stars from "../Stars.vue";
export default {
  props: ["book"],
  data() {
    return {
      imgArr: [
        "https://yi-files.s3.eu-west-1.amazonaws.com/products/796000/796518/1358774-full.jpg",
        "https://img.freepik.com/premium-vector/modern-creative-corporate-book-cover-design-premium-vector_536050-18.jpg?w=2000",
        "https://img.freepik.com/free-vector/blue-creative-annual-report-book-cover-template_1201-1094.jpg?w=2000",
      ],
      selected: null,
    };
  },
  components: {
    Stars,
  },
  methods: {
    getImage() {
      let randomImg = Math.floor(Math.random() * this.imgArr.length);
      return this.imgArr[randomImg];
    },
  },
  created() {
    this.selected = this.getImage();
    
  },
};
</script>

<style>
</style>