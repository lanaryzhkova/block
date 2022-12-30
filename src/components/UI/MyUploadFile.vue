<template>
<div>
  <input type="file">
</div>
</template>

<script>
export default {
  name: "MyUploadFile",
  methods:{
  }
}
</script>
<style>
input::file-selector-button {
  background: none;
  border: 1px solid gray;
  border-radius: 40px;
  cursor: pointer;
  padding: 10px;
}
</style>