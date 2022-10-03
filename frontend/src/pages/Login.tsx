import React, { FC, useContext, FormEvent } from 'react';
import TextFieldWithRef from '../components/UI/Inputs/TextFieldWithRef';
import { AuthContext } from '../context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import ConfirmButton from '../components/UI/Buttons/ConfirmButton';

const Login:FC = () => {
  const [,setIsAuth] = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const prevPage = location.state;

  const submitHandle = (e: FormEvent) => {
    e.preventDefault();
    setIsAuth(true);
    navigate(prevPage ? prevPage : '/');
  };

  return (
    <>
      <h1 className="font-bold text-center text-4xl my-5">Login (stub)</h1>
      <form onSubmit={submitHandle}>
        <TextFieldWithRef variant="standard" fullWidth label="Login" />
        <TextFieldWithRef variant="standard" fullWidth label="Password" />
        <ConfirmButton title="Login" />
      </form>
    </>
  );
};

export default Login;