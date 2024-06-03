import React from 'react'

const Footer = () => {
    return (
        <footer className="text-center">
            <div className="footer-above">
                <div className="container">
                    <div className="row">
                        <div className="footer-col col-md-4">
                            <h3>Location</h3>
                            <p>1234 Faster Place
                                <br />Beverly Hills, CA 90210
                            </p>
                        </div>


                        <div className="footer-col col-md-4">
                            <h3>Contact Us</h3>
                            <p className='mb-0'>E :info@rootinternet.co.uk </p>
                            <p>T: 0414 000 9896</p>
                        </div>


                        <div className="footer-col col-md-4">
                            <h3>Follow Us</h3>
                            <ul className="list-inline">
                                <li>
                                    <a href="#" className="btn-social btn-outline"><i className="bi bi-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="#" className="btn-social btn-outline"><i className="bi bi-google"></i></a>
                                </li>
                                <li>
                                    <a href="#" className="btn-social btn-outline"><i className="bi bi-twitter-x"></i></a>
                                </li>
                                <li>
                                    <a href="#" className="btn-social btn-outline"><i className="bi bi-linkedin"></i></a>
                                </li>
                                <li>
                                    <a href="#" className="btn-social btn-outline"><i className="bi bi-dribbble"></i></a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div className="footer-below">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 copyright-wrapper">
                            Copyright &copy; 2017 Root internet All rights reserved

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer