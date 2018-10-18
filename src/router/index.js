import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '@/components/tabbar/HomeContainer'
import MemberContainer from '@/components/tabbar/MemberContainer'
import ShopCarContainer from '@/components/tabbar/ShopCarContainer'
import SearchContainer from '@/components/tabbar/SearchContainer'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopCarContainer },
    { path: '/search', component: SearchContainer },
    { path:'*' ,redirect:'/home'}
  ],
  linkActiveClass:'mui-active'
})
