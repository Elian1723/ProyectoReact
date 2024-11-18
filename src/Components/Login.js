import React, { useState } from 'react'
import { Form, Container, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [usuario, setUsuario] = useState("");
    const [clave, setClave] = useState("");
    const navigate = useNavigate();

    const ValidarUsuario = e => {
        e.preventDefault();

        if (usuario.trim() === "admin" && clave.trim() === "123") {
            navigate("/dashboard");
        }
        else {
            alert("Credenciales incorrectas");

            document.querySelector("#inputClave").focus();
        }
    }

    return (
        <Container className='mt-5 pt-5 d-flex flex-column align-items-center'>
            <h1 className='text-center'>Iniciar sesión</h1>

            <Col className='col-12 my-5' md={6} xl={5}>
                <Form onSubmit={ValidarUsuario}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre de usuario:</Form.Label>
                        <Form.Control id='inputUsuario' type="text" placeholder="admin" value={usuario} onChange={e => setUsuario(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Contraseña:</Form.Label>
                        <Form.Control id='inputClave' type="password" placeholder="123" value={clave} onChange={e => setClave(e.target.value)} />
                    </Form.Group>

                    <div className='d-flex justify-content-center'>
                        <Button type='submit'>Ingresar</Button>
                    </div>
                </Form>
            </Col>
        </Container>
    );
}