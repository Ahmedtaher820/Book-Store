<template>
  <ul class="paginated">
    <li v-for="(item, ind) in arrNum" :key="ind">
      <router-link :to="{ path: '/allBooks/' + item }">{{ item }}</router-link>
    </li>
    <li>. . .</li>
    <li>
      <router-link :to="{ path: '/allBooks/' + lastInd }">{{
        lastInd
      }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      numSelected: null,
      lastInd: null,
      arrNum: [],
    };
  },
  methods: {
    getNumbers(start) {
      this.arrNum = [];
      let maxCurr = parseInt(start) + 4;
      for (let i = start; i < maxCurr; i++) {
        this.arrNum.push(i);
      }
      this.lastInd = maxCurr + 4;
    },
  },
  mounted() {
    this.getNumbers(this.$route.params.id);
  },
  watch: {
    $route() {
      this.getNumbers(this.$route.params.id);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/Styles/SCSS/Helpers/_variable";
.paginated {
  li {
    display: inline-block;

    a {
      padding: 5px 15px;
      background-color: $maincolor;
      cursor: pointer;
      margin: 5px;
      color: white;
      border-radius: 10px;
    }
  }
}
</style>