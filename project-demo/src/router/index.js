import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/home'
import Footer from '@/components/uitlity/footer'
import Header from '@/components/uitlity/header'
import Search from '@/components/uitlity/search'

import Share from '@/components/share'
import Detail from '@/components/detail'
import Training from '@/components/training'

import TrainingDetail from '@/components/trainingDetail'

import Choiceness from '@/components/choiceness'


import NotFound from '@/components/uitlity/notFound'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Home
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/share',
      component:Share,
      children:[
        {path:'',component:Search}
      ]
    },
    {
      path:'/s_detail',
      component:Detail
    },
    {
      path:'/training',
      component:Training
    },
    {
      path:'/t_detail',
      component:TrainingDetail
    },
    {
      path:'*',
      component:NotFound
    }
  ]
})
