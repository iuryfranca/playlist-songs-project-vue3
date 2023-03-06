import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'

import { getDoc, doc, DocumentData } from 'firebase/firestore'

const getDocument = (collectionPath: string, id: string) => {
  const document = ref<DocumentData | undefined>(undefined)
  const error = ref<null | string>(null)

  const documentRef = doc(projectFirestore, collectionPath, id)

  const unsub = getDoc(documentRef).then(
    (doc: DocumentData) => {
      document.value = { ...doc.data(), id: doc.id }

      error.value = null
    },
    (err: any) => {
      document.value = undefined
      error.value = err.message
    }
  )

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub)
  })

  return { error, document }
}

export default getDocument
