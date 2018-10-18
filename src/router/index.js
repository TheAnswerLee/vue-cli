import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Xiangy from '@/components/Xiangy'
import Zaoyang from '@/components/Zaoyang'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/xy',
      component:Xiangy,
      children:[{
        path:'zy',
        component:Zaoyang
      }]
    }
  ]
})
