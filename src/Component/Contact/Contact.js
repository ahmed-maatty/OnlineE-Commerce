import React from 'react'
import './Contact.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMap ,faEnvelope,faPhone,faClock} from '@fortawesome/free-solid-svg-icons'

function Contact() {
    return (
        <div>
            <section className='shopheader AboutHeader'>
                <div>
                    <h1>#Let’s_talk</h1>
                    <p>Leave A Message We Love To Hear From You</p>
                </div>
            </section>

            {/*sectionContact*/}

            <section className='Contact'>
                <div className='contact-detail'>
                    <h4>get in touch</h4>
                    <h2>visit one of our agency location or contact us today</h2>
                    <h5>heaed office</h5>
                    <p><FontAwesomeIcon icon={faMap}/> <span>56 glassford street glassgow G11Ul newyork</span></p> 
                    <p><FontAwesomeIcon icon={faEnvelope}/> <span>contact@example.com</span></p>
                    <p><FontAwesomeIcon icon={faPhone}/> <span>contact@example.com</span></p>
                    <p><FontAwesomeIcon icon={faClock} /> <span>saturday to tuseday at : 9am to 20am</span></p>
                </div>
                <div className='inputs'>
                    <input type={'text'} placeholder = 'Your Name'/>
                    <input type={'email'} placeholder = 'Your E-mail'/>
                    <input type={'text'} placeholder = 'Subject'/>
                    <textarea placeholder='Your Message'/>
                    <button>Submit</button>
                </div>
            </section>


            {/*News letter*/}
            <section id='news-letter'>
                <div>
                    <h1>sign up for news letter</h1>
                    <h5>get e-mail updates about your latest shop and <span>special offers</span></h5>
                </div>
                <div>
                    <input type = 'text' placeholder = 'Your E-Mail Address' />
                    <input type = 'submit' value = 'Sign Up' />
                </div>
            </section>
        </div>
    )
}

export default Contact