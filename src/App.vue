<template>
  <div>
    <AppHeader></AppHeader>

    <div class="ui container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
</script>