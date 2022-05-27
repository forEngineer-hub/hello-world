<template>
  <input @input="asyncCall" />
  <h1>{{ state.v }}</h1>
  <h2>Read Only Stars</h2>
  <star-rating :rating="state.rating" :read-only="true" :increment="0.01"></star-rating>
  <input v-model="title" placeholder="title" />
  <input v-model="date" placeholder="date" />
  <button @click="clickMe">link to todos page</button>
</template>

<script setup>
import { reactive,toRefs } from "vue";
import StarRating from 'vue-star-rating'
import { useRouter  } from "vue-router";

const route = useRouter();
const state = reactive({
  v: "",
  rating:3.8,
  title:'',
  date: ''
});

const { title, date} = toRefs(state);

const clickMe = ()=>{
  localStorage.setItem("todoList", JSON.stringify([{id: 2, "title": title.value, "date": date.value, finished: false}]));
  route.push("/goods/detail/10196");
}
async function asyncCall() {
  const url = "http://localhost:3000/postCode";
  const headers = { Accept: "application/json" };
  const goodses = await fetch(url, { headers });
  const j = await goodses.json();
  state.v = j.address;
}
</script>

<style>
</style>