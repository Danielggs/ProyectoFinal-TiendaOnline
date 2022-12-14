import { useState } from "react";
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { deleteFilter,addFilter,paginarProductos,search } from "../Redux/actions";
import "./searchBar.css"
function SearchBar(){
    const filter=useSelector(e=>e.filter)
    
    
    const categories=useSelector(e=>e.all_product.map(p=>p.category))


    const dispatch=useDispatch();
    const [filter_category,set_filter_category]=useState("category") 
    const [filter_value,set_filter_value]=useState("camisa") 
    const [filter_value_modifier,set_filter_value_modifier]=useState("=") 
    return(<div>
        <input type="text" placeholder="search" onChange={(e)=>{
            e.preventDefault();
            dispatch(search(e.target.value))
            dispatch({type:"FILTRAR"})
        }}/>
        
        
        <select onChange={(e)=>{
            e.preventDefault();
            set_filter_category(e.target.value)
        }}>
            <option value="category">category</option>
            <option value="price">price</option>
        </select >
        {
            filter_category=="category"?<select onChange={(e)=>{
                e.preventDefault();
                set_filter_value(e.target.value)
            }}>{
                categories.map((e)=>{
                    return <option value={e}>{e}</option>
                })
            }
            </select>
            :<select onChange={(e)=>{
                e.preventDefault();
                set_filter_value_modifier(e.target.value);
            }}>
                <option value="=">igual a</option>
                <option value=">">mayor a</option>
                <option value="<">menor a</option>
            </select>
        }        
        {
            filter_category=="price"?<input type="number" placeholder="cantidad" onChange={(e)=>{
                e.preventDefault()
                set_filter_value(filter_value_modifier+e.target.value);
                console.log(filter_value_modifier+e.target.value);
            }} />
            :null
        }







        <button onClick={()=>{
            dispatch(addFilter({type:filter_category,value:filter_value}))
            dispatch({type:"FILTRAR"})
            dispatch(paginarProductos(0))

        }}>add filter</button>
        
        <div className="filtros">
        {
            filter.map(e => {
                return <span className="filtro">{e.type+":"+e.value}<button className="filter-button" onClick={()=>{
                    dispatch(deleteFilter(e))
                    dispatch({type:"FILTRAR"})
                    dispatch(paginarProductos(0))
                }}>x</button> </span>
            })
        }
        </div>
    </div>)
}
export default SearchBar