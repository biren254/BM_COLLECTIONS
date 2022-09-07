import React from 'react'

const Login = () => {
    return (
        <div className="container mb-5 mt-5">
            <form className="login-form">
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label fw-bold fs-5">
                        Email address
                    </label>
                    <input type="email" className="form-control"
                        id="inputEmail" aria-describedby="emailHelp" placeholder="Enter Email" required/>

                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label fw-bold fs-5">
                            Password
                        </label>
                        <input type="Password" className="form-control"
                            id="inputPassword" placeholder="Enter Password" required/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input"
                            id="Check" required />
                        <label className="form-check-label fw-bold fs-5" for="exampleCheck1">
                            Remember Me
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary mb-5 fw-bold fs-5">
                      Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login
