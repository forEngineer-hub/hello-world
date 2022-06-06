<template>
  <div class="container">
    <input type="text" v-model="msg" />
    <button @click="create">Create</button>
    <TodoList :TodoLists="TodoLists" />
  </div>
</template>

<script lang="ts">
import TodoList from "./TodoList.vue";
import { defineComponent } from "vue";

export default defineComponent( {
  components: {
    TodoList,
  },

  methods: {
    create() {
      console.log("in create ");
      let id = 4;
      id += 1;
      console.log("in create id", id);
      const next = { id, name: this.msg };
      this.TodoLists.push(next);
    },
  },
  data() {
    return {
      msg: "",
      TodoLists: [
        { id: 1, name: "cooking" },
        { id: 2, name: "eating" },
        { id: 3, name: "dancing" },
      ],
    };
  },
});
</script>