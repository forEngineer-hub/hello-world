<template>
  <div class="swiper-container">
    <div class="inner-swiper">
      <div class="swiper-slide" v-for="(imgs, index) in imgList" :key="index">
        <div
          class="silde-image-div"
          v-for="(img, idx2) in imgs"
          :key="idx2"
          :style="{ backgroundImage: 'url(' + img + ')' }"
        ></div>
      </div>
    </div>
  </div>
  <select v-model="size" @change="store.commit('setImgList', { size, color })">
    <option v-for="(v, index) in variants" :key="index">
      {{ v.size }}
    </option>
  </select>

  <select v-model="color" @change="changeColor">
    <option v-for="(v, index) in firtVarColors" :key="index">
      {{ v }}
    </option>
  </select>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();
const goodsId = route.params.goodsId;


onMounted(() => {
  console.log('in onMounted !!!!!!!!!!!!!!!!!!!');
  store.dispatch("setGoodsInfo", { goodsId });
});

let variants = computed(() => store.getters.getVariants);

let firtVarColors = computed(() => {
  console.log('in computed !!!!!!!!!!!!!!!!!!!');
  if (store.getters.getVariants[0]) 
  return store.getters.getVariants[0].color;
  else
  return [];
});

const changeColor = (e)=>{
    store.commit('setImgList', { "size": size.value, "color": e.target.value })
}
//let infoList = computed(() => store.getters.getInfoList);
let imgList = computed(() => store.getters.getImgList);

let size = computed(() => store.getters.getSize);

let color = computed(() => store.getters.getColor);
</script>

<style>
.swiper-slide {
  width: 395px;
}
.silde-image-div {
  width: 350px;
  height: 350px;
}
</style>