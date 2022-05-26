<template>
  <div class="reviewContainer">
    <div id="displayedReview">
      <ul><review-li v-for="(review,index) in reviewList" v-bind="review" :key="index"></review-li></ul>
    </div>
    <div>
      <span @click="showMeMore">show me more {{offset}}/{{reviewCount}}</span>
    </div>
    <div id="hiddenReview"></div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import ReviewLi from "./ReviewLi.vue";

const store = useStore();
const route = useRoute();
const goodsId = route.params.goodsId;

// click 事件
const showMeMore = () => {
  const offset = 3;
  store.dispatch("setReview",{goodsId,offset});
};

// 初始化
onMounted(() => {
  console.log('on mounted method',goodsId);
  store.dispatch("setReview",{"goodsId":goodsId,"offset":0});
});

onMounted(() => {
  store.dispatch("setReview",{"goodsId":goodsId,"offset":0});
});

//let state = computed(() => store.getters.getReview);
const {reviewCount,reviewList} = computed(() => store.getters.getReview);


</script>

<style>
</style>