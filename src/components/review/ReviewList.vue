<template>
  <div class="reviewContainer">
    <div id="displayedReview">
      <ul>
        <review-li
          v-for="(review, index) in reviewList"
          v-bind:review="review"
          :key="index"
        ></review-li>
      </ul>
    </div>

    <div id="hiddenReview" v-if="showed">
      <ul>
        <review-li
          v-for="(review2, index2) in reviewList2"
          v-bind:review="review2"
          :key="index2"
        ></review-li>
      </ul>
    </div>
    <div>
      <span @click="showMeMore">{{ btnText }}</span>
    </div>
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
  if (!showed.value) {
    if (reviewList2.value.length === 0) {
      store.dispatch("setReview", { goodsId: goodsId, offset: 3 });
    } else {
      store.commit("changeShowed", true);
    }
  } else {
    store.commit("changeShowed", false);
  }
};

// 初始化
onMounted(() => {
  store.dispatch("setReview", { goodsId: goodsId, offset: 0 });
});

const reviewCount = computed(() => store.getters.getReview.reviewCount);
const reviewList = computed(() => store.getters.getReview.reviewList);
const reviewList2 = computed(() => store.getters.getReviewList);
const showed = computed(() => store.getters.getShowed);

const btnText = computed(() => {
  if (!showed.value && reviewList.value !== undefined) {
    return (
      "show me more (" + reviewList.value.length + "/" + reviewCount.value + ")"
    );
  } else {
    return "閉じる";
  }
});
</script>

<style>
</style>