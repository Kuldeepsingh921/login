 import { authReducer } from "./AuthReducer/reducer";
 import { cartReducer } from "./CartReducer/reducer";
 import {productReducer} from "./ProductReducer/reducer"
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  products:productReducer,
  cart:cartReducer,
  auth:authReducer
});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
