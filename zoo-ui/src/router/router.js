import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import page404 from '@/views/404.vue'

// // import Job from '@/views/Job.vue'
// import JobSearch from '@/views/JobSearch.vue'
// import JobCreate from '@/views/JobCreate.vue'
// import JobQuick from '@/views/JobQuick.vue'
// import Data from '@/views/Data.vue'
// import Dashboard from '@/views/Dashboard.vue'
// import Monitor from '@/views/Monitor.vue'
// import Admin from '@/views/Admin.vue'

// const Job = () => import(/* webpackChunkName: "group-job" */ '@/views/Job.vue')

// const componentName = {
//   home: 'Home',
//   login: 'Login',
//   page404: '404',
//   jobSearch: 'JobSearch',
//   jobCreate: 'JobCreate',
//   jobQuick: 'JobQuick',
//   data: 'Data',
//   dashboard: 'Dashboard',
//   monitor: 'Monitor',
//   admin: 'Admin'
// }

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      redirect: { name: '404' }
    },
    {
      path: '/404',
      name: '404',
      component: page404
    }
  ]
})

router.routerFormat = function rFormat (routers) {
  // 简单检查是否是可以处理的数据
  if (!(routers instanceof Array)) {
    return false
  }
  // 处理后的容器
  let fmRouters = []
  routers.forEach(router => {
    let { path, name, children, redirect } = router
    let component = name.charAt(0).toUpperCase() + name.slice(1)
    // 如果有子组件，递归处理
    if (children && children instanceof Array) {
      children = rFormat(children)
    }
    let fmRouter = {
      path: path,
      component (resolve) {
        // 拼出相对路径，由于component无法识别变量
        // 利用Webpack 的 Code-Splitting 功能
        require(['../views/' + component + '.vue'], resolve)
      },
      name: name,
      children: children,
      redirect: redirect == null ? null : { path: redirect }
    }
    fmRouters.push(fmRouter)
  })
  return fmRouters
}

router.beforeEach((to, from, next) => {
  if (to.name === 'home') {
    next()
  } else if (to.name === 'login') {
    if (store.getters.isLogin) {
      next({path: '/'})
    } else {
      next()
    }
  } else {
    if (store.getters.isLogin) {
      next()
    } else {
      store.commit('saveJumpPath', to.path)
      next({path: '/login'})
    }
  }
})

export default router
