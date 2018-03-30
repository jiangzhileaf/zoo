<template>
  <div class="container">
    <div class="sidebar">
      <div>
        <el-menu :router="true">
          <el-menu-item index="/job/quick">快速查询</el-menu-item>
          <el-menu-item index="/job/show" >查看任务</el-menu-item>
          <el-menu-item index="/job/create">创建任务</el-menu-item>
     <!--      <el-menu-item index="3">收藏任务</el-menu-item>
          <el-menu-item index="4">错误任务</el-menu-item> -->
        </el-menu>
      </div>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style scoped>

  .container {
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
  }

  .sidebar {
    width: 200px;
   /*  margin-left: 10px;
    margin-right: 10px; */
    margin-bottom: 20px;
    float: left;
  }

  .main {
    width: 870px;
    min-width: 360px;
    margin-left: 10px;
    margin-right: 10px;
    float: left;
  }

  .el-menu {
    border-right: 0px;
  }
  
</style>