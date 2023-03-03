import { RouterLink } from 'vue-router';

<template>
  <div class="container py-4 pb-8 flex items-center">
    <nav class="flex justify-between w-full">
      <h1 class="gap-2">
        <RouterLink to="/">Playlists Songs</RouterLink>
      </h1>
      <div class="ml-auto text-sm gap-2 flex">
        <div v-if="user">
          <button @click="handleClickLogout">Logout</button>
        </div>
        <div class="ml-auto text-sm gap-2 flex" v-else>
          <RouterLink class="btn ml-auto text-sm" to="/signup"
            >Signup</RouterLink
          >
          <RouterLink class="btn ml-auto text-sm" to="/login">Login</RouterLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import useLogout from '@/composables/useLogout'
import getUser from '@/composables/getUser'

import { useRouter } from 'vue-router'

const { logout } = useLogout()
const { user } = getUser()
const router = useRouter()

const handleClickLogout = async () => {
  await logout()
  router.push('/login')
}
</script>
