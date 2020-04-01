import { useState } from 'react'

const useInput = () => {
  const [value, setValue] = useState('')

  const onChange = ({ target }) => {
    setValue(target.value)
  }

  const bind = {
    value,
    onChange,
  }

  return bind
}

export default useInput
