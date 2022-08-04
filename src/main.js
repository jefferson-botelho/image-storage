import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue';
import { store } from './store'
import App from './App'
import AuthHandler from './components/AuthHandler'

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/oauth2/auth/callback', component: AuthHandler }
  ]
})

app.use(store)
app.use(router)

app.mount("#app")