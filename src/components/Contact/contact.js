import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'
import FacebookIcon from '../../assets/facebook.png'
import IndeedIcon from '../../assets/indeed.png'
import LinkedinIcon from '../../assets/linkedin.png'
import GithubIcon from '../../assets/github.png'
import MediumIcon from '../../assets/medium.png'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o293cf9', 'template_azqvgun', form.current, 'a1k6alHHj6xoO6IAX')
      .then((result) => {
          console.log(result.text);
          alert('Email has been sent successfully!');
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleClick = (myLink) => () => {
    window.location.href=myLink;
  }

  return (
    <section id='contact'>
        <div className='contactLine'></div>
        <span className='contactTitle'>Contact</span>
        <p className='contactDesc'>Please fill out the form below to discuss any work opportunity.</p>
        <form ref={form} onSubmit={sendEmail} className='contactForm'>
            <input type='text' className='name' name='from_name' placeholder='Your Name' />
            <input type='email' className='email' name='from_email' placeholder='Your Email'/>
            <textarea className='message' name='message' rows='5' placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className='submitBtn'>Submit</button>
        </form>
        <div className='socialContact'>
            <img src={FacebookIcon} onClick={handleClick("https://www.facebook.com/preutikorn.chirattitikarn")} alt='facebook' className='link'/>
            <img src={IndeedIcon} onClick={handleClick("https://profile.indeed.com/p/pruetikornc-yn9nb8y")} alt='indeed' className='link'/>
            <img src={LinkedinIcon} onClick={handleClick("https://www.linkedin.com/in/ch-pruetikorn")} alt='linkedin' className='link'/>
            <img src={GithubIcon} onClick={handleClick("https://github.com/Pruetikorn1224")} alt='github' className='link'/>
            <img src={MediumIcon} onClick={handleClick("https://medium.com/@p.chirattitikarn")} alt='medium' className='link'/>
        </div>
    </section>
  )
}

export default Contact