import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <header id="dsn_header" className="dsn-header-animation header-normal">
        <div className="entry-header p-relative over-hidden">

            <div id="hero_content" className="d-flex p-relative h-100 dsn-hero-parallax-title container align-items-center pb-section ">
                <div className="content p-relative ">
                    <div className="intro-project w-100">
                        <div className="intro-title ">
                            <p className="dsn-heading-title d-inline-block circle-before">Welcome </p>
                            <div id="hero_title" className="mt-10">
                                <h1 className="title text-upper">We are delivering beautiful <br/>digital products for you.
                                </h1>
                            </div>
                            <p className="mt-20 max-w570">
                                If you are looking for an agency to help you create a remarkable presence online, you’ve
                                come to the right place. We can help you take your business to the next level.
                            </p>
                            <div className="dsn-def-btn dsn-hover-icon dsn-icon-heading-color mt-20 d-flex">
                                <Link className="dsn-btn dsn-border border-color-default background-section has-icon-left" to="/signin" data-dsn-text="Sign In">
                                    <span className="dsn-icon dsn-bg-before btn-icon-left heading-color z-index-1">
                                        <i className="fas fa-angle-right" aria-hidden="true"></i>
                                    </span>
                                    <span className="title-btn p-relative  z-index-1 ">Try essai</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a href="service.html#page_wrapper" rel="nofollow" className="dsn-scroll-bottom" data-dsn-option="{&quot;ease&quot;: &quot;power4.inOut&quot; , &quot;duration&quot; : 1.5}">
            <div className="text">SCROLL</div>
        </a>
    </header>
    </div>
  )
}
