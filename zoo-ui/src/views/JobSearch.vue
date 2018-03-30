<template>
  <div>
    <el-form label-width="80px" label-position="left">
      <el-form-item label="关键字">
        <el-input placeholder="ID/Keyworkd" prefix-icon="el-icon-search"></el-input>
      </el-form-item>

      <el-form-item label="负责人">
        <el-input placeholder="" prefix-icon="el-icon-search"></el-input>
      </el-form-item>
      <el-form-item label="读取对象">
        <el-input placeholder="" prefix-icon="el-icon-search"></el-input>
      </el-form-item>
      <el-form-item label="写入对象">
        <el-input placeholder="" prefix-icon="el-icon-search"></el-input>
      </el-form-item>
      <el-form-item>
        <el-select multiple placeholder="业务组">
          <el-option key="freshman" label="freshman" value="freshman"></el-option>
          <el-option key="shark" label="shark" value="shark"></el-option>
          <el-option key="super" label="super" value="superboy"></el-option>
        </el-select>
        <el-select placeholder="状态">
          <el-option key="启动" label="启动" value="启动"></el-option>
          <el-option key="停用" label="停用" value="停用"></el-option>
          <el-option key="待审批" label="待审批" value="待审批"></el-option>
        </el-select>
        <el-select placeholder="周期">
          <el-option key="单次" label="单次" value="单次"></el-option>
          <el-option key="分钟" label="分钟" value="分钟"></el-option>
          <el-option key="小时" label="小时" value="小时"></el-option>
          <el-option key="天" label="天" value="天"></el-option>
          <el-option key="周" label="周" value="周"></el-option>
          <el-option key="月" label="月" value="月"></el-option>
          <el-option key="年" label="年" value="年"></el-option>
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