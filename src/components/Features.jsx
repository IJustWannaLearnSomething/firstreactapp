import React from 'react'
import featureimage from '../images/Frame 19.png'
function Features() {
  return (
    <>
      <div className='f-heading'>
        <h1>Features</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
          commodi.
        </p>
      </div>
      <div id='features'>
        <div className='features-model'>
          <img src={featureimage} alt='feature-img' />
        </div>
        <div className='features-text'>
          <h2>Features</h2>
          <h3>
            This application <span>is art</span>
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
            cupiditate vel! Vitae saepe aut dolore esse alias nihil ratione at,
            similique dignissimos nemo recusandae blanditiis cupiditate deserunt
            accusantium voluptates laudantium odit eos incidunt ipsam amet?
            Natus nesciunt voluptas cumque nostrum?
          </p>
          <button>View More Features</button>
        </div>
      </div>
    </>
  )
}

export default Features
