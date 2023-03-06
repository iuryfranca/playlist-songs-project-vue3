<template>
  <div>
    <p>Id que recebeu: {{ id }}</p>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'

defineProps(['id'])
</script>
