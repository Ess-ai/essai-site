import React from 'react'

const Preloader = () => {
  return (
    <div id="dsn_preloader" className="preloader">
        
        <div className="v-middle">
            <img src="src/assets/img/lg-l.png" className="logo-dark" alt="Essai" decoding="async" loading="lazy"/>
            <div className="loader">
                <div className="loading">
                </div>
            </div>
        </div>

        <div className="bg-load background-section d-flex align-items-end">
            <svg className="dsn-separator-bottom dsn-icon-assistant-color" width="100%" height="100%" viewBox="0 0 100 10"
                preserveAspectRatio="none">
                <path className="path-anim separator__path" data-dsn-to="M 0 0 C 40 0 55 0 100 0 L 0 0 Z"
                    vectorEffect="non-scaling-stroke" d="M 0 0 C 40 16 75 10 100 0 L 0 0 Z"></path>
            </svg>
        </div>

    </div>
  )
}

export default Preloader