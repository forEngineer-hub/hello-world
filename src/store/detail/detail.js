const url = "http://localhost:3000/goods/detail/";
const headers = { Accept: "application/json" };

export default {
  state: {
    goods:{},
  },
  mutations: {
    //syncrous
    setGoods(state, payload) {
      state.goods = payload[0];
      console.log("array push ", payload);
    },
  },
  actions: {
    //asyncronous
    async setGoods(state,payload) {
      const goods = await fetch(url + payload, { headers });
      const j = await goods.json();
      state.commit("setGoods", j);
      console.log("in setGoods method", j);
    },
  },
  getters: {
    getGoods: (state) => {
      console.log("in getGoods method", state.goods);
      console.log(state.goods);
      return state.goods;
    },
  },
};
