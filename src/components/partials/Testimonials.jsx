import React, { useState } from 'react';
import styled from 'styled-components';
import { testAnimation } from '../../animation';

function Testimonials() {
  const [selected, setSelected] = useState(0);
  const testimonial = [
    {
      review: 'High-Dimension Video is Video Of Higher Resolution And Quality Then Standard. Definition. High Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition. Build Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World Definition. High Definition video is video of higher resolution and quality than standard definition. Build Your Future With Our Quality resolution and quality than standard definition. Build Your Future With With Our Quality Education. The Best And Largest All In-One Online Tutoring Platform In The World',
      img: '/img/fr2.png',
      name: 'Bella Moon',
    },
    {
      review: 'High-Dimension Video is Video Of Higher Resolution And Quality Then Standard. Definition. High Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition. Build Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World Definition. High Definition video is video of higher resolution and quality than standard definition. Build Your Future With Our Quality resolution and quality than standard definition. Build Your Future With With Our Quality Education. The Best And Largest All In-One Online Tutoring Platform In The World',
      img: '/img/fr1.png',
      name: 'Samuel Fortune',
    },
    {
      review: 'High-Dimension Video is Video Of Higher Resolution And Quality Then Standard. Definition. High Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition. Build Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World Definition. High Definition video is video of higher resolution and quality than standard definition. Build Your Future With Our Quality resolution and quality than standard definition. Build Your Future With With Our Quality Education. The Best And Largest All In-One Online Tutoring Platform In The World',
      img: '/img/fr3.png',
      name: 'Bryce Jason',
    },
    {
      review: 'High-Dimension Video is Video Of Higher Resolution And Quality Then Standard. Definition. High Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition. Build Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World Definition. High Definition video is video of higher resolution and quality than standard definition. Build Your Future With Our Quality resolution and quality than standard definition. Build Your Future With With Our Quality Education. The Best And Largest All In-One Online Tutoring Platform In The World',
      img: '/img/fr3.png',
      name: 'Bryce Jason',
    }
  ];
  
  return (
    <Section >

  
  <div className="max-w-3xl mx-auto text-center pb-4 md:pb-4">
    <h1 className=" text-4xl font-sans font-extrabold mb-4"> What Our Clients Are Saying</h1>
    <p className="max-w-4xl p-4 lg:w-full md:w-9/12 md:mx-auto"> High-Dimension Video is Video Of Higher Resolution And Quality Then Standard. Definition. While There's No Standard Meaning For High Definition, Generally Any Standard Video Image.</p>
  </div>


  {/* Testimonials */}
  
      <div className="container">
        <div className= "testimonials"
        variants={testAnimation}
        transition = {{ delay: 0.02, 
        type: "tween",
        duration : 0.9,
      }}
        >
          {
            testimonial.map(({ name, img, review}, index)=> {
              return(
                <div className={`testimonial ${selected === index ? 'active' : 'hidden' }`} key ={index}>
                  <div className="title-container">
                    <p className='description'>
                      {review}
                    </p>
                    <div className='flex gap-4'>
                    <img src={img} alt="" />
                    <p className=' mt-2 font-bold text-lg '>
                      {name} <br />
                      <span className=' font-light text-base'> Product Designer</span>
                    </p>
                    </div>
                  </div>
                </div> 

              );
            })
          }
        </div>

        <div className='controls'
            variants={testAnimation}
            transition = {{ delay: 0.02, 
            type: "tween",
            duration : 0.9,
          }}
        >
          <button className = {selected === 0 ? 'active' : ''}
           onClick= {() => {
            setSelected (0);
          }}> </button>

               <button className = {selected === 1 ? 'active' : ''}
           onClick= {() => {
            setSelected (1);
          }}> </button>

               <button className = {selected === 2 ? 'active' : ''}
           onClick= {() => {
            setSelected (2);
          }}> </button>

              <button className = {selected === 3 ? 'active' : ''}
           onClick= {() => {
            setSelected (3);
          }}> </button>

        </div>
      </div>
    </Section>
  )
}

const Section = styled.section `

.container {
  display: flex;
  background:#fff;
  flex-direction: column;
  min-height: 60vh;
  justify-content: center;
  align-items:center;
  gap: 2rem;
  align-items: center;
  margin-bottom:20px;
  .testimonials{
    display: flex;
    align-items: center;
    gap: 1rem;
    text-align: justify;
    justify-content: center;
    width: 70%;
    .testimonial{
      display: flex;
      flex-direction: column;
      align-items:center;
      background:#B8B5FF;
      border-radius: 2%;
      gap: 1rem;     
    }
    .hidden{
      display: none;
    }
    color: #000;
    .title-container{
      padding: 5rem;
    }
  }
  .controls{
    display: flex;
    gap: 1rem;
    button{
      padding: 0.5rem;
      border-radius: 2rem;
      background-color:#B8B5FF;
      border: 0.1rem solid #004db1;
      cursor: pointer;
    }
    .active{
      background-color: #004db1 ;
      border: 0.1rem solid #004db1;
    }
  }
}



@media Screen and (min-width:280px) and (max-width: 1080px) {
  .container{
    padding: 2rem 0;
    .testimonials{
      width: 80%;
      margin-top: 1rem;
      .title-container{
        padding: 2rem;
      }
    }
  }
}
`

export default Testimonials