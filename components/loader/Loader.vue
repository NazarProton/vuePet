<template>
  <div
    class="q-pa-md q-gutter-md row justify-center items-center loader-container"
  >
    <q-spinner color="dark" size="3em" :thickness="10" />
  </div>
</template>

<style scoped>
.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
