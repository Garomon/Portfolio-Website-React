import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Skills</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Leadership</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Effective Communication</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Resilience</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Positivity</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Open-Minded</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integrity</p>
            </li>
            
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>React Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>HTML + CSS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>JSX</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>JavaScript Fundamentals + ES6</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Git</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Node + npm</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Redux</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive Web Design</p>
            </li>
            
          </ul>
        </article>
        {/* END OF Web Development */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Audiovisual Production process</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Video Edition</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Narrative analysis</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>VFX</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Photography</p>
            </li>
            
          </ul>
        </article>
        {/* END OF Content Creation */}
        
      </div>
    </section>
  )
}

export default Services