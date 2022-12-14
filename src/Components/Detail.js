import React ,{useEffect, useState} from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import ProductDetail from './ProductDetail';
import {findByID } from'../Redux/actions';


const Detail = (props) => {

  var id=(props.match.params.id)
 const dispatch = useDispatch()
 var data = useSelector((state) => state.productDetail)
 useEffect(()=>{
  dispatch(findByID(id));
},[dispatch]  )

console.log("en el componenete ",data)

  return (
    <div>
      {  
        data.length > 0 ?
        <ProductDetail data={data[0]}/>
       :<div><h2>Cargando </h2></div>

    
      
      }
    </div>
  )
}

export default Detail