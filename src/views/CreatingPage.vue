<template>
  <div class="container">
    <h1>Создание NFT</h1>
<create-nft-form></create-nft-form>
  </div>
</template>

<script>
import CreateNftForm from "@/components/forms/CreateNftForm";
export default {
  name: "CreatingPage",
  components: {CreateNftForm}

}
</script>

<style scoped>
.container{
  width: 1280px;
  margin: 0 auto;
  padding: 8px;
}
</style>