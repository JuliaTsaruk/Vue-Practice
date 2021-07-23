<template>
  <div :class="$style.newTask">
    <h2 :class="$style.whatTask">Какие планы на сегодня?</h2>
    <form v-on:submit.prevent="addTask">
      <Input />
      <Buttons v-bind:type="submit" />
    </form>
  </div>
</template>

<script>
import Input from "@/components/atoms/Input";
import Buttons from "@/components/atoms/Buttons";
export default {
  name: "new-task",
  components: {
    Input,
    Buttons,
  },
  methods: {
    addTask() {
      console.log("bbbb");
    },
  },
};
</script>

<style lang="scss" module>
.newTask {
  margin-left: 2rem;
}

.whatTask {
  padding-top: 1rem;
}

@media screen and (max-width: 850px) {
  .newTask {
    margin-left: 1rem;
  }
}
</style>
