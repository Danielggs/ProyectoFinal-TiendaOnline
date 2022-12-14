import { act } from "react-dom/test-utils";

const initialState={
    all_product:[],
    product:[],

    productPaginate:[],

    category:[],

    cart:[],
    search:"",

    filter:[{type:'category',value:'pantalon'},
            {type:'category',value:'camisa'},
            {type:'category',value:'vestido'},
            {type:'category',value:'llavero'}]
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
                product: [...action.payload], 
                all_product:[...action.payload]
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