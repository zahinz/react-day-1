import React from 'react'
// import the css file which placed in the same directory
import './home.css'

class Home extends React.Component {
    render() {
        return(
            // styling using JSX
            // first curly braces is for template string inside React DOM
            // second curly braces for declare object
            <section id='home'>
                <div className='home-container'>
                    <div className='home-container-left'>
                        <p className='subtitle'>30 days free trial</p>
                        <p className='title'>Laravel should be easy</p>
                        <p className='body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        <button className='sign-up-btn'>Get started</button>
                    </div>
                    <div className='home-container-right'>
                        <i class="fab fa-laravel"></i>
                    </div>
                </div>
            </section>
        )
    }
}

const styles = {
    titleText: {
        fontSize: 50,
        fontWeight: 'bold',
        letterSpacing: '10px',
    }
}

export default Home