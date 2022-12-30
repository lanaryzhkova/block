<template>
  <div class="container" >

      <h1 class="header">Галерея</h1>

    <nft-list :nfts="this.nftsJson" v-if="isAuth===true">
    </nft-list>
    <div v-else>
      <p>Для просмотра галереи войдите в аккаунт!</p>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import NftList from "@/components/NftList";
import {getAllNFTs} from "@/scripts/deploy";


export default {
  name: "GalleryPage",
  components:{NftList},
  data(){
    return {
      allNfts: [],
      nftsJson: []
    }
  },
  methods:{
    ...mapActions({
      createHashImage: "createHashImage",
      getJSON: 'getJSON'}),

    buyNft(nft){
      this.nfts = this.nfts.filter(n => n.title !== nft.title)
      console.log(this.nfts)
    },
    async fetchAllNft(){
      try{
        this.allNfts = [...await getAllNFTs()] ;
        for (let i=0; i<this.allNfts.length; i++){
          let response = await this.getJSON(this.allNfts[i])
          let res2 = response.replaceAll('\'', '"')
          this.nftsJson[i] = JSON.parse(res2);
        }
      }
      catch (e) {
        console.log(e)
      }
    },
  },
  computed: {
    ...mapState({
      wallet: state => state.metamask.wallet,
      isAuth: state => state.post.isAuth
    }),
  },
  mounted() {
    this.fetchAllNft();
  }

}
</script>

<style scoped>
.container{
  width: 1280px;
  margin: 0 auto;
  padding: 8px;
}

.header{
  margin: 15px 0;

}
</style>