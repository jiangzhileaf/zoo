const Users = [
  {
    id: 1,
    username: 'admin',
    password: 'admin',
    realname: '张某某',
    role: ['superboy', 'shark'],
    menu: {
      'job': ['get', 'add'],
      'data': ['get', 'add'],
      'view': ['get', 'add'],
      'monitor': ['get', 'add'],
      'admin': ['get']
    }
  },
  {
    id: 2,
    username: 'user1',
    password: 'user1',
    realname: '谭某某',
    role: ['freshman', 'lion'],
    menu: {
      'job': ['get'],
      'data': ['get']
    }
  }
]

const Tokens = []

let ts = JSON.parse(localStorage.getItem('tokens'))

if (ts !== null) {
  for (let i = 0; i < ts.length; i++) {
    let token = ts[i]
    let curTimestamp = new Date().getTime()
    if (curTimestamp < token.create_timestamp + token.keep_alive_mills) {
      Tokens.push(token)
    }
  }
}

export { Users, Tokens }
