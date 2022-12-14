import React from 'react'
import './card.css'
import { Link } from "react-router-dom";


const Card = ({data}) => {

  
 


  return (
    <div className="container3">
  <div className="card">
    <div className="imgBx">
      <img src={data.image}/>
    </div>
    <div className="contentBx">
      <h2>{data.name}</h2>
    
       <div className="color">
        <h3>Precio : {data.price}</h3>
        
      </div > 
      
      <Link  to={`/detail/${data.id}`} >
             
             detalles
     </Link>
    </div>
   
  </div>
</div>
  )
}

export default Card