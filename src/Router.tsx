import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layout/Index';
import { HomePage, ReservationPage } from './pages';

export const Router = () => (
   <BrowserRouter>
      <MainLayout>
         <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/reservation" element={<ReservationPage />}></Route>
         </Routes>
      </MainLayout>
   </BrowserRouter>
);
