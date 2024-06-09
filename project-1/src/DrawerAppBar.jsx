import React from 'react'
import './App.css'

function DrawerAppBar() {
  return (
    <div>
        <nav className='container'>
            <div className="logo">
                <img src="/images/brand_logo.png" alt="logo" />
            </div>
            <div>
                <ul className="nav-section">
                    <li href="#">MENU</li>
                    <li href="#">LOCATION</li>
                    <li href="#">ABOUT</li>
                    <li href="#">CONTACT</li>
                </ul>
            </div>
            <div>
                <button className="login">Login</button>
            </div>
        </nav>
    </div>
  )
}


export default DrawerAppBar;