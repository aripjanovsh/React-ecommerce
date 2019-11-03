import {GET_PRODUCT_REQUESTED, GET_PRODUCT_LOADED, GET_PRODUCT_ERROR} from './actionTypes';

const getProductRequested = () => {
    return {
        type: GET_PRODUCT_REQUESTED
    };
};

const getProductLoaded = (newProduct) => {
    return {
        type: GET_PRODUCT_LOADED,
        payload: newProduct
    };
};

const getProductError = (error) => {
    return {
        type: GET_PRODUCT_ERROR,
        payload: error
    };
};

const fetchProduct = (apiService) => () => (dispatch) => {
    dispatch(getProductRequested());
    apiService.getProducts()
        .then((data) => dispatch(getProductLoaded(data)))
        .catch((err) => dispatch(getProductError(err)));
};

export {
    fetchProduct
};
