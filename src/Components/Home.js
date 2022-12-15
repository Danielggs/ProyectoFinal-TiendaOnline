import React, { useState } from 'react'
import Cartas from './Cartas.js'
import { useSelector,useDispatch } from 'react-redux'
import { paginarProductos } from '../Redux/actions/index.js'
import SearchBar from "./searchBar"
import './Home.css'


const Home = () => {
  const dispatch = useDispatch()
  const AllProductos = useSelector((state)=>state.productPaginate)
  const CantidadProductos=useSelector(state=>state.product.length)
  const [page,setPage]=useState(0);
  return (
    <>
    <div className='container2' >
      <SearchBar/>
      <div  className='cardContainer'>
        <Cartas/>
       </div>
    </div>
    <div className='page-button-container'>
    {
      AllProductos.length > 0 ?(function(){
        let r=[]
        for(let i=0;i<Math.ceil(CantidadProductos/6);i++){
          r.push(<button className={page==i?"current-page-button":'page-button'} onClick={()=>{
              dispatch(paginarProductos(i))
              setPage(i);
            }} >{i+1}</button>)
        }
        return r;
      }())
      :null
    }
  </div>

  </>
  )
}

export default Home