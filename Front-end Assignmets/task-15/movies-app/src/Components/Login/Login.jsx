import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <div className="container">
        <div className="row mt-5 form-bg">
          <div className="col-md-6 p-0">
            <div className="img">
              <img className='w-100' src="../../../img/gaming.ebaf2ffc84f4451d.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-6 p-0">

            <form className='p-4 flex-column text-center justify-content-center px-5'>
              <div className='d-flex align-items-center justify-content-center'>
                <div className="img flex-column text-center">
                  <img className='w-25' src="../../../img/logo.png" alt="" />
                  <h1 className='h4'>Log in to GameOver</h1>
                </div>
              </div>
              <input type="email" placeholder='Email' className="form-control my-input my-3 mx-auto" name="email" id="email" />
              <input type="password" placeholder='Password' className="form-control my-input my-3 mx-auto  " name="password" id="password" />
              <Link><button className="btn text-white btn-outline-dark w-100 py-2">Login</button></Link>
              <hr className='margin-border w-100' />
            </form>
            <div className='d-flex justify-content-center align-items-center flex-column'>
              <span >Not a member yet ?<Link to="/register" className='a text-primary'> Create Account<i className='fas fa-chevron-right small'></i></Link></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
