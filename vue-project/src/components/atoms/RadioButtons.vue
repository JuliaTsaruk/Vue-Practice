<template>
  <!--<div>
    <input
      class="filter-input"
      id="select-task"
      name="filter"
      type="radio"
      
    />
    <label for="select-task">{{buttonTitle}}</label>
  </div>-->
  <label>
    <input type="radio"
    class="filter-input"
    id="select-task"
    name="filter"
    />
    <span>{{ buttonTitle }}</span>
  </label>
</template>

<script>
export default {
  props: {
    id: Number,
    buttonTitle: String,
    isPicked: Boolean,
  },
}
</script>

<style lang="scss" scoped>

label > input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
label > span {
  padding: 0.6rem 0.38rem;
  display: inline-flex;
  align-items: center;
  user-select: none;
  border: 0.05rem solid $main-color;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.05rem;
  width: 7.8rem;
  justify-content: center;
}

label > input:checked+span{
  border-color: $main-color;
  background-color: $main-color;
  color: $font-color; 
}
</style>
