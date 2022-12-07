import React from 'react'
import CartModel from './CartModel'
import { useDispatch, useSelector } from 'react-redux';
import CheckOut  from './CheckOut'



const CartList = () => {

  const cartLS = useSelector((state)=>state.cart)
  let Ncart = JSON.parse(localStorage.getItem('cart'))


    console.log('lista del carrito LS', Ncart)

  return (
    <>
         {
            Ncart.length  > 0 ? Ncart.map((el)=>{
                console.log(cartLS.length)
             return <CartModel items={el}/> 

            }): <h2>El carrito esta vacio</h2>
            }
            <div> </div>
    </>

    
    
  )
}

export default CartList