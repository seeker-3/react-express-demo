import React, { useRef } from 'react'
import Button from '../components/button'
import useGet from '../hooks/useGet'
import usePost from '../hooks/usePost'
import useInput from '../hooks/useInput'
import api from '../utils/api'

export default () => {
  const inputRef = useRef()
  const bindInput = useInput()
  const { loading, error: getError, data } = useGet()
  const [status, post] = usePost()

  const handlePost = e => {
    post(inputRef.current.value)
  }

  if (loading) return <p>loading...</p>

  return (
    <>
      <p>{data}</p>
      <p>try posting</p>
      <input ref={inputRef} type="text" {...bindInput} />
      <button onClick={handlePost}>post</button>
      {status === null ? null : <p>reponse: {status}</p>}
    </>
  )
}
