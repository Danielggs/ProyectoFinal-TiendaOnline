import React ,{useState}from 'react'
import "./ProductDetail.css"
import { addCart } from '../Redux/actions';
import { useDispatch } from 'react-redux';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";



const ProductDetail = ({data}) => {

    const dispatch = useDispatch()
    const[quantity, setQuantity] = useState(1)
  
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
  return (
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

  )
}

export default ProductDetail