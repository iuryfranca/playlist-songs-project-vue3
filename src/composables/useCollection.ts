import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'
import { collection, setDoc, addDoc as addDocF, doc } from 'firebase/firestore'
import { PlaylistData } from './_types'

const useCollection = (collectionPath: string) => {
  const error = ref<null | string>(null)
  const isPending = ref(false)
  // const documentRef = doc(collection(projectFirestore, collectionPath))
  const collectionRef = collection(projectFirestore, collectionPath)

  const addDoc = async (data: PlaylistData) => {
    error.value = null
    isPending.value = true

    return await addDocF(collectionRef, data)
      .then((res) => res)
      .catch((err: any) => {
        error.value = err.message
      })
      .finally(() => {
        isPending.value = false
      })
  }

  return { error, addDoc, isPending }
}

export default useCollection
