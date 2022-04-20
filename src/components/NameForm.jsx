import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export const NameForm = ({ setName }) => {
  const [formValue, setFormValue] = useState('')
  const [visible, setVisible] = useState(false)

  const handlInputChange = (e) => {
    setFormValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formValue.trim().length > 3) {
      setName(formValue)
      setVisible(true)
      setFormValue('')
    }
  }

  const handleReset = () => {
    setName('')
    setVisible(false)
  }

  return (
    <>
      <Form onSubmit={handleSubmit} className='mb-3'>
        <Form.Group className='mb-3'>
          <Form.Label as='h3'>Enter Your Name</Form.Label>

          <Form.Control
            type='text'
            placeholder='Name'
            value={formValue}
            onChange={handlInputChange}
          />
        </Form.Group>

        <Button type='submit'>Calculate</Button>
        <Button onClick={handleReset} variant='danger' className='m-2'>Reset</Button>
      </Form>

      {visible && (
        <hr />
      )}
    </>
  )
}
