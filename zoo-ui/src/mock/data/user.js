const Users = [
  {
    id: 1,
    username: 'admin',
    password: 'admin',
    realname: '张某某',
    role: ['superboy', 'shark'],
    topMenu: {
      'job': ['jobCreate', 'jobSearch'],
      'data': [],
      'dashboard': [],
      'monitor': [],
      'admin': []
    },
    router: [
      {
        name: 'job',
        path: '/job',
        redirect: '/job/search',
        children: [
          {
            name: 'jobCreate',
            path: '/job/create'
          },
          {
            name: 'jobSearch',
            path: '/job/search'
          }
        ]
      },
      {
        name: 'data',
        path: '/data'
      },
      {
        name: 'dashboard',
        path: '/dashboard'
      },
      {
        name: 'monitor',
        path: '/monitor'
      },
      {
        name: 'admin',
        path: '/admin'
      }
    ]
  },
  {
    id: 2,
    username: 'user1',
    password: 'user1',
    realname: '谭某某',
    role: ['freshman', 'lion'],
    topMenu: {
      'job': ['jobSearch'],
      'data': []
    },
    router: [
      {
        name: 'job',
        topMenu: true,
        path: '/job',
        redirect: '/job/search',
        children: [
          {
            name: 'jobSearch',
            topMenu: true,
            path: '/job/search'
          }
        ]
      },
      {
        name: 'data',
        topMenu: true,
        path: '/data'
      }
    ]
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

/* menu object
  1. name
  2. path

*/
