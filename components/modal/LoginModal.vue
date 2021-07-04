<template>
  <b-modal id="login-modal" ref="login-modal" hide-footer :title="modalTitle">
    <div class="d-block">
      <input type="text" placeholder="Your email" v-model="email" />
      <input type="text" placeholder="Your password" v-model="password" />
    </div>
    <b-button class="mt-3" variant="outline-danger" block @click="closeModal">
      Close Me
    </b-button>
    <b-button
      class="mt-2"
      variant="outline-warning"
      block
      @click="loginModalSubmit"
    >
      {{ modalTitle }}
    </b-button>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    modalType: {
      type: String,
      default: '',
    },
  },
  computed: {
    modalTitle() {
      return this.modalType === 'login' ? '登入' : '註冊'
    },
  },
  methods: {
    loginModalSubmit() {
      this.$emit('loginModalSubmit', {
        modalType: this.modalType,
        name: this.name,
        email: this.email,
        password: this.password,
      })
      this.closeModal()
    },
    closeModal() {
      this.email = ''
      this.password = ''
      this.$refs['login-modal'].hide()
    },
  },
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  .backdrop {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }
}
</style>
