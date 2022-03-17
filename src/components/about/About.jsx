import React from 'react'
import './about.css'
import YO from '../../assets/YO.png'
import YO3 from '../../assets/YO3.jpg'
import {FaAward} from 'react-icons/fa'
import {GiGiftOfKnowledge} from 'react-icons/gi'
import {MdOutlineSchool} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={YO3} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>6+ Years Working</small>
            </article>

            <article className="about__card">
              <GiGiftOfKnowledge className='about__icon'/>
              <h5>Certifications</h5>
              <small>900+ hours</small>
            </article>

            <article className="about__card">
              <MdOutlineSchool className='about__icon'/>
              <h5>Bachelor + Master's</h5>
              <small>Completed</small>
            </article>
          </div>

          <p>Solid knowledge in <b>React library</b> for building user interfaces, <b>Responsive Web Design</b> and the most popular <b>Front End libraries/frameworks</b> in the industry (Bootstrap, Redux, etc…)</p>
          <p>Video edition/production and VFX work experience in Great Place to Work-Certified companies and extensive capacity for learning and teaching..</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                    
        </div>
      </div>
     
    </section>
  )
}

export default About