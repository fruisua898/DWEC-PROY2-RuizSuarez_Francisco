import '../components-css/Academics.css';
import React from 'react';
import Typical from 'react-typical';

const Academics = () => {
  return (
    <div className='academics-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Mi información <span className="hightlighted-text">académica</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                                <p class="lead">Sistemas Microinformáticos y Redes</p>
                                <p class="lead">Desarrollo de Aplicaciones Web</p>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Academics