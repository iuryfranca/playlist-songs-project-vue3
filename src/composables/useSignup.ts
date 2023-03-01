import { ref } from 'vue'
import { projectAuth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { AuthSignUpProps } from './_types'

const error = ref(null)
const isPending = ref(false)

const signup = async ({ email, password, displayName }: AuthSignUpProps) => {
  error.value = null
  isPending.value = true

  try {
    const res = await createUserWithEmailAndPassword(
      projectAuth,
      email,
      password
    ).then((res) => {
      if (res) {
        updateProfile(res.user, {
          displayName: displayName,
        })
        isPending.value = false
        error.value = null
      } else {
        isPending.value = false
        throw new Error('Algo deu errado na hora de criar sua conta :(')
      }
    })

    return res
  } catch (err: any) {
    console.log(err.message)
    error.value = err.message
  }
}

const useSignup = () => {
  return { error, signup, isPending }
}

export default useSignup
