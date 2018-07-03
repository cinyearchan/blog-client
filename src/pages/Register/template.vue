<template>
  <div id="register">
    <h4>用户名</h4>
    <input v-model="username" placeholder="用户名">
    <h4>密码</h4>
    <input v-model="password" placeholder="密码" type="password" @keyup.enter="onRegister">
    <el-button size="medium" @click="onRegister">立即注册</el-button>
    <p class="notice">已有账号？<router-link to="/login">立即登录</router-link></p>
  </div>
</template>
<style src="./template.less" lang="less">

</style>
<script src="./template.js">

</script>


