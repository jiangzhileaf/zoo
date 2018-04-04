// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mock from './mock'
import router from './router'
import axios from 'axios'

import VueCookies from 'vue-cookies'
import i18n from './i18n'
import store from './vuex'

import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import './assets/css/zoo.css'

import { getUserInfo } from './api/api'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(ElementUI)
Vue.use(VueCookies)

Mock.bootstrap()

var initVue = function (isLogin) {
  if (isLogin) {
    router.initRouter()
  }

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    i18n,
    components: { App },
    template: '<App/>',
    created: function () {
      this.$store.commit('initLang', this)
    }
  })
}

// check login then init vuex before init vue
let token = VueCookies.get('token')

if (token === null) {
  store.commit('logout')
  initVue(false)
} else {
  getUserInfo(token).then(data => {
    let { code, msg, user } = data.data
    if (code === 200) {
      store.commit('login', user)
    } else {
      console.log(msg)
      store.commit('logout')
    }
  }).then(data => {
    initVue(true)
  })
}
