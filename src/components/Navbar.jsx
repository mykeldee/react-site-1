import React from 'react'
import reactLogo from '../assets/react.svg'
import '../style.css'

const Navbar = () => {
  return (
    <nav>
        <img src={reactLogo} alt="React logo" className='nav--logo' />
        <h3 className='nav--logo_text'>React Facts</h3>
        <h4 className='nav--title'>React Course - Project 1</h4>
    </nav>
  )
}

export default Navbar