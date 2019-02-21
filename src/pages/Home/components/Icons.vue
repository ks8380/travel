<template>
  <div class="icons">
    <!-- <div class="icon" v-for="item of iconsList" :key = "item.id">
      <div class="icon-img">
        <img class="icon-img-content" :src="item.imgUrl"  >
        </div>
      <p class="icon-desc">{{item.desc}}</p>
    </div> -->
 <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data() {
    return {
        swiperOption: {
          autoplay: false
        },
        iconsList: [
        {
          id: 1,
          imgUrl: "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc : "景点门票"
        }, {
          id:2,
          imgUrl: "https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
           desc : "一日游"
        }, {
          id: 3,
          imgUrl: "https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          desc:"北京必游"
        }, {
          id: 4,
          imgUrl: "https://imgs.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
          desc:"溜娃儿"
        }, {
          id: 5,
          imgUrl: "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png",
          desc:"爬长城"
        }, {
          id: 6,
          imgUrl: "https://imgs.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png",
          desc:"故宫"
        }, {
          id: 7,
          imgUrl: "https://imgs.qunarzz.com/piao/fusion/1803/22/98cbc1ff9e33fe02.png",
          desc:"赏花灯"
        }, {
          id: 8,
          imgUrl: "https://imgs.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png",
          desc:"北京滑雪"
        }, {
          id: 9,
          imgUrl: "https://imgs.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
          desc:"泡温泉"
        }
      ] 
    }
  },
  computed: {
    pages () {
      const pages = [];
      this.iconsList.forEach( (item,index) =>{
        const page = Math.floor(index / 8 ); //当前轮播图的数据应该展示在第几页
        console.log(page,"pagepagepage");
        console.log(pages[page],"pages[page]");
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)   
      } )
      return pages
    }
  }

}
</script>

<style lang="less" scoped>
.icons {
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  overflow: hidden;
  margin-top: 10px;
  .icon {
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    position: relative;
    .icon-img{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom:44px ;
      box-sizing: border-box;
      .icon-img-content{
        display: block;
        margin: 0 auto;
        text-align: center;
        height: 100%;
      }
    }
    .icon-desc{
      position: absolute;
      left: 0;
      right: 0;
      bottom:0;
      line-height: 44px;
      text-align: center;
      font-size: 28px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

}
</style>