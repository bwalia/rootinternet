'use client'
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname();
    const [isActiveNav, setActiveNav] = React.useState(false);
    const [isActiveMoniter, setIsActiveMoniter] = React.useState(false);
    const [isActivePricing, setIsActivePricing] = React.useState(false);
    const [isActiveRanking, setIsActiveRanking] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);

    const featureSubLinks = [
        "/features",
        "/howitworks",
        "/network",
        "/notification",
        "/pushnotification",
        "/quicktest",
        "/signup"
    ]
    const pricingSubLinks = [
        "/pricing",
        "/discount",
        "/compare"
    ];
    const rankingSubLinks = [
        "/ranking",
        "/ranking?type=1",
        "/ranking?type=2",
        "/ranking?type=3",
        "/ranking?type=4",
        "/ranking?type=5",
        "/ranking?type=6",
        "/ranking?type=7"
    ]
    const handleNav = () => {
        setActiveNav(!isActiveNav);
    }

    React.useEffect(() => {
        const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const handleClick = (setIsActive, isActive) => {
        console.log({isActive});
        if (isMobile) {
            setIsActive(!isActive);
        }
    };

    const handleMouseEnter = (setIsActive, isActive) => {
        if (!isMobile) {
            setIsActive(true);
        }
    };

    const handleMouseLeave = (setIsActive, isActive) => {
        if (!isMobile) {
            setIsActive(false);
        }
    };

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
                        <ul className={isActiveNav ? 'active' : ''}>
                            <li className={pathname == "/" && "active"}><Link href="/">Home</Link></li>
                            <li
                                className={featureSubLinks.includes(pathname) && "active"}
                            >
                                <Link
                                    href="javascript:void(0)"
                                    onClick={() => handleClick(setIsActiveMoniter, isActiveMoniter)}
                                    onMouseEnter={() => handleMouseEnter(setIsActiveMoniter, isActiveMoniter)}
                                    onMouseLeave={() => handleMouseLeave(setIsActiveMoniter, isActiveMoniter)}
                                >
                                    Monitoring
                                </Link>
                                <ul
                                    onMouseEnter={() => handleMouseEnter(setIsActiveMoniter, isActiveMoniter)}
                                    onMouseLeave={() => handleMouseLeave(setIsActiveMoniter, isActiveMoniter)}
                                    className={isActiveMoniter ? 'sub-nav-active' : ''}
                                >
                                    <li><Link href="/features">Features</Link></li>
                                    <li><Link href="/howitworks">How It Works</Link></li>
                                    <li><Link href="/network">Monitoring Network</Link></li>
                                    <li><Link href="/notification">SMS &amp; Email Notification</Link></li>
                                    <li><Link href="/pushnotification">Push Notification</Link></li>
                                    <li><Link href="/quicktest">Quick Test</Link></li>
                                    <li><Link href="/signup">Sign Up</Link></li>
                                </ul>
                            </li>
                            <li className={pricingSubLinks.includes(pathname) && "active"}>
                                <Link
                                    href="javascript:void(0)"
                                    onClick={() => handleClick(setIsActivePricing, isActivePricing)}
                                    onMouseEnter={() => handleMouseEnter(setIsActivePricing, isActivePricing)}
                                    onMouseLeave={() => handleMouseLeave(setIsActivePricing, isActivePricing)}
                                >
                                    Pricing
                                </Link>
                                <ul
                                    onMouseEnter={() => handleMouseEnter(setIsActivePricing, isActivePricing)}
                                    onMouseLeave={() => handleMouseLeave(setIsActivePricing, isActivePricing)}
                                    className={isActivePricing ? 'sub-nav-active' : ''}
                                >
                                    <li><Link href="/pricing">Pricing</Link></li>
                                    <li><Link href="/discount">Discount</Link></li>
                                    <li><Link href="/compare">Compare Free &amp; Professional</Link></li>
                                </ul>
                            </li>
                            <li className={pathname == "/reseller" && "active"}><Link href="/reseller">Reseller</Link></li>
                            <li className={rankingSubLinks.includes(pathname) && "active"}>
                                <Link 
                                    href="javascript:void(0)"
                                    onClick={() => handleClick(setIsActiveRanking, isActiveRanking)}
                                    onMouseEnter={() => handleMouseEnter(setIsActiveRanking, isActiveRanking)}
                                    onMouseLeave={() => handleMouseLeave(setIsActiveRanking, isActiveRanking)}
                                >
                                    Webhost Ranking
                                </Link>
                                <ul
                                    onMouseEnter={() => handleMouseEnter(setIsActiveRanking, isActiveRanking)}
                                    onMouseLeave={() => handleMouseLeave(setIsActiveRanking, isActiveRanking)}
                                    className={isActiveRanking ? 'sub-nav-active' : ''}
                                >
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
                            <li className={pathname == "/blog" && "active"}><Link href="/blog">Blog</Link></li>
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