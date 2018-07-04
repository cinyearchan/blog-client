import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Index from '@/pages/Index/template.vue'
// import Login from '@/pages/Login/template.vue'
// import Register from '@/pages/Register/template.vue'
// import User from '@/pages/User/template.vue'
// import My from '@/pages/My/template.vue'
// import Edit from '@/pages/Edit/template.vue'
// import Detail from '@/pages/Detail/template.vue'
// import Create from '@/pages/Create/template.vue'

import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/pages/Index/template.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/Login/template.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/pages/Register/template.vue')
    },
    {
      path: '/user/:userId',
      name: 'User',
      component: () => import('@/pages/User/template.vue')
    },
    {
      path: '/my',
      name: 'My',
      component: () => import('@/pages/My/template.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit/:blogId',
      name: 'Edit',
      component: () => import('@/pages/Edit/template.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/detail/:blogId',
      name: 'Detail',
      component: () => import('@/pages/Detail/template.vue')
    },
    {
      path: '/create',
      name: 'Create',
      component: () => import('@/pages/Create/template.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, form, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin').then(isLogin => {
      if (!isLogin) {
        next({
          path: '/lgoin',
          query: { 
            redirect: to.fullPath
          }
        })
      } else {
        next()
      }
    })
  } else {
    next()
  }
})

export default router
