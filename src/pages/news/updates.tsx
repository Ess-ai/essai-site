import React from 'react'

export const Updates = () => {
  return (
    
    <>
      <header id="dsn_header" className="dsn-header-animation header-normal ">
        <div className="entry-header p-relative over-hidden">

            <div id="hero_content" className="d-flex p-relative h-100 dsn-hero-parallax-title container">
                <div className="content p-relative ">
                    <div className="intro-project w-100">
                        <div className="intro-title ">
                            <div id="hero_title">
                                <h1 className="title title-org" data-dsn-ajax="title">UPDATES</h1>
                            </div>
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
              <h1 className="title text-red">
                We will Release our Product soon. Join our waiting list to get updated.
              </h1>
          </div>
        </div>
      </div>
    </>
  )
}
