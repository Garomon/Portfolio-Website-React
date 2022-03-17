import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import YO from '../../assets/YO.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 className="text-light">Garo Montoya</h1>
        <h5>Front-End / React Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="yo">
          <img src={YO} alt="yo" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
        
      </div>
    </header>
  )
}



export default Header