<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <section class="container">

    <header>

      <div class="mb-1">

        <nav class="p-2 flex flex-row gap-2">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/login">Login</RouterLink>
          <RouterLink to="/register">Register</RouterLink>
          <RouterLink to="/products">Products</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </section>
</template>

<style scoped>
.container{
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
