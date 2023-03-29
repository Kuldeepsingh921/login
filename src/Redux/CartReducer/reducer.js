import { ADD_TO_CART, GET_CART_ITEM } from "./actionTypes";

const initState={
    cart:[]
}

export const cartReducer=(state=initState,{type,payload})=>{
    switch(type){
       
        case ADD_TO_CART:{
            return {
                isLoading:false,
                cart:[...state.cart,payload]
            }
        }
        case GET_CART_ITEM:{
            return {
                ...state,
                isLoading:false,
                cart:payload
            }
        }
         default:{
            return state;
        }
    }
}

