import React from 'react'
// import the css file which placed in the same directory
import './work.css'

class Work extends React.Component {
    render() {
        return(
            <section id='work'>
                <div className='work-container'>
                    <div className='work-container-left'>
                        <i class="far fa-file-code"></i>
                    </div>
                    <div className='work-container-right'>
                        <p className='subtitle'>3 months of experience</p>
                        <p className='title'>Portfolio</p>
                        <p className='body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        <button className='sign-up-btn'>Explore our works</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Work