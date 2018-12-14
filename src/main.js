// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import http from './http/http.js'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/public.css'
import './assets/css/common.css'

Vue.config.productionTip = false
Vue.prototype.$http=http
Vue.use(Element)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
