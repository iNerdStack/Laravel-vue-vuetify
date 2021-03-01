<template>
  <div id="app">
    <AppLayout>
      <router-view />
    </AppLayout>
  </div>
</template>

<script>
import AppLayout from './Layouts/default';
export default {
  name: 'App',
  components: { AppLayout }
}
</script>
