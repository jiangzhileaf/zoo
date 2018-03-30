<template>
  <div class="middle">
    <div>
        <h1 class="bigText">{{message}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    "message": {
      type: String,
      default: 'ERROR'
    }
  }
}
</script>

<style scoped>
.middle {
  text-align: center;
}

.bigText {
  font-size: 500%;
}
</style>
