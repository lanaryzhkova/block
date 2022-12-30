<template>
  <div class="connect"><my-button  v-if="connected!==true" @click="connectMetamask">Подключить Metamask</my-button></div>
  <login-form v-if="connected===true"></login-form>
  <div v-if="connected===true" style="text-align: center">Metamask подключен!</div>

</template>

<script>
import MyButton from "@/components/UI/MyButton";
import {mapActions, mapState} from "vuex";
import LoginForm from "@/components/forms/LoginForm";
export default {
  name: "AuthDialog",
  components: {MyButton, LoginForm},
  data() {
    return {
    }
  },
  methods: {
    ...mapActions({
      connectMetamask: "connectMeta",
    })
  },
  computed: {
    ...mapState({
      connected: state => state.metamask.connected,
    })
  },
}
</script>

<style scoped>
.connect{
  margin: 5px;
}
</style>