<template>
  <div class="error" v-if="error">{{ error }}</div>
  <div v-if="playlist" class="playlist-details mt-16">
    <!-- playlist information -->
    <div class="playlist-info">
      <div class="cover">
        <img :src="playlist.coverUrl" />
      </div>
      <h2>{{ playlist.title }}</h2>
      <p class="username">Created by {{ playlist.userName }}</p>
      <p class="description">{{ playlist.description }}</p>
      <button v-if="ownership">Delete Playlist</button>
    </div>

    <!-- song list -->
    <div class="song-list">
      <p>song list here</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, computed } from 'vue'
import getDocument from '@/composables/getDocument'
import getUser from '@/composables/getUser'

const props = defineProps({
  id: {
    type: String,
    default: '',
  },
})
const { id } = props

const { user } = getUser()
const ownership = computed(() => {
  return playlist.value && user.value && user.value.uid == playlist.value.userId
})

const { document: playlist, error } = getDocument('playlists', id)
</script>

<style>
.playlist-details {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 80px;
}
.cover {
  overflow: hidden;
  border-radius: 20px;
  position: relative;
  height: 20rem;
}
.cover img {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.playlist-info {
  text-align: center;
}
.playlist-info h2 {
  text-transform: capitalize;
  font-size: 28px;
  margin-top: 20px;
}
.playlist-info p {
  margin-bottom: 20px;
}
.username {
  color: #999;
}
.description {
  text-align: left;
}
</style>
