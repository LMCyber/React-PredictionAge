import { useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { NameForm } from './components/NameForm'
import { Result } from './components/Result'

function App () {
  const [name, setName] = useState('')

  return (
    <Container className='mt-3'>

      <Row className='justify-content-md-center '>
        <Col>
          <Card className=' text-center '>
            <Card.Header as='h2'>
              Age Prediction by Name
              <Card.Subtitle className='mt-2 text-secondary'>
                Predict your age introducing your name
              </Card.Subtitle>
            </Card.Header>

            <Card.Body>
              <NameForm setName={setName} />
              {name && (
                <Result name={name} setName={setName} />
              )}

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default App
