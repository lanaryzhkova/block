<template>
<div v-if="isAuth===true" >
  <div v-if="created===false" class="container">
    <h3>Название:</h3>
    <my-input style="width: 500px"
        v-model="this.nft.name">
    </my-input>
    <h3>Стоимость:</h3>
    <my-input style="width: 500px"
        v-model.number="this.nft.cost">

    </my-input>
    <h3>Файл:</h3>
    <my-upload-file
        :key="this"
        @change="uploadFile">
    </my-upload-file>
    <my-button
        @click="create">
      Создать NFT
    </my-button>
  </div>
  <my-button @click="$router.push('/gallery')" v-if="created===true">Перейти в галерею</my-button>
</div>
  <div v-else>
    Чтобы создать NFT нужно зарегистрироваться или войти в аккаунт
  </div>
</template>

<script>
import MyInput from "@/components/UI/MyInput";
import MyUploadFile from "@/components/UI/MyUploadFile";
import {mapActions, mapState} from "vuex";
import {createToken} from "@/scripts/deploy";

export default {
  name: "CreateNftForm",
  components: {MyUploadFile, MyInput, MyButton},
  data() {
    return {
      reader: new FileReader(),
      nft: {
        name: '',
        cost: 0,
        address: '',
        hash: ''
      },
      created: false
    }
  },
  methods: {
    ...mapActions({
      createHashImage: "createHashImage",
      getJSON: 'getJSON',

    }),
    uploadFile(ev) {
      const file = ev.target.files[0];
      this.reader.onload = (function (file) {
        return function (e) {
          let r = e.target;
        };
      })(file);
      this.reader.readAsDataURL(file);

    },
    async create(){
      try {
        console.log(this.reader.result)
        console.log(this.reader.result.split(',')[1], this.nft.name, this.nft.cost)
        let data = {
          'Bytes': this.reader.result,
          'UserAddress': this.wallet,
          'NFTName': this.nft.name,
          'NFTCost': this.nft.cost
        }
        await this.createHashImage(data);
        console.log(this.$store.state.post.hashJSON)
        await createToken(this.nft.cost, this.$store.state.post.hashJSON)
        this.created=true;
      }catch (e){
        console.log(e)
      }
    }
  },
  computed: {
    ...mapState({
      isAuth: state => state.post.isAuth,
      user: state => state.post.user,
      wallet: state => state.metamask.wallet,
      nameNft: state => state.post.nameNft,
      costNft: state => state.post.costNft,
      bytes: state => state.post.bytes,
      hashImage: state => state.post.hashImage,
      hashJSON: state => state.hashJSON
    })
  },
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 40%;
  margin: 0 auto
}
</style>