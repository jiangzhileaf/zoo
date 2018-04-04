import axios from 'axios'
import VueCookies from 'vue-cookies'

let base = ''

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data) }

export const checkToken = token => { return axios.get(`${base}/token`, {'params': {'token': token}}) }

export const getUserInfo = token => { return axios.get(`${base}/user/info`, {'params': {'token': token}}) }

export const jump = (vue) => {
  let nextJumpPath = vue.$store.getters.getJumpPath
  vue.$router.push(nextJumpPath)
  vue.$store.commit('clearJumpPath')
}

// check login then init user
export const initLogin = (store) => {
  let token = VueCookies.get('token')

  if (token === null) {
    store.commit('logout')
  } else {
    getUserInfo(token).then(data => {
      let { code, msg, user } = data.data
      if (code === 200) {
        console.log(user)
        store.commit('login', user)
      } else {
        console.log(msg)
        store.commit('logout')
      }
    })
  }
}

export const searchJob = params => { return axios.post(`${base}/job/_search`, params) }
