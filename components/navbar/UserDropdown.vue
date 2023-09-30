<script setup lang="ts">
import { getAccessToken } from '~/services/localStorrage.service';
import { useUsersStore } from '~/stores/UsersStore';
useHead({
  title: 'Postagram',
});

const route = useRoute();
const usersStore = useUsersStore();
const logout = () => {
  usersStore.logout();
};
</script>
<template>
  <q-btn-dropdown
    v-if="usersStore.currentUser"
    color="dark"
    :label="`${usersStore.currentUser?.name}`"
  >
    <q-list>
      <q-item
        clickable
        v-close-popup
        @click="navigateTo(`/users/${usersStore.currentUser?.id}`)"
      >
        <q-item-section>
          <q-item-label>Profile</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-close-popup @click="logout">
        <q-item-section>
          <q-item-label>logout</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>

  <q-tabs v-else>
    <q-route-tab
      :to="route.name === 'signIn' ? '/signUp' : '/signIn'"
      :label="route.name === 'signIn' ? 'Sign Up' : 'Sign In'"
    />
  </q-tabs>
</template>
