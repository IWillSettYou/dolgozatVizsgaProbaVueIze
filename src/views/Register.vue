<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
// TOASTS DOESN'T WORK

const name = ref('');
const email = ref('');
const username = ref('');
const password = ref('');
const passwordConfirmation = ref('');
const router = useRouter();

const submitForm = async () => {
  if (password.value !== passwordConfirmation.value) {
    alert('Passwords do not match');
    return;
  }

  try {
    const response = await axios.post('http://localhost:5000/api/register', {
      name: name.value,
      email: email.value,
      username: username.value,
      password: password.value
    });
    console.log(response.data);
    router.push('/login');
    alert('Registration successful');
  } catch (error) {
    console.error('Error registering:', error);
    alert('Error registering');
  }
};
</script>


<template>
  <section>
    <div class="vw-100 vh-100 d-flex justify-content-center align-items-center bg-light bgImage">
      <form class="vw-50 container bg-white p-5 rounded d-flex flex-column gap-3">
        <div class="form-group row">
          <label for="inputName" class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputName"
              placeholder="Name"
              v-model="name"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              placeholder="Email"
              v-model="email"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="username" class="col-sm-2 col-form-label">Username</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="username"
              placeholder="Username"
              v-model="username"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
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
        <div class="form-group row">
          <label for="inputPassword2" class="col-sm-2 col-form-label">Password Confirmation</label>
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="inputPassword2"
              placeholder="Password Confirmation"
              v-model="passwordConfirmation"
            />
          </div>
        </div>
        <button type="button" class="btn btn-success" @click="submitForm">
          Register
        </button>
        <div class="text-center">
          <a href="/login">Already have an account? Login</a>
        </div>
      </form>
    </div>
  </section>
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

