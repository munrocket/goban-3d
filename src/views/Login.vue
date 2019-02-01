<template>
  <list-wrapper title="Login">
    <form>
      <div class="field-body field">
        <div class="field">
          <input
            v-model="form.login"
            class="input"
            type="text"
            placeholder="Login"
          >
        </div>
        <div class="field">
          <input
            v-model="form.email"
            class="input"
            type="email"
            placeholder="Email"
          >
        </div>
      </div>
      <div class="field">
        <input
          v-model="form.password"
          class="input"
          type="password"
          placeholder="Password"
        >
      </div>
      <div class="field-body field">
        <div class="control">
          <button class="button is-primary" @click="authLogin()">
            Sign in
          </button>
        </div>
        <div class="control little-margin-left">
          <button class="button" @click="registr()">
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
    authLogin() {
      this.axios.post('auth/login', {
        email: this.formEmail,
        password: this.formPassword
      }).then(console.log('login ok', this.form.email, this.form.password))
      .catch(console.log('login error', this.form.email, this.form.password));
    },
    registr() {
      this.axios.post('registr', {
        login: this.form.login,
        email: this.form.email,
        password: this.form.password,
        passwordConfirm: this.form.password
      }).then(console.log('registr ok'), this.form.login, this.form.email, this.form.password)
      .catch(console.log('regitstr error', this.form.login, this.form.email, this.form.password));
    },
    google() {
      this.axios.post('auth/google')
      .then(console.log('google'))
      .catch(console.log('google error'));
    },
    github() {
      this.axios.post('auth/github')
      .then(console.log('github'))
      .catch(console.log('github error'));
    },
  }
}
</script>

<style>
.little-margin-left {
  margin-left: .5em;
}
</style>
