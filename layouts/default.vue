<template>
  <div>
    <Header @loginClick="loginClick" @registerClick="registerClick" />
    <LoginModal :modalType="modalType" @loginModalSubmit="loginModalSubmit" />
    <Nuxt />
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import LoginModal from '@/components/modal/LoginModal.vue'
import jwtDecode from 'jwt-decode'

export default {
  components: {
    Header,
    LoginModal,
  },
  data() {
    return {
      showLoginModal: false,
      modalType: '',
    }
  },
  mounted() {
    if (this.$route.query.id_token && this.$route.query.refresh_token) {
      const idTokenDecode = jwtDecode(this.$route.query.id_token)
      this.$store.commit('setUserLogin', {
        id_token: this.$route.query.id_token,
        refresh_token: this.$route.query.refresh_token,
        userUid: idTokenDecode.user_id,
        userPicture: idTokenDecode.picture,
        userName: idTokenDecode.name,
      })
      window.history.replaceState(null, null, window.location.pathname)
    }
  },
  methods: {
    loginClick() {
      this.$bvModal.show('login-modal')
      this.modalType = 'login'
    },
    registerClick() {
      this.$bvModal.show('login-modal')
      this.modalType = 'register'
    },
    loginModalSubmit(data) {
      // console.log(data)
      const { modalType } = data

      // if (modalType === 'register') {
      //   this.$axios({
      //     method: 'post',
      //     baseURL:
      //       '' +
      //       process.env.firebaseApiKey,
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     data: {
      //       ...data,
      //       returnSecureToken: true,
      //     },
      //   })
      //     .then((res) => {
      //       console.log(res.data)
      //       this.$bvModal.hide('login-modal')
      //     })
      //     .catch((err) => {
      //       console.log(err.error, 'errerrerr')
      //     })
      // }

      const urlName = modalType === 'register' ? 'signUp' : 'signInWithPassword'

      this.$axios({
        method: 'post',
        baseURL: `https://identitytoolkit.googleapis.com/v1/accounts:${urlName}?key=${process.env.firebaseApiKey}`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          ...data,
          returnSecureToken: true,
        },
      })
        .then((res) => {
          console.log(res.data)
          this.$bvModal.hide('login-modal')
        })
        .catch((err) => {
          console.log(err.error, 'errerrerr')
        })
    },
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
