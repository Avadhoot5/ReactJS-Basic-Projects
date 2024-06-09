import React from 'react'
import './App.css'

function Hero() {
  return (
    <div>
        <main className='hero container'>
            <div className="hero-content">
                <h1>YOUR FEET 
                    DESERVE
                    THE BEST</h1>
                <p>
                YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className="shop-category">
                    <button className='shop-button'>Shop Now</button>
                    <button className='cat-button'>Category</button>
                </div>
                <div className="shopping">
                    <p>Also Available On</p>
                    <div className="brand-shop">
                    <img src="/images/shops.png" alt="flipkart amazon" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/shoe_image.png" alt="shoeImage"/>
            </div>
        </main>
    </div>
  )
}


export default Hero;