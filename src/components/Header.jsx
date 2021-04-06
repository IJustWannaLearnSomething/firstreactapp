/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div id='main'>
      <Navbar />
      <div className='name'>
        <h1>
          It's a <span>ReactJS</span> website
        </h1>
        <p className='details'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, id
          officiis? Aliquam voluptatem tempore reprehenderit illum vel sed
          consequatur. Doloribus!
        </p>
        <div className='header-btns'>
          <a href='#' className='cv-btn'>
            Hire Me
          </a>
          <a href='#' className='cv-btn1'>
            Download App
          </a>
        </div>
      </div>
      <div className='arrow'></div>
    </div>
  )
}

export default Header
