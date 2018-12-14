import Vue from 'vue'
import Router from 'vue-router'
// import layout from '@/views/layout'
import login from '@/views/login'
// import table from '@/views/template/group1/table'
// import echarts from '@/views/template/group1/echarts'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
      // children:[
      //   {
      //     path: "/table",
      //     name: 'table',
      //     component: table,
      //   },
      //   {
      //     path: "/echarts",
      //     name: 'echarts',
      //     component: echarts,
      //   }
      // ]      
    }
  ]
})
