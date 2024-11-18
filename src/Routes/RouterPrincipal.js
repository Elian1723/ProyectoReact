import React from 'react'
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom'
import { Inicio } from '../Components/Inicio'
import { Actividades } from '../Components/Actividades'
import { Graficas } from '../Components/Graficas'
import { Error } from '../Components/Error'
import { Navbar, Nav, Container } from 'react-bootstrap'

export const RouterPrincipal = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/dashboard">NavBar</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse id="navbarNav">
                        <Nav className="me-auto">
                            <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>Inicio</NavLink>
                            <NavLink to="/dashboard/actividades" className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>Actividades</NavLink>
                            <NavLink to="/dashboard/graficas" className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>Gráficas</NavLink>
                            <Nav.Link onClick={handleLogout}>Cerrar sesión</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <section>
                    <Routes>
                        <Route path="/" element={<Inicio />}></Route>
                        <Route path="actividades" element={<Actividades />}></Route>
                        <Route path="graficas" element={<Graficas />}></Route>
                        <Route path="/*" element={<Error />}></Route>
                    </Routes>
            </section>
        </>
    )
}

