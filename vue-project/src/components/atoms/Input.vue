<template>
  <input type="text" v-model="title" />
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
};
</script>

<style lang="scss" scoped>
input {
  margin-right: 0.6rem;
  height: 1.8rem;
  width: 62%;
  border: 0.1rem solid $main-color;
}

@media screen and (max-width: 850px) {
  input {
    margin-right: 0.5rem;
    height: 1.5rem;
    width: 58%;
  }
}
</style>
