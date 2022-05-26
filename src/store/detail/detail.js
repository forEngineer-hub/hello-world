const url = "http://localhost:3000/goods/detail/";
const headers = { Accept: "application/json" };

export default {
  state: {
    goods: {},
    reviews: {},
  },
  mutations: {
    //syncrous
    setGoods(state, payload) {
      state.goods = payload[0];
      console.log("array push ", payload);
    },
    //syncrous
    setReview(state, payload) {
      state.reviews = payload[0];
      console.log("array push ", payload[0]);
    },
  },
  actions: {
    //asyncronous
    async setGoods(context, payload) {
      const goodsId = payload.goodsId;
      const goods = await fetch(url + goodsId, { headers });
      const j = await goods.json();
      context.commit("setGoods", j);
      console.log("in setGoods method", j);
    },
    async setReview(context, payload) {
      const url2 =
        "http://localhost:3000/review/goodsId/:goodsId/offset/:offset";
      console.log("payload", payload);
      const { goodsId, offset } =  payload;
      const newUrl = url2
        .replace(":goodsId", goodsId)
        .replace(":offset", offset);
      console.log("url", newUrl);
      const goodses = await fetch(newUrl, { headers });
      const j = await goodses.json();
      context.commit("setReview", j);
      console.log("in setReview method", j);
    },
  },
  getters: {
    getGoods: (state) => {
      console.log("in getGoods method", state.goods);
      console.log(state.goods);
      return state.goods;
    },
    getReview: (state) => {
      console.log("in getReview method", state.review);
      console.log(state.review);
      return state.review;
    },
  },
};
