<template>
  <div :class="$style.tasksList" id="app">
    <h1 :class="$style.title">Список задач</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from "@/components/organism/TodoList";

export default {
  name: "App",
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
