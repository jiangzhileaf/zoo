<template>
  <div id="app">
    <div v-bind:class="lang">
      <header class="fix-top">
        <navbar></navbar>
      </header>
      <div class="main">
        <router-view></router-view>
      </div>
      <hr>
      <footer class="footer">
        <p class="float-left">
          © 2017-2018 Company, Inc. · 
          <a href="#">Privacy</a> · 
          <a href="#">Terms</a>
        </p>
        <p class="float-right">
          <a href="#">Back to top</a>
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
import Navbar from '@/views/Navbar.vue'
export default {
  name: 'App',
  components:{
    'navbar': Navbar
  },
  computed: {
    lang() {
      return this.$store.state.lang
    }
  }
}
</script>

<style lang="scss" scoped>
  .fix-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1000;
  }

  .main {
    padding-top: 80px;
    min-height: 900px;
    overflow: hidden;
  }

  .footer {
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
  }

  .float-right {
    float: right;
  }

  .float-left {
    float: left;
  }
  
</style>
