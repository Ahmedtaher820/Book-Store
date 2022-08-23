import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BestSeller from "../views/Best-Seller.vue";
import Category from "../views/Category-Page.vue";
import FindStore from "../views/Find-Store.vue";
import Blog from "../views/Blog-Page.vue";
import PageNotFound from "../views/PageNotFound.vue";
import Book from "../views/BookPage.vue";
import AllBooks from "../views/AllBooks.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home",
    },
  },

  {
    path: "/BestSeller",
    name: "bestseller",
    component: BestSeller,
    meta: {
      title: "Best Seller",
    },
  },
  {
    path: "/Category",
    name: "category",
    component: Category,
    meta: {
      title: "Category",
    },
  },
  {
    path: "/FindStore",
    name: "findstore",
    component: FindStore,
    meta: {
      title: "Find Store",
    },
  },
  {
    path: "/Blog",
    name: "blog",
    component: Blog,
    meta: {
      title: "Blog",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Error404",
    component: PageNotFound,
    meta: {
      title: "Page Not Found",
    },
  },
  {
    path: "/book/:id",
    name: "Book",
    component: Book,
    meta: {
      title: "Book",
    },
    props:true
  },
  {
    path: "/AllBooks/:id",
    name: "AllBooks",
    component: AllBooks,
    meta: {
      title: "All Books",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});
export default router;
