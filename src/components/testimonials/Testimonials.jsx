import React from 'react'
import './testimonials.css'
import apple from '../../assets/apple.png'
import FordC from '../../assets/FordC.jpg'
import DanOne from '../../assets/DanOne.jpg'
import YO3 from '../../assets/YO3.jpg'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: apple,
    name: 'Apple',
    review: 'Operation Specialist at Mexico’s first Apple Store, managing inventories and logistics issues, in addition to providing customer service | SAP Software',
    cta: 'https://drive.google.com/drive/folders/1znfwtWmKknHnz7oxZhzU6udKPiTRxDY8?usp=sharing'
  },
  {
    avatar: FordC,
    name: 'Ford Credit',
    review: 'Learning & Development Analyst | Internal and regional communication.'
  },
  {
    avatar: DanOne,
    name: 'Danone/Bonafont',
    review:  'Audiovisual Designer | Content creation, video edition and graphic material | Management of Creative Area'
  },
  {
    avatar: YO3,
    name: 'Personal and Freelance Projects',
    review: 'Experience creating diverse digital content from illustrations, VFX, video edition, apps etc... from diverse clients',
    cta: ''
  }
]



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Companies</h5>
      <h2>Work Experience</h2>
      

      <Swiper className="container testimonials__container"
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review, cta}, index) =>{
            return (
            
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                 <img src={avatar} alt={name} />
                </div>  
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                   {review} 
                </small>
                {cta ? <a href={cta} target={'_blank'} className="btn btn-primary">Media</a> : ''}
              </SwiperSlide>
            
            )
          })
        }

        
      </Swiper>
    </section>
  )
}

export default Testimonials