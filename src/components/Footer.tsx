import React from 'react'
import { logoDark, logoLight } from '../assets'

export default function Footer() {
  return (
    <footer id="dsn_footer" className="dsn-footer p-relative footer-animate svg-animate background-section">
            <svg className="dsn-separator dsn-separator-up  dsn-icon-main-color" width="100%" height="100%"
                 viewBox="0 0 100 10" preserveAspectRatio="none">
                <path className="path-anim separator__path" data-dsn-to="M 0 0 C 40 0 55 0 100 0 L 0 0 Z"
                      vectorEffect="non-scaling-stroke" d="M 0 0 C 40 16 75 10 100 0 L 0 0 Z"></path>
            </svg>
            <div className="footer-content p-relative mt-section">

                <div className="text-center container">
                    <h2 className="title-h2 ">
                        LET'S WORK ON SOMETHING
                        <span className="d-block"><b><i>AMAZING </i></b>TOGETHER</span>
                    </h2>
                    <div className="dsn-icon-heading-color dsn-def-btn d-flex justify-content-center mt-30">
                        <a className="dsn-btn dsn-border border-color-default  background-main  effect-ajax has-icon-left"
                           href="contact.html" data-dsn-text="START A PROJECT">
                        <span className="dsn-icon dsn-bg-before btn-icon-left heading-color z-index-1">
                            <i className="fas fa-angle-right" aria-hidden="true"></i>
                        </span>
                            <span className="title-btn p-relative  z-index-1 ">TRY ESSAI</span>
                        </a>
                    </div>

                </div>
                <div className="dsn-container pt-60">
                    <div className="d-grid grid-lg-4 grid-md-2 ">
                        <div className="grid-col-1">
                            <div className="dsn-logo main-logo">
                                <div className="main-logo">
                                    <a href="" data-dsn-text="Essai"
                                       className="custom-logo-link main-brand effect-ajax" rel="home">
                                        <img className="custom-logo logo-light" src={logoDark}
                                             alt="Essai"/>
                                        <img className="custom-logo logo-dark" src={logoLight}
                                             alt="Essai"/>
                                    </a>
                                </div>
                            </div>
                            <ul className="dsn-socials box-social mt-20 dsn-icon-heading-color">
                                <li><a href="photographer.html#0" target="_blank" rel="nofollow"
                                       className="init-color move-circle border-color-default" data-dsn="parallax"><span
                                        className="dsn-icon"><i className="fab fa-facebook-f"></i></span><span>FB</span></a>
                                </li>
                                <li><a href="photographer.html#0" target="_blank" rel="nofollow"
                                       className="init-color move-circle border-color-default" data-dsn="parallax"><span
                                        className="dsn-icon"><i className="fab fa-twitter"></i></span><span>TW</span></a>
                                </li>
                                <li><a href="photographer.html#0" target="_blank" rel="nofollow"
                                       className="init-color move-circle border-color-default" data-dsn="parallax"><span
                                        className="dsn-icon"><i
                                        className="fab fa-linkedin-in"></i></span><span>LN</span></a></li>
                                <li><a href="photographer.html#0" target="_blank" rel="nofollow"
                                       className="init-color move-circle border-color-default" data-dsn="parallax"><span
                                        className="dsn-icon"><i className="fab fa-instagram"></i></span><span>IN</span></a>
                                </li>
                            </ul>
                        </div>
                        <div className="grid-col-2">
                            <h4 className="subtitle p-relative line-shape  line-shape-after "><span
                                    className="background-revere ">PRODUCT</span>
                            </h4>
                            <div className="menu-footer-menu-container">
                                <ul id="menu-footer-menu" className="menu">
                                    <li className="menu-item">
                                        <a href="" className="effect-ajax">PLAGIARISM CHECKER</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="" className="effect-ajax">LANGUAGE ANALYSIS</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="" className="effect-ajax">SCORING AND FEEDBACK</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="" className="effect-ajax">TRANSLATION</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid-col-3">
                            <h4 className="subtitle p-relative line-shape  line-shape-after "><span
                                    className="background-revere ">RESOURCES</span>
                            </h4>

                            <div className="menu-footer-menu-container">
                                <ul id="menu-footer-menu" className="menu">
                                    <li className="menu-item">
                                        <a href="" className="effect-ajax">SUPPORT</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="" className="effect-ajax">STORIES</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="" className="effect-ajax">TESTIMONIALS</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="" className="effect-ajax">SYSTEM STATUS</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="grid-col-4">
                        <h4 className="subtitle p-relative line-shape  line-shape-after "><span
                                    className="background-revere ">COMPANY</span>
                            </h4>

                            <div className="menu-footer-menu-container">
                                <ul id="menu-footer-menu" className="menu">
                                    <li className="menu-item">
                                        <a href="" className="effect-ajax">TERMS OF SERVICE</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="" className="effect-ajax">PRIVACY POLICY</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="" className="effect-ajax">SERVICE LEVEL AGREEMENT</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="" className="effect-ajax">CUSTOMER SERVICE</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom mt-60 pt-30 border-top pb-30 d-grid grid-lg-2">

                        <div className='grid-col-1'>
                        <p className="over-hidden">
                            © 2023 <a href="" className="link-hover" data-hover-text="ESSAI" target="_blank">ESSAI</a>
                        </p>
                        </div>
                        <div id="styleSwitch" className='grid-col-2 text-right styleSwitch'>
                            <span className='day active' data-dsn-theme="light">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sbui-icon text-scale-900">
                                    <circle cx="12" cy="12" r="5"></circle>
                                    <line x1="12" y1="1" x2="12" y2="3"></line>
                                    <line x1="12" y1="21" x2="12" y2="23"></line>
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                    <line x1="1" y1="12" x2="3" y2="12"></line>
                                    <line x1="21" y1="12" x2="23" y2="12"></line>
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                </svg>
                            </span>
                            <span className='h3'> 
                                <i className='fa fa-toggle-off'></i> 
                            </span>
                            <span className='night' data-dsn-theme="dark"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sbui-icon text-scale-900">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>


            </div>
        </footer>
  )
}
