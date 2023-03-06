import { PlaylistDataHomeList } from './_types'
import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'

import { collection, orderBy, query, getDocs } from 'firebase/firestore'

const getCollection = (collectionPath: string) => {
  const documents = ref<PlaylistDataHomeList[] | null>(null)
  const error = ref<null | string>(null)

  // register the firestore collection reference
  let collectionRef = query(
    collection(projectFirestore, collectionPath),
    orderBy('createdAt')
  )

  const unsub = getDocs(collectionRef).then(
    (snapshotData) => {
      let results: any = []
      snapshotData.docs.map((doc) => {
        doc.data() && results.push({ ...doc.data(), id: doc.id })
      }),
        (documents.value = results)
      error.value = null
    },
    (err: any) => {
      documents.value = null
      error.value = err.message
    }
  )

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub)
  })

  return { error, documents }
}

export default getCollection
