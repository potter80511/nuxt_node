<template>
  <div class="container">
    <div>
      <Logo />
      <div>{{ title }}</div>
      <div>{{ message }}</div>
      <h1 class="title">nuxt_node</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const res = await context.$axios('/api/test')
    console.log(res, 'ressss')
    return res.data
  },
  data() {
    return {
      title: '',
      message: '',
    }
  },
  created() {
    // this.$axios('/api/test').then((res) => {
    //   console.log(res.data)
    //   const { title, message } = res.data
    //   this.title = title
    //   this.message = message
    // })
  },
  mounted() {
    this.$axios.get('http://localhost:3013').then((res) => {
      console.log(res.data)
    })
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
