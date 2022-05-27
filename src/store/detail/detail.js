const url = "http://localhost:3000/goods/detail/";
const url2 = "http://localhost:3000/review/goodsId/:goodsId/offset/:offset";
const headers = { Accept: "application/json" };

export default {
  state: {
    goods: {},
    reviews: {},
    reviewList: [],
    showed: false,
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
    setReviewList(state, payload) {
      //state.reviewList =[];
      state.reviewList.push(...payload);
    },
    changeShowed(state, payload) {
      state.showed = payload;
    },
  },
  actions: {
    //asyncronous
    async setGoods({ commit }, payload) {
      const goodsId = payload.goodsId;
      //const goods = await fetch(url + goodsId, { headers });
      // const j = await goods.json();
      // let j = null;
      fetch(url + goodsId, { headers })
        .then((res) => res.json())
        .then((data) => commit("setGoods", data));
      //commit("setGoods", j);
    },
    async setReview(context, payload) {
      const { goodsId, offset } = payload;
      const newUrl = url2
        .replace(":goodsId", goodsId)
        .replace(":offset", offset);
      const goodses = await fetch(newUrl, { headers });
      const j = await goodses.json();

      if (offset === 0) {
        context.commit("setReview", j);
      } else {
        context.commit("changeShowed", true);
        context.commit("setReviewList", j[0].reviewList);
      }
    },
  },
  getters: {
    getGoods: (state) => {
      return state.goods;
    },
    getReview: (state) => {
      return state.reviews;
    },
    getReviewList: (state) => {
      return state.reviewList;
    },
    getShowed: (state) => {
      return state.showed;
    },
  },
};
