import React from 'react'
import './header.css'

class Header extends React.Component {
    render() {
        return(
            <header>
                <div>
                    <h1>REACT</h1>
                </div>
                <div>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#work">Work</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><button>Sign in</button></li>
                        <li><button className='sign-up-btn'>Sign Up</button></li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header