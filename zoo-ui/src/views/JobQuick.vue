<template>
<el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="业务组">
    <el-select placeholder="业务组">
      <el-option key="spark" label="spark" value="spark"></el-option>
      <el-option key="hive" label="hive" value="hive"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="计算引擎">
    <el-select placeholder="计算引擎">
      <el-option key="spark" label="spark" value="spark"></el-option>
      <el-option key="hive" label="hive" value="hive"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="Sql">
    <el-input
      type="textarea"
      :rows="5">
    </el-input>
    <el-button @click="addJobTrigger">添加udf</el-button>
    <el-button @click="addTimeTrigger">添加时间</el-button>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form-item>
</el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
}
</style>