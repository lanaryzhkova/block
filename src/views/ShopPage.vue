<template>
  <div class="container" v-if="!isNftsLoading">
    <h1 class="header">NFT всех пользователей</h1>
    <nft-list :nfts="this.nftsJson">
    </nft-list>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
import {getAllNFTs} from '/src/scripts/deploy.js'
import {mapActions, mapState} from "vuex";
import NftList from "@/components/NftList";
import {postModule} from "@/store/postModule";

export default {
  name: "ShopPage",
  components: {NftList, MyButton},
  data() {
    return {
      allNfts: [],
      nftsJson: []
    }
  },
  methods: {
    ...mapActions({
      createHashImage: "createHashImage",
      getJSON: 'getJSON'
    }),

    async fetchAllNft() {
      try {
        setTimeout(async () => {
          this.allNfts = [...await getAllNFTs()];
          for (let i = 0; i < this.allNfts.length; i++) {
            let response = await this.getJSON(this.allNfts[i])
            let res2 = response.replaceAll('\'', '"')
            this.nftsJson[i] = JSON.parse(res2);
          }
        }, 1000)
      } catch (e) {
        console.log(e)
      } finally {
      }
    },
  },
  computed: {
    ...mapState({
      isNftsLoading: state => postModule.state.isNftsLoading
    })
  },
  async mounted() {
    await this.fetchAllNft()
  }
}
</script>

<style scoped>
.container {
  width: 1280px;
  margin: 0 auto;
  padding: 8px;
}

.header{
  margin: 15px 0;
}
</style>