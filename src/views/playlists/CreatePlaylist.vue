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
      <input
        class="pl-0 mt-0"
        type="file"
        required
        placeholder="Título"
        @change="handleChange"
      />
      <div v-if="fileError" class="error">{{ fileError }}</div>
    </div>

    <div v-if="error" class="error">{{ error }}</div>

    <button>Criar playlist</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref<string>('')
const description = ref<string>('')
const file = ref<any>(null)
const error = ref<null | string>(null)
const fileError = ref<null | string>(null)

const handleSubmit = () => {
  console.log(title.value, description.value)
}

// allowed file types
const typesFile = ['image/png', 'image/jpeg']

const handleChange = (e: any) => {
  const selected = e.target.files[0]

  if (selected && typesFile.includes(selected.type)) {
    file.value = selected
    fileError.value = null
  } else {
    file.value = null
    fileError.value = 'Por favor, selecione um arquivo de imagem PNG ou JPEG'
  }
}
</script>
