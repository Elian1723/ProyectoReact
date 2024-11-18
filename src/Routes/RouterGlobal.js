import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Login } from '../Components/Login'
import { Error } from '../Components/Error'
import { RouterPrincipal } from '../Routes/RouterPrincipal'
import { Actividades } from '../Components/Actividades'
import { Graficas } from '../Components/Graficas'

export const RouterGlobal = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/dashboard/*" element={<RouterPrincipal />}></Route>
                <Route path="/*" element={<Error />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

