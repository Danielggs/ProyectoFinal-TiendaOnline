import React from 'react'
import Cartas from './Cartas.js'
import { useSelector,useDispatch } from 'react-redux'
import { paginarProductos } from '../Redux/actions/index.js'
import SearchBar from "./searchBar"
import './Home.css'


const Home = () => {
  const dispatch = useDispatch()
  const AllProductos = useSelector((state)=>state.productPaginate)
  const CantidadProductos=useSelector(state=>state.product.length)
  return (
    <div className='container2' >
      <SearchBar/>
      <div  className='cardContainer'>
        <Cartas/>
        {
          AllProductos.length > 0 ?(function(){
            let r=[]
            for(let i=0;i<Math.ceil(CantidadProductos/8);i++){
              r.push(<button onClick={()=>{
                  dispatch(paginarProductos(i))
                }} >{i+1}</button>)
            }
            return r;
          }())
          :null
        }
      </div>
    </div>
  )
}

export default Home