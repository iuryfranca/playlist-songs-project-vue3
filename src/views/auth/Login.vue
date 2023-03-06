<template>
  <div class="mt-16">
    <form @submit.prevent="handleSubmit">
      <h3 class="font-bold">Login</h3>
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <div v-if="error" class="error">{{ error }}</div>
      <button :disabled="isPending">
        {{ isPending ? 'Entrando...' : 'Entrar' }}
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import useLogin from '@/composables/useLogin'
import { ref } from 'vue'
import { Options } from 'vue-class-component'

Options({
  name: 'Login',
})

const { error, login, isPending } = useLogin()

const email = ref('')
const password = ref('')

const handleSubmit = async () => {
  await login({ email: email.value, password: password.value })
  if (!error.value) {
    alert('User Logged in successfully')
  }
}
</script>
