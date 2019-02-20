<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- key 防止就地复用 -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {//swiper3
        autoplay: 3000,
        speed: 1000,
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: 1,
          imgUrl: "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/3921acb51460dc6fa9e3c7464fac5cbb.jpg_750x200_d992573a.jpg"
        }, {
          id: 2,
          imgUrl: "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/db060ae95b1d57f39654f0b425c56249.jpg_750x200_6e703a23.jpg"
        }, {
          id: 3,
          imgUrl: "https://imgs.qunarzz.com/piao/fusion/1812/d6/daa880b254940402.jpg_750x200_b114308a.jpg"
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper /deep/ .swiper-pagination-bullet-active {
  background: #fff;
}
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 26.68%;
  background: #eee;
  .swiper-img {
    width: 100%;
  }
}
</style>