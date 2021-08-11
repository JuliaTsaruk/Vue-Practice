<template>
  <div>
    <div :class="$style.tasksSection">
      <InputTask />
      <div :class="$style.tasksSection__radioBtn">
        <RadioButtons
          v-for="radioButton of radioBtns"
          :key="radioButton.id"
          :buttonTitle="radioButton.buttonTitle"
          :id="radioButton.id"
          :isPicked="radioButton.isPicked"
        />
      </div>
      <div v-if="showTasks.length > 0" :class="$style.tasksSection__taskList">
        <ListItem
          v-for="todo of showTasks"
          :key="todo.id"
          :id="todo.id"
          :title="todo.title"
          :isChecked="todo.isChecked"
        />
      </div>
      <div :class="$style.tasksSection__noTaskMessage" v-else>
        Список заданий пуст
      </div>
      <div :class="$style.tasksSection__manageTasks">
        <Buttons title="Выполнить всё" />
        <Buttons title="Удалить всё" />
      </div>
    </div>
    <p :class="$style.taskLeft">
      Молодец! Ты выполнил уже: <span>{{ showResult }}</span>
    </p>
  </div>
</template>

<script>
import InputTask from "@/components/molecules/InputTask";
import ListItem from "@/components/atoms/ListItem";
import Buttons from "@/components/atoms/Buttons";
import RadioButtons from "@/components/atoms/RadioButtons";
import { mapGetters } from "vuex";

export default {
  name: "todoList",
  computed: {
    ...mapGetters(["allTasks", "radioBtns", "showTasks", "showResult"]),
  },
  components: {
    InputTask,
    ListItem,
    Buttons,
    RadioButtons,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/style.scss";
.tasksSection {
  background-color: $font-color;
  padding-bottom: 1rem;
  &__radioBtn {
    width: 100%;
    display: flex;
    margin: 2rem 0;
    justify-content: center;
  }
  &__taskList {
    list-style: none;
    padding: 0;
    margin: 2rem 2rem 1rem 2rem;
  }
  &__noTaskMessage {
    width: 90%;
    min-height: 6rem;
    margin: 2rem auto;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid $main-color;
  }
  &__manageTasks {
    display: flex;
    justify-content: space-between;
    margin: 0 2rem;
  }
}
.taskLeft {
  text-align: center;
  color: $font-color;
  font-size: 1.3rem;
}

@media screen and (max-width: 850px) {
  .tasksSection {
    &__radioBtn {
      margin: 1rem 0;
    }
    &__noTaskMessage {
      font-size: 1.3rem;
    }
    &__taskList {
      margin: 1rem;
    }
    &__manageTasks {
      margin: 0 1rem;
    }
  }
  .taskLeft {
    font-size: 1.15rem;
  }
}
</style>
