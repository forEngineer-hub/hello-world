<template>
   <router-view></router-view>
</template>

<script>


export default {
  data() {
    return {
      modelValue: "abc",
    };
  },
  name: "App",
  components: {

  },

  methods: {
    showChange(event) {
      console.log(event.target.value); // 将打印所选选项的值
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
