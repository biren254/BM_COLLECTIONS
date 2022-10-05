import React from 'react';
import '../css/Navbar.css'
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    const [show, setShow] = useState(true);
    const state = useSelector((state) => state.handleCart)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light py-2 shadow-sm nav-bg">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <span className="fw-bold text-white fs-3">BM COLLECTION</span>
                    </NavLink>
                    <button className="navbar-toggler" onClick={() => { setShow(!show) }}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active text-white poppins  fs-5" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white poppins  fs-5" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white poppins  fs-5" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white poppins  fs-5" to="/contact">Contact</NavLink>
                            </li>

                        </ul>
                        <div className="buttons">
                            {isAuthenticated && <p className=" text-white mx-2">{user.name}</p>}
                            {isAuthenticated ? (
                                <button className="btn btn-outline-light text-white"
                                    onClick={() => logout({ returnTo: window.location.origin })}>
                                     <i className='fa  fa-sign-in me-1'></i>
                                    Log Out
                                </button>
                            ) : (<button className="btn btn-outline-light text-white"
                                onClick={() => loginWithRedirect()}>
                                 <i className='fa  fa-sign-in me-1'></i>
                                 Log In</button>)}

                            <NavLink to="/cart" className="btn btn btn-outline-light ms-2 poppins">
                                <i className='fa fa-shopping-cart me-1'></i> Cart ({state.length})</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
