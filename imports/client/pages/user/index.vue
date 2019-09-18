<template>
  <div>
    <h1>user</h1>
    <p>名字： {{userInfo.userName}}</p>
    <p>年龄： {{userInfo.userAge}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentRate: 0,
      activeNames: ['1']
    };
  },
  mounted() {
    this.init();
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  methods: {
    init() {}
  }
};
</script>

<style>
</style>