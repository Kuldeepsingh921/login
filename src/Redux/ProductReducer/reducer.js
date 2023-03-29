import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes";

const initState={
    isLoading:false,
    isisError:false,
    products:[]
}
export const productReducer=(state=initState,{type,payload})=>{
    switch(type){
        case GET_PRODUCT_REQUEST:{
            return {
                ...state,
        isLoading:true,
                isError:false
            }
        }
        case GET_PRODUCT_SUCCESS:{
            return {
                ...state,
        isLoading:false,
                products:payload
            }
        }
        case GET_PRODUCT_FAILURE:{
            return {
                ...state,
        isLoading:false,
                isError:true
            }
        }
         default:{
            return state;
        }
    }
}

