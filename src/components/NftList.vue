<template>
  <div v-if="nfts.length > 0" class="nft-list">
    <card-nft
        v-for="nft in nfts"
        :nft="nft"
        :key="nft.NFTName"
    />
  </div>
  <h2 v-else>
    Товаров нет
  </h2>
</template>

<script>
import CardNft from "@/components/CardNft";
export default {
  name: "NftList",
  components: {CardNft},
  props: {
    nfts:{
      type: Array
    }
  }
}
</script>

<style scoped>
.nft-list{
  display: flex;
  gap: 24px;
  width: 1280px;
  margin: 0 auto;
}
</style>