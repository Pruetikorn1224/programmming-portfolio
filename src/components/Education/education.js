import React, { useState, useRef, useEffect } from 'react'
import './education.css'
import KMITL from '../../assets/kmitl.png'
import KMITLLogo from '../../assets/kmitl-logo.png'
import ThomasMore from '../../assets/thomasmore.png'
import ThomasMoreLogo from '../../assets/thomasmore-logo.png'
import UCL from '../../assets/ucl.png'
import UCLLogo from '../../assets/ucl-logo.png'

const Education = () => {

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
        <section id='education'>
            <div className='educationLine'></div>
            <span className='educationTitle'>Education</span>
            <div className='educationBars' ref={ref}>
                <div className='educationItem leftBlock'>
                    <img src={KMITL} alt='KMITL' className='educationImg'/>
                    <img src={KMITLLogo} alt='KMITL Logo' className='educationLogo'/>
                    <div className='educationDesc'>
                        <h2><span>KMITL</span>, Thailand</h2>
                        <h4>BE in Robotics and AI Engineering (First Class Honors)</h4>
                        <p>August 2019 - June 2023</p>   
                    </div>
                </div>
                <div className='educationItem rightBlock'>
                    <img src={ThomasMore} alt='Thomas More University' className='educationImg'/>
                    <img src={ThomasMoreLogo} alt='Thomas More Logo' className='educationLogo'/>
                    <div className='educationDesc'>
                        <h2><span>Thomas More University</span>, Belgium</h2>
                        <h4>BSc in Applied Computer Science (Exchange Programme)</h4>
                        <p>September 2022 - January 2023</p>   
                    </div>
                </div>
                <div className='educationItem leftBlock'>
                    <img src={UCL} alt='University College London' className='educationImg'/>
                    <img src={UCLLogo} alt='UCL Logo' className='educationLogo'/>
                    <div className='educationDesc'>
                        <h2><span>University College London</span>, UK</h2>
                        <h4>Computer Graphics, Vision and Imaging MSc</h4>
                        <p>September 2023 - Present</p>   
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education