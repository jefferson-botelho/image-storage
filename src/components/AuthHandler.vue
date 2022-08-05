<template>
  <div>
    Please Wait...
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import store from '../store'

onMounted(() => {
  store.dispatch('finalizeLogin', window.location.hash)
})
</script>