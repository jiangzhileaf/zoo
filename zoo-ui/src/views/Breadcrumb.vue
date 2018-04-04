<template>
  <div class="container" v-show="isLogin && isShow">
    <div class="title">{{$t('zoo.'+title)}}</div>
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="crumb in breadcrumbs" :key="crumb.name" :to="{ path: crumb.path }">{{$t('zoo.'+crumb.name)}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
export default {
  name: 'breadcrumb',
  computed: {
    isShow(){
      return this.$route.path !== '/' && this.$route.path !== '404'
    },
    title(){
      return this.$route.name
    },
    breadcrumbs(){
      let path = this.$route.path

      if(path == '/' || path == '/home'){
        return []
      }

      let crumbs = path.split('/')
      let curPath = '/'+crumbs[1]
      let curName = crumbs[1]
      let result = []

      result.push({name:curName,path:curPath})

      for(let i=2; i<crumbs.length; i++){
        let curCrumb = crumbs[i]
        curPath = curPath + '/' + curCrumb
        curName = curName + curCrumb.charAt(0).toUpperCase() + curCrumb.slice(1)
        result.push({name:curName,path:curPath})
      }

      return result
    },
    isLogin(){
      return this.$store.getters.isLogin
    }
  }
}
</script>

<style scoped>
  .container {
    max-width: 1000px;
    overflow: hidden;
    padding: 0 15px 0px 15px;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
  }

  .title {
    float: left;
    font-weight: bold;
    color: #606266;
  }

  .breadcrumb {
    display: none;
    float: right;
  }
</style>

