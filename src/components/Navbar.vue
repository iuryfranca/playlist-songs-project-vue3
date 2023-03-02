import { RouterLink } from 'vue-router';

<template>
  <div class="container py-4 pb-8 flex items-center">
    <nav class="flex justify-between w-full">
      <h1 class="gap-2">
        <RouterLink to="/">Playlists Songs</RouterLink>
      </h1>
      <div class="ml-auto text-sm gap-2 flex">
        <button>Logout</button>
        <RouterLink class="btn ml-auto text-sm" to="/signup">Signup</RouterLink>
        <RouterLink class="btn ml-auto text-sm" to="/login">Login</RouterLink>
      </div>
    </nav>
  </div>
</template>
