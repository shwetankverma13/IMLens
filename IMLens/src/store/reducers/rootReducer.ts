import {combineReducers} from 'redux';
import CartReducer from './cart';
import getProductData from '../../Reducers/GetProductDetails';
const rootReducer = combineReducers({
  CartReducer,
  getProductData,
});
export default rootReducer;
