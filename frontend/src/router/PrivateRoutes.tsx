import React, { useContext } from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const AuthRoute = () => {
  const [isAuth,] = useContext(AuthContext);
  const location = useLocation();

  return (
    <>
      {
        isAuth ? <Outlet /> : <Navigate to="/login" state={location.pathname}/>
      }
    </>
  );
};

export default AuthRoute;