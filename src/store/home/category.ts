const url = "http://localhost:3000/categories";
const headers = { Accept: "application/json" };

export type categoriesState = {
  categories: [];
};

export default {
  state: { categories: [] },
  mutations: {
    //syncrous
    setCategories(state: categoriesState, payload: []) {
      state.categories = payload;
    },
  },
  actions: {
    //asyncronous
    async setCategories({ commit }: { commit: Function }) {
      const categories = await fetch(url, { headers });
      const j = await categories.json();
      commit("setCategories", j);
    },
  },
  getters: {
    getCategories: (state: categoriesState) => {
      return state.categories;
    },
  },
};
