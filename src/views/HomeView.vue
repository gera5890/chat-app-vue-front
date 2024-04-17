<script setup>

import { useCommonStore } from '../stores/commonStore';
const store = useCommonStore();

console.log(store);

</script>

<template>
  <main>
    {{ store.test }}
    <h1 class="text-red-700 text-2xl">
      Hola mundo
    </h1>
  </main>
</template>
