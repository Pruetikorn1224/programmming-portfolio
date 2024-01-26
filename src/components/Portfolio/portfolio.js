import React from 'react'
import './portfolio.css'
import PortfolioBlock from './portfolio-block.js'

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <div className='portfolioLine'></div>
        <span className='portfolioTitle'>Portfolio</span>
        <span className='portfolioDesc'>I am interested in developing virtual world's environment and story. I am confident in time management and enthusiasm to achieve my dream. I am excited to create the entertainment to share to the others with my skills.</span>
        <div className='portfolioBlocks'>
          <span className='portfolioSubtitle'>Industrial Programming</span>
          <PortfolioBlock name='projects'/>
          <span className='portfolioSubtitle'>Game Development</span>
          <PortfolioBlock name='games'/>
          <span className='portfolioSubtitle'>Extended Reality</span>
          <PortfolioBlock name='environments'/>
        </div>
    </section>
  )
}

// username: pruchiratt
// password: nVeR3fMRfrnQMtSl

export default Portfolio