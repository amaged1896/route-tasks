import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {

  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    age: 0,
  });


  function getUserData(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    console.log(myUser);
  }

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

            <form className='pt-4 px-4 justify-content-center'>
              <div className='d-flex align-items-center justify-content-center'>
                <h1 className='h4 py-3 text-muted'>Create My Account!</h1>
              </div>
              <div className="row justify-content-start">
                <div className="col-md-6 col-lg-6">
                  <input onChange={getUserData} type="text" placeholder='First Name' className="form-control my-input w-100 " name="first_name" id="first_name" />
                </div>
                <div className="col-md-6 col-lg-6">
                  <input onChange={getUserData} type="text" placeholder='Last Name' className="form-control my-input w-100 " name="last_name" id="last-name" />
                </div>
              </div>
              <input onChange={getUserData} type="email" placeholder='Email' className="form-control my-input my-3 " name="email" id="email" />
              <input onChange={getUserData} type="number" placeholder='Age' className="form-control my-input my-3 " name="age" id="age" />
              <input onChange={getUserData} type="password" placeholder='Password' className="form-control my-input my-3 " name="password" id="password" />
              <Link><button className="btn text-white btn-outline-dark w-100 py-2">Create Account</button></Link>
              <hr className='margin-border w-100' />
            </form>
            <div className='d-flex justify-content-center align-items-center flex-column'>
              <span >Already a member? <Link to="/login" className='a text-primary'>Log In<i className='fas fa-chevron-right small'></i></Link></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}