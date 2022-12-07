import React from 'react'
import Cartas from './Cartas.js'
import './Home.css'


const Home = () => {
  return (
    <div className='container2' >
      <div  className='cardContainer'>
        <Cartas/>
      </div>
    </div>
  )
}

export default Home