<template>
  <list-wrapper title="Login">
    <form>
      <div class="field-body field">
        <div class="field">
          <input v-model="form.login" class="input" type="text" placeholder="Login">
        </div>
        <div class="field">
          <input v-model="form.email" class="input" type="email" placeholder="Email">
        </div>
      </div>
      <div class="field">
        <input v-model="form.password" class="input" type="password" placeholder="Password">
      </div>
      <div class="field-body field">
        <div class="control">
          <button class="button is-primary" @click="login()">
            Sign in
          </button>
        </div>
        <div class="control little-margin-left">
          <button class="button" @click="singup()">
            Sign up
          </button>
        </div>
        <div class="field-label" />
        <a class="button is-rounded" href="http://localhost:3000/auth/facebook">
          <font-awesome-icon :icon="['fab', 'facebook']" />
        </a>
        <a class="button is-rounded" href="http://localhost:3000/auth/twitter">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
        <button class="button is-rounded" @click="google()">
          <font-awesome-icon :icon="['fab', 'google']" />
        </button>
        <button class="button is-rounded" @click="github()">
          <font-awesome-icon :icon="['fab', 'github']" />
        </button>
      </div>
    </form>
  </list-wrapper>
</template>

<script>
import ListWrapper from '../components/ListWrapper.vue';
import router from '../router.js';
import axios from '../utils/axios.js';
import store from '../utils/store.js';

export default {
  name: 'Login',
  components: {
    ListWrapper
  },
  data() {
    return {
      form: {} 
    }
  },
  methods: {
    login() {
      axios.post('auth/login', {
        email: this.form.email,
        password: this.form.password
      }).then(resp => {
        console.log(resp.data.user.name, 'is loggined.');
        store.myId = resp.data.user.name;
        router.push( { name: 'Players' });
      }).catch(err => console.log('login error', err, this.form.email, this.form.password));
    },
    singup() {
      axios.post('auth/singup', {
        login: this.form.login,
        email: this.form.email,
        password: this.form.password,
        passwordConfirm: this.form.password
      }).then(data => {
        store.myId = data.user;
      }).catch(err => {
        console.log('singup error', err, this.form.login, this.form.email, this.form.password)
      });
    },
    google() {
      axios.post('auth/google')
      .then(console.log('google auth ok'))
      .catch(console.log('google auth error'));
    },
    github() {
      axios.post('auth/github')
      .then(console.log('github auth ok'))
      .catch(console.log('github auth error'));
    },
  }
}
</script>

<style>
.little-margin-left {
  margin-left: .5em;
}
</style>
