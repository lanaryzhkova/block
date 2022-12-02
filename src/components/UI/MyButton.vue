<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton"
}
</script>

<style scoped>
button{
  border: none;
  padding: 8px 16px;
  font-size: large;
  background-color: #5A5959;
  color: #ffffff;
  border-radius: 6px;
}
</style>