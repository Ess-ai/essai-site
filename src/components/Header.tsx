import React, { Component, useState } from 'react';
import { logoDark, logoLight } from "../assets";
import { Link } from 'react-router-dom';

const Header = () => {

    const [isReleased, setisReleased] = useState<boolean>(false)


    return (
        <header id="site_menu_header" className="site-header dsn-container text-upper">
            <div className="main-logo">
                <Link to="/" data-dsn-text="Essai" className="custom-logo-link main-brand effect-ajax" rel="home"
                aria-current="page">
                    <img src={logoDark} className="custom-logo logo-light" alt="Essai"/>
                    <img src={logoLight}className="custom-logo logo-dark" alt="Essai"/>
                </Link>
            </div>
            <nav className="main-navigation ">
                <div className="menu-cover-title header-container dsn-container">MENU</div>
                <ul id="dsn-primary-list" className="primary-nav h2">
                    {
                        isReleased ?(
                            <>
                                <li className="nav-item has-sub-menu">
                                    <Link title="Home" to="">
                                        <span className="overflow ">Resources <i className="fa fa-angle-down"></i></span>
                                    </Link>
                                    <ul className="nav-item">
                                        <li className="dsn-back">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px"
                                                        viewBox="0 0 400.004 400.004" xmlSpace="preserve">
                                                        <g>
                                                            <path d="M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757 c-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072 c6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315 C400.004,190.438,392.251,182.686,382.688,182.686z"
                                                            />
                                                        </g>
                                                    </svg>
                                                    
                                                    <span className="text-toggle-back">
                                                        <span className="text-name">Resources</span>
                                                        <span className="text-back">Back</span>
                                                    </span>
                                                </span>
                                        </li>
                                        <li className="nav-item ">
                                            <Link title="Log Out" to="/stories" data-dsn-text="Logging Out">
                                                <span className="overflow">Stories</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link title="Log Out" to="" data-dsn-text="Logging Out">
                                                <span className="overflow">Tools</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link title="Stories" to="" data-dsn-text="Become a StoryTeller">
                                                <span className="overflow">Technologies</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link title="Stories" to="/events" data-dsn-text="Become a StoryTeller">
                                                <span className="overflow">Events & Updates</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item has-sub-menu">
                                    <Link title="Product" to="/">
                                        <span className="overflow ">Product<i className="fa fa-angle-down"></i></span>
                                    </Link>
                                    <ul className="nav-item">
                                        <li className="dsn-back">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px"
                                                        viewBox="0 0 400.004 400.004" xmlSpace="preserve">
                                                        <g>
                                                            <path d="M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757 c-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072 c6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315 C400.004,190.438,392.251,182.686,382.688,182.686z"
                                                            />
                                                        </g>
                                                    </svg>
                                                    
                                                    <span className="text-toggle-back">
                                                        <span className="text-name">Essai</span>
                                                        <span className="text-back">Back</span>
                                                    </span>
                                                </span>
                                        </li>
                                        <li className="nav-item ">
                                            <Link title="Stories" to="/downloads" data-dsn-text="Stories">
                                                <span className="overflow">Releases</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link title="Log Out" to="/downloads" data-dsn-text="Logging Out">
                                                <span className="overflow">Documentaion</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link title="Log Out" to="/downloads" data-dsn-text="Logging Out">
                                                <span className="overflow">References</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link title="Log Out" to="/downloads" data-dsn-text="Logging Out">
                                                <span className="overflow">Applications</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item has-sub-menu">
                                    <Link title="Home" to="">
                                        <span className="overflow ">Research <i className="fa fa-angle-down"></i></span>
                                    </Link>
                                    <ul className="nav-item">
                                        <li className="dsn-back">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px"
                                                        viewBox="0 0 400.004 400.004" xmlSpace="preserve">
                                                        <g>
                                                            <path d="M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757 c-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072 c6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315 C400.004,190.438,392.251,182.686,382.688,182.686z"
                                                            />
                                                        </g>
                                                    </svg>
                                                    
                                                    <span className="text-toggle-back">
                                                        <span className="text-name">Research</span>
                                                        <span className="text-back">Back</span>
                                                    </span>
                                                </span>
                                        </li>
                                        <li className="nav-item ">
                                            <Link title="Log Out" to="" data-dsn-text="Logging Out">
                                                <span className="overflow">Overview</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link title="Log Out" to="" data-dsn-text="Logging Out">
                                                <span className="overflow">Model & Training</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link title="Log Out" to="" data-dsn-text="Logging Out">
                                                <span className="overflow">Research Journey</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link title="Stories" to="" data-dsn-text="Become a StoryTeller">
                                                <span className="overflow">Publications</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link title="Stories" to="" data-dsn-text="Become a StoryTeller">
                                                <span className="overflow">Solutions</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item has-sub-menu">
                                    <Link title="Home" to="">
                                        <span className="overflow ">Company<i className="fa fa-angle-down"></i></span>
                                    </Link>
                                    <ul className="nav-item">
                                        <li className="dsn-back">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px"
                                                        viewBox="0 0 400.004 400.004" xmlSpace="preserve">
                                                        <g>
                                                            <path d="M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757 c-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072 c6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315 C400.004,190.438,392.251,182.686,382.688,182.686z"
                                                            />
                                                        </g>
                                                    </svg>
                                                    
                                                    <span className="text-toggle-back">
                                                        <span className="text-name">Essai</span>
                                                        <span className="text-back">Back</span>
                                                    </span>
                                                </span>
                                        </li>
                                        <li className="nav-item ">
                                            <Link title="Stories" to="" data-dsn-text="Stories">
                                                <span className="overflow">About</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link title="Log Out" to="" data-dsn-text="Logging Out">
                                                <span className="overflow">Parent</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link title="Log Out" to="" data-dsn-text="Logging Out">
                                                <span className="overflow">Patners</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link title="Stories" to="" data-dsn-text="Become a StoryTeller">
                                                <span className="overflow">Resources</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </>
                            )
                        : <></>
                    }
                    <li className="nav-item btn">
                        <Link className="waiting-button" to="/waiting-list" data-dsn-text="TRY ESSAI">
                            <span className="">
                                Request Early Access
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div id="navbar_toggle" className="navbar-toggle">
                <div className="toggle-icon">
                    <div className="toggle-line"></div>
                    <div className="toggle-line"></div>
                    <div className="toggle-line"></div>
                </div>
                <div className="toggle-text">
                    <div className="text-menu">Menu</div>
                    <div className="text-open">Open</div>
                    <div className="text-close">Close</div>
                </div>
            </div>
            <div className="bg-load background-main"></div>
            
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none"
                className="bg-load dsn-svg-transition">
            <path vectorEffect="non-scaling-stroke" d="M 0 100 V 100 Q 50 100 100 100 V 100 z"/>
            </svg>
    
        </header>
    )
    
}

export default Header;
