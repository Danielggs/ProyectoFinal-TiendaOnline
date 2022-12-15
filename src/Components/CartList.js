import React from 'react'
import CartModel from './CartModel'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import CheckOut  from './CheckOut'

import { useAuth0 } from "@auth0/auth0-react";
import { CrearRef ,updateProduct} from '../Redux/actions'




const CartList = () => {
  const dispatch = useDispatch()
  const linkPago = useSelector((state)=>state.linkPago)
  const {getAccessTokenSilently } = useAuth0();
  const cartLS = useSelector((state)=>state.cart)
  const{user}=useAuth0();
  let Ncart = JSON.parse(localStorage.getItem(user?.email))

  if(Ncart === null){
    Ncart = 0
  }
  console.log(Ncart)
 
    let change = Ncart.map((data)=>{
 return  {
        name: data.title,
        quantity:data.quantity
    }}) 


   var myJSONString = JSON.stringify(change);
   let json= {
    data:myJSONString
   }

 const onclickR=async()=>{

  const domain = "dev-tsvpp07v3bagspkr.us.auth0.com";
  const accessToken = await getAccessTokenSilently({
    audience: `https://${domain}/api/v2/`,
    scope: "read:current_user",
  });
  dispatch(CrearRef ({
    Ncart
   },accessToken))}


   const onclickCompra=async()=>{

  const domain = "dev-tsvpp07v3bagspkr.us.auth0.com";
  const accessToken = await getAccessTokenSilently({
    audience: `https://${domain}/api/v2/`,
    scope: "read:current_user",
  });

    dispatch(updateProduct(json,accessToken))
    console.log("se despacho",json)
   }


  return (
    <div className='CartlistContainer'>
         {
            Ncart.length  > 0 ? Ncart.map((el)=>{
                
             return <CartModel items={el}/> 

            } ) : <h2>El carrito esta vacio</h2>
            }

{Ncart.length  > 0 ? <div className='w-24 my-10 mx-10 '>
		<button onClick={onclickR}> Generar Link de pago</button>
    <a href={linkPago} onClick={onclickCompra}  > Link De pago </a>
	</div>: null}
            <div>
	 
	 </div>


            
    </div>

    
    
  )
}

export default CartList