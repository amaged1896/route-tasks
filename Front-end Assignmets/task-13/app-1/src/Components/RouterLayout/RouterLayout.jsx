import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
export default function RouterLayout() {
    return <>
        <Navbar />
        <Outlet></Outlet>
        <Footer />
    </>;
}


