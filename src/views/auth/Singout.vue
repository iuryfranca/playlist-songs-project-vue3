<template>
  <div class="mt-16">
    <form @submit.prevent="handleSubmit">
      <h3 class="font-bold">Sair da conta</h3>
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <div v-if="error" class="error">{{ error }}</div>
      <button :disabled="isPending">
        {{ isPending ? 'Saindo...' : 'Logout' }}
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import useLogout from '@/composables/useLogout'
import { ref } from 'vue'

const { error, logout, isPending } = useLogout()

const email = ref('')
const password = ref('')

const handleSubmit = async () => {
  const res = await logout()
  if (!error.value) {
    console.log('User Logged in successfully')
  }
}
</script>
