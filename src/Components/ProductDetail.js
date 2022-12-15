import React ,{useState}from 'react'
import "./ProductDetail.css"
import { addCart } from '../Redux/actions';
import { useDispatch } from 'react-redux';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { traerProductos } from '../Redux/actions';


const ProductDetail = ({data,id}) => {

    const dispatch = useDispatch()
    const[quantity, setQuantity] = useState(1)
    const [stars,setStars]=useState(5);
    const {user,getAccessTokenSilently}=useAuth0()
   let productTocart= {
        id: data.id,
        title: data.name,
        currency_id: "ARS",
        picture_url: data.image,
        description: data.description,
        quantity,
        unit_price: data.price

    }
    const onClickPlus=(e)=>{
        if(quantity<data.stock.cantidad)
        setQuantity(quantity+1)
    }
    const onClickMinus=(e)=>{
        if(quantity> 0){
            setQuantity(quantity-1)
        }
       
    }

    const onClick = (e)=>{
   
      dispatch(addCart (productTocart))
    }
  return (<>
    <div id="containerDetails">	
	
	<div className="product-details">
		
	<h1>{data.name}</h1>
	<span className="hint-star star">
		<i className="fa fa-star" aria-hidden="true"></i>
		<i className="fa fa-star" aria-hidden="true"></i>
		<i className="fa fa-star" aria-hidden="true"></i>
		<i className="fa fa-star" aria-hidden="true"></i>
		<i className="fa fa-star-o" aria-hidden="true"></i>
	</span>
			
                <p className="information">{data.description}.</p>
                <b> stock : {data.stock.cantidad}</b>
<div className="control">
	
	<button className="btn" onClick={onClick}> >
	 <span className="price">${data.price}</span>
   <span className="shopping-cart">  <AiOutlineShoppingCart className="fa fa-shopping-cart"/></span>
   <span className="buy">Get now</span>
 </button>
<br/>
<div className='inputStock' >
<div  onClick={onClickMinus}>	
 <AiOutlineMinus  className='Minus'/>	
 </div>
 <input className='inputST' type="text" value={quantity}/>
 <div onClick={onClickPlus} >	
<AiOutlinePlus className='Plus'/>
</div >
</div>
 
	
</div>
			
</div>
	
<div className="product-image">
	
	<img src={data.image} alt=""/>
	

{/*<div className="info">
	<h2> Description</h2>
	<ul>
		<li><strong>Height : </strong>5 Ft </li>
		<li><strong>Shade : </strong>Olive green</li>
		<li><strong>Decoration: </strong>balls and bells</li>
		<li><strong>Material: </strong>Eco-Friendly</li>
		
	</ul>
            </div>*/}
    
</div>
</div>

  <div>
    <img className='star-image' src={stars<1?'https://upload.wikimedia.org/wikipedia/commons/archive/b/b0/20120722205312%21Star-.svg':'https://upload.wikimedia.org/wikipedia/commons/archive/6/63/20070316213818%21Star%2A.svg'} onClick={()=>{setStars(1)}} />
    <img className='star-image' src={stars<2?'https://upload.wikimedia.org/wikipedia/commons/archive/b/b0/20120722205312%21Star-.svg':'https://upload.wikimedia.org/wikipedia/commons/archive/6/63/20070316213818%21Star%2A.svg'} onClick={()=>{setStars(2)}} />
    <img className='star-image' src={stars<3?'https://upload.wikimedia.org/wikipedia/commons/archive/b/b0/20120722205312%21Star-.svg':'https://upload.wikimedia.org/wikipedia/commons/archive/6/63/20070316213818%21Star%2A.svg'} onClick={()=>{setStars(3)}} />
    <img className='star-image' src={stars<4?'https://upload.wikimedia.org/wikipedia/commons/archive/b/b0/20120722205312%21Star-.svg':'https://upload.wikimedia.org/wikipedia/commons/archive/6/63/20070316213818%21Star%2A.svg'} onClick={()=>{setStars(4)}} />
    <img className='star-image' src={stars<5?'https://upload.wikimedia.org/wikipedia/commons/archive/b/b0/20120722205312%21Star-.svg':'https://upload.wikimedia.org/wikipedia/commons/archive/6/63/20070316213818%21Star%2A.svg'} onClick={()=>{setStars(5)}} />
  </div>
  <button className='rate-button' on onClick={async()=>{
    var token=await getAccessTokenSilently()
    await axios.post("https://pf-backend-production-1e5b.up.railway.app/product/rate",{id,stars,email:user?.email},{headers:{Authorization : `Bearer ${token}`}})
    dispatch(traerProductos(token))
  }}>rate</button>
  </>


  )
}

export default ProductDetail