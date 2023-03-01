import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

import { collection, addDoc as addDocFirestore } from 'firebase/firestore'

const useCollection = (collectionPath: any) => {
  const error = ref<null | string>(null)
  const isPending = ref(false)

  const addDoc = async (data: any) => {
    error.value = null
    isPending.value = true

    try {
      await addDocFirestore(collection(projectFirestore, collectionPath), data)
      isPending.value = false
    } catch (err: any) {
      console.log(err.message)
      isPending.value = false
      error.value = 'could not send the message'
    }
  }

  return { error, addDoc, isPending }
}

export default useCollection
