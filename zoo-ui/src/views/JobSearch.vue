<template>
  <div class="container" v-loading.fullscreen.lock="loading">
    <div class="form-container">
      <el-form label-width="70px" label-position="left" size="small">
        <el-form-item label="关键字">
          <el-input placeholder="ID/Keyworkd" prefix-icon="el-icon-search"></el-input>
        </el-form-item>
        <el-form-item label="负责人">
          <el-input placeholder="" prefix-icon="el-icon-search"></el-input>
        </el-form-item>
        <div class="horizontal-rule"></div>
        <el-form-item label="读取对象">
          <el-input placeholder="" prefix-icon="el-icon-search"></el-input>
        </el-form-item>
        <el-form-item label="写入对象">
          <el-input placeholder="" prefix-icon="el-icon-search"></el-input>
        </el-form-item>
        <div class="horizontal-rule"></div>
        <el-form-item label="业务组">
          <el-select multiple placeholder="业务组">
            <el-option key="freshman" label="freshman" value="freshman"></el-option>
            <el-option key="shark" label="shark" value="shark"></el-option>
            <el-option key="super" label="super" value="superboy"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
           <el-select placeholder="状态">
            <el-option key="启动" label="启动" value="启动"></el-option>
            <el-option key="停用" label="停用" value="停用"></el-option>
            <el-option key="待审批" label="待审批" value="待审批"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="周期">
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
      </el-form>
    </div>

    <div class="job-container">
      <!-- <el-table ref="singleTable" :data="tableData" stripe border highlight-current-row @current-change="handleCurrentChange">
        <el-table-column prop="id" label="ID" sortable></el-table-column>
        <el-table-column prop="name" label="名称" sortable></el-table-column>
        <el-table-column prop="desc" label="描述" sortable></el-table-column>
        <el-table-column prop="status" label="状态" sortable></el-table-column>
        <el-table-column><button>详情</button></el-table-column>
      </el-table> -->
      <div class="job-item" v-for="job in joblist" :key="job.id">
        <div class="job-btn-group">
            <i class="job-btn el-icon-star-off"></i>
            <i class="job-btn el-icon-view"></i>
            <i class="job-btn el-icon-edit-outline"></i>
            <i class="job-btn el-icon-delete"></i>
        </div>
        <div class="job-info">
          <div class="job-info-item">
            <span class="job-name"><a>{{job.name}}</a></span>
            <span class="job-status">{{job.status}}</span>
          </div>
          <div class="job-info-item">
            <div>#{{job.id}}  {{job.user}}  {{job.group}} </div>
            <div class="job-desc">{{job.desc}}</div>
          </div>
        </div>  
      </div>

      <div style="text-align:center;color:#aaaaaa">
        下拉刷新
      </div>
    </div>

    <!-- <div class="page-container">
      <el-pagination class="page"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="50"
        background
        layout="prev, pager, next, sizes"
        :total="200">
      </el-pagination>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      joblist: [{
        id: '123123',
        name: '[实时表ETL拉取同步]-default-yy_streamnodetask_original',
        desc: '[实时表ETL拉取同步]-default-yy_streamnodetask_original',
        status: '已启用',
        user: '叶植江',
        group: 'shark',
        isFav: false,
      }, {
        id: '234234',
        name: '测试任务',
        desc: '测试任务用于测试,测试任务用于测试,测试任务用于测试,测试任务用于测试,测试任务用于测试,测试任务用于测试,测试任务用于测试,测试任务用于测试,测试任务用于测试测试任务用于测试,测试任务用于测试',
        status: '已启用',
        user: '叶植江',
        group: 'shark',
        isFav: true,
      }, {
       id: '345345',
        name: '测试任务',
        desc: '测试任务用于测试',
        status: '已启用',
        user: '叶植江',
        group: 'shark',
        isFav: false,
      }, {
     id: '456456',
        name: '测试任务',
        desc: '测试任务用于测试',
        status: '已启用',
        user: '叶植江',
        group: 'shark',
        isFav: false,
      }, {
     id: '000030',
        name: '测试任务',
        desc: '测试任务用于测试',
        status: '已启用',
        user: '叶植江',
        group: 'shark',
        isFav: false,
      }, {
     id: '100000',
        name: '测试任务',
        desc: '测试任务用于测试',
        status: '已启用',
        user: '叶植江',
        group: 'shark',
        isFav: false,
      }, {
     id: '005000',
        name: '测试任务',
        desc: '测试任务用于测试',
        status: '已启用',
        user: '叶植江',
        group: 'shark',
        isFav: false,
      }, {
     id: '000600',
        name: '测试任务',
        desc: '测试任务用于测试',
        status: '已启用',
        user: '叶植江',
        group: 'shark',
        isFav: false,
      }, {
     id: '070000',
        name: '测试任务',
        desc: '测试任务用于测试',
        status: '已启用',
        user: '叶植江',
        group: 'shark',
        isFav: false,
      }, {
     id: '000009',
        name: '测试任务',
        desc: '测试任务用于测试',
        status: '已启用',
        user: '叶植江',
        group: 'shark',
        isFav: false,
      }],
      loading: false,
      lastScroll: 0
    }
  },
  methods: {
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    }
  },
  methods: {
    load() {
      this.loading = true
      this.lastScroll = document.documentElement.scrollTop || document.body.scrollTop
      setTimeout(() => {this.loading = false}, 2000)
    },
    onScroll() {
      var sHeight = document.documentElement.scrollTop || document.body.scrollTop
      var wHeight = document.documentElement.clientHeight;
      var dHeight = document.documentElement.offsetHeight;
      if( sHeight > this.lastScroll && dHeight - ( sHeight + wHeight ) < 100) {
          this.load()
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  }
}
</script>

<style scoped>

  .container {
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
  }

  .form-container {
    /* max-width: 500px; */
    overflow: hidden;
  }

  .el-form-item {
    width: 285px;
    float: left;
    margin-left: 30px;
  }

  .horizontal-rule {
    float: left;
    width: 100%;
  }

  .job-container {
    padding: 20px;
    border: #b6c7d1 1px solid;
    border-radius: 5px;
  }

  a:hover, a:focus {
    color: #005580;
    text-decoration: underline;
  }

  .job-name {
    font-size: 120%;
    cursor: pointer;
    color: #409EFF;
  }

  .job-status {
    font-size: 90%;
    color: #fff;
    background-color: #5cb85c;
    border-radius: 2px;
    padding: 1px 3px;
    font-weight: bold;
    text-align: center;
  }

  .job-item {
    border-bottom: #b6c7d1 1px solid;
    margin-bottom: 20px;
    overflow: hidden;
  }

  .job-item-last {
    border-bottom: 0px;
  }

  .job-info-item {
    padding-bottom: 10px;
  }

  .job-info {
    float: left;
  }

  .job-desc {
    font-size: 90%;
    color: #5a5a5a;
    max-width: 500px;
  }

  @media (max-width: 768px) {
    .job-btn-group {
      display: none;
    }
  }

  .job-btn-group {
    float: right;
    padding-top: 10px;
  }

  .job-btn {
    margin-right: 10px;
  }
</style>