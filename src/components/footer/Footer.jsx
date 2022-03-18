import React from 'react'
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>GARO MONTOYA</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/Garomon" target='_blank'><BsGithub/></a>
        <a href="https://www.instagram.com/garomonoficial/" target='_blank'><FaInstagram/></a>
        <a href="https://twitter.com/Garo_Montoya"target='_blank'><FaTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Garo Montoya. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer