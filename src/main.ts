import { projectAuth } from '@/firebase/config'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import '@/styles/main.css'
import '@/styles/main.css'

let app: any
projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(store).use(router).mount('#app')
  }
})
