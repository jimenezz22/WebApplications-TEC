<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideNav from './components/SideNav.vue'
</script>

<template>
  <SideNav />
  <div class="container-fluid p-0">
    <RouterView />
  </div>
</template>