<template>
  <div id="app">
    <router-link to="/" >index</router-link>
    <router-link to="/user" >user</router-link>
    <router-view id="app-router"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    
  }
};
</script>

<style lang="stylus">
#app
  a
    font-size 36px
    margin-left 18px
#app-router
  padding 0 20px
</style>