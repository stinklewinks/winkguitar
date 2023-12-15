import React from 'react'
import './nav.css';
import 'berilliumcss/css/text.css';

function Nav() {
  return (
    <nav className="navbar wg:blue cg">
        <ul id="main-nav" className="navlinks">
            <li className="cg" id="navlink">Home</li>
            <li className="cg" id="navlink">Learn To Play</li>
            <li className="cg" id="navlink">News</li>
            <li className="cg" id="navlink">Store</li>
        </ul>
        <ul id="sec-nav" className="navlinks">
            <li className="text:white">Account</li>
            <li className="text:white">Support</li>
        </ul>
    </nav>
  )
}

export {
    Nav
}