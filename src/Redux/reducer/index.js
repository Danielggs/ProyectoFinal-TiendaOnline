
const initialState={
    product:[],
    productPaginate:[],
    productDetail:[],
    linkPago:'',

    cart:[]
}



function rootReducer(state = initialState, action){
    switch (action.type) {

        case "PAGINAR_PRODUCTOS":
            console.log('data action',action.payload)
        return{
                ...state,
                productPaginate:state.product.filter((e,i)=>{
                    return i>=(action.payload*6) &&i<(action.payload*6)+6
                })
            }


        case "GET_PRODUCT" :
           console.log('data action',action.payload)
            return{
                ...state,
                product: action.payload, 
    
            }
            

        case "POST_PRODUCT":
                return{
                   
                    ...state 
                }

                case 'ADD_CART':
           let  Ncarts = JSON.parse(localStorage.getItem('cart'))
                
            if(Ncarts === null){
               Ncarts =[]
               Ncarts.push(action.payload)
          

            }else{
                Ncarts.push(action.payload)
             
            }
            console.log(Ncarts)
            
            localStorage.setItem('cart', JSON.stringify(Ncarts)) 
           
            return{
                ...state,
                cart:Ncarts
            } 

            case "REMOVE_TO_CART":
          let Ncart = JSON.parse(localStorage.getItem('cart'))
          let  Ncartfilter =[Ncart.findIndex(e=>e.id === action.payload)]
          Ncart.splice(Ncartfilter, 1)
          let NewNcart = JSON.stringify(Ncart)
        
          localStorage.setItem('cart',NewNcart ) 

            return{
                ...state,
                cart:Ncart
            } 

         case "PREF":
                console.log( action.payload)
                return{
                    
                    ...state, 
                    linkPago: action.payload
                }
          case "FIND_BY_ID":
                    console.log( action.payload)
                    var allProduct= state.product
                    var findByID = allProduct.filter(el=> el.id.includes(action.payload))
                    console.log(findByID)
                    return{
                         ...state,
                         productDetail:findByID
                    }

        default:
            return state
    }

}

export default rootReducer;