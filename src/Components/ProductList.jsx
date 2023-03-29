import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ProductReducer/action";
import { ProductCard } from "./ProductCard";
export const ProductList = () => {
  const products=useSelector((store)=>store.products.products)
  const dispatch=useDispatch()
  console.log(products)

  useEffect(()=>{
    dispatch(getProducts())
  },[])
  return (
    <div data-testid="product-list" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"10px",margin:"auto",width:"80%"}}>
      {/* Map through products with ProductCard component  */}
      {products?.map((el)=>
      <ProductCard key={el.id} {...el} el={el}/>
      )}
    </div>
  );
};
