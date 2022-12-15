import React from 'react'
import'./Shop.css';
import './Element';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faStar , faCartShopping , faArrowRightLong} from '@fortawesome/free-solid-svg-icons'



function Shop() {
    return (
        <div>
            <section className='shopheader'>
            <div>
                <h1>#StayHome</h1>
                <p>Save More With Coupons & Up To 70% Off</p>
            </div>
            </section>

            {/*start-product*/}
            <section id = 'product'>
                <div className='pro-container'>
                    <div className='product'>
                        <Link to='/element'><img src = {require('../../assets/products/f1.jpg')}/></Link>
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
                        <Link to='/element'><img src = {require('../../assets/products/f2.jpg')}/></Link>                    
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
                        <Link to='/element'><img src = {require('../../assets/products/f3.jpg')}/></Link>                    
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
                        <Link to='/element'><img src = {require('../../assets/products/f4.jpg')}/></Link>                    
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
                        <Link to='/element'><img src = {require('../../assets/products/f5.jpg')}/></Link>                    
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
                        <Link to='/element'><img src = {require('../../assets/products/f6.jpg')}/></Link>                    
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
                        <Link to='/element'><img src = {require('../../assets/products/f7.jpg')}/></Link>                    
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
                        <Link to='/element'><img src = {require('../../assets/products/f8.jpg')}/></Link>                    
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
                        <Link to='/element'><img src = {require('../../assets/products/n1.jpg')}/></Link>                    
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
                        <Link to='/element'><img src = {require('../../assets/products/n2.jpg')}/></Link>                    
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
                        <Link to='/element'><img src = {require('../../assets/products/n3.jpg')}/></Link>                    
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
                        <Link to='/element'><img src = {require('../../assets/products/n4.jpg')}/></Link>                    
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
                        <Link to='/element'><img src = {require('../../assets/products/n5.jpg')}/></Link>                    
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
                        <Link to='/element'><img src = {require('../../assets/products/n6.jpg')}/></Link>                    
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
                        <Link to='/element'><img src = {require('../../assets/products/n7.jpg')}/></Link>                    
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
                        <Link to='/element'><img src = {require('../../assets/products/n8.jpg')}/></Link>                    
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

            {/*Pagination arrow*/}
            <section className='pagination'>
                <a href='#'>1</a>
                <a href='#'>2</a>
                <a href='#'><FontAwesomeIcon icon={faArrowRightLong} /></a>
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

export default Shop