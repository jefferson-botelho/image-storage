<template>
  <div class="dropper">
    <input type="file" 
    @change="uploadImages($event.target.files)"
    multiple
    accept="image/*"/>
    <span>Drag files here!</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'UploadForm',
  methods: {
    ...mapActions(['uploadImages'])
  }
};
</script>

<style scoped>
.dropper {
  height: 30vh;
  border:2px dashed black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: 500ms;
}

.dropper:hover {
  background-color: #eee;
  transition: 500ms;
}

input {
  width: 100%;
  height: 30vh;
  opacity: 0;
  position: absolute;
}
</style>