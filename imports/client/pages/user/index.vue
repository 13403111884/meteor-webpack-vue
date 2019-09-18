<template>
  <div>
    <h1>user</h1>
    <p>名字： {{userInfo.userName}}</p>
    <p>年龄： {{userInfo.userAge}}</p>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <br />
    <van-circle v-model="currentRate" :rate="rate" :color="gradientColor" text="渐变色" />
    <van-collapse v-model="activeNames">
      <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
      <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
      <van-collapse-item title="标题3" name="3" disabled>内容</van-collapse-item>
    </van-collapse>
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
    init() {
      console.log("Vue-Router", this.$router);
    }
  }
};
</script>

<style>
</style>