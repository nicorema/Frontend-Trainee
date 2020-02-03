<template>
  <div class="todos">
    <div v-bind:key="todoItem.id" v-for="todoItem of todos">
      <TodoItem v-bind:todoItem="todoItem" v-on:del-todo="$emit('del-todo',todoItem.id)" />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "Todos",
  props: ["todos"],
  components: {
    TodoItem
  }
};
</script>

<style scoped>
</style>