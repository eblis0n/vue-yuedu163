<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  background: #f2f2f2;
  font-size: 0.14rem;
}
#app{
  max-width: 640px;
  margin:0 auto;
  background: #FFF;
}
</style>
