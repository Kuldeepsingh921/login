import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../Redux/CartReducer/action";


export const CartPage = () => {
 const cartItems=useSelector((store)=>store.cart.cart)
 const dispatch=useDispatch()

 useEffect(()=>{
 dispatch(getCartItems())
 },[])
 console.log("cart",cartItems);
  return <div data-testid="cart-list"style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"10px",margin:"auto",width:"80%"}}>
    {/* Map through cart store  */}
    {cartItems?.map((el)=>
    <div key={el.id} >
      <img className="product-image" src={el.images[0]} alt="" />
       <h5 className="product-title">{el.title}</h5>
       <p className="product-brand">{el.brand}</p>
       <p className="product-price">{el.price}</p>
       <p className="product-discount">{el.price*el.discountPercentage}</p>
    </div>
    )}
    </div>;
};
