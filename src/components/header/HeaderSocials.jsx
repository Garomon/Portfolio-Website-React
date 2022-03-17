import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/edgardo-montoya-de-tellitu/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Garomon" target="_blank"><BsGithub /></a>
        <a href="https://www.youtube.com/channel/UCT8dGmTg-80mjYbj87OgUvA" target="_blank"><BsYoutube /></a>
    </div>
  )
}

export default HeaderSocials