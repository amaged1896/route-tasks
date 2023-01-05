import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import All from './Components/All/All';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

import ErrorPage from './Components/ErrorPage/ErrorPage';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import Platforms from './Components/Platforms/Platforms';
import Categories from './Components/Categories/Categories';
import ItemContextProvider from './Components/ItemStore/ItemStore';


function App() {
  let platforms = {
    pc: "pc",
    browser: "browser"
  };
  useEffect(() => {
    if (localStorage.getItem('userToken') !== null) {
      saveUserData();
    }
  }, []);


  const [userData, setUserData] = useState(null);

  function saveUserData() {
    let encodedToken = localStorage.getItem('userToken');
    let decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
  }
  let routers = createBrowserRouter([
    {
      path: '/', element: <Layout platforms={platforms} setUserData={setUserData} userData={userData} />, errorElement: <ErrorPage />, children: [
        { path: 'home', element: <Home /> },
        { path: 'all', element: <All /> },
        { path: 'platforms/:platform', element: <Platforms platforms={platforms} /> },
        { path: 'categories/:categorie', element: <Categories platforms={platforms} /> },

        { path: 'login', element: <Login saveUserData={saveUserData} /> },
        { path: 'register', element: <Register /> },
        { path: '*', element: <ErrorPage /> }
      ]
    },
  ]);

  return (<>
    <ItemContextProvider>
      <RouterProvider router={routers} />
    </ItemContextProvider>
  </>
  );
}

export default App;


