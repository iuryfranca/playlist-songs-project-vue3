<template>
  <Navbar />
  <div class="container">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>
