import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const Graficas = () => {
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    const actividadesGuardadas = JSON.parse(localStorage.getItem('actividades')) || [];
    setActividades(actividadesGuardadas);
  }, []);

  const barData = {
    labels: actividades.map(actividad => actividad.nombre),
    datasets: [
      {
        label: 'Duración (Horas)',
        data: actividades.map(actividad => actividad.duracion),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      }
    ]
  };


  return (
    <Container>
      <h2>Gráficas de Actividades</h2>
      {actividades.length > 0 ? (
        <Bar data={barData} />
      ) : (
        <p>No hay actividades para mostrar en la gráfica.</p>
      )}
    </Container>
  );
};
