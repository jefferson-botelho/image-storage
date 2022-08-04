import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue';
import { store } from './store'
import App from './App'
import AuthHandler from './components/AuthHandler'
import ImageList from './components/ImageList'
import UploadForm from './components/UploadForm'

const app = createApp(App);

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      component: ImageList 
    },
    { 
      path: '/upload', 
      component: UploadForm 
    },
    { 
      path: '/oauth2/auth/callback', 
      component: AuthHandler 
    }
  ]
})

app.use(store)
app.use(router)

app.mount("#app")