import React from 'react'
import './Header.css'
import troll_face from "./images/troll_face.png"

const Header = () => {
  return (
    <header className='header'>
        <img src={troll_face} alt='troll_face' className='header_image' />
        <h1 className='header_title'>Meme Generator</h1>
        <h4 className='header_project'>React Course - Project 3</h4>
    </header>
  )
}

export default Header
