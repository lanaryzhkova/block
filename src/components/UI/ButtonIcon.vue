<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonIcon",
}
</script>

<style>
button{
  border: none;
  cursor: pointer;
  background: none;
}
</style>