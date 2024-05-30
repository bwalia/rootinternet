'use client'
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const [isActiveNav, setActiveNav] = React.useState(false);
    const handleNav = () => {
        setActiveNav(!isActiveNav);
    }
    return (
        <React.Fragment>
            <div id="page-top">
                <div id="header">
                    <div id="logo">
                        <h1>
                            <Link href={"/"} title='Root Internet Monitoring'>
                                Root Internet MonitoringControl Panel
                            </Link>
                        </h1>
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
                                            <li><Link href="/contact">Contact</Link></li>
                                            <li><Link href="/faq">FAQ</Link></li>
                                            <li><Link href="languages.php">Language</Link></li>
                                            <li id="nav-top-show-hide-link" className="active"><Link href="login.php">Login</Link>
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
                            <li className="active"><Link href="./">Home</Link></li>
                            <li><Link href="features.php">Monitoring</Link>
                                <ul>
                                    <li><Link href="features.php">Features</Link></li>
                                    <li><Link href="howitworks.php">How It Works</Link></li>
                                    <li><Link href="network.php">Monitoring Network</Link></li>
                                    <li><Link href="notification.php">SMS &amp; Email Notification</Link></li>
                                    <li><Link href="pushnotification.php">Push Notification</Link></li>
                                    <li><Link href="quicktest.php">Quick Test</Link></li>
                                    <li><Link href="signup.php">Sign Up</Link></li>
                                </ul>
                            </li>
                            <li><Link href="pricing.php">Pricing</Link>
                                <ul>
                                    <li><Link href="pricing.php">Pricing</Link></li>
                                    <li><Link href="discount.php">Discount</Link></li>
                                    <li><Link href="compare.php">Compare Free &amp; Professional</Link></li>
                                </ul>
                            </li>
                            <li><Link href="reseller.php">Reseller</Link></li>
                            <li><Link href="ranking.php">Webhost Ranking</Link>
                                <ul>
                                    <li><Link href="ranking.php">Introduction</Link></li>
                                    <li><Link href="ranking.php?type=1">Shared</Link></li>
                                    <li><Link href="ranking.php?type=2">Virtual Private</Link></li>
                                    <li><Link href="ranking.php?type=3">Dedicated</Link></li>
                                    <li><Link href="ranking.php?type=4">Colocation</Link></li>
                                    <li><Link href="ranking.php?type=5">Leased Line</Link></li>
                                    <li><Link href="ranking.php?type=6">Broadband</Link></li>
                                    <li><Link href="ranking.php?type=7">Others</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/blog">Blog</Link></li>
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