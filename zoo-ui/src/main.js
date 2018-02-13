// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import VueCookies from 'vue-cookies'

import i18n from './i18n'
import store from './vuex'

import Mock from './mock'

import { checkLogin, jump } from './api/api'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import './assets/css/zoo.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(ElementUI)
Vue.use(VueCookies)

Mock.bootstrap()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>',
  created: function () {
    this.$store.commit('saveJumpPath', this.$route.path)
    this.$store.commit('initToken')
    this.$store.commit('initLang')
    this.$i18n.locale = this.$store.state.lang
    checkLogin(this, jump)
  }
})
