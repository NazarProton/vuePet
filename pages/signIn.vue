<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center bg-grey-2">
        <q-card class="q-pa-md shadow-2 my_card" bordered>
          <!-- <div v-if="currentUser.email">{{ currentUser.email }}</div> -->
          <q-card-section class="text-center">
            <div class="text-grey-9 text-h5 text-weight-bold">Sign In</div>
            <div class="text-grey-8">
              You have to SignIn to get access to our data
            </div>
          </q-card-section>
          <q-card-section>
            <q-input
              dense
              outlined
              v-model="formData.email"
              label="Email Address"
            ></q-input>
            <q-input
              dense
              outlined
              class="q-mt-md"
              v-model="formData.password"
              type="password"
              label="Password"
            ></q-input>
          </q-card-section>
          <q-card-section>
            <q-btn
              style="border-radius: 8px"
              color="dark"
              rounded
              size="md"
              label="Sign In"
              no-caps
              class="full-width"
              @click="signIn"
            ></q-btn>
          </q-card-section>
          <q-card-section class="text-center q-pt-none">
            <div class="text-grey-8">
              Don't have an account yet?
              <q-btn
                to="/signUp"
                class="text-dark text-weight-bold"
                style="text-decoration: none"
                >Sign up.</q-btn
              >
            </div>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LoginData, registerData } from '~/components/models';
import { useUsersStore } from '~/stores/UsersStore';

const usersStore = useUsersStore();
const formData = ref<LoginData>({
  email: '',
  password: '',
});
const signIn = () => {
  usersStore.signInCurrentUser(formData.value);
  navigateTo('/users');
};
</script>

<style>
.my_card {
  width: 25rem;
  border-radius: 8px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}
</style>
