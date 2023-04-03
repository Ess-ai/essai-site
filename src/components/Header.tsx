import React, { Component } from 'react';
import { logoDark, logoLight } from "../assets";
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
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
                        <li className="nav-item ">
                            <Link title="Home" to="/signin" >
                                <span className="overflow">Home</span>
                            </Link>
                        </li>
                        <li className="nav-item has-sub-menu">
                            <a title="Home" href="">
                                <span className="overflow ">News <i className="fa fa-angle-down"></i></span>
                            </a>
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
                                                <span className="text-name">News</span>
                                                <span className="text-back">Back</span>
                                            </span>
                                        </span>
                                </li>
                                <li className="nav-item ">
                                    <a title="Stories" href="" data-dsn-text="Stories">
                                        <span className="overflow"></span>
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a title="Log Out" href="" data-dsn-text="Logging Out">
                                        <span className="overflow">Stories</span>
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a title="Log Out" href="" data-dsn-text="Logging Out">
                                        <span className="overflow">Events</span>
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a title="Stories" href="" data-dsn-text="Become a StoryTeller">
                                        <span className="overflow">Update</span>
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a title="Single Post" href="" data-dsn-text="Log In">
                                        <span className="overflow">Log In</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item ">
                            <Link title="Home" to="/signin" >
                                <span className="overflow">Research</span>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link title="Home" to="/signin" >
                                <span className="overflow">Product</span>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link title="Home" to="/signin" >
                                <span className="overflow">Company</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="container-content  d-flex flex-column justify-content-center section-margin">
                        <div className="nav__info">
                            <div className="nav-content">
                                <h5 className="sm-title-block mb-10">Studio</h5>
                                26-30 New Damietta
                                El-Mahalla El-Kubra, SK1 66LM
        
                            </div>
                            <div className="nav-content mt-30">
                                <h5 className="sm-title-block mb-10">Contact</h5>
                                <p className="links over-hidden mb-1">
                                    <a className="link-hover d-block" href="tel:00201004392260" data-hover-text="+00 (2)012 3321">+00 (2)01004392260</a>
                                    <a className="link-hover" href="tel:00201024552406" data-hover-text="+00 (2)012 3321">+00 (2)01024552406</a>
                                </p>
                                <p className="links over-hidden"><a className="link-hover" href="mailto:info@dsngrid.com"
                                                                data-hover-text="info@dsngrid.com">info@example.com</a></p>
        
                            </div>
                        </div>
                        <div className="nav-social nav-content mt-30">
                            <div className="nav-social-inner p-relative">
                                <h5 className="sm-title-block mb-10">Follow us</h5>
                            </div>
                        </div>
                    </div>
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
}

export default Header;
