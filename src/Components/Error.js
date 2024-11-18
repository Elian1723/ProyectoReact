import React from 'react'
import { Col, Container } from 'react-bootstrap';
import errorImage from '../assets/error.png';

export const Error = () => {
    return (
        <Container className='vh-100 d-flex flex-column justify-content-center align-items-center'>
            <img src={errorImage} alt='error image' className='w-50' />
            <Col className='col-12' sm={8} md={6} xxl={5}>
                <div class="alert alert-danger" role="alert">
                    Ocurrió un error al procesar la aplicación
                </div>
            </Col>
        </Container>
    );
}
