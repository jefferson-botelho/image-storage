<template>
  <div>
    <div v-if="isLoggedIn" class="image-container">
      <img v-for="image in allImages" :src="image.link" :key="image.link"/>
    </div>
    <h2 v-else>Log in to get started!</h2>
  </div>
</template>

<script setup>
import store from '../store';
import { onMounted } from 'vue';
import { computed } from 'vue'

onMounted(() => {
  store.dispatch('fetchImages');
})

const allImages = computed(() => store.getters['allImages'])
const isLoggedIn = computed(() => store.getters['isLoggedIn'])

</script>

<style scoped>
.image-container {
  column-count: 3;
  column-gap: 0;
}

img {
  max-width: 100%;
  padding: 5px;
  display: block;
}
</style>