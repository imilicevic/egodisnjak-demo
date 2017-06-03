import Vue from 'vue'
import Router from 'vue-router'

import Teams from '@/components/Teams'
import Members from '@/components/Members'
import Member from '@/components/Member'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '2016'
    },
    {
      path: '/:year([0-9]{4})/:team([a-zA-Z]+)',
      name: 'Members',
      component: Members
    },
    {
      path: '/:year([0-9]{4})',
      name: 'Teams',
      component: Teams
    },
    {
      path: '/:profileId([0-9]{4})',
      name: 'Member',
      component: Member
    },    
  ]
})
