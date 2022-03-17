import React from 'react'
import './testimonials.css'
import IMG1 from '../../assets/IMG1.jpg'
import IMG2 from '../../assets/IMG2.png'
import IMG3 from '../../assets/IMG3.png'
import IMG4 from '../../assets/IMG4.png'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: IMG1,
    name: 'Tina Snow',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident repellendus harum eligendi nam cupiditate corrupti rerum magni, dignissimos obcaecati voluptatum ut accusantium illum. Distinctio dolores sunt pariatur quibusdam labore voluptatibus fugit magnam rem vitae dolor, quos debitis exercitationem quasi cumque!'
  },
  {
    avatar: IMG2,
    name: 'Shatta Wale',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident repellendus harum eligendi nam cupiditate corrupti rerum magni, dignissimos obcaecati voluptatum ut accusantium illum. Distinctio dolores sunt pariatur quibusdam labore voluptatibus fugit magnam rem vitae dolor, quos debitis exercitationem quasi cumque!'
  },
  {
    avatar: IMG3,
    name: 'Kwame Despite',
    review:  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident repellendus harum eligendi nam cupiditate corrupti rerum magni, dignissimos obcaecati voluptatum ut accusantium illum. Distinctio dolores sunt pariatur quibusdam labore voluptatibus fugit magnam rem vitae dolor, quos debitis exercitationem quasi cumque!'
  },
  {
    avatar: IMG4,
    name: 'Nama amamamamaxd',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident repellendus harum eligendi nam cupiditate corrupti rerum magni, dignissimos obcaecati voluptatum ut accusantium illum. Distinctio dolores sunt pariatur quibusdam labore voluptatibus fugit magnam rem vitae dolor, quos debitis exercitationem quasi cumque!'
  }
]



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      

      <Swiper className="container testimonials__container"
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) =>{
            return (
            
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                 <img src={avatar} alt={name} />
                </div>  
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                   {review} 
                </small>
              </SwiperSlide>
            
            )
          })
        }

        
      </Swiper>
    </section>
  )
}

export default Testimonials