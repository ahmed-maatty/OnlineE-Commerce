import React from 'react';
import'./Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faStar , faCartShopping} from '@fortawesome/free-solid-svg-icons'


function Header() {
    return (
        <div>
            <section id = 'home'>
                    <div className='home-content'>
                        <span className='header-first-span'>trade-in-offer</span>
                        <h1>
                            <span>super value deals</span>
                            <span>on all products</span>
                        </h1>
                        <p>save more with coupons & up to 70% off!</p>
                        <button>Shop Now</button>
                    </div>
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

            {/*start-product*/}
            <section id = 'product'>
                <h1 className='product-title'>featured product</h1>
                <p className='product-paragraph'>summer collection new modern design</p>
                <div className='pro-container'>
                    <div className='product'>
                        <img src = {require('../../assets/products/f1.jpg')}/>
                        <div className='product-details'>
                            <span>adidas</span>
                            <h4>cartoon astronut T-shirt</h4>
                            <div className='stars'>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </div>
                            <div className='price'>
                                <h3>$75</h3>
                                <span><FontAwesomeIcon icon= {faCartShopping}/></span>
                            </div>
                        </div>
                    </div>
                    <div className='product'>
                        <img src = {require('../../assets/products/f2.jpg')}/>
                        <div className='product-details'>
                            <span>adidas</span>
                            <h4>cartoon astronut T-shirt</h4>
                            <div className='stars'>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </div>
                            <div className='price'>
                                <h3>$60</h3>
                                <span><FontAwesomeIcon icon= {faCartShopping}/></span>
                            </div>
                        </div>
                    </div>
                    <div className='product'>
                        <img src = {require('../../assets/products/f3.jpg')}/>
                        <div className='product-details'>
                            <span>adidas</span>
                            <h4>cartoon astronut T-shirt</h4>
                            <div className='stars'>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </div>
                            <div className='price'>
                                <h3>$90</h3>
                                <span><FontAwesomeIcon icon= {faCartShopping}/></span>
                            </div>
                        </div>
                    </div>
                    <div className='product'>
                        <img src = {require('../../assets/products/f4.jpg')}/>
                        <div className='product-details'>
                            <span>adidas</span>
                            <h4>cartoon astronut T-shirt</h4>
                            <div className='stars'>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </div>
                            <div className='price'>
                                <h3>$55</h3>
                                <span><FontAwesomeIcon icon= {faCartShopping}/></span>
                            </div>
                        </div>
                    </div>
                    <div className='product'>
                        <img src = {require('../../assets/products/f5.jpg')}/>
                        <div className='product-details'>
                            <span>adidas</span>
                            <h4>cartoon astronut T-shirt</h4>
                            <div className='stars'>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </div>
                            <div className='price'>
                                <h3>$55</h3>
                                <span><FontAwesomeIcon icon= {faCartShopping}/></span>
                            </div>
                        </div>
                    </div>
                    <div className='product'>
                        <img src = {require('../../assets/products/f6.jpg')}/>
                        <div className='product-details'>
                            <span>adidas</span>
                            <h4>cartoon astronut T-shirt</h4>
                            <div className='stars'>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </div>
                            <div className='price'>
                                <h3>$55</h3>
                                <span><FontAwesomeIcon icon= {faCartShopping}/></span>
                            </div>
                        </div>
                    </div>
                    <div className='product'>
                        <img src = {require('../../assets/products/f7.jpg')}/>
                        <div className='product-details'>
                            <span>adidas</span>
                            <h4>cartoon astronut T-shirt</h4>
                            <div className='stars'>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </div>
                            <div className='price'>
                                <h3>$55</h3>
                                <span><FontAwesomeIcon icon= {faCartShopping}/></span>
                            </div>
                        </div>
                    </div>
                    <div className='product'>
                        <img src = {require('../../assets/products/f8.jpg')}/>
                        <div className='product-details'>
                            <span>adidas</span>
                            <h4>cartoon astronut T-shirt</h4>
                            <div className='stars'>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </div>
                            <div className='price'>
                                <h3>$55</h3>
                                <span><FontAwesomeIcon icon= {faCartShopping}/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*banner*/}
            <section id='banner'>
                <h4>repair services</h4>
                <h2>up to <span>70% off</span> - all t-shirts & accessories</h2>
                <button>explore more</button>
            </section>

            {/*New arrivals*/}
            <section id = 'product'>
                <h1 className='product-title'>new arrivals</h1>
                <p className='product-paragraph'>summer collection new modern design</p>
                <div className='pro-container'>
                    <div className='product'>
                        <img src = {require('../../assets/products/n1.jpg')}/>
                        <div className='product-details'>
                            <span>adidas</span>
                            <h4>cartoon astronut T-shirt</h4>
                            <div className='stars'>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </div>
                            <div className='price'>
                                <h3>$75</h3>
                                <span><FontAwesomeIcon icon= {faCartShopping}/></span>
                            </div>
                        </div>
                    </div>
                    <div className='product'>
                        <img src = {require('../../assets/products/n2.jpg')}/>
                        <div className='product-details'>
                            <span>adidas</span>
                            <h4>cartoon astronut T-shirt</h4>
                            <div className='stars'>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </div>
                            <div className='price'>
                                <h3>$60</h3>
                                <span><FontAwesomeIcon icon= {faCartShopping}/></span>
                            </div>
                        </div>
                    </div>
                    <div className='product'>
                        <img src = {require('../../assets/products/n3.jpg')}/>
                        <div className='product-details'>
                            <span>adidas</span>
                            <h4>cartoon astronut T-shirt</h4>
                            <div className='stars'>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </div>
                            <div className='price'>
                                <h3>$73</h3>
                                <span><FontAwesomeIcon icon= {faCartShopping}/></span>
                            </div>
                        </div>
                    </div>
                    <div className='product'>
                        <img src = {require('../../assets/products/n4.jpg')}/>
                        <div className='product-details'>
                            <span>adidas</span>
                            <h4>cartoon astronut T-shirt</h4>
                            <div className='stars'>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </div>
                            <div className='price'>
                                <h3>$56</h3>
                                <span><FontAwesomeIcon icon= {faCartShopping}/></span>
                            </div>
                        </div>
                    </div>
                    <div className='product'>
                        <img src = {require('../../assets/products/n5.jpg')}/>
                        <div className='product-details'>
                            <span>adidas</span>
                            <h4>cartoon astronut T-shirt</h4>
                            <div className='stars'>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </div>
                            <div className='price'>
                                <h3>$45</h3>
                                <span><FontAwesomeIcon icon= {faCartShopping}/></span>
                            </div>
                        </div>
                    </div>
                    <div className='product'>
                        <img src = {require('../../assets/products/n6.jpg')}/>
                        <div className='product-details'>
                            <span>adidas</span>
                            <h4>cartoon astronut T-shirt</h4>
                            <div className='stars'>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </div>
                            <div className='price'>
                                <h3>$50</h3>
                                <span><FontAwesomeIcon icon= {faCartShopping}/></span>
                            </div>
                        </div>
                    </div>
                    <div className='product'>
                        <img src = {require('../../assets/products/n7.jpg')}/>
                        <div className='product-details'>
                            <span>adidas</span>
                            <h4>cartoon astronut T-shirt</h4>
                            <div className='stars'>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </div>
                            <div className='price'>
                                <h3>$68</h3>
                                <span><FontAwesomeIcon icon= {faCartShopping}/></span>
                            </div>
                        </div>
                    </div>
                    <div className='product'>
                        <img src = {require('../../assets/products/n8.jpg')}/>
                        <div className='product-details'>
                            <span>adidas</span>
                            <h4>cartoon astronut T-shirt</h4>
                            <div className='stars'>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </div>
                            <div className='price'>
                                <h3>$57</h3>
                                <span><FontAwesomeIcon icon= {faCartShopping}/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*sm-banner*/}
            <section id='sm-banner'>
                <div className='row sm-banner-row'>
                    <div className='col-lg-5 col-md-12 first-row-left'>
                        <p>crazy deals</p>
                        <h1>buy 1 get 1 free</h1>
                        <p>the best classic dress is on sale at cara</p>
                        <button>laern more</button>
                    </div>
                    <div className='col-lg-5 col-md-12 first-row-right'>
                        <p>spring/summer</p>
                        <h1>upcomming season</h1>
                        <p>the best classic dress is on sale at cara</p>
                        <button>laern more</button>
                    </div>
                </div>
                <div className='row sm-banner-row'>
                    <div className='col-lg-3 second-row-left'>
                        <h1>season sale</h1>
                        <h3>winter collection -50% off</h3>
                    </div>
                    <div className='col-lg-4 second-row-middle'>
                        <h1>new footwear collection</h1>
                        <h3>spring/summer 2022</h3>
                    </div>
                    <div className='col-lg-3 second-row-right'>
                        <h1>season sale</h1>
                        <h3>new trendy prints</h3>
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

export default Header