<template>
  <nav >
    <div class=" px-4 mx-auto md:px-6">
      <div class="flex items-center justify-center">
        <ul
          class="flex mt-0 mr-6 space-x-8 text-sm font-medium"
          id="links-list"
        >
          <li class="active home" data-link="home">
            <router-link to="/">Home</router-link>
          </li>
          <li data-link="bestseller">
            <router-link to="/bestseller">Best Seller</router-link>
          </li>
          <li data-link="category">
            <router-link to="/category">Category</router-link>
          </li>
          <li data-link="findstore">
            <router-link to="/findstore">Find Store</router-link>
          </li>
          <li data-link="blog">
            <router-link to="/blog">Blog</router-link>
          </li>
          <span @click="burger" class="close-icon">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </span>
        </ul>
        <li class="burger" @click="burger">
          <span id="burger-one"></span>
          <span id="burger-two"></span>
          <span id="burger-three"></span>
        </li>
      </div>
    </div>
  </nav>
</template>

<script>
import "../../assets/tailwind.css";
export default {
  methods: {
    checkRouter() {
      document.querySelector("nav ul li.active").classList.remove("active");
      if (
        this.$route.name === "Error404" ||
        this.$route.name === "AllBooks" ||
        this.$route.name === "Book"
      ) {
        document.querySelector("nav ul li.home").classList.add("active");
        return;
      }
      let links = document.querySelectorAll("nav ul li");
      links.forEach((e) => {
        if (this.$route.name === e.getAttribute("data-link")) {
          e.classList.add("active");
        }
      });
    },
    burger() {
      let burger = document.querySelector(".burger");
      let linksList = document.getElementById("links-list");
      if (burger.classList.contains("active")) {
        linksList.classList.remove("active");
        burger.classList.remove("active");
      } else {
        linksList.classList.add("active");
        burger.classList.add("active");
      }
    },
    closeNav() {},
  },
  created() {
    this.checkRouter;
  },
  watch: {
    $route() {
      this.checkRouter();
    },
  },
};
</script>

<style>
</style>