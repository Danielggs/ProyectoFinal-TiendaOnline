import axios from 'axios'
import { useDispatch } from 'react-redux';

export function traerProductos(){
    return async(dispatch)=>{
        let product = await axios("http://localhost:3002/product")
        console.log(product)
      return  dispatch({
            type:"GET_PRODUCT",
            payload: product.data})
    }

}



export function crearProducto(payload){
    return async()=>{
      const response = await axios.post("http://localhost:3002/product",payload)
      console.log(response)
      return response
    }
    
}

export function addCart(data){
    return async(dispatch)=>{
      return  dispatch({
        type:"ADD_CART",
        payload: data})
    }
}

export function RemoveToCart(id){
  return async(dispatch)=>{
    return  dispatch({
      type:"REMOVE_TO_CART",
      payload: id})
  }
}
