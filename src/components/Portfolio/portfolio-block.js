import React from 'react'
import './portfolio.css'
import Records from '../../assets/data.json'


const PortfolioBlock = (props) => {
  const record = Records[props.name];

  const handleClick = (myLink) => () => {
    window.location.href=myLink;
  }

  return (
    <div className='portfolioBlock'>
      {
        record.map(lastestData => (
          <div className='portfolioCard' onClick={handleClick(lastestData.link)} key={lastestData.id}>
            <img src={require('../../assets/projects' + lastestData.image)} alt={lastestData.name} className='portfolioImg'/>
            <h3>{lastestData.name}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default PortfolioBlock