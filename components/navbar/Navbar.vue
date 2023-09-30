<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUsersStore } from '~/stores/UsersStore';
const userStore = storeToRefs(useUsersStore());
// definePageMeta({
//   middleware: 'protected-routes',
// });
console.log(userStore.isLoading);
</script>

<template>
  <Loader v-if="userStore.isLoading.value" />
  <q-layout v-else view="hHh lpR fFf">
    <q-header
      elevated
      class="bg-dark flex justify-between text-white"
      height-hint="98"
    >
      <q-tabs>
        <q-route-tab to="/" label="Main" />
        <q-route-tab to="/users" label="Users" />
        <q-route-tab to="/posts" label="Posts" />
      </q-tabs>
      <NavbarUserDropdown />
    </q-header>

    <q-page-container>
      <Nuxt-Page />
    </q-page-container>
  </q-layout>
</template>

<style></style>
