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
     
      return response
    }
    
}
export function search(str){
  return {
    type:"SEARCH",
    payload:str
  }
}
export function deleteFilter(tipo){
  return{
    type:"DELETE_FILTRO",
    payload:tipo
  }
}
export function addFilter(tipo){
  return{
    type:"ADD_FILTRO",
    payload:tipo
  }
}

export function addCart(data,email){
    return async(dispatch)=>{
      return  dispatch({
        type:"ADD_CART",
        payload: data,email})
    }
} 

export function RemoveToCart(id,email){
  return async(dispatch)=>{
    return  dispatch({
      type:"REMOVE_TO_CART",
      payload: id,email})
  }
}

export function CrearRef(cart,token){
  return async(dispatch)=>{
    const response = await axios.post("https://pf-backend-production-1e5b.up.railway.app/mc/generar",cart,{headers:{Authorization : `Bearer ${token}`}})

    return  dispatch({
      type:"PREF",
      payload: response.data})
	}
  }

  
export function findByID(id){
  return async(dispatch)=>{
    return  dispatch({
      type:"FIND_BY_ID",
      payload: id})
  }
}

export function updateProduct(payload,token) {
  return async function (dispatch) {
      const data = await axios.put(`http://localhost:3002/product`, payload,{headers:{Authorization : `Bearer ${token}`}})
      return dispatch({ type: "PRODUCT_UPDATE", payload: data})
  }}