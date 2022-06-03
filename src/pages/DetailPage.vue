<template>

  <GoodsInfo></GoodsInfo>
  <div>this is deatil page goodsId is {{ goodsId }}</div>
  <p>goods name {{ goodsInfo.goodsName }}</p>
  <!-- <review-list></review-list> -->
  <to-do-list-2></to-do-list-2>
</template>

<script setup>
// import ReviewList from "../components/review/ReviewList";
import ToDoList2 from "../components/test/ToDoList2";
import GoodsInfo from "../components/goodsInfo/GoodsInfo";

import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

const route = useRoute();
const goodsId = route.params.goodsId;

const store = useStore();

onMounted(() => {
  store.dispatch("setGoods",{goodsId});
});

let goodsInfo = computed(() => store.getters.getGoods);

</script>

<style>
</style>