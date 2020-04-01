import { useState, useEffect } from 'react'
import api from '../utils/api'

const useGet = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    void (async () => {
      const { data } = await api()
      setData(data)
    })().catch(console.error)
  }, [setData])

  const loading = data === null

  return {
    loading,
    data,
  }
}

export default useGet
