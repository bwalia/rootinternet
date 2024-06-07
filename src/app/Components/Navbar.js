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
                                                <form action="/en/login" method="post">

                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="nav-top">
                                        <ul>
                                            <li><Link href="/contact">Contact</Link></li>
                                            <li><Link href="/faq">FAQ</Link></li>
                                            <li><Link href="/languages">Language</Link></li>
                                            <li id="nav-top-show-hide-link" className="active"><Link href="/login">Login</Link>
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
                            <li><Link href="/features">Monitoring</Link>
                                <ul>
                                    <li><Link href="/features">Features</Link></li>
                                    <li><Link href="/howitworks">How It Works</Link></li>
                                    <li><Link href="/network">Monitoring Network</Link></li>
                                    <li><Link href="/notification">SMS &amp; Email Notification</Link></li>
                                    <li><Link href="/pushnotification">Push Notification</Link></li>
                                    <li><Link href="/quicktest">Quick Test</Link></li>
                                    <li><Link href="/signup">Sign Up</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/pricing">Pricing</Link>
                                <ul>
                                    <li><Link href="/pricing">Pricing</Link></li>
                                    <li><Link href="/discount">Discount</Link></li>
                                    <li><Link href="/compare">Compare Free &amp; Professional</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/reseller">Reseller</Link></li>
                            <li><Link href="/ranking">Webhost Ranking</Link>
                                <ul>
                                    <li><Link href="/ranking">Introduction</Link></li>
                                    <li><Link href="/ranking?type=1">Shared</Link></li>
                                    <li><Link href="/ranking?type=2">Virtual Private</Link></li>
                                    <li><Link href="/ranking?type=3">Dedicated</Link></li>
                                    <li><Link href="/ranking?type=4">Colocation</Link></li>
                                    <li><Link href="/ranking?type=5">Leased Line</Link></li>
                                    <li><Link href="/ranking?type=6">Broadband</Link></li>
                                    <li><Link href="/ranking?type=7">Others</Link></li>
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