import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

import { collection, addDoc as addDocFirestore } from 'firebase/firestore'

const useCollection = (collectionPath: any) => {
  const error = ref<null | string>(null)

  const addDoc = async (data: any) => {
    error.value = null

    try {
      await addDocFirestore(collection(projectFirestore, collectionPath), data)
    } catch (err: any) {
      console.log(err.message)
      error.value = 'could not send the message'
    }
  }

  return { error, addDoc }
}

export default useCollection
