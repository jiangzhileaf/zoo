<template>
  <div id="app">
    <el-container>
      <el-header>
        <navbar></navbar>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'App',
  components:{
    'navbar': Navbar
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

  
</style>
