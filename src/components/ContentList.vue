<template>
  <div v-for="(content, i) in 3 " :key="i">
    <h5>{{ blogs[i].title }}</h5>
    <p>{{ blogs[i].date }}</p>
  </div>
  <!-- <div>
    <h5>{{ blogs[1].title }}</h5>
    <p>{{ blogs[1].date }}</p>
  </div>
  <div>
    <h5>{{ blogs[2].title }}</h5>
    <p>{{ blogs[2].date }}</p>
  </div> -->
  
</template>

<script>
export default {
  name: 'ContentList',
  data() {
    return {
      
    }
  },
  props : {
    blogs : Array
  }
}
</script>

<style>

</style>