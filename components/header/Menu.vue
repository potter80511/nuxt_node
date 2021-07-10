<template>
  <div class="menu">
    <div v-if="!isUserLogin" class="navbar-item">
      <button type="button" class="login" @click="$emit('loginClick')">
        登入
      </button>
      <button type="button" class="register" @click="$emit('registerClick')">
        註冊
      </button>
    </div>
    <div v-else class="navbar-item">
      <span>
        <img :src="userPicture" /><span>{{ userName }}</span>
      </span>
      <button type="button" class="logout">登出</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  computed: {
    userName() {
      return this.$store.state.userName
    },
    userPicture() {
      return !this.$store.state.userPicture
        ? 'https://via.placeholder.com/150'
        : this.$store.state.userPicture
    },
    isUserLogin() {
      return this.$store.state.isUserLogin
    },
  },
}
</script>

<style lang="scss" scoped>
.menu {
  a {
    color: #888;
    text-decoration: none;
    &:not(:last-child) {
      margin-right: 5px;
    }
  }
}
</style>
