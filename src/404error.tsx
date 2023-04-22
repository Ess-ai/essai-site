import React from 'react'
import { err404img } from './assets'

export const Error404 = () => {
  return (
    <header id="dsn_header" className="dsn-header-animation dsn-full-header dsn-container section-padding header-normal v-dark">
        <div className="entry-header p-relative over-hidden">
            <div id="hero_image" className="p-absolute dsn-hero-parallax-img over-hidden z-index-0 full-width" data-dsn-ajax="img" data-overlay="2">
                <img className="cover-bg-img transform-3d" src={ err404img } alt=""/>
            </div>

            <div id="hero_content" className="d-flex align-items-end p-relative h-100 dsn-hero-parallax-title container">
                <div className="content p-relative ">
                    <div className="intro-project w-100">
                        <div className="intro-title ">
                            <div id="hero_title">
                                <h1 className="title" data-dsn-ajax="title">
                                    YOU SEEM LOST<br/>
                                    PAGE NOT FOUND
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <a className="background-main move-circle link-project p-absolute dsn-parallax-hover" href="/" target="_blank" rel="nofollow">
            GO BACK
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M213.333333 750.506667L665.173333 298.666667H384V213.333333h426.666667v426.666667h-85.333334V358.826667L273.493333 810.666667 213.333333 750.506667z"></path>
            </svg>

            <div className="icon-circle"></div>
        </a>

    </header>
  )
}
