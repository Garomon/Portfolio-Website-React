import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/IMG1.jpg'
import IMG2 from '../../assets/IMG2.png'
import IMG3 from '../../assets/IMG3.png'
import IMG4 from '../../assets/IMG4.png'
import IMG5 from '../../assets/IMG5.jpg'



const data = [

{
  id: 1,
  image: IMG1,
  title: 'Pomodoro Clock 25+5',
  github: 'https://github.com',
  demo: 'https://youtube.com'
},
{
  id: 2,
  image: IMG2,
  title: 'Drum Machine',
  github: 'https://github.com',
  demo: 'https://youtube.com'
},
{
  id: 3,
  image: IMG3,
  title: 'Javascript Calculator',
  github: 'https://github.com',
  demo: 'https://youtube.com'
},
{
  id: 4,
  image: IMG4,
  title: 'Random Quote Machine',
  github: 'https://github.com',
  demo: 'https://youtube.com'
},
{
  id: 5,
  image: IMG5,
  title: 'Markup Previewer',
  github: 'https://github.com',
  demo: 'https://youtube.com'
}
];


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
        {
          data.map(({id, image, title, github, demo}) => {
            return (
                <article key={id} className='portfolio__item'>
                <div className="portfolio__item-img">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} target={'_blank'} className="btn" >Github</a>
                  <a href={demo} target={'_blank'} className="btn btn-primary" >Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio