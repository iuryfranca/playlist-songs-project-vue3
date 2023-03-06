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

    <button>{{ !isPending ? 'Criar playlist' : 'Criando playlist...' }}</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useStorage from '@/composables/useStorage'
import useCollection from '@/composables/useCollection'
import getUser from '@/composables/getUser'
import { timestampNow } from '@/firebase/config'

const { filePath, uploadImage, url } = useStorage()
const { addDoc, error } = useCollection('playlists')
const { user } = getUser()

const title = ref<string>('')
const description = ref<string>('')
const file = ref<any>(null)
const fileError = ref<null | string>(null)
const isPending = ref(false)

const handleSubmit = async () => {
  isPending.value = true
  await uploadImage(file.value)
  await addDoc({
    title: title.value,
    description: description.value,
    userId: user.value?.uid,
    userName: user.value?.displayName,
    coverUrl: url.value,
    filePath: filePath.value,
    songs: [],
    createdAt: timestampNow,
  })
  isPending.value = false
  if (!error.value) {
    console.log('Playlist Criada')
  } else {
    console.log('Alguma coisa de errado aconteceu')
  }
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
