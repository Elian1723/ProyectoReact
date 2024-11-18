import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Form } from 'react-bootstrap';

export const Actividades = () => {
  const [actividades, setActividades] = useState([]);
  const [nombre, setNombre] = useState('');
  const [duracion, setDuracion] = useState('');
  
  useEffect(() => {
    const actividadesGuardadas = JSON.parse(localStorage.getItem('actividades')) || [];
    setActividades(actividadesGuardadas);
  }, []);
    
  const guardarActividades = (nuevasActividades) => {
    localStorage.setItem('actividades', JSON.stringify(nuevasActividades));
    setActividades(nuevasActividades);
  };
  
  const agregarActividad = e => {
    e.preventDefault();

    if (nombre.trim() !== '' && duracion.trim() !== '') {
      const nuevaActividad = {
        id: Date.now(),
        nombre,
        duracion,
      };
      const nuevasActividades = [...actividades, nuevaActividad];
      guardarActividades(nuevasActividades);
      setNombre('');
      setDuracion('');
    }
  };

  const eliminarActividad = (id) => {
    const nuevasActividades = actividades.filter(actividad => actividad.id !== id);
    guardarActividades(nuevasActividades);
  };

  return (
    <Container>
      <h2>Actividades</h2>
      <Form onSubmit={agregarActividad}>
        <Form.Control
          type="text"
          placeholder="Nombre de la actividad"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <Form.Control
          className='mt-2'
          type="text"
          placeholder="Duración (en horas)"
          value={duracion}
          onChange={(e) => setDuracion(e.target.value)}
        />
        <Button className='mt-2'>Agregar</Button>
      </Form>

      <div>
        <Table striped bordered hover className='mt-3'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Duración</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {actividades.map(actividad => (
              <tr key={actividad.id}>
                <td>{actividad.id}</td>
                <td>{actividad.nombre}</td>
                <td>{actividad.duracion}</td>s
                <td>
                  <Button variant="danger" onClick={() => eliminarActividad(actividad.id)}>Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};
