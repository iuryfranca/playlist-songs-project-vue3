import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'
import { collection, setDoc, doc } from 'firebase/firestore'

const useCollection = (collectionPath: any) => {
  const error = ref<null | string>(null)
  const isPending = ref(false)
  const collectionRef = doc(collection(projectFirestore, collectionPath))

  const addDoc = async (data: any) => {
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
