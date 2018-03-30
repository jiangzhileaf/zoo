<template>
  <div class="nav nav-bottom-border">
    <div class="nav-container">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/logo/logo.png" alt="logo"/>
        </router-link>
      </div>
      <div class="main-menu" v-show="isLogin">

     <!--  <el-menu mode="horizontal" :router="true" :default-active='activeTab'>
        <el-submenu v-for="(item,index) in $router.options.routes" v-if="!item.hidden" :index="index+''">
            <template slot="title"><i class="el-icon-setting"></i>{{item.name}}</template>
            <el-menu-item v-for="child in item.children" :index="child.path">{{child.name}}</el-menu-item>
        </el-submenu>
      </el-menu>
 -->
        <el-menu mode="horizontal" :router="true" :default-active='activeTab'>
          <el-submenu>
              <template slot="title">我的工作台</template>
              <el-menu-item >1</el-menu-item>
          </el-submenu>
          <el-submenu v-for="(children, name) in userMenu" v-if="children.length > 0" :key=name :index=name>
             <template slot="title">{{$t('zoo.'+name)}}</template>
             <el-menu-item v-for="child in children" :key=child :index="child">{{$t('zoo.'+child)}}</el-menu-item>
          </el-submenu>
          <el-menu-item v-for="(children, name) in userMenu" v-if="children.length === 0" :key=name :index=name>{{$t('zoo.'+name)}}</el-menu-item>
        </el-menu>
      </div>
      <div class="user-menu" v-show="isLogin">
        <span class="user-notices">
          <el-badge :is-dot="true" :hidden="noNotice">
            <i class="el-icon-bell"></i>
          </el-badge>
        </span>
        <el-dropdown>
          <span class="el-dropdown-link">
            <span>{{username}}</span>
            <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>{{$t('zoo.userInfo')}}</el-dropdown-item>
            <el-dropdown-item @click.native="switchLang">中/En</el-dropdown-item>
            <el-dropdown-item @click.native="logout">{{$t('zoo.exit')}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="collapse-main-menu" v-show="isLogin">
        <el-dropdown>
          <span>
            <i style="font-size:20px" class="el-icon-menu"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(value, key) in userMenu" :key=key :index=key @click.native="jump(key)">{{$t('zoo.'+key)}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="login-menu" v-show="!isLogin">
        <el-button type="primary" round @click.native="jump('login')">{{$t('zoo.login')}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      noNotice : false
    }
  },
  methods: {
    switchLang: function() {
       this.$store.commit('switchLang', this)
    },
    logout: function() {
      this.$store.commit('logout')
      this.$router.push('/')
    },
    jump: function(menu){
      this.$router.push('/'+menu)
    }
  },
  computed: {
    userMenu(){
      return this.$store.getters.getUserMenu
    },
    username(){
      return this.$store.getters.getUsername
    },
    isLogin(){
      return this.$store.getters.isLogin
    },
    activeTab(){
      var array = this.$route.path.split('/')
      return array[0]
    }
  }
}
</script>

<style scoped>
  .nav {
    background-color: #fff;
  }

  .nav-container {
    height: 56px;
    min-width: 360px;
    max-width: 1140px;
    margin: 0 auto;
  }

  .nav-bottom-border {
    border-bottom: 1px solid transparent;
    border-color: #f0f0f0;
  }

  .el-menu--horizontal {
    border-bottom: 0px;
  }

  .el-menu--horizontal .el-menu-item {
    height: 55px;
    border-bottom: 0px;
  }

  .el-menu--horizontal .el-submenu {
    height: 55px;
    border-bottom: 0px;
  }

  .el-menu--horizontal>.el-menu-item.is-active,.el-menu--horizontal>.el-submenu.is-active {
    color: #409EFF;
    font-weight: bold;
    border-bottom: 0px;
  }
  
  .logo {
    float: left;
    padding: 0;
    margin-left: 10px;
    margin-right: 10px;
  }

  .logo img {
    height: 50px;
    vertical-align: middle;
    border: 0;
    padding-top: 5px;
  }

  .el-main {
    padding: 0px;
  }

  @media (min-width: 768px) {
    .collapse-main-menu {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .main-menu {
      display: none;
      width: 0;
      height: 0;
    }
  }

  .collapse-main-menu {
    float: right;
    cursor: pointer;
    padding-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .main-menu {
    width: auto;
    float: left;
  }

  .login-menu {
    float: right;
    padding-top: 10px;
    margin-right: 10px;
  }

  .user-menu {
    float: right;
    cursor: pointer;
    padding-top: 20px;
    margin-right: 10px;
  }

  .user-notices {
    margin-right: 10px;
  }
</style>
