import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/IMG1.jpg'
import IMG2 from '../../assets/IMG2.png'
import IMG3 from '../../assets/IMG3.png'
import IMG4 from '../../assets/IMG4.png'
import IMG5 from '../../assets/IMG5.jpg'
import IMG6 from '../../assets/IMG6.jpg'
import IMG7 from '../../assets/IMG7.jpg'
import IMG8 from '../../assets/IMG8.jpg'
import IMG9 from '../../assets/IMG9.jpg'
import IMG10 from '../../assets/IMG10.jpg'
import IMG11 from '../../assets/IMG11.jpg'


const data = [
{
  id: 6,
  image: IMG6,
  title: 'React Portfolio Webpage',
  type: 'Web Page',
  github: 'https://github.com/Garomon/Portfolio-Website-React',
  demo: 'https://garomontoya.com'
},
{
  id: 1,
  image: IMG1,
  title: 'Pomodoro Clock 25+5',
  type: 'Project',
  github: 'https://github.com/Garomon/pomodoro-clock-react'
},
{
  id: 2,
  image: IMG2,
  title: 'Drum Machine',
  type: 'Project',
  github: 'https://github.com/Garomon/drum-machine-react'
},
{
  id: 3,
  image: IMG3,
  title: 'Javascript Calculator',
  type: 'Project',
  github: 'https://github.com/Garomon/Javascript-calculator-React'
},
{
  id: 4,
  image: IMG4,
  title: 'Random Quote Machine',
  type: 'Project',
  github: 'https://github.com/Garomon/repo-random-quote-machine-react'
},
{
  id: 5,
  image: IMG5,
  title: 'Markdown Previewer',
  type: 'Project',
  github: 'https://github.com/Garomon/markdown-previewer-react'
},
{
  id: 7,
  image: IMG7,
  title: 'Se Reirá',
  type: 'Short Film',
  watch: 'https://drive.google.com/file/d/17o6D4aRJjTo84n4BuNS7NvxhlopCf9gx/view?usp=sharing'
},
{
  id: 8,
  image: IMG8,
  title: 'La Llamada',
  type: 'Short Film',
  watch: 'https://drive.google.com/file/d/19sT6AhmyAJ292wKe7ElFzoNQjFzFui3e/view?usp=sharing'
},
{
  id: 9,
  image: IMG9,
  title: 'El Secreto de Sus Ojos',
  type: 'Audiovisual Analysis',
  watch: 'https://youtu.be/YllHCsivSRY'
},
{
  id: 10,
  image: IMG10,
  title: 'Intro Nipro',
  type: 'Digital Animation',
  watch: 'https://drive.google.com/file/d/1QLRRyyVv92Yf-WqPPthKEZfPHcDc8Ukh/view?usp=sharing'
},
{
  id: 11,
  image: IMG11,
  title: '"Chanfle" Opening Video',
  type: 'Audiovisual Product',
  watch: 'https://drive.google.com/file/d/1lEa8KFupLbYFq7akfoHI1vGaLT8HeeU-/view?usp=sharing'
}
];


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
        {
          data.map(({id, image, title, type, github, demo, watch}) => {
            return (
                <article key={id} className='portfolio__item'>
                <div className="portfolio__item-img">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h4 className='text-light'>{type}</h4>
                <div className="portfolio__item-cta">
                  {github ? <a href={github} target={'_blank'} className="btn">Github</a> : ''}
                  {watch ? <a href={watch} target={'_blank'} className="btn">Watch</a> : ''}
                  {demo ? <a href={demo} target={'_blank'} className="btn btn-primary">Live Demo</a> : ''}
                  
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