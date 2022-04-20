import { useEffect, useState } from 'react'
import { getResult } from '../helpers/getResult'

export const useResult = (name, setLoading) => {
  const [result, setResult] = useState({})

  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      const data = await getResult(name)
      setResult(data)
    }

    getData()
    setLoading(false)
  }, [name])

  return result
}
