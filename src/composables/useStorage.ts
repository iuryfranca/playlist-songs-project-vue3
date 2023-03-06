import { projectStorage } from '@/firebase/config'
import {
  ref as refStorage,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage'
import { ref } from 'vue'
import getUser from './getUser'

const { user } = getUser()

const useStorage = () => {
  const error = ref<null | string>(null)
  const url = ref<any>(null)
  const filePath = ref<null | string>(null)

  const uploadImage = async (file: any) => {
    filePath.value = `covers/${user.value?.uid}/${file.name}`
    const storageRef = refStorage(projectStorage, filePath.value)

    try {
      await uploadBytes(storageRef, file).then(async (res) => {
        url.value = await getDownloadURL(res.ref)
      })
    } catch (err: any) {
      console.log(err.message)
      error.value = err.message
    }
  }

  return { error, filePath, url, uploadImage }
}

export default useStorage
