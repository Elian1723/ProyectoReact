import React from 'react'
import { Container } from 'react-bootstrap'
import bienvenidaImage from '../assets/welcome.svg'

export const Inicio = () => {
  return (
    <Container className='mt-5 pt-5 d-flex justify-content-center align-items-center'>
        <img src={bienvenidaImage} alt='bienvenida' className='mt-5 w-50' />
    </Container>
  );
}
