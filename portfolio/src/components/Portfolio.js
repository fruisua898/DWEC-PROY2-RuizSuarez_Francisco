import '../components-css/Portfolio.css';


import React from 'react'

const Portfolio = () => {
  return (

<div className='portfolio-container'>
<div className='portfolio-parent'>
    <div className='profile-details'>
        <div className='profile-details-name'>
            <span className='primary-text'>
              Trabajos realizados
            </span>
        </div>
          <a href="https://despliegues-franciscoruiz.000webhostapp.com/index.html">    
            <button className='btn btn-primary'>Critical Blunder</button>
          </a>
    </div>
</div>
</div>
  )
}

export default Portfolio