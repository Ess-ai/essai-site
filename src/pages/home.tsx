import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ceci, ian, tomnora, write } from '../assets'
import { brand1, brand2, brand3, brand4, brand5, brand6 } from '../assets/img/brand'

export default function Home() {

    return (
        <>
        <header id="dsn_header" className="dsn-header-animation dsn-container section-padding v-light-head">
            <div className="entry-header p-relative over-hidden">
                <div id="hero_image" className="p-absolute dsn-hero-parallax-img over-hidden bytr" data-dsn-ajax="img" data-overlay="1">
                    <img src={ tomnora } className="cover-bg-img transform-3d" alt=""></img>
                </div>
                
                <div id="hero_content" className="d-flex p-relative h-100 dsn-hero-parallax-title container align-items-center pb-section ">
                    <div className="content p-relative ">
                        <div className="intro-project w-100">
                            <div className="intro-title ">
                                <div id="hero_title" className="mt-10">
                                    <h1 className="title text-upper">
                                        We are delivering beautiful digital products for you.
                                    </h1>
                                </div>
                                <p className="mt-20 max-w570">
                                    If you are looking for an agency to help you create a remarkable presence online, you’ve
                                    come to the right place. We can help you take your business to the next level.
                                </p>
                                <div className="dsn-def-btn dsn-hover-icon dsn-icon-heading-color mt-20 d-flex">
                                    <NavLink className="dsn-btn dsn-border border-color-default background-section has-icon-left" to="/signin" data-dsn-text="Sign In">
                                        <span className="dsn-icon dsn-bg-before btn-icon-left heading-color z-index-1">
                                            <i className="fas fa-angle-right" aria-hidden="true"></i>
                                        </span>
                                        <span className="title-btn p-relative  z-index-1 ">
                                            Try essai
                                        </span>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="architecture.html#page_wrapper" rel="nofollow" className="dsn-scroll-bottom" data-dsn-option="{&quot;ease&quot;: &quot;power4.inOut&quot; , &quot;duration&quot; : 1.5}">
                <div className="text">SCROLL</div>
            </a>
        </header>

        <div className="dsn-brand over-hidden mt-20">
            <div className="dsn-grid-layout  dsn-grid  section-image section-move-image use-horizontal-scroll-image"
                 data-dsn-option='{"start":"100%","end":"0%","pin":false}'>


                <div className="grid-item">
                    <div className="image-item">
                        <svg className="cover-bg-img" href={ brand1 } color='var(--font-color)'/>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="image-item">
                        <img className="cover-bg-img" src={ brand2 } alt=""/>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="image-item">
                        <img className="cover-bg-img" src={ brand3 } alt=""/>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="image-item">
                        <img className="cover-bg-img" src={ brand4 } alt=""/>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="image-item">
                        <img className="cover-bg-img" src={ brand5 } alt=""/>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="image-item">
                        <img className="cover-bg-img" src={ brand6 } alt=""/>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="image-item">
                        <img className="cover-bg-img" src={ brand1 } alt=""/>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="image-item">
                        <img className="cover-bg-img" src={ brand2 } alt=""/>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="image-item">
                        <img className="cover-bg-img" src={ brand3 } alt=""/>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="image-item">
                        <img className="cover-bg-img" src={ brand4 } alt=""/>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="image-item">
                        <img className="cover-bg-img" src={ brand5 } alt=""/>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="image-item">
                        <img className="cover-bg-img" src={ brand6 } alt=""/>
                    </div>
                </div>

            </div>
        </div>

        <div className="p-relative section-padding">
            <div className="container d-flex flex-column justify-content-center h-100">
                <h3 className="title-h2 text-upper text-white">
                    Need help with professional <br/>photography? <b>Let's work together!</b>
                </h3>
                <p className="mt-30 max-w570 text-white">
                    In my work, I try to find the right balance between form and function. From technical drawings, all
                    the way to the photographic renders, and the actual representations of my work as a designer, my
                    philosophy is that of simplicity.
                    <span className="mb-10 d-block text-white">
                    </span>
                    At the same time, my style is distinctly mine – uncluttered, with clean shapes and modern
                    space-saving solutions.
                </p>
                <div className="dsn-def-btn d-flex dsn-border-style dsn-icon-heading-color mt-30">
                    <a className="dsn-btn dsn-border border-color-default background-section  move-circle has-icon-left" href="/" data-dsn-text="Contact Us" data-dsn="parallax">
                        <span className="dsn-icon dsn-bg-before btn-icon-left heading-color z-index-1">
                            <i className="far fa-envelope-open"></i>
                        </span>
                        <span className="title-btn p-relative  z-index-1 text-white ">CONTACT US</span>
                    </a>
                </div>
            </div>
        </div>

        <div className="p-relative section-padding background-section ">
            <div className="background-overlay"></div>
            <div className="container">

                <div className="section-title mb-70 d-grid grid-md-2 ">
                    <div className=" d-flex">
                        <div className="sub-section-title ">
                            <span className="title-h2 title-block-lg d-block heading-color">
                                Build <b>faster</b> and <b>focus</b> on your <b>products</b>
                            </span>
                        </div>
                    </div>
                    <div className="dsn-normal-btn dsn-icon-heading-color d-flex align-self-end  justify-self-end">
                        <a className="dsn-btn dsn-border border-color-default background-main effect-ajax border-rdu move-circle"
                        data-dsn="parallax" href="contact.html" data-dsn-text="CONTACT US">
                            <span className="title-btn p-relative z-index-1">CONTACT US</span>
                        </a>
                    </div>
                </div>
                <div className="elementor-widget-dsn_testimonial" data-widget_type="dsn_testimonial.default">
                    <div className="dsn-testimonials dsn-swiper p-relative has-parallax-image" data-dsn-option='{"spaceBetween":20,"centeredSlides":false,"slidesPerView":4}'>
                        <div className="testimonials-content">
                            <div className="testimonial-inner">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    viewBox="0 0 509 396.83"
                                    enableBackground="new 0 0 509 396.83" xmlSpace="preserve">
                                    <g>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M105.098,396.83c-2.062,0-4.122,0-6.183,0 c0.123-48.731,0.116-97.466,0.493-146.195c0.062-7.844-3.65-8.881-10.09-8.843c-29.772,0.182-59.545,0.047-89.318,0.026 C0,161.382,0,80.947,0,0c81.742,0,163.484,0,245.227,0c0.023,83.874,0.496,167.752-0.071,251.624 c-0.436,64.131-47.354,121.936-109.503,136.974C125.404,391.076,115.279,394.073,105.098,396.83z M127.891,360.509 c6.063-1.545,10.049-2.226,13.799-3.568c42.174-15.098,74.277-58.896,74.735-104.55c0.718-71.273,0.187-142.558,0.454-213.837 c0.03-7.696-2.596-10.07-10.136-10.038c-55.961,0.236-111.927,0.287-167.887-0.042c-8.413-0.049-10.398,3.014-10.363,10.831 c0.254,54.408,0.317,108.815-0.047,163.22c-0.061,8.994,3.321,10.93,11.452,10.803c25.744-0.405,51.505,0.184,77.245-0.329 c8.78-0.174,10.986,2.931,10.911,11.301c-0.363,40.63-0.164,81.264-0.163,121.897C127.891,350.262,127.891,354.325,127.891,360.509 z"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M368.871,396.83c-2.061,0-4.122,0-6.184,0 c0.057-48.133-0.099-96.267,0.354-144.395c0.081-8.996-3.268-10.854-11.386-10.722c-26.047,0.42-52.108-0.083-78.152,0.299 c-7.577,0.108-10.083-2.194-10.053-9.942c0.294-77.357,0.262-154.713,0.322-232.07C345.353,0,426.929,0,509,0 c0,89.562,0,179.125,0,268.687c-1.256,3.464-2.793,6.854-3.73,10.401c-15.376,58.112-51.126,95.756-109.9,110.431 C386.48,391.735,377.7,394.382,368.871,396.83z M391.554,360.501c5.951-1.528,9.958-2.176,13.686-3.57 c43.103-16.135,74.464-59.44,74.864-105.611c0.616-70.931,0.138-141.869,0.404-212.803c0.03-7.722-2.58-10.037-10.111-10.005 c-55.963,0.24-111.926,0.285-167.889-0.036c-8.406-0.048-10.429,3.048-10.392,10.853c0.245,54.405,0.31,108.813-0.049,163.216 c-0.059,9.03,3.45,10.9,11.528,10.778c25.741-0.39,51.504,0.193,77.245-0.325c8.785-0.178,10.956,2.917,10.878,11.284 c-0.368,40.629-0.167,81.263-0.165,121.897C391.554,350.25,391.554,354.318,391.554,360.501z"/>
                                    </g>
                                </svg>
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide testimonial-inner-item background-main">
                                            <div className="testimonial-item">
                                                <div className="testimonial-content mb-25">
                                                    <div className="quote">
                                                        <p className="max-w750 testimonial-content p-large">
                                                            This theme is awesome and the designer is very helpful. I had a few questions purchase. He/She helped me with all the doubts. Also, they provide quick support. Thank you so much for a beautiful theme
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide testimonial-inner-item background-main">
                                            <div className="testimonial-item">
                                                <div className="testimonial-content mb-25">
                                                    <div className="quote">
                                                        <p className="max-w750 testimonial-content p-large">
                                                            This theme is awesome and the designer is very helpful. I had a few questions purchase. He/She helped me with all the doubts. Also, they provide quick support. Thank you so much for a beautiful theme
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="p-relative section-padding background-section ">
            <div className="background-overlay"></div>
            <div className="container">

                <div className="section-title mb-70 d-grid grid-md-2 ">
                    <div className=" d-flex">
                        <div className="sub-section-title ">
                            <p className="description d-inline-block p-relative circle-before mb-10">
                                <span>Join the Community</span>
                            </p>
                            <span className="title-h2 title-block-lg d-block heading-color">
                                Relationship <br/><b> Based on Trust</b>
                         </span>
                        </div>
                    </div>
                    <div className="dsn-normal-btn dsn-icon-heading-color d-flex align-self-end  justify-self-end">
                        <a className="dsn-btn dsn-border border-color-default background-main effect-ajax border-rdu move-circle"
                           data-dsn="parallax" href="contact.html" data-dsn-text="CONTACT US">
                            <span className="title-btn p-relative z-index-1">CONTACT US</span>
                        </a>
                    </div>
                </div>
                <div className="elementor-widget-dsn_testimonial" data-widget_type="dsn_testimonial.default">
                    <div className="dsn-testimonials dsn-swiper p-relative has-parallax-image" data-dsn-option='{"spaceBetween":30,"centeredSlides":false,"slidesPerView":2}'>
                        <div className="testimonials-content">
                            <div className="testimonial-inner">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                     viewBox="0 0 509 396.83"
                                     enableBackground="new 0 0 509 396.83" xmlSpace="preserve">
                                    <g>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M105.098,396.83c-2.062,0-4.122,0-6.183,0 c0.123-48.731,0.116-97.466,0.493-146.195c0.062-7.844-3.65-8.881-10.09-8.843c-29.772,0.182-59.545,0.047-89.318,0.026 C0,161.382,0,80.947,0,0c81.742,0,163.484,0,245.227,0c0.023,83.874,0.496,167.752-0.071,251.624 c-0.436,64.131-47.354,121.936-109.503,136.974C125.404,391.076,115.279,394.073,105.098,396.83z M127.891,360.509 c6.063-1.545,10.049-2.226,13.799-3.568c42.174-15.098,74.277-58.896,74.735-104.55c0.718-71.273,0.187-142.558,0.454-213.837 c0.03-7.696-2.596-10.07-10.136-10.038c-55.961,0.236-111.927,0.287-167.887-0.042c-8.413-0.049-10.398,3.014-10.363,10.831 c0.254,54.408,0.317,108.815-0.047,163.22c-0.061,8.994,3.321,10.93,11.452,10.803c25.744-0.405,51.505,0.184,77.245-0.329 c8.78-0.174,10.986,2.931,10.911,11.301c-0.363,40.63-0.164,81.264-0.163,121.897C127.891,350.262,127.891,354.325,127.891,360.509 z"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M368.871,396.83c-2.061,0-4.122,0-6.184,0 c0.057-48.133-0.099-96.267,0.354-144.395c0.081-8.996-3.268-10.854-11.386-10.722c-26.047,0.42-52.108-0.083-78.152,0.299 c-7.577,0.108-10.083-2.194-10.053-9.942c0.294-77.357,0.262-154.713,0.322-232.07C345.353,0,426.929,0,509,0 c0,89.562,0,179.125,0,268.687c-1.256,3.464-2.793,6.854-3.73,10.401c-15.376,58.112-51.126,95.756-109.9,110.431 C386.48,391.735,377.7,394.382,368.871,396.83z M391.554,360.501c5.951-1.528,9.958-2.176,13.686-3.57 c43.103-16.135,74.464-59.44,74.864-105.611c0.616-70.931,0.138-141.869,0.404-212.803c0.03-7.722-2.58-10.037-10.111-10.005 c-55.963,0.24-111.926,0.285-167.889-0.036c-8.406-0.048-10.429,3.048-10.392,10.853c0.245,54.405,0.31,108.813-0.049,163.216 c-0.059,9.03,3.45,10.9,11.528,10.778c25.741-0.39,51.504,0.193,77.245-0.325c8.785-0.178,10.956,2.917,10.878,11.284 c-0.368,40.629-0.167,81.263-0.165,121.897C391.554,350.25,391.554,354.318,391.554,360.501z"/>
                                    </g>
				                </svg>
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide testimonial-inner-item background-main">
                                            <div className="avatar box-img dsn-auto">
                                                <img src='https://ouch-cdn2.icons8.com/s_loNj12hwSJG8f8fZEoOA2k7ljTKibO21QwZpvD9mY/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjc3/LzFlY2M4MTg5LWJm/MmQtNDc1YS05NWI0/LTcyZTFhZmQxYTU2/Ni5zdmc.png' className="cover-bg-img" alt=''/>
                                            </div>
                                            <div className="testimonial-item">
                                                <div className="testimonial-content mb-25">
                                                    <div className="quote">
                                                        <p className="max-w750 testimonial-content p-large">
                                                            This theme is awesome and the designer is very helpful. I had a few questions purchase. He/She helped me with all the doubts. Also, they provide quick support. Thank you so much for a beautiful theme
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="content-inner border-top">
                                                    <div className="d-flex align-items-center ">
                                                        <div className="avatar box-img dsn-auto">
                                                            <img src='https://ouch-cdn2.icons8.com/s_loNj12hwSJG8f8fZEoOA2k7ljTKibO21QwZpvD9mY/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjc3/LzFlY2M4MTg5LWJm/MmQtNDc1YS05NWI0/LTcyZTFhZmQxYTU2/Ni5zdmc.png'
                                                                 className="cover-bg-img" alt=''/>
                                                        </div>
                                                        <div className="label box-text">
                                                            <h4 className="testimonial-name sm-title-block">MTL Graphic</h4>
                                                            <h5 className="testimonial-position">Graphic Design</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="dsn-swiper-paginate  d-flex p-relative w-100 h-100 mt-30 align-items-center container justify-content-between">
                                <div className="swiper-prev">
                                    <div className="prev-container">
                                        <div className="container-inner">
                                            <div className="triangle"></div>
                                            <svg className="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <g className="circle-wrap" fill ="none" strokeWidth="1"
                                                   strokeLinejoin="round" strokeMiterlimit="10">
                                                    <circle cx="12" cy="12" r="10.5"></circle>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-pagination  mr-30 ml-30 heading-color" data-dsn-type="bullets"></div>
                                <div className="swiper-next">
                                    <div className="next-container">
                                        <div className="container-inner">
                                            <div className="triangle"></div>
                                            <svg className="circle" xmlns="http://www.w3.org/2000/svg" width="24"
                                                 height="24" viewBox="0 0 24 24">
                                                <g className="circle-wrap" fill="none" strokeWidth="1"
                                                   strokeLinejoin="round" strokeMiterlimit="10">
                                                    <circle cx="12" cy="12" r="10.5"></circle>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </>
  )
}
