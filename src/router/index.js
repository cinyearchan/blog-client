import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/Index/template.vue'
import Login from '@/pages/Login/template.vue'
import Register from '@/pages/Register/template.vue'
import User from '@/pages/User/template.vue'
import My from '@/pages/My/template.vue'
import Edit from '@/pages/Edit/template.vue'
import Detail from '@/pages/Detail/template.vue'
import Create from '@/pages/Create/template.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    }
  ]
})
