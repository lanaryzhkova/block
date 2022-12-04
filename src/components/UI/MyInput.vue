<template>
  <input :value="modelValue" @input="updateInput" type="text" class="input">
</template>

<script>
export default {
  name: "MyInput",
  props: {
    modelValue: [String, Number]
  },
  methods:{
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style>
.input{
  width: 40vw;
  min-width: 10vw;
  border: 1px solid lightgrey;
  padding: 10px 10px;
  border-radius: 8px;
  font-size: medium;
}
</style>