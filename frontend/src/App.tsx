import React from 'react';
import ResponsiveNavbar from './components/UI/Navbar/ResponsiveNavbar';
import { AuthContext } from './context/AuthContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Outlet } from 'react-router-dom';



function App() {
  const [isAuth, setIsAuth] = useLocalStorage(false, 'isAuth');

  return (
    <AuthContext.Provider value={[isAuth, setIsAuth]}>
      <main className="container mx-auto p-10 max-w-4xl" >
          <ResponsiveNavbar />
          <Outlet />
      </main>
    </AuthContext.Provider>
  );
}

export default App;
