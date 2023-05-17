import axios from "axios"

export const SignInUser = async (data) => {
    try {
      const res = await axios.post('/login', data)
      localStorage.setItem('token', res.data.token)
      return res.data.user
    } catch (error) {
      throw error
    }
  }
  
  export const RegisterUser = async (data) => {
    try {
      const res = await axios.post('/user', data)
      return res.data
    } catch (error) {
      throw error
    }
  }
  
  export const CheckSession = async () => {
    try {
      const res = await axios.get('/session')
      return res.data
    } catch (error) {
      throw error
    }
  }
  