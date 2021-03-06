import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Mock from 'mockjs'
import { Users, Tokens } from './data/user'
let _Users = Users

export default {
  /**
   * mock bootstrap
   */
  bootstrap () {
    let mock = new MockAdapter(axios)

    // mock success request
    mock.onGet('/success').reply(200, {
      msg: 'success'
    })

    // mock error request
    mock.onGet('/error').reply(500, {
      msg: 'failure'
    })

    // 验证token
    mock.onGet('/token').reply(config => {
      let {token} = config.params
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let valid = Tokens.some(t => {
            if (t.token === token && ((new Date()).getTime() < t.create_timestamp + t.keep_alive_mills)) {
              return true
            }
          })

          if (valid) {
            resolve([200, {code: 200}])
          } else {
            resolve([200, {code: 404}])
          }
        }, 200)
      })
    })

    // 根据token返回用户信息
    mock.onGet('/user/info').reply(config => {
      let {token} = config.params
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          Tokens.forEach(t => {
            if (t.token === token && ((new Date()).getTime() < t.create_timestamp + t.keep_alive_mills)) {
              Users.forEach(u => {
                if (t.uid === u.id) {
                  let user = u
                  user.token = t.token
                  resolve([200, {code: 200, user: user}])
                }
              })
            }
          })
          resolve([200, {code: 500, msg: 'token is invalid!'}])
        }, 200)
      })
    })

    // 登录
    mock.onPost('/login').reply(config => {
      let {username, password} = JSON.parse(config.data)
      return new Promise((resolve, reject) => {
        let user = null
        setTimeout(() => {
          let hasUser = Users.some(u => {
            if (u.username === username && u.password === password) {
              user = u
              user.token = Mock.mock('@guid')
              Tokens.push({uid: user.id, token: user.token, keep_alive_mills: 691200000, create_timestamp: (new Date()).getTime()})
              localStorage.setItem('tokens', JSON.stringify(Tokens))
              return true
            }
          })

          if (hasUser) {
            resolve([200, { code: 200, msg: '登录成功', user: user }])
          } else {
            resolve([200, { code: 500, msg: '账号或密码错误' }])
          }
        }, 1000)
      })
    })

    // 获取用户列表
    mock.onGet('/user/list').reply(config => {
      let {name} = config.params
      let mockUsers = _Users.filter(user => {
        if (name && user.name.indexOf(name) === -1) return false
        return true
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            users: mockUsers
          }])
        }, 1000)
      })
    })

    // 获取用户列表（分页）
    mock.onGet('/user/listpage').reply(config => {
      let {page, name} = config.params
      let mockUsers = _Users.filter(user => {
        if (name && user.name.indexOf(name) === -1) return false
        return true
      })
      let total = mockUsers.length
      mockUsers = mockUsers.filter((u, index) => index < 20 * page && index >= 20 * (page - 1))
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            total: total,
            users: mockUsers
          }])
        }, 1000)
      })
    })

    // 删除用户
    mock.onGet('/user/remove').reply(config => {
      let { id } = config.params
      _Users = _Users.filter(u => u.id !== id)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }])
        }, 500)
      })
    })

    // 批量删除用户
    mock.onGet('/user/batchremove').reply(config => {
      let { ids } = config.params
      ids = ids.split(',')
      _Users = _Users.filter(u => !ids.includes(u.id))
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }])
        }, 500)
      })
    })

    // 编辑用户
    mock.onGet('/user/edit').reply(config => {
      let { id, name, addr, age, birth, sex } = config.params
      _Users.some(u => {
        if (u.id === id) {
          u.name = name
          u.addr = addr
          u.age = age
          u.birth = birth
          u.sex = sex
          return true
        }
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '编辑成功'
          }])
        }, 500)
      })
    })

    // 新增用户
    mock.onGet('/user/add').reply(config => {
      let { name, addr, age, birth, sex } = config.params
      _Users.push({
        name: name,
        addr: addr,
        age: age,
        birth: birth,
        sex: sex
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '新增成功'
          }])
        }, 500)
      })
    })
  }
}
