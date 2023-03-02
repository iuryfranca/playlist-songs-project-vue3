<template>
  <div class="mt-16">
    <form @submit.prevent="handleSubmit">
      <h3 class="font-bold">Criar conta</h3>
      <input type="text" placeholder="Nome" v-model="displayName" />
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <div v-if="error" class="error">{{ error }}</div>
      <button :disabled="isPending">
        {{ isPending ? 'Registrando...' : 'Registrar' }}
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import useSignup from '@/composables/useSignup'
import { ref } from 'vue'

const { error, signup, isPending } = useSignup()

const email = ref('')
const displayName = ref('')
const password = ref('')

const handleSubmit = async () => {
  const res = await signup({
    email: email.value,
    password: password.value,
    displayName: displayName.value,
  })
  if (!error.value) {
    console.log('User Logged in successfully')
  }
}
</script>
