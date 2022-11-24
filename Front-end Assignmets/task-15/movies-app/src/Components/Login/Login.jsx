import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function Login() {
  let navigate = useNavigate();
  const [errorList, setErrorList] = useState([]);
  const [error, setError] = useState('');
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  async function sendRegisterDataToApi() {
    let { data } = await axios.post(`https://route-egypt-api.herokuapp.com/signin`, user);
    console.log(data);
    if (data.message === 'success') {
      navigate('/');
    } else {
      setError(data.message);
    }
  }

  function getUserData(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }

  function submitRegisterForm(e) {
    e.preventDefault();
    validationRegisterForm();
    let validation = validationRegisterForm();
    if (validation.error) {
      setErrorList(validation.error.details);
      console.log(errorList);
    } else {
      sendRegisterDataToApi();
    }
  }


  function validationRegisterForm() {
    let scheme = Joi.object({
      first_name: Joi.string().min(3).max(10).required(),
      last_name: Joi.string().min(3).max(10).required(),
      age: Joi.number().min(18).max(80).required(),
      email: Joi.string()
        .email({ tlds: { allow: ['com', 'net'] } })
        .required(),
      password: Joi.string().pattern(/^[A-Z][a-z]{3,6}/),
    });
    return scheme.validate(user, { abortEarly: false });
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
