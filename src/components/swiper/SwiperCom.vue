<template>
  <swiper
    :slidesPerView="3"
    :spaceBetween="30"
    :slidesPerGroup="3"
    :loop="true"
    :loopFillGroupWithBlank="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
  >
    <swiper-slide v-for="(swiperSilde, index) in slides" :key="index">
      <div>
        <a :href="swiperSilde.link">
          <img :src="swiperSilde.imgSrc" />
        </a>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper";
import { onMounted, computed } from "vue";
import { useStore } from "../../store/index"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch("setImages");
    });

    let slides = computed(() => store.getters.getImages);

    return {
      slides,
      modules: [Pagination, Navigation],
    };
  },
};
</script>
