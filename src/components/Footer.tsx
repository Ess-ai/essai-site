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
                    <div className="footer-bottom mt-60 pt-30 border-top pb-30 text-center">
                        <p className="over-hidden">
                            © 2023 <a href="" className="link-hover" data-hover-text="DSN Grid" target="_blank">ESSAI</a>
                        </p>
                    </div>
                </div>


            </div>
        </footer>
  )
}
