<template>
  <div class="new-task">
    <h2 class="new-task__what-task">Какие планы на сегодня?</h2>
    <Input />
    <Buttons />
  </div>
</template>

<script>
import Input from "@/components/atoms/Input";
import Buttons from "@/components/atoms/Buttons";
export default {
  components: {
    Input,
    Buttons,
  },
};
</script>

<style lang="scss" scoped>
.new-task {
  margin-left: 2rem;

  &__what-task {
    padding-top: 1rem;
  }
}

@media screen and (max-width: 850px) {
  .new-task {
    margin-left: 1rem;
  }
}
</style>
