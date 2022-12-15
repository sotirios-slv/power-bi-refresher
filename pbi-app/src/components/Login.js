import { useEffect } from 'react'
import axios from 'axios'

const Login = () => {

  useEffect(() => {
    const getData = async() => {
      const response = await axios.get('/api/index')
      console.log('Response ')
      console.log(response)
    }
    getData()
  },[])

  return (
    <div>Login</div>
  )
}

export default Login