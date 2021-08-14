<template>
  <button @click="click">{{ title }}</button>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    title: {
      type: String,
      default: "Добавить",
    },
  },
  methods: {
    ...mapMutations(["clearAll", "doneAll"]),
    click() {
      if (this.title === "Удалить всё") {
        this.clearAll();
      }
      if (this.title == "Выполнить всё") {
        this.doneAll();
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/style.scss";
button {
  @include button;
  padding: 0.6rem 0.3rem;
  width: 27%;
  cursor: pointer;
}
@media screen and (max-width: 850px) {
  button {
    width: 34%;
    padding: 0.56rem 0;
    font-size: 0.7rem;
  }
}
</style>
