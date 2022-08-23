import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    allBooks: null,
    popularBook: null,
    books: null,
    bookInfo: null,
    showLoader: false,
    searchBoxData: [],
  },
  getters: {},
  mutations: {
    setAllBookInfo(state, payload) {
      state.allBooks = payload;
      state.popularBook = payload.slice(0, 8);
    },
    setBookInfo(state, payload) {
      state.bookInfo = payload;
    },
    setBookPage(state, payload) {
      state.books = payload;
    },
    setSearchAutherData(state, payload) {
      state.searchBoxData = payload;
    },
  },
  actions: {
    // Get All Book Data
    async getAllBookInfo({ commit }) {
      let popBooks = JSON.parse(localStorage.getItem("popBook"));
      if (popBooks) {
        commit("setAllBookInfo", popBooks);
        return;
      }
      try {
        let bookReq = await axios.get("https://gutendex.com/books/");
        console.log(bookReq);
        commit("setAllBookInfo", bookReq.data.results);
        localStorage.setItem("popBook", JSON.stringify(bookReq.data.results));
      } catch (error) {
        console.log(error);
      }
    },
    // Get Book Data
    async getBookInfo({ commit, state }, payload) {
      state.showLoader = true;
      try {
        let bookInfo = await axios.get(`https://gutendex.com/books/${payload}`);
        commit("setBookInfo", bookInfo.data);
        state.showLoader = false;
      } catch (error) {
        console.log(error);
        state.showLoader = false;
      }
    },
    // Get Books with page number
    async booksWithNumPage({ commit, state }, payload) {
      state.showLoader = true;
      try {
        let numPage = await axios.get(
          `https://gutendex.com/books/?page=${payload}&title=The+Adventures+of+Sherlock+Holmes`
        );
        commit("setBookPage", numPage.data.results);

        state.showLoader = false;
      } catch (error) {
        state.showLoader = false;
        console.log(error);
      }
    },
    // Seach with author name
    async searchFunc({ commit, state }, payload) {
      state.showLoader = true;
      try {
        let searchBox = await axios.get(
          `https://gutendex.com/books/?search=${payload}`
        );
        commit("setSearchAutherData", searchBox.data.results);
        state.showLoader = false;
      } catch (error) {
        state.showLoader = true;
        console.log(error);
      }
    },
  },
  modules: {},
});
