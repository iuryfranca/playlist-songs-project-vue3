<template>
  <form @submit.prevent="handleSubmit">
    <h3 class="font-bold">Login</h3>
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <div v-if="error" class="error">{{ error }}</div>
    <button :disabled="isPending">
      {{ isPending ? 'Entrando...' : 'Entrar' }}
    </button>
  </form>
</template>

<script setup lang="ts">
import useLogin from '@/composables/useLogin'
import { ref } from 'vue'

const { error, login, isPending } = useLogin()

const email = ref('')
const password = ref('')

const handleSubmit = async () => {
  const res = await login({ email: email.value, password: password.value })
  if (!error.value) {
    console.log('User Logged in successfully')
  }
}
</script>
