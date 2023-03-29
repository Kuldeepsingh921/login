import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {
  const {isAuth}=useSelector((store)=>store.auth)

  console.log(isAuth);
  if(isAuth){
    return children;
  }
  else{
    return <Navigate to={'/login'} />
  }
};
