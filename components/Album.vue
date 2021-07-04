<template>
  <div>
    <div>{{ album.title }}</div>
    <div @click="click(1)">{{ album.description }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { Album } from 'model/Album'

export default defineComponent({
  name: 'album',
  props: {
    album: {
      type: Object as PropType<Album>,
      required: true,
    },
  },
  mounted() {},
  methods: {
    click(p: string) {
      console.log(p)
    },
  },
})
</script>
