// import { useEffect } from 'react'
import axios from 'axios'

const Login = () => {

  const handleLogin = () => {
    console.log('Click')
    const getData = async() => {
      const response = await axios.get('/api')
      console.log('Response ')
      console.log(response)
    }
    getData()
  }

  return (
    <div>
      <button
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  )
}

export default Login