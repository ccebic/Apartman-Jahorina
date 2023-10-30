import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {MainLayout} from './layout/Index'
import Home from './pages/home'
import Reservation from './pages/reservation'

export const Router = () => {
  return (
    <BrowserRouter>
        <MainLayout>
            <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/reservation" element={<Reservation />}></Route>
            </Routes>
        </MainLayout>
    </BrowserRouter>
  )
}

