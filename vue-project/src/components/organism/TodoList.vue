<template>
  <div>
    <div :class="$style.tasksSection">
      <InputTask />
      <div :class="$style.taskList">
        <ListItem
          v-for="todo of todos"
          :key="todo.id"
          v-bind:todo="todo"
          v-on:remove-task="removeTask"
        />
      </div>
      <div :class="$style.manageTasks">
        <Buttons title="Выполнить всё" />
        <Buttons title="Удалить всё" />
      </div>
    </div>
    <p :class="$style.taskLeft">
      Ты молодец! Осталось выполнить:<span>100%</span>
    </p>
  </div>
</template>

<script>
import InputTask from "@/components/molecules/InputTask";
import ListItem from "@/components/atoms/ListItem";
import Buttons from "@/components/atoms/Buttons";

export default {
  props: ["todos"],
  components: {
    InputTask,
    ListItem,
    Buttons,
  },
  methods: {
    removeTask(id) {
      this.$emit("remove-task", id);
    },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/style.scss";

.tasksSection {
  background-color: $font-color;
  padding-bottom: 1rem;
}

.taskList {
  list-style: none;
  padding: 0;
  margin: 2rem 2rem 1rem 2rem;
}

.manageTasks {
  display: flex;
  justify-content: space-between;
  margin: 0 2rem;
}

.taskLeft {
  text-align: center;
  color: $font-color;
  font-size: 1.3rem;
}

@media screen and (max-width: 850px) {
  .newTask {
    margin-left: 1rem;

    &__input {
      margin-right: 0.5rem;
      height: 1.5rem;
      width: 50%;
    }

    &__add-button {
      padding: 0.39rem 0.55rem;
    }
  }

  .taskList {
    margin: 1rem;
  }

  .manageTasks {
    margin: 0 1rem;
  }
}
</style>
