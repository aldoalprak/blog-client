import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CompleteArticle from './views/CompleteArticle.vue'
import Add from './views/Add.vue'
import Update from './views/Update.vue'
import Admin from './views/Admin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/content/:title',
      name: 'completeArticle',
      component: CompleteArticle,
      props:true
    },
    {
      path: '/add',
      name: 'addArticle',
      component: Add
    },
    {
      path: '/update/:title',
      name: 'updateArticle',
      component: Update,
      props:true
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
  ],
  mode:"history"
})
