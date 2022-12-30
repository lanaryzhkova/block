<template>
<div class="container">
  <div class="header"><h1 class="title">{{title}} ({{type}})</h1>
  </div>
  <slot ></slot>
  <p class="cost">{{cost}} NIM</p>
  <p class="user">Автор: {{user.substr(0,4)}}...{{user.substr(38,4)}}</p>
</div>
</template>

<script>
export default {
  name: "NftInfo",
  props: {
    title: '',
    cost: 0,
    user: '',
    type: '',
    url: ''
  }

}
</script>

<style scoped>
.container{
  padding: 5px;
}

.header{
  display: flex;
  flex-direction: row;
  gap: 4px;
}
.cost{
  font-size: 25px;

}

.user{
  font-size: 25px;
}
</style>