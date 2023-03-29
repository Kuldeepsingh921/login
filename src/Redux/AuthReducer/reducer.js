import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";


const token=localStorage.getItem("token")
export const authInitalState = {
  isLoading: false,
  token:token || "",
  isAuth:token?true : false,
  isError: false,
};

export const authReducer = (state = authInitalState,{type,payload}) => {
  switch(type){
    case LOGIN_REQUEST:{
      return{
        ...state,
        isLoading:true,
        isError:false
      }
    }
    case LOGIN_FAILURE:{
      return{
        ...state,
        isLoading:false,
        isError:true
      }
    }
    case LOGIN_SUCCESS:{
      localStorage.setItem("token",JSON.stringify(payload))
      return{
        ...state,
       isAuth:true,
       token:payload
      }
    }
    
    default:{
      return state
    }
  }
};
