import { combineReducers } from 'redux';
import cart from '../modules/shopping-cart/store/reducer';
import product from '../modules/product/store/reducer';

export default combineReducers({
  cart,
  product
});
