<template>
  <div>
    <!-- 头部顶栏 -->
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/Icons'
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style >
</style> 