<template>
  <list-wrapper title="Login">
    <form>
      <div class="field-body field">
        <div class="field">
          <input class="input" type="text" placeholder="Login">
        </div>
        <div class="field">
          <input class="input" type="email" placeholder="Email">
        </div>
      </div>
      <div class="field">
        <input class="input" type="password" placeholder="Password">
      </div>
      <div class="field-body field">
        <div class="control">
          <button class="button is-primary" @click="authLogin()">
            Sign in
          </button>
        </div>
        <div class="control little-margin-left">
          <button class="button">
            Sign up
          </button>
        </div>
        <div class="field-label" />
        <button class="button is-rounded">
          <font-awesome-icon :icon="['fab', 'facebook']" />
        </button>
        <button class="button is-rounded">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </button>
        <button class="button is-rounded">
          <font-awesome-icon :icon="['fab', 'google']" />
        </button>
        <button class="button is-rounded">
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
  methods: {
    authLogin() {
      this.axios.post('auth/login', {
        email: 'email@test.com',
        password: 'PASSWORD'
      }).then(console.log('authLogin'));
    },
    registr() {
      this.axios.post('registr', {
        name: 'myname',
        email: 'email@test.com',
        password: 'PASSWORD',
        passwordConfirm: 'PASSWORDCONFIRM'
      }).then(console.log('registr'));
    },
    facebook() {
      this.axios.post('facebook').then(console.log('facebook'));
    },
    twitter() {
      this.axios.post('twitter').then(console.log('twitter'));
    },
    google() {
      this.axios.post('google').then(console.log('google'));
    },
    github() {
      this.axios.post('github').then(console.log('github'));
    },
  }
}
</script>

<style>
.little-margin-left {
  margin-left: .5em;
}
</style>
