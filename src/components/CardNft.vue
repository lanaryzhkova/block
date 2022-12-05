<template >
  <div class="nft" @click="$router.push(`/nfts/${nft.title}`)">
    <div style="display: flex; flex-direction: column; gap: 8px">
      <img src="https://p2payer.com/images/profile_nophoto.jpg" alt="{{nft.title}}">
      <div><u>{{ nft.title }}</u></div>
      <div><strong>{{ nft.cost }} ETH</strong></div>
    </div>
    <my-button
        @click="$emit('buy', nft)"
        class="nft__btn"
    >
      Купить
    </my-button>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";

export default {
  name: "CardNft",
  components: {MyButton},
  props:{
    nft:{
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.nft{
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 24px;
  gap: 8px;
  border-radius: 8px;
}
.nft:hover{
  background-color: lightgrey;
}
img{
  width: 156px;
  border: 1px solid lightgrey;
  border-radius: 8px;
  margin: auto 0;
}
.nft__btn{
  height: auto;
  width: auto;
  padding: 8px;
  align-items: flex-end;
  border-radius: 8px;
}
.nft__btn:hover{
  background-color:  #5A5959;
  color: white;
  font-weight: bold;
  border-radius: 8px;
}
</style>