<template>
  <login-dialog 
    :title-text="$t('zoo.login')" 
    :user-placeholder="$t('zoo.username')" 
    :pwd-placeholder="$t('zoo.password')" 
    :button-text="$t('zoo.login')" 
    :requestLogin="submit"
    :loginCallback="submitCallback">
  </login-dialog>
</template>

<script>
import { requestLogin, jump } from '../api/api'
import LoginDialog from '@/components/LoginDialog.vue'
export default {
  components:{
    'login-dialog': LoginDialog
  },
  methods: {
    submit(params){
      return requestLogin(params)
    },
    submitCallback(data) {
      let { msg, code, user } = data
      if (code === 200) {
        this.$store.commit('login',user)
        this.$router.initRouter()
        jump(this)
      } else {
        this.$message({
          message: msg,
          type: 'error'
        })
      }
    }
  }
}
</script>
