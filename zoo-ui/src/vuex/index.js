import Vue from 'vue'
import Vuex from 'vuex'
import VueCookies from 'vue-cookies'

Vue.use(Vuex)

const state = {
  token: '',
  user: JSON.parse(localStorage.getItem('user')),
  lang: 'en',
  jumpPath: '',
  curActiveMenu: '',
  lastOpTimestamp: 0
}

const mutations = {
  login (state, user) {
    state.user = user
    VueCookies.set('token', user.token, '60min')
    localStorage.setItem('user', JSON.stringify(user))
  },
  logout (state) {
    state.user = null
    VueCookies.remove('token')
    localStorage.removeItem('user')
  },
  initToken: (state) => {
    state.token = VueCookies.get('token')
  },
  updateToken (state) {
    VueCookies.set('token', state.token, '60min')
  },
  initLang (state) {
    let lang = localStorage.getItem('lang')
    lang = lang === '' || lang === null ? 'en' : lang
    state.lang = lang
  },
  switchLang (state) {
    let curLang = state.lang
    let tarLang = curLang === 'en' ? 'zh-CN' : 'en'
    state.lang = tarLang
    localStorage.setItem('lang', tarLang)
  },
  saveJumpPath (state, path) {
    state.jumpPath = path
    localStorage.setItem('jumpPath', path)
  },
  clearJumpPath (state) {
    state.jumpPath = null
    localStorage.removeItem('jumpPath')
  }
}

const actions = {
  login ({commit}) {
    commit('INCREMENT')
  },
  logout ({commit}) {
    commit('DECREMENT')
  }
}

const getters = {
  tokenAlmostExprie (state) {
    let curTimestamp = new Date().getTime()
    return (curTimestamp - state.lastOpTimestamp) > 30 * 60 * 1000
  },
  getToken (state) {
    return state.token || VueCookies.get('token')
  },
  getJumpPath (state) {
    let nextJumpPath = state.jumpPath || localStorage.getItem('jumpPath')
    return nextJumpPath === '/login' || nextJumpPath === null || nextJumpPath === 'null' ? '/' : nextJumpPath
  },
  getUsername (state) {
    return state.user.username
  },
  isLogin (state) {
    return state.token != null && state.token !== ''
  }
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  actions,
  getters,
  state,
  mutations
})
