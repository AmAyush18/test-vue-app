<script setup>
  import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <router-view />
</template>

<script>
  export default {
    name: 'App'
  }
</script>