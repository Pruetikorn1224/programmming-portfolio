import React, { useState, useRef, useEffect } from 'react'
import './works.css'
import CMKL from '../../assets/cmkl.png'
import CMKLLogo from '../../assets/cmkl-logo.png'
import Kurume from '../../assets/kurume.png'
import KurumeLogo from '../../assets/kurume-logo.jpeg'

const Works = () => {

    const [isIntersecting, setIsIntersecting] = useState(false);

    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        }, { rootMargin: "-100px" });

        console.log(isIntersecting);
        observer.observe(ref.current);

        return () => observer.disconnect();
      }, [isIntersecting])

    useEffect(() => {
        if (isIntersecting) {
            ref.current.querySelectorAll("div").forEach((el) => {
                el.classList.add("fade-in");
            });
        } else {
            ref.current.querySelectorAll("div").forEach((el) => {
                el.classList.remove("fade-in");
            });
        }

    }, [isIntersecting])

    return (
        <section id='works'>
            <span className='workTitle'>Internships</span>
            <div className='workBars' ref={ref}>
                <div className='workItem leftHand'>
                    <img src={CMKL} alt='CMKL University' className='workImg'/>
                    <img src={CMKLLogo} alt='CMKL Logo' className='workLogo'/>
                    <div className='workDesc'>
                        <h2><span>CMKL University</span>, Thailand</h2>
                        <h4>Backoffice Developer Intern</h4>
                        <p>June 2021 - December 2021</p>   
                    </div>
                </div>
                <div className='workItem rightHand'>
                    <img src={Kurume} alt='Kurume College' className='workImg'/>
                    <img src={KurumeLogo} alt='Kurume College Logo' className='workLogo'/>
                    <div className='workDesc'>
                        <h2><span>Kurume College</span>, Japan</h2>
                        <h4>Lab Assistant Intern</h4>
                        <p>July 2022</p>   
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Works