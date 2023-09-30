<script setup lang="ts">
import { ref } from 'vue';
import { registerData } from '~/components/models';
import { useUsersStore } from '~/stores/UsersStore';
const userStore = useUsersStore();
const route = useRoute();

const options = ['male', 'female', 'other'];
const formData = ref<registerData>({
  name: '',
  lastName: '',
  email: '',
  password: '',
  sex: undefined,
});
const signUp = async () => {
  userStore.signUpCurrentUser(formData.value);
  navigateTo('/users');
};
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center bg-grey-2">
        <q-card class="q-pa-md shadow-2 my_card" bordered>
          <!-- <div v-if="currentUser.email">{{ currentUser.email }}</div> -->
          <q-card-section class="text-center">
            <div class="text-grey-9 text-h5 text-weight-bold">Sign Up</div>
            <div class="text-grey-8">
              You have to create new account to get access to our data
            </div>
          </q-card-section>
          <q-card-section>
            <q-input
              dense
              outlined
              v-model="formData.name"
              label="Name"
            ></q-input>
            <q-input
              dense
              outlined
              v-model="formData.lastName"
              label="Last Name"
            ></q-input>
            <q-select
              class="my-1"
              v-model="formData.sex"
              :options="options"
              label="Sex"
            />
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
              label="Sign Up"
              no-caps
              class="full-width"
              @click="signUp"
            ></q-btn>
          </q-card-section>
          <q-card-section class="text-center q-pt-none">
            <div class="text-grey-8">
              Already have an account?
              <q-btn
                to="/signIn"
                class="text-dark text-weight-bold"
                style="text-decoration: none"
                >Sign In.</q-btn
              >
            </div>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style>
.my_card {
  width: 25rem;
  border-radius: 8px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}
.my-1 {
  margin-top: 4px;
  margin-bottom: 4px;
}
</style>
