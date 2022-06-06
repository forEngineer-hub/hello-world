<template>

  <GoodsInfo></GoodsInfo>
  <div>this is deatil page goodsId is {{ goodsId }}</div>
  <p>goods name {{ goodsInfo.goodsName }}</p>
  <review-list></review-list>
  <to-do-list-2></to-do-list-2>
</template>

<script setup lang="ts">
import ReviewList from "../components/review/ReviewList.vue";
import ToDoList2 from "../components/test/ToDoList2.vue";
// import GoodsInfo from "../components/goodsInfo/GoodsInfo.vue";

import { useRoute } from "vue-router";
import { useStore } from "../store/index"
import { computed, onMounted } from "vue";

const route = useRoute();
const goodsId = route.params.goodsId;

const store = useStore();

onMounted(() => {
  store.dispatch("setGoods",goodsId);
});

let goodsInfo = computed(() => store.getters.getGoods);

</script>

<style>
</style>