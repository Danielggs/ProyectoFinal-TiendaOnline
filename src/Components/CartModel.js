import React from 'react'
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import{ RemoveToCart}  from '../Redux/actions'
import './CartModel.css'


const CartModel = ({items}) => {
    const dispatch = useDispatch()


    const handleClickD = ()=>{
        dispatch(RemoveToCart (items.id))
        console.log(items)

      }
 

  return (
    <>
    <div className='cartContainer'>
        <p> carrito</p>
        <div>
            <div>
                <img className='cartImage' src={items.picture_url} alt='img not found'/>
                <div>
                    <p>{items.title}</p>
                    <p>${items.unit_price} X {items.quantity}- cantidad <span>total</span></p>
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