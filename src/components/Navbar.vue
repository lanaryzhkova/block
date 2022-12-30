<template>
  <section class="nav">
    <h1 class="logo" @click="$router.push('/')">Block.</h1>
    <div class="nav__btns">
      <button-icon @click="showAuthDialog"><img src="../assets/personcircle.svg"></button-icon>
      <button-icon  v-if="isAuth" @click="$router.push('/createnft')" ><img src="../assets/plus-circle.svg"></button-icon>
      <button-icon v-if="isAuth" @click="$router.push('/gallery')" ><img src="../assets/view-list.svg"></button-icon>
    </div>
  </section>
  <my-dialog v-model:show="dialogVisible" >
    <auth-dialog/>
  </my-dialog>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
import ButtonIcon from "@/components/UI/ButtonIcon";
import AuthDialog from "@/components/AuthDialog";
import {mapState} from "vuex";
import MyDialog from "@/components/UI/MyDialog";
export default {
  name: "Navbar",
  components: {AuthDialog, ButtonIcon, MyButton, MyDialog},
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    showAuthDialog(){
        this.dialogVisible = true;
      }
  },
  computed: {
    ...mapState({
      isAuth: state => state.post.isAuth,
    })
  },
}
</script>

<style lang="scss" scoped>

.nav{
  margin: 0 auto;
  padding: 12px 0;
  min-height: 60px;
  border-bottom: solid 2px black;
  width: 1280px;
  display: flex;
  justify-content: space-between;

  .logo{
    font-size: 45px;
    font-weight: bold;
    cursor: pointer;
  }

  .nav__btns{
    display: flex;
    flex-direction: row;
    gap: 12px;

    img {
      width: 50px;
      height: 50px;
    }
  }
}

</style>