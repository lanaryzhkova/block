<template >
  <div class="nft" @click="showAuthDialog">
    <div style="display: flex; flex-direction: column; gap: 8px">
      <div class="image"><img id="card" :src="URLString"></div>
      <div class="title"><strong>{{ nft.NFTName }}</strong></div>
      <div class="cost">{{ nft.NFTCost }} NIM</div>
    </div>
  </div>
  <my-dialog v-model:show="dialogVisible" >
  <nft-info :title="nft.NFTName" :cost="nft.NFTCost" :user="nft.UserAddress" :type="mime">
    <div class="slot">
      <img id="card" class="img_info" :src="URLString">
      <a :href="URLString" :download="nft.NFTName">Скачать</a>
    </div>
  </nft-info>
  </my-dialog>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
import MyDialog from "@/components/UI/MyDialog";
import NftInfo from "@/components/NftInfo";

export default {
  name: "CardNft",
  components: {NftInfo, MyDialog, MyButton},
  props:{
    nft: Object
  },
  data(){
    return {
      file: File,
      mime: '',
      dialogVisible: false,
      URLString: ''
    }
  },
  methods: {
    showAuthDialog(){
      this.dialogVisible = true;
    },
    async fromBase64 (bytes){
      let arr = bytes.split(','),
          bstr = atob(arr[1]),
          n = bstr.length,
          u8arr = new Uint8Array(n);
      this.mime = arr[0].match(/:(.*?);/)[1]

      while(n--){
        u8arr[n] = bstr.charCodeAt(n);
      }
      let blobFile = await new Blob ([u8arr], {type: this.mime})
      let fileURL = URL.createObjectURL(blobFile);
      if(this.mime==='image/png' || 'image/jpeg'){
      this.URLString = fileURL
      document.getElementById('card').src = ''

      }
      else {
        this.URLString = fileURL
        document.getElementById('card').src = '/assets/img.png'
      }

    },
    async convert() {
     await this.fromBase64(`da${this.nft.Bytes}`);
    },
  },
  async mounted(){
    await this.convert()
  },
}
</script>

<style scoped>
.nft{
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 15px;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid lightgrey;
}
.nft:hover{
  background-color: lightgrey;
}
img{
  width: 200px;
  border-radius: 4px;
  margin: auto 0;
  height: 200px;
  overflow: hidden;
}

.slot{
  display: flex;
  flex-direction: column;
  margin: 8px 4px;
  gap: 8px;
}

.slot a{
  text-align: center;
  color: black;
  font-size: 20px;
}

.slot img{
  margin: auto;
}

.img_info{
  width: 300px;
  height: 300px;
}

.title{
  font-size: 20px;
}
</style>