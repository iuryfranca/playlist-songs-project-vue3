<template>
  <div v-for="playlist in playlists" :key="playlist.id">
    <router-link :to="{ name: 'PlaylistDetails', params: { id: playlist.id } }">
      <div
        class="transition flex items-center p-5 rounded-lg bg-white my-4 mx-0"
      >
        <div class="max-w-[150px] max-h-[150px] overflow-hidden rounded-lg">
          <img class="block" :src="playlist.coverUrl" :alt="playlist.title" />
        </div>
        <div class="my-0 mx-7">
          <h3 class="font-semibold">{{ playlist.title }}</h3>
          <p>{{ playlist.userName }}</p>
          <p>{{ formatLongDate(playlist.createdAt) }}</p>
        </div>
        <div class="ml-auto">
          <p>{{ playlist.songs.length }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import type { PlaylistDataHomeList } from '@/composables/_types'
import { formatLongDate } from '@/libs/utils'
import { PropType } from 'vue'
import { Options } from 'vue-class-component'

Options({
  name: 'ListView',
})

defineProps({
  playlists: {
    type: Object as PropType<PlaylistDataHomeList[]>,
  },
})
</script>

<style>
.transition {
  transition: all ease 0.2s;
}

.transition:hover {
  box-shadow: 1px 2px 3px rgba(50, 50, 50, 0.1);
  transform: scale(1.02);
  transition: all ease 0.2s;
}
</style>
