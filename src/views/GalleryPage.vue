<template>
  <div class="container">
    <div class="header">
      <h2>Галерея</h2>
    </div>
    <nft-list
        :nfts="this.nfts"
        @buy="buyNft">
    </nft-list>
  </div>
</template>

<script>
import {mapState} from "vuex";
import NftList from "@/components/NftList";
import axios from "axios";


export default {
  name: "GalleryPage",
  components:{NftList},
  methods:{
    buyNft(nft){
      this.nfts = this.nfts.filter(n => n.title !== nft.title)
      console.log(this.nfts)
    },
    async fetchNftByAddress(){

      let response = await axios.get(`http://127.0.0.1:8000/get-nfts/${this.wallet}`)
      this.nfts = response.data;
    },
  },
  computed: {
    ...mapState({
      wallet: state => state.metamask.wallet,
      acc(){
        return (this.account[0]?.slice(0,5)+'...'+this.account[0]?.slice(38,42));
      }
    }),
  },
  mounted() {
    this.fetchNftByAddress();
  }

}
</script>

<style scoped>
.container{
  width: 1080px;
  margin: 0 auto;
  padding: 8px;
}

.header{
  height: 50px;
  margin-top: 16px;
  display: flex;
  gap: 24px;
  align-items: center;
}
</style>