import marked from 'marked'
import blog from '@/pages/api/blog'

export default {
  data() {
    return {
      title: '',
      rowContent: '',
      user: {},
      createdAt: ''
    }
  },
  computed: {
    markdown() {
      return marked(this.rowContent)
    }
  },
  created() {
    this.blogId = this.$route.params.blogId
    blog.getDetail({ blogId: this.blogId }).then(res => {
      this.title = res.data.title
      this.rowContent = res.data.content
      this.createdAt = res.data.createdAt
      this.user = res.data.user
    })
  }
}