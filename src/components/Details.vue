<template>
  <div>
    <h4>상세페이지</h4>
    <h5>{{blogs[$route.params.id].title}}</h5>
    <p>{{ blogs[$route.params.id].content }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Detalis',
  props : {
    blogs : Array
  }

}
</script>

<style>

</style>