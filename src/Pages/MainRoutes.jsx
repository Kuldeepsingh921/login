import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage";
import { CartPage } from "./CartPage";
import { Login } from "./Login";
import { PrivateRoute } from "../Components/PrivateRoute";
export const MainRoutes = () => {
  return (
    <Routes>
      {/* Provide all Routes here */}
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
      <Route path="/" element={<Homepage />}/>
      <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
  );
};
