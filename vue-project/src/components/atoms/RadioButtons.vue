<template>
  <div>
    <input
      id="select-all"
      name="radio-button"
      type="radio"
      class="input-all"
      checked
    />
    <label for="select-all" class="label-all">Все</label>
    <input
      id="select-done"
      name="radio-button"
      type="radio"
      class="input-done"
    />
    <label for="select-done" class="label-done">Выполненные</label>
    <input
      id="select-undone"
      name="radio-button"
      type="radio"
      class="input-undone"
    />
    <label for="select-undone" class="label-undone">Невыполненные</label>
  </div>
</template>

<style lang="scss" scoped>
div {
  width: 100%;
  margin: 2rem;
  display: flex;
}

label {
  text-align: center;
  padding: 0.6rem 0.38rem;
  width: 26%;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  border: 0.05rem solid $main-color;

  &:first-of-type {
    border-radius: 0.1rem 0 0 0.1rem;
  }

  &:last-of-type {
    border-radius: 0 0.1rem 0.1rem 0;
  }
}

input.input-all:checked ~ label.label-all,
input.input-done:checked ~ label.label-done,
input.input-undone:checked ~ label.label-undone {
  color: $font-color;
  background-color: $main-color;
}

input {
  display: none;
}
</style>
