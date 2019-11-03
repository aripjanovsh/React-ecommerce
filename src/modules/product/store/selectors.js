import {createSelector} from 'reselect';
import {getCartItemsId} from "../../shopping-cart/store/selectors";

export const getAllProducts = (state) => state.product.get('items');

export const getAllProductWithInCart = createSelector(
    getAllProducts,
    getCartItemsId,
    (products, cartItemsId) => {
        return products.map((product) => {
            return product.set('inCart', cartItemsId.indexOf(product.get('id')) !== -1);
        })
    }
);

export const getProductById = createSelector(
    getAllProducts,
    products => productId => products.find(product => product.get('id') === productId)
);
