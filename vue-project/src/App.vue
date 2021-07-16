<template>
  <div id="app">
    <h1>TodoList</h1>
    <hr>
    <TodoList/>
    
  </div>
</template>

<script>
import TodoList from "@/components/TodoList"

export default {
  name: 'App',
  components: {
  TodoList
  }
}
</script>


<style>
</style>
