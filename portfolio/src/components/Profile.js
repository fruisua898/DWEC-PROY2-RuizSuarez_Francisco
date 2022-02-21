import '../components-css/Profile.css';
import React from 'react';
import Typical from 'react-typical';

const Profile = () => {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>

                <div className='skills'>

                    <div className='skills-icon'>
                    <img src="https://img.icons8.com/stickers/100/000000/python.png"/>
                    <img src="https://img.icons8.com/color/50/000000/html-5--v1.png"/>
                    <img src="https://img.icons8.com/color/48/000000/css3.png"/>
                    <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"/>
                    <img src="https://img.icons8.com/office/48/000000/react.png"/>
                    <img src="https://img.icons8.com/color/48/000000/javascript--v1.png"/>
                </div>
                </div>

                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hola, soy <span className="hightlighted-text">Francisco</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {" "}
                            <Typical
                            loop = {Infinity}
                            steps = {[
                                "Desarrollador Web",1000,
                                "Programación",1000,
                                "Front End",1000,
                                "Back End",1000,
                                "Full Stack",1000,
                            ]
                            }
                            >

                            </Typical>
                        </h1>
                        <span className='profile-role-tagline'>
                            Desarrollador Web
                        </span>
                    </span>
                </div>
                <div className='profile-options'>

                    <button className='btn btn-primary'>
                        {""}Contratame{""}
                    </button>

                        <a href='curriculum.pdf' download='curriculum.pdf'>
                            <button className='btn btn-light'>Descargar Curriculum</button>
                        </a>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile