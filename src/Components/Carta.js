import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import './card.css'
import { addCart } from '../Redux/actions';


const Card = ({data}) => {

  const dispatch = useDispatch()
  
  const onClick = (e)=>{
    dispatch(addCart (data))
  }
    
  console.log(data)

  return (
    <div className="container3">
  <div className="card">
    <div className="imgBx">
      <img src={data.image}/>
    </div>
    <div className="contentBx">
      <h2>{data.name}</h2>
      <div className="size">
        <h3>Size :</h3>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
      </div>
       <div className="color">
        <h3>Precio : {data.price}</h3>
       
      </div> 
      <button onClick={onClick}>   <AiOutlineShoppingCart  /> agregar al Carrito</button>
    </div>
  </div>
</div>
  )
}

export default Card