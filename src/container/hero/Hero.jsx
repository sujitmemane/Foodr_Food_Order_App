import React from 'react'
import HeaderImage from '../../assets/logo.jpg'
import { IoAdd } from "react-icons/io5";
import './hero.css'
const Hero = () => {
  return (
    <section className='foodOrder__hero'>
      <div className='container'>
        <div className='hero-sec'>
                 
                <div className='hero-text'>
                   <h1>
                    Fastest  <span className='highlight'>Delivery </span> &  Easy  <span className='highlight'>Pickup</span>.
                   </h1>
                   <p>
                    Foodr assures fresh food every morning to your family without getting out in this pandemic.
                   </p>
                   <a className='btn-order' href='#cart'>
                    Order Now <IoAdd size={27} color='white'/>
                   </a>
                </div>
                <div className='hero-img'>
                <img src={HeaderImage} alt='Main-Image' />
                </div>
         
        </div>
      </div>
    </section>
  )
}

export default Hero
