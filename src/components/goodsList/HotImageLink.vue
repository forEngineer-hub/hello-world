<template>
  <router-link :to="link">
   
  <img :src="imgSrc" :alt="name" />
  </router-link>
  <!-- <a :href="link">
    <img :src="imgSrc" :alt="name" />
  </a> -->
</template>

<script>
//import { RouterLink } from 'vue-router';
export default {
  props: {
    link: String,
    imgSrc: String,
    name: String,
  },
  inheritAttrs: false,
};
</script>

<style>
img {
  height: 290px;
}
</style>