<script setup>
  import Header from './components/Header.vue';
</script>

<template>
  <div class="flex flex-col">
    <div class="h-[60px] flex-shrink-0">
      <Header />
    </div>
    <div class="flex-1">
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>