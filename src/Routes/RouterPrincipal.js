import React from 'react'
import {Routes, Route, NavLink, BrowserRouter} from 'react-router-dom'
import { Inicio } from '../Components/Inicio'
import { Actividades } from '../Components/Actividades'
import { Graficas } from '../Components/Graficas'
import { Error } from '../Components/Error'

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
        <h1>Cabecera</h1>
        <hr />
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={({isActive}) => isActive ? "activado" : ""}>Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/actividades" className={({isActive}) => isActive ? "activado" : ""}>Actividades</NavLink>
            </li>
            <li>
              <NavLink to="/graficas" className={({isActive}) => isActive ? "activado" : ""}>Graficas</NavLink>
            </li>
          </ul>
        </nav>

        <section>
          <Routes>
              <Route path="/" element={<Inicio />}></Route>
              <Route path="/actividades" element={<Actividades />}></Route>
              <Route path="/graficas" element={<Graficas/>}></Route>
              <Route path="/*" element={<Error />}></Route>
          </Routes>
        </section>
        <hr />
        <footer>
          Pie de página
        </footer>
    </BrowserRouter>
  )
}

