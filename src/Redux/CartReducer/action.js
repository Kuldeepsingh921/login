import axios from "axios";
import { ADD_TO_CART, GET_CART_ITEM } from "./actionTypes";

export const addToCart = (item)=>async(dispatch) => {
  // Complete add to cart store functionality
  const res=await axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart`,item)
  dispatch({type:ADD_TO_CART,payload:res.data})
};

export const getCartItems=()=>async(dispatch)=>{
 
    const res=await axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart`)
    console.log("aciton",res.data)
  dispatch({type:GET_CART_ITEM,payload:res.data})
 
}
// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.addToCart = addToCart;
}
