<template>
    <div v-if="isLoggedIn" class="image-container">
      <div v-for="image in allImages" :key="image.link" class="block">
        <el-image 
        class="images"
        :src="image.link" 
        fit="contain" />
      </div>
    </div>
    <h1 class="login" v-else>Log in to get started!</h1>
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
  justify-content: center;
}

.image-container .block {
  padding: 30px 15px;
  text-align: center;
  box-sizing: border-box;
}

.images {
  max-width: 70%;
  padding: 5px;
}

.login {
  text-align: center;
  justify-content: center;
}
</style>