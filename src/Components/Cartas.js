import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import Carta from './Carta'
import {traerProductos,paginarProductos} from '../Redux/actions'
import { useAuth0 } from "@auth0/auth0-react";
import { functionExpression } from '@babel/types';
export default function Cartas(){
   
    const dispatch = useDispatch()
    const AllProductos = useSelector((state)=>state.productPaginate)
    const CantidadProductos=useSelector(state=>state.product.length)
    const {isAuthenticated ,getAccessTokenSilently,isLoading } = useAuth0();
   

    useEffect( async() => {
      if(isAuthenticated){
        const domain = "dev-tsvpp07v3bagspkr.us.auth0.com";
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });
        dispatch(traerProductos(accessToken),)
        
    }
      },[dispatch,isAuthenticated])
      useEffect(()=>{
        dispatch(paginarProductos(0))
      },[CantidadProductos])


      
      
  return (

    <>
            {
              AllProductos.length > 0 ? AllProductos.map((el)=>{
              return   <Carta data={el} /> 
              }): <div id = "loader"><div class="spinner"></div></div>
            }
            
    </>     
      
  )
}



