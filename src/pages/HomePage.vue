<template>
  <div class="content-container">
    <banner-com></banner-com>
    <sub-banner></sub-banner>
    <ul-container></ul-container>
  </div>
</template>

<script>
import SubBanner from "../components/goodsList/SubBanner.vue";
import UlContainer from "../components/goodsList/UlContainer.vue";
import BannerCom from '@/components/category/BannerCom.vue';

export default {
  components: { UlContainer, SubBanner, BannerCom },
  mounted() {
    // string not array !
    // json.stringfy => string 
    // getItem => array .push(newArray)
    localStorage.setItem("todoList", JSON.stringify([{id: 2, title: "basket", date: "6/15", finished: false},{id: 3, title: "shopping", date: "6/15", finished: true}]));
  },
};
</script>

<style>
.content-container {
  display: flex;
/* justify-content: center; */
  align-items: center;
  flex-direction: column;
}
</style>