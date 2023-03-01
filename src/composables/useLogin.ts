import { AuthSignUpProps } from './_types'
import { ref } from 'vue'
import { projectAuth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'

type AuthLoginProps = Omit<AuthSignUpProps, 'displayName'>

const error = ref<null | string>(null)

const login = async ({ email, password }: AuthLoginProps) => {
  error.value = null

  try {
    const res = await signInWithEmailAndPassword(projectAuth, email, password)
    error.value = null
    return res
  } catch (err: any) {
    console.log(err.message)
    error.value = 'Incorrect login credentials'
  }
}

const useLogin = () => {
  return { error, login }
}

export default useLogin
