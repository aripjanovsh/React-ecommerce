import {fromJS} from "immutable";
import {GET_PRODUCT_REQUESTED, GET_PRODUCT_LOADED, GET_PRODUCT_ERROR} from './actionTypes';

const initialState = fromJS({
    items: [],
    isLoading: true,
    errors: null
});

const productReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case GET_PRODUCT_REQUESTED:
            return state
                .set('items', [])
                .set('isLoading', true)
                .set('errors', null);

        case GET_PRODUCT_LOADED:
            return state
                .set('items', payload)
                .set('isLoading', false)
                .set('errors', null);

        case GET_PRODUCT_ERROR:
            return state
                .set('items', [])
                .set('isLoading', false)
                .set('errors', payload);
        default:
            return state;
    }
};

export default productReducer;
