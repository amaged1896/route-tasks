import React from 'react';
import { Link } from 'react-router-dom';
import NavbarStyle from '../Navbar/Navbar.module.css';

export default function Navbar() {
    return (
        <>
            <nav className={`navbar fixed-top navbar-expand-lg p-2 mb-5 ${NavbarStyle.test}`}>
                <div className="container-fluid ">
                    <Link className="navbar-brand ms-5 text-white fw-bolder fs-2" to="">START REACT</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="fs-6 fw-bolder  navbar-nav ms-auto me-5 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link mx-2 text-white ${NavbarStyle.linkhover}`} to="portfolio">PORTFOLIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link mx-2 text-white ${NavbarStyle.linkhover}`} to="about">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link mx-2 text-white ${NavbarStyle.linkhover}`} to="contact">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}