
const initialState={
    product:[],

    category:[],

    cart:[]
}



function rootReducer(state = initialState, action){
    switch (action.type) {
        case "GET_PRODUCT" :
           console.log('data action',action.payload)
            return{
                ...state,
                product: action.payload, 
            }
            

        case "POST_PRODUCT":
                return{
                    //wft4mprxhu2
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

            case "PREFERENCE":
                return{
               
                    ...state 
                }

        default:
            return state
    }

}

export default rootReducer;