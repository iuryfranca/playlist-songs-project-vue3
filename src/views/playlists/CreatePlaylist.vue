<template>
  <form class="max-w-[450px]" @submit.prevent="handleSubmit">
    <h3 class="font-bold">Criar nova playlist</h3>
    <input type="text" required placeholder="Título" v-model="title" />
    <textarea
      required
      placeholder="Descrição"
      rows="6"
      v-model="description"
    ></textarea>
    <div class="mt-8">
      <label style="color: #a9a9a9">Carregar imagem da playlist</label>
      <input class="pl-0 mt-0" type="file" required placeholder="Título" />
    </div>

    <div v-if="error" class="error">{{ error }}</div>

    <button>Criar playlist</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('')
const description = ref('')

const error = ref('')

const handleSubmit = () => {
  console.log(title.value, description.value)
}
</script>
