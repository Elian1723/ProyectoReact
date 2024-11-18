import React from 'react'
import { Form, Container, Col, Button } from 'react-bootstrap'

export const Login = () => {
    return (
        <Container className='p-5 d-flex vh-100 flex-column justify-content-center align-items-center'>
            <h1 className='text-center'>Iniciar sesión</h1>

            <Col className='col-12 my-5' md={6} xl={5}>
                <Form >
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre de usuario:</Form.Label>
                        <Form.Control type="text" placeholder="admin" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Contraseña:</Form.Label>
                        <Form.Control type="password" placeholder="123" />
                    </Form.Group>

                    <div className='d-flex justify-content-center'>
                        <Button>Ingresar</Button>
                    </div>
                </Form>
            </Col>
        </Container>
      );
}
