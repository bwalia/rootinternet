'use client'
import React from 'react';

const Navbar = () => {
    const [isActiveNav, setActiveNav] = React.useState(false);
    const handleNav = () => {
        console.log("hiii");
        setActiveNav(!isActiveNav);
    }
    return (
        <React.Fragment>
            <div id="page-top">
                <div id="header">
                    <div id="logo">
                        <h1><a itemProp="url" href="/" title="Root Internet Monitoring">
                            Root Internet MonitoringControl Panel
                        </a></h1>
                        <div className="box">
                            <div className="box-bgr">
                                <div className="box-bgr-">
                                    <div id="top-hide-box" className="content hide">
                                        <div id="form-login">
                                            <div id="form-login-center">
                                                <form action="/en/login.php" method="post">

                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="nav-top">
                                        <ul>
                                            <li><a href="contact.php">Contact</a></li>
                                            <li><a href="faq.php">FAQ</a></li>
                                            <li><a href="languages.php">Language</a></li>
                                            <li id="nav-top-show-hide-link" className="active"><a href="login.php">Login</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="box-bot">
                                <div className="bot"></div>
                                <div className="bot-"></div>
                            </div>
                        </div>
                    </div>
                    <div id="nav1">
                        <ul className={isActiveNav ? 'active': ''}>
                            <li className="active"><a href="./">Home</a></li>
                            <li><a href="features.php">Monitoring</a>
                                <ul>
                                    <li><a href="features.php">Features</a></li>
                                    <li><a href="howitworks.php">How It Works</a></li>
                                    <li><a href="network.php">Monitoring Network</a></li>
                                    <li><a href="notification.php">SMS &amp; Email Notification</a></li>
                                    <li><a href="pushnotification.php">Push Notification</a></li>
                                    <li><a href="quicktest.php">Quick Test</a></li>
                                    <li><a href="signup.php">Sign Up</a></li>
                                </ul>
                            </li>
                            <li><a href="pricing.php">Pricing</a>
                                <ul>
                                    <li><a href="pricing.php">Pricing</a></li>
                                    <li><a href="discount.php">Discount</a></li>
                                    <li><a href="compare.php">Compare Free &amp; Professional</a></li>
                                </ul>
                            </li>
                            <li><a href="reseller.php">Reseller</a></li>
                            <li><a href="ranking.php">Webhost Ranking</a>
                                <ul>
                                    <li><a href="ranking.php">Introduction</a></li>
                                    <li><a href="ranking.php?type=1">Shared</a></li>
                                    <li><a href="ranking.php?type=2">Virtual Private</a></li>
                                    <li><a href="ranking.php?type=3">Dedicated</a></li>
                                    <li><a href="ranking.php?type=4">Colocation</a></li>
                                    <li><a href="ranking.php?type=5">Leased Line</a></li>
                                    <li><a href="ranking.php?type=6">Broadband</a></li>
                                    <li><a href="ranking.php?type=7">Others</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="hamburger-menu" onClick={handleNav}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar