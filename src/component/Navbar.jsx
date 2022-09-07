import React from 'react';
import '../css/Navbar.css'
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useState } from 'react';

const Navbar = () => {
    const [show,setshow] = useState (true);
    const state = useSelector((state) => state.handleCart)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-warning py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img src="./images/logo.png" alt="" width="250" height="30" />
                    </NavLink>
                    <button className="navbar-toggler" onClick={()=>{ setshow(!show)}}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active text-white poppins  fs-5" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link text-white poppins  fs-5" to="/products">Products</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link text-white poppins  fs-5" to="/about">About</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link text-white poppins  fs-5" to="/contact">Contact</NavLink>
                            </li>

                        </ul>
                        <div className="buttons">
                            <NavLink to="/login" className="btn btn btn-outline-dark poppins">
                                <i className='fa  fa-sign-in me-1'></i> Login</NavLink>
                            <NavLink to="/register" className="btn btn btn-outline-dark ms-2 poppins">
                                <i className='fa fa-user-plus me-1'></i> Register</NavLink>
                            <NavLink to="/cart" className="btn btn btn-outline-dark ms-2 poppins">
                                <i className='fa fa-shopping-cart me-1'></i> Cart ({state.length})</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
