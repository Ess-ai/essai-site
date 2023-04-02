import { Link } from 'react-router-dom';
import { stories } from '../../assets';

const Signin = () => {
    return (
        <header id="dsn_header" className="dsn-header-animation dsn-full-header dsn-container section-padding header-normal v-dark">
        <div className="entry-header p-relative over-hidden">
            <div id="hero_image" className="p-absolute dsn-hero-parallax-img over-hidden z-index-0 full-width" data-dsn-ajax="img" data-overlay="2">
                <img className="cover-bg-img transform-3d" src={ stories } alt=""/>
            </div>
            <div className="d-grid grid-md-2 p-relative">
                <div id="hero_content" className="d-flex p-relative h-100 dsn-hero-parallax-title dsn-container align-items-center pb-section pb-col">
                    <div className="content p-relative">
                        <div className="intro-project w-100">
                            <div className="intro-title ">
                                <div id="hero_title" className="mt-20">
                                    <h1 className="title">
                                        Niemann Stories<br/>
                                        Those who tell the stories rule the world
                                    </h1>
                                </div>
                                <p className="mt-20 max-w570">
                                   Do not have an account?
                                </p>
                                <div className="dsn-def-btn dsn-hover-icon dsn-icon-heading-color mt-20 d-flex">
                                    <Link className="dsn-btn dsn-border border-color-default  background-section effect-ajax has-icon-left"
                                       to="/signup" data-dsn-text="SIGN UP">
                                        <span className="dsn-icon dsn-bg-before btn-icon-left heading-color z-index-1">
                                        </span>
                                        <span className="title-btn p-relative  z-index-1 ">
                                            SIGN UP
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div id="hero_content" className="d-flex p-relative contact-form over-hidden container align-items-center h-100 dsn-hero-parallax-title pb-section">
                    <div className="content box-form">
                        <h2 className="title-h2 ">LOG IN </h2>
                        <p className="mt-10">Enter your details.</p>
                        <div className="dsn-form mt-20 form-box d-flex flex-column">
                            <form id="contact-form" className="form w-100" method="post" action=""
                                  data-toggle="validator">
                                <div className="messages"></div>
                                <div className="input__wrap controls">
                                    <div className="form-group dsn-up">
                                        <div className="entry-box">
                                            <input id="form_name" type="text" name="name" placeholder="Type your name" required
                                            data-error="name is required."
                                            />
                                        </div>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-group dsn-up">
                                        <div className="entry-box">
                                            <input id="form_email" type="email" name="email"
                                            placeholder="Type your Email Address" required data-error="Valid email is required."
                                            />
                                        </div>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="image-zoom move-circle border-color-default border-style border-rdu bg-blue"
                                         data-dsn="parallax">
                                        <input type="submit" value="LOG IN"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        <a className="background-main move-circle link-project p-absolute dsn-parallax-hover" href="/" target="_blank" rel="nofollow">
            VISIT SITE
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M213.333333 750.506667L665.173333 298.666667H384V213.333333h426.666667v426.666667h-85.333334V358.826667L273.493333 810.666667 213.333333 750.506667z"></path>
            </svg>

            <div className="icon-circle"></div>
        </a>

    </header>
    )
  }

export default Signin;