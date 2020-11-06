import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//路由表
const routes = [
  {
    path:'/login',
    name:'login',
    component:()=>import('@/views/login')
  },
  {
    path:'/', //默认页面
    // name:'login',有子路由时不用写name
    component:()=>import('@/views/layout/'),
    children:[
      {
        path:'',//默认子路由
        component:()=>import('@/views/home/'),
        name:'layout'
      },
      {
        path:'/qa',
        component:()=>import('@/views/qa/'),
        name:'qa'
      },
      {
        path:'/video',
        component:()=>import('@/views/video/'),
        name:'video'
      },
      {
        path:'/my',
        component:()=>import('@/views/my/'),
        name:'my'
      },
    ]

  }
];
export default new Router({
  routes
})
