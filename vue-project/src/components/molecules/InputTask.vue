<template>
  <div :class="$style.newTask">
    <h2 :class="$style.newTask__whatTask">Какие планы на сегодня?</h2>
    <form @submit.prevent="submit">
      <input
        :class="$style.newTask__createNewTask"
        type="text"
        v-model="newInput"
      />
      <Buttons />
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Buttons from "@/components/atoms/Buttons";
export default {
  name: "new-task",
  components: {
    Buttons,
  },
  data() {
    return {
      newInput: "",
    };
  },
  methods: {
    ...mapMutations(["addTask"]),
    submit() {
      this.addTask(this.newInput);
      this.newInput = "";
    },
  },
};
</script>

<style lang="scss" module>
.newTask {
  margin-left: 2rem;
  &__whatTask {
    padding-top: 1rem;
  }
  &__createNewTask {
    margin-right: 0.6rem;
    height: 1.8rem;
    width: 62%;
    border: 0.1rem solid $main-color;
  }
}

@media screen and (max-width: 850px) {
  .newTask {
    &__whatTask {
      font-size: 1.4rem;
    }
    margin-left: 1rem;
    &__createNewTask {
      margin-right: 0.1rem;
      height: 1.5rem;
      width: 58%;
    }
  }
}
</style>
