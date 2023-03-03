import firebase, { initializeApp } from 'firebase/app'
import { getFirestore, serverTimestamp } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

// import 'firebase/compat/auth'
// import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB9hAMcWrx_zH-og_mIZStbUB__EyFqXuw',
  authDomain: 'playlist-songs-vue-3.firebaseapp.com',
  projectId: 'playlist-songs-vue-3',
  storageBucket: 'playlist-songs-vue-3.appspot.com',
  messagingSenderId: '412457530401',
  appId: '1:412457530401:web:394dde7d7b5f1312a31f60',
}

// init firebase
// firebase.initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig)

// init services
// const projectFirestore = firebase.firestore()
const projectFirestore = getFirestore(app)

// const projectAuth = firebase.auth()
const projectAuth = getAuth()

const projectStorage = getStorage(app)

// timestamp
// const timestamp = firebase.firestore.FieldValue.serverTimestamp
const timestamp = serverTimestamp()

export { projectFirestore, projectAuth, projectStorage, timestamp }
