import React from 'react'
import './contact.css'

class Contact extends React.Component {
    render() {
        return(
            <section id='contact'>
                <div className='contact-container'>
                    <div className='contact-container-top'>
                       <p className='title'>Subscribe Newletter</p>
                       <p className='body'>Update with our milestone.</p>
                       <form>
                            <input class='input-email' type="email" id="email" name="email"/>
                            <button type="submit" id="submit">Submit</button>
                       </form>
                    </div>
                    <div className='contact-container-bottom'>
                        
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact