import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

export default function Layout({ platforms, userData, setUserData }) {

  let navigate = useNavigate();

  function logOut() {
    localStorage.removeItem('userToken');
    setUserData(null);
    navigate('/login');
  }

  return (
    <>
      <Navbar platforms={platforms} logOut={logOut} userData={userData} />
      <Outlet></Outlet>
    </>
  );
}
