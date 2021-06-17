<template>
  <div class="container">
    <div>
      <Logo />
      <div>{{ title }}</div>
      <div>{{ message }}</div>
      <CourseList :courses="getCourses" />
    </div>
  </div>
</template>

<script>
import CourseList from '@/components/course_list/CourseList.vue'

export default {
  components: {
    CourseList,
  },
  data() {
    return {
      title: '',
      message: '',
    }
  },

  created() {
    // this.$axios('api/courses').then((res) => {
    //   this.$store.commit('set_courses', {
    //     ...res.data,
    //   })
    // })
  },
  mounted() {
    // this.$axios.get('http://localhost:3013').then((res) => {
    //   console.log(res.data)
    // })
  },
  async fetch(context) {
    // const { store } = context
    const result = await context.store.dispatch('get_courses')
    return result
    // return $axios('api/courses').then((res) => {
    //   store.commit('set_courses', {
    //     ...res.data,
    //   })
    // })
  },
  async asyncData(context) {
    const res = await context.$axios('/api/test')
    // console.log(res, 'ressss')
    return res.data
  },
  computed: {
    getCourses() {
      return this.$store.state.courses
    },
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
