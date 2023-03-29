import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

export const login = (creds)=>async(dispatch) => {
  // Complete login Functionality
  dispatch({type:LOGIN_REQUEST})
  try{
   let res= await axios.post(`https://reqres.in/api/login`,creds)
   dispatch({type:LOGIN_SUCCESS,payload:res.data.token})
  }   
  catch(err){
   dispatch({type:LOGIN_FAILURE})
  } 
};


// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.login = login;
}
