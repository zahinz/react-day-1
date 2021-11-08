import React from 'react'
import './footer.css'

class Footer extends React.Component {
    render() {
        return(
            <div className='footer'>
                <footer>
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
                </footer>
                <div id='copyright'>
                    <p>First React project by Zahinzul 2021</p>
                </div>
            </div>
        )
    }
}

export default Footer