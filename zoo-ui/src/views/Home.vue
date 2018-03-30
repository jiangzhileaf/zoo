<template>
  <div>
   <div>
      <div class="carousel">
        <el-carousel indicator-position="outside" height="500px">
          <el-carousel-item v-for="item in 3" :key="item">
            <img v-bind:src='"../assets/img/carousel"+item+".png"'>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="card-container">
      <div class="card-item" v-for="name in cardNames" :key="name" >
        <el-card class="card">
          <img v-bind:src='"../assets/img/card-"+name+".png"' class="image">
          <div>
            <span>{{$t('desc.'+name)}}</span>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardNames:["hadoop","hive","flume","storm","spark","kafka"]
    }
  }
}
</script>

<style scoped>
  .carousel {
    margin-bottom: 60px;
    /* background-color: #5a5a5a; */
  }

  .el-carousel__item img {
    max-height: 100%;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  .el-carousel__container {
    height: 500px
  }

  .card-container {
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
  }

  .card {
    min-height: 440px;
  }

  .card-item {
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 20px;
    float: left;
    width: 350px;
    min-height: 450px;
  }

  .image {
    height: 300px;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  @media (max-width: 1160px) {
    .card-container {
      max-width: 768px;
    }
  }

  @media (max-width: 775px) {
    .card-container {
      max-width: 360px;
    }
  }

</style>