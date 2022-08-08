<template>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item id="menu-items" index="0">
        <router-link  to="/" id="menu-items">
          Image Storage
        </router-link >
      </el-menu-item>

      <div id="flex-grow" />
        <el-menu-item v-if="isLoggedIn" index="1">
         <router-link to="/" id="menu-items">
          Galleries
          </router-link> 
        </el-menu-item>
        <el-menu-item v-if="isLoggedIn" index="2">
          <router-link  to="/upload" id="menu-items">
          Upload
          </router-link >
        </el-menu-item>
        <el-menu-item v-if="isLoggedIn" index="3">
          <a href="#" id="menu-items" @click="logout">
          Logout
          </a>
        </el-menu-item>
        <el-menu-item v-else index="1">
          <a href="#" id="menu-items" @click="login">
          Login
          </a>
        </el-menu-item>   
    </el-menu>
</template>

<script setup>
import store from '../store'
import { computed } from 'vue';

// eslint-disable-next-line no-unused-vars
const isLoggedIn = computed(() => store.getters['isLoggedIn']);

// eslint-disable-next-line no-unused-vars
const login = () => {
  store.dispatch('login')
};

// eslint-disable-next-line no-unused-vars
const logout = () => {
  store.dispatch('logout')
};
</script>

<style>
#flex-grow {
  flex-grow: 1;
}

#menu-items {
  text-decoration: none;
}
</style>