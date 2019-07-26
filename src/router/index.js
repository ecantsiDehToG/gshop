/*
路由器对象模块
*/
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Msite from '@/pages/Msite/Msite'
import Order from '@/pages/Order/Order'
import Search from '@/pages/Search/Search'
import Profile from '@/pages/Profile/Profile'
import Login from '@/pages/Login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    // 用redirect路由重定向，把/自动导向自己要设置的默认页面
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      name: 'Msite',
      meta: {
        showFooter: true
      },
      component: Msite
    },
    {
      path: '/order',
      name: 'Order',
      meta: {
        showFooter: true
      },
      component: Order
    },
    {
      path: '/search',
      name: 'Search',
      meta: {
        showFooter: true
      },
      component: Search
    },
    {
      path: '/profile',
      name: 'Profile',
      meta: {
        showFooter: true
      },
      component: Profile
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
