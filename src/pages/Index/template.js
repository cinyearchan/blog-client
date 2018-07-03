import request from '@/pages/helpers/request.js'
import auth from '@/pages/api/auth.js'

window.request = request
window.auth = auth

export default {
  data() {
    return {
      msg: 'welcome to your vue.js app'
    }
  },
  methods: {
    onClick() {
      this.$message.error('错误提示')
    },

    onClick2() {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message.success('点了确定')
        }
      })
    }
  }
}