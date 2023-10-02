<template>
  <div class="q-pa-md">
    <q-table title="Users" :rows="users" :columns="columns" row-key="id" />
  </div>
</template>

<script setup lang="ts">
import { useUsersStore } from '~/stores/UsersStore';
import { currentUser, IUsers } from '~/components/models';

definePageMeta({
  middleware: 'protected-routes',
});

const usersStore = useUsersStore();
const users: currentUser[] = Object.values(
  usersStore.users as { [key: string]: currentUser }
);

const columns: {
  name: string;
  label: string;
  field: string | ((row: currentUser) => any);
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  required?: boolean;
}[] = [
  {
    name: 'name',
    label: 'Name',
    field: 'name',
    align: 'left',
    sortable: true,
    required: true,
  },
  {
    name: 'lastName',
    label: 'Last Name',
    field: 'lastName',
    align: 'center',
    sortable: true,
  },
  {
    name: 'sex',
    label: 'Sex',
    field: 'sex',
    align: 'center',
    sortable: true,
  },
  {
    name: 'email',
    label: 'Email',
    field: 'email',
    align: 'left',
    sortable: true,
  },
];
</script>
