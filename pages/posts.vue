<template>
  <h1>Posts page</h1>
  <q-btn>button</q-btn>
  <q-btn><NuxtLink to="/SignIn">login page</NuxtLink></q-btn>
  <q-btn><NuxtLink to="/SignUp">SignUp page</NuxtLink></q-btn>
  <q-btn><NuxtLink to="/users">users page</NuxtLink></q-btn>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'protected-routes',
});
</script>
