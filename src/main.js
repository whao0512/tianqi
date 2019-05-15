import Vue from 'vue'
// import Vue from "vue/dist/vue.common.js";
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './css/responsive.css'
import './css/style.css'
import './css/animate.css'
import './css/default.css'
// import './css/introjs-rtl.css'
// import './css/introjs.css'
// import './css/prettyPhoto.css'
// import './css/setting.css'
import './css/slick.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
