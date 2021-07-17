<template>
  <div>
    <div class="tasks-section">
      <div class="new-task">
        <h2 class="new-task__what-task">Какие планы на сегодня?</h2>
        <input class="new-task__input" type="text" />
        <button class="new-task__add-button">Добавить</button>
      </div>
      <ul class="task-list">
        <li class="task-list__task">
          <input class="task-list__check-task" type="checkbox" />
          Убрать квартиру
          <button class="task-list__delete-button">&times;</button>
        </li>
        <li class="task-list__task">
          <input class="task-list__check-task" type="checkbox"/>
          Сделать задание по стажировке
          <button class="task-list__delete-button">&times;</button>
        </li>
        <li class="task-list__task">
          <input class="task-list__check-task" type="checkbox"/>
          Сходить в магазин
          <button class="task-list__delete-button">&times;</button>
        </li>
      </ul>
    </div>
    <p class="task-left">Ты молодец! Осталось выполнить:<span>100%</span></p>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/style.scss";

.tasks-section {
  background-color: $font-color;
  padding-bottom: 1rem;
}

.new-task {
  margin-left: 2rem;

  &__what-task {
    padding-top: 1rem;
  }

  &__input {
    margin-right: 1rem;
    height: 1.9rem;
    width: 65%;
    border: 0.1rem solid $main-color;
  }

  &__add-button {
    background-color: $main-color;
    color: $font-color;
    padding: 0.6rem 1.1rem;
    border: 0.05rem solid $main-color;
    border-radius: 0.1rem;
    font-weight: bold;
  }
}
.task-list {
  list-style: none;
  padding: 0;
  margin: 2rem;

  &__task {
    border: 1px solid $main-color;
    border-radius: 0.4rem;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 2rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  &__check-task {
    width: 1.3rem;
    height: 1.3rem;
    background-color: $main-color;
  }

  &__delete-button {
    border-radius: 50%;
    background-color: $main-color;
    border: none;
    font-weight: bold;
    color: $font-color;
    width: 1.7rem;
    height: 1.7rem;
  }
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

    &__task {
      padding: 0.5rem 1rem;
      font-size: 1rem;
    }

    &__check-task {
      width: 1rem;
      height: 1rem;
    }

    &__delete-button {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
}
</style>
