import React from 'react'
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import{ RemoveToCart}  from '../Redux/actions'
import './CartModel.css'


const CartModel = ({items}) => {
    const dispatch = useDispatch()


    const handleClickD = ()=>{
        dispatch(RemoveToCart (items.id))
     

      }
     let suma=items.unit_price*items.quantity
 

  return (
    <>
    
        <h1>Carrito</h1>
    <div className='cartContainer'>
        
        <div>
            <div>
                <img className='cartImage' src={items.picture_url} alt='img not found'/>
                <div>
                    <p>{items.title}</p>
                    <p>${items.unit_price} X {items.quantity}- ${suma} cantidad <span>total</span></p>
                </div>
                
                <div onClick={handleClickD}>
                <BsFillTrashFill />
                </div>
              
            </div>
        </div>
    </div>
    
</>
    

    
    
  )
}

export default CartModel