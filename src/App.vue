<template>
  <div class="columns">
    <div class="column is-2">
      <sidebar></sidebar>
    </div>
    <div class="column is-10">
      <router-view class="view"></router-view>
    </div>
  </div>
</template>

<script>
import router from './components/router'
import Sidebar from './components/Sidebar.vue'
//  src="assets/material.min.js"
export default {
  router,
  components: {
    // router,
    Sidebar
  }
}
</script>

<style src="assets/style.css">
/*@import "../src\assets\css\style.css"*/
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
