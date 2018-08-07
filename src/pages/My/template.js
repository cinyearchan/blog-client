import blog from '@/pages/api/blog'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      blogs: [],
      // user: {},
      page: 1,
      total: 0,
      userId: null
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  created() {
    
    this.page = parseInt(this.$route.query.page) || 1
    blog.getBlogsByUserId(this.user.id, { page: this.page }).then(res => {
      this.page = res.page
      this.total = res.total
      this.blogs = res.data
      
    })
  },

  methods: {
    splitDate(dateStr) {
      let dateObj = typeof dateStr === 'object' ? dateStr : new Date(dateStr)
      return {
        date: dateObj.getDate(),
        month: dateObj.getMonth() + 1,
        year: dateObj.getFullYear()
      }
    },

    async onDelete(blogId) {
      await this.$confirm('此操作将永久删除该文件，是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      await blog.deleteBlog({blogId})
      this.$message.success('删除成功')
      this.blogs = this.blogs.filter(blog => blog.id != blogId)
    },

    onPageChange(newPage) {
      blog.getBlogsByUserId(this.user.id, { page: newPage }).then(res => {
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        this.$router.push({ path: "/my", query: { page: newPage } })
      })
    }
  }
}