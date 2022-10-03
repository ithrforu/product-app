import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import App from '../App';
import About from '../pages/About';
import Products from '../pages/Products';
import AuthRoute from './PrivateRoutes';
import Login from '../pages/Login';

const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="about"/>} />
        <Route path="about" element={<About />} />
        <Route element={<AuthRoute />}>
          <Route path="products">
            <Route index element={<Navigate to="1"/>} />
            <Route path=":page" element={<Products />} />
          </Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>Страница не найдена!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
  );
};

export default AppRouter;