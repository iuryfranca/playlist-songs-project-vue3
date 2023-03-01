import { ref } from 'vue'
import { projectAuth } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

// refs
const user = ref(projectAuth.currentUser)

// auth changes
onAuthStateChanged(projectAuth, (_user) => {
  console.log('User state change. Current user is:', _user)
  user.value = _user
})

const getUser = () => {
  return { user }
}

export default getUser
