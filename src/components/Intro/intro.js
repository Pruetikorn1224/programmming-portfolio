import React from 'react';
import './intro.css';
import profile from './../../assets/photo.png'


const Intro = () => {
  return (
    <section id='intro'>
        <img src={profile} alt='Profile' className='profile'/>
        <div className='introContent'>
            <span className='firstName'>Pruetikorn</span>
            <span className='lastName'>Chirattitikarn</span>
        </div>
    </section>
  )
}

export default Intro