import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {SiAdobephotoshop} from 'react-icons/si'
import {SiAdobeillustrator} from 'react-icons/si'
import {SiAdobeaftereffects} from 'react-icons/si'
import {SiAdobepremierepro} from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Wisdom</h5>
      <h2>My Experience</h2>
      
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>SASS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>

            
          </div>
        </div> 
         
        <div className="experience__backend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>jQuery</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Redux</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Adobe Creative Cloud</h4>
                <h2 className='text-light'> <SiAdobephotoshop className='Adobe-icons' /> <SiAdobeillustrator className='Adobe-icons'/> <SiAdobeaftereffects className='Adobe-icons' /> <SiAdobepremierepro className='Adobe-icons' /> </h2>
                <small className="text-light">Expert</small>
              </div>
            </article>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Experience