<script setup lang="ts">
import { ref } from 'vue';
import { registerData } from '~/components/models';
import { useUsersStore } from '~/stores/UsersStore';
const userStore = useUsersStore();

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
};
definePageMeta({
  middleware: 'hiden-routs',
});
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center bg-grey-2">
        <q-card class="q-pa-md shadow-2 my_card" bordered>
          <q-form @submit="signUp" class="q-gutter-md">
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
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type your name',
                ]"
              ></q-input>
              <q-input
                dense
                outlined
                v-model="formData.lastName"
                label="Last Name"
                lazy-rules
                :rules="[
                  (val) =>
                    (val && val.length > 0) || 'Please type your last name',
                ]"
              ></q-input>
              <q-select
                class="my-1"
                v-model="formData.sex"
                :options="options"
                label="Sex"
                lazy-rules
                :rules="[
                  (val) =>
                    (val && val.length > 0) || 'Please choose your gender',
                ]"
              />
              <q-input
                dense
                outlined
                v-model="formData.email"
                label="Email Address"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type your email',
                ]"
              ></q-input>
              <q-input
                dense
                outlined
                class="q-mt-md"
                v-model="formData.password"
                type="password"
                label="Password"
                lazy-rules
                :rules="[
                  (val) =>
                    (val && val.length > 0) || 'Please type your passworn',
                ]"
              ></q-input>
            </q-card-section>
            <q-card-section>
              <q-btn
                type="submit"
                style="border-radius: 8px"
                color="dark"
                rounded
                size="md"
                label="Sign Up"
                no-caps
                class="full-width"
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
          </q-form></q-card
        >
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
