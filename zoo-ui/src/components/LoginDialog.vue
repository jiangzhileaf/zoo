<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px" class="login-container" @keyup.enter.native="handleSubmit">
    <h3 class="title">{{titleText}}</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="ruleForm.username" auto-complete="off" :placeholder="userPlaceholder"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="ruleForm.password" auto-complete="off" :placeholder="pwdPlaceholder"></el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="logining">{{buttonText}}</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props:{
    "title-text": {
      type: String,
      default: 'login'
    },
    "user-placeholder": {
      type: String,
      default: 'username'
    },
    "pwd-placeholder": {
      type: String,
      default: 'password'
    },
    "button-text": {
      type: String,
      default: 'login'
    },
    requestLogin: {
      type: Function,
      required: true,
    },
    loginCallback: {
      type: Function,
      required: true,
    }
  },
  data () {
    return {
      logining: false,
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods:{
    handleSubmit(ev) {
       this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.logining = true;
          var loginParams = { username: this.ruleForm.username, password: this.ruleForm.password }
          this.requestLogin(loginParams).then(data => {
            this.logining = false;
            this.loginCallback(data)
          });
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 300px;
    padding: 25px 25px 25px 25px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
</style>
