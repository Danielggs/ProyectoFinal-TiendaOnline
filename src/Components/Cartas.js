import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import Carta from './Carta'
import {traerProductos} from '../Redux/actions'

export default function Cartas(){
   
    const dispatch = useDispatch()
    const AllProductos = useSelector((state)=>state.product)

   

    useEffect( () => {
      dispatch(traerProductos())
      },[dispatch])

      
      
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



