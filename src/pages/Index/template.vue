<template>
  <div id="index">
    <section class="blog-posts">
      <router-link class="item" v-for="blog in blogs" :to="`/detail/${blog.id}`" :key="blog.id">
        <figure class="avatar">
          <img :src="blog.user.avatar" :alt="blog.user.username">
          <figcaption>{{ blog.user.username }}</figcaption>
        </figure>
        <h3>{{ blog.title }} <span> {{ blog.createAt }}</span></h3>
        <p>{{ blog.description }}</p>
      </router-link>
    </section>
    <section class="pagination">
      <el-pagination layout="prev, pager, next" :current-page="page" :total="total" @current-change="onPageChange"></el-pagination>
    </section>
  </div>
</template>
<style scoped lang="less" src="./template.less">

</style>
<script src="./template.js">

</script>


