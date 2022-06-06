const url = "http://localhost:3000/newGoodses";
const headers = { Accept: "application/json" };

type hotGoodsState = {
  newGoodses: [];
  // day: { years: [], year: Date, month: number, day: number }
};

export default {
  state: {
    newGoodses: [],
    // day: { years: [], year: new Date().getFullYear(), month: 0, day: 1 },
  },
  mutations: {
    //syncrous
    setNewGoods(state: hotGoodsState, payload: []) {
      state.newGoodses = payload;
    },

    //hot goods
  },
  actions: {
    //asyncronous
    async setNewGoodses({ commit }: { commit: Function }) {
      const goodses = await fetch(url, { headers });
      const j = await goodses.json();
      commit("setNewGoods", j);
    },

    //hot goods fetch method
  },
  modules: {},
  getters: {
    getNewGoodses: (state: hotGoodsState) => {
      return state.newGoodses;
    },
  },
};
