const url = "http://localhost:3000/goods/detail/";
const url2 = "http://localhost:3000/review/goodsId/:goodsId/offset/:offset";
const headers = { Accept: "application/json" };

type DetailState = {
  goods: {},
  reviews: {},
  reviewList: [],
  showed: false,
  infoList: [],
  variants: [],
  imgList: string[][],
  size: string,
  color: string,
  goodsInfo:{}
}

type GoodsInfoType = {
  "id": number,
  "goodsId": number,
  "goodsName": string
}[]

type info = {
  
    "sizeType": string,
    "sizeValue": string,
    "sizeDataCode": string,
    "sku": string,
    "color": string,
    "size": string,
    "material": string,
    "weight": string,
    "warranty": string,
    "photo": string[
    ],
    "price": number,
    "title": string
}

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
    goodsInfo:{}
  },
  mutations: {
    //syncrous
    setGoods(state:DetailState, payload:GoodsInfoType) {
      state.goods = payload[0];
    },
    //syncrous
    setReview(state:DetailState, payload:any) {
      state.reviews = payload[0];
      console.log("array push ", payload[0]);
    },
    setReviewList(state:DetailState, payload:any) {
      //state.reviewList =[];
      state.reviewList=payload;
    },
    changeShowed(state:DetailState, payload:any) {
      state.showed = payload;
    },
    setInfoList(state:DetailState, payload:[]) {
      state.infoList.push(...payload);
    },
    setVariants(state:DetailState, payload:[]) {
      state.variants.push(...payload);
    },

    setImgList(state:DetailState, { size, color } :{size : string, color :string}) {
      let imgs :string[] = [];
      const filteredList = state.infoList.filter(
        (info:info) => info.sizeType === size && info.color === color
      )
      if(filteredList.length > 0){
        //https://bobbyhadz.com/blog/typescript-property-does-not-exist-on-type-never#:~:text=The%20error%20%22Property%20does%20not,employee%5B'salary'%5D%20.
        imgs = filteredList[0]['photo'];
      }
      state.goodsInfo = filteredList[0];
      console.log('imgs',imgs);
      //
      const limit = 3;
      // 4
      const count = Math.ceil(imgs.length / limit);
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
    setSize(state:DetailState, payload:string) {
      state.size = payload;
    },
    setColor(state:DetailState, payload:string) {
      state.color = payload;
    },
  },
  actions: {
    //asyncronous
    async setGoods({ commit }:{ commit: Function } , payload:string) {
      const goodsId = payload;
      //const goods = await fetch(url + goodsId, { headers });
      // const j = await goods.json();
      // let j = null;
      fetch(url + goodsId, { headers })
        .then((res) => res.json())
        .then((data) => commit("setGoods", data));
      //commit("setGoods", j);
    },
    async setGoodsInfo({ commit }:{ commit: Function }, goodsId:string) {
      const goodsInfoUrl = "http://localhost:3000/goodsInfo/:goodsId".replace(
        ":goodsId",
        goodsId
      );
      console.log('goodsInfoUrl',goodsInfoUrl);
      const goodses = await fetch(goodsInfoUrl, { headers });
      const j = await goodses.json();

      commit("setInfoList", j[0].infoList);
      commit("setVariants", j[0].variants);
      const size = j[0].variants[0].size;
      const color = j[0].variants[0].color[0];

      commit("setSize", size);
      commit("setColor", color);
      commit("setImgList", { size, color });
    },

    async setReview({ commit }:{ commit: Function }, payload :{ goodsId:string, offset:number }) {
      const { goodsId, offset } = payload;
      const newUrl = url2
        .replace(":goodsId", goodsId)
        .replace(":offset", offset+'');
      const goodses = await fetch(newUrl, { headers });
      const j = await goodses.json();

      if (offset === 0) {
        commit("setReview", j);
      } else {
        commit("changeShowed", true);
        commit("setReviewList", j[0].reviewList);
      }
    },
  },
  getters: {
    getGoods: (state:DetailState) => {
      return state.goods;
    },
    getReview: (state:DetailState) => {
      return state.reviews;
    },
    getReviewList: (state:DetailState) => {
      return state.reviewList;
    },
    getShowed: (state:DetailState) => {
      return state.showed;
    },
    getInfoList: (state:DetailState) => {
      return state.infoList;
    },
    getVariants: (state:DetailState) => {
      return state.variants;
    },
    getImgList: (state:DetailState) => {
      return state.imgList;
    },
    getSize: (state:DetailState) => {
      return state.size;
    },
    getColor: (state:DetailState) => {
      return state.color;
    },
  },
};
