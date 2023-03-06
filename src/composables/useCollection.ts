import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'
import { collection, setDoc, doc } from 'firebase/firestore'
import { PlaylistData } from './_types'

const useCollection = (collectionPath: string) => {
  const error = ref<null | string>(null)
  const isPending = ref(false)
  const collectionRef = doc(collection(projectFirestore, collectionPath))

  const addDoc = async (data: PlaylistData) => {
    error.value = null
    isPending.value = true

    try {
      await setDoc(collectionRef, data)
      isPending.value = false
    } catch (err: any) {
      isPending.value = false
      error.value = err.message
    }
  }

  return { error, addDoc, isPending }
}

export default useCollection
