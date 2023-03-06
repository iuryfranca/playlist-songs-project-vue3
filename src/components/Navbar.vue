<template>
  <div class="container p-7 flex items-center bg-white">
    <nav class="flex justify-between w-full">
      <h2 class="gap-2 font-bold">
        <RouterLink :to="{ name: 'Home' }">Playlists Songs</RouterLink>
      </h2>
      <div class="flex gap-6 items-center font-semibold">
        <RouterLink :to="{ name: 'CreatePlaylist' }">Criar playlist</RouterLink>
      </div>
      <div class="text-sm gap-2 flex">
        <div v-if="user">
          <button @click="handleClickLogout">Logout</button>
        </div>
        <div class="ml-auto text-sm gap-2 flex" v-else>
          <RouterLink class="btn ml-auto text-sm" :to="{ name: 'Signup' }"
            >Signup</RouterLink
          >
          <RouterLink class="btn ml-auto text-sm" :to="{ name: 'Login' }"
            >Login</RouterLink
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import useLogout from '@/composables/useLogout'
import getUser from '@/composables/getUser'
import { useRouter } from 'vue-router'
import { Options } from 'vue-class-component'

Options({
  name: 'Navbar',
})

const { logout } = useLogout()
const { user } = getUser()
const router = useRouter()

const handleClickLogout = async () => {
  await logout()
  router.push('/login')
}
</script>
