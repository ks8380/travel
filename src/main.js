// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'amfe-flexible'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/styles/reset.css'
// import './assets/styles/border.css'
import '@/assets/styles/iconfont.css' // 引入字体图标样式
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false
fastClick.attach(document.body) //300ms点击延迟
Vue.use(VueAwesomeSwiper) // 调用swiper

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
