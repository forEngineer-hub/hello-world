const url = "http://localhost:3000/swiper";
const headers = { Accept: "application/json" };

interface swiperState {
  images: [];
}

export default {
  state: { images: [] },
  mutations: {
    //syncrous
    setImages(state: swiperState, payload: []) {
      state.images = payload;
    },
  },
  actions: {
    //asyncronous
    async setImages({ commit }: { commit: Function }) {
      const goodses = await fetch(url, { headers });
      const j = await goodses.json();
      commit("setImages", j);
    },
  },
  modules: {},
  getters: {
    getImages: (state: swiperState) => {
      return state.images;
    },
  },
};
