<template>
  <div>
    <input
      class="filter-input"
      id="select-task"
      name="filter"
      type="radio"
    />
    <label for="select-task">{{buttonTitle}}</label>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    buttonTitle: String,
  },
}
</script>

<style lang="scss" scoped>

/*input {
  display: none;
}

label {
  text-align: center;
  padding: 0.6rem 0.38rem;
  width: 26%;
  border: 0.05rem solid $main-color;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
}

input:checked ~ label{
  color: $font-color;
  background-color: $main-color;
}
*/
div{
  font-size: 1.2rem;
}
div:not(:last-child){
  margin-right: 2rem;
}
</style>
