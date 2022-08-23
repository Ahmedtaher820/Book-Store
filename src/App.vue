<template>
  <div class="container mx-auto px-8">
    <navBarTop />
    <navBarLink />
    <router-view />
  </div>
</template>
<script>
import navBarTop from "./components/LayoutComponents/NavBarTop.vue";
import navBarLink from "./components/LayoutComponents/NavBarLink.vue";
import "./assets/tailwind.css"
export default {
  components:{
    navBarTop,navBarLink,
  },

}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
