<template>
  <div class="q-pa-md flex items-center justify-center">
    <q-card class="my-card">
      <q-parallax
        src="https://cdn.quasar.dev/img/parallax1.jpg"
        :height="400"
      />

      <q-card-section>
        <div class="text-h6">{{ user?.name }}</div>
        <div class="text-subtitle2">{{ user?.lastName }}</div>
        <div class="text-subtitle2">{{ user?.email }}</div>
        <div class="text-subtitle2">{{ user?.sex }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { currentUser } from '~/components/models';
import { useUsersStore } from '~/stores/UsersStore';
import { useRoute } from 'vue-router';

definePageMeta({
  middleware: 'protected-routes',
});

const route = useRoute();
const usersStore = useUsersStore();
const userId = Array.isArray(route.params.id)
  ? route.params.id[0]
  : route.params.id;
const user = usersStore.users[userId];
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 500px;
}
</style>
