import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartReducer/action";

export const ProductCard = ({brand,category,discription,price,rating,stock,title,discountPercentage,thumbnail,images,el}) => {
  const dispatch=useDispatch()
  const handleAddToCart=()=>{
    dispatch(addToCart(el))
  }
  return (
    <div className="product-card">
      {/* - Every product card will have a `add to cart` button with class `add-to-cart`
       - Show image in image tag with class `product-image` 
       - Show title with class `product-title` 
       - Show brand in p tag with class `product-brand` 
       - Show price in p tag with class `product-price` 
       - Show discount in p tag with class `product-discount` 
       * Do not add any extra text, only response values should be present * 
       * For example `Title:"iPhone"` or `Discount: 10.5%` will not work * */}
       <img className="product-image" src={images[0]} alt="" />
       <h5 className="product-title">{title}</h5>
       <p className="product-brand">{brand}</p>
       <p className="product-price">{price}</p>
       <p className="product-discount">{price*discountPercentage}</p>
       <button className="add-to-cart" onClick={handleAddToCart}>add to cart</button>
       
    </div>
  );
};
