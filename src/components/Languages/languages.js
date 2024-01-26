import React from 'react'
import './languages.css'
import THflag from '../../assets/thai-flag.gif'
import UKflag from '../../assets/uk-flag.gif'
import JPflag from '../../assets/japan-flag.gif'

const Languages = () => {
  return (
    <section id='languages'>
        <span className='languageTitle'>Languages</span>
        <div className='languageBlocks'>
           <div className='languageItem'>
              <img src={THflag} alt='Thai Language' className='flagName'/>
              <h3>Thai</h3>
              <p>Native</p>
           </div>
           <div className='languageItem'>
              <img src={UKflag} alt='English Language' className='flagName'/>
              <h3>English</h3>
              <p>IELTS 7.5</p>
           </div>
           <div className='languageItem'>
              <img src={JPflag} alt='Japanese Language' className='flagName'/>
              <h3>Japanese</h3>
              <p>Beginner</p>
           </div>
        </div>
    </section>
  )
}

export default Languages