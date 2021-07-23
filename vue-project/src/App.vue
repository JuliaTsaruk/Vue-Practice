<template>
  <div :class="$style.tasksList" id="app">
    <h1 :class="$style.title">Список задач</h1>
    <TodoList v-bind:todos="todos" v-on:remove-task="removeTask" />
  </div>
</template>

<script>
import TodoList from "@/components/organism/TodoList";

export default {
  name: "App",
  data() {
    return {
      todos: [
        { id: 1, title: "Buy bread", isChecked: false },
        { id: 2, title: "Buy milk", isChecked: false },
        { id: 3, title: "Buy apples", isChecked: false },
      ],
    };
  },
  methods: {
    removeTask(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
  components: {
    TodoList,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/style.scss";
.tasksList {
  border: 0.2rem solid $main-color;
  border-radius: 1rem;
  width: 100%;
  max-width: 30rem;
  margin: 0 auto;
  background-color: $main-color;
}
.title {
  padding: 0.5rem;
  text-align: center;
  color: $font-color;
}
</style>
