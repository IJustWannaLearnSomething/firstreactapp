/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Box(props) {
  return (
    <div className='s-box'>
      <div className='s-b-img'>
        <img src={props.image} alt={props.alte} />
      </div>
      <div className='s-b-text'>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae minima
          quis expedita nam ratione? Mollitia pariatur tempora suscipit facilis
          quae reiciendis maiores consequuntur, molestias soluta, voluptates
          harum laborum! Fuga suscipit facilis magni iusto doloribus quibusdam
          unde ducimus mollitia, sint ullam!
        </p>
        <a href='#' className='cv-btn'>
          {props.button}
        </a>
      </div>
    </div>
  )
}

export default Box
