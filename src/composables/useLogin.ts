import { AuthSignUpProps } from './_types'
import { ref } from 'vue'
import { projectAuth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'

type AuthLoginProps = Omit<AuthSignUpProps, 'displayName'>

const error = ref<null | string>(null)
const isPending = ref(false)

const login = async ({ email, password }: AuthLoginProps) => {
  error.value = null
  isPending.value = true

  try {
    const res = await signInWithEmailAndPassword(projectAuth, email, password)
    error.value = null
    isPending.value = false

    return res
  } catch (err: any) {
    isPending.value = false
    error.value = err.message
  }
}

const useLogin = () => {
  return { error, login, isPending }
}

export default useLogin
