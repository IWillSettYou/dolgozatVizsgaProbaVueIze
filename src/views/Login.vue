<script setup>
import { ref } from 'vue';
import axios from 'axios';
import {useRouter} from 'vue-router';
// TOASTS DOESN'T WORK


const router = useRouter();
const email = ref('');
const password = ref('');

const login = async () => {
  try {
    const response = await axios.post('http://localhost:5000/api/login', {
      email: email.value,
      password: password.value
    });
    console.log(response.data);
    alert.success('Login successful');
    router.push('/');
  } catch (error) {
    console.error('Error logging in:', error);
    alert('Error logging in');
  }
};

const register = () => {
  router.push('/register');
};
</script>

<template>
  <div
    class="vw-100 vh-100 d-flex justify-content-center align-items-center bg-light bgImage"
  >
    <form class="container bg-white rounded d-flex flex-column gap-3" @submit.prevent="login">
      <div class="text-center text-white w-full bg-success">
        <h1>Login</h1>
      </div>
      <div class="p-5 container bg-white rounded d-flex flex-column gap-3">

        <div class="form-group row">
          <label for="email" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Email"
            v-model="email"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Password
        </label>
        <div class="col-sm-10">
          <input
          type="password"
          class="form-control"
          id="inputPassword"
          placeholder="Password"
          v-model="password"
          />
        </div>
      </div>
      <button type="submit" class="btn btn-warning">
        Login
      </button>
      <a @click="register">Not registered yet? Register here!</a>
    </div>
    </form>
  </div>
</template>

<style>
.bgImage{
  background-image: url('../assets/bestWallpaper.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 90vh;
  width: 100vw;
  position: fixed;
  top: 3;
  left: 0;
  z-index: -1;
}
</style>
