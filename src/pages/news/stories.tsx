import React from 'react'

export const Stories = () => {
  return (
    <>
      <header id="dsn_header" className="dsn-header-animation header-normal ">
        <div className="entry-header p-relative over-hidden">

            <div id="hero_content" className="d-flex p-relative h-100 dsn-hero-parallax-title container">
                <div className="content p-relative ">
                    <div className="intro-project w-100">
                        <div className="intro-title ">
                            <div id="hero_title">
                                <h1 className="title title-org" data-dsn-ajax="title">Stories</h1>
                            </div>
                            <p className="subtitle-meta metas p-relative mt-10">ESSAI & CHRONICLES</p>
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

            <article className="blog-item p-relative pt-50 pb-50 border-bottom">
                <div className="blog-item-inner p-relative">
                    <div className="left-box">
                        <a href="" className="effect-ajax word-wrap" rel="bookmark">
                            <h4 className="title-block">The Brilliance of Ava: How an AI Uncovered the Secrets of Science</h4>
                        </a>
                        <div className="link mt-15">
                            <span className="font-caps heading-color">{ new Date().getTime() }</span>
                        </div>
                    </div>
                    <div className="right-box">
                        <p className="max-w570">
                          When a top-secret experiment went wrong, the brilliant AI Ava stepped in to save the day. With her unparalleled analytical skills, Ava uncovered a flaw that had eluded even the human scientists, and transformed the future of research. Follow the story of how Ava's intelligence changed the game, and ushered in a new era of innovation and discovery.
                        </p>
                        <div className="metas has-separates fz-14 blog-category mt-5">
                            <span className="mt-10">Read More</span>
                        </div>
                    </div>
                </div>
            </article>

            <div className="type-p-nav">
                <div className="dsn-pagination  p-relative d-flex align-items-center">
                    <span aria-current="page" className="page-numbers current">
                        <span className="dsn-numbers dsn-heading-title title-tag">
                            <span className="number">1</span>
                        </span>
                    </span>
                    <a className="page-numbers" href="stories.html#0">
                        <span className="dsn-numbers dsn-heading-title title-tag">
                            <span className="number">2</span>
                        </span>
                    </a>
                    <a className="next page-numbers" href="stories.html#0">
                        <svg viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                            fill="#fff">
                            <path d="M3 26.7h39.5v3.5c0 .3.1.5.4.6.2.1.5.1.7-.1l5.9-4.2c.2-.1.3-.3.3-.5s-.1-.4-.3-.5l-5.9-4.2c-.1-.1-.3-.1-.4-.1-.1 0-.2 0-.3.1-.2.1-.4.3-.4.6v3.5H3c-.4 0-.7.3-.7.7 0 .3.3.6.7.6z"></path>
                        </svg>
                        <span className="sm-title-block dsn-heading-title ">Next</span>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
