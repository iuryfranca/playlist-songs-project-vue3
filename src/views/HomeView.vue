<template>
  <div class="home">
    <div v-if="error" class="error">Não foi possível carregar os dados</div>
    <div v-if="documents">
      <ListView :playlists="documents" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ListView from '@/components/ListView.vue'
import getCollection from '@/composables/getCollection'

const { error, documents } = getCollection('playlists')
</script>
