

const initialState={
    product:[],
    all_product:[],
    productPaginate:[],
    productDetail:[],
    linkPago:'',
    cart:[],
    search:"",
    filter:[]
}



function rootReducer(state = initialState, action){
    switch (action.type) {
        case "SEARCH":
            return{
              ...state,  
              search:action.payload
            }
        case "FILTRAR":
            return {
                ...state,
                product:state.all_product.filter((e)=>{
                    var permitir=true;
                    state.filter.forEach((f)=>{
                        switch(f.type){
                            case "category":
                                if(permitir){
                                    permitir=f.value===e.category;
                                }
                            break;
                            case "price":
                                if(permitir){
                                    var value=f.value.substr(1)
                                    if(f.value[0]=='>'){
                                        permitir=e.price>value;
                                    }
                                    if(f.value[0]=='<'){
                                        permitir=e.price<value;
                                    }
                                    if(f.value[0]=='='){
                                        permitir=e.price==value;
                                    }
                                }
                                break;
                        }
                    })
                    return permitir;

                }).filter((e)=>{
                    return e.name.toLocaleLowerCase().includes(state.search.toLocaleLowerCase())
                })
            }
        case "DELETE_FILTRO":
            if(action.payload.type===undefined||action.payload.value===undefined)console.error("error, los fitros debe ser objetos {type:'category',value:'pantalones'} {type:'price',value:'{> o = o <}100'} " ,action.payload)
            return{
                ...state,
                filter:state.filter.filter((e)=>{
                    return !(e.value==action.payload.value&&e.type==action.payload.type)
                })
            }
        case "ADD_FILTRO":
            if(action.payload.type===undefined||action.payload.value===undefined)console.error("error, los fitros debe ser objetos {type:'category',value:'pantalones'} {type:'price',value:'{> o = o <}100'} " ,action.payload)
            return{
                ...state,
                filter:[...state.filter,action.payload]
            }
        

        case "PAGINAR_PRODUCTOS":
       
        return{
                ...state,
                productPaginate:state.product.filter((e,i)=>{
                    return i>=(action.payload*6) &&i<(action.payload*6)+6
                })
            }


        case "GET_PRODUCT" :
          
            return{
                ...state,
                product: [...action.payload], 
                all_product:[...action.payload]
    
            }
            

        case "POST_PRODUCT":
                return{
                   
                    ...state 
                }
        case "PRODUCT_UPDATE":
               return{            
                ...state }

                case 'ADD_CART':
           let  Ncarts = JSON.parse(localStorage.getItem(action.email))
                
            if(Ncarts === null){
               Ncarts =[]
               Ncarts.push(action.payload)
               
          

            }else{
                Ncarts.push(action.payload)
             
            }
          
            
            localStorage.setItem(action.email, JSON.stringify(Ncarts)) 
           
            return{
                ...state,
                cart:Ncarts
            } 

            case "REMOVE_TO_CART":
          let Ncart = JSON.parse(localStorage.getItem(action.email))
          let  Ncartfilter =[Ncart.findIndex(e=>e.id === action.payload)]
          Ncart.splice(Ncartfilter, 1)
          let NewNcart = JSON.stringify(Ncart)
        
          localStorage.setItem(action.email,NewNcart ) 

            return{
                ...state,
                cart:Ncart
            } 

         case "PREF":
              
                return{
                    
                    ...state, 
                    linkPago: action.payload
                }
          case "FIND_BY_ID":
                    
                    var allProduct= state.product
                    var findByID = allProduct.filter(el=> el.id.includes(action.payload))
                    
                    return{
                         ...state,
                         productDetail:findByID
                    }

        default:
            return state
    }

}

export default rootReducer;