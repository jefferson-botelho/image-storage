<template>
  <div class="ui secondary pointing menu">
    <div id="menu-items">
      <router-link to="/" class="active item">
        Image Storage
      </router-link>
    </div>

    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <router-link to="/" id="menu-items" class="ui item">
          Galleries
        </router-link>
        <router-link  to="/upload" id="menu-items" class="ui item">
          Upload
        </router-link >
        <a href="#" id="menu-items" class="ui item" @click="logout">
          Logout
        </a>
      </div>
    
      <a v-else href="#" id="menu-items" class="ui item" @click="login">
        Login
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    ...mapActions(['login', 'logout'])
  }
};
</script>

<style scoped>
#menu-items:hover {
  background-color: #eee;
}

.horizontal {
  display: flex;
  flex-direction: row;
}
</style>