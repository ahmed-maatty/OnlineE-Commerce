import React from 'react'
import './About.css'


function About() {
    return (
        <div>
            <section className='shopheader AboutHeader'>
                <div>
                    <h1>#KnowUs</h1>
                    <p>Lorem Inspum Dolor Sit Amit ,Consectetur</p>
                </div>
            </section>

            {/*start who we are*/}
            <section className='whoWeAre'>
                <div className='aboutImg'>
                    <img src = {require('../../assets/about/a6.jpg')} />
                </div>
                <div className='whoWeAreContent'>
                    <h1>who we are !?</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.</p>
                </div>
            </section>

            {/*start-Downloas*/}
            <section className='OurApp'>
                <h1>Download Our  <span>App</span></h1>
                <video width="60%" height="60%" controls autoPlay = {true} loop muted >
                    <source src = {require('../../assets/about/1.mp4')} type="video/mp4"/>
                </video>
            </section>

            {/*start-features*/}
            <section id = 'features'>
                <div className='feature-box'>
                    <div className='feature-boxes'>
                        <img src = {require('../../assets/features/f1.png')}/>
                        <h5>free shipping</h5>
                    </div>
                    <div className='feature-boxes'>
                        <img src = {require('../../assets/features/f2.png')}/>
                        <h5>online order</h5>
                    </div>
                    <div className='feature-boxes'>
                        <img src = {require('../../assets/features/f3.png')}/>
                        <h5>free shipping</h5>
                    </div>
                    <div className='feature-boxes'>
                        <img src = {require('../../assets/features/f4.png')}/>
                        <h5>free shipping</h5>
                    </div>
                    <div className='feature-boxes'>
                        <img src = {require('../../assets/features/f5.png')}/>
                        <h5>free shipping</h5>
                    </div>
                    <div className='feature-boxes'>
                        <img src = {require('../../assets/features/f6.png')}/>
                        <h5>free shipping</h5>
                    </div>
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

export default About