<template>
  <div class="container">
    <el-form label-width="80px" label-position="left">
      <el-form-item label="关键字">
        <el-input placeholder="ID/Keyworkd" prefix-icon="el-icon-search"></el-input>
      </el-form-item>
      <el-form-item label="负责人">
        <el-input placeholder="" prefix-icon="el-icon-search"></el-input>
      </el-form-item>
      <el-form-item label="存储引擎">
        <el-select multiple placeholder="存储引擎">
          <el-option key="hdfs" label="hdfs" value="hdfs"></el-option>
          <el-option key="hive" label="hive" value="hive"></el-option>
          <el-option key="mysql" label="mysql" value="mysql"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search">查询</el-button>
      </el-form-item>
    </el-form>

    <hr>

    <div>
      <el-table  ref="singleTable" :data="tableData" stripe border highlight-current-row @current-change="handleCurrentChange">
      <el-table-column prop="id" label="ID" sortable></el-table-column>
      <el-table-column prop="name" label="名称" sortable></el-table-column>
      <el-table-column prop="desc" label="描述" sortable></el-table-column>
      <el-table-column prop="status" label="状态" sortable></el-table-column>
      <el-table-column prop="successTs" label="最近成功时间" sortable></el-table-column>
      <el-table-column><button>详情</button></el-table-column>
    </el-table>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        id: '123123',
        name: '测试任务',
        desc: '测试任务用于测试',
        status: '启用',
        createTs: '2018-03-05 11:42:00',
        updateTs: '2018-03-05 11:42:00'
      }, {
        id: '234234',
        name: '测试任务',
        desc: '测试任务用于测试',
        status: '启用',
        createTs: '2018-03-05 11:42:00',
        updateTs: '2018-03-05 11:42:00'
      }, {
        id: '345345',
        name: '测试任务',
        desc: '测试任务用于测试',
        status: '启用',
        createTs: '2018-03-05 11:42:00',
        updateTs: '2018-03-05 11:42:00'
      }, {
        id: '456456',
        name: '测试任务',
        desc: '测试任务用于测试',
        status: '启用',
        createTs: '2018-03-05 11:42:00',
        updateTs: '2018-03-05 11:42:00'
      }],
      currentRow: null
    }
  },
   methods: {
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
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

  .job-list {
    border: 1px solid;
    min-height: 50px;
  }
</style>