<template>
  <div v-if="isAuth!==true && this.reg!==true && this.log===true" class="login__form" id="logForm">
    <h3>Вход</h3>
    <my-input class="auth__input"
              type="email"
              v-model.trim="email.toLowerCase()"
              placeholder="Введите e-mail"
              required>
    </my-input>
    <my-input type="password"
              class="auth__input"
              v-model.trim="password"
              placeholder="Введите пароль"
              required>
    </my-input>
    <div class="error__div" v-if="this.isError===true">Данные введены некорректно</div>
    <my-button @click="submitLog">
      Войти
    </my-button>
    <div class="reg__btn" @click="this.reg=true">Зарегистрироваться</div>
  </div>
  <div v-if="this.reg===true" class="login__form">
    <h3>Регистрация</h3>
    <my-input class="auth__input"
              type="email"
              v-model.trim="email"
              placeholder="Введите e-mail"
              required>
    </my-input>
    <my-input type="password"
              class="auth__input"
              v-model.trim="password"
              placeholder="Введите пароль"
              required>
    </my-input>
    <my-input type="password"
              class="auth__input"
              v-model.trim="this.repeatPassword"
              placeholder="Повторите пароль "
              required
              @onchange="changeRepeat" >
    </my-input>
    <p class="error__div" v-if="this.isError===true && this.repeatPassword!==this.password">{{ this.errorMessage }}</p>
    <p class="error__div" v-if="this.isError===true && this.repeatPassword===this.password"> {{errorText}}</p>
    <p class="error__div" v-if="this.isError===true">Данные введены некорректно</p>
    <my-button @click="submitReg">
      Зарегистрироваться
    </my-button>
    <div class="reg__btn" @click="this.log=true; this.reg=false">Вход</div>

  </div>
  <div v-if="this.isAuth===true">
    <div>Здравствуйте, {{this.user.email}} <br/>
      Ваш адрес: {{this.user.wallet}} <br/>
      Ваш баланс: {{this.balance}}
    </div>
    <div class="reg__btn" @click="logOut">Выйти</div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
import MyInput from "@/components/UI/MyInput";
import {mapActions, mapState} from "vuex";

export default {
  name: "LoginForm",
  components: {MyButton, MyInput},
  data() {
    return {
      email: '',
      password: '',
      reg: false,
      log: true,
      repeatPassword: '',
      isError: false,
      errorMessage: ''
    }
  },
  methods: {
    ...mapActions({
      login: "login",
      register: "register",
      logOut: "logOut"
    }),
    async submitLog(){
      try {
        if (this.email !== '' && this.password !== ''){
          this.user.email = this.email
          this.user.password = this.password
          this.user.wallet = this.wallet;
          console.log(this.user)
          await this.login()
          this.email = '';
          this.password = '';
        } else {
          this.isError = true;
        }
      } catch (e) {
        console.log(e)
        this.isError = true;
      }
    },
    changeRepeat(){
      if (this.repeatPassword === this.password) {
        this.isError=true;
        this.errorMessage = 'Пароли не совпадают'
      }
    },
    async submitReg(){
      try {
        if (this.repeatPassword === this.password && this.email !=='' && this.password!=='') {
          this.isError=false;
          this.user.email = this.email
          this.user.password = this.password
          this.user.wallet = this.wallet;
          console.log(this.user)
          await  this.register();
          // this.email = '';
          // this.password = '';
          // this.repeatPassword = '';
        }
        else
        {
          this.isError=true;
          this.errorMessage = 'Пароли не совпадают'
          this.repeatPassword = ''
        }
      } catch (e) {
        this.isError=true;
      }
    },

  },
  computed: {
    ...mapState({
      isAuth: state => state.post.isAuth,
      user: state => state.post.user,
      wallet: state => state.metamask.wallet,
      balance: state => state.metamask.balance,
      errorText: state => state.post.errorText
    })
  },
}
</script>

<style scoped>
.login__form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.auth__input{
  width: auto;
}

.reg__btn{
  text-decoration: underline;
}

.error__div{
  color: red;
}

.btn{
  border: 1px solid black;
  width: fit-content;
  height: fit-content;
  padding: 10px;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  font-weight: bold;
  margin: 8px 0;
  border-radius: 8px;
}

.btn:hover{
  background-color:  #5A5959;
  color: white;
  font-weight: bold;
  border-radius: 8px;
}
</style>