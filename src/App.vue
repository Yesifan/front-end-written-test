<template>
  <div id="app">
    <HelloWorld msg="Welcome to Interview"/>
    <Swiper/>
    <UnlimitedMenu :menu="menu"/>
    <button @click="message">
      show message
    </button>
  </div>
</template>

<script>
import message from './components/message/index.js'
import Swiper from './components/swiper/index.vue'
import HelloWorld from './components/hello-world/index.vue'
import UnlimitedMenu from './components/unlimited-menu/index.vue'
import { menu } from './components/unlimited-menu/mock'

export default {
  name: 'App',
  components: {
    Swiper,
    HelloWorld,
    UnlimitedMenu
  },
  data(){
    return {
      menu
    }
  },
  methods:{
    message(){
      message("show the message!")
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
