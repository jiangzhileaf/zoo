<template>
  <div class="nav nav-bottom-border">
    <div class="nav-container">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/logo/logo.png" alt="logo"/>
        </router-link>
      </div>
      <div class="main-menu" v-show="isLogin">
        <el-menu mode="horizontal" :unique-opened="true" :router="true" :default-active='activeTab'>
          <el-submenu v-for="(children, name) in userMenu" v-if="children.length > 0" :key=name :index="findPath(name)">
              <template slot="title">{{$t('zoo.'+name)}}</template>
              <el-menu-item v-for="child in children" :key=child :index="findPath(child)">{{$t('zoo.'+child)}}</el-menu-item>
          </el-submenu>
          <el-menu-item v-for="(children, name) in userMenu" v-if="children.length === 0" :key=name :index="findPath(name)">{{$t('zoo.'+name)}}</el-menu-item>
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
        <el-dropdown :hide-on-click="false" placement="bottom-start">
          <i style="font-size:20px" class="el-icon-menu"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item style="width:200px">
              <el-menu :unique-opened="true" :router="true" :default-active='activeTab'>
                <el-submenu v-for="(children, name) in userMenu" v-if="children.length > 0" :key=name :index="findPath(name)">
                    <template slot="title">
                      {{$t('zoo.'+name)}}
                    </template>
                    <el-menu-item v-for="child in children" :key=child :index="findPath(child)">
                      {{$t('zoo.'+child)}}
                    </el-menu-item>
                </el-submenu>
                <el-menu-item v-for="(children, name) in userMenu" v-if="children.length === 0" :key=name :index="findPath(name)">
                  {{$t('zoo.'+name)}}
                </el-menu-item>
              </el-menu>
            </el-dropdown-item>
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
    },
    findPath: function(name){
      return this.$router.findPathByName(name)
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
      return this.$route.path
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
  
  .nav-top-border {
    border-top: 3px solid #409EFF;
  }

  .nav-bottom-border {
   /*  border-bottom: 1px solid transparent;
    border-bottom-color: #f0f0f0; */
    box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.1), 0 1px rgba(0,0,0,0.1);
  }

  .el-menu {
    border-right: 0px;
  }

  .el-dropdown-menu__item:not(.is-disabled):hover {
    background-color: #fff
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

  .el-menu--horizontal>.el-menu-item.is-active,.el-menu--horizontal>.el-submenu.is-active .el-submenu__title  {
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
