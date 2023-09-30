<template>
  <h1>users page</h1>
  <NuxtLink to="/SignIn">login page</NuxtLink>
  <NuxtLink to="/SignUp">SignUp page</NuxtLink>
  <NuxtLink to="/">Main page</NuxtLink>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: 'protected-routes',
});
</script>
