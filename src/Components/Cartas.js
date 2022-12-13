import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import Carta from './Carta'
import {traerProductos} from '../Redux/actions'
import { useAuth0 } from "@auth0/auth0-react";
export default function Cartas(){
   
    const dispatch = useDispatch()
    const AllProductos = useSelector((state)=>state.product)
    const {isAuthenticated ,getAccessTokenSilently } = useAuth0();
   

    useEffect( async() => {
      if(!isAuthenticated)return;
      const domain = "dev-tsvpp07v3bagspkr.us.auth0.com";
      const accessToken = await getAccessTokenSilently({
        audience: `https://${domain}/api/v2/`,
        scope: "read:current_user",
      });
      dispatch(traerProductos(accessToken))
      },[dispatch,isAuthenticated])

      
      
  return (

    <>
          {
            AllProductos.length > 0 ? AllProductos.map((el)=>{
             return   <Carta data={el} /> 
            }): <h2>No se encontro Nada</h2>
            }
    </>     
      
  )
}



