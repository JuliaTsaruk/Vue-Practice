<template>
  <div>
    <div class="tasks-section">
      <InputTask />
      <div class="task-list">
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
      <div class="manage-tasks">
        <Buttons title="Выполнить всё" />
        <Buttons class="btn" title="Удалить всё" />
      </div>
    </div>
    <p class="task-left">Ты молодец! Осталось выполнить:<span>100%</span></p>
  </div>
</template>

<script>
import InputTask from "@/components/molecules/InputTask";
import ListItem from "@/components/atoms/ListItem";
import Buttons from "@/components/atoms/Buttons";

export default {
  components: {
    InputTask,
    ListItem,
    Buttons,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/style.scss";

.tasks-section {
  background-color: $font-color;
  padding-bottom: 1rem;
}

.task-list {
  list-style: none;
  padding: 0;
  margin: 2rem 2rem 1rem 2rem;
}

.manage-tasks {
  display: flex;
  justify-content: space-between;
  margin: 0 2rem;
}

.task-left {
  text-align: center;
  color: $font-color;
  font-size: 1.3rem;
}

@media screen and (max-width: 850px) {
  .new-task {
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

  .task-list {
    margin: 1rem;
  }

  .manage-tasks {
    margin: 0 1rem;
  }
}
</style>
