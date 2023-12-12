import React from 'react'
import './nav.css';

function Nav() {
  return (
    <nav className="navbarsh wg:green cg sticky">
        <ul id="main-nav" className="navlinks">
            <li className="cg" id="navlink">Home</li>
            <li className="cg" id="navlink">Learn To Play</li>
            <li className="cg" id="navlink">News</li>
            <li className="cg" id="navlink">Store</li>
        </ul>
        <ul id="sec-nav" className="navlinks">
            <li className="">Account</li>
            <li className="">Support</li>
        </ul>
    </nav>
  )
}

export {
    Nav
}