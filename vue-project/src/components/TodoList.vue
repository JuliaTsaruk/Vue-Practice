<template>
  <div>
    <div class="tasks-section">
      <div class="new-task">
        <h2 class="new-task__what-task">Какие планы на сегодня?</h2>
        <input class="new-task__input" type="text" />
        <button class="new-task__add-button">Добавить</button>
      </div>
      <ul class="task-list">
        <label class="task-list__task">
          <input type="checkbox" value="value-1" />
          <span>Сходить в магазин</span>
          <button class="task-list__delete-button"></button>
        </label>
        <label class="task-list__task">
          <input type="checkbox" value="value-2" />
          <span>Сделать задание по стажировке</span>
          <button class="task-list__delete-button"></button>
        </label>
        <label class="task-list__task">
          <input type="checkbox" value="value-3" />
          <span>Приготовить ужин</span>
          <button class="task-list__delete-button"></button>
        </label>
      </ul>
      <div class="manage-tasks">
        <button class="manage-tasks__choose-all">Выполнить всё</button>
        <button class="manage-tasks__delete-all">Удалить всё</button>
      </div>
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
    @include button;
    padding: 0.6rem 1.1rem;
  }
}

.task-list {
  list-style: none;
  padding: 0;
  margin: 2rem 2rem 1rem 2rem;

  &__task {
    border: 1px solid $main-color;
    border-radius: 0.4rem;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 2rem;
    font-size: 1.2rem;
  }

  &__task:not(:last-child) {
    margin-bottom: 1rem;
  }

  &__task > input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  &__task > span {
    display: inline-flex;
    align-items: center;
    user-select: none;
    max-width: 19rem;
  }

  &__task > span::before {
    content: "";
    display: inline-block;
    flex-shrink: 0;
    flex-grow: 0;
    border: 0.05rem solid $main-color;
    border-radius: 0.25em;
    width: 1.3rem;
    height: 1.3rem;
    margin-right: 0.5rem;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }

  &__task > input:checked + span::before {
    border-color: $main-color;
    background-color: $main-color;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
    background-size: 0.8rem;
  }

  &__delete-button {
    border-radius: 50%;
    background-color: $main-color;
    border: none;
    font-weight: bold;
    color: $font-color;
    width: 1.7rem;
    height: 1.7rem;
    position: relative;
    margin-left: 0.5rem;
  }

  &__delete-button:before,
  &__delete-button:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 0.8rem;
    width: 0.15rem;
    background-color: $font-color;
    left: 0.8rem;
    top: 0.45rem;
  }

  &__delete-button:before {
    transform: rotate(45deg);
  }

  &__delete-button:after {
    transform: rotate(-45deg);
  }
}

.manage-tasks {
  display: flex;
  justify-content: space-between;
  margin: 0 2rem;

  &__choose-all,
  &__delete-all {
    @include button;
    padding: 0.6rem 0;
    width: 30%;
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

    &__task > span {
      max-width: 12rem;
    }

    &__check-task {
      width: 1rem;
      height: 1rem;
    }

    &__delete-button {
      width: 1.5rem;
      height: 1.5rem;
    }

    &__delete-button:before,
    &__delete-button:after {
      height: 0.8rem;
      width: 0.15rem;
      left: 0.7rem;
      top: 0.33rem;
    }
  }

  .manage-tasks {
    margin: 0 1rem;

    &__choose-all,
    &__delete-all {
      width: 40%;
    }
  }
}
</style>
