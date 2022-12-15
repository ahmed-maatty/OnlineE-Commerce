import React, { useState } from 'react' ;
import './Shop.css' ;


function Element() {
        const [Count,setCount] = useState(1)
    return (
        <div className='element'>
            <div className='clothes'>
                <div className='mainImg'><img src={require('../../assets/products/f1.jpg')} /></div>
                <div className='smallImgs'>
                    <img src = {require('../../assets/products/f2.jpg')} />
                    <img src = {require('../../assets/products/f3.jpg')} />
                    <img src = {require('../../assets/products/f4.jpg')} />
                    <img src= {require('../../assets/products/f5.jpg')} />
                </div>
            </div>
            <div className='element-content'>
                <h5>home / t-shirt</h5>
                <h2> mens fashion t-shirt </h2>
                <h3 className='elementPrice'>$75</h3>
                <select>
                    <option>select size</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXXL</option>
                </select>
                <div>
                    <span> 
                        <button onClick={() => Count > 0 ? setCount(Count -1) : setCount(Count)} className = "prevnext" >-</button>
                        <input type={'number'} value ={Count}/>
                        <button  onClick={() => setCount(Count + 1)}  className = "prevnext" >+</button></span>
                        <input type={'submit'} value="add to card" />
                </div>
                <div className='productData'>
                    <h3>product detail</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>
    )
}

export default Element