import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'

import { collection, onSnapshot, orderBy, query, doc } from 'firebase/firestore'

const getCollection = (collectionPath: any) => {
  const documents = ref<any>(null)
  const error = ref<null | string>(null)

  // register the firestore collection reference
  let collectionRef = query(
    collection(projectFirestore, collectionPath),
    orderBy('createdAt')
  )

  console.log('collectionRef', collectionRef)

  const unsub = onSnapshot(doc(projectFirestore, collectionPath), (snap) => {
    let results: any = []
    console.log('snap.data()', snap.data())
  })

  // const unsubEx = collectionRef.onSnapshot(
  //   (snap) => {
  //     let results: any = []
  //     snap.docs.forEach((doc) => {
  //       // must wait for the server to create the timestamp & send it back
  //       doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
  //     })

  //     // update values
  //     documents.value = results
  //     error.value = null
  //   },
  //   (err: any) => {
  //     console.log(err.message)
  //     documents.value = null
  //     error.value = 'could not fetch the data'
  //   }
  // )

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub())
  })

  return { error, documents }
}

export default getCollection
