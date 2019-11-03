import {ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, CHANGE_QUANTITY_CART_ITEM} from './actionTypes';
import {getProductById} from "../../product/store/selectors";

export const addItemToCart = (productId) => (dispatch, getState) => {
    const state = getState();
    return dispatch({
        type: ADD_ITEM_TO_CART,
        payload: getProductById(state)(productId),
    })
};

export const remoteItemFromCart = (productId) => (dispatch) => {
    return dispatch({
        type: REMOVE_ITEM_FROM_CART,
        payload: productId
    })
};

export function changeQuantity(index, change) {
    return {
        type: CHANGE_QUANTITY_CART_ITEM,
        payload: { index, change },
    };
}