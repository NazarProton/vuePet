<template>
  <q-page>
    <div class="mt-12">
      <q-card flat>
        <q-card-section>
          <h2 class="q-mb-md">Ласкаво просимо!</h2>
          <h5>Це головна сторінка нашого додатку.</h5>
        </q-card-section>
        <q-card-actions>
          <q-btn to="/users" color="primary" label="Перейти до користувачів" />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'protected-routes',
});
</script>
