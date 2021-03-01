<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
const defaultLayout = 'home';
export default {
  name: "AppLayout",
  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout
      return () => import(`../Layouts/${layout}.vue`)
    }
  }
}
</script>