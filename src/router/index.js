import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Years from '@/components/Years'
import Team from '@/components/Team'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/years',
      name: 'Years',
      component: Years
    }
  ]
})
