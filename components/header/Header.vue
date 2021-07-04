<template>
  <div class="header">
    <h1>header</h1>
    <Menu
      @loginClick="$emit('loginClick')"
      @registerClick="$emit('registerClick')"
    />
  </div>
</template>

<script>
import Menu from '@/components/header/Menu.vue'

export default {
  name: 'Header',
  components: {
    Menu,
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  background: white;
  box-shadow: 0 5px 5px rgba(77, 77, 77, 0.3);
  width: 100%;
  padding: 5px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: #888;
  }
}
</style>
