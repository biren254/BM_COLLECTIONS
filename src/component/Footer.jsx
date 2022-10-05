import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className=" bg-success p-5 mb-0 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 Poppins">
                            <h2 className="fw-bold text-white">About Us</h2>
                            <ul className="list-unstyled text-white">
                                <li>Careers</li>
                                <li>Our Stores</li>
                                <li>Our Cares</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="col-md-4 Poppins">
                            <h2 className="fw-bold text-white">Customer Care</h2>
                            <ul className="list-unstyled text-white">
                                <li>Help Center </li>
                                <li>How to Buy </li>
                                <li>Track Your Order </li>
                                <li>Corporate & Bulk Purchasing </li>
                                <li>Returns & Refunds </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h2 className="fw-bold text-white">Contact Us</h2>
                            <ul className="list-unstyled text-white">
                                <li>Email: bmcollections@gmail.com</li>
                                <li>Phone: +1 1123 456 780</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
