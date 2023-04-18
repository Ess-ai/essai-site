import React from 'react'

export const Events = () => {
  return (
    
    <>
      <header id="dsn_header" className="dsn-header-animation header-normal ">
        <div className="entry-header p-relative over-hidden">

            <div id="hero_content" className="d-flex p-relative h-100 dsn-hero-parallax-title container">
                <div className="content p-relative ">
                    <div className="intro-project w-100">
                        <div className="intro-title ">
                            <div id="hero_title">
                                <h1 className="title title-org" data-dsn-ajax="title">EVENTS</h1>
                            </div>
                            <p className="subtitle-meta metas p-relative mt-10">UPCOMING EVENTS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <a href="#page_wrapper" rel="nofollow" className="dsn-scroll-bottom"
          data-dsn-option='{"ease": "power4.inOut" , "duration" : 1.5}'>
            <div className="text">SCROLL</div>
        </a>

      </header>

      <div id="page_wrapper" className="wrapper">
        <div className="root-blog container section-margin  dsn-blog">
          <div id="hero_title" className="mt-10">
              <h1 className="title text-upper text-red">
                SORRY
                THERE IS CURRENTLY NO EVENTS AVAILABLE.
              </h1>
          </div>
        </div>
      </div>
    </>
  )
}
