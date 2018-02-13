<template>
  <div class="nav nav-container nav-bottom-border fix-top">
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo/logo.png" alt="logo"/>
      </router-link>
    </div>
    <div class="collapse-main-menu" v-show="isLogin">
      <el-dropdown>
        <span>
          <i style="font-size:20px" class="el-icon-menu"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><router-link to="/">主页</router-link></el-dropdown-item>
          <el-dropdown-item><router-link to="/job">任务</router-link></el-dropdown-item>
          <el-dropdown-item>数据</el-dropdown-item>
          <el-dropdown-item>报表</el-dropdown-item>
          <el-dropdown-item>监控</el-dropdown-item>
          <el-dropdown-item>管理</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="main-menu" v-show="isLogin">
      <el-menu mode="horizontal">
        <el-menu-item index="1">{{$t('zoo.job')}}</el-menu-item>
        <el-menu-item index="2">数据</el-menu-item>
        <el-menu-item index="3">报表</el-menu-item>
        <el-menu-item index="4">监控</el-menu-item>
        <el-menu-item index="5">管理</el-menu-item>
      </el-menu>
    </div>
    <div class="user-menu" v-show="isLogin">
      <el-badge :is-dot="true" :hidden="noNotice" class="item">
        <el-dropdown class>
          <span class="el-dropdown-link">
            <i class="el-icon-view"></i>
            <span class="user-name">{{user.username}}</span>
          </span>
          <el-dropdown-menu slot="dropdown" @click="switchLang()">
            <el-dropdown-item>用户信息</el-dropdown-item>
            <el-dropdown-item>消息</el-dropdown-item>
            <el-dropdown-item @click.native="switchLang">中/En</el-dropdown-item>
            <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-badge>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    "logo-img-src":{
      type:String
    },
    "enable-router":{
      type:Boolean,
      default:false
    },
    "main-menu-data":{
      type:Array
    },
    "user-menu-data":{
      type:Array
    }
  },
  data () {
    return {
      user: {
        username: this.$store.getUsername
      },
      noNotice : true,
      isLogin: true
    }
  },
  methods: {
     switchLang: function() {
       this.$store.commit('switchLang')
    },
    logout: function() {
      this.$store.commit('logout')
      this.$router.push('/login')
    },
    inactiveMenu: function() {
      console.log(1)
    }
  }
}
</script>

<style scoped>
  .fix-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1000;
  }

  .nav {
    height: 61px;
    background-color: #fff;
  }

  .nav-container {
    min-width: 360px;
  }

  .nav-bottom-border {
    border: 1px solid transparent;
    border-color: #f0f0f0;
    border-width: 0 0 1px;
  }

  .logo {
    float: left;
    height: 40px;
    padding: 0;
  }

  .el-header .logo img {
    padding-top: 10px;
    height: 100%;
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
    cursor: pointer;
    padding-top: 20px;
  }

  .main-menu {
    width: auto;
    float: left;
  }

  .user-menu {
    float: right;
    cursor: pointer;
    padding-top: 20px;
    margin-right: 10px;
  }

  .user-name {
    margin-right: 10px;
  }

  img {
    vertical-align: middle;
  }

  img {
    border: 0;
  }

</style>
