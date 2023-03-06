<template>
  <div class="home">
    <div v-if="error" class="error">Não foi possível carregar os dados</div>
    <div v-if="documents">
      <div v-for="doc in documents" :key="doc.id">{{ doc.title }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import getCollection from '@/composables/getCollection'

const { error, documents } = getCollection('playlists')
</script>
