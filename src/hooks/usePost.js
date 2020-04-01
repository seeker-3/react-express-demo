import { useState } from 'react'
import api from '../utils/api'

const usePost = () => {
  const [status, setStatus] = useState(null)

  const post = data => {
    void (async () => {
      const res = await api.post('', { data })
      setStatus(res.data)
    })().catch(console.error)
  }

  return [status, post]
}

export default usePost
