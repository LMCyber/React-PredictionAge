import { useState } from 'react'
import { Spinner } from './Spinner'
import { useResult } from '../hooks/useResult'

export const Result = ({ name }) => {
  const [loading, setLoading] = useState(false)
  const result = useResult(name, setLoading)

  return (
    <>
      {loading
        ? <Spinner />
        : (
          <>
            <p className='fs-4 fw-bold'>Name: <span className='text-uppercase fw-normal fs-5'>{result.name}</span></p>
            <p className='fs-4 fw-bold'>Age: <span className='fw-normal fs-5'>{result.age}</span></p>
          </>
          )}
    </>
  )
}
