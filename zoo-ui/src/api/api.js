import axios from 'axios'

let base = ''

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }) }

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }) }

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }) }

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }) }

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }) }

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }) }

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data) }

export const checkToken = function (params) { return axios.get(`${base}/token`, { params: params }) }

export const jump = (vue) => {
  let nextJumpPath = vue.$store.getters.getJumpPath
  vue.$router.push(nextJumpPath)
  vue.$store.commit('clearJumpPath')
}

export const checkLogin = (vue, callback) => {
  let token = vue.$store.getters.getToken
  if (token == null) {
    vue.$router.push('/login')
  } else if (vue.$store.getters.tokenAlmostExprie) {
    checkToken({'token': token}).then((res) => {
      let { code } = res.data
      if (code === 200) {
        callback(vue)
      } else {
        vue.$store.commit('logout')
        vue.$router.push('/login')
      }
    })
  } else {
    callback(vue)
  }
}
