import {fromJS} from 'immutable';
import {ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART , CHANGE_QUANTITY_CART_ITEM} from "./actionTypes";

const initialState = fromJS({
    items: [],
});

const cartReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_ITEM_TO_CART:
            return state.updateIn(['items'], items => items.push(payload.set('quantity', 1)));

        case REMOVE_ITEM_FROM_CART:
            return state.updateIn(['items'], (items) => {
                return items.filter( item => item.get('id') !== payload);
            });

        case CHANGE_QUANTITY_CART_ITEM:
            return state.updateIn(['items', payload.index, 'quantity'], i => {
                const newVal = i + payload.change;
                return newVal > 1 ? newVal : 1;
            });

        default:
            return state;
    }
};

export default cartReducer;