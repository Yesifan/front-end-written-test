<template>
  <div id="app">
    <HelloWorld msg="Welcome to Interview"/>
    <Swiper/>
    <button @click="message">
      show message
    </button>
  </div>
</template>

<script>
import HelloWorld from './components/hello-world/index.vue'
import Swiper from './components/swiper/index.vue'
import message from './components/message/index.js'

export default {
  name: 'App',
  components: {
    Swiper,
    HelloWorld
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
