import React from 'react'
import './about.css'

class About extends React.Component {
    render() {
        return(
            <section id='about'>
                <div className='about-container'>
                    <div className='about-container-top'>
                        <p className='title'>Know the Team</p>
                        <p className='body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                    <div className='about-container-bottom'>
                        <div className='content'>
                            <div className='element'>
                                <i class="fas fa-user-ninja"></i>
                            </div>
                            <p className='subtitle'>Arwin Goo</p>
                            <p className='body'>Migration is to control the creation of table.</p> 
                            <div>
                                <i class="fab fa-github"></i>
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-dribbble"></i>
                            </div>
                        </div>
                        <div className='content'>
                            <div className='element'>
                                <i class="fas fa-user-injured"></i>
                            </div>
                            <p className='subtitle'>Amir Hakim</p>
                            <p className='body'>Policy to authorize user actions against a given resource</p> 
                            <div>
                                <i class="fab fa-github"></i>
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-dribbble"></i>
                            </div>
                        </div>
                        <div className='content'>
                            <div className='element'>
                                <i class="fas fa-user-secret"></i>
                            </div>
                            <p className='subtitle'>Zahin Zul</p>
                            <p className='body'>Seeding is to inject database using seed class.</p> 
                            <div>
                                <i class="fab fa-github"></i>
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-dribbble"></i>
                            </div>
                        </div>
                    </div>
                    <div className='about-container-cta'>
                        <button>Know more</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default About