const url = "http://localhost:3000/goods/detail/";
const url2 = "http://localhost:3000/review/goodsId/:goodsId/offset/:offset";
const headers = { Accept: "application/json" };

export default {
  state: {
    goods: {},
    reviews: {},
    reviewList: [],
    showed: false,
    infoList: [],
    variants: [],
    imgList: [],
    size: "",
    color: "",
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
      state.reviewList=payload;
    },
    changeShowed(state, payload) {
      state.showed = payload;
    },
    setInfoList(state, payload) {
      state.infoList.push(...payload);
    },
    setVariants(state, payload) {
      state.variants.push(...payload);
    },

    setImgList(state, { size, color }) {
      console.log("size, color ", size + " "+  color);
      // let imgs = state.infoList.filter(
      //   (info) => info.sizeType === size && info.color === color
      // )[0].photo;

      // []
      // [0] === undefined 
       // 0 1 2 
       // [3]

      let imgs;
      const filteredList = state.infoList.filter(
        (info) => info.sizeType === size && info.color === color
      )
      if(filteredList.length > 0){
        imgs = filteredList[0].photo;
      }
      console.log('imgs',imgs);
      //
      const limit = 3;
      // 4
      let count = Math.ceil(imgs.length / limit);
      //count = imgs.length % limit ? count++ : count;
      let idx = 0;
      state.imgList = [];
      while (idx < count) {
        state.imgList.push(imgs.slice(idx * limit, idx * limit + limit));
        idx++;
      }
      // 0 0 ~3
      // 1 3~ 6
      state.size = size;
      state.color = color;
    },
    setSize(state, payload) {
      state.size = payload;
    },
    setColor(state, payload) {
      state.color = payload;
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
    async setGoodsInfo(context, { goodsId }) {
      let goodsInfoUrl = "http://localhost:3000/goodsInfo/:goodsId".replace(
        ":goodsId",
        goodsId
      );
      const goodses = await fetch(goodsInfoUrl, { headers });
      const j = await goodses.json();

      context.commit("setInfoList", j[0].infoList);
      context.commit("setVariants", j[0].variants);
      const size = j[0].variants[0].size;
      const color = j[0].variants[0].color[0];

      context.commit("setSize", size);
      context.commit("setColor", color);
      context.commit("setImgList", { size, color });
    },
    // async setInfoList(context, payload) {
    //   const { goodsId, offset } = payload;
    //   const newUrl = url2
    //     .replace(":goodsId", goodsId)
    //     .replace(":offset", offset);
    //   const goodses = await fetch(newUrl, { headers });
    //   const j = await goodses.json();

    //   if (offset === 0) {
    //     context.commit("setReview", j);
    //   } else {
    //     context.commit("changeShowed", true);
    //     context.commit("setReviewList", j[0].reviewList);
    //   }
    // },
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
    getInfoList: (state) => {
      return state.infoList;
    },
    getVariants: (state) => {
      return state.variants;
    },
    getImgList: (state) => {
      return state.imgList;
    },
    getSize: (state) => {
      return state.size;
    },
    getColor: (state) => {
      return state.color;
    },
  },
};
