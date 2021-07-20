<template>
  <button>{{ title }}</button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Добавить",
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
}

@media screen and (max-width: 850px) {
  button {
    width: 30%;
  }
}
</style>
