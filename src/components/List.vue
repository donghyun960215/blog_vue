<template>
  <div v-for="(content, i) in 3 " :key="i">
    <h5 @click="$router.push('/details/' + i)">{{ blogs[i].title }}</h5>
    <p>{{ blogs[i].date }}</p>
  </div>
</template>

<script>
export default {
  name: 'List',
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