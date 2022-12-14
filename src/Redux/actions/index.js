import axios from 'axios'
import { useDispatch } from 'react-redux';

export function traerProductos(token){
    return async(dispatch)=>{
        let product = await axios("https://pf-backend-production-1e5b.up.railway.app/product",{headers:{Authorization : `Bearer ${token}`}})
        console.log(product)
      return  dispatch({
            type:"GET_PRODUCT",
            payload: product.data})
    }

}

export function paginarProductos(page){
  return{
    type:"PAGINAR_PRODUCTOS",
    payload:page
  }
}

export function crearProducto(payload,token){
  return async()=>{
      const response = await axios.post("https://pf-backend-production-1e5b.up.railway.app/product",payload,{headers:{Authorization : `Bearer ${token}`}})
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
