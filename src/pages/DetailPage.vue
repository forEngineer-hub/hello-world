<template>
  <div>this is deatil page goodsId is {{ goodsId }}</div>
  <p>goods name {{ goodsInfo.goodsName }}</p>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

// export default {
//   setup(){
const route = useRoute();
const goodsId = route.params.goodsId;

const store = useStore();

onMounted(() => {
  store.dispatch("setGoods",goodsId);
});

let goodsInfo = computed(() => store.getters.getGoods);

//return {goodsId,goodsInfo};
//   }
// }
</script>

<style>
</style>