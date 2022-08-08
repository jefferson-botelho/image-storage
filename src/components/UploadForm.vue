<template>
  <div class="upload">
    <div class="dropper">
      <input type="file" 
      @change="uploadImages($event.target.files)"
      multiple
      accept="image/*"/>
      <span>Drag files here!</span>
    </div>
  </div>
</template>

<script setup>
import store from '../store'

const uploadImages = (images) => {
  store.dispatch('uploadImages', images);
}
</script>

<style scoped>
.upload {
  justify-content: center;
  display: flex;
  margin-top: 10vh;
}
.dropper {
  width: 50%;
  height: 30vh;
  border: dashed 2px var(--el-border-color);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: 500ms;
  font-family: 'Montserrat', sans-serif;
}

.dropper:hover {
  background-color: #eee;
  transition: 500ms;
  font-weight: bold;
  box-shadow: var(--el-box-shadow-lighter);
}

input {
  width: 100%;
  height: 30vh;
  opacity: 0;
  position: absolute;
}
</style>