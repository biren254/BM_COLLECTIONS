import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <div className='hero'>
      <div className ="card bg-dark text-white border-0">
        <img src="./images/card.jpg" className ="card-img" alt="Background" height="550px"/>
          
      </div>
      <Products />
    </div>
  )
}

export default Home
