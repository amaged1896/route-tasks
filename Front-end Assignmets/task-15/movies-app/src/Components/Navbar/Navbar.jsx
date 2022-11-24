import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className=" navbar nav navbar-expand-lg bg-light">
      <div className="container">
        <Link className="navbar-brand w-25 text-white" to=""> <img className='w-25' src="../../../img/logo.png" alt="" />Game Over</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className=" a nav-link" aria-current="page" to="">Home</Link>
            </li>
            <li className="nav-item">
              <Link className=" a text-muted nav-link" to="all">All</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className=" a text-muted nav-link dropdown-toggle" to="platform" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Platforms
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="platforms/pc">pc</Link></li>
                <li><Link className="dropdown-item" to="platforms/browser">browser</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className=" a text-muted nav-link  dropdown-toggle" to="sort-by" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                sort-by
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="sort-by/release-date">release-date</Link></li>
                <li><Link className="dropdown-item" to="sort-by/popularity">popularity</Link></li>
                <li><Link className="dropdown-item" to="sort-by/alphabetical">alphabetical</Link></li>
                <li><Link className="dropdown-item" to="sort-by/relevance">relevance</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className=" a text-muted nav-link dropdown-toggle" to="categories" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="categories/racing">racing</Link></li>
                <li><Link className="dropdown-item" to="categories/sports">sports</Link></li>
                <li><Link className="dropdown-item" to="categories/social">social</Link></li>
                <li><Link className="dropdown-item" to="categories/shooter">shooter</Link></li>
                <li><Link className="dropdown-item" to="categories/open-world">open-world</Link></li>
                <li><Link className="dropdown-item" to="categories/zombie">zombie</Link></li>
                <li><Link className="dropdown-item" to="categories/fantasy">fantasy</Link></li>
                <li><Link className="dropdown-item" to="categories/action-rpg">action-rpg</Link></li>
                <li><Link className="dropdown-item" to="categories/action">action</Link></li>
                <li><Link className="dropdown-item" to="categories/flight">flight</Link></li>
                <li><Link className="dropdown-item" to="categories/battle-royale">battle-royale</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <ul className='d-flex m-0 align-items-center'>
          <li className='list-unstyled pe-2'><Link className='btn btn-outline-danger' to="register">Register</Link></li>
          <li className='list-unstyled pe-2'><Link className='btn btn-outline-danger' to="login">Login</Link></li>
          <span className='btn btn-outline-info pe-2'>LogOut</span>
        </ul>
      </div>
    </nav>
  );
}
