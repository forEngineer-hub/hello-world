<template>
  <div>this is deatil page goodsId is {{ goodsId }}</div>
  <p>goods name {{ goodsInfo.goodsName }}</p>
  <review-list></review-list>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import ReviewList from "../components/review/ReviewList";

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