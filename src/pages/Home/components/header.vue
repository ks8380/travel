<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont search-icon">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      北京
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  height: 86px;
  line-height: 86px;
  background: #00bcd4;
  color: #fff;
  .header-left {
    width: 64px;
    float: left;
    .back-icon {
      text-align: center;
      font-size: 38px;
    }
  }
  .header-input {
    flex: 1;
    height: 64px;
    line-height: 64px;
    margin-top: 12px;
    margin-left: 20px;
    padding-left: 20px;
    background: #fff;
    border-radius: 10px;
    color: #ccc;
    font-size: 28px;
    .search-icon {
      font-size: 32px;
    }
  }
  .header-right {
    min-width: 130px;
    padding: 1px;
    float: right;
    text-align: center;
    color: #fff;
    font-size: 28px;
    .arrow-icon {
      text-align: center;
      font-size: 26px;
    }
  }
}
</style>