import React, { useState, useEffect } from "react"
import './skills.css'
import Records from '../../assets/data.json'

const Skills = () => {

  const record = Records["skills"];

  const [index, setIndex] = useState(0);
  const [skill, setSkill] = useState({});
  const [images, setImages] = useState([]);
  const [fade, setFade]= useState(0);

  useEffect(() => {

    setSkill(record[index]);
    setImages(record[index].img);
    setFade(1);

  }, [index, record]);

  return (
    <section id='skills'>
        <div className='skillLine'></div>
        <span className='skillTitle'>Interests</span>
        <div className='skillBars'>
            {
              record.map(data => (
                <div className={ `skillItem ${index === record.indexOf(data) ? "selectedItem" : ""}` } 
                     onClick={() => setIndex(record.indexOf(data))} 
                     key={record.indexOf(data)}>
                  <img src={require('../../assets/' + data.main_img)}  alt={data.title} className='skillImg'/>
                </div>
              ))
            }
        </div>
        <div className='skillText' onAnimationEnd={() => setFade(0)} fade={fade}>
            <h2>{skill.title}</h2>
            <p>{skill.desc}</p>
            {
              images.map(image => (
                  <img src={require('../../assets/' + image)}  alt={image} className='programImg' key={images.indexOf(image)}/>
              ))
            }
        </div> 
    </section>
  )
}

export default Skills