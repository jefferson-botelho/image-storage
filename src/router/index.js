import { createRouter, createWebHistory } from 'vue-router';

import ImageList from '../components/ImageList.vue';
import UploadForm from '../components/UploadForm.vue';
import AuthHandler from '../components/AuthHandler.vue';

const routes = [
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
];

export default createRouter({
  history: createWebHistory(),
  routes
});