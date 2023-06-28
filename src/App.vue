<template>
<Herder/>
<router-link to="/Home">Home</router-link>
<router-link to="/List">List</router-link>
<router-link to="/Details">Details</router-link>

<router-view :blogs = "blogs"></router-view>

</template>

<script>
import Herder from './components/Herder.vue'
import blog from './assets/blog.js'
export default {
  name: 'App',
  data(){
    return {
      blogs : blog
    }
  },
  components: {
    Herder
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

}
</style>
