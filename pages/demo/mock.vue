<template>
  <div>
    <h2>mock demo</h2>
    <Album :album="{ title: '相簿名稱', description: '描述' }" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Album from '@/components/Album.vue'

export default defineComponent({
  name: 'mock',
  components: {
    Album,
  },
  mounted(): void {
    this.$axios({
      method: 'get',
      baseURL: 'http://localhost:3034/api/test',
    }).then((res: any) => console.log(res.data))
  },
})
</script>
