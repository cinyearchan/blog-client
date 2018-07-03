import { mapActions } from 'vuex'

export default {
  data () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    ...mapActions(['login']),
    onLogin() {
      console.log(this.username)
      this.login({ username: this.username, password: this.password }).then(() => {
        this.$router.push({ path: '/' })
      })
    }
  }
}