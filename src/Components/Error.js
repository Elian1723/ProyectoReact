import React from 'react'
import { Col, Container } from 'react-bootstrap';
import errorImage from '../assets/error.png';

export const Error = () => {
    return (
        <Container className='mt-5 d-flex flex-column align-items-center'>
            <img src={errorImage} alt='error image' className='w-50 mb-3' />
            <Col className='col-12' sm={8} md={6} xxl={5}>
                <div class="alert alert-danger" role="alert">
                    Ocurrió un error al procesar la aplicación
                </div>
            </Col>
        </Container>
    );
}
