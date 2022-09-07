import React from 'react'

const Register = () => {
    return (
        <div>
            <div className="container mb-5 my-5">
                <form className="register-form">
                    <div className="mb-3">
                        <label for="userName" className="form-label fw-bold fs-5" >
                            Name
                        </label>
                        <input type="text" className="form-control mb-3"
                            id="userName" aria-describedby="userName" placeholder="Enter Name" required/>

                        <label for="phone" className="form-label fw-bold fs-5">
                            Contact No.
                        </label>
                        <input type="tel" className="form-control mb-3"
                            id="phone" aria-describedby="phone" placeholder="Enter Number" required/>

                        <label for="inputEmail1" className="form-label fw-bold fs-5">
                            Email address
                        </label>
                        <input type="email" className="form-control"
                            id="inputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" required/>
                    </div>
                    <div className="mb-3">
                        <label for="inputPassword1" className="form-label fw-bold fs-5">
                            Password
                        </label>
                        <input type="password" className="form-control mb-3"
                            id="inputPassword" placeholder="Enter Password" required/>

                        <label for="exampleConfirmtPassword1" className="form-label fw-bold fs-5">
                            Confirm Password
                        </label>
                        <input type="confirm-password" className="form-control"
                            id="confirmPassword" placeholder="Confirm Password" required/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary fw-bold fs-5">
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register
