<template>
  <div>
    <div class="">fdasf</div>
    <div>{{ testTitle }}</div>
  </div>
</template>

<script>
// import * as types from '@/constants.js'

export default {
  data() {
    return {
      title: '',
      message: '',
    }
  },
  created() {
    console.log(this.$store.state)
    this.$store.dispatch('ajaxTest')
  },

  computed: {
    testTitle() {
      return this.$store.state.testData.aaa
    },
  },
}
</script>
