<template>
  <div class="courses">
    <div v-for="course in courses" :key="course.id">
      <h3>{{ course.name }}</h3>
      <div>{{ course.color }}</div>
    </div>
  </div>
</template>

<script>
// import * as types from '@/constants.js'

export default {
  name: 'CourseList',
  data() {
    return {
      title: '',
      message: '',
    }
  },
  props: {
    courses: {
      type: Array,
      default() {
        return []
      },
    },
  },

  computed: {
    // testTitle() {
    //   return this.$store.state.testData.aaa
    // },
  },
}
</script>
