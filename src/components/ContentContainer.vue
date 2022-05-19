<template>
  <div class="content-container">
      <sub-banner></sub-banner>
      <ul-container></ul-container>
  </div>
</template>

<script>
import SubBanner from './SubBanner.vue'
import UlContainer from './UlContainer.vue'
export default {
  components: { UlContainer, SubBanner },

}
</script>

<style>
.content-container{
    display:flex;
    justify-content: center;
    flex-direction: column;
}

</style>