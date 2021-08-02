<template>
  <div :class="$style.newTask">
    <h2 :class="$style.whatTask">Какие планы на сегодня?</h2>
    <form @submit.prevent="submit">
      <input :class="$style.createNewTask" type="text" v-model="title" />
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
      title: "",
    };
  },

  methods: {
    ...mapMutations(["addTask"]),
    submit() {
      this.addTask({
        title: this.title,
        id: Date.now(),
        isChecked: false,
      });
      this.title = "";
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

.createNewTask {
  margin-right: 0.6rem;
  height: 1.8rem;
  width: 62%;
  border: 0.1rem solid $main-color;
}

@media screen and (max-width: 850px) {
  .newTask {
    margin-left: 1rem;
  }

  .createNewTask {
    margin-right: 0.5rem;
    height: 1.5rem;
    width: 58%;
  }
}
</style>
