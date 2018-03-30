import Vue from 'vue'
import Vuex from 'vuex'
import VueCookies from 'vue-cookies'

Vue.use(Vuex)

const state = {
  user: null,
  lang: 'en',
  jumpPath: ''
}

const mutations = {
  login (state, user) {
    state.user = user
    VueCookies.set('token', user.token, '60min')
  },
  logout (state) {
    state.user = null
    VueCookies.remove('token')
  },
  updateToken (state) {
    VueCookies.set('token', state.token, '60min')
  },
  initLang (state, vue) {
    let lang = localStorage.getItem('lang')
    lang = lang === '' || lang === null ? 'en' : lang
    state.lang = lang
    vue.$i18n.locale = lang
  },
  switchLang (state, vue) {
    let curLang = state.lang
    let tarLang = curLang === 'en' ? 'zh-CN' : 'en'
    state.lang = tarLang
    vue.$i18n.locale = tarLang
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
  getToken (state) {
    return state.token || VueCookies.get('token')
  },
  getJumpPath (state) {
    let nextJumpPath = state.jumpPath || localStorage.getItem('jumpPath')
    return nextJumpPath === '/login' || nextJumpPath === null || nextJumpPath === 'null' ? '/' : nextJumpPath
  },
  getUsername (state) {
    if (state.user === null) {
      return ''
    } else {
      return state.user.username
    }
  },
  getUserMenu (state) {
    if (state.user === null) {
      return {}
    } else {
      return state.user.topMenu
    }
  },
  isLogin (state) {
    return state.user != null && state.user.token != null && state.user.token !== ''
  }
}

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  actions,
  getters,
  state,
  mutations
})

export default store
